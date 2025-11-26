import { motion } from "framer-motion";
import { Shield, Bell, TrendingUp, MessageCircle } from "lucide-react";

export default function UseCases() {
  const useCases = [
    {
      category: "Authentication",
      title: "Secure User Verification",
      description:
        "Implement OTP and two-factor authentication to protect user accounts",
      icon: Shield,
      color: "bg-blue-50 text-blue-600",
    },
    {
      category: "Notifications",
      title: "Real-time Alerts",
      description:
        "Send timely notifications for transactions, security events, and updates",
      icon: Bell,
      color: "bg-green-50 text-green-600",
    },
    {
      category: "Marketing",
      title: "Engagement Campaigns",
      description: "Run targeted SMS and email campaigns with personalization",
      icon: TrendingUp,
      color: "bg-purple-50 text-purple-600",
    },
    {
      category: "Support",
      title: "Customer Communication",
      description:
        "Enable two-way messaging for customer support and engagement",
      icon: MessageCircle,
      color: "bg-orange-50 text-orange-600",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Use Cases
          </h2>
          <p className="text-xl text-gray-600">
            See how developers are using Sendexa to build amazing products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${useCase.color}`}
                >
                  <useCase.icon className="h-6 w-6" />
                </div>
                <div>
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
