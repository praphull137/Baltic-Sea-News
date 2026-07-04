import { TrailStep, TrailStepId } from './types';

const STEP_LABELS: Record<TrailStepId, string> = {
  claim_submitted: 'Claim Submitted',
  evidence_collected: 'Evidence Collected',
  sources_found: 'Sources Found',
  source_ranking: 'Source Ranking Complete',
  ai_analysis: 'AI Analysis Complete',
  verdict_generated: 'Verdict Generated',
};

const STEP_ORDER: TrailStepId[] = [
  'claim_submitted',
  'evidence_collected',
  'sources_found',
  'source_ranking',
  'ai_analysis',
  'verdict_generated',
];

export function createInitialTrail(): TrailStep[] {
  return STEP_ORDER.map((id) => ({ id, label: STEP_LABELS[id], status: 'pending' as const }));
}

// Immutable update helper — the engine calls this after each real pipeline
// stage completes, so the trail always reflects work that actually happened
// (never a canned animation unrelated to the live request).
export function advanceTrail(
  trail: TrailStep[],
  id: TrailStepId,
  status: TrailStep['status'],
  detail?: string
): TrailStep[] {
  return trail.map((step) => (step.id === id ? { ...step, status, detail } : step));
}
