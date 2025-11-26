// import createMDX from '@next/mdx';
import { createContentlayerPlugin } from 'next-contentlayer2';
import { webpack } from 'next/dist/compiled/webpack/webpack';

const nextConfig = {
  // pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // webpack: (config: { cache: boolean }) => {
  //   config.cache = false;
  //   return config;
  // },
  turbopack: {
    // root: path.join(__dirname, '..'),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https' as const,
        hostname: 'cdn.sendexa.co',
      },
    ],
  },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default withContentlayer(nextConfig);
