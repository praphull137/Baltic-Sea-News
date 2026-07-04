import { Source, SourceIntelligenceEntry, SourceType } from './types';

// Priority tiers per the platform's editorial policy. Anything not in the
// curated table below falls back to a conservative TLD-based heuristic —
// never a specific fabricated fact about an outlet we don't actually know.
const RELIABILITY_BY_TYPE: Record<SourceType, number> = {
  government: 100,
  international_org: 95,
  news_agency: 95,
  public_broadcaster: 90,
  fact_check_org: 90,
  newspaper: 85,
  research: 85,
  encyclopedia: 60,
  blog: 40,
  social_media: 20,
  unknown: 50,
};

interface CuratedEntry {
  name: string;
  type: SourceType;
  reliability?: number; // overrides the type default when we have a more specific figure
  ownership: string;
  country: string;
  bias: string;
  factCheckHistory: string;
}

// Real, publicly documented facts about each outlet's ownership/country/bias —
// not generated per-claim. Covers international wires, Baltic/Nordic public
// broadcasters, government/international-org domains, and known fact-check
// organizations relevant to this platform's regional focus.
const CURATED_SOURCES: Record<string, CuratedEntry> = {
  'reuters.com': {
    name: 'Reuters',
    type: 'news_agency',
    reliability: 98,
    ownership: 'Thomson Reuters Corporation',
    country: 'United Kingdom / Canada',
    bias: 'Minimal',
    factCheckHistory: 'Wire service with a dedicated Reuters Fact Check desk; corrections issued transparently.',
  },
  'apnews.com': {
    name: 'Associated Press',
    type: 'news_agency',
    reliability: 98,
    ownership: 'Nonprofit cooperative owned by its member newspapers and broadcasters',
    country: 'United States',
    bias: 'Minimal',
    factCheckHistory: 'Wire service with an AP Fact Check desk; long-standing accuracy record.',
  },
  'afp.com': {
    name: 'Agence France-Presse',
    type: 'news_agency',
    reliability: 96,
    ownership: 'French public-interest press agency (statute-governed, not state-controlled)',
    country: 'France',
    bias: 'Minimal',
    factCheckHistory: 'Runs AFP Fact Check across dozens of languages.',
  },
  'bbc.com': {
    name: 'BBC News',
    type: 'public_broadcaster',
    reliability: 92,
    ownership: 'British Broadcasting Corporation (public, license-fee funded)',
    country: 'United Kingdom',
    bias: 'Minimal / Left-Center (per independent media bias trackers)',
    factCheckHistory: 'Operates BBC Verify; subject to Ofcom editorial standards.',
  },
  'bbc.co.uk': {
    name: 'BBC News',
    type: 'public_broadcaster',
    reliability: 92,
    ownership: 'British Broadcasting Corporation (public, license-fee funded)',
    country: 'United Kingdom',
    bias: 'Minimal / Left-Center (per independent media bias trackers)',
    factCheckHistory: 'Operates BBC Verify; subject to Ofcom editorial standards.',
  },
  'dw.com': {
    name: 'Deutsche Welle',
    type: 'public_broadcaster',
    reliability: 90,
    ownership: "Germany's public international broadcaster, funded by federal tax revenue",
    country: 'Germany',
    bias: 'Minimal',
    factCheckHistory: 'Runs DW Fact Check for European and global disinformation topics.',
  },
  'euronews.com': {
    name: 'Euronews',
    type: 'newspaper',
    reliability: 82,
    ownership: 'Portland Trust / Alpac Capital (private, pan-European ownership consortium)',
    country: 'France (Lyon HQ)',
    bias: 'Minimal / pro-EU institutional framing',
    factCheckHistory: 'General news coverage; no dedicated fact-check unit.',
  },
  'politico.eu': {
    name: 'POLITICO Europe',
    type: 'newspaper',
    reliability: 84,
    ownership: 'Axel Springer SE',
    country: 'Belgium (Brussels HQ)',
    bias: 'Minimal / policy-insider framing',
    factCheckHistory: 'General policy journalism; no dedicated fact-check unit.',
  },
  'ft.com': {
    name: 'Financial Times',
    type: 'newspaper',
    reliability: 88,
    ownership: 'Nikkei Inc.',
    country: 'United Kingdom',
    bias: 'Minimal / Center',
    factCheckHistory: 'General financial and political journalism; strong corrections record.',
  },
  'theguardian.com': {
    name: 'The Guardian',
    type: 'newspaper',
    reliability: 82,
    ownership: 'Scott Trust Limited (nonprofit)',
    country: 'United Kingdom',
    bias: 'Left-Center (per independent media bias trackers)',
    factCheckHistory: 'General journalism with an active corrections & clarifications page.',
  },
  'nytimes.com': {
    name: 'The New York Times',
    type: 'newspaper',
    reliability: 85,
    ownership: 'The New York Times Company (Sulzberger family control)',
    country: 'United States',
    bias: 'Left-Center (per independent media bias trackers)',
    factCheckHistory: 'General journalism with a public corrections policy.',
  },
  'economist.com': {
    name: 'The Economist',
    type: 'newspaper',
    reliability: 85,
    ownership: 'The Economist Group',
    country: 'United Kingdom',
    bias: 'Center / Center-Right on economics',
    factCheckHistory: 'General journalism, publishes unsigned analysis pieces.',
  },
  // Baltic & Nordic public broadcasters
  'lsm.lv': { name: 'Latvian Public Broadcasting (LSM)', type: 'public_broadcaster', reliability: 88, ownership: 'Public broadcaster of Latvia', country: 'Latvia', bias: 'Minimal', factCheckHistory: 'National public broadcaster, state-funded but editorially independent.' },
  'lrt.lt': { name: 'Lithuanian National Radio and Television (LRT)', type: 'public_broadcaster', reliability: 88, ownership: 'Public broadcaster of Lithuania', country: 'Lithuania', bias: 'Minimal', factCheckHistory: 'National public broadcaster; runs LRT Faktai fact-check unit.' },
  'err.ee': { name: 'Estonian Public Broadcasting (ERR)', type: 'public_broadcaster', reliability: 88, ownership: 'Public broadcaster of Estonia', country: 'Estonia', bias: 'Minimal', factCheckHistory: 'National public broadcaster, editorially independent by statute.' },
  'yle.fi': { name: 'Yle', type: 'public_broadcaster', reliability: 90, ownership: 'Public broadcaster of Finland', country: 'Finland', bias: 'Minimal', factCheckHistory: 'National public broadcaster with a dedicated fact-checking desk.' },
  'nrk.no': { name: 'NRK', type: 'public_broadcaster', reliability: 90, ownership: 'Public broadcaster of Norway', country: 'Norway', bias: 'Minimal', factCheckHistory: 'National public broadcaster, editorially independent by statute.' },
  'svt.se': { name: 'Sveriges Television (SVT)', type: 'public_broadcaster', reliability: 90, ownership: 'Public broadcaster of Sweden', country: 'Sweden', bias: 'Minimal', factCheckHistory: 'National public broadcaster, editorially independent by statute.' },
  'dr.dk': { name: 'DR (Danmarks Radio)', type: 'public_broadcaster', reliability: 90, ownership: 'Public broadcaster of Denmark', country: 'Denmark', bias: 'Minimal', factCheckHistory: 'National public broadcaster, editorially independent by statute.' },
  'ruv.is': { name: 'RÚV', type: 'public_broadcaster', reliability: 88, ownership: 'Public broadcaster of Iceland', country: 'Iceland', bias: 'Minimal', factCheckHistory: 'National public broadcaster, editorially independent by statute.' },
  // International organizations
  'who.int': { name: 'World Health Organization', type: 'international_org', reliability: 96, ownership: 'United Nations specialized agency', country: 'International (Geneva HQ)', bias: 'Minimal', factCheckHistory: 'Publishes technical/scientific consensus reports; subject to member-state review.' },
  'un.org': { name: 'United Nations', type: 'international_org', reliability: 95, ownership: 'Intergovernmental organization', country: 'International (New York HQ)', bias: 'Minimal', factCheckHistory: 'Official intergovernmental publications and resolutions.' },
  'nato.int': { name: 'NATO', type: 'international_org', reliability: 93, ownership: 'Intergovernmental military alliance', country: 'International (Brussels HQ)', bias: 'Minimal / alliance-interest framing on defense topics', factCheckHistory: 'Official alliance communications and defense reporting.' },
  'europa.eu': { name: 'European Union (official portal)', type: 'international_org', reliability: 95, ownership: 'European Union institutions', country: 'International (EU)', bias: 'Minimal / pro-EU institutional framing', factCheckHistory: 'Official EU legislation, statistics, and policy publications.' },
  'ec.europa.eu': { name: 'European Commission', type: 'international_org', reliability: 95, ownership: 'European Union executive body', country: 'International (EU)', bias: 'Minimal / pro-EU institutional framing', factCheckHistory: 'Official EU policy and legislative publications.' },
  // Fact-check organizations
  'politifact.com': { name: 'PolitiFact', type: 'fact_check_org', reliability: 90, ownership: 'Poynter Institute', country: 'United States', bias: 'Minimal (independently audited by IFCN)', factCheckHistory: 'Signatory of the International Fact-Checking Network code of principles.' },
  'factcheck.org': { name: 'FactCheck.org', type: 'fact_check_org', reliability: 92, ownership: 'Annenberg Public Policy Center, University of Pennsylvania', country: 'United States', bias: 'Minimal (IFCN signatory)', factCheckHistory: 'Long-running nonpartisan fact-checking project since 2003.' },
  'fullfact.org': { name: 'Full Fact', type: 'fact_check_org', reliability: 91, ownership: 'Independent UK charity', country: 'United Kingdom', bias: 'Minimal (IFCN signatory)', factCheckHistory: "UK's independent fact-checking charity." },
  'snopes.com': { name: 'Snopes', type: 'fact_check_org', reliability: 87, ownership: 'Snopes Media Group', country: 'United States', bias: 'Minimal (IFCN signatory)', factCheckHistory: 'One of the oldest fact-checking sites, focused on viral claims/rumors.' },
  'euvsdisinfo.eu': { name: 'EUvsDisinfo', type: 'fact_check_org', reliability: 88, ownership: 'European External Action Service (EU diplomatic service) task force', country: 'International (EU)', bias: 'Anti-disinformation mandate specifically targeting pro-Kremlin messaging', factCheckHistory: 'Tracks and debunks pro-Kremlin disinformation across Europe since 2015.' },
  'debunk.eu': { name: 'DebunkEU.org', type: 'fact_check_org', reliability: 85, ownership: 'Debunk.org (Lithuania-based NGO)', country: 'Lithuania', bias: 'Minimal / anti-disinformation mandate', factCheckHistory: 'Baltic-focused disinformation analysis using AI-assisted monitoring.' },
  'wikipedia.org': { name: 'Wikipedia', type: 'encyclopedia', reliability: 60, ownership: 'Wikimedia Foundation (nonprofit)', country: 'International', bias: 'Variable by article; community-edited', factCheckHistory: 'Crowd-edited; used here for background context only, never as primary evidence.' },
};

const GOV_TLD_PATTERN = /\.(gov|gouv|gob)(\.[a-z]{2})?$|\.gv\.at$|gov\.[a-z]{2}$/i;
const KNOWN_GOV_DOMAINS = new Set([
  'valitsus.ee', 'riigikogu.ee', 'lrv.lt', 'seimas.lt', 'bundesregierung.de', 'bundestag.de',
  'stm.dk', 'ft.dk', 'regeringen.se', 'riksdagen.se', 'valtioneuvosto.fi', 'eduskunta.fi',
  'regjeringen.no', 'stortinget.no', 'stjornarradid.is', 'althingi.is', 'mfa.gov.lv', 'gov.pl',
]);

const normalizeDomain = (rawDomain: string): string =>
  rawDomain.toLowerCase().replace(/^www\./, '');

const isGovernmentDomain = (domain: string): boolean =>
  GOV_TLD_PATTERN.test(domain) || KNOWN_GOV_DOMAINS.has(domain);

const isEduDomain = (domain: string): boolean => /\.(edu|ac\.[a-z]{2})$/i.test(domain);

const slugify = (domain: string): string => domain.replace(/[^a-z0-9]/gi, '-');

// Resolves a raw domain into a scored Source. Curated entries carry real,
// independently-verifiable facts; anything else gets a transparent
// heuristic estimate rather than an invented specific reliability figure.
export function resolveSource(domain: string, displayNameHint?: string): Source {
  const normalized = normalizeDomain(domain);
  const curated = CURATED_SOURCES[normalized];

  if (curated) {
    return {
      id: slugify(normalized),
      name: curated.name,
      domain: normalized,
      url: `https://${normalized}`,
      type: curated.type,
      reliability: curated.reliability ?? RELIABILITY_BY_TYPE[curated.type],
      logoUrl: `https://www.google.com/s2/favicons?sz=64&domain=${normalized}`,
      curated: true,
    };
  }

  let type: SourceType = 'unknown';
  if (isGovernmentDomain(normalized)) type = 'government';
  else if (isEduDomain(normalized)) type = 'research';

  return {
    id: slugify(normalized),
    name: displayNameHint?.trim() || normalized,
    domain: normalized,
    url: `https://${normalized}`,
    type,
    reliability: RELIABILITY_BY_TYPE[type],
    logoUrl: `https://www.google.com/s2/favicons?sz=64&domain=${normalized}`,
    curated: false,
  };
}

export function getSourceIntelligence(source: Source): SourceIntelligenceEntry {
  const curated = CURATED_SOURCES[source.domain];
  if (curated) {
    return {
      sourceId: source.id,
      ownership: curated.ownership,
      country: curated.country,
      bias: curated.bias,
      factCheckHistory: curated.factCheckHistory,
    };
  }

  const typeNote: Record<SourceType, string> = {
    government: 'Official government domain — treated as a primary-source document.',
    international_org: 'Recognized international-organization domain.',
    news_agency: 'Not in our curated outlet database; classified as a news agency by domain pattern.',
    public_broadcaster: 'Not in our curated outlet database; classified as a public broadcaster by domain pattern.',
    newspaper: 'Not in our curated outlet database; reliability is a conservative estimate.',
    fact_check_org: 'Not in our curated outlet database; classified as a fact-check organization by domain pattern.',
    research: 'Academic/research domain (.edu or equivalent) — not individually vetted by our team.',
    encyclopedia: 'Community-edited reference — background context only, never primary evidence.',
    blog: 'Personal or independent publishing platform — low default reliability.',
    social_media: 'User-generated social platform — lowest default reliability.',
    unknown: 'Domain not in our curated database — reliability is a conservative default, not a specific claim about this outlet.',
  };

  return {
    sourceId: source.id,
    ownership: 'Not independently verified by Baltic Sea News',
    country: 'Unknown',
    bias: 'Unknown',
    factCheckHistory: typeNote[source.type],
  };
}

export const SOURCE_PRIORITY_TABLE = [
  { label: 'Government Sources', score: 100 },
  { label: 'International Organizations', score: 95 },
  { label: 'Reuters / AP / Major Wire Services', score: 95 },
  { label: 'Public Broadcasters', score: 90 },
  { label: 'Fact-Check Organizations', score: 90 },
  { label: 'Major Newspapers', score: 85 },
  { label: 'Research Papers', score: 85 },
  { label: 'Encyclopedic / Background', score: 60 },
  { label: 'Blogs', score: 40 },
  { label: 'Social Media', score: 20 },
];
