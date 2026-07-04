export function MissionCanvasPreview() {
  const layers = [
    { label: "Driver", y: 70, color: "#10B981" },
    { label: "Asset", y: 118, color: "#38BDF8" },
    { label: "Cargo", y: 166, color: "#38BDF8" },
    { label: "Route", y: 214, color: "#F59E0B" },
    { label: "Weather", y: 262, color: "#F59E0B" },
    { label: "Wildlife", y: 310, color: "#F59E0B" },
    { label: "Revenue", y: 358, color: "#EF4444" }
  ];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-line bg-obsidian p-5 shadow-glow">
      <div className="absolute inset-0 grid-field opacity-30" />
      <svg viewBox="0 0 980 430" className="relative h-[430px] w-full" aria-label="Mission Canvas preview">
        <defs>
          <linearGradient id="canvasFlow" x1="0" x2="1">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.95" />
          </linearGradient>
          <radialGradient id="canvasCore">
            <stop offset="0%" stopColor="#E0F2FE" stopOpacity="1" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="42" y="38" width="238" height="354" rx="28" fill="rgba(255,255,255,.035)" stroke="rgba(255,255,255,.12)" />
        <text x="70" y="78" fill="#94A3B8" fontSize="12" fontFamily="monospace" letterSpacing="3">MISSION LAYERS</text>

        {layers.map((layer, index) => (
          <g key={layer.label}>
            <rect x="68" y={layer.y} width="185" height="31" rx="15.5" fill={`${layer.color}22`} stroke={`${layer.color}66`} />
            <circle cx="88" cy={layer.y + 15.5} r="4" fill={layer.color} />
            <text x="105" y={layer.y + 20} fill="#E2E8F0" fontSize="13" fontFamily="monospace">
              {layer.label}
            </text>
            <path
              d={`M254 ${layer.y + 15} C 350 ${layer.y + 15}, 365 215, 465 215`}
              fill="none"
              stroke={layer.color}
              strokeWidth="1.4"
              strokeDasharray="6 8"
              opacity=".68"
              className="risk-line"
            />
          </g>
        ))}

        <g>
          <circle cx="520" cy="215" r="118" fill="rgba(56,189,248,.045)" stroke="rgba(56,189,248,.22)" />
          <circle cx="520" cy="215" r="76" fill="rgba(56,189,248,.06)" stroke="rgba(56,189,248,.32)" />
          <circle cx="520" cy="215" r="34" fill="url(#canvasCore)" opacity=".75" />
          <circle cx="520" cy="215" r="7" fill="#E0F2FE" />
          <text x="520" y="342" textAnchor="middle" fill="#CBD5E1" fontSize="13" fontFamily="monospace">
            NAVIGATOR INTELLIGENCE CORE
          </text>
        </g>

        <path
          d="M600 215 C 690 128, 772 138, 846 190 S 910 300, 838 324 S 686 306, 600 215"
          fill="none"
          stroke="url(#canvasFlow)"
          strokeWidth="4"
          strokeDasharray="14 10"
          className="risk-line"
        />

        <g>
          <rect x="700" y="70" width="222" height="86" rx="24" fill="rgba(16,185,129,.075)" stroke="rgba(16,185,129,.35)" />
          <text x="730" y="106" fill="#86EFAC" fontSize="12" fontFamily="monospace" letterSpacing="2">MISSION RECOMMENDATION</text>
          <text x="730" y="130" fill="#E2E8F0" fontSize="15">Delay departure 3.5 hours</text>
        </g>

        <g>
          <rect x="700" y="182" width="222" height="86" rx="24" fill="rgba(245,158,11,.075)" stroke="rgba(245,158,11,.35)" />
          <text x="730" y="218" fill="#FCD34D" fontSize="12" fontFamily="monospace" letterSpacing="2">EXPECTED CHANGE</text>
          <text x="730" y="242" fill="#E2E8F0" fontSize="15">PTR 72 → 41</text>
        </g>

        <g>
          <rect x="700" y="294" width="222" height="86" rx="24" fill="rgba(56,189,248,.075)" stroke="rgba(56,189,248,.35)" />
          <text x="730" y="330" fill="#7DD3FC" fontSize="12" fontFamily="monospace" letterSpacing="2">FINANCIAL IMPACT</text>
          <text x="730" y="354" fill="#E2E8F0" fontSize="15">$87K revenue protected</text>
        </g>
      </svg>
    </div>
  );
}
