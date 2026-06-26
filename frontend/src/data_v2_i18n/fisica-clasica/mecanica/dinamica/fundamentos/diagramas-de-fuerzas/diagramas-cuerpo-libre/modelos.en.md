# Physical models: Free-Body Diagrams

## Ideal model

The ideal model in this leaf assumes classical mechanics, a clearly isolated system, and externally applied interactions that can be mapped to explicit force agents. The focus is not to reproduce every material detail, but to construct a reliable force map for axis projection and motion interpretation.

Baseline assumptions:

- The body is approximated as a particle or rigid body at the chosen scale.
- Relevant external forces are represented by [[P]], [[N]], [[T]], and friction terms [[fs]] or [[fk]].
- Mass [[m]] is positive and constant over the analysis interval.
- Gravitational acceleration [[g]] is treated as uniform.

## Hypotheses

1. Isolation hypothesis: only external forces with explicit physical source are included.
2. Axis-consistency hypothesis: one sign convention is kept through all projections.
3. Regime hypothesis: static and kinetic friction formulas are not mixed without a declared transition event.
4. Geometric hypothesis: [[theta]] is defined unambiguously before using [[Ppar]] and [[Pperp]].

If any hypothesis fails, the free-body structure is still useful, but the constitutive layer must be extended.

## Quantitative validity domain

The model is reliable when measurable checks hold:

- Axis-balance coherence: |[[Fy]]| <= 0.05*|[[P]]| in non-liftoff support cases.
- Static regime consistency when [[fs]] <= [[mu_s]]*[[N]].
- Kinetic regime consistency when [[fk]] = [[mu_k]]*[[N]] with [[mu_k]] >= 0.
- Dynamic coherence when |[[Fx]] - [[m]]*[[ax]]| remains within measurement tolerance.

Explicit transition criteria:

- If tangential demand exceeds static bound, switch from [[fs]] model to [[fk]] model.
- If [[N]] approaches zero, reassess contact assumptions and drop simple vertical-equilibrium closure.

## Model failure signals

- Predicted signs for [[ax]] or [[ay]] repeatedly contradict observations.
- Computation requires negative [[N]] in ordinary support contact.
- Small parameter changes in [[theta]] or [[mu_s]] produce unrealistic jumps.
- The analysis toggles between static and kinetic assumptions without a clear trigger.

## Extended or alternative model

When the base model is insufficient, extension can be layered:

1) State-dependent contact and friction behavior.
2) Nonlinear friction including hysteresis effects.
3) Transient dynamics for impact and vibration conditions.
4) Support deformation effects that redistribute [[N]].

Recommended escalation trigger:

- Upgrade the model when axis-balance error stays above tolerance across repeated trials after force-map and unit checks are already validated.

## Operational comparison

| Aspect | Base FBD model | Extended model |
|---|---|---|
| Goal | Force traceability and axis balances | Nonlinear and transient fidelity |
| Data demand | Low to medium | Medium to high |
| Computational cost | Low | Medium or high |
| Interpretability | Very high | Medium |
| Best use | Teaching and first-line diagnostics | Fine validation and edge incidents |

Recommended strategy is hierarchical: start with a clean base free-body model, then escalate only when empirical evidence requires additional complexity.
