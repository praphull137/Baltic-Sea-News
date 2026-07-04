
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I join study groups with international students?",
      answer: "Simply browse our community section, filter by your subject or language preference, and click 'Join Group'. You can also create your own study group and invite students from specific countries or universities."
    },
    {
      question: "What languages are supported on the platform?",
      answer: "We support 13 major European languages including English, German, French, Spanish, Italian, Dutch, Portuguese, Polish, Swedish, Norwegian, Danish, Finnish, and Czech. All content and communication can be accessed in your preferred language."
    },
    {
      question: "Is the platform free to use?",
      answer: "Yes! Basic features including community access, study groups, language exchange, and basic learning tools are completely free. We also offer premium features for advanced collaboration tools and priority support."
    },
    {
      question: "How does the language exchange program work?",
      answer: "Our language exchange connects you with native speakers who want to learn your language. You can schedule video calls, participate in group conversations, and access structured learning materials designed by language education experts."
    },
    {
      question: "Can I get academic credits for participating?",
      answer: "Many universities across Europe recognize participation in our international programs. We provide certificates and detailed participation reports that you can submit to your academic advisors for credit consideration."
    },
    {
      question: "How do I find students from specific universities?",
      answer: "Use our advanced search filters to find students by university, major, academic year, or specific courses. You can also browse university-specific groups and join discussions relevant to your academic interests."
    },
    {
      question: "What kind of learning resources are available?",
      answer: "We offer a vast library of educational content including interactive courses, research collaboration tools, virtual study materials, video lectures from European universities, and access to academic databases."
    },
    {
      question: "How secure is my personal information?",
      answer: "We take privacy seriously and comply with GDPR regulations. All personal data is encrypted, and we never share your information with third parties without explicit consent. You have full control over your privacy settings."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex justify-center mb-4"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <HelpCircle className="h-12 w-12 text-wellness-blue-600" />
          </motion.div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-wellness-blue-600 to-wellness-purple-600 bg-clip-text text-transparent font-poppins mb-4">
            Frequently Asked Questions
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-wellness-blue-500 to-wellness-purple-500 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find answers to common questions about our educational platform
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-wellness-blue-600" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-12 text-center bg-gradient-to-r from-wellness-blue-600 to-wellness-purple-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="mb-6 text-white/90">
            Our support team is here to help you get started with your learning journey
          </p>
          <motion.button 
            className="bg-white text-wellness-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
