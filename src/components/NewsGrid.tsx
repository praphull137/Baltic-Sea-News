import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight, X, ShieldCheck, ShieldAlert, ShieldQuestion, Radio } from 'lucide-react';
import { getNewsByFilters, FactCheckStatus, Reliability } from '@/data/news';
import { getCountryById, getCountryFlagSrc } from '@/data/countries';
import { getTopicById } from '@/data/topics';

interface NewsGridProps {
  selectedCountry: string | null;
  selectedTopic: string | null;
  onClearFilter: () => void;
}

const formatDate = (date: string) =>
  new Date(`${date}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

const factCheckMeta: Record<FactCheckStatus, { icon: React.ElementType; className: string }> = {
  Verified: { icon: ShieldCheck, className: 'bg-[#5C8C85]/10 text-[#5C8C85]' },
  Disputed: { icon: ShieldAlert, className: 'bg-[#D1835A]/10 text-[#D1835A]' },
  Unverified: { icon: ShieldQuestion, className: 'bg-amber-100 text-amber-700' },
  'Not Reviewed': { icon: Radio, className: 'bg-gray-100 text-gray-500' },
};

const reliabilityMeta: Record<Reliability, string> = {
  High: 'bg-[#5C8C85]',
  Medium: 'bg-[#D1835A]',
  Low: 'bg-gray-400',
};

const MAX_ITEMS = 6;

const NewsGrid: React.FC<NewsGridProps> = ({ selectedCountry, selectedTopic, onClearFilter }) => {
  const country = getCountryById(selectedCountry);
  const countryFlagSrc = getCountryFlagSrc(selectedCountry);
  const topic = getTopicById(selectedTopic);
  const allItems = getNewsByFilters(selectedCountry, selectedTopic)
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  const items = allItems.slice(0, MAX_ITEMS);

  const hasFilter = Boolean(country || topic);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-2xl font-bold text-[#03353E] font-poppins">
            {country ? (
              <>
                {countryFlagSrc ? (
                  <img src={countryFlagSrc} alt="" className="inline-block h-6 w-9 rounded-sm align-middle object-cover shadow-sm" />
                ) : (
                  <span>{country.flag}</span>
                )}{' '}
                {country.name} Feed
              </>
            ) : (
              'All Baltic & Nordic News'
            )}
            {topic && <span className="text-[#D1835A]"> · {topic.label}</span>}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Showing {items.length} of {allItems.length} verified stories
          </p>
        </div>
        {hasFilter && (
          <button
            onClick={onClearFilter}
            className="flex items-center gap-1 rounded-full bg-[#5C8C85]/10 px-3 py-1.5 text-sm font-medium text-[#5C8C85] hover:bg-[#5C8C85]/20 transition-colors"
          >
            <X className="h-3.5 w-3.5" />
            Clear filters
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center text-gray-500">
          No news found for this selection yet.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, index) => {
            const itemCountry = getCountryById(item.country);
            const itemTopic = getTopicById(item.topic);
            const meta = factCheckMeta[item.factCheckStatus];
            const StatusIcon = meta.icon;
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
                viewport={{ once: true }}
                className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm border border-gray-200 transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-[#03353E] shadow-sm">
                    {itemCountry ? (
                      <span className="inline-flex items-center gap-1">
                        {getCountryFlagSrc(itemCountry.id) ? (
                          <img
                            src={getCountryFlagSrc(itemCountry.id) as string}
                            alt=""
                            className="h-4 w-6 rounded-sm object-cover"
                          />
                        ) : (
                          <span>{itemCountry.flag}</span>
                        )}
                        {itemCountry.name}
                      </span>
                    ) : (
                      item.country
                    )}
                  </span>
                  <span
                    className={`absolute top-3 right-3 h-2.5 w-2.5 rounded-full ${reliabilityMeta[item.reliability]}`}
                    title={`${item.reliability} reliability`}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                    <span className="rounded-full bg-[#5C8C85]/10 px-2.5 py-0.5 font-medium text-[#5C8C85]">
                      {itemTopic?.label ?? item.category}
                    </span>
                    <span className="font-medium text-[#03353E]/70">{item.source}</span>
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <h4 className="mb-2 text-base font-semibold text-[#03353E] leading-snug">
                    {item.title}
                  </h4>
                  <p className="mb-4 flex-1 text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${meta.className}`}
                    >
                      <StatusIcon className="h-3.5 w-3.5" />
                      {item.factCheckStatus}
                    </span>
                    <button className="flex items-center gap-1.5 text-sm font-semibold text-[#D1835A] hover:text-[#bf6f47] transition-colors w-fit">
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NewsGrid;
