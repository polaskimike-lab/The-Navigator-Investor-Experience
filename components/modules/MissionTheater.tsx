import { missions } from "@/data/platform";
export function MissionTheater() {
  return <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
    <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-line bg-obsidian p-5 shadow-glow">
      <div className="absolute inset-0 grid-field opacity-35" />
      <svg viewBox="0 0 900 500" className="relative h-[500px] w-full">
        <defs><linearGradient id="routeFlow" x1="0" x2="1"><stop offset="0%" stopColor="#38BDF8" stopOpacity=".2"/><stop offset="50%" stopColor="#38BDF8" stopOpacity=".9"/><stop offset="100%" stopColor="#F59E0B" stopOpacity=".9"/></linearGradient></defs>
        <path d="M80 350 C 210 210, 300 285, 430 170 S 690 130, 810 300" fill="none" stroke="url(#routeFlow)" strokeWidth="4" strokeDasharray="14 10" className="risk-line" />
        <path d="M120 140 C 250 220, 400 90, 535 235 S 700 390, 815 145" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="8 12" className="risk-line" opacity=".6" />
        {[[80,350,"Truck"],[430,170,"Truck"],[810,300,"Rail"],[535,235,"Air"],[815,145,"Port"]].map(([x,y,label]: any) => <g key={`${x}-${y}`}><circle cx={x} cy={y} r="26" fill="#38BDF8" opacity=".15"/><circle cx={x} cy={y} r="6" fill="#F8FAFC"/><text x={x} y={y+38} textAnchor="middle" fill="#CBD5E1" fontSize="12" fontFamily="monospace">{label}</text></g>)}
      </svg>
    </div>
    <div className="grid gap-4">
      <div className="mission-panel rounded-[2rem] p-6"><p className="font-mono text-xs uppercase tracking-[0.28em] text-blueIntel">Mission Queue</p><div className="mt-4 grid gap-3">{missions.map(m => <div key={m.id} className="rounded-2xl border border-line bg-black/25 p-4"><div className="flex justify-between"><b>{m.id}</b><span className={m.ptr>65?"text-redCritical":m.ptr>50?"text-amberRisk":"text-greenSafe"}>PTR {m.ptr}</span></div><p className="mt-2 text-sm text-slate-400">{m.route}</p><p className="mt-1 text-xs text-muted">{m.status} · {m.revenue}</p></div>)}</div></div>
    </div>
  </div>;
}