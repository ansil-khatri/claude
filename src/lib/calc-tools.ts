/** Pure maths behind the free tools. Prices come from the published AED price book (excl. 5% VAT). Results are indicative, never quotes. */
const clamp = (n: unknown, lo: number, hi: number) => Math.min(hi, Math.max(lo, Number(n) || 0));
export const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

/* ---------- website cost ---------- */
export type SiteTier = "business" | "custom" | "shop";
export const SITE_BASE: Record<SiteTier, { name: string; amt: number; pages: number; weeks: string }> = {
  business: { name: "WordPress business site", amt: 7900, pages: 8, weeks: "2 to 4" },
  custom: { name: "Custom WordPress site", amt: 19900, pages: 15, weeks: "4 to 8" },
  shop: { name: "WooCommerce shop or bookings", amt: 44000, pages: 25, weeks: "8 to 12" },
};
export const PER_EXTRA_PAGE = 500, ARABIC_ADDON = 3500, INTEGRATION = 4000, CARE_PER_MONTH = 590, SITE_SPREAD = 0.3;
export function websiteCost(i: { tier?: SiteTier; pages?: number; arabic?: boolean; integrations?: number; care?: boolean } = {}) {
  const tier = i.tier ?? "business"; const b = SITE_BASE[tier];
  const lines: [string, number][] = [[b.name, b.amt]];
  const extra = Math.max(0, Math.round(clamp(i.pages ?? b.pages, 1, 80)) - b.pages);
  if (extra) lines.push([`${extra} extra page${extra > 1 ? "s" : ""}`, extra * PER_EXTRA_PAGE]);
  if (i.arabic && tier === "business") lines.push(["Arabic RTL version", ARABIC_ADDON]);
  const n = Math.round(clamp(i.integrations, 0, 6)); if (n) lines.push([`${n} integration${n > 1 ? "s" : ""} (payments, booking, CRM)`, n * INTEGRATION]);
  const low = lines.reduce((s, [, v]) => s + v, 0);
  return { lines, low, high: Math.round((low * (1 + SITE_SPREAD)) / 100) * 100, weeks: b.weeks, care: i.care ? CARE_PER_MONTH : 0, included: b.pages };
}

/* ---------- whatsapp reply ROI ---------- */
export function replyRoi(i: { perDay?: number; repetitivePct?: number; minutes?: number; hourly?: number; autoPct?: number; build?: number } = {}) {
  const perDay = clamp(i.perDay ?? 40, 0, 2000), rep = clamp(i.repetitivePct ?? 60, 0, 100) / 100, min = clamp(i.minutes ?? 3, 0.5, 30);
  const hourly = clamp(i.hourly ?? 45, 0, 500), auto = clamp(i.autoPct ?? 70, 0, 100) / 100, build = clamp(i.build ?? 7900, 0, 500000);
  const handled = perDay * rep * auto;                  // messages per day the assistant fully answers
  const hours = (handled * min * 22) / 60;              // 22 working days per month
  const value = hours * hourly;
  return { handledPerDay: Math.round(handled), hours: Math.round(hours * 10) / 10, value: Math.round(value), payback: value > 0 ? Math.round((build / value) * 10) / 10 : null, build };
}

/* ---------- ERP vs Excel checker ---------- */
export const ERP_QUESTIONS = [
  "More than one person edits the same sheet",
  "Stock in the sheet and on the shelf disagree",
  "Month-end close takes more than two days",
  "Orders arrive on WhatsApp and are typed in by hand",
  "One person understands the formulas or macros",
  "You issue VAT invoices from a template",
  "You sell from more than one location or channel",
  "You have lost money or time to a data entry mistake this year",
] as const;
export function erpVerdict(yes: boolean[]) {
  const score = yes.filter(Boolean).length;
  if (score <= 2) return { score, level: "excel", title: "Excel is still fine", text: "A tidy spreadsheet and a few automations will serve you. Revisit when two or more of these start to bite." };
  if (score <= 5) return { score, level: "automate", title: "Automate the painful parts first", text: "Connect WhatsApp orders, invoices and stock updates before replacing everything. A small automation project (from AED 7,900) often removes most of the pain." };
  return { score, level: "erp", title: "You have outgrown Excel", text: "An off-the-shelf tool (Zoho, Odoo) or a custom operations system will pay back quickly. We will tell you honestly which one fits." };
}
