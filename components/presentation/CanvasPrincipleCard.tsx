export function CanvasPrincipleCard({
  label,
  title,
  copy
}: {
  label: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-3xl border border-line bg-white/[0.045] p-5 backdrop-blur-xl">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">{label}</p>
      <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p>
    </div>
  );
}
