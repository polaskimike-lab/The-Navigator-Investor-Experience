export function RiskConvergenceMap() {
  const nodes = [
    { x: 80, y: 210, label: "Weather", tone: "#F59E0B" },
    { x: 210, y: 105, label: "Traffic", tone: "#38BDF8" },
    { x: 320, y: 250, label: "Wildlife", tone: "#F59E0B" },
    { x: 455, y: 135, label: "Equipment", tone: "#EF4444" },
    { x: 585, y: 245, label: "Driver HOS", tone: "#F59E0B" },
    { x: 710, y: 120, label: "Customer", tone: "#38BDF8" },
    { x: 840, y: 220, label: "Revenue", tone: "#EF4444" }
  ];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-line bg-obsidian p-4 shadow-glow">
      <div className="absolute inset-0 grid-field opacity-35" />
      <svg viewBox="0 0 920 360" className="relative h-[360px] w-full" aria-label="Risk convergence visualization">
        <defs><linearGradient id="riskFlow" x1="0" x2="1"><stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" /><stop offset="55%" stopColor="#F59E0B" stopOpacity="0.9" /><stop offset="100%" stopColor="#EF4444" stopOpacity="0.95" /></linearGradient></defs>
        <path d="M80 210 C 190 155, 260 150, 320 250 S 475 105, 585 245 S 740 115, 840 220" fill="none" stroke="url(#riskFlow)" strokeWidth="4" strokeDasharray="14 10" className="risk-line" />
        {nodes.map((node) => (
          <g key={node.label}>
            <circle cx={node.x} cy={node.y} r="33" fill={node.tone} opacity=".10" />
            <circle cx={node.x} cy={node.y} r="18" fill={node.tone} opacity=".20" />
            <circle cx={node.x} cy={node.y} r="6" fill="#F8FAFC" />
            <text x={node.x} y={node.y + 45} textAnchor="middle" fill="#CBD5E1" fontSize="13" fontFamily="monospace">{node.label}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
