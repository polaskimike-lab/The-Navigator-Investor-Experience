export function RoadmapCard({ phase, title, copy }: { phase: string; title: string; copy: string }) {
  return (
    <div className="mission-panel rounded-3xl p-6">
      <p className="font-mono text-xs uppercase tracking-[0.26em] text-muted">Phase {phase}</p>
      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-slate-400">{copy}</p>
    </div>
  );
}
