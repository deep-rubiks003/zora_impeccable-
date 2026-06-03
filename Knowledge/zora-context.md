WHAT IS IMPORTANT TO ME 

The vast majority are trying to solve a much more fundamental problem: How do I consistently acquire and retain clients without depending entirely on word-of-mouth or social media algorithms?

This fragmented growth infrastructure is the exact problem Zora solves. Today, coaches are forced to piece together disconnected systems for discovery, lead generation, communication, coaching, and billing. As a result, they spend most of their time operating a business instead of delivering health outcomes.

| Zora is an AI-native Growth Operating System for coaches. Instead of simply managing workflows, Zora actively helps coaches get discovered, acquire clients, convert leads, and scale personalized care. |
| :---- |

We automate the operations+GTM

**The constraint is not consumer demand. The constraint is that every coach is manually running growth, operations, and engagement by themselves.**

| Shift to Proactive  Prefer proactive care  Growing preference for continuous, outcome-driven care among Gen Z+Millennials+Aging population |
| :---- |

**Growth Agents** \- Generate new clients and revenue around the clock through AI search visibility and 24/7 lead conversion.

**Efficiency Agents** \- Give coaches their time back by handling automated check-ins, unifying wearable data, and putting admin on autopilot.

**Quality Agents** \- Enable proactive care at scale by identifying when clients plateau or risk churning before it happens, adapting plans continuously based on real data.

Every everyday Fitness as our wedge and expanding sequentially

| Segments We Serve → Everyday Fitness (strength training, running, Hyrox, physiotherapy) → Chronic Care (hypertension, diabetes, weight loss) → Longevity & Optimization (metabolic coaching, biohacking) | What Coaches Deliver ✓ Personalized plans tailored to each client ✓ Insights based on progress and real data ✓ Outcomes driven by accountability, motivation, and trust |
| :---- | :---- |

**The Moat: Compounding Behavioral Intelligence**

The most important asset inside Zora is not workflow software. It is the behavioral intelligence layer powering the platform.

Every interaction across Zora contributes to a continuously evolving understanding of:

| ●  Coach discovery prompts | ●  Client conversions |
| :---- | :---- |
| **●  Retention Patterns** | **●  Adherence Signals** |
| **●  Client Engagement** | **●  Client Outcomes** |

This creates a compounding behavioral graph across both coaches and clients. Over time, Zora learns:

| 1 | Which onboarding flows improve conversion. |
| :---: | :---- |
| **2** | Which accountability systems improve adherence. |
| **3** | Which engagement patterns reduce churn. |
| **4** | Which interventions improve outcomes. |

| Every interaction improves future automation quality across the entire network. |
| :---: |

**What Our AI Agents Do 24/7**

| 1 | Capture Demand: Intercept search intent on AI engines (GPT, Perplexity) and traditional platforms (Google Maps, Social). |
| :---: | :---- |
| **2** | Convert Leads: Respond to inquiries and close bookings in real time. |
| **3** | Retain Clients: Automate smart check-ins, content delivery, and reminders. |
| **4** | Enhance Quality: Act as a coaching co-pilot to help drive real-world health outcomes. |

| This creates a completely new distribution layer for coaches. AI search becomes the new discovery engine. |
| :---: |

Zora will be the default Growth Engine for the world’s 5 million health and wellness professionals.

Zora is building that infrastructure layer.

Just as Shopify became the operating system for independent commerce, Zora is positioning itself to become the Growth Operating System for independent health and wellness businesses.




✦ Zora
AGENTIC GROWTH OS
Product Requirements Document
Efficiency Agents  ·  Quality Agents  ·  Growth Agents


Version  1.0 — Investor Demo Build


Date  May 2026


Authors  Rahul (CEO) · Srihari (CTO)


Status  Draft for Design & Dev Handoff



1. Executive Summary


This PRD defines the three investor-facing product flows for Zora's agentic demo. The goal is not to showcase features — it is to create investor conviction that one coach can now deliver personalized care to hundreds of members through intelligent AI agents.

Efficiency Agents
AI analyzes wearable + behavioral data to auto-generate next-week plans. Coaches approve, edit with a single prompt, or regenerate.


Quality Agents
Proactively surfaces churn risk, low adherence, and plan-fit issues before they cost the coach a client.


Growth Agents
AI-native discovery — a consumer searches on Claude/LLM and gets routed to the right Zora coach automatically.


Demo Conviction Goal  After watching this demo, investors should believe: (1) AI dramatically increases coach capacity, (2) Zora enables proactive care at scale, (3) AI-native discovery reshapes coach acquisition, and (4) Zora is category infrastructure for the future of coaching.


2. Demo Narrative & Story Arc


The investor demo follows a 5-beat narrative. Each beat builds on the last, culminating in the vision of one coach with infinite capacity.

Property
Detail
Beat 2 — Efficiency
AI handles personalization workflows: wearable ingestion, plan generation, and prompt-based editing in seconds.
Beat 3 — Quality
AI proactively monitors all clients and surfaces who is about to churn — before it happens.
Beat 4 — Growth
When someone searches on Claude or Perplexity, Zora routes them to the right coach automatically.


3. Design System


3.1 Colors

Property
Detail
Primary Purple
#7a5487 — CTAs, headings, AI highlights, active states
Soft White
#FFFFFF — Card backgrounds, modals, clean surfaces
Background
#f5f5f7 — App shell, inactive areas, light fill
Dark Text
#1a1a2e — Body copy, titles
Purple Accent
#e8dced — Subtle highlights, recommendation cards
Success Green
#2d9e6b — Positive metrics, completion states
Amber
#e67e22 — Warning states, moderate risk indicators
Alert Red
#c0392b — High churn risk, critical alerts

3.2 Typography

Property
Detail
Font Family
Modern geometric sans-serif (e.g. Inter, DM Sans, or Geist)
H1 — Page title
28–32px · Bold · #1a1a2e
H2 — Section header
22–24px · Semibold · #7a5487
H3 — Card header
18–20px · Semibold · #1a1a2e
Body copy
14–16px · Regular · #1a1a2e
Labels / meta
11–12px · Medium · #888888 · Uppercase tracking

3.3 UI Principles
Rounded corners (12–16px radius on cards, 8px on buttons)
Soft layered shadows (0 2px 16px rgba(0,0,0,0.06))
Large breathing room — generous padding, never cluttered
Subtle gradients on hero sections only
AI feels ambient and invisible — no robot icons or neon glows
Motion: 200–300ms transitions, smooth fades and gentle scaling

4. Flow 1 — Efficiency Agent


Objective: Demonstrate that AI can analyze a client's wearable and behavioral data and autonomously generate a personalized weekly plan — which the coach can approve, modify with a single prompt, or regenerate.

4.1 Flow 1A — AI Weekly Plan Optimization
User Story
As a coach, I want AI to automatically analyze my client's past week — wearable data, completed workouts, sleep, nutrition — and recommend a personalized plan for next week, so I can deliver high-quality programming in seconds instead of hours.


Data Inputs (What Zora ingests)

Wearable Data
HRV trend (7-day)
Resting heart rate
Sleep duration & quality
Daily step count
Active calories


Training Data
Workouts completed vs. planned
Perceived exertion (RPE)
Soreness logs
Workout duration actuals
Exercise completion %


Nutrition & Behavior
Protein / fibre / calorie logs
Meal consistency score
App open frequency
Check-in responses
Coach message replies


AI Reasoning — What the Engine Detects

Example output from AI reasoning layer:
Recovery Score: 61/100 — declining 3 days in a row
Sleep Quality: Poor (avg 5.4 hrs) — below 7-hr threshold for 4 nights
Workout Completion: 67% — client skipped 2 of 6 planned sessions
Protein Adherence: 58% — 40g/day below target
AI Conclusion: Fatigue accumulation risk. Volume reduction recommended for next week.


Screen 1 — Coach Dashboard

Property
Detail
Purpose
Home screen the coach lands on. Overview of all clients' health signals and pending AI actions.
Layout
Left sidebar nav + main content area + right AI action rail
Key Components
AI Action Center (top) · Member health grid · Wearable widgets · Recovery scores · Workout adherence chart · Sleep trend chart · Nutrition adherence ring · Alerts panel · At-risk member list


AI Action Center (top bar):
→ "3 clients need plan adjustments this week" [Review All]
→ "Sarah K. recovery declining — lighter week recommended" [View]
→ "2 clients at churn risk — send check-in" [Act]


Screen 2 — AI Recommendation Card

Property
Detail
Purpose
Surface the AI-generated optimization suggestion for a specific client in a clean, actionable card.
Trigger
Coach clicks a client name from the action center or from the member list.
Card Header
Client name · Recovery score badge · Confidence meter (e.g. 87%)
Card Body
Issue detected (plain language) · AI reasoning summary · Proposed plan changes preview · Impact prediction (e.g. 'Est. +12% recovery by day 5')
Primary CTA
✓ Approve Plan — one-click applies AI recommendation
Secondary CTA
✎ Edit with AI — opens the prompt modification modal (Screen 3)
Tertiary CTA
⟳ Regenerate — triggers fresh AI generation with optional notes


Example AI Recommendation Card Copy:
Issue Detected:  Recovery is trending down. A lighter week will improve consistency.
Proposed Changes:  Reduce lower-body volume by 20% · Swap Thursday HIIT for active recovery · Add 1 rest day · Increase protein target to 165g/day
Confidence:  87% — based on 6 data signals


Screen 3 — AI Prompt Modification Modal

Property
Detail
Purpose
Allow coach to steer the AI recommendation with a natural language prompt — without rebuilding the plan manually.
Trigger
Coach clicks 'Edit with AI' from the recommendation card.
Layout
Split-pane: left = prompt input + generation state, right = live plan preview with diff highlights
Prompt input
Single text field, placeholder: "Tell AI what to adjust..."
Example prompts
"Keep intensity high but remove all knee-stress movements" · "Add a deload week structure" · "Prioritize upper body this week"
AI state
Typing indicator while generating → streamed plan changes appear in right pane
Diff view
Changed exercises highlighted in purple · Removed items struck through in grey · New additions shown with green left border
Apply CTA
"Apply Changes" — replaces the original recommendation; coach can still approve or regenerate


Screen 4 — Updated Plan Preview

Property
Detail
Purpose
Full-plan visualization after AI modifications are applied — before the coach sends to the client.
Components
Weekly training split (Mon–Sun) · Modified workouts with updated sets/reps/exercises · Nutrition targets with delta from last week · Recovery additions (rest days, mobility, sleep target) · Progression notes
Send Flow
"Send to Client" CTA → triggers notification to client app + updates plan in real-time


4.2 Flow 1B — Adaptive Recovery Intelligence
Scenario
A client messages: "Feeling really exhausted this week, not sure I can handle the workouts."

Simultaneously, Zora detects: HRV drop of 18%, sleep quality 4.2/10 (3-night average), workout intensity unchanged at planned load, step count down 35%, and protein adherence at 52%.


AI Conclusion & Intervention

Zora AI determines:
⚠ Recovery Risk: High — multi-signal fatigue pattern
→ Workout adjustment: Replace 3 HIIT sessions with active recovery and mobility
→ Nutrition gap: Protein 52% of target · Fibre below threshold — suggest meal swap
→ Sleep intervention: Push sleep reminder, suggest magnesium wind-down protocol
→ Message suggestion: "Hey [Name], I can see you're running low on recovery. I've lightened your week — these tweaks will help you bounce back stronger."


Screen 5 — Client Chat + Health Context Panel

Property
Detail
Purpose
Show that Zora combines what the client says with what their body is telling us — simultaneously.
Layout
Left: chat thread with client message. Right: health context panel (auto-populates when client sends message)
Health Context Panel
HRV trend graph (7-day sparkline) · Sleep quality bar chart · Fatigue score gauge · Workout completion heatmap · Nutrition adherence donut
AI Interpretation Strip
Below data panel: 'What this means' — plain-language summary of combined signals
Key UX detail
Context panel appears automatically when coach opens chat — no manual lookup required


Screen 6 — Adaptive Plan Suggestions

Property
Detail
Purpose
Show the proactive coaching recommendations in response to the combined chat + wearable signal.
Card Stack
3 recommendation cards stacked: (1) Workout adjustment, (2) Nutrition fix, (3) Recovery protocol
Each Card
Recommendation title · Plain-language explanation · Impact prediction · One-click apply button
Batch Approve
"Apply all 3 recommendations" CTA at bottom — approves and sends to client in one tap
AI Explanation
Collapsible 'Why this?' section with data-backed reasoning for each recommendation


5. Flow 2 — Quality Agent


Objective: Show that Zora gives coaches a real-time pulse on which clients are disengaging — and tells them exactly why and what to do — before churn happens.

5.1 Flow 2A — Churn Prevention Engine
User Story
As a coach, when I log in each morning, I want to immediately know which of my clients is most at risk of disengaging this week — ranked by risk level — so I can reach out proactively and prevent them from dropping off.


Churn Signal Taxonomy

Engagement Signals
App opens < 3x/week
No progress logs in 5+ days
Declining message response time
Skipped check-ins 2 weeks in a row
No wearable syncs in 48hrs


Behavioral Signals
Workout completion < 50%
Nutrition logging stopped
RPE scores trending low (unmotivated)
Stalled progress (0 PRs in 3 weeks)
Negative sentiment in chat


Plan-Fit Signals
Consistent partial completions
Same exercises skipped every week
Session duration far below plan
Recovery always flagged
Enjoyment ratings declining


Screen 7 — Member Health Dashboard

Property
Detail
Purpose
Coach's morning view — instant quality pulse across all active clients.
Key Metrics Row
Total active clients · Average engagement score · Clients at risk count · Avg retention rate (30-day rolling)
Client Grid
Each client card shows: avatar · engagement ring (0–100) · adherence bar · churn risk badge (Low/Med/High) · last active date · quick action icon
Sort Options
Sort by: Churn Risk · Engagement Score · Last Active · Plan Week
Filter
Filter by: Coach type (fitness/nutrition/running) · Risk level · Membership tier · Inactivity duration


Screen 8 — At-Risk Members Feed

Property
Detail
Purpose
Prioritized intervention queue — who needs attention most, right now.
Layout
Full-width feed, clients sorted by churn probability descending
Each Member Card
Name + avatar · Churn probability % (e.g. '74% risk in 14 days') · 3 key risk reasons · AI recommendation preview · Quick action buttons
Quick Actions
[Send check-in message] [Adjust plan] [Schedule review call] [Mark as resolved]
AI Summary Strip
Top of feed: 'This week, 4 clients show early disengagement signals. 2 need immediate outreach.'
Colour coding
Red border: >70% churn risk · Amber border: 40–70% · Green: <40%


Example At-Risk Card — Demo Scenario:
Client: Marcus T. — Strength & Conditioning, Week 8
Churn Risk: 74% likelihood of disengaging within 14 days
Why: No app opens in 6 days · 40% workout completion this week · Skipped last 2 check-ins · Progress stalled (no new PRs in 3 weeks)
AI suggests: Send personalised check-in · Simplify this week's plan · Add 1 motivational milestone


Screen 9 — AI Intervention Generator

Property
Detail
Purpose
Generate a tailored intervention workflow for a specific at-risk client in one click.
Components
Intervention type selector (message / plan change / call / milestone) · AI-generated message draft · Recommended plan changes · Accountability actions · Predicted impact (e.g. '+28% re-engagement probability')
Message Draft
Pre-written, personalised message the coach can send as-is or edit. Tone: warm, human, not automated-feeling.
One-click send
Coach can send the message directly from this screen without leaving the flow


5.2 Flow 2B — Plan Quality Analyzer
When churn risk is detected, Zora also evaluates whether the coaching plan itself is the root cause — not just client motivation.

Screen 10 — Plan Quality Analyzer

Property
Detail
Purpose
Diagnose if the client's plan design is contributing to disengagement.
AI Plan Score
Overall plan quality score (0–100) with breakdown: Complexity · Progressivity · Recovery alignment · Enjoyment signals · Client-goal fit
Adherence Trend
Weekly adherence heatmap — shows which days / sessions consistently get skipped
Fatigue Correlation
Overlay graph: workout volume vs. recovery score over 8 weeks
AI Diagnosis
Plain-language summary: 'This plan has too many back-to-back high-intensity days. Clients on this structure show 2.4x higher dropout rates.'
Fix Suggestions
Simplified version of plan with AI-generated rationale for each change · One-click apply


6. Flow 3 — Growth Agent


Objective: Demonstrate that Zora powers AI-native discovery — when a consumer searches on Claude, Perplexity, or Gemini for a coach, Zora surfaces the right coach from its network.

The Insight:  Health & Wellness is the #1 AI query category at 27.2% of all AI searches (Source: Anthropic usage data). 0% of coaches currently show up in AI search results. Zora is building the infrastructure to own this channel.


6.1 Flow 3A — AI Search Discovery Demo
Demo Scenario
User types into Claude:
"Best marathon coach to work with after a knee injury — I need someone who understands injury prevention and can help me hit sub-4 hours"


AI Coach Matching — Evaluation Signals

Coach Authority Signals
Specialty tags: marathon, knee rehab, injury prevention
Certification credentials verified
Content authority score (articles, FAQs answered)
Years of experience in niche
Niche keyword coverage in profile


Outcome & Trust Signals
Client transformation metrics (avg marathon time improvement)
90-day retention rate
Average NPS from clients
Injury recovery success rate
Number of clients with similar starting profile


Screen 11 — AI Search Interface

Property
Detail
Purpose
Show what the consumer-facing AI search experience looks like — either embedded in Claude or on Zora's own discovery surface.
Search Input
Full natural language query — no dropdowns, no filters, just a prompt box
AI Thinking State
Brief 'Analyzing coaches in our network...' loading state (300ms) — makes the AI feel like it's working
Conversational UI
AI can ask a clarifying follow-up: 'What's your current weekly mileage?' before returning results
Suggested Queries
Below the input: example searches like 'Nutrition coach for PCOS', 'Running coach for beginners', 'Strength coach over 50'


Screen 12 — Coach Match Results

Property
Detail
Purpose
Display personalised coach recommendations with AI-generated match reasoning.
Layout
Top result card (hero-sized) + 2–3 runner-up cards below
Top Coach Card
Name + photo · Specialty tags · Match score (e.g. '94% match for your goal') · AI match summary (2 sentences) · Key outcome stat ('Avg marathon improvement: 23 min') · CTA: 'Book Free Consult'
Runner-up Cards
Smaller cards: name · photo · top specialty · match % · secondary CTA: 'View Profile'
Social Proof
Client count · Retention rate · Top transformation quote
Filter
Refine by: price range, availability, coaching style, location preference


Example AI Match Summary:
"Coach Priya specialises in marathon running for athletes recovering from lower-body injuries. 87% of her clients with knee injuries have completed their goal race. Her approach prioritises gradual load management and biomechanics — exactly what you need for a safe sub-4 build."


Screen 13 — Coach Intelligence Profile

Property
Detail
Purpose
The coach's AI-readable profile — structured to surface well in LLM search results.
Specialty Block
Primary niche · Sub-specialties · Certifications · Conditions/goals served
Outcome Metrics
Avg client result · Retention rate · Client count · NPS score · Transformation proof (before/after stats)
Coaching Philosophy
300-word structured statement — ingested by AI for search relevance
Content Authority
Published articles · FAQs · Testimonials — all indexed for AI retrieval
AI Visibility Score
Proprietary score showing how well this coach will surface in AI search (0–100) + improvement suggestions


7. Global Product Screens


Screen 14 — Unified AI Action Center
Property
Detail
Purpose
Single command center — coach sees all AI-generated actions across all three agent types in one place.
Sections
Pending Recommendations (Efficiency) · At-Risk Clients (Quality) · Growth Opportunities (Growth)
Interaction
Each item can be expanded inline, approved with one click, or dismissed with a reason
Daily Summary
Top of screen: 'Good morning, Priya. Here's what needs your attention today.' — 3–5 prioritised actions


Screen 15 — AI Command Palette
Property
Detail
Purpose
Natural language control layer — coach can issue commands across the entire platform via a single prompt.
Trigger
Cmd+K / search icon / floating button
Example Prompts
"Reduce fatigue risk across all my runners this week" · "Show me clients who haven't logged in 3+ days" · "Create a lighter recovery week for Marcus" · "Who is most likely to churn this month?"
AI Response
Action confirmation + preview — coach approves before changes are made
Quick Actions
Shortcut chips below input: Apply all recommendations · Check churn risks · Send weekly summaries


Screen 16 — Coach Mobile Experience
Property
Detail
Purpose
Mobile-first operational view — coaches check in on clients from anywhere.
Home
Daily AI summary card · 3 priority actions · At-risk member alerts
Client View
Per-client health snapshot + active plan + message thread
Quick Approvals
Swipe to approve AI recommendations — friction-free
Notifications
Push: 'Recovery alert for [client]' · 'Plan ready to review' · 'New client matched to your profile'


8. Technical Architecture Overview


8.1 Data Ingestion Layer
Wearable Integrations
Apple Health
Garmin Connect
Whoop
COROS
Health Connect (Android)


App-Native Data
Workout logs
Nutrition logs
Check-in responses
Chat messages
Progress photos/weight


Behavioral Signals
App open events
Feature engagement
Session duration
Notification response rate
Content interactions


8.2 AI Reasoning Layer

Property
Detail
Behavioral Intelligence
Consistency scoring · Motivation modeling · Recovery pattern detection · Dropout risk prediction
Coaching Intelligence
Training load management · Progressive overload validation · Nutrition gap analysis · Plan quality scoring
Growth Intelligence
Coach-goal matching · Search intent modeling · Authority scoring · Client-profile alignment
LLM Orchestration
Plan generation via Claude Sonnet · Retrieval-augmented with coach memory · Streaming for real-time plan preview
Behavioral Prediction
7–14 day churn forecasting · Engagement decay modeling · Recovery trajectory prediction



9. AI Copy Style Guide


All AI-generated copy in the product must follow these principles. The AI should sound like a brilliant, calm colleague — not a dashboard or a robot.

9.1 Tone Principles
✓ Use this voice
Calm and confident
Proactive, not reactive
Human-first language
Specific and data-backed
Action-oriented


✗ Avoid this voice
Technical jargon ("HRV variance detected")
Enterprise complexity
Robotic AI language
Vague generalities
Alarmist framing


9.2 Copy Examples

Property
Detail
Robotic (avoid)
Human (use)
"High fatigue score detected."
"Recovery is trending down. A lighter week may improve consistency."
"Churn probability: 74%"
"Marcus may disengage in the next 14 days — here's how to reach him."
"Protein intake non-compliant."
"Sarah is consistently 40g below her protein target — a small meal swap would fix this."
"Plan adherence: 52%"
"Only half the workouts are getting done. The plan may be too complex right now."
"Recovery metric below threshold."
"Your client said they're exhausted — and their HRV confirms it. Let's lighten this week."


