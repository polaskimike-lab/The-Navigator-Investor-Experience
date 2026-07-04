import { MetricTile } from "@/components/core/MetricTile";

export function HeroScene() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-16 text-center">
      <div className="absolute inset-0 grid-field opacity-45" />
      <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blueIntel/15" />
      <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-t border-blueIntel/70 orbit-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.11),transparent_28rem),linear-gradient(to_bottom,rgba(5,7,11,0.10),#05070B_94%)]" />

      <div className="relative z-10 max-w-7xl">
        <div className="mx-auto mb-8 flex w-fit items-center gap-3 rounded-full border border-blueIntel/30 bg-blueIntel/10 px-5 py-3 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-greenSafe shadow-[0_0_18px_rgba(16,185,129,.8)]" />
          <span className="font-mono text-xs uppercase tracking-[0.26em] text-blueIntel">Mission Briefing Online</span>
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.45em] text-blueIntel/80">Genesis Security Solutions presents</p>
        <h1 className="mx-auto mt-8 max-w-6xl text-6xl font-semibold leading-[.84] tracking-[-0.08em] text-white md:text-8xl lg:text-9xl">THE NAVIGATOR™</h1>
        <p className="mx-auto mt-7 max-w-3xl text-xl leading-8 text-slate-300 md:text-2xl">Transportation Risk Intelligence Network</p>
        <p className="mx-auto mt-10 max-w-5xl text-3xl font-light leading-tight tracking-[-0.045em] text-white md:text-5xl">Every shipment carries more than cargo. It carries promises.</p>

        <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-4">
          <MetricTile label="Mission priority" value="Human" detail="Life safety governs every recommendation." tone="green" />
          <MetricTile label="Core metric" value="PTR™" detail="0 best / 100 highest risk." tone="blue" />
          <MetricTile label="Pilot target" value="100" detail="Initial commercial fleet deployment." tone="amber" />
          <MetricTile label="Intelligence cycle" value="5 min" detail="Risk refresh across active assets." tone="blue" />
        </div>
      </div>
    </section>
  );
}
