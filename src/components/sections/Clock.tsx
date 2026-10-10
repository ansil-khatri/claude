"use client";
import { useEffect, useState } from "react";

/** Live Dubai time. Renders nothing until mounted, so server and client markup match. */
export function DubaiClock() {
  const [t, set] = useState("");
  useEffect(() => {
    const f = () => set(new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Dubai", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date()));
    f(); const id = setInterval(f, 1000); return () => clearInterval(id);
  }, []);
  return <span className="hero-live"><i />Dubai <b style={{ fontWeight: 500, color: "var(--fg)", minWidth: 66, display: "inline-block" }}>{t || "--:--:--"}</b> GST</span>;
}
