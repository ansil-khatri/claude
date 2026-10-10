import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const ogSize = { width: 1200, height: 630 };

/** Branded 1200×630 card used by every dynamic route's opengraph-image. */
export function ogCard({ kicker, title, from }: { kicker: string; title: string; from?: string }) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#111113", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, position: "relative" }}>
        <div style={{ position: "absolute", right: -160, top: -160, width: 460, height: 460, borderRadius: 460, background: "#c8f542" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 32, fontWeight: 800 }}>
          <div style={{ width: 32, height: 32, borderRadius: 10, background: "#c8f542" }} />{site.brand}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 28, color: "#c8f542", fontWeight: 700 }}>{kicker}</div>
          <div style={{ fontSize: title.length > 60 ? 54 : 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>{title}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#a5a5ab" }}>
          <span>Dubai & UAE · Fixed AED prices · Arabic + English</span>{from && <span style={{ color: "#fff", fontWeight: 700 }}>From {from}</span>}
        </div>
      </div>
    ),
    ogSize
  );
}
