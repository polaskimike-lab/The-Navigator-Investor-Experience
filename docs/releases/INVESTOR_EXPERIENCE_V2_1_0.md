# Investor Experience v2.1.0 — Cinematic Mission Briefing

## Purpose

This release upgrades Scene 01 from a static hero into a cinematic mission briefing.

## New files

- components/visuals/MissionGrid.tsx
- components/presentation/MissionMetric.tsx
- docs/releases/INVESTOR_EXPERIENCE_V2_1_0.md

## Modified files

- components/scenes/MissionBriefingScene.tsx
- app/globals.css

## Visual impact

High. The landing section now includes layered grid/radar visuals, animated route paths, mission-state language, and improved metric presentation.

## Architecture impact

Introduces reusable visual layer components and mission metric cards that can later be reused in Fleet Operations, Executive Analytics, and the Transportation Digital Twin.

## Rollback plan

Revert:
- components/scenes/MissionBriefingScene.tsx
- app/globals.css

Remove:
- components/visuals/MissionGrid.tsx
- components/presentation/MissionMetric.tsx

## Next release

Investor Experience v2.2.0 — Transportation Problem / Risk Convergence scene.
