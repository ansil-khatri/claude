import type { Page } from "../types";
import { shopify } from "./shopify";
import { website } from "./website";
import { mobile, webapp, saas } from "./apps";
import { landing } from "./landing";
import { payments } from "./payments";
import { ai } from "./ai";
import { automation } from "./automation";
import { einvoice } from "./einvoice";
import { seo } from "./seo";
import { rescue } from "./rescue";
import { whitelabel } from "./whitelabel";
import { SHOWCASE, CASES } from "../showcases";

/** Website tiers follow the price book (UAE spec §5), not the older mockup numbers. */
const websiteFixed: Page = {
  ...website,
  tiers: website.tiers.map((t, i) => ({ ...t, amt: ["AED 7,900", "AED 19,900", "AED 44,000"][i] ?? t.amt })),
};

const SCRUB: [string, string][] = [
  ["Texts and emails go out", "WhatsApp messages and emails go out"], ["by text or email", "on WhatsApp or email"], ["texts the customer", "messages the customer on WhatsApp"],
  ["Invoices, texts and stock", "Invoices, WhatsApp messages and stock"], ["Spanish version", "Arabic version"], ["Dallas", "Abu Dhabi"], ["SOC 2", "ISO 27001"],
  ["Electricians & plumbers", "Electricians & AC companies"], ["a text in under a minute", "a WhatsApp message in under a minute"],
];
function scrub<T>(v: T): T {
  if (typeof v === "string") return SCRUB.reduce((a, [f, t]) => a.split(f).join(t), v as string) as T;
  if (Array.isArray(v)) return v.map(scrub) as T;
  if (v && typeof v === "object") return Object.fromEntries(Object.entries(v as object).map(([k, x]) => [k, scrub(x)])) as T;
  return v;
}
export const scrubPage = scrub;

export const SERVICE_PAGES: Page[] = [shopify, websiteFixed, payments, landing, mobile, webapp, saas, ai, automation, einvoice, seo, rescue, whitelabel].map((p) => ({
  ...p,
  showcase: p.showcase ? { ...p.showcase, items: SHOWCASE[p.slug] ?? p.showcase.items } : p.showcase,
  caseStudy: CASES[p.slug] ?? p.caseStudy,
})).map(scrub);
export const servicePage = (slug: string) => SERVICE_PAGES.find((p) => p.slug === slug);
