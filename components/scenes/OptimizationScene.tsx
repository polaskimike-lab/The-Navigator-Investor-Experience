import { SectionTitle } from "@/components/core/SectionTitle";
import { OptimizationDemo } from "@/components/engines/OptimizationDemo";

export function OptimizationScene() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <SectionTitle
        eyebrow="Operational Optimization Engine™"
        title="Fuel optimization becomes the first proof of mission-level decision intelligence."
        copy="Navigator does not simply find cheap fuel. It recommends the decision that minimizes total cost and risk while preserving arrival confidence."
      />
      <div className="mt-8">
        <OptimizationDemo />
      </div>
    </section>
  );
}
