import { SectionTitle } from "@/components/core/SectionTitle";
import { IntelligenceSphere } from "@/components/engines/IntelligenceSphere";

export function SphereScene() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <SectionTitle
        eyebrow="Navigator Intelligence Sphere™"
        title="Signals become intelligence. Intelligence becomes action."
        copy="The sphere is the visual identity of Navigator: weather, traffic, driver, equipment, cargo, fuel, customer, and revenue continuously evaluated as one mission system."
      />
      <div className="mt-8">
        <IntelligenceSphere />
      </div>
    </section>
  );
}
