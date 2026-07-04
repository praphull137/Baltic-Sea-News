import React from 'react';
import { Globe2, BookOpen, Handshake, Compass, Star, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CulturalSection = () => {
  const culturalValues = [
    {
      icon: Globe2,
      title: 'Cultural Adaptation',
      description: 'Healthcare solutions adapted to local customs, traditions, and health beliefs from diverse global communities.',
      gradient: 'from-professional-purple-500 to-professional-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Traditional Wisdom',
      description: 'Integrating traditional healing practices with modern medicine, respecting ancestral knowledge and holistic approaches.',
      gradient: 'from-professional-blue-500 to-professional-green-500'
    },
    {
      icon: Handshake,
      title: 'Cultural Competency',
      description: 'Healthcare providers trained in cultural sensitivity, ensuring respectful and effective cross-cultural care.',
      gradient: 'from-professional-green-500 to-professional-purple-500'
    },
    {
      icon: Compass,
      title: 'Value-Based Care',
      description: 'Respecting diverse religious, spiritual, and philosophical approaches to health and wellbeing across all cultures.',
      gradient: 'from-professional-purple-500 to-professional-pink-500'
    },
    {
      icon: Star,
      title: 'Community Practices',
      description: 'Recognizing and incorporating community-specific health practices and collective healing approaches.',
      gradient: 'from-professional-pink-500 to-professional-orange-500'
    },
    {
      icon: Lightbulb,
      title: 'Cultural Innovation',
      description: 'Developing new healthcare solutions inspired by diverse cultural perspectives and innovative healing traditions.',
      gradient: 'from-professional-orange-500 to-professional-purple-500'
    }
  ];

  return (
    <section id="cultural" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
  className="text-3xl sm:text-4xl font-bold font-poppins mb-4 text-black dark:text-white bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
  whileHover={{ scale: 1.02 }}
>
  Cultural Understanding
</motion.h2>

          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-professional-purple-500 to-professional-green-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Integrating cultural sensitivity into all wellbeing solutions, recognizing and adapting to diverse health beliefs, 
            practices, and values from different regions and communities worldwide.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {culturalValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card-hover"
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 border-2 border-gray-200 dark:border-gray-700 h-full backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className={`p-3 rounded-xl bg-gradient-to-r ${value.gradient} text-white shadow-lg`}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    >
                      <value.icon className="h-6 w-6 text-black dark:text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-professional-green-600 dark:group-hover:text-professional-green-400 transition-colors">
                      {value.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Cultural Diversity Showcase */}
        <motion.div 
          className="mt-16 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-professional-purple-50 to-professional-blue-50 dark:from-professional-purple-900/20 dark:to-professional-blue-900/20 rounded-2xl p-8 border-2 border-professional-purple-200 dark:border-professional-purple-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Traditional Medicine Integration</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We honor and integrate traditional healing practices from around the world, combining ancient wisdom with modern healthcare approaches.
            </p>
            <div className="space-y-3">
              {[
                'Ayurvedic principles from India',
                'Traditional Chinese Medicine',
                'Indigenous healing practices',
                'European herbal traditions'
              ].map((practice, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-professional-purple-500 to-professional-blue-500 rounded-full mr-3"></div>
                  {practice}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-professional-green-50 to-professional-purple-50 dark:from-professional-green-900/20 dark:to-professional-purple-900/20 rounded-2xl p-8 border-2 border-professional-green-200 dark:border-professional-green-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cultural Competency Training</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our healthcare providers undergo extensive cultural competency training to ensure respectful and effective care across all communities.
            </p>
            <div className="space-y-3">
              {[
                'Cross-cultural communication',
                'Religious sensitivity training',
                'Community-specific practices',
                'Bias awareness programs'
              ].map((training, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-professional-green-500 to-professional-purple-500 rounded-full mr-3"></div>
                  {training}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CulturalSection;