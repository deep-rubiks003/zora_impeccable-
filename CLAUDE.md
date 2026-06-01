# CLAUDE.md — Zora Product OS

> Read this file at the start of every session before producing any screen, copy, or spec.
> This file is the single source of truth for the Efficiency Agent mockup. When in doubt, this file wins over memory or habit.

---

## 1. What we are building

The **Efficiency Agent flow** for Zora — an investor-grade, clickable mockup of six screens across two sub-flows: right now focusing on screen 1,2,3

- **Flow 1A — AI Weekly Plan Optimization** → Screens 1, 2, 3, 4
- **Flow 1B — Adaptive Recovery Intelligence** → Screens 5, 6

The job of this artifact is **conviction, not feature coverage.** After clicking through it, an investor must believe one thing: *a single coach can deliver genuinely personalized care to hundreds of members, because the AI does the analysis and the coach just approves.*

Every design and copy decision is judged against that sentence. If a screen element does not increase that conviction, cut it.

---

## 2. The narrative we are proving

This is Beat 2 of the demo ("Efficiency") in the PRD's 5-beat arc: *AI handles personalization workflows — wearable ingestion, plan generation, and prompt-based editing in seconds.*

The felt story across the six screens:

1. Coach logs in → AI has already done the work overnight (Screen 1).
2. Coach opens one client → AI explains what it found and what to do, in plain English (Screen 2).
3. Coach steers the AI with a single sentence, watches the plan rebuild live (Screen 3).
4. Coach reviews the finished plan and sends it (Screen 4).
5. A client says "I'm exhausted" → the AI already saw it in the data and connects the two (Screen 5).
6. AI proposes the fix as a batch the coach approves in one tap (Screen 6).

The two screens that carry the demo are **Screen 3** (live prompt-driven regeneration) and **Screen 5** (data + words arriving together). Build these to the highest bar; the rest inherit it.

---

## 3. Spacing & Typography System

- **Font Family**: Geist is loaded universally for headings, labels, and body copy (`font-family: var(--font-geist)`).
- **Typographic Scale**: rem-based scaling in `design-tokens.css` (`--font-size-xs` to `2xl`).
- **Tabular Numbers**: Enabled (`font-variant-numeric: tabular-nums`) on all numeric scores, metrics, and dates to align data lists and prevent layout shifting.
- **Line Length (Measure)**: Long narratives and summaries are capped at `max-width: 68ch` for optimal reading flow.
- **Letter-Spacing**: Eyebrows/uppercase tags use `letter-spacing: 0.08em` for scannability; headings use `letter-spacing: -0.025em`.
- **Spacing Scale**: 4pt modular ramp using CSS space variables (`--space-xs` to `xl`). Gaps, margins, and paddings are bound to these variables instead of hardcoded pixels.

---

## 4. AI copy voice — non-negotiable

All in-product AI text reads like *a brilliant, calm colleague*, never a dashboard or a robot. (Source: PRD §9. Full reference: `Knowledge/ai-copy-voice.md`.)

**Use:** calm, confident, proactive, human-first, specific and data-backed, action-oriented.

**Avoid:** technical jargon ("HRV variance detected"), enterprise complexity, robotic phrasing, vague generalities, alarmist framing.

The test for any line: would a great human coach say it to another coach over coffee? If not, rewrite.

| Robotic (banned) | Human (required) |
|---|---|
| "High fatigue score detected." | "Recovery is trending down. A lighter week may improve consistency." |
| "Churn probability: 74%" | "Marcus may disengage in the next 14 days — here's how to reach him." |
| "Protein intake non-compliant." | "Sarah is consistently 40g below her protein target — a small meal swap would fix this." |
| "Plan adherence: 52%" | "Only half the workouts are getting done. The plan may be too complex right now." |

Numbers are allowed and encouraged as *support*, but the sentence leads with meaning, not the metric.

---

## 5. Animation & Motion Rules (emil-design-eng)

- **Tactile Active States**: Pressable triggers scale down slightly on click (`transform: scale(0.97)` on buttons; `scale(0.985)` on cards, roster tiles, schedule days, and risk rows) with a `160ms` transition.
- **Entrance Transitions**: Avoid animating from `scale(0)`. Elements enter from `scale(0.96)` and `opacity: 0` using a custom ease-out curve (`cubic-bezier(0.23, 1, 0.32, 1)`).
- **Cascading Staggers**: Multi-item feeds and schedule days utilize CSS delays (`stagger-1` to `7` with `30ms-50ms` steps) to slide in sequentially.
- **Crossfade Blur**: Swapping data states (like graph toggles or grid sorting) applies a temporary blur class `.transitioning` (`filter: blur(1.5px); opacity: 0.6`) for `150ms-180ms` to mask shifts.
- **Card Morphing (Skip/Undo)**: Secondary dismissals (like "Skip") transition card scale and opacity down (`scale(0.95)`, `opacity: 0`) and morph into a clean "Skipped" state with a tactile "Undo" button, preserving grid geometry.
- **Origin-Aware Popovers**: Custom dropdown menus scale from trigger anchor (e.g. `transform-origin: top right`) using `150ms var(--ease-out)`.
- **Sliding Action Drawers**: Functional queues use slide-in panels from viewport edge with `--ease-drawer` (`cubic-bezier(0.32, 0.72, 0, 1)`) and blur overlay.
- **List Exit Transitions**: Removing items scales down and collapses layout height (`height: 0; margin: 0; padding: 0;`) smoothly.

---

## 6. File Architecture & Routing

- **Multi-File Layout** in `outputs/`:
  - **Screen 1 (Roster Dashboard)** is located in `index.html`.
  - **Screen 2 (AI Detail view)** is located in `reco-card.html`.
  - Both files import [design-tokens.css](file:///c:/Users/deept/Downloads/zora-product-os/Projects/efficiency-agent-mockup/outputs/design-tokens.css).
- **URL Parameter Routing**: Dashboard cards, at-risk rows, and client tiles link dynamically using URL parameters (`reco-card.html?client=<key>`).
- **Supported Athletes**:
  - `sarah-k` (Default: Exhaustion alert, 42 sleep, 18 HRV, Half-Marathon plan)
  - `marcus-t` (Churn alert, 62 sleep, 32 HRV, Strength plan)
  - `aman-khanna` (Deload warning, 58 sleep, 42 HRV, Hypertrophy plan)
  - `meera-joshi` (Nutrition drift, 78 sleep, 68 HRV, 62% protein)
  - `priya-i` (Optimized state, 78 sleep, 71 HRV, 94% adherence)

---

## 7. Unique Components

- **Impact Preview Graph Toggle**: Segmented pill switch (Without Action vs With Adjustment) that crossfades dual SVG projection curves, highlights active stroke-widths and drops-shadows, and swaps coordinate markers.
- **Biometric Bento Highlights**: Focused metrics container (`.bento-focus`) styling Sleep & HRV cards to isolate visual hierarchy.
- **WCAG Tap Target Buffer**: Small interactive items (`.icon-btn`) employ absolute pseudo-elements (`::before` with a `-6px` inset) to guarantee a WCAG-compliant `46x46px` hit target.
- **Distilled Single-Line Hero**: Page header hero section simplified to a single horizontal flex line containing the main greeting, interactive alert badge (which smooth-scrolls and flashes a premium highlight on the Action Center), and clean inline metadata, stacking on mobile under `@media (max-width: 768px)`.
- **Theme Toggle & Dark Mode Support**: Support for `data-theme="dark"` attribute in HTML, mapped with CSS variables for surface, ink, and status contrast. A custom `.theme-toggle` button component triggers transitions for sun/moon icons and auto-syncs with OS dark/light changes.
- **Interactive Ribbon Tiles**: Replaced static dashboard stats with an interactive flex grid `.ribbon` containing buttons (`.ribbon__tile`) with sparklines, radial progress circles, active pulsing animations, and chevrons.
- **Sliding Pill Switcher Animation**: Rounded tab selector pill (`.signals-toggle-indicator`) inside `.signals-toggle-group` that dynamically slides (`transform: translateX(...)`) and resizes (`width`) to fit active tab buttons.
- **Updated Weekly Schedule 7-day Card Grid**: Refactored schedule details popover in `reco-card.html` into a 7-day card grid (`.sched-day-card`) with dynamic difference comparison lists (`.sched-change`).
