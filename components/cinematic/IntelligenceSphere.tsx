export function IntelligenceSphere({ compact = false }: { compact?: boolean }) {
  const nodes = [
    ["Weather", "left-[7%] top-[20%]", "text-amberRisk"],
    ["Traffic", "right-[8%] top-[23%]", "text-blueIntel"],
    ["Driver", "left-[8%] bottom-[22%]", "text-greenSafe"],
    ["Equipment", "right-[8%] bottom-[24%]", "text-redCritical"],
    ["Fuel", "left-[33%] top-[5%]", "text-amberRisk"],
    ["Revenue", "right-[30%] bottom-[7%]", "text-redCritical"],
    ["Cargo", "right-[34%] top-[7%]", "text-blueIntel"],
    ["Route", "left-[33%] bottom-[7%]", "text-greenSafe"]
  ];

  return (
    <div className={`relative mx-auto w-full overflow-hidden rounded-[2.5rem] border border-line bg-obsidian shadow-deepGlow ${compact ? "h-[430px]" : "h-[680px]"}`}>
      <div className="absolute inset-0 cinema-grid opacity-55" />
      <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blueIntel/20 orbit-slow" />
      <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-r border-amberRisk/55 orbit-mid" />
      <div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-t border-greenSafe/45 orbit-fast" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1100 700" aria-hidden="true">
        <defs>
          <radialGradient id="coreGlowV4">
            <stop offset="0%" stopColor="#E0F2FE" stopOpacity="1" />
            <stop offset="36%" stopColor="#38BDF8" stopOpacity=".55" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sphereFlowV4" x1="0" x2="1">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity=".2" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity=".95" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity=".85" />
          </linearGradient>
        </defs>
        <circle cx="550" cy="350" r="118" fill="url(#coreGlowV4)" opacity=".86" />
        <circle cx="550" cy="350" r="8" fill="#F8FAFC" />
        <path d="M130 245 C 300 70, 470 210, 550 350 S 785 545, 975 280" fill="none" stroke="url(#sphereFlowV4)" strokeWidth="4" className="flow-line" />
        <path d="M125 500 C 270 330, 420 420, 550 350 S 795 110, 980 205" fill="none" stroke="#F59E0B" strokeWidth="2" className="flow-line" opacity=".74" />
        <path d="M275 85 C 365 245, 430 260, 550 350 S 705 430, 840 610" fill="none" stroke="#10B981" strokeWidth="2" className="flow-line" opacity=".65" />
      </svg>

      <div className="absolute left-1/2 top-1/2 w-80 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-blueIntel">Navigator Intelligence Sphere™</p>
        <h3 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-white">Mission Recommendation</h3>
        <p className="mt-5 text-sm leading-6 text-slate-300">Advance departure. Delay fuel. Stage contingency.</p>
      </div>

      {nodes.map(([label, cls, tone]) => (
        <div key={label} className={`absolute ${cls} rounded-2xl border border-line bg-white/[0.06] px-4 py-3 backdrop-blur-xl ${tone}`}>
          <p className="font-mono text-xs uppercase tracking-[0.18em]">{label}</p>
        </div>
      ))}

      <div className="absolute bottom-6 left-6 right-6 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-greenSafe/30 bg-greenSafe/10 p-4"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-greenSafe">PTR</p><p className="mt-2 text-2xl font-semibold text-white">72 → 41</p></div>
        <div className="rounded-2xl border border-amberRisk/30 bg-amberRisk/10 p-4"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-amberRisk">Revenue Protected</p><p className="mt-2 text-2xl font-semibold text-white">$87K</p></div>
        <div className="rounded-2xl border border-blueIntel/30 bg-blueIntel/10 p-4"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-blueIntel">Confidence</p><p className="mt-2 text-2xl font-semibold text-white">96.8%</p></div>
      </div>
    </div>
  );
}
