import { SceneShell } from "@/components/presentation/SceneShell";

export function PilotStrategyScene() {
  return (
    <SceneShell id="scene-10" eyebrow="Pilot strategy" title="The first deployment validates the intelligence layer, not a dashboard.">
      <div className="mission-panel rounded-[2rem] p-8">
        <p className="text-xl leading-8 text-slate-300">
          Initial target: Dart Transportation. Start with 100 vehicles, expand to one-third of fleet at six months, two-thirds at eight months, and full fleet after one year based on validated PTR reduction, accident reduction, road-call reduction, fuel savings, and wildlife event analytics.
        </p>
        <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full rounded-full bg-gradient-to-r from-blueIntel via-amberRisk to-greenSafe" />
        </div>
        <div className="mt-4 grid gap-4 text-sm text-slate-400 md:grid-cols-4">
          <span>100 trucks</span>
          <span>6 mo: 1/3 fleet</span>
          <span>8 mo: 2/3 fleet</span>
          <span>12 mo: full fleet</span>
        </div>
      </div>
    </SceneShell>
  );
}
