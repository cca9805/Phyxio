# Exam-type example

## Problem statement
A training bench records wheel behavior over a short interval. The setup reports measured linear [[v]] speed, rotational frequency, and effective contact radius. The objective is to determine whether the observed motion is compatible with near-pure rolling and, if not, whether the deviation requires immediate correction or only monitoring.

The solution must be traceable. It should include unit normalization, coherence assessment, and an operational conclusion. The instructor explicitly asks for more than algebraic substitution. The answer must explain why the rolling relation is used and why residual analysis is necessary when working with real measurements.

## Data
Given values are v measured equal to 9.40 m/s, n equal to 265 rpm, R equal to 0.34 m, and coherence threshold equal to 0.50 m/s for this laboratory setup. Linear and angular sensors are synchronized and sampled within the same time window.

The contact surface is assumed stable, with no jump and no abrupt load changes during the analyzed interval. Instrument uncertainty exists, but nominal values are used to keep the focus on model workflow and interpretation logic.

## System definition
The system is represented as a rigid wheel with continuous contact over a fixed reference surface. Positive translation and positive rotation directions are declared as compatible. Relevant magnitudes are [[v]], [[omega]], [[R]], and residual [[delta]].

Declaring conventions at the beginning prevents sign ambiguity. Without this step, two analysts can obtain similar magnitudes but opposite physical conclusions. Radius is treated as constant during the interval, so the rolling relation can be applied instantaneously.

## Physical model
The model combines three relations:

{{f:conversion_rpm_rad}}

 for unit conversion,

{{f:conversion_rpm_rad}}

 for ideal coupling, and

{{f:conversion_rpm_rad}}

for coherence diagnosis. The first relation normalizes data, the second predicts ideal behavior, and the third measures deviation.

The model is intentionally compact. It does not attempt full contact mechanics. Its purpose in this example is first-level kinematic validation that can trigger further checks when needed.

## Model justification
This model is justified because required inputs are available and core assumptions are reasonable for the analyzed window. There is no evidence of impacts, major geometry shifts, or abrupt transients requiring a more complex framework.

It is also justified by traceability. Every step can be audited, from conversion to classification. If disagreement appears, the workflow reveals whether the issue comes from units, measurement quality, or model assumptions.

## Symbolic solution
Step one, convert [[n]] into [[omega]] in SI units. Step two, compute ideal linear speed as `v_ideal` using [[omega]] times [[R]]. Step three, compute residual [[delta]] using measured [[v]] and predicted [[omega]] * [[R]]. Step four, classify the result using the predefined threshold.

Symbolically:

{{f:conversion_rpm_rad}}

, then

{{f:conversion_rpm_rad}}

. Classification rule is abs([[delta]]) less than or equal to threshold for near-pure rolling, otherwise non-ideal rolling.

## Numerical substitution
Conversion gives [[omega]] near 27.75 rad/s. Multiplying by [[R]] equal to 0.34 m yields `v_ideal` near 9.44 m/s. Residual becomes [[delta]] equal to 9.40 minus 9.44, approximately -0.04 m/s.

Absolute residual is 0.04 m/s, far below the 0.50 m/s threshold. The case is therefore classified as near-pure rolling in this laboratory context. Remaining mismatch is consistent with mild measurement noise or minor non-ideal effects.

## Dimensional validation
The conversion from rpm to [[omega]] gives T^-1, which is correct for angular speed. In

{{f:conversion_rpm_rad}}

, multiplying T^-1 by L yields L/T, correct for linear speed. Residual [[delta]] subtracts two L/T terms, so dimensions remain consistent.

No dimensional conflict appears in the computation chain. This check is critical because many rolling errors are caused by hidden unit mismatches rather than model logic.

## Physical interpretation
Measured translation is very close to ideal translation predicted from rotation and radius. The small negative residual indicates a slight advance deficit relative to ideal behavior, consistent with tiny slip or instrumentation dispersion.

Operationally, the ideal model can be used for local prediction and basic control in this interval. A good practice is trend monitoring of [[delta]], because persistent drift carries more diagnostic value than isolated points.

# Real-world example

## Context
A maintenance team in a conveyor line observes disagreement between speed estimated from encoder data and speed inferred from vision tracking. The drivetrain uses rolling contact and requires fast diagnosis to avoid unnecessary shutdown.

The team applies the same pipeline as in the exam case: collect v, n, and R over short windows, convert units, compute residuals, and classify each interval against an operational threshold.

## Physical estimation
In a critical interval, recorded values are [[n]] equal to 520 rpm, [[R]] equal to 0.12 m, and measured [[v]] equal to 6.1 m/s. Conversion gives [[omega]] near 54.45 rad/s. Predicted [[omega]] * [[R]] is near 6.53 m/s. Residual [[delta]] is therefore around -0.43 m/s. This order of magnitude is large enough to justify intervention but still small enough to remain physically readable as a moderate coherence failure rather than a catastrophic breakdown.

With operational threshold set to 0.30 m/s, absolute residual exceeds acceptance. The interval is classified as non-ideal rolling. Repeated negative residual over multiple windows suggests systematic advance deficit, compatible with adhesion loss.

## Interpretation
Recommended action is staged rather than impulsive. First, check belt tension and clean contact surfaces. Second, recalibrate effective radius [[R]] and verify sensor timing. Third, rerun diagnostics. If residual remains high, schedule mechanical intervention.

This example shows why residual-based interpretation is valuable. It converts a vague discrepancy into an explicit, testable decision criterion linked to concrete next steps.