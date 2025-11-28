'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Rocket,
  FileText,
  CheckCircle,
  Zap,
  Clock,
} from 'lucide-react';

export default function CTASectionAdvanced() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500/20 rounded-full border border-yellow-500/30"
          >
            <Rocket className="h-5 w-5 text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-400">
              Ready to Get Started?
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white">
            Build the Future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600">
              African Communication
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of developers and businesses building amazing
            communication experiences across Africa
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-red-500 text-white font-bold rounded-2xl shadow-2xl shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Rocket className="mr-3 h-5 w-5" />
              Start Building Free
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-700 text-gray-300 font-bold rounded-2xl hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300 backdrop-blur-sm"
            >
              <FileText className="mr-3 h-5 w-5" />
              View Documentation
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-gray-400 pt-4"
          >
            <div className="flex flex-wrap justify-center items-center gap-6">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-400" />
                Free tier available
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-400" />
                5-minute setup
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-10 left-10 w-6 h-6 bg-yellow-400 rounded-full opacity-20"
      ></motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute top-10 right-10 w-4 h-4 bg-red-400 rounded-full opacity-20"
      ></motion.div>
    </section>
  );
}
