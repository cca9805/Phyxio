# Exam-type example

## Problem statement

A block of mass [[m]] is released from rest at the top of a rigid incline of length [[L]] and angle [[theta]]. The surface is idealized as frictionless. Determine acceleration [[a]], final speed [[v_f]] at the end of the segment, and travel time [[t]]. Then justify why the frictionless model is a valid first approximation and identify what experimental evidence would force a model upgrade.

## Data

- [[m]] = 2.0 kg
- [[g]] = 9.8 m/s2
- [[theta]] = 30 degrees
- [[L]] = 4.0 m
- initial [[v]] = 0

Validation setup:

- acceptable prediction-measurement mismatch: 10 percent.
- repeated equivalent trials: at least 3.

## System definition

System: a point-like block of mass [[m]] moving effectively in one dimension along the incline.

Relevant interactions:

- total weight [[P]].
- contact normal reaction [[N]].

Axis strategy:

- tangential axis along the incline.
- normal axis perpendicular to the incline.

Derived core magnitudes:

- [[P_par]] controls tangential speed change.
- [[P_perp]] determines contact loading through [[N]].

This definition prevents the typical beginner error of using full [[P]] as the along-plane driver.

## Physical model

Ideal frictionless model with explicit assumptions:

1. friction is negligible compared with [[P_par]].
2. incline geometry is rigid and [[theta]] is constant on the segment.
3. contact is continuous.
4. tangential acceleration [[a]] is constant.

Leaf-core equations:

{{f:descomposicion_paralela}}

{{f:descomposicion_perpendicular}}

{{f:normal_plano_ideal}}

{{f:aceleracion_plano_ideal}}

{{f:velocidad_final_desde_reposo}}

{{f:tiempo_deslizamiento}}

## Model justification

The model is justified by effect scale, not by authority. If surface quality is high, path is short, and speed remains moderate, friction and drag can be treated as second-order effects relative to [[P_par]]. In that regime, the ideal model gives robust first-order estimates for [[a]], [[v_f]], and [[t]].

The second justification is structural clarity. Separating tangential cause ([[P_par]]) from normal contact closure ([[P_perp]], [[N]]) makes diagnostics transparent. If data disagree, we know where to look: missing dissipation, geometric mismatch, or poor experimental repeatability.

## Symbolic solution

1. Resolve weight along and normal to the incline:

{{f:descomposicion_paralela}}

{{f:descomposicion_perpendicular}}

2. Close the normal axis and obtain [[N]]:

{{f:normal_plano_ideal}}

3. Apply tangential dynamics for [[a]]:

{{f:aceleracion_plano_ideal}}

4. Use constant-acceleration kinematics for [[v_f]] and [[t]] over [[L]]:

{{f:velocidad_final_desde_reposo}}

{{f:tiempo_deslizamiento}}

Symbolic reading: the full problem is controlled by geometric projection of gravity through [[theta]].

## Numerical substitution

With [[theta]] = 30 degrees:

- [[a]] = [[g]] sin([[theta]]) = 9.8 x 0.5 = 4.9 m/s2.
- [[v_f]] = sqrt(2 x [[a]] x [[L]]) = sqrt(39.2) ~= 6.26 m/s.
- [[t]] = sqrt((2 x [[L]])/[[a]]) = sqrt(8.0/4.9) ~= 1.28 s.

Numerical reading:

- [[a]] lies between 0 and [[g]], as expected.
- [[v_f]] near 6 m/s can be operationally relevant for handling safety.
- [[t]] near 1.3 s indicates strong sensitivity to angle selection.

## Dimensional validation

- [[a]] has acceleration units m/s2.
- [[v_f]] has speed units m/s.
- [[t]] has time units s.

Limit checks:

- if [[theta]] -> 0, [[a]] -> 0.
- if [[theta]] increases, [[a]] increases and [[t]] decreases.

Causal checks:

- [[P_par]] drives tangential acceleration.
- [[N]] closes contact; it is not a tangential driver.

## Physical interpretation

The central message is mechanistic: acceleration on an incline depends on the part of weight aligned with motion, not on "having more weight" in an undifferentiated sense. That aligned part is [[P_par]], and [[theta]] controls it directly.

This is why incline dynamics is foundational for model progression. Once [[N]] and projections are clear, moving to friction models becomes conceptually smooth, because friction scales with contact conditions.

# Real-world example

## Context

A logistics team uses a passive ramp to move boxes from a preparation table to a lower conveyor. They want shorter cycle times without adding motors at this stage. The controllable design variable is [[theta]], while available footprint fixes [[L]].

Operational question: which angle range keeps [[t]] below throughput targets while maintaining a safe [[v_f]] at the receiving station? The frictionless model is used as a fast preselection tool before expensive prototyping.

## Physical estimation

Take [[L]] = 3.0 m and compare three test angles.

1. [[theta]] = 12 degrees:

- [[a]] ~= 2.04 m/s2
- [[t]] ~= 1.72 s
- [[v_f]] ~= 3.50 m/s

2. [[theta]] = 20 degrees:

- [[a]] ~= 3.35 m/s2
- [[t]] ~= 1.34 s
- [[v_f]] ~= 4.48 m/s

3. [[theta]] = 28 degrees:

- [[a]] ~= 4.60 m/s2
- [[t]] ~= 1.14 s
- [[v_f]] ~= 5.26 m/s

Reference calculation for design interpretation:

{{f:aceleracion_plano_ideal}}

{{f:velocidad_final_desde_reposo}}

{{f:tiempo_deslizamiento}}

These relations show the direct trade-off: higher [[theta]] increases [[a]] and [[v_f]] while decreasing [[t]]. With an output speed limit of [[v_f]] <= 4.5 m/s, the 12-degree case is comfortably safe, the 20-degree case is borderline, and the 28-degree case is rejected.

Quantitative reading: increasing [[theta]] improves cycle time but raises impact speed. If ergonomic receiving limit is around 4.5 m/s, an angle near 20 degrees is a reasonable first candidate.

## Interpretation

This real case shows how an ideal model supports early engineering decisions with high explanatory value and low computational cost. It is not the final truth of the system, but it defines a practical candidate region for pilot trials.

Quantitatively, the screen matters because it separates a ramp ending near 3.5 m/s from one ending near 5.3 m/s, and it distinguishes cycle times around 1.7 s, 1.3 s, and 1.1 s. In a real handling line, those differences can decide whether stations stay synchronized or begin to accumulate backlog.

If the internal safety limit is [[v_f]] <= 4.5 m/s, then the 12-degree option stays comfortably inside the margin, the 20-degree option sits near the threshold, and the 28-degree option exceeds it. That is not a decorative comparison; it determines whether the design advances to the next stage. In parallel, the almost 0.6 s gap between 12 degrees and 20 degrees can mean a meaningful throughput gain without entering the risky speed regime of the steepest case.

The didactic gain is substantial: equations are used as decision tools under explicit assumptions, validated against data, and upgraded when evidence demands higher-fidelity modeling.