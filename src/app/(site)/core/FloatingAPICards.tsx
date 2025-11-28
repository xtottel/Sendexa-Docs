'use client';

import { motion } from 'framer-motion';
import { Send, Phone, Mail, Smartphone } from 'lucide-react';

export default function FloatingAPICards() {
  const cards = [
    { icon: Send, color: 'blue', delay: 0 },
    { icon: Phone, color: 'green', delay: 1 },
    { icon: Mail, color: 'orange', delay: 2 },
    { icon: Smartphone, color: 'purple', delay: 3 },
  ];

  return (
    <>
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className={`absolute w-20 h-20 bg-gradient-to-br from-${card.color}-500 to-${card.color}-600 rounded-2xl flex items-center justify-center shadow-2xl`}
          style={{
            left: `${20 + index * 20}%`,
            top: `${30 + index * 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: card.delay,
          }}
        >
          <card.icon className="h-8 w-8 text-white" />
        </motion.div>
      ))}
    </>
  );
}
