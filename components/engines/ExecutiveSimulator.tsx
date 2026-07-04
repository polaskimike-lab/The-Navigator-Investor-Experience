export function ExecutiveSimulator(){
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="mission-panel rounded-[2rem] p-7">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueIntel">Executive Analytics</p>
        <h3 className="mt-4 text-4xl font-semibold">Investment Scenario</h3>
        <div className="mt-6 space-y-3 text-slate-300">
          <div className="flex justify-between"><span>Fleet Size</span><strong>10,000 Tractors</strong></div>
          <div className="flex justify-between"><span>Evaluation Period</span><strong>12 Months</strong></div>
          <div className="flex justify-between"><span>Deployment</span><strong>100% Fleet Adoption</strong></div>
          <div className="flex justify-between"><span>Estimated Annual Revenue Protected</span><strong className="text-amberRisk">$184.2M</strong></div>
          <div className="flex justify-between"><span>Estimated Annual Operating Savings</span><strong className="text-greenSafe">$31.6M</strong></div>
          <div className="flex justify-between"><span>Fleet Fuel Savings</span><strong>$18.4M</strong></div>
          <div className="flex justify-between"><span>Maintenance Avoidance</span><strong>$7.2M</strong></div>
          <div className="flex justify-between"><span>PTR</span><strong>72 → 31</strong></div>
          <div className="flex justify-between"><span>Implementation Cost</span><strong>$42.7M</strong></div>
          <div className="flex justify-between"><span>Estimated Payback Period</span><strong className="text-blueIntel">8.1 Months</strong></div>
          <div className="flex justify-between"><span>Estimated 3-Year ROI</span><strong className="text-blueIntel">412%</strong></div>
          <div className="flex justify-between"><span>Model Confidence</span><strong>91.6%</strong></div>
        </div>
      </div>
      <div className="mission-panel rounded-[2rem] p-7">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueIntel">Scenario Assumptions</p>
        <ul className="mt-5 list-disc pl-6 space-y-3 text-slate-300">
          <li>10,000 commercial tractors</li>
          <li>120,000 miles per tractor per year</li>
          <li>12‑month operating model</li>
          <li>Full Navigator OS deployment</li>
          <li>Historical weather and traffic baselines</li>
          <li>Fuel optimization enabled</li>
          <li>Predictive maintenance enabled</li>
          <li>Customer disruption costs included</li>
        </ul>
        <div className="mt-8 rounded-2xl border border-blueIntel/20 bg-blueIntel/10 p-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-blueIntel">Next Release</p>
          <p className="mt-2 text-slate-300">Replace fixed assumptions with interactive sliders for fleet size, fuel cost, weather severity, shipment value, HOS, congestion and insurance.</p>
        </div>
      </div>
    </div>
  )
}
