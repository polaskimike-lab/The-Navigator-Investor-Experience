import { ptrWeights, visuals } from "@/data/assets";
import { PTRWeightCard } from "@/components/PTRWeightCard";
import { VisualBlock } from "@/components/VisualBlock";
import { SceneShell } from "@/components/presentation/SceneShell";

export function PTRFrameworkScene() {
  return (
    <SceneShell
      id="scene-06"
      eyebrow="PTR™ Framework"
      title="Preventable Transportation Risk becomes the operating score for transportation."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {ptrWeights.map((item) => (
          <PTRWeightCard key={item.label} {...item} />
        ))}
      </div>
      <div className="mt-6">
        <VisualBlock
          src={visuals.ptrDashboard}
          alt="PTR framework and Fleet Command Center concept"
          caption="PTR framework and Fleet Command Center concept showing risk categories, live risk map, driver performance, financial impact, and platform modules."
        />
      </div>
    </SceneShell>
  );
}
