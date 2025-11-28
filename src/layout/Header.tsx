'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  BookOpen01Icon,
  Rocket01Icon,
  AccessIcon,
  AiBrowserIcon,
  WebDesign01Icon,
  CommandLineIcon,
  WorkflowSquare06Icon,
  MapsLocation02Icon,
  Search02Icon,
  GithubIcon,
  ZapIcon,
  MenuIcon,
  MultiplicationSignIcon,
  CpuChargeIcon,
  LiveStreaming02Icon,
  WifiError01Icon,
  SecurityBlockIcon,
  Github01Icon,
  RocketIcon,
} from '@hugeicons/core-free-icons';
import { ChevronDown } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Getting Started Items - Updated with Hugeicons
  const gettingStartedItems = [
    {
      name: 'Overview',
      href: '/docs/getting-started/overview',
      icon: BookOpen01Icon,
      description: 'Platform introduction',
    },
    {
      name: 'Quickstart',
      href: '/docs/getting-started/quickstart',
      icon: Rocket01Icon,
      description: '5-minute setup guide',
    },
    {
      name: 'Authentication',
      href: '/docs/getting-started/authentication',
      icon: AccessIcon,
      description: 'API keys and security',
    },
  ];

  // Core Concepts Items - Updated with Hugeicons
  const coreConceptsItems = [
    {
      name: 'Rate Limits',
      href: '/docs/core/rate-limits',
      icon: SecurityBlockIcon,
      description: 'Usage limits and quotas',
    },
    {
      name: 'Error Handling',
      href: '/docs/core/errors',
      icon: WifiError01Icon,
      description: 'Error codes and responses',
    },
    {
      name: 'Webhooks',
      href: '/docs/core/webhooks',
      icon: WorkflowSquare06Icon,
      description: 'Real-time event handling',
    },
    {
      name: 'Idempotency',
      href: '/docs/core/idempotency',
      icon: CpuChargeIcon, // Already using Hugeicons
      description: 'Duplicate request handling',
    },
  ];

  // Developer Tools Items - Updated with Hugeicons
  const developerToolsItems = [
    {
      name: 'Sendexa UIs',
      href: '/docs/tools/exa-ui',
      icon: WebDesign01Icon,
      description: 'Ready-to-use UI components',
    },
    {
      name: 'Playground',
      href: '/docs/tools/playground',
      icon: AiBrowserIcon,
      description: 'Test API endpoints',
    },
    {
      name: 'CLI Tool',
      href: '/docs/tools/cli',
      icon: CommandLineIcon,
      description: 'Command line interface',
    },
  ];

  // Company Items - Updated with Hugeicons
  const companyItems = [
    {
      name: 'African Coverage',
      href: '/coverage',
      icon: MapsLocation02Icon,
      description: '54 countries supported',
    },
    {
      name: 'Status',
      href: 'https://status.sendexa.co',
      icon: LiveStreaming02Icon,
      description: 'System status',
      external: true,
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 mb-4 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/80 shadow-2xl shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        {/* Background Glow Effect */}
        {!isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent pointer-events-none" />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3"
              >
                <div className="relative">
                  {/* <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div> */}
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                    <HugeiconsIcon
                      icon={ZapIcon}
                      size={24}
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute -inset-1 border-2 border-yellow-400/30 rounded-xl"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-xl font-bold text-white font-mono">
                    SENDEXA
                  </div>
                  <span className="text-xs text-gray-400 font-mono -mt-1">
                    DEVELOPERS
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {/* Getting Started Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('getting-started')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group">
                  Getting Started
                  <ChevronDown className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'getting-started' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-64 mt-2"
                    >
                      <div className="bg-gray-800/95 backdrop-blur-xl border border-gray-700/80 rounded-2xl shadow-2xl p-4">
                        <div className="space-y-1">
                          {gettingStartedItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                            >
                              {/* <item.icon className="h-4 w-4 text-yellow-400 mr-3 group-hover:scale-110 transition-transform" /> */}
                              <HugeiconsIcon
                                icon={item.icon}
                                className="h-4 w-4 text-yellow-400 mr-3 group-hover:scale-110 transition-transform"
                              />
                              <div>
                                <div className="text-sm font-medium text-white">
                                  {item.name}
                                </div>
                                <div className="text-xs text-gray-400">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Core Concepts Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('core-concepts')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group">
                  Core Concepts
                  <ChevronDown className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'core-concepts' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-64 mt-2"
                    >
                      <div className="bg-gray-800/95 backdrop-blur-xl border border-gray-700/80 rounded-2xl shadow-2xl p-4">
                        <div className="space-y-1">
                          {coreConceptsItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                            >
                              <HugeiconsIcon
                                icon={item.icon}
                                className="h-4 w-4 text-blue-400 mr-3 group-hover:scale-110 transition-transform"
                              />
                              <div>
                                <div className="text-sm font-medium text-white">
                                  {item.name}
                                </div>
                                <div className="text-xs text-gray-400">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Developer Tools Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('developer-tools')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group">
                  Developer Tools
                  <ChevronDown className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'developer-tools' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-64 mt-2"
                    >
                      <div className="bg-gray-800/95 backdrop-blur-xl border border-gray-700/80 rounded-2xl shadow-2xl p-4">
                        <div className="space-y-1">
                          {developerToolsItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                            >
                              <HugeiconsIcon
                                icon={item.icon}
                                className="h-4 w-4 text-blue-400 mr-3 group-hover:scale-110 transition-transform"
                              />
                              <div>
                                <div className="text-sm font-medium text-white">
                                  {item.name}
                                </div>
                                <div className="text-xs text-gray-400">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Company Links */}
              {companyItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.external ? '_blank' : '_self'}
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300"
                >
                  <HugeiconsIcon
                    icon={item.icon}
                    className="h-4 w-4 text-blue-400 mr-3 group-hover:scale-110 transition-transform"
                  />
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Search Button */}

              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-400 hover:text-white transition-colors border border-gray-700 rounded-xl hover:border-gray-600"
              >
                <HugeiconsIcon icon={Search02Icon} className="h-4 w-4" />
              </motion.button>

              {/* GitHub Link */}
              <motion.a
                href="https://github.com/sendexa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-400 hover:text-white transition-colors border border-gray-700 rounded-xl hover:border-gray-600"
              >
                <HugeiconsIcon icon={GithubIcon} className="h-4 w-4" />
              </motion.a>

              {/* Get Started Button */}
              <motion.a
                href="/docs/getting-started"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-red-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 flex items-center gap-2"
              >
                <HugeiconsIcon icon={Rocket01Icon} className="h-4 w-4" />
                Get Started
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors border border-gray-700 rounded-xl"
            >
              {isMobileMenuOpen ? (
                <HugeiconsIcon
                  icon={MultiplicationSignIcon}
                  className="h-5 w-5"
                />
              ) : (
                <HugeiconsIcon icon={MenuIcon} className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-80 bg-gray-900/95 backdrop-blur-xl border-l border-gray-800/80 z-50 overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <Link
                    href="/"
                    className="flex items-center space-x-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-red-500 rounded-xl flex items-center justify-center">
                      <HugeiconsIcon
                        icon={ZapIcon}
                        className="h-6 w-6 text-white"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-lg font-bold text-white font-mono">
                        SENDEXA
                      </div>
                      <span className="text-xs text-gray-400 font-mono -mt-1">
                        DEVELOPERS
                      </span>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <HugeiconsIcon
                      icon={MultiplicationSignIcon}
                      className="h-5 w-5"
                    />
                  </button>
                </div>

                {/* Search Bar */}
                <div className="relative mb-6">
                  <HugeiconsIcon
                    icon={Search02Icon}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                  />
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-6">
                  {/* Getting Started Section */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Getting Started
                    </h3>
                    <div className="space-y-2">
                      {gettingStartedItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          {/* <item.icon className="h-4 w-4 text-yellow-400 mr-3" /> */}
                          <HugeiconsIcon
                            icon={item.icon}
                            className="h-4 w-4 text-blue-400 mr-3 group-hover:scale-110 transition-transform"
                          />
                          <div>
                            <div className="text-sm font-medium text-white">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-400">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Core Concepts Section */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Core Concepts
                    </h3>
                    <div className="space-y-2">
                      {coreConceptsItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          {/* <item.icon className="h-4 w-4 text-blue-400 mr-3" /> */}
                          <HugeiconsIcon
                            icon={item.icon}
                            className="h-4 w-4 text-blue-400 mr-3 group-hover:scale-110 transition-transform"
                          />
                          <div>
                            <div className="text-sm font-medium text-white">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-400">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Developer Tools Section */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Developer Tools
                    </h3>
                    <div className="space-y-2">
                      {developerToolsItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          {/* <item.icon className="h-4 w-4 text-green-400 mr-3" /> */}
                          <HugeiconsIcon
                            icon={item.icon}
                            className="h-4 w-4 text-blue-400 mr-3 group-hover:scale-110 transition-transform"
                          />
                          <div>
                            <div className="text-sm font-medium text-white">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-400">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Company Links */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Company
                    </h3>
                    <div className="space-y-2">
                      {companyItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          {/* <item.icon className="h-4 w-4 text-gray-400 mr-3" /> */}
                          <HugeiconsIcon
                            icon={item.icon}
                            className="h-4 w-4 text-blue-400 mr-3 group-hover:scale-110 transition-transform"
                          />
                          <div>
                            <div className="text-sm font-medium text-white">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-400">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile CTA Buttons */}
                  <div className="pt-6 border-t border-gray-800 space-y-3">
                    <motion.a
                      href="/docs/getting-started"
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileTap={{ scale: 0.95 }}
                      className="block w-full px-4 py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 text-center"
                    >
                      <HugeiconsIcon
                        icon={RocketIcon}
                        className="h-4 w-4 inline mr-2"
                      />
                      Get Started
                    </motion.a>
                    <motion.a
                      href="https://github.com/sendexa"
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileTap={{ scale: 0.95 }}
                      className="block w-full px-4 py-3 border border-gray-700 text-gray-300 text-sm font-medium rounded-xl hover:border-gray-600 hover:text-white transition-colors text-center"
                    >
                      <HugeiconsIcon
                        icon={Github01Icon}
                        className="h-4 w-4 inline mr-2"
                      />
                      GitHub
                    </motion.a>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
