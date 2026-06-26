const e=`\uFEFF# Exam-type example

## Problem statement

A block on a horizontal rail is observed from two frames moving at constant relative speed. You must verify whether both frames are inertial, compute core dynamic quantities, and justify why acceleration is invariant between inertial observers.

In a second part, a driving-assistance scenario is used to decide whether the observer frame in the control logic can still be treated as inertial.

## Data

- [[m]] = 2.0 kg.
- [[F_neta]] = 4.0 N along positive axis.
- Initial [[v_obs1]] = 6.0 m/s.
- [[V_rel]] = 2.0 m/s, constant.
- Time window [[t]] = 3.0 s.
- Acceleration uncertainty = 0.05 m/s^2.

Additional comparison:

- [[v_obs2]] is obtained from Galilean velocity transformation.
- [[a_obs2]] is compared against [[a]] for invariance check.

## System definition

Frame S: laboratory reference, assumed inertial.

Frame S': observer frame moving with constant [[V_rel]] relative to S.

Object: block subject to real net force [[F_neta]].

Target magnitudes: [[a]], [[a_obs2]], [[v_obs1]], [[v_obs2]], [[V_rel]], [[m]], [[t]].

## Physical model

Use Newtonian mechanics in inertial frames. Inertial criterion comes from first law, dynamic response from second law, velocity conversion from Galilean transformation, and acceleration invariance closes the consistency test.

Model anchoring detail: this section is explicitly tied to the leaf core through [[F_neta]], [[m]], [[a]], [[v_obs1]], [[v_obs2]], [[V_rel]], and [[a_obs2]]. The logic is therefore not generic; it is a direct inertial-frame consistency chain.

## Model justification

The model is physically justified because [[V_rel]] is declared constant, frame rotation is negligible, and speed scale remains classical. The applied force is traceable, so the causal chain [[F_neta]] -> [[a]] can be audited.

Explicit rejection criterion:

- If abs([[a]] - [[a_obs2]]) > 0.05 m/s^2 repeatedly, at least one inertial assumption fails.

## Symbolic solution

{{f:criterio_inercial_primera_ley}}

{{f:segunda_ley_newton_SRI}}

{{f:transformacion_galileana_velocidad}}

{{f:invariancia_aceleracion_galileana}}

Symbolic reading:

1. Nonzero [[F_neta]] implies nonzero [[a]] in an inertial frame.
2. [[v_obs2]] follows from [[v_obs1]] and [[V_rel]].
3. [[a_obs2]] should match [[a]] if both frames are inertial.

## Numerical substitution

1. Acceleration in S:

- [[a]] = [[F_neta]] / [[m]] = 4.0 / 2.0 = 2.0 m/s^2.

2. Initial velocity in S':

- [[v_obs2]] = [[v_obs1]] - [[V_rel]] = 6.0 - 2.0 = 4.0 m/s.

3. Acceleration invariance expectation:

- [[a_obs2]] = [[a]] = 2.0 m/s^2.

4. Evolution during [[t]] = 3.0 s:

- In S: delta v = [[a]]*[[t]] = 6.0 m/s.
- In S': delta v' = [[a_obs2]]*[[t]] = 6.0 m/s.

Equal velocity increments support inertial consistency.

## Dimensional validation

- [[F_neta]] in N.
- [[m]] in kg.
- [[a]] and [[a_obs2]] in m/s^2.
- [[v_obs1]], [[v_obs2]], [[V_rel]] in m/s.
- [[t]] in s.

Checks:

1. N/kg gives m/s^2.
2. Velocity subtraction remains m/s.
3. Acceleration invariance relation is dimensionally consistent.

With 0.05 m/s^2 uncertainty, tiny differences below that level are not enough to reject inertial assumptions.

## Physical interpretation

The key result is causal, not merely numeric. Object acceleration is determined by real net force and mass. Changing observer with constant relative speed changes measured velocity but not acceleration.

Therefore, when [[a]] and [[a_obs2]] disagree beyond uncertainty, the issue is usually frame validity or data quality, not a mysterious law failure.

This separates two layers clearly:

- [[v_obs1]] vs [[v_obs2]] belongs to kinematic frame conversion.
- [[a]] vs [[a_obs2]] belongs to inertial dynamic structure.

# Real-world example

## Context

An ADAS module estimates lead-vehicle behavior from an ego vehicle. The algorithm combines effective-force estimates and velocity streams. It assumes the ego frame is approximately inertial in short windows.

## Physical estimation

Measured windows over [[t]]:

- W1: moderate positive [[F_neta]] equivalent, almost constant [[V_rel]], abs([[a]]-[[a_obs2]]) = 0.02 m/s^2.
- W2: near-zero [[F_neta]], abs([[a]]-[[a_obs2]]) = 0.03 m/s^2.
- W3: abrupt maneuver phase, abs([[a]]-[[a_obs2]]) = 0.12 m/s^2.

Quantitative reading:

1. W1 and W2 are inside the 0.05 m/s^2 band, compatible with local inertial treatment.
2. W3 exceeds threshold, signaling breakdown of simple inertial assumption.

Order-of-magnitude estimation:

- W1 and W2 mismatches are below uncertainty scale and support high-confidence inertial interpretation.
- W3 mismatch is more than double the tolerance and therefore indicates a regime transition, not random fluctuation.

This estimation is operational because it maps directly to model-selection decisions.

## Interpretation

The interpretation is regime-based. While acceleration mismatch stays small, inertial equations support reliable decisions. When mismatch grows above threshold, forcing the same model is risky.

The correct action is model escalation, not blind reuse. This distinction improves safety logic and makes diagnostic reports auditable: assumptions, thresholds, and causal explanations are explicit.

Model-anchoring clarification:

In this example, the physical model is explicitly anchored to leaf-core relations among [[F_neta]], [[m]], [[a]], [[v_obs1]], [[v_obs2]], [[V_rel]], and [[a_obs2]]. The frame-consistency logic is therefore not generic; it is directly tied to inertial-frame criteria and Galilean transformation structure.

Extra quantitative estimation:

Suppose a fourth window gives abs([[a]]-[[a_obs2]]) = 0.07 m/s^2 with nearly unchanged [[V_rel]]. This value is above uncertainty but below severe mismatch threshold. The correct interpretation is intermediate confidence with monitoring escalation, not immediate model rejection.
`;export{e as default};
