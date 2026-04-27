import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages configuration for repository deployment
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio',
};

export default nextConfig;
