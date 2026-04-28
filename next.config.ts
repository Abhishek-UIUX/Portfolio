import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Only export as static in production
  ...(isProd && { output: 'export' }),
  images: {
    unoptimized: true,
  },
  // Only use basePath in production (GitHub Pages)
  ...(isProd && {
    basePath: '/Portfolio',
    assetPrefix: '/Portfolio',
  }),
  // Allow hot-reload from network IP in development
  ...(!isProd && {
    allowedDevOrigins: ['192.168.1.155'],
  }),
};

export default nextConfig;
