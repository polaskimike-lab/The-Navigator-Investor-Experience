"use client";

import { useState } from "react";

const scenarios = [
  { name: "Winter Storm Corridor", before: 72, after: 41, revenue: "$87K", confidence: "94.6%", action: "Advance departure window and stage transload option." },
  { name: "Fuel Volatility", before: 58, after: 46, revenue: "$18K", confidence: "96.8%", action: "Delay fueling 63 miles to avoid peak price corridor." },
  { name: "Equipment Failure", before: 76, after: 52, revenue: "$63K", confidence: "91.4%", action: "Route to maintenance-capable stop before low-visibility segment." },
  { name: "Wildlife Migration", before: 64, after: 49, revenue: "$22K", confidence: "89.9%", action: "Adjust route timing through migration corridor." },
  { name: "Critical Customer Shipment", before: 81, after: 53, revenue: "$140K", confidence: "93.1%", action: "Notify receiver and activate contingency routing." }
];

export function ScenarioEngine() {
  const [index, setIndex] = useState(0);
  const scenario = scenarios[index];

  return (
    <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
      <div className="mission-panel rounded-[2rem] p-7">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueIntel">Navigator Studio™</p>
        <h3 className="mt-4 text-4xl font-semibold leading-[.95] tracking-[-0.055em] text-white">Run a mission scenario.</h3>
        <p className="mt-5 leading-8 text-slate-300">Select a disruption. Navigator evaluates the mission state, produces a recommendation, and quantifies the expected outcome.</p>
        <label className="mt-7 block font-mono text-xs uppercase tracking-[0.2em] text-muted">Scenario</label>
        <select className="mt-3 w-full rounded-2xl border border-line bg-black/50 p-4 text-white" value={index} onChange={(event) => setIndex(Number(event.target.value))}>
          {scenarios.map((item, itemIndex) => <option key={item.name} value={itemIndex}>{item.name}</option>)}
        </select>
      </div>
      <div className="mission-panel rounded-[2rem] p-7">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-redCritical/25 bg-redCritical/10 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Before</p>
            <p className="mt-3 text-4xl font-semibold text-redCritical">PTR {scenario.before}</p>
            <p className="mt-3 text-sm text-slate-400">Revenue risk elevated.</p>
          </div>
          <div className="rounded-3xl border border-blueIntel/25 bg-blueIntel/10 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Mission Recommendation</p>
            <p className="mt-3 text-lg font-semibold text-white">{scenario.action}</p>
            <p className="mt-3 text-sm text-blueIntel">Confidence {scenario.confidence}</p>
          </div>
          <div className="rounded-3xl border border-greenSafe/25 bg-greenSafe/10 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">After</p>
            <p className="mt-3 text-4xl font-semibold text-greenSafe">PTR {scenario.after}</p>
            <p className="mt-3 text-sm text-slate-400">Revenue protected {scenario.revenue}</p>
          </div>
        </div>
        <button className="mt-6 rounded-full bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-obsidian transition hover:bg-blueIntel">
          Approve Mission Recommendation
        </button>
      </div>
    </div>
  );
}
