# Exam-type example

## Problem statement

A bead of mass [[m]] moves without friction on an ideal guide. An applied force [[F]] acts on it, and the bead has acceleration [[a]] compatible with the guide. Explain how D'Alembert's principle writes the dynamical balance using only virtual displacements [[dr]] tangent to the guide, and how a generalized force [[Qj]] associated with a coordinate [[qi]] appears.

## Data

- The mass [[m]] is constant and positive.
- The active force is [[F]].
- The real acceleration of the bead is [[a]].
- Virtual displacements [[dr]] are tangent to the guide.
- The normal reaction of the guide is ideal and performs no tangential virtual work.

## System definition

The system is geometrically restricted by the guide. The bead cannot be virtually displaced in any direction; it can only move in compatible directions. Therefore one does not use an arbitrary displacement in space, but the virtual displacement allowed by the constraint.

## Physical model

First reorganize dynamics through the effective force:

{{f:fuerza_efectiva_dalembert}}

Then impose the virtual-work balance:

{{f:trabajo_virtual_dinamico}}

When the geometry is written through [[qi]], the active force becomes a generalized force:

{{f:fuerza_generalizada_desde_trabajo_virtual}}

The link with the Lagrangian formulation is:

{{f:lagrange_dalembert}}

## Model justification

The model is appropriate because the guide is considered ideal and frictionless. The normal force exists, but it is perpendicular to the tangent virtual displacement. Therefore it does not contribute to [[Wv]]. This elimination is not neglect; it is a geometric consequence.

It is also important that [[F]], [[m]], and [[a]] belong to the same bead. If forces from another body or accelerations measured in another coordinate are mixed, the effective force [[Feff]] loses meaning.

## Symbolic solution

Form the effective force:

{{f:fuerza_efectiva_dalembert}}

Then compute dynamic virtual work on compatible displacements:

{{f:trabajo_virtual_dinamico}}

If the guide is parameterized by [[qi]], project the active force to obtain:

{{f:fuerza_generalizada_desde_trabajo_virtual}}

Finally, the reduced equation is read as:

{{f:lagrange_dalembert}}

The normal reaction does not appear because its virtual contribution vanishes. If friction existed, that conclusion would change. In this final reading, [[Ri]] represents the dynamical residual of the chosen coordinate and must be compared with [[Qj]], not with an arbitrary Cartesian force.

## Numerical substitution

Suppose [[m]]=0.50 kg and the tangential acceleration is 2.0 m/s2. The tangential inertial term has scale 1.0 N. If the tangential component of [[F]] is 1.4 N, the tangential effective force has scale 0.4 N. For a virtual displacement of 1 mm, the associated virtual work would be of order 0.0004 J.

That small number does not mean the force is irrelevant; the virtual displacement is chosen infinitesimal. What matters is that the coefficient of each admissible displacement vanishes or is balanced by the corresponding generalized force.

## Dimensional validation

[[Feff]] has newton units because it subtracts an applied force and an [[m]][[a]] term. When multiplied by [[dr]], the result [[Wv]] has joule units. By contrast, [[Qj]] depends on the coordinate: if [[qi]] is a length, it may be measured in newtons; if it is an angle, it may be measured in newton meters.

## Physical interpretation

The result shows that the guide controls geometry, not necessarily the reduced equation of motion. The normal reaction keeps the bead on the guide, but it does not virtually push in the allowed direction. Therefore it disappears from the virtual-work balance.

The correct interpretation is that D'Alembert turns dynamics into a virtual equilibrium test. Inertial effects are subtracted, the result is projected on compatible displacements, and only contributions capable of virtual work are kept.

Physically, if the residual [[Ri]] does not match the contribution [[Qj]], the model is warning about a poorly projected force, an incompatible acceleration, or a non-ideal constraint. That comparison is more informative than an isolated virtual-work number because it identifies which part of the dynamical reasoning has lost coherence.

# Real-world example

## Context

In robotics, an articulated arm may have many internal forces at its joints. To study the motion of one joint, it is more useful to work with an angular coordinate [[qi]] than to solve all internal reactions first.

## Physical estimation

A 20 N force applied 0.15 m from the axis gives a generalized contribution of order 3 N m. If the arm accelerates, the inertial term may be comparable and modify the dynamic equilibrium. Reading the problem through [[Qj]] works directly with the relevant quantity for the angular coordinate.

If [[Qj]] were confused with a force in newtons, the lever arm would be lost and the equation would have wrong dimensions. This estimate detects the error before solving the full system.

## Interpretation

The real application is that joint coordinates absorb geometric constraints. Internal reactions still exist and may matter for designing parts, but they are not always needed to compute evolution. D'Alembert justifies that reduction through compatible virtual work.

A teacher can use this example to show that analytical mechanics does not hide forces: it decides which forces perform virtual work in the chosen coordinate. That decision is physical, geometric, and dimensional at the same time.
