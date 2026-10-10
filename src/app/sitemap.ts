import type { MetadataRoute } from "next";
import { routeEntries } from "@/lib/routes";
import { url } from "@/config/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return routeEntries().map((r) => ({ url: url(r.path === "/" ? "" : r.path), lastModified: r.lastmod, changeFrequency: r.freq, priority: r.priority }));
}
