"use client";

import { useState } from "react";
import { scenarios } from "@/data/story";

export function ScenarioStudio() {
  const [index, setIndex] = useState(0);
  const scenario = scenarios[index];

  return (
    <div className="grid gap-6 lg:grid-cols-[.82fr_1.18fr]">
      <div className="panel rounded-[2.5rem] p-7">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueIntel">Navigator Studio™</p>
        <h3 className="mt-4 text-4xl font-semibold leading-[.95] tracking-[-0.055em] text-white">Run a mission scenario.</h3>
        <p className="mt-5 leading-8 text-slate-300">Choose a disruption and watch Navigator evaluate the current state, projected risk, recommendation, and expected outcome.</p>
        <label className="mt-7 block font-mono text-xs uppercase tracking-[0.2em] text-muted">Scenario</label>
        <select className="mt-3 w-full rounded-2xl border border-line bg-black/55 p-4 text-white" value={index} onChange={(event) => setIndex(Number(event.target.value))}>
          {scenarios.map((item, itemIndex) => <option key={item.name} value={itemIndex}>{item.name}</option>)}
        </select>
      </div>

      <div className="panel rounded-[2.5rem] p-7">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-redCritical/25 bg-redCritical/10 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Current State</p>
            <p className="mt-3 text-4xl font-semibold text-redCritical">PTR {scenario.ptrBefore}</p>
            <p className="mt-3 text-sm text-slate-400">Mission exposure rising.</p>
          </div>
          <div className="rounded-3xl border border-blueIntel/25 bg-blueIntel/10 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Recommendation</p>
            <p className="mt-3 text-lg font-semibold text-white">{scenario.action}</p>
            <p className="mt-3 text-sm text-blueIntel">Confidence {scenario.confidence}</p>
          </div>
          <div className="rounded-3xl border border-greenSafe/25 bg-greenSafe/10 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Intervention State</p>
            <p className="mt-3 text-4xl font-semibold text-greenSafe">PTR {scenario.ptrAfter}</p>
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
