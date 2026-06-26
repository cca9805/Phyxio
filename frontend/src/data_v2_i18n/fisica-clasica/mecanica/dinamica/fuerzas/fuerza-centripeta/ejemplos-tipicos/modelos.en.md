# Physical models: Typical Examples

## Ideal model

The ideal model in this leaf treats each scenario as circular motion with an identifiable dominant radial provider. Curvature demand is expressed with [[ac]] and [[Frad]], then mapped to the physical source: [[Tn]] for string motion, [[fs]] for flat curves, radial contribution of [[Nn]] for banking, contact condition at loop top, and gravity for orbital motion.

Its value is not only computational speed. It provides causal structure across different contexts.

## Hypotheses

- Radius [[r]] is well defined in the analyzed segment.
- Speed [[v]] is representative of the operating regime.
- A dominant radial source can be identified in each case.
- Flat-curve grip is represented by effective [[mu]].
- Banking angle [[th]] is treated as stable design geometry.

## Quantitative validity domain

The model is reliable when:

- [[r]] > 0 and [[m]] > 0 for radial-base use.
- [[mu]] > 0 in flat-curve adherence estimates.
- [[th]] remains in a realistic geometric range.
- Loop analysis explicitly checks top contact condition.
- Orbital case is close to circular with dominant central mass [[M]].

Within this domain, the model is best used as a first-pass diagnostic and comparative tool. It is especially effective when the goal is to rank scenarios by radial stress, estimate margin trends, and communicate assumptions clearly across teams.

A practical rule is to pair every computed value with a short validity statement: what was assumed constant, what was neglected, and what range of operation the estimate represents. This keeps the model physically interpretable and prevents false confidence.

## Model failure signals

- Persistent mismatch between prediction and measurement.
- Unphysical sensitivity to small input changes.
- Regimes outside assumptions (sustained skid, strong vibration, non-circular path).
- Output trends that contradict expected causal behavior.

Additional warning signs include unstable calibration from one test day to another, or repeated need to retune parameters without a clear physical reason. Those patterns often indicate that omitted dynamics are no longer secondary.

## Extended or alternative model

When the ideal model no longer captures dominant behavior, use extended modeling:

- Nonlinear tire and transient vehicle dynamics.
- Elastic and coupled oscillations in string systems.
- Multibody loop dynamics with structural effects.
- Perturbed orbital dynamics for space operations.

### Explicit transition to an alternative model

Switch models when ideal predictions stop being small-error approximations and become systematically misleading under real operating conditions.

### When to change model

If the safety or design decision depends on effects excluded by the ideal assumptions, changing to an alternative model is mandatory before issuing conclusions.

## Operational comparison

| Aspect | Ideal model | Extended model |
|---|---|---|
| Structure | Radial base plus typical-case law | Coupled high-fidelity dynamics |
| Cost | Low | Medium/high |
| Use | Learning and first diagnosis | Critical validation |
| Risk outside domain | High | Lower when calibrated |

Best practice is sequential: master the ideal model, then escalate when the context requires higher fidelity.
