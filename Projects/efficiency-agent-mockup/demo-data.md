# Mockup Demo Data (Fixed Values)

Use these exact values in all mockup screens to ensure a deterministic, repeatable investor demonstration.

## Client 1: Sarah K. (The Exhausted Client)

- **Role / Profile**: 34-year-old marketing manager training for a half-marathon. Highly committed but prone to overtraining.
- **Current Issue**: Adherence is high, but recovery metrics are severely depressed. Sent a message saying: *"I'm exhausted today. Don't think I can hit the track."*
- **Wearable Signals**:
  - Sleep Score: **42/100** (3 consecutive nights under 5 hours)
  - HRV: **18 ms** (52% below 7-day baseline)
  - Resting HR: **68 bpm** (elevated by 6 bpm)
- **AI Recommendation copy**:
  - *"Sarah mentioned feeling exhausted. Her HRV is down 52% and sleep has been under 5 hours for three nights. Proposing we swap today's threshold run for a 20-minute recovery walk and push tomorrow's long run to Saturday."*
- **Plan Modifications (Diffs)**:
  - **Removed**: `Thursday: 8km Threshold Run (Zone 4)`
  - **Added**: `Thursday: 20-minute Active Recovery Walk (Zone 1)`
  - **Changed**: `Friday: Rest Day` (originally `Friday: 12km Long Run`)
  - **Changed**: `Saturday: 12km Long Run (Zone 2)` (originally `Saturday: Rest Day`)

---

## Client 2: Marcus T. (The Churn Risk Client)

- **Role / Profile**: 42-year-old tech entrepreneur. High churn risk due to drop in engagement and adherence.
- **Current Issue**: Recovery is trending down, workouts are getting skipped. High probability of disengagement.
- **Wearable Signals**:
  - Workout Adherence: **40%** (2 out of 5 workouts completed this week)
  - HRV: **32 ms** (down 24% over 2 weeks)
- **AI Recommendation copy**:
  - *"Marcus is showing signs of burnout. Only 2 of his 5 scheduled workouts were logged, and his recovery is trending down. He is at high risk of disengaging. Let's scale back his weekly targets to rebuild consistency."*
- **Action Recommendation**:
  - *"Send a message: 'Hey Marcus, noticed energy levels might be low this week. Let's focus on just two short strength sessions and skip the high-intensity work for now to reset.'"*
- **Plan Modifications (Diffs)**:
  - **Removed**: `Tuesday/Thursday: 45min High-Intensity Strength`
  - **Added**: `Wednesday/Friday: 20min Joint Mobility & Light Strength`

---

## General Stats (Dashboard Summary - Screen 01)

- **Active Members**: 142
- **Completed Optimization Reviews**: 36 / 38
- **Urgent Churn Alerts**: 2 (Marcus T., Liam J.)
- **Adaptive Adjustments Pending Approval**: 1 (Sarah K.)
- **Coach Time Saved This Week**: 18.4 hours

---

## Signals Zora Is Reading (Sarah K. default — Plan & Performance)

The ingested efficiency-agent data, shown in the "Signals Zora is reading" block.
Summary line: **"reading 15 signals across wearables, training, and nutrition.
4 out of range: recovery, sleep, completion, protein."** (15 = raw signal count;
4 = out-of-range verdict items.)

### Raw signals (full table view, by source)
- **Wearable** — HRV 18 ms (52% below baseline, bad) · Resting HR 68 bpm (+8 vs avg, warn) · Sleep 5.4 h (4 nights low, bad) · Steps 7.8 k/day (ok) · Active calories 410 kcal (ok)
- **Training** — Workouts done 4/6 (skipped 2, bad) · Completion 67% (below 85% target, bad) · Avg RPE 8.2/10 (high, warn) · Soreness 7/10 (rising 3 days, warn) · Avg duration 52 min (ok)
- **Nutrition & behavior** — Protein adherence 58% (40 g/day under, bad) · Meal consistency 54 (irregular, warn) · App opens 5/day (ok) · Check-ins 3/7 (2 missed, warn) · Message replies 0/4 (no reply 4 days, bad)

### AI reasoning verdict (the 4 out-of-range scores → semicircle dials)
| Signal | Score (dial %) | Read |
|---|---|---|
| Recovery | 61/100 (61%) | declining 3 days in a row |
| Sleep | Poor (~30% arc) | avg 5.4 h, below 7 h for 4 nights |
| Completion | 67% | skipped 2 of 6 sessions |
| Protein | 58% | 40 g/day below target |

**Conclusion**: *"Fatigue accumulation risk. Volume reduction recommended next week."*

> Note: the three wearable signals that overlap the per-client metrics (HRV,
> sleep, RHR) sync per client; training/nutrition/verdict values are the
> representative Sarah-K scenario and do not vary by client in the mockup.

---

## Payments Due (Dashboard floating pill + slide-in)

Sorted overdue-first. Pill pulses only while an overdue item is unresolved.

| Client | Amount | Status |
|---|---|---|
| Priya I. | $99 | 5 days overdue |
| Aman Khanna | $149 | due in 3 days |
| Tariq K. | $120 | due in 4 days |

Resolve per row: **Send reminder** (Zora chat) or **Send link** (payment link).
Resolving collapses the row, decrements the count, and fires the success toast.
*(Amounts and Tariq are sample data; Aman and Priya are the real
`data-payment-due="true"` clients.)*

---

## Full Roster (Dashboard "View full roster" modal)

The 6 dashboard clients plus added members for a believable 142-strong book.
Each row: name, program, engagement %, adherence %, status, last active. Rows
route to `reco-card.html?client=<key>` (added members reuse an existing detail
key). Status filter: All / At-Risk / Watch / Steady.

Sarah K. · Marcus T. · Aman Khanna · Meera Joshi · Priya I. · David L. ·
Elena R. · Jordan M. · Tariq K. · Sonia V. · Liam P. · Nina F. · Omar B. ·
Grace W. · Hassan R. · Chloe N. · Devon A. · Ria S. · Felix O. · Maya T.
