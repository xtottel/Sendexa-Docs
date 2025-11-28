'use client';

import { motion } from 'framer-motion';
import { Zap, Globe, Shield, Clock } from 'lucide-react';

export default function CompactStatsSection() {
  const stats = [
    {
      icon: Zap,
      value: '99.95%',
      label: 'Uptime SLA',
      sublabel: 'Across Africa',
    },
    {
      icon: Globe,
      value: '54',
      label: 'Countries',
      sublabel: 'African Coverage',
    },
    {
      icon: Shield,
      value: '50M+',
      label: 'Messages/Day',
      sublabel: 'Peak Capacity',
    },
    {
      icon: Clock,
      value: '<100ms',
      label: 'Avg Latency',
      sublabel: 'Local Routing',
    },
  ];

  return (
    <section className="relative py-12 bg-gradient-to-b from-gray-900 to-gray-950 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg border border-gray-700 group-hover:border-yellow-500/50 transition-all duration-300 mb-4">
                <stat.icon className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-300 font-semibold">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
