export function CommandPanel({
  eyebrow,
  title,
  children,
  tone = "default"
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  tone?: "default" | "intelligence" | "caution" | "critical" | "safe";
}) {
  const toneClass = {
    default: "border-line shadow-glow",
    intelligence: "border-blueIntel/35 shadow-glow",
    caution: "border-amberRisk/35 shadow-risk",
    critical: "border-redCritical/35 shadow-critical",
    safe: "border-greenSafe/35 shadow-glow"
  }[tone];

  return (
    <section className={`mission-panel rounded-[2rem] p-6 ${toneClass}`}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
          {eyebrow}
        </p>
      )}
      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
        {title}
      </h3>
      <div className="mt-5">{children}</div>
    </section>
  );
}
