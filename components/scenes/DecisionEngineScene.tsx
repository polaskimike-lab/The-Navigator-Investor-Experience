import { recommendations } from "@/data/assets";
import { RecommendationCard } from "@/components/RecommendationCard";
import { SceneShell } from "@/components/presentation/SceneShell";

export function DecisionEngineScene() {
  return (
    <SceneShell
      id="scene-07"
      eyebrow="Decision Engine"
      title="Current systems alert. Navigator recommends coordinated action."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {recommendations.map((rec, index) => (
          <RecommendationCard key={rec.title} index={index + 1} {...rec} />
        ))}
      </div>
    </SceneShell>
  );
}
