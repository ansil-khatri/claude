import type { Stage as StageT } from "@content/types";
import { Viz } from "@/components/mock/Viz";
import { FCard } from "@/components/mock/Viz";
import { Browser } from "@/components/mock/Frames";

/** Hero visual: a main mock (browser or card), an overlapping phone/card, and floating cards. */
export function Stage({ stage }: { stage: StageT }) {
  const { main, side, cards } = stage;
  const sidePhone = side?.t === "phone";
  return (
    <div className="stage" data-nosnippet aria-hidden data-intro data-reveal="clip">
      <div className="stage-glow" />
      <div className="stage-main"><Viz spec={main} /></div>
      {side && (
        <div className={`stage-side ${sidePhone ? "is-phone" : "is-card"}`}>
          <Viz spec={side} />
        </div>
      )}
      {cards.map((c, i) => <FCard key={i} {...c} className={`fc${i}`} />)}
    </div>
  );
}
export { Browser };
