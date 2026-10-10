"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

const GA = process.env.NEXT_PUBLIC_GA_ID;
type W = Window & { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };

/** Fire a GA4 key event (whatsapp_click, book_call_click, booking_completed, phone_click, calculator_completed, einvoice_check_completed, pricing_view). */
export function track(event: string, params: Record<string, unknown> = {}) {
  const w = window as W;
  w.gtag?.("event", event, { page_path: location.pathname, ...params });
}

/** PDPL-friendly: nothing loads or is stored until the visitor accepts. Choice is remembered in localStorage. */
export function Analytics() {
  const [choice, setChoice] = useState<"yes" | "no" | null>("no");
  useEffect(() => {
    try { setChoice((localStorage.getItem("consent") as "yes" | "no" | null)); } catch { setChoice(null); }
  }, []);
  useEffect(() => {
    if (choice !== "yes") return;
    const on = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLElement>("a,button");
      if (!a) return;
      const href = (a as HTMLAnchorElement).href ?? "";
      if (href.includes("wa.me")) track("whatsapp_click");
      else if (href.startsWith("tel:")) track("phone_click");
      else if (a.getAttribute("href") === "#book" || /Book a free call/i.test(a.textContent ?? "")) track("book_call_click");
    };
    document.addEventListener("click", on);
    if (location.pathname === "/pricing") track("pricing_view");
    return () => document.removeEventListener("click", on);
  }, [choice]);

  const decide = (v: "yes" | "no") => { try { localStorage.setItem("consent", v); } catch {} setChoice(v); };
  return (
    <>
      {GA && choice === "yes" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA}',{anonymize_ip:true});`}</Script>
        </>
      )}
      {choice === null && (
        <div className="consent" role="dialog" aria-label="Cookie consent">
          <p>We use analytics cookies to see which pages help. Nothing loads until you say yes. <a href="/legal/cookies">Cookie policy</a></p>
          <div><button className="btn btn-sm btn-line" onClick={() => decide("no")}>No thanks</button><button className="btn btn-sm btn-lime" onClick={() => decide("yes")}>Accept</button></div>
        </div>
      )}
    </>
  );
}
