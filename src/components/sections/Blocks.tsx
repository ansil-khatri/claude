import Link from "next/link";
import { Visual } from "@/components/mock/Visual";
import { BookBtn, WaBtn } from "@/components/ui/Buttons";
import { CountUp } from "@/components/ui/CountUp";
import type { Section } from "@content/v3/types";
import type { Block } from "@content/guides";

export const slugify = (s: string) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function SecHead({ eyebrow, h, lead }: { eyebrow: string; h: string; lead?: string }) {
  return (
    <div className="sh">
      <span className="label" data-reveal="fade">{eyebrow}</span>
      <h2 className="display h2" data-split="lines">{h}</h2>
      {lead && <p className="lead" data-reveal>{lead}</p>}
    </div>
  );
}

export function Crumbs({ trail }: { trail: [string, string?][] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {trail.map(([l, h], i) => (
        <span key={l} style={{ display: "contents" }}>{i > 0 && <i>/</i>}{h ? <Link href={h}>{l}</Link> : <span>{l}</span>}</span>
      ))}
    </nav>
  );
}

export function Marquee({ items, alt = false, dir = -1 }: { items: string[]; alt?: boolean; dir?: 1 | -1 }) {
  return <div className={`marq ${alt ? "alt" : ""}`} data-marquee data-dir={dir} aria-hidden><div className="marq-in">{items.map((t) => <span key={t}>{t}</span>)}</div></div>;
}

export function CtaBand({ h, lead, wa }: { h: string; lead: string; wa: string }) {
  return (
    <section className="cta themed t-paper" style={{ background: "var(--parrot)" }}>
      <div className="w sec">
        <span className="label" style={{ color: "rgba(4,18,10,.7)" }}>Start a project</span>
        <h2 className="display h1" data-split="lines" style={{ margin: "26px 0" }}>{h}</h2>
        <p className="lead" data-reveal>{lead}</p>
        <div className="cta-row" style={{ marginTop: 40 }} data-reveal>
          <Link className="btn btn-k" href="/contact" data-magnetic>Start a project <i className="arr">→</i></Link>
          <WaBtn text={wa} label="WhatsApp us" />
        </div>
      </div>
    </section>
  );
}

const tone = ["t-dark", "t-coal", "t-paper"] as const;

/** Renders one typed Section from the content layer. `i` rotates the surface so a long page keeps rhythm. */
export function SectionView({ s, i, brand }: { s: Section; i: number; brand?: string }) {
  const t = s.k === "split" ? (i % 2 ? "t-coal" : "t-dark") : s.k === "process" || s.k === "pricing" ? "t-paper" : s.k === "numbers" ? "t-dark" : tone[i % 2];
  switch (s.k) {
    case "split":
      return (
        <section className={`sec themed ${t}`}><div className={`w split ${s.flip ? "flip" : ""}`}>
          <div><span className="label" data-reveal="fade">{s.eyebrow}</span><h2 className="display h3" data-split="lines">{s.h}</h2><p className="big" data-reveal>{s.p}</p>
            {s.bullets && <ul className="bul" data-stagger>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}{s.fine && <span className="fine">{s.fine}</span>}</div>
          <div className="vis" data-reveal="clip"><Visual id={s.visual} brand={brand} /></div>
        </div></section>
      );
    case "bento":
      return (
        <section className={`sec themed ${t}`}><div className="w">
          <SecHead eyebrow={s.eyebrow} h={s.h} lead={s.lead} />
          <div className="bento" data-stagger>{s.tiles.map((x, n) => (
            <article key={x.t} className={`bt ${x.span === 2 ? "s2" : ""} ${x.visual ? "has-v" : ""}`}>
              <div><span className="bt-n">{String(n + 1).padStart(2, "0")}</span><h3 style={{ marginTop: 14 }}>{x.t}</h3><p>{x.p}</p></div>
              {x.visual && <div className="bt-v"><Visual id={x.visual} brand={brand} /></div>}
            </article>
          ))}</div>
        </div></section>
      );
    case "process":
      return (
        <section className={`sec themed ${t}`}><div className="w">
          <SecHead eyebrow={s.eyebrow} h={s.h} lead={s.lead} />
          <ol className="steps" data-stagger>{s.steps.map((x) => <li className="step" key={x.t}><span className="wk">{x.wk}</span><h3>{x.t}</h3><p>{x.p}</p></li>)}</ol>
        </div></section>
      );
    case "compare":
      return (
        <section className={`sec themed ${t}`}><div className="w">
          <SecHead eyebrow={s.eyebrow} h={s.h} lead={s.lead} />
          <div className="tbl" data-reveal><table><thead><tr>{s.head.map((c, n) => <th key={n} className={n === s.head.length - 1 ? "us" : ""}>{c}</th>)}</tr></thead>
            <tbody>{s.rows.map((r, n) => <tr key={n}>{r.map((c, m) => m === 0 ? <td key={m}>{c}</td> : <td key={m} className={m === r.length - 1 ? "us" : ""}>{c}</td>)}</tr>)}</tbody></table></div>
          {s.note && <p className="sec-note">{s.note}</p>}
        </div></section>
      );
    case "stack":
      return (
        <section className={`sec themed ${t}`}><div className="w">
          <SecHead eyebrow={s.eyebrow} h={s.h} lead={s.lead} />
          <div className="stack-g" data-stagger>{s.groups.map((g) => <div className="stack-c" key={g.name}><h3>{g.name}</h3><ul>{g.items.map((x) => <li key={x}>{x}</li>)}</ul></div>)}</div>
        </div></section>
      );
    case "numbers":
      return (
        <section className="sec-s themed t-dark"><div className="w"><div className="nums" data-stagger>{s.items.map((x) => (
          <div key={x.label}><b><CountUp to={x.n} prefix={x.prefix} suffix={x.suffix} /></b><span>{x.label}</span></div>
        ))}</div></div></section>
      );
    case "pricing":
      return (
        <section className={`sec themed ${t}`}><div className="w">
          <SecHead eyebrow={s.eyebrow} h={s.h} lead={s.lead} />
          <div className="tiers" data-stagger>{s.tiers.map((x) => (
            <article key={x.name} className={`tier ${x.hot ? "hot" : ""}`}><span className="k">{x.k}</span><h3>{x.name}</h3>
              <div className="amt">{x.amt}{x.unit && <small>{x.unit}</small>}</div><p>{x.desc}</p><ul>{x.items.map((it) => <li key={it}>{it}</li>)}</ul></article>
          ))}</div>
          {s.note && <p className="sec-note">{s.note}</p>}
        </div></section>
      );
  }
}

/** Article body blocks (shared with the reused guides). */
export function Prose({ body }: { body: Block[] }) {
  return (
    <div className="prose">
      {body.map((b, i) => {
        if ("h2" in b) return <h2 key={i} id={b.id ?? slugify(b.h2)}>{b.h2}</h2>;
        if ("h3" in b) return <h3 key={i}>{b.h3}</h3>;
        if ("p" in b) return <p key={i} dangerouslySetInnerHTML={{ __html: linkify(b.p) }} />;
        if ("ul" in b) return <ul key={i}>{b.ul.map((x, n) => <li key={n} dangerouslySetInnerHTML={{ __html: linkify(x) }} />)}</ul>;
        if ("ol" in b) return <ol key={i}>{b.ol.map((x, n) => <li key={n} dangerouslySetInnerHTML={{ __html: linkify(x) }} />)}</ol>;
        if ("check" in b) return <p key={i} className="callout">✓ {b.check}</p>;
        if ("tip" in b) return <p key={i} className="callout">{b.tip}</p>;
        if ("figure" in b) return (
          <div className="tbl" key={i}><table><caption style={{ textAlign: "left", font: "600 18px var(--font-display)", paddingBottom: 12 }}>{b.figure.title}</caption><tbody>{b.figure.rows.map(([a, c]) => <tr key={a}><td>{a}</td><td>{c}</td></tr>)}</tbody></table></div>
        );
        return (
          <div className="tbl" key={i}><table><thead><tr>{b.table.head.map((h) => <th key={h}>{h}</th>)}</tr></thead><tbody>{b.table.rows.map((r, n) => <tr key={n}>{r.map((c, m) => <td key={m}>{c}</td>)}</tr>)}</tbody></table></div>
        );
      })}
    </div>
  );
}
/** Minimal inline markdown: [text](/path) links and **bold**. Input is our own content, but escape angle brackets first. */
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const linkify = (s: string) => esc(s).replace(/\[([^\]]+)\]\((\/[^)\s]*|https?:\/\/[^)\s]+)\)/g, '<a href="$2">$1</a>').replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");

export function PageHero({ trail, kicker, h, dim, sub, children }: { trail: [string, string?][]; kicker: string; h: string; dim?: string; sub?: string; children?: React.ReactNode }) {
  return (
    <header className="ph-hero themed t-dark">
      <div className="w" style={{ position: "relative", zIndex: 2 }}>
        <Crumbs trail={trail} />
        <span className="label" style={{ marginTop: 34, display: "flex" }} data-intro>{kicker}</span>
        <h1 className="display" data-intro data-split="lines">{h}{dim && <> <span className="dim">{dim}</span></>}</h1>
        {sub && <p className="lead" data-intro>{sub}</p>}
        {children}
      </div>
    </header>
  );
}
