import React from 'react';
import { motion } from 'framer-motion';
import NewsGrid from './NewsGrid';
import NewsOfTheDay from './NewsOfTheDay';
import FactCheckOfTheDay from './FactCheckOfTheDay';
import CivicCalendar from './CivicCalendar';
import ElectionCountdown from './ElectionCountdown';
import CountryProfileCard from './CountryProfileCard';
import TopicChips from './TopicChips';
import { getCountryById, getCountryFlagSrc } from '@/data/countries';

interface NewsSectionProps {
  selectedCountry: string | null;
  selectedTopic: string | null;
  onSelectTopic: (id: string | null) => void;
  onClearFilter: () => void;
}

const NewsSection: React.FC<NewsSectionProps> = ({
  selectedCountry,
  selectedTopic,
  onSelectTopic,
  onClearFilter,
}) => {
  const country = getCountryById(selectedCountry);
  const flagSrc = getCountryFlagSrc(selectedCountry);

  return (
    <section id="news" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 flex items-center justify-center gap-3 text-3xl font-bold text-[#03353E] dark:text-white sm:text-4xl font-poppins">
            {country ? (
              <>
                {flagSrc ? (
                  <img
                    src={flagSrc}
                    alt=""
                    className="h-7 w-10 rounded-sm object-cover shadow-sm"
                  />
                ) : (
                  <span className="text-2xl leading-none">{country.flag}</span>
                )}
                <span>{country.name} Civic Hub</span>
              </>
            ) : (
              'Baltic & Nordic Civic Hub'
            )}
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-700 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Topics, verified news, fact checks, and civic events — updated the moment you
            switch countries.
          </p>
        </motion.div>

        {/* Topic filter bar */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <TopicChips
            selectedCountry={selectedCountry}
            selectedTopic={selectedTopic}
            onSelectTopic={onSelectTopic}
          />
        </motion.div>

        {/* Responsive 12-column hub: sidebar / main feed / right panel.
            The four widgets are split 1 (sidebar) / 3 (right) rather than
            stacked 4-deep on the right — a single tall column next to two
            short ones leaves a large dead gap under the short columns,
            since a CSS grid row is always sized to its tallest item.
            Splitting keeps every column's height in the same ballpark, and
            items-start + a sticky sidebar handle the small remainder. */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          <motion.aside
            className="lg:sticky lg:top-28 lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CountryProfileCard selectedCountry={selectedCountry} />
            <FactCheckOfTheDay selectedCountry={selectedCountry} selectedTopic={selectedTopic} />
          </motion.aside>

          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <NewsGrid
              selectedCountry={selectedCountry}
              selectedTopic={selectedTopic}
              onClearFilter={onClearFilter}
            />
          </motion.div>

          <motion.aside
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <NewsOfTheDay selectedCountry={selectedCountry} selectedTopic={selectedTopic} />
            <CivicCalendar selectedCountry={selectedCountry} />
            <ElectionCountdown selectedCountry={selectedCountry} />
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
