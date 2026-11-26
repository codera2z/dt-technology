export function LifecycleArtwork() {
  return (
    <g>
      <ellipse className="service-art__cycle-track" cx="130" cy="80" rx="101" ry="57" />
      <path className="service-art__cycle service-art__cycle--one" d="M37 60A101 57 0 0 1 131 23" />
      <path className="service-art__cycle service-art__cycle--two" d="M225 83A101 57 0 0 1 143 136" />
      <path className="service-art__cycle service-art__cycle--three" d="M84 132A101 57 0 0 1 29 81" />
      <path className="service-art__cycle-arrow" d="m123 19 9 4-8 6M220 73l5 10-10-1M37 89l-8-8 10-2" />
      <circle className="service-art__orbit-node service-art__orbit-node--one" cx="37" cy="60" r="5" />
      <circle className="service-art__orbit-node service-art__orbit-node--two" cx="225" cy="83" r="5" />
      <circle className="service-art__orbit-node service-art__orbit-node--three" cx="84" cy="132" r="5" />
      <rect className="service-art__product-layer service-art__product-layer--back" x="91" y="49" width="83" height="61" rx="7" />
      <rect className="service-art__product-layer service-art__product-layer--front" x="81" y="40" width="83" height="61" rx="7" />
      <path className="service-art__product-line" d="M94 57H151M94 67H143M94 78H151" />
      <rect className="service-art__product-status" x="94" y="86" width="39" height="6" rx="3" />
      <text className="service-art__microcopy" x="30" y="42">BUILD</text>
      <text className="service-art__microcopy" x="229" y="105" textAnchor="end">SHIP</text>
      <text className="service-art__microcopy" x="130" y="151" textAnchor="middle">IMPROVE</text>
    </g>
  );
}
