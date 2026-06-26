# Exam-type example

## Problem statement

A block of [[m]] = 4.0 kg is observed from inside a carriage that accelerates horizontally. The internal observer uses a frame with constant [[a_marco]] toward the right. You must compute [[F_ficticia]], write the non-inertial balance for [[a_rel]], and discuss what changes when the same setup enters a rotating stage with nonzero [[omega]].

In the second part, a rotating-platform scenario with relative motion [[v_rel]] is analyzed to justify simultaneous use of [[F_centrifuga]] and [[F_coriolis]].

## Data

- [[m]] = 4.0 kg.
- [[a_marco]] = 1.5 m/s^2.
- Main horizontal component of [[F_real]] = 10.0 N.
- Analysis window = 3.0 s.

Rotating stage:

- [[omega]] = 2.0 rad/s.
- [[r]] = 0.80 m.
- [[v_rel]] = 1.2 m/s.

Model-switch threshold: 10 percent relative error.

## System definition

Frame S: external inertial reference used for diagnostics.

Frame S': carriage-attached frame and later rotating-platform frame. In S', [[system_classification]] is set to non-inertial whenever [[a_marco]] or [[omega]] is significant.

Target quantities:

[[F_real]], [[F_ficticia]], [[a_rel]], [[a_marco]], [[omega]], [[r]], [[v_rel]], [[F_centrifuga]], [[F_coriolis]].

## Physical model

Newtonian dynamics with inertial corrections is used in S'. The modeling flow is: classify frame, build translational fictitious term, solve effective balance, then append rotational terms when the frame rotates.

Explicit leaf anchoring: the model links [[a_marco]] to [[F_ficticia]], combines [[F_real]] with inertial correction to interpret [[a_rel]], and activates [[F_centrifuga]] plus [[F_coriolis]] when [[omega]] and [[v_rel]] are no longer negligible.

## Model justification

The model choice is physically explicit:

1. [[a_marco]] is nonzero and large enough to reject pure inertial treatment.
2. During linear acceleration, rotation is negligible, so translational [[F_ficticia]] dominates corrections.
3. During rotation, nonzero [[omega]] and [[v_rel]] require [[F_centrifuga]] and [[F_coriolis]].

Rejection criterion:

- If predicted [[a_rel]] differs from repeated measurements by more than 10 percent, the model must be expanded.

## Symbolic solution

{{f:criterio_no_inercial}}

{{f:fuerza_ficticia_traslacion}}

{{f:dinamica_en_no_inercial}}

{{f:fuerza_centrifuga}}

{{f:fuerza_coriolis}}

Symbolic reading:

1. Criterion confirms non-inertial frame status.
2. Translational correction yields [[F_ficticia]] opposite to [[a_marco]].
3. Effective balance predicts [[a_rel]] from real plus fictitious contributions.
4. Rotational stage adds radial and lateral inertial corrections.

## Numerical substitution

Translational stage:

1. Translational fictitious-force magnitude:

- [[F_ficticia]] = [[m]] times [[a_marco]] = 4.0 times 1.5 = 6.0 N opposite to [[a_marco]].

2. Effective horizontal balance in S':

- Approximate effective net force: four newton along the analysis axis after combining real and fictitious contributions.

3. Relative acceleration estimate:

- [[a_rel]] estimate: about one meter per second squared along the same axis.

Rotating stage:

4. Centrifugal term magnitude reference:

- Quantity linked to [[F_centrifuga]] = [[m]] times [[omega]] squared times [[r]] = 4.0 times 4.0 times 0.80 = 12.8 N.

5. Coriolis term magnitude reference:

- Quantity linked to [[F_coriolis]] = 2 times [[m]] times [[omega]] times [[v_rel]] = 2 times 4.0 times 2.0 times 1.2 = 19.2 N.

These values show that rotational inertial terms can exceed the original real-force scale, so neglecting them would be a regime-level modeling error.

## Dimensional validation

Unit checks:

- [[a_marco]] and [[a_rel]] in m/s^2.
- [[omega]] in rad/s.
- [[r]] in m.
- [[v_rel]] in m/s.
- [[F_real]], [[F_ficticia]], [[F_centrifuga]], [[F_coriolis]] in N.

Consistency checks:

1. [[m]] times [[a_marco]] yields force units.
2. [[omega]] squared times [[r]] yields radial acceleration scale.
3. [[omega]] times [[v_rel]] yields lateral acceleration scale typical of Coriolis effects.

If observed mismatch is around 6 percent, the model remains adequate. If mismatch reaches 14 percent in consecutive windows, model escalation is mandatory.

## Physical interpretation

The key interpretation is structural, not just numeric. In linear acceleration, frame motion generates a fictitious correction that shifts observed relative acceleration. In rotation, [[F_centrifuga]] and [[F_coriolis]] can change both direction and curvature of the observed path.

This means different observers can report different apparent behavior without violating physics, provided each observer uses the correct frame-dependent term inventory. If an analyst keeps only [[F_real]] in a clearly non-inertial frame, frame effects are misread as object-level anomalies.

Therefore the example is directly connected to the leaf theory: frame classification determines active equations and dominant terms.

# Real-world example

## Context

A drone-testing rig uses a rotating platform to emulate aggressive maneuvers. The onboard controller estimates acceleration and generates compensation in real time. The engineering team must decide when inertial approximation is safe and when full non-inertial correction is required.

## Physical estimation

Three scenarios are recorded over 30 s:

- Scenario A: low [[a_marco]], near-zero [[omega]], moderate [[v_rel]].
- Scenario B: medium [[a_marco]] with increasing [[omega]].
- Scenario C: high [[omega]] with high [[v_rel]] during evasive motion.

Quantitative order-of-magnitude reading:

1. In A, fictitious terms remain below sensor noise, and [[a_rel]] prediction error is about 4 percent.
2. In B, [[F_ficticia]] and [[F_centrifuga]] increase, and error rises to about 9 percent, still inside acceptance threshold.
3. In C, lateral dynamics are strongly influenced by [[F_coriolis]], and error reaches 16 percent if Coriolis is omitted.

Operational estimation:

- Keep simplified model in A.
- Use complete non-inertial model in B and C.

This estimation is actionable because it maps measured magnitudes to explicit model-switch rules.

## Interpretation

The main insight is regime-dependent validity. Model reliability is controlled by scales of [[a_marco]], [[omega]], and [[v_rel]], not by analyst preference. As those scales rise, non-inertial terms become compulsory for causal interpretation.

A second insight is methodological: always separate real-force reasoning from frame-correction reasoning. That separation prevents false hardware diagnoses and improves traceability in control reports.

If a final report flags anomalous [[a_rel]] in Scenario C but omits [[F_coriolis]], the conclusion is incomplete. If the report explicitly links lateral growth to rising [[omega]] and [[v_rel]], interpretation is coherent with the leaf model and directly useful for design decisions.
