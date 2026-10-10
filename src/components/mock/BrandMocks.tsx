import type { CSSProperties } from "react";
import { BRANDS, type Brand } from "@content/brands";
import { Browser, Phone } from "./Frames";

const theme = (b: Brand): CSSProperties =>
  ({ "--b-bg": b.bg, "--b-ink": b.ink, "--b-ac": b.accent, "--b-aci": b.accentInk, "--b-soft": b.soft } as CSSProperties);

function Art({ b }: { b: Brand }) {
  // Abstract "lens" composition: gradient field, hairline rings and film grain, in the brand colours. No stock photos, no blobs.
  const id = b.key;
  return (
    <svg viewBox="0 0 520 420" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id={`b-${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={b.accent} /><stop offset="1" stopColor={b.ink} stopOpacity=".78" /></linearGradient>
        <radialGradient id={`a-${id}`} cx=".18" cy=".12" r=".9"><stop offset="0" stopColor="#fff" stopOpacity=".72" /><stop offset=".55" stopColor="#fff" stopOpacity="0" /></radialGradient>
        <radialGradient id={`c-${id}`} cx=".72" cy=".62" r=".5"><stop offset="0" stopColor={b.accentInk} stopOpacity=".5" /><stop offset="1" stopColor={b.accentInk} stopOpacity="0" /></radialGradient>
        <filter id={`n-${id}`}><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" seed="4" /><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .55 0" /></filter>
      </defs>
      <rect width="520" height="420" fill={`url(#b-${id})`} />
      <rect width="520" height="420" fill={`url(#a-${id})`} />
      <rect width="520" height="420" fill={`url(#c-${id})`} />
      {[64, 112, 164, 220, 282, 350].map((r) => <circle key={r} cx="318" cy="236" r={r} fill="none" stroke={b.accentInk} strokeOpacity={0.22 - r / 2400} strokeWidth="1" />)}
      <circle cx="318" cy="236" r="30" fill={b.accentInk} opacity=".92" />
      <circle cx="318" cy="236" r="6" fill={b.accent} />
      <path d="M0 330 C 120 300, 210 340, 330 292 S 470 250, 520 262" fill="none" stroke={b.accentInk} strokeOpacity=".28" />
      <rect width="520" height="420" filter={`url(#n-${id})`} opacity=".32" style={{ mixBlendMode: "multiply" }} />
    </svg>
  );
}

/** Complete small-business website at real size (1280×800). */
export function SiteMock({ k, b: bo }: { k: string; b?: Brand }) {
  const b = bo ?? BRANDS[k];
  return (
    <div className="bm" style={theme(b)}>
      <div className="bm-page">
      <div className="bm-ann">{b.chip} · {b.area}</div>
      <div className="bm-nav">
        <span className="bm-logo">{b.name}</span>
        <div className="bm-links"><span>Services</span><span>About</span><span>Gallery</span><span>Contact</span></div>
        <div className="bm-r"><span className="bm-lng">EN · ع</span>{b.phone && <span>{b.phone}</span>}<span className="bm-btn">Book now</span></div>
      </div>
      <div className="bm-hero">
        <div>
          <div className="mk-h1">{b.headline[0]} <em>{b.headline[1]}</em></div>
          <p>{b.sub}</p>
          <span className="bm-btn">Book now</span>&nbsp;&nbsp;<span className="bm-btn o">See prices</span>
          <div className="bm-rate"><b>★★★★★</b>{b.rating} · {b.reviews}</div>
        </div>
        <div className="bm-art">
          <Art b={b} />
          <div className="bm-float" style={{ left: 24, bottom: 30 }}>{b.items[0].n}<small>{b.items[0].p}</small></div>
          <div className="bm-float" style={{ right: 24, top: 34 }}>★ {b.rating}<small>{b.reviews}</small></div>
        </div>
      </div>
      <div className="bm-svc">
        {b.items.map((it) => (
          <div className="bm-card" key={it.n}><b>{it.n}</b><span>{it.p}</span>{it.d && <small>{it.d}</small>}</div>
        ))}
      </div>
      <div className="bm-quote"><b>★★★★★ {b.rating}</b><p>“Booked in under a minute, and they sent a WhatsApp reminder the day before.”</p><small>{b.reviews} · {b.area}</small></div>
      <div className="bm-cta"><div className="mk-h1">{b.headline[0]}</div><span className="bm-btn">Book now</span></div>
      <div className="bm-foot"><span className="bm-logo">{b.name}</span><span>{b.area}</span>{b.phone && <span>{b.phone}</span>}<span>EN · ع</span></div>
      </div>
    </div>
  );
}

type Kind = "home" | "detail" | "status" | "checkout" | "tracking" | "lock" | "loyalty";
const Bar = () => <div className="am-bar"><span>9:41</span><span>5G ▮▮▮</span></div>;
const Tab = () => <div className="am-tab"><span className="on"><i />Home</span><span><i />Book</span><span><i />Orders</span><span><i />Profile</span></div>;

export function AppScreen({ k, kind, b: bo }: { k: string; kind: Kind; b?: Brand }) {
  const b = bo ?? BRANDS[k];
  const s = theme(b);
  if (kind === "home")
    return (
      <div className="am" style={s}><Bar />
        <div className="am-top"><small>Good evening, Sarah</small><h3>{b.name}</h3></div>
        <div className="am-hero"><b>{b.headline[0]} {b.headline[1]}</b><span>{b.chip}</span>
          <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="currentColor" /></svg></div>
        <div className="am-list">
          {b.items.map((it, i) => (
            <div className="am-row" key={it.n}><div className="am-ic">{it.n[0]}</div><div><b>{it.n}</b><small>{it.d ?? b.area}</small></div><em>{it.p}</em></div>
          ))}
          <div className="am-row"><div className="am-ic">★</div><div><b>{b.rating} rating</b><small>{b.reviews}</small></div></div>
        </div>
        <Tab />
      </div>
    );
  if (kind === "detail")
    return (
      <div className="am" style={s}><Bar />
        <div className="am-top"><small>{b.tag}</small><h3>{b.items[1]?.n ?? b.items[0].n}</h3></div>
        <div className="am-hero" style={{ minHeight: 150 }}><b>{b.items[1]?.p ?? b.items[0].p}</b><span>Most booked</span></div>
        <div className="am-chips"><span className="on">Today</span><span>Tomorrow</span><span>Sat 17</span></div>
        <div className="am-chips"><span>10:00</span><span className="on">12:30</span><span>3:00</span><span>5:30</span></div>
        <div className="am-list">
          <div className="am-row"><div className="am-ic">M</div><div><b>Mia · senior</b><small>Next free: today 12:30</small></div><em>{b.items[1]?.p}</em></div>
          <div className="am-row"><div className="am-ic">J</div><div><b>Jordan</b><small>Next free: tomorrow</small></div><em>{b.items[0].p}</em></div>
        </div>
        <div className="am-btn">Continue · {b.chip}</div>
      </div>
    );
  if (kind === "status")
    return (
      <div className="am" style={s}><Bar />
        <div className="am-top"><small>Your visit · #2291</small><h3>You&apos;re all set.</h3></div>
        <div className="am-tl">
          <div className="done">Booked<small>Deposit paid · Apple Pay</small></div>
          <div className="done">Reminder sent<small>WhatsApp · Fri 6:00 PM</small></div>
          <div>On the way<small>We&apos;ll message you</small></div>
          <div>Done, rate your visit<small>Earn loyalty points</small></div>
        </div>
        <div className="am-card"><b style={{ font: "800 20px var(--font-sans)" }}>{b.items[0].n}</b><div style={{ opacity: .85, marginTop: 6 }}>{b.items[0].p} · {b.area}</div></div>
        <Tab />
      </div>
    );
  if (kind === "tracking")
    return (
      <div className="am" style={s}><Bar />
        <div className="am-top"><small>Arriving in 12 min</small><h3>Imran is on the way</h3></div>
        <div className="am-map">
          <svg viewBox="0 0 354 300"><path d="M20 260 C 90 240, 120 150, 200 150 S 300 80, 330 30" stroke={b.accent} strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray="2 12" />
            <circle cx="20" cy="260" r="9" fill={b.ink} /><circle cx="330" cy="30" r="13" fill={b.accent} /><circle cx="200" cy="150" r="9" fill="#fff" stroke={b.accent} strokeWidth="4" /></svg>
        </div>
        <div className="am-list" style={{ marginTop: 12 }}>
          <div className="am-row"><div className="am-ic">I</div><div><b>Imran · driver</b><small>White van · D 51420</small></div><em>Call</em></div>
          <div className="am-row"><div className="am-ic">✓</div><div><b>6.6 kg · AED 99</b><small>Wash &amp; fold, charged by weight</small></div></div>
        </div>
        <Tab />
      </div>
    );
  if (kind === "checkout")
    return (
      <div className="am" style={s}><Bar />
        <div className="am-top"><small>Checkout</small><h3>{b.name}</h3></div>
        <div className="am-list" style={{ opacity: .55 }}>{b.items.slice(0, 2).map((it) => <div className="am-row" key={it.n}><div className="am-ic">{it.n[0]}</div><div><b>{it.n}</b></div><em>{it.p}</em></div>)}</div>
        <div className="am-sheet">
          <h4> Pay</h4>
          <div className="ln"><span>{b.name}</span><span>AED 100.00</span></div>
          <div className="ln"><span>VAT 5% included</span><span>AED 4.76</span></div>
          <div className="ln"><span>Card</span><span>Visa ••4242</span></div>
          <div className="pay"> Pay with Face ID</div>
        </div>
      </div>
    );
  if (kind === "lock")
    return (
      <div className="am am-lock" style={s}><Bar />
        <div className="d">Tuesday 13 October</div><div className="t">9:41</div>
        <div style={{ marginTop: 60 }}>
          <div className="am-notif"><small>now</small><b>{b.name}</b>Your booking is confirmed for Saturday 17 Oct.</div>
          <div className="am-notif"><small>2m</small><b>WhatsApp · {b.name}</b>Reminder: see you tomorrow at 12:30 ✓</div>
          <div className="am-notif"><small>1h</small><b>{b.name}</b>You earned 120 points. {b.chip}.</div>
        </div>
      </div>
    );
  return (
    <div className="am" style={s}><Bar />
      <div className="am-top"><small>Loyalty</small><h3>7 of 10 stamps</h3></div>
      <div className="am-card">
        <b style={{ font: "800 22px var(--font-sans)" }}>{b.name}</b>
        <div className="am-stamps">{Array.from({ length: 10 }, (_, i) => <i key={i} className={i < 7 ? "f" : ""}>{i < 7 ? "✓" : ""}</i>)}</div>
        <div style={{ marginTop: 18, opacity: .85 }}>3 more visits for a free {b.items[0].n.toLowerCase()}</div>
      </div>
      <div className="am-list"><div className="am-row"><div className="am-ic">%</div><div><b>Member perk</b><small>10% off retail</small></div></div>
        <div className="am-row"><div className="am-ic">+</div><div><b>Add to Apple Wallet</b><small>One tap</small></div></div></div>
      <Tab />
    </div>
  );
}

export function SiteInBrowser({ k, className = "", b: bo }: { k: string; className?: string; b?: Brand }) {
  const b = bo ?? BRANDS[k];
  return <Browser url={b.domain} className={className} dark={b.dark}><SiteMock k={k} b={b} /></Browser>;
}
export function AppInPhone({ k, kind, className = "", style, tilt, b }: { k: string; kind: Kind; className?: string; style?: CSSProperties; tilt?: number; b?: Brand }) {
  return <Phone className={className} style={style} tilt={tilt}><AppScreen k={k} kind={kind} b={b} /></Phone>;
}

/** E-commerce storefront at real size (1280×800): used for Shopify pages. */
export function StoreMock({ k }: { k: string }) {
  const b = BRANDS[k];
  const prods = [...b.items, { n: "Amber attar 12 ml", p: "AED 210" }];
  return (
    <div className="bm" style={theme(b)}>
      <div className="bm-ann">{b.chip} · Tabby & Tamara pay in 4</div>
      <div className="bm-nav"><span className="bm-logo">{b.name}</span><div className="bm-links"><span>New</span><span>Perfume</span><span>Abayas</span><span>Gifts</span></div><div className="bm-r"><span className="bm-lng">EN · ع</span><span>Cart (2)</span></div></div>
      <div className="bm-hero" style={{ height: 300 }}>
        <div><div className="mk-h1" style={{ fontSize: 54 }}>{b.headline[0]} <em>{b.headline[1]}</em></div><p style={{ fontSize: 17, margin: "14px 0 18px" }}>{b.sub}</p><span className="bm-btn">Shop the collection</span></div>
        <div className="bm-art" style={{ height: 260 }}><Art b={b} /></div>
      </div>
      <div className="bm-svc" style={{ gridTemplateColumns: "repeat(4,1fr)", paddingTop: 20 }}>
        {prods.map((it) => (
          <div className="bm-card" key={it.n}><div style={{ height: 120, borderRadius: 18, background: `linear-gradient(135deg, ${b.accent}, ${b.bg})`, marginBottom: 14 }} /><b style={{ fontSize: 17 }}>{it.n}</b><span>{it.p}</span><small>or 4 × {"AED " + Math.round(parseInt(it.p.replace(/\D/g, "")) / 4)} with Tabby</small></div>
        ))}
      </div>
    </div>
  );
}
export function StoreInBrowser({ k }: { k: string }) {
  const b = BRANDS[k];
  return <Browser url={b.domain} dark={b.dark}><StoreMock k={k} /></Browser>;
}
