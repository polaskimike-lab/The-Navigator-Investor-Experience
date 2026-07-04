import { ptrWeights, visuals } from "@/data/assets";
import { VisualBlock } from "@/components/core/VisualBlock";
import { SectionTitle } from "@/components/core/SectionTitle";

export function PTRScene() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <SectionTitle eyebrow="PTR™ Framework" title="Preventable Transportation Risk becomes the operating score for transportation." />
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {ptrWeights.map((item) => (
          <div key={item.label} className="rounded-2xl border border-line bg-white/[0.045] p-5">
            <div className="flex items-start justify-between gap-5">
              <h3 className="text-lg font-semibold text-white">{item.label}</h3>
              <span className="font-mono text-sm text-amberRisk">{item.value}%</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">{item.detail}</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full ptr-gradient" style={{ width: `${item.value * 5}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <VisualBlock src={visuals.ptrDashboard} alt="PTR framework concept" caption="PTR framework and Fleet Command Center concept showing risk categories, live risk map, driver performance, and financial impact." />
      </div>
    </section>
  );
}
