# Investor Experience v2.0.0 — Scene Engine Refactor

## Purpose

This release converts the Investor Experience from a monolithic page into a scene-based presentation engine.

## What changed

### New files

- lib/presentation/scenes.ts
- components/presentation/SceneShell.tsx
- components/presentation/SceneIndex.tsx
- components/scenes/*
- docs/releases/INVESTOR_EXPERIENCE_V2_0_0.md

### Modified files

- app/page.tsx

## Visual impact

Minimal by design.

The site should look substantially similar to v1, with one visible addition: a small right-side scene index on large desktop screens.

## Architecture impact

This is the first Sprint 2 foundation release. Future animated/cinematic improvements can now be applied scene by scene without risking the entire page.

## Rollback plan

If deployment fails, revert only:

- app/page.tsx
- components/scenes/
- components/presentation/
- lib/presentation/

The prior v1 visual structure remains recoverable from Git history.

## Next release

Investor Experience v2.1.0 — Cinematic Hero / Mission Briefing.
