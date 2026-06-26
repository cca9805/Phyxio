# Exam-type example

## Problem statement

A ceiling lamp with mass [[m]] of 12 kg is suspended by two symmetric cables. Each cable forms an angle [[theta]] of 35 degrees with the horizontal. Compute cable tension [[T]] and verify translational equilibrium.

## Data

- Suspended mass: [[m]] of 12 kg.
- Gravitational acceleration close to 9.81 m/s^2.
- Cable angle: [[theta]] of 35 degrees.
- Symmetric configuration, so both cables carry the same tension magnitude [[T]].

## System definition

The system is the lamp itself, modeled as a compact rigid body for translational static analysis. External forces acting on the system:

1. Weight force downward.
2. Left cable tension, oblique upward.
3. Right cable tension, oblique upward.

Internal material stresses are excluded because they do not affect net external force balance of the isolated body.

## Physical model

2D translational statics model with axis closure in x and y. The x-axis is horizontal and the y-axis is vertical upward.

We use:

{{f:equilibrio_traslacional_vectorial}}

{{f:equilibrio_por_componentes}}

For vertical decomposition:

{{f:descomposicion_y}}

For weight conversion:

{{f:peso_desde_masa}}

## Model justification

The model is appropriate because the problem states static conditions, acceleration is negligible, cables are idealized, and the objective is translational equilibrium diagnosis. Rotational effects are not dominant in this symmetric setup for the chosen system boundary.

## Symbolic solution

By symmetry, horizontal components cancel.

{{f:equilibrio_traslacional_vectorial}}

{{f:equilibrio_por_componentes}}

{{f:descomposicion_x}}

{{f:descomposicion_y}}

{{f:peso_desde_masa}}

Vertical balance gives:

the sum of vertical tension components must compensate total weight.

So:

the cable tension scales with load magnitude and inverse vertical projection efficiency.

## Numerical substitution

Weight:

the gravitational load is estimated near one hundred eighteen newtons.

With sine of thirty-five degrees close to 0.574:

the tension per cable is estimated in the range of one hundred three newtons.

Each cable carries about 103 N.

## Dimensional validation

In the symbolic relation above, the trigonometric factor is dimensionless, so the resulting unit remains force. Dimensional consistency is preserved.

A second dimensional check is also useful: only quantities projected along one axis should be added in that axis equation. This prevents mixing horizontal and vertical components by mistake.

## Physical interpretation

The result highlights a key geometric effect: each cable supports the load only through its vertical component. Therefore, even two cables can have high tension values when angles are shallow. This links geometry, decomposition, and static balance in a single mechanism.

# Real-world example

## Context

In an urban maintenance task, a lightweight canopy is temporarily loaded with tools of mass [[m]] of 18 kg near its free edge. A top cable contributes to support while a wall bracket provides reaction forces. The cable angle is [[theta]] of 50 degrees relative to the horizontal.

Technicians need a first-pass equilibrium check before detailed structural verification. The immediate question is whether expected [[T]] remains in a plausible safe range and whether translational force closure is physically consistent.

## Physical estimation

First, convert mass to weight with the corresponding relation. For an eighteen-kilogram load, total weight is about one hundred seventy-seven newtons. Suppose the cable carries roughly seventy percent of the vertical support while the bracket carries the remaining thirty percent. Then the cable vertical share is near one hundred twenty-four newtons.

Using a sine value near 0.766 for fifty degrees:

the expected cable tension stays around one hundred sixty newtons.

In horizontal balance, the cable horizontal component must be compensated by the bracket horizontal reaction. If that compensation is not present in measurements or model assumptions, translational equilibrium cannot be claimed.

The estimated value, around 161 N, is physically plausible for the specified mass and angle. It is also a useful design sanity check before running full finite-element or detailed stress workflows.

## Interpretation

This application emphasizes three operational lessons:

1. Translational equilibrium is axis-by-axis closure, not force counting.
2. Angle [[theta]] strongly controls required [[T]], so geometric changes can trigger rapid load growth.
3. Net force balance is the first safety filter: if x and y closure fails, downstream design calculations are built on invalid physical premises.

In professional practice, this stage is followed by moment balance, fatigue analysis, and safety factors. Still, the first consistent decision remains the same as in classroom statics: verify that resultant [[R]] is compatible with zero within measurement and modeling tolerance.

An additional professional lesson is assumption tracking. If the seventy-thirty support split changes because of assembly adjustments, the expected [[T]] changes even if the mass remains constant. Therefore, calculations should always be reported together with geometric assumptions and an uncertainty envelope.

Communication quality is also part of technical quality. A robust report does not stop at one number; it includes expected range, sensitivity to [[theta]], and recommended inspection checkpoints. This closes the loop between static equations and field-safe decisions.

This habit also improves reproducibility across teams and semesters.
