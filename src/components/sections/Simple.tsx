import { WaBtn, BookBtn } from "@/components/ui/Buttons";

/** Compact dark hero used by hubs and utility pages. */
export function HubHero({ kicker, h1, em, sub, wa = "Hi, I'd like to talk about a project", children }: { kicker: string; h1: string; em?: string; sub: string; wa?: string; children?: React.ReactNode }) {
  return (
    <section className="panel hub-hero">
      <div className="hero-glow" data-parallax="14" />
      <div className="w" style={{ position: "relative", zIndex: 2 }}>
        <h1><span className="h1-kicker" data-intro data-reveal="fade">{kicker}</span><span className="hl" data-split="lines" data-intro>{h1} {em && <em>{em}</em>}</span></h1>
        <p className="hero-sub" data-intro data-reveal="up">{sub}</p>
        <div className="hero-ctas" data-intro data-reveal="up"><BookBtn /><WaBtn text={wa} />{children}</div>
      </div>
    </section>
  );
}
