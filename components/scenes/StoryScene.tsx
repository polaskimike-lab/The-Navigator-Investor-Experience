import { storyBeats } from "@/data/story";
import { SceneTitle } from "@/components/core/SceneTitle";

export function StoryScene() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <SceneTitle eyebrow="The Narrative" title="Navigator is not a dashboard. It is a living model of transportation risk." />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {storyBeats.map((beat) => (
          <div key={beat.title} className="panel rounded-[2rem] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-blueIntel">{beat.eyebrow}</p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] text-white">{beat.title}</h3>
            <p className="mt-4 leading-7 text-slate-300">{beat.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
