'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  MapPin,
  Zap,
  Users,
  Globe,
  Signal,
  ArrowRight,
  Search,
  Shield,
  Wifi,
  Server,
} from 'lucide-react';

const AfricaCoverage = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // African regions data
  const regions = {
    all: { name: 'All Africa', count: 54, color: 'from-yellow-500 to-red-500' },
    west: {
      name: 'West Africa',
      count: 16,
      color: 'from-green-500 to-blue-500',
    },
    east: {
      name: 'East Africa',
      count: 14,
      color: 'from-purple-500 to-pink-500',
    },
    south: {
      name: 'Southern Africa',
      count: 10,
      color: 'from-orange-500 to-red-500',
    },
    north: {
      name: 'North Africa',
      count: 7,
      color: 'from-blue-500 to-cyan-500',
    },
    central: {
      name: 'Central Africa',
      count: 7,
      color: 'from-indigo-500 to-purple-500',
    },
  };

  // Detailed country data
  const countries = [
    // West Africa
    {
      name: 'Nigeria',
      code: 'NG',
      region: 'west',
      carriers: ['MTN', 'Airtel', 'Glo', '9mobile'],
      coverage: 99.8,
      latency: 45,
      status: 'excellent',
      features: ['SMS', 'Voice', 'USSD', 'WhatsApp'],
      population: '218M',
      gdp: '₦230T',
    },
    {
      name: 'Ghana',
      code: 'GH',
      region: 'west',
      carriers: ['MTN', 'Vodafone', 'AirtelTigo'],
      coverage: 99.5,
      latency: 52,
      status: 'excellent',
      features: ['SMS', 'Voice', 'Email', 'WhatsApp'],
      population: '32M',
      gdp: '₵611B',
    },
    {
      name: "Côte d'Ivoire",
      code: 'CI',
      region: 'west',
      carriers: ['MTN', 'Orange', 'Moov'],
      coverage: 98.7,
      latency: 68,
      status: 'good',
      features: ['SMS', 'Voice'],
      population: '27M',
      gdp: 'CFA 61T',
    },
    {
      name: 'Senegal',
      code: 'SN',
      region: 'west',
      carriers: ['Orange', 'Free', 'Expresso'],
      coverage: 97.8,
      latency: 72,
      status: 'good',
      features: ['SMS', 'Voice', 'WhatsApp'],
      population: '17M',
      gdp: 'CFA 16T',
    },

    // East Africa
    {
      name: 'Kenya',
      code: 'KE',
      region: 'east',
      carriers: ['Safaricom', 'Airtel', 'Telkom'],
      coverage: 99.9,
      latency: 38,
      status: 'excellent',
      features: ['SMS', 'Voice', 'USSD', 'WhatsApp', 'MPESA'],
      population: '55M',
      gdp: 'KES 14T',
    },
    {
      name: 'Ethiopia',
      code: 'ET',
      region: 'east',
      carriers: ['Ethio Telecom', 'Safaricom'],
      coverage: 95.2,
      latency: 85,
      status: 'good',
      features: ['SMS', 'Voice'],
      population: '120M',
      gdp: 'ETB 4.5T',
    },
    {
      name: 'Tanzania',
      code: 'TZ',
      region: 'east',
      carriers: ['Vodacom', 'Airtel', 'Tigo', 'Halotel'],
      coverage: 98.3,
      latency: 58,
      status: 'excellent',
      features: ['SMS', 'Voice', 'WhatsApp'],
      population: '62M',
      gdp: 'TZS 162T',
    },
    {
      name: 'Uganda',
      code: 'UG',
      region: 'east',
      carriers: ['MTN', 'Airtel', 'Africell'],
      coverage: 97.6,
      latency: 62,
      status: 'good',
      features: ['SMS', 'Voice', 'WhatsApp'],
      population: '47M',
      gdp: 'UGX 162T',
    },

    // Southern Africa
    {
      name: 'South Africa',
      code: 'ZA',
      region: 'south',
      carriers: ['Vodacom', 'MTN', 'Telkom', 'Cell C'],
      coverage: 99.7,
      latency: 42,
      status: 'excellent',
      features: ['SMS', 'Voice', 'WhatsApp', 'Video'],
      population: '60M',
      gdp: 'R 6.3T',
    },
    {
      name: 'Angola',
      code: 'AO',
      region: 'south',
      carriers: ['Unitel', 'Movicel'],
      coverage: 96.4,
      latency: 78,
      status: 'good',
      features: ['SMS', 'Voice'],
      population: '35M',
      gdp: 'AOA 32T',
    },

    // North Africa
    {
      name: 'Egypt',
      code: 'EG',
      region: 'north',
      carriers: ['Orange', 'Vodafone', 'Etisalat', 'WE'],
      coverage: 99.3,
      latency: 48,
      status: 'excellent',
      features: ['SMS', 'Voice', 'WhatsApp'],
      population: '104M',
      gdp: 'EGP 9.8T',
    },
    {
      name: 'Morocco',
      code: 'MA',
      region: 'north',
      carriers: ['Maroc Telecom', 'Orange', 'Inwi'],
      coverage: 98.9,
      latency: 55,
      status: 'excellent',
      features: ['SMS', 'Voice', 'WhatsApp'],
      population: '37M',
      gdp: 'MAD 1.3T',
    },

    // Central Africa
    {
      name: 'DR Congo',
      code: 'CD',
      region: 'central',
      carriers: ['Vodacom', 'Airtel', 'Orange'],
      coverage: 92.8,
      latency: 95,
      status: 'fair',
      features: ['SMS', 'Voice'],
      population: '95M',
      gdp: 'CDF 72T',
    },
  ];

  const filteredCountries = countries.filter((country) => {
    const matchesRegion =
      selectedRegion === 'all' || country.region === selectedRegion;
    const matchesSearch =
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const statusColors: Record<string, string> = {
    excellent: 'bg-green-500',
    good: 'bg-blue-500',
    fair: 'bg-yellow-500',
    poor: 'bg-red-500',
  };

  const statusLabels: Record<string, string> = {
    excellent: 'Excellent',
    good: 'Good',
    fair: 'Fair',
    poor: 'Limited',
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 -right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 rounded-full border border-yellow-500/30 mb-6">
              <Globe className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">
                African Coverage
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Coverage Across
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600">
                54 African Countries
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Direct partnerships with every major mobile carrier across Africa.
              Experience 99.9% uptime and industry-leading latency.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { icon: Globe, value: '54', label: 'Countries' },
                { icon: Zap, value: '99.9%', label: 'Uptime SLA' },
                { icon: Signal, value: '<100ms', label: 'Avg Latency' },
                { icon: Users, value: '200+', label: 'Carrier Partners' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700"
                >
                  <stat.icon className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Real-Time Network Status
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Monitor connectivity and performance across our African network
              infrastructure
            </p>
          </motion.div>

          {/* Africa Map Visualization */}
          <div className="bg-gray-800/50 rounded-3xl border border-gray-700 p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Map Legend */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-bold text-white mb-6">
                  Network Status
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      color: 'bg-green-500',
                      label: 'Excellent (95-100%)',
                      count: 38,
                    },
                    { color: 'bg-blue-500', label: 'Good (90-94%)', count: 12 },
                    {
                      color: 'bg-yellow-500',
                      label: 'Fair (85-89%)',
                      count: 4,
                    },
                    { color: 'bg-red-500', label: 'Limited (<85%)', count: 0 },
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 ${item.color} rounded-full`}
                        ></div>
                        <span className="text-gray-300 text-sm">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-gray-400 text-sm">
                        {item.count} countries
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simplified Africa Map */}
              <div className="lg:col-span-2">
                <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
                  <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 flex items-center justify-center">
                    <div className="text-center">
                      <Globe className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-400">
                        Interactive Africa Map Visualization
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Live network status across all regions
                      </p>
                    </div>

                    {/* Regional Indicators */}
                    <div className="absolute top-4 left-4 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-8 right-8 w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="absolute bottom-8 left-8 w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="absolute bottom-12 right-12 w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Coverage Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Country-by-Country Coverage
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Detailed network information for every African country we serve
            </p>
          </motion.div>

          {/* Filters and Search */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search countries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto">
              {Object.entries(regions).map(([key, region]) => (
                <button
                  key={key}
                  onClick={() => setSelectedRegion(key)}
                  className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                    selectedRegion === key
                      ? `bg-gradient-to-r ${region.color} text-white shadow-lg`
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {region.name} ({region.count})
                </button>
              ))}
            </div>
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCountries.map((country, index) => (
              <motion.div
                key={country.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300"
              >
                {/* Country Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {country.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">
                        {country.region.replace(/^./, (str) =>
                          str.toUpperCase()
                        )}{' '}
                        Africa
                      </span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-300">
                    {country.code}
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className={`w-2 h-2 ${statusColors[country.status]} rounded-full`}
                  ></div>
                  <span className="text-sm text-gray-300">
                    {statusLabels[country.status]}
                  </span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Coverage</div>
                    <div className="text-lg font-bold text-white">
                      {country.coverage}%
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Latency</div>
                    <div className="text-lg font-bold text-white">
                      {country.latency}ms
                    </div>
                  </div>
                </div>

                {/* Carriers */}
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">
                    Carrier Partners
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {country.carriers.map((carrier) => (
                      <span
                        key={carrier}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-lg"
                      >
                        {carrier}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">
                    Available APIs
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {country.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-lg border border-yellow-500/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Country Stats */}
                <div className="flex justify-between text-xs text-gray-500 border-t border-gray-700 pt-3">
                  <span>Pop: {country.population}</span>
                  <span>GDP: {country.gdp}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              African Infrastructure
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Built for African networks with local data centers and direct
              carrier connections
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Server,
                title: 'Local Data Centers',
                description:
                  'Multiple data centers across Africa for low-latency access',
                stats: '12 locations',
              },
              {
                icon: Wifi,
                title: 'Direct Carrier Links',
                description:
                  'Direct connections to every major mobile network operator',
                stats: '200+ direct links',
              },
              {
                icon: Shield,
                title: 'Redundant Networks',
                description:
                  'Multiple failover routes for 99.9% uptime guarantee',
                stats: '99.9% uptime',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all"
              >
                <feature.icon className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="text-yellow-400 font-bold">{feature.stats}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 border border-gray-700"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Reach All of Africa?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start building with the most comprehensive African communication
              platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-red-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-500/25 transition-all flex items-center justify-center gap-2"
              >
                <Zap className="h-5 w-5" />
                Start Building Free
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-bold rounded-xl hover:border-yellow-500 hover:text-yellow-400 transition-all"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AfricaCoverage;
