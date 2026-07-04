export function AICopilot() {
  return <div className="mission-panel rounded-[2rem] p-7">
    <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueIntel">Navigator AI Copilot™</p>
    <div className="mt-6 grid gap-4 lg:grid-cols-[.9fr_1.1fr]">
      <div className="space-y-3">
        {["Why is PTR increasing?","What happens if we wait?","What is safest?","What is cheapest?"].map(q => <div key={q} className="rounded-2xl border border-line bg-black/25 p-4 text-slate-300">{q}</div>)}
      </div>
      <div className="rounded-2xl border border-blueIntel/25 bg-blueIntel/10 p-5">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-blueIntel">Answer</p>
        <p className="mt-4 leading-8 text-slate-200">PTR is increasing because weather, equipment, and customer delivery risk are converging. Recommended action reduces PTR by 31 points while protecting an estimated $87K in revenue exposure.</p>
      </div>
    </div>
  </div>;
}