import Link from "next/link";
import { waLink } from "@/config/site";
import { WaIcon } from "./icons";

export function BookBtn({ label = "Book a free call", className = "", href = "#book" }: { label?: string; className?: string; href?: string }) {
  return <a className={`btn btn-lime ${className}`} href={href} data-magnetic>{label}</a>;
}
export function WaBtn({ text, label = "WhatsApp us", className = "" }: { text: string; label?: string; className?: string }) {
  return (
    <a className={`btn btn-wa ${className}`} href={waLink(text)} target="_blank" rel="noopener" data-cursor="Chat" data-wa="1">
      <WaIcon />{label}
    </a>
  );
}
export function LineBtn({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return <Link className={`btn btn-line ${className}`} href={href} data-magnetic>{children}</Link>;
}
