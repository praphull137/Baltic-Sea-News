import React, { useEffect, useState } from 'react';
import {
  MessageCircle,
  Heart,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Send,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { countries } from '@/data/countries';
import { topics, getTopicById } from '@/data/topics';

interface Reply {
  id: number;
  author: string;
  text: string;
}

interface Thread {
  id: number;
  country: string;
  topic: string;
  title: string;
  author: string;
  excerpt: string;
  category: string;
  replies: Reply[];
}

const initialThreads: Thread[] = [
  {
    id: 1,
    country: 'latvia',
    topic: 'economy',
    title: 'Is the new tax policy actually different from last year\'s draft?',
    author: 'Ilze K.',
    excerpt:
      'Comparing the confirmed text with the leaked draft from March — the export exemptions look narrower than reported.',
    category: 'Politics',
    replies: [
      { id: 1, author: 'Marta S.', text: 'Good catch — the Verify tool flagged the same discrepancy.' },
    ],
  },
  {
    id: 2,
    country: 'poland',
    topic: 'elections',
    title: 'Election monitoring initiative — who funds the observers?',
    author: 'Tomasz W.',
    excerpt:
      'Trying to trace the funding chain behind the independent monitors announced this week.',
    category: 'Transparency',
    replies: [],
  },
  {
    id: 3,
    country: 'estonia',
    topic: 'technology',
    title: 'AI consultation platform: data residency question',
    author: 'Kadri L.',
    excerpt:
      'The fact check confirmed EU hosting, but does anyone have the actual audit document?',
    category: 'Source Intelligence',
    replies: [
      { id: 1, author: 'Priit A.', text: 'Linked it in the Source Intelligence report, worth a read.' },
      { id: 2, author: 'Liis M.', text: 'Thanks — cleared up my doubts.' },
    ],
  },
  {
    id: 4,
    country: 'sweden',
    topic: 'defense',
    title: 'Undersea cable coverage — separating fact from speculation',
    author: 'Erik N.',
    excerpt:
      'A lot of the reporting cites "unnamed officials." Curious what the confidence scores look like here.',
    category: 'Security',
    replies: [],
  },
  {
    id: 5,
    country: 'lithuania',
    topic: 'energy',
    title: 'Energy grid upgrade timeline — realistic or optimistic?',
    author: 'Gabija R.',
    excerpt:
      'The story timeline shows three revised deadlines already. Tracking whether the new one holds.',
    category: 'Energy',
    replies: [
      { id: 1, author: 'Dovydas P.', text: 'Following this one closely too, will share updates.' },
    ],
  },
];

interface CommunitySectionProps {
  selectedCountry?: string | null;
  selectedTopic?: string | null;
}

const CommunitySection: React.FC<CommunitySectionProps> = ({
  selectedCountry = null,
  selectedTopic = null,
}) => {
  const [threads, setThreads] = useState<Thread[]>(initialThreads);
  const [likes, setLikes] = useState<Record<number, number>>({
    1: 24,
    2: 9,
    3: 31,
    4: 14,
    5: 18,
  });
  const [liked, setLiked] = useState<Set<number>>(new Set());
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [countryFilter, setCountryFilter] = useState<string | null>(selectedCountry);
  const [topicFilter, setTopicFilter] = useState<string | null>(selectedTopic);

  // Keep the discussion filters in sync with the map/topic selections elsewhere on the page.
  useEffect(() => {
    setCountryFilter(selectedCountry);
  }, [selectedCountry]);
  useEffect(() => {
    setTopicFilter(selectedTopic);
  }, [selectedTopic]);
  const [commentDrafts, setCommentDrafts] = useState<Record<number, string>>({});
  const [newTitle, setNewTitle] = useState('');
  const [newCountry, setNewCountry] = useState(countries[0].id);
  const [newTopic, setNewTopic] = useState(topics[0].id);

  const toggleLike = (id: number) => {
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        setLikes((l) => ({ ...l, [id]: l[id] - 1 }));
      } else {
        next.add(id);
        setLikes((l) => ({ ...l, [id]: (l[id] || 0) + 1 }));
      }
      return next;
    });
  };

  const submitComment = (threadId: number) => {
    const text = (commentDrafts[threadId] || '').trim();
    if (!text) return;
    setThreads((prev) =>
      prev.map((t) =>
        t.id === threadId
          ? { ...t, replies: [...t.replies, { id: Date.now(), author: 'You', text }] }
          : t
      )
    );
    setCommentDrafts((prev) => ({ ...prev, [threadId]: '' }));
  };

  const startDiscussion = () => {
    const title = newTitle.trim();
    if (!title) return;
    const thread: Thread = {
      id: Date.now(),
      country: newCountry,
      topic: newTopic,
      title,
      author: 'You',
      excerpt: 'New discussion — join in with the first reply.',
      category: 'General',
      replies: [],
    };
    setThreads((prev) => [thread, ...prev]);
    setLikes((prev) => ({ ...prev, [thread.id]: 0 }));
    setNewTitle('');
  };

  const visibleThreads = threads.filter(
    (t) => (countryFilter ? t.country === countryFilter : true) &&
      (topicFilter ? t.topic === topicFilter : true)
  );

  const trending = threads
    .slice()
    .sort((a, b) => (likes[b.id] || 0) - (likes[a.id] || 0))
    .slice(0, 3);

  return (
    <section id="community" className="py-20 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#03353E] sm:text-4xl font-poppins mb-4">
            Community Discussions
          </h2>
          <div className="w-24 h-1 bg-[#D1835A] mx-auto mb-8 rounded-full" />
          <p className="text-lg text-[#03353E] max-w-3xl mx-auto">
            Discuss verified stories, question sources, and compare notes with the
            Baltic Sea News community.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:items-start">
          {/* Threads */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Country filter chips */}
            <div className="mb-6 flex flex-wrap gap-2">
              <button
                onClick={() => setCountryFilter(null)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  countryFilter === null
                    ? 'bg-[#5C8C85] text-white'
                    : 'bg-white text-[#5C8C85] border border-[#5C8C85]/30'
                }`}
              >
                All
              </button>
              {countries.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCountryFilter(c.id)}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                    countryFilter === c.id
                      ? 'bg-[#5C8C85] text-white'
                      : 'bg-white text-[#5C8C85] border border-[#5C8C85]/30'
                  }`}
                >
                  {c.flag} {c.name}
                </button>
              ))}
            </div>

            {/* Topic filter chips */}
            <div className="mb-6 flex flex-wrap gap-2">
              <button
                onClick={() => setTopicFilter(null)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  topicFilter === null
                    ? 'bg-[#D1835A] text-white'
                    : 'bg-white text-[#D1835A] border border-[#D1835A]/30'
                }`}
              >
                All Topics
              </button>
              {topics.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTopicFilter(t.id)}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                    topicFilter === t.id
                      ? 'bg-[#D1835A] text-white'
                      : 'bg-white text-[#D1835A] border border-[#D1835A]/30'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Start a discussion */}
            <Card className="mb-6 bg-white rounded-xl">
              <CardContent className="p-5">
                <p className="mb-3 text-sm font-semibold text-[#03353E]">
                  Start a discussion
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <select
                    value={newCountry}
                    onChange={(e) => setNewCountry(e.target.value)}
                    className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-[#03353E]"
                  >
                    {countries.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.flag} {c.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={newTopic}
                    onChange={(e) => setNewTopic(e.target.value)}
                    className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-[#03353E]"
                  >
                    {topics.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="What do you want to discuss?"
                    className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-[#03353E] outline-none focus:border-[#5C8C85]"
                  />
                  <button
                    onClick={startDiscussion}
                    className="rounded-lg bg-[#D1835A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#bf6f47] transition-colors"
                  >
                    Post
                  </button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {visibleThreads.map((thread) => {
                const country = countries.find((c) => c.id === thread.country);
                const topic = getTopicById(thread.topic);
                const isExpanded = expandedId === thread.id;
                const likeCount = likes[thread.id] || 0;
                const isLiked = liked.has(thread.id);

                return (
                  <Card key={thread.id} className="bg-white rounded-xl">
                    <CardContent className="p-6">
                      <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-[#5E8E87]">
                        <span className="rounded-full bg-[#5C8C85]/10 px-2.5 py-0.5 font-medium text-[#5C8C85]">
                          {country ? `${country.flag} ${country.name}` : thread.country}
                        </span>
                        {topic && (
                          <span className="rounded-full bg-[#D1835A]/10 px-2.5 py-0.5 font-medium text-[#D1835A]">
                            {topic.label}
                          </span>
                        )}
                        <span>{thread.category}</span>
                        <span>• by {thread.author}</span>
                      </div>

                      <button
                        onClick={() => setExpandedId(isExpanded ? null : thread.id)}
                        className="text-left"
                      >
                        <h4 className="text-lg font-semibold text-[#03353E] mb-1">
                          {thread.title}
                        </h4>
                      </button>
                      <p className="mb-4 text-sm text-[#03353E]/80">{thread.excerpt}</p>

                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => toggleLike(thread.id)}
                          className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                            isLiked ? 'text-[#D1835A]' : 'text-[#5E8E87] hover:text-[#D1835A]'
                          }`}
                        >
                          <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                          {likeCount}
                        </button>
                        <button
                          onClick={() => setExpandedId(isExpanded ? null : thread.id)}
                          className="flex items-center gap-1.5 text-sm font-medium text-[#5E8E87] hover:text-[#5C8C85]"
                        >
                          <MessageCircle className="h-4 w-4" />
                          {thread.replies.length}
                          {isExpanded ? (
                            <ChevronUp className="h-3.5 w-3.5" />
                          ) : (
                            <ChevronDown className="h-3.5 w-3.5" />
                          )}
                        </button>
                      </div>

                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.25 }}
                          className="mt-4 space-y-3 border-t border-gray-100 pt-4"
                        >
                          {thread.replies.map((reply) => (
                            <div key={reply.id} className="text-sm">
                              <span className="font-semibold text-[#03353E]">
                                {reply.author}:{' '}
                              </span>
                              <span className="text-[#03353E]/80">{reply.text}</span>
                            </div>
                          ))}
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={commentDrafts[thread.id] || ''}
                              onChange={(e) =>
                                setCommentDrafts((prev) => ({
                                  ...prev,
                                  [thread.id]: e.target.value,
                                }))
                              }
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') submitComment(thread.id);
                              }}
                              placeholder="Add a comment..."
                              className="flex-1 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-[#03353E] outline-none focus:border-[#5C8C85]"
                            />
                            <button
                              onClick={() => submitComment(thread.id)}
                              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5C8C85] text-white hover:bg-[#4d7975]"
                              aria-label="Send comment"
                            >
                              <Send className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </motion.div>

          {/* Trending Discussions */}
          <motion.div
            className="lg:sticky lg:top-28"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp className="h-6 w-6 text-[#D1835A]" />
              <h3 className="text-xl font-semibold text-[#03353E]">
                Trending Discussions
              </h3>
            </div>

            <div className="space-y-4">
              {trending.map((thread, index) => {
                const country = countries.find((c) => c.id === thread.country);
                return (
                  <motion.div
                    key={thread.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-white rounded-xl">
                      <CardContent className="p-5">
                        <div className="mb-2 flex items-center justify-between text-xs text-[#5E8E87]">
                          <span>{country ? `${country.flag} ${country.name}` : thread.country}</span>
                          <span className="flex items-center gap-1 font-semibold text-[#D1835A]">
                            <Heart className="h-3.5 w-3.5 fill-current" />
                            {likes[thread.id] || 0}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-[#03353E] leading-snug">
                          {thread.title}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
