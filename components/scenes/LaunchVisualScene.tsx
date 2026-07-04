import { visuals } from "@/data/assets";
import { VisualBlock } from "@/components/VisualBlock";
import { SceneShell } from "@/components/presentation/SceneShell";

export function LaunchVisualScene() {
  return (
    <SceneShell
      id="scene-02"
      eyebrow="The launch visual"
      title="A platform brand built for investors, fleets, insurers, and infrastructure partners."
    >
      <VisualBlock
        src={visuals.brandPoster}
        alt="Navigator brand launch visual"
        caption="THE NAVIGATOR™ is positioned as a Transportation Risk Intelligence Network — premium, institutional, and enterprise-ready."
      />
    </SceneShell>
  );
}
