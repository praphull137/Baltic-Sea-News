import { askGroqJSON, GroqMessage, GROQ_TEXT_MODEL } from '@/lib/groq';
import { extractClaim } from './claimExtraction';
import { fetchWikipediaContext, retrieveEvidence } from './evidenceRetrieval';
import { resolveSource, getSourceIntelligence } from './sourceScoring';
import { advanceTrail, createInitialTrail } from './timelineGenerator';
import {
  EvidenceItem,
  EvidenceVerificationResult,
  RawEvidenceItem,
  Source,
  SourceIntelligenceEntry,
  TrailStep,
  VerdictTone,
} from './types';

const TONE_BY_VERDICT: Record<string, VerdictTone> = {
  True: 'positive',
  'Partially True': 'caution',
  Misleading: 'caution',
  False: 'negative',
  Unverified: 'neutral',
};

interface RagVerdictJSON {
  verdict?: string;
  confidence?: number;
  aiAnalysis?: string;
  supportingEvidenceIds?: string[];
  contradictingEvidenceIds?: string[];
}

const RAG_JSON_SHAPE = `Respond ONLY with a JSON object of this exact shape, no other text:
{
  "verdict": "True" | "False" | "Misleading" | "Partially True" | "Unverified",
  "confidence": <integer 0-100>,
  "aiAnalysis": "<2-4 sentence analysis: summarize the evidence, compare sources, explain any contradictions, note missing context>",
  "supportingEvidenceIds": ["<id>", "..."],
  "contradictingEvidenceIds": ["<id>", "..."]
}`;

const RAG_SYSTEM_PROMPT = `You are a rigorous, neutral fact-checking analyst for Baltic Sea News, operating inside a retrieval-augmented verification pipeline.

You are given a claim and a numbered list of evidence items already retrieved from real external sources (professional fact-check reviews and/or news articles) — each with an id, source, domain, publish date, URL, and (when available) a professional fact-checker's textual rating.

Rules:
- Reason ONLY over the evidence provided below. Never invent sources, URLs, publishers, or facts that are not present in the evidence list.
- For each evidence item, decide if it supports or contradicts the claim. An item with a textual rating like "False" or "Pants on Fire" CONTRADICTS a claim asserting the statement is true (and a rating like "True"/"Correct" SUPPORTS it) — reason about the direction carefully. For plain news articles with no rating, judge stance from the summary text alone.
- If an evidence item is irrelevant or neutral to the claim, omit its id from both lists entirely — do not force a stance.
- Ground your verdict and confidence strictly in the evidence actually retrieved. If evidence is sparse, thin, or one-sided, say so explicitly in aiAnalysis and lower confidence accordingly — never project false certainty.
- If the evidence list is empty, you MUST return verdict "Unverified", confidence 15 or lower, and an aiAnalysis explaining that no evidence could be retrieved from the configured search providers.

${RAG_JSON_SHAPE}`;

const formatEvidenceForPrompt = (items: (RawEvidenceItem & { id: string })[]): string =>
  items
    .map(
      (item) =>
        `[${item.id}] Source: ${item.sourceName} (${item.domain}) | Published: ${item.publishedDate ?? 'unknown'}${
          item.textualRating ? ` | Fact-check rating: "${item.textualRating}"` : ''
        } | Summary: ${item.summary} | URL: ${item.url}`
    )
    .join('\n');

export interface RunEvidenceVerificationOptions {
  onTrailUpdate?: (trail: TrailStep[]) => void;
}

// Full RAG pipeline: Claim → Search Layer → Evidence Retrieval → Source
// Ranking → RAG Context → LLM Analysis → Verdict. Every step reports real
// progress via onTrailUpdate so the UI can show live status, not a canned
// animation.
export async function runEvidenceVerification(
  rawInput: string,
  options: RunEvidenceVerificationOptions = {}
): Promise<EvidenceVerificationResult> {
  let trail = createInitialTrail();
  const emit = () => options.onTrailUpdate?.(trail);

  trail = advanceTrail(trail, 'claim_submitted', 'active');
  emit();
  const { claim, searchQuery } = await extractClaim(rawInput);
  trail = advanceTrail(trail, 'claim_submitted', 'done', claim);
  emit();

  trail = advanceTrail(trail, 'evidence_collected', 'active');
  emit();
  const [retrieval, wikipediaContext] = await Promise.all([
    retrieveEvidence(searchQuery),
    fetchWikipediaContext(searchQuery),
  ]);
  const skippedNote = retrieval.providersSkipped.length
    ? `Skipped: ${retrieval.providersSkipped.map((p) => p.provider).join(', ')}`
    : undefined;
  trail = advanceTrail(trail, 'evidence_collected', 'done', skippedNote);
  emit();

  const idItems = retrieval.items.map((item, i) => ({ ...item, id: `ev${i + 1}` }));
  trail = advanceTrail(
    trail,
    'sources_found',
    'done',
    `${idItems.length} source${idItems.length === 1 ? '' : 's'} found`
  );
  emit();

  trail = advanceTrail(trail, 'source_ranking', 'active');
  emit();
  const sourceById = new Map<string, Source>();
  for (const item of idItems) {
    if (!sourceById.has(item.domain)) {
      sourceById.set(item.domain, resolveSource(item.domain, item.sourceName));
    }
  }
  const rankedCount = sourceById.size;
  trail = advanceTrail(trail, 'source_ranking', 'done', `${rankedCount} unique source${rankedCount === 1 ? '' : 's'} ranked`);
  emit();

  trail = advanceTrail(trail, 'ai_analysis', 'active');
  emit();

  const messages: GroqMessage[] = [
    { role: 'system', content: RAG_SYSTEM_PROMPT },
    {
      role: 'user',
      content: `CLAIM: ${claim}\n\nBACKGROUND CONTEXT (Wikipedia — general context only, do not cite as evidence):\n${
        wikipediaContext ?? 'none available'
      }\n\nRETRIEVED EVIDENCE (${idItems.length} item${idItems.length === 1 ? '' : 's'}):\n${
        idItems.length > 0 ? formatEvidenceForPrompt(idItems) : 'none — no evidence was retrieved'
      }`,
    },
  ];
  const raw = await askGroqJSON<RagVerdictJSON>(messages, { model: GROQ_TEXT_MODEL, temperature: 0.2, maxTokens: 900 });
  trail = advanceTrail(trail, 'ai_analysis', 'done');
  emit();

  trail = advanceTrail(trail, 'verdict_generated', 'active');
  emit();

  const validIds = new Set(idItems.map((i) => i.id));
  const supportingIds = (raw.supportingEvidenceIds ?? []).filter((id) => validIds.has(id));
  const contradictingIds = (raw.contradictingEvidenceIds ?? []).filter(
    (id) => validIds.has(id) && !supportingIds.includes(id)
  );

  const toEvidenceItem = (id: string): EvidenceItem | null => {
    const item = idItems.find((i) => i.id === id);
    if (!item) return null;
    const source = sourceById.get(item.domain);
    if (!source) return null;
    return {
      id: item.id,
      stance: supportingIds.includes(id) ? 'supporting' : 'contradicting',
      summary: item.summary,
      sourceId: source.id,
      publisher: item.sourceName,
      publishedDate: item.publishedDate,
      url: item.url,
      reliability: source.reliability,
    };
  };

  const supportingEvidence = supportingIds.map(toEvidenceItem).filter((v): v is EvidenceItem => v !== null);
  const contradictingEvidence = contradictingIds.map(toEvidenceItem).filter((v): v is EvidenceItem => v !== null);

  const usedSourceIds = new Set([...supportingEvidence, ...contradictingEvidence].map((e) => e.sourceId));
  const sources = Array.from(sourceById.values()).filter((s) => usedSourceIds.has(s.id));
  const sourceIntelligence: SourceIntelligenceEntry[] = sources.map(getSourceIntelligence);

  const hasEvidence = idItems.length > 0;
  const verdict = hasEvidence ? raw.verdict?.trim() || 'Unverified' : 'Unverified';
  const confidence = hasEvidence
    ? Math.max(0, Math.min(100, Math.round(raw.confidence ?? 40)))
    : Math.max(0, Math.min(20, Math.round(raw.confidence ?? 10)));
  const aiAnalysis =
    raw.aiAnalysis?.trim() ||
    (hasEvidence
      ? 'The assistant did not provide a detailed analysis for this evidence set.'
      : `No evidence could be retrieved for this claim. ${skippedNote ?? 'The configured search providers returned no results.'}`);

  trail = advanceTrail(trail, 'verdict_generated', 'done', verdict);
  emit();

  return {
    kind: 'evidence',
    originalInput: rawInput,
    claim,
    verdict,
    tone: TONE_BY_VERDICT[verdict] ?? 'neutral',
    confidence,
    aiAnalysis,
    supportingEvidence,
    contradictingEvidence,
    sources,
    sourceIntelligence,
    trail,
    generatedAt: new Date().toISOString(),
  };
}
