'use client';

import { motion } from 'framer-motion';
import { Users, Terminal, Send, Rocket, Zap } from 'lucide-react';

export default function QuickStartFlowAdvanced() {
  const steps = [
    {
      step: 1,
      icon: Users,
      title: 'Create Account',
      description: 'Sign up in 30 seconds',
      duration: '30s',
      color: 'from-blue-500 to-blue-600',
    },
    {
      step: 2,
      icon: Terminal,
      title: 'Install SDK',
      description: 'Add our library to your project',
      duration: '1min',
      color: 'from-green-500 to-green-600',
    },
    {
      step: 3,
      icon: Send,
      title: 'Send Message',
      description: 'Make your first API call',
      duration: '2min',
      color: 'from-orange-500 to-orange-600',
    },
    {
      step: 4,
      icon: Rocket,
      title: 'Go Live',
      description: 'Deploy to production',
      duration: '1min',
      color: 'from-purple-500 to-purple-600',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-4">
            <Zap className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">
              Quick Start
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Go Live in <span className="text-yellow-400">5 Minutes</span>
          </h2>
          <p className="text-xl text-gray-300">
            Simple steps to get your first message sent across Africa
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-gray-700 hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group relative"
              >
                {/* Step Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-gray-700 group-hover:bg-yellow-400 transition-colors"></div>
                )}

                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10`}
                  >
                    <step.icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 border-2 border-yellow-400 text-yellow-400 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.step}
                  </div>

                  {/* Duration */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700">
                    {step.duration}
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 -z-10"></div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 h-2 bg-gray-800 rounded-full overflow-hidden"
        >
          <div className="h-full bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
