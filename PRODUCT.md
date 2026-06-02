# Product

## Register

product

## Users
Coaches who manage member plans, wearable data alerts, and personalized client care at scale.

## Product Purpose
Deliver an investor-grade, highly convincing clickable mockup showing that a single coach can personalize care for hundreds of members using Zora's overnight AI analysis and single-tap approvals.

## Brand Personality
- **Theme**: Light (Clean SaaS dashboard with premium purple highlights).
- **Tone**: Clean, structured, professional, and accessible.
- **AI Copy Voice**: Calm, confident, proactive, human-first, specific, and data-backed (reads like a brilliant colleague over coffee).

## Anti-references
- Banned robotic alerts ("High fatigue score detected").
- No side-stripe borders, no gradient text, no heavy decorative blurs, and no generic cards-in-cards layout.
- No tiny uppercase tracked eyebrows on every section.

## Design Principles
- **Conviction over Feature Coverage**: Every UI element must build investor confidence in coach scalability.
- **Human-Centric AI Support**: Lead with meaning and plain-English summaries, supporting them with data/metrics rather than leading with them.
- **Accessible Cleanliness**: Maintain high legibility using a refined geometric sans-serif typeface, clean high-contrast text, and a distinct purple accent layer.

## Accessibility & Inclusion
- Strict contrast compliance (>= 4.5:1 for body and placeholders against light backgrounds).
- Clear legible type scales (Geist universally, with tabular numbers for metric data blocks).
- WCAG-compliant touch target buffers (`46x46px`) on small icons.

## Clickable Mockup Specifications

### Screen 1: Roster Dashboard (`index.html`)
- **Roster Stats Banner**: Displays summary active counts, overnight optimized plan progress, and urgent alerts (PRD 3.1).
- **Optimization Inbox**: AI Action center holding draft card revisions.
- **At-Risk Feed**: Prioritizes members based on intervention urgency.
- **Roster Pulse**: Client listing with sparkline recovery indicators.

### Screen 2: Recommendation Detail (`reco-card.html`)
- **Profile Header**: Context info and back arrow `← Roster Overview`.
- **Biometric Bento**: Highlighted cards for Sleep Score and HRV (Option A).
- **Impact Preview**: Chart toggle displaying exhaustion crash vs. recovery curve (PRD 3.3).
- **Weekly Schedule**: 7-day calendar block mapping AI-suggested training shifts.

### Supported Mock Clients (`?client=<key>`)
- `sarah-k`: Exhaustion (Sleep 42/100, HRV 18ms, Half-Marathon program)
- `marcus-t`: Churn Risk (Missed sessions, Sleep 62/100, HRV 32ms, Strength program)
- `aman-khanna`: Deload Pending (Soreness 8/10, Sleep 58/100, HRV 42ms, Hypertrophy program)
- `meera-joshi`: Nutrition Drift (Lagging protein, Sleep 78/100, HRV 68ms, Meal prep adjustments)
- `priya-i`: Optimized State (High performance, Sleep 78/100, HRV 71ms, No adjustments needed)
- `raj-m`: Hypertension (BP 148/94, sodium overage, 2 missed meds doses, Hypertension care type)
- `lena-p`: Diabetes (Glucose 168 mg/dL, 54% time-in-range, post-dinner spikes, Diabetes care type)

## Chronic Care Expansion & Care-Type System
To support clinical coaching, the Console expands beyond fitness into chronic disease support:
- **🏃 Fitness (Default)**: Focuses on autonomic metrics (HRV, sleep, resting heart rate, workout completion).
- **❤️ Hypertension**: Tracks blood pressure (systolic/diastolic), daily sodium intake, and medication adherence.
- **🩸 Diabetes**: Focuses on glycemic control (CGM averages, time-in-range, glycemic variability, and medication adherence).
Each mode dynamically reskins the console headers, status badges, and vitals readouts, applying a desaturated ambient tint to the page background (Hypertension: Rose; Diabetes: Teal) to orient the coach.
