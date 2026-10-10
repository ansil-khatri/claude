"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

type G = { n: number; slug: string; title: string; cat: string; month: string; read: number; answer?: string; live: boolean };
export function GuideFilter({ guides, cats }: { guides: G[]; cats: string[] }) {
  const [q, setQ] = useState("");
  const [c, setC] = useState("All");
  const list = useMemo(() => guides.filter((g) => (c === "All" || g.cat === c) && g.title.toLowerCase().includes(q.toLowerCase())), [guides, q, c]);
  const used = cats.filter((x) => guides.some((g) => g.cat === x));
  return (
    <div>
      <input className="inp" placeholder="Search guides" aria-label="Search guides" value={q} onChange={(e) => setQ(e.target.value)} style={{ marginBottom: 14, maxWidth: 480 }} />
      <div className="tabs-row" role="group" aria-label="Categories" style={{ marginBottom: 26 }}>
        {["All", ...used].map((x) => <button key={x} className="tab-btn" role="tab" aria-selected={c === x} onClick={() => setC(x)}>{x}</button>)}
      </div>
      <div className="card-grid">
        {list.map((g) => {
          const inner = <><span className="cat">{g.cat}</span><h3>{g.title}</h3>{g.answer && <p>{g.answer.slice(0, 130)}…</p>}<div className="foot"><span>{g.live ? `${g.read} min read` : `Planned · ${g.month}`}</span><span>{g.live ? "Read →" : "Soon"}</span></div></>;
          return g.live ? <Link key={g.slug} href={`/guides/${g.slug}`} className="g-card">{inner}</Link> : <div key={g.slug} className="g-card soon">{inner}</div>;
        })}
      </div>
      {!list.length && <p className="lead">No guides match. Try another word.</p>}
    </div>
  );
}
