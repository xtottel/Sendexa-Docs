'use client';

import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Rocket, MapPin } from 'lucide-react';
//import FloatingAPICards from './FloatingAPICards';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          {/* African Market Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex flex-col sm:flex-row items-center gap-2 pt-7 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-xl sm:rounded-2xl border border-yellow-500/30 backdrop-blur-sm mx-auto"
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
              <span className="text-xs sm:text-sm font-semibold text-yellow-400">
                Built for Africa, Ready for the World
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-400">
                Live in 54 countries
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4 md:space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight"
            >
              The Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 mt-2 md:mt-4">
                African
              </span>
              Communication
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              Enterprise-grade communication APIs designed for African networks.
              <span className="text-yellow-400 font-semibold">
                {' '}
                99.9% uptime
              </span>{' '}
              across all mobile carriers.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 md:pt-8 px-4 sm:px-0"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 md:px-12 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-red-500 text-white font-bold rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all duration-300 overflow-hidden text-base sm:text-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Rocket className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Start Building Free
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 md:px-12 py-3 sm:py-4 border-2 border-gray-700 text-gray-300 font-bold rounded-xl sm:rounded-2xl hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg"
            >
              <PlayCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Watch Demo
              <div className="ml-2 sm:ml-3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full group-hover:scale-150 transition-transform"></div>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-8 md:pt-12 mb-5 md:mb-8"
          >
            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-6 md:mb-10 px-4">
              TRUSTED BY LEADING AFRICAN BUSINESSES
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 opacity-60 px-4">
              {[
                'MTN',
                'Safaricom',
                'Flutterwave',
                'Paystack',
                'Jumia',
                'Andela',
              ].map((company) => (
                <div
                  key={company}
                  className="text-gray-300 font-semibold text-sm sm:text-base md:text-lg hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating API Cards */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingAPICards />
      </div> */}
    </section>
  );
}
