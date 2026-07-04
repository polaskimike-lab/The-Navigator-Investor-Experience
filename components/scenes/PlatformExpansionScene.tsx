import { SectionTitle } from "@/components/core/SectionTitle";
import { TransportationNetwork } from "@/components/engines/TransportationNetwork";

export function PlatformExpansionScene() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <SectionTitle eyebrow="Platform Expansion" title="Navigator starts with trucking, but the intelligence model is transportation-wide." copy="The same operating logic applies anywhere people, assets, cargo, infrastructure, weather, timing, and revenue intersect." />
      <div className="mt-8"><TransportationNetwork /></div>
    </section>
  );
}
