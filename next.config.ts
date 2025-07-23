import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static exports for static hosting
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // Compression
  compress: true,

  // Asset optimization for static export
  assetPrefix: process.env.NODE_ENV === "production" ? "" : "",

  // Disable experimental features that cause issues with static export
  experimental: {
    // optimizeCss: true, // Disabled - causes critters module error with static export
  },
};

export default nextConfig;
