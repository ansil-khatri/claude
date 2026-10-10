import type { MetadataRoute } from "next";
import { url } from "@/config/site";

// Search and AI answer bots are explicitly allowed (docs/seo-uae/07 §5).
const BOTS = ["Googlebot", "Bingbot", "OAI-SearchBot", "ChatGPT-User", "GPTBot", "PerplexityBot", "ClaudeBot", "Claude-SearchBot", "Google-Extended", "Applebot"];
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/ar"] }, ...BOTS.map((b) => ({ userAgent: b, allow: "/", disallow: ["/api/"] }))],
    sitemap: url("/sitemap.xml"),
    host: url(),
  };
}
