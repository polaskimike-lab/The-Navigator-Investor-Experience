import { SceneShell } from "@/components/presentation/SceneShell";
import { RiskConvergenceMap } from "@/components/visuals/RiskConvergenceMap";
import { RiskSignalCard } from "@/components/presentation/RiskSignalCard";

export function ProblemScene() {
  return (
    <SceneShell
      id="scene-04"
      eyebrow="The problem"
      title="Transportation failures rarely come from one event. They come from risk convergence."
      compact
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <RiskConvergenceMap />

        <div className="grid gap-4">
          <RiskSignalCard
            label="Weather"
            state="13-hour winter event"
            copy="A forecasted storm changes route timing, fuel strategy, driver exposure, and delivery confidence."
            tone="amber"
          />
          <RiskSignalCard
            label="Equipment"
            state="Wheel-end advisory"
            copy="A manageable maintenance trend becomes critical when the asset is routed into low-visibility conditions."
            tone="red"
          />
          <RiskSignalCard
            label="Customer"
            state="$2.3M relationship exposure"
            copy="A single failed shipment can ripple into production delays, emergency transloads, penalties, and loss of confidence."
            tone="blue"
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {[
          ["Current systems", "Report isolated events"],
          ["Fleet teams", "Manually connect the risk"],
          ["Navigator", "Models the convergence"],
          ["Outcome", "Action before failure"]
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-line bg-white/[0.045] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">{label}</p>
            <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">{value}</p>
          </div>
        ))}
      </div>
    </SceneShell>
  );
}
