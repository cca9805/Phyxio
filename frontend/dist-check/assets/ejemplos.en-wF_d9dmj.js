const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A wheel with radius\r
\r
{{f:relacion_v_omega}}\r
\r
 rotates about a fixed axis. At the instant of interest, the angular velocity is\r
\r
{{f:relacion_v_omega}}\r
\r
 and the angular acceleration is\r
\r
{{f:relacion_v_omega}}\r
\r
.\r
\r
Calculate for a point on the rim: **(a)** the tangential velocity [[v_t]]; **(b)** the tangential acceleration [[a_t]]; **(c)** the normal (centripetal) acceleration [[a_n]]; **(d)** the magnitude of the total acceleration [[a_total]].\r
\r
## Data\r
\r
| Symbol | Meaning | Value |\r
|---|---|---|\r
| R | rotation radius of the point | 0.40 m |\r
| omega | angular velocity of the solid | 5.0 rad/s |\r
| alpha | angular acceleration of the solid | 2.0 rad/s^2 |\r
\r
Positive direction: direction of rotation.\r
\r
## System definition\r
\r
The system is the wheel modelled as a rigid body with a fixed axis. The core magnitude of the leaf is the tangential velocity [[v_t]], which connects the angular state of the body to the linear motion of each point. The derived magnitudes are [[a_t]] (tangential acceleration), [[a_n]] (normal centripetal acceleration) and [[a_total]] (total acceleration magnitude). In this model, [[v_t]] scales with angular speed, [[a_t]] scales with angular acceleration, [[a_n]] scales with squared angular speed, and [[a_total]] combines both acceleration components. The rigid-body assumption guarantees that R is constant and that all points share the same angular state.\r
\r
The physical model is therefore anchored to these four core relations:\r
\r
{{f:relacion_v_omega}}\r
\r
{{f:relacion_at_alpha}}\r
\r
{{f:aceleracion_normal}}\r
\r
{{f:aceleracion_total_modulo}}\r
\r
## Physical model\r
\r
The model is explicitly anchored to the four core magnitudes of the leaf: [[v_t]], [[a_t]], [[a_n]], and [[a_total]]. Their quantitative links are:\r
\r
{{f:relacion_v_omega}}\r
\r
{{f:relacion_at_alpha}}\r
\r
{{f:aceleracion_normal}}\r
\r
{{f:aceleracion_total_modulo}}\r
\r
The model is valid because the wheel is rigid and its axis does not move during the analysed instant.\r
\r
## Model justification\r
\r
The rigid-body model is valid because the elastic deformation of a standard metal wheel under dynamic load is of the order of micrometres for a 0.40 m radius, approximately one hundred times smaller than the precision required here. We consider the axis non-translating because the bearings are correctly dimensioned for these loads. Aerodynamic drag is small at the speeds involved (\r
\r
{{f:relacion_v_omega}}\r
\r
,\r
\r
{{f:relacion_v_omega}}\r
\r
): the drag force is below 0.1 % of the centripetal force, so we neglect it. If the wheel were to deform appreciably, \`R\` would depend on time and the leaf's relations would cease to be exact; in that case the instantaneous geometry would need to be integrated.\r
\r
## Symbolic solution\r
\r
**Part (a) — tangential velocity**:\r
\r
{{f:relacion_v_omega}}\r
\r
**Part (b) — tangential acceleration [[a_t]]**:\r
\r
{{f:relacion_at_alpha}}\r
\r
**Part (c) — normal acceleration [[a_n]]**:\r
\r
{{f:aceleracion_normal}}\r
\r
**Part (d) — total acceleration magnitude [[a_total]]**:\r
\r
{{f:aceleracion_total_modulo}}\r
\r
## Numerical substitution\r
\r
Using a radius of 0.40 m, an angular speed of 5.0 rad/s, and an angular acceleration of 2.0 rad/s^2 yields linear magnitudes consistent with moderate rotational operation. Each requested quantity is computed with its corresponding relation, and the comparison confirms that [[a_n]] dominates over [[a_t]] in this scenario.\r
\r
**Part (a):**\r
\r
{{f:relacion_v_omega}}\r
\r
**Part (b):**\r
\r
{{f:aceleracion_total_modulo}}\r
\r
**Part (c):**\r
\r
{{f:aceleracion_normal}}\r
\r
**Part (d):**\r
\r
{{f:aceleracion_total_modulo}}\r
\r
## Dimensional validation\r
\r
The dimension of [[v_t]] is m/s because it combines angular rate (1/s) with length (m). Both [[a_t]] and [[a_n]] are in m/s^2, and the quadratic combination used for [[a_total]] also remains in m/s^2. No inconsistent sum of physical dimensions appears, so the dimensional closure is sound.\r
\r
{{f:relacion_v_omega}}\r
\r
{{f:relacion_at_alpha}}\r
\r
## Physical interpretation\r
\r
The most instructive result is the comparison between [[a_n]] and [[a_t]]: the normal acceleration is 10.0 m/s^2 while the tangential acceleration is only 0.80 m/s^2 — a factor of 12.5. This occurs because [[a_n]] scales with omega^2 while [[a_t]] scales linearly with alpha; as a result, at moderate and high rotation rates [[a_n]] overwhelmingly dominates [[a_t]]. The total acceleration [[a_total]] ≈ 10.03 m/s² is almost equal to [[a_n]], meaning the acceleration vector points nearly straight toward the axis.\r
\r
This hierarchy has an immediate practical consequence: in most rotating systems at cruising speed (alpha ≈ 0), [[a_t]] is negligible and [[a_total]] ≈ [[a_n]] = omega^2·R. Only during startup or braking, when alpha is large, does [[a_t]] compete with [[a_n]]. In the structural design of rotating components — wheels, turbine disks, grinding wheels — the fatigue criterion must cover [[a_n]] in steady operation, but [[a_t]] must also be checked during transients.\r
\r
The linear-angular relation also encapsulates why points farther from the axis experience larger velocities and accelerations: the radius acts as a linear amplifier of every angular quantity. Moving a point from R of 0.40 m to R of 0.80 m doubles [[v_t]], quadruples [[a_n]], and doubles [[a_t]], even though omega and alpha are the same for every point in the rigid body. This proportionality is the structural key of the leaf.\r
\r
---\r
\r
# Real-world example\r
\r
## Context\r
\r
A laboratory centrifuge has a rotor of radius\r
\r
{{f:relacion_v_omega}}\r
\r
. The operator sets\r
\r
{{f:relacion_v_omega}}\r
\r
 (≈ 955 rpm) as the cruising speed and observes that the rotor reaches that speed from rest in\r
\r
{{f:relacion_v_omega}}\r
\r
at roughly constant angular acceleration.\r
\r
## Physical estimation\r
\r
Before computing, a rough order of magnitude: at cruising speed\r
\r
{{f:relacion_at_alpha}}\r
\r
. That is the effective gravity felt by the samples. During spin-up,\r
\r
{{f:relacion_at_alpha}}\r
\r
, giving\r
\r
{{f:relacion_at_alpha}}\r
\r
. The spin-up [[a_t]] is 500 times smaller than the cruising [[a_n]], confirming that the rotor design criterion is [[a_n]], not [[a_t]].\r
\r
At the midpoint of spin-up (\r
\r
{{f:relacion_v_omega}}\r
\r
):\r
\r
{{f:relacion_v_omega}}\r
\r
{{f:aceleracion_total_modulo}}\r
\r
{{f:aceleracion_total_modulo}}\r
\r
[[a_t]] contributes less than 1 % of [[a_total]] even at half speed.\r
\r
## Interpretation\r
\r
The separation between [[a_n]] and [[a_t]] explains why a centrifuge can separate particles by density so effectively: the effective acceleration felt by each sample is almost entirely centripetal, equivalent to over 100 times terrestrial gravity in this example. The slow spin-up (5 s) is a mechanical comfort choice — reducing vibration — rather than a limitation imposed by [[a_t]] on the sample, since [[a_t]] is negligible compared to [[a_n]] throughout. If the manufacturer wanted to double the separation capacity, the options are to quadruple omega or double R, since both raise [[a_n]] = omega^2·R; in practice increasing omega is preferred because doubling R would increase rotor size and mass quadratically.`;export{e as default};
