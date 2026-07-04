export function DigitalTwin() {
  const panels = [
    ["Current Mission State","PTR 72","Storm forecast building; wheel-end advisory active.","red"],
    ["Predicted Failure State","PTR 86","Delay, service failure, emergency transload likely.","amber"],
    ["Navigator Intervention","PTR 41","Advance departure, fuel later, stage contingency.","green"]
  ];
  return <div className="grid gap-5 lg:grid-cols-3">{panels.map(([title,ptr,copy,tone]) => <div key={title} className={`rounded-[2rem] border p-6 ${tone==="red"?"border-redCritical/30 bg-redCritical/10":tone==="amber"?"border-amberRisk/30 bg-amberRisk/10":"border-greenSafe/30 bg-greenSafe/10"}`}><p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">{title}</p><h3 className="mt-4 text-4xl font-semibold text-white">{ptr}</h3><p className="mt-4 leading-7 text-slate-300">{copy}</p></div>)}</div>;
}