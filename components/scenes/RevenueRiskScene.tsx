import { KpiCard } from "@/components/KpiCard";
import { SceneShell } from "@/components/presentation/SceneShell";

export function RevenueRiskScene() {
  return (
    <SceneShell
      id="scene-08"
      eyebrow="Revenue Risk™"
      title="Every load is an individual asset with financial and supply-chain exposure."
      compact
    >
      <div className="grid gap-5 md:grid-cols-3">
        <KpiCard label="Load value" value="$250K" detail="Direct shipment exposure" />
        <KpiCard label="Annual customer" value="$4.5M" detail="Relationship exposure" />
        <KpiCard label="Revenue at risk" value="$143K" detail="Projected disruption impact" />
      </div>
    </SceneShell>
  );
}
