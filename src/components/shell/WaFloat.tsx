import { waLink } from "@/config/site";
import { WaIcon } from "@/components/ui/icons";
export function WaFloat() {
  return <a className="wa-float" href={waLink("Hi, I found you on your website")} target="_blank" rel="noopener" aria-label="WhatsApp us"><WaIcon /></a>;
}
