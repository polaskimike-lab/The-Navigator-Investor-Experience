export function Section({
  eyebrow,
  title,
  children,
  compact = false
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <section className={`relative mx-auto w-full max-w-7xl px-5 md:px-8 ${compact ? "py-12" : "py-20 md:py-24"}`}>
      {eyebrow && <p className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-blueIntel/80">{eyebrow}</p>}
      <h2 className="max-w-5xl text-4xl font-semibold leading-[.94] tracking-[-0.055em] text-white md:text-6xl">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
