import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async rewrites() {
    return [{ source: "/:path*.md", destination: "/md/:path*" }];
  },
  async redirects() {
    return [
      { source: "/services/white-label", destination: "/agencies", permanent: true },
      { source: "/services/wordpress-development", destination: "/services/website-design", permanent: true },
      { source: "/services/ai-integration", destination: "/services/ai-whatsapp-automation", permanent: true },
    ];
  },
};

export default nextConfig;
