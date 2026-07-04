export function MissionCanvasPreview() {
  const layers = ["Driver", "Asset", "Cargo", "Route", "Weather", "Wildlife", "Revenue"];
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-line bg-obsidian p-5 shadow-glow">
      <div className="absolute inset-0 grid-field opacity-30" />
      <div className="relative grid gap-4 lg:grid-cols-[.7fr_1fr_.8fr]">
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">Mission layers</p>
          {layers.map((layer) => <div key={layer} className="rounded-2xl border border-line bg-white/[0.045] p-4"><p className="font-mono text-xs uppercase tracking-[0.18em] text-blueIntel">{layer}</p></div>)}
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-72 w-72 rounded-full border border-blueIntel/30 bg-blueIntel/[0.05]">
            <div className="absolute inset-8 rounded-full border border-amberRisk/30 orbit-mid" />
            <div className="absolute inset-16 rounded-full border border-greenSafe/30 orbit-slow" />
            <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blueIntel/20 shadow-glow" />
            <p className="absolute inset-x-0 top-[58%] text-center font-mono text-xs uppercase tracking-[0.2em] text-blueIntel">Intelligence Core</p>
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">Outputs</p>
          {["PTR 72 → 41", "$87K protected", "Human approval", "Service Assurance +24"].map((out) => <div key={out} className="rounded-2xl border border-line bg-black/25 p-4"><p className="text-sm font-semibold text-slate-200">{out}</p></div>)}
        </div>
      </div>
    </div>
  );
}
