# Screen 02 — AI Recommendation Detail

*Implements PRD Section 3.2 — AI Recommendation Card & Wearable Signals*

## Overview
Shows the detailed recommendation analysis for a single athlete (Sarah K.) based on wearable and adherence data.And also the additional data which can be included in the plan.   

## PRD Alignment
- **Narrative Beat**: Beat 2 — Coach opens Sarah K.; AI explains sleep/HRV degradation and recommends action.
- **Primary Objective**: Build trust. The AI clearly explains *why* it suggests modifications, backing it up with sleep scores and HRV baselines.

## Components & Layout
- **Client Header Profile**: Displays the active client's status and current phase metrics.
- **Client switcher (in the header)**: A pill built into the header strip, prev/next circular arrows flanking the identity and a "N of M" counter under the name that opens the roster dropdown. Switches client in place (no reload), preserves the active tab, updates the URL, and lands the new client at the top. See DESIGN.md → Client switcher.
- **AI recommendation box**: Clean copy explaining the reasoning and recommendations.
- **Action Toolbar**: Approve & Send to Client, Edit with AI (opens Screen 3), or Regenerate Draft.
- **Right action rail (sticky)**: Always-reachable quick actions, Nutrition, Schedule, Chat, Call, with Biometric and History below a divider. Each scrolls to and flashes its section (or opens the chat slide-over / call modal). See DESIGN.md → Action rail.

## Weekly Schedule Adjustment (current build)

*Replaces the earlier per-day toggle list and the standalone schedule popup.*

- **Horizontal 7-day strip** (Mon→Sun) inside the recommendation card. Changed days carry an accent top edge + flag.
- **Week-level toggle** (segmented): flips the whole strip between **Current week** and **Zora's recommended**, with a change count on the recommended side. Crossfade on switch; changed days light up left-to-right when the recommended week is revealed.
- Defaults to Zora's recommended; clients with no changes show "No adjustments needed this week" and the toggle is hidden.
- After Edit with AI (Screen 3), "See Updated Plan" merges Zora's rewrite into this strip, reveals the recommended week, and pulses it. See DESIGN.md → Week strip.

## Biometric Data & Nutrition Plan panels

Two dedicated panels on the Plan & Performance tab, scrolled to from the right rail:
- **Biometric Data**: Sleep Score, HRV, Resting HR tiles pulled from the client's metrics, each with its trend and severity color.
- **Nutrition Plan**: per-client targets (protein, meals logged, timing/adherence) with a suggested-fix note; falls back to a representative read when a client has no nutrition data.

## "Signals Zora Is Reading" block (current build)

*Replaces the original biometric bento at the top of the Plan & Performance tab.*
Full dataset in demo-data.md → Signals Zora Is Reading.

- **Glanceable readout + top-right toggle** (replaces the prose summary): a
  scan-first header so the coach sees the verdict without reading a sentence,
  (1) a **ratio** `N flagged / M total` with a proportion bar, (2) three
  **source dots** (Wearables / Training / Nutrition) that turn red when that
  stream carries a flag, and (3) the **recommendation as the focal line**
  (per client, e.g. "Reduce training volume next week"; green when steady).
  The **"See all signals"** view-switch stays on the right. The short risk
  framing ("Fatigue accumulation risk if load holds") sits below the dials.
- **Date-range scope (7d / 14d / 30d, default 7d)**: a segmented control in the
  header scopes the whole block. Changing it rewrites the dial scores for that
  window (shorter = acute picture, longer = averaged/steadier), re-animates the
  dials, and refreshes the ratio, source flags, and recommendation. The dataset
  per range lives in `DIAL_RANGES` (representative scenario).
- **View A — verdict (default)**: the 4 scores as a cluster of **semicircle
  severity dials** (at 7d: Recovery 61/100, Sleep Poor, Completion 67%, Protein
  58%), each box-free with the value nested in the dome and a "why" line below.
  A short risk note sits below: *"Fatigue accumulation risk if load holds."*
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
