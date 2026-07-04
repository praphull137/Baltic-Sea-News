import { EvidenceRetrievalOutcome, RawEvidenceItem } from './types';

const GOOGLE_FACT_CHECK_KEY = import.meta.env.VITE_GOOGLE_FACTCHECK_API_KEY as string | undefined;
const GNEWS_API_KEY = import.meta.env.VITE_GNEWS_API_KEY as string | undefined;

const domainFromUrl = (url: string): string => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return 'unknown-source';
  }
};

interface GoogleFactCheckClaimReview {
  publisher?: { name?: string; site?: string };
  url?: string;
  title?: string;
  reviewDate?: string;
  textualRating?: string;
}
interface GoogleFactCheckClaim {
  text?: string;
  claimReview?: GoogleFactCheckClaimReview[];
}

// Primary fact-check source. Real, published fact-checks with a rating
// (e.g. "False", "Mostly True") from IFCN-affiliated fact-checkers worldwide.
async function fetchGoogleFactCheck(query: string): Promise<RawEvidenceItem[]> {
  if (!GOOGLE_FACT_CHECK_KEY) return [];

  const url = `https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${encodeURIComponent(
    query
  )}&languageCode=en&key=${GOOGLE_FACT_CHECK_KEY}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Google Fact Check API error (${res.status})`);
  const data = await res.json();
  const claims: GoogleFactCheckClaim[] = data.claims ?? [];

  const items: RawEvidenceItem[] = [];
  for (const claim of claims) {
    for (const review of claim.claimReview ?? []) {
      if (!review.url || !review.publisher?.name) continue;
      items.push({
        summary: review.title?.trim() || claim.text?.trim() || 'Fact-check review (no title provided).',
        sourceName: review.publisher.name,
        domain: review.publisher.site ? review.publisher.site.replace(/^www\./, '') : domainFromUrl(review.url),
        url: review.url,
        publishedDate: review.reviewDate ? review.reviewDate.slice(0, 10) : null,
        textualRating: review.textualRating,
        provider: 'google_fact_check',
      });
    }
  }
  return items;
}

interface GNewsArticle {
  title?: string;
  description?: string;
  url?: string;
  publishedAt?: string;
  source?: { name?: string; url?: string };
}

// News retrieval — real articles, no ratings, so the LLM must judge stance
// from content alone (never inventing what the article says).
async function fetchGNews(query: string): Promise<RawEvidenceItem[]> {
  if (!GNEWS_API_KEY) return [];

  const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(
    query
  )}&lang=en&max=10&sortby=relevance&apikey=${GNEWS_API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`GNews API error (${res.status})`);
  const data = await res.json();
  const articles: GNewsArticle[] = data.articles ?? [];

  return articles
    .filter((a) => a.url && a.title)
    .map((a) => ({
      summary: [a.title, a.description].filter(Boolean).join(' — ').trim(),
      sourceName: a.source?.name || domainFromUrl(a.url as string),
      domain: a.source?.url ? domainFromUrl(a.source.url) : domainFromUrl(a.url as string),
      url: a.url as string,
      publishedDate: a.publishedAt ? a.publishedAt.slice(0, 10) : null,
      provider: 'gnews' as const,
    }));
}

interface WikipediaSearchResult {
  title: string;
  snippet: string;
}

// Background context only — per the platform's editorial policy this is
// NEVER surfaced as supporting/contradicting evidence, only folded into the
// AI's background understanding of the topic.
export async function fetchWikipediaContext(query: string): Promise<string | null> {
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(
      query
    )}&format=json&origin=*&srlimit=2`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    const results: WikipediaSearchResult[] = data.query?.search ?? [];
    if (results.length === 0) return null;
    return results
      .map((r) => `${r.title}: ${r.snippet.replace(/<[^>]+>/g, '')}`)
      .join('\n');
  } catch {
    return null;
  }
}

// Orchestrates the search layer. Runs providers in parallel; a provider
// failing or being unconfigured never blocks the others, and is reported
// honestly in providersSkipped rather than silently backfilled with
// invented data.
export async function retrieveEvidence(query: string): Promise<EvidenceRetrievalOutcome> {
  const providersQueried: string[] = [];
  const providersSkipped: { provider: string; reason: string }[] = [];
  const items: RawEvidenceItem[] = [];

  if (!GOOGLE_FACT_CHECK_KEY) {
    providersSkipped.push({ provider: 'Google Fact Check API', reason: 'VITE_GOOGLE_FACTCHECK_API_KEY not configured' });
  }
  if (!GNEWS_API_KEY) {
    providersSkipped.push({ provider: 'GNews API', reason: 'VITE_GNEWS_API_KEY not configured' });
  }

  const tasks: Promise<void>[] = [];

  if (GOOGLE_FACT_CHECK_KEY) {
    providersQueried.push('Google Fact Check API');
    tasks.push(
      fetchGoogleFactCheck(query)
        .then((r) => { items.push(...r); })
        .catch((err) => {
          providersSkipped.push({ provider: 'Google Fact Check API', reason: err instanceof Error ? err.message : 'request failed' });
        })
    );
  }

  if (GNEWS_API_KEY) {
    providersQueried.push('GNews API');
    tasks.push(
      fetchGNews(query)
        .then((r) => { items.push(...r); })
        .catch((err) => {
          providersSkipped.push({ provider: 'GNews API', reason: err instanceof Error ? err.message : 'request failed' });
        })
    );
  }

  await Promise.all(tasks);

  return { items, providersQueried, providersSkipped };
}
