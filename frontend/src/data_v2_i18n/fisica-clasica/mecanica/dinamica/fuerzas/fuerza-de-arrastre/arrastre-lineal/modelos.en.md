# Physical models: Linear Drag

## Ideal model

The ideal model in this leaf assumes that fluid resistance can be represented by a direct proportionality between [[F_d]] and [[v]] within a specific operating window. This simplification is useful because it keeps dynamic reasoning tractable and supports fast calibration from measurements.

Main simplifications:

- The force-speed relation is approximately linear in the interval of interest.
- Parameter [[b]] can be treated as constant during the analyzed process.
- Effective body geometry does not change significantly.
- The medium remains sufficiently stable in properties that affect [[b]].

This model is not "less physical" because it is simple. It is physical because it states assumptions explicitly and performs well when those assumptions hold.

## Hypotheses

Operational hypotheses:

- Reference hypothesis: [[v]] is defined relative to the fluid, not to an arbitrary frame.
- Constitutive hypothesis: [[F_d]] depends linearly on [[v]] in the studied range.
- Effective-parameter hypothesis: [[b]] summarizes medium and geometry in that range without abrupt drift.
- Dynamic hypothesis: [[m]] remains constant, so [[tau]] keeps a coherent time-scale meaning.

If any of these hypotheses fails, linear interpretation may lose explanatory and predictive power.

## Quantitative validity domain

For educational and early engineering use, the model should be validated with explicit quantitative criteria:

1. High-quality linear fit of the [[F_d]]-[[v]] data in the working interval.
2. Small relative variation of estimated slope ([[b]]) under repeat conditions.
3. Mean relative prediction error below the threshold accepted for the application.
4. Full dimensional and sign consistency across processed data.

A practical rule in class and lab is to accept the linear model when relative error in the main interval remains below about 10% and residuals show no systematic curvature. If error grows and curvature appears, the issue is not rounding noise; the dominant mechanism is likely changing.

## Model failure signals

Observable failure signals:

- The apparent slope of [[F_d]]-[[v]] stops being stable.
- The same [[b]] cannot explain different subranges of [[v]].
- Estimated [[tau]] changes inconsistently between nominally equivalent tests.
- Conclusions depend more on numeric fitting than on physical mechanism.

When these signals appear, the correct action is not to force the same formula. The correct action is to declare a validity limit and prepare model transition.

## Extended or alternative model

The natural alternative is a nonlinear drag description when simple proportionality no longer captures measurements. In that scenario, resistive force grows faster with speed and cannot be summarized by one constant [[b]].

A piecewise approach can also be used: a linear segment at lower speeds and a nonlinear segment at higher speeds, with a clear switching criterion.

## Operational comparison

| Aspect | Linear model | Nonlinear or piecewise model |
|--------|--------------|------------------------------|
| [[F_d]]-[[v]] relation | Proportional | Noticeable curvature |
| Dominant parameter | Nearly constant [[b]] | Effective parameters vary |
| Complexity | Low | Medium to high |
| Fast interpretation | Strong | Needs more context |
| Extrapolation risk | High outside range | Lower if calibrated correctly |

Explicit transition to an alternative model is recommended when linear-fit stability is lost in the target range, when systematic error exceeds the accepted threshold, or when a single slope no longer represents data with physical honesty.

In short, the linear model is excellent for first-pass interpretation, calibration, and time-scale reading through [[tau]]. Its strength depends on respecting its domain and activating model transition as soon as failure signals appear.