import { INVESTOR_SCENES } from "@/lib/presentation/scenes";

export function SceneIndex() {
  return (
    <aside className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 xl:block">
      <div className="rounded-full border border-line bg-obsidian/70 px-2 py-3 backdrop-blur-xl">
        {INVESTOR_SCENES.map((scene) => (
          <a
            key={scene.id}
            href={`#${scene.id}`}
            title={`${scene.label}: ${scene.question}`}
            className="mb-2 block h-2.5 w-2.5 rounded-full bg-white/25 transition hover:bg-blueIntel last:mb-0"
          />
        ))}
      </div>
    </aside>
  );
}
