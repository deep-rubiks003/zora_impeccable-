# Screen 01 — AI Weekly Optimization Dashboard

*Implements PRD Section 3.1 — Coach Inbox / Dashboard Overview*

## Overview
The main entry point for the coach. This screen presents an overview of the athlete roster and prompts the coach to review recommendations that the AI generated overnight.

## PRD Alignment
- **Narrative Beat**: Beat 1 — Coach logs in; AI has already compiled overnight recommendations.
- **Primary Objective**: Establish the feeling of "admin on autopilot." The coach sees a summary of achievements and immediate actions without digging through raw tables.

## Components & Layout
- **Roster Stats Banner**:displaying active members , optimized plans , and urgent alerts
- **Optimization Inbox List**:
  - Urgent review card for **Marcus T.** (High Churn Risk alert).
  - General review card for **Sarah K.** (Weekly Plan Optimization pending).
  
## Copy Checklist
- Status reads: *"36 plans optimized overnight. 2 athletes require attention."* (Calm and colleague-like).

## Added Components (current build)

- **Hero header (`.page-head--hero`)**: thin band with a living aurora backdrop
  (drifting brand blooms + breathing contour lines + cursor-tracked glow) and a
  one-time cinematic entrance. No bottom border; the glow flows into the page
  wash. See DESIGN.md → Hero aurora.
- **Page glow field**: the whole page sits on one top-weighted purple wash,
  densest behind the hero + AI Action Center, fading downward. Cards float over
  it as translucent glass. See DESIGN.md → The glow field.
- **AI Action Center**: 3 prioritized draft columns (Sarah K., Marcus T., Aman
  Khanna) as flat hairline-divided columns in one glass panel (no nested cards).
  Each: name, urgency tag, two evidence metric pairs, an "AI drafted" fix line,
  and a Review button.
- **Roster section**: a "Client Roster" section head with a **"View full roster"**
  button (top-right). Opens the full-roster modal (searchable, status-filterable
  dense table of all members; rows route to the detail page).
- **Payments Due quick-resolve**: a floating pill (bottom-right, count badge,
  pulses only while overdue) opening a right slide-in. Rows overdue-first;
  resolve via **Send reminder** (chat) or **Send link** (payment). See
  demo-data.md → Payments Due.
- **Notion-style face avatars**: every monogram circle left of a name is a
  DiceBear `notionists` illustrated face seeded by the person's name.

## Copy Additions
- Roster section sub: *"N shown of 142 active"*.
- Payments pill / panel: *"Payments due"*, *"N need collecting this week"*; empty
  state *"All payments collected. Nothing due in the next few days."*
- Toasts: *"Reminder sent — {name} got a payment reminder in Zora chat."* /
  *"Payment link sent — {name} can pay {amount} from the link."*
