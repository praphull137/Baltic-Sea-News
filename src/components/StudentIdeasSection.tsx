
import React, { useState } from 'react';
import { Send, Lightbulb, User, Mail, MessageSquare, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const StudentIdeasSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    idea: '',
    category: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Student idea submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', idea: '', category: 'general' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-wellness-blue-50 to-wellness-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-4">
            <div className="p-3 bg-wellness-blue-600 rounded-full">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl font-poppins mb-4"
          >
            Share Your Ideas
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-wellness-green-500 mx-auto mb-6" />
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Have a brilliant idea to improve European education collaboration? We want to hear from you! 
            Share your thoughts and help us build a better learning community together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-0 bg-white dark:bg-gray-800 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-wellness-blue-600 to-wellness-green-600 text-white">
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <MessageSquare className="h-6 w-6" />
                  <span>Submit Your Idea</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        className="space-y-2"
                      >
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>Your Name</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-wellness-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                          placeholder="Enter your full name"
                        />
                      </motion.div>

                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        className="space-y-2"
                      >
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center space-x-2">
                          <Mail className="h-4 w-4" />
                          <span>Email Address</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-wellness-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                          placeholder="your.email@university.edu"
                        />
                      </motion.div>
                    </div>

                    <motion.div whileFocus={{ scale: 1.01 }} className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Category
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-wellness-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                      >
                        <option value="general">General Improvement</option>
                        <option value="features">New Features</option>
                        <option value="collaboration">Collaboration Tools</option>
                        <option value="language">Language Exchange</option>
                        <option value="events">Events & Activities</option>
                        <option value="technical">Technical Issues</option>
                      </select>
                    </motion.div>

                    <motion.div whileFocus={{ scale: 1.01 }} className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center space-x-2">
                        <Lightbulb className="h-4 w-4" />
                        <span>Your Idea</span>
                      </label>
                      <textarea
                        name="idea"
                        value={formData.idea}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-wellness-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all resize-none"
                        placeholder="Share your idea in detail. How would it improve the platform? What problem does it solve? Be as specific as possible..."
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-wellness-blue-600 to-wellness-green-600 hover:from-wellness-blue-700 hover:to-wellness-green-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300"
                        disabled={!formData.name || !formData.email || !formData.idea}
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Submit Your Idea
                      </Button>
                    </motion.div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Lightbulb className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Your idea has been submitted successfully. We'll review it and get back to you soon!
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Why Your Ideas Matter
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <Users className="h-6 w-6 text-wellness-blue-600" />,
                    title: "Student-Driven Innovation",
                    description: "Our platform evolves based on real student needs and experiences."
                  },
                  {
                    icon: <Globe className="h-6 w-6 text-wellness-green-600" />,
                    title: "Cross-Cultural Perspectives",
                    description: "Ideas from students across Europe help us build truly inclusive features."
                  },
                  {
                    icon: <Lightbulb className="h-6 w-6 text-wellness-blue-600" />,
                    title: "Rapid Implementation",
                    description: "Great ideas are fast-tracked into our development roadmap."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-wellness-blue-600 to-wellness-green-600 rounded-2xl p-6 text-white"
            >
              <h4 className="text-xl font-bold mb-2">Join Our Beta Program</h4>
              <p className="text-blue-100 mb-4">
                Get early access to new features and help shape the future of European education collaboration.
              </p>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-wellness-blue-600"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudentIdeasSection;
