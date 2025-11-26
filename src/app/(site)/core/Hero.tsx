'use client';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Github,
  PlayCircle,
  Sparkles,
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
              <Sparkles className="h-4 w-4 text-[#f8971d] mr-2" />
              <span className="text-sm text-gray-600 font-medium">
                Trusted by 10,000+ developers worldwide
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Communication
              <span className="text-[#f8971d] block">APIs for Developers</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Build powerful communication features with our developer-friendly
              APIs. Send SMS, email, voice messages, and verify users with just
              a few lines of code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                href="/docs/getting-started"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#f8971d] text-white font-bold rounded-xl hover:bg-orange-500 transition-colors shadow-lg"
              >
                Start Building
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>

              <motion.a
                href="/playground"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 font-bold rounded-xl hover:border-gray-400 hover:text-gray-900 transition-colors bg-white"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                API Playground
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                <span>Free tier available</span>
              </div>
              <div className="flex items-center">
                <Github className="h-4 w-4 mr-2" />
                <span>Open source SDKs</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-blue-500" />
                <span>5-minute setup</span>
              </div>
            </div>
          </motion.div>

          {/* Code Example */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-800">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-400 font-mono">
                  send-sms.js
                </span>
              </div>

              <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                <code>{`// Send SMS with one API call
import { Sendexa } from 'sendexa';

const client = new Sendexa('sk_your_api_key');

const message = await client.sms.send({
  to: '+1234567890',
  body: 'Your verification code is 123456',
  from: 'Sendexa'
});

console.log('Message ID:', message.id);`}</code>
              </pre>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
            >
              ✅ Delivered
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-3 -left-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
            >
              ⚡ 50ms
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
