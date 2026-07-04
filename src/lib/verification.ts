import { askGroqJSON, GroqMessage, GROQ_TEXT_MODEL, GROQ_VISION_MODEL } from './groq';

export type VerdictTone = 'positive' | 'negative' | 'caution' | 'neutral';

export interface VerificationResult {
  verdict: string;
  tone: VerdictTone;
  confidence: number;
  summary: string;
  reasoning: string[];
  caveats: string;
}

interface RawVerdictJSON {
  verdict?: string;
  confidence?: number;
  summary?: string;
  reasoning?: string[];
  caveats?: string;
}

const TONE_BY_VERDICT: Record<string, VerdictTone> = {
  True: 'positive',
  False: 'negative',
  Misleading: 'caution',
  Unverified: 'neutral',
  'Likely Authentic': 'positive',
  'Likely Manipulated': 'negative',
  'Possibly Edited': 'caution',
  Inconclusive: 'neutral',
};

const normalizeResult = (raw: RawVerdictJSON, fallbackVerdict: string): VerificationResult => {
  const verdict = raw.verdict?.trim() || fallbackVerdict;
  return {
    verdict,
    tone: TONE_BY_VERDICT[verdict] ?? 'neutral',
    confidence: Math.max(0, Math.min(100, Math.round(raw.confidence ?? 50))),
    summary: raw.summary?.trim() || 'The assistant did not provide a summary.',
    reasoning: Array.isArray(raw.reasoning) && raw.reasoning.length > 0
      ? raw.reasoning.slice(0, 5)
      : ['No detailed reasoning was returned.'],
    caveats: raw.caveats?.trim() || '',
  };
};

const CLAIM_JSON_SHAPE = `Respond ONLY with a JSON object of this exact shape, no other text:
{
  "verdict": "True" | "False" | "Misleading" | "Unverified",
  "confidence": <integer 0-100>,
  "summary": "<one or two sentence plain-language explanation>",
  "reasoning": ["<short supporting point>", "..."],
  "caveats": "<one sentence on the limits of this analysis>"
}`;

export async function verifyClaim(claim: string): Promise<VerificationResult> {
  const messages: GroqMessage[] = [
    {
      role: 'system',
      content: `You are a rigorous, neutral fact-checking analyst for Baltic Sea News. Assess the truthfulness of the user's claim using your general knowledge and reasoning. Be honest about uncertainty: if the claim depends on real-time data, highly specific local details, or events past your knowledge, mark it "Unverified" and say so — never guess with false confidence.\n\n${CLAIM_JSON_SHAPE}`,
    },
    { role: 'user', content: claim },
  ];
  const raw = await askGroqJSON<RawVerdictJSON>(messages, { model: GROQ_TEXT_MODEL, temperature: 0.2 });
  return normalizeResult(raw, 'Unverified');
}

export async function verifyUrl(url: string): Promise<VerificationResult> {
  const messages: GroqMessage[] = [
    {
      role: 'system',
      content: `You are a source-credibility analyst for Baltic Sea News. The user has provided a URL. You have NO ability to fetch or read the live content of this URL in this analysis — you can only reason about the URL string itself: its domain, path, and whether the domain is a widely recognized news outlet. Be explicit in your caveats that this is a domain-level assessment, not a reading of the actual article content.\n\n${CLAIM_JSON_SHAPE}`,
    },
    { role: 'user', content: `URL to assess: ${url}` },
  ];
  const raw = await askGroqJSON<RawVerdictJSON>(messages, { model: GROQ_TEXT_MODEL, temperature: 0.2 });
  return normalizeResult(raw, 'Unverified');
}

const MEDIA_JSON_SHAPE = `Respond ONLY with a JSON object of this exact shape, no other text:
{
  "verdict": "Likely Authentic" | "Likely Manipulated" | "Possibly Edited" | "Inconclusive",
  "confidence": <integer 0-100>,
  "summary": "<one or two sentences describing what's shown and your authenticity assessment>",
  "reasoning": ["<specific visual evidence observed>", "..."],
  "caveats": "<one sentence on the limits of visual-only analysis>"
}`;

export async function verifyImage(imageDataUrl: string): Promise<VerificationResult> {
  const messages: GroqMessage[] = [
    {
      role: 'system',
      content: `You are an image forensics analyst for Baltic Sea News. Examine the provided image for visual signs of digital manipulation, AI generation, or editing — unnatural lighting or shadows, warped or duplicated elements, inconsistent textures, garbled text, telltale generative-AI artifacts, mismatched perspective. Describe what the image depicts, then assess its authenticity.\n\n${MEDIA_JSON_SHAPE}`,
    },
    {
      role: 'user',
      content: [
        { type: 'text', text: 'Assess this image.' },
        { type: 'image_url', image_url: { url: imageDataUrl } },
      ],
    },
  ];
  const raw = await askGroqJSON<RawVerdictJSON>(messages, { model: GROQ_VISION_MODEL, temperature: 0.2 });
  return normalizeResult(raw, 'Inconclusive');
}

export async function verifyVideo(frameDataUrls: string[]): Promise<VerificationResult> {
  const messages: GroqMessage[] = [
    {
      role: 'system',
      content: `You are a media forensics analyst for Baltic Sea News. You are given ${frameDataUrls.length} still frames sampled at evenly spaced points from a video. Examine them for visual signs of manipulation, deepfake artifacts, or AI generation — inconsistencies between frames, unnatural facial/lighting artifacts, warped elements, mismatched perspective. Describe what the frames show, then assess authenticity. Since you only see stills (not motion), you cannot fully evaluate temporal/motion-based deepfake artifacts — note this in your caveats.\n\n${MEDIA_JSON_SHAPE}`,
    },
    {
      role: 'user',
      content: [
        { type: 'text', text: `Assess these ${frameDataUrls.length} frames sampled from a video.` },
        ...frameDataUrls.map((url) => ({ type: 'image_url' as const, image_url: { url } })),
      ],
    },
  ];
  const raw = await askGroqJSON<RawVerdictJSON>(messages, { model: GROQ_VISION_MODEL, temperature: 0.2 });
  return normalizeResult(raw, 'Inconclusive');
}
