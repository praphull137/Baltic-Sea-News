import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getFactCheckOfTheDay, Verdict } from '@/data/factChecks';
import { getCountryById } from '@/data/countries';
import { getTopicById } from '@/data/topics';

interface FactCheckOfTheDayProps {
  selectedCountry?: string | null;
  selectedTopic?: string | null;
}

const verdictColor: Record<Verdict, string> = {
  True: '#5C8C85',
  False: '#D1835A',
  Misleading: '#c2872f',
  Unverified: '#9CA3AF',
};

const FactCheckOfTheDay: React.FC<FactCheckOfTheDayProps> = ({
  selectedCountry = null,
  selectedTopic = null,
}) => {
  const factCheck = getFactCheckOfTheDay(selectedCountry, selectedTopic);
  const country = getCountryById(factCheck.country);
  const topic = getTopicById(factCheck.topic);
  const color = verdictColor[factCheck.verdict];

  return (
    <Card className="border border-gray-200 bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg text-[#03353E]">
          <ShieldCheck className="mr-2 h-5 w-5 text-[#5C8C85]" />
          Fact Check of the Day
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {country && (
            <span className="inline-block rounded-full bg-[#5C8C85]/10 px-2.5 py-0.5 text-xs font-medium text-[#5C8C85]">
              {country.flag} {country.name}
            </span>
          )}
          {topic && (
            <span className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
              {topic.label}
            </span>
          )}
        </div>
        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-500">
          Claim
        </p>
        <p className="mb-4 text-base font-semibold text-[#03353E] leading-snug">
          "{factCheck.claim}"
        </p>

        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Verdict
            </p>
            <span
              className="mt-1 inline-block rounded-full px-3 py-1 text-sm font-semibold text-white"
              style={{ backgroundColor: color }}
            >
              {factCheck.verdict}
            </span>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Confidence
            </p>
            <p className="mt-1 text-2xl font-bold" style={{ color }}>
              {factCheck.confidence}%
            </p>
          </div>
        </div>

        <div className="mb-4 h-2 w-full rounded-full bg-gray-100">
          <motion.div
            className="h-2 rounded-full"
            style={{ backgroundColor: color }}
            initial={{ width: 0 }}
            whileInView={{ width: `${factCheck.confidence}%` }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>

        <p className="mb-4 text-sm text-gray-600 leading-relaxed">{factCheck.summary}</p>

        <div className="mb-4 border-t border-gray-100 pt-3">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
            Sources Used
          </p>
          <ul className="space-y-1">
            {factCheck.sources.map((source) => (
              <li key={source} className="flex items-start gap-2 text-xs text-gray-600">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#5C8C85]" />
                {source}
              </li>
            ))}
          </ul>
        </div>

        <button className="flex items-center gap-1.5 text-sm font-semibold text-[#D1835A] hover:text-[#bf6f47] transition-colors">
          <BookOpen className="h-4 w-4" />
          Learn More
        </button>
      </CardContent>
    </Card>
  );
};

export default FactCheckOfTheDay;
