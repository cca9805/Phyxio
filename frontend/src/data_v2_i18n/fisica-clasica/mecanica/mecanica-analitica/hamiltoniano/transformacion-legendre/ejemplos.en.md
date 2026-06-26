# Exam-type example

## Problem statement

A particle of mass [[m]] moves in one dimension under a potential energy [[V]] that depends on the coordinate [[qi]]. Its Lagrangian is quadratic in the generalized velocity [[qdi]]. Build the conjugate momentum [[p]], invert the velocity-momentum relation, and write the Hamiltonian [[H]].

## Data

- [[m]] = 2.0 kg.
- [[qdi]] = 3.0 m/s in the state considered.
- [[V]] = 5.0 J.
- The coordinate [[qi]] is Cartesian, so [[qdi]] has the units of ordinary velocity.

## System Definition

The system is reduced to one degree of freedom. The Lagrangian description uses [[qi]] and [[qdi]], whereas the Hamiltonian description must use [[qi]] and [[p]]. The aim is not to solve a full trajectory, but to transform the dynamical variables of the state correctly.

## Physical Model

We adopt the regular quadratic model. The effective mass [[m]] is constant and the potential energy [[V]] does not depend on [[qdi]]. Under these hypotheses, the slope [[DLv]] of the Lagrangian with respect to velocity defines a conjugate momentum proportional to velocity.

## Model justification

The model is valid because no explicit friction is present, no velocity-dependent potential is introduced, and the chosen coordinate does not generate a variable effective mass. The Legendre transformation is regular: each [[qdi]] gives one [[p]], so the map can be inverted.

## Symbolic solution

First write the quadratic Lagrangian:

{{f:lagrangiano_cuadratico}}

The conjugate momentum is defined as the slope of [[L]] with respect to [[qdi]]:

{{f:momento_conjugado_legendre}}

In this case that slope has the simple form:

{{f:momento_cuadratico}}

The velocity-momentum inversion is:

{{f:velocidad_desde_momento}}

The general regularity condition is summarized by:

{{f:condicion_regularidad_legendre}}

Finally, the Legendre transformation builds the Hamiltonian:

{{f:hamiltoniano_legendre}}

For the conservative quadratic case:

{{f:hamiltoniano_cuadratico}}

## Numerical Substitution

With [[m]] = 2.0 kg and [[qdi]] = 3.0 m/s, the conjugate momentum is 6.0 kg m/s. The kinetic energy written with momentum is 9.0 J because the square of the momentum is divided by twice the mass. Adding [[V]] = 5.0 J gives a Hamiltonian of 14.0 J.

The same computation from the Lagrangian gives a value of four joules for [[L]]: kinetic energy exceeds potential energy, but both still belong to the same model. Forming [[H]] with the conjugate term and removing the Lagrangian recovers fourteen joules. Both routes agree because the transformation has been closed correctly.

## Dimensional Validation

The unit of [[p]] is kg m/s. Multiplying [[p]] by [[qdi]] gives kg m^2/s^2, that is, joule. [[L]], [[V]], and [[H]] are also measured in joules. Dimensional consistency confirms that momentum has not been confused with velocity and that no mass factor has been omitted.

## Physical Interpretation

The result does not merely say that the total energy is 14.0 J. It says that the same state can be described in two equivalent ways: with velocity in configuration space or with momentum in phase space. Here [[W]] is equivalent to the effective mass and is nonzero, so the regularity condition is satisfied. The transformation moves from an operational description, centered on rate of change, to a structural description, centered on the dynamical state.

If another state had the same [[qi]] but [[p]] = -6.0 kg m/s, its [[H]] would be the same in this model if [[V]] did not change, but the direction of evolution would be opposite. This distinction is one reason why phase space is more informative than a position-only description.

The key interpretation is that [[p]] is not added as an external datum: it is born from the slope of [[L]]. The result therefore shows physical continuity between two languages. The Lagrangian language keeps the intuition of velocity and trajectory; the Hamiltonian language keeps enough information to reconstruct evolution from a phase-space point. If the student does not check this equivalence, it is easy to think that a new energy has been invented, when the natural variable of description has actually been changed.

# Real-world example

## Context

In the analysis of a mechanical oscillator, such as a mass attached to an ideal spring, the Legendre transformation allows the equation of motion to be turned into a phase portrait. A teacher can show that each point in the plane formed by [[qi]] and [[p]] represents a complete state.

## Physical estimation

For a small mass, a moderate momentum corresponds to a relatively large velocity. For a large mass, the same [[p]] implies a smaller velocity. This difference appears immediately when using the inversion between [[p]] and [[qdi]]. The Hamiltonian separates kinetic energy, written with [[p]], and potential energy [[V]], written with position.

As a numerical estimate, if two oscillators have the same conjugate momentum but one has twice the effective mass of the other, the reconstructed velocity of the second is reduced by half. The kinetic energy associated with that same momentum is also reduced, because the momentum is distributed over more inertia. This reading lets one anticipate whether the phase portrait will be wider in momentum or more sensitive in velocity before solving the differential equation.

## Interpretation

The real application is both didactic and technical. Instead of first integrating the time trajectory, one can study the geometry of motion in phase space. The Legendre transformation is the step that makes this representation possible without losing the physical information contained in the Lagrangian.

In a classroom, this example helps separate three ideas that are often mixed: computing energy, changing variables, and deciding whether a model is regular. In a laboratory, it helps interpret position and velocity data as phase states that can be compared through [[H]]. In both cases, the transformation is not mathematical decoration, but a test that the model preserves information when moving from velocities to momenta.
