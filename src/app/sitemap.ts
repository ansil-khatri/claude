import type { MetadataRoute } from "next";
import { allRoutes } from "@/lib/routes";
import { url } from "@/config/site";

const money = new Set(["/", "/pricing", "/services", "/industries", "/agencies"]);
export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes().map((p) => ({
    url: url(p === "/" ? "" : p),
    lastModified: "2026-10-10",
    changeFrequency: p.startsWith("/guides/") ? "monthly" : "weekly",
    priority: p === "/" ? 1 : money.has(p) || p.startsWith("/services/") ? 0.9 : 0.7,
  }));
}
