# Physical models: Definition and Mathematical Expression

## Ideal model

The baseline model combines two levels: local weight representation using [[P]] and [[Pmod]], and a near-uniform gravity assumption where [[gmod]] is treated as approximately constant over the working region.

This model is effective for introductory mechanics, laboratory-scale analysis, and early engineering estimates.

## Hypotheses

- [[m]] is positive and location-invariant.
- The direction of [[P]] matches the direction of [[g]].
- In the uniform regime, [[gmod]] is approximately constant in the domain.
- In the central regime, gravity is approximated with spherical symmetry using [[G]], [[M_astro]], and [[r]].

## Quantitative validity domain

Uniform-field treatment is usually acceptable when:

- relative_g_variation <= 0.02 over the region of interest,
- target_weight_error >= 0.01 in relative terms,
- radial changes remain small around the nominal reference,
- orbital-level precision is not required.

Central-field treatment is preferable when:

- relative_g_variation > 0.02,
- altitude or multi-planet comparisons are requested,
- required weight precision is tighter than 1 percent,
- [[r]] is an explicit driver of the physical question.

## Model failure signals

Typical failure signals:

- [[Pmod]] estimates inconsistent with scenario scale.
- Repeated mismatch between computed and measured values.
- Directional inconsistency between [[P]] and the force diagram.
- Unexplained sensitivity of [[gmod]] to radial variation.

## Extended or alternative model

When uniform assumptions become insufficient, the central-field model is used with explicit radial dependence of [[gmod]] through [[G]], [[M_astro]], and [[r]].

If higher fidelity is needed, geophysical or relativistic refinements can be considered according to scale and accuracy requirements.

Explicit transition rule: when to switch model. If relative_g_variation exceeds 2 percent or repeated weight-error metrics exceed design tolerance, switch from uniform-field treatment to central-field treatment.

This explicit transition to an alternative model should be treated as a methodological requirement, not as an optional refinement. When the physical question is no longer local and starts depending on radial geometry, staying with a uniform assumption can preserve algebraic simplicity while degrading decision reliability.

## Operational comparison

| Aspect | Uniform model | Central model |
|--------|---------------|---------------|
| Gravity variable | [[gmod]] constant | [[gmod]] depends on [[r]] |
| Complexity | Low | Medium |
| Required inputs | [[m]], [[gmod]] | [[m]], [[G]], [[M_astro]], [[r]] |
| Typical use | Introductory and local problems | Altitude and planetary comparisons |
| Main risk | Oversimplification | Unnecessary complexity |

The best model is the simplest one that satisfies the required decision accuracy.

For review quality, teams should record which trigger activated the model switch. That traceability makes results reproducible and helps distinguish arithmetic mistakes from model-selection mistakes.

A concise model log with assumptions, trigger thresholds, and switch rationale is often enough to improve both technical clarity and peer-review speed.
