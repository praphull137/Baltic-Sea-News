
import React from 'react';
import { Star, Quote, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria González",
      role: "Computer Science Student",
      country: "Spain",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
      content: "Borderless Learning transformed my academic journey. I connected with students from 15 different countries and improved my programming skills through collaborative projects.",
      rating: 5,
      course: "International Computer Science Program"
    },
    {
      name: "Hans Mueller",
      role: "Language Exchange Coordinator",
      country: "Germany",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "The language exchange platform is incredible. I've helped over 200 students learn German while improving my English and French. The community is so supportive!",
      rating: 5,
      course: "Multilingual Communication Studies"
    },
    {
      name: "Sophie Dubois",
      role: "Research Assistant",
      country: "France",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "The research collaboration tools are outstanding. I'm working on a European history project with students from 8 countries. This platform breaks down all barriers.",
      rating: 5,
      course: "European History & Culture"
    },
    {
      name: "Alessandro Rossi",
      role: "Medical Student",
      country: "Italy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "Studying medicine across borders has never been easier. The virtual study sessions and access to international medical resources have been game-changing.",
      rating: 5,
      course: "International Medical Studies"
    },
    {
      name: "Anna Kowalski",
      role: "Business Student",
      country: "Poland",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      content: "The business networking opportunities are amazing. I've connected with future entrepreneurs from all over Europe and we're planning to start a company together!",
      rating: 5,
      course: "European Business Management"
    },
    {
      name: "Erik Nilsson",
      role: "Engineering Student",
      country: "Sweden",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      content: "The engineering collaboration tools are top-notch. Working on sustainable energy projects with international teams has broadened my perspective immensely.",
      rating: 5,
      course: "Sustainable Engineering"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold bg-gradient-to-r from-wellness-purple-600 to-wellness-blue-600 bg-clip-text text-transparent font-poppins mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Student Success Stories
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-wellness-purple-500 to-wellness-blue-500 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how students across Europe are transforming their educational journey through our collaborative platform
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 vibrant-card">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <motion.div 
                    className="mb-4"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Quote className="h-8 w-8 text-wellness-blue-500 opacity-50" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Course Badge */}
                  <div className="mb-4">
                    <span className="inline-block bg-gradient-to-r from-wellness-blue-100 to-wellness-purple-100 dark:from-wellness-blue-900/30 dark:to-wellness-purple-900/30 text-wellness-blue-700 dark:text-wellness-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                      {testimonial.course}
                    </span>
                  </div>

                  {/* Profile */}
                  <div className="flex items-center">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-wellness-blue-200 dark:border-wellness-blue-700"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                    </motion.div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {testimonial.role} • {testimonial.country}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-wellness-blue-600 via-wellness-purple-600 to-wellness-pink-600 rounded-3xl p-8 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-wellness-blue-600/90 via-wellness-purple-600/90 to-wellness-pink-600/90"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">Trusted by Students Worldwide</h3>
              <p className="text-white/90">Join thousands of students who have transformed their education</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "50,000+", label: "Active Students" },
                { value: "98%", label: "Satisfaction Rate" },
                { value: "120+", label: "Countries" },
                { value: "500+", label: "Universities" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
