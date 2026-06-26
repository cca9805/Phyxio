# Exam-type example

## Problem statement

A wooden block of 5 kg mass rests on a horizontal table. The friction coefficients between wood and surface are: static [[mu_s]] = 0.40 and kinetic [[mu_k]] = 0.30. A horizontal force [[F]] is applied via a dynamometer. Calculate: (a) the maximum force that can be applied without moving the block; (b) the acceleration of the block if a force of 25 N is applied; (c) the force needed to maintain the block in uniform motion once started.

## Data

- Block mass: [[m]] = 5 kg
- Static friction coefficient: [[mu_s]] = 0.40 (dimensionless)
- Kinetic friction coefficient: [[mu_k]] = 0.30 (dimensionless)
- Gravitational acceleration: [[g]] = 9.8 m/s² (standard value)
- Applied force case (b): [[F]] = 25 N

## System definition

The mechanical system consists of a rigid block on a flat horizontal surface. The block is subjected to four forces in the vertical-horizontal plane: weight [[W]] downward, normal reaction [[N]] upward, applied force [[F]] horizontal, and friction force [[f_s]] or [[f_k]] horizontal opposing motion or tendency to motion.

## Physical model

Coulomb's dry friction model describes the contact interaction. In static regime, friction adapts up to a maximum defined by the static threshold.

{{f:umbral_estatico}}

In kinetic regime, friction is constant and proportional to the normal through the kinetic coefficient.

{{f:friccion_cinetica}}

Horizontal dynamics obeys Newton's second law.

{{f:segunda_ley_horizontal}}

On horizontal surfaces, the normal equals the weight.

{{f:normal_superficie}}

Weight is calculated via gravitational law.

{{f:peso_gravitatorio}}

## Model justification

Coulomb's model is appropriate because: (1) surfaces are dry (wood on table material), (2) velocities will be moderate (< 1 m/s), (3) there is no lubrication or intermediate fluids, (4) surface deformation is negligible compared to block dimensions. At laboratory scales with these conditions, the model predicts with errors below 5%.

## Symbolic solution

**Step 1**: Calculate block weight using magnitude [[m]] and gravity [[g]].

{{f:peso_gravitatorio}}

**Step 2**: Determine the normal reaction on the horizontal surface.

{{f:normal_superficie}}

**Step 3**: For part (a), calculate the maximum static threshold using [[mu_s]] and [[N]].

{{f:umbral_estatico}}

**Step 4**: Compare applied force with threshold to determine regime.

If [[F]] ≤ [[f_s]], the block remains at rest with zero acceleration.

If [[F]] > [[f_s]], the block accelerates according to second law.

**Step 5**: In kinetic regime, calculate kinetic friction with [[mu_k]] and [[N]].

{{f:friccion_cinetica}}

**Step 6**: Apply Newton's second law horizontally to obtain acceleration.

{{f:segunda_ley_horizontal}}

**Step 7**: For uniform motion, net force must be zero, therefore [[F]] = [[f_k]].

## Numerical substitution

**Step 1**: Block weight.

Operation: 5 kg multiplied by 9.8 m/s². Result: 49 N. Assignment: [[W]] = 49 N.

**Step 2**: Normal reaction.

On horizontal surface without additional vertical forces, normal equals weight. Assignment: [[N]] = 49 N.

**Step 3**: Maximum static threshold.

Operation: 0.40 multiplied by 49 N. Result: 19.6 N. Assignment: [[f_s]] = 19.6 N.

Answer part (a): maximum force without motion is approximately 19.6 N.

**Step 4**: Regime evaluation for [[F]] = 25 N.

Comparison: 25 N > 19.6 N. The block is in kinetic regime and will accelerate.

**Step 5**: Kinetic friction.

Operation: 0.30 multiplied by 49 N. Result: 14.7 N. Assignment: [[f_k]] = 14.7 N.

**Step 6**: Acceleration with 25 N force.

Operation: (25 N minus 14.7 N) divided by 5 kg. Result: 10.3 N divided by 5 kg. Assignment: [[a]] = 2.06 m/s².

Answer part (b): acceleration is approximately 2.1 m/s².

**Step 7**: Force for uniform motion.

For constant velocity, applied force must exactly balance kinetic friction. Assignment: [[F]] = [[f_k]] = 14.7 N.

Answer part (c): approximately 14.7 N are required.

## Dimensional validation

- Weight [[W]]: kg multiplied by m/s² results in N (force units) `[M L T⁻²]` ✓
- Normal [[N]]: equal to weight, same force units `[M L T⁻²]` ✓
- Static threshold [[f_s]]: dimensionless multiplied by N results in N `[M L T⁻²]` ✓
- Kinetic friction [[f_k]]: same units as [[f_s]] `[M L T⁻²]` ✓
- Acceleration [[a]]: N divided by kg results in m/s² `[L T⁻²]` ✓

All results have dimensions coherent with the involved physical magnitudes.

## Physical interpretation

The result of part (a) reveals that static friction acts as a protective barrier preventing motion until reaching 19.6 N. This means gentle pushes (like from a breeze or accidental touch) will not displace the object, providing system stability. The actual static friction at any push below this threshold is exactly equal to the applied push, maintaining perfect equilibrium.

When 25 N are applied in part (b), the force exceeds the static threshold by approximately 5.4 N (28% above the limit). The difference between applied force (25 N) and kinetic resistance (14.7 N) produces a net force of 10.3 N, generating the 2.06 m/s² acceleration. Physically, this indicates the block will gain velocity quickly; after one second it would reach approximately 2 m/s.

Part (c) demonstrates a crucial principle: once in motion, less force is required to keep the block moving than to initiate motion. The 14.7 N needed for uniform motion are significantly less than the 19.6 N static threshold. This explains why maintaining an object sliding is easier than starting to slide from rest. In practical applications such as transport system design, this implies that motors must provide greater starting torque (to overcome [[f_s]]) than maintenance torque (to overcome [[f_k]]).

# Real-world example

## Context

An operator in an assembly plant must move boxes of electronic components on an antistatic felt-covered work table. The boxes have 12 kg mass and must slide smoothly without damaging internal components. The supervisor needs to determine: (a) what minimum force an operator must be able to exert to initiate motion; (b) what force is sufficient to keep the box sliding at constant velocity; (c) if a sudden 80 N push could damage the box due to excessive acceleration.

The friction coefficients for box-felt are: static [[mu_s]] = 0.35, kinetic [[mu_k]] = 0.25. The maximum safe acceleration for components is 3 m/s².

## Physical estimation

**Step 1**: Calculate box weight.

Operation: 12 kg multiplied by 9.8 m/s². Result: 117.6 N. Assignment: [[W]] = 117.6 N.

**Step 2**: Determine normal reaction.

On horizontal surface, normal equals weight. Assignment: [[N]] = 117.6 N.

**Step 3**: Calculate static threshold for evaluation (a).

Operation: 0.35 multiplied by 117.6 N. Result: approximately 41 N. Assignment: [[f_s]] = 41 N.

Conclusion (a): the operator must be able to exert at least 41 N (approximately 4.2 kgf) to initiate motion. Lower forces will not displace the box.

**Step 4**: Calculate kinetic friction for evaluation (b).

Operation: 0.25 multiplied by 117.6 N. Result: approximately 29 N. Assignment: [[f_k]] = 29 N.

Conclusion (b): once in motion, only 29 N keep the box sliding uniformly. This allows the operator to reduce effort after initial startup.

**Step 5**: Evaluate acceleration with 80 N push.

Difference between push and kinetic friction: 80 N minus 29 N yields 51 N of net force.

Operation: 51 N divided by 12 kg. Result: 4.25 m/s². Assignment: acceleration of 4.25 m/s².

Comparison with safe limit: 4.25 m/s² > 3 m/s². The sudden push exceeds safe acceleration.

Conclusion (c): an 80 N push could damage internal components due to excessive acceleration. Controlled pushes below 65 N are recommended (which would produce approximately 3 m/s² maximum acceleration).

## Interpretation

The magnitude [[f_s]] in this industrial context represents the safety barrier protecting components from accidental movements. A 12 kg box on felt requires forces above 41 N to begin moving, meaning that light bumps or normal environmental vibrations will not displace boxes from their work positions.

The difference between starting force (41 N) and maintenance force (29 N) has important ergonomic implications. Operators experience "jolts" when boxes suddenly accelerate after overcoming the static threshold. This abrupt transition can cause muscle fatigue and component damage risk if not controlled.

The maximum acceleration analysis demonstrates that not just total force matters, but the difference between applied force and kinetic resistance. An 80 N push seems reasonable for a 12 kg box (less than 7 kgf), but the resulting 4.25 m/s² acceleration exceeds the safety limits of delicate electronic components. This illustrates that in industrial process design, specifications must be based on permitted acceleration, not just total forces.

Mass [[m]] plays a stabilizing role: heavier boxes require greater forces to start, but once in motion, their greater inertia also makes them more resistant to sudden velocity changes. For fragile components, heavier boxes may be safer than light ones, as long as the static threshold is not excessive for operators.
