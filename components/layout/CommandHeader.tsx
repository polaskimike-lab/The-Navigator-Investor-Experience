export function CommandHeader() {
  return <header className="sticky top-0 z-40 border-b border-line bg-obsidian/75 px-5 py-4 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
      <div><p className="font-mono text-xs uppercase tracking-[0.28em] text-blueIntel">Navigator OS</p><h1 className="text-xl font-semibold tracking-[-0.04em] text-white">Enterprise Preview</h1></div>
      <div className="hidden gap-4 text-sm text-slate-300 md:flex">
        <span>Active Missions: <b className="text-white">143</b></span><span>Fleet PTR: <b className="text-greenSafe">37</b></span><span>Revenue Protected Today: <b className="text-amberRisk">$8.4M</b></span>
      </div>
    </div>
  </header>;
}