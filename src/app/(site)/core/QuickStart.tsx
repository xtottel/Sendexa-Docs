import { motion } from "framer-motion";
import { Users, Download, Rocket, CheckCircle2 } from "lucide-react";

export default function QuickStart() {
  const quickStartSteps = [
    {
      step: 1,
      title: "Create Account",
      description: "Sign up and get your API keys",
      icon: Users,
    },
    {
      step: 2,
      title: "Install SDK",
      description: "Add our library to your project",
      icon: Download,
    },
    {
      step: 3,
      title: "Send Message",
      description: "Make your first API call",
      icon: Rocket,
    },
    {
      step: 4,
      title: "Go Live",
      description: "Deploy to production",
      icon: CheckCircle2,
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
            Get Started in 5 Minutes
          </h2>
          <p className="text-xl text-gray-600">
            Follow these simple steps to send your first message
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {quickStartSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#f8971d] to-orange-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
