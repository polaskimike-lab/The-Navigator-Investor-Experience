export function IntelligenceSphere() {
  const nodes = [["Weather","left-[10%] top-[18%]","text-amberRisk"],["Traffic","right-[12%] top-[22%]","text-blueIntel"],["Driver","left-[8%] bottom-[24%]","text-greenSafe"],["Equipment","right-[10%] bottom-[26%]","text-redCritical"],["Fuel","left-[35%] top-[6%]","text-amberRisk"],["Revenue","right-[30%] bottom-[9%]","text-redCritical"]];
  return <div className="relative h-[520px] overflow-hidden rounded-[2rem] border border-line bg-obsidian shadow-glow">
    <div className="absolute inset-0 grid-field opacity-40" />
    <div className="absolute left-1/2 top-1/2 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blueIntel/20 orbit-slow" />
    <div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-r border-amberRisk/50 orbit-mid" />
    <div className="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-blueIntel">Intelligence Sphere™ 2.0</p>
      <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">Mission Recommendation</h3>
      <p className="mt-4 text-sm leading-6 text-slate-300">Advance departure. Delay fuel. Stage contingency.</p>
    </div>
    {nodes.map(([label, cls, tone]) => <div key={label} className={`absolute ${cls} rounded-2xl border border-line bg-white/[0.055] px-4 py-3 backdrop-blur-xl ${tone}`}><p className="font-mono text-xs uppercase tracking-[0.18em]">{label}</p></div>)}
    <div className="absolute bottom-6 left-6 right-6 grid gap-3 md:grid-cols-3">
      <div className="rounded-2xl border border-greenSafe/30 bg-greenSafe/10 p-4"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-greenSafe">PTR</p><p className="mt-2 text-2xl font-semibold text-white">72 → 41</p></div>
      <div className="rounded-2xl border border-amberRisk/30 bg-amberRisk/10 p-4"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-amberRisk">Revenue Protected</p><p className="mt-2 text-2xl font-semibold text-white">$87K</p></div>
      <div className="rounded-2xl border border-blueIntel/30 bg-blueIntel/10 p-4"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-blueIntel">Confidence</p><p className="mt-2 text-2xl font-semibold text-white">96.8%</p></div>
    </div>
  </div>;
}