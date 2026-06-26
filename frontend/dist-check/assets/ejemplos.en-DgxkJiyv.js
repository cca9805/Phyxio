const e=`\uFEFF# Exam-type example

## Problem statement

A block with mass [[m1]] of 2 kg initially slides at a velocity [[v1i]] of 10 m/s on a horizontal surface. Friction between the block and the surface exerts a [[F_ext]] of 6 N opposite to the motion. Calculate: (a) the external impulse [[J]] applied to the block during a [[t]] of 3 s; (b) the [[P]] of the block at the end of the interval; (c) the final velocity. Determine how much conservation is broken, justifying the answer using the impulse-momentum relationship.

## Data

- Mass of the block [[m1]]: 2 kg
- Initial velocity [[v1i]]: 10 m/s (positive direction); the generic velocity [[v]] of any body defines its contribution to the total momentum
- Net external force [[F_ext]] (friction): -6 N (opposite to motion)
- Time [[t]] of the process: 3 s
- Initial momentum [[Pinitial]]: 20 kg·m/s (product of 2 kg by 10 m/s)

## System definition

We define the system as the {block}. Friction comes from the ground, which is external to the system: it is a non-zero net external force. Therefore, the block's [[P]] is not conserved during this process. The breakdown of conservation is quantified by the external impulse [[J]], which is the product of force and time. The block's momentum changes exactly by the amount of impulse received from the outside.

## Physical model

We apply the definition of external impulse using formula **p**. The fundamental relationship between this impulse and the change in the dynamic state of the system is given by formula **p**. The final momentum is obtained by adding the impulse to the initial momentum: [[Pfinal]] = [[Pinitial]] + [[J]]. Unlike ideal collisions where the general balance between two bodies is:

{{f:general_1d_balance}}

or where bodies may couple together following:

{{f:inelastic_collision}}

or separate from rest via recoil:

{{f:recoil_law}}

Here the system is not isolated because [[F_ext]] acts for a significant [[t]], breaking the equality between [[Pinitial]] and [[Pfinal]]. In those conservative cases, [[DeltaP]] would be zero; in the present case, [[DeltaP]] equals exactly the external impulse [[J]].

## Model justification

The model is valid because the friction force is considered constant and the time interval is well defined. Friction acts continuously, so the isolated system approximation cannot be used: the external impulse is significant and modifies the [[P]] appreciably. This is precisely the situation of conservation breakdown that this leaf studies to differentiate it from ideal collisions.

## Symbolic solution

First, we calculate the net external impulse applied to the system using formula **p**:

{{f:J}}

We relate this impulse to the system's [[DeltaP]] using formula **p**:

{{f:J}}

The system's final state is obtained by adding this variation to the initial state:

{{f:DeltaP}}

The final momentum [[Pfinal]] determines the final velocity [[v1f]] of the block via the definition of momentum:

{{f:P}}

## Numerical substitution

**External Impulse:**
By multiplying the [[F_ext]] (-6 N) by the [[t]] (3 s), we get an impulse [[J]] of -18 kg·m/s. The negative sign indicates that the impulse subtracts motion from the system.

**Momentum Variation:**
According to the impulse-momentum relationship, the [[DeltaP]] is exactly equal to the impulse received, i.e., -18 kg·m/s.

**Final State and Velocity:**
Adding the variation (-18) to [[Pinitial]] (20), the [[Pfinal]] turns out to be 2 kg·m/s. Dividing this momentum by the mass (2 kg), the final velocity [[v1f]] of the block is 1 m/s.

## Dimensional validation

Impulse has dimensions of force times time (N·s), which is equivalent to kg·m/s. This is consistent with the units of linear momentum. The final result (1 m/s) is a physically coherent velocity: friction has slowed the block down but has not had enough time to stop it completely or reverse its direction of travel.

## Physical interpretation

The external impulse of -18 kg·m/s indicates that friction has "extracted" almost all of the block's motion. Conservation was broken because the [[F_ext]] was not zero during the interval. If the acting [[t]] had been smaller (milliseconds), the impulse would have been negligible and momentum would have been approximately conserved. Relationship **p** quantifies exactly how much the system deviates from ideal conservation: each unit of external impulse translates into one unit of change in the [[P]].

# Real-world example

## Context

In rocket launches, engine thrust is an external impulse that breaks the "inertia" of rest. However, gravity also acts as an opposite external impulse.

## Physical estimation

Consider a rocket with [[m1]] = 1000 kg starting from rest ([[Pinitial]] = 0) with a thrust [[F_ext]] of 20000 N for [[t]] = 5 s.

**Step 1 — Engine impulse:** The product of [[F_ext]] and [[t]] gives an impulse [[J]] of 100000 kg·m/s.

**Step 2 — Opposite gravitational impulse:** Gravitational force equals −10000 N, producing an impulse of −50000 kg·m/s over the same 5 s.

**Step 3 — Net [[DeltaP]]:** 100000 − 50000 = 50000 kg·m/s

**Step 4 — [[vf]] from [[Pfinal]]:** [[Pfinal]] = [[Pinitial]] + [[DeltaP]] = 0 + 50000 = 50000 kg·m/s. Dividing by [[m1]] (1000 kg), the final velocity [[vf]] = 50 m/s.

Conservation of [[P]] has been completely broken: the system went from [[Pinitial]] = 0 to [[Pfinal]] = 50000 kg·m/s. The breakdown is exactly quantified by the balance of external impulses [[J]].

**Order of magnitude:** An impulse [[J]] of 100000 kg·m/s is a reasonable estimate for small-scale rockets with moderate thrust. This magnitude is consistent with test vehicles of several hundred kilograms and forces on the order of tens of kN.

## Interpretation

This example indicates that the [[P]] changes according to the balance of external impulses. The breakdown of conservation is not an error, but the way external forces interact with mass to produce acceleration.
\r
\r
\r
`;export{e as default};
