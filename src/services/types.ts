// Shared types for the evidence-based verification pipeline. Kept separate
// from src/lib/verification.ts (which still powers the vision-only
// image/video forensic path — no external evidence sources apply there).

export type VerdictTone = 'positive' | 'negative' | 'caution' | 'neutral';

export type SourceType =
  | 'government'
  | 'international_org'
  | 'news_agency'
  | 'public_broadcaster'
  | 'newspaper'
  | 'fact_check_org'
  | 'research'
  | 'encyclopedia'
  | 'blog'
  | 'social_media'
  | 'unknown';

export interface Source {
  id: string; // stable id derived from domain
  name: string;
  domain: string;
  url: string;
  type: SourceType;
  reliability: number; // 0-100
  logoUrl: string;
  curated: boolean; // false when reliability/type came from a TLD heuristic, not our curated table
}

export interface SourceIntelligenceEntry {
  sourceId: string;
  ownership: string;
  country: string;
  bias: string;
  factCheckHistory: string;
}

export type EvidenceStance = 'supporting' | 'contradicting';

export interface EvidenceItem {
  id: string;
  stance: EvidenceStance;
  summary: string;
  sourceId: string;
  publisher: string;
  publishedDate: string | null;
  url: string;
  reliability: number;
}

export type TrailStepId =
  | 'claim_submitted'
  | 'evidence_collected'
  | 'sources_found'
  | 'source_ranking'
  | 'ai_analysis'
  | 'verdict_generated';

export type TrailStepStatus = 'pending' | 'active' | 'done' | 'skipped';

export interface TrailStep {
  id: TrailStepId;
  label: string;
  status: TrailStepStatus;
  detail?: string;
}

export interface EvidenceVerificationResult {
  kind: 'evidence';
  originalInput: string;
  claim: string;
  verdict: string;
  tone: VerdictTone;
  confidence: number;
  aiAnalysis: string;
  supportingEvidence: EvidenceItem[];
  contradictingEvidence: EvidenceItem[];
  sources: Source[];
  sourceIntelligence: SourceIntelligenceEntry[];
  trail: TrailStep[];
  generatedAt: string;
}

// Raw evidence gathered from search-layer providers, before source scoring
// and before the LLM classifies it as supporting/contradicting.
export interface RawEvidenceItem {
  summary: string;
  sourceName: string;
  domain: string;
  url: string;
  publishedDate: string | null;
  textualRating?: string; // present for Google Fact Check API results
  provider: 'google_fact_check' | 'gnews';
}

export interface EvidenceRetrievalOutcome {
  items: RawEvidenceItem[];
  providersQueried: string[];
  providersSkipped: { provider: string; reason: string }[];
}
