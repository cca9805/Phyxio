# Exam-type example

## Problem statement

A solid cylinder of mass [[M]] and radius [[R]] rolls without slipping down an inclined plane at angle [[theta]]. Find the center-of-mass acceleration [[a]], the angular acceleration [[alpha]], and the static friction [[fs]] that makes pure rolling possible.

The key datum is not the absolute mass, but how inertia is distributed. For a solid cylinder we use [[beta]] of 0.5, so [[I]] can be written as

{{f:ley-traslacion-rodadura}}

. The physical question is whether the available gravitational drive is split between translation and rotation in a way compatible with the no-slip constraint.

## Data

Use [[M]] of 4.0 kg, [[R]] of 0.20 m, [[theta]] of 30 degrees,

{{f:aceleracion-rodadura-combinada}}

, and [[beta]] of 0.5. The body starts from rest, the plane is rigid, and there is enough static friction to avoid relative slipping at the contact point.

Choose the positive axis down the plane. With that convention, the gravitational component that drives the motion is M g sintheta, while static friction [[fs]] points up the plane because it must produce the torque that increases [[alpha]].

## System definition

The system is the whole cylinder. Translation is described through the center of mass; rotation is described by torques about the center of mass. This separation avoids mixing net force with net torque: the same friction [[fs]] reduces translational drive, but also creates the spin.

The unknowns are [[a]], [[alpha]], and [[fs]]. The pure rolling condition closes the system because it states that linear acceleration and angular acceleration are not independent.

## Physical model

The physical model is anchored to the core magnitudes [[a]], [[alpha]], [[fs]], [[theta]], [[M]], [[R]], and [[beta]]. The tangential component of gravity accelerates the center of mass, but static friction redistributes part of that cause into rotation. This is why the translation equation, the rotation equation, and the kinematic rolling constraint must appear together before using the compact acceleration formula.

This is not a matter of choosing one isolated equation: without translation, the net force is missing; without rotation, the torque that produces [[alpha]] is missing; without the rolling constraint, [[a]] and [[alpha]] are decoupled and the body could slide.

## Model justification

The physical model combines three relations from the leaf. Translation is described by the translation equation,

{{f:ley-traslacion-rodadura}}

. Rotation is described by the rotation equation,

{{f:ley-traslacion-rodadura}}

. The kinematic coupling is imposed by the rolling constraint,

{{f:ley-traslacion-rodadura}}

.

Static friction is not set equal to

{{f:ley-traslacion-rodadura}}

; that expression only gives the maximum available friction. Here [[fs]] is calculated as the friction required for rolling without slipping. If the surface cannot provide that value, the model stops being valid and sliding must be modeled instead.

## Symbolic solution

The solution explicitly uses the four core relations from the leaf. Substitute

{{f:ley-rotacion-rodadura}}

 and

{{f:vinculo-rodadura-acel}}

into the rotation equation:

{{f:ley-rotacion-rodadura}}

This gives

{{f:ley-traslacion-rodadura}}

. Insert it into the translation equation:

{{f:ley-traslacion-rodadura}}

Therefore:

{{f:aceleracion-rodadura-combinada}}

This is the combined acceleration relation. The other unknowns then follow from

{{f:aceleracion-rodadura-combinada}}

 and

{{f:aceleracion-rodadura-combinada}}

.

## Numerical substitution

For [[theta]] of 30 degrees,

{{f:ley-traslacion-rodadura}}

. Then:

{{f:aceleracion-rodadura-combinada}}

The angular acceleration is:

{{f:vinculo-rodadura-acel}}

The required static friction is:

{{f:ley-traslacion-rodadura}}

## Dimensional validation

The translation equation

{{f:ley-traslacion-rodadura}}

 compares forces, so every term has dimension `[M L T⁻²]`. The rotation equation

{{f:ley-traslacion-rodadura}}

 compares torques, with dimension `[M L² T⁻²]`. The constraint

{{f:ley-traslacion-rodadura}}

 is also consistent because [[alpha]] times [[R]] gives `[L T⁻²]`.

{{f:ley-traslacion-rodadura}}

.

The final result has acceleration units: \(g\sin\theta\) is measured in m/s^2, while \(1+\beta\) is dimensionless. This is why the combined acceleration cannot depend on [[M]] or [[R]] for bodies with the same [[beta]].

## Physical interpretation

The cylinder does not accelerate at gsintheta because part of the tendency to accelerate is invested in producing rotation. Static friction [[fs]] does not dissipate energy in ideal pure rolling; it redistributes the dynamic response between translation and spin. That is why a sphere, a cylinder, and a hoop can have different masses and still be ordered by [[beta]].

The value 3.27\ m/s^2 means that the cylinder keeps two thirds of the acceleration a frictionless block would have on the same ramp. The remaining third appears as effective rotational inertia.

# Real-world example

## Context

On a maintenance ramp, an industrial roller of

{{f:aceleracion-rodadura-combinada}}

.30 m is moved slowly. Its geometry is approximated by a thick hollow cylinder with [[beta]] of 0.8. The slope is [[theta]] of 12 degrees, and we want to check whether the roller can maintain pure rolling without demanding unrealistic static friction.

## Physical estimation

The expected acceleration from the combined relation is:

{{f:ley-rotacion-rodadura}}

The required friction, using the rotational derivation together with the kinematic constraint, is

{{f:ley-rotacion-rodadura}}

:

{{f:ley-rotacion-rodadura}}

The normal force is approximately

{{f:ley-traslacion-rodadura}}

. Therefore the surface needs

{{f:ley-traslacion-rodadura}}

. This is low for rubber on dry flooring, but it can matter if there is oil, fine dust, or polished metal.

## Interpretation

The important reading is not only that

{{f:ley-traslacion-rodadura}}

, but that the dynamic condition demands a specific static friction. If the available friction exceeds 108.5 N, the roller behaves as a rigid rolling body and the translation equation remains coupled to the rotation equation. If not, the contact slips, [[alpha]] is no longer \(a/R\), and the analysis must switch models.

In engineering, this calculation separates two decisions: the roller geometry controls acceleration through [[beta]], while contact safety is evaluated by comparing [[fs]] with the maximum available static friction.