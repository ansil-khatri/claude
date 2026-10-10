// Calculator maths for the /tools pages (source: docs/superpowers/plans/2026-10-09-new-pages.md Task 1).
// Rates are illustrative, taken from public 2026 pages; each tool page shows "checked on [date]".

const num = (v: unknown) => (Number.isFinite(+(v as number)) && +(v as number) > 0 ? +(v as number) : 0);
export const aed = (n: unknown) => "AED " + Math.max(0, Math.round(num(n))).toLocaleString("en-US");

export function deliveryCommission(i: {
  ordersPerMonth?: number; avgOrder?: number; commissionPct?: number; promoPerMonth?: number; directSharePct?: number; cardFeePct?: number;
} = {}) {
  const cardFeePct = i.cardFeePct ?? 2.9;
  const appSalesYear = num(i.ordersPerMonth) * num(i.avgOrder) * 12;
  const commissionYear = (appSalesYear * num(i.commissionPct)) / 100 + num(i.promoPerMonth) * 12;
  const moved = (appSalesYear * Math.min(num(i.directSharePct), 100)) / 100;
  const keptYear = Math.max(0, (moved * (num(i.commissionPct) - num(cardFeePct))) / 100);
  return { appSalesYear, commissionYear, keptYear };
}

export const GATEWAYS = [
  { name: "Stripe", pct: 2.9, fixed: 1, intlPct: 1, monthly: 0, note: "+1% international cards" },
  { name: "Telr (Medium plan)", pct: 2.49, fixed: 0.5, intlPct: 0, monthly: 99, note: "International surcharge: ask Telr" },
  { name: "Ziina", pct: 2.6, fixed: 1, intlPct: 1.5, monthly: 0, note: "+1.5% non-AED / international" },
  { name: "PayTabs", pct: 2.85, fixed: 1, intlPct: 0, monthly: 0, note: "International surcharge: ask PayTabs" },
];

export function gatewayFees(i: { sales?: number; payments?: number; intlSharePct?: number } = {}) {
  const s = num(i.sales), p = num(i.payments), intl = (s * Math.min(num(i.intlSharePct), 100)) / 100;
  return GATEWAYS.map((g) => {
    const monthly = (s * g.pct) / 100 + p * g.fixed + (intl * g.intlPct) / 100 + g.monthly;
    return { name: g.name, monthly, yearly: monthly * 12, note: g.note };
  }).sort((a, b) => a.monthly - b.monthly);
}

export type Band = "under50m" | "50m+";
export function einvoiceDeadline(band: Band) {
  return band === "50m+"
    ? { asp: "30 October 2026", live: "1 January 2027" }
    : { asp: "31 March 2027", live: "1 July 2027" };
}

const READINESS: [string, (v?: string) => number, string][] = [
  ["aspChosen", (v) => (v === "yes" ? 20 : 0), "Choose your Accredited Service Provider (ASP)"],
  ["softwareReady", (v) => (v === "yes" ? 20 : v === "unsure" ? 5 : 0), "Confirm your accounting software can send e-invoices"],
  ["trnsComplete", (v) => (v === "all" ? 20 : v === "most" ? 10 : 0), "Add missing customer TRNs and addresses"],
  ["sources", (v) => (v === "one" ? 15 : v === "two" ? 5 : 0), "Connect every place invoices are created (POS, Excel, other systems)"],
  ["owner", (v) => (v === "yes" ? 15 : 0), "Name one person responsible for e-invoicing"],
  ["tested", (v) => (v === "yes" ? 10 : 0), "Send test invoices through your ASP"],
];

export function readinessScore(answers: Record<string, string | undefined> = {}) {
  let score = 0;
  const todo: string[] = [];
  for (const [key, points, task] of READINESS) {
    const p = points(answers[key]);
    score += p;
    if (p < points(key === "trnsComplete" ? "all" : key === "sources" ? "one" : "yes")) todo.push(task);
  }
  return { score, todo };
}

export const APP_BASE: Record<string, number> = { booking: 35000, ordering: 45000, delivery: 60000, loyalty: 35000, marketplace: 105000, internal: 29000 };
export const APP_FEATURES: Record<string, number> = { payments: 6000, tabby: 3000, tracking: 12000, chat: 8000, admin: 10000, arabic: 5000, integrations: 9000 };

export function appCost(i: { type?: string; platforms?: string; features?: string[]; design?: string } = {}) {
  const features = i.features ?? [];
  const base = APP_BASE[i.type ?? ""] || APP_BASE.booking;
  const extra = features.reduce((sum, f) => sum + (APP_FEATURES[f] || 0), 0);
  let low = (base + extra) * (i.platforms === "one" ? 0.85 : 1) * (i.design === "custom" ? 1.15 : 1);
  low = Math.round(low / 1000) * 1000;
  const high = Math.round((low * 1.6) / 1000) * 1000;
  const weeks = 6 + Math.ceil(features.length * 1.5) + (i.design === "custom" ? 2 : 0);
  return { low, high, weeks };
}
