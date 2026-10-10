import type { CSSProperties } from "react";
import { CBRANDS, type CBrand } from "@content/v3/brands";
import { Still } from "./Still";

const theme = (b: CBrand): CSSProperties => ({ ["--sb" as string]: b.bg, ["--si" as string]: b.ink, ["--sa" as string]: b.accent, ["--ss" as string]: b.soft } as CSSProperties);
const font = (b: CBrand) => (b.serif ? "var(--font-serif)" : "var(--font-display)");
const Crop = ({ b, z = 1, x = 0, y = 0, id }: { b: CBrand; z?: number; x?: number; y?: number; id: string }) => (
  <div className="st-img"><div style={{ transform: `translate(${x}%, ${y}%) scale(${z})`, transformOrigin: "50% 50%", width: "100%", height: "100%" }}><Still product={b.product} tone={b.accent} id={id} /></div></div>
);
const FILTERS: Record<string, [string, string[]][]> = {
  bag: [["Category", ["Totes", "Clutches", "Small leather goods"]], ["Colour", ["Forest", "Ivory", "Black"]], ["Price", ["Under AED 2,000", "AED 2,000 to 5,000", "Over AED 5,000"]]],
  perfume: [["Family", ["Oud", "Amber", "Musk"]], ["Size", ["5 ml", "50 ml", "100 ml"]], ["Price", ["Under AED 300", "AED 300 to 800", "Over AED 800"]]],
  watch: [["Movement", ["Automatic", "Quartz", "Chronograph"]], ["Case", ["Steel", "Gold", "Titanium"]], ["Price", ["Under AED 10,000", "AED 10,000 to 25,000", "Over AED 25,000"]]],
  ring: [["Metal", ["18k gold", "Platinum", "Silver"]], ["Type", ["Signet", "Band", "Stone"]], ["Price", ["Under AED 3,000", "AED 3,000 to 8,000", "Over AED 8,000"]]],
  abaya: [["Style", ["Open abaya", "Kaftan", "Shayla"]], ["Fabric", ["Crepe", "Linen", "Chiffon"]], ["Price", ["Under AED 500", "AED 500 to 1,200", "Over AED 1,200"]]],
  none: [],
};
const Bag = () => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>;
const Search = () => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></svg>;

function Header({ b, rtl = false }: { b: CBrand; rtl?: boolean }) {
  const links = rtl ? ["نساء", "رجال", "هدايا", "الأتيليه"] : ["Women", "Men", "Gifts", "Atelier"];
  return (
    <>
      <div className="st-ann">{rtl ? "توصيل مجاني داخل الإمارات · ادفع لاحقاً مع تابي" : "Complimentary delivery across the UAE · Pay later with Tabby"}</div>
      <header className="st-head">
        <nav>{links.map((l) => <span key={l}>{l}</span>)}</nav>
        <b className="st-logo" style={{ fontFamily: font(b) }}>{b.name}</b>
        <div className="st-tools"><span className="st-lng">{rtl ? "EN" : "ع"}</span><Search /><span>{rtl ? "حسابي" : "Account"}</span><span className="st-bagic"><Bag /><em>1</em></span></div>
      </header>
    </>
  );
}

export function StoreHome({ k, rtl = false }: { k: string; rtl?: boolean }) {
  const b = CBRANDS[k];
  const t = rtl
    ? { eyebrow: "المجموعة الجديدة", h: ["عود وعنبر", "وأمسيات هادئة."], p: "عطور صُنعت ببطء بمكونات نادرة. شحن مجاني وتغليف هدايا.", cta: "تسوّق المجموعة", sec: "الأكثر طلباً" }
    : { eyebrow: "New season", h: b.tagline.split(". ").length > 1 ? b.tagline.split(". ") : [b.tagline, ""], p: "Considered pieces, finished by hand. Complimentary gift wrapping and delivery within the UAE.", cta: "Shop the collection", sec: "Most wanted" };
  return (
    <div className="st" style={theme(b)} dir={rtl ? "rtl" : "ltr"}>
      <Header b={b} rtl={rtl} />
      <section className="st-hero">
        <div className="st-hero-t">
          <span className="st-eyebrow">{t.eyebrow}</span>
          <h2 style={{ fontFamily: font(b) }}>{t.h[0]}<br /><i>{t.h[1]}</i></h2>
          <p>{t.p}</p>
          <span className="st-cta">{t.cta} <u /></span>
        </div>
        <div className="st-hero-i"><Crop b={b} id={`${k}h`} z={1.08} /><span className="st-cap">{b.items[0].n} · {b.items[0].p}</span></div>
      </section>
      <section className="st-row">
        <div className="st-rowh"><b style={{ fontFamily: font(b) }}>{t.sec}</b><span>{rtl ? "عرض الكل" : "View all"}</span></div>
        <div className="st-cards">
          {b.items.map((it, i) => (
            <div className="st-card" key={it.n}><Crop b={b} id={`${k}c${i}`} z={1.5 - i * 0.18} x={i === 1 ? -8 : i === 2 ? 8 : 0} y={i === 2 ? -8 : 2} /><div><b>{it.n}</b><span>{it.sub}</span><em>{it.p}</em></div></div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function StoreCollection({ k }: { k: string }) {
  const b = CBRANDS[k];
  const prods = [...b.items, ...b.items].slice(0, 6);
  return (
    <div className="st" style={theme(b)}>
      <Header b={b} />
      <div className="st-crumb">Home / Women / <b>All {b.sector.toLowerCase()}</b></div>
      <div className="st-coll">
        <aside>
          <b>Filter</b>
          {FILTERS[b.product].map(([h, o]) => (
            <div key={h as string}><span>{h as string}</span>{(o as string[]).map((x, i) => <label key={x}><i className={i === 0 ? "on" : ""} />{x}</label>)}</div>
          ))}
        </aside>
        <div>
          <div className="st-sort"><span>{prods.length} pieces</span><span>Sort: Featured</span></div>
          <div className="st-grid">{prods.map((it, i) => <div className="st-card" key={i}><Crop b={b} id={`${k}g${i}`} z={1.15 + (i % 3) * 0.2} x={(i % 3 - 1) * 5} y={(i % 2) * -5} /><div><b>{it.n}</b><span>{it.sub}</span><em>{it.p}</em></div></div>)}</div>
        </div>
      </div>
    </div>
  );
}

export function StorePDP({ k }: { k: string }) {
  const b = CBRANDS[k];
  const it = b.items[0];
  return (
    <div className="st" style={theme(b)}>
      <Header b={b} />
      <div className="st-crumb">Home / Women / Totes / <b>{it.n}</b></div>
      <div className="st-pdp">
        <div className="st-gal"><div className="st-thumbs">{[1, 1.4, 1.8].map((z, i) => <Crop key={i} b={b} id={`${k}t${i}`} z={z} />)}</div><div className="st-main"><Crop b={b} id={`${k}pm`} z={1.02} /></div></div>
        <div className="st-buy">
          <span className="st-eyebrow">{b.sector}</span>
          <h2 style={{ fontFamily: font(b) }}>{it.n}</h2>
          <div className="st-price">{it.p} <small>incl. VAT</small></div>
          <p>{it.sub}. Cut and finished by hand. Complimentary monogram on request.</p>
          <div className="st-lbl">Colour: <b>Forest</b></div>
          <div className="st-sw"><i style={{ background: b.accent }} className="on" /><i style={{ background: "#14110d" }} /><i style={{ background: "#d8cdb8" }} /></div>
          <div className="st-add"><span>Add to bag</span><u /></div>
          <div className="st-bnpl">or 4 payments of <b>AED 1,850</b> with Tabby · No fees</div>
          <div className="st-acc">{["Details and materials", "Delivery and returns", "Care"].map((x) => <div key={x}><span>{x}</span><u>+</u></div>)}</div>
          <div className="st-wa">Chat with a client advisor on WhatsApp</div>
        </div>
      </div>
      <div className="st-btm"><span>{it.n}</span><b>{it.p}</b><span className="st-add sm">Add to bag</span></div>
    </div>
  );
}

export function StoreCart({ k }: { k: string }) {
  const b = CBRANDS[k];
  const it = b.items[0], up = b.items[2];
  return (
    <div className="st" style={theme(b)}>
      <Header b={b} />
      <div className="st-dim"><StoreHome k={k} /></div>
      <aside className="st-drawer">
        <div className="st-dh"><b>Your bag (1)</b><span>Close</span></div>
        <div className="st-bar"><i style={{ width: "100%" }} /><span>You&apos;ve unlocked complimentary delivery</span></div>
        <div className="st-line"><Crop b={b} id={`${k}ca`} z={1.4} /><div><b>{it.n}</b><span>{it.sub}</span><span>Qty 1</span></div><em>{it.p}</em></div>
        <div className="st-up"><span className="st-eyebrow">Complete the look</span><div className="st-line sm"><Crop b={b} id={`${k}cb`} z={1.8} /><div><b>{up.n}</b><span>{up.p}</span></div><span className="st-mini">Add</span></div></div>
        <div className="st-sum"><div><span>Subtotal</span><b>{it.p}</b></div><div><span>Delivery</span><b>Free</b></div><div><span>VAT 5% included</span><b>AED 352</b></div></div>
        <div className="st-pay"><span className="st-ap"> Pay</span><span className="st-co">Checkout</span><small>or 4 payments of AED 1,850 with Tabby</small></div>
      </aside>
    </div>
  );
}

/** Two phone screens: storefront home and Apple Pay checkout. */
export function MobileHome({ k }: { k: string }) {
  const b = CBRANDS[k];
  return (
    <div className="msc" style={theme(b)}>
      <div className="sm-st"><span>9:41</span><span>5G</span></div>
      <div className="sm-head"><span>≡</span><b style={{ fontFamily: font(b) }}>{b.name}</b><span className="st-bagic"><Bag /><em>1</em></span></div>
      <div className="sm-hero"><Crop b={b} id={`${k}mh`} z={1.1} /><div className="sm-ht"><span className="st-eyebrow">New season</span><h3 style={{ fontFamily: font(b) }}>{b.tagline}</h3><span className="st-cta">Shop now <u /></span></div></div>
      <div className="sm-cats">{["New", "Women", "Gifts", "Atelier"].map((x, i) => <span key={x} className={i === 0 ? "on" : ""}>{x}</span>)}</div>
      <div className="sm-grid">{b.items.slice(0, 2).map((it, i) => <div key={it.n} className="st-card"><Crop b={b} id={`${k}ms${i}`} z={1.4 - i * 0.2} /><div><b>{it.n}</b><em>{it.p}</em></div></div>)}</div>
    </div>
  );
}
export function MobileCheckout({ k }: { k: string }) {
  const b = CBRANDS[k];
  const it = b.items[0];
  return (
    <div className="msc sm-co" style={theme(b)}>
      <div className="sm-st"><span>9:41</span><span>5G</span></div>
      <div className="sm-head"><span>‹</span><b style={{ fontFamily: font(b) }}>Checkout</b><span /></div>
      <div className="sm-ord"><Crop b={b} id={`${k}mc`} z={1.5} /><div><b>{it.n}</b><span>{it.sub}</span></div><em>{it.p}</em></div>
      <div className="sm-ship"><span className="st-eyebrow">Delivery</span><b>Dubai Marina, Marina Gate 2</b><span>Tomorrow by 8 PM · Free</span></div>
      <div className="sm-sum"><div><span>Subtotal</span><b>{it.p}</b></div><div><span>VAT 5% included</span><b>AED 352</b></div><div className="t"><span>Total</span><b>{it.p}</b></div></div>
      <div className="sm-pay"><span className="st-ap"> Pay</span><span className="st-tabby">Pay in 4 · AED 1,850 with <b>tabby</b></span><span className="st-card-btn">Pay by card</span></div>
    </div>
  );
}
