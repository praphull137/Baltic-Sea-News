import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Radar, GitBranch, FileText } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: 'News Verification',
    description: 'Verify articles, claims, URLs, and images.',
  },
  {
    icon: Radar,
    title: 'Source Intelligence',
    description: 'Analyze credibility, ownership, and reliability.',
  },
  {
    icon: GitBranch,
    title: 'Story Timeline',
    description: 'Track how stories evolve across media channels.',
  },
  {
    icon: FileText,
    title: 'Evidence Reports',
    description: 'Generate transparent verification reports.',
  },
];

const MissionSection = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#03353E] sm:text-4xl font-poppins mb-4 tracking-tight">
            How The Baltic See Works
          </h2>
          <motion.div
            className="w-20 h-1 bg-[#5C8C85] mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="text-center mb-14 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-[#03353E]/70 leading-relaxed">
            Our platform combines evidence collection, source intelligence, and
            AI-assisted analysis to help users verify information before sharing it.
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#5C8C85]/12 text-[#5C8C85] transition-colors group-hover:bg-[#5C8C85] group-hover:text-white">
                <value.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-[#03353E] mb-2">
                {value.title}
              </h3>
              <p className="text-[#03353E]/60 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
