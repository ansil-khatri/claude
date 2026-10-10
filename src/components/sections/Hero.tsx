import Link from "next/link";
import type { Page } from "@content/types";
import { BookBtn, WaBtn, LineBtn } from "@/components/ui/Buttons";
import { Stage } from "./Stage";

export function Hero({ p, parent, priceHref = "#pricing", priceLabel }: { p: Page; parent: { href: string; label: string }; priceHref?: string; priceLabel?: string }) {
  return (
    <section className="panel hero-panel" style={{ marginTop: 14 }}>
      <div className="hero-glow" />
      <div className="w hero-grid">
        <div className="hero-copy">
          <div className="crumb"><Link href={parent.href}>{parent.label}</Link> / <b>{p.crumb}</b></div>
          <h1 className="hero-h1">
            <span className="h1-kicker">{p.kicker}</span>
            {p.h1a} <em>{p.h1b}</em>
          </h1>
          <p className="hero-sub">{p.sub}</p>
          <div className="hero-ctas">
            <BookBtn />
            <WaBtn text={p.waText} />
            <LineBtn href={priceHref}>{priceLabel ?? `See ${p.name.toLowerCase()} pricing`}</LineBtn>
          </div>
          <div className="chips hero-tech">{p.tech.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
        </div>
        <Stage stage={p.stage} />
      </div>
    </section>
  );
}
