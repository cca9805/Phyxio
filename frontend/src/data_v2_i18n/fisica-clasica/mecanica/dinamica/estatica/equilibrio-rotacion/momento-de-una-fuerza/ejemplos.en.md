# Exam-type example

## Problem statement

A force [[F]] = 40 N is applied at the end of a wrench at a radial distance [[r]] = 0.30 m from the axis of a nut. The force forms an angle [[theta]] = 60° with the radius from the axis to the point of application. Compute the perpendicular arm [[d_perp]], the torque [[tau]], and explain what would change if the force were applied perpendicularly.

## Data

| Quantity | Value |
|---|---|
| [[F]] | 40 N |
| [[r]] | 0.30 m |
| [[theta]] | 60° |

The rotation axis is the center of the nut. The torque sign is assigned later according to rotation sense; the magnitude calculation uses positive force and distances.

## System definition

The system studied is the wrench under one external force about the nut axis. No other forces are being summed and no equilibrium condition is being checked. The goal of the leaf is to measure the rotational contribution of one force.

## Physical model

The direct torque form uses the perpendicular arm:

{{f:torque_perpendicular_definition}}

If the perpendicular arm is not known, it is obtained from geometry:

{{f:lever_arm_relation}}

Combining force, radial distance, and angle gives the trigonometric form:

{{f:torque_trigonometric_definition}}

## Model justification

The model is valid because the force acts in one plane and the axis is clearly defined. The distance [[r]] is measured from the axis to the point of application, while [[theta]] is the angle between force and radius, not the angle with the ground. Since the force is not perpendicular, [[d_perp]] must be smaller than [[r]].

## Symbolic solution

First compute [[d_perp]] as the part of [[r]] that truly acts as the turning arm. Then multiply that arm by [[F]] to obtain [[tau]]. The same reading can be made directly with the trigonometric formula: the sine of [[theta]] reduces or increases rotational effectiveness according to force direction.

If [[theta]] were 90°, the sine would be one and the perpendicular arm would equal [[r]]. If [[theta]] were 0°, the line of action would pass through the axis and torque would vanish.

## Numerical substitution

With [[theta]] = 60°, the sine is approximately 0.866. Therefore [[d_perp]] = 0.30 m times 0.866, about 0.260 m. The torque is [[tau]] = 40 N times 0.260 m, approximately 10.4 N m.

If the force were applied perpendicularly with the same [[F]] and [[r]], the torque would be 12 N m. The difference does not come from changing the force, but from changing the effective arm.

## Dimensional validation

The perpendicular arm [[d_perp]] is measured in meters. The torque [[tau]] is measured in N m because it combines force in newtons with distance in meters. The result should not be expressed only in N or only in m.

The physical validation is also coherent: because the force is not perpendicular, the 10.4 N m torque is smaller than the maximum possible 12 N m for that distance and force.

## Physical interpretation

The result indicates that the force has a significant but not maximum turning tendency. Part of the force is oriented less effectively because it does not act perpendicular to the radius. The wrench does not “feel” only the 40 N force; it responds to that force applied with a specific geometry.

The qualitative interpretation is observable: pushing the wrench more perpendicularly would make rotation easier without increasing the force. Pushing it more along the handle would reduce [[d_perp]] and could make a large force produce little torque.

# Real-world example

## Context

A person tries to open a door by pushing near the edge. The door rotates about the hinges, which act as the axis. The hand force may have the same magnitude in different attempts, but torque changes if the distance to the hinges or the pushing direction changes.

## Physical estimation

If the hand applies about 25 N at 0.80 m from the hinges and pushes almost perpendicularly, the expected torque is near 20 N m. If the person pushes at 30° relative to the radius, the effective arm is cut in half and torque drops to about 10 N m. The difference is due to [[theta]] and [[d_perp]], not to a change in [[F]].

A useful estimate is to compare both attempts before calculating exactly. The perpendicular push uses almost the whole 0.80 m distance as effective arm. The 30° push uses only about 0.40 m. With the same applied force, the second attempt should feel roughly half as effective. If a calculation gave the same [[tau]] in both cases, the angle effect would have been ignored.

## Interpretation

The application shows why torque is both a geometric and dynamic quantity. Force supplies intensity, but geometry decides how much of that intensity produces rotation. In a door, wrench, or handle, increasing [[r]] or making the force more perpendicular increases [[tau]] without necessarily changing the applied force.

## Checklist

1. Is the rotation axis defined?
2. Is [[r]] measured from that axis?
3. Is [[theta]] the angle between force and radius?
4. Has [[d_perp]] been computed when the force is oblique?
5. Is [[tau]] expressed in N m and interpreted as turning tendency?
