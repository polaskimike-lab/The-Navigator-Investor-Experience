import { visuals } from "@/data/assets";
import { VisualBlock } from "@/components/VisualBlock";
import { SceneShell } from "@/components/presentation/SceneShell";

export function FutureInterfaceScene() {
  return (
    <SceneShell
      id="scene-09"
      eyebrow="Future interface"
      title="The HUD is not the product. It is the visible edge of the intelligence network."
    >
      <VisualBlock
        src={visuals.hudConcept}
        alt="Navigator AR HUD concept"
        caption="Future Navigator HUD concept: low-visibility guidance, roadway obstruction intelligence, wildlife probability, traction index, and V2X data sharing."
      />
    </SceneShell>
  );
}
