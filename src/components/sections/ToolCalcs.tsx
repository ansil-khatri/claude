"use client";
import { useState } from "react";
import { websiteCost, replyRoi, erpVerdict, ERP_QUESTIONS, SITE_BASE, fmt, type SiteTier } from "@/lib/calc-tools";
import { waLink } from "@/config/site";
import { track } from "@/components/shell/Analytics";

const Pills = <T extends string | boolean>({ v, set, opts, name }: { v: T; set: (x: T) => void; opts: [T, string][]; name: string }) => (
  <div className="opt-row" role="group" aria-label={name}>{opts.map(([k, l]) => <button key={String(k)} type="button" className="opt" aria-pressed={v === k} onClick={() => { set(k); track("calculator_use", { tool: name }); }}>{l}</button>)}</div>
);
const Out = ({ small, big, rows, wa, foot }: { small: string; big: React.ReactNode; rows: [string, string][]; wa: string; foot?: string }) => (
  <aside className="calc-out" aria-live="polite"><small>{small}</small><b>{big}</b>
    <ul>{rows.map(([a, b]) => <li key={a}><span>{a}</span><span>{b}</span></li>)}</ul>
    {foot && <small style={{ textTransform: "none", letterSpacing: 0, fontSize: 13, opacity: .8 }}>{foot}</small>}
    <a className="btn btn-k" href={waLink(wa)} target="_blank" rel="noopener" data-wa="1">Send this to us on WhatsApp <i className="arr">→</i></a></aside>
);

export function WebsiteCostCalc() {
  const [tier, setTier] = useState<SiteTier>("business"); const [pages, setPages] = useState(8); const [arabic, setArabic] = useState(false); const [integrations, setInt] = useState(0); const [care, setCare] = useState(true);
  const r = websiteCost({ tier, pages, arabic, integrations, care });
  return (
    <div className="calc"><div>
      <div className="fld"><label>Type of website</label><Pills name="tier" v={tier} set={(x) => { setTier(x); setPages(SITE_BASE[x].pages); }} opts={(Object.keys(SITE_BASE) as SiteTier[]).map((k) => [k, SITE_BASE[k].name])} /></div>
      <div className="fld"><label>Number of pages <b>{pages}</b></label><input type="range" min={3} max={60} value={pages} onChange={(e) => setPages(+e.target.value)} /><span className="note">{r.included} pages are included in this tier.</span></div>
      <div className="fld"><label>Arabic version</label><Pills name="arabic" v={arabic} set={setArabic} opts={[[true, "Yes"], [false, "English only"]]} /></div>
      <div className="fld"><label>Integrations: payments, booking, CRM <b>{integrations}</b></label><input type="range" min={0} max={6} value={integrations} onChange={(e) => setInt(+e.target.value)} /></div>
      <div className="fld"><label>Monthly care plan (updates, backups, security)</label><Pills name="care" v={care} set={setCare} opts={[[true, "Yes"], [false, "No"]]} /></div>
      <span className="note">Indicative, from our published prices. Custom and shop tiers include Arabic design. A fixed quote follows a free call.</span>
    </div>
    <Out small="Indicative range, excl. 5% VAT" big={<>AED {fmt(r.low)}<br />to AED {fmt(r.high)}</>} rows={[...r.lines.map(([a, b]) => [a, `AED ${fmt(b)}`] as [string, string]), ["Typical timeline", `${r.weeks} weeks`], ...(r.care ? [["Care plan", `AED ${fmt(r.care)} per month`] as [string, string]] : [])]}
      wa={`Hi, I used your website cost calculator: ${SITE_BASE[tier].name}, ${pages} pages, AED ${fmt(r.low)} to ${fmt(r.high)}.`} /></div>
  );
}

export function ReplyRoiCalc() {
  const [perDay, setPerDay] = useState(40); const [rep, setRep] = useState(60); const [min, setMin] = useState(3); const [hourly, setHourly] = useState(45); const [auto, setAuto] = useState(70); const [build, setBuild] = useState(7900);
  const r = replyRoi({ perDay, repetitivePct: rep, minutes: min, hourly, autoPct: auto, build });
  const Row = ({ l, v, set, min: a, max: b, unit = "" }: { l: string; v: number; set: (n: number) => void; min: number; max: number; unit?: string }) => (
    <div className="fld"><label>{l} <b>{v}{unit}</b></label><input type="range" min={a} max={b} value={v} onChange={(e) => { set(+e.target.value); track("calculator_use", { tool: "reply-roi" }); }} /></div>);
  return (
    <div className="calc"><div>
      <Row l="WhatsApp messages per day" v={perDay} set={setPerDay} min={5} max={400} />
      <Row l="Share that are repeat questions" v={rep} set={setRep} min={10} max={100} unit="%" />
      <Row l="Minutes your team spends per reply" v={min} set={setMin} min={1} max={15} />
      <Row l="Cost of staff time per hour (AED)" v={hourly} set={setHourly} min={20} max={200} />
      <Row l="Share the assistant fully answers" v={auto} set={setAuto} min={20} max={90} unit="%" />
      <Row l="Build cost (AED)" v={build} set={setBuild} min={2900} max={29000} />
      <span className="note">Assumes 22 working days a month. Meta message fees and the platform fee are extra and depend on volume. Complaints, refunds and sensitive questions should always go to a person.</span>
    </div>
    <Out small="Estimated team time saved" big={<>{r.hours} hours<br />a month</>} rows={[["Messages answered automatically", `${r.handledPerDay} a day`], ["Value of that time", `AED ${fmt(r.value)} a month`], ["Build cost", `AED ${fmt(r.build)}`], ["Payback", r.payback === null ? "n/a" : `${r.payback} months`]]}
      wa={`Hi, I used your WhatsApp reply calculator: ${perDay} messages a day, about ${r.hours} hours saved a month.`} /></div>
  );
}

export function ErpChecker() {
  const [yes, setYes] = useState<boolean[]>(Array(ERP_QUESTIONS.length).fill(false));
  const v = erpVerdict(yes);
  return (
    <div className="calc"><div>
      <fieldset className="qf-f"><legend>Tick everything that is true for you</legend>
        <div className="chk">{ERP_QUESTIONS.map((q, i) => <button type="button" key={q} className="opt" aria-pressed={yes[i]} onClick={() => { setYes(yes.map((x, j) => (j === i ? !x : x))); track("calculator_use", { tool: "erp-checker" }); }}>{yes[i] ? "✓ " : ""}{q}</button>)}</div></fieldset>
      <span className="note">Eight questions, no email needed. This is a rule of thumb, not advice.</span>
    </div>
    <aside className="calc-out" aria-live="polite"><small>Your result · {v.score} of {ERP_QUESTIONS.length}</small><b style={{ fontSize: "clamp(32px,3.6vw,56px)" }}>{v.title}</b><p>{v.text}</p>
      <a className="btn btn-k" href={waLink(`Hi, I used your ERP vs Excel checker and scored ${v.score} of ${ERP_QUESTIONS.length}: ${v.title}.`)} target="_blank" rel="noopener" data-wa="1">Talk it through on WhatsApp <i className="arr">→</i></a></aside></div>
  );
}
