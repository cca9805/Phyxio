# Physical models: Relative acceleration

## Ideal model

The ideal model describes two reference frames linked by pure translation. Object acceleration [[a_A]] is described in an inertial frame, observer-frame acceleration is [[a_B]], and relative acceleration is [[a_rel]] over shared time [[t]].

The model is intentionally compact: it prioritizes transparent interpretation in educational and engineering contexts where frame rotation is negligible.

Its main strength is traceability. Every conclusion can be mapped to one of three components: object dynamics, observer-frame dynamics, and measurement quality. This separation prevents causal confusion in reports.

## Hypotheses

1. Predominantly translational relation between frames.
2. Negligible relative rotation effects.
3. Classical speed regime where Galilean assumptions hold.
4. Common axis-sign convention for [[a_A]] and [[a_B]].
5. Synchronized measurements over the analyzed interval [[t]].

These assumptions are not decorative. If one of them is violated, the same numerical subtraction can produce a physically misleading interpretation.

## Quantitative validity domain

Practical acceptance checks:

1. residual = abs([[a_rel]] - [[a_A]] + [[a_B]]) <= 0.10 m/s^2.
2. Time misalignment <= 0.02 s for event windows.
3. Relative error <= 10 percent for the target decision quality.

These thresholds are context-dependent but useful for disciplined first-pass validation.

In educational laboratories, these criteria are usually enough to classify whether the translational model is reliable. In industrial diagnostics, the same structure is kept but thresholds are adapted to safety margins.

## Model failure signals

1. Persistent residual above tolerance.
2. Contradictory sign interpretation across repeated runs.
3. Strong sensitivity to small synchronization shifts.
4. Report conclusions that exceed uncertainty credibility.

A practical warning sign is instability under minor preprocessing changes. If the interpretation flips after tiny filter or alignment adjustments, model confidence must be reduced.

## Extended or alternative model

When observer-frame rotation becomes relevant, translational composition is insufficient. Then the model must include noninertial rotational contributions. If regime assumptions leave classical mechanics, a Galilean relation is no longer adequate.

Model escalation should be explicit: define what failed, why it failed, and what additional terms are required in the extended description.

## Operational comparison

Ideal model:

- Fast, interpretable, and low-cost.
- Excellent for 1D translational diagnostics.
- Suitable for teaching and first-line engineering analysis.

Extended model:

- Needed for rotation-dominant or high-complexity situations.
- Better explanatory power under difficult dynamics.
- Requires more calibration and validation work.

Model escalation should be evidence-driven, not style-driven.

This operational discipline is the core value of the model section: choose the simplest model that remains valid, then upgrade only when data shows a persistent mismatch.
