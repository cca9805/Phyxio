# Ejemplos: Exam-Type Problems
# Exam-type example

## Problem statement

A block of [[masa_1]] = 3 kg rests on an inclined plane with [[angulo_plano]] = 30° and [[coeficiente_rozamiento]] = 0.20. An inextensible rope connects it over an ideal massless pulley to a hanging block of [[masa_2]] = 2 kg. The system starts from rest. Find the [[aceleracion_sistema]] of the system and the [[tension_cuerda]] in the rope.

## Data

- [[masa_1]] = 3 kg (block on the plane)
- [[masa_2]] = 2 kg (hanging block)
- [[angulo_plano]] = 30°
- [[coeficiente_rozamiento]] = 0.20
- [[aceleracion_gravedad]] = 9.8 m/s²

## System definition

The system consists of both blocks connected by the rope. The positive axis for [[masa_2]] points downward (expected direction of descent) and for [[masa_1]] points up the slope. The pulley changes the direction of [[tension_cuerda]] but does not alter its magnitude (ideal, massless pulley).

## Physical model

Newton's Second Law is applied to each body separately, and the kinematic constraint of the inextensible rope is imposed: both blocks share the same [[aceleracion_sistema]] in absolute value.

The model is not only computational; it is causal. [[fuerza_normal]] determines [[fuerza_rozamiento]], while [[componente_tangencial_peso]] and the weight of [[masa_2]] compete as driving versus resisting effects. The final sign and magnitude of [[aceleracion_sistema]] emerge from that competition, and [[tension_cuerda]] transmits the resulting interaction through the rope.

## Model justification

The [[angulo_plano]] = 30° is within the validity range (θ < 60°). [[masa_1]] and [[masa_2]] are on the order of kilograms, so pulley inertia and rope elasticity effects are negligible. [[coeficiente_rozamiento]] = 0.20 corresponds to low kinetic friction, within the Coulomb model.

## Symbolic solution

**Step 1 — Normal force on the inclined plane:**

{{f:fuerza_normal_plano}}

**Step 2 — Tangential weight component of the block on the plane:**

{{f:componente_tangencial_peso}}

**Step 3 — Dynamic friction force:**

{{f:fuerza_rozamiento_dinamica}}

**Step 4 — Acceleration constraint (inextensible rope):**

{{f:vinculo_aceleracion}}

**Step 5 — Newton's second law for the linked system:**

{{f:segunda_ley_newton_sistema}}

**Step 6 — String tension:**

{{f:tension_cuerda_sistema}}

## Numerical substitution

Using the given data:

- [[fuerza_normal]] = 3 × 9.8 × cos(30°) ≈ 3 × 9.8 × 0.866 ≈ 25.5 N
- [[componente_tangencial_peso]] = 3 × 9.8 × sin(30°) = 3 × 9.8 × 0.5 = 14.7 N
- [[fuerza_rozamiento]] = 0.20 × 25.5 ≈ 5.1 N
- [[aceleracion_sistema]] = (2 × 9.8 − 14.7 − 5.1) / (3 + 2) = (19.6 − 14.7 − 5.1) / 5 = −0.2 / 5 ≈ −0.04 m/s²

The negative sign indicates the system does not accelerate in the assumed direction: the hanging block does not descend on its own under these parameters. The system remains near equilibrium.

With [[aceleracion_sistema]] ≈ 0 (limiting equilibrium):

- [[tension_cuerda]] ≈ [[masa_2]] × [[aceleracion_gravedad]] = 2 × 9.8 = 19.6 N

## Dimensional validation

The equations are dimensionally consistent:

- [[fuerza_normal]] and [[fuerza_rozamiento]]: force dimensions `[M L T⁻²]`
- [[aceleracion_sistema]]: acceleration dimensions `[L T⁻²]`
- [[tension_cuerda]]: force dimensions `[M L T⁻²]`
- [[coeficiente_rozamiento]]: dimensionless `[1]`

## Physical interpretation

The result [[aceleracion_sistema]] ≈ −0.04 m/s² shows that resistive forces (tangential weight component of [[masa_1]] plus friction) nearly exactly balance the weight of [[masa_2]]. The system is at a dynamic equilibrium limit: small changes in [[angulo_plano]] or [[coeficiente_rozamiento]] can reverse the direction of motion.

This is physically meaningful beyond arithmetic. A negative [[aceleracion_sistema]] means the chosen positive direction is not dynamically supported by the net force, so the real motion tendency is opposite. In practical terms, the system is close to a threshold where tiny environmental changes (surface contamination, humidity, or guide wear) may switch behavior from "self-moving" to "stuck". [[tension_cuerda]] ≈ 19.6 N being nearly equal to the weight of [[masa_2]] confirms that most of the hanging mass effort is spent compensating resistance, not producing speed growth.

---

# Real-world example

## Context

In mountain transportation systems (cable cars, chairlifts) a cabin connected by cable to a counterweight reproduces analytically the linked two-mass system. The cable inclination, guide friction, and mass differences determine whether the motor must provide net force or whether the counterweight alone can move the system.

A technician estimates whether an 800 kg counterweight suffices to pull a 1200 kg cabin up a 20° rail with [[coeficiente_rozamiento]] = 0.15.

## Physical estimation

Order-of-magnitude assessment of relevant forces:

- [[componente_tangencial_peso]] of cabin ≈ 1200 × 9.8 × 0.34 ≈ 4000 N
- [[fuerza_normal]] of cabin ≈ 1200 × 9.8 × 0.94 ≈ 11 050 N
- [[fuerza_rozamiento]] ≈ 0.15 × 11 050 ≈ 1660 N
- Driving force from counterweight ≈ 800 × 9.8 ≈ 7840 N

Estimated [[aceleracion_sistema]]: (7840 − 4000 − 1660) / (1200 + 800) ≈ 2180 / 2000 ≈ 1.1 m/s². The counterweight is sufficient.

If [[coeficiente_rozamiento]] uncertainty is ±0.03, [[fuerza_rozamiento]] changes by approximately ±330 N, and [[aceleracion_sistema]] shifts by roughly ±0.17 m/s². Even in that uncertainty band, acceleration remains positive, so the design decision is robust at first order. This kind of estimate is exactly why the model is used in engineering pre-sizing: it provides a fast go/no-go criterion before expensive full-detail simulations.

## Interpretation

The same model used in the classroom correctly predicts that the counterweight can pull the cabin. The positive [[aceleracion_sistema]] confirms the design is self-propelled. The [[tension_cuerda]] in the cable would be on the order of 6000–8000 N — a key value for cable mechanical sizing. Increasing [[angulo_plano]] or reducing [[coeficiente_rozamiento]] (better bearings) would allow a lighter counterweight, saving material costs.
