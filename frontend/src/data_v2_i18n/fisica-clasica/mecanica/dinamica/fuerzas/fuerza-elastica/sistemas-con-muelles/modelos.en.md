# Physical models: Spring Systems

## Ideal model

The ideal model treats the system as a network of linear springs with negligible spring mass and negligible dominant dissipation. In this regime, topology is captured through equivalent stiffness [[keq]], derived from branch constants [[k1]] and [[k2]].

The model purpose is operational clarity: compute global response [[Fel]] or [[Fm]], branch distribution, and vertical sink [[x_eq]] when needed.

## Hypotheses

Operational assumptions:

- [[k1]] and [[k2]] remain approximately constant in the working interval.
- Force-deformation behavior is linear for each branch.
- Series/parallel constraints are correctly implemented by the mechanism.
- No dominant backlash or friction distorts branch distribution.
- In vertical setups, [[g]] is treated as uniform and [[m]] is known.

## Quantitative validity domain

The linear network model is defensible when conditions such as these are simultaneously satisfied:

- Branch stiffness drift below 10% in the operating interval.
- High-quality linear fit in force-deformation data over the used range.
- Mean model-measurement error below 5% for nominal loads.
- Internal closure consistency: in series [[x]] close to [[x1]] + [[x2]], and in parallel [[Fm]] close to [[F1]] + [[F2]].
- Static sink [[x_eq]] remains within safe available stroke.

If one or more criteria fail, the ideal model should not be trusted for final design decisions.

## Model failure signals

Typical failure indicators:

- Visible hysteresis in load-unload cycles.
- Response drift after a small number of cycles.
- Strong sensitivity to assembly tolerances.
- Branch-level predictions inconsistent with local measurements.
- Repeated need for unexplained empirical correction factors.

## Extended or alternative model

When the ideal model breaks, transition to:

- Piecewise effective stiffness models.
- Viscoelastic models for time-dependent response.
- Dissipative cycle-aware formulations.
- Direct empirical network calibration curves.

Explicit transition rule: if operational error thresholds are exceeded or internal closure checks fail, switch model class and recalibrate parameters.

## Operational comparison

| Aspect | Ideal linear network | Extended model |
|--------|----------------------|----------------|
| Parameters | Constant [[k1]], [[k2]], [[keq]] | State-dependent parameters |
| Internal split | Closed-form algebraic | History/nonlinearity dependent |
| Computational cost | Low | Medium to high |
| Best use | Preliminary design and quick checks | Final validation and out-of-range cases |
| Traceability | High and direct | High with proper calibration |

Use the ideal model first for speed and clarity, then escalate only when evidence requires it.

In engineering practice, this transition should be planned before tests start. If threshold criteria are agreed in advance, changing model class is a technical step instead of a subjective debate. That improves schedule predictability and avoids redesign loops caused by late disagreements.

A second practical rule is to distinguish numerical error from decision error. A model may show a small numerical drift and still be acceptable for a coarse screening decision. In contrast, the same drift can become unacceptable if it changes safety margins or durability estimates. Declaring that distinction explicitly makes model selection more rigorous.
