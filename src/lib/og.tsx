import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const OG_SIZE = { width: 1200, height: 630 };
/** Parrot Noir social card: black stage, parrot rule, big title. */
export function ogImage(opts: { kicker: string; title: string; foot?: string }) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#060606", color: "#f3f3ef", padding: 64, fontFamily: "sans-serif", position: "relative" }}>
        <div style={{ position: "absolute", right: -160, top: -220, width: 620, height: 620, borderRadius: 620, background: "radial-gradient(circle, rgba(124,255,53,0.55), rgba(124,255,53,0) 68%)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 28, letterSpacing: -1 }}>
          <div style={{ width: 26, height: 26, borderRadius: 26, background: "#7cff35", display: "flex" }} />
          <div style={{ display: "flex" }}>{site.brand}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 4, textTransform: "uppercase", color: "#7cff35" }}>{opts.kicker}</div>
          <div style={{ display: "flex", fontSize: opts.title.length > 60 ? 62 : 78, lineHeight: 1.0, letterSpacing: -3, fontWeight: 700, maxWidth: 1010 }}>{opts.title}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#8d8d92" }}>
          <div style={{ display: "flex" }}>{opts.foot ?? "Shopify · WordPress · Custom themes · ERP · WhatsApp · AI"}</div>
          <div style={{ display: "flex" }}>{site.domain}</div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
