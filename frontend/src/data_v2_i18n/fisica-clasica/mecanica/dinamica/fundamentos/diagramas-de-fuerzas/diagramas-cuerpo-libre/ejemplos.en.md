# Exam-type example

## Problem statement

A block of [[m]] = 12 kg is on an incline with [[theta]] = 25 degrees. The block is attached to a rope applying [[T]] upward along the plane. Contact may remain static or become kinetic depending on tangential demand. Build the free-body diagram, project by tangential-normal axes, and determine [[ax]] and [[ay]] for two scenarios: no slip and downward slip.

Also justify when to use [[fs]] versus [[fk]], validate dimensional consistency, and close with physical regime interpretation.

## Data

- [[m]] = 12 kg
- [[g]] = 9.81 m/s^2
- [[theta]] = 25 deg
- [[mu_s]] = 0.42
- [[mu_k]] = 0.30
- Applied tension [[T]] = 70 N
- Convention: x axis along incline, y axis normal to incline
- State A: adhesion (no slip)
- State B: downward sliding

## System definition

Isolated system: the block.

External interactions included in the FBD:

- Weight [[P]] from Earth.
- Normal [[N]] from the surface.
- Rope tension [[T]].
- Contact friction, either [[fs]] or [[fk]] depending on regime.

Internal block forces are excluded because they do not belong to external balance.

## Physical model

Classical mechanics with axis projections is used:

{{f:newton_vectorial}}

{{f:newton_x}}

{{f:newton_y}}

{{f:componentes_peso_plano}}

{{f:equilibrio_vertical}}

{{f:rozamiento_estatico}}

{{f:rozamiento_cinetico}}

The model requires regime declaration before friction substitution.

## Model justification

This model is valid because speeds are moderate, the setup is macroscopic, and rigid-contact approximation is acceptable at first order. [[g]] is treated as uniform, and large deformation effects are neglected.

Weight decomposition into [[Ppar]] and [[Pperp]] is mandatory because axes are aligned with the incline, not with global horizontal and vertical directions. This enables clean separation between normal support behavior and tangential motion behavior.

Friction law is regime dependent:

- In adhesion, [[fs]] follows an upper bound with [[mu_s]] and [[N]].
- In sliding, [[fk]] is set by [[mu_k]] and [[N]].

Therefore, result validity depends on consistency between declared regime and observed behavior.

## Symbolic solution

1) Weight projection:

- [[Ppar]] = [[m]]*[[g]]*sin([[theta]])
- [[Pperp]] = [[m]]*[[g]]*cos([[theta]])

2) Normal axis (y):

If contact is maintained without lift-off, [[ay]] = 0 and normal balance yields [[N]] approximately equal to [[Pperp]].

3) State A (no slip):

- Check whether a valid [[fs]] exists satisfying tangential balance.
- Existence condition: [[fs]] <= [[mu_s]]*[[N]].

4) State B (downward sliding):

- Friction switches to [[fk]] = [[mu_k]]*[[N]].
- Tangential balance with [[T]], [[Ppar]], and [[fk]] gives [[Fx]], then [[ax]].

6) Global vector closure:

{{f:newton_vectorial}}

In this closure, [[Fext]] summarizes total external action and must remain consistent with both axis projections.

5) Axis reading:

- [[Fy]] controls contact and normal stability.
- [[Fx]] controls along-plane acceleration tendency.

## Numerical substitution

1) Total weight:

[[P]] = [[m]]*[[g]] = 12*9.81 = 117.72 N

2) Weight components:

- [[Ppar]] approx 117.72*sin(25) approx 49.75 N
- [[Pperp]] approx 117.72*cos(25) approx 106.68 N

3) Normal load:

[[N]] approx 106.68 N

4) Static bound:

[[mu_s]]*[[N]] approx 0.42*106.68 approx 44.81 N

For adhesion to remain valid, required [[fs]] from tangential balance must be less than or equal to 44.81 N.

5) Kinetic friction level:

[[fk]] approx [[mu_k]]*[[N]] approx 0.30*106.68 approx 32.00 N

6) Sliding-state tangential reading:

Combined effect of [[T]] and [[fk]] can partially counteract [[Ppar]], but final [[Fx]] sign still depends on the friction direction selected according to relative motion.

In this reference case, if the block slides downward, [[fk]] points upward along the plane and reduces net downhill tendency.

## Dimensional validation

- [[P]], [[N]], [[T]], [[fk]], [[fs]], [[Fx]], and [[Fy]] in N.
- [[a]], [[ax]], [[ay]] in m/s^2.
- [[mu_s]] and [[mu_k]] dimensionless.
- [[theta]] dimensionless in trigonometric use.

No dimensional conflict appears. Final consistency is controlled by sign convention and regime declaration.

## Physical interpretation

The key interpretation is causal. [[P]] does not act along the incline, so it must be split into [[Ppar]] and [[Pperp]]. [[Pperp]] sets normal loading and therefore affects [[N]], while [[Ppar]] competes with [[T]] and friction on the tangential axis.

The vector quantity [[Fext]] is also a coherence checkpoint: if axis balances are valid, global resultant direction must match observed acceleration tendency.

This implies that one fixed value of [[T]] may produce different dynamic outcomes when [[theta]], [[mu_s]], or [[mu_k]] changes. Therefore, there is no single "motion force"; there is axis-dependent interaction balance.

If the state is adhesive, [[fs]] adapts up to a limit and may keep [[ax]] near zero. Once threshold is crossed, [[fk]] governs response and the system changes regime. That transition is physically meaningful and cannot be represented by one friction equation applied everywhere.

Conclusion: an FBD is not only a path to numbers. It is a regime-decision framework that explains parameter sensitivity and supports operational prediction.

# Real-world example

## Context

In an inclined parcel conveyor, packages with variable mass are pulled upward by a side-belt mechanism. Operations reports that heavier packages occasionally slide backward during humid shifts, even with unchanged nominal tension control. The likely suspect is contact-surface drift due to dust and moisture.

## Physical estimation

Take a representative batch with [[m]] = 18 kg and [[theta]] = 20 deg:

- [[P]] approx 176.6 N
- [[Ppar]] approx 60.4 N
- [[Pperp]] approx 165.8 N

If dry condition yields [[mu_s]] = 0.45, the static bound is near 74.6 N. If humid condition lowers [[mu_s]] to 0.25, the bound drops to 41.5 N.

Quantitative reading: threshold capacity decreases by 33.1 N. That scale change explains why one fixed pulling strategy can hold in one shift and fail in another. In order-of-magnitude terms, usable margin shrinks from upper 10^1 N to a much tighter window.

If slip starts, the kinetic model with lower [[mu_k]] reduces compensation further. This supports the observed regime transition behavior.

## Interpretation

The correct diagnosis is not an abstract "loss of machine force." The free-body view shows a contact-dominated mechanism: lower [[mu_s]] lowers static capacity, which changes no-slip feasibility.

This means corrective action should combine control and surface maintenance. Raising command tension may help, but without contact stabilization the system will keep switching regimes with high variability.

Final causal interpretation: transport performance depends on the balance among [[T]], [[Ppar]], and contact capacity determined by [[N]], [[mu_s]], and [[mu_k]]. The FBD separates root cause from symptom and reduces blind tuning.
