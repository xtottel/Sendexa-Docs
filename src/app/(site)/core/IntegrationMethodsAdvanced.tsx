'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Workflow,
  Terminal,
  Cloud,
  Server,
  Database,
  ChevronRight,
} from 'lucide-react';

type Complexity = 'Easy' | 'Medium' | 'Advanced';

export default function IntegrationMethodsAdvanced() {
  const methods: {
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
    complexity: Complexity;
  }[] = [
    {
      icon: Code2,
      title: 'REST API',
      description: 'Direct HTTP integration with JSON responses',
      color: 'blue',
      complexity: 'Easy',
    },
    {
      icon: Workflow,
      title: 'Webhooks',
      description: 'Real-time event notifications to your servers',
      color: 'green',
      complexity: 'Medium',
    },
    {
      icon: Terminal,
      title: 'CLI Tool',
      description: 'Command-line interface for automation',
      color: 'orange',
      complexity: 'Easy',
    },
    {
      icon: Cloud,
      title: 'Cloud SDKs',
      description: 'Official libraries for all major languages',
      color: 'purple',
      complexity: 'Easy',
    },
    {
      icon: Server,
      title: 'WebSocket',
      description: 'Real-time bidirectional communication',
      color: 'red',
      complexity: 'Advanced',
    },
    {
      icon: Database,
      title: 'Database Sync',
      description: 'Automatic synchronization with your database',
      color: 'yellow',
      complexity: 'Medium',
    },
  ];

  const complexityColor: Record<Complexity, string> = {
    Easy: 'text-green-400',
    Medium: 'text-yellow-400',
    Advanced: 'text-red-400',
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Integration Methods
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the approach that fits your technical expertise and
            requirements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-center border border-gray-700 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <method.icon className="h-8 w-8 text-blue-400" />
              </div>

              <div className="flex items-center justify-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-white">{method.title}</h3>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full bg-gray-700 ${complexityColor[method.complexity]}`}
                >
                  {method.complexity}
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-4">{method.description}</p>

              <button className="text-sm text-gray-500 hover:text-yellow-400 transition-colors">
                Learn more <ChevronRight className="inline h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
