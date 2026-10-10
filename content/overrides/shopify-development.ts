import type { Page } from "../types";

/** Gap-audit patch for the Shopify page (service spec S1-S4, UAE localization §8.5). Spread over the base page. */
export const PATCH: Partial<Page> = {
  stage: {
    main: { t: "store", k: "oudsilk" }, side: { t: "phone", k: "oudsilk", kind: "checkout" },
    cards: [
      { icon: "🛍", title: "#1042 AED 218 · Apple Pay", sub: "New order · Dubai Marina", style: { left: "-2%", bottom: "14%" } },
      { icon: "⚡", title: "PageSpeed 38→94", sub: "Mobile", style: { right: "2%", top: "4%" }, dark: true },
      { icon: "📈", title: "Conversion 1.1%→3.4%", sub: "Since launch", style: { right: "-2%", bottom: "30%" } },
    ],
  },
  pains: [
    { q: "\"Plenty of visitors. Hardly anyone buys.\"", cost: "2,840 visits last week, 31 orders. On a phone the page takes 9.8 seconds, then a popup covers it.", fix: "A fast, clean mobile store with a sticky Add to cart and one-tap Apple Pay." },
    { q: "\"We have 23 apps and the theme breaks every update.\"", cost: "AED 2,250 a month in apps, and AED 1,500 to a freelancer just to move a banner.", fix: "A custom theme with the features built in, and sections your team edits in minutes." },
    { q: "\"Wholesale orders still come in as PDFs.\"", cost: "40 shops reorder by email. Someone retypes every line, and mistakes ship.", fix: "A wholesale portal on your store with their prices, terms and one-click reorder." },
  ],
  showcase: {
    eyebrow: "Stores we've built", head: "Shops that fit what you sell.",
    lead: "Pick your industry. On the big screen is the product page your customers land on; on the phone is the moment they pay.",
    brands: ["oudsilk", "maisonrose", "freshfold", "apex", "fixpoint"], phone: "checkout",
    items: [
      { label: "Beauty & salons", brand: "maisonrose", results: ["AED 9.8k · product sales a month", "38% · orders on subscription"], chips: ["Custom theme", "Subscribe & save", "Cart upsells", "Gift cards"], moment: "Cart drawer with upsell", phone: "checkout" },
      { label: "Home & laundry", brand: "freshfold", results: ["2,140 · active subscribers", "−18% · cancellations with “skip”"], chips: ["Subscriptions", "Skip & swap", "Scent variants", "Klaviyo flows"], moment: "Manage subscription: ship, skip or swap", phone: "loyalty" },
      { label: "Auto parts", brand: "apex", results: ["−71% · wrong-part returns", "+AED 22k · parts sales a month"], chips: ["Fits-your-car check", "VIN lookup", "Install booking", "Fleet accounts"], moment: "Brake pads “Fits your 2022 Porsche 911 GT3” + install add-on", phone: "detail" },
      { label: "Food & pantry", brand: "ember", results: ["3.2% · conversion", "AED 41k · holiday month"], chips: ["Gift boxes", "Gift notes", "Local pickup", "Wholesale portal"], moment: "Gift checkout to a recipient in Dubai", phone: "checkout" },
      { label: "Home services", brand: "voltwire", results: ["64% · buy with install", "AED 1,065 · average order"], chips: ["Install add-on", "Emirates ID check", "Tabby", "Calendar sync"], moment: "Wall charger + “We install in Khalifa City” → install Thu 9 AM", phone: "status" },
      { label: "Electronics", brand: "fixpoint", results: ["2.9× · trade-ins", "AED 489 · average order"], chips: ["Condition grades", "Trade-in credit", "Tabby", "12-month warranty"], moment: "Cart: iPhone 14 “Good” + iPhone 13 trade-in credit", phone: "checkout" },
    ],
  },
  tabs: [
    {
      tab: "A theme you can edit", chip: "Online Store 2.0 · Custom sections", h: "Your brand, not a template everyone else bought.",
      p: "A theme designed for your products, with every block your team needs: banners, bundles, before-and-afters, reviews. Change a headline or launch a sale page yourself, without breaking anything or calling a developer.",
      fine: "Features are built into the theme instead of bolted on with apps, so it stays fast and cheaper to run.",
      viz: { t: "dash", title: "Theme editor · Home", sub: "Online Store 2.0", kpis: [["Sections", "14"], ["Edited by team", "9 this week"], ["Apps removed", "−11", "saves AED 392/mo"]], rows: [["Hero banner", "y|Draft", "Edit"], ["Subscribe & save block", "g|Live", "Edit"], ["Reviews strip", "g|Live", "Edit"], ["Ramadan collection", "b|Scheduled", "Edit"], ["✓ Saved and live", "g|Sophie changed the subscribe block"]], head: ["SECTION", "STATUS", ""] },
    },
    {
      tab: "Speed on phones", chip: "Core Web Vitals · PageSpeed 90+", h: "Loads in about a second on a phone.",
      p: "Most of your buyers are on a phone with one bar of signal. We cut the app bloat, compress every image and load only what the page needs, so the product shows up before they lose interest.",
      fine: "Faster pages also rank better on Google and lower your ad costs.",
      viz: { t: "dash", title: "PageSpeed · mobile", sub: "Sept 2 → Oct 14", kpis: [["Performance", "94", "was 38"], ["LCP", "1.1 s", "was 9.8 s"], ["CLS", "0.01", "was 0.41"]], rows: [["Total blocking time", "g|90 ms (was 2,140 ms)"], ["Page size", "g|1.2 MB (was 8.4 MB)"], ["Apps installed", "g|7 (was 23)"], ["Checkout", "g|Apple Pay one-tap"]], head: ["CHECK", "RESULT", ""] },
    },
    {
      tab: "Subscriptions & bundles", chip: "Shopify Subscriptions · Bundles", h: "Customers who come back without being asked.",
      p: "Subscribe-and-save on the products people reorder, with skip and swap buttons so they pause instead of cancel. Gift boxes and bundles that raise the average order without a discount war.",
      fine: "Klaviyo flows for reminders, win-backs and \"your box ships Monday\" emails.",
      viz: { t: "steps", title: "Subscription · Oud Club", sub: "Shopify Subscriptions", steps: [["Subscribed", "Monthly oud discovery box · AED 189"], ["Next box ships 1 Nov", "Skip, swap or pause in one tap"], ["Tabby pay-in-4 available", "4 × AED 47.25"], ["Bundle: 3 for AED 499", "Saves AED 68"]] },
    },
    {
      tab: "Custom apps & B2B", chip: "Shopify Functions · Admin API · B2B", h: "When no app does exactly what you need.",
      p: "Wholesale pricing, warehouse and ERP sync, custom discounts, fitment lookups. We build private apps that connect your store to the rest of your business and run on their own.",
      fine: "Every app has a run log, alerts and tests, and you own the code.",
      viz: { t: "dash", title: "Run log · #1,108", sub: "Wholesale order → Zoho Books", dark: true, kpis: [["Wholesale orders / yr", "412"], ["Retyped by hand", "0"], ["Time saved", "9 h / wk"]], rows: [["Wholesale order #1,108", "g|Received"], ["Reserve warehouse stock", "g|Done"], ["Zoho Books INV-2207", "AED 1,512", "g|Created"], ["Klaviyo email", "g|Sent in 2.1 s"]], head: ["STEP", "DETAIL", "STATUS"] },
    },
    {
      tab: "Moving to Shopify", chip: "From WooCommerce · Wix · Salla", h: "Switch platforms without losing a sale.",
      p: "Products, customers, order history, reviews and gift card balances all move over. Every old URL redirects to the new one, so your Google rankings and ad links keep working on launch day.",
      fine: "We launch on a quiet night and watch orders and rankings for 30 days after.",
      viz: { t: "dash", title: "Migration · WooCommerce → Shopify", sub: "Ember Kitchen Pantry · Oct 6, 2:00 AM GST", kpis: [["Gift card balances", "AED 3,840 ✓"], ["Keywords kept", "48 / 50"], ["301 redirects", "1,094 ✓"]], rows: [["Products, customers, reviews", "g|Imported"], ["Day 1 · organic visits", "g|100"], ["Day 14 · organic visits", "g|112"], ["Day 30 · organic visits", "g|+22%"], ["Broken links · lost orders", "g|0 · 0"]], head: ["30-DAY CHECK", "RESULT", ""] },
    },
  ],
};
