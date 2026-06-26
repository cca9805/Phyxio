# Exam-type example

## Problem statement

A rotating test platform runs at constant angular speed. A body of mass [[m]] is fixed at radius [[r]] from the axis. The task is to compute the centrifugal reading [[F_cf]] and the centrifugal acceleration [[a_cf]] in the rotating frame, compare the angular and tangential formulations, and explain why this term must not be confused with the real centripetal interaction provided by the support.

In a second part, the operator only has tangential speed [[v]] instead of direct [[omega]] readout. The solution must still recover the same [[F_cf]]. A final conceptual paragraph is required to interpret the vector form and the outward apparent direction in the rotating observer description.

## Data

Base scenario:

- [[m]] = 2.0 kg
- [[r]] = 0.40 m
- [[omega]] = 6.0 rad/s

Alternative measurement path:

- [[v]] measured at rim level
- Same geometry and same rotating frame

Operational assumptions:

- Steady rotation
- Approximately constant radius
- No dominant structural deformation in the arm

## System definition

Physical system: a point-like body attached to a rotating support around a vertical axis. The observer is attached to the platform, so the analysis is done in a non-inertial rotating frame.

State variables:

- Geometry: [[r]]
- Inertial scale: [[m]]
- Angular regime: [[omega]]
- Tangential equivalent: [[v]]

Output magnitudes:

- [[F_cf]] as outward apparent inertial reading
- [[a_cf]] as per-unit-mass reading

## Physical model

The model is uniform rotation with well-defined radius and circular trajectory. In this framework, the centrifugal term is interpreted as an apparent outward inertial correction required for equations written by the rotating observer.

Core leaf relations:

{{f:fuerza_centrifuga_omega}}

{{f:fuerza_centrifuga_velocidad}}

{{f:relacion_tangencial}}

{{f:aceleracion_centrifuga}}

{{f:forma_vectorial_conceptual}}

## Model justification

The model is justified because the regime is stable, the axis and radius are clear, and the learning goal is the rotating-frame interpretation. If the goal were an inertial-frame force balance, the main interaction would be centripetal support force instead of centrifugal apparent term.

Using both [[omega]] and [[v]] routes is not redundant. It provides internal consistency checks and makes the method robust to different instrumentation. In lab practice, this dual path often prevents unit mistakes and frame-interpretation mistakes.

## Symbolic solution

Angular-force route:

{{f:fuerza_centrifuga_omega}}

Acceleration route:

{{f:aceleracion_centrifuga}}

Tangential bridge and force route:

{{f:relacion_tangencial}}

{{f:fuerza_centrifuga_velocidad}}

Conceptual vector reading:

{{f:forma_vectorial_conceptual}}

The symbolic chain shows linear scaling with [[m]] and [[r]], and quadratic scaling with [[omega]] or [[v]], depending on parameterization.

## Numerical substitution

1) [[F_cf]] from angular route:
- [[omega]]^2 = 36
- [[F_cf]] = 2.0 x 36 x 0.40 = 28.8 N

2) [[a_cf]]:
- [[a_cf]] = [[omega]]^2 [[r]] = 36 x 0.40 = 14.4 m/s^2

3) Tangential cross-check:
- [[v]] = [[omega]] [[r]] = 6.0 x 0.40 = 2.4 m/s
- [[F_cf]] = [[m]] [[v]]^2 / [[r]] = 2.0 x 5.76 / 0.40 = 28.8 N

Both routes produce the same [[F_cf]], confirming algebraic and physical coherence.

## Dimensional validation

Check 1: [[F_cf]] = [[m]] [[omega]]^2 [[r]]
- Dimensional reading: mass multiplied by acceleration yields force in N.

Check 2: [[F_cf]] = [[m]] [[v]]^2 / [[r]]
- Dimensional reading: mass times speed squared over length also yields N.

Check 3: [[a_cf]] = [[omega]]^2 [[r]]
- Dimensional reading: angular-rate squared times radius yields m/s^2.

No dimensional contradiction appears.

## Physical interpretation

[[F_cf]] = 28.8 N does not mean a new material force has appeared. It means that the rotating observer needs an outward inertial term to preserve a consistent local equation set in a non-inertial description.

The dominant mechanism is quadratic dependence on [[omega]]. That is the operational reason small speed increases can create large mechanical demand jumps. In design and safety reviews, this causal chain is the key message: speed control is usually more critical than small mass variations when the radius is fixed.

# Real-world example

## Context

In a laboratory centrifuge, each rotor has a certified speed envelope. The operator needs [[F_cf]] and [[a_cf]] estimates to keep tube-holder stress inside safe limits and to avoid excessive vibration and seal degradation.

Consider two scenarios with same mass and radius:

- Scenario A: [[omega]] = 120 rad/s, [[r]] = 0.08 m, [[m]] = 0.05 kg
- Scenario B: [[omega]] = 150 rad/s, [[r]] = 0.08 m, [[m]] = 0.05 kg

## Physical estimation

Scenario A:
- [[a_cf]] = [[omega]]^2 [[r]] = 120^2 x 0.08 = 1152 m/s^2
- [[F_cf]] = [[m]] [[a_cf]] = 0.05 x 1152 = 57.6 N

Scenario B:
- [[a_cf]] = 150^2 x 0.08 = 1800 m/s^2
- [[F_cf]] = 0.05 x 1800 = 90 N

Relative impact:
- [[F_cf]] rises from 57.6 N to 90 N, about +56%

Operational reading:
- A 25% increase in [[omega]] creates a much larger force increase due to the square law.
- This is why ramp profiles, balancing quality, and bearing state are not secondary details.
- The estimated increase is not only mathematical: it implies a concrete rise in radial demand that can push holders from nominal stress to warning regime.
- If repeated operation near this regime is expected, maintenance intervals must be reduced and balancing tolerance must be tightened.
- In practical terms, this estimate supports a go/no-go decision for speed setpoints before running full batches.

## Interpretation

The real application validates the leaf core idea: centrifugal force is a frame-dependent reading that becomes operationally useful for stress prediction and safety decisions in rotating systems.

The result should be interpreted in three coordinated layers:

1. Descriptive layer: what the rotating observer needs to represent motion.
2. Dynamical layer: what real interaction keeps circular trajectory.
3. Engineering layer: what operational limit should not be exceeded.

When those layers are mixed, conceptual errors appear. When they are separated and connected through [[m]], [[omega]], [[r]], [[v]], [[a_cf]], and [[F_cf]], the method becomes reliable and transferable to test rigs, industrial drums, and transport components under rotation.
