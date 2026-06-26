# Physical models: The Concept of Centripetal Force

## Ideal model

The core model describes circular motion with fixed radius [[r]] and a clear radial-resultant interpretation [[Frad]]. In this framework, [[ac]] changes velocity direction, not speed magnitude by itself. This separation enables a clean bridge between kinematics and dynamics.

Main simplifications are:

- The object is treated as a particle when size effects are negligible.
- Inputs ([[m]], [[r]], [[v]], [[omega]]) are assumed sufficiently stable in the analyzed interval.
- Secondary couplings are neglected when they do not change the order of magnitude of [[Frad]].

This is an intentionally compact model, effective for first-pass design, diagnostics, and conceptual training.

## Hypotheses

Operational hypotheses are:

- Motion is approximately circular in the studied segment.
- The radial axis is well defined for force projection.
- The relations among [[v]], [[omega]], [[T]], and [[r]] are mutually consistent.
- SI units are used consistently, including proper use of [[pi]] in period-angle conversion.

If any hypothesis fails, outputs may remain numerical but lose physical interpretability.

## Quantitative validity domain

The model is reliable when:

- [[r]] > 0 and approximately constant.
- [[v]] >= 0 without strong transients in the segment.
- [[omega]] > 0 under a clear rotation regime.
- [[T]] > 0 with trustworthy timing data.

As a practical criterion, if prediction-measurement discrepancy in [[ac]] or [[Fc]] stays above roughly 10% to 15% across repeated trials, assumptions should be revisited.

## Model failure signals

Four common warning signs are:

- Effective radius varies significantly along the path.
- Sustained slip appears, breaking the ideal turning assumption.
- Radial force projection no longer closes with estimated [[Frad]].
- Small input changes create unrealistic output jumps.

These signals do not invalidate the theory; they indicate that the problem requires richer physics.

## Extended or alternative model

The next step is to include effects omitted in the ideal block: nonlinear adhesion, variable curvature, elastic deformation, active control, or environmental disturbances.

Explicit transition rule: switch to the alternative model when observation-prediction mismatch remains above the agreed threshold in repeated tests, or when failure signals persist under nominal conditions.

This transition is methodological, not punitive: keep simplicity when sufficient, increase complexity when evidence demands it.

## Operational comparison

| Aspect | Ideal model | Extended model |
|--------|-------------|----------------|
| Core variable | [[ac]] and [[Frad]] | [[ac]] plus coupled effects |
| Number of parameters | low | higher |
| Computational cost | low | medium or high |
| Recommended use | training, predesign, fast control | fine validation, critical safety |
| Overfitting risk | low | higher if data are weak |

Expert practice is selecting the smallest model that explains behavior with enough precision for the decision at hand.
