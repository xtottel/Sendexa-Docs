/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import HeroSection from './core/HeroSection';
import CompactStatsSection from './core/CompactStatsSection';
import APIGridExtended from './core/APIGridExtended';
import AfricanAdvantage from './core/AfricanAdvantage';
import CodeShowcaseDark from './core/CodeShowcaseDark';
import QuickStartFlowAdvanced from './core/QuickStartFlowAdvanced';
import SDKShowcaseExtended from './core/SDKShowcaseExtended';
import UseCaseGalleryExtended from './core/UseCaseGalleryExtended';
import IntegrationMethodsAdvanced from './core/IntegrationMethodsAdvanced';
import PricingSection from './core/PricingSection';
import TestimonialsSection from './core/TestimonialsSection';
import CTASectionAdvanced from './core/CTASectionAdvanced';

export default function DocsLanding() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gray-950 overflow-hidden"
    >
      {/* Advanced Background Elements with African Inspiration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 -right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-[100px]"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-transparent to-gray-900/50"></div>
      </div>

      <HeroSection />
      <CompactStatsSection />
      <APIGridExtended />
      <AfricanAdvantage />
      <CodeShowcaseDark />
      <QuickStartFlowAdvanced />
      <SDKShowcaseExtended />
      <UseCaseGalleryExtended />
      <IntegrationMethodsAdvanced />
      <PricingSection />
      <TestimonialsSection />
      <CTASectionAdvanced />
    </div>
  );
}
