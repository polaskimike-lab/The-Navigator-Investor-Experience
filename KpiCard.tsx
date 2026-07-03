export function KpiCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="mission-panel rounded-3xl p-5 shadow-glow">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">{label}</p>
      <p className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p>
    </div>
  );
}
