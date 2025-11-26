"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Terminal, 
  BookOpen, 
  Code2, 
  Github,
  Search
} from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Documentation",
      href: "/docs",
      icon: BookOpen,
      items: [
        { name: "Getting Started", href: "/docs/getting-started", description: "Start your integration" },
        { name: "API Reference", href: "/docs/api", description: "Complete API documentation" },
        { name: "SDKs & Libraries", href: "/docs/sdks", description: "Client libraries" },
      ]
    },
    {
      name: "Guides",
      href: "/docs/guides",
      icon: Code2,
      items: [
        { name: "Quick Start", href: "/docs/quickstart", description: "5-minute setup guide" },
        { name: "Best Practices", href: "/docs/best-practices", description: "Production recommendations" },
        { name: "Webhooks", href: "/docs/webhooks", description: "Real-time event handling" },
      ]
    },
    {
      name: "Tools",
      href: "/tools",
      icon: Terminal,
      items: [
        { name: "API Playground", href: "/playground", description: "Test API endpoints" },
        { name: "Code Samples", href: "/docs/samples", description: "Ready-to-use examples" },
        { name: "CLI Tool", href: "/docs/cli", description: "Command line interface" },
      ]
    }
  ];

  const quickLinks = [
    { name: "API Status", href: "https://status.sendexa.co", external: true },
    { name: "Support", href: "/support" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3"
              >
                <div className="flex items-center justify-center w-8 h-8 bg-[#f8971d] rounded-lg">
                  <Terminal className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <Image
                    src="https://cdn.sendexa.co/images/logo/exaweb.png"
                    width={120}
                    height={24}
                    alt="Sendexa Developers"
                    className="h-6 w-auto"
                  />
                  <span className="text-xs text-gray-600 font-mono -mt-1">
                    Developers
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group"
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.name}
                    <ChevronDown className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 w-64 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white/95 backdrop-blur-md border border-gray-200/80 rounded-xl shadow-xl p-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div>
                            <div className="text-sm font-medium text-gray-900 font-mono">
                              {subItem.name}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {subItem.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Links */}
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors font-mono border border-gray-300 rounded-lg hover:border-gray-400"
              >
                <Search className="h-4 w-4 mr-2" />
                Search
                <kbd className="ml-2 text-xs bg-gray-100 px-1.5 py-0.5 rounded border border-gray-300">
                  /
                </kbd>
              </motion.button>

              {/* GitHub Link */}
              <motion.a
                href="https://github.com/sendexa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors border border-gray-300 rounded-lg hover:border-gray-400"
              >
                <Github className="h-5 w-5" />
              </motion.a>

              {/* Get Started Button */}
              <motion.a
                href="/docs/getting-started"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-[#f8971d] text-white text-sm font-medium rounded-md hover:bg-orange-500 transition-colors"
              >
                Get Started
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
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
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-80 bg-white/95 backdrop-blur-md border-l border-gray-200/80 z-50 overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <Link 
                    href="/" 
                    className="flex items-center space-x-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-[#f8971d] rounded-lg">
                      <Terminal className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <Image
                        src="https://cdn.sendexa.co/images/logo/exaweb.png"
                        width={100}
                        height={20}
                        alt="Sendexa Developers"
                        className="h-5 w-auto"
                      />
                      <span className="text-xs text-gray-600 font-mono -mt-1">
                        Developers
                      </span>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-6">
                  {navItems.map((item) => (
                    <div key={item.name} className="space-y-3">
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center text-lg font-medium text-gray-900"
                      >
                        <item.icon className="h-5 w-5 mr-3" />
                        {item.name}
                      </Link>
                      <div className="ml-8 space-y-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Quick Links */}
                  <div className="pt-4 border-t border-gray-300">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        target={link.external ? "_blank" : "_self"}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile CTA Buttons */}
                  <div className="pt-6 border-t border-gray-300 space-y-3">
                    <motion.a
                      href="/docs/getting-started"
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileTap={{ scale: 0.95 }}
                      className="block w-full px-4 py-3 bg-[#f8971d] text-white text-sm font-medium rounded-md hover:bg-orange-500 transition-colors text-center"
                    >
                      Get Started
                    </motion.a>
                    <motion.a
                      href="https://github.com/sendexa"
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileTap={{ scale: 0.95 }}
                      className="block w-full px-4 py-3 border border-gray-400 text-gray-700 text-sm font-medium rounded-md hover:border-gray-600 hover:text-gray-900 transition-colors text-center"
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