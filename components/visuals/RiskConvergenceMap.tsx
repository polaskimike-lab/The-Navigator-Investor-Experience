export function RiskConvergenceMap() {
  const nodes = [
    { x: 80, y: 210, label: "Weather", tone: "amber" },
    { x: 210, y: 105, label: "Traffic", tone: "blue" },
    { x: 320, y: 250, label: "Wildlife", tone: "amber" },
    { x: 455, y: 135, label: "Equipment", tone: "red" },
    { x: 585, y: 245, label: "Driver HOS", tone: "amber" },
    { x: 710, y: 120, label: "Customer", tone: "blue" },
    { x: 840, y: 220, label: "Revenue", tone: "red" }
  ];

  const color = {
    blue: "#38BDF8",
    amber: "#F59E0B",
    red: "#EF4444"
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-line bg-obsidian p-4 shadow-glow">
      <div className="absolute inset-0 grid-field opacity-35" />
      <svg viewBox="0 0 920 360" className="relative h-[360px] w-full" aria-label="Risk convergence visualization">
        <defs>
          <linearGradient id="riskFlow" x1="0" x2="1">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
            <stop offset="55%" stopColor="#F59E0B" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0.95" />
          </linearGradient>
          <radialGradient id="riskGlow">
            <stop offset="0%" stopColor="#F8FAFC" stopOpacity="1" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>
        </defs>

        <path
          d="M80 210 C 190 155, 260 150, 320 250 S 475 105, 585 245 S 740 115, 840 220"
          fill="none"
          stroke="url(#riskFlow)"
          strokeWidth="4"
          strokeDasharray="14 10"
          className="risk-line"
        />
        <path
          d="M210 105 C 330 65, 470 80, 585 245"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1.5"
          strokeDasharray="8 12"
          className="risk-line"
          opacity=".65"
        />
        <path
          d="M455 135 C 520 165, 610 190, 710 120"
          fill="none"
          stroke="#EF4444"
          strokeWidth="1.5"
          strokeDasharray="8 12"
          className="risk-line"
          opacity=".7"
        />

        {nodes.map((node) => (
          <g key={node.label}>
            <circle cx={node.x} cy={node.y} r="33" fill={color[node.tone as keyof typeof color]} opacity=".10" />
            <circle cx={node.x} cy={node.y} r="18" fill={color[node.tone as keyof typeof color]} opacity=".20" />
            <circle cx={node.x} cy={node.y} r="6" fill="#F8FAFC" />
            <text
              x={node.x}
              y={node.y + 45}
              textAnchor="middle"
              fill="#CBD5E1"
              fontSize="13"
              fontFamily="monospace"
            >
              {node.label}
            </text>
          </g>
        ))}

        <g>
          <rect x="342" y="300" width="236" height="42" rx="21" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.35)" />
          <text x="460" y="326" textAnchor="middle" fill="#FCA5A5" fontSize="13" fontFamily="monospace">
            SERVICE FAILURE RISK RISING
          </text>
        </g>
      </svg>
    </div>
  );
}
