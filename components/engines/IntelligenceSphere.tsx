export function IntelligenceSphere() {
  const positions = [
    ["Weather", "left-[10%] top-[18%]", "text-amberRisk"],
    ["Traffic", "right-[12%] top-[22%]", "text-blueIntel"],
    ["Driver", "left-[8%] bottom-[24%]", "text-greenSafe"],
    ["Equipment", "right-[10%] bottom-[26%]", "text-redCritical"],
    ["Cargo", "left-[35%] top-[6%]", "text-blueIntel"],
    ["Route", "right-[35%] top-[8%]", "text-amberRisk"],
    ["Wildlife", "left-[32%] bottom-[8%]", "text-amberRisk"],
    ["Revenue", "right-[30%] bottom-[9%]", "text-redCritical"]
  ];

  return (
    <div className="relative mx-auto h-[560px] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-line bg-obsidian shadow-deepGlow">
      <div className="absolute inset-0 grid-field opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-[31rem] w-[31rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blueIntel/15 glow-breathe" />
      <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blueIntel/20 orbit-slow" />
      <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-r border-amberRisk/50 orbit-mid" />
      <div className="absolute left-1/2 top-1/2 h-[16rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-t border-greenSafe/45 orbit-fast" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 980 560" aria-hidden="true">
        <defs>
          <radialGradient id="coreGlowV31"><stop offset="0%" stopColor="#E0F2FE" stopOpacity="1" /><stop offset="35%" stopColor="#38BDF8" stopOpacity=".55" /><stop offset="100%" stopColor="#38BDF8" stopOpacity="0" /></radialGradient>
          <linearGradient id="sphereFlowV31" x1="0" x2="1"><stop offset="0%" stopColor="#38BDF8" stopOpacity=".2" /><stop offset="50%" stopColor="#38BDF8" stopOpacity=".9" /><stop offset="100%" stopColor="#F59E0B" stopOpacity=".8" /></linearGradient>
        </defs>
        <circle cx="490" cy="280" r="108" fill="url(#coreGlowV31)" opacity=".88" />
        <circle cx="490" cy="280" r="8" fill="#F8FAFC" />
        <path d="M150 190 C 290 90, 445 165, 490 280 S 735 430, 860 270" fill="none" stroke="url(#sphereFlowV31)" strokeWidth="3" strokeDasharray="12 10" className="risk-line" />
        <path d="M130 380 C 250 260, 390 340, 490 280 S 705 95, 850 175" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="8 12" className="risk-line" opacity=".75" />
        <path d="M250 70 C 360 220, 420 210, 490 280 S 650 330, 730 500" fill="none" stroke="#10B981" strokeWidth="1.6" strokeDasharray="8 12" className="risk-line" opacity=".65" />
      </svg>
      <div className="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-blueIntel">Navigator Intelligence</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">Mission Recommendation</h3>
        <p className="mt-4 text-sm leading-6 text-slate-300">Delay fueling 63 miles. Advance departure window. Stage transload contingency.</p>
      </div>
      {positions.map(([label, cls, tone]) => (
        <div key={label} className={`absolute ${cls} rounded-2xl border border-line bg-white/[0.055] px-4 py-3 backdrop-blur-xl ${tone}`}>
          <p className="font-mono text-xs uppercase tracking-[0.18em]">{label}</p>
        </div>
      ))}
      <div className="absolute bottom-6 left-6 right-6 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-greenSafe/30 bg-greenSafe/10 p-4"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-greenSafe">PTR change</p><p className="mt-2 text-2xl font-semibold text-white">72 → 41</p></div>
        <div className="rounded-2xl border border-amberRisk/30 bg-amberRisk/10 p-4"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-amberRisk">Revenue protected</p><p className="mt-2 text-2xl font-semibold text-white">$87K</p></div>
        <div className="rounded-2xl border border-blueIntel/30 bg-blueIntel/10 p-4"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-blueIntel">Confidence</p><p className="mt-2 text-2xl font-semibold text-white">96.8%</p></div>
      </div>
    </div>
  );
}
