import { investmentStats } from "@/data/assets";
import { KpiCard } from "@/components/KpiCard";

export function MissionBriefingScene() {
  return (
    <section
      id="scene-01"
      className="relative flex min-h-[86vh] items-center justify-center px-5 py-16 text-center"
    >
      <div className="relative z-10 max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.45em] text-blueIntel/80">
          Genesis Security Solutions presents
        </p>
        <h1 className="mt-8 text-6xl font-semibold leading-[.86] tracking-[-0.075em] md:text-8xl">
          THE NAVIGATOR™
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-300">
          Transportation Risk Intelligence Network
        </p>
        <p className="mx-auto mt-10 max-w-4xl text-3xl font-light leading-tight tracking-[-0.045em] text-white md:text-5xl">
          Every shipment carries more than cargo. It carries promises.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {investmentStats.map((stat) => (
            <KpiCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
