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
