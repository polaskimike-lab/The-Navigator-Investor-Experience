import { SceneShell } from "@/components/presentation/SceneShell";

export function AssetProtectionScene() {
  return (
    <SceneShell
      id="scene-05"
      eyebrow="Asset Protection Intelligence™"
      title="Navigator connects every factor that threatens a transportation outcome."
    >
      <div className="grid items-stretch gap-5 lg:grid-cols-[.9fr_1.1fr]">
        <div className="mission-panel rounded-[2rem] p-8">
          <p className="text-2xl leading-10 text-slate-200">
            Navigator transforms disconnected signals into predictive, human-guided recommendations that protect the driver first, the asset second, service continuity third, and financial outcomes fourth.
          </p>
          <div className="mt-8 grid gap-3">
            {["Human life takes precedence", "Navigator recommends, humans approve", "Every material risk ties to financial impact"].map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-black/25 p-4 text-sm text-slate-300">{item}</div>
            ))}
          </div>
        </div>
        <div className="mission-panel rounded-[2rem] p-8">
          <div className="grid gap-4 md:grid-cols-2">
            {["Driver", "Equipment", "Cargo", "Route", "Weather", "Wildlife", "Customer", "Revenue"].map((node) => (
              <div key={node} className="rounded-2xl border border-line bg-white/[0.045] p-5">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-blueIntel">{node}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SceneShell>
  );
}
