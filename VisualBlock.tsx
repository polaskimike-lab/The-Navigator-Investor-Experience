export function VisualBlock({
  src,
  alt,
  caption
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <div className="image-preserve overflow-hidden rounded-[2rem] border border-line bg-obsidian p-3 shadow-glow">
      <img src={src} alt={alt} />
      {caption && <p className="border-t border-line px-4 py-4 text-sm leading-6 text-slate-400">{caption}</p>}
    </div>
  );
}
