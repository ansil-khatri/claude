import type { Metadata } from "next";
import { site, url } from "@/config/site";

const clip = (s: string, n = 158) => (s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, "") + "…");

/** Metadata for every route: unique title/description, absolute canonical, hreflang, OG/Twitter. Per-route opengraph-image files supply the image. */
export function meta(input: { title: string; desc: string; path: string; noindex?: boolean; type?: "website" | "article"; published?: string; modified?: string; image?: boolean }): Metadata {
  const { path, noindex = false, type = "website" } = input;
  const canonical = url(path === "/" ? "" : path);
  const desc = clip(input.desc);
  return {
    title: input.title, description: desc,
    alternates: { canonical, languages: { "en-AE": canonical, "x-default": canonical } },
    openGraph: { title: `${input.title} · ${site.brand}`, description: desc, url: canonical, siteName: site.brand, locale: "en_AE", type, ...(type === "article" && input.published ? { publishedTime: input.published, modifiedTime: input.modified ?? input.published } : {}) },
    twitter: { card: "summary_large_image", title: `${input.title} · ${site.brand}`, description: desc },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  };
}
