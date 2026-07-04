export interface GroqTextContent {
  type: 'text';
  text: string;
}

export interface GroqImageContent {
  type: 'image_url';
  image_url: { url: string };
}

export type GroqContent = string | Array<GroqTextContent | GroqImageContent>;

export interface GroqMessage {
  role: 'system' | 'user' | 'assistant';
  content: GroqContent;
}

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY as string | undefined;
export const GROQ_TEXT_MODEL = 'llama-3.3-70b-versatile';
export const GROQ_VISION_MODEL = 'meta-llama/llama-4-scout-17b-16e-instruct';
const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';

interface AskGroqOptions {
  model?: string;
  temperature?: number;
  maxTokens?: number;
  jsonMode?: boolean;
}

async function callGroq(messages: GroqMessage[], options: AskGroqOptions = {}): Promise<string> {
  if (!GROQ_API_KEY) {
    throw new Error('Missing VITE_GROQ_API_KEY — add it to .env (see .env.example).');
  }

  const res = await fetch(GROQ_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: options.model ?? GROQ_TEXT_MODEL,
      messages,
      temperature: options.temperature ?? 0.4,
      max_tokens: options.maxTokens ?? 500,
      ...(options.jsonMode ? { response_format: { type: 'json_object' } } : {}),
    }),
  });

  if (!res.ok) {
    throw new Error(`Groq API error (${res.status}): ${await res.text()}`);
  }

  const data = await res.json();
  const reply = data.choices?.[0]?.message?.content?.trim();
  if (!reply) {
    throw new Error('Groq API returned an empty response.');
  }
  return reply;
}

export async function askGroq(messages: GroqMessage[]): Promise<string> {
  return callGroq(messages, { model: GROQ_TEXT_MODEL });
}

// Calls Groq in JSON mode and parses the result. Throws if the model didn't
// return valid JSON (callers should catch and surface a friendly error).
export async function askGroqJSON<T>(
  messages: GroqMessage[],
  options: AskGroqOptions = {}
): Promise<T> {
  const raw = await callGroq(messages, { ...options, jsonMode: true });
  try {
    return JSON.parse(raw) as T;
  } catch {
    throw new Error('The assistant returned a response that could not be parsed.');
  }
}
