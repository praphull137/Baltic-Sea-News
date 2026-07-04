import React, { useState, useRef, useEffect } from 'react';
import { Fish, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { countries, getCountryById } from '@/data/countries';
import { topics, getTopicById } from '@/data/topics';
import { getNewsByFilters } from '@/data/news';
import { getCountryProfile } from '@/data/countryProfiles';
import { getFactCheckOfTheDay } from '@/data/factChecks';
import { getPartiesByCountry } from '@/data/parties';
import { askGroq, GroqMessage } from '@/lib/groq';
import { getCountryFlagSrc } from '@/data/countries';

interface ChatMessage {
  id: number;
  from: 'user' | 'bot';
  text: string;
}

interface NewsChatbotProps {
  selectedCountry: string | null;
  selectedTopic: string | null;
}

function PollyAvatar({ isOpen = false }: { isOpen?: boolean }) {
  return (
    <motion.div
      className={`relative flex items-center justify-center ${
        isOpen ? 'h-9 w-9' : 'h-11 w-11'
      }`}
      whileHover={{
        x: [0, 4, -2, 5, 0],
        y: [0, -1, 1, -1, 0],
        rotate: [0, 4, -2, 3, 0],
      }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      <Fish
        className={`relative z-10 text-white ${isOpen ? 'h-4 w-4' : 'h-5 w-5'}`}
        strokeWidth={2.2}
      />
    </motion.div>
  );
}

const quickPrompts = [
  'Latest news here',
  'What is the fact check of the day?',
  'What do parties think about this?',
  'How do I verify an article?',
];

const SYSTEM_PROMPT_BASE = `You are "Ask The Baltic See", the assistant embedded in The Baltic See — an AI-powered news verification platform covering the Baltic and Nordic region (Latvia, Lithuania, Estonia, Poland, Germany, Denmark, Sweden, Finland, Norway, Iceland).

Answer using ONLY the DATA CONTEXT provided below. It is the platform's actual dataset (news, fact checks, political party positions) — all illustrative demo content, not real reporting. If asked, be upfront that it's a demo dataset. If something isn't covered in the context, say you don't have that on file rather than inventing an answer. Keep replies conversational and concise (2-4 sentences), and mention country flags/names naturally when relevant.`;

// Builds a compact, structured snapshot of the platform's own data so the
// LLM answers are grounded in what's actually in the app, not hallucinated.
const buildDataContext = (countryId: string | null, topicId: string | null): string => {
  const country = getCountryById(countryId);
  const topic = getTopicById(topicId);
  const lines: string[] = [];

  if (country) {
    const profile = getCountryProfile(country.id);
    if (profile) {
      lines.push(
        `Country in focus: ${country.flag} ${country.name} — Population ${profile.population}, GDP ${profile.gdp}, EU member: ${profile.euMember ? 'yes' : 'no (EEA/EFTA)'}, Parliament: ${profile.parliamentName}, Next election: ${profile.election.name} on ${profile.election.electionDay}.`
      );
    }
  } else {
    lines.push('No specific country is currently selected — the user is browsing the whole region.');
  }

  if (topic) lines.push(`Topic in focus: ${topic.label}.`);

  const news = getNewsByFilters(countryId, topicId).slice(0, 6);
  if (news.length > 0) {
    lines.push('Recent news on file:');
    news.forEach((n) => {
      const c = getCountryById(n.country);
      lines.push(
        `- [${c?.name ?? n.country}] "${n.title}" (topic: ${n.topic}, ${n.date}, source: ${n.source}, fact-check status: ${n.factCheckStatus}, reliability: ${n.reliability}) — ${n.description}`
      );
    });
  } else {
    lines.push('No news items match this specific country/topic combination.');
  }

  const fc = getFactCheckOfTheDay(countryId, topicId);
  lines.push(
    `Fact Check of the Day: Claim "${fc.claim}" (${getCountryById(fc.country)?.name ?? fc.country}) — Verdict: ${fc.verdict} (${fc.confidence}% confidence). ${fc.summary} Sources: ${fc.sources.join('; ')}.`
  );

  if (country) {
    const parties = getPartiesByCountry(country.id);
    if (parties.length > 0) {
      lines.push(`Political parties tracked for ${country.name}: ${parties.map((p) => `${p.name} (${p.descriptor})`).join(' | ')}.`);
      parties.forEach((p) => {
        const relevantStances = topic
          ? p.stances.filter((s) => s.topicId === topic.id)
          : p.stances;
        relevantStances.forEach((s) => {
          const stanceTopic = getTopicById(s.topicId);
          lines.push(`- ${p.name} on ${stanceTopic?.label ?? s.topicId}: ${s.stance} — ${s.note}`);
        });
      });
    }
  }

  return lines.join('\n');
};

const NewsChatbot: React.FC<NewsChatbotProps> = ({ selectedCountry, selectedTopic }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 0,
      from: 'bot',
      text: "Hi, I'm The Baltic See assistant. Ask me about news, countries, topics, fact checks, or party positions.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const country = getCountryById(selectedCountry);
  const flagSrc = getCountryFlagSrc(selectedCountry);
  const topic = getTopicById(selectedTopic);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMsg: ChatMessage = { id: Date.now(), from: 'user', text: trimmed };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput('');
    setIsTyping(true);

    // Let an explicit country/topic mention in the message itself override
    // the page's current selection, so "What about Iceland?" works even if
    // the map is still set to Latvia.
    const q = trimmed.toLowerCase();
    const mentionedCountry = countries.find((c) => q.includes(c.name.toLowerCase()));
    const mentionedTopic = topics.find((t) => q.includes(t.label.toLowerCase()));
    const contextCountryId = mentionedCountry?.id ?? selectedCountry;
    const contextTopicId = mentionedTopic?.id ?? selectedTopic;

    try {
      const systemMessage: GroqMessage = {
        role: 'system',
        content: `${SYSTEM_PROMPT_BASE}\n\nDATA CONTEXT:\n${buildDataContext(contextCountryId, contextTopicId)}`,
      };
      const history: GroqMessage[] = nextMessages.slice(-10).map((m) => ({
        role: m.from === 'user' ? 'user' : 'assistant',
        content: m.text,
      }));

      const reply = await askGroq([systemMessage, ...history]);
      setMessages((prev) => [...prev, { id: Date.now() + 1, from: 'bot', text: reply }]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          from: 'bot',
          text: "I'm having trouble reaching the assistant right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex h-[28rem] w-[22rem] max-w-[90vw] flex-col overflow-hidden rounded-2xl border shadow-2xl"
            style={{ backgroundColor: '#F1E8DB', borderColor: '#D1835A' }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between p-4"
              style={{ backgroundColor: '#5C8C85' }}
            >
              <div className="flex items-center gap-3 text-white">
                <PollyAvatar isOpen />

                <div className="leading-tight">
                  <p className="m-0 text-sm font-bold text-white">Polly</p>
                  <p className="m-0 text-[11px] font-medium text-white/75">
                    The Baltic See assistant
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Context banner */}
            {(country || topic) && (
              <div className="border-b border-[#D1835A]/20 bg-white px-4 py-2 text-xs text-[#03353E]/70">
                Viewing:{' '}
                {country ? (
                  <>
                    {flagSrc ? (
                      <img src={flagSrc} alt="" className="mr-1 inline-block h-4 w-6 rounded-sm object-cover align-[-2px]" />
                    ) : (
                      `${country.flag} `
                    )}
                    {country.name}
                  </>
                ) : (
                  'All countries'
                )}
                {topic ? ` · ${topic.label}` : ''}
              </div>
            )}

            {/* Quick prompts */}
            <div className="flex flex-wrap gap-2 bg-white px-3 py-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => send(prompt)}
                  disabled={isTyping}
                  className="rounded-full px-2.5 py-1 text-xs disabled:opacity-50"
                  style={{ backgroundColor: '#E9D9CC', color: '#03353E' }}
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className="max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed"
                    style={
                      msg.from === 'user'
                        ? { backgroundColor: '#5C8C85', color: '#ffffff' }
                        : { backgroundColor: '#ffffff', color: '#03353E' }
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="text-xs text-[#5E8E87]">Assistant is typing...</div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t p-3" style={{ borderColor: '#D1835A' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') send(input);
                }}
                placeholder="Ask about news, countries, fact checks..."
                className="flex-1 rounded-full bg-white px-3 py-2 text-sm text-[#03353E] outline-none"
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim() || isTyping}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white disabled:opacity-40"
                style={{ backgroundColor: '#D1835A' }}
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => setIsOpen((prev) => !prev)}
      className="flex items-center gap-3 rounded-full border border-white/30 px-4 py-3 text-white shadow-xl backdrop-blur-md"
      style={{
        background:
          'linear-gradient(135deg, rgba(3, 53, 62, 0.96), rgba(92, 140, 133, 0.96))',
        boxShadow: '0 18px 40px rgba(3, 53, 62, 0.28)',
      }}
      aria-label={isOpen ? 'Close Polly assistant' : 'Open Polly assistant'}
    >
      {isOpen ? (
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
          <X className="h-5 w-5" />
        </div>
      ) : (
        <PollyAvatar />
      )}

      <div className="hidden pr-1 text-left sm:block">
        <p className="m-0 text-sm font-bold leading-tight text-white">Polly</p>
        <p className="m-0 text-[11px] font-medium leading-tight text-white/75">
          Ask the news
        </p>
      </div>
    </motion.button>
    </div>
  );
};

export default NewsChatbot;
