# Modelos físicos: Kinetic Friction

## Ideal model

The ideal model assumes sliding is already active and that the kinetic coefficient can be treated as approximately constant over the selected interval. Under that assumption, tangential contact force is estimated with the kinetic-friction law and oriented opposite to relative velocity.

This model is intentionally compact. It is excellent for first-order engineering prediction, provided its operating limits are respected.

## Hypotheses

Working hypotheses are:

- Nonzero relative sliding is present.
- Normal load [[N]] is correctly identified for the dynamic configuration.
- [[mu_k]] is representative of the actual material pair and contact state.
- No severe thermal, lubrication, or roughness transition occurs in the analyzed window.
- Friction direction is assigned opposite to [[v_rel]].

If any of these assumptions fails, prediction quality degrades in a systematic way.

## Quantitative validity domain

The model remains reliable when explicit quantitative criteria are met:

- Relative drift of [[mu_k]] stays within 10% during the computation window.
- Interface temperature remains inside a controlled band (for instance, within 15 C of calibration conditions).
- Force-prediction error remains below or equal to 10% in repeated equivalent runs.
- Sliding regime is sustained, with no frequent stick-slip transitions.

Outside these ranges, neglected effects become comparable to the dominant terms and constant-coefficient approximation loses reliability.

## Model failure signals

Observable failure indicators include:

- Persistent growth of mismatch between measured and predicted tangential force.
- Strong speed dependence where constant behavior was assumed.
- Surface-state drift due to contamination, wear, or thermal changes.
- Directional inconsistency of [[fk]] during [[v_rel]] reversals.

These signs do not invalidate contact physics, but they do invalidate the current parameterization.

## Extended or alternative model

When the ideal model fails, move to an extended formulation with state-dependent effective coefficient or piecewise calibration. For example, [[mu_k]] may be parameterized against temperature or [[v_rel]] bands.

Explicit transition rule: switch to the alternative model when relative error exceeds 10% persistently in three equivalent runs, or when measured coefficient drift exceeds the validated band.

This transition criterion makes model selection reproducible and auditable.

## Operational comparison

| Aspecto | Modelo Ideal | Modelo Extendido |
|---------|-------------|------------------|
| **Typical precision** | Good inside calibrated band | Better outside simple band |
| **Complexity** | Low | Medium to high |
| **Data requirement** | Low | High |
| **Best use** | Preliminary design and baseline control | Critical validation and fine optimization |
| **Interpretability** | High | Depends on parameterization |

Best practice is staged: start with the ideal model, audit error, and switch only when quantitative criteria indicate that simplification is no longer acceptable.
