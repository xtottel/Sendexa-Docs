'use client';

import { motion } from 'framer-motion';
import { CreditCard, CheckCircle } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      description: 'Perfect for testing and small projects',
      features: [
        '100 SMS/month',
        '500 Email/month',
        'Basic Support',
        'African Coverage',
      ],
      cta: 'Get Started',
      popular: false,
      color: 'gray',
    },
    {
      name: 'Growth',
      price: '$49',
      description: 'Ideal for growing businesses',
      features: [
        '10,000 SMS/month',
        '5,000 Email/month',
        'Priority Support',
        'All APIs',
        'Advanced Analytics',
      ],
      cta: 'Start Free Trial',
      popular: true,
      color: 'yellow',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale deployments',
      features: [
        'Unlimited Messaging',
        'Dedicated Support',
        'SLA Guarantee',
        'Custom Features',
        '24/7 Phone Support',
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'purple',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30 mb-4">
            <CreditCard className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border ${
                plan.popular
                  ? 'border-yellow-500 shadow-2xl shadow-yellow-500/20'
                  : 'border-gray-700'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-500 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-white mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-600'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
