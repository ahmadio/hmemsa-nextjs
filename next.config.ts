import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ["cdn.sanity.io", "via.placeholder.com"],
  },
  webpack: (config, { isServer }) => {
    // Ensure source maps are generated
    if (!isServer) {
      config.devtool = "source-map";
    }
    return config;
  },

  // webpack: (config, { dev, isServer }) => {
  //   // Disable source maps in development
  //   if (dev) {
  //     config.devtool = "eval";
  //   }
  //   return config;
  // },
};

export default nextConfig;
