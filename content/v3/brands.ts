/** Concept brands used inside mockups. Always labelled "Concept build, not a client". */
export type Product = "bag" | "perfume" | "watch" | "ring" | "abaya" | "none";
export type CBrand = {
  key: string; name: string; sector: string; product: Product;
  bg: string; ink: string; accent: string; soft: string; dark?: boolean; serif?: boolean;
  tagline: string; city: string; currency: string;
  items: { n: string; p: string; sub?: string }[];
};
export const CBRANDS: Record<string, CBrand> = {
  maisonverre: { key: "maisonverre", name: "Maison Verre", sector: "Leather goods", product: "bag", bg: "#efe9de", ink: "#14110d", accent: "#1f3a2d", soft: "#e3dbcb", serif: true,
    tagline: "Made slowly, in Florence and Dubai.", city: "Dubai", currency: "AED", items: [{ n: "Soraya tote", p: "AED 7,400", sub: "Calf leather, saffiano" }, { n: "Luna clutch", p: "AED 3,900", sub: "Nappa, gold hardware" }, { n: "Atelier card holder", p: "AED 1,150", sub: "Vegetable-tanned" }] },
  oudatelier: { key: "oudatelier", name: "Oud Atelier", sector: "Perfume house", product: "perfume", bg: "#0d0a08", ink: "#f3e9d8", accent: "#c79a4b", soft: "#1b1511", dark: true, serif: true,
    tagline: "Oud, ambergris and slow evenings.", city: "Dubai", currency: "AED", items: [{ n: "Layali 50 ml", p: "AED 690", sub: "Oud, saffron, amber" }, { n: "Rimal 100 ml", p: "AED 1,150", sub: "Sandalwood, musk" }, { n: "Discovery set", p: "AED 240", sub: "Five 5 ml vials" }] },
  hayamodest: { key: "hayamodest", name: "Haya", sector: "Modest fashion", product: "abaya", bg: "#f4efe9", ink: "#241a1a", accent: "#7a2e3a", soft: "#e8dfd6",
    tagline: "Abayas cut for the way you move.", city: "Dubai", currency: "AED", items: [{ n: "Najma open abaya", p: "AED 1,290", sub: "Crepe, bead trim" }, { n: "Sahar kaftan", p: "AED 890", sub: "Linen blend" }, { n: "Noor shayla", p: "AED 190", sub: "Chiffon" }] },
  chronogulf: { key: "chronogulf", name: "Chrono Gulf", sector: "Watches & jewellery", product: "watch", bg: "#0a0b0d", ink: "#eef0f2", accent: "#b9c2cc", soft: "#15171a", dark: true,
    tagline: "Swiss movements, Gulf service.", city: "Dubai", currency: "AED", items: [{ n: "Meridian 40 mm", p: "AED 18,500", sub: "Automatic, steel" }, { n: "Dune chronograph", p: "AED 24,900", sub: "Sapphire, 100 m" }, { n: "Signet ring", p: "AED 4,200", sub: "18k gold" }] },
  northbridge: { key: "northbridge", name: "Northbridge Advisory", sector: "Corporate services", product: "none", bg: "#f6f6f4", ink: "#0d1b2a", accent: "#2f6b4f", soft: "#e8ebe9",
    tagline: "Company setup and compliance in the UAE.", city: "Dubai", currency: "AED", items: [{ n: "Mainland setup", p: "from AED 12,000" }, { n: "Free zone setup", p: "from AED 9,500" }, { n: "VAT & corporate tax", p: "from AED 1,500/mo" }] },
  opsdesk: { key: "opsdesk", name: "OpsDesk", sector: "ERP for trading companies", product: "none", bg: "#0e0f10", ink: "#f2f3f4", accent: "#7cff35", soft: "#17191a", dark: true,
    tagline: "Orders, stock, invoices and WhatsApp in one place.", city: "Dubai", currency: "AED", items: [{ n: "Orders today", p: "126" }, { n: "Cash in", p: "AED 184,300" }, { n: "Low stock", p: "9 items" }] },
};
