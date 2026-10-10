import { SiteInBrowser, AppInPhone, StoreInBrowser } from "./BrandMocks";

export type Msg = { w: "in" | "out"; t: string; time?: string; ar?: boolean; link?: string };
export type VizSpec =
  | { t: "chat"; name: string; sub?: string; color?: string; day?: string; msgs: Msg[] }
  | { t: "dash"; title: string; sub?: string; dark?: boolean; kpis: [string, string, string?][]; rows?: string[][]; head?: string[] }
  | { t: "bars"; title: string; sub?: string; dark?: boolean; rows: [string, number, string, string?][] }
  | { t: "steps"; title: string; sub?: string; dark?: boolean; steps: [string, string, ("p" | "x")?][] }
  | { t: "code"; file: string; lines: string[]; dark?: boolean }
  | { t: "doc"; title: string; sub?: string; lines: [string, string][]; total: [string, string] }
  | { t: "serp"; query: string; items: [string, string, string][]; dark?: boolean }
  | { t: "phone"; k: string; kind: "home" | "detail" | "status" | "checkout" | "tracking" | "lock" | "loyalty" }
  | { t: "site"; k: string }
  | { t: "store"; k: string };

export function WAChat({ name, sub = "online", color, day = "Today", msgs }: { name: string; sub?: string; color?: string; day?: string; msgs: Msg[] }) {
  return (
    <div className="wa" data-nosnippet aria-hidden>
      <div className="wa-h"><div className="wa-av" style={{ ["--c" as string]: color }}>{name[0]}</div><div>{name}<small>{sub}</small></div></div>
      <div className="wa-b">
        <div className="wa-day">{day}</div>
        {msgs.map((m, i) => (
          <div key={i} className={`wa-m ${m.w} ${m.ar ? "ar" : ""}`}>
            {m.t}{m.link && <span className="wa-link">{m.link}</span>}<time>{m.time ?? "11:42"}</time>
          </div>
        ))}
      </div>
    </div>
  );
}

const tagOf = (c: string) => {
  const m = c.match(/^(g|r|y|l|b)\|(.*)$/);
  return m ? <span className={`tag ${m[1]}`}>{m[2]}</span> : c;
};

export function Viz({ spec }: { spec: VizSpec }) {
  switch (spec.t) {
    case "chat": return <WAChat {...spec} />;
    case "phone": return <div style={{ maxWidth: 270, margin: "0 auto" }}><AppInPhone k={spec.k} kind={spec.kind} /></div>;
    case "site": return <SiteInBrowser k={spec.k} />;
    case "store": return <StoreInBrowser k={spec.k} />;
    case "dash":
      return (
        <div className={`viz ${spec.dark ? "vdark" : ""}`} data-nosnippet aria-hidden>
          <div className="viz-h">{spec.title}<small>{spec.sub}</small></div>
          <div className="viz-b">
            <div className="kpis">{spec.kpis.map(([l, v, d]) => <div className="kpi" key={l}><small>{l}</small><b>{v}</b>{d && <em>{d}</em>}</div>)}</div>
            {spec.head && <div className="vrow" style={{ opacity: 0.55, font: "600 11px var(--font-mono)" }}>{spec.head.map((h) => <span key={h}>{h}</span>)}</div>}
            {spec.rows?.map((r, i) => <div className="vrow" key={i}>{r.map((c, j) => <span key={j}>{j === 0 ? <b>{c}</b> : tagOf(c)}</span>)}</div>)}
          </div>
        </div>
      );
    case "bars":
      return (
        <div className={`viz ${spec.dark ? "vdark" : ""}`} data-nosnippet aria-hidden>
          <div className="viz-h">{spec.title}<small>{spec.sub}</small></div>
          <div className="viz-b bars">{spec.rows.map(([l, v, t, c]) => <div className="bar" key={l}><span style={{ textAlign: "left", opacity: 1 }}>{l}</span><i style={{ ["--v" as string]: v + "%", ["--c" as string]: c }} /><span>{t}</span></div>)}</div>
        </div>
      );
    case "steps":
      return (
        <div className={`viz ${spec.dark ? "vdark" : ""}`} data-nosnippet aria-hidden>
          <div className="viz-h">{spec.title}<small>{spec.sub}</small></div>
          <div className="viz-b tline">{spec.steps.map(([l, s, st]) => <div key={l} className={`tstep ${st ?? ""}`}>{l}<small>{s}</small></div>)}</div>
        </div>
      );
    case "code":
      return (
        <div className="viz vdark" data-nosnippet aria-hidden>
          <div className="viz-h">{spec.file}<small>● ● ●</small></div>
          <div className="code">{spec.lines.map((l, i) => l.startsWith("+") ? <span key={i} className="a">{l}</span> : l.startsWith("-") ? <span key={i} className="d">{l}</span> : l.startsWith("//") ? <span key={i} className="c">{l + "\n"}</span> : <span key={i}>{l + "\n"}</span>)}</div>
        </div>
      );
    case "doc":
      return (
        <div className="viz" data-nosnippet aria-hidden>
          <div className="viz-h">{spec.title}<small>{spec.sub}</small></div>
          <div className="viz-b">{spec.lines.map(([a, b]) => <div className="doc-l" key={a}><span>{a}</span><b>{b}</b></div>)}<div className="doc-l t"><span>{spec.total[0]}</span><span>{spec.total[1]}</span></div></div>
        </div>
      );
    case "serp":
      return (
        <div className={`viz ${spec.dark ? "vdark" : ""}`} data-nosnippet aria-hidden>
          <div className="viz-h">🔍 {spec.query}<small>Dubai</small></div>
          <div className="viz-b serp">{spec.items.map(([t, u, d]) => <div className="serp-i" key={t}><small>{u}</small><b>{t}</b><span>{d}</span></div>)}</div>
        </div>
      );
  }
}

export function FCard({ icon = "✓", title, sub, style, dark, className = "" }: { icon?: string; title: string; sub?: string; style?: React.CSSProperties; dark?: boolean; className?: string }) {
  return (
    <div className={`fcard ${dark ? "dk" : ""} ${className}`} style={style} data-nosnippet aria-hidden>
      <span className="ic">{icon}</span><div>{title}{sub && <small>{sub}</small>}</div>
    </div>
  );
}
