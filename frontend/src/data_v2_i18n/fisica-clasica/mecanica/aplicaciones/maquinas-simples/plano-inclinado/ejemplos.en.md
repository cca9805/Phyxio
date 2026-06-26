# Examples: The Inclined Plane

# Exam-type example
## Problem statement
A granite block with a mass [[m]] of 120 kg must be lifted onto a truck platform located at a height [[h]] of 1.5 meters. For this purpose, a metallic ramp of length [[L]] of 4 meters is used. The dynamic friction coefficient between the granite and the metal is [[mu]] of 0.25. Determine the minimum effort [[P]] that an operator must exert (parallel to the ramp) to lift the block at a constant speed and calculate the energy efficiency [[eta]] of the process.

## Data
- Block mass: [[m]] of 120 kg
- Acceleration of gravity: [[g]] of 9.81 m/s²
- Vertical height: [[h]] of 1.5 m
- Ramp length: [[L]] of 4.0 m
- Friction coefficient: [[mu]] of 0.25
- State: Constant speed (acceleration [[a]] of zero)

## System definition
The system is composed of the granite block treated as a point particle and the ramp surface, which is considered a rigid solid. We define an axis system where the X-axis is parallel to the ramp (positive upwards) and the Y-axis is perpendicular to it. The present interactions are weight [[W]], normal force [[N]], friction force [[f]], and applied force or effort [[P]].

## Physical model
We use the Dynamic Model with Coulomb Friction. In this model, the forces are balanced according to Newton's laws for a state of dynamic equilibrium. The weight is decomposed into its intrinsic components [[Wpar]] and [[Wperp]]. Friction is directly proportional to the normal reaction of the surface.

## Model justification
We choose this model because the problem specifies the existence of a significant friction coefficient [[mu]] and requires the calculation of a force to maintain a constant speed. The ideal model would be insufficient as it would underestimate the actual effort needed in a metallic industrial environment. The assumption of constant speed simplifies the force balance by equating the sum of forces to zero.

## Symbolic solution
1. First, we calculate the total weight of the object using the fundamental relation of gravity:

{{f:peso_total}}

2. We determine the incline angle [[theta]] from the ramp geometry:

{{f:relacion_h_L}}

3. We calculate the ideal mechanical advantage [[VM]] offered by this specific ramp:

{{f:ventaja_mecanica_geometria}}

4. We determine the ideal effort [[P]] (without friction) that will serve as a reference:

{{f:ley_plano_ideal}}

5. We decompose the weight [[W]] into its parallel and normal components:

{{f:descomposicion_paralela}}

{{f:normal_plano}}

6. We calculate the friction force [[f]] that opposes motion:

{{f:fuerza_rozamiento}}

7. We set up the dynamic equilibrium to find the final actual effort.

8. Finally, we calculate the machine's efficiency [[eta]]:

{{f:rendimiento_plano}}

### Additional parameter analysis

To complete the dynamic and energetic study, we verify other nuclear parameters:

- **Ideal and actual acceleration**: If the block were to slide freely, its ideal acceleration would be:
{{f:aceleracion_galileo}}
In this case, the net acceleration considering the effort is:
{{f:aceleracion_rampa}}
- **Equilibrium condition**: We verify that the block does not slide by itself through the critical condition:
{{f:condicion_deslizamiento_critico}}
- **Energy balance**: We check that the work done by [[P]] coincides with the total energy balance:
{{f:balance_energia_rampa}}

## Numerical substitution
- Angle: [[theta]] from arcsin(1.5 / 4) ≈ 22.02°
- Weight: [[W]] of 120 * 9.81 → 1177.2 N
- Parallel component: [[Wpar]] of 1177.2 * sin(22.02°) → 441.45 N
- Normal component: [[N]] of 1177.2 * cos(22.02°) → 1091.3 N
- Friction: [[f]] of 0.25 * 1091.3 → 272.8 N
- Total effort: [[P]] of 441.45 + 272.8 → 714.25 N
- Efficiency: [[eta]] from (1177.2 * 1.5) / (714.25 * 4) → 1765.8 / 2857 → 0.618

## Dimensional validation
The effort equation [[P]] sums two force terms, resulting in Newtons, which is correct. The efficiency [[eta]] is the quotient of two works (Joules / Joules), resulting in a dimensionless magnitude, which is physically consistent with the definition of efficiency.

## Physical interpretation
The operator needs to apply 714.25 Newtons. Without the ramp, he would have had to lift 1177.2 vertical Newtons, so the actual mechanical advantage is approximately 1.65. The 61.8% efficiency indicates that almost 40% of the operator's energy is lost as heat due to friction between the granite and the metal.

---

# Real-world example
## Context
Imagine the design of a wheelchair access ramp in a public hospital. Regulations require that the effort exerted by an average person should not exceed 10% of their total weight to ensure autonomy. If the wheelchair and user assembly weighs [[W]] of 1000 N, and we want to clear a step of [[h]] of 0.5 meters, we must decide the ramp length [[L]]. We consider a very low rolling/friction coefficient [[mu]] of 0.02.

## Physical estimation
To perform the quantitative estimation for this industrial design, we establish the mechanical advantage condition:

{{f:ventaja_mecanica_geometria}}
 
1. Force goal: [[P]] less than or equal to 0.1 * [[W]] (i.e., 100 N).
2. Using the ramp effort relation with low friction: [[P]] is approximately equal to [[W]] * ([[h]] / [[L]]) + [[mu]] * [[W]].
3. We perform the calculation to find the minimum length [[L]]:
   100 → 1000 * (0.5 / L) + 0.02 * 1000
   100 → 500 / L + 20
   80 → 500 / L
   L → 500 / 80 → 6.25 meters.

## Interpretation
Due to the effort restriction, the ramp must be at least 6.25 meters long. This demonstrates that for the same height [[h]], increasing the length [[L]] is the most effective way to reduce the effort [[P]], although this implies a longer travel distance for the user. Friction, although low ([[mu]] of 0.02), adds a base requirement of 20 N that cannot be eliminated by the plane's geometry.

### Examples formula registry

Component calculation:
{{f:descomposicion_paralela}}

{{f:normal_plano}}

Equilibrium and efficiency laws:
{{f:ley_plano_ideal}}

{{f:rendimiento_plano}}
