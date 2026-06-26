const e=`# Exam-type example

## Problem statement

A particle of constant mass moves in one dimension between two fixed positions during an interval from [[t1]] to [[t2]]. A candidate path [[qi]] is proposed, and the task is to explain, without solving every numerical detail, what condition it must satisfy to be the physical path within a conservative Lagrangian model. Identify [[S]], interpret [[deltaS]], and write the local criterion on [[Ri]].

## Data

- The system is described by one generalized coordinate [[qi]].
- The associated velocity is [[qdi]].
- The Lagrangian [[L]] already contains kinetic energy and the conservative interaction.
- The time endpoints [[t1]] and [[t2]] remain fixed.
- Virtual variations respect the endpoints of the path.

## System definition

The system is not defined by one isolated Cartesian force, but by a Lagrangian [[L]] evaluated on candidate paths. Each admissible path joins the same endpoints, but may have a different intermediate shape. The physical comparison is made over the complete path.

## Physical model

The action of each path is computed with:

{{f:accion_lagrangiana}}

The variational selection criterion is:

{{f:condicion_accion_estacionaria}}

Turning that criterion into a local condition gives:

{{f:residuo_variacional_euler_lagrange}}

And the conservative physical path satisfies:

{{f:ecuacion_euler_lagrange_desde_accion}}

## Model justification

The model is appropriate because the statement fixes endpoints and uses a conservative Lagrangian. This allows paths to be compared without changing the problem. If endpoints were not fixed, or if an external non-potential force were not included in [[L]], imposing [[Ri]]=0 would not be enough.

The physical reading is that [[S]] assigns a number to each candidate path. The correct path is not recognized by the absolute value of [[S]], but by the fact that a small admissible perturbation makes the first-order change [[deltaS]] vanish.

## Symbolic solution

First build the action:

{{f:accion_lagrangiana}}

Then impose stationarity:

{{f:condicion_accion_estacionaria}}

That condition requires the local residual:

{{f:residuo_variacional_euler_lagrange}}

Finally, for a conservative system without external generalized force, impose:

{{f:ecuacion_euler_lagrange_desde_accion}}

The solution does not need the concrete form of [[L]] to explain the structure. It obtains the filter that any physical path must pass.

## Numerical substitution

Suppose a candidate path gives an action of order 12 J s on the interval, and a nearby path gives 12.03 J s when a small variation amplitude is introduced. That isolated datum does not prove stationarity; one must check whether the linear change disappears as the variation amplitude tends to zero.

If instead the symbolic residual gives [[Ri]]=0 at every instant of the interval, the path passes the local test. Numerical substitution is a scale control, but the main physical criterion remains cancellation of [[deltaS]] and of the variational residual.

## Dimensional validation

[[L]] has joule units and the time differential contributes seconds, so [[S]] has unit J s. The first variation [[deltaS]] keeps that unit. The residual [[Ri]] has the unit of the generalized force associated with [[qi]], which may be newton if [[qi]] is a length or torque if [[qi]] is an angle.

## Physical interpretation

The result means that the physical path is not just any curve joining the endpoints. It is a curve for which admissible virtual deviations do not improve or worsen action to first order. This idea is stronger than saying that the path is the shortest or the lowest-energy one.

It also shows why Lagrange's equations have physical authority. They are not a disconnected recipe: they are the local expression of a global principle. If a student computes [[Ri]] and obtains something nonzero, the physical path of the model has not been found.

# Real-world example

## Context

A teacher wants to introduce the simple pendulum without starting from tension and weight components. The motion is described through an angular coordinate [[qi]], and a Lagrangian [[L]] is built from effective rotational kinetic energy and gravitational potential energy.

## Physical estimation

For small oscillations, motion takes times of order one second and energies may range from tenths to units of joules in a laboratory setup. Therefore [[S]] may be of order J s. That value is not interpreted as stored energy; it indicates the scale of comparison between angular paths.

If a tested angular path does not respect endpoints, it is outside the admissible set. If it respects them but gives a nonzero residual [[Ri]], it still does not represent physical motion. The estimate helps detect absurd results, such as huge actions for a small pendulum without large speeds.

## Interpretation

The real application is didactic: the teacher can show that the pendulum is not solved by choosing a nice-looking curve for the angle. One writes [[L]], forms [[S]], imposes [[deltaS]]=0, and the equation of motion appears. The string tension does not need to be solved as the main unknown because the angular coordinate already incorporates the constraint.

Students learn that a good coordinate reduces the problem and that the variational principle explains why this reduction is legitimate. Later, when studying Lagrange's equations, they will recognize the local formula as the operational consequence of this global criterion.
`;export{e as default};
