const e=`# Exam-type example

## Problem statement

A cart with mass [[m]]=2.0 kg moves with speed [[v]]=3.0 m/s at height [[h]]=0.80 m relative to a horizontal reference. Compute [[T]], [[V]], [[L]], and [[E]], interpret which energy dominates, and explain why the Lagrangian must not be confused with total mechanical energy.

## Data

- [[m]]=2.0 kg.
- [[v]]=3.0 m/s.
- [[h]]=0.80 m.
- [[g]]=9.81 m/s2.
- The reference for [[V]] is the horizontal plane from which [[h]] is measured.

## System Definition

The system is a cart treated as a particle or rigid body with one effective translational speed. Only translational kinetic energy and uniform gravitational potential energy are considered. No friction, motors, or changing reference levels are included.

## Physical Model

The model uses speed to compute [[T]], height to compute [[V]], and then forms two different combinations: [[L]] as a difference and [[E]] as a sum.

{{f:energia_cinetica_traslacional}}

{{f:energia_potencial_gravitatoria}}

{{f:lagrangiano_mecanico}}

{{f:energia_mecanica_total}}

## Model justification

The model is appropriate because all quantities describe the same physical state: the same mass, the same instant, and the same vertical reference. Potential energy is read as storage by position, while kinetic energy is read as motion.

The elastic expression is not used because there is no deformation or stiffness [[k]]. The generalized velocity [[qdi]] is not used either because the statement provides an ordinary speed [[v]]. This selection prevents different models from being mixed under a common energetic appearance.

The uniform gravitational field assumption is also reasonable because the height is small compared with Earth's radius. If the problem occurred over a wide orbital range, the expression for [[V]] would have to change and this would no longer be a simple uniform-potential example.

## Symbolic solution

First compute the kinetic part from speed:

{{f:energia_cinetica_traslacional}}

Then compute gravitational potential energy:

{{f:energia_potencial_gravitatoria}}

If the same system were written in coupled coordinates, the kinetic energy would need to be prepared with the metric form:

{{f:energia_cinetica_metrica}}

With both quantities, build the Lagrangian:

{{f:lagrangiano_mecanico}}

And, for contrast, total mechanical energy:

{{f:energia_mecanica_total}}

The symbolic solution shows the conceptual difference: [[L]] does not add energies, but compares motion and configuration with sign.

If the statement asked for preparation of a Lagrange equation in a travel coordinate, this construction would be the starting point. If it only asked for conservation between two heights, then [[E]] would be the working magnitude. The same pair [[T]] and [[V]] supports two different decisions.

## Numerical Substitution

Kinetic energy:

- [[T]]=0.5*2.0*3.0^2=9.0 J.

Potential energy:

- [[V]]=2.0*9.81*0.80=15.7 J approximately.

Lagrangian:

- [[L]]=9.0-15.7=-6.7 J.

Mechanical energy:

- [[E]]=9.0+15.7=24.7 J.

## Dimensional Validation

[[T]] has unit \\(\\mathrm{kg\\cdot m^2/s^2}\\), equivalent to joule. [[V]] has unit \\(\\mathrm{kg\\cdot m/s^2\\cdot m}\\), also joule. Therefore [[L]] and [[E]] keep energy units even though they represent different operations.

## Physical Interpretation

The negative value of [[L]] does not mean that the system has negative energy. It means that, in this reference, potential energy exceeds kinetic energy. Total mechanical energy [[E]] is positive and represents the sum of both contributions.

If the cart increased speed while [[h]] remained fixed, [[T]] would grow quadratically and could exceed [[V]]. On the graph, that crossing corresponds to [[L]]=0, but not to rest or equilibrium. It is only the state where both energetic contributions have equal numerical value.

There is also a scale reading. The potential term is near 16 J and the kinetic term near 9 J, so neither contribution is negligible. A model that removed either part would lose relevant information about the state.

# Real-world example

## Context

In a classroom roller-coaster simulation, the teacher wants students to see when energy is dominated by motion and when it is dominated by height. The system records [[m]], [[v]], and [[h]] at several points along the track.

## Physical estimation

For a cart with [[m]]=250 kg at [[h]]=12 m, gravitational potential energy is about 29 kJ. If the speed there is [[v]]=8 m/s, kinetic energy is 8 kJ. The physical reading is clear: at the high part, [[V]] dominates, and speed does not yet contain most of the energy.

At a lower point, for example [[h]]=3 m with the same mass, [[V]] decreases to about 7.4 kJ. If speed rises to [[v]]=14 m/s, [[T]] becomes about 24.5 kJ. The quantitative comparison shows that energetic dominance has reversed: motion now matters more than height.

As an order of magnitude, both values are in tens of kilojoules, so the exchange is plausible for a real ride rather than a numerical artifact.

## Interpretation

The educational value is not an isolated number, but scale comparison. If the cart descends and [[h]] decreases while [[v]] increases, [[V]] is transformed into [[T]] in the ideal model. [[E]] supports conservation discussion, while [[L]] prepares the move to a Lagrangian equation if a track coordinate is chosen.

The same data table lets the teacher ask two different questions. A conservation question checks whether [[E]] remains approximately constant. A Lagrangian question requires writing [[h]] and [[v]] as functions of a track coordinate so that [[L]] has dynamical meaning.
`;export{e as default};
