# Exam-type example

## Problem statement

A small sphere falls vertically through oil, and the task is to estimate its terminal speed [[v_t]] assuming that the effective drag can be modeled as linear over the observed velocity band. In a second part, the result is compared with a parachutist falling through air in order to justify why the same drag block should no longer be used.

The goal is not only to obtain two numbers, but to decide which drag law is physically coherent in each case and explain why dynamical equilibrium appears at different limiting speeds.

## Data

Case 1, sphere in oil:

- [[m]] = 0.020 kg
- [[g]] = 9.8 m/s²
- [[b]] = 0.49 N·s/m

Case 2, parachutist in air:

- [[m]] = 80 kg
- [[g]] = 9.8 m/s²
- [[rho]] = 1.2 kg/m³
- [[C_d]] = 1.1
- [[A]] = 0.70 m²

## System definition

In both cases the motion is modeled as vertical and one-dimensional. The free-body diagram contains weight downward and drag upward. Terminal speed [[v_t]] is defined as the speed at which the net force vanishes, so acceleration becomes zero.

For the oil case, the medium is highly viscous and the relevant speed band is low, so an effective model using [[b]] is a reasonable starting point. For the parachutist, air density [[rho]], shape summarized by [[C_d]], and frontal area [[A]] must be retained explicitly.

## Physical model

The first case uses the linear terminal-speed block. The second case uses the quadratic block. This comparison is part of the core lesson of the leaf: the limiting speed is not independent of the drag law.

For the linear case:

{{f:velocidad_terminal_lineal}}

For the quadratic case:

{{f:velocidad_terminal_cuadratica}}

## Model justification

The linear model is physically reasonable for the sphere in oil because the medium can be summarized by an effective coefficient [[b]] in the relevant speed interval. In this setting, the fluid reacts strongly even at relatively low speed, so the linear approximation can capture the approach to equilibrium.

For the parachutist, the interaction with air depends explicitly on [[rho]], [[C_d]], and [[A]]. Replacing that description with a single [[b]] parameter would hide the role of geometry and medium properties. The quadratic model is therefore the correct starting block.

## Symbolic solution

Linear case:

{{f:velocidad_terminal_lineal}}

Its qualitative reading is immediate: [[v_t]] increases with [[m]] and [[g]], and decreases when [[b]] grows.

Quadratic case:

{{f:velocidad_terminal_cuadratica}}

Here [[v_t]] increases with [[m]] and [[g]], but decreases when [[rho]], [[C_d]], or [[A]] increase. That structure explains why opening a parachute lowers the limiting speed so strongly.

## Numerical substitution

For the sphere in oil, the numerical evaluation gives a [[v_t]] close to 0.40 m/s.

For the parachutist, the quadratic model gives a [[v_t]] close to 41 m/s.

These values should not be compared as if they belonged to the same mechanism. Their difference expresses how medium response and drag law reshape the dynamical balance.

## Dimensional validation

In the linear model, [[m]][[g]] gives force and division by [[b]] yields a speed, so the final unit is m/s as required for [[v_t]].

In the quadratic model, the combination of [[rho]], [[C_d]], and [[A]] in the denominator with [[m]] and [[g]] in the numerator leads to a velocity scale once the square root is taken. This dimensional check is essential because it distinguishes a physically usable expression from a merely plausible algebraic form.

## Physical interpretation

The correct interpretation is that terminal speed depends on how the medium builds enough resistive force to balance weight. In the sphere case, equilibrium appears early because the viscous fluid brakes efficiently at low speed. In the parachutist case, a much larger speed is required before air drag can balance the system weight.

The example also shows why [[A]] and [[C_d]] are design variables. Increasing either of them lowers [[v_t]] in the quadratic model, which is exactly the physical role of a parachute: increase interaction with the air so that a safe limiting speed is reached.

# Real-world example

## Context

A rescue engineering team studies two descent configurations for a sensitive equipment capsule: a compact shell and a shell with deployable fins. The challenge is not only to estimate a final speed, but to determine which configuration reduces impact risk without exceeding mass constraints.

The compact capsule has lower [[A]] and likely lower [[C_d]], so its [[v_t]] is expected to be larger if all other conditions remain the same. The deployable configuration increases effective area and changes the drag pattern.

## Physical estimation

If the system operates in air and the deployed geometry increases [[A]] substantially, the quadratic model predicts a clear reduction in [[v_t]]. That reading is already valuable before high-fidelity simulation. If the same device moved through a much more viscous medium or at a much smaller scale, an effective linear model might become more appropriate.

The estimate is therefore not purely numerical. It is a mechanism comparison: which configuration reaches dynamical balance at lower speed, and how robust is that result against orientation changes?

## Interpretation

This example shows why terminal velocity is a design tool, not just an exam answer. It helps decide whether it is more effective to modify mass, enlarge [[A]], or change the shape summarized by [[C_d]]. The mature conclusion is not just "one capsule falls more slowly"; it is "a geometry that increases drag can lower [[v_t]] and make descent safer within the adopted model".
