import { ExecutiveModel } from "@/components/cinematic/ExecutiveModel";
import { SceneTitle } from "@/components/core/SceneTitle";

export function ExecutiveScene() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <SceneTitle
        eyebrow="Executive Analytics"
        title="The business case changes as the mission changes."
        copy="Navigator links operational risk to financial exposure, payback, and estimated ROI."
      />
      <div className="mt-10"><ExecutiveModel /></div>
    </section>
  );
}
