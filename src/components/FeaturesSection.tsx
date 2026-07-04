
import React from 'react';
import { Brain, Activity, Users, Video } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: 'Cross-border Educational Support',
      description: 'Connect with educators and mentors from around Europe. Get academic support in your preferred language and cultural context.',
      color: 'bg-gradient-to-r from-wellness-purple-500 to-wellness-blue-500',
      bgColor: 'bg-gradient-to-br from-wellness-purple-50 to-wellness-blue-50 dark:from-wellness-purple-900/20 dark:to-wellness-blue-900/20',
      borderColor: 'border-wellness-purple-200 dark:border-wellness-purple-700'
    },
    {
      icon: Activity,
      title: 'Learning Progress Tracking',
      description: 'Track your academic progress, monitor study habits, and access personalized learning programs designed by European education experts.',
      color: 'bg-gradient-to-r from-wellness-green-500 to-wellness-blue-500',
      bgColor: 'bg-gradient-to-br from-wellness-green-50 to-wellness-blue-50 dark:from-wellness-green-900/20 dark:to-wellness-blue-900/20',
      borderColor: 'border-wellness-green-200 dark:border-wellness-green-700'
    },
    {
      icon: Video,
      title: 'Virtual Study Sessions & Remote Learning',
      description: 'Join video study sessions with students and educators worldwide. Access educational content regardless of your location.',
      color: 'bg-gradient-to-r from-wellness-pink-500 to-wellness-purple-500',
      bgColor: 'bg-gradient-to-br from-wellness-pink-50 to-wellness-purple-50 dark:from-wellness-pink-900/20 dark:to-wellness-purple-900/20',
      borderColor: 'border-wellness-pink-200 dark:border-wellness-pink-700'
    },
    {
      icon: Users,
      title: 'Student Communities & Study Circles',
      description: 'Join supportive learning communities based on shared subjects, interests, or academic goals. Find your study tribe across Europe.',
      color: 'bg-gradient-to-r from-wellness-orange-500 to-wellness-pink-500',
      bgColor: 'bg-gradient-to-br from-wellness-orange-50 to-wellness-pink-50 dark:from-wellness-orange-900/20 dark:to-wellness-pink-900/20',
      borderColor: 'border-wellness-orange-200 dark:border-wellness-orange-700'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold bg-gradient-to-r from-wellness-purple-600 to-wellness-blue-600 bg-clip-text text-transparent sm:text-4xl font-poppins mb-4"
            whileHover={{ scale: 1.02 }}
          >
            {t('features.title')}
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-wellness-purple-500 to-wellness-blue-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card-hover"
            >
              <Card 
                className={`group hover:shadow-2xl transition-all duration-500 ${feature.bgColor} ${feature.borderColor} border-2 h-full vibrant-card backdrop-blur-sm`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className={`p-3 rounded-xl ${feature.color} text-white shadow-lg`}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    >
                      <feature.icon className="h-6 w-6" />
                    </motion.div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-wellness-purple-600 dark:group-hover:text-wellness-purple-400 transition-colors">
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

        {/* Enhanced CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-wellness-purple-600 via-wellness-blue-600 to-wellness-green-600 rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto text-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-r from-wellness-purple-600/90 via-wellness-blue-600/90 to-wellness-green-600/90"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Experience Borderless Learning?
              </h3>
              <p className="text-white/90 mb-6">
                Join thousands of students who have already transformed their educational journey with our European platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="bg-white text-wellness-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
                <motion.button 
                  className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 backdrop-blur-md transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Demo
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
