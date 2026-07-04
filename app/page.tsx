import { HeroScene } from "@/components/scenes/HeroScene";
import { StoryScene } from "@/components/scenes/StoryScene";
import { SphereScene } from "@/components/scenes/SphereScene";
import { MissionCanvasScene } from "@/components/scenes/MissionCanvasScene";
import { ScenarioScene } from "@/components/scenes/ScenarioScene";
import { ExecutiveScene } from "@/components/scenes/ExecutiveScene";
import { ClosingScene } from "@/components/scenes/ClosingScene";

export default function CinematicExperience() {
  return (
    <main className="relative overflow-hidden bg-obsidian text-white">
      <HeroScene />
      <StoryScene />
      <SphereScene />
      <MissionCanvasScene />
      <ScenarioScene />
      <ExecutiveScene />
      <ClosingScene />
    </main>
  );
}
