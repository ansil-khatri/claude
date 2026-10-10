"use client";
import { useEffect, useMemo, useState } from "react";
import { aed, deliveryCommission, gatewayFees, einvoiceDeadline, readinessScore, appCost, APP_FEATURES, APP_BASE, type Band } from "@/lib/calcs";
import { waLink } from "@/config/site";
import { track } from "@/components/shell/Analytics";

const Slider = ({ id, label, v, set, min, max, step = 1, fmt = (x: number) => String(x) }: { id: string; label: string; v: number; set: (n: number) => void; min: number; max: number; step?: number; fmt?: (n: number) => string }) => (
  <div className="fld"><label htmlFor={id}>{label}<b>{fmt(v)}</b></label><input id={id} type="range" min={min} max={max} step={step} value={v} onChange={(e) => set(+e.target.value)} /></div>
);

export function DeliveryCalc() {
  const [o, setO] = useState(512), [a, setA] = useState(138), [c, setC] = useState(30), [p, setP] = useState(2640), [d, setD] = useState(30);
  const r = useMemo(() => deliveryCommission({ ordersPerMonth: o, avgOrder: a, commissionPct: c, promoPerMonth: p, directSharePct: d }), [o, a, c, p, d]);
  const share = r.appSalesYear ? Math.min(100, (r.commissionYear / r.appSalesYear) * 100) : 0;
  return (
    <div className="tool">
      <div className="tool-in">
        <Slider id="o" label="Orders per month on delivery apps" v={o} set={setO} min={0} max={3000} step={10} />
        <Slider id="a" label="Average order (AED)" v={a} set={setA} min={20} max={500} fmt={aed} />
        <Slider id="c" label="Commission %" v={c} set={setC} min={10} max={40} fmt={(x) => x + "%"} />
        <Slider id="p" label="Promo spend per month (AED)" v={p} set={setP} min={0} max={20000} step={100} fmt={aed} />
        <Slider id="d" label="% of app customers who'd reorder direct" v={d} set={setD} min={0} max={100} fmt={(x) => x + "%"} />
        <span className="ex-chip" style={{ background: "var(--soft)", color: "var(--mute)" }}>Estimate · your contract may differ</span>
      </div>
      <div className="tool-out" aria-live="polite">
        <div className="res-lbl">Last 12 months to delivery apps</div><div className="res-big">{aed(r.commissionYear)}</div>
        <div className="cmp-bar"><i style={{ width: share + "%", background: "#ff6b5b" }} /></div>
        <div className="res-line"><span>App sales a year</span><b>{aed(r.appSalesYear)}</b></div>
        <div className="res-lbl" style={{ marginTop: 18 }}>If {d}% of regulars ordered direct, you&apos;d keep</div><div className="res-big">{aed(r.keptYear)}</div><div className="res-lbl">a year (card fees ≈ 2.9% already deducted)</div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
          <a className="btn btn-lime" href="/industries/restaurants/online-ordering">See how restaurants keep this</a>
          <a className="btn btn-line" href={waLink(`Hi, my delivery apps cost me ${aed(r.commissionYear)} a year. Send me this result.`)} target="_blank" rel="noopener">Send me this result</a>
        </div>
      </div>
    </div>
  );
}

export function GatewayCalc() {
  const [s, setS] = useState(150000), [n, setN] = useState(500), [i, setI] = useState(10), [b, setB] = useState(false);
  const rows = useMemo(() => gatewayFees({ sales: s, payments: n, intlSharePct: i }), [s, n, i]);
  return (
    <div className="tool">
      <div className="tool-in">
        <Slider id="s" label="Monthly card sales (AED)" v={s} set={setS} min={0} max={1000000} step={5000} fmt={aed} />
        <Slider id="n" label="Payments per month" v={n} set={setN} min={0} max={10000} step={50} />
        <Slider id="i" label="International cards" v={i} set={setI} min={0} max={100} fmt={(x) => x + "%"} />
        <div className="fld"><label>Need Tabby / Tamara?</label><div className="opt-row"><button className="opt" aria-pressed={b} onClick={() => setB(!b)}>{b ? "Yes" : "No"}</button></div></div>
        <span className="note">Rates from public 2026 provider and comparison pages, checked October 2026. Check current pricing before you choose. Network International and Checkout.com: quote from provider.</span>
      </div>
      <div className="tool-out">
        <table className="gw"><thead><tr><th>Gateway</th><th>Monthly</th><th>Yearly</th></tr></thead>
          <tbody>
            {rows.map((r, k) => <tr key={r.name} className={k === 0 ? "best" : ""}><td>{r.name}<div style={{ fontSize: 12, color: "#8f8f96", fontWeight: 400 }}>{r.note}</div></td><td>{aed(r.monthly)}</td><td>{aed(r.yearly)}</td></tr>)}
            <tr><td>Network International (N-Genius)</td><td colSpan={2}>Quote from provider</td></tr>
            <tr><td>Checkout.com</td><td colSpan={2}>Quote from provider</td></tr>
            {b && <tr><td>Tabby / Tamara</td><td colSpan={2}>Ask the provider</td></tr>}
          </tbody></table>
        <p className="res-lbl" style={{ marginTop: 16 }}>Cheapest: <b style={{ color: "var(--lime)" }}>{rows[0].name}</b>, about {aed(rows[rows.length - 1].yearly - rows[0].yearly)} a year less than the most expensive of these four.</p>
        <a className="btn btn-lime" style={{ marginTop: 16 }} href="/services/payment-integration">Set it up properly</a>
      </div>
    </div>
  );
}

const QUESTIONS: { k: string; q: string; opts: [string, string][] }[] = [
  { k: "band", q: "What's your yearly revenue?", opts: [["under50m", "Under AED 50 million"], ["50m+", "AED 50 million or more"]] },
  { k: "volume", q: "How many invoices do you issue a month?", opts: [["s", "Under 100"], ["m", "100–1,000"], ["l", "Over 1,000"]] },
  { k: "sources", q: "Where do your invoices come from?", opts: [["one", "One system"], ["two", "Two systems"], ["many", "Three or more, or Excel"]] },
  { k: "softwareReady", q: "Does your accounting software support UAE e-invoicing?", opts: [["yes", "Yes, confirmed"], ["unsure", "Not sure"], ["no", "No"]] },
  { k: "trnsComplete", q: "How many customers have a TRN in your system?", opts: [["all", "All of them"], ["most", "Most"], ["few", "Few or none"]] },
  { k: "aspChosen", q: "Have you chosen an Accredited Service Provider?", opts: [["yes", "Yes"], ["no", "Not yet"]] },
  { k: "entities", q: "How many legal entities issue invoices?", opts: [["one", "One"], ["many", "Several"]] },
  { k: "owner", q: "Is one person responsible for e-invoicing?", opts: [["yes", "Yes"], ["no", "No"]] },
  { k: "type", q: "Who do you invoice?", opts: [["b2b", "Mostly businesses (B2B)"], ["b2c", "Mostly consumers (B2C)"], ["both", "Both"]] },
  { k: "tested", q: "Have you tested invoices through an ASP?", opts: [["yes", "Yes"], ["no", "No"]] },
];

export function Readiness() {
  const [i, setI] = useState(0);
  const [ans, setAns] = useState<Record<string, string>>({});
  const done = i >= QUESTIONS.length;
  useEffect(() => { if (done) track("einvoice_check_completed"); }, [done]);
  const pick = (k: string, v: string) => { setAns((a) => ({ ...a, [k]: v })); setI((x) => x + 1); };
  if (!done) {
    const q = QUESTIONS[i];
    return (
      <div className="tool-in" style={{ maxWidth: 720, margin: "0 auto" }}>
        <div className="q-step" role="tablist" aria-label="Progress">QUESTION {i + 1} OF {QUESTIONS.length}</div>
        <div className="q-bar"><i style={{ width: (i / QUESTIONS.length) * 100 + "%" }} /></div>
        <h2 className="q-h">{q.q}</h2>
        <div className="q-opts">{q.opts.map(([v, l]) => <button key={v} onClick={() => pick(q.k, v)}>{l}</button>)}</div>
        {i > 0 && <button className="btn btn-sm" style={{ marginTop: 18, color: "var(--mute)" }} onClick={() => setI(i - 1)}>← Back</button>}
        <p className="note"><span className="ex-chip" style={{ background: "var(--soft)", color: "var(--mute)" }}>Guidance, not legal advice</span></p>
      </div>
    );
  }
  const band = (ans.band ?? "under50m") as Band;
  const dl = einvoiceDeadline(band);
  const r = readinessScore({ ...ans, sources: ans.sources === "many" ? "many" : ans.sources });
  return (
    <div className="tool">
      <div className="tool-out" style={{ position: "static" }}>
        <div className="res-lbl">Your readiness score</div>
        <div className="ring" style={{ ["--p" as string]: r.score } as React.CSSProperties}><b>{r.score}</b></div>
        <div className="res-line"><span>Appoint an ASP by</span><b>{dl.asp}</b></div>
        <div className="res-line"><span>Go live</span><b>{dl.live}</b></div>
        {ans.type === "b2c" && <p className="res-lbl" style={{ marginTop: 12 }}>B2C sales are not covered yet as of our last check (October 2026). Re-check before relying on this.</p>}
        <p className="res-lbl" style={{ marginTop: 14 }}>We&apos;re an integration partner, not an ASP. Dates per Ministry of Finance, checked October 2026.</p>
      </div>
      <div className="tool-in">
        <h3 style={{ font: "800 26px var(--font-sans)", letterSpacing: "-.04em" }}>Your personal checklist</h3>
        {r.todo.length ? <ul className="todo" style={{ color: "var(--ink)" }}>{r.todo.map((t) => <li key={t} style={{ color: "var(--ink2)" }}>{t}</li>)}</ul> : <p>Nothing left on the list. Go live early and monitor rejections.</p>}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 22 }}>
          <a className="btn btn-ink" href="/services/e-invoicing-integration">See e-invoicing integration</a>
          <a className="btn btn-line" href={waLink(`Hi, my e-invoicing readiness score is ${r.score}/100. Can you help?`)} target="_blank" rel="noopener">WhatsApp me</a>
          <button className="btn btn-line" onClick={() => { setI(0); setAns({}); }}>Start again</button>
        </div>
        <p className="note">Nothing is stored. Results are not saved unless you opt in later.</p>
      </div>
    </div>
  );
}

const TYPES: [string, string][] = [["booking", "Booking"], ["ordering", "Ordering"], ["delivery", "Delivery"], ["loyalty", "Loyalty"], ["marketplace", "Marketplace"], ["internal", "Internal tool"]];
const FEATS: [string, string][] = [["payments", "Payments"], ["tabby", "Tabby"], ["tracking", "Live tracking"], ["chat", "Chat"], ["admin", "Admin dashboard"], ["arabic", "Arabic"], ["integrations", "Integrations"]];
export function AppCalc() {
  const [type, setType] = useState("booking"), [platforms, setP] = useState("both"), [features, setF] = useState<string[]>([]), [design, setD] = useState("template");
  const r = appCost({ type, platforms, features, design });
  useEffect(() => { const t = setTimeout(() => track("calculator_completed", { tool: "app_cost" }), 1500); return () => clearTimeout(t); }, [type, platforms, features, design]);
  return (
    <div className="tool">
      <div className="tool-in">
        <div className="fld"><label>App type</label><div className="opt-row">{TYPES.map(([k, l]) => <button key={k} className="opt" aria-pressed={type === k} onClick={() => setType(k)}>{l}</button>)}</div></div>
        <div className="fld"><label>Platforms</label><div className="opt-row">{[["one", "One platform"], ["both", "iPhone + Android"]].map(([k, l]) => <button key={k} className="opt" aria-pressed={platforms === k} onClick={() => setP(k)}>{l}</button>)}</div></div>
        <div className="fld"><label>Features</label><div className="opt-row">{FEATS.map(([k, l]) => <button key={k} className="opt" aria-pressed={features.includes(k)} onClick={() => setF((x) => x.includes(k) ? x.filter((y) => y !== k) : [...x, k])}>{l}</button>)}</div></div>
        <div className="fld"><label>Design</label><div className="opt-row">{[["template", "Template-based"], ["custom", "Custom in Figma"]].map(([k, l]) => <button key={k} className="opt" aria-pressed={design === k} onClick={() => setD(k)}>{l}</button>)}</div></div>
        <span className="ex-chip" style={{ background: "var(--soft)", color: "var(--mute)" }}>Estimate · fixed price after a 30-minute call</span>
      </div>
      <div className="tool-out" aria-live="polite">
        <div className="res-lbl">Estimated build cost</div><div className="res-big">{aed(r.low)} – {aed(r.high)}</div><div className="res-lbl">about {r.weeks} weeks · excl. 5% VAT</div>
        <h4 style={{ margin: "22px 0 4px", font: "700 14px var(--font-sans)" }}>What&apos;s driving it</h4>
        <div className="res-line"><span>{TYPES.find((t) => t[0] === type)![1]} app base</span><b>{aed(APP_BASE[type])}</b></div>
        {features.map((f) => <div className="res-line" key={f}><span>{FEATS.find((x) => x[0] === f)![1]}</span><b>+{aed(APP_FEATURES[f])}</b></div>)}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 22 }}>
          <a className="btn btn-lime" href="/#book">Get a fixed price in 30 minutes</a>
          <a className="btn btn-line" href={waLink(`Hi, the app cost calculator says ${aed(r.low)}–${aed(r.high)}. Can we talk?`)} target="_blank" rel="noopener">WhatsApp us the range</a>
        </div>
      </div>
    </div>
  );
}
