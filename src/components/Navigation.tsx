import React, { useState } from 'react';
import { Menu, X, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  onAuthClick: (mode: 'login' | 'register') => void;
  onDemoClick: () => void;
  onAiClick?: () => void;
}

const navLinks = [
  { href: '#map', label: 'Map' },
  { href: '#services', label: 'Verify News' },
  { href: '#dashboard', label: 'Story Timeline' },
  { href: '#mission', label: 'Sources' },
  { href: '#community', label: 'Radar' },
  { href: '#mission', label: 'About' },
];

const Navigation: React.FC<NavigationProps> = ({ onAuthClick, onDemoClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#F1E8DB] transition-all duration-300 shadow-sm"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('#map')}
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}   
            transition={{ duration: 0.2 }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#5C8C85]">
              <Waves className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-[#03353E]">
              The Baltic See
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-[#333] hover:text-[#5C8C85] px-2 py-2 text-sm font-medium transition-colors duration-200"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                onClick={() => onAuthClick('login')}
                className="bg-transparent text-[#5C8C85] hover:bg-[#5C8C85]/10"
              >
                Login
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => onAuthClick('register')}
                className="bg-[#D1835A] text-white hover:bg-[#bf6f47] font-semibold shadow-sm"
              >
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-100 p-2 rounded-md text-[#5C8C85] hover:bg-[#5C8C85]/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 rounded-lg shadow-lg mt-2 bg-white">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#333] hover:text-[#5C8C85] block px-3 py-2 text-base font-medium w-full text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <div className="border-t pt-3 space-y-2">
                  <Button
                    variant="ghost"
                    onClick={() => onAuthClick('login')}
                    className="w-full justify-center bg-transparent text-[#5C8C85] hover:bg-[#5C8C85]/10"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => onAuthClick('register')}
                    className="w-full bg-[#D1835A] text-white hover:bg-[#bf6f47] font-semibold"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
