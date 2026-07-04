import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, GitBranch, Radar, FileText } from 'lucide-react';

const services = [
  {
    icon: ShieldCheck,
    title: 'News Verification',
    lead: 'Check:',
    features: ['Articles', 'Headlines', 'Claims', 'URLs', 'Images'],
    outputs: ['Verdict', 'Confidence Score', 'Sources'],
  },
  {
    icon: GitBranch,
    title: 'Story Timeline',
    lead: 'Track:',
    features: [
      'Original Story',
      'Media Coverage',
      'Social Media Discussion',
      'Fact Checks',
      'Current Status',
    ],
    timeline: true,
  },
  {
    icon: Radar,
    title: 'Source Intelligence',
    lead: 'Analyze:',
    features: [
      'Credibility',
      'Ownership',
      'Historical Reliability',
      'Editorial Transparency',
    ],
  },
  {
    icon: FileText,
    title: 'Evidence Reports',
    lead: 'Generate:',
    features: [
      'Verification Summary',
      'Supporting Evidence',
      'Contradicting Evidence',
      'Sources',
      'Exportable Reports',
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#03353E] sm:text-4xl font-poppins mb-4 tracking-tight">
            Core Features
          </h2>
          <motion.div
            className="w-20 h-1 bg-[#5C8C85] mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-lg text-[#03353E]/70 max-w-3xl mx-auto">
            A complete toolkit to verify information, trace its origins, and
            understand how stories develop across the Baltic region.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-[#5C8C85]/40 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5C8C85]/12 text-[#5C8C85] transition-colors group-hover:bg-[#5C8C85] group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#03353E]">
                  {service.title}
                </h3>
              </div>

              <p className="text-sm font-medium uppercase tracking-wide text-[#03353E]/50 mb-3">
                {service.lead}
              </p>

              {service.timeline ? (
                <div className="space-y-1">
                  {service.features.map((feature, i) => (
                    <div key={feature}>
                      <div className="flex items-center gap-3 rounded-lg bg-gray-50 px-4 py-2.5 text-sm font-medium text-[#03353E] shadow-sm">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5C8C85]/15 text-xs font-semibold text-[#5C8C85]">
                          {i + 1}
                        </span>
                        {feature}
                      </div>
                      {i < service.features.length - 1 && (
                        <div className="ml-[1.9rem] h-3 w-px bg-[#5C8C85]/40" />
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-[#03353E]/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#5C8C85]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {service.outputs && (
                <div className="mt-5 border-t border-gray-200 pt-4">
                  <p className="mb-2 text-sm font-medium uppercase tracking-wide text-[#03353E]/50">
                    Outputs:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.outputs.map((output) => (
                      <span
                        key={output}
                        className="rounded-full bg-[#5C8C85]/12 px-3 py-1 text-xs font-medium text-[#4c7a7d]"
                      >
                        {output}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
