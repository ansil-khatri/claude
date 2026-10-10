import Link from "next/link";
import { waLink } from "@/config/site";
import { WaIcon } from "./icons";

export function BookBtn({ label = "Start a project", className = "", href = "/contact" }: { label?: string; className?: string; href?: string }) {
  return <Link className={`btn btn-p ${className}`} href={href} data-magnetic>{label} <i className="arr">→</i></Link>;
}
export function WaBtn({ text, label = "WhatsApp us", className = "" }: { text: string; label?: string; className?: string }) {
  return (
    <a className={`btn btn-o btn-wa ${className}`} href={waLink(text)} target="_blank" rel="noopener" data-cursor="Chat" data-wa="1" data-magnetic>
      <WaIcon />{label}
    </a>
  );
}
export function LineBtn({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return <Link className={`btn btn-o ${className}`} href={href} data-magnetic>{children}</Link>;
}
