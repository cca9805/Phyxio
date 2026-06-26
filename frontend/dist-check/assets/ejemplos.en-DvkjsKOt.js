const e=`# Exam-type example

## Problem statement

A particle of mass [[m]] moves without external forces in one direction. The Lagrangian does not depend on absolute position. Identify the symmetry, write the conserved quantity, and also estimate the simple angular momentum if the particle is observed with radial arm [[r]].

## Data

- [[m]] = 2.0 kg.
- [[v]] = 3.0 m/s.
- [[r]] = 0.50 m.
- The Lagrangian [[L]] does not distinguish spatial translations in the direction of motion.

## System Definition

The system is an ideal free particle. The translation coordinate does not appear explicitly in the Lagrangian, so absolute position has no dynamical meaning. The relevant information is velocity and the associated conjugate momentum.

## Physical Model

We use the regular Lagrangian model of a free particle. Translational symmetry implies conservation of linear momentum. If a rotation around a point with perpendicular radial arm is also considered, a simple angular momentum can be estimated.

The model is anchored in the leaf because it starts from [[L]], identifies the generator [[X_i]] of the transformation, and reads the charge [[Q]] that follows from it. In this elementary case, the translational charge is expressed as [[P]], and the auxiliary rotational reading is expressed as [[J]] only under the stated geometry. The cyclic-coordinate condition also has a direct reading: if [[dpdt]] is zero within tolerance, [[p_i]] remains constant and the symmetry has not been broken.

## Model justification

The model is valid because there is no position-dependent external force, no friction, and no potential selecting a privileged point in space. Conservation is not imposed as a memorized rule; it follows from spatial symmetry of the Lagrangian.

## Symbolic solution

The conjugate momentum is defined by:

{{f:momento_conjugado_noether}}

The general form of the Noether charge is:

{{f:carga_noether}}

A cyclic coordinate conserves its momentum:

{{f:coordenada_ciclica}}

Time symmetry would produce:

{{f:energia_por_invariancia_temporal}}

Translational symmetry produces linear momentum:

{{f:momento_lineal_por_traslacion}}

Rotational symmetry produces simple planar angular momentum:

{{f:momento_angular_por_rotacion}}

## Numerical Substitution

With [[m]] = 2.0 kg and [[v]] = 3.0 m/s, the conserved linear momentum is 6.0 kg m/s. With [[r]] = 0.50 m, the associated simple angular momentum is 3.0 kg m^2/s. These values are not conserved because of the numbers themselves, but because the model does not distinguish translations nor, in the angular case, orientations if rotational symmetry is valid.

If a persistent variation of [[p_i]] were measured, the correct conclusion would not be to adjust the final number, but to check whether the Lagrangian contains position dependence or whether an undeclared external force is acting. The numerical calculation estimates the scale; conservation is decided by symmetry.

## Dimensional Validation

[[P]] has units of kg m/s because it is mass times velocity. [[J]] has units of kg m^2/s because it multiplies a radial arm by linear momentum. [[E]] would have joule units and [[Q]] would have units depending on the generator [[X_i]].

## Physical Interpretation

The important reading is causal: spatial homogeneity causes conservation of [[P]]. If a position-dependent potential were added, that homogeneity would disappear and linear momentum would no longer have to remain constant. In the rotational case, if an external torque appears, conservation of [[J]] is broken.

The example shows that Noether's theorem is not an isolated formula. It is a way of asking which choices do not matter for the system. If absolute position does not matter, [[P]] appears. If absolute orientation does not matter, [[J]] appears. If the time origin does not matter, [[E]] appears.

The numerical result also has a scale reading. A value of [[P]] equal to 6.0 kg m/s is coherent with a mass of a few kilograms and a speed of a few meters per second. A value of [[J]] equal to 3.0 kg m^2/s is smaller because the selected radial arm is half a meter. This comparison prevents confusion between linear and angular momentum and shows why each conservation law responds to a different symmetry.

Physically, the conserved value is a diagnostic of what the environment is not doing. If [[P]] remains stable, the environment is not selecting a preferred horizontal position. If [[J]] remains stable, the environment is not applying a net external torque about the chosen point. If either quantity drifts, the drift has causal meaning: it points to a broken symmetry rather than to a mere arithmetic detail.

# Real-world example

## Context

On an air table, a disk moves with almost no friction. As long as there are no appreciable horizontal external forces, translating the entire experiment by a few centimeters does not change the physics. That symmetry explains why horizontal linear momentum remains approximately constant.

An experimental record may show small oscillations of [[P]] due to measurement noise. The important distinction is between noise around a stable value and sustained drift. The first situation is compatible with a practical symmetry; the second requires a physical cause that breaks spatial homogeneity.

## Physical estimation

If the disk doubles its speed while mass stays fixed, [[P]] also doubles. If it is observed relative to a point at twice the perpendicular distance, [[J]] also doubles for the same [[P]]. These estimates help detect whether an experimental deviation comes from external force, measurement error, or loss of symmetry.

## Interpretation

The real application is diagnostic. Before solving complete equations, one identifies what should be conserved if the ideal model is correct. When data do not respect that conservation, the teacher can ask which symmetry was broken: friction, table slope, external force, or unaccounted torque.

This workflow helps a student avoid treating formulas as recipes. First the model is stated, then the symmetry is identified, and only then is the conserved quantity used. If the result does not match experience, the failure is searched for in the physical assumptions rather than in an isolated numerical substitution.
`;export{e as default};
