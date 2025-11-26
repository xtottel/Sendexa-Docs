export const meta = {
  metadataBase: new URL('https://pinexio.vercel.app'),
   title: {
    default: "Sendexa for Developers",
    template: "%s | Sendexa Docs",
  },

  description:
    'Africas Leading Communication Platform. A customizable open-source documentation template built with Next.js.',
  authors: [{ name: 'Collins Vidzro' }],
  keywords: [
    'Pinexio',
    'documentation template',
    'template',
    'Next.js',
    'React',
    'JavaScript',
  ],
  publisher: 'Collins Vidzro',
  creator: 'Collins Vidzro',
  openGraph: {
    type: 'website',
    title: 'Sendexa for Developers',
    description:
      'A customizable open-source documentation template built with Next.js.',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'Pinexio Documentation Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image', // Type of Twitter card
    title: 'Sendexa for Developers', // Twitter card title
    description:
      'A customizable open-source documentation template built with Next.js.', // Twitter card description
    images: ['/og_image.png'], // Image used in the Twitter card
    creator: '@sanjayrajeev', // Twitter handle of the content creator (optional)
  },
  // SEO Enhancements
  alternates: {
    canonical: 'https://pinexio.vercel.app', // Set the canonical URL
  },
  robots: 'index, follow', // Allows search engines to index and follow links
  // Optional: Hreflang for multilingual content (if applicable)
  hreflang: {
    en: 'https://pinexio.vercel.app', // English version URL
    // Add more hreflang if you have other languages (example: Spanish)
    // "es": "https://pinexio.vercel.app/es",
  },
  //icon
  icons: {
    icon: '/favicon.png',
  },
};
