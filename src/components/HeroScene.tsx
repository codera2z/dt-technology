export function HeroScene() {
  return (
    <div className="hero-artwork">
      <svg viewBox="0 0 560 560" fill="none" focusable="false">
        <defs>
          <radialGradient id="hero-glow" cx="0" cy="0" r="1"
            gradientTransform="translate(250 224) rotate(48) scale(250)"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFDF7" />
            <stop offset=".48" stopColor="#F3E9D8" />
            <stop offset=".8" stopColor="#D9B9A0" />
            <stop offset="1" stopColor="#C4622D" />
          </radialGradient>
          <linearGradient id="hero-line" x1="80" y1="120" x2="485" y2="455"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#C4622D" stopOpacity=".16" />
            <stop offset=".52" stopColor="#2A1F1A" stopOpacity=".56" />
            <stop offset="1" stopColor="#C4622D" stopOpacity=".2" />
          </linearGradient>
        </defs>
        <circle cx="280" cy="280" r="220" stroke="#2A1F1A" strokeOpacity=".14" />
        <ellipse cx="280" cy="280" rx="220" ry="94"
          transform="rotate(-28 280 280)" stroke="#C4622D" strokeOpacity=".4" />
        <ellipse cx="280" cy="280" rx="220" ry="142"
          transform="rotate(54 280 280)" stroke="#2A1F1A" strokeOpacity=".2" />
        <circle cx="280" cy="280" r="165" stroke="url(#hero-line)" strokeDasharray="2 9" />
        <circle cx="280" cy="280" r="125" fill="url(#hero-glow)" />
        <g stroke="#2A1F1A" strokeOpacity=".26" strokeWidth="1">
          <ellipse cx="280" cy="280" rx="121" ry="55" />
          <ellipse cx="280" cy="280" rx="121" ry="88" />
          <path d="M159 280c0-67 54-121 121-121s121 54 121 121-54 121-121 121-121-54-121-121Z" />
          <path d="M280 159c-33 33-51 74-51 121s18 88 51 121M280 159c33 33 51 74 51 121s-18 88-51 121" />
        </g>
        <circle cx="127" cy="173" r="5" fill="#C4622D" />
        <circle cx="436" cy="355" r="4" fill="#2A1F1A" />
        <circle cx="376" cy="83" r="3" fill="#C4622D" />
        <path d="M127 173 172 203M436 355l-39-17M376 83l-22 39"
          stroke="url(#hero-line)" strokeWidth="1.2" />
      </svg>
      <span className="hero-artwork__halo" />
    </div>
  );
}
