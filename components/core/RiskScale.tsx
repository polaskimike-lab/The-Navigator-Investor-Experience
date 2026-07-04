export function RiskScale({ value }: { value: number }) {
  const status =
    value >= 81 ? "Critical" :
    value >= 61 ? "High" :
    value >= 41 ? "Elevated" :
    value >= 21 ? "Watch" :
    "Low";

  return (
    <div className="rounded-2xl border border-line bg-white/[0.045] p-5">
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
          PTR™
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
          {status}
        </p>
      </div>
      <div className="mt-4 flex items-end justify-between gap-4">
        <p className="text-5xl font-semibold tracking-[-0.06em] text-white">{value}</p>
        <p className="text-sm text-muted">0 best / 100 highest risk</p>
      </div>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full ptr-gradient" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
