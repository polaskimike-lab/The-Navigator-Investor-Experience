export function SignalCard({
  label,
  value,
  detail,
  tone = "intelligence"
}: {
  label: string;
  value: string;
  detail?: string;
  tone?: "intelligence" | "caution" | "critical" | "safe";
}) {
  const color = {
    intelligence: "text-blueIntel",
    caution: "text-amberRisk",
    critical: "text-redCritical",
    safe: "text-greenSafe"
  }[tone];

  return (
    <div className="rounded-3xl border border-line bg-white/[0.045] p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        {label}
      </p>
      <p className={`mt-3 text-4xl font-semibold tracking-[-0.06em] ${color}`}>
        {value}
      </p>
      {detail && <p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p>}
    </div>
  );
}
