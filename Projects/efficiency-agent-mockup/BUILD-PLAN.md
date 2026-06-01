# Build Plan & Project Status

This document tracks the compilation and deployment plan for the Zora Efficiency Agent interactive mockup.

## Current Outputs

All compiled assets are located in the [outputs/](file:///c:/Users/deept/Downloads/zora-product-os/Projects/efficiency-agent-mockup/outputs/) folder:

- **[design-tokens.css](file:///c:/Users/deept/Downloads/zora-product-os/Projects/efficiency-agent-mockup/outputs/design-tokens.css)** — Shared CSS variables, layout, utility, and animation classes. Documented in [DESIGN.md](file:///c:/Users/deept/Downloads/zora-product-os/Projects/efficiency-agent-mockup/DESIGN.md).
- **[index.html](file:///c:/Users/deept/Downloads/zora-product-os/Projects/efficiency-agent-mockup/outputs/index.html)** — Interactive dashboard (Screen 1), with stagger entrances and dynamic routing to client pages.
- **[reco-card.html](file:///c:/Users/deept/Downloads/zora-product-os/Projects/efficiency-agent-mockup/outputs/reco-card.html)** — Interactive detail page (Screen 2), driven by `?client=<key>` (5 athletes).

## Shipped This Iteration

Detailed in the per-screen specs and [DESIGN.md](file:///c:/Users/deept/Downloads/zora-product-os/Projects/efficiency-agent-mockup/DESIGN.md).

- **Dashboard (Screen 1)**:
  - **Full-roster modal** — "View full roster" opens a searchable, status-filterable dense table of all members; rows route to the detail page.
  - **Payments-due quick-resolve** — floating pill + right slide-in; overdue-first rows resolved via Send reminder (chat) / Send link (payment), with toast + count update.
  - **AI Action Center** redesigned to flat hairline-divided columns (no nested cards); copy distilled to evidence metric pairs + an "AI drafted" fix line.
  - **Hero header** — thinned, with a living aurora backdrop (drifting blooms + breathing contour lines + cursor glow) and a one-time cinematic entrance.
  - **Page glow field** — one top-weighted purple wash behind everything; cards float over it; the hero aurora flows into it.
- **Client detail (Screen 2)**:
  - **"Signals Zora is reading"** block (replaces the biometric bento): summary line + top-right toggle that swaps between the **semicircle dial verdict** (Recovery / Sleep / Completion / Protein) and the **full per-source signal table**.
  - Iterated: data-section grid → minimalist → radial dials → bold box-free semicircles.
- **Both pages**: monogram circles replaced by **Notion-style DiceBear `notionists` face avatars** (seeded by name, via the shared `ZoraFaces` helper).

## Next Steps

1. Build **Screen 03 (AI Prompt & Steering Modal)**: natural-language plan rebuild on top of `reco-card.html`.
2. Build remaining flow screens (4, 5, 6).
3. Per-client signal datasets (training/nutrition/verdict currently use the representative Sarah-K scenario; only HRV/sleep/RHR sync per client).
4. Verify in-browser across light/dark + breakpoints (glow falloff, aurora/entrance timing, dial fills, avatar loading).
