import type { Metadata } from "next";
import { site, url } from "@/config/site";

export function meta({ title, desc, path, noindex = false }: { title: string; desc: string; path: string; noindex?: boolean }): Metadata {
  const canonical = url(path === "/" ? "" : path);
  return {
    title,
    description: desc,
    alternates: { canonical, languages: { "en-AE": canonical, "x-default": canonical } },
    openGraph: { title: `${title} · ${site.brand}`, description: desc, url: canonical, siteName: site.brand, locale: "en_AE", type: "website" },
    twitter: { card: "summary_large_image", title: `${title} · ${site.brand}`, description: desc },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export const breadcrumbLd = (items: [string, string][]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: url(path) })),
});

export const serviceLd = (p: { name: string; seo: { desc: string }; slug: string }, path: string, from?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: p.name,
  description: p.seo.desc,
  url: url(path),
  provider: { "@id": url("/#org") },
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  inLanguage: ["en-AE", "ar-AE"],
  ...(from ? { offers: { "@type": "Offer", priceCurrency: "AED", price: from.replace(/[^\d.]/g, ""), priceSpecification: { "@type": "PriceSpecification", priceCurrency: "AED", valueAddedTaxIncluded: false } } } : {}),
});
