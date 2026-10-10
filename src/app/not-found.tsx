import Link from "next/link";
import { WaBtn } from "@/components/ui/Buttons";

export default function NotFound() {
  return (
    <section className="panel hub-hero" style={{ marginTop: 14, minHeight: "80vh" }}>
      <div className="w" style={{ position: "relative", zIndex: 2 }}>
        <h1>This page moved or <em>never existed.</em></h1>
        <p className="hero-sub">Try one of these instead.</p>
        <div className="chips" style={{ margin: "26px 0" }}>
          {[["/services", "Services"], ["/industries", "Industries"], ["/pricing", "Pricing"], ["/guides", "Guides"], ["/contact", "Contact"]].map(([h, l]) => <Link key={h} className="chip" href={h}>{l} →</Link>)}
        </div>
        <WaBtn text="Hi, I couldn't find a page on your website" />
      </div>
    </section>
  );
}
