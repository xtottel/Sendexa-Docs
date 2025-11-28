'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  BookOpen,
  Code2,
  Github,
  Search,
  // Sun,
  // Moon,
  Zap,
  BarChart3,
  Cloud,
  Server,
  Workflow,
  // Users,
  Rocket,
  MapPin,
} from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const docsResources = [
    {
      name: 'API Reference',
      href: '/docs/api-reference',
      icon: Code2,
      description: 'Comprehensive API docs',
      color: 'blue',
    },
    {
      name: 'SDKs & Libraries',
      href: '/docs/sdks',
      icon: BookOpen,
      description: 'Client libraries',
      color: 'green',
    },
    {
      name: 'Sandbox Environment',
      href: '/docs/sandbox',
      icon: Cloud,
      description: 'Test APIs safely',
      color: 'yellow',
    },
    {
      name: 'Postman Collection',
      href: '/docs/postman',
      icon: Server,
      description: 'Importable API collection',
      color: 'red',
    },
  ];

  const toolItems = [
    {
      name: 'API Playground',
      href: '/docs/tools/playground',
      icon: Cloud,
      description: 'Test API endpoints',
    },
    {
      name: 'CLI Tool',
      href: '/docs/tools/cli',
      icon: Server,
      description: 'Command line interface',
    },
  ];

  const guideItems = [
    {
      name: 'Quick Start',
      href: '/docs/quickstart',
      icon: Rocket,
      description: '5-minute setup guide',
    },
    {
      name: 'Webhooks',
      href: '/docs/webhooks',
      icon: Workflow,
      description: 'Real-time event handling',
    },
    {
      name: 'Best Practices',
      href: '/docs/best-practices',
      icon: BookOpen,
      description: 'Production recommendations',
    },
  ];

  const companyItems = [
    {
      name: 'African Coverage',
      href: '/coverage',
      icon: MapPin,
      description: '54 countries supported',
    },
    {
      name: 'Status',
      href: 'https://status.sendexa.co',
      icon: BarChart3,
      description: 'System status',
      external: true,
    },
    // {
    //   name: "Pricing",
    //   href: "/pricing",
    //   icon: PieChart,
    //   description: "Transparent pricing"
    // },
    // {
    //   name: 'Support',
    //   href: '/support',
    //   icon: Users,
    //   description: 'Help & support',
    // },
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
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="h-6 w-6 text-white" />
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
              {/* Products Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('docs')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group">
                  {/* <Code2 className="h-4 w-4 mr-2" /> */}
                  Docs
                  <ChevronDown className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'docs' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-96 mt-2"
                    >
                      <div className="bg-gray-800/95 backdrop-blur-xl border border-gray-700/80 rounded-2xl shadow-2xl p-6">
                        <div className="grid grid-cols-2 gap-4">
                          {docsResources.map((docs) => (
                            <Link
                              key={docs.name}
                              href={docs.href}
                              className="flex items-start p-3 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group"
                            >
                              <div
                                className={`w-10 h-10 bg-gradient-to-br from-${docs.color}-500 to-${docs.color}-600 rounded-lg flex items-center justify-center mr-3`}
                              >
                                <docs.icon className="h-5 w-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <div className="text-sm font-semibold text-white font-mono">
                                    {docs.name}
                                  </div>
                                </div>
                                <div className="text-xs text-gray-400 mt-1">
                                  {docs.description}
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

              {/* Guides Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('guides')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group">
                  {/* <Terminal className="h-4 w-4 mr-2" /> */}
                  Guides
                  <ChevronDown className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'guides' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-70 mt-2"
                    >
                      <div className="bg-gray-800/95 backdrop-blur-xl border border-gray-700/80 rounded-2xl shadow-2xl p-4">
                        <div className="space-y-1">
                          {guideItems.map((Items) => (
                            <Link
                              key={Items.name}
                              href={Items.href}
                              className="flex items-center p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                            >
                              <Items.icon className="h-4 w-4 text-gray-400 mr-3 group-hover:text-white" />
                              <div>
                                <div className="text-sm font-medium text-white">
                                  {Items.name}
                                </div>
                                <div className="text-xs text-gray-400">
                                  {Items.description}
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

              {/* Tools Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('tools')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group">
                  {/* <Terminal className="h-4 w-4 mr-2" /> */}
                  Tools
                  <ChevronDown className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'tools' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-50 mt-2"
                    >
                      <div className="bg-gray-800/95 backdrop-blur-xl border border-gray-700/80 rounded-2xl shadow-2xl p-4">
                        <div className="space-y-1">
                          {toolItems.map((resource) => (
                            <Link
                              key={resource.name}
                              href={resource.href}
                              className="flex items-center p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                            >
                              <resource.icon className="h-4 w-4 text-gray-400 mr-3 group-hover:text-white" />
                              <div>
                                <div className="text-sm font-medium text-white">
                                  {resource.name}
                                </div>
                                <div className="text-xs text-gray-400">
                                  {resource.description}
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
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-400 hover:text-white transition-colors border border-gray-700 rounded-xl hover:border-gray-600"
              >
                <Search className="h-4 w-4" />
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
                <Github className="h-4 w-4" />
              </motion.a>

              {/* Get Started Button */}
              <motion.a
                href="/docs/getting-started"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-red-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 flex items-center gap-2"
              >
                <Rocket className="h-4 w-4" />
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
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
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
                      <Zap className="h-6 w-6 text-white" />
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
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Search Bar */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                  />
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-6">
                  {/* Products Section */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Docs
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {docsResources.slice(0, 4).map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex flex-col items-center p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors text-center"
                        >
                          <product.icon className="h-5 w-5 text-gray-400 mb-1" />
                          <div className="text-xs font-medium text-white">
                            {product.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Guides Resources */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Guides
                    </h3>
                    <div className="space-y-2">
                      {guideItems.map((resource) => (
                        <Link
                          key={resource.name}
                          href={resource.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          <resource.icon className="h-4 w-4 text-gray-400 mr-3" />
                          <span className="text-sm text-white">
                            {resource.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Tools Resources */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Tools
                    </h3>
                    <div className="space-y-2">
                      {toolItems.map((resource) => (
                        <Link
                          key={resource.name}
                          href={resource.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          <resource.icon className="h-4 w-4 text-gray-400 mr-3" />
                          <span className="text-sm text-white">
                            {resource.name}
                          </span>
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
                          <item.icon className="h-4 w-4 text-gray-400 mr-3" />
                          <span className="text-sm text-white">
                            {item.name}
                          </span>
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
                      <Rocket className="h-4 w-4 inline mr-2" />
                      Get Started
                    </motion.a>
                    <motion.a
                      href="https://github.com/sendexa"
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileTap={{ scale: 0.95 }}
                      className="block w-full px-4 py-3 border border-gray-700 text-gray-300 text-sm font-medium rounded-xl hover:border-gray-600 hover:text-white transition-colors text-center"
                    >
                      <Github className="h-4 w-4 inline mr-2" />
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
