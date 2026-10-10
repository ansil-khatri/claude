"use client";
import { useEffect, useRef, useState } from "react";
import { BRANDS } from "@content/brands";
import { Viz, type VizSpec } from "@/components/mock/Viz";
import { SiteInBrowser, AppInPhone } from "@/components/mock/BrandMocks";
import { Head } from "@/components/sections/Blocks";
import { CountUp } from "@/components/ui/CountUp";

/** Two rows that slide in opposite directions with scroll. Transform only. */
export function StatementBand({ rows }: { rows: string[] }) {
  const a = useRef<HTMLDivElement>(null), b = useRef<HTMLDivElement>(null), box = useRef<HTMLElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const tick = () => {
      const r = box.current!.getBoundingClientRect(), vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
      a.current!.style.transform = `translate3d(${(-30 + p * 40)}vw,0,0)`;
      b.current!.style.transform = `translate3d(${(10 - p * 40)}vw,0,0)`;
    };
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(tick); };
    tick(); window.addEventListener("scroll", on, { passive: true }); window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); cancelAnimationFrame(raf); };
  }, []);
  const [r1, r2] = rows;
  return (
    <section ref={box} className="statement" aria-label={rows.join(" ")}>
      <div className="row" ref={a}>From first call to <em>App Store.</em> From first call to <em>App Store.</em></div>
      <div className="row" ref={b} style={{ marginTop: 10, opacity: 0.9 }}>{r2} {r2}</div>
      <span className="sr-only">{r1} {r2}</span>
    </section>
  );
}

type Step = { n: string; when: string; h: string; what: string; you: string; viz: VizSpec };
/** Sticky stage: the right column swaps the mockup as each step scrolls into view. */
export function HowItWorks({ steps }: { steps: Step[] }) {
  const [on, setOn] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) setOn(Number((e.target as HTMLElement).dataset.i)); }), { rootMargin: "-45% 0px -45% 0px" });
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <section className="sec" id="how"><div className="w">
      <Head eyebrow="How it works" title="Here's exactly what happens after you book a call." />
      <div className="how-grid">
        <ol className="how-steps">
          {steps.map((s, i) => (
            <li key={s.n} data-i={i} ref={(el) => { refs.current[i] = el; }} className={on === i ? "on" : ""}>
              <div className="how-n">{s.n}<span>{s.when}</span></div>
              <h3>{s.h}</h3>
              <p><b>What happens:</b> {s.what}</p><p><b>What you do:</b> {s.you}</p>
              <div className="how-inline" data-nosnippet><Viz spec={s.viz} /></div>
            </li>
          ))}
        </ol>
        <div className="how-stage" data-nosnippet>
          <div className="how-bar"><i style={{ transform: `scaleY(${(on + 1) / steps.length})` }} /></div>
          {steps.map((s, i) => <div key={i} className={`how-viz ${on === i ? "on" : ""}`}><Viz spec={s.viz} /></div>)}
        </div>
      </div>
      <div className="how-total"><b>About 12 weeks</b> from first call to launch for a typical website + app. Websites alone take 2–4 weeks; add-ons take days.</div>
    </div></section>
  );
}

export function Gallery({ keys, filters }: { keys: string[]; filters: string[] }) {
  const [f, setF] = useState("All");
  const shown = keys.filter((k) => f === "All" || BRANDS[k].industry === f);
  return (
    <section className="sec" id="work"><div className="w">
      <Head eyebrow="Our work" title="This is what we build." />
      <div className="tabs-row" role="group" aria-label="Filter projects" style={{ marginBottom: 18 }}>
        {filters.filter((x) => x === "All" || keys.some((k) => BRANDS[k].industry === x)).map((x) => (
          <button key={x} className="tab-btn" aria-selected={f === x} role="tab" onClick={() => setF(x)}>{x}</button>
        ))}
      </div>
      <span className="ex-chip" style={{ background: "var(--soft)", color: "var(--mute)", marginBottom: 22 }}>Example project · illustrative numbers</span>
      <div className="gal">
        {shown.map((k) => {
          const b = BRANDS[k];
          return (
            <article key={k} className="gal-card" data-cursor="View" style={{ ["--ga" as string]: b.accent } as React.CSSProperties}>
              <div className="gal-vis"><div className="gal-site"><SiteInBrowser k={k} /></div><div className="gal-phone"><AppInPhone k={k} kind="home" /></div></div>
              <div className="gal-info"><div><h3>{b.name}</h3><p>{b.tag} · {b.area}</p></div><span className="chip">{b.industry}</span></div>
            </article>
          );
        })}
      </div>
    </div></section>
  );
}

type Res = { brand: string; before: [string, string]; after: [string, string]; metric: [number, string, string, string] };
function Wipe({ r }: { r: Res }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="wipe-card">
      <div className="wipe-h"><b>{r.brand}</b><span className="wipe-m"><CountUp to={r.metric[0]} prefix={r.metric[2]} suffix={r.metric[1]} /> <small>{r.metric[3]}</small></span></div>
      <div className="wipe" style={{ ["--p" as string]: pos + "%" } as React.CSSProperties}>
        <div className="wipe-after"><span className="tg">AFTER</span><b>{r.after[0]}</b><p>{r.after[1]}</p></div>
        <div className="wipe-before"><span className="tg">BEFORE</span><b>{r.before[0]}</b><p>{r.before[1]}</p></div>
        <i className="wipe-line" />
        <input type="range" min={0} max={100} value={pos} aria-label={`Compare before and after for ${r.brand}`} onChange={(e) => setPos(+e.target.value)} />
      </div>
    </div>
  );
}
export function Results({ items }: { items: Res[] }) {
  return <div className="wipes">{items.map((r) => <Wipe key={r.brand} r={r} />)}</div>;
}
