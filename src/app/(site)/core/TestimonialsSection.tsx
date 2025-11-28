'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Aisha Bello',
      role: 'CTO, Fintech Startup',
      company: 'Lagos, Nigeria',
      content:
        'Sendexa reduced our SMS delivery costs by 60% while improving reliability across West Africa.',
      avatar: 'AB',
    },
    {
      name: 'David Omondi',
      role: 'Product Manager',
      company: 'Nairobi, Kenya',
      content:
        'The African carrier optimization is unmatched. Our delivery rates went from 85% to 99.9% overnight.',
      avatar: 'DO',
    },
    {
      name: 'Sarah Johnson',
      role: 'Engineering Lead',
      company: 'Johannesburg, South Africa',
      content:
        'Finally, a communication platform that understands African market challenges and pricing needs.',
      avatar: 'SJ',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-4">
            <Star className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by African Innovators
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See what developers and businesses across Africa are saying about
            Sendexa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-yellow-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>

              <div className="flex gap-1 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
