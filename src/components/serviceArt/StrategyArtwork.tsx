export function StrategyArtwork() {
  return (
    <g>
      <path className="service-art__guide" d="M14 126H246" />
      <path className="service-art__route service-art__route--glow"
        d="M18 88C48 88 48 47 87 53S132 103 170 78 209 39 242 39" />
      <path className="service-art__route"
        d="M18 88C48 88 48 47 87 53S132 103 170 78 209 39 242 39" />
      <g className="service-art__milestone service-art__milestone--start">
        <circle cx="18" cy="88" r="7" /><circle className="service-art__milestone-core" cx="18" cy="88" r="2.5" />
      </g>
      <g className="service-art__milestone"><circle cx="87" cy="53" r="7" /><circle className="service-art__milestone-core" cx="87" cy="53" r="2.5" /></g>
      <g className="service-art__milestone"><circle cx="170" cy="78" r="7" /><circle className="service-art__milestone-core" cx="170" cy="78" r="2.5" /></g>
      <g className="service-art__milestone service-art__milestone--final">
        <circle cx="242" cy="39" r="8" /><circle className="service-art__milestone-core" cx="242" cy="39" r="2.8" />
      </g>
      <text className="service-art__microcopy" x="18" y="108">IDEA</text>
      <text className="service-art__microcopy" x="87" y="35" textAnchor="middle">PRIORITIES</text>
      <text className="service-art__microcopy" x="170" y="99" textAnchor="middle">BUDGET</text>
      <text className="service-art__microcopy" x="242" y="22" textAnchor="end">RELEASE</text>
      <g className="service-art__allocation">
        <text className="service-art__microcopy" x="20" y="145">PLAN</text>
        <rect className="service-art__budget-track" x="66" y="137" width="48" height="5" rx="2.5" />
        <rect className="service-art__budget-bar service-art__budget-bar--one" x="66" y="137" width="31" height="5" rx="2.5" />
        <rect className="service-art__budget-track" x="128" y="137" width="48" height="5" rx="2.5" />
        <rect className="service-art__budget-bar service-art__budget-bar--two" x="128" y="137" width="39" height="5" rx="2.5" />
        <rect className="service-art__budget-track" x="190" y="137" width="48" height="5" rx="2.5" />
        <rect className="service-art__budget-bar service-art__budget-bar--three" x="190" y="137" width="23" height="5" rx="2.5" />
      </g>
    </g>
  );
}
