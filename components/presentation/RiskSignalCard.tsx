export function RiskSignalCard({
  label,
  state,
  copy,
  tone = "amber"
}: {
  label: string;
  state: string;
  copy: string;
  tone?: "blue" | "amber" | "red";
}) {
  const styles = {
    blue: "border-blueIntel/30 text-blueIntel",
    amber: "border-amberRisk/30 text-amberRisk",
    red: "border-redCritical/30 text-redCritical"
  }[tone];

  return (
    <div className={`rounded-3xl border bg-white/[0.045] p-5 backdrop-blur-xl ${styles}`}>
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">{label}</p>
      <p className={`mt-3 text-2xl font-semibold tracking-[-0.04em] ${styles.split(" ")[1]}`}>{state}</p>
      <p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p>
    </div>
  );
}
