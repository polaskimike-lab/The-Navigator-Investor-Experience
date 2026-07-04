export function SceneTitle({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div>
      <p className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-blueIntel/80">{eyebrow}</p>
      <h2 className="max-w-5xl text-4xl font-semibold leading-[.9] tracking-[-0.06em] text-white md:text-7xl">
        {title}
      </h2>
      {copy && <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">{copy}</p>}
    </div>
  );
}
