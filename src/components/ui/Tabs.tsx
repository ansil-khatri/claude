"use client";
import { useCallback, useEffect, useId, useRef, useState } from "react";

export type TabItem = { label: string; content: React.ReactNode };

/** WAI-ARIA tabs. All panels are server-rendered in the HTML; inactive ones are `hidden`. Optional autoplay stops on any interaction. */
export function Tabs({ items, autoplay = 0, className = "", rowClass = "", numbered = false, arrows = false, dark = false }: {
  items: TabItem[]; autoplay?: number; className?: string; rowClass?: string; numbered?: boolean; arrows?: boolean; dark?: boolean;
}) {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(autoplay > 0);
  const [visible, setVisible] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const id = useId();
  const n = items.length;

  useEffect(() => {
    if (!autoplay || !root.current) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    io.observe(root.current);
    return () => io.disconnect();
  }, [autoplay]);

  useEffect(() => {
    if (!auto || !visible || !autoplay) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => setI((x) => (x + 1) % n), autoplay);
    return () => clearTimeout(t);
  }, [auto, visible, i, autoplay, n]);

  const pick = useCallback((k: number) => { setAuto(false); setI(((k % n) + n) % n); }, [n]);
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); pick(i + 1); document.getElementById(`${id}-t${(i + 1) % n}`)?.focus(); }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); pick(i - 1); document.getElementById(`${id}-t${(i - 1 + n) % n}`)?.focus(); }
  };

  return (
    <div ref={root} className={`${className} ${dark ? "dark" : ""}`} onMouseEnter={() => autoplay && setAuto(false)}>
      <div className={`tabs-row ${rowClass}`} role="tablist" onKeyDown={onKey}>
        {items.map((t, k) => (
          <button key={k} id={`${id}-t${k}`} role="tab" aria-selected={i === k} aria-controls={`${id}-p${k}`} tabIndex={i === k ? 0 : -1}
            className="tab-btn" onClick={() => pick(k)}>
            {numbered && <span className="mono" style={{ opacity: 0.55, marginRight: 8, fontSize: 11 }}>{String(k + 1).padStart(2, "0")}</span>}
            {t.label}
            {auto && autoplay > 0 && i === k && visible && <span className="prog" style={{ animation: `tabprog ${autoplay}ms linear forwards` }} />}
          </button>
        ))}
        {arrows && (
          <span style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }}>
            <span className="mono" style={{ fontSize: 12, opacity: 0.6 }}>{String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span>
            <button className="tab-btn" onClick={() => pick(i - 1)} aria-label="Previous">‹</button>
            <button className="tab-btn" onClick={() => pick(i + 1)} aria-label="Next">›</button>
          </span>
        )}
      </div>
      {items.map((t, k) => (
        <div key={k} id={`${id}-p${k}`} role="tabpanel" aria-labelledby={`${id}-t${k}`} hidden={i !== k} className="tab-panel">{t.content}</div>
      ))}
    </div>
  );
}
