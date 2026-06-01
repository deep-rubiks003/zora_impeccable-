# Screen 02 — AI Recommendation Detail

*Implements PRD Section 3.2 — AI Recommendation Card & Wearable Signals*

## Overview
Shows the detailed recommendation analysis for a single athlete (Sarah K.) based on wearable and adherence data.And also the additional data which can be included in the plan.   

## PRD Alignment
- **Narrative Beat**: Beat 2 — Coach opens Sarah K.; AI explains sleep/HRV degradation and recommends action.
- **Primary Objective**: Build trust. The AI clearly explains *why* it suggests modifications, backing it up with sleep scores and HRV baselines.

## Components & Layout
- **Client Header Profile**: Displays Sarah K.'s status and current phase metrics.
- **AI recommendation box**: Clean copy explaining the reasoning and recommendations.
- **Action Toolbar**: Approve recommendation, Edit with AI (opens Screen 3), or Regenerate.

## "Signals Zora Is Reading" block (current build)

*Replaces the original biometric bento at the top of the Plan & Performance tab.*
Full dataset in demo-data.md → Signals Zora Is Reading.

- **Summary line + top-right toggle**: *"Zora is reading 15 signals across
  wearables, training, and nutrition. 4 out of range: recovery, sleep,
  completion, protein."* with a **"See all signals"** view-switch on the right.
- **View A — verdict (default)**: the 4 out-of-range scores as a cluster of
  **semicircle severity dials** (Recovery 61/100, Sleep Poor, Completion 67%,
  Protein 58%), each box-free with the value nested in the dome and a "why" line
  below. Followed by the conclusion: *"Fatigue accumulation risk. Volume
  reduction recommended next week."*
- **View B — full table**: clicking the toggle swaps the dials for the full
  per-source signal list (Wearable / Training / Nutrition & behavior), label +
  value + note, color only on out-of-range. Toggle flips to "Hide signals".
- **Behavior**: crossfade swap; dial arcs re-animate on return; HRV/sleep/RHR
  sync per client (the rest are the representative scenario). See DESIGN.md →
  Signals block and Semicircle severity dials.

## Avatars
- Client header, chat, and any monogram are Notion-style DiceBear `notionists`
  faces seeded by name (re-applied on client switch). See DESIGN.md → Notion
  face avatars.
