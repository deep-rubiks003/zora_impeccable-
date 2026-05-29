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

Zora Console Light utilizes a clean, high-contrast interface designed to convey professional utility and visual clarity. The app shell is anchored on a light background (`#f5f5f7`), framing pure white card surfaces (`#ffffff`) that hold user workflows. Accents of rich purple (`#7a5487`) define primary controls, interactive highlights, and status signifiers. Typography is modern, geometric, and structured, prioritizing readability and systematic sizing. The visual language feels lightweight, approachable, yet highly technical.

### Key Characteristics:
- Clean light-mode palette using Soft White cards over a light gray shell.
- Modern typography featuring crisp geometric headings (Geist/DM Sans).
- Semantic color coding for warnings, positive completion, and alerts.
- Tactile card layouts with subtle spacing and soft borders.

## Colors

The system uses a highly structured light-mode scheme pairing soft card backgrounds with rich purple highlights.

### Primary
- **Primary Purple** (`#7a5487`): Used for CTAs, headings, AI highlights, active states, and focus states.

### Accent
- **Purple Accent** (`#e8dced`): Used for subtle highlights, background tints of recommendation cards, and secondary controls.

### Neutral
- **Soft White** (`#ffffff`): Card backgrounds, modal containers, and clean active surfaces.
- **Background** (`#f5f5f7`): App shell background, sidebars, inactive areas, and light body fills.
- **Dark Text** (`#1a1a2e`): Dominant body copy, table headers, and page titles.
- **Slate Text** (`#888888`): Secondary metadata, labels, and helper text.

### Semantic
- **Success Green** (`#2d9e6b`): Positive metrics and completion states.
- **Amber** (`#e67e22`): Warning states and moderate risk indicators.
- **Alert Red** (`#c0392b`): High churn risk and critical alerts.

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
- **Dashboard Card**: Background Soft White (`#ffffff`), border `1px solid rgba(26, 26, 46, 0.06)`, `14px` corner radius.
- **Recommendation Card**: Background Purple Accent (`#e8dced`), border `1px solid rgba(122, 84, 135, 0.15)`, `14px` corner radius.
- **Bento Focus Cards**: Highlighted metrics (such as Sleep Score and HRV) use `.bento-focus` structure, featuring a subtle accent container tint (`var(--paper-3)`) and larger typography for increased readability.
- **Roster Pulse List Table**: A structured data table container. Background Soft White (`#ffffff`), border `1px solid var(--line)`, `14px` corner radius. Columns (Athlete, Status, HRV, Sleep, Adherence, 7-Day Trend) align using CSS grid. Progressive responsive column hiding collapses the grid and hides non-essential data columns on smaller screens (Trend/Sleep hide on tablets, Adherence on mobile) to maintain readability.

### Inputs
- **Search & Text Fields**: Background Soft White (`#ffffff`), border `1px solid rgba(26, 26, 46, 0.1)`, `8px` corner radius.

## Do's and Don'ts

### Do:
- **Do** use Soft White (`#ffffff`) for content card backgrounds and Background (`#f5f5f7`) for the outer layout shell.
- **Do** apply Primary Purple (`#7a5487`) to all primary CTAs, active highlights, and page titles.
- **Do** format meta labels in uppercase with explicit character spacing.
- **Do** enforce tabular numbers on all tables and lists containing numerical scores.
- **Do** expand tiny tap targets using absolute pseudo-element buffers.

### Don't:
- **Don't** use dark backgrounds or dark themes; the interface strictly employs the light SaaS console theme.
- **Don't** use black text on a purple background; use pure white (`#ffffff`).
- **Don't** use fluid text scaling on headings; stick to the fixed H1-H3 scale.
- **Don't** apply heavy dark box shadows on card elements.
- **Don't** allow paragraph lines to exceed `68ch` in width.
