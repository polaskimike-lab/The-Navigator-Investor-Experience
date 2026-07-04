import { SceneIndex } from "@/components/layout/SceneIndex";
import { HeroScene } from "@/components/scenes/HeroScene";
import { LaunchScene } from "@/components/scenes/LaunchScene";
import { ProblemScene } from "@/components/scenes/ProblemScene";
import { SphereScene } from "@/components/scenes/SphereScene";
import { MissionCanvasScene } from "@/components/scenes/MissionCanvasScene";
import { OptimizationScene } from "@/components/scenes/OptimizationScene";
import { ExecutiveSimulatorScene } from "@/components/scenes/ExecutiveSimulatorScene";
import { PTRScene } from "@/components/scenes/PTRScene";
import { RoadmapScene } from "@/components/scenes/RoadmapScene";
import { ClosingScene } from "@/components/scenes/ClosingScene";

export default function InvestorExperience() {
  return (
    <main className="relative overflow-hidden bg-obsidian text-white">
      <div className="fixed inset-0 grid-field opacity-40 pointer-events-none" />
      <SceneIndex />
      <div id="scene-1"><HeroScene /></div>
      <div id="scene-2"><LaunchScene /></div>
      <div id="scene-3"><ProblemScene /></div>
      <div id="scene-4"><SphereScene /></div>
      <div id="scene-5"><MissionCanvasScene /></div>
      <div id="scene-6"><OptimizationScene /></div>
      <div id="scene-7"><ExecutiveSimulatorScene /></div>
      <div id="scene-8"><PTRScene /></div>
      <div id="scene-9"><RoadmapScene /></div>
      <div id="scene-10"><ClosingScene /></div>
    </main>
  );
}
