const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A mechanics lab uses a perforated rigid bar to study oscillations around an adjustable pivot axis. For one selected configuration, measured properties are [[m]] = 1.80 kg, [[I]] = 0.145 kg*m^2 about the actual pivot, [[d]] = 0.210 m, and [[g]] = 9.81 m/s^2. Compute [[omega0]], [[T]], and [[f]] under small-angle assumptions, justify model validity, and explain how results change if the pivot moves closer to the center of mass.\r
\r
The instructor also asks for a causal interpretation of [[theta_dd]] sign when [[theta]] is small and positive. A purely numeric answer is not accepted; physical meaning is required.\r
\r
## Data\r
\r
SI inputs and immediate meaning:\r
\r
- [[m]] = 1.80 kg, total oscillating mass.\r
- [[I]] = 0.145 kg*m^2, rotational inertia about the real axis.\r
- [[d]] = 0.210 m, pivot-to-center distance.\r
- [[g]] = 9.81 m/s^2, local gravitational acceleration.\r
\r
Requested outputs:\r
\r
- [[omega0]] in rad/s.\r
- [[T]] in s.\r
- [[f]] in Hz.\r
\r
Context state variables:\r
\r
- [[theta]] for angular position.\r
- [[theta_dd]] for angular acceleration.\r
\r
## System definition\r
\r
The system includes the full rigid bar oscillating in a vertical plane around a fixed pivot. Positive orientation for [[theta]] is counterclockwise from stable equilibrium. The inertia value [[I]] is explicitly referenced to that same axis. This consistency is mandatory; using inertia from another axis would invalidate all downstream calculations.\r
\r
The setup is operated with moderate initial angles and low support friction during early cycles. Under those conditions, linear relations for [[omega0]], [[T]], and [[f]] are acceptable for first-order prediction.\r
\r
## Physical model\r
\r
The adopted model is the small-angle physical pendulum formulation. Natural rate depends on the ratio between restoring torque scale and rotational inertia, so [[I]], [[m]], [[g]], and [[d]] are the core parameters. From that rate, period and frequency are derived. For conceptual completeness, the nonlinear angular equation is kept for interpreting behavior beyond the linear regime.\r
\r
Leaf equations used in this example:\r
\r
{{f:omega0_pf}}\r
\r
{{f:periodo_pf}}\r
\r
{{f:frecuencia_pf}}\r
\r
{{f:ecuacion_no_lineal_pf}}\r
\r
## Model justification\r
\r
The linear model is justified because launch amplitudes are small and the exercise objective is baseline parameter estimation. In this range, model error from linearization is often lower than geometric and timing uncertainty in typical educational measurements.\r
\r
The model is also physically anchored by correct inertia definition: [[I]] is given about the real pivot axis. If that reference were missing, the safe workflow would stop and request geometric clarification before numerical substitution.\r
\r
The nonlinear relation is retained as a validity monitor. It clarifies sign logic for [[theta_dd]] and indicates when amplitude growth would require switching from linear to nonlinear analysis.\r
\r
## Symbolic solution\r
\r
First compute [[omega0]] from the core relation:\r
\r
{{f:omega0_pf}}\r
\r
Then compute [[T]] directly or from [[omega0]]:\r
\r
{{f:periodo_pf}}\r
\r
Then compute [[f]] from reciprocal relation:\r
\r
{{f:frecuencia_pf}}\r
\r
For sign interpretation, use the nonlinear angular equation: for small positive [[theta]], restoring torque drives [[theta_dd]] negative, consistent with return toward equilibrium.\r
\r
## Numerical substitution\r
\r
Compute [[omega0]]:\r
\r
[[omega0]] = sqrt(([[m]]*[[g]]*[[d]])/[[I]]) = sqrt((1.80*9.81*0.210)/0.145)\r
\r
[[omega0]] = sqrt(25.58) = 5.06 rad/s approximately.\r
\r
Compute [[T]]:\r
\r
[[T]] = 2*pi/[[omega0]] = 2*pi/5.06 = 1.24 s approximately.\r
\r
Compute [[f]]:\r
\r
[[f]] = 1/[[T]] = 1/1.24 = 0.81 Hz approximately.\r
\r
Internal consistency check:\r
\r
2*pi*[[f]] should match [[omega0]] within rounding tolerance, and it does.\r
\r
## Dimensional validation\r
\r
For [[omega0]], expected dimension is T^-1. The ratio ([[m]]*[[g]]*[[d]])/[[I]] has units:\r
\r
(kg*m/s^2*m)/(kg*m^2) = 1/s^2\r
\r
Taking square root yields 1/s, interpreted as rad/s for [[omega0]].\r
\r
For [[T]], period relation returns seconds because sqrt([[I]]/( [[m]]*[[g]]*[[d]] )) has time dimension and 2*pi is dimensionless. For [[f]], reciprocal conversion gives Hz. This dimensional chain confirms that no hidden unit mismatch occurred.\r
\r
## Physical interpretation\r
\r
The computed response indicates relatively fast oscillation for a compact rigid body with moderate [[d]] and moderate [[I]]. If pivot location moves closer to center of mass, [[d]] decreases, restoring torque weakens, [[T]] increases, and [[f]] decreases. If [[d]] increases while [[I]] remains similar, oscillation speeds up.\r
\r
The sign of [[theta_dd]] is physically meaningful: for small positive [[theta]], acceleration is typically negative, driving motion back toward equilibrium. This closes the loop between numeric output and causal mechanics.\r
\r
# Real-world example\r
\r
## Context\r
\r
A railway maintenance team deploys an inertial sensing module with an internal rigid oscillator that behaves as a physical pendulum around a machined axis. During commissioning, dynamic response differs across manufacturing batches. Engineers suspect small geometric shifts affecting [[d]] and [[I]].\r
\r
The operational target is not a classroom number but a safety margin: verify that natural response is separated from dominant service excitation frequencies. If natural frequency approaches the forcing band, vibration amplification can reduce sensor reliability.\r
\r
## Physical estimation\r
\r
For a representative unit, measured values are [[m]] = 2.3 kg, [[I]] = 0.26 kg*m^2, and [[d]] = 0.17 m. With standard [[g]], the linear model gives a first-order estimate of [[omega0]] and then [[f]]. The resulting scale is around 0.7 to 0.9 Hz, which must be compared against track-induced excitation spectra.\r
\r
If operating excitation peaks near 0.8 Hz, separation is weak and redesign is advisable. Two practical design paths exist: increase [[I]] to lower [[f]] or increase [[d]] to raise [[f]], depending on the unsafe overlap direction. Choice depends on packaging constraints, mass budget, and structural robustness.\r
\r
Sensitivity analysis is essential. Millimeter-level uncertainty in [[d]] can shift [[f]] enough to change pass/fail conclusions. Therefore teams should standardize geometric measurement and verify repeatability across units.\r
\r
## Interpretation\r
\r
This real-world case shows why the physical pendulum is an engineering model, not only an academic exercise. Parameters [[I]], [[d]], and [[m]] are manufacturing and assembly variables that directly control dynamic behavior. Computing [[T]] and [[f]] becomes a design validation criterion.\r
\r
From a maintenance perspective, model-aware interpretation prevents ineffective fixes. Increasing total mass alone may not solve resonance proximity if inertia distribution remains unfavorable. Correct action may require pivot relocation, geometry adjustment, or damping strategy.\r
\r
A well-grounded order-of-magnitude estimate can reduce expensive testing loops and improve final reliability. The key is to combine calculation, assumptions, and causal reading in one coherent workflow.`;export{e as default};
