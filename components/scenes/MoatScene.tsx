import { Network, Shield, TrendingUp } from "lucide-react";
import { SceneShell } from "@/components/presentation/SceneShell";

export function MoatScene() {
  return (
    <SceneShell
      id="scene-12"
      eyebrow="The moat"
      title="Navigator is not a trucking app. It is the intelligence layer for transportation risk."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {[
          [Shield, "Asset Protection Intelligence™", "Protects people, equipment, cargo, service continuity, and revenue."],
          [Network, "Network effects", "Every connected asset improves the value of the transportation intelligence network."],
          [TrendingUp, "PTR standard", "A proprietary operating score designed to become transportation's risk language."]
        ].map(([Icon, title, copy]: any) => (
          <div key={title} className="mission-panel rounded-3xl p-7">
            <Icon className="h-8 w-8 text-blueIntel" />
            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
            <p className="mt-4 leading-7 text-slate-400">{copy}</p>
          </div>
        ))}
      </div>
    </SceneShell>
  );
}
