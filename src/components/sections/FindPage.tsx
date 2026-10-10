"use client";
import Link from "next/link";
import { useState } from "react";

/** Tiny client-side finder for the 404 page: filters the links we know exist. */
export function FindPage({ items }: { items: [string, string][] }) {
  const [q, setQ] = useState("");
  const hits = q.trim().length < 2 ? [] : items.filter(([, t]) => t.toLowerCase().includes(q.trim().toLowerCase())).slice(0, 8);
  return (
    <div style={{ maxWidth: 520, margin: "10px 0 26px" }}>
      <label htmlFor="find" className="sr-only">Search pages</label>
      <input id="find" className="inp" placeholder="Search services, industries and guides" value={q} onChange={(e) => setQ(e.target.value)} style={{ width: "100%" }} />
      {hits.length > 0 && <ul style={{ listStyle: "none", padding: 0, margin: "10px 0 0", display: "grid", gap: 6 }}>{hits.map(([h, t]) => <li key={h}><Link className="chip" href={h}>{t} →</Link></li>)}</ul>}
      {q.trim().length >= 2 && hits.length === 0 && <p className="note">No match. Try a service name or WhatsApp us below.</p>}
    </div>
  );
}
