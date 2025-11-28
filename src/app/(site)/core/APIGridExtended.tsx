'use client';

import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle, Zap } from 'lucide-react';
import Link from 'next/link';

import { HugeiconsIcon } from '@hugeicons/react';
import {
  CallRinging04Icon,
  ValidationApprovalIcon,
  Mail01Icon,
  Message01Icon,
  SmsCodeIcon,
  WhatsappBusinessIcon,
  VideoCameraAiIcon,
  ChatBotIcon,
  Calendar02Icon,
  Wallet01Icon,
  GridIcon,
  Wifi01Icon,
} from '@hugeicons/core-free-icons';

export default function APIGridExtended() {
  const apis = [
    {
      icon: Message01Icon,
      title: 'SMS API',
      description: 'Reliable SMS delivery across all African carriers',
      features: ['Two-way messaging', 'Delivery reports', 'Global coverage'],
      color: 'blue',
      latency: '50ms',
      overviewUrl: '/docs/sms/overview',
    },
    {
      icon: CallRinging04Icon,
      title: 'Voice API',
      description: 'Crystal clear voice calls with local numbers',
      features: ['Text-to-speech', 'IVR systems', 'Call recording'],
      color: 'green',
      latency: '80ms',
      overviewUrl: '/docs/voice/overview',
    },
    {
      icon: Mail01Icon,
      title: 'Email API',
      description: 'Transactional & marketing emails with analytics',
      features: ['HTML templates', 'A/B testing', 'Real-time analytics'],
      color: 'orange',
      latency: '100ms',
      overviewUrl: '/docs/email/overview',
    },
    {
      icon: SmsCodeIcon,
      title: 'Verify API',
      description: 'Secure OTP verification and 2FA',
      features: ['OTP verification', '2FA', 'Fraud detection'],
      color: 'purple',
      latency: '60ms',
      overviewUrl: '/docs/verify/overview',
    },
    {
      icon: WhatsappBusinessIcon,
      title: 'WhatsApp Business',
      description: 'Enterprise WhatsApp for customer engagement',
      features: ['Templates', 'Broadcasts', 'Media support'],
      color: 'green',
      latency: '120ms',
      overviewUrl: '/docs/whatsapp/overview',
    },
    {
      icon: ValidationApprovalIcon,
      title: 'Lookup API',
      description: 'Validate numbers and carrier information',
      features: ['Carrier lookup', 'Number validation', 'Email verification'],
      color: 'blue',
      latency: '70ms',
      overviewUrl: '/docs/lookup/overview',
    },
    {
      icon: VideoCameraAiIcon,
      title: 'Video API',
      description: 'Real-time video calls and conferencing',
      features: ['Group calls', 'Screen sharing', 'Recording'],
      color: 'red',
      latency: '150ms',
      overviewUrl: '/docs/video/overview', // Note: You might need to add this to sidebar
    },
    {
      icon: ChatBotIcon,
      title: 'Chat API',
      description: 'In-app messaging and chat features',
      features: ['Real-time chat', 'File sharing', 'Typing indicators'],
      color: 'purple',
      latency: '50ms',
      overviewUrl: '/docs/chat/overview', // Note: You might need to add this to sidebar
    },
    {
      icon: Calendar02Icon,
      title: 'Scheduling API',
      description: 'Appointment scheduling and reminders',
      features: ['Calendar integration', 'Automated reminders', 'Time zones'],
      color: 'yellow',
      latency: '90ms',
      overviewUrl: '/docs/scheduling/overview', // Note: You might need to add this to sidebar
    },
    {
      icon: Wallet01Icon,
      title: 'Payment API',
      description: 'Mobile money and payment integrations',
      features: ['Mobile money', 'Bank transfers', 'Payment links'],
      color: 'green',
      latency: '200ms',
      overviewUrl: '/docs/payment/overview', // Note: You might need to add this to sidebar
    },
    {
      icon: GridIcon,
      title: 'USSD API',
      description: 'USSD menus for feature phones',
      features: ['Interactive menus', 'Session management', 'Billing'],
      color: 'orange',
      latency: '300ms',
      overviewUrl: '/docs/ussd/overview', // Note: You might need to add this to sidebar
    },
    {
      icon: Wifi01Icon,
      title: 'Connectivity API',
      description: 'Network status and optimization',
      features: [
        'Network monitoring',
        'Route optimization',
        'Fallback routing',
      ],
      color: 'blue',
      latency: '40ms',
      overviewUrl: '/docs/connectivity/overview', // Note: You might need to add this to sidebar
    },
  ];

  const colorMap: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
    purple: 'from-purple-500 to-purple-600',
    red: 'from-red-500 to-red-600',
    yellow: 'from-yellow-500 to-yellow-600',
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 rounded-full border border-yellow-500/30 mb-4">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">
              Complete API Suite
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything You Need to Build
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive communication APIs designed for African markets and
            beyond
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {apis.map((api, index) => (
            <motion.div
              key={api.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300"
            >
              {/* Latency Badge */}
              <div className="absolute top-4 right-4 px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                {api.latency}
              </div>

              <div
                className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${colorMap[api.color] || colorMap['blue']} rounded-xl mb-4 shadow-lg`}
              >
                <HugeiconsIcon icon={api.icon} className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{api.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{api.description}</p>

              <ul className="space-y-2 mb-4">
                {api.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-xs text-gray-500"
                  >
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gray-700">
                <Link
                  href={api.overviewUrl}
                  className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-yellow-400 transition-colors group-hover:translate-x-1 duration-300"
                >
                  Explore API <ChevronRight className="inline h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
