export function RecommendationCard({
  index,
  title,
  impact,
  delta,
  copy
}: {
  index: number;
  title: string;
  impact: string;
  delta: string;
  copy: string;
}) {
  return (
    <article className="mission-panel rounded-3xl p-6">
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-blueIntel">Option 0{index}</span>
        <span className="rounded-full border border-greenSafe/30 bg-greenSafe/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-greenSafe">
          Human approval
        </span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
      <p className="mt-4 min-h-20 text-sm leading-6 text-slate-400">{copy}</p>
      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-line bg-black/25 p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Risk change</p>
          <p className="mt-2 text-xl font-semibold text-greenSafe">{delta}</p>
        </div>
        <div className="rounded-2xl border border-line bg-black/25 p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Impact</p>
          <p className="mt-2 text-xl font-semibold text-amberRisk">{impact}</p>
        </div>
      </div>
    </article>
  );
}
