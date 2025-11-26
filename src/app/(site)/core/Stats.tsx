import { motion } from "framer-motion";
import { Shield, Globe, Zap, MessageCircle } from "lucide-react";

export default function Stats() {
  const stats = [
    { number: "99.9%", label: "Uptime SLA", icon: Shield },
    { number: "200+", label: "Countries", icon: Globe },
    { number: "50ms", label: "Avg Latency", icon: Zap },
    { number: "10B+", label: "Messages/Month", icon: MessageCircle },
  ];
  return (
    <section className="py-16 bg-white border-y border-gray-200">
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
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-50 rounded-xl shadow-sm border border-gray-200 mb-4">
                <stat.icon className="h-6 w-6 text-[#f8971d]" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
