import Link from "next/link";
import { meta } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { webPageLd, itemListLd } from "@/lib/schema";
import { Faq } from "@/components/ui/Faq";
import { BookBtn, WaBtn } from "@/components/ui/Buttons";
import { GlowCanvas } from "@/components/scenes/GlowCanvas";
import { PinnedChapters } from "@/components/scenes/PinnedChapters";
import { StackCards } from "@/components/scenes/StackCards";
import { Visual } from "@/components/mock/Visual";
import { Browser } from "@/components/mock/Frames";
import { StoreHome } from "@/components/mock/Store";
import { DubaiClock } from "@/components/sections/Clock";
import { CtaBand, Marquee, SecHead } from "@/components/sections/Blocks";
import { CountUp } from "@/components/ui/CountUp";
import { MONEY, CLUSTERS } from "@content/v3/nav";
import { CASES } from "@content/v3/cases";
import { POSTS, CLUSTER_LABEL } from "@content/v3/posts";
import { CBRANDS } from "@content/v3/brands";
import { HOME_FAQ, WHY, TECH } from "@content/v3/site";

export const metadata = meta({
  title: "Shopify, WordPress and Automation Agency in Dubai",
  desc: "A Dubai studio building Shopify stores, custom themes, WordPress sites and the ERP, WhatsApp and AI software behind them. Published AED prices, Arabic and English.",
  path: "/",
});

const ROLL = ["Shopify stores", "WordPress sites", "custom themes", "WhatsApp bots", "your ERP"];
const hero = CBRANDS.oudatelier;

export default function Home() {
  const stackSvc = [
    { n: "01", h: "Stores that sell like a flagship.", p: "Shopify and Shopify Plus, custom themes, Arabic RTL, Tabby and Tamara, built to be edited by your team.", href: "/shopify-agency-dubai", cta: "Shopify agency in Dubai", v: <Visual id="store-collection" brand="maisonverre" />, cls: "" },
    { n: "02", h: "Websites a serious company deserves.", p: "WordPress sites with custom blocks, bilingual from day one, fast and easy to maintain.", href: "/wordpress-agency-dubai", cta: "WordPress agency in Dubai", v: <Visual id="wp-site" />, cls: "" },
    { n: "03", h: "Software that ends the spreadsheet.", p: "An ERP for orders, stock and VAT invoices, with WhatsApp auto-replies and an AI assistant on top.", href: "/business-automation-dubai", cta: "Business automation", v: <Visual id="erp-dash" />, cls: "acid" },
  ];
  const rail = CASES.slice(0, 6);
  return (
    <>
      <JsonLd data={webPageLd("Home", "/", "Shopify, WordPress and automation agency in Dubai")} />
      <JsonLd data={itemListLd("Services", MONEY.map((m) => ({ name: m.label, path: `/${m.slug}` })))} />
      {/* ---- hero ---- */}
      <section className="hero themed t-dark">
        <GlowCanvas />
        <div className="hero-vis" aria-hidden data-intro data-parallax="6"><Browser url="oudatelier.ae" dark><StoreHome k="oudatelier" /></Browser></div>
        <div className="w">
          <div className="hero-meta" data-intro><span className="label">Digital studio · Dubai, UAE</span><DubaiClock /></div>
          <h1 className="display" data-intro>
            <span data-split="lines">Websites and software</span>
            <span className="dimline" data-split="lines">for Gulf brands that sell.</span>
          </h1>
          <div className="hero-foot" data-intro>
            <p className="lead">We design and build <span className="roll" aria-hidden><span>{ROLL.concat(ROLL[0]).map((r, i) => <b key={i}>{r}</b>)}</span></span><span className="sr-only">Shopify stores, WordPress sites, custom themes, WhatsApp bots and ERP systems</span> in Dubai. Arabic and English, local payments, prices published in AED.</p>
            <div className="cta-row"><BookBtn /><WaBtn text="Hi, I'd like to talk about a project" /></div>
          </div>
        </div>
      </section>
      <Marquee items={["Shopify agency in Dubai", "WordPress agency in Dubai", "Custom themes", "WhatsApp automation", "AI assistants", "ERP software", "Arabic RTL", "Tabby and Tamara"]} />
      {/* ---- statement ---- */}
      <section className="sec themed t-paper"><div className="w">
        <p className="label" data-reveal="fade">What we do</p>
        <p className="statement" data-split="scrub" style={{ marginTop: 28 }}>A store should look like the brand and sell like a machine. A back office should run itself. We build both, and we say the price before you ask.</p>
      </div></section>
      {/* ---- pinned store tour ---- */}
      <PinnedChapters id="tour" dark
        head={<><span className="label">The store tour</span><h2 className="display h2" style={{ marginTop: 18 }}>One build, every screen.</h2></>}
        items={[
          { label: "Home", copy: <><span className="label">Storefront</span><h3>A home page that sells the brand first.</h3><p>Editorial layout, product still-lifes, sections your team can rearrange in the theme editor.</p></>, visual: <Visual id="store-home" brand="maisonverre" /> },
          { label: "Collection", copy: <><span className="label">Browse</span><h3>Filtering that feels like a boutique.</h3><p>Fast, accessible filters and quick add, with every image sized so the page never jumps.</p></>, visual: <Visual id="store-collection" brand="maisonverre" /> },
          { label: "Product", copy: <><span className="label">Decide</span><h3>The product page that answers the last doubt.</h3><p>Delivery to your emirate, Tabby and Tamara messaging and a sticky add to cart.</p></>, visual: <Visual id="store-pdp" brand="oudatelier" /> },
          { label: "Arabic", copy: <><span className="label">RTL</span><h3>Arabic designed, not mirrored.</h3><p>Typography, spacing and numerals reviewed by a native reader.</p></>, visual: <Visual id="store-rtl" /> },
          { label: "Mobile", copy: <><span className="label">Phone first</span><h3>Most UAE orders start on a phone.</h3><p>One-thumb navigation, Apple Pay and a checkout with no surprises.</p></>, visual: <Visual id="store-mobile" brand="oudatelier" /> },
        ]} />
      {/* ---- services stacked ---- */}
      <section className="sec themed t-dark"><div className="w">
        <SecHead eyebrow="Services" h="Three things, done properly." lead="Commerce, web and software. One team, so your store, site and systems talk to each other." />
        <StackCards>{stackSvc.map((s, i) => (
          <article key={s.n} className={`stk-card ${s.cls}`} style={{ ["--i" as string]: i }}>
            <div><span className="stk-n">{s.n} / 03</span><h3>{s.h}</h3><p>{s.p}</p><Link href={s.href} className={`btn ${s.cls ? "btn-k" : "btn-p"}`}>{s.cta} <i className="arr">→</i></Link></div>
            <div className="vis">{s.v}</div>
          </article>
        ))}</StackCards>
      </div></section>
      {/* ---- all money pages ---- */}
      <section className="sec themed t-coal"><div className="w">
        <SecHead eyebrow="Every service" h="Find exactly what you need." />
        {(Object.keys(CLUSTERS) as (keyof typeof CLUSTERS)[]).map((c) => (
          <div key={c}><div className="cl-h">{CLUSTERS[c].title} · {CLUSTERS[c].blurb}</div>
            <div className="svc-grid" data-stagger>{MONEY.filter((m) => m.cluster === c).map((m) => (
              <Link key={m.slug} href={`/${m.slug}`} className="svc"><div><b>{m.label}</b></div><span>{m.blurb}</span><span className="tlink">Read more →</span></Link>
            ))}</div></div>
        ))}
      </div></section>
      {/* ---- software scene ---- */}
      <section className="sec themed t-dark"><div className="w">
        <SecHead eyebrow="Automation" h="The spreadsheet is the bottleneck." lead="Orders arrive on WhatsApp, stock lives in Excel, invoices are typed twice. We replace that with one system, and an assistant that answers customers at 2am." />
        <div className="wall" data-stagger>
          <div className="w8"><div className="wall-v"><Visual id="wa-inbox" /></div><div className="wall-t"><b>WhatsApp inbox with auto-reply</b><span>Hand-off to a person</span></div></div>
          <div className="w4"><div className="wall-v"><Visual id="erp-invoice" /></div><div className="wall-t"><b>VAT invoices, one click</b><span>5% VAT</span></div></div>
          <div className="w4"><div className="wall-v"><Visual id="ai-widget" /></div><div className="wall-t"><b>AI that knows the catalogue</b><span>Answers, not guesses</span></div></div>
          <div className="w8"><div className="wall-v"><Visual id="erp-dash" /></div><div className="wall-t"><b>Orders, stock and cash in one view</b><span>Live</span></div></div>
        </div>
        <p className="fine" style={{ marginTop: 22 }}>All interfaces shown are concept builds we designed. Not client work.</p>
      </div></section>
      {/* ---- case rail ---- */}
      <section className="hsw" data-hscroll><div className="hsw-in">
        <div className="w"><SecHead eyebrow="Work" h="Six concept builds." lead="Built to show our standard, labelled honestly as concept work." /><i className="hsw-bar" data-hscroll-bar /></div>
        <div className="hsw-track" data-hscroll-track>
          {rail.map((c, i) => (
            <Link key={c.slug} href={`/work/${c.slug}`} className="hsw-card" data-cursor="View">
              <div className="hsw-vis" style={{ background: CBRANDS[c.brand as keyof typeof CBRANDS]?.bg ?? "var(--card)" }}><Visual id={c.visuals[0]} brand={c.brand} /></div>
              <div className="hsw-info"><span>{String(i + 1).padStart(2, "0")}</span><h3>{c.name}</h3><p>{c.sector} · {c.platform} · Concept build</p></div>
            </Link>
          ))}
          <div className="hsw-end"><p className="lead">See how each was designed and engineered.</p><Link className="btn btn-p" href="/work">All work <i className="arr">→</i></Link></div>
        </div>
      </div></section>
      {/* ---- numbers + why ---- */}
      <section className="sec themed t-paper"><div className="w">
        <SecHead eyebrow="Why us" h="What you can check before you sign." />
        <div className="svc-grid" data-stagger>{WHY.map((x) => <div className="svc" key={x.t} style={{ minHeight: 200 }}><b>{x.t}</b><span>{x.p}</span></div>)}</div>
      </div></section>
      <section className="sec-s themed t-dark"><div className="w"><div className="nums" data-stagger>
        <div><b><CountUp to={14} /></b><span>Service pages with published prices</span></div>
        <div><b><CountUp to={9900} prefix="AED " /></b><span>Launch Shopify store, from</span></div>
        <div><b><CountUp to={2900} prefix="AED " /></b><span>WhatsApp assistant, from</span></div>
        <div><b><CountUp to={5} suffix="%" /></b><span>VAT, shown separately</span></div>
      </div></div></section>
      <Marquee alt dir={1} items={TECH.slice(0, 12)} />
      {/* ---- journal ---- */}
      <section className="sec themed t-dark"><div className="w">
        <SecHead eyebrow="Journal" h="Straight answers, written down." />
        <div className="posts" data-stagger>{POSTS.slice(0, 6).map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="pc"><div className="meta"><span>{CLUSTER_LABEL[p.cluster]}</span><span>{p.read} min</span></div><div><h3>{p.title}</h3><p>{p.desc}</p></div><span className="tlink">Read →</span></Link>
        ))}</div>
        <div style={{ marginTop: 34 }}><Link className="btn btn-o" href="/blog">All articles <i className="arr">→</i></Link></div>
      </div></section>
      <section className="sec themed t-paper"><div className="w two">
        <div><span className="label">FAQ</span><h2 className="display h3" style={{ margin: "20px 0" }} data-split="lines">Before you ask.</h2></div>
        <Faq items={HOME_FAQ} />
      </div></section>
      <CtaBand h="Tell us what you want to sell." lead="Send a short brief or message us on WhatsApp. You get a reply within one working day." wa="Hi, I'd like a quote for a project" />
    </>
  );
}
