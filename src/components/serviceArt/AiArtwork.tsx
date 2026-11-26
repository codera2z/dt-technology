export function AiArtwork() {
  return (
    <g>
      <path className="service-art__network" d="M30 45 98 22 129 73 163 31 222 67 171 112 98 22M30 45 58 105 129 73 171 112M58 105 98 22M163 31 171 112" />
      <path className="service-art__network service-art__network--secondary" d="M30 45 129 73 222 67M58 105 222 67" />
      {[[30,45,4],[58,105,4],[98,22,5],[163,31,4],[222,67,5],[171,112,4]].map(([cx, cy, radius], index) => (
        <circle className="service-art__node" key={index} cx={cx} cy={cy} r={radius} />
      ))}
      <circle className="service-art__core-halo" cx="129" cy="73" r="31" />
      <circle className="service-art__core" cx="129" cy="73" r="19" />
      <path className="service-art__core-mark" d="M129 62v22M118 73h22M121 65l16 16M137 65l-16 16" />
      <rect className="service-art__response" x="151" y="112" width="96" height="34" rx="7" />
      <circle className="service-art__response-dot" cx="161" cy="122" r="2.3" />
      <path className="service-art__response-line service-art__response-line--one" d="M169 122H237" />
      <path className="service-art__response-line service-art__response-line--two" d="M161 132H221" />
      <path className="service-art__sparkle" d="m202 13 3-7 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" />
    </g>
  );
}
