import Link from "next/link";
import type { Page, Pain, ShowItem } from "@content/types";
import { Faq } from "@/components/ui/Faq";
import { Tabs } from "@/components/ui/Tabs";
import { BookBtn, WaBtn } from "@/components/ui/Buttons";
import { Booking } from "@/components/ui/Booking";
import { Viz } from "@/components/mock/Viz";
import { AppInPhone, SiteInBrowser } from "@/components/mock/BrandMocks";
import { BRANDS } from "@content/brands";
import { published } from "@content/guides";

export const Eyebrow = ({ children }: { children: React.ReactNode }) => <span className="eyebrow"><i />{children}</span>;
export const Head = ({ eyebrow, title, lead, dark }: { eyebrow: string; title: React.ReactNode; lead?: string; dark?: boolean }) => (
  <div className={`sec-head rv ${dark ? "on-dark" : ""}`}><Eyebrow>{eyebrow}</Eyebrow><h2 className="h2">{title}</h2>{lead && <p className="lead">{lead}</p>}</div>
);

export function Plain({ text, facts }: { text: string; facts: [string, string][] }) {
  return (
    <section className="plx"><div className="w plx-in">
      <div className="plx-l">IN PLAIN ENGLISH</div>
      <div className="plx-r"><p>{text}</p>
        <div className="plx-f">{facts.map(([k, v]) => <span key={k}><b>{k}</b>{v}</span>)}</div></div>
    </div></section>
  );
}

function PainCard({ p, i }: { p: Pain; i: number }) {
  const num = p.cost.match(/(AED\s?[\d,.]+[kKM]?|\d[\d,.]*\s?(?:%|hours?|seconds?|s|min)|\d[\d,.]*)/)?.[0] ?? "";
  return (
    <div className="pain rv" tabIndex={0} data-cursor="See fix" style={{ transitionDelay: `${i * 80}ms` }}>
      <div className="pain-vis" data-nosnippet>
        <div className="pain-before"><span className="tg">BEFORE</span><div className="pain-num">{num}</div><p>{p.cost}</p></div>
        <div className="pain-after"><span className="tg">AFTER</span><p>{p.fix}</p></div>
        <span className="hint">Hover or tap to see the fix</span>
      </div>
      <blockquote>{p.q}</blockquote>
    </div>
  );
}
export function Pains({ head, pains, title }: { head: string; pains: Pain[]; title?: string }) {
  return (
    <section className="sec"><div className="w">
      <Head eyebrow="Sound familiar?" title={head} lead="Hover over each card (or tap it) to see what changes." />
      <div className="pgrid3">{pains.map((p, i) => <PainCard key={i} p={p} i={i} />)}</div>
    </div></section>
  );
}

export function Showcase({ s }: { s: NonNullable<Page["showcase"]> }) {
  const items: ShowItem[] = s.items ?? s.brands.map((k) => ({ label: BRANDS[k].industry, brand: k, results: [`${BRANDS[k].rating}★`, BRANDS[k].items[1]?.p ?? BRANDS[k].items[0].p] as [string, string], chips: BRANDS[k].items.map((i) => i.n), moment: "", phone: s.phone }));
  return (
    <section className="sec" id="work"><div className="w">
      <Head eyebrow={s.eyebrow} title={s.head} lead={s.lead} />
      <Tabs autoplay={7000} numbered arrows rowClass="show-tabs" items={items.map((it) => {
        const b = BRANDS[it.brand];
        return {
          label: it.label,
          content: (
            <div className="show-stage" style={{ ["--sa"as string]: b.accent, ["--sb" as string]: b.bg } as React.CSSProperties}>
              <div className="show-info">
                <div className="show-badge" style={{ background: b.accent, color: b.accentInk }}>{b.name[0]}</div>
                <h3>{b.name}</h3><p>{b.tag} · {b.area}</p>
                {it.soldBy && <p className="sold">Sold by {it.soldBy}</p>}
                <div className="show-tiles">{it.results.map((r) => <div key={r}><b>{r.split(" · ")[0]}</b><small>{r.split(" · ")[1] ?? ""}</small></div>)}</div>
                <div className="chips">{it.chips.map((c) => <span key={c} className="chip">{c}</span>)}</div>
                <span className="ex-chip" style={{ marginTop: 18 }}>Example project · illustrative numbers</span>
              </div>
              <div className="show-vis">
                <div className="show-site">{it.viz ? <Viz spec={it.viz} /> : <SiteInBrowser k={it.brand} />}</div>
                <div className="show-phone"><AppInPhone k={it.brand} kind={it.phone ?? s.phone} />{it.moment && <small className="moment">{it.moment}</small>}</div>
              </div>
            </div>
          ),
        };
      })} />
    </div></section>
  );
}

export function DeepDive({ eyebrow, head, tabs }: { eyebrow: string; head: string; tabs: Page["tabs"] }) {
  return (
    <section className="sec-tight"><div className="panel dd-panel"><div className="w">
      <Head dark eyebrow={eyebrow} title={head} />
      <Tabs dark numbered rowClass="dd-tabs" items={tabs.map((t) => ({
        label: t.tab,
        content: (
          <div className="dd-grid">
            <div className="dd-copy">
              <span className="chip">{t.chip}</span>
              <h3>{t.h}</h3><p>{t.p}</p>
              <div className="fine">{t.fine}</div>
              <div className="dd-acts"><BookBtn /></div>
            </div>
            <div className="dd-vis" data-nosnippet><Viz spec={t.viz} /></div>
          </div>
        ),
      }))} />
    </div></div></section>
  );
}

function Dots({ c }: { c: string }) {
  const [a, b = ""] = c.split(" ");
  const dark = (a.match(/●/g) || []).length, light = (a.match(/○/g) || []).length + (b.match(/[●○]/g) || []).length;
  return <span className="dots" aria-label={`${dark} out of ${dark + light}`}>{"●".repeat(dark)}<i>{"●".repeat(light)}</i></span>;
}
export function Compare({ eyebrow, head, lead, rows, note }: { eyebrow: string; head: string; lead?: string; rows: string[][]; note?: string }) {
  if (!rows.length) return null;
  const [h, ...body] = rows;
  const rec = h.findIndex((c) => /most chosen|recommended/i.test(c));
  const cell = (c: string, th = false) => {
    const m = c.match(/^(.*?)(Most chosen|Recommended)\s*(.*)$/);
    if (m) return <>{m[1].trim()} <span className="badge2">{m[2]}</span>{m[3] && <small>{m[3]}</small>}</>;
    const split = th ? c.match(/^(\S+(?:\s\S+)?(?:\s\(\w+\))?)\s+(.*)$/) : null;
    return split && c.length > 24 ? <>{split[1]}<small>{split[2]}</small></> : c;
  };
  return (
    <section className="sec"><div className="w">
      <Head eyebrow={eyebrow} title={head} lead={lead} />
      <div className="tt rv"><table>
        <thead><tr>{h.map((c, i) => <th key={i} className={i === rec ? "rec" : ""} scope="col">{cell(c, true)}</th>)}</tr></thead>
        <tbody>{body.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} className={j === rec ? "rec" : ""}>{/^[●○]+( [●○]+)?$/.test(c) ? <Dots c={c} /> : c}</td>)}</tr>)}</tbody>
      </table></div>
      {note && <span className="note">{note}</span>}
    </div></section>
  );
}

export function Process({ eyebrow, head, steps }: { eyebrow: string; head: string; steps: Page["proc"] }) {
  return (
    <section className="sec"><div className="w">
      <Head eyebrow={eyebrow} title={head} />
      <ol className="proc-track">
        {steps.map((s, i) => (
          <li key={i} className={`proc-card rv ${i === 2 ? "dark" : ""}`} style={{ transitionDelay: `${i * 70}ms` }}>
            <div className="proc-wk"><span>{s.wk}</span><b>{s.when}</b></div>
            <h4>{s.title}</h4><p>{s.p}</p>
          </li>
        ))}
      </ol>
    </div></section>
  );
}

export function Pricing({ p, id = "pricing" }: { p: Page; id?: string }) {
  return (
    <section className="sec-tight" id={id}><div className="panel"><div className="w sec">
      <Head dark eyebrow={p.priceEyebrow} title={p.priceH2} lead={p.priceLead} />
      <div className="pgrid">
        {p.tiers.map((t, i) => (
          <div key={i} className={`pr rv ${t.hot ? "hot" : ""}`} style={{ transitionDelay: `${i * 90}ms` }}>
            <span className="k">{t.k}</span><h4>{t.name}</h4><p>{t.desc}</p>
            <div className="amt"><small>{/^(free)$/i.test(t.amt) ? "" : "from"}</small>{t.amt}{t.unit && <small>{t.unit}</small>}</div>
            <ul>{t.items.map((x) => <li key={x}>{x}</li>)}</ul>
            <a className={`btn ${t.hot ? "btn-ink" : "btn-ink"}`} href="#book">{t.hot ? "Book a free call" : "Get a quote"}</a>
          </div>
        ))}
      </div>
      <div className="aff"><b>What changes the price:</b>{p.affects.map((a) => <span key={a}>{a}</span>)}</div>
      <span className="note">Prices exclude 5% VAT. Your exact price comes in writing within 48 hours.</span>
    </div></div></section>
  );
}

export function FaqSection({ eyebrow, head, items }: { eyebrow: string; head: string; items: { q: string; a: string }[] }) {
  return (
    <section className="sec"><div className="w faq-grid">
      <div className="rv"><Eyebrow>{eyebrow}</Eyebrow><h2 className="h2">{head}</h2></div>
      <div className="rv"><Faq items={items} /></div>
    </div></section>
  );
}

export function GuidesBlock({ guides }: { guides?: { slug: string; title: string }[] }) {
  const live = new Set(published().map((g) => g.slug));
  guides = guides?.filter((g) => live.has(g.slug));
  if (!guides?.length) return null;
  return (
    <section className="sec-tight"><div className="w">
      <div className="guides-blk rv"><b>Guides on this topic</b>
        <ul>{guides.map((g) => <li key={g.slug}><Link href={`/guides/${g.slug}`}>{g.title} <span className="arrow">→</span></Link></li>)}</ul></div>
    </div></section>
  );
}

export function Related({ eyebrow, head, items, ind }: { eyebrow: string; head: string; items: Page["related"]; ind?: string[] }) {
  return (
    <section className="sec"><div className="w">
      <Head eyebrow={eyebrow} title={head} />
      <div className="rgrid">
        {items.map((r) => (
          <Link key={r.name} href={r.href} className="rc rv" data-cursor="Open">
            <span className="k">{r.k}</span><h4>{r.name}</h4><p>{r.p}</p><span className="go">Explore →</span>
          </Link>
        ))}
      </div>
      {ind && <div className="ind-row"><b>Built for:</b>{ind.map((x) => <span key={x}>{x}</span>)}</div>}
    </div></section>
  );
}

export function CaseStudy({ c }: { c: NonNullable<Page["caseStudy"]> }) {
  const b = BRANDS[c.brand];
  return (
    <section className="sec-tight"><div className="panel case-panel" style={{ ["--cg" as string]: b.accent } as React.CSSProperties}><div className="w sec">
      <div className="case-grid">
        <div className="case-copy rv">
          <Eyebrow>{c.label}</Eyebrow>
          <h2 className="h2">{c.h}</h2>
          <span className="ex-chip">Example project · illustrative numbers</span>
          <dl>
            <dt>The problem</dt><dd>{c.problem}</dd>
            <dt>What we built</dt><dd>{c.built}</dd>
          </dl>
          <div className="case-metrics">{c.metrics.map(([n, l]) => <div key={l}><b>{n}</b><small>{l}</small></div>)}</div>
          <blockquote className="case-q">“{c.quote}”<cite>{c.by}</cite></blockquote>
        </div>
        <div className="case-vis" data-nosnippet>
          <div className="case-a"><Viz spec={c.viz} /></div>
          <div className="case-b"><Viz spec={c.viz2} /></div>
        </div>
      </div>
    </div></div></section>
  );
}

export function CtaSection({ h, lead, steps, wa }: { h: string; lead: string; steps: string[]; wa: string }) {
  const [a, b] = h.split(/\s(?=\d+ minutes)/);
  return (
    <section className="sec-tight" id="book"><div className="panel"><div className="w cta-panel">
      <div className="rv">
        <h2 className="cta-h">{b ? <>{a} <em>{b.match(/^\d+ minutes/)?.[0]}</em>{b.replace(/^\d+ minutes/, "")}</> : h}</h2>
        <p className="lead">{lead}</p>
        <ol className="cta-steps">{steps.map((s) => <li key={s}>{s}</li>)}</ol>
        <WaBtn text={wa} />
      </div>
      <div className="rv"><Booking /></div>
    </div></div></section>
  );
}

export function Journey({ j }: { j: NonNullable<Page["journey"]> }) {
  return (
    <section className="sec" id="journey"><div className="w">
      <Head eyebrow="What we build" title={j.head} lead={j.lead} />
      <Tabs autoplay={7000} numbered arrows items={j.steps.map((s, i) => ({
        label: s.tab,
        content: (
          <div className={`jr-stage s${i % 5}`}>
            <div className="jr-copy">
              <span className="mono" style={{ fontSize: 12, opacity: 0.6 }}>STEP {String(i + 1).padStart(2, "0")}</span>
              <h3>{s.h}</h3><p>{s.story}</p>
              <div className="jr-res">{s.results.map(([n, l]) => <div key={l}><b>{n}</b><small>{l}</small></div>)}</div>
              <div className="chips">{s.chips.map((c) => <span className="chip" key={c}>{c}</span>)}</div>
            </div>
            <div className="jr-vis" data-nosnippet>
              <Viz spec={s.viz} />
              {s.viz2 && <div className="jr-v2"><Viz spec={s.viz2} /></div>}
              {s.card && <div className="fcard" style={{ left: "-2%", bottom: "2%" }}><span className="ic">✓</span><div>{s.card.title}{s.card.sub && <small>{s.card.sub}</small>}</div></div>}
            </div>
          </div>
        ),
      }))} />
      <div style={{ marginTop: 18 }}><span className="ex-chip" style={{ background: "var(--soft)", color: "var(--mute)" }}>Example project · illustrative numbers</span></div>
    </div></section>
  );
}
