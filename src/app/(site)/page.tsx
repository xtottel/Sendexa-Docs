/* eslint-disable @typescript-eslint/no-unused-vars */
// 'use client';

// import Hero from './core/Hero';
// import Stats from './core/Stats';
// import ProductFeatures from './core/ProductFeatures';
// import QuickStart from './core/QuickStart';
// import SDKs from './core/SDKs';
// import UseCases from './core/UseCases';

// export default function DocsLanding() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Hero />
//       <Stats />
//       <ProductFeatures />
//       {/* Quick Start Section */}
//       <QuickStart />

//       {/* SDKs Section */}
//       <SDKs />

//       {/* Use Cases Section */}
//       <UseCases />
//     </div>
//   );
// }

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  PlayCircle,
  Sparkles,
  Zap,
  Globe,
  Shield,
  MessageCircle,
  Code2,
  Terminal,
  Cloud,
  Lock,
  Send,
  Mail,
  Phone,
  CheckCircle,
  Users,
  Rocket,
  ChevronRight,
  GitBranch,
  Server,
  Workflow,
  BarChart3,
  Smartphone,
  Bell,
} from 'lucide-react';

export default function DocsLanding() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  return (
    <div ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-green-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <HeroSection />
      <StatsSection />
      <APIGrid />
      <CodeShowcase />
      <QuickStartFlow />
      <SDKShowcase />
      <UseCaseGallery />
      <IntegrationMethods />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                Trusted by 10,000+ developers
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build Better
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
                  Communication
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Powerful APIs for SMS, Voice, Email, and Verification. Scale
                your communication infrastructure with developer-friendly tools.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Start Building
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                View Demo
              </motion.button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">Free Tier</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                <span className="text-sm text-gray-600">5-min Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <GitBranch className="h-5 w-5 text-purple-500" />
                <span className="text-sm text-gray-600">Open Source</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - API Cards Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96">
              {/* Card 1 - SMS */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -1, 0],
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-0 left-8 w-80 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Send className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">SMS API</h3>
                    <p className="text-sm text-gray-500">Global messaging</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Status:</span>
                    <span className="text-green-600 font-medium">Active</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Latency:</span>
                    <span className="text-gray-900 font-medium">50ms</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Voice */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute top-24 left-4 w-80 bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Voice API</h3>
                    <p className="text-sm text-gray-500">Calls & IVR</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Status:</span>
                    <span className="text-green-600 font-medium">Active</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Quality:</span>
                    <span className="text-gray-900 font-medium">HD Voice</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 - Email */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, -0.5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute top-48 left-0 w-80 bg-white rounded-2xl p-6 shadow-md border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email API</h3>
                    <p className="text-sm text-gray-500">Transactional</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Status:</span>
                    <span className="text-green-600 font-medium">Active</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery:</span>
                    <span className="text-gray-900 font-medium">99.9%</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    {
      icon: Zap,
      value: '99.9%',
      label: 'Uptime SLA',
      color: 'text-yellow-500',
    },
    { icon: Globe, value: '200+', label: 'Countries', color: 'text-blue-500' },
    {
      icon: Shield,
      value: '10B+',
      label: 'Messages/Month',
      color: 'text-green-500',
    },
    {
      icon: MessageCircle,
      value: '50ms',
      label: 'Avg Latency',
      color: 'text-purple-500',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-200 mb-4 ${stat.color}`}
              >
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function APIGrid() {
  const apis = [
    {
      icon: Send,
      title: 'SMS API',
      description: 'Global SMS delivery with advanced features',
      features: ['Two-way messaging', 'Global coverage', 'Delivery reports'],
      color: 'blue',
    },
    {
      icon: Phone,
      title: 'Voice API',
      description: 'Make and receive calls with voice capabilities',
      features: ['Text-to-speech', 'IVR systems', 'Call recording'],
      color: 'green',
    },
    {
      icon: Mail,
      title: 'Email API',
      description: 'Send transactional and marketing emails',
      features: ['HTML templates', 'A/B testing', 'Analytics'],
      color: 'orange',
    },
    {
      icon: Lock,
      title: 'Verify API',
      description: 'Secure authentication and verification',
      features: ['OTP verification', '2FA', 'Fraud detection'],
      color: 'purple',
    },
    {
      icon: Smartphone,
      title: 'WhatsApp API',
      description: 'Enterprise WhatsApp messaging',
      features: ['Templates', 'Broadcasts', 'Media support'],
      color: 'green',
    },
    {
      icon: BarChart3,
      title: 'Lookup API',
      description: 'Validate numbers and verify information',
      features: ['Carrier lookup', 'Number validation', 'Email verification'],
      color: 'blue',
    },
  ];

  const colorMap: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
    purple: 'from-purple-500 to-purple-600',
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete API Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build powerful communication features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apis.map((api, index) => (
            <motion.div
              key={api.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all group"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${colorMap[api.color]} rounded-xl mb-4`}
              >
                <api.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {api.title}
              </h3>
              <p className="text-gray-600 mb-4">{api.description}</p>
              <ul className="space-y-2">
                {api.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-sm text-gray-500"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button className="text-sm font-medium text-gray-600 hover:text-gray-900 group-hover:text-blue-600 transition-colors">
                  Explore API <ChevronRight className="inline h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CodeShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Developer First
            </h2>
            <p className="text-xl text-gray-600">
              Clean, intuitive APIs designed for developers. Get started in
              minutes with our comprehensive documentation and SDKs.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Terminal className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">RESTful API design</span>
              </div>
              <div className="flex items-center gap-3">
                <Code2 className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">Multiple SDKs</span>
              </div>
              <div className="flex items-center gap-3">
                <Server className="h-5 w-5 text-purple-500" />
                <span className="text-gray-700">Webhooks support</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl">
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
                <code>{`// Send your first SMS in 30 seconds
import { Sendexa } from 'sendexa';

const client = new Sendexa(process.env.SENDEXA_API_KEY);

async function sendWelcomeSMS() {
  const message = await client.sms.send({
    to: '+1234567890',
    body: 'Welcome to our service! 🎉',
    from: 'Sendexa'
  });
  
  return message.id;
}

// That's it! Message sent.`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function QuickStartFlow() {
  const steps = [
    {
      step: 1,
      icon: Users,
      title: 'Create Account',
      description: 'Sign up and get your API keys in seconds',
      color: 'blue',
    },
    {
      step: 2,
      icon: Terminal,
      title: 'Install SDK',
      description: 'Add our library to your project',
      color: 'green',
    },
    {
      step: 3,
      icon: Send,
      title: 'Send Message',
      description: 'Make your first API call',
      color: 'orange',
    },
    {
      step: 4,
      icon: Rocket,
      title: 'Go Live',
      description: 'Deploy to production',
      color: 'purple',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Start Building in 5 Minutes
          </h2>
          <p className="text-xl text-gray-600">
            Simple steps to get your first message sent
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/25">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border border-gray-200 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SDKShowcase() {
  const sdks = [
    {
      name: 'JavaScript',
      icon: '🟨',
      version: 'v2.1.0',
      color: 'bg-yellow-100',
    },
    { name: 'Python', icon: '🐍', version: 'v1.8.2', color: 'bg-green-100' },
    { name: 'Java', icon: '☕', version: 'v3.0.1', color: 'bg-red-100' },
    { name: 'Go', icon: '🐹', version: 'v1.2.0', color: 'bg-blue-100' },
    { name: 'Ruby', icon: '💎', version: 'v2.0.4', color: 'bg-pink-100' },
    { name: 'C#', icon: '🔷', version: 'v2.3.1', color: 'bg-purple-100' },
    { name: 'PHP', icon: '🐘', version: 'v2.5.3', color: 'bg-indigo-100' },
    { name: 'Swift', icon: '🐦', version: 'v1.5.0', color: 'bg-orange-100' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Language Support
          </h2>
          <p className="text-xl text-gray-600">
            Official SDKs for your favorite programming languages
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {sdks.map((sdk, index) => (
            <motion.div
              key={sdk.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="text-2xl mb-2">{sdk.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                {sdk.name}
              </h3>
              <div className="text-xs text-gray-500 font-mono">
                {sdk.version}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCaseGallery() {
  const useCases = [
    {
      category: 'Authentication',
      title: 'Secure User Verification',
      description: 'Implement OTP and two-factor authentication flows',
      icon: Shield,
      color: 'blue',
    },
    {
      category: 'Notifications',
      title: 'Real-time Alerts',
      description: 'Send timely notifications for important events',
      icon: Bell,
      color: 'green',
    },
    {
      category: 'Marketing',
      title: 'Engagement Campaigns',
      description: 'Run targeted SMS and email campaigns',
      icon: BarChart3,
      color: 'orange',
    },
    {
      category: 'Support',
      title: 'Customer Communication',
      description: 'Enable two-way messaging for support',
      icon: MessageCircle,
      color: 'purple',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Use Cases
          </h2>
          <p className="text-xl text-gray-600">
            See how developers are building with Sendexa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <useCase.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-500 mb-1">
                    {useCase.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationMethods() {
  const methods = [
    {
      icon: Code2,
      title: 'REST API',
      description: 'Direct HTTP integration with JSON responses',
      color: 'blue',
    },
    {
      icon: Workflow,
      title: 'Webhooks',
      description: 'Real-time event notifications to your servers',
      color: 'green',
    },
    {
      icon: Terminal,
      title: 'CLI Tool',
      description: 'Command-line interface for automation',
      color: 'orange',
    },
    {
      icon: Cloud,
      title: 'Cloud SDKs',
      description: 'Official libraries for all major languages',
      color: 'purple',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Integration Methods
          </h2>
          <p className="text-xl text-gray-600">
            Choose the approach that fits your workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <method.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-600 text-sm">{method.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of developers building amazing communication
            experiences with Sendexa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Start Building Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-gray-500 hover:text-white transition-all"
            >
              View Documentation
            </motion.button>
          </div>
          <div className="text-sm text-gray-400">
            No credit card required • Free tier available • 5-minute setup
          </div>
        </motion.div>
      </div>
    </section>
  );
}
