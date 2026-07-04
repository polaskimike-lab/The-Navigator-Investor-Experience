# Investor Experience v2.5.0 — Executive Simulator

## Release type

Incremental feature release.

## Purpose

Introduce an executive-facing financial simulator that translates Navigator's safety and operational intelligence into investor-relevant financial outcomes.

## New files

- components/engines/ExecutiveSimulator.tsx
- components/scenes/ExecutiveSimulatorScene.tsx
- docs/releases/INVESTOR_EXPERIENCE_V2_5_0_EXECUTIVE_SIMULATOR.md

## Modified files

- app/page.tsx
- components/layout/SceneIndex.tsx

## Visual impact

Adds a new Executive Analytics section between Operational Optimization and PTR Framework.

## Architecture impact

Establishes the first reusable executive analytics module. This can later evolve into the full Executive Analytics product module.

## Rollback plan

Revert:
- app/page.tsx
- components/layout/SceneIndex.tsx

Remove:
- components/engines/ExecutiveSimulator.tsx
- components/scenes/ExecutiveSimulatorScene.tsx
