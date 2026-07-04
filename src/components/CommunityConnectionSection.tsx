import React from 'react';
import { Users, MessageCircle, Heart, Share2, MapPin, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CommunityConnectionSection = () => {
  const connectionFeatures = [
    {
      icon: Users,
      title: 'Peer Support Networks',
      description: 'Connect with others who share similar health journeys, creating meaningful relationships that transcend geographical boundaries.',
      gradient: 'from-professional-blue-500 to-professional-green-500'
    },
    {
      icon: MessageCircle,
      title: 'Safe Spaces for Sharing',
      description: 'Moderated forums and chat rooms where users can share experiences, ask questions, and offer support in a secure environment.',
      gradient: 'from-professional-green-500 to-professional-purple-500'
    },
    {
      icon: Heart,
      title: 'Emotional Support',
      description: 'Access to trained peer counselors and support groups that understand the unique challenges of cross-cultural healthcare.',
      gradient: 'from-professional-purple-500 to-professional-pink-500'
    },
    {
      icon: Share2,
      title: 'Experience Sharing',
      description: 'Share your wellness journey, tips, and success stories to inspire and help others in their path to better health.',
      gradient: 'from-professional-pink-500 to-professional-orange-500'
    },
    {
      icon: MapPin,
      title: 'Location-Based Groups',
      description: 'Find and connect with community members in your area for local support and in-person meetups when possible.',
      gradient: 'from-professional-orange-500 to-professional-blue-500'
    },
    {
      icon: Zap,
      title: 'Instant Connection',
      description: 'Real-time matching with compatible community members based on shared interests, health goals, and cultural background.',
      gradient: 'from-professional-blue-500 to-professional-purple-500'
    }
  ];

  return (
    <section id="community-connection" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-green-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold bg-gradient-to-r from-professional-blue-700 to-professional-green-600 bg-clip-text text-transparent sm:text-4xl font-poppins mb-4 from-green-400 to-blue-600"
            whileHover={{ scale: 1.02 }}
          >
            Community & Connection
          </motion.h2> 
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-professional-blue-500 to-professional-green-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Creating a sense of belonging and support on our platform by enabling users to connect, share experiences, 
            and support each other — regardless of their physical location or personal background.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {connectionFeatures.map((feature, index) => (
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
                      className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} text-white shadow-lg`}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    >
                      <feature.icon className="h-6 w-6  text-black dark:text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-professional-blue-600 dark:group-hover:text-professional-blue-400 transition-colors">
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

        {/* Community Impact */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-professional-blue-600 via-professional-green-600 to-professional-purple-600 rounded-2xl shadow-2xl p-8 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Building Stronger Communities</h3>
              <p className="text-black/90 dark:text-white">Our platform fosters connections that create lasting positive impact</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "500K+", label: "Active Community Members", color: "text-blue-400" },
                { value: "1M+", label: "Support Messages Sent", color: "text-green-400" },
                { value: "10K+", label: "Support Groups Created", color: "text-purple-400" },
                { value: "95%", label: "Feel More Connected", color: "text-orange-400" }
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
                  <div className="text-black dark:text-white">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-white via-blue-50/50 to-green-50/50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Join Our Global Community Today
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Be part of a supportive network that transcends borders, cultures, and backgrounds. Together, we're building a healthier world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <motion.button 
  className="bg-gradient-to-r from-blue-700 to-green-600 text-white px-8 py-3 rounded-xl font-semibold border border-blue-800/40 dark:border-none shadow-md hover:shadow-lg transition-all duration-300"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
>
  Join Community
</motion.button>

             <motion.button 
  className="bg-gradient-to-r from-blue-700 to-green-600 text-white px-8 py-3 rounded-xl font-semibold border border-blue-800/40 dark:border-none shadow-md hover:shadow-lg transition-all duration-300"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
>
  Explore groups
</motion.button>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityConnectionSection;