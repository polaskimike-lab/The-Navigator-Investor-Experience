import { MissionCanvas } from "@/components/cinematic/MissionCanvas";
import { SceneTitle } from "@/components/core/SceneTitle";

export function MissionCanvasScene() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <SceneTitle
        eyebrow="Mission Canvas™"
        title="Operators manipulate the mission, not disconnected widgets."
        copy="Every layer exists because it changes safety, service continuity, revenue, or customer confidence."
      />
      <div className="mt-10"><MissionCanvas /></div>
    </section>
  );
}
