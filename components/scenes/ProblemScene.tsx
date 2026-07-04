import { SceneShell } from "@/components/presentation/SceneShell";

export function ProblemScene() {
  return (
    <SceneShell id="scene-04" eyebrow="The problem" title="Transportation is still managed reactively." compact>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Weather", "Storms, ice, fog, wind and visibility change faster than static transportation plans can respond."],
          ["Assets", "Equipment failures, road calls, cargo damage and transloads quietly destroy operational margins."],
          ["Customers", "A single failed shipment can ripple across manufacturers, receivers, contracts and future revenue."]
        ].map(([title, body]) => (
          <div key={title} className="mission-panel rounded-3xl p-7">
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
            <p className="mt-4 leading-7 text-slate-400">{body}</p>
          </div>
        ))}
      </div>
    </SceneShell>
  );
}
