import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const dynamic = "force-static";
export const alt = `${site.brand} · Apps, websites and software for businesses in Dubai & UAE`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#111113", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 36, fontWeight: 800 }}>
          <div style={{ width: 36, height: 36, borderRadius: 11, background: "#c8f542" }} />{site.brand}
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: -3 }}>
          <span>You run the business.</span><span style={{ color: "#c8f542" }}>We build the software.</span>
        </div>
        <div style={{ fontSize: 28, color: "#a5a5ab" }}>Dubai & UAE · Fixed AED prices · Arabic + English</div>
      </div>
    ),
    size
  );
}
