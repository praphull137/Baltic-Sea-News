import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Minus, Scale } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { countries, getCountryById } from '@/data/countries';
import { topics, getTopicById } from '@/data/topics';
import { getPartiesByCountry, Stance } from '@/data/politicalParties';

interface PoliticalPartiesSectionProps {
  selectedCountry: string | null;
  selectedTopic: string | null;
}

const stanceIcon: Record<Stance, { icon: React.ElementType; className: string; label: string }> = {
  support: { icon: Check, className: 'text-[#5C8C85]', label: 'Supports' },
  oppose: { icon: X, className: 'text-[#D1835A]', label: 'Opposes' },
  mixed: { icon: Minus, className: 'text-gray-400', label: 'Mixed position' },
};

const PoliticalPartiesSection: React.FC<PoliticalPartiesSectionProps> = ({
  selectedCountry,
  selectedTopic,
}) => {
  const activeCountryId = selectedCountry || countries[0].id;
  const country = getCountryById(activeCountryId);
  const parties = getPartiesByCountry(activeCountryId);

  const [activeTopicId, setActiveTopicId] = useState(selectedTopic || topics[0].id);

  useEffect(() => {
    if (selectedTopic) setActiveTopicId(selectedTopic);
  }, [selectedTopic]);

  const activeTopic = getTopicById(activeTopicId);

  return (
    <section id="parties" className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#03353E] sm:text-4xl font-poppins mb-4">
            Party Comparison Center
          </h2>
          <div className="w-24 h-1 bg-[#D1835A] mx-auto mb-4 rounded-full" />
          <p className="text-lg text-[#03353E]/70 max-w-3xl mx-auto">
            Neutral, side-by-side positions from {country?.flag} {country?.name}'s major
            parties across the topics that matter most.
          </p>
          {!selectedCountry && (
            <p className="mt-3 text-sm text-[#5C8C85]">
              Showing {country?.name} by default — select a country on the map above to
              compare its parties.
            </p>
          )}
        </motion.div>

        {/* Comparison table */}
        <motion.div
          className="mt-12 overflow-x-auto rounded-2xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-sm font-semibold text-[#03353E]">Topic</th>
                {parties.map((party) => (
                  <th key={party.id} className="px-4 py-3 text-sm font-semibold text-[#03353E]">
                    {party.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {topics.map((topic) => (
                <tr
                  key={topic.id}
                  onClick={() => setActiveTopicId(topic.id)}
                  className={`cursor-pointer border-t border-gray-100 transition-colors hover:bg-[#5C8C85]/5 ${
                    activeTopicId === topic.id ? 'bg-[#5C8C85]/10' : 'bg-white'
                  }`}
                >
                  <td className="px-4 py-3 text-sm font-medium text-[#03353E]">{topic.label}</td>
                  {parties.map((party) => {
                    const stance = party.stances.find((s) => s.topicId === topic.id);
                    if (!stance) return <td key={party.id} className="px-4 py-3" />;
                    const meta = stanceIcon[stance.stance];
                    const Icon = meta.icon;
                    return (
                      <td key={party.id} className="px-4 py-3">
                        <Icon className={`h-5 w-5 ${meta.className}`} aria-label={meta.label} />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Party detail panels */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 flex items-center gap-2">
            <Scale className="h-5 w-5 text-[#D1835A]" />
            <h3 className="text-xl font-semibold text-[#03353E]">
              Party Positions on {activeTopic?.label}
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {parties.map((party) => {
              const stance = party.stances.find((s) => s.topicId === activeTopicId);
              const meta = stance ? stanceIcon[stance.stance] : null;
              const Icon = meta?.icon;
              return (
                <Card key={party.id} className="border border-gray-200 bg-[#F5F5F5]">
                  <CardContent className="p-5">
                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="font-semibold text-[#03353E]">{party.name}</h4>
                      {meta && Icon && (
                        <span
                          className={`flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-semibold ${meta.className}`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                          {meta.label}
                        </span>
                      )}
                    </div>
                    <p className="mb-3 text-xs text-[#03353E]/50">{party.descriptor}</p>
                    <p className="text-sm text-[#03353E]/80 leading-relaxed">
                      {stance ? stance.note : 'No stated position on record for this topic.'}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="mt-4 text-xs text-[#03353E]/40">
            Positions are simplified, neutral summaries for illustration and do not represent
            official party platforms.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PoliticalPartiesSection;
