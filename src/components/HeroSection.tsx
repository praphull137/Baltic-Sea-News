import React, { useState } from 'react';
import {
  ArrowRight, ShieldCheck, Search, FileText, Globe, Link2, Radar,
  ImageUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import InteractiveBalticMap from './InteractiveBalticMap';

interface HeroSectionProps {
  onDemoClick: () => void;
  onAiClick: () => void;
  onVerify: (mode: 'claim' | 'url' | 'image' | 'video', value?: string) => void;
  selectedCountry: string | null;
  onSelectCountry: (id: string) => void;
}

const stats = [
  { number: '10K+', label: 'Claims Verified' },
  { number: '95%', label: 'Verification Accuracy' },
  { number: '500+', label: 'Trusted Sources' },
];

const HeroSection: React.FC<HeroSectionProps> = ({
  onDemoClick,
  onVerify,
  selectedCountry,
  onSelectCountry,
}) => {
  const [mode, setMode] = useState<'claim' | 'url'>('claim');
  const [inputValue, setInputValue] = useState('');

  const floatingIcons = [
    { icon: Globe, delay: 0, x: 100, y: 50 },
    { icon: ShieldCheck, delay: 0.2, x: -80, y: 80 },
    { icon: Search, delay: 0.4, x: 120, y: -60 },
    { icon: FileText, delay: 0.6, x: -100, y: -40 },
    { icon: Link2, delay: 0.8, x: 80, y: 120 },
    { icon: Radar, delay: 1.0, x: -120, y: 60 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#f2e8dc] text-black overflow-hidden dark:bg-[#1f2937] dark:text-gray-300"
    >
      {/* Animated Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ icon: Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute opacity-10 dark:opacity-20"
            initial={{ scale: 0, x: 0, y: 0, rotate: 0 }}
            animate={{
              scale: [0, 1, 1.2, 1],
              x: [0, x * 0.5, x, x * 0.8],
              y: [0, y * 0.5, y, y * 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              delay: delay,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            style={{
              left: `${20 + index * 15}%`,
              top: `${15 + index * 12}%`,
            }}
          >
            <Icon size={40} className="text-black/30 dark:text-white/30" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="pt-16" />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left column: hero text, search, CTAs, stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.h1 className="text-4xl md:text-6xl font-extrabold mb-6 font-poppins leading-[1.15]">
              <motion.span
                className="inline-block text-black dark:text-gray-100"
                initial={{ opacity: 0, x: -100, rotate: -180 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3, type: 'spring', stiffness: 100 }}
              >
                Verify Facts.
              </motion.span>{' '}
              <motion.span
                className="inline-block text-[#1f4f4f] dark:text-teal-400"
                initial={{ opacity: 0, x: 100, rotate: 180 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 100 }}
              >
                Understand Context.
              </motion.span>{' '}
              <motion.span
                className="inline-block text-black dark:text-gray-100"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, type: 'spring', stiffness: 100 }}
              >
                Follow the Story.
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-800 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed dark:text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              AI-powered verification for news, claims, images, and online sources
              across the Baltic and Nordic region.
            </motion.p>

            {/* Verification search area */}
            <motion.div
              className="mx-auto lg:mx-0 max-w-xl rounded-2xl border border-gray-300 bg-white/90 p-4 shadow-md text-left dark:bg-[#111827] dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
            >
              {/* Mode toggle */}
              <div className="mb-3 flex items-center gap-1 rounded-lg bg-[#f2e8dc] p-1 w-fit dark:bg-[#1f2937]">
                <button
                  onClick={() => setMode('claim')}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    mode === 'claim'
                      ? 'bg-white text-[#1f4f4f] shadow-sm dark:bg-[#111827] dark:text-teal-400'
                      : 'text-gray-600 hover:text-[#5C8C85] dark:text-gray-400'
                  }`}
                >
                  <Search className="h-4 w-4" /> Claim / Text
                </button>
                <button
                  onClick={() => setMode('url')}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    mode === 'url'
                      ? 'bg-white text-[#1f4f4f] shadow-sm dark:bg-[#111827] dark:text-teal-400'
                      : 'text-gray-600 hover:text-[#5C8C85] dark:text-gray-400'
                  }`}
                >
                  <Link2 className="h-4 w-4" /> Article URL
                </button>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  {mode === 'url' ? (
                    <Link2 className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  ) : (
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  )}
                  <input
                    type={mode === 'url' ? 'url' : 'text'}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && inputValue.trim()) onVerify(mode, inputValue.trim());
                    }}
                    placeholder={
                      mode === 'url'
                        ? 'Paste an article URL...'
                        : 'Paste a claim, article URL, or upload an image...'
                    }
                    className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-3 text-gray-800 placeholder:text-gray-400 focus:border-[#5C8C85] focus:outline-none focus:ring-2 focus:ring-[#5C8C85]/30 dark:bg-[#0f172a] dark:border-gray-700 dark:text-gray-200"
                  />
                </div>

                <motion.button
                  type="button"
                  onClick={() => onVerify('image')}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-[#5C8C85] hover:text-[#5C8C85] dark:bg-[#0f172a] dark:border-gray-700 dark:text-gray-300"
                  title="Upload an image or screenshot"
                >
                  <ImageUp className="h-5 w-5" />
                  <span className="sm:hidden">Upload image</span>
                </motion.button>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    onClick={() => onVerify(mode, inputValue.trim() || undefined)}
                    className="w-full sm:w-auto bg-[#487f7b] px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-[#3a6a68] dark:bg-teal-500 dark:hover:bg-teal-600"
                  >
                    Verify
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => onVerify(mode, inputValue.trim() || undefined)}
                  size="lg"
                  className="bg-[#487f7b] text-white px-8 py-4 text-lg font-semibold rounded-md shadow-md transition-all duration-300 hover:bg-[#3a6a68] dark:bg-teal-500 dark:hover:bg-teal-600"
                >
                  Verify News
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={onDemoClick}
                  variant="outline"
                  size="lg"
                  className="border border-[#487f7b] text-[#487f7b] px-8 py-4 text-lg font-semibold rounded-md transition-all duration-300 hover:bg-[#487f7b]/10 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-400/20"
                >
                  Explore Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white/90 p-5 rounded-xl border border-gray-300 shadow-sm dark:bg-[#111827] dark:border-gray-700"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.div
                    className="text-2xl font-bold text-[#1f4f4f] dark:text-teal-400 mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 + index * 0.1, type: 'spring' }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-700 text-sm font-medium dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column: Interactive Baltic & Nordic News Map */}
          <motion.div
            className="rounded-2xl border border-gray-300 bg-white/80 p-6 shadow-sm dark:bg-[#111827]/80 dark:border-gray-700"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="mb-1 text-lg font-semibold text-[#03353E] dark:text-teal-300">
              Interactive Baltic &amp; Nordic News Map
            </h3>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              Baltic Region — hover a country for its article count, click to load its
              latest verified news below.
            </p>
            <InteractiveBalticMap selected={selectedCountry} onSelect={onSelectCountry} />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-black/30 rounded-full flex justify-center dark:border-white/30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-black/30 rounded-full mt-2 dark:bg-white/30"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
