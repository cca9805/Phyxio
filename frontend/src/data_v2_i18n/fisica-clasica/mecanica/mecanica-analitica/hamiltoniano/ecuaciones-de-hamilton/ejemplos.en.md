# Exam-type example

## Problem statement

A mechanical mode is described with canonical coordinate [[qi]], conjugate momentum [[p]], effective mass [[m]], and stiffness [[k]]. Its Hamiltonian is the quadratic oscillator Hamiltonian. Obtain Hamilton's equations, compute [[qd]] and [[pd]] for a concrete state, and interpret the phase flow.

## Data

- [[m]] = 2.0 kg.
- [[k]] = 18 N/m.
- [[qi]] = 0.30 m.
- [[p]] = 4.0 kg m/s.
- The system has no explicit time dependence, so [[Ht]] is zero.

## System Definition

The system is represented by a phase point. The coordinate [[qi]] gives configuration and [[p]] gives the conjugate state of motion. The task is not to integrate the entire trajectory, but to build the instantaneous vector that tells where the point will move.

## Physical Model

We use a conservative harmonic oscillator with constant effective mass and linear stiffness. The Hamiltonian [[H]] separates kinetic energy written with [[p]] and elastic potential energy written with [[qi]]. Under these hypotheses, the variables are canonical and Hamilton's equations apply directly.

## Model justification

The model is appropriate because stiffness is constant, potential energy is quadratic, and there is no dissipative force or external time dependence. Physical validity requires [[qi]] to be measured from equilibrium and [[p]] to be the conjugate momentum compatible with that coordinate. If those conditions failed, the slopes of [[H]] would not have the canonical reading used here.

## Symbolic solution

The Hamiltonian field begins with the first equation:

{{f:ecuacion_hamilton_q}}

The second component of the field is obtained with:

{{f:ecuacion_hamilton_p}}

If the system had several degrees of freedom, each canonical pair would follow the indexed form:

{{f:ecuaciones_hamilton_indexadas}}

For the oscillator one uses:

{{f:hamiltoniano_oscilador}}

The coordinate velocity becomes:

{{f:qdot_oscilador}}

The momentum evolution becomes:

{{f:pdot_oscilador}}

Hamiltonian conservation is evaluated with:

{{f:conservacion_hamiltoniano}}

## Numerical Substitution

With [[p]] = 4.0 kg m/s and [[m]] = 2.0 kg, the coordinate advances with canonical speed 2.0 m/s. With [[k]] = 18 N/m and [[qi]] = 0.30 m, momentum changes at -5.4 N. The negative sign indicates that momentum decreases because the state is displaced toward the positive side of the coordinate.

The value of [[H]] is 4.0 J from the kinetic part and 0.81 J from the potential part, for a total of 4.81 J. Since [[Ht]] is zero, that value is conserved during ideal evolution, although coordinate and momentum continue to change.

## Dimensional Validation

The relation [[p]] divided by [[m]] produces velocity units. The relation [[k]] multiplied by [[qi]] produces newtons, the units of time rate of momentum. [[H]] is expressed in joules and [[dHdt]] in watts. The units clearly separate three ideas: energy value, coordinate flow, and momentum flow.

## Physical Interpretation

The physical reading is causal, not merely numerical. Positive momentum makes the coordinate increase; positive displacement makes momentum decrease through the restoring effect. The phase point therefore moves toward a region with larger coordinate but smaller momentum. That combination is the characteristic rotation of an oscillator.

Conservation of [[H]] does not mean that the system is at rest. It means the point moves on a level curve. In this example, the state exchanges kinetic and potential energy while maintaining the total value of the Hamiltonian function.

The complete didactic reading is that the Hamiltonian provides two pieces of information at once. As a value, it checks an energy scale and a conservation statement. As a function, it provides slopes that direct motion. If only the number 4.81 J is conserved, the most important part of the formalism is lost: knowing where the state moves in the next instant. That is why the correct result should be expressed as a phase vector, not only as total energy.

# Real-world example

## Context

A sensor measures the displacement of a small mass on an elastic platform. To predict immediate evolution, knowing where the mass is located is not enough; one also needs its momentum. The Hamiltonian formalism represents both data as a phase point and computes the evolution vector.

## Physical estimation

If [[p]] is doubled while [[m]] is fixed, [[qd]] also doubles. If [[qi]] is doubled while [[k]] is fixed, the magnitude of [[pd]] also doubles and points with opposite sign. This estimate makes it possible to anticipate which variable dominates the motion: large momentum produces fast coordinate advance; large displacement produces strong momentum change.

## Interpretation

In a laboratory, this reading helps decide whether the system is crossing equilibrium with large velocity, approaching an extreme, or returning from the extreme. In teaching, it shows why a phase portrait contains more information than an isolated position-time graph. The goal of the method is to read local dynamics from slopes of [[H]], not only to compute energy.

It also serves as a quality check for data. If the sensor gives positive displacement and the elastic model predicts decreasing momentum, but the experimental estimate shows sustained momentum increase, then an external force is missing, a sign is wrong, or the system is no longer in the linear regime. The real application is not obtaining an exact number, but comparing direction of motion, force scale, and expected conservation.
