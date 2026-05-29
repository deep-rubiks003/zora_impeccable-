# Screen 02 — AI Recommendation Detail

*Implements PRD Section 3.2 — AI Recommendation Card & Wearable Signals*

## Overview
Shows the detailed recommendation analysis for a single athlete (Sarah K.) based on wearable and adherence data.And also the additional data which can be included in the plan.   

## PRD Alignment
- **Narrative Beat**: Beat 2 — Coach opens Sarah K.; AI explains sleep/HRV degradation and recommends action.
- **Primary Objective**: Build trust. The AI clearly explains *why* it suggests modifications, backing it up with sleep scores and HRV baselines.

## Components & Layout
- **Client Header Profile**: Displays Sarah K.'s status and current phase metrics.
- **Biometric Insight Grid (Bento Style)**:
  - Sleep Score Card: `42/100` (Red alert state).
  - HRV Card: `18 ms` (52% below baseline).
- **AI recommendation box**: Clean copy explaining the reasoning and recommendations.
- **Action Toolbar**: Approve recommendation, Edit with AI (opens Screen 3), or Regenerate.\n