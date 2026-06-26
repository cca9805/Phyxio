const e=`# Examples: Common errors in dynamics\r
\r
# Exam-type example\r
\r
## Problem statement\r
\r
A block with [[masa_cuerpo]] of 5 kg rests on an inclined plane at [[angulo_plano]] of 30° with the horizontal. The [[coeficiente_rozamiento_estatico]] between the block and the surface is 0.5. A student incorrectly calculates [[componente_normal_erronea]] by equating it to the product of [[masa_cuerpo]] and [[aceleracion_gravedad]], ignoring the inclination.\r
\r
Determine: (a) the correct [[componente_normal_erronea]]; (b) the correct [[fuerza_rozamiento_maximo]]; (c) the [[fuerza_motriz]] acting on the block; (d) whether the block remains at rest or slides; (e) the conceptual error that leads the student to an incorrect conclusion.\r
\r
## Data\r
\r
- [[masa_cuerpo]]: 5 kg\r
- [[angulo_plano]]: 30° (= π/6 rad ≈ 0.524 rad)\r
- [[coeficiente_rozamiento_estatico]]: 0.5\r
- [[aceleracion_gravedad]]: 9.81 m/s²\r
- [[masa_total]]: 5 kg (single-body system)\r
- [[signo_aceleracion]]: positive down the slope\r
\r
## System definition\r
\r
A reference frame is chosen with the positive \\(x\\)-axis pointing up the slope and the positive \\(y\\)-axis pointing away from the surface. Forces acting on the system:\r
\r
- **Weight**: 49.05 N vertical; its components \`P_x\` (parallel to plane) and \`P_y\` (perpendicular to plane) are obtained by projecting with [[angulo_plano]].\r
- **[[componente_normal_erronea]]**: perpendicular to the plane, positive \\(y\\)-axis.\r
- **[[fuerza_rozamiento_maximo]]**: parallel to the plane, opposing potential motion.\r
\r
The [[fuerza_erronea]] appears when the student draws the normal without projecting the weight, assuming the full weight acts perpendicular to the plane.\r
\r
## Physical model\r
\r
Newton's second law is applied on each axis. On the axis perpendicular to the plane (static equilibrium):\r
\r
In static equilibrium perpendicular to the plane, [[componente_normal_erronea]] exactly equals the component of the weight in that direction. The correct projection requires the cosine of [[angulo_plano]].\r
\r
The [[aceleracion_sistema]] is calculated when motion occurs using:\r
\r
{{f:ley_newton_sistemas}}\r
\r
The rest criterion is that [[fuerza_motriz]] does not exceed [[fuerza_rozamiento_maximo]]. If not satisfied, the block slides.\r
\r
## Model justification\r
\r
Newton's second law applies because:\r
\r
1. [[masa_cuerpo]] is constant and velocity is non-relativistic (v ≪ c).\r
2. Surfaces are rigid, so no deformation alters the system geometry.\r
3. Static friction holds the block still while [[fuerza_motriz]] does not exceed [[fuerza_rozamiento_maximo]].\r
4. The model fails if the surface is deformable, if lubrication is present, or if [[angulo_plano]] exceeds 90°.\r
\r
The core pedagogical error of this leaf is assuming [[componente_normal_erronea]] equals [[masa_cuerpo]]·[[aceleracion_gravedad]], which ignores the cosine of the angle and overestimates the friction threshold, producing incorrect predictions about whether the system moves.\r
\r
## Symbolic solution\r
\r
**Step 1 — Correct normal with projection:**\r
\r
{{f:proyeccion_normal_plano}}\r
\r
The correct [[componente_normal_erronea]] results from projecting the weight perpendicularly to the plane using the cosine of [[angulo_plano]].\r
\r
**Step 2 — Maximum static friction threshold:**\r
\r
{{f:relacion_rozamiento_maximo}}\r
\r
The [[fuerza_rozamiento_maximo]] is f_s,\\max = μs ·m ·g ·cos θ.\r
\r
**Step 3 — Driving force parallel to the plane:**\r
\r
{{f:fuerza_motriz_plano}}\r
\r
The [[fuerza_motriz]] results from projecting the weight parallel to the plane using the sine of [[angulo_plano]].\r
\r
**Step 4 — Motion criterion:**\r
\r
If [[fuerza_motriz]] exceeds [[fuerza_rozamiento_maximo]], the block slides and [[aceleracion_sistema]], using kinetic friction \`μk\` ≈ 0.4, is:\r
\r
{{f:ley_newton_sistemas}}\r
\r
## Numerical substitution\r
\r
**Correct normal:**\r
N = 5 ×9.81 ×cos 30° = 5 ×9.81 ×0.866 = 42.47 N\r
\r
**Student's erroneous normal:**\r
N_wrong = 5 ×9.81 = 49.05 N ← [[componente_normal_erronea]] overestimated by 15.5 %\r
\r
**Correct [[fuerza_rozamiento_maximo]]:**\r
f_s,\\max = 0.5 ×42.47 = 21.24 N\r
\r
**Student's erroneous threshold:**\r
f_s,\\max,err = 0.5 ×49.05 = 24.53 N\r
\r
**[[fuerza_motriz]]:**\r
F_mot = 5 ×9.81 ×sin 30° = 5 ×9.81 ×0.5 = 24.53 N\r
\r
**Correct criterion:** [[fuerza_motriz]] (24.53 N) exceeds [[fuerza_rozamiento_maximo]] (21.24 N) → **the block SLIDES**\r
\r
**Student's criterion (with [[fuerza_erronea]]):** with \`N_wrong\` overestimated, \`f_{s,err}\` (24.53 N) is not exceeded by [[fuerza_motriz]] (24.53 N) → student concludes **"block does not move"** ← **INCORRECT**\r
\r
**Real [[aceleracion_sistema]] (with kinetic friction \`μk\` = 0.4):**\r
1.51 m/s² down the slope\r
\r
## Dimensional validation\r
\r
- [N] = [kg ·m/s²] = N ✓\r
- [\`f_s,max\`] = [1]·[N] = N ✓\r
- Acceleration units: N/kg ≡ m/s² ✓\r
- [[aceleracion_sistema]] (1.51 m/s²) is below [[aceleracion_gravedad]] (9.81 m/s²) → consistent; a system driven only by gravity cannot exceed \`g\`.\r
- [[signo_aceleracion]] positive down the slope is consistent with [[fuerza_motriz]] pointing in that direction.\r
\r
## Physical interpretation\r
\r
The error of assuming [[componente_normal_erronea]] equal to [[masa_cuerpo]]·[[aceleracion_gravedad]] overestimates the normal by a factor 1/cosθ. For θ = 30°, this represents a 15.5 % excess. That artificial inflation of [[componente_normal_erronea]] raises [[fuerza_rozamiento_maximo]], leading the student to conclude the system is at rest when it actually slides.\r
\r
The positive [[signo_aceleracion]] down the slope confirms [[F_ext_net]] acts in that direction. The [[aceleracion_sistema]] of 1.51 m/s² is physically reasonable (between 0 and g·sin 30° = 4.9 m/s²). This example demonstrates that a seemingly small error in [[componente_normal_erronea]] can qualitatively change the answer: from "at rest" to "accelerated motion".\r
\r
# Real-world example\r
\r
## Context\r
\r
A delivery truck with [[masa_total]] of 2 500 kg parks on a warehouse access ramp with [[angulo_plano]] of 10°. A worker needs to know whether the truck will remain stationary without the handbrake engaged. The [[coeficiente_rozamiento_estatico]] between tire and dry asphalt is approximately 0.7.\r
\r
This industrial scenario illustrates how equating [[componente_normal_erronea]] to [[masa_total]]·[[aceleracion_gravedad]] without projection can lead to an incorrect safety decision: concluding the brake is unnecessary when it actually is (or vice versa).\r
\r
## Physical estimation\r
\r
The order-of-magnitude estimation provides the first quantitative filter. For this scenario, the scale of the relevant forces is:\r
\r
- [[fuerza_motriz]]: proportional to sin(10°) ≈ 0.17 → magnitude approximately 4 000 N.\r
- [[fuerza_rozamiento_maximo]]: proportional to μs·cos(10°) ≈ 0.69 → magnitude approximately 17 000 N.\r
- The approximate safety margin estimate: [[fuerza_rozamiento_maximo]] is roughly 4 times larger than [[fuerza_motriz]].\r
\r
This preliminary estimation allows qualitative anticipation that the system will remain at rest before performing any exact calculation.\r
\r
**Correct normal:**\r
\r
{{f:proyeccion_normal_plano}}\r
\r
N = 2500 ×9.81 ×cos 10° = 2500 ×9.81 ×0.985 = 24 144 N\r
\r
**[[fuerza_rozamiento_maximo]] threshold:**\r
\r
{{f:relacion_rozamiento_maximo}}\r
\r
f_s,\\max = 0.7 ×24 144 = 16 901 N\r
\r
**[[fuerza_motriz]] (weight component parallel to the ramp):**\r
\r
{{f:fuerza_motriz_plano}}\r
\r
F_mot = 2500 ×9.81 ×sin 10° = 2500 ×9.81 ×0.174 = 4 258 N\r
\r
Since [[fuerza_motriz]] (4 258 N) is far below [[fuerza_rozamiento_maximo]] (16 901 N), the [[F_ext_net]] trying to move the truck is only 25 % of the static threshold. The vehicle remains stationary by friction alone.\r
\r
## Interpretation\r
\r
The [[aceleracion_sistema]] is zero because [[componente_normal_erronea]] is correctly computed (θ = 10°, cos 10° ≈ 0.985), leaving a wide margin between [[fuerza_motriz]] and [[fuerza_rozamiento_maximo]]. However, if the ramp had θ = 45°:\r
\r
F_mot = 2500 ×9.81 ×0.707 = 17 340 N\r
N = 2500 ×9.81 ×0.707 = 17 340 N\r
f_s,\\max = 0.7 ×17 340 = 12 138 N\r
\r
In that case [[fuerza_motriz]] exceeds [[fuerza_rozamiento_maximo]] and the truck would slide. The [[signo_aceleracion]] would be negative (downhill) with a significant [[aceleracion_sistema]]. This contrast highlights why [[componente_normal_erronea]] must always be calculated using the cosine: at higher angles, the safety margin collapses sharply.\r
`;export{e as default};
