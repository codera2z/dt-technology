export function AutomationArtwork() {
  return (
    <g>
      <text className="service-art__microcopy" x="18" y="22">INPUTS</text>
      <text className="service-art__microcopy" x="122" y="22" textAnchor="middle">WORKFLOW</text>
      <text className="service-art__microcopy" x="242" y="22" textAnchor="end">OUTPUT</text>
      <rect className="service-art__app" x="16" y="35" width="58" height="38" rx="7" />
      <rect className="service-art__app" x="16" y="86" width="58" height="38" rx="7" />
      <path className="service-art__app-mark" d="M28 48h10m-5-5v10m-5 44h15m-15 7h10" />
      <circle className="service-art__app-dot" cx="60" cy="49" r="3" />
      <path className="service-art__flow" d="M74 54C91 54 91 75 105 75M74 105C92 105 91 83 105 83M139 79C161 79 158 61 181 61" />
      <path className="service-art__flow service-art__flow--return" d="M139 87C160 87 158 111 181 111" />
      <circle className="service-art__pulse service-art__pulse--one" cx="75" cy="54" r="3" />
      <circle className="service-art__pulse service-art__pulse--two" cx="75" cy="105" r="3" />
      <circle className="service-art__hub-halo" cx="122" cy="80" r="30" />
      <circle className="service-art__hub" cx="122" cy="80" r="21" />
      <g className="service-art__gear" transform="translate(122 80)">
        <path d="M0-14 4-18 8-14 14-14 14-8 18-4 14 0 18 5 14 9 14 15 8 15 4 19 0 15-5 19-9 15-15 15-15 9-19 5-15 0-19-4-15-8-15-14-9-14-5-18Z" />
        <circle cx="0" cy="0" r="5" />
      </g>
      <rect className="service-art__app service-art__app--output" x="181" y="42" width="63" height="78" rx="8" />
      <circle className="service-art__output-check" cx="195" cy="58" r="5" />
      <path className="service-art__output-checkmark" d="m192 58 2 2 4-5" />
      <path className="service-art__app-mark" d="M207 57h26M192 76h39M192 85h29M192 99h36" />
    </g>
  );
}
