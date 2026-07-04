import { SceneIndex } from "@/components/presentation/SceneIndex";
import { MissionBriefingScene } from "@/components/scenes/MissionBriefingScene";
import { LaunchVisualScene } from "@/components/scenes/LaunchVisualScene";
import { PlatformPreviewScene } from "@/components/scenes/PlatformPreviewScene";
import { ProblemScene } from "@/components/scenes/ProblemScene";
import { AssetProtectionScene } from "@/components/scenes/AssetProtectionScene";
import { PTRFrameworkScene } from "@/components/scenes/PTRFrameworkScene";
import { DecisionEngineScene } from "@/components/scenes/DecisionEngineScene";
import { RevenueRiskScene } from "@/components/scenes/RevenueRiskScene";
import { FutureInterfaceScene } from "@/components/scenes/FutureInterfaceScene";
import { PilotStrategyScene } from "@/components/scenes/PilotStrategyScene";
import { ExpansionRoadmapScene } from "@/components/scenes/ExpansionRoadmapScene";
import { MoatScene } from "@/components/scenes/MoatScene";
import { ClosingScene } from "@/components/scenes/ClosingScene";

export default function InvestorExperience() {
  return (
    <main className="relative overflow-hidden bg-obsidian text-white">
      <div className="fixed inset-0 grid-field opacity-40 pointer-events-none" />
      <SceneIndex />
      <MissionBriefingScene />
      <LaunchVisualScene />
      <PlatformPreviewScene />
      <ProblemScene />
      <AssetProtectionScene />
      <PTRFrameworkScene />
      <DecisionEngineScene />
      <RevenueRiskScene />
      <FutureInterfaceScene />
      <PilotStrategyScene />
      <ExpansionRoadmapScene />
      <MoatScene />
      <ClosingScene />
    </main>
  );
}
