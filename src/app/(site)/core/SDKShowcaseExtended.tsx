'use client';

import { motion } from 'framer-motion';

export default function SDKShowcaseExtended() {
  const sdks = [
    {
      name: 'JavaScript',
      icon: '🟨',
      version: 'v3.2.1',
      color: 'bg-yellow-500/20',
      text: 'text-yellow-400',
    },
    {
      name: 'Python',
      icon: '🐍',
      version: 'v2.8.2',
      color: 'bg-green-500/20',
      text: 'text-green-400',
    },
    {
      name: 'Java',
      icon: '☕',
      version: 'v4.0.1',
      color: 'bg-red-500/20',
      text: 'text-red-400',
    },
    {
      name: 'Go',
      icon: '🐹',
      version: 'v2.2.0',
      color: 'bg-blue-500/20',
      text: 'text-blue-400',
    },
    {
      name: 'Ruby',
      icon: '💎',
      version: 'v3.0.4',
      color: 'bg-pink-500/20',
      text: 'text-pink-400',
    },
    {
      name: 'C#',
      icon: '🔷',
      version: 'v3.3.1',
      color: 'bg-purple-500/20',
      text: 'text-purple-400',
    },
    {
      name: 'PHP',
      icon: '🐘',
      version: 'v3.5.3',
      color: 'bg-indigo-500/20',
      text: 'text-indigo-400',
    },
    {
      name: 'Swift',
      icon: '🐦',
      version: 'v2.5.0',
      color: 'bg-orange-500/20',
      text: 'text-orange-400',
    },
    {
      name: 'Kotlin',
      icon: '📱',
      version: 'v2.1.0',
      color: 'bg-purple-500/20',
      text: 'text-purple-400',
    },
    {
      name: 'Rust',
      icon: '🦀',
      version: 'v1.8.0',
      color: 'bg-orange-500/20',
      text: 'text-orange-400',
    },
    {
      name: 'Dart',
      icon: '🎯',
      version: 'v2.4.1',
      color: 'bg-blue-500/20',
      text: 'text-blue-400',
    },
    {
      name: 'TypeScript',
      icon: '📘',
      version: 'v4.1.0',
      color: 'bg-blue-500/20',
      text: 'text-blue-400',
    },
  ];

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
            Language Support
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Official SDKs for every popular programming language, with African
            market optimizations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {sdks.map((sdk, index) => (
            <motion.div
              key={sdk.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`bg-gray-800 rounded-xl p-4 text-center border border-gray-700 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 group ${sdk.color}`}
            >
              <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                {sdk.icon}
              </div>
              <h3 className={`font-bold mb-1 text-sm ${sdk.text}`}>
                {sdk.name}
              </h3>
              <div className="text-xs text-gray-400 font-mono bg-gray-900/50 rounded px-2 py-1">
                {sdk.version}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
