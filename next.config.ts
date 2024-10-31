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

  reactStrictMode: true,
  pageExtensions: [
    "page.tsx",
    "page.ts",
    "page.js",
    "page.jsx",
    // FIXME: Next.js has a bug which does not resolve not-found.page.tsx correctly
    // Instead, use `not-found.ts` as a workaround
    // "ts" is required to resolve `not-found.ts`
    // https://github.com/vercel/next.js/issues/65447
    "ts",
  ],

  // webpack: (config, { dev, isServer }) => {
  //   // Disable source maps in development
  //   if (dev) {
  //     config.devtool = "eval";
  //   }
  //   return config;
  // },
};

export default nextConfig;
