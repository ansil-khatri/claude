"use client";
import { useEffect, useState } from "react";

/** Live Dubai time (GST, UTC+4): a small detail that makes the hero feel like a place. */
export function DubaiClock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () => setT(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Dubai" }).format(new Date()));
    f(); const i = setInterval(f, 20000); return () => clearInterval(i);
  }, []);
  return <span className="clock"><i />Dubai {t || "--:--"} GST</span>;
}
