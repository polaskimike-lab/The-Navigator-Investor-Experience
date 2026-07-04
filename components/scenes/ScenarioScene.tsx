import { ScenarioStudio } from "@/components/cinematic/ScenarioStudio";
import { SceneTitle } from "@/components/core/SceneTitle";

export function ScenarioScene() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <SceneTitle
        eyebrow="Navigator Studio™"
        title="Run the mission before the mission runs you."
        copy="This is where investors stop reading and start experiencing the product behavior."
      />
      <div className="mt-10"><ScenarioStudio /></div>
    </section>
  );
}
