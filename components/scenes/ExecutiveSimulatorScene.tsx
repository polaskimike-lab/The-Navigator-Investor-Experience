import { SectionTitle } from "@/components/core/SectionTitle";
import { ExecutiveSimulator } from "@/components/engines/ExecutiveSimulator";

export function ExecutiveSimulatorScene() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <SectionTitle
        eyebrow="Executive Analytics"
        title="Navigator turns risk reduction into board-level financial intelligence."
        copy="The investment case is not only safety. It is revenue protected, operating cost avoided, service reliability preserved, and customer confidence strengthened."
      />
      <div className="mt-8">
        <ExecutiveSimulator />
      </div>
    </section>
  );
}
