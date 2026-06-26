# Exam-type example

## Problem statement

An educational probe compares the weight of a reference mass [[m]] in two scenarios: near Earth's surface and at a larger radial distance [[r]] from the attracting body center. The goal is to connect vector definition and scalar expression of weight, showing when a constant [[gmod]] approximation is sufficient and when [[gmod]] should be computed from [[G]], [[M_astro]], and [[r]].

The exercise also requires directional interpretation in an FBD with Cartesian axes where [[P_x]], [[P_y]], [[g_x]], and [[g_y]] are explicitly reported.

## Data

Reference data:

- [[m]] = 12 kg
- [[gmod]]_surface = 9.8 m/s^2
- [[G]] = 6.674e-11 N m^2/kg^2
- [[M_astro]] = 5.97e24 kg
- [[r]]_surface = 6.37e6 m
- [[r]]_orbit = 6.87e6 m

Axis convention: positive y points upward. Therefore gravitational y-components are negative in this frame.

## System definition

Physical system: a point mass interacting gravitationally with the attracting body.

Core magnitudes used explicitly: [[P]], [[Pmod]], [[m]], [[g]], [[gmod]], [[G]], [[M_astro]], [[r]], [[P_x]], [[P_y]], [[g_x]], [[g_y]].

Near the surface, a near-uniform field approximation is used first. In the orbital case, radial dependence is evaluated for precision comparison.

## Physical model

The model has three layers:

1. Vector definition of weight for direction and sense.
2. Scalar expression for direct magnitude calculation.
3. Central-field model for [[gmod]] when radial variation is relevant.

This layered approach prevents conceptual mixing: [[P]] is not the same object as [[Pmod]], and vector [[g]] is not just a scalar placeholder.

## Model justification

The scalar form is justified for the local surface estimate because [[gmod]] is provided and a fast magnitude is requested. The central-field form is justified for the orbital estimate because [[r]] changes and the task explicitly asks for radial-effect interpretation.

Since the statement requires directional consistency, vector representation and the directional rule are mandatory.

## Symbolic solution

Vector definition:

{{f:peso_vectorial}}

Scalar expression:

{{f:modulo_peso}}

Central-field gravity relation:

{{f:gravedad_campo_central}}

Direction rule:

{{f:direccion_peso}}

Symbolic workflow:

- Surface case: [[Pmod]] = [[m]]*[[gmod]]_surface.
- Orbital case: [[gmod]]_orbit = [[G]]*[[M_astro]]/[[r]]_orbit^2, then [[Pmod]]_orbit = [[m]]*[[gmod]]_orbit.
- In the chosen Cartesian frame: [[P_x]] = 0, [[P_y]] = -[[Pmod]], [[g_x]] = 0, [[g_y]] = -[[gmod]].

## Numerical substitution

Surface case:

- [[Pmod]]_surface = 12*9.8 = 117.6 N.

Orbital case:

- [[gmod]]_orbit = 6.674e-11*5.97e24/(6.87e6^2) ≈ 8.44 m/s^2.
- [[Pmod]]_orbit = 12*8.44 ≈ 101.3 N.

Component interpretation in both cases:

- [[P_x]] = 0.
- [[P_y]] is negative with magnitude [[Pmod]].
- [[g_x]] = 0.
- [[g_y]] is negative with magnitude [[gmod]].

Relative reduction of weight:

- (117.6 - 101.3)/117.6 ≈ 13.9 percent.

## Dimensional validation

Unit checks:

- [[Pmod]] in newtons from kg*m/s^2.
- [[gmod]] in m/s^2 from [[G]]*[[M_astro]]/[[r]]^2.
- Component magnitudes [[P_x]], [[P_y]] in newtons.

Physical checks:

1. Weight decreases as [[r]] increases, consistent with central-field behavior.
2. Direction of [[P]] aligns with direction of [[g]], consistent with the direction rule.
3. [[m]] remains unchanged between scenarios, consistent with inertial-mass interpretation.

## Physical interpretation

The central interpretation is representational: choose scalar form when the question is magnitude, choose vector form when the question is directional force balance.

The example also shows that weight is environment-dependent, not object-fixed. Changing [[gmod]] changes [[Pmod]], while [[m]] remains the same.

From a modeling perspective, this is an explicit transition case: uniform-field approximation for local quick estimates, central-field model for radial comparisons and stricter precision requirements.

From an engineering interpretation perspective, the result is not merely that one force value is smaller. The causal chain is what matters: larger [[r]] weakens [[gmod]], weaker [[gmod]] reduces [[Pmod]], and reduced [[Pmod]] changes load paths in supports, sensors, and actuator compensation terms. This chain is the practical meaning of the calculation.

Therefore, a technically complete conclusion should include both numerical comparison and operational implication. Numbers alone answer what changed; causal interpretation answers why it changed and what design or calibration action should follow.

# Real-world example

## Context

A metrology company calibrates load cells in two facilities: one near sea level and one at higher altitude. The same reference masses are used in both places, and the team must explain why force readings differ even when mass standards are identical.

The calibration software also outputs simplified FBD components, so directional consistency of [[P_x]] and [[P_y]] must be verified to avoid sign errors in automated reports.

## Physical estimation

Operational estimation steps:

1. Compute [[Pmod]] = [[m]]*[[gmod]] at each facility using local gravity data.
2. Evaluate relative reading difference and update correction tables.
3. Validate directional coherence: [[P]] aligned with [[g]], vertical components negative in the adopted convention.

For 20 kg standards and an approximate 1.5 percent local [[gmod]] difference, force readings differ by about 3 N. This is small for daily intuition but significant for high-precision calibration workflows.

## Interpretation

This application shows why the leaf is conceptually practical. Distinguishing definition and expression of weight separates body property (mass) from environment property (gravity), preventing incorrect instrument adjustments.

It also confirms the role of vector-scalar complementarity: scalar magnitude supports calibration corrections, while vector direction guarantees sign consistency in force models and reporting pipelines.
