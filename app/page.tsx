import { CommandHeader } from "@/components/layout/CommandHeader";
import { MetricTile } from "@/components/core/MetricTile";
import { SectionTitle } from "@/components/core/SectionTitle";
import { MissionTheater } from "@/components/modules/MissionTheater";
import { IntelligenceSphere } from "@/components/modules/IntelligenceSphere";
import { DigitalTwin } from "@/components/modules/DigitalTwin";
import { AICopilot } from "@/components/modules/AICopilot";
import { ExecutiveModel } from "@/components/modules/ExecutiveModel";

export default function EnterprisePreview() {
  return (
    <main className="relative overflow-hidden bg-obsidian text-white">
      <div className="fixed inset-0 grid-field opacity-40 pointer-events-none" />
      <CommandHeader />
      <section className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-mono text-xs uppercase tracking-[0.45em] text-blueIntel/80">Genesis Security Solutions presents</p>
        <h1 className="mt-8 max-w-6xl text-6xl font-semibold leading-[.86] tracking-[-0.075em] md:text-8xl">Navigator OS — Enterprise Preview</h1>
        <p className="mt-8 max-w-4xl text-2xl leading-9 text-slate-300">A mission-control operating system for transportation risk, optimization, digital twin simulation, and executive decision intelligence.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          <MetricTile label="Active Missions" value="143" detail="Across truck, rail, air, and marine." tone="blue" />
          <MetricTile label="Fleet PTR" value="37" detail="Current blended risk level." tone="green" />
          <MetricTile label="Revenue Protected Today" value="$8.4M" detail="Estimated prevented exposure." tone="amber" />
          <MetricTile label="Recommendations Pending" value="18" detail="Human approval required." tone="red" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8"><SectionTitle eyebrow="Mission Theater™" title="Operate the transportation network as a mission system." copy="Live assets, active risks, revenue exposure, and operational recommendations converge in one command environment." /><div className="mt-8"><MissionTheater /></div></section>
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8"><SectionTitle eyebrow="Intelligence Sphere™ 2.0" title="The operating brain of Navigator OS." copy="Incoming data streams converge, risk forms, and a human-approved recommendation is generated." /><div className="mt-8"><IntelligenceSphere /></div></section>
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8"><SectionTitle eyebrow="Digital Twin™" title="Compare the current mission, projected failure, and Navigator intervention." /><div className="mt-8"><DigitalTwin /></div></section>
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8"><SectionTitle eyebrow="Executive Analytics 2.0" title="Turn operational intelligence into board-level financial intelligence." /><div className="mt-8"><ExecutiveModel /></div></section>
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8"><SectionTitle eyebrow="AI Copilot™" title="Ask why, compare options, and understand the recommendation." /><div className="mt-8"><AICopilot /></div></section>
      <section className="relative flex min-h-[60vh] items-center justify-center px-5 py-20 text-center">
        <div className="mission-panel max-w-5xl rounded-[2rem] p-10 shadow-glow md:p-16">
          <p className="font-mono text-xs uppercase tracking-[0.45em] text-blueIntel">Enterprise Preview</p>
          <h2 className="mt-7 text-5xl font-semibold leading-[.9] tracking-[-0.065em] text-white md:text-7xl">See Beyond the Horizon™</h2>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-300">Navigator OS is the intelligence layer for transportation: protecting drivers, assets, service continuity, customer confidence, and revenue.</p>
        </div>
      </section>
    </main>
  );
}