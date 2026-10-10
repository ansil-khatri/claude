"use client";
import Link from "next/link";
import { useState } from "react";

/** Problem finder: links on the left; on desktop hover or focus shows a preview screen of that service on the right. */
export function Finder({ items, previews }: { items: [string, string][]; previews: Record<string, React.ReactNode> }) {
  const [on, setOn] = useState(items[0]?.[1] ?? "");
  return (
    <div className="finder-wrap">
      <nav className="finder" aria-label="Problem finder">
        {items.map(([t, h]) => <Link key={h + t} href={h} onMouseEnter={() => setOn(h)} onFocus={() => setOn(h)}><span>{t}</span><span className="go">→</span></Link>)}
      </nav>
      <div className="finder-prev" aria-hidden data-nosnippet>{previews[on] ?? null}</div>
    </div>
  );
}
