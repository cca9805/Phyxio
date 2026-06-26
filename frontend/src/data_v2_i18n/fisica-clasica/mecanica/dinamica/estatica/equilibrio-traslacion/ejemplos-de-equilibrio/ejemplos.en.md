# Exam-type example

## Problem statement

A lab block rests on a rigid incline. Determine whether static rest can be sustained when mass, slope angle [[alpha]], and static-contact parameter [[mu_s]] are known. The target is not only a numeric answer, but also a mechanism-based justification.

## Data

The statement provides [[m]], [[g]], [[alpha]], and [[mu_s]]. It also states that no cable is attached and the block starts from rest. Therefore, the key magnitudes are [[W]], [[N]], [[W_parallel]], and [[F_s_max]].

## System definition

The system is the block only. Ground and incline are external agents. In the free-body diagram, include weight, normal reaction, and actual static friction. Use one axis tangential to the incline and one axis normal to the contact.

This axis choice removes ambiguity when comparing tangential demand against contact capacity, and it links [[alpha]] directly to weight projections.

## Physical model

Mass-to-weight conversion is written as:

{{f:peso_desde_masa}}

Normal reaction on the incline is obtained from:

{{f:normal_plano_inclinado}}

Tangential demand from gravity is obtained with:

{{f:componente_paralela_del_peso}}

Static-friction capacity is estimated through:

{{f:rozamiento_estatico_limite}}

## Model justification

The model is suitable because the scenario describes initial rest, dry contact, and rigid support. There is no evidence of dominant acceleration, strong deformation, or severe vibration. Static translational closure with demand-capacity comparison is therefore appropriate.

This matches the central didactic objective of the leaf: identify which restriction controls each equilibrium example.

## Symbolic solution

Compute [[W]] from [[m]] and [[g]], project it to get [[W_parallel]] and [[N]], then estimate [[F_s_max]] from [[mu_s]] and [[N]]. The decision criterion is comparative:

{{f:peso_desde_masa}}

{{f:componente_paralela_del_peso}}

{{f:rozamiento_estatico_limite}}

For cross-mechanism contrast within the same leaf, the symbolic step for symmetric cable support uses:

{{f:tension_nudo_simetrico}}

- If [[W_parallel]] stays below [[F_s_max]], static rest is feasible.
- If [[W_parallel]] exceeds [[F_s_max]], static rest cannot be sustained.

This is a key conceptual point: actual static friction is not preset at the limit value. It adapts to demand up to the limit.

## Numerical substitution

Using the given values, weight falls in a typical lab scale. Projection with [[alpha]] yields moderate tangential demand, while normal reaction remains comparable to total weight for intermediate inclinations.

Applying [[mu_s]] to [[N]] gives a friction capacity above tangential demand. The margin is positive but not large, so the system is static with limited robustness against perturbations.

A strong exam-level practice is sensitivity reading. If [[alpha]] is increased slightly while all other parameters remain unchanged, [[W_parallel]] rises and the margin contracts. If [[mu_s]] is reduced by surface contamination, the same system may cross from sustained rest to incipient slip. This is why professional reports include not only one computed state, but also a short margin narrative under plausible parameter drift.

## Dimensional validation

Each relation preserves dimensions: force with force, adimensional coefficient times force, and force projections through adimensional trigonometric functions. No mass units appear inside force-balance equations.

Sign consistency is also checked: tangential gravity component acts downslope, while static friction opposes that tendency.

## Physical interpretation

The result shows that incline rest is governed by competition between downslope demand and contact capacity. This mechanism-based reading predicts parameter sensitivity.

If [[alpha]] increases, [[W_parallel]] grows and safety margin shrinks. If [[mu_s]] drops because of contamination or wear, [[F_s_max]] decreases and equilibrium becomes fragile. Therefore, comparative structure is more informative than isolated numeric output.

In summary, this example is contact-controlled: the decisive variable is the gap between tangential demand and static-friction capacity. A good interpretation also states operational action. If the margin is small, reduce [[alpha]], improve surface condition to recover [[mu_s]], or lower transported load before operation.

# Real-world example

## Context

In a stage-installation workshop, a decorative panel is temporarily supported by two symmetric cables attached to an overhead beam. The team must decide whether the selected geometry is safe for a known central load.

Known inputs are panel mass [[m]], local gravity [[g]], and the cable angle [[theta]] with respect to the horizontal. The practical target is to estimate branch tension [[T]] and evaluate geometric sensitivity.

## Physical estimation

Convert load to [[W]] from mass and gravity, then estimate cable force with the symmetric-node model:

{{f:tension_nudo_simetrico}}

The critical reading focuses on [[theta]]. As the angle decreases, vertical support efficiency drops and required tension rises quickly. In real operation, a small geometric drift can move the system from comfortable margin to risk zone.

In deployment planning, this estimate should be complemented with tolerance analysis. Real anchor positioning, cable stretch, and assembly offsets alter effective geometry. Even when the nominal design is acceptable, as-built geometry may reduce the safety gap, so site teams should measure angle and update force estimates before final load transfer.

Compared with the incline case, the dominant mechanism differs. Here geometry controls support redistribution, while incline stability was contact-controlled. The analytical logic, however, remains demand versus capacity.

## Interpretation

This application confirms the core message of the leaf: comparing mechanisms across examples is essential. With the same total [[W]], different geometries can require very different internal forces.

Operationally, [[theta]] must be monitored during setup, not only mass. If the angle drops below the intended range, [[T]] can rise even with unchanged load and compromise safety.

A strong learning check is to ask for a written comparison between this cable case and the incline case, identifying the dominant variable in each and the most effective design action to increase equilibrium margin.

Another useful extension is to compare two admissible cable layouts with the same [[W]] and different [[theta]] windows. The preferred layout is not the one with visually tighter lines, but the one with more robust tension margin under realistic installation tolerance.
