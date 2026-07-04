import { roadmap } from "@/data/assets";
import { RoadmapCard } from "@/components/RoadmapCard";
import { SceneShell } from "@/components/presentation/SceneShell";

export function ExpansionRoadmapScene() {
  return (
    <SceneShell id="scene-11" eyebrow="Expansion roadmap" title="One intelligence platform. Every mode of transportation.">
      <div className="grid gap-5 md:grid-cols-4">
        {roadmap.map((item) => (
          <RoadmapCard key={item.title} {...item} />
        ))}
      </div>
    </SceneShell>
  );
}
