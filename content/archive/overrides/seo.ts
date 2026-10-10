import type { Page } from "../types";
import type { VizSpec } from "@/components/mock/Viz";
import { seo as base } from "../services/seo";

const PAIN_VIZ: { bv: VizSpec; av: VizSpec }[] = [
  {
    bv: { t: "serp", query: "ac repair near me", items: [["Desert Breeze AC · 4.4 ★ (96)", "desertbreezeac.ae", "Map result 1 · open now"], ["CoolPro AC Services · 4.1 ★ (58)", "coolproac.ae", "Map result 2 · from AED 299"], ["Peak Cooling · result #27, page 3", "peakcooling.ae", "0 calls from this search"]] },
    av: { t: "serp", query: "ac repair near me", items: [["Peak Cooling · 4.9 ★ (640) · Open 24 hours", "peakcooling.ae › ac-repair › jvc", "Same-day AC repair from AED 249"], ["#1 in JVC, Al Barsha, Dubai Marina", "Google Maps", "118 calls this month (was 31)"]] },
  },
  {
    bv: { t: "dash", title: "Search Console · maisonrose.ae/bridal", sub: "Last 28 days", kpis: [["Visits", "4"], ["Avg position", "34"], ["Bookings", "0"]], rows: [["bridal hair dubai", "Directory ranks first", "r|Pos 34"], ["bridal makeup jbr", "Not shown", "r|Pos 52"], ["maison rose", "Brand search", "g|Pos 1"]], head: ["QUERY", "NOTE", "POSITION"] },
    av: { t: "serp", query: "bridal hair dubai", items: [["Bridal Hair Dubai · from AED 1,950 · Maison Rose", "maisonrose.ae › bridal", "Real weddings, trial price and a Book a trial button. English + العربية."], ["Bridal hair trial · JBR", "maisonrose.ae › ar › bridal", "ستايل العروس · احجزي تجربة"]] },
  },
  {
    bv: { t: "dash", title: "Apex Auto Works · Google profile", sub: "What customers see", kpis: [["Rating", "3.9", "23 reviews"], ["Website", "Page not found"]], rows: [["Closes 6 PM · Closed Friday", "Hours", "r|Wrong"], ["★ Called Friday at 3 PM, nobody answered", "No reply for 7 months", "r|1 star"]], head: ["LISTING", "NOTE", "STATE"] },
    av: { t: "doc", title: "Apex Auto Works · 4.9 ★ (860)", sub: "Al Quoz · Google profile", lines: [["Sat–Thu", "8 AM–7 PM"], ["Friday", "8 AM–12 PM, 2–7 PM"], ["Owner reply", "\"Sorry about the Friday hours, fixed. — Rashid\""]], total: ["Brake service", "From AED 890"] },
  },
];
/** Gap-audit patch for /services/seo (spec 2026-10-07-service-seo-design.md, UAE values per localization spec §5/§8.11). Merge as {...page, ...PATCH}. */
const tabFine = ["", "Written with you from real jobs; no AI-spun pages.", "Works on WordPress, Shopify, Webflow, Wix or custom; no forced rebuild.", "", "Monthly 30-min call; Search Console and Analytics in your name."];

export const PATCH: Partial<Page> = {
  pains: base.pains.map((p, i) => ({ ...p, ...PAIN_VIZ[i] })),
  tabs: base.tabs.map((t, i) => (tabFine[i] ? { ...t, fine: tabFine[i] } : t)),
  techRows: [
    base.techRows[0],
    base.techRows[1],
    ["Typical cost", "AED 4,900 setup + AED 3,500–6,500/mo", "AED 5,500–18,000/mo in clicks", "AED 750–1,500/mo", "Your time"],
    base.techRows[3],
    ["Calls from it", "●●●●●", "●●●●", "Low", "Low"],
    base.techRows[4],
    base.techRows[5],
    ["What you see", "Calls and bookings, in plain English", "An ads dashboard", "Rankings for odd keywords", "Search Console"],
  ],
  techNote: "Typical UAE prices in 2026. We never resell Google Ads clicks at a markup.",
  priceH2: "Clear monthly price. No long contract.",
  priceLead: "Pay the setup once, then month to month with 30 days' notice. No six-month lock-in. Prices exclude 5% VAT.",
  faq: [
    base.faq[0],
    base.faq[1],
    { q: "Do I need a new website?", a: "Usually not. We work on WordPress, Shopify, Webflow, Wix or custom sites. If the site truly holds you back (very slow, or can't have area pages), we say so and give a separate price." },
    base.faq[2],
    base.faq[3],
    { q: "Should I just run Google Ads instead?", a: "Ads bring calls this week and stop the day you stop paying. SEO takes 4–8 weeks and then compounds. If you need calls now, run ads while SEO builds; many of our clients run both for the first three months." },
    base.faq[4],
    base.faq[5],
  ],
  indRow: [...(base.indRow ?? []), "SaaS"],
  caseStudy: {
    brand: "fixpoint",
    label: "FixPoint · Dubai · 3 stores (example project)",
    h: "Three stores, three Google listings. Only one of them showed up.",
    problem: "Deira got all the searches. Karama and City Centre were listed under an old name with a dead website link, so nearby searchers were sent across town or to iFix Hub.",
    built: "A cleaned-up profile and own page per store (live repair prices, wait times, real repair photos) and per-store WhatsApp review requests. Local SEO only, no ads.",
    metrics: [["3 of 3", "stores in the top 3 on the map"], ["+186%", "calls and walk-ins from Google"], ["AED 0", "spent on ads"]],
    quote: "People walk in holding their phone with our Google listing open. Karama went from our quietest store to our busiest.",
    by: "FixPoint owner",
    viz: { t: "serp", query: "iphone screen repair near me", items: [["FixPoint Karama · iPhone 13 screen AED 449", "fixpoint.ae › karama", "~15 min wait · in stock · ★ 4.9 (302)"]] },
    viz2: { t: "phone", k: "fixpoint", kind: "home" },
  },
};
