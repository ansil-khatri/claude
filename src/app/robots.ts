import type { MetadataRoute } from "next";
import { url } from "@/config/site";
// Search and AI answer bots are explicitly allowed. Only the API is disallowed.
const BOTS = ["Googlebot", "Bingbot", "OAI-SearchBot", "ChatGPT-User", "GPTBot", "PerplexityBot", "ClaudeBot", "Claude-SearchBot", "Google-Extended", "Applebot", "Applebot-Extended", "Amazonbot", "DuckDuckBot", "meta-externalagent"];
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }, ...BOTS.map((b) => ({ userAgent: b, allow: "/", disallow: ["/api/"] }))], sitemap: url("/sitemap.xml"), host: url() };
}
