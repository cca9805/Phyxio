# Universal gravitation law models

## Ideal model

The ideal model uses two point masses [[m1]] and [[m2]] separated by center-to-center distance [[r]]. Interaction strength is represented by [[F]], and global scale is set by [[G]]. This abstraction preserves core gravitational physics without requiring complex geometry.

In this setting, attraction is central and radial. Direction follows the line connecting both mass centers. For foundational mechanics problems, this model is often both sufficient and pedagogically optimal.

## Hypotheses

Hypothesis 1: classical Newtonian regime, with negligible relativistic correction.

Hypothesis 2: bodies are point-like or effectively spherical.

Hypothesis 3: [[r]] is positive and measured between mass centers.

Hypothesis 4: strict SI consistency for [[G]], masses, and distances.

Hypothesis 5: no extreme scales that invalidate model assumptions.

These assumptions define the operational contract of the model. Outside this contract, numerical outputs may exist but physical interpretation becomes unreliable.

## Quantitative validity domain

A minimum quantitative rule is [[r]] strictly greater than zero and geometric scales compatible with point-mass treatment. For field analysis, source mass [[M]] is used to compute [[g]] or [[a]] at radial positions where spherical symmetry remains a valid approximation.

For force comparisons, scaling with [[F1]], [[F2]], [[r1]], and [[r2]] is valid only if masses are unchanged between both states. If masses change, the full force law should be reapplied.

In surface conditions, [[R]] may replace [[r]]. For elevated points, absolute [[r]] must be used explicitly.

## Model failure signals

Failure appears when required precision is relativistic or when geometry cannot be reduced to one radial coordinate. Another clear signal is implausible values of [[F]], [[g]], or [[a]] caused by mixed units.

A semantic failure occurs when roles are swapped: using test mass [[m]] where [[m1]] and [[m2]] are required, or assuming [[R]] always equals [[r]]. In those cases, equations may be formally correct but attached to the wrong physical system.

## Extended or alternative model

With multiple sources, field superposition is required to build total [[g]]. With higher precision demands, numerical methods and richer geometry become necessary. Under strong-field conditions, relativistic frameworks replace the Newtonian model.

In teaching practice, separating two-body force problems from local-field response problems improves model selection and helps students decide whether [[F]], [[g]], [[P]], or [[a]] is the relevant output.

## Operational comparison

Ideal model: fast and highly interpretable for most foundational exercises.

Local-field model: efficient bridge from source [[M]] to [[g]], [[P]], and [[a]].

Extended superposition model: required for multi-source or symmetry-broken scenarios.

Selection rule: if one dominant radial distance and clear source definition exist, use ideal or local-field model. Otherwise, escalate model complexity before substitution.