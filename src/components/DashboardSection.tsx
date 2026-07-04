import React from 'react';
import { ShieldCheck, GitBranch, Radar, FileText, Clock, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const quickActions = [
  { icon: ShieldCheck, label: 'Verify News', color: '#4BAF94' },
  { icon: GitBranch, label: 'Story Timeline', color: '#9FBC56' },
  { icon: Radar, label: 'Source Intelligence', color: '#AC7BB6' },
  { icon: FileText, label: 'Reports', color: '#D1835A' },
];

const recentVerifications = [
  { title: 'New tax policy introduced', verdict: 'Verified', confidence: '94%', color: '#4BAF94' },
  { title: 'Energy prices to double claim', verdict: 'Misleading', confidence: '81%', color: '#D1835A' },
  { title: 'Election turnout figures', verdict: 'Verified', confidence: '97%', color: '#4BAF94' },
];

const savedReports = [
  { title: 'Regional Election Coverage', date: 'Report • 12 sources' },
  { title: 'Energy Security Narrative', date: 'Report • 8 sources' },
];

const trendingTopics = [
  { label: 'Baltic Energy Policy', percent: 82, from: '#9FBC56', to: '#4BAF94' },
  { label: 'Cross-Border Trade', percent: 64, from: '#4BAF91', to: '#AC7BB6' },
  { label: 'Regional Elections', percent: 51, from: '#9FBC56', to: '#4BAF94' },
];

const DashboardSection = () => {
  return (
    <section id="dashboard" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D121C] font-poppins mb-4">
            News Intelligence Dashboard
          </h2>
          <div className="w-24 h-1 bg-[#D1835A] mx-auto mb-8 rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A single workspace to verify claims, trace stories, assess sources, and
            manage your evidence reports — all in real time.
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          className="mt-16 bg-white dark:bg-gray-900 rounded-2xl p-8 lg:p-12 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Dashboard Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#0D121C] dark:text-white mb-2">Welcome back, Analyst</h3>
                <p className="text-gray-600 dark:text-gray-300">Here's your verification workspace for today</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <div className="flex items-center space-x-2 bg-[#E9F4EF] dark:bg-[#2E4B45] px-4 py-2 rounded-lg">
                  <motion.div
                    className="w-3 h-3 bg-[#4BAF94] rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-[#227B66] dark:text-[#A8E4D4] font-medium">Live feed active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {quickActions.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="bg-white dark:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(to right, ${item.color}, ${item.color})`,
                      }}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="font-medium text-[#0D121C] dark:text-white">{item.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Dashboard Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Recent Verifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#F8FBFA] dark:bg-[#1F2E2B] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                <CardHeader className="pb-2 -mb-2">
                  <CardTitle className="text-lg text-[#0D121C] dark:text-white flex items-center">
                    <ShieldCheck className="h-5 w-5 text-[#4BAF94] mr-2" />
                    Recent Verifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentVerifications.map(({ title, verdict, confidence, color }) => (
                      <div key={title} className="flex justify-between items-start gap-4">
                        <div className="min-w-0">
                          <p className="truncate text-gray-700 dark:text-gray-300 text-sm">{title}</p>
                          <span className="text-xs font-semibold" style={{ color }}>
                            {verdict}
                          </span>
                        </div>
                        <span className="shrink-0 font-semibold text-[#0D121C] dark:text-white text-sm">
                          {confidence}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Trending Topics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#F9F7FB] dark:bg-[#2A2533] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-[#0D121C] dark:text-white flex items-center">
                    <TrendingUp className="h-5 w-5 text-[#AC7BB6] mr-2" />
                    Trending Topics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-4">
                    {trendingTopics.map((item, i) => (
                      <div key={item.label}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{item.label}</span>
                          <span className="text-[#0D121C] dark:text-white text-sm">{item.percent}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="h-2 rounded-full"
                            style={{
                              background: `linear-gradient(to right, ${item.from}, ${item.to})`,
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.percent}%` }}
                            transition={{ duration: 1, delay: 0.4 + i * 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Saved Reports */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#F3FAF6] dark:bg-[#24322C] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-[#0D121C] dark:text-white flex items-center">
                    <FileText className="h-5 w-5 text-[#9FBC56] mr-2 mb-4" />
                    Saved Reports
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {savedReports.map((event) => (
                      <div key={event.title} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-[#D1835A]"></div>
                        <div>
                          <p className="text-sm font-medium text-[#0D121C] dark:text-white">{event.title}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{event.date}</p>
                        </div>
                      </div>
                    ))}
                    <button className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-[#D1835A] hover:text-[#bf6f47] transition-colors">
                      <Clock className="h-3.5 w-3.5" />
                      View verification history
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
