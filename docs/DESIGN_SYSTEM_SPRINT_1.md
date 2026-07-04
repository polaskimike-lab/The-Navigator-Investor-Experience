# Navigator Design System — Sprint 1

## Visual position

Navigator should resemble premium mission-control software used in aviation, defense, logistics, and industrial command environments.

## Color logic

- Blue: intelligence / confirmed signal
- Amber: rising uncertainty / operational caution
- Red: immediate human action required
- Green: protected / mitigated / safe state
- White: primary truth
- Gray: unknown, secondary, or contextual

## Motion logic

No decorative animation. Motion must indicate one of:

- Risk propagating
- Intelligence being discovered
- A recommendation forming
- A system state changing
- A decision being approved
- Financial impact updating

## Component rules

Reusable platform primitives should be built before one-off screens.

Current Sprint 1 primitives:

- CommandPanel
- SignalCard
- RiskScale
- PlatformShell

## Development rule

Avoid breaking the deployed Investor Experience while adding platform primitives. Sprint 1 is additive.
