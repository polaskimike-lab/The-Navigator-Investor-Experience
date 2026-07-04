import { IntelligenceSphere } from "@/components/cinematic/IntelligenceSphere";
import { SceneTitle } from "@/components/core/SceneTitle";

export function SphereScene() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <SceneTitle
        eyebrow="Navigator Intelligence Sphere™"
        title="Signals become intelligence. Intelligence becomes action."
        copy="Weather, traffic, driver, equipment, cargo, fuel, customer, and revenue continuously feed one mission model."
      />
      <div className="mt-10">
        <IntelligenceSphere />
      </div>
    </section>
  );
}
