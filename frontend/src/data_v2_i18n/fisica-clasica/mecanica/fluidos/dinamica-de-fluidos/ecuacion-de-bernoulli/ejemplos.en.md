# Bernoulli's Equation — Guided Examples

# Exam-type example

## Problem statement
A large water tank is open to the atmosphere. The pressure at the free surface is atmospheric pressure. The water velocity [[v]] at the surface is practically zero. A small orifice is opened in the lateral wall of the tank, at a depth of 5.0 m below the free surface. The water density is [[rho]] = 1000 kg/m³ and gravitational acceleration [[g]] = 9.81 m/s². Determine the exit velocity of the water through the orifice and the dynamic pressure [[q]] at the exit section.

## Data
- Pressure at the surface [[p]]: 101 325 Pa (point 1, atmospheric)
- Velocity at the surface [[v]]: zero (large tank)
- Elevation of the surface [[z]]: 5.0 m above the orifice
- Pressure at the orifice: 101 325 Pa (open to the atmosphere)
- Elevation of the orifice: 0 m (reference level)
- Water density [[rho]]: 1000 kg/m³
- Gravity [[g]]: 9.81 m/s²

## System definition
- Target variable: exit velocity and dynamic pressure [[q]] at the orifice.
- Governing equation: the total energy-balance relation

{{f:head}}

applied between the tank surface (point 1) and the orifice (point 2).

## Physical model
The ideal Bernoulli model is applied: steady flow, incompressible fluid with constant density [[rho]], inviscid flow, evaluated along the streamline connecting the free surface to the exit point at the orifice. The core magnitude [[H]] is assumed constant along this entire trajectory, directly relating the loss in elevation [[z]] with the increase in velocity [[v]] and dynamic pressure [[q]].

## Model justification
The incompressibility hypothesis is quantitatively guaranteed because the fluid is liquid water, whose density variation is zero under these pressures. The inviscid flow assumption is fully justifiable for a theoretical upper-bound estimate and assumes that all macro-energy is transferred without losses. The expected exit velocity allows us to assume there won't be drastic deviations caused by extreme friction in this first-order resolution.

## Symbolic solution

Applying the total energy-balance equation

{{f:head}}

between points 1 and 2 in pressure form:
the pressure, kinetic, and elevation contributions are balanced between free surface and orifice.
Since pressures cancel and the surface velocity is zero, the expression simplifies to **Torricelli's Theorem**, so the outlet speed depends on gravity and depth.
The dynamic pressure at the exit is obtained from its own core formula

{{f:q_dinamica}}

:
the dynamic pressure is evaluated from [[rho]] and the square of [[v]].
## Numerical substitution
The estimated outlet velocity is approximately 9.90 m/s.
The associated dynamic pressure is approximately 49 005 Pa.
## Dimensional validation
Unit consistency is verified: velocity is in meters per second and dynamic pressure is in pascals.
## Physical interpretation
Physically, the numerical result for the exit velocity yields 9.9 m/s, a value mathematically identical to the universal hypothetical velocity a particle would reach in free parabolic fall from a vertical elevation of 5 metres depth. This kinematic similarity consolidates the elegance of Torricelli's Theorem of 1643 and validates the profound premise of the model: net conservation in nature demands that all potential energy injected by the column at the initial point translates transparently into jet kinetic energy at the lower orifice. Measuring the final dynamic pressure [[q]], we observe a contribution of 49 005 Pa, which encapsulates the original hydrostatic value to the millimetre; Bernoulli and Archimedes' principle converge with robust formal exactness. This implies that the ideal model is correct, therefore providing an excellent upper bound.

---

# Real-world example

## Context
An engineer needs to estimate the water flow rate through a vertical pipe connecting two tanks at different heights. The upper tank has its surface at [[z]] = 10 m with atmospheric pressure. The pipe discharges into the lower tank at elevation zero, also at atmospheric pressure. The pipe has a constant diameter of 0.05 m.

## Physical estimation
Invoking the ideal Bernoulli model, we assume absolute conservation of [[H]] connecting the master surfaces of the two main water tanks. Being open to the atmosphere, pressures algebraically neutralise each other. Macroscopic velocities across the immense reservoir areas are marginal. The central balance is, in essence, a purely gravitational-to-kinetic exchange. Quantitatively, using the same total energy-balance relation

{{f:head}}

between the respective ends of the flow tube:
the ideal velocity estimate is approximately 14.0 m/s for a 10 m elevation difference.
Now quantifying the dynamic pressure with its derivative theorem

{{f:q_dinamica}}

:
the dynamic pressure estimate is approximately 98 000 Pa.
The resulting volumetric flow rate yields as a fundamental ideal estimate:
the ideal reference flow rate is about 2.75 times 10 to the power minus 2 cubic meters per second, equivalent to 27.5 L/s.
## Interpretation
The main study elevation mathematically reveals the supreme theoretically sustainable flow: 27.5 litres per second, structurally bounding any real empirical project. Additionally, this strongly indicates and highlights the monumental dynamic pressure obtained (98 000 Pa, virtually one physical atmosphere). In the plane of tangible tolerances, massive turbulence emerges with a Reynolds number exploding the empirical scale (700 000). Under these violent turbulent gradients, the pure ideal model yields its physical sovereignty; if we applied Darcy-Weisbach and took the real friction factor of 0.015 for roughness, the gigantic frictional losses would ruin the full potential of the drop, exceeding 10 metric metres, firmly forcing a non-negotiable decrease in flow velocity until solving its new iterated energy balance. Consequently, the ideal preliminary diagnosis was phenomenally effective in demonstrating the absolute limit of the design, even though entropic realities mandate a mandatory subsequent revision where friction dominates.

