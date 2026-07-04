import React from 'react';
import { Globe, Languages, Heart, Video, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AccessibilitySection = () => {
  const accessFeatures = [
    {
      icon: Globe,
      title: 'Universal Access',
      description: 'Breaking down geographical barriers to provide healthcare access regardless of your location or citizenship status.',
      gradient: 'from-professional-purple-500 to-professional-blue-600'
    },
    {
      icon: Languages,
      title: 'Multilingual Support',
      description: 'Healthcare services available in 50+ languages with certified medical interpreters and culturally adapted content.',
      gradient: 'from-professional-blue-500 to-professional-green-500'
    },
    {
      icon: Video,
      title: 'Telehealth Solutions',
      description: 'Secure video consultations with licensed healthcare professionals, available 24/7 across multiple time zones.',
      gradient: 'from-professional-green-500 to-professional-purple-500'
    },
    {
      icon: Heart,
      title: 'Inclusive Interface',
      description: 'Designed with accessibility in mind, supporting users with disabilities through adaptive technologies and universal design.',
      gradient: 'from-professional-purple-500 to-professional-pink-500'
    },
    {
      icon: Shield,
      title: 'Equitable Care',
      description: 'Ensuring fair and just healthcare delivery regardless of socio-economic background, with sliding scale pricing options.',
      gradient: 'from-professional-pink-500 to-professional-orange-500'
    },
    {
      icon: Users,
      title: 'Community Health',
      description: 'Building healthier communities through peer support networks and collaborative care approaches.',
      gradient: 'from-professional-orange-500 to-professional-purple-500'
    }
  ];

  return (
    <section id="accessibility" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold bg-gradient-to-r from-professional-purple-600 to-professional-blue-600 bg-clip-text text-transparent sm:text-4xl font-poppins mb-4  from-green-400 to-blue-500"
            whileHover={{ scale: 1.02 }}
          >
            Access to Health Services
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-professional-purple-500 to-professional-blue-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ensuring barrier-free and equitable access to both mental and physical health services across different countries, 
            languages, and socio-economic backgrounds through innovative technology and inclusive design.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {accessFeatures.map((feature, index) => (
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
      className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg`}
      whileHover={{ scale: 1.15, rotate: 10 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
    >
      <feature.icon className="h-6 w-6 text-black dark:text-white" />
    </motion.div>
    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-professional-purple-600 dark:group-hover:text-professional-purple-400 transition-colors">
      {feature.title}
    </CardTitle>
  </div>
</CardHeader>

                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Access Statistics */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-professional-purple-600 via-professional-blue-600 to-professional-green-600 rounded-2xl shadow-2xl p-8 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Breaking Barriers Worldwide</h3>
              <p className="text-black/90 dark:bg-none dark:text-white">Our commitment to accessible healthcare reaches every corner of the globe</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "195", label: "Countries Served", color: "text-blue-400 ",},
                { value: "50+", label: "Languages Supported", color: "text-green-400" },
                { value: "24/7", label: "Support Available", color: "text-purple-400" },
                { value: "100%", label: "Accessibility Compliant", color: "text-orange-400" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-black/80 dark:bg-none dark:text-white">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AccessibilitySection;