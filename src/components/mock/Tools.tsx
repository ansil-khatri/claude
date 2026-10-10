import { CBRANDS } from "@content/v3/brands";
import { StoreHome } from "./Store";

/* Admin, editor and software mockups. Fixed-size layouts (1280 x 800) scaled into place by <AppWindow>. */

const Dot = ({ c }: { c: string }) => <i className="ad-dot" style={{ background: c }} />;

/* ---------- Shopify theme editor (light) ---------- */
export function ThemeEditor() {
  const secs = ["Announcement bar", "Header", "Hero · split", "Featured collection", "Editorial story", "Brand values", "Footer"];
  return (
    <div className="ad ad-l ad-te">
      <div className="ad-top"><b>Maison Verre</b><span>Draft · verre-2.4</span><em /><span className="ad-btn">Preview</span><span className="ad-btn k">Publish</span></div>
      <div className="ad-te-b">
        <aside className="ad-te-l">
          <span className="ad-h">Sections</span>
          {secs.map((s, i) => <div key={s} className={i === 2 ? "sel" : ""}><u>⋮⋮</u>{s}</div>)}
          <span className="ad-add">+ Add section</span>
          <span className="ad-h" style={{ marginTop: 22 }}>Template</span><div>Homepage</div>
        </aside>
        <div className="ad-te-c"><div className="ad-te-pv"><StoreHome k="maisonverre" /></div></div>
        <aside className="ad-te-r">
          <span className="ad-h">Hero · split</span>
          <label>Heading</label><div className="ad-in">Made slowly, in Florence and Dubai.</div>
          <label>Image</label><div className="ad-in img"><i />soraya-tote-forest.jpg</div>
          <label>Layout</label><div className="ad-seg"><span className="on">Split left</span><span>Split right</span><span>Full</span></div>
          <label>Text alignment</label><div className="ad-seg"><span className="on">Left</span><span>Centre</span></div>
          <label>Colour scheme</label><div className="ad-in">Ivory / Forest</div>
          <label>Image overlay</label><div className="ad-rng"><i style={{ width: "22%" }} /></div>
          <div className="ad-note">Changes here are theme settings: your team edits copy and images without a developer.</div>
        </aside>
      </div>
    </div>
  );
}

/* ---------- Code editor (dark) ---------- */
export function ThemeCode() {
  return (
    <div className="ad ad-d ad-code">
      <aside className="ad-tree">
        <span className="ad-h">verre-theme</span>
        {[["layout", 0], ["theme.liquid", 1], ["sections", 0], ["hero-split.liquid", 1, 1], ["featured-collection.liquid", 1], ["snippets", 0], ["price.liquid", 1], ["card-product.liquid", 1], ["blocks", 0], ["assets", 0], ["theme.css", 1], ["config", 0], ["settings_schema.json", 1]].map(([n, f, s], i) => <div key={i} className={`${f ? "f" : "d"} ${s ? "sel" : ""}`}>{n}</div>)}
      </aside>
      <div className="ad-ed">
        <div className="ad-tabs"><span>featured-collection.liquid</span><span className="mut">card-product.liquid</span><span className="mut">price.liquid</span></div>
        <pre className="ad-pre"><code>{[
          [`{% comment %}`, "c"], [`  Featured collection · lazy images, fixed aspect ratio, no layout shift`, "c"], [`{% endcomment %}`, "c"],
          [`{%- assign cols = section.settings.columns | default: 3 -%}`, ""],
          [`<section class="fc" style="--cols: {{ cols }}">`, ""],
          [`  <header class="fc__head">`, ""], [`    <h2>{{ section.settings.heading }}</h2>`, ""], [`    {% render 'link-arrow', url: collection.url, label: 'View all' %}`, ""], [`  </header>`, ""],
          [`  <ul class="fc__grid">`, ""],
          [`    {%- for product in collection.products limit: section.settings.limit -%}`, ""],
          [`      <li>{% render 'card-product', product: product, lazy: forloop.index > 3 %}</li>`, ""],
          [`    {%- endfor -%}`, ""], [`  </ul>`, ""], [`</section>`, ""], ["", ""],
          [`{% schema %}`, "k"], [`{ "name": "Featured collection", "settings": [`, "s"], [`  { "type": "text", "id": "heading", "label": "Heading" },`, "s"], [`  { "type": "range", "id": "columns", "min": 2, "max": 4, "default": 3 }`, "s"], [`]}`, "s"], [`{% endschema %}`, "k"],
        ].map(([l, c], i) => <div key={i}><u>{i + 1}</u><span className={c as string}>{l}</span></div>)}</code></pre>
        <div className="ad-term"><b>$ shopify theme check</b><span>124 files inspected · 0 offenses · 0 warnings</span><span className="g">✓ Theme check passed</span><span>$ shopify theme push --development</span><span className="g">✓ Pushed to development theme verre-2.4</span></div>
      </div>
    </div>
  );
}

/* ---------- WordPress block editor (light) ---------- */
export function WpEditor() {
  return (
    <div className="ad ad-l ad-wp">
      <div className="ad-top"><b>W</b><span>Page · Company setup</span><em /><span className="ad-btn">Preview</span><span className="ad-btn k">Update</span></div>
      <div className="ad-wp-b">
        <aside className="ad-te-l"><span className="ad-h">Document outline</span>{["Hero (ACF)", "Trust band", "Services grid", "Process steps", "FAQ accordion", "Contact CTA"].map((s, i) => <div key={s} className={i === 0 ? "sel" : ""}><u>⋮⋮</u>{s}</div>)}<span className="ad-add">+ Add block</span></aside>
        <div className="ad-wp-c"><div className="ad-wp-pg">
          <span className="st-eyebrow" style={{ color: "#2f6b4f" }}>Company setup, Dubai</span>
          <h2>Set up your company in the UAE, without the back and forth.</h2><p>Mainland, free zone or offshore. One advisor, one fixed quote, one checklist.</p>
          <div className="ad-wp-cta"><span>Get a fixed quote</span><span>See packages</span></div>
          <div className="ad-wp-grid">{["Mainland setup", "Free zone setup", "VAT & corporate tax"].map((s) => <div key={s}><b>{s}</b><span>From the price list</span></div>)}</div>
        </div></div>
        <aside className="ad-te-r"><span className="ad-h">Block · Hero (ACF)</span><label>Eyebrow</label><div className="ad-in">Company setup, Dubai</div><label>Heading</label><div className="ad-in tall">Set up your company in the UAE, without the back and forth.</div><label>Primary button</label><div className="ad-in">Get a fixed quote → /contact</div><label>Background</label><div className="ad-seg"><span className="on">Light</span><span>Dark</span></div><div className="ad-note">Custom block fields keep the design consistent: editors change content, never layout.</div></aside>
      </div>
    </div>
  );
}

/* ---------- Corporate WordPress site (browser 1440x900) ---------- */
export function WpSite() {
  const b = CBRANDS.northbridge;
  return (
    <div className="st wps" style={{ ["--sb" as string]: b.bg, ["--si" as string]: b.ink, ["--sa" as string]: b.accent, ["--ss" as string]: b.soft } as React.CSSProperties}>
      <div className="wps-nav"><b>Northbridge</b><nav><span>Company setup</span><span>Tax & VAT</span><span>Visas</span><span>Insights</span></nav><span className="wps-btn">Book a call</span></div>
      <div className="wps-hero"><div><span className="st-eyebrow">Corporate services · Dubai</span><h2>Company setup and compliance, handled.</h2><p>Mainland, free zone and offshore structures, VAT and corporate tax filings, visas and banking introductions, with one advisor from start to finish.</p><div className="wps-cta"><span>Get a fixed quote</span><span className="o">See packages</span></div></div>
        <div className="wps-card"><span className="st-eyebrow">Typical timeline</span>{[["Day 1", "Fixed quote and checklist"], ["Day 3", "Licence application filed"], ["Week 2", "Licence issued"], ["Week 3", "Bank account and visas"]].map(([a, t]) => <div key={a}><b>{a}</b><span>{t}</span></div>)}</div></div>
      <div className="wps-band">{b.items.map((it) => <div key={it.n}><b>{it.n}</b><span>{it.p}</span></div>)}</div>
    </div>
  );
}

/* ---------- PageSpeed report ---------- */
function Gauge({ v, l }: { v: number; l: string }) {
  const c = 2 * Math.PI * 38;
  return <div className="ad-g"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="7" /><circle cx="50" cy="50" r="38" fill="none" stroke="#7cff35" strokeWidth="7" strokeLinecap="round" strokeDasharray={`${(c * v) / 100} ${c}`} transform="rotate(-90 50 50)" /><text x="50" y="58" textAnchor="middle" fontSize="28" fill="#fff" fontFamily="var(--font-display)" fontWeight="600">{v}</text></svg><span>{l}</span></div>;
}
export function SpeedReport() {
  return (
    <div className="ad ad-d ad-sp">
      <div className="ad-top"><b>Performance report</b><span>Concept build · lab data, mobile</span><em /><span className="ad-tag">Illustrative</span></div>
      <div className="ad-sp-g"><Gauge v={96} l="Performance" /><Gauge v={100} l="Accessibility" /><Gauge v={100} l="Best practices" /><Gauge v={100} l="SEO" /></div>
      <div className="ad-sp-m">{[["LCP", "1.4 s", "Largest contentful paint", 82], ["CLS", "0.01", "Cumulative layout shift", 96], ["INP", "120 ms", "Interaction to next paint", 78], ["TBT", "90 ms", "Total blocking time", 88]].map(([k, v, d, w]) => <div key={k as string}><span>{k}</span><b>{v}</b><small>{d}</small><i><u style={{ width: `${w}%` }} /></i></div>)}</div>
      <div className="ad-sp-l"><span className="ad-h">What keeps it fast</span>{["Hero image: AVIF, explicit width and height, preloaded", "Fonts: self-hosted, two weights, font-display swap", "Third-party apps: 4, deferred until interaction", "No layout shift: every media box reserves its space"].map((x) => <div key={x}><Dot c="#7cff35" />{x}</div>)}</div>
    </div>
  );
}

/* ---------- Search result anatomy + schema ---------- */
export function SerpSchema() {
  return (
    <div className="ad ad-l ad-serp">
      <div className="ad-serp-l">
        <span className="ad-h">Search result</span>
        <div className="ad-res"><small>shopify-agency-dubai · example.com › shopify-agency-dubai</small><b>Shopify Agency in Dubai: Custom Stores in English and Arabic</b><p>Stores built to sell for ambitious Dubai brands. Custom themes, Tabby and Tamara, Arabic RTL, migrations. From AED 9,900. Fixed price.</p>
          <div className="ad-faq">{["How much does a Shopify store cost in Dubai?", "Can you migrate my store without losing SEO?", "Do you build Arabic RTL themes?"].map((q) => <div key={q}>{q}<u>⌄</u></div>)}</div></div>
        <span className="ad-h" style={{ marginTop: 26 }}>AI answer</span>
        <div className="ad-ai"><p>A Shopify launch store in Dubai typically starts around AED 9,900, a custom theme around AED 29,000 and Plus or headless builds from AED 69,000.</p><div className="ad-src"><span>1 · Shopify agency in Dubai</span><span>2 · Custom theme cost</span></div></div>
        <div className="ad-note">Mock-up of how an answer-first page, FAQ markup and clear prices are read. Not a ranking claim.</div>
      </div>
      <div className="ad-serp-r"><span className="ad-h">Structured data on the page</span><pre className="ad-pre sm"><code>{[`{ "@type": "Service",`, `  "serviceType": "shopify agency in dubai",`, `  "provider": { "@id": "/#org" },`, `  "areaServed": ["AE", "Dubai"],`, `  "offers": { "@type": "Offer",`, `    "priceCurrency": "AED", "price": "9900" } }`, ``, `{ "@type": "FAQPage",`, `  "mainEntity": [ { "@type": "Question",`, `    "name": "How much does a Shopify store…",`, `    "acceptedAnswer": { … } } ] }`, ``, `{ "@type": "BreadcrumbList", … }`].map((l, i) => <div key={i}><u>{i + 1}</u><span>{l}</span></div>)}</code></pre></div>
    </div>
  );
}

/* ---------- Migration redirect map ---------- */
export function MigrationMap() {
  const rows = [["/product/soraya-bag", "/products/soraya-tote", "301", "ok"], ["/product-category/totes", "/collections/totes", "301", "ok"], ["/shop?orderby=price", "/collections/all", "301", "ok"], ["/blog/leather-care-guide", "/blogs/journal/leather-care-guide", "301", "ok"], ["/my-account/orders", "/account/orders", "301", "ok"], ["/product/luna-clutch-old", "/products/luna-clutch", "301", "ok"], ["/?s=tote", "/search?q=tote", "301", "check"], ["/wp-content/uploads/2023/lookbook.pdf", "/pages/lookbook", "301", "ok"]];
  return (
    <div className="ad ad-d ad-mig">
      <div className="ad-top"><b>Redirect map</b><span>WooCommerce → Shopify · concept build</span><em /><span className="ad-btn">Export CSV</span></div>
      <div className="ad-mig-s">{[["Indexed URLs", "1,284"], ["Mapped", "1,284"], ["Need a decision", "6"], ["Orders imported", "18,402"]].map(([k, v]) => <div key={k}><small>{k}</small><b>{v}</b></div>)}</div>
      <div className="ad-tbl"><div className="h"><span>Old URL</span><span>New URL</span><span>Code</span><span>Check</span></div>{rows.map(([a, b, c, d]) => <div key={a}><span>{a}</span><span>{b}</span><span>{c}</span><span><Dot c={d === "ok" ? "#7cff35" : "#ffb020"} />{d === "ok" ? "Verified" : "Review"}</span></div>)}</div>
    </div>
  );
}

/* ---------- Search Console style chart ---------- */
export function AnalyticsChart() {
  const pts = [8, 9, 9, 11, 12, 12, 15, 17, 16, 20, 24, 27, 31, 35, 38, 44];
  const W = 1000, H = 300, mx = Math.max(...pts);
  const d = pts.map((v, i) => `${i ? "L" : "M"}${(i / (pts.length - 1)) * W},${H - (v / mx) * (H - 30) - 10}`).join(" ");
  return (
    <div className="ad ad-d ad-an">
      <div className="ad-top"><b>Search performance</b><span>Illustrative · 16 weeks</span><em /><span className="ad-tag">Concept</span></div>
      <div className="ad-mig-s">{[["Total clicks", "4.2K"], ["Impressions", "182K"], ["Average CTR", "2.3%"], ["Average position", "7.4"]].map(([k, v]) => <div key={k}><small>{k}</small><b>{v}</b></div>)}</div>
      <svg viewBox={`0 0 ${W} ${H}`} className="ad-chart"><defs><linearGradient id="an" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#7cff35" stopOpacity=".35" /><stop offset="1" stopColor="#7cff35" stopOpacity="0" /></linearGradient></defs>
        {[0, 1, 2, 3].map((i) => <line key={i} x1="0" x2={W} y1={30 + i * 78} y2={30 + i * 78} stroke="rgba(255,255,255,.08)" />)}
        <path d={`${d} L${W},${H} L0,${H} Z`} fill="url(#an)" /><path d={d} fill="none" stroke="#7cff35" strokeWidth="3" strokeLinejoin="round" />
        <line x1="440" x2="440" y1="0" y2={H} stroke="#fff" strokeOpacity=".3" strokeDasharray="4 5" /><text x="450" y="22" fill="#fff" fontSize="13" fontFamily="var(--font-mono)">Redirects live + new collection pages</text></svg>
    </div>
  );
}

/* ---------- ERP ---------- */
const NAVS = ["Overview", "Orders", "Stock", "Purchasing", "Invoices", "WhatsApp", "Reports", "Settings"];
export function ErpDash() {
  return (
    <div className="ad ad-d ad-erp">
      <aside className="ad-side"><b className="ad-logo"><i />OpsDesk</b>{NAVS.map((n, i) => <div key={n} className={i === 0 ? "on" : ""}>{n}</div>)}<small>Al Quoz Trading LLC · TRN 1002•••••••003</small></aside>
      <div className="ad-erp-m">
        <div className="ad-erp-h"><b>Good morning, Rashid</b><span>Tue 13 Oct · GST</span></div>
        <div className="ad-kpis">{[["Orders today", "126", "+14 vs yesterday"], ["Cash in", "AED 184,300", "18 payments matched"], ["Low stock", "9 items", "3 on order"], ["Unpaid invoices", "14", "AED 96,420 due"]].map(([k, v, s]) => <div key={k}><small>{k}</small><b>{v}</b><span>{s}</span></div>)}</div>
        <div className="ad-erp-g">
          <div className="ad-tbl"><div className="h"><span>Order</span><span>Customer</span><span>Amount</span><span>Status</span></div>
            {[["SO-4821", "Al Noor Trading", "AED 18,400", "Packed", "#7cff35"], ["SO-4820", "Gulf Mart", "AED 6,250", "Invoiced", "#6aa8ff"], ["SO-4819", "Desert Fresh", "AED 12,980", "Awaiting stock", "#ffb020"], ["SO-4818", "Palm Cafe Group", "AED 3,140", "Delivered", "#7cff35"], ["SO-4817", "Marina Pharmacy", "AED 9,760", "Packed", "#7cff35"]].map(([a, b, c, d, e]) => <div key={a}><span>{a}</span><span>{b}</span><span>{c}</span><span><Dot c={e} />{d}</span></div>)}</div>
          <div className="ad-feed"><span className="ad-h">Today</span>{["WhatsApp order from Gulf Mart became SO-4820", "Stock for SKU 2231 fell below minimum, PO drafted", "Payment AED 6,250 matched to INV-9182", "Auto-reply sent to 12 customers after hours"].map((x) => <div key={x}><Dot c="#7cff35" />{x}</div>)}</div>
        </div>
        <div className="ad-bars"><span className="ad-h">Stock by category</span>{[["Beverages", 82], ["Dry goods", 64], ["Packaging", 41], ["Cleaning", 27]].map(([k, v]) => <div key={k as string}><span>{k}</span><i><u style={{ width: `${v}%` }} /></i><b>{v}%</b></div>)}</div>
      </div>
    </div>
  );
}
export function ErpInvoice() {
  return (
    <div className="ad ad-l ad-inv">
      <div className="ad-top"><b>Invoice INV-9182</b><span>Posted · Tue 13 Oct</span><em /><span className="ad-btn">PDF</span><span className="ad-btn k">Send on WhatsApp</span></div>
      <div className="ad-inv-b">
        <div className="ad-inv-d">
          <div className="ad-inv-h"><div><b>Tax invoice</b><span>Al Quoz Trading LLC · TRN 1002•••••••003</span></div><div><span>Bill to</span><b>Gulf Mart LLC</b><span>TRN 1003•••••••001 · Dubai</span></div></div>
          <div className="ad-tbl lt"><div className="h"><span>Item</span><span>Qty</span><span>Unit</span><span>Total</span></div>{[["Mineral water 500 ml (carton of 24)", "120", "AED 18.00", "AED 2,160.00"], ["Paper cups 8 oz (sleeve of 50)", "200", "AED 6.50", "AED 1,300.00"], ["Cleaning kit, small", "40", "AED 82.00", "AED 3,280.00"]].map(([a, b, c, d]) => <div key={a}><span>{a}</span><span>{b}</span><span>{c}</span><span>{d}</span></div>)}</div>
          <div className="ad-inv-t"><div><span>Subtotal</span><b>AED 6,740.00</b></div><div><span>VAT 5%</span><b>AED 337.00</b></div><div className="g"><span>Total</span><b>AED 7,077.00</b></div></div>
        </div>
        <aside className="ad-inv-s"><span className="ad-h">Status</span>{[["Stock updated", "40 + 120 + 200 units"], ["Ledger posted", "Sales, VAT output"], ["Payment matched", "Bank feed, AED 6,250 partial"], ["E-invoice data", "Structured fields ready"]].map(([a, b]) => <div key={a}><Dot c="#2f9a0a" /><b>{a}</b><span>{b}</span></div>)}</aside>
      </div>
    </div>
  );
}

/* ---------- WhatsApp inbox ---------- */
export function WaInbox() {
  return (
    <div className="ad ad-d ad-wa">
      <aside className="ad-wa-l"><span className="ad-h">Inbox · 38 open</span>{[["Gulf Mart", "Can you do 40 more cartons?", "2m", 1], ["Layla K.", "Where is my order?", "6m", 0], ["Desert Fresh", "Invoice copy please", "14m", 0], ["Marina Pharmacy", "Thank you!", "1h", 0], ["+971 55 ••• 0142", "Do you deliver to Sharjah?", "1h", 0]].map(([n, m, t, s]) => <div key={n as string} className={s ? "sel" : ""}><b>{n}</b><span>{m}</span><em>{t}</em></div>)}</aside>
      <div className="ad-wa-c">
        <div className="ad-wa-h"><b>Gulf Mart</b><span>Customer since 2024 · AED 212,400 lifetime</span></div>
        <div className="ad-wa-m">
          <div className="in">Salam, can you do 40 more cartons of the 500 ml water by Thursday?<time>10:41</time></div>
          <div className="bot">Auto-reply · checked stock: 64 cartons available at Al Quoz. Thursday delivery slot is open. Shall I create the order?<time>10:41 · AI</time></div>
          <div className="in">Yes please, same address<time>10:42</time></div>
          <div className="bot">Order SO-4822 created for AED 720.00 + VAT. Invoice sent. <u>Pay link</u><time>10:42 · AI</time></div>
          <div className="hand">Customer asked about credit terms. Handed to Rashid.</div>
        </div>
        <div className="ad-wa-i">Reply as Rashid…</div>
      </div>
      <aside className="ad-wa-r"><span className="ad-h">Customer</span><b>Gulf Mart LLC</b><small>Buyer: Saeed A.</small>{[["Open orders", "2"], ["Unpaid", "AED 6,250"], ["Credit limit", "AED 50,000"]].map(([k, v]) => <div key={k}><span>{k}</span><b>{v}</b></div>)}<span className="ad-h" style={{ marginTop: 22 }}>Rules</span><div className="ad-note">Auto-reply answers stock and order questions. Anything about credit, complaints or returns goes to a person.</div></aside>
    </div>
  );
}

/* ---------- AI assistant on a store ---------- */
export function AiWidget() {
  return (
    <div className="ad-aiw" style={{ width: 1440, height: 900, position: "relative", overflow: "hidden" }}>
      <div style={{ filter: "brightness(.55)" }}><StoreHome k="maisonverre" /></div>
      <div className="ad-chat">
        <div className="ad-chat-h"><i /><div><b>Maison Verre assistant</b><span>Answers from our catalogue · A person can step in</span></div></div>
        <div className="ad-chat-b">
          <div className="u">Do you have the Soraya tote in forest green and can it arrive by Friday?</div>
          <div className="a">Yes, the Soraya tote in forest is in stock at our Dubai atelier. Order before 3 PM and it arrives tomorrow evening in Dubai, Friday for Abu Dhabi and Sharjah.
            <div className="ad-pc"><div className="st-img" style={{ background: "#e3dbcb" }} /><div><b>Soraya tote</b><span>Forest · Calf leather</span><em>AED 7,400</em></div><span className="ad-btn k">Add to bag</span></div></div>
          <div className="u">Can I get my initials on it?</div>
          <div className="a">Monogramming is complimentary and adds 2 days. Want me to add it to your bag, or connect you with a client advisor?</div>
        </div>
        <div className="ad-chat-i"><span>Ask about sizes, delivery, care…</span><span className="ad-btn">Talk to a person</span></div>
      </div>
    </div>
  );
}
