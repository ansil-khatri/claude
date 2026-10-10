import type { Product } from "@content/v3/brands";

/**
 * Vector still-life product shots. Lit from the upper left, soft contact shadow, film grain.
 * They are drawn, not stock photos, and are used inside store mockups instead of gradient blobs.
 */
const G = ({ id }: { id: string }) => (
  <filter id={`g-${id}`} x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" seed="7" /><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .5 0" /></filter>
);

export function Perfume({ id = "pf", tone = "#c79a4b" }: { id?: string; tone?: string }) {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <radialGradient id={`bg-${id}`} cx=".32" cy=".22" r=".95"><stop offset="0" stopColor="#3a2a1b" /><stop offset=".55" stopColor="#15100c" /><stop offset="1" stopColor="#080605" /></radialGradient>
        <linearGradient id={`gl-${id}`} x1="0" x2="1"><stop offset="0" stopColor="#4a2f12" /><stop offset=".18" stopColor="#b57a2c" /><stop offset=".5" stopColor="#6b3f12" /><stop offset=".86" stopColor="#2c1907" /><stop offset="1" stopColor="#1a0e04" /></linearGradient>
        <linearGradient id={`lq-${id}`} x1="0" x2="1"><stop offset="0" stopColor="#7a4a14" /><stop offset=".3" stopColor="#d9953a" /><stop offset=".7" stopColor="#8a5217" /><stop offset="1" stopColor="#3c2208" /></linearGradient>
        <linearGradient id={`cap-${id}`} x1="0" x2="1"><stop offset="0" stopColor="#6e5320" /><stop offset=".25" stopColor={tone} /><stop offset=".45" stopColor="#f3dca0" /><stop offset=".7" stopColor={tone} /><stop offset="1" stopColor="#5a4217" /></linearGradient>
        <linearGradient id={`hi-${id}`} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".7" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
        <radialGradient id={`sh-${id}`}><stop offset="0" stopColor="#000" stopOpacity=".7" /><stop offset="1" stopColor="#000" stopOpacity="0" /></radialGradient>
        <G id={id} />
      </defs>
      <rect width="400" height="500" fill={`url(#bg-${id})`} />
      <ellipse cx="205" cy="432" rx="150" ry="22" fill={`url(#sh-${id})`} />
      <rect x="140" y="395" width="130" height="14" rx="3" fill="#0b0705" opacity=".6" />
      <g>
        <rect x="150" y="150" width="112" height="256" rx="16" fill={`url(#gl-${id})`} />
        <rect x="160" y="238" width="92" height="156" rx="8" fill={`url(#lq-${id})`} opacity=".92" />
        <rect x="160" y="238" width="92" height="3" fill="#fff" opacity=".35" />
        <rect x="150" y="372" width="112" height="34" rx="10" fill="#1a0e04" opacity=".5" />
        <rect x="158" y="160" width="9" height="236" rx="4" fill={`url(#hi-${id})`} opacity=".8" />
        <rect x="244" y="168" width="4" height="220" rx="2" fill="#fff" opacity=".18" />
        <rect x="172" y="278" width="68" height="64" fill="#f1e5cc" opacity=".92" rx="2" />
        <rect x="180" y="289" width="52" height="2.5" fill="#2b1d0e" opacity=".8" /><rect x="186" y="300" width="40" height="1.5" fill="#2b1d0e" opacity=".55" /><rect x="182" y="326" width="48" height="1.5" fill="#2b1d0e" opacity=".4" />
        <rect x="186" y="124" width="40" height="36" rx="3" fill={`url(#gl-${id})`} />
        <rect x="170" y="62" width="72" height="68" rx="9" fill={`url(#cap-${id})`} />
        <rect x="174" y="68" width="6" height="56" rx="3" fill="#fff" opacity=".55" />
        <rect x="170" y="118" width="72" height="5" fill="#3a2a0c" opacity=".5" />
      </g>
      <rect width="400" height="500" filter={`url(#g-${id})`} opacity=".4" style={{ mixBlendMode: "overlay" }} />
    </svg>
  );
}

export function Bag({ id = "bg", tone = "#1f3a2d" }: { id?: string; tone?: string }) {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <radialGradient id={`bk-${id}`} cx=".3" cy=".15" r=".9"><stop offset="0" stopColor="#f6f0e4" /><stop offset=".6" stopColor="#e6dcc9" /><stop offset="1" stopColor="#cfc3ac" /></radialGradient>
        <linearGradient id={`bd-${id}`} x1="0" x2="1"><stop offset="0" stopColor={tone} /><stop offset=".35" stopColor="#2f5a46" /><stop offset=".7" stopColor={tone} /><stop offset="1" stopColor="#0f2218" /></linearGradient>
        <linearGradient id={`fl-${id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".16" /><stop offset="1" stopColor="#000" stopOpacity=".22" /></linearGradient>
        <linearGradient id={`mt-${id}`} x1="0" x2="1"><stop offset="0" stopColor="#8a6a2a" /><stop offset=".4" stopColor="#f0d89a" /><stop offset="1" stopColor="#7a5c20" /></linearGradient>
        <radialGradient id={`sh-${id}`}><stop offset="0" stopColor="#2a2010" stopOpacity=".55" /><stop offset="1" stopColor="#2a2010" stopOpacity="0" /></radialGradient>
        <G id={id} />
      </defs>
      <rect width="400" height="500" fill={`url(#bk-${id})`} />
      <ellipse cx="200" cy="448" rx="150" ry="20" fill={`url(#sh-${id})`} />
      <path d="M128 168 C 128 40, 272 40, 272 168" fill="none" stroke="#0f2218" strokeWidth="15" strokeLinecap="round" />
      <path d="M128 168 C 128 52, 272 52, 272 168" fill="none" stroke="#3f7058" strokeWidth="3" strokeLinecap="round" opacity=".55" />
      <path d="M96 168 L 304 168 L 332 430 Q 334 448 316 448 L 84 448 Q 66 448 68 430 Z" fill={`url(#bd-${id})`} />
      <path d="M96 168 L 304 168 L 332 430 Q 334 448 316 448 L 84 448 Q 66 448 68 430 Z" fill={`url(#fl-${id})`} />
      <path d="M96 168 L 304 168 L 308 196 L 92 196 Z" fill="#0f2218" opacity=".35" />
      <path d="M110 214 L 290 214 L 312 424" fill="none" stroke="#f0d89a" strokeOpacity=".5" strokeWidth="1.4" strokeDasharray="5 5" />
      <path d="M110 214 L 90 424" fill="none" stroke="#f0d89a" strokeOpacity=".5" strokeWidth="1.4" strokeDasharray="5 5" />
      <rect x="168" y="238" width="64" height="70" rx="4" fill="none" stroke="#f0d89a" strokeOpacity=".55" />
      <rect x="178" y="256" width="44" height="4" rx="2" fill={`url(#mt-${id})`} /><rect x="186" y="270" width="28" height="3" rx="1.5" fill={`url(#mt-${id})`} opacity=".8" />
      <circle cx="200" cy="168" r="9" fill={`url(#mt-${id})`} /><circle cx="196" cy="165" r="3" fill="#fff" opacity=".7" />
      <rect x="98" y="172" width="8" height="270" fill="#fff" opacity=".07" />
      <rect width="400" height="500" filter={`url(#g-${id})`} opacity=".32" style={{ mixBlendMode: "multiply" }} />
    </svg>
  );
}

export function Watch({ id = "wt" }: { id?: string }) {
  const ticks = Array.from({ length: 60 }, (_, i) => i);
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <radialGradient id={`bk-${id}`} cx=".5" cy=".35" r=".85"><stop offset="0" stopColor="#23272d" /><stop offset=".6" stopColor="#0f1114" /><stop offset="1" stopColor="#060708" /></radialGradient>
        <linearGradient id={`st-${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f2f4f6" /><stop offset=".3" stopColor="#8f98a3" /><stop offset=".55" stopColor="#d9dee4" /><stop offset=".8" stopColor="#6c7580" /><stop offset="1" stopColor="#3b4047" /></linearGradient>
        <radialGradient id={`dl-${id}`} cx=".35" cy=".3" r=".9"><stop offset="0" stopColor="#2c333c" /><stop offset=".6" stopColor="#12161b" /><stop offset="1" stopColor="#07090b" /></radialGradient>
        <linearGradient id={`gl-${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".35" /><stop offset=".4" stopColor="#fff" stopOpacity="0" /></linearGradient>
        <linearGradient id={`sp-${id}`} x1="0" x2="1"><stop offset="0" stopColor="#1a1d22" /><stop offset=".5" stopColor="#343a43" /><stop offset="1" stopColor="#14171b" /></linearGradient>
        <radialGradient id={`sh-${id}`}><stop offset="0" stopColor="#000" stopOpacity=".8" /><stop offset="1" stopColor="#000" stopOpacity="0" /></radialGradient>
        <G id={id} />
      </defs>
      <rect width="400" height="500" fill={`url(#bk-${id})`} />
      <rect x="152" y="0" width="96" height="190" fill={`url(#sp-${id})`} /><rect x="152" y="310" width="96" height="190" fill={`url(#sp-${id})`} />
      {[0, 1, 2, 3, 4, 5].map((i) => <g key={i}><line x1="158" x2="242" y1={26 + i * 30} y2={26 + i * 30} stroke="#000" strokeOpacity=".55" /><line x1="158" x2="242" y1={338 + i * 26} y2={338 + i * 26} stroke="#000" strokeOpacity=".55" /></g>)}
      <ellipse cx="200" cy="420" rx="130" ry="18" fill={`url(#sh-${id})`} opacity=".6" />
      <rect x="246" y="236" width="20" height="28" rx="4" fill={`url(#st-${id})`} />
      <circle cx="200" cy="250" r="124" fill={`url(#st-${id})`} />
      <circle cx="200" cy="250" r="112" fill="#0b0d10" />
      <circle cx="200" cy="250" r="106" fill={`url(#dl-${id})`} />
      {ticks.map((i) => { const a = (i * 6 * Math.PI) / 180, big = i % 5 === 0, r1 = 100, r2 = big ? 88 : 94; return <line key={i} x1={200 + Math.sin(a) * r1} y1={250 - Math.cos(a) * r1} x2={200 + Math.sin(a) * r2} y2={250 - Math.cos(a) * r2} stroke={big ? "#e8ecf0" : "#7c8590"} strokeWidth={big ? 3 : 1} />; })}
      <circle cx="200" cy="250" r="34" fill="none" stroke="#fff" strokeOpacity=".06" />
      <text x="200" y="206" textAnchor="middle" fontSize="11" letterSpacing="3" fill="#cfd5db" fontFamily="sans-serif">MERIDIAN</text>
      <text x="200" y="302" textAnchor="middle" fontSize="8" letterSpacing="2.5" fill="#8a929b" fontFamily="sans-serif">AUTOMATIC · 100 M</text>
      <rect x="236" y="244" width="22" height="16" rx="2" fill="#e8ecf0" /><text x="247" y="256" textAnchor="middle" fontSize="11" fill="#111" fontFamily="sans-serif">14</text>
      <polygon points="196,250 204,250 202,170 198,170" fill="#e8ecf0" /><polygon points="198,250 202,250 214,206 204,202" fill="#e8ecf0" transform="rotate(48 200 250)" />
      <line x1="200" y1="268" x2="200" y2="146" stroke="#7cff35" strokeWidth="1.6" transform="rotate(132 200 250)" /><circle cx="200" cy="250" r="5" fill="#e8ecf0" />
      <path d="M96 250 A104 104 0 0 1 200 146 L 200 250 Z" fill={`url(#gl-${id})`} opacity=".7" />
      <circle cx="200" cy="250" r="124" fill="none" stroke="#fff" strokeOpacity=".25" />
      <rect width="400" height="500" filter={`url(#g-${id})`} opacity=".35" style={{ mixBlendMode: "overlay" }} />
    </svg>
  );
}

export function Ring({ id = "rg" }: { id?: string }) {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <radialGradient id={`bk-${id}`} cx=".5" cy=".4" r=".9"><stop offset="0" stopColor="#2a2118" /><stop offset="1" stopColor="#0b0907" /></radialGradient>
        <linearGradient id={`au-${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff2c2" /><stop offset=".3" stopColor="#d8a93d" /><stop offset=".6" stopColor="#f6dc8a" /><stop offset="1" stopColor="#8a6212" /></linearGradient>
        <radialGradient id={`sh-${id}`}><stop offset="0" stopColor="#000" stopOpacity=".8" /><stop offset="1" stopColor="#000" stopOpacity="0" /></radialGradient>
        <G id={id} />
      </defs>
      <rect width="400" height="500" fill={`url(#bk-${id})`} />
      <ellipse cx="200" cy="400" rx="140" ry="22" fill={`url(#sh-${id})`} />
      <ellipse cx="200" cy="300" rx="106" ry="124" fill="none" stroke={`url(#au-${id})`} strokeWidth="34" />
      <ellipse cx="200" cy="300" rx="106" ry="124" fill="none" stroke="#fff" strokeOpacity=".25" strokeWidth="2" transform="translate(-6 -6)" />
      <path d="M118 196 L 282 196 L 300 160 Q 302 150 292 148 L 108 148 Q 98 150 100 160 Z" fill={`url(#au-${id})`} />
      <rect x="112" y="150" width="176" height="46" rx="12" fill={`url(#au-${id})`} />
      <rect x="120" y="156" width="160" height="34" rx="8" fill="#a97d1f" opacity=".45" />
      <text x="200" y="182" textAnchor="middle" fontSize="30" fontFamily="Georgia, serif" fontStyle="italic" fill="#5a3f0a">CG</text>
      <rect x="116" y="152" width="70" height="4" rx="2" fill="#fff" opacity=".7" />
      <rect width="400" height="500" filter={`url(#g-${id})`} opacity=".35" style={{ mixBlendMode: "overlay" }} />
    </svg>
  );
}

export function Abaya({ id = "ab", tone = "#7a2e3a" }: { id?: string; tone?: string }) {
  const folds = [118, 140, 162, 184, 206, 228, 250, 272];
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id={`bk-${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f3ece4" /><stop offset="1" stopColor="#d9cdbf" /></linearGradient>
        <linearGradient id={`fb-${id}`} x1="0" x2="1"><stop offset="0" stopColor="#15100f" /><stop offset=".3" stopColor="#2a2120" /><stop offset=".55" stopColor="#120d0d" /><stop offset=".8" stopColor="#2a2120" /><stop offset="1" stopColor="#0c0909" /></linearGradient>
        <linearGradient id={`tr-${id}`} x1="0" x2="1"><stop offset="0" stopColor={tone} /><stop offset=".5" stopColor="#b15a69" /><stop offset="1" stopColor={tone} /></linearGradient>
        <radialGradient id={`sh-${id}`}><stop offset="0" stopColor="#3a2a22" stopOpacity=".4" /><stop offset="1" stopColor="#3a2a22" stopOpacity="0" /></radialGradient>
        <G id={id} />
      </defs>
      <rect width="400" height="500" fill={`url(#bk-${id})`} />
      <ellipse cx="200" cy="462" rx="130" ry="14" fill={`url(#sh-${id})`} />
      <path d="M200 40 L200 62 M200 62 C 170 70, 120 84, 96 98 M200 62 C 230 70, 280 84, 304 98" stroke="#8a7e72" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M104 100 C 150 86, 250 86, 296 100 L 352 440 C 300 462, 100 462, 48 440 Z" fill={`url(#fb-${id})`} />
      {folds.map((x, i) => <path key={x} d={`M${x + 20} 96 C ${x - 40 + i * 6} 220, ${x - 70 + i * 14} 340, ${x - 90 + i * 24} 450`} stroke="#fff" strokeOpacity={i % 2 ? 0.05 : 0.11} strokeWidth={i % 2 ? 14 : 8} fill="none" />)}
      <path d="M200 98 L200 440" stroke="#000" strokeOpacity=".5" strokeWidth="2" />
      <path d="M104 100 L 90 210 L 120 214 L 132 112 Z" fill={`url(#fb-${id})`} /><path d="M296 100 L 310 210 L 280 214 L 268 112 Z" fill={`url(#fb-${id})`} />
      <rect x="88" y="206" width="36" height="9" rx="3" fill={`url(#tr-${id})`} /><rect x="276" y="206" width="36" height="9" rx="3" fill={`url(#tr-${id})`} />
      {Array.from({ length: 7 }, (_, i) => <circle key={i} cx={92 + i * 5} cy={210} r="1.6" fill="#f0d89a" opacity=".8" />)}
      <path d="M170 98 Q 200 128 230 98" fill="none" stroke={`url(#tr-${id})`} strokeWidth="4" />
      <rect width="400" height="500" filter={`url(#g-${id})`} opacity=".32" style={{ mixBlendMode: "multiply" }} />
    </svg>
  );
}

export function Still({ product, tone, id }: { product: Product; tone?: string; id?: string }) {
  switch (product) {
    case "perfume": return <Perfume id={id} tone={tone} />;
    case "bag": return <Bag id={id} tone={tone} />;
    case "watch": return <Watch id={id} />;
    case "ring": return <Ring id={id} />;
    case "abaya": return <Abaya id={id} tone={tone} />;
    default: return null;
  }
}
