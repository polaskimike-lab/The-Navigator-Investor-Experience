# Investor Experience v2.6.0 — Platform Expansion

## Release type

Incremental feature release.

## Purpose

Show that THE NAVIGATOR™ is not limited to trucking. It is an intelligence platform that scales across trucking, rail, marine, aviation, and consumer transportation.

## New files

- components/engines/TransportationNetwork.tsx
- components/scenes/PlatformExpansionScene.tsx
- docs/releases/INVESTOR_EXPERIENCE_V2_6_0_PLATFORM_EXPANSION.md

## Modified files

- app/page.tsx
- components/layout/SceneIndex.tsx

## Visual impact

Adds a new transportation network expansion scene between PTR and Roadmap.

## Architecture impact

Establishes the cross-modal expansion visualization that can later evolve into the Transportation Digital Twin and Navigator OS module map.

## Rollback plan

Revert:
- app/page.tsx
- components/layout/SceneIndex.tsx

Remove:
- components/engines/TransportationNetwork.tsx
- components/scenes/PlatformExpansionScene.tsx
