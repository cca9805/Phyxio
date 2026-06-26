const e=`# Exam-type example

## Problem statement

A compound pulley system is used to lift a heavy load in an industrial warehouse setting. The specific system configuration includes two movable pulleys arranged in a block and tackle configuration, with four rope segments directly supporting the suspended load. The mechanical efficiency of this particular system has been estimated at 0.85, accounting for friction in the pulley axles and the inherent stiffness of the steel cable being used. The problem requires calculating both the theoretical ideal pulling force and the actual real force needed, then determining operational feasibility given human strength limitations.

## Data

- Load mass: 500 kg
- Gravitational acceleration: 9.8 m/s²
- Number of supporting segments: 4
- Mechanical efficiency: 0.85
- Maximum operator force: 300 N

Relevant magnitudes:
- [[W]]: load weight
- [[nSel]]: number of supporting rope segments
- [[eta]]: mechanical efficiency
- [[F_ideal]]: ideal pulling force
- [[F_real]]: real pulling force

## System definition

The system is a block and tackle with compound pulleys. The load hangs from movable pulleys that reduce the required force by distributing weight among multiple rope segments. The free end of the rope is where the operator applies pulling force.

## Physical model

The compound pulley model with losses will be applied, including mechanical efficiency to account for friction and deformations.

Formulas to use:

{{f:fuerza_ideal_poleas_compuestas}}

{{f:fuerza_real_poleas_compuestas}}

## Model justification

The model is appropriate because:
- Pulleys are in static equilibrium or quasi-static motion (constant velocity)
- Rope is inextensible and does not slip on pulleys
- Losses can be summarized in a global efficiency factor
- Number of segments is clearly identifiable in the diagram

## Symbolic solution

Step 1: Calculate load weight from mass and gravitational acceleration.

The weight of any object near Earth's surface is determined by the product of its mass and the local gravitational acceleration: [[W]] = m × g. This fundamental relationship gives the total downward force that the pulley system must overcome.

Step 2: Determine ideal pulling force using mechanical advantage.

Applying the ideal model formula:

{{f:fuerza_ideal_poleas_compuestas}}

The ideal force formula relates the load weight to the number of supporting rope segments. In a frictionless ideal system, each segment carries an equal share of the total load, allowing the pulling force to be reduced proportionally to the segment count.

Step 3: Calculate real pulling force including efficiency losses.

Applying the efficiency formula:

{{f:fuerza_real_poleas_compuestas}}

Real systems experience energy losses due to axle friction, rope deformation, and other non-ideal effects. These losses are captured by the efficiency factor, which increases the required pulling force above the ideal theoretical minimum.

Step 4: Evaluate operational feasibility through force comparison.

The calculated real force must be compared against the maximum sustainable force that a human operator can safely exert over the duration of the lifting operation.

## Numerical substitution

Step 1: Load weight.

Multiplying 500 kg by 9.8 m/s² gives 4900 N.

Step 2: Ideal force.

Dividing 4900 N by 4 segments gives 1225 N.

Step 3: Real force.

The product of segments times efficiency is 4 × 0.85, that is, 3.4. Dividing 4900 N by 3.4 gives approximately 1441 N.

Step 4: Comparison.

The required real force (1441 N) is almost five times greater than the maximum operator force (300 N). A single operator cannot move this load with this system.

## Dimensional validation

- [[W]]: force dimension (M L T⁻²), result in newtons. Correct.
- [[F_ideal]] and [[F_real]]: force dimension, consistent with [[W]]. Correct.
- [[nSel]] and [[eta]]: dimensionless. Correct.

Magnitude verification: Ideal force (1225 N) is less than weight (4900 N), consistent with mechanical advantage. Real force (1441 N) is greater than ideal, consistent with losses.

## Physical interpretation

The quantitative analysis reveals profound practical limitations that challenge simplistic theoretical assumptions about compound pulley systems. Although the system theoretically provides mechanical advantage of 4 through the distribution of load weight across four rope segments, real-world energy losses reduce this effective advantage to approximately 3.4. This 15% reduction represents significant dissipation of useful mechanical energy into heat through axle friction and rope deformation.

From a physical perspective, this dissipation reflects the fundamental tension between idealized mathematical models and real material behavior. Friction in pulley axles arises from microscopic surface interactions that convert ordered mechanical motion into random thermal motion at the atomic scale. Rope deformation under tension stores elastic potential energy, but hysteresis in the material means not all of this energy returns to the mechanical system during unloading. These processes are irreversible, governed by the second law of thermodynamics.

The 500 kg industrial load, representing approximately half a metric ton of material, would demand that an operator exert nearly 150 kilograms of force equivalent. This requirement far exceeds the sustainable working capacity of any human operator, who can typically maintain prolonged exertion of only 30-50 kilograms of force before experiencing dangerous fatigue. The musculoskeletal system of an average adult simply cannot generate or sustain such forces without risk of injury or catastrophic failure during operation.

This concrete example demonstrates the critical engineering principle that theoretical models must always be corrected for real-world inefficiencies. An inexperienced designer might erroneously calculate that four rope segments would be sufficient for a 500 kg load, assuming that an operator with 300 N maximum capacity (approximately 30 kgf) could safely manage the operation. Without accounting for efficiency losses, the miscalculation would suggest 1225 N as the required force, a value that appears manageable but proves dangerously insufficient in practice.

The broader physical insight concerns the conservation laws governing mechanical systems. While energy is always conserved, useful mechanical work diminishes through dissipative processes. Understanding where and how this dissipation occurs allows engineers to minimize losses through proper material selection, lubrication, and system design. To successfully move this load would require necessarily one of three alternatives: (a) implementing a system with additional rope segments (6 or 8) to push the real mechanical advantage above 5, (b) incorporating a motorized mechanical traction mechanism such as an electric winch to eliminate dependence on human muscular limitations, or (c) deploying multiple coordinated operators working simultaneously to aggregate their individual force capacities.

# Real-world example

## Context

In mountain rescue operations, specially trained emergency response teams frequently employ compact portable compound pulley systems to safely evacuate injured persons on rescue stretchers from dangerous terrain. In this specific scenario, an experienced rescue technician must design an appropriate mechanical system to carefully lower an occupied stretcher with an injured patient down a steep 30-meter deep ravine or cliff face. The total system weight including the patient, stretcher, and safety harness equipment is approximately 120 kg. For safe operation during the controlled descent, the rescue technician can safely and sustainably exert a maximum manual pulling force of 200 N without risk of fatigue-induced loss of control.

## Physical estimation

Total weight to lift: multiplying 120 kg by 9.8 m/s² gives approximately 1176 N, rounded to 1200 N for quick calculation.

To limit force to 200 N with typical efficiency of 0.9 in well-maintained rescue equipment, an effective mechanical advantage of at least 6 is needed (calculated as 1200 N divided by the product of 200 N times 0.9).

This implies a system with 6 or more supporting segments. A block and tackle with three movable pulleys provides 6 segments.

Required rope length: to descend 30 m with 6 segments, 180 m of rope must be deployed (30 m × 6 segments).

## Interpretation

The rescue system requires sufficient rope (180 m) and a safety brake mechanism. The mechanical advantage allows a single rescuer to control descent of 120 kg with moderate effort (200 N, equivalent to lifting 20 kg).
`;export{e as default};
