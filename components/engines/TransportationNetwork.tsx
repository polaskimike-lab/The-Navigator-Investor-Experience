export function TransportationNetwork() {
  const modes = [
    { label: "Trucking", x: 140, y: 250, color: "#38BDF8", copy: "Fleet PTR, fuel optimization, service assurance" },
    { label: "Rail", x: 310, y: 155, color: "#10B981", copy: "Consist risk, interchange, track/weather intelligence" },
    { label: "Marine", x: 505, y: 285, color: "#F59E0B", copy: "Port timing, weather windows, cargo continuity" },
    { label: "Aviation", x: 685, y: 125, color: "#38BDF8", copy: "Maintenance, weather, routing, turnaround risk" },
    { label: "Consumer", x: 830, y: 260, color: "#EF4444", copy: "HUD, roadway intelligence, V2X safety network" }
  ];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-line bg-obsidian p-5 shadow-glow">
      <div className="absolute inset-0 grid-field opacity-35" />
      <svg viewBox="0 0 980 430" className="relative h-[430px] w-full" aria-label="Transportation network expansion visualization">
        <defs>
          <linearGradient id="networkFlow" x1="0" x2="1">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id="networkCore">
            <stop offset="0%" stopColor="#E0F2FE" stopOpacity="1" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>
        </defs>

        <path d="M140 250 C 240 90, 390 85, 505 285 S 735 375, 830 260"
          fill="none" stroke="url(#networkFlow)" strokeWidth="4" strokeDasharray="14 10" className="risk-line" />
        <path d="M310 155 C 420 30, 575 45, 685 125 S 770 205, 830 260"
          fill="none" stroke="#38BDF8" strokeWidth="2" strokeDasharray="8 12" className="risk-line" opacity=".65" />
        <path d="M140 250 C 310 335, 475 355, 685 125"
          fill="none" stroke="#10B981" strokeWidth="1.8" strokeDasharray="8 12" className="risk-line" opacity=".55" />

        <circle cx="490" cy="215" r="86" fill="url(#networkCore)" opacity=".32" />
        <circle cx="490" cy="215" r="8" fill="#F8FAFC" />
        <text x="490" y="220" textAnchor="middle" fill="#E0F2FE" fontSize="13" fontFamily="monospace">
          NAVIGATOR OS
        </text>

        {modes.map((mode) => (
          <g key={mode.label}>
            <circle cx={mode.x} cy={mode.y} r="42" fill={mode.color} opacity=".10" />
            <circle cx={mode.x} cy={mode.y} r="22" fill={mode.color} opacity=".22" />
            <circle cx={mode.x} cy={mode.y} r="6" fill="#F8FAFC" />
            <text x={mode.x} y={mode.y + 56} textAnchor="middle" fill="#CBD5E1" fontSize="14" fontFamily="monospace">
              {mode.label}
            </text>
          </g>
        ))}
      </svg>

      <div className="relative mt-4 grid gap-4 md:grid-cols-5">
        {modes.map((mode) => (
          <div key={mode.label} className="rounded-2xl border border-line bg-white/[0.045] p-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: mode.color }}>{mode.label}</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">{mode.copy}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
