# Exam-type example

## Problem statement

A small sphere of mass [[m]] moves through a viscous fluid along a horizontal guide. In the measured interval, the lab confirms that drag can be modeled as linear with respect to relative speed [[v]]. The task is to estimate drag-force magnitude [[F_d]] at two speed conditions and to interpret what characteristic time [[tau]] means for motion response.

This is not only a number-crunching exercise. The assessment checks whether you can distinguish instant resistive reading ([[F_d]]) from dynamic adjustment reading ([[tau]]), and whether you can justify when the linear model is appropriate.

## Data

An experimentally calibrated value of [[b]] is provided for the setup. Mass [[m]] is known and stable during the whole experiment. Two relative speeds are measured, [[v]]_1 and [[v]]_2, with [[v]]_2 approximately twice [[v]]_1.

Protocol notes:

- Fluid temperature remains nearly constant.
- System geometry does not change in the measured segment.
- Instrument noise is low in the selected speed window.

These conditions matter because they support the approximation of nearly constant [[b]]. Without that approximation, direct comparison can lose physical meaning.

## System definition

System: sphere plus translational motion along one main axis.

Environment: viscous fluid at rest in the laboratory frame.

Leaf-core quantities:

- [[F_d]]: magnitude of fluid resistive force.
- [[b]]: effective resistive slope in the working range.
- [[v]]: relative speed between sphere and fluid.
- [[m]]: inertial mass.
- [[tau]]: characteristic adjustment time.

In the horizontal free-body diagram, resistive force opposes motion. This solution uses magnitudes in substitution and restores direction in final interpretation.

## Physical model

Linear drag constitutive relation:

{{f:arrastre_lineal_estandar}}

Characteristic-time relation:

{{f:tiempo_relajacion_lineal}}

These two equations answer two complementary questions: instantaneous resistance level and dynamic adaptation pace.

## Model justification

The linear model is selected for three physical and experimental reasons:

1. In the measured [[v]] window, the calibrated [[F_d]]-[[v]] trend is near-linear.
2. Parameter [[b]] remains stable within reported tolerance.
3. The exercise objective is linear-mechanism interpretation, not nonlinear-regime characterization.

Using [[tau]] is also necessary because the question asks for dynamic meaning, not only force estimation.

## Symbolic solution

For each speed condition:

{{f:arrastre_lineal_estandar}}

Compute [[F_d]]_1 and [[F_d]]_2 by substituting [[v]]_1 and [[v]]_2 with the same [[b]].

Then compute the time scale:

{{f:tiempo_relajacion_lineal}}

Using [[m]] and [[b]] yields [[tau]], interpreted as the characteristic damping-adjustment time.

Main symbolic consistency checks:

- If [[v]]_2 = 2 [[v]]_1 and [[b]] is constant, then [[F_d]]_2 should be about 2 [[F_d]]_1.
- If [[m]] increases at fixed [[b]], [[tau]] increases.
- If [[b]] increases at fixed [[m]], [[tau]] decreases.

These checks validate physical coherence of the procedure.

## Numerical substitution

With representative bench values, moving from [[v]]_1 to [[v]]_2 yields proportional growth in [[F_d]]. The ratio [[F_d]]_2/[[F_d]]_1 remains close to [[v]]_2/[[v]]_1, as required by linear drag.

The computed [[tau]] follows from the ratio [[m]]/[[b]]. A relatively large mass in a moderately viscous setup gives larger [[tau]] and slower adjustment. A more resistive medium (larger [[b]]) gives smaller [[tau]] and faster adjustment.

Unit discipline is mandatory. Keeping [[v]] in km/h or [[m]] in g without conversion can seriously distort [[b]] or [[tau]] even when the calculator output looks plausible.

## Dimensional validation

Check 1: in the linear relation, [[b]] multiplied by [[v]] must produce N for [[F_d]].

Check 2: in the time-scale relation, [[m]] divided by [[b]] must produce s for [[tau]].

Check 3: physical domain. Parameters should remain nonnegative in this context, and results must preserve mechanical meaning.

Check 4: trend coherence. If [[v]] rises at fixed [[b]], [[F_d]] cannot decrease. If [[b]] rises at fixed [[m]], [[tau]] cannot increase.

These checks prevent acceptance by algebraic inertia.

## Physical interpretation

The physical reading has two layers.

Instant layer: within the linear domain, [[F_d]] grows proportionally with [[v]]. Therefore, doubling speed does not quadruple resistance in this leaf; it approximately doubles it.

Temporal layer: [[tau]] summarizes how quickly the system yields to medium dissipation. Small [[tau]] indicates rapid damping adjustment; large [[tau]] indicates persistent inertia.

A complete conclusion must connect both layers: the model explains instantaneous resistive force and dynamic adjustment pace under the same validity assumptions.

# Real-world example

## Context

A bioengineering lab studies microspheres carrying markers through a viscous channel. The team must tune advance speed without exceeding actuator stress limits. The operating window is intentionally selected to remain inside a regime where linear drag is stable and useful.

Two operating settings are compared: one with higher target speed and one with lower speed but higher control margin. A robust decision requires more than speed values; it requires [[F_d]] estimation plus [[tau]] reading to anticipate response to command changes.

## Physical estimation

First, [[b]] is calibrated from a short reference run, checking that the [[F_d]]-[[v]] trend remains near-linear.

Then for each speed target, drag force is estimated with:

{{f:arrastre_lineal_estandar}}

Next, using microsphere [[m]] and calibrated [[b]], characteristic time is estimated with:

{{f:tiempo_relajacion_lineal}}

If the faster setting drives [[F_d]] beyond actuator margin, it is rejected even if nominal travel time is shorter. If the slower setting keeps both [[F_d]] and [[tau]] in a stable-control range, it becomes preferable for continuous operation.

This procedure shows the operational value of the leaf: decisions are based on mechanism plus time-scale reading, not on intuition alone.

## Interpretation

The real case confirms three core messages:

1. [[F_d]] depends on both [[v]] and [[b]]; it cannot be inferred only from distance or elapsed time.
2. [[tau]] provides information that instantaneous force calculation alone cannot provide.
3. Linear-model validity requires condition control; if systematic curvature appears in [[F_d]]-[[v]], strategy must be revised.

Didactically, this links theory and decision: use [[F_d]], [[b]], [[v]], [[m]], and [[tau]] together to choose a physically coherent and operationally safe configuration.