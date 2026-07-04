import { ArrowRight } from "lucide-react";

export function ClosingScene() {
  return (
    <section id="scene-13" className="relative flex min-h-[74vh] items-center justify-center px-5 py-20 text-center">
      <div className="mission-panel max-w-5xl rounded-[2rem] p-10 shadow-glow md:p-16">
        <p className="font-mono text-xs uppercase tracking-[0.45em] text-blueIntel">Request strategic briefing</p>
        <h2 className="mt-7 text-5xl font-semibold leading-[.9] tracking-[-0.065em] text-white md:text-7xl">
          See Beyond the Horizon™
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-300">
          Navigator is building the future intelligence layer for transportation: trucking first, then rail, aviation, and consumer mobility.
        </p>
        <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-obsidian transition hover:bg-blueIntel">
          Request strategic briefing <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
