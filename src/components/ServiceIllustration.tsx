export type ServiceKind = "strategy" | "web" | "ai" | "automation" | "lifecycle";

type ServiceIllustrationProps = { kind: ServiceKind };

export function ServiceIllustration({ kind }: ServiceIllustrationProps) {
  return (
    <svg
      className={"service-illustration service-illustration--" + kind}
      viewBox="0 0 220 132"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <rect className="service-art__frame" x="9" y="9" width="202" height="114" rx="13" />
      {kind === "strategy" && (
        <g>
          <path className="service-art__route" d="M27 85 C48 85 48 45 76 45 S108 91 133 70 S160 35 193 35" />
          <circle className="service-art__milestone" cx="27" cy="85" r="4" />
          <circle className="service-art__milestone" cx="76" cy="45" r="4" />
          <circle className="service-art__milestone" cx="133" cy="70" r="4" />
          <circle className="service-art__milestone service-art__milestone--last" cx="193" cy="35" r="5" />
          <path className="service-art__baseline" d="M27 105H193" />
          <rect className="service-art__bar service-art__bar--one" x="44" y="91" width="13" height="14" rx="3" />
          <rect className="service-art__bar service-art__bar--two" x="104" y="79" width="13" height="26" rx="3" />
          <rect className="service-art__bar service-art__bar--three" x="164" y="59" width="13" height="46" rx="3" />
          <text className="service-art__counter" x="181" y="108">05</text>
        </g>
      )}
      {kind === "web" && (
        <g>
          <rect className="service-art__window" x="25" y="24" width="143" height="88" rx="7" />
          <path className="service-art__window-line" d="M25 42H168" />
          <circle className="service-art__window-dot" cx="36" cy="33" r="2" />
          <circle className="service-art__window-dot" cx="44" cy="33" r="2" />
          <circle className="service-art__window-dot" cx="52" cy="33" r="2" />
          <rect className="service-art__web-block" x="37" y="53" width="51" height="46" rx="4" />
          <path className="service-art__web-line" d="M98 58H154M98 68H145M98 84H154M98 94H137" />
          <rect className="service-art__device" x="151" y="54" width="39" height="62" rx="7" />
          <path className="service-art__device-line" d="M162 66H179M162 75H179M162 84H175" />
          <path className="service-art__cursor" d="m181 19 18 18-8 1-3 8-7-27Z" />
          <circle className="service-art__click" cx="177" cy="80" r="7" />
        </g>
      )}
      {kind === "ai" && (
        <g>
          <path className="service-art__network" d="M31 71 64 39 88 77 116 42 139 78 171 49M31 71 88 77 116 42 171 49M64 39 116 42" />
          <circle className="service-art__node" cx="31" cy="71" r="4" />
          <circle className="service-art__node" cx="64" cy="39" r="5" />
          <circle className="service-art__node" cx="88" cy="77" r="4" />
          <circle className="service-art__node" cx="116" cy="42" r="5" />
          <circle className="service-art__node" cx="139" cy="78" r="4" />
          <circle className="service-art__node" cx="171" cy="49" r="5" />
          <rect className="service-art__chat" x="120" y="86" width="72" height="25" rx="7" />
          <path className="service-art__chat-tail" d="m137 111-5 7 1-7" />
          <path className="service-art__chat-line service-art__chat-line--one" d="M132 96H179" />
          <path className="service-art__chat-line service-art__chat-line--two" d="M132 103H164" />
          <path className="service-art__sparkle" d="m190 28 3-8 3 8 8 3-8 3-3 8-3-8-8-3 8-3Z" />
        </g>
      )}
      {kind === "automation" && (
        <g>
          <rect className="service-art__tile" x="25" y="34" width="38" height="38" rx="9" />
          <rect className="service-art__tile" x="25" y="82" width="38" height="25" rx="7" />
          <rect className="service-art__tile" x="157" y="57" width="37" height="38" rx="9" />
          <path className="service-art__tile-mark" d="M37 53h14M44 46v14M36 94h16" />
          <path className="service-art__connection" d="M63 53C91 53 91 76 112 76S135 76 157 76M63 94C89 94 91 76 112 76" />
          <circle className="service-art__hub" cx="112" cy="76" r="15" />
          <g transform="translate(112 76)">
            <g className="service-art__gear">
              <path d="M0-9 3-15 8-12 13-13 13-7 18-3 15 2 16 8 10 9 7 15 2 12-4 14-5 8-11 5-8 0-11-5-6-8-5-14Z" />
              <circle cx="2" cy="0" r="4" />
            </g>
          </g>
          <circle className="service-art__pulse service-art__pulse--one" cx="63" cy="53" r="3" />
          <circle className="service-art__pulse service-art__pulse--two" cx="63" cy="94" r="3" />
        </g>
      )}
      {kind === "lifecycle" && (
        <g>
          <path className="service-art__cycle" d="M110 24a43 43 0 0 1 38 23M164 66a43 43 0 0 1-38 43M110 109a43 43 0 0 1-38-23M56 66a43 43 0 0 1 38-42" />
          <path className="service-art__cycle-arrow" d="m142 40 7 7-10 1M127 101l-1 10-8-6M76 78l-9 8-2-10M94 32l-1-10 9 4" />
          <rect className="service-art__layer service-art__layer--back" x="89" y="54" width="54" height="38" rx="5" />
          <rect className="service-art__layer service-art__layer--front" x="81" y="47" width="54" height="38" rx="5" />
          <path className="service-art__layer-line" d="M91 59H125M91 68H118M91 77H109" />
          <circle className="service-art__orbit-node" cx="110" cy="17" r="4" />
          <circle className="service-art__orbit-node" cx="166" cy="66" r="4" />
          <circle className="service-art__orbit-node" cx="110" cy="115" r="4" />
        </g>
      )}
    </svg>
  );
}
