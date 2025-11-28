'use client';

import { motion } from 'framer-motion';
import { Code2, Terminal, Server, Database, Zap } from 'lucide-react';

export default function CodeShowcaseDark() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30 mb-4">
              <Code2 className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">
                Developer First
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Code in Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Favorite Language
              </span>
            </h2>

            <p className="text-xl text-gray-300">
              Clean, intuitive APIs with comprehensive documentation and SDKs
              for every popular language.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Terminal,
                  text: 'RESTful API design',
                  color: 'text-green-400',
                },
                { icon: Code2, text: 'Multiple SDKs', color: 'text-blue-400' },
                {
                  icon: Server,
                  text: 'Webhooks support',
                  color: 'text-purple-400',
                },
                {
                  icon: Database,
                  text: 'Local databases',
                  color: 'text-yellow-400',
                },
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
              ].map((item, index) => (
                <div key={item.text} className="flex items-center gap-3">
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                  <span className="text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
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

              <pre className="text-sm text-gray-200 font-mono overflow-x-auto">
                <code>{`// Send SMS across African networks
import { Sendexa } from 'sendexa';

// Authenticate with your API key
const client = new Sendexa(process.env.SENDEXA_API_KEY);

async function sendWelcomeSMS() {
  try {
    const message = await client.sms.send({
      to: '+2349012345678',  // Nigerian number
      body: 'Welcome to Sendexa! 🎉',
      from: 'Sendexa',
      route: 'premium'  // Optimized for African carriers
    });
    
    console.log('Message ID:', message.id);
    return message;
  } catch (error) {
    console.error('Failed to send:', error);
  }
}

// Handle delivery reports
client.webhooks.on('delivery', (event) => {
  console.log('Message delivered to:', event.to);
});`}</code>
              </pre>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
            >
              <Zap className="h-4 w-4 text-gray-900" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
