const e=`# Exam-type example\r
\r
## Problem statement\r
\r
An educational probe compares the weight of a reference mass [[m]] in two scenarios: near Earth's surface and at a larger radial distance [[r]] from the attracting body center. The goal is to connect vector definition and scalar expression of weight, showing when a constant [[gmod]] approximation is sufficient and when [[gmod]] should be computed from [[G]], [[M_astro]], and [[r]].\r
\r
The exercise also requires directional interpretation in an FBD with Cartesian axes where [[P_x]], [[P_y]], [[g_x]], and [[g_y]] are explicitly reported.\r
\r
## Data\r
\r
Reference data:\r
\r
- [[m]] = 12 kg\r
- [[gmod]]_surface = 9.8 m/s^2\r
- [[G]] = 6.674e-11 N m^2/kg^2\r
- [[M_astro]] = 5.97e24 kg\r
- [[r]]_surface = 6.37e6 m\r
- [[r]]_orbit = 6.87e6 m\r
\r
Axis convention: positive y points upward. Therefore gravitational y-components are negative in this frame.\r
\r
## System definition\r
\r
Physical system: a point mass interacting gravitationally with the attracting body.\r
\r
Core magnitudes used explicitly: [[P]], [[Pmod]], [[m]], [[g]], [[gmod]], [[G]], [[M_astro]], [[r]], [[P_x]], [[P_y]], [[g_x]], [[g_y]].\r
\r
Near the surface, a near-uniform field approximation is used first. In the orbital case, radial dependence is evaluated for precision comparison.\r
\r
## Physical model\r
\r
The model has three layers:\r
\r
1. Vector definition of weight for direction and sense.\r
2. Scalar expression for direct magnitude calculation.\r
3. Central-field model for [[gmod]] when radial variation is relevant.\r
\r
This layered approach prevents conceptual mixing: [[P]] is not the same object as [[Pmod]], and vector [[g]] is not just a scalar placeholder.\r
\r
## Model justification\r
\r
The scalar form is justified for the local surface estimate because [[gmod]] is provided and a fast magnitude is requested. The central-field form is justified for the orbital estimate because [[r]] changes and the task explicitly asks for radial-effect interpretation.\r
\r
Since the statement requires directional consistency, vector representation and the directional rule are mandatory.\r
\r
## Symbolic solution\r
\r
Vector definition:\r
\r
{{f:peso_vectorial}}\r
\r
Scalar expression:\r
\r
{{f:modulo_peso}}\r
\r
Central-field gravity relation:\r
\r
{{f:gravedad_campo_central}}\r
\r
Direction rule:\r
\r
{{f:direccion_peso}}\r
\r
Symbolic workflow:\r
\r
- Surface case: [[Pmod]] = [[m]]*[[gmod]]_surface.\r
- Orbital case: [[gmod]]_orbit = [[G]]*[[M_astro]]/[[r]]_orbit^2, then [[Pmod]]_orbit = [[m]]*[[gmod]]_orbit.\r
- In the chosen Cartesian frame: [[P_x]] = 0, [[P_y]] = -[[Pmod]], [[g_x]] = 0, [[g_y]] = -[[gmod]].\r
\r
## Numerical substitution\r
\r
Surface case:\r
\r
- [[Pmod]]_surface = 12*9.8 = 117.6 N.\r
\r
Orbital case:\r
\r
- [[gmod]]_orbit = 6.674e-11*5.97e24/(6.87e6^2) ≈ 8.44 m/s^2.\r
- [[Pmod]]_orbit = 12*8.44 ≈ 101.3 N.\r
\r
Component interpretation in both cases:\r
\r
- [[P_x]] = 0.\r
- [[P_y]] is negative with magnitude [[Pmod]].\r
- [[g_x]] = 0.\r
- [[g_y]] is negative with magnitude [[gmod]].\r
\r
Relative reduction of weight:\r
\r
- (117.6 - 101.3)/117.6 ≈ 13.9 percent.\r
\r
## Dimensional validation\r
\r
Unit checks:\r
\r
- [[Pmod]] in newtons from kg*m/s^2.\r
- [[gmod]] in m/s^2 from [[G]]*[[M_astro]]/[[r]]^2.\r
- Component magnitudes [[P_x]], [[P_y]] in newtons.\r
\r
Physical checks:\r
\r
1. Weight decreases as [[r]] increases, consistent with central-field behavior.\r
2. Direction of [[P]] aligns with direction of [[g]], consistent with the direction rule.\r
3. [[m]] remains unchanged between scenarios, consistent with inertial-mass interpretation.\r
\r
## Physical interpretation\r
\r
The central interpretation is representational: choose scalar form when the question is magnitude, choose vector form when the question is directional force balance.\r
\r
The example also shows that weight is environment-dependent, not object-fixed. Changing [[gmod]] changes [[Pmod]], while [[m]] remains the same.\r
\r
From a modeling perspective, this is an explicit transition case: uniform-field approximation for local quick estimates, central-field model for radial comparisons and stricter precision requirements.\r
\r
From an engineering interpretation perspective, the result is not merely that one force value is smaller. The causal chain is what matters: larger [[r]] weakens [[gmod]], weaker [[gmod]] reduces [[Pmod]], and reduced [[Pmod]] changes load paths in supports, sensors, and actuator compensation terms. This chain is the practical meaning of the calculation.\r
\r
Therefore, a technically complete conclusion should include both numerical comparison and operational implication. Numbers alone answer what changed; causal interpretation answers why it changed and what design or calibration action should follow.\r
\r
# Real-world example\r
\r
## Context\r
\r
A metrology company calibrates load cells in two facilities: one near sea level and one at higher altitude. The same reference masses are used in both places, and the team must explain why force readings differ even when mass standards are identical.\r
\r
The calibration software also outputs simplified FBD components, so directional consistency of [[P_x]] and [[P_y]] must be verified to avoid sign errors in automated reports.\r
\r
## Physical estimation\r
\r
Operational estimation steps:\r
\r
1. Compute [[Pmod]] = [[m]]*[[gmod]] at each facility using local gravity data.\r
2. Evaluate relative reading difference and update correction tables.\r
3. Validate directional coherence: [[P]] aligned with [[g]], vertical components negative in the adopted convention.\r
\r
For 20 kg standards and an approximate 1.5 percent local [[gmod]] difference, force readings differ by about 3 N. This is small for daily intuition but significant for high-precision calibration workflows.\r
\r
## Interpretation\r
\r
This application shows why the leaf is conceptually practical. Distinguishing definition and expression of weight separates body property (mass) from environment property (gravity), preventing incorrect instrument adjustments.\r
\r
It also confirms the role of vector-scalar complementarity: scalar magnitude supports calibration corrections, while vector direction guarantees sign consistency in force models and reporting pipelines.\r
`;export{e as default};
