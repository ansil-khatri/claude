import { site, url } from "@/config/site";
import { MONEY } from "@content/v3/nav";
import type { MoneyPage, Post, Case } from "@content/v3/types";

const ORG = url("/#org");
const AREA = [{ "@type": "Country", name: "United Arab Emirates" }, { "@type": "City", name: "Dubai" }];

/** Site-wide graph: Organization + ProfessionalService (no street address until site.hasRealAddress), WebSite with search action, and the service catalogue. */
export function orgGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"], "@id": ORG, name: site.brand, url: url(), logo: url("/icon.svg"), image: url("/opengraph-image"), email: site.email,
        description: "Dubai agency for Shopify, Shopify Plus, WordPress and custom theme development, plus ERP, WhatsApp automation and AI assistants.",
        areaServed: AREA, knowsLanguage: ["en", "ar"], priceRange: "AED 2,900 to AED 150,000+", currenciesAccepted: "AED",
        knowsAbout: ["Shopify development", "Shopify Plus", "Custom Shopify theme development", "WordPress development", "WooCommerce", "Ecommerce SEO", "ERP software", "WhatsApp automation", "AI assistants"],
        contactPoint: { "@type": "ContactPoint", telephone: site.phoneDisplay, contactType: "sales", availableLanguage: ["English", "Arabic"], areaServed: "AE" },
        hasOfferCatalog: { "@type": "OfferCatalog", name: "Services", itemListElement: MONEY.map((m) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: m.label, url: url(`/${m.slug}`) } })) },
      },
      { "@type": "WebSite", "@id": url("/#site"), url: url(), name: site.brand, inLanguage: "en-AE", publisher: { "@id": ORG } },
    ],
  };
}

export const breadcrumbLd = (items: [string, string][]) => ({
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: url(path) })),
});

const lowest = (p: MoneyPage) => {
  const t = p.sections.find((s) => s.k === "pricing");
  const amt = t && t.k === "pricing" ? t.tiers[0]?.amt : p.facts.map((f) => f[1]).find((x) => /\d/.test(x));
  return amt?.replace(/[^\d]/g, "") ?? "";
};
export function serviceLd(p: MoneyPage) {
  const price = lowest(p);
  return {
    "@context": "https://schema.org", "@type": "Service", "@id": url(`/${p.slug}#service`), name: p.title, serviceType: p.keyword, description: p.desc, url: url(`/${p.slug}`),
    provider: { "@id": ORG }, areaServed: AREA, availableChannel: { "@type": "ServiceChannel", serviceUrl: url("/contact") },
    ...(price ? { offers: { "@type": "Offer", priceCurrency: "AED", price, priceSpecification: { "@type": "PriceSpecification", priceCurrency: "AED", minPrice: price, valueAddedTaxIncluded: false }, url: url(`/${p.slug}`), availability: "https://schema.org/InStock" } } : {}),
  };
}
export const webPageLd = (name: string, path: string, desc: string, kind: "WebPage" | "CollectionPage" | "AboutPage" | "ContactPage" = "WebPage") => ({
  "@context": "https://schema.org", "@type": kind, "@id": url(`${path}#page`), url: url(path), name, description: desc, inLanguage: "en-AE", isPartOf: { "@id": url("/#site") }, about: { "@id": ORG },
});
export const faqLd = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map((it) => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: it.a } })),
});
export const articleLd = (p: Post) => ({
  "@context": "https://schema.org", "@type": "Article", headline: p.title, description: p.desc, datePublished: p.date, dateModified: p.updated, inLanguage: "en-AE",
  mainEntityOfPage: url(`/blog/${p.slug}`), image: url(`/blog/${p.slug}/opengraph-image`),
  author: { "@type": "Organization", "@id": ORG, name: site.brand }, publisher: { "@id": ORG },
});
export const itemListLd = (name: string, items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org", "@type": "ItemList", name, itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: url(it.path) })),
});
export const caseLd = (c: Case) => ({
  "@context": "https://schema.org", "@type": "CreativeWork", name: `${c.name} (concept build)`, description: c.summary, url: url(`/work/${c.slug}`), creator: { "@id": ORG },
  about: c.sector, genre: "Concept build", inLanguage: "en-AE",
});
export const appLd = (name: string, path: string, desc: string) => ({
  "@context": "https://schema.org", "@type": "WebApplication", name, url: url(path), description: desc, applicationCategory: "BusinessApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "AED" }, provider: { "@id": ORG },
});

export function industryLd(i: import("@content/v3/types").Industry) {
  const price = (i.price[0]?.amt ?? "").replace(/[^\d]/g, "");
  return {
    "@context": "https://schema.org", "@type": "Service", "@id": url(`/industries/${i.slug}#service`), name: i.title, serviceType: i.keyword, description: i.desc, url: url(`/industries/${i.slug}`),
    provider: { "@id": ORG }, areaServed: AREA, audience: { "@type": "BusinessAudience", audienceType: i.name },
    ...(price ? { offers: { "@type": "Offer", priceCurrency: "AED", price, valueAddedTaxIncluded: false } } : {}),
  };
}
