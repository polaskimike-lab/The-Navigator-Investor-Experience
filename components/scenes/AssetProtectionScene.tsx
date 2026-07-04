import { SceneShell } from "@/components/presentation/SceneShell";
import { MissionCanvasPreview } from "@/components/visuals/MissionCanvasPreview";
import { CanvasPrincipleCard } from "@/components/presentation/CanvasPrincipleCard";

export function AssetProtectionScene() {
  return (
    <SceneShell
      id="scene-05"
      eyebrow="Asset Protection Intelligence™"
      title="Navigator does not manage isolated data. It manages the mission."
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
        <MissionCanvasPreview />

        <div className="grid gap-4">
          <CanvasPrincipleCard
            label="Operating model"
            title="World → Mission → Decision → Outcome"
            copy="Navigator organizes the transportation environment around the mission rather than forcing operators to interpret disconnected dashboards."
          />
          <CanvasPrincipleCard
            label="Decision hierarchy"
            title="Driver first. Asset second."
            copy="Human life remains the governing constraint. Financial optimization never overrides operator safety."
          />
          <CanvasPrincipleCard
            label="Platform direction"
            title="Mission Canvas™"
            copy="Future modules should allow operators to manipulate the mission itself: route, fuel, weather, equipment, cargo, and customer impact."
          />
        </div>
      </div>

      <div className="mt-6 rounded-[2rem] border border-blueIntel/25 bg-blueIntel/[0.055] p-7">
        <p className="max-w-5xl text-xl leading-8 text-slate-200">
          This is the beginning of Navigator’s proprietary interface model: a spatial mission layer where every signal is interpreted by its effect on safety, service continuity, and revenue preservation.
        </p>
      </div>
    </SceneShell>
  );
}
