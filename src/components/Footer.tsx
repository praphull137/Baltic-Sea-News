import React from 'react';
import { Mail } from 'lucide-react';

const socials = [
  { label: 'LinkedIn', short: 'in' },
  { label: 'X', short: 'X' },
  { label: 'GitHub', short: 'GH' },
];

const quickLinks = ['Verify News', 'Story Timeline', 'Source Intelligence', 'Reports'];

const resources = ['Research', 'Methodology', 'API Documentation'];

const Footer = () => {
  return (
    <footer className="bg-[#F1E8DB] text-[#5E8E87]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/images/the_baltic_see_logo.svg"
                alt="The Baltic See"
                className="h-9 w-9 rounded-lg object-contain"
              />
              <span className="text-lg font-bold text-[#03353E]">The Baltic See</span>
            </div>
            <p className="text-sm leading-relaxed text-[#5E8E87]">
              Verify Facts. Understand Context. Follow the Story. AI-powered news
              intelligence for the Baltic region.
            </p>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-[#5C8C85] hover:bg-[#D1835A] hover:text-white transition-colors"
                >
                  {social.short}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#5C8C85]">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#5E8E87] hover:text-[#D1835A] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#5C8C85]">Resources</h3>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#5E8E87] hover:text-[#D1835A] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#5C8C85]">Contact Us</h3>
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-[#D1835A]" />
              <a
                href="mailto:contact@balticseanews.com"
                className="text-[#5E8E87] hover:text-[#D1835A]"
              >
                contact@balticseanews.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D1835A] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#5E8E87]">
              © 2026 The Baltic See. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-[#5E8E87] hover:text-[#D1835A] text-sm transition-colors">
                Privacy
              </a>
              <a href="#" className="text-[#5E8E87] hover:text-[#D1835A] text-sm transition-colors">
                Terms
              </a>
              <a href="#" className="text-[#5E8E87] hover:text-[#D1835A] text-sm transition-colors">
                Methodology
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
