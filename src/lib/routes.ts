import { PAGES } from "@content/v3/pages";
import { POSTS } from "@content/v3/posts";
import { CASES } from "@content/v3/cases";

export const STATIC_ROUTES = ["/", "/work", "/pricing", "/process", "/about", "/contact", "/blog", "/tools/shopify-store-cost-calculator", "/legal/privacy", "/legal/terms", "/legal/cookies"];
export type RouteEntry = { path: string; lastmod: string; priority: number; freq: "weekly" | "monthly" };
const TODAY = "2026-10-10";
/** Every indexable route (single registry for sitemap, llms files and .md twins). */
export function routeEntries(): RouteEntry[] {
  return [
    { path: "/", lastmod: TODAY, priority: 1, freq: "weekly" },
    ...PAGES.map((p) => ({ path: `/${p.slug}`, lastmod: TODAY, priority: 0.95, freq: "monthly" as const })),
    { path: "/work", lastmod: TODAY, priority: 0.8, freq: "monthly" },
    ...CASES.map((c) => ({ path: `/work/${c.slug}`, lastmod: TODAY, priority: 0.7, freq: "monthly" as const })),
    { path: "/pricing", lastmod: TODAY, priority: 0.85, freq: "monthly" },
    { path: "/process", lastmod: TODAY, priority: 0.6, freq: "monthly" },
    { path: "/about", lastmod: TODAY, priority: 0.6, freq: "monthly" },
    { path: "/contact", lastmod: TODAY, priority: 0.7, freq: "monthly" },
    { path: "/blog", lastmod: TODAY, priority: 0.8, freq: "weekly" },
    ...POSTS.map((p) => ({ path: `/blog/${p.slug}`, lastmod: p.updated, priority: p.pillar ? 0.85 : 0.7, freq: "monthly" as const })),
    { path: "/tools/shopify-store-cost-calculator", lastmod: TODAY, priority: 0.6, freq: "monthly" },
    { path: "/legal/privacy", lastmod: TODAY, priority: 0.2, freq: "monthly" },
    { path: "/legal/terms", lastmod: TODAY, priority: 0.2, freq: "monthly" },
    { path: "/legal/cookies", lastmod: TODAY, priority: 0.2, freq: "monthly" },
  ];
}
export const allRoutes = () => routeEntries().map((r) => r.path);
