import { motion } from "framer-motion";
import {
  MessageSquareText,
  MailCheck,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function ProductFeatures() {
  const productFeatures = [
    {
      icon: MessageSquareText,
      title: "SMS API",
      description:
        "Global SMS delivery with advanced features and 99.9% reliability",
      capabilities: [
        "Two-way messaging",
        "Long code & short code",
        "Global coverage",
        "Delivery reports",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MailCheck,
      title: "Email API",
      description:
        "Send transactional and marketing emails with powerful templates",
      capabilities: [
        "HTML templates",
        "A/B testing",
        "Analytics",
        "Bulk sending",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: PhoneCall,
      title: "Voice API",
      description: "Make and receive calls with advanced voice capabilities",
      capabilities: [
        "Text-to-speech",
        "IVR systems",
        "Call recording",
        "Number masking",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: ShieldCheck,
      title: "Verify API",
      description: "Secure authentication and verification flows",
      capabilities: [
        "OTP verification",
        "2FA",
        "Fraud detection",
        "Compliance tools",
      ],
      color: "from-orange-500 to-red-500",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Communication APIs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build reliable communication features into
            your applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {feature.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
