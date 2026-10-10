"use client";
import { useMemo, useState } from "react";
import { waLink } from "@/config/site";
import { sendLead } from "@/lib/lead";

const TIMES = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

function nextWeekdays(n: number) {
  const out: Date[] = [];
  const d = new Date();
  d.setHours(12, 0, 0, 0);
  while (out.length < n) { d.setDate(d.getDate() + 1); if (d.getDay() !== 0 && d.getDay() !== 6) out.push(new Date(d)); }
  return out;
}

/** Mon–Fri, 10:00 AM–5:00 PM Dubai time (GST). Posts to /api/lead (forwarded when LEAD_WEBHOOK_URL is set). */
export function Booking() {
  const days = useMemo(() => nextWeekdays(5), []);
  const [d, setD] = useState(0);
  const [t, setT] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [wa, setWa] = useState("");
  const [sent, setSent] = useState<boolean | null>(null);
  const [busy, setBusy] = useState(false);
  const dl = (x: Date) => x.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });

  if (done) {
    return (
      <div className="book" id="book-box">
        <div className="done">
          <b>✓</b>
          <h4>You&apos;re booked{name ? `, ${name}` : ""}.</h4>
          <p className="sub">{dl(days[d])} · {TIMES[t!]} Dubai time (GST) · Google Meet or in person in Dubai</p>
          <p className="sub" style={{ marginTop: 10 }}>{sent ? "We\u2019ll WhatsApp you a confirmation within the hour." : "We couldn\u2019t send this automatically. Please confirm it on WhatsApp so we hold the slot."}</p>
          {!sent && <p style={{ marginTop: 12 }}><a className="btn btn-lime btn-sm" href={waLink(`Hi, I'd like a call on ${dl(days[d])} at ${TIMES[t!]}. Name: ${name || "-"}`)} target="_blank" rel="noopener">Confirm on WhatsApp</a></p>}
        </div>
      </div>
    );
  }
  return (
    <div className="book" id="book-box">
      <h4>Book a free 30-minute call</h4>
      <p className="sub">Pick a time that works for you.</p>
      <div className="book-days" role="group" aria-label="Day">
        {days.map((x, k) => (
          <button key={k} aria-pressed={d === k} onClick={() => setD(k)}>
            <small>{x.toLocaleDateString("en-GB", { weekday: "short" }).toUpperCase()}</small><b>{x.getDate()}</b>
          </button>
        ))}
      </div>
      <div className="book-times" role="group" aria-label="Time">
        {TIMES.map((x, k) => <button key={k} aria-pressed={t === k} onClick={() => setT(k)}>{x}</button>)}
      </div>
      <div className="book-meta"><span>Times shown in Dubai time (GST)</span><span>Google Meet · or in person in Dubai</span></div>
      <input aria-label="Your name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)}
        style={{ width: "100%", padding: "14px 16px", borderRadius: 14, border: "1px solid var(--line)", marginBottom: 12, font: "inherit" }} />
      <input aria-label="Your WhatsApp number" inputMode="tel" placeholder="WhatsApp number (optional)" value={wa} onChange={(e) => setWa(e.target.value)}
        style={{ width: "100%", padding: "14px 16px", borderRadius: 14, border: "1px solid var(--line)", marginBottom: 12, font: "inherit" }} />
      <button className="btn btn-ink" disabled={t === null || busy} style={{ opacity: t === null ? 0.5 : 1 }} onClick={async () => {
        setBusy(true);
        const r = await sendLead({ kind: "booking", name: name || "(no name)", whatsapp: wa, slot: `${dl(days[d])} ${TIMES[t!]} GST` });
        setSent(r.delivered); setBusy(false); setDone(true);
      }}>
        {t === null ? "Choose a time" : `Confirm ${dl(days[d])} · ${TIMES[t]}`}
      </button>
      <p className="book-wa">Prefer WhatsApp? <a href={waLink("Hi, I'd like to book a call")} target="_blank" rel="noopener">Message us</a> and we&apos;ll reply within the hour (Mon–Fri, GST).</p>
    </div>
  );
}
