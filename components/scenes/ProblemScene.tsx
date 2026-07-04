import { SectionTitle } from "@/components/core/SectionTitle";
import { RiskConvergenceMap } from "@/components/engines/RiskConvergenceMap";

export function ProblemScene() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <SectionTitle eyebrow="The problem" title="Transportation failures rarely come from one event. They come from risk convergence." />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <RiskConvergenceMap />
        <div className="grid gap-4">
          {[["Weather", "13-hour winter event", "A forecasted storm changes route timing, fuel strategy, driver exposure, and delivery confidence."], ["Equipment", "Wheel-end advisory", "A manageable maintenance trend becomes critical when routed into low-visibility conditions."], ["Customer", "$2.3M relationship exposure", "One failed shipment can ripple into production delays, emergency transloads, and loss of confidence."]].map(([label, state, copy]) => <div key={label} className="mission-panel rounded-3xl p-5"><p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">{label}</p><h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{state}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p></div>)}
        </div>
      </div>
    </section>
  );
}
