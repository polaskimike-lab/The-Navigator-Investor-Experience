export function MetricTile({
  label,
  value,
  detail,
  tone = "blue"
}: {
  label: string;
  value: string;
  detail: string;
  tone?: "blue" | "amber" | "green" | "red";
}) {
  const color = {
    blue: "text-blueIntel border-blueIntel/30",
    amber: "text-amberRisk border-amberRisk/30",
    green: "text-greenSafe border-greenSafe/30",
    red: "text-redCritical border-redCritical/30"
  }[tone];

  return (
    <div className={`rounded-3xl border bg-white/[0.045] p-5 backdrop-blur-xl ${color}`}>
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">{label}</p>
      <p className={`mt-3 text-4xl font-semibold tracking-[-0.06em] ${color.split(" ")[0]}`}>{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p>
    </div>
  );
}
