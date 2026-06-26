# Exam-type example

## Problem statement

A test vehicle runs on a straight track, and the team must estimate drag force at two operating points to verify whether propulsion has enough margin. The flow regime in the selected range is known to be well approximated by quadratic drag. The task is to compute [[F_d]] for two values of [[v]] and justify why the change cannot be interpreted as linear.

## Data

Available inputs include air density [[rho]], prototype drag coefficient [[C_d]], and frontal area [[A]]. A calibrated value of [[c]] is also provided so that two solution routes can be compared. The two operating speeds are [[v]]_1 and [[v]]_2, with [[v]]_2 close to twice [[v]]_1.

The explicit objective is to compare a reduced route using [[c]] against a bridge route using [[rho]], [[C_d]], and [[A]], and to verify consistency within experimental tolerance.

## System definition

The system is the vehicle treated as a rigid body in horizontal translation. Slope variation and crosswind coupling are neglected in this exam version. The fluid reference is still air in the lab frame.

In the horizontal free-body reading, propulsion must compensate [[F_d]] plus additional terms not modeled here. This is acceptable because the exam focus is quadratic drag interpretation, not full drivetrain closure.

## Physical model

Reduced operational law:

{{f:arrastre_cuadratico_reducido}}

Bridge law for coefficient interpretation:

{{f:coeficiente_cuadratico_equivalente}}

Together, these equations connect fast force estimation with physical meaning of [[c]].

## Model justification

The quadratic model is selected for three reasons. First, the speed range is high enough for nonlinearity to be visible in measurements. Second, the lab reports stable [[C_d]] in the working window, so regime drift is limited. Third, the exam is designed to test scaling reasoning, and quadratic scaling is the conceptual core of this leaf.

The model is also useful for design interpretation. If [[F_d]] rises with the square of [[v]], then geometry improvements become increasingly valuable at higher speed.

## Symbolic solution

Route 1, using calibrated [[c]]:

{{f:arrastre_cuadratico_reducido}}

Compute [[F_d]]_1 at [[v]]_1 and [[F_d]]_2 at [[v]]_2.

Route 2, reconstructing [[c]]:

{{f:coeficiente_cuadratico_equivalente}}

Then recompute [[F_d]] values through the reduced law and compare with route 1.

The symbolic control step is ratio analysis:

- speed ratio: [[v]]_2/[[v]]_1
- force ratio: [[F_d]]_2/[[F_d]]_1

In ideal quadratic behavior, the force ratio approaches the square of the speed ratio.

## Numerical substitution

With representative lab values, the lower speed produces moderate drag and the higher speed produces clearly larger drag. When [[v]]_2 is near twice [[v]]_1, force moves toward a fourfold increase, with small deviations explained by rounding and measurement uncertainty.

Using the bridge route, reconstructed [[c]] agrees with calibrated [[c]] within tolerance. That agreement confirms physical consistency: [[c]] is not an arbitrary fitting number when [[rho]], [[C_d]], and [[A]] are defined consistently.

## Dimensional validation

Dimensional checks require [[F_d]] in N and [[c]] in units compatible with force divided by speed squared. In the bridge relation, [[rho]] contributes density, [[A]] contributes area, and [[C_d]] is dimensionless, preserving consistency.

Domain checks are also required: [[c]] must remain nonnegative, and [[v]] is treated as nonnegative speed in this scalar formulation.

## Physical interpretation

The result shows that speed increase has nonlinear drag cost. At high speed, geometric improvements can reduce force demand significantly, while speed increases without redesign can quickly overload propulsion margin.

A second interpretation is comparative: equal [[v]] does not guarantee equal [[F_d]] if [[A]], [[rho]], or [[C_d]] differ. This is why the leaf is not merely about one force formula; it is about identifying which design variable should be changed first.

# Real-world example

## Context

A road-cycling team evaluates posture options for a short time trial. Telemetry provides speed traces and rough power estimates. The coach needs a mechanism-based interpretation to choose between two configurations: upright control posture and low aerodynamic posture.

Mass and pedaling mechanics are similar in both cases. The dominant change is frontal area [[A]], with a secondary change in [[C_d]]. Air density [[rho]] is nearly constant during the test window.

## Physical estimation

First, estimate equivalent coefficient for each posture:

{{f:coeficiente_cuadratico_equivalente}}

Then estimate drag force at the same target [[v]]:

{{f:arrastre_cuadratico_reducido}}

The low posture reduces [[A]], therefore reducing [[c]] and shifting the [[F_d]]-[[v]] curve downward. The force difference is moderate at medium speed but becomes much larger near the high-speed end. This matches the quadratic scaling expected from the model.

Operationally, the team concludes that the low posture gives accumulated energetic benefit on fast straight segments. On technical segments, upright posture may still be preferred for handling, accepting higher [[F_d]]. The decision is therefore physically informed, not purely numerical.

## Interpretation

This real case confirms two core messages. First, drag reduction is not only about lowering speed; it is often about improving [[A]] and [[C_d]] so that the same speed requires less resistance compensation. Second, interpreting [[c]] links field measurements with actionable setup decisions without requiring full CFD for each iteration.

The comparison also differentiates this leaf from its siblings. This leaf does not primarily classify regimes or solve full terminal-velocity closure. Its focus is practical reading of nonlinear [[F_d]] growth with [[v]] and its design implications.
