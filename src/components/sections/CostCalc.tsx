"use client";
import { useState } from "react";
import { shopifyCost, aed, type Tier, type MigrationSize } from "@/lib/shopify-cost";
import { waLink } from "@/config/site";

const TIERS: [Tier, string][] = [["launch", "Launch store"], ["custom", "Custom theme"], ["plus", "Shopify Plus"]];
const MIG: [MigrationSize, string][] = [["none", "None"], ["small", "~500 products"], ["large", "~5,000 products"]];

export function CostCalc() {
  const [tier, setTier] = useState<Tier>("launch");
  const [arabic, setArabic] = useState(true);
  const [bnpl, setBnpl] = useState(true);
  const [migration, setMig] = useState<MigrationSize>("none");
  const [markets, setMarkets] = useState(0);
  const [integrations, setInt] = useState(0);
  const r = shopifyCost({ tier, arabic, bnpl, migration, markets, integrations });
  const msg = `Hi, I used your cost calculator: ${r.lines.map(([l]) => l).join(", ")}. Indicative ${aed(r.low)} to ${aed(r.high)}.`;
  return (
    <div className="calc">
      <div>
        <div className="fld"><label>Build type</label><div className="opt-row">{TIERS.map(([k, l]) => <button key={k} type="button" className="opt" aria-pressed={tier === k} onClick={() => setTier(k)}>{l}</button>)}</div></div>
        <div className="fld"><label>Arabic RTL storefront</label><div className="opt-row">{[true, false].map((v) => <button key={String(v)} type="button" className="opt" aria-pressed={arabic === v} onClick={() => setArabic(v)}>{v ? "Yes" : "English only"}</button>)}</div></div>
        <div className="fld"><label>Tabby and Tamara</label><div className="opt-row">{[true, false].map((v) => <button key={String(v)} type="button" className="opt" aria-pressed={bnpl === v} onClick={() => setBnpl(v)}>{v ? "Yes" : "No"}</button>)}</div></div>
        <div className="fld"><label>Migrating from another platform</label><div className="opt-row">{MIG.map(([k, l]) => <button key={k} type="button" className="opt" aria-pressed={migration === k} onClick={() => setMig(k)}>{l}</button>)}</div></div>
        <div className="fld"><label>Extra markets (SAR, KWD…) <b>{markets}</b></label><input type="range" min={0} max={5} value={markets} onChange={(e) => setMarkets(+e.target.value)} /></div>
        <div className="fld"><label>Integrations (ERP, CRM, 3PL…) <b>{integrations}</b></label><input type="range" min={0} max={6} value={integrations} onChange={(e) => setInt(+e.target.value)} /></div>
        <span className="note">Indicative only, from our published price book. Plus and custom tiers already include Arabic design. A fixed quote follows a free call.</span>
      </div>
      <aside className="calc-out" aria-live="polite">
        <small>Indicative range, excl. 5% VAT</small>
        <b>{aed(r.low)}<br />to {aed(r.high)}</b>
        <ul>{r.lines.map(([l, v]) => <li key={l}><span>{l}</span><span>{aed(v)}</span></li>)}<li><span>Typical timeline</span><span>{r.weeks} weeks</span></li><li><span>Floor incl. 5% VAT</span><span>{aed(r.vatLow)}</span></li></ul>
        <a className="btn btn-k" href={waLink(msg)} target="_blank" rel="noopener" data-wa="1">Send this to us on WhatsApp <i className="arr">→</i></a>
      </aside>
    </div>
  );
}
