"use client";
import { useState } from "react";
import { JsonLd } from "./JsonLd";

export type QA = { q: string; a: string };
export function Faq({ items, schema = true }: { items: QA[]; schema?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <div className="faq-list">
        {items.map((it, k) => (
          <div key={k} className={`faq-item ${open === k ? "open" : ""}`}>
            <button className="faq-q" aria-expanded={open === k} onClick={() => setOpen(open === k ? null : k)}>
              <span>{it.q}</span><i aria-hidden>+</i>
            </button>
            <div className="faq-a" role="region"><div><p>{it.a}</p></div></div>
          </div>
        ))}
      </div>
      {schema && (
        <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map((it) => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: it.a } })) }} />
      )}
    </>
  );
}
