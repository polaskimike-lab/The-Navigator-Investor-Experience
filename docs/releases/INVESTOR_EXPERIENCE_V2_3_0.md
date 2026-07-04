# Investor Experience v2.3.0 — Mission Canvas Preview

## Purpose

This release upgrades Scene 05 from a static asset-protection explanation into the first Mission Canvas™ preview.

## New files

- components/visuals/MissionCanvasPreview.tsx
- components/presentation/CanvasPrincipleCard.tsx
- docs/releases/INVESTOR_EXPERIENCE_V2_3_0.md

## Modified files

- components/scenes/AssetProtectionScene.tsx

## Visual impact

High. The Asset Protection Intelligence section now shows a custom mission-layer visualization instead of simple node cards.

## Architecture impact

Introduces the first reusable Mission Canvas concept. This visual model can later evolve into:
- Fleet Operations Mission Canvas
- Operational Optimization Engine™
- Transportation Digital Twin
- Executive Analytics scenario viewer

## Rollback plan

Revert:
- components/scenes/AssetProtectionScene.tsx

Remove:
- components/visuals/MissionCanvasPreview.tsx
- components/presentation/CanvasPrincipleCard.tsx

## Next release

Investor Experience v2.4.0 — PTR Engine visualizer.
