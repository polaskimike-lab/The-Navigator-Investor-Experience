import { IntelligenceSphere } from "@/components/cinematic/IntelligenceSphere";

export function HeroScene() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 py-16">
      <div className="absolute inset-0 cinema-grid opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(56,189,248,0.15),transparent_32rem),linear-gradient(to_bottom,rgba(5,7,11,0.10),#05070B_96%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[.78fr_1.22fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.45em] text-blueIntel/80">Genesis Security Solutions presents</p>
          <h1 className="mt-8 text-6xl font-semibold leading-[.84] tracking-[-0.08em] text-white md:text-8xl">
            THE NAVIGATOR™
          </h1>
          <p className="mt-7 max-w-2xl text-2xl leading-9 text-slate-300">
            A cinematic mission-control experience for transportation intelligence.
          </p>
          <div className="mt-9 grid gap-3 md:grid-cols-3">
            {["Protect the driver", "Protect the asset", "Preserve the mission"].map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-white/[0.05] px-4 py-4 font-mono text-xs uppercase tracking-[0.18em] text-slate-300 backdrop-blur-xl">
                {item}
              </div>
            ))}
          </div>
        </div>
        <IntelligenceSphere compact />
      </div>
    </section>
  );
}
