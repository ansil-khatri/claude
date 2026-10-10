import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async rewrites() {
    return [{ source: "/:path*.md", destination: "/md/:path*" }];
  },
  async redirects() {
    // Old v2 URLs from the earlier broad-agency site, so any link or ranking carries over.
    return [
      { source: "/services/shopify-development", destination: "/shopify-agency-dubai", permanent: true },
      { source: "/services/website-design", destination: "/website-design-dubai", permanent: true },
      { source: "/services/business-automation", destination: "/business-automation-dubai", permanent: true },
      { source: "/services/ai-whatsapp-automation", destination: "/whatsapp-automation-dubai", permanent: true },
      { source: "/guides", destination: "/blog", permanent: true },
      { source: "/guides/:slug", destination: "/blog/:slug", permanent: true },
    ];
  },
  async headers() {
    return [{ source: "/(.*)", headers: [{ key: "X-Content-Type-Options", value: "nosniff" }, { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }, { key: "X-Frame-Options", value: "SAMEORIGIN" }] }];
  },
};

export default nextConfig;
