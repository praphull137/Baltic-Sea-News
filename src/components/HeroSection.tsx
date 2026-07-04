import React, { useState } from 'react';
import {
  ArrowRight, ShieldCheck, Search, FileText, Globe, Link2, Radar,
  ImageUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import InteractiveBalticMap from './InteractiveBalticMap';
import { getCountryById } from '@/data/countries';

interface HeroSectionProps {
  onDemoClick: () => void;
  onAiClick: () => void;
  onVerify: (mode: 'claim' | 'url' | 'image' | 'video', value?: string) => void;
  selectedCountry: string | null;
  onSelectCountry: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onDemoClick,
  onVerify,
  selectedCountry,
  onSelectCountry,
}) => {
  const [mode, setMode] = useState<'claim' | 'url'>('claim');
  const [inputValue, setInputValue] = useState('');
  const selectedCountryName = selectedCountry
    ? getCountryById(selectedCountry)?.name ?? 'this country'
    : null;

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
        className="relative min-h-[calc(100vh-64px)] flex items-center justify-center bg-[#f2e8dc] text-black overflow-hidden pt-20 pb-8 dark:bg-[#1f2937] dark:text-gray-300"
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
      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-6 sm:px-8 lg:px-16 xl:px-20">

        <div className="grid gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:items-center xl:gap-20">
          {/* Left column: hero text, search, CTAs, stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-4xl lg:text-left"
          >
            <motion.h1 className="text-4xl md:text-5xl xl:text-[3.9rem] font-extrabold mb-5 font-poppins leading-[1.08]">
              <motion.span
                className="inline-block text-black dark:text-gray-100"
                initial={{ opacity: 0, x: -100, rotate: -180 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3, type: 'spring', stiffness: 100 }}
              >
                Verify Facts
              </motion.span>{' '}
              {selectedCountryName && (
                <>
                <motion.span
                    className="inline-block mr-2 text-black dark:text-gray-100"
                    initial={{ opacity: 0, x: -100, rotate: -180 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.35, type: 'spring', stiffness: 100 }}
                  >
                    in
                  </motion.span>
                  <motion.span
                    className="inline-block text-[#D1835A] dark:text-[#F0A57A]"
                    initial={{ opacity: 0, x: -100, rotate: -180 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 100 }}
                  >
                    {selectedCountryName}
                  </motion.span>
                </>
              )}{' '}
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
              className="text-lg md:text-xl text-gray-800 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed dark:text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              AI-powered verification for news, claims, images, and online sources
              across the Baltic and Nordic region.
            </motion.p>

            {/* Verification search area */}
            <motion.div
              className="mx-auto lg:mx-0 max-w-2xl rounded-2xl border border-gray-300 bg-white/90 p-5 shadow-md text-left dark:bg-[#111827] dark:border-gray-700"
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
                    className="w-full sm:w-auto bg-[#487f7b] px-7 py-3 text-base font-semibold text-white shadow-md hover:bg-[#3a6a68] dark:bg-teal-500 dark:hover:bg-teal-600"
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
                  className="bg-[#487f7b] text-white px-9 py-4 text-lg font-semibold rounded-md shadow-md transition-all duration-300 hover:bg-[#3a6a68] dark:bg-teal-500 dark:hover:bg-teal-600"
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
                  className="border border-[#487f7b] text-[#487f7b] px-9 py-4 text-lg font-semibold rounded-md transition-all duration-300 hover:bg-[#487f7b]/10 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-400/20"
                >
                  Explore Demo
                </Button>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right column: Interactive Baltic & Nordic News Map */}
          {/* Right column: Interactive Baltic & Nordic News Map */}
          <motion.div
            className="flex justify-center lg:justify-end lg:scale-[1.04] xl:scale-[1.08] origin-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
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
