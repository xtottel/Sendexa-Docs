'use client';

import { motion } from 'framer-motion';
import { Building, ShieldCheck, Target, PieChart, MapPin } from 'lucide-react';

export default function AfricanAdvantage() {
  const advantages = [
    {
      icon: Building,
      title: 'Local Infrastructure',
      description: 'Direct partnerships with all major African mobile carriers',
      metrics: '10+ local data centers',
    },
    {
      icon: ShieldCheck,
      title: 'Regulatory Compliance',
      description: 'Fully compliant with local telecommunications regulations',
      metrics: '54 countries covered',
    },
    {
      icon: Target,
      title: 'Optimized Routing',
      description: 'Intelligent routing for best performance and lowest costs',
      metrics: '99.9% delivery rate',
    },
    {
      icon: PieChart,
      title: 'Cost Effective',
      description: 'Local pricing that beats international competitors',
      metrics: 'Save up to 60%',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30 mb-4">
            <MapPin className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">
              African Advantage
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Built for African Markets
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Why African businesses choose us over international alternatives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-all duration-300">
                  <advantage.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -inset-4 bg-green-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 -z-10"></div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-400 mb-4">{advantage.description}</p>
              <div className="text-green-400 font-semibold text-sm">
                {advantage.metrics}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
