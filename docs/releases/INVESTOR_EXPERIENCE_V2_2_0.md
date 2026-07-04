# Investor Experience v2.2.0 — Risk Convergence Scene

## Purpose

This release upgrades Scene 04 from simple problem cards into a visual explanation of risk convergence.

## New files

- components/visuals/RiskConvergenceMap.tsx
- components/presentation/RiskSignalCard.tsx
- docs/releases/INVESTOR_EXPERIENCE_V2_2_0.md

## Modified files

- components/scenes/ProblemScene.tsx

## Visual impact

Moderate to high. The problem section now uses a custom animated risk-convergence visual instead of generic cards.

## Architecture impact

Introduces a reusable risk-flow visualization pattern that can later support:
- Fleet Operations
- Executive Analytics
- Operational Optimization Engine™
- Transportation Digital Twin

## Rollback plan

Revert:
- components/scenes/ProblemScene.tsx

Remove:
- components/visuals/RiskConvergenceMap.tsx
- components/presentation/RiskSignalCard.tsx

## Next release

Investor Experience v2.3.0 — Intelligence Layer / Mission Canvas preview.
