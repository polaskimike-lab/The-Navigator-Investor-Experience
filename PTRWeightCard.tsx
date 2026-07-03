export function PTRWeightCard({ label, value, detail }: { label: string; value: number; detail: string }) {
  return (
    <div className="rounded-2xl border border-line bg-white/[0.045] p-5">
      <div className="flex items-start justify-between gap-5">
        <h3 className="text-lg font-semibold text-white">{label}</h3>
        <span className="font-mono text-sm text-amberRisk">{value}%</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-400">{detail}</p>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full ptr-gradient" style={{ width: `${value * 5}%` }} />
      </div>
    </div>
  );
}
