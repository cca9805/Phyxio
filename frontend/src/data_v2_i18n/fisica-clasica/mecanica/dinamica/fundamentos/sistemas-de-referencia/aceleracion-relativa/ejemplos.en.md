# Exam-type example

## Problem statement

Object A moves along a straight test track while observer frame B is mounted on a second instrumented cart. Both carts accelerate in the same axis direction during part of the run. Determine [[a_rel]], justify model validity, and explain what changes when observer acceleration increases.

The second part asks for regime classification over several windows and a decision-oriented interpretation useful for control diagnostics.

## Data

Main run:

- [[a_A]] = 2.8 m/s^2.
- [[a_B]] = 1.1 m/s^2.
- Analysis interval [[t]] = 5 s.
- Sensor uncertainty = 0.05 m/s^2.

Extended windows:

- W1: [[a_B]] = 1.1 m/s^2.
- W2: [[a_B]] = 2.8 m/s^2.
- W3: [[a_B]] = 3.3 m/s^2.

## System definition

Reference frame for absolute description: inertial laboratory frame.

Object quantity: [[a_A]] for cart A.

Observer-frame quantity: [[a_B]] for cart B.

Target quantity: [[a_rel]], acceleration of A as observed from B in translational Galilean relation.

## Physical model

The model states that relative acceleration comes from composition between object acceleration and observer-frame acceleration in a shared axis convention. In this leaf, the relevant relation is between [[a_rel]], [[a_A]], and [[a_B]], interpreted over interval [[t]].

## Model justification

The model is physically justified because:

1. Motion is one-dimensional in the selected interval.
2. Axis alignment is controlled in data acquisition.
3. Relative rotation effects are negligible.
4. Synchronization error stays below 0.02 s.
5. Sensor uncertainty is smaller than the main contrast in W1 and W3.

A rejection rule is declared in advance: if residual = abs([[a_rel]] - [[a_A]] + [[a_B]]) remains above 0.10 m/s^2 in repeated windows, model confidence drops and extension is required.

## Symbolic solution

{{f:composicion_aceleracion_galileana}}

{{f:invarianza_aceleracion_inercial}}

Symbolic reading:

- General case: [[a_rel]] depends on both [[a_A]] and [[a_B]].
- Inertial-observer case: if observer acceleration is negligible, relative and absolute object acceleration coincide within uncertainty.

## Numerical substitution

Window calculations:

- W1: [[a_rel]] = 2.8 - 1.1 = 1.7 m/s^2.
- W2: [[a_rel]] = 2.8 - 2.8 = 0.0 m/s^2.
- W3: [[a_rel]] = 2.8 - 3.3 = -0.5 m/s^2.

Trend reading over [[t]]:

- W1 indicates positive relative-acceleration regime.
- W2 indicates near-neutral regime.
- W3 indicates negative regime.

The sequence shows a regime transition caused by observer-frame acceleration growth, not by a sudden change in object nature.

## Dimensional validation

Units remain consistent:

- [[a_A]], [[a_B]], [[a_rel]] in m/s^2.
- [[t]] in s.

Uncertainty check:

- 1.7 m/s^2 is far above 0.05 m/s^2, so sign confidence is strong.
- -0.5 m/s^2 is also clearly above uncertainty.
- 0.0 m/s^2 should be interpreted as a tolerance band around zero, not exact deterministic equality.

## Physical interpretation

The key interpretation is causal. Relative acceleration does not identify a hidden force; it identifies dynamic mismatch between object and observer.

In W1, object trend dominates observer trend, so relative acceleration is positive. In W2, both are nearly equal, giving neutral relative acceleration. In W3, observer trend dominates, giving negative relative acceleration. Therefore, the sign transition is an observer-aware effect.

This implies that reporting only [[a_A]] is insufficient in moving-observer diagnostics. A robust report must include [[a_B]], uncertainty level, and model validity statement.

# Real-world example

## Context

Consider low-speed rail-coupling diagnostics. Lead carriage A is observed from instrumented carriage B during docking preparation. Operators need an interpretable indicator to decide whether relative dynamic tendency is safe.

Velocity-only indicators can miss short-horizon transitions when both carriages update traction commands. Relative acceleration is used as a fast trend classifier for supervisory logic.

## Physical estimation

Suppose filtered values across a short horizon [[t]] are:

- Segment S1: [[a_A]] = 1.9, [[a_B]] = 0.7 m/s^2, then [[a_rel]] = 1.2 m/s^2.
- Segment S2: [[a_A]] = 1.9, [[a_B]] = 1.8 m/s^2, then [[a_rel]] = 0.1 m/s^2.
- Segment S3: [[a_A]] = 1.9, [[a_B]] = 2.2 m/s^2, then [[a_rel]] = -0.3 m/s^2.

Order-of-magnitude reading:

- S1 is clearly positive and far from noise.
- S2 is near parity and should be treated as borderline.
- S3 is clearly negative and operationally relevant.

Decision threshold example:

If [[a_rel]] remains below -0.20 m/s^2 for more than 1.5 s, mitigation mode is enabled. S3 satisfies that threshold with margin over uncertainty, so intervention confidence is high.

## Interpretation

This real example confirms why observer-aware modeling is essential. A control team could wrongly attribute the trend inversion to carriage A alone, but the computed sequence shows that observer-frame acceleration is the primary switching factor.

The interpretation is therefore not merely numerical. It is causal, operational, and auditable: assumptions are explicit, thresholds are explicit, and uncertainty is explicit. That is the expected quality standard for this leaf.

Model boundary is also explicit. If geometric rotation, strong lateral coupling, or synchronization drift appears, the translational model must be escalated. Reliable engineering means knowing when a simple model is valid and when it is not.
