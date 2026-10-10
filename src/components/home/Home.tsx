import Link from "next/link";
import { HOME } from "@content/home";
import { BRANDS } from "@content/brands";
import { PACKAGES } from "@content/prices";
import { BookBtn, WaBtn, LineBtn } from "@/components/ui/Buttons";
import { Tabs } from "@/components/ui/Tabs";
import { Viz, FCard } from "@/components/mock/Viz";
import { SiteInBrowser, AppInPhone } from "@/components/mock/BrandMocks";
import { Head, Plain, FaqSection, CtaSection } from "@/components/sections/Blocks";
import { StatementBand, HowItWorks, Gallery, Results } from "./HomeClient";

export function HomeHero() {
  return (
    <section className="panel hero-panel home-hero" style={{ marginTop: 14 }}>
      <div className="hero-glow" />
      <div className="w hero-grid">
        <div className="hero-copy">
          <h1 className="hero-h1">
            <span className="h1-kicker">{HOME.kicker}</span>
            {HOME.h1a} <em>{HOME.h1b}</em>
          </h1>
          <p className="hero-sub">{HOME.sub}</p>
          <div className="hero-ctas">
            <BookBtn />
            <WaBtn text="Hi, I'm on your homepage" />
            <LineBtn href="/process">See how it works</LineBtn>
          </div>
          <div className="proof">
            <div className="avs"><i style={{ background: "#b4536a" }}>S</i><i style={{ background: "#2f6bff" }}>D</i><i style={{ background: "#f97316" }}>R</i></div>
            <div><b>★★★★★</b> {HOME.proof}<small>Illustrative until real reviews are published</small></div>
          </div>
        </div>
        <div className="stage" data-nosnippet aria-hidden>
          <div className="stage-main"><SiteInBrowser k="maisonrose" /></div>
          <div className="stage-side is-phone"><AppInPhone k="maisonrose" kind="checkout" /></div>
          <FCard icon="📅" title="New booking" sub="Layla K. · Balayage · Sat 12:30" style={{ left: "-3%", top: "10%" }} />
          <FCard icon="✓" title="Payment received · AED 100" sub="Apple Pay" style={{ left: "-2%", bottom: "6%" }} dark />
          <FCard icon="💬" title="AI assistant replied" sub="11:42 PM · in Arabic" style={{ right: "-1%", top: "-3%" }} />
        </div>
      </div>
    </section>
  );
}

export function Trust() {
  return (
    <section className="trust"><div className="w">
      <p>Trusted by owners and agencies across the UAE: example projects shown below</p>
      <div className="trust-row">{HOME.gallery.slice(0, 7).map((k) => <span key={k} style={{ fontFamily: k === "ember" ? "var(--font-serif)" : undefined }}>{BRANDS[k].name}</span>)}</div>
    </div></section>
  );
}

export function StartingPoints() {
  return (
    <section className="sec"><div className="w">
      <Head eyebrow="Where are you starting from?" title="Wherever you are today, we take it from here." />
      <Tabs autoplay={9000} numbered rowClass="sp-tabs" items={HOME.starting.map((s) => ({
        label: s.tab,
        content: (
          <div className="sp-grid">
            <div className="sp-copy">
              <p className="sp-q">{s.q}</p>
              <h3>{s.h}</h3><p>{s.p}</p>
              <ul>{s.pts.map((x) => <li key={x}>{x}</li>)}</ul>
              <Link className="btn btn-ink" href={s.href} data-magnetic>{s.cta} <span className="arrow">→</span></Link>
            </div>
            <div className="sp-vis" data-nosnippet><Viz spec={s.viz} />{s.viz2 && <div className="sp-v2"><Viz spec={s.viz2} /></div>}</div>
          </div>
        ),
      }))} />
    </div></section>
  );
}

export function Statement() { return <StatementBand rows={HOME.statement} />; }
export function How() { return <HowItWorks steps={HOME.steps} />; }
export function Work() { return <Gallery keys={HOME.gallery} filters={HOME.filters} />; }

export function Dives() {
  return (
    <section className="sec-tight"><div className="panel dd-panel"><div className="w">
      <Head dark eyebrow="What we add to your business" title="One team for every part of how you sell." />
      <Tabs dark numbered rowClass="dd-tabs" items={HOME.dives.map((t) => ({
        label: t.tab,
        content: (
          <div className="dd-grid">
            <div className="dd-copy"><span className="chip">{t.chip}</span><h3>{t.h}</h3><p>{t.p}</p>
              <div className="dd-acts"><Link className="btn btn-lime" href={t.href}>Learn more <span className="arrow">→</span></Link></div></div>
            <div className="dd-vis" data-nosnippet><Viz spec={t.viz} /></div>
          </div>
        ),
      }))} />
    </div></div></section>
  );
}

export function ResultsSection() {
  return (
    <section className="sec"><div className="w">
      <Head eyebrow="Results" title="Same business. Different week." lead="Drag the divider, or use the keyboard arrows, to compare before and after." />
      <span className="ex-chip" style={{ background: "var(--soft)", color: "var(--mute)", marginBottom: 22 }}>Example project · illustrative numbers</span>
      <Results items={HOME.results} />
    </div></section>
  );
}

export function PricingHome() {
  return (
    <section className="sec-tight" id="pricing"><div className="panel"><div className="w sec">
      <Head dark eyebrow="Pricing" title="Clear prices. Fixed before we start." lead="Every project gets a written fixed price in AED within 48 hours. Prices exclude 5% VAT." />
      <div className="pgrid four">
        {PACKAGES.map((p, i) => (
          <div key={p.name} className={`pr rv ${p.hot ? "hot" : ""}`} style={{ transitionDelay: `${i * 80}ms` }}>
            <span className="k">{p.k}</span><h4>{p.name}</h4><p>{p.blurb}</p>
            <div className="amt"><small>from</small>{p.amt}{p.unit && <small>{p.unit}</small>}</div>
            <ul>{p.items.map((x) => <li key={x}>{x}</li>)}</ul>
            <Link className="btn btn-ink" href={p.href}>{p.name === "Care" ? "See care plans" : "See details"}</Link>
          </div>
        ))}
      </div>
      <div className="agency-bar rv"><span><b>Agencies in Dubai & UAE:</b> white-label partner rates from AED 18,000 per project.</span><Link className="btn btn-lime btn-sm" href="/agencies">See white-label</Link></div>
      <p className="note">All prices are fixed in AED and exclude 5% VAT. <Link href="/pricing" style={{ textDecoration: "underline" }}>See every price</Link>.</p>
    </div></div></section>
  );
}

export function ReadNext() {
  const items: [string, string, string][] = [
    ["/guides/uae-e-invoicing", "E-invoicing becomes mandatory in July 2027: what to do", "The plain-English guide"],
    ["/guides/website-cost-dubai", "How much does a website cost in Dubai?", "Real AED prices"],
    ["/guides/talabat-commission-math", "How much do Talabat and Deliveroo really take?", "Restaurants"],
  ];
  return (
    <section className="sec-tight"><div className="w">
      <div className="card-grid">{items.map(([h, t, s]) => <Link key={h} href={h} className="g-card rv"><span className="cat">{s}</span><h3>{t}</h3><span className="go" style={{ fontWeight: 700 }}>Read the guide →</span></Link>)}</div>
    </div></section>
  );
}

export function HomeFaq() { return <FaqSection eyebrow="FAQ" head="What people ask before they start." items={HOME.faq} />; }
export function HomeCta() {
  return <CtaSection h="30 minutes. Then you'll know exactly what it costs and when it's live." lead="No pitch deck, no pressure. Tell us what you're trying to do and we'll tell you honestly what it takes." steps={["Pick a time that works for you", "Tell us about the business", "Get a plan and fixed price within 48 hours"]} wa="Hi, I'd like to book a call" />;
}
export { Plain };
