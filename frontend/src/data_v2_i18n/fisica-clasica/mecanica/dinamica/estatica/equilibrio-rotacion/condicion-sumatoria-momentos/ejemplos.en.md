# Exam-type example

## Problem statement

A beam can rotate about a fixed axis. On one side, [[F1]] = 60 N is applied at a distance [[r1]] = 0.50 m with [[theta1]] = 90°. On the other side, a force [[F2]] will be applied at a distance [[r2]] = 0.75 m, also perpendicular, with [[theta2]] = 90°. Compute [[tau1]], determine the balancing force [[Feq]], check the condition on [[tau_net]], and explain why equalizing forces is not enough.

## Data

| Quantity | Value |
|---|---|
| [[r1]] | 0.50 m |
| [[F1]] | 60 N |
| [[theta1]] | 90° |
| [[r2]] | 0.75 m |
| [[theta2]] | 90° |

The positive convention is the rotation produced by the first force. The second force will be applied in the opposite sense to compensate rotation.

## System definition

The system is the beam under two main torque contributions about the same axis. The task is not analyzing net force or center-of-mass motion; the goal is only to check the rotational equilibrium condition. All distances are measured from the pivot, not from the ends of the beam.

## Physical model

The first torque is obtained with:

{{f:torque_1_definition}}

The second torque is obtained with:

{{f:torque_2_definition}}

The central condition of the leaf combines both torques:

{{f:net_torque_condition}}

If the force that cancels net torque is required, use:

{{f:balancing_force_formula}}

## Model justification

The model is valid because the two forces act in one plane, the arms are measured from the same axis, and the sign convention is fixed before summing. Since both forces are perpendicular to the radius, the angular sine is maximal. The second force does not have to equal [[F1]], because its arm [[r2]] is larger than [[r1]].

## Symbolic solution

First, compute [[tau1]] from the known force. Then impose rotational equilibrium, so [[tau_net]] must vanish. With the chosen convention, the second torque must have the same magnitude as the first and the opposite sense. The required force magnitude is obtained as [[Feq]], using the arm and angle available for the second force.

If the actual [[F2]] equals [[Feq]], then [[tau2]] cancels [[tau1]]. If [[F2]] is smaller, a net torque remains in the sense of the first force; if it is larger, the opposite sense dominates.

## Numerical substitution

The first contribution is 30 N m because the 60 N force acts with a 0.50 m arm and a perpendicular angle. To balance from 0.75 m, the second force must produce the same torque in the opposite sense. The required force is [[Feq]] = 40 N.

With that force, [[tau2]] also has magnitude 30 N m. Combining both signs gives [[tau_net]] = 0 N m. The beam satisfies the torque-sum condition about the chosen axis.

## Dimensional validation

The torques [[tau1]], [[tau2]], and [[tau_net]] have units of N m. The balancing force [[Feq]] is in N because the torque to be compensated is divided by an effective arm. The result cannot be given in N m, because the requested quantity is a force.

The physical validation is also clear: because [[r2]] is larger than [[r1]], the balancing force should be smaller than [[F1]]. The result of 40 N matches that reading.

## Physical interpretation

The beam is not balanced because the forces are equal; it is balanced because opposite torques cancel. The first force is larger but acts at a shorter distance. The second force is smaller but acts with a longer arm. The condition [[tau_net]] = 0 summarizes that compensation.

This example shows the difference between computing one isolated torque and applying the torque sum. The value of [[tau1]] alone describes one turning tendency; comparison with [[tau2]] decides whether that tendency is canceled.

The important interpretation is causal: the system does not “choose” the larger force, but the larger torque about the axis. Moving the point of application of the second force would change the result even if the force remained 40 N. Changing the angle would also change it because it would reduce the effective arm. Therefore the rotational equilibrium condition is a relation between geometry and force, not an arithmetic comparison of loads.

# Real-world example

## Context

A person uses a wrench to loosen a nut while friction or resistance opposes the rotation. The practical question is whether the applied force is enough to cancel or exceed the resisting torque. The axis is the center of the nut, and each force must be measured about that axis.

## Physical estimation

Before calculating, one estimates that increasing the wrench arm reduces the required force. If a resistance produces about 25 N m and the hand acts at 0.50 m with a nearly perpendicular direction, a force near 50 N can compensate the resisting rotation. If the hand pushes almost along the wrench, the angle reduces the effective arm and more force is required.

The quantitative reading uses the same quantities: [[r1]], [[F1]], and [[theta1]] for one contribution; [[r2]], [[F2]], and [[theta2]] for the other. The decision is made by reading [[tau_net]], not by comparing forces in isolation.

## Interpretation

The real application shows that rotational equilibrium depends on axis, arm, and angle. If [[tau_net]] is zero, there is no net rotation. If the applied torque exceeds the resisting torque, the nut starts to rotate. If it remains below, resistance dominates. The practical tool is choosing a geometry that makes [[Feq]] reachable with a reasonable force.

## Checklist

1. Are all torques computed about the same axis?
2. Is the positive rotation sense fixed?
3. Are the arms [[r1]] and [[r2]] measured from the pivot?
4. Are [[theta1]] and [[theta2]] angles measured relative to the radius?
5. Does [[tau_net]] vanish if equilibrium is claimed?
