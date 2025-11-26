'use client';

import Hero from './core/Hero';
import Stats from './core/Stats';
import ProductFeatures from './core/ProductFeatures';
import QuickStart from './core/QuickStart';
import SDKs from './core/SDKs';
import UseCases from './core/UseCases';

export default function DocsLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Stats />
      <ProductFeatures />
      {/* Quick Start Section */}
      <QuickStart />

      {/* SDKs Section */}
      <SDKs />

      {/* Use Cases Section */}
      <UseCases />
    </div>
  );
}
