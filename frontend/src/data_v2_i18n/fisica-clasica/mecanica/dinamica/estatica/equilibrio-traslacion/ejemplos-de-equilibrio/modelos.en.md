# Physical models: Examples of Translational Equilibrium

## Ideal model

The baseline model compares three translational-equilibrium families: support contact, inclined-plane contact, and symmetric cable-node support. All are treated under quasi-static assumptions with force closure as the primary criterion.

Main idealizations:

- Dry contact represented by coefficient [[mu_s]].
- Ideal massless cables with uniform [[T]].
- Planar geometry with explicit [[alpha]] and [[theta]] conventions.
- Approximately constant local gravity [[g]].

## Hypotheses

1. The free-body diagram includes all relevant external forces.
2. Axis conventions remain consistent through the derivation.
3. Projection equations use a declared angular reference.
4. Translational acceleration is negligible in the equilibrium-classified example.

If one hypothesis fails, cross-example comparison quality drops and conclusions become unstable.

## Quantitative validity domain

The model is considered operational when constraints such as the following hold:

1. abs(sumFx) <= 0.02 * F_ref
2. abs(sumFy) <= 0.02 * F_ref
3. 0 <= [[alpha]] < 1.57 rad for non-vertical ramps
4. 0 < [[theta]] <= 1.57 rad for symmetric cable support
5. 0 <= [[mu_s]] <= 1.2 for typical dry-contact cases

With F_ref roughly between 10 N and 1000 N, these thresholds separate acceptable closure from physically meaningful imbalance.

## Model failure signals

- Persistent force residuals after repeated measurements.
- Predicted [[T]] values incompatible with real cable limits.
- Geometrically impossible angle requirements for closure.
- Observation-model contradictions, such as sliding despite predicted sticking sufficiency.

These indicators imply a model-limitation issue, not only an algebra issue.

## Extended or alternative model

When should you switch models? You should switch when the dominant mechanism is not represented by the current assumptions.

Typical transitions:

1. Add torque balance if rotation becomes relevant.
2. Move to dynamic friction models if acceleration appears.
3. Use elastic structural models if deformation is non-negligible.

Explicit transition rule: when model change is appropriate, move to the model that captures the mechanism currently appearing as unexplained residual error.

## Operational comparison

| Aspect | Leaf baseline model | Extended model |
|--------|---------------------|----------------|
| Core closure | sumFx, sumFy | forces plus torques and dynamics as needed |
| Key variables | [[W]], [[N]], [[W_parallel]], [[F_s_max]], [[T]] | adds inertia, deformation, dissipation |
| Complexity | Low to medium | Medium to high |
| Best use case | Didactic diagnosis and comparison | Field and design validation |
| Misuse risk | Over-extrapolation | Unnecessary over-modeling |

Mastering the baseline model is what enables informed escalation to richer physical descriptions.

In practical teaching, this comparison table should be read as a decision map. If residual forces remain small and assumptions are verified, the baseline model provides fast and interpretable diagnosis. If residuals persist or observations contradict closure predictions, escalation is justified. The goal is not to abandon simple models early, but to use them transparently and switch only when physically required.
