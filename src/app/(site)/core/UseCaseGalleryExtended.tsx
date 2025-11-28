'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  Bell,
  BarChart3,
  MessageCircle,
  Wallet,
  Target,
} from 'lucide-react';
import Truck from './Truck';

export default function UseCaseGalleryExtended() {
  const useCases = [
    {
      category: 'Authentication',
      title: 'Secure User Verification',
      description:
        'Implement OTP and two-factor authentication flows optimized for African networks',
      icon: Shield,
      color: 'blue',
      examples: ['Mobile banking', 'E-commerce', 'Social apps'],
    },
    {
      category: 'Notifications',
      title: 'Real-time Alerts',
      description:
        'Send timely notifications for important events with guaranteed delivery',
      icon: Bell,
      color: 'green',
      examples: ['Order updates', 'Security alerts', 'Appointment reminders'],
    },
    {
      category: 'Marketing',
      title: 'Engagement Campaigns',
      description:
        'Run targeted SMS and email campaigns with high conversion rates',
      icon: BarChart3,
      color: 'orange',
      examples: ['Promotional offers', 'Newsletters', 'Customer surveys'],
    },
    {
      category: 'Support',
      title: 'Customer Communication',
      description:
        'Enable two-way messaging for customer support and engagement',
      icon: MessageCircle,
      color: 'purple',
      examples: ['Help desks', 'Live chat', 'Feedback collection'],
    },
    {
      category: 'Payments',
      title: 'Transaction Alerts',
      description: 'Instant payment notifications and mobile money integration',
      icon: Wallet,
      color: 'green',
      examples: ['Payment confirmations', 'Balance alerts', 'Fraud detection'],
    },
    {
      category: 'Logistics',
      title: 'Delivery Updates',
      description: 'Real-time delivery tracking and customer notifications',
      icon: Truck,
      color: 'red',
      examples: [
        'Delivery tracking',
        'Driver updates',
        'Customer notifications',
      ],
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full border border-red-500/30 mb-4">
            <Target className="h-4 w-4 text-red-400" />
            <span className="text-sm font-medium text-red-400">Use Cases</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Powering African Innovation
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how leading African businesses are transforming customer
            experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-400 mb-1">
                    {useCase.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {useCase.description}
                  </p>

                  <div className="space-y-2">
                    {useCase.examples.map((example) => (
                      <div
                        key={example}
                        className="flex items-center text-xs text-gray-500"
                      >
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
