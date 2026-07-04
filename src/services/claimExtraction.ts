import { askGroqJSON, GroqMessage, GROQ_TEXT_MODEL } from '@/lib/groq';

export interface ExtractedClaim {
  claim: string; // the core factual claim, restated plainly
  searchQuery: string; // short keyword query for the search layer
}

interface RawClaimJSON {
  claim?: string;
  searchQuery?: string;
}

const SHAPE = `Respond ONLY with a JSON object of this exact shape, no other text:
{
  "claim": "<the core factual claim, restated as a single plain, neutral, checkable sentence>",
  "searchQuery": "<3-8 keywords capturing the claim's essential entities and assertion, suitable for a news/fact-check search engine>"
}`;

// Stage 1 of the pipeline: turn raw user input (which may be a full
// paragraph, a question, or a loosely worded statement) into a single
// checkable claim plus a concise search query for the retrieval layer.
export async function extractClaim(rawInput: string): Promise<ExtractedClaim> {
  const messages: GroqMessage[] = [
    {
      role: 'system',
      content: `You extract the single main factual claim from user-submitted text for a fact-checking pipeline. Do not judge whether it's true — only identify and restate it plainly and neutrally. If the input already is a plain claim, restate it as-is (don't add or remove meaning).\n\n${SHAPE}`,
    },
    { role: 'user', content: rawInput },
  ];
  const raw = await askGroqJSON<RawClaimJSON>(messages, { model: GROQ_TEXT_MODEL, temperature: 0.1 });
  return {
    claim: raw.claim?.trim() || rawInput.trim(),
    searchQuery: raw.searchQuery?.trim() || rawInput.trim().slice(0, 100),
  };
}
