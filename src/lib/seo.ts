import type { Metadata } from "next";
import { site, url } from "@/config/site";

/** Length-checked titles (base ≤ 52 chars, brand added by the template) and descriptions (120–158). Keyed by path. */
const FIX: Record<string, { title?: string; desc?: string }> = {
  "/": { desc: "We build the stores, apps, WhatsApp assistants and systems that run UAE businesses. Fixed AED prices, Arabic + English. Book a call or WhatsApp us." },
  "/abu-dhabi": { title: "Software for Abu Dhabi Businesses", desc: "Apps, websites and Shopify stores for Abu Dhabi SMEs, government suppliers and ADGM or Hub71 startups. Dubai team, fixed AED prices, from AED 7,900." },
  "/abu-dhabi/shopify-agency": { desc: "Shopify stores for Abu Dhabi brands: Arabic + English, Tabby and Tamara, delivery across the UAE. From AED 9,900. We meet in Abu Dhabi on request." },
  "/guides/shopify-store-cost-uae": { title: "Shopify Store Cost in UAE (2026): Plans, Apps, Setup" },
  "/guides/start-shopify-store-uae": { title: "How to Start a Shopify Store in the UAE" },
  "/guides/app-development-cost-dubai": { title: "App Development Cost in Dubai (2026): AED Prices" },
  "/guides": { title: "Guides for UAE Business Owners" },
  "/guides/e-invoicing-checklist-july-2027": { title: "E-Invoicing Checklist for UAE SMEs: 10 Steps", desc: "A 10-step e-invoicing checklist for UAE small businesses: deadline, invoice sources, TRNs, ASP, testing and go-live before July 2027." },
  "/guides/talabat-commission-math": { title: "Talabat Commission: What Restaurants Really Pay", desc: "Delivery apps in the UAE typically take 15–30% commission plus promos. On AED 70,000 a month of app orders, that's AED 15,000–21,000." },
  "/guides/uae-e-invoicing": { title: "UAE E-Invoicing 2026–2027: What SMEs Must Do", desc: "UAE businesses under AED 50m must appoint an ASP by 31 March 2027 and go live on 1 July 2027. What SMEs must do, step by step." },
  "/guides/website-cost-dubai": { desc: "A small-business website in Dubai costs AED 6,000–18,000; template sites AED 3,500–8,000; custom bilingual sites AED 18,000–45,000." },
  "/industries/auto-repair": { desc: "Customers see inspection photos and approve on WhatsApp. Websites, booking by plate and payment links for garages in Al Quoz. From AED 7,900." },
  "/industries/auto-repair/website": { desc: "A garage website with booking by plate, a fixed Google profile, photo inspections and reviews, in English and Arabic. From AED 7,900." },
  "/industries/home-services": { title: "Apps & Websites for AC and Maintenance Companies", desc: "When the AC dies at 1 AM, they find you first. Booking with call-out deposit, dispatch, WhatsApp replies and AMC contracts. From AED 7,900." },
  "/industries/laundry/pickup-delivery-app": { title: "Laundry App Development in Dubai" },
  "/industries/phone-repair": { desc: "A price for every model, WhatsApp updates instead of 'is it ready?' calls, stock across stores and instant trade-ins. From AED 7,900." },
  "/industries/restaurants/ordering-app": { desc: "A restaurant app with rewards, one-tap reorder and push offers for iPhone and Android, in Arabic and English. From AED 35,000." },
  "/process": { title: "How We Work: Fixed Price, Weekly Demos" },
  "/services/ai-whatsapp-automation": { title: "WhatsApp Chatbots & AI Assistants in the UAE", desc: "An assistant that answers customers on WhatsApp in Arabic and English from your real prices and calendar, takes orders and bookings. From AED 2,900." },
  "/services/e-invoicing-integration": { title: "UAE E-Invoicing Integration for SMEs" },
  "/services/payment-integration": { title: "Payment Gateway Integration: Tabby, Stripe, Telr" },
  "/services/saas-development": { desc: "From idea to paying customers: clickable prototype in 2–3 weeks, launch-ready SaaS with billing in 10–14 weeks. From AED 24,000." },
  "/services/seo": { desc: "Show up on Google Maps and in AI answers when people in Dubai search in English or Arabic. From AED 3,500 a month, no long contract." },
  "/services/shopify-development": { title: "Shopify Agency in Dubai & UAE · From AED 9,900", desc: "New Shopify stores, custom themes and migrations for UAE brands: Arabic + English, Tabby and Tamara, AED checkout, fast on phones. From AED 9,900." },
  "/tools": { desc: "Four free calculators in AED: Talabat commission, payment gateway fees, e-invoicing readiness and what an app costs. No sign-up." },
  "/tools/app-cost-calculator": { desc: "Estimate what your app costs in AED: pick the app type, platforms and features. You get a range and timeline; fixed price after a call." },
  "/tools/payment-gateway-fee-calculator": { desc: "Compare Stripe, Telr, Ziina and PayTabs fees on your real card volume in AED. Rates from public 2026 pages, checked October 2026." },
  "/work": { title: "Example Projects for UAE Businesses" },
};
/** Routes with their own opengraph-image file (generated per slug). */
const DEDICATED = /^\/(services|industries|guides|work|abu-dhabi)\/[^/]+/;
/** Cut at a word boundary so a description never exceeds 158 characters. */
const clip = (s: string, n = 158) => (s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, "") + "…");

export function meta(input: { title: string; desc: string; path: string; noindex?: boolean }): Metadata {
  const { path, noindex = false } = input;
  const fix = FIX[path] ?? {};
  const title = fix.title ?? input.title;
  const desc = clip(fix.desc ?? input.desc);
  const canonical = url(path === "/" ? "" : path);
  return {
    title,
    description: desc,
    alternates: { canonical, languages: { "en-AE": canonical, "x-default": canonical } },
    openGraph: { title: `${title} · ${site.brand}`, description: desc, url: canonical, siteName: site.brand, locale: "en_AE", type: "website", ...(DEDICATED.test(path) ? {} : { images: [{ url: url("/opengraph-image"), width: 1200, height: 630 }] }) },
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
