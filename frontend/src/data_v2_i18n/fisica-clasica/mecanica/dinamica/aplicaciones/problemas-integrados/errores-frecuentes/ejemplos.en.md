# Examples: Common errors in dynamics

# Exam-type example

## Problem statement

A block with [[masa_cuerpo]] of 5 kg rests on an inclined plane at [[angulo_plano]] of 30° with the horizontal. The [[coeficiente_rozamiento_estatico]] between the block and the surface is 0.5. A student incorrectly calculates [[componente_normal_erronea]] by equating it to the product of [[masa_cuerpo]] and [[aceleracion_gravedad]], ignoring the inclination.

Determine: (a) the correct [[componente_normal_erronea]]; (b) the correct [[fuerza_rozamiento_maximo]]; (c) the [[fuerza_motriz]] acting on the block; (d) whether the block remains at rest or slides; (e) the conceptual error that leads the student to an incorrect conclusion.

## Data

- [[masa_cuerpo]]: 5 kg
- [[angulo_plano]]: 30° (= π/6 rad ≈ 0.524 rad)
- [[coeficiente_rozamiento_estatico]]: 0.5
- [[aceleracion_gravedad]]: 9.81 m/s²
- [[masa_total]]: 5 kg (single-body system)
- [[signo_aceleracion]]: positive down the slope

## System definition

A reference frame is chosen with the positive \(x\)-axis pointing up the slope and the positive \(y\)-axis pointing away from the surface. Forces acting on the system:

- **Weight**: 49.05 N vertical; its components `P_x` (parallel to plane) and `P_y` (perpendicular to plane) are obtained by projecting with [[angulo_plano]].
- **[[componente_normal_erronea]]**: perpendicular to the plane, positive \(y\)-axis.
- **[[fuerza_rozamiento_maximo]]**: parallel to the plane, opposing potential motion.

The [[fuerza_erronea]] appears when the student draws the normal without projecting the weight, assuming the full weight acts perpendicular to the plane.

## Physical model

Newton's second law is applied on each axis. On the axis perpendicular to the plane (static equilibrium):

In static equilibrium perpendicular to the plane, [[componente_normal_erronea]] exactly equals the component of the weight in that direction. The correct projection requires the cosine of [[angulo_plano]].

The [[aceleracion_sistema]] is calculated when motion occurs using:

{{f:ley_newton_sistemas}}

The rest criterion is that [[fuerza_motriz]] does not exceed [[fuerza_rozamiento_maximo]]. If not satisfied, the block slides.

## Model justification

Newton's second law applies because:

1. [[masa_cuerpo]] is constant and velocity is non-relativistic (v ≪ c).
2. Surfaces are rigid, so no deformation alters the system geometry.
3. Static friction holds the block still while [[fuerza_motriz]] does not exceed [[fuerza_rozamiento_maximo]].
4. The model fails if the surface is deformable, if lubrication is present, or if [[angulo_plano]] exceeds 90°.

The core pedagogical error of this leaf is assuming [[componente_normal_erronea]] equals [[masa_cuerpo]]·[[aceleracion_gravedad]], which ignores the cosine of the angle and overestimates the friction threshold, producing incorrect predictions about whether the system moves.

## Symbolic solution

**Step 1 — Correct normal with projection:**

{{f:proyeccion_normal_plano}}

The correct [[componente_normal_erronea]] results from projecting the weight perpendicularly to the plane using the cosine of [[angulo_plano]].

**Step 2 — Maximum static friction threshold:**

{{f:relacion_rozamiento_maximo}}

The [[fuerza_rozamiento_maximo]] is f_s,\max = μs ·m ·g ·cos θ.

**Step 3 — Driving force parallel to the plane:**

{{f:fuerza_motriz_plano}}

The [[fuerza_motriz]] results from projecting the weight parallel to the plane using the sine of [[angulo_plano]].

**Step 4 — Motion criterion:**

If [[fuerza_motriz]] exceeds [[fuerza_rozamiento_maximo]], the block slides and [[aceleracion_sistema]], using kinetic friction `μk` ≈ 0.4, is:

{{f:ley_newton_sistemas}}

## Numerical substitution

**Correct normal:**
N = 5 ×9.81 ×cos 30° = 5 ×9.81 ×0.866 = 42.47 N

**Student's erroneous normal:**
N_wrong = 5 ×9.81 = 49.05 N ← [[componente_normal_erronea]] overestimated by 15.5 %

**Correct [[fuerza_rozamiento_maximo]]:**
f_s,\max = 0.5 ×42.47 = 21.24 N

**Student's erroneous threshold:**
f_s,\max,err = 0.5 ×49.05 = 24.53 N

**[[fuerza_motriz]]:**
F_mot = 5 ×9.81 ×sin 30° = 5 ×9.81 ×0.5 = 24.53 N

**Correct criterion:** [[fuerza_motriz]] (24.53 N) exceeds [[fuerza_rozamiento_maximo]] (21.24 N) → **the block SLIDES**

**Student's criterion (with [[fuerza_erronea]]):** with `N_wrong` overestimated, `f_{s,err}` (24.53 N) is not exceeded by [[fuerza_motriz]] (24.53 N) → student concludes **"block does not move"** ← **INCORRECT**

**Real [[aceleracion_sistema]] (with kinetic friction `μk` = 0.4):**
1.51 m/s² down the slope

## Dimensional validation

- [N] = [kg ·m/s²] = N ✓
- [`f_s,max`] = [1]·[N] = N ✓
- Acceleration units: N/kg ≡ m/s² ✓
- [[aceleracion_sistema]] (1.51 m/s²) is below [[aceleracion_gravedad]] (9.81 m/s²) → consistent; a system driven only by gravity cannot exceed `g`.
- [[signo_aceleracion]] positive down the slope is consistent with [[fuerza_motriz]] pointing in that direction.

## Physical interpretation

The error of assuming [[componente_normal_erronea]] equal to [[masa_cuerpo]]·[[aceleracion_gravedad]] overestimates the normal by a factor 1/cosθ. For θ = 30°, this represents a 15.5 % excess. That artificial inflation of [[componente_normal_erronea]] raises [[fuerza_rozamiento_maximo]], leading the student to conclude the system is at rest when it actually slides.

The positive [[signo_aceleracion]] down the slope confirms [[F_ext_net]] acts in that direction. The [[aceleracion_sistema]] of 1.51 m/s² is physically reasonable (between 0 and g·sin 30° = 4.9 m/s²). This example demonstrates that a seemingly small error in [[componente_normal_erronea]] can qualitatively change the answer: from "at rest" to "accelerated motion".

# Real-world example

## Context

A delivery truck with [[masa_total]] of 2 500 kg parks on a warehouse access ramp with [[angulo_plano]] of 10°. A worker needs to know whether the truck will remain stationary without the handbrake engaged. The [[coeficiente_rozamiento_estatico]] between tire and dry asphalt is approximately 0.7.

This industrial scenario illustrates how equating [[componente_normal_erronea]] to [[masa_total]]·[[aceleracion_gravedad]] without projection can lead to an incorrect safety decision: concluding the brake is unnecessary when it actually is (or vice versa).

## Physical estimation

The order-of-magnitude estimation provides the first quantitative filter. For this scenario, the scale of the relevant forces is:

- [[fuerza_motriz]]: proportional to sin(10°) ≈ 0.17 → magnitude approximately 4 000 N.
- [[fuerza_rozamiento_maximo]]: proportional to μs·cos(10°) ≈ 0.69 → magnitude approximately 17 000 N.
- The approximate safety margin estimate: [[fuerza_rozamiento_maximo]] is roughly 4 times larger than [[fuerza_motriz]].

This preliminary estimation allows qualitative anticipation that the system will remain at rest before performing any exact calculation.

**Correct normal:**

{{f:proyeccion_normal_plano}}

N = 2500 ×9.81 ×cos 10° = 2500 ×9.81 ×0.985 = 24 144 N

**[[fuerza_rozamiento_maximo]] threshold:**

{{f:relacion_rozamiento_maximo}}

f_s,\max = 0.7 ×24 144 = 16 901 N

**[[fuerza_motriz]] (weight component parallel to the ramp):**

{{f:fuerza_motriz_plano}}

F_mot = 2500 ×9.81 ×sin 10° = 2500 ×9.81 ×0.174 = 4 258 N

Since [[fuerza_motriz]] (4 258 N) is far below [[fuerza_rozamiento_maximo]] (16 901 N), the [[F_ext_net]] trying to move the truck is only 25 % of the static threshold. The vehicle remains stationary by friction alone.

## Interpretation

The [[aceleracion_sistema]] is zero because [[componente_normal_erronea]] is correctly computed (θ = 10°, cos 10° ≈ 0.985), leaving a wide margin between [[fuerza_motriz]] and [[fuerza_rozamiento_maximo]]. However, if the ramp had θ = 45°:

F_mot = 2500 ×9.81 ×0.707 = 17 340 N
N = 2500 ×9.81 ×0.707 = 17 340 N
f_s,\max = 0.7 ×17 340 = 12 138 N

In that case [[fuerza_motriz]] exceeds [[fuerza_rozamiento_maximo]] and the truck would slide. The [[signo_aceleracion]] would be negative (downhill) with a significant [[aceleracion_sistema]]. This contrast highlights why [[componente_normal_erronea]] must always be calculated using the cosine: at higher angles, the safety margin collapses sharply.
