export function OptimizationDemo() {
  return (
    <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
      <div className="mission-panel rounded-[2rem] p-7">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-amberRisk">Operational Optimization Engine™</p>
        <h3 className="mt-5 text-4xl font-semibold leading-[.95] tracking-[-0.055em] text-white">Fuel is not a stop. It is a mission decision.</h3>
        <p className="mt-6 leading-8 text-slate-300">Navigator evaluates fuel price, weather, traffic patterns, rush hour, weekend travel, driver HOS, route risk, delivery window, and customer impact before recommending where and when to refuel.</p>
      </div>
      <div className="mission-panel rounded-[2rem] p-7">
        <div className="grid gap-3">
          {[["Recommended action", "Delay fueling 63 miles", "green"], ["Fuel savings", "$842", "amber"], ["Arrival impact", "0 minutes", "blue"], ["Confidence", "96.8%", "green"], ["PTR impact", "-6", "blue"]].map(([label, value, tone]) => (
            <div key={label} className="grid grid-cols-[1fr_auto] items-center rounded-2xl border border-line bg-black/25 p-4">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{label}</p>
              <p className={`${tone === "green" ? "text-greenSafe" : tone === "amber" ? "text-amberRisk" : "text-blueIntel"} text-xl font-semibold`}>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
