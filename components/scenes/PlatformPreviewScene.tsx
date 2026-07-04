import { visuals } from "@/data/assets";
import { VisualBlock } from "@/components/VisualBlock";
import { SceneShell } from "@/components/presentation/SceneShell";

export function PlatformPreviewScene() {
  return (
    <SceneShell
      id="scene-03"
      eyebrow="Platform preview"
      title="The investor should feel the operating system before the product exists."
    >
      <VisualBlock
        src={visuals.commandCenter}
        alt="Navigator executive command center visual"
        caption="The command-center concept previews the future enterprise operating layer: PTR, revenue exposure, fleet status, weather intelligence, service assurance, and AI recommendations."
      />
    </SceneShell>
  );
}
