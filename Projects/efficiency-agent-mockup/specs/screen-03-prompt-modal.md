# Screen 03 — AI Prompt & Regeneration Modal

*Implements PRD Section 3.3 — Natural Language Steering*

## Overview
An interactive overlay that allows the coach to input custom instructions (e.g., *"Make it easier for her this week"*) to refine the generated plan.

## PRD Alignment
- **Narrative Beat**: Beat 3 — Coach steers the AI with natural language instruction.
- **Primary Objective**: Demonstrate ease of control. The AI is a helper that understands the coach's intent, not a black box.

## Components & Layout
- **Prompt Input Overlay**: Monospace text box prefilled with active coach inputs.
- **Regenerating Loader**: Ambient loading state matching the style guidelines (subtle purple animation).

## Result state & handoff (current build)

After the coach prompts and Zora rewrites the week:
- The modal shows a plain-English summary plus a per-day before/after diff.
- The primary button reads **"See Updated Plan"** (not "Approve & send"). Clicking it closes the modal, merges Zora's rewrite into the Weekly Schedule strip on Screen 2, switches that strip to the recommended week, scrolls it into view, and pulses it once.
- Approval/sending then happens from Screen 2's "Approve & Send to Client" button, the modal hands the reviewed plan back to the card rather than sending directly.
- "Try another prompt" returns to the input; Esc / overlay-click / close all dismiss.