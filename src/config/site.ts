/**
 * Single source of truth for brand facts. Nothing else in the codebase may hardcode these.
 * Replace the bracketed placeholders (see docs/MASTER-PLAN.md Part C) before launch.
 */
export const site = {
  brand: process.env.NEXT_PUBLIC_BRAND_NAME ?? "[Brand]",
  domain: process.env.NEXT_PUBLIC_DOMAIN ?? "example.com",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "hello@example.com",
  phoneDisplay: "+971 50 000 0000",
  whatsappNumber: "971500000000",
  licence: "[number]",
  freeZone: "[free zone]",
  hours: "Mon–Fri 9:00–18:00 GST",
  timezone: "Asia/Dubai",
  currency: "AED",
  vatPct: 5,
  locale: "en-AE",
  baseLocation: "Dubai",
  /** set to true once an address qualifies for LocalBusiness schema (docs/seo-uae/08) */
  hasRealAddress: false,
} as const;

export const url = (path = "") => `https://${site.domain}${path}`;

export function waLink(text: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const footerLine = `Based in ${site.baseLocation} · Trade licence ${site.licence} · ${site.hours} · WhatsApp ${site.phoneDisplay}`;
