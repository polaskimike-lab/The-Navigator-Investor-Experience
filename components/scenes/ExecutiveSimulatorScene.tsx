import { SectionTitle } from "@/components/core/SectionTitle";
import { ExecutiveSimulator } from "@/components/engines/ExecutiveSimulator";

export function ExecutiveSimulatorScene() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <SectionTitle eyebrow="Executive Analytics" title="Navigator turns risk reduction into board-level financial intelligence." copy="Adjust fleet, fuel, weather, shipment value, and disruption assumptions to see annual revenue protected, operating savings, payback period, and estimated ROI update instantly." />
      <div className="mt-8"><ExecutiveSimulator /></div>
    </section>
  );
}
