/** Indicative Shopify build cost from the published AED price book (excl. 5% VAT). A fixed quote always follows discovery. */
export type Tier = "launch" | "custom" | "plus";
export type MigrationSize = "none" | "small" | "large";
export type CostInput = { tier?: Tier; arabic?: boolean; bnpl?: boolean; migration?: MigrationSize; markets?: number; integrations?: number };

export const BASE: Record<Tier, number> = { launch: 9900, custom: 29000, plus: 69000 };
export const ARABIC: Record<Tier, number> = { launch: 3500, custom: 0, plus: 0 };   // custom and Plus include RTL in the design phase
export const MIGRATION: Record<MigrationSize, number> = { none: 0, small: 4500, large: 9000 };
export const BNPL = 1500, PER_MARKET = 2000, PER_INTEGRATION = 3500, VAT = 0.05, SPREAD = 0.25;

const clamp = (n: unknown, lo: number, hi: number) => Math.min(hi, Math.max(lo, Math.round(Number(n) || 0)));
const round100 = (n: number) => Math.round(n / 100) * 100;

export function shopifyCost(i: CostInput = {}) {
  const tier = i.tier ?? "launch";
  const lines: [string, number][] = [[tier === "launch" ? "Launch store" : tier === "custom" ? "Custom theme" : "Shopify Plus build", BASE[tier]]];
  if (i.arabic && ARABIC[tier]) lines.push(["Arabic RTL", ARABIC[tier]]);
  if (i.bnpl) lines.push(["Tabby and Tamara", BNPL]);
  const mig = i.migration ?? "none"; if (MIGRATION[mig]) lines.push([mig === "small" ? "Migration, up to ~500 products" : "Migration, up to ~5,000 products", MIGRATION[mig]]);
  const m = clamp(i.markets, 0, 5); if (m) lines.push([`${m} extra market${m > 1 ? "s" : ""}`, m * PER_MARKET]);
  const n = clamp(i.integrations, 0, 6); if (n) lines.push([`${n} integration${n > 1 ? "s" : ""}`, n * PER_INTEGRATION]);
  const low = lines.reduce((s, [, v]) => s + v, 0);
  const high = round100(low * (1 + SPREAD));
  return { lines, low, high, vatLow: Math.round(low * (1 + VAT)), weeks: tier === "launch" ? "3 to 4" : tier === "custom" ? "6 to 8" : "10 to 16" };
}
export const aed = (n: number) => "AED " + Math.round(n).toLocaleString("en-US");
