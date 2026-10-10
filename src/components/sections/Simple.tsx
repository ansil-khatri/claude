import { WaBtn, BookBtn } from "@/components/ui/Buttons";

/** Compact dark hero used by hubs and utility pages. */
export function HubHero({ kicker, h1, em, sub, wa = "Hi, I'd like to talk about a project", children }: { kicker: string; h1: string; em?: string; sub: string; wa?: string; children?: React.ReactNode }) {
  return (
    <section className="panel hub-hero" style={{ marginTop: 14 }}>
      <div className="hero-glow" style={{ width: 460, height: 460, right: -150, top: -170 }} />
      <div className="w" style={{ position: "relative", zIndex: 2 }}>
        <h1><span className="h1-kicker">{kicker}</span>{h1} {em && <em>{em}</em>}</h1>
        <p className="hero-sub">{sub}</p>
        <div className="hero-ctas"><BookBtn /><WaBtn text={wa} />{children}</div>
      </div>
    </section>
  );
}
