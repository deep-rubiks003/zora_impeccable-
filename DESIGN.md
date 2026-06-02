---
name: Zora Console Light
description: Light theme design tokens with premium purple accents for Zora Coach Console
colors:
  primary: "#7a5487"
  neutral-bg: "#f5f5f7"
  card-bg: "#ffffff"
  ink: "#1a1a2e"
  accent-bg: "#e8dced"
  ok: "#2d9e6b"
  warn: "#e67e22"
  bad: "#c0392b"
  slate-text: "#888888"
typography:
  display:
    fontFamily: "Geist, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.15
    textColor: "{colors.ink}"
  headline:
    fontFamily: "Geist, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.2
    textColor: "{colors.primary}"
  title:
    fontFamily: "Geist, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.25
    textColor: "{colors.ink}"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
    textColor: "{colors.ink}"
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "14px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "8px 12px"
  button-secondary:
    backgroundColor: "{colors.accent-bg}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "8px 8px"
  card-spotlight:
    backgroundColor: "{colors.card-bg}"
    rounded: "{rounded.xl}"
    padding: "22px 28px"
---

# Design System: Zora Console Light

## Overview

**Creative North Star: "Clean SaaS workspace with premium purple highlights"**

Zora Console utilizes a clean, high-contrast interface designed to convey professional utility and visual clarity. The app shell features support for both Light Mode (anchored on a light background `#f5f5f7` framing pure white cards `#ffffff`) and Dark Mode (anchored on `#0e0e14` with deep purple radial glow layers and dark-translucent glass cards `#1c1c27`). Accents of rich purple (`#7a5487` in Light Mode, `#b48bc1` in Dark Mode) define primary controls, interactive highlights, and status signifiers. Typography is modern, geometric, and structured, prioritizing readability and systematic sizing.

### Key Characteristics:
- Dual light and dark mode color systems matching system preferences or user selection.
- Premium glassmorphic app shell surfaces with frosted glass borders and hardware-accelerated transitions.
- Modern typography featuring crisp geometric headings (Geist/DM Sans).
- Semantic color coding for warnings, positive completion, and alerts.
- Tactile card layouts with subtle spacing and soft borders.

# Zora Coach Console — Design System

The visual system for the Efficiency Agent mockup. All values live in
[outputs/design-tokens.css](file:///c:/Users/deept/Downloads/zora-product-os/Projects/efficiency-agent-mockup/outputs/design-tokens.css)
and are shared by `index.html` (dashboard) and `reco-card.html` (client detail).

Register: **product** (a tool that serves the task). Restraint over decoration;
one accent; atmosphere carried by light, not by colored sections.

---

## Color

Brand accent is purple. One accent across the whole surface; status colors are
the only other hues, used strictly for meaning.

| Token | Light | Dark | Role |
|---|---|---|---|
| `--accent` | `#7a5487` | `#b48bc1` | Primary purple |
| `--accent-soft` | `#f6f0f8` | `rgba(180,139,193,.14)` | Accent tint fill |
| `--accent-deep` | `#5e3b6b` | `#d4b5df` | Focus / hover / deep accent |
| `--ok` | `#2d9e6b` | `#4dc28a` | Steady / success |
| `--warn` | `#e67e22` | `#f0a04b` | Watch (text uses `#a85a18` on light for AA) |
| `--bad` | `#c0392b` | `#e06155` | At-risk / overdue |
| `--paper` / `--paper-2` | `#f5f5f7` / `#fff` | `#14141c` / `#1c1c27` | Shell bg / card surface |
| `--ink` … `--ink-4` | `#1a1a2e` → `#888` | `#f4f4f7` → `#82828f` | Text ramp (dark → muted) |

Contrast: body text holds WCAG AA against its surface everywhere; the amber
"watch" text shade is darkened to `#a85a18` on light because raw `--warn` fails
AA on white. Atmospheric glow layers are kept faint enough that card and text
contrast are unaffected.

---

## The glow field (page atmosphere)

The whole page sits on **one continuous top-weighted purple wash**, not scattered
corner blooms. Defined on `html, body` (and the dark override), `background-attachment: fixed`:

- Densest behind the hero + AI Action Center (large radial anchored ~`38% -8%`).
- An off-center top-right bloom so it never reads as a flat banner.
- A top-down linear fade that thins to plain `--paper` by the lower third.

`.main` is transparent and all cards are translucent glass, so the wash reads
*through* the surfaces: every card floats over one shared light. The hero aurora
(below) is tuned to be the **crest** of this same field, with no bottom border on
the hero band so the glow flows into the page uninterrupted.

---

## Hero aurora + cinematic entrance (`.page-head--hero`, dashboard)

A "living" but calm header. Layers, all `transform`/`opacity`/`filter` for 60fps:

- **Aurora blooms** (`.hero-bloom--1/2/3`): three concentrated brand radials
  clustered behind the greeting, drifting on independent slow loops (19/24/28s)
  so the field never visibly repeats. `mix-blend-mode: multiply` (light) /
  `screen` (dark).
- **Breathing contour lines** (`.hero-waves`, inline SVG): thin accent strokes
  with a gentle vertical sway + horizontal drift, edge-masked so they fade out
  (never harden into a box).
- **Cursor-tracked glow** (`.hero-glow`): a small accent halo following the
  pointer, rAF-throttled via two CSS vars (`--mx/--my`), no re-renders. Skipped
  on touch and reduced-motion.
- **Cinematic entrance (once, on load)**: headline clip-reveals, the accent word
  draws in, the meta slides in, the "Live" dot ignites, the aurora fades up, then
  it rests. `prefers-reduced-motion` → everything instant/static, glow removed.

The header band is intentionally **thin** (tight padding, title `28px`); the
glow holds the vertical space instead of padding.

---

## Surfaces & shape

- **Glass surfaces** (`--glass-bg/border/shadow`, `--glass-blur`): used for the
  sidebar, topbar, and primary cards (action-center, drafts, client cards,
  ambient rail). Translucent so the glow shows through. Glass is purposeful here
  (it is the "floating over light" device), not decorative everywhere.
- **Radius scale**: cards 16–18px, controls/inputs 6–8px, pills 999px. Pick one
  per element class and hold it.
- **Shadows**: soft, tinted toward ink/brand, never pure black. `--shadow-sm/md/lg`.
- **Nested cards are avoided.** The AI Action Center drafts are flat columns
  separated by hairline dividers inside one glass panel, not card-in-card.

---

## Motion

- Easing: `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` (and `0.22,1,0.36,1`).
  Exponential ease-out only; no bounce/elastic.
- Durations: micro 120–260ms, reveals 600–760ms, ambient loops 19–38s.
- Every animation has a `prefers-reduced-motion: reduce` fallback (crossfade or
  instant). Ambient loops, the cursor glow, and the entrance all collapse to static.
- Reveals enhance an already-visible default (no content gated behind a class).

---

## Signature components (this build)

### Semicircle severity dials (`.dial`, reco-card → Plan & Performance)
The AI verdict renders as a cluster of **semicircle gauges** (180° SVG arc path,
length `π·30 ≈ 94.25`, `stroke-dashoffset` fills to `data-pct`). Box-free: the
dome stands on its own, no backing panel. Bold treatment: thick 6px arc,
full-strength severity color, the value is the focal number (`25px/700`,
severity-colored) nested beneath the dome; name + "why" below. Smooth eased fill,
reduced-motion paints instantly.

### Signals block (reco-card → Plan & Performance)
"Signals Zora is reading": a summary line (`N signals … M out of range`) with a
**top-right view-switch toggle**. Body swaps between **View A** (the dial verdict
+ conclusion) and **View B** (the full per-source signal table), crossfading. The
toggle is delighted: chevron peek on hover, springy flip, a one-shot bloom ring
on switch, lift + accent glow.

### Full-roster modal (`index.html`)
"View full roster" opens a centered dialog (palette-overlay idiom, z 2000) with a
searchable, status-filterable dense table of all clients; rows route to the
detail page. Esc / overlay-click close, scroll lock, focus management.

### Payments-due quick-resolve (`index.html`)
A floating pill (bottom-right, count badge, pulses only while something is
overdue) opens a right slide-in (queue-drawer idiom). Rows are overdue-first; each
resolves in place via **Send reminder** (chat) or **Send link** (payment),
collapsing the row and firing the toast. Empty state when cleared.

### Notion-style face avatars (`.has-face`, both pages)
Every monogram circle left of a name is replaced by a **DiceBear `notionists`**
illustrated face, seeded by the person's name (deterministic, varied). Applied by
a shared `window.ZoraFaces` helper that scans avatar selectors, derives a seed
(`data-name` / `data-client` / text), and sets `--face` as a cover background;
re-applied after dynamic renders (roster modal, client switch, chat).

---

## Typography

- **Geist** (display + UI), **Geist Mono** (numerals/meta), **DM Sans** (some body).
  Cap 3 families. Numerals use `font-variant-numeric: tabular-nums`.
- Hierarchy via scale + weight contrast; tight tracking on display
  (`-0.02em` to `-0.03em`). `text-wrap: balance` on headings, `pretty` on prose.
- Uppercase reserved for short labels/eyebrows used sparingly.

---

## Layout & z-index

- Sidebar (sticky) + main; content max width via the page grid.
- Semantic z-scale: dropdown `100` → drawer-overlay `999` / drawer `1000` →
  pay-overlay `1190` / pay-drawer `1200` → modals / palette / roster `2000`.
  Never arbitrary `9999`.
- Responsive: grids use `repeat(auto-fit, minmax(...))`; dense tables collapse to
  stacked rows on narrow widths; the hero meta reflows under the title on mobile.

---

## Theming

Light and dark both first-class, driven by `data-theme` on `<html>` with a
pre-paint boot script (no flash) and a topbar toggle persisted to `localStorage`.
All component colors come from tokens so dark mode is automatic; glow/glass layers
have explicit dark tunings (deeper wash, `screen` blend, lifted alphas).


## Colors

The system uses a highly structured dual-theme scheme pairing soft card backgrounds with rich purple highlights, maintaining accessibility across both light and dark backgrounds.

### Light Mode Palette
*   **Primary Purple** (`#7a5487`): Used for primary CTAs, headings, AI highlights, and focus indicators.
*   **Purple Accent** (`#e8dced`): Used for subtle tints, recommendation card background washes, and secondary controls.
*   **Soft White** (`#ffffff`): Main card backgrounds and modals.
*   **Background** (`#f5f5f7`): Light app shell backdrop.
*   **Dark Text** (`#1a1a2e`): Main headings and body text.
*   **Success Green** (`#2d9e6b`), **Amber** (`#e67e22`), **Alert Red** (`#c0392b`): Standard semantic alerts.

### Dark Mode Palette
*   **Primary Purple Accent** (`#b48bc1`): High-contrast purple shifted lighter to maintain contrast on dark backgrounds.
*   **Purple Accent Wash** (`rgba(180, 139, 193, 0.14)`): Translucent purple accent backgrounds.
*   **Dark Card Surface** (`#1c1c27`): Rich dark card and modal background panels.
*   **Dark Background** (`#14141c` / `#0e0e14`): Dark app shell backdrop and gradients.
*   **Light Ink** (`#f4f4f7` / `#e6e6ec`): Main headings and body text.
*   **Success Green** (`#4dc28a`), **Amber** (`#f0a04b`), **Alert Red** (`#e06155`): Lifted semantic status alerts for readability.

### Named Rules
**The White-on-Purple Rule.** Any text overlaying a Primary Purple background must be pure white (`#ffffff`) or near-white to maintain an accessible contrast ratio of at least 4.5:1.

## Typography

**Font Family:** Modern geometric sans-serif (Geist universally; DM Sans as body copy / fallback; Inter as secondary fallback)

### Hierarchy
- **Display (H1)** (700, `28px-32px`, `1.15`): Used for page titles and major client headings.
- **Headline (H2)** (600, `22px-24px`, `1.2`): Used for section headers.
- **Title (H3)** (600, `18px-20px`, `1.25`): Used for card headers.
- **Body** (400, `14px-16px`, `1.5`): Used for all primary copy, summaries, and data lists.
- **Label / Meta** (500, `11px-12px`, `1.5`, uppercase): Used for navigation links, meta tags, and data units.

### Named Rules
- **The Meta Tracking Rule.** All meta labels must be rendered in uppercase with precise letter spacing (`0.06em` or `0.08em`) to guarantee scan-readability at small font sizes.
- **The Tabular Numbers Rule.** Any numerical display (such as heart rates, scores, sleep durations, and dates) must utilize tabular numbers (`font-variant-numeric: tabular-nums`) to prevent layout shift and column misalignment when swapping data states.
- **The Max Measure Rule.** Paragraphs and AI explanation text blocks must be capped at a maximum width of `68ch` to minimize eye strain and optimize reading pace.

## Spacing

The interface is built on a strict 4-point modular scale. Margins, padding, and layout gaps must utilize these defined CSS custom properties:

- **Extra Small (`--space-xs`)**: `4px` — Used for tight label-to-value gaps and icon spacing.
- **Small (`--space-sm`)**: `8px` — Used for button paddings, small list item spacing.
- **Medium (`--space-md`)**: `16px` — Used for internal card paddings, normal stack layout spacing.
- **Large (`--space-lg`)**: `24px` — Used for section layouts, card gaps, and page headers.
- **Extra Large (`--space-xl`)**: `32px` — Used for page side padding and major layout separations.

## Elevation

Dimension and depth are conveyed through color separation (Soft White cards over Background fills) and subtle borders rather than heavy drop shadows.

### Named Rules
- **The Flat-Border Rule.** Card borders must use a thin border of `1px solid rgba(26, 26, 46, 0.06)` or `rgba(122, 84, 135, 0.12)` instead of drop shadows to preserve a clean, flat-layout feel.

## Motion & Interaction (emil-design-eng)

All interface components must feel highly responsive, tactile, and fluid. The following interaction rules apply:

- **Tactile Feedback (Active Scaling)**: Any clickable elements must scale down slightly under touch/press. Use transition of `160ms` with the scale values:
  - Small elements (buttons, segmented toggles, navigation tabs): `transform: scale(0.97)`
  - Large elements (bento cards, client roster cards, list rows): `transform: scale(0.985)`
- **Entrance Transitions (Cascade & Stagger)**: Layout elements must animate in sequentially using CSS animation delays (staggers) from `stagger-1` to `stagger-7` (increments of `30ms-50ms` steps). Elements slide upward by entering from `scale(0.96)` and `opacity: 0` using a smooth ease-out curve (`cubic-bezier(0.23, 1, 0.32, 1)`).
- **Sliding Pill Tab Transitions**: The background indicator (`.signals-toggle-indicator`) translates horizontally and resizes dynamically in width via JavaScript using `offsetWidth` and `offsetLeft` adjustments, bound to window resize handlers, transitioning smoothly with `cubic-bezier(0.23, 1, 0.32, 1)`.
- **Crossfade State Blur**: When toggling visual datasets (e.g., swapping SVG graph curves) or sorting grids, apply a temporary CSS blur class (`.transitioning` with `filter: blur(1.5px); opacity: 0.6`) for `150ms-180ms` to mask direct visual shifts and create a premium transition effect.
- **Dynamic Count-Ups (Delight)**: Key statistics (such as hours saved) and circular progress rings animate dynamically from `0` to their active values over `1000ms-1200ms` on initial page load, drawing focus to system efficiency.
- **Transient Success Toasts (Delight)**: Standard plan approvals trigger a slide-up toast notification (`.toast`) in the bottom-right corner. It stays visible for `4s` and automatically purges success parameter hooks from the URL context using clean History API replacement (no page reload).
- **Interactive Card Morphing**: Destructive or secondary dismissals (like "Skip") transition the card scale and opacity down (`scale(0.95)`, `translateY(4px)`, `opacity: 0`) and morph it into a clean, minimal "Skipped" placeholder card with a tactile "Undo" button. This keeps grid geometry stable while giving users quick recovery.
- **Origin-Aware Popover Dropdowns**: Custom selects or context menus must animate from their trigger's anchor point (e.g., `transform-origin: top right`) using `150ms var(--ease-out)` to feel natural.
- **Sliding Action Drawers**: Functional queues or large side workflows use slide-in panels from the viewport edge (e.g., `translateX(100%)` to `translateX(0)`) using the iOS-like `--ease-drawer` curve (`cubic-bezier(0.32, 0.72, 0, 1)`) with a blur backdrop overlay (`backdrop-filter: blur(4px)`).
- **Hardware-Accelerated List Exits**: Items removed from lists (like quick-approving a draft in the queue) scale down (`scale(0.92)`), fade, and transition their layout dimensions (`height`, `margin`, `padding`) to `0` to avoid jarring jumps.

## Accessibility & Tap Target Buffers

- **Contrast Ratios**: Body text, inputs, and indicators must maintain a contrast ratio of at least 4.5:1 against their backgrounds.
- **Interactive Targets**: All clickable components must meet WCAG standards with a target size of at least `44x44px` (preferably `46x46px`). For small icons (e.g. `.icon-btn` measuring 34px), expand the clickable area invisibly using an absolute pseudo-element (`::before` with `-6px` margins) to guarantee a compliant tap area without distorting the layout.

## Components & Bento Structures

### Buttons
- **Primary Pill**: Background Primary Purple (`#7a5487`), text Soft White (`#ffffff`), `9999px` corner radius.
- **Secondary Block**: Background Purple Accent (`#e8dced`), text Primary Purple (`#7a5487`), `8px` corner radius.

### Cards & Layout Containers
- Dashboard Card: Background Soft White (`#ffffff`), border `1px solid rgba(26, 26, 46, 0.06)`, `14px` corner radius. In dark mode, switches to background `#1c1c27` and border `1px solid rgba(255, 255, 255, 0.08)`.
- Recommendation Card: Background Purple Accent (`#e8dced`), border `1px solid rgba(122, 84, 135, 0.15)`, `14px` corner radius.
- Bento Focus Cards: Highlighted metrics (such as Sleep Score and HRV) use `.bento-focus` structure, featuring a subtle accent container tint (`var(--paper-3)`) and larger typography for increased readability.
- Roster Pulse List Table: A structured data table container. Background Soft White (`#ffffff`), border `1px solid var(--line)`, `14px` corner radius. Columns (Athlete, Status, HRV, Sleep, Adherence, 7-Day Trend) align using CSS grid. Progressive responsive column hiding collapses the grid and hides non-essential data columns on smaller screens (Trend/Sleep hide on tablets, Adherence on mobile) to maintain readability.
- Distilled Hero Layout: Combines greeting, interactive badge, and live sync metadata in a single, balanced horizontal flex row, reducing vertical scroll. Stacks into clean vertical block on mobile.
- Ribbon Stats Banner: Flex/grid button-tiles (`.ribbon__tile`) containing active sparklines, circular progress arcs, active pulsing dots (`.ribbon__pulse`), and chevrons. Includes vertical and horizontal gradient hairline dividers.
- Theme Toggle: Segmented switcher `.theme-toggle` with a `.theme-toggle__thumb` hosting sun/moon SVGs that transition in rotation/scale when clicked or when matching system settings.
- Weekly Schedule Popup Grid: Uses a 7-card grid `.sched-day-card` layout with tinted highlights for Zora-edited days alongside `.sched-change` list elements.

### Inputs
- **Search & Text Fields**: Background Soft White (`#ffffff`), border `1px solid rgba(26, 26, 46, 0.1)`, `8px` corner radius.

## Do's and Don'ts

### Do:
- **Do** use standard theme-mapped surface variables (`--paper` for app background, `--card` or `--paper-2` for content card backgrounds).
- **Do** apply Primary Purple (`--accent`) to all primary CTAs, active highlights, and page titles, ensuring it shifts for dark-mode contrast.
- **Do** format meta labels in uppercase with explicit character spacing.
- **Do** enforce tabular numbers on all tables and lists containing numerical scores.
- **Do** expand tiny tap targets using absolute pseudo-element buffers.
- **Do** support unified dark mode toggles with a pre-paint boot script to avoid theme flashing.
- **Do** apply extremely faint care-specific background tints using `color-mix(in oklab, ...)` to preserve contrast on severity status colors.

### Don't:
- **Don't** use hardcoded color values (`#ffffff` or `#f5f5f7`) directly for layout nodes; use theme-mapped CSS variables.
- **Don't** use black text on a purple background; use pure white (`#ffffff`).
- **Don't** use fluid text scaling on headings; stick to the fixed H1-H3 scale.
- **Don't** apply heavy dark box shadows on card elements.
- **Don't** allow paragraph lines to exceed `68ch` in width.
- **Don't** use high-opacity care tints that can compete with or muddy standard green/amber/red status colors.

## Care-Type System Design Guidelines

### Color Tokens
- **Fitness** (`--care-fitness`): `#7a5487` (Brand Purple)
- **Hypertension** (`--care-hypertension`): `#c2456b` (Desaturated Rose)
- **Diabetes** (`--care-diabetes`): `#0d9488` (Teal)

### Badges (`.care-badge`)
Rendered next to names in headers and table listings. Must feature:
- Background: `color-mix(in oklab, var(--care-color) 12%, transparent)`
- Border: `color-mix(in oklab, var(--care-color) 30%, transparent)`
- Text Color: `var(--care-color)`
- Font size: `11px` (`9.5px` for `.care-badge--sm`)

### Whisper Background Surface Washes
Applied dynamically on `html[data-care]` elements.
- Light Mode: `4%` care color mix on `--paper` background.
- Dark Mode: `9%` care color mix on `--paper` background.
- Ambient gradients must be hidden (`background-image: none`) in clinical modes to keep backgrounds flat, clean, and clinical.
