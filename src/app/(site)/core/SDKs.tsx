import { motion } from "framer-motion";

export default function SDKs() {
  const sdks = [
    { name: "JavaScript", icon: "🟨", lang: "javascript", version: "v2.1.0" },
    { name: "Python", icon: "🐍", lang: "python", version: "v1.8.2" },
    { name: "Java", icon: "☕", lang: "java", version: "v3.0.1" },
    { name: "PHP", icon: "🐘", lang: "php", version: "v2.5.3" },
    { name: "Go", icon: "🐹", lang: "go", version: "v1.2.0" },
    { name: "Ruby", icon: "💎", lang: "ruby", version: "v2.0.4" },
    { name: "C#", icon: "🔷", lang: "csharp", version: "v2.3.1" },
    { name: "Swift", icon: "🐦", lang: "swift", version: "v1.5.0" },
  ];
  return (
    <section id="sdks" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Developer-Friendly SDKs
          </h2>
          <p className="text-xl text-gray-600">
            Official libraries for your favorite programming languages
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {sdks.map((sdk, index) => (
            <motion.a
              key={sdk.name}
              href={`/docs/sdks/${sdk.lang}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg transition-all group"
            >
              <div className="text-2xl mb-2">{sdk.icon}</div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">
                {sdk.name}
              </h3>
              <div className="text-xs text-gray-500 font-mono">
                {sdk.version}
              </div>
              <div className="mt-2 text-xs text-[#f8971d] opacity-0 group-hover:opacity-100 transition-opacity">
                Get Started →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
