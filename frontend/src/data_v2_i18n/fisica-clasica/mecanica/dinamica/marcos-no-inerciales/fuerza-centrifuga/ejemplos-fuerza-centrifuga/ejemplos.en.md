# Exam-type example

## Problem statement

A rotating test platform has effective radius [[r]] and carries a test mass [[m]] fixed relative to the disk. The operator reads rotational speed in [[rpm]] and must estimate centrifugal load [[F_cf]] in the rotating frame. The team also needs a state-to-state comparison to determine whether the increased operating point remains inside safe limits.

Tasks:
1. Convert [[rpm]] to [[omega]].
2. Compute baseline [[F_cf]].
3. Check consistency through tangential speed [[v]].
4. Compare two speed states using [[omega1]], [[omega2]], and [[ratio]].
5. Provide a physical interpretation for operation decisions.

## Data

- [[m]] = 12 kg
- [[r]] = 0.45 m
- Baseline speed: [[rpm]] = 300
- Comparison speeds: [[omega1]] from 300 [[rpm]] and [[omega2]] from 360 [[rpm]]
- Quasi-steady operation during each measurement window

The dataset comes from a laboratory rotating table with speed sensing and motor-current monitoring.

## System definition

The physical system is modeled as an equivalent point mass attached to a rigid rotating disk. Analysis is carried out in the rotating frame where [[F_cf]] is used to read radial demand on support hardware. The goal is not full drivetrain simulation but consistent centrifugal-load estimation under controlled speed changes.

## Physical model

The leaf model assumes stable geometry, fixed effective mass, and explicit unit conversion before interpretation. The calculation chain is built with the five core relations:

{{f:conversion_rpm}}

{{f:fuerza_centrifuga_base}}

{{f:velocidad_tangencial}}

{{f:factor_por_cambio_omega}}

{{f:criterio_de_aplicacion_conceptual}}

## Model justification

This model is appropriate because operation is segmented into short steady-speed intervals, geometry drift is small, and the test mass remains rigidly mounted. Under these conditions, first-order uncertainty is dominated by measurement and conversion quality rather than by advanced structural effects.

Comparison via [[ratio]] is especially justified when [[m]] and [[r]] are approximately unchanged between states. That allows fast, reliable relative-load estimation without re-deriving the entire system.

## Symbolic solution

1. Convert speed from [[rpm]] to [[omega]]:

{{f:conversion_rpm}}

2. Compute baseline centrifugal force:

{{f:fuerza_centrifuga_base}}

3. Validate rotational-linear consistency:

{{f:velocidad_tangencial}}

4. Compare force levels between two states:

{{f:factor_por_cambio_omega}}

5. Confirm frame criterion for interpretation:

{{f:criterio_de_aplicacion_conceptual}}

## Numerical substitution

Step A. Convert 300 [[rpm]] to SI angular speed:

[[omega]] = (2*pi*300)/60 = 31.42 rad/s

Step B. Compute baseline force:

[[F_cf]] = 12*(31.42^2)*0.45 = 5328 N approximately

Step C. Cross-check with tangential speed:

[[v]] = [[omega]]*[[r]] = 31.42*0.45 = 14.14 m/s

Step D. Build state comparison:

[[omega1]] = 31.42 rad/s

[[omega2]] = (2*pi*360)/60 = 37.70 rad/s

[[ratio]] = ([[omega2]]/[[omega1]])^2 = (37.70/31.42)^2 = 1.44

Interpretation of result: a 20 percent speed increase produces a 44 percent force increase.

## Dimensional validation

- Conversion from [[rpm]] to [[omega]] yields rad/s.
- [[F_cf]] relation yields force units in newtons.
- Tangential relation yields [[v]] in m/s.
- [[ratio]] is dimensionless.

The dimensional chain is internally coherent.

## Physical interpretation

The key physical conclusion is high rotational sensitivity. Operators may read the dashboard change as moderate, but the quadratic dependence in [[omega]] transforms it into a substantially larger mechanical demand. This is not a cosmetic numerical detail; it shifts support loading, fatigue trajectory, and maintenance risk.

Using [[ratio]] improves communication with operations teams. Instead of listing two isolated force values, one can report that the new regime requires 1.44 times baseline load. This format is decision-friendly and directly linked to allowable operating envelopes.

Model validity remains acceptable while geometry is stable and speed sensing is trustworthy. If vibration, alignment drift, or support compliance become relevant, the same speed reading may correspond to different effective loading and an extended model should be adopted.

The central physical reading is causal, not decorative: when [[omega]] rises, radial demand rises disproportionately, so support margin can collapse faster than intuition suggests. That mechanism explains why the same hardware can be safe in one regime and critical in another. The interpretation is complete only when it maps this mechanism to action, such as speed limiting, earlier inspection, or support redesign.

From an engineering perspective, this means interpretation must answer three explicit questions. First, what mechanism dominates the response: in this case, quadratic dependence on [[omega]]. Second, where does that increased demand concentrate: typically in bearings, fasteners, and local support interfaces before global failure appears. Third, what should operations do next: maintain current regime, reduce speed, or move to a monitored trial condition with tighter checks. If these questions are not answered, the result remains a calculation artifact rather than a physically meaningful decision tool.

# Real-world example

## Context

A process centrifuge in a food plant operates with basket radius [[r]] = 0.62 m and total payload [[m]] = 38 kg. The controller offers two modes: economy mode at 420 [[rpm]] and intensive mode at 560 [[rpm]]. The supervisor must decide whether intensive mode can be sustained continuously without accelerated hardware degradation.

## Physical estimation

Each mode is converted to [[omega]], then [[F_cf]] is estimated and compared through [[ratio]].

At 420 [[rpm]]:

[[omega1]] = (2*pi*420)/60 = 43.98 rad/s

Estimated result for state one: about 45600 N.

At 560 [[rpm]]:

[[omega2]] = (2*pi*560)/60 = 58.64 rad/s

Estimated result for state two: about 81000 N.

Comparison:

[[ratio]] = ([[omega2]]/[[omega1]])^2 = (58.64/43.98)^2 = 1.78

The intensive profile increases centrifugal demand by about 78 percent relative to economy mode.

## Interpretation

This case demonstrates why speed control is the dominant operational lever. A seemingly moderate dashboard increase can translate into a much larger structural demand. The decision is therefore not only whether the machine can reach the target speed, but whether it can sustain that regime with thermal and mechanical margin.

If maintenance history already shows bearing or support fatigue acceleration, the [[ratio]] result supports continuous operation in economy mode and restricted use of intensive mode. In this sense, the leaf provides practical value: it turns speed readings into causal load-risk interpretation that can be compared across shifts and production campaigns.

Beyond numerical comparison, this interpretation supports control hierarchy. When operating pressure pushes for higher throughput, the first technical question should be whether the resulting [[ratio]] still preserves margin in supports and bearings, not only whether the target speed can be reached. That causal framing converts a computed value into an action plan: monitor dominant variables, detect early stress indicators, and adjust regime before accelerated damage appears.

A physically complete interpretation also explains consequence pathways. It should state why demand increases, which component receives that increase first, and what operational symptom appears if the regime is kept unchanged. This causal closure is what links the solved example to safe real operation.

If this causal chain is ignored, teams may keep a condition that looks numerically acceptable but still accelerates cyclic damage over time. Interpretation is therefore predictive guidance, not decorative commentary.

The dominant mechanism must also be explicit: in this leaf, load growth is governed primarily by the quadratic dependence on [[omega]], not by a simple linear rule of thumb. That means a sequence of small speed increments can still push the system across a fatigue threshold if [[ratio]] and early stress signals are not tracked. This statement is physically explanatory rather than numerical bookkeeping, because it links control action, mechanical response, and failure risk in one coherent chain.
