# Exam-type example

## Problem statement

A wooden block rests on a horizontal table. The static friction coefficient between the two surfaces is 0.45 and the kinetic coefficient is 0.35. The block has a mass of 8 kg. A student applies a horizontal push of 42 N. Determine whether the block starts moving and, if so, calculate the resulting acceleration.

## Data

- Block mass: 8 kg
- Static friction coefficient: 0.45
- Kinetic friction coefficient: 0.35
- Horizontal push applied: 42 N
- Gravitational acceleration: 9.8 m/s²

## System definition

The system is a single block resting on a horizontal surface. A positive axis is chosen in the direction of the push. The only relevant forces are the weight, the normal, the applied force and friction. There is no vertical acceleration and no forces with an additional normal component.

## Physical model

Coulomb's dry friction model on a horizontal surface is applied. [[N]] balances the weight because there is no additional vertical component. The regime analysis is resolved by comparing [[F_ext]] with [[F_ext_crit]], which depends on [[mu_e]] and [[N]]. Once the regime is confirmed, the corresponding formula for [[a]] is used. All the leaf's formulas are involved in the sequence: first the normal, then the threshold, then friction and finally the acceleration.

## Model justification

The simple horizontal model is valid because the push is purely horizontal (it does not alter [[N]]), the surface is rigid, the expected speed is moderate and [[mu_c]] is idealised as constant. The model would cease to hold if the push had a significant vertical component, if the surface were soft, or if the speed reached made the kinetic coefficient dependent on velocity.

## Symbolic solution

First the normal force is calculated from the vertical equilibrium:

{{f:normal_horizontal}}

Next the static threshold of the system is determined:

{{f:friccion_estatica_max}}

With that value the critical external force is established:

{{f:umbral_deslizamiento}}

[[F_ext]] is compared with [[F_ext_crit]]. If the push exceeds the threshold, the regime is kinetic and the friction force takes the constant value given by:

{{f:friccion_cinetica}}

The friction at rest would have been simply the match to the push:

{{f:friccion_estatica_reposo}}

Finally, the dynamic acceleration is obtained with:

{{f:aceleracion_dinamica}}

## Numerical substitution

Step 1: the normal results from multiplying 8 kg by 9.8 m/s², giving 78.4 N. Therefore [[N]] ≈ 78.4 N.

Step 2: the maximum static friction is 0.45 times 78.4 N, that is 35.28 N. Thus [[f_emax]] ≈ 35.28 N.

Step 3: the critical force coincides with [[f_emax]] in this model, so [[F_ext_crit]] ≈ 35.28 N.

Step 4: since 42 N exceeds 35.28 N, the block slides. The kinetic friction is 0.35 times 78.4 N, that is 27.44 N. Thus [[f_r]] ≈ 27.44 N.

Step 5: the acceleration is the difference between 42 N and 27.44 N, divided by 8 kg. That gives 14.56 N divided by 8 kg, approximately 1.82 m/s². Therefore [[a]] ≈ 1.82 m/s².

## Dimensional validation

- The normal has force units: `[M]·[L T⁻²]` yields `[M L T⁻²]` ✓
- Friction is a dimensionless coefficient `[1]` times a force `[M L T⁻²]`, which gives force ✓
- Acceleration is a difference of forces `[M L T⁻²]` divided by mass `[M]`, yielding `[L T⁻²]` ✓

## Physical interpretation

The result shows that the 42 N push exceeds the static threshold of 35.28 N by a margin of about 7 N, which means the block does break free. However, the resulting acceleration is only 1.82 m/s², a moderate value that indicates most of the push goes towards overcoming kinetic friction (27.44 N out of 42 N). This implies that in frictional systems, the net push available for acceleration depends strongly on the kinetic coefficient and is always much smaller than the total applied push.

From a physical standpoint, the regime decision is the most critical moment in the problem. The block does not "know" it will slide until [[F_ext]] crosses the threshold; below it the surface responds reactively and the system stays in static equilibrium. This threshold nature turns the problem into a bifurcation: the same formula for [[a]] yields zero or a finite value depending on the regime. It is a structure that reappears in many physics phenomena, from electrical discharge to material fracture.

If the static coefficient were larger — for instance 0.6 instead of 0.45 — the threshold would rise to about 47 N and the same 42 N push would fail to move the block. This illustrates the sensitivity of the result to the material pair in contact. If instead the mass were doubled to 16 kg, the normal would rise to 156.8 N and the static threshold to 70.6 N, well above the push: the block would remain at rest. Mass has a double influence: it raises the breakaway threshold and, in case of sliding, reduces the acceleration due to greater inertia. In summary, [[mu_e]] governs whether the block breaks free and [[mu_c]] governs how much it accelerates once in motion; the mass and gravitational acceleration ([[g]]) set the force scale through the normal.

# Real-world example

## Context

In a logistics warehouse, a worker needs to slide 25 kg boxes across a polished concrete floor. The static friction coefficient between the cardboard base of the box and the concrete is approximately 0.40 and the kinetic coefficient is 0.30. The worker can sustain a horizontal push of up to 120 N. It is necessary to estimate whether the worker can start the box alone and what initial acceleration will be obtained.

## Physical estimation

The normal on horizontal concrete equals the box weight: 25 kg times 9.8 m/s² gives approximately 245 N. The static threshold is 0.40 times 245 N, that is 98 N. Since the worker can push up to 120 N, the threshold is exceeded with margin and the box breaks free. The kinetic friction is 0.30 times 245 N, about 73.5 N. The net push is 120 N minus 73.5 N, that is 46.5 N, and the initial acceleration results from dividing by 25 kg: approximately 1.86 m/s². That value is reasonable for the manual start of a medium-sized box.

If the box weighed 40 kg, the threshold would rise to about 157 N and the worker could no longer start it alone: assistance or a roller device to reduce the effective coefficient would be needed. This quick estimate allows the warehouse supervisor to decide whether to assign a single worker or a team of two.

## Interpretation

The calculation confirms that the regime decision is the critical step in manual load logistics. The key datum is not the worker's maximum force by itself, but its comparison with the system's static threshold. Once the threshold is exceeded, the acceleration depends on the difference between push and kinetic friction, divided by mass. In practice, a rougher floor or a heavier box can turn a one-person operation into an impossible one, which justifies the use of trolleys or rollers in industrial warehouses.
