/* Legacy illustration kept as a reusable fallback; the homepage uses real photography. */
function Layer({ d, fill, delay, className = "" }) {
  return (
    <g className={`hero-layer ${className}`} style={{ "--d": `${delay}ms` }}>
      <path d={d} fill={fill} />
    </g>
  );
}

export function BurgerStack({ id = "heroStack" }) {
  return (
    <svg
      viewBox="0 0 420 400"
      role="img"
      aria-label="Beast Burger signature stack"
      className="burger-stack"
    >
      <defs>
        <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(245, 185, 66, 0.18)" />
          <stop offset="100%" stopColor="rgba(245, 185, 66, 0)" />
        </radialGradient>
        <linearGradient id={`${id}-bun`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7b95c" />
          <stop offset="55%" stopColor="#e89a3c" />
          <stop offset="100%" stopColor="#c97a26" />
        </linearGradient>
        <linearGradient id={`${id}-cheese`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffd257" />
          <stop offset="100%" stopColor="#f2a414" />
        </linearGradient>
      </defs>

      {/* glow */}
      <ellipse className="burger-glow" cx="210" cy="205" rx="185" ry="150" fill="url(#heroGlow)" />

      {/* sesame crown */}
      <Layer d="M78 150 C78 78 140 40 210 40 C280 40 342 78 342 150 C342 162 330 170 316 170 L104 170 C90 170 78 162 78 150 Z" fill={`url(#${id}-bun)`} delay={100} />
      {/* sesame seeds */}
      <Layer d="M150 92 q10 -8 20 0 q-10 8 -20 0 Z M215 70 q10 -8 20 0 q-10 8 -20 0 Z M280 95 q10 -8 20 0 q-10 8 -20 0 Z M185 120 q10 -8 20 0 q-10 8 -20 0 Z M250 122 q10 -8 20 0 q-10 8 -20 0 Z" fill="#ffe9bd" delay={260} />
      {/* lettuce ruffle */}
      <Layer d="M74 176 q18 14 36 0 q18 14 36 0 q18 14 36 0 q18 14 36 0 q18 14 36 0 q18 14 36 0 q18 14 36 0 L346 196 L74 196 Z" fill="#7fb069" delay={420} />
      {/* tomato */}
      <Layer d="M92 200 h236 a10 10 0 0 1 0 20 H92 a10 10 0 0 1 0 -20 Z" fill="#d94f30" delay={560} />
      {/* cheese drape */}
      <Layer d="M84 224 L336 224 L336 236 L300 266 L262 240 L224 268 L186 240 L148 266 L110 238 L84 262 Z" fill={`url(#${id}-cheese)`} delay={700} />
      {/* beef patty */}
      <Layer d="M86 268 h248 a14 14 0 0 1 0 34 H86 a14 14 0 0 1 0 -34 Z" fill="#6b3a1f" delay={840} />
      {/* heel */}
      <Layer d="M96 314 h228 a16 16 0 0 1 16 16 v6 a18 18 0 0 1 -18 18 H98 a18 18 0 0 1 -18 -18 v-6 a16 16 0 0 1 16 -16 Z" fill="#d98a35" delay={980} />
      {/* plate shadow */}
      <Layer d="M60 372 h300 a10 10 0 0 1 0 20 H60 a10 10 0 0 1 0 -20 Z" fill="rgba(0,0,0,0.35)" delay={1120} className="shadow" />
    </svg>
  );
}
