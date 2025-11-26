export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-white/60 to-white/0 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:pt-32">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-300 via-purple-300 to-pink-300 opacity-20"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)" }}
      />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Sendexa Documentation
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Comprehensive guides and documentation to help you start working
          quickly with Sendexa SMS API and related services.
        </p>
      </div>
    </div>
  );
}