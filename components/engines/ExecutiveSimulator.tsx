export function ExecutiveSimulator() {
  const fleetSizes = [
    { label: "100", revenue: "$1.4M", ptr: "-18", roi: "144%" },
    { label: "500", revenue: "$7.8M", ptr: "-27", roi: "210%" },
    { label: "2,000", revenue: "$33.6M", ptr: "-34", roi: "286%" },
    { label: "10,000", revenue: "$184M", ptr: "-41", roi: "412%" }
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-[.92fr_1.08fr]">
      <div className="mission-panel rounded-[2rem] p-7">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-blueIntel">
          Executive Simulator
        </p>
        <h3 className="mt-5 text-4xl font-semibold leading-[.95] tracking-[-0.055em] text-white">
          The larger the network, the more valuable the intelligence becomes.
        </h3>
        <p className="mt-6 leading-8 text-slate-300">
          This simulator models how Navigator compounds value as fleet coverage grows. Revenue protected increases as PTR reduction, fuel optimization, maintenance avoidance, customer confidence, and service continuity interact.
        </p>

        <div className="mt-8 space-y-4">
          {[
            ["Weather severity", "High winter corridor exposure", "72%"],
            ["Fuel volatility", "Regional diesel spread detected", "58%"],
            ["Service sensitivity", "High-value customer commitments", "84%"]
          ].map(([label, value, width]) => (
            <div key={label}>
              <div className="mb-2 flex justify-between gap-4">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{label}</p>
                <p className="text-sm text-slate-300">{value}</p>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full ptr-gradient" style={{ width }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mission-panel rounded-[2rem] p-7">
        <div className="grid gap-4">
          {fleetSizes.map((item) => (
            <div key={item.label} className="rounded-3xl border border-line bg-black/25 p-5">
              <div className="grid gap-4 md:grid-cols-[110px_1fr_1fr_1fr] md:items-center">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Fleet size</p>
                  <p className="mt-2 text-3xl font-semibold tracking-[-0.06em] text-white">{item.label}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Revenue protected</p>
                  <p className="mt-2 text-2xl font-semibold text-amberRisk">{item.revenue}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">PTR reduction</p>
                  <p className="mt-2 text-2xl font-semibold text-greenSafe">{item.ptr}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Modeled ROI</p>
                  <p className="mt-2 text-2xl font-semibold text-blueIntel">{item.roi}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-3xl border border-blueIntel/25 bg-blueIntel/[0.055] p-5">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-blueIntel">Investor takeaway</p>
          <p className="mt-3 leading-7 text-slate-300">
            Navigator's economics improve with scale because each connected asset contributes signal to the network, improves prediction quality, and increases the value of future mission recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}
