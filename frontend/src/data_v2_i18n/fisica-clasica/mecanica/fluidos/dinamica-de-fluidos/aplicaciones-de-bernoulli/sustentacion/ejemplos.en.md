# Exam-type example

## Problem statement

A light aircraft of mass 1200 kg flies in air of density 1.225 kg/m³ at a speed of 60 m/s. Its wing reference area is 16 m². Compute the lift coefficient required for straight and level flight, and decide whether the result is reasonable.

## Data

- Mass: 1200 kg
- Air density: 1.225 kg/m³
- Speed: 60 m/s
- Wing area: 16 m²
- Gravity [[g]] = 9.81 m/s²

## System definition

We take the complete aircraft as the system in level flight. The problem does not ask for the local pressure distribution, but for the total force required to balance weight. The physical target is therefore the lift coefficient [[C_L]] that makes [[L]] comparable to [[W]].

## Physical model

We use the global lift equation:

{{f:sustentacion_general}}

The relation links air density, speed, wing area and lift coefficient.

In level flight, the vertical condition is:

{{f:equilibrio_vuelo}}

The vertical balance equates lift and weight.

## Model justification

The speed corresponds to a low-subsonic regime, so air may be treated as approximately incompressible. The statement does not describe stall or abrupt maneuvering. Therefore, using the lift coefficient [[C_L]] as a summary of geometry, angle of attack and configuration is reasonable as a first approximation.

## Symbolic solution

The solution uses the core relations of the leaf. As a conceptual check, a local reading could estimate the pressure difference and then connect that mean pressure contrast with force.

{{f:sustentacion_general}}

{{f:equilibrio_vuelo}}

{{f:bernoulli_diferencia_presion}}

{{f:fuerza_por_presion}}

Equate lift and weight.

Solve for the coefficient as the ratio between twice the weight and the dynamic-pressure area product.

## Numerical substitution

We use the core relations of the leaf, although this statement directly substitutes only the global coefficient. The pressure difference remains the alternative reading if local upper and lower speeds are measured.

{{f:sustentacion_general}}

{{f:equilibrio_vuelo}}

{{f:bernoulli_diferencia_presion}}

{{f:fuerza_por_presion}}

The numerical substitution gives a moderate and realistic lift coefficient [[C_L]].

The result is approximately 0.33.

## Dimensional validation

The numerator has force units and the denominator is dynamic pressure times area, also a force. The ratio is dimensionless, as the lift coefficient must be.

## Physical interpretation

A value near 0.33 is reasonable for a light aircraft in stabilized flight. It is not an extreme stall value and does not require aggressive high-lift devices. The result indicates sufficient margin if the profile remains attached.

# Real-world example

## Context

A Formula 1 wing is designed to generate downward aerodynamic load. The basic physics is the same as for a wing, but the effective sign of the lift coefficient is chosen so that the resultant force points toward the ground.

## Physical estimation

As an order-of-magnitude estimate, if the car doubles its speed, the aerodynamic load increases much more strongly than a simple doubling. This explains why the car can corner at high speed with strong grip, but also why grip drops sharply when speed decreases.

## Interpretation

For a fuller reading, the result can be compared with a mean pressure difference [[dp]] over the profile. If the wing area is small, a large force requires a large pressure contrast; if the area increases, the same force can be obtained with a smaller contrast. This transfer prevents treating the wing as a black box: the force comes from distributed pressure, not only from a coefficient.

The same model that estimates positive lift can estimate negative lift. The difference is not the formula, but the orientation of the profile, the effective sign of the coefficient and the dynamic interpretation of the force. In both cases, the result must be compared with weight or available normal force.

As an additional check, imagine that the aircraft reduced its speed while keeping the same coefficient. The force would not decrease linearly, but much more strongly. This explains why stall speed is an operational datum: below a certain margin, even a correct wing cannot produce the required force without greatly increasing angle of attack.

The example shows that the equation is not mere substitution. It decides whether the result lies in a plausible regime, whether the coefficient is realistic, and whether comparison with weight allows flight.

Another way to check coherence is to reason what would happen if each parameter changed separately. If the wing area increases, the same aircraft needs a smaller coefficient to remain supported. If air density decreases with altitude, the required coefficient increases or more speed is needed. If speed decreases, the lift margin drops strongly. This parametric analysis is part of the example because it detects mistakes even when the numerical substitution looks correct.

It is also important to remember that the pressure difference is not decorative. If pressure sensors measured mean pressures over the wing, a local pressure-force relation would provide an alternative lift estimate. If both readings differ strongly, rounding is not the solution: it means the real flow, coefficient, or effective area is not being represented by the same model.