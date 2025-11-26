"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaBook,
  FaCode,
  FaQuestionCircle,
} from "react-icons/fa";
import { Heart, Terminal } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const docLinks = [
    {
      title: "Documentation",
      items: [
        { name: "Getting Started", href: "/docs/getting-started" },
        { name: "API Reference", href: "/docs/api" },
        { name: "SDKs & Libraries", href: "/docs/sdks" },
        { name: "Authentication", href: "/docs/auth" },
        { name: "Rate Limits", href: "/docs/rate-limits" },
      ],
    },
    {
      title: "Guides",
      items: [
        { name: "Quick Start", href: "/docs/quickstart" },
        { name: "Best Practices", href: "/docs/best-practices" },
        { name: "Webhooks Guide", href: "/docs/webhooks" },
        { name: "Error Handling", href: "/docs/errors" },
        { name: "Security", href: "/docs/security" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "API Status", href: "https://status.sendexa.co" },
        { name: "Changelog", href: "/docs/changelog" },
        { name: "Community", href: "/community" },
        { name: "Support", href: "/support" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "API Playground", href: "/playground" },
        { name: "Code Samples", href: "/docs/samples" },
        { name: "CLI Tool", href: "/docs/cli" },
        { name: "Postman Collection", href: "/docs/postman" },
        { name: "Testing", href: "/docs/testing" },
      ],
    },
  ];

  const socialIcons = [
    {
      icon: FaGithub,
      href: "https://github.com/sendexa",
      label: "GitHub",
      className: "hover:text-gray-300",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/sendexaHQ",
      label: "Twitter/X",
      className: "hover:text-blue-400",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/company/sendexa",
      label: "LinkedIn",
      className: "hover:text-blue-600",
    },
    {
      icon: FaBook,
      href: "https://docs.sendexa.co",
      label: "Documentation",
      className: "hover:text-purple-500",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3"
              >
                <Terminal className="h-8 w-8 text-[#f8971d]" />
                <div>
                  <Image
                    src="https://cdn.sendexa.co/images/logo/exaweb.png"
                    width={140}
                    height={28}
                    alt="Sendexa Developers"
                    className="h-7 w-auto"
                    priority
                  />
                  <p className="text-xs text-gray-400 mt-1 font-mono">
                    Developer Platform
                  </p>
                </div>
              </motion.div>
            </Link>
            <p className="text-sm text-gray-400 font-mono leading-relaxed">
              Build with Sendexa's powerful APIs. Comprehensive documentation, 
              SDKs, and tools to integrate messaging, verification, and voice 
              capabilities into your applications.
            </p>

            {/* CTA Buttons */}
            {/* <div className="flex flex-wrap gap-3">
              <motion.a
                href="/docs/getting-started"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-[#f8971d] text-gray-900 text-sm font-medium rounded-md hover:bg-orange-400 transition-colors font-mono"
              >
                Get Started
              </motion.a>
              <motion.a
                href="/playground"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 border border-gray-600 text-gray-300 text-sm font-medium rounded-md hover:border-gray-400 hover:text-white transition-colors font-mono"
              >
                API Playground
              </motion.a>
            </div> */}

            {/* Social Icons */}
            <div className="flex space-x-3 mt-6">
              {socialIcons.map(({ icon: Icon, href, label, className }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-all border border-gray-700 ${className}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Documentation Links */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {docLinks.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.items.map((link) => (
                      <motion.li key={link.name} whileHover={{ x: 2 }}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-white transition font-mono hover:underline underline-offset-2"
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 my-8"
        />

        {/* Final Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 font-mono"
            aria-label={`Copyright ${currentYear} Sendexa, Inc.`}
          >
            &copy; {currentYear}{" "}
            <span className="font-medium text-[#f8971d] transition-colors duration-300">
              Sendexa LLC.
            </span>{" "}
            All rights reserved.
          </motion.p>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 font-mono">
            <Link
              href="/docs/legal/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/docs/legal/terms"
              className="hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/docs/legal/api-terms"
              className="hover:text-white transition-colors"
            >
              API Terms
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-white transition-colors"
            >
              Sitemap
            </Link>
          </div>

          {/* Built with Love */}
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 transition-all group flex items-center gap-1 font-mono"
          >
            <span>Built with</span>
            <Heart className="h-3 w-3 text-red-500 fill-current" />
            <span>by</span>
            <Link
              href="https://xtottel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#f8971d] group-hover:text-yellow-500 transition-colors duration-300"
            >
              Xtottel Ltd
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};