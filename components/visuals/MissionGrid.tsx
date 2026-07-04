export function MissionGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-field opacity-45" />
      <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blueIntel/15" />
      <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blueIntel/20" />
      <div className="absolute left-1/2 top-1/2 h-[14rem] w-[14rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amberRisk/20" />
      <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-t border-blueIntel/70 animate-[spin_18s_linear_infinite]" />
      <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-r border-amberRisk/55 animate-[spin_12s_linear_infinite_reverse]" />

      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 1200 720" aria-hidden="true">
        <defs>
          <linearGradient id="missionPath" x1="0" x2="1">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.05" />
            <stop offset="45%" stopColor="#38BDF8" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.75" />
          </linearGradient>
          <radialGradient id="missionNode">
            <stop offset="0%" stopColor="#E0F2FE" stopOpacity="1" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>
        </defs>

        <path
          d="M80 510 C 220 410, 315 455, 455 330 S 740 215, 900 330 S 1050 500, 1140 420"
          fill="none"
          stroke="url(#missionPath)"
          strokeWidth="3"
          strokeDasharray="12 10"
          className="risk-line"
        />
        <path
          d="M130 230 C 280 330, 410 160, 560 255 S 780 470, 1040 170"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1.6"
          strokeDasharray="6 12"
          className="risk-line"
          opacity=".55"
        />
        {[
          [120, 490],
          [295, 420],
          [455, 330],
          [650, 255],
          [900, 330],
          [1040, 170],
          [1075, 435]
        ].map(([x, y], index) => (
          <g key={index}>
            <circle cx={x} cy={y} r="28" fill="url(#missionNode)" opacity=".45" />
            <circle cx={x} cy={y} r="4.5" fill="#E0F2FE" />
          </g>
        ))}
      </svg>
    </div>
  );
}
