import { SectionTitle } from "@/components/core/SectionTitle";
import { MissionCanvasPreview } from "@/components/engines/MissionCanvasPreview";

export function MissionCanvasScene() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <SectionTitle eyebrow="Mission Canvas™" title="Navigator does not manage isolated data. It manages the mission." />
      <div className="mt-8">
        <MissionCanvasPreview />
      </div>
    </section>
  );
}
