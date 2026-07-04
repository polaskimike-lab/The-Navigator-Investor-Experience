import { visuals } from "@/data/assets";
import { VisualBlock } from "@/components/core/VisualBlock";
import { SectionTitle } from "@/components/core/SectionTitle";

export function LaunchScene() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <SectionTitle eyebrow="The launch visual" title="A platform brand built for investors, fleets, insurers, and infrastructure partners." />
      <div className="mt-8">
        <VisualBlock src={visuals.brandPoster} alt="Navigator brand launch visual" caption="THE NAVIGATOR™ is positioned as a Transportation Risk Intelligence Network — premium, institutional, and enterprise-ready." />
      </div>
    </section>
  );
}
