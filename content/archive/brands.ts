/** Concept brands (UAE spec §4). All numbers are illustrative and shown with an "Example project" chip. */
export type Brand = {
  key: string; name: string; tag: string; area: string; domain: string; phone: string;
  bg: string; ink: string; accent: string; accentInk: string; soft: string; dark?: boolean;
  headline: [string, string]; sub: string; rating: string; reviews: string;
  items: { n: string; p: string; d?: string }[]; chip: string; industry: string;
};

export const BRANDS: Record<string, Brand> = {
  maisonrose: {
    key: "maisonrose", name: "Maison Rose", tag: "Ladies' salon", area: "Jumeirah, Dubai", domain: "maisonrose.ae", phone: "+971 4 555 0142",
    bg: "#fbf1ee", ink: "#3a1d26", accent: "#b4536a", accentInk: "#fff", soft: "#f4dfdc", industry: "Salons & Spas",
    headline: ["Hair that feels", "like you."], sub: "Colour, cuts and bridal in the heart of Jumeirah. Book your chair in under a minute.",
    rating: "4.9", reviews: "312 Google reviews",
    items: [{ n: "Cut & style", p: "AED 180", d: "45 min" }, { n: "Balayage", p: "AED 650", d: "3 h" }, { n: "Bridal", p: "AED 950", d: "On request" }],
    chip: "AED 100 deposit",
  },
  freshfold: {
    key: "freshfold", name: "FreshFold", tag: "Laundry", area: "Dubai Marina & JLT", domain: "freshfold.ae", phone: "+971 4 555 0199",
    bg: "#eef4ff", ink: "#0b1b44", accent: "#2f6bff", accentInk: "#fff", soft: "#dbe6ff", industry: "Laundry & Dry Cleaning",
    headline: ["Laundry, picked up.", "Back in 24 hours."], sub: "Wash & fold from AED 15/kg. Free pickup and delivery across Dubai Marina, JLT and JVC.",
    rating: "4.8", reviews: "1,240 App Store ratings",
    items: [{ n: "Wash & fold", p: "AED 15/kg" }, { n: "Shirt pressed", p: "AED 9" }, { n: "Duvet", p: "AED 75" }],
    chip: "Back within 24 h",
  },
  apex: {
    key: "apex", name: "Apex Auto Works", tag: "Garage", area: "Al Quoz, Dubai", domain: "apexautoworks.ae", phone: "+971 4 555 0110",
    bg: "#14110f", ink: "#fff", accent: "#f97316", accentInk: "#14110f", soft: "#241d19", dark: true, industry: "Auto Repair",
    headline: ["Serviced right.", "Back on the road."], sub: "Nine bays, 18 years in Al Quoz. See your inspection photos before you approve a thing.",
    rating: "4.9", reviews: "860 Google reviews",
    items: [{ n: "Oil service", p: "AED 299" }, { n: "Brake pads", p: "AED 890" }, { n: "AC regas", p: "AED 349" }],
    chip: "12-month warranty",
  },
  voltwire: {
    key: "voltwire", name: "Volt & Wire", tag: "Electrical & maintenance", area: "Abu Dhabi", domain: "voltwire.ae", phone: "+971 2 555 0187",
    bg: "#0c0c0c", ink: "#fff", accent: "#facc15", accentInk: "#0c0c0c", soft: "#1c1c1c", dark: true, industry: "Home Services",
    headline: ["Your Tesla charger,", "installed this week."], sub: "Authority approval handled. Flat AED 4,550 for a home EV charger in Khalifa City, Al Reem and Yas.",
    rating: "4.9", reviews: "427 reviews",
    items: [{ n: "EV charger install", p: "AED 3,900" }, { n: "DB board upgrade", p: "AED 8,800" }, { n: "Lighting", p: "AED 650" }],
    chip: "Tesla Certified",
  },
  ember: {
    key: "ember", name: "Ember Kitchen", tag: "Restaurant", area: "JLT, Dubai", domain: "emberkitchen.ae", phone: "+971 4 555 0160",
    bg: "#1c1410", ink: "#fff3e0", accent: "#f59e0b", accentInk: "#1c1410", soft: "#2b1f17", dark: true, industry: "Restaurants",
    headline: ["Wood-fired.", "Order direct."], sub: "Ninety seats in JLT. Order here and skip the 30% the apps keep.",
    rating: "4.8", reviews: "2,100 reviews",
    items: [{ n: "Charred octopus", p: "AED 85" }, { n: "Short rib", p: "AED 120" }, { n: "Sourdough", p: "AED 40" }],
    chip: "0% commission",
  },
  oudsilk: {
    key: "oudsilk", name: "Oud & Silk", tag: "Perfume & abaya store", area: "Dubai · ships across the GCC", domain: "oudandsilk.ae", phone: "+971 4 555 0177",
    bg: "#f7f1e8", ink: "#2a1b10", accent: "#8a5a2b", accentInk: "#fff", soft: "#ecdfcb", industry: "Fashion & Perfume",
    headline: ["Oud, abayas", "and gifts worth keeping."], sub: "Free delivery across the UAE. Pay in 4 with Tabby or Tamara. Ramadan collection now live.",
    rating: "4.9", reviews: "3,400 reviews",
    items: [{ n: "Royal oud 50 ml", p: "AED 390" }, { n: "Silk abaya", p: "AED 690" }, { n: "Gift set", p: "AED 499" }],
    chip: "Free UAE delivery",
  },
  routeline: {
    key: "routeline", name: "Routeline", tag: "Dispatch & invoicing for trades", area: "UAE trades", domain: "routeline.app", phone: "",
    bg: "#fff4ec", ink: "#2b1406", accent: "#ea580c", accentInk: "#fff", soft: "#fde3d1", industry: "SaaS",
    headline: ["Dispatch, quotes", "and invoices in one."], sub: "For AC, electrical and maintenance companies. WPS payroll export and Zoho Books sync.",
    rating: "4.8", reviews: "640 businesses", items: [{ n: "Solo", p: "AED 120/mo" }, { n: "Team", p: "AED 390/mo" }, { n: "Fleet", p: "AED 990/mo" }], chip: "WPS export",
  },
  shelfwise: {
    key: "shelfwise", name: "Shelfwise", tag: "Inventory & food cost", area: "GCC restaurants", domain: "shelfwise.app", phone: "",
    bg: "#f1faf3", ink: "#0d2a16", accent: "#16a34a", accentInk: "#fff", soft: "#d8f0df", industry: "SaaS",
    headline: ["Count on your phone.", "Cut your food cost."], sub: "Par levels, supplier orders and food-cost reports with a Foodics sync.",
    rating: "4.8", reviews: "380 restaurants", items: [{ n: "Starter", p: "AED 365/mo" }, { n: "Group", p: "AED 990/mo" }, { n: "Chain", p: "Custom" }], chip: "Foodics sync",
  },
  glowdesk: {
    key: "glowdesk", name: "Glowdesk", tag: "Multi-location salon management", area: "UAE salon groups", domain: "glowdesk.app", phone: "",
    bg: "#fdf2f8", ink: "#3b0a24", accent: "#db2777", accentInk: "#fff", soft: "#fbd5e8", industry: "SaaS",
    headline: ["Every location.", "One payroll file."], sub: "Commissions, retail stock and WPS payroll export for salon groups.",
    rating: "4.9", reviews: "120 groups", items: [{ n: "Location", p: "AED 290/mo" }, { n: "Group", p: "AED 1,100/mo" }, { n: "Franchise", p: "Custom" }], chip: "WPS payroll",
  },
  keyhouse: {
    key: "keyhouse", name: "Keyhouse", tag: "Rent & maintenance", area: "Dubai property managers", domain: "keyhouse.app", phone: "",
    bg: "#effafa", ink: "#06292b", accent: "#0d9488", accentInk: "#fff", soft: "#cdeeee", industry: "SaaS",
    headline: ["Rent on time.", "Repairs on record."], sub: "Ejari, post-dated cheques, RERA-ready owner statements and a tenant app.",
    rating: "4.8", reviews: "18,000 units", items: [{ n: "Portfolio", p: "AED 4/unit" }, { n: "Agency", p: "AED 3/unit" }, { n: "Enterprise", p: "Custom" }], chip: "Ejari ready",
  },
  partsmith: {
    key: "partsmith", name: "Partsmith", tag: "Auto parts purchasing", area: "Sharjah Industrial Area suppliers", domain: "partsmith.app", phone: "",
    bg: "#f4f4f5", ink: "#18181b", accent: "#52525b", accentInk: "#fff", soft: "#e4e4e7", industry: "SaaS",
    headline: ["The right part,", "first time."], sub: "Live supplier prices, VIN fit check and barcode receiving for UAE garages.",
    rating: "4.8", reviews: "290 shops", items: [{ n: "Shop", p: "AED 450/mo" }, { n: "Multi-bay", p: "AED 900/mo" }, { n: "Group", p: "Custom" }], chip: "VIN fit check",
  },
  ledgerly: {
    key: "ledgerly", name: "Ledgerly", tag: "SaaS", area: "DIFC, Dubai", domain: "ledgerly.app", phone: "",
    bg: "#f5f6ff", ink: "#12123a", accent: "#6366f1", accentInk: "#fff", soft: "#e4e6ff", industry: "SaaS",
    headline: ["Finance automation", "for GCC SMEs."], sub: "Syncs with Zoho Books and Xero. UAE e-invoicing ready, VAT returns on autopilot.",
    rating: "4.8", reviews: "UAE e-invoicing ready",
    items: [{ n: "Solo", p: "AED 45/mo" }, { n: "Team", p: "AED 149/mo" }, { n: "Business", p: "AED 475/mo" }],
    chip: "ISO 27001",
  },
  peakcooling: {
    key: "peakcooling", name: "Peak Cooling", tag: "AC & maintenance", area: "Dubai & Sharjah", domain: "peakcooling.ae", phone: "+971 4 555 0148",
    bg: "#eef5ff", ink: "#08234a", accent: "#1d6fd6", accentInk: "#fff", soft: "#d8e8ff", industry: "Home Services",
    headline: ["AC not cooling?", "We'll be there in 60 minutes."], sub: "14 vans across Dubai & Sharjah since 2004. Book online at 1 AM, fixed by breakfast.",
    rating: "4.9", reviews: "640 reviews",
    items: [{ n: "AC repair", p: "from AED 249" }, { n: "Peak Care AMC", p: "AED 49/mo" }, { n: "Call-out deposit", p: "AED 99" }],
    chip: "Since 2004",
  },
  fixpoint: {
    key: "fixpoint", name: "FixPoint", tag: "Phone repair", area: "Deira · Karama · City Centre", domain: "fixpoint.ae", phone: "+971 4 555 0121",
    bg: "#edfbf5", ink: "#05281c", accent: "#10b981", accentInk: "#fff", soft: "#d3f4e6", industry: "Phone Repair",
    headline: ["Cracked screen?", "Fixed in 45 minutes."], sub: "Instant prices online. iPhone 13 screen AED 449. Trade in your old phone for store credit.",
    rating: "4.8", reviews: "930 ratings",
    items: [{ n: "iPhone 13 screen", p: "AED 449" }, { n: "Battery", p: "AED 229" }, { n: "Trade-in", p: "up to AED 1,350" }],
    chip: "45 min avg repair",
  },
};

export const brand = (k: string) => BRANDS[k];
