"use client";
import { useState } from "react";

const MODES = {
  addon: { label: "Add-on (days)", weeks: ["Day 1", "Within 48 h", "Day 1–2", "Day 2", "Day 2", "Day 2–3", "Day 3", "Day 3–4", "After"] },
  site: { label: "Website (2–4 weeks)", weeks: ["Day 1", "48 h", "Week 1", "Weeks 1–2", "Week 2", "Weeks 2–3", "Week 3", "Week 4", "After"] },
  app: { label: "Website + app (~12 weeks)", weeks: ["Day 1 · 30 min", "Within 48 h", "Week 1", "Weeks 2–4", "End of week 4", "Weeks 5–9", "Weeks 10–11", "Week 12", "After launch"] },
} as const;
const STEPS = ["We talk about your business", "Plan and fixed price", "Agree and kick off", "Design every screen in Figma", "You approve", "Build", "Test everything", "Go live", "We stay"];
const WHAT = ["A 30-minute call. You tell us how the business runs.", "A written scope, timeline and one fixed price in AED.", "E-signature, first payment, WhatsApp group.", "Every screen, in English and Arabic.", "Nothing is built until you approve the designs.", "Weekly Friday demos on a staging link.", "Real phones, real browsers, English and Arabic.", "We publish and launch with you.", "A monthly report and an optional care plan."];

export function ProcessToggle() {
  const [m, setM] = useState<keyof typeof MODES>("app");
  return (
    <div>
      <div className="tabs-row" role="tablist" aria-label="Project type" style={{ marginBottom: 28 }}>
        {(Object.keys(MODES) as (keyof typeof MODES)[]).map((k) => <button key={k} role="tab" aria-selected={m === k} className="tab-btn" onClick={() => setM(k)}>{MODES[k].label}</button>)}
      </div>
      <ol className="pw-steps">
        {STEPS.map((s, i) => (
          <li key={s}><div className="pw-when">{MODES[m].weeks[i]}</div><div><h3>{s}</h3><p>{WHAT[i]}</p></div><span className="pw-n">{String(i + 1).padStart(2, "0")}</span></li>
        ))}
      </ol>
    </div>
  );
}
