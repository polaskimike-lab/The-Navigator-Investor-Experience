import { roadmap } from "@/data/assets";
import { SectionTitle } from "@/components/core/SectionTitle";

export function RoadmapScene() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <SectionTitle eyebrow="Expansion roadmap" title="One intelligence platform. Every mode of transportation." />
      <div className="mt-8 grid gap-5 md:grid-cols-4">
        {roadmap.map((item) => <div key={item.title} className="mission-panel rounded-3xl p-6"><p className="font-mono text-xs uppercase tracking-[0.26em] text-muted">Phase {item.phase}</p><h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">{item.title}</h3><p className="mt-4 text-sm leading-6 text-slate-400">{item.copy}</p></div>)}
      </div>
    </section>
  );
}
