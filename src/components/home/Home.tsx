import Link from "next/link";
import { HOME } from "@content/home";
import { BRANDS } from "@content/brands";
import { PACKAGES } from "@content/prices";
import { BookBtn, WaBtn, LineBtn } from "@/components/ui/Buttons";
import { Viz, FCard } from "@/components/mock/Viz";
import { SiteInBrowser, AppInPhone } from "@/components/mock/BrandMocks";
import { Head, Plain, FaqSection, CtaSection } from "@/components/sections/Blocks";
import { GlowCanvas } from "@/components/scenes/GlowCanvas";
import { PinnedChapters } from "@/components/scenes/PinnedChapters";
import { StackCards } from "@/components/scenes/StackCards";
import { DubaiClock } from "./HomeClient";

export function HomeHero() {
  return (
    <section className="hx" aria-label="Introduction">
      <div className="hx-fallback" />
      <GlowCanvas className="hx-canvas" />
      <div className="w hx-in" data-parallax="7">
        <p className="hx-kicker" data-intro data-reveal="fade">{HOME.kicker}</p>
        <h1 className="hx-h1">
          <span className="hx-l" data-split="lines" data-intro>{HOME.h1a}</span>
          <span className="hx-l dim" data-split="lines" data-intro>{HOME.h1b}</span>
        </h1>
        <div className="hx-row">
          <p className="hx-sub" data-intro data-reveal="up">{HOME.sub}</p>
          <div className="hx-ctas" data-intro data-reveal="up"><BookBtn /><WaBtn text="Hi, I'm on your homepage" /><LineBtn href="/process">See how it works</LineBtn></div>
        </div>
      </div>
      <div className="hx-stage" data-nosnippet aria-hidden>
        <div className="hx-dev" data-parallax="7">
          <div className="hx-browser" data-tilt data-intro data-reveal="clip"><SiteInBrowser k="maisonrose" /></div>
          <div className="hx-phone" data-intro data-reveal="up" data-delay="0.25"><AppInPhone k="maisonrose" kind="checkout" /></div>
          <FCard icon="●" title="New booking" sub="Layla K. · Balayage · Sat 12:30" className="hx-c1" />
          <FCard icon="●" title="Payment received · AED 100" sub="Apple Pay" className="hx-c2" dark />
          <FCard icon="●" title="AI assistant replied" sub="11:42 PM · in Arabic" className="hx-c3" />
        </div>
      </div>
      <div className="hx-foot w"><DubaiClock /><span className="hx-cue">Scroll</span><span className="hx-proof">{HOME.proof} <small>(illustrative until real reviews are published)</small></span></div>
    </section>
  );
}

const WORDS = ["Shopify", "Websites", "Mobile apps", "WhatsApp AI", "Payments", "E-invoicing", "Automation", "Local SEO", "Web apps", "SaaS"];
export function Marquee() {
  return (
    <section className="mq" aria-hidden data-marquee data-speed="55"><div className="mq-in">{WORDS.map((w) => <span key={w}>{w}<i /></span>)}</div></section>
  );
}

export function Manifesto() {
  const stats: [string, number, string, string][] = [["Services", 12, "", "one team"], ["Fixed price in", 48, "h", "after the call"], ["Code you own", 100, "%", "from payment one"], ["Languages", 2, "", "English + Arabic"]];
  return (
    <section className="sec mf"><div className="w">
      <p className="mf-t" data-split="scrub">We&apos;re a software studio in Dubai. We build the stores, apps and systems that run UAE businesses, in English and Arabic, at fixed prices, with the code yours from the first payment.</p>
      <div className="mf-stats" data-stagger="up">{stats.map(([k, n, s, d]) => (
        <div key={k}><span className="k">{k}</span><b><i data-count={n} data-suffix={s}>{n}{s}</i></b><small>{d}</small></div>
      ))}</div>
    </div></section>
  );
}

export function Chapters() {
  return (
    <PinnedChapters id="start" dark
      head={<Head dark eyebrow="Where are you starting from?" title="Wherever you are, we pick it up." />}
      items={HOME.starting.map((s) => ({
        label: s.tab,
        copy: (<>
          <p className="chap-q">{s.q}</p>
          <h3>{s.h}</h3><p>{s.p}</p>
          <ul>{s.pts.map((x) => <li key={x}>{x}</li>)}</ul>
          <Link className="btn btn-lime" href={s.href}>{s.cta} <span className="arrow">→</span></Link>
        </>),
        visual: (<div className="chap-pair"><Viz spec={s.viz} />{s.viz2 && <div className="chap-v2"><Viz spec={s.viz2} /></div>}</div>),
      }))} />
  );
}

export function How() {
  return (
    <PinnedChapters id="how"
      head={<Head eyebrow="How it works" title="Exactly what happens after you call." />}
      items={HOME.steps.map((s) => ({
        label: s.h,
        copy: (<>
          <p className="chap-q mono">{s.n} · {s.when}</p>
          <h3>{s.h}</h3>
          <p><b>What happens.</b> {s.what}</p><p><b>What you do.</b> {s.you}</p>
        </>),
        visual: <Viz spec={s.viz} />,
      }))} />
  );
}

export function Work() {
  const keys = HOME.gallery;
  return (
    <div className="pin-wrap"><section className="hsw" id="work" data-hscroll>
      <div className="hsw-in">
        <div className="w hsw-head">
          <Head eyebrow="Our work" title="This is what we build." lead="Example projects with illustrative numbers. Hover a card and the whole site scrolls." />
          <i className="hsw-bar" data-hscroll-bar />
        </div>
        <div className="hsw-track" data-hscroll-track>
          {keys.map((k, i) => {
            const b = BRANDS[k];
            return (
              <article key={k} className="hsw-card" data-cursor="View" style={{ ["--ga" as string]: b.accent } as React.CSSProperties}>
                <div className="hsw-vis" data-nosnippet aria-hidden><div className="hsw-site"><SiteInBrowser k={k} /></div><div className="hsw-ph" data-hs-par><AppInPhone k={k} kind="home" /></div></div>
                <div className="hsw-info"><span>{String(i + 1).padStart(2, "0")}</span><h3>{b.name}</h3><p>{b.tag} · {b.area}</p></div>
              </article>
            );
          })}
          <div className="hsw-end"><span className="ex-chip">Example projects · illustrative numbers</span><Link className="btn btn-lime" href="/work">See all work <span className="arrow">→</span></Link></div>
        </div>
      </div>
    </section></div>
  );
}

export function Dives() {
  return (
    <section className="dv"><div className="w"><Head dark eyebrow="What we add to your business" title="One team for every part of how you sell." /></div>
      <div className="w"><StackCards>
        {HOME.dives.map((t, i) => (
          <article key={t.tab} className="stk-card" style={{ ["--i" as string]: i } as React.CSSProperties}>
            <div className="stk-copy"><span className="chip">{t.chip}</span><span className="stk-n">{String(i + 1).padStart(2, "0")}</span><h3>{t.h}</h3><p>{t.p}</p>
              <Link className="btn btn-lime btn-sm" href={t.href}>Learn more <span className="arrow">→</span></Link></div>
            <div className="stk-vis" data-nosnippet><Viz spec={t.viz} /></div>
          </article>
        ))}
      </StackCards></div>
    </section>
  );
}

export function ResultsSection() {
  return (
    <section className="sec rs"><div className="w">
      <Head eyebrow="Results" title="Same business. Different week." />
      <span className="ex-chip">Example project · illustrative numbers</span>
      <div className="rs-list">
        {HOME.results.map((r) => (
          <div className="rs-row" key={r.brand} data-reveal="up">
            <div className="rs-n"><i data-count={r.metric[0]} data-prefix={r.metric[2]} data-suffix={r.metric[1]}>{r.metric[2]}{r.metric[0]}{r.metric[1]}</i><small>{r.metric[3]}</small></div>
            <div className="rs-b"><h3>{r.brand}</h3>
              <div className="rs-ba"><div><span>Before</span><b>{r.before[0]}</b><p>{r.before[1]}</p></div><div className="aft"><span>After</span><b>{r.after[0]}</b><p>{r.after[1]}</p></div></div></div>
          </div>
        ))}
      </div>
    </div></section>
  );
}

export function PricingHome() {
  return (
    <section className="sec-tight" id="pricing"><div className="panel"><div className="w sec">
      <Head dark eyebrow="Pricing" title="Clear prices. Fixed before we start." lead="Every project gets a written fixed price in AED within 48 hours. Prices exclude 5% VAT." />
      <div className="pgrid four" data-stagger="up">
        {PACKAGES.map((p) => (
          <div key={p.name} className={`pr ${p.hot ? "hot" : ""}`}>
            <span className="k">{p.k}</span><h4>{p.name}</h4><p>{p.blurb}</p>
            <div className="amt"><small>from</small>{p.amt}{p.unit && <small>{p.unit}</small>}</div>
            <ul>{p.items.map((x) => <li key={x}>{x}</li>)}</ul>
            <Link className="btn btn-ink" href={p.href}>{p.name === "Care" ? "See care plans" : "See details"}</Link>
          </div>
        ))}
      </div>
      <div className="agency-bar" data-reveal="up"><span><b>Agencies in Dubai & UAE:</b> white-label partner rates from AED 18,000 per project.</span><Link className="btn btn-lime btn-sm" href="/agencies">See white-label</Link></div>
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
      <div className="card-grid" data-stagger="up">{items.map(([h, t, s]) => <Link key={h} href={h} className="g-card"><span className="cat">{s}</span><h3>{t}</h3><span className="go" style={{ fontWeight: 600 }}>Read the guide →</span></Link>)}</div>
    </div></section>
  );
}

export function HomeFaq() { return <FaqSection eyebrow="FAQ" head="What people ask before they start." items={HOME.faq} />; }
export function HomeCta() {
  return <CtaSection h="30 minutes. Then you'll know exactly what it costs and when it's live." lead="No pitch deck, no pressure. Tell us what you're trying to do and we'll tell you honestly what it takes." steps={["Pick a time that works for you", "Tell us what you want to build", "Get a plan and fixed price within 48 hours"]} wa="Hi, I'd like to book a call" />;
}
export { Plain };
