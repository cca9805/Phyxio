# Exam-type example

## Problem statement

A rigid, perfectly thermally insulated container has two compartments separated by a membrane. Compartment A holds 2 kg of liquid water at 80 °C and compartment B holds 3 kg of liquid water at 20 °C. The membrane is removed and the two volumes of water mix. Determine the final temperature of the mixture, verify whether the system can be considered isolated, and reason about the spontaneous direction of the process using the second law. The specific heat of water is 4186 J/(kg·°C).

## Data

- Mass of hot water: 2 kg
- Initial temperature of hot water: 80 °C
- Mass of cold water: 3 kg
- Initial temperature of cold water: 20 °C
- Specific heat of water: 4186 J/(kg·°C)
- Boundary type: rigid, adiabatic, impermeable

## System definition

The thermodynamic system is the entire 5 kg of water contained in the vessel. The boundary is defined by the vessel walls, which are rigid (no external volume change), adiabatic (no thermal conduction to the exterior), and impermeable (no mass flow to the surroundings). The process is the mixing of the two water volumes after the internal membrane is removed.

## Physical model

The system is modeled as an **isolated system**. The boundary conditions impose zero [[Q_ais]] (adiabatic walls) and zero [[W_ais]] (rigid walls). By the first law applied to the isolated system, the total [[DeltaU]] of the system is zero. This means that the energy released by the hot water exactly equals the energy absorbed by the cold water. For the mixing temperature under the assumption of constant specific heat, energy conservation between the two subsystems applies.

## Model justification

The isolated system model is valid because the container is metallic, thick, and thermally insulated, and the mixing process occurs over a short time (seconds to minutes). Under those conditions, heat leakage to the surroundings is negligible. The boundary is effectively adiabatic on the timescale of the process. If the process lasted hours in a cold room, the model would no longer be valid and the system would need to be treated as closed with heat exchange. The internal membrane is not part of the system boundary: its removal is an internal process that does not violate isolation.

## Symbolic solution

Applying the first law to the isolated system:

{{f:primer_principio_aislado}}

With zero [[Q_ais]] and [[W_ais]], [[DeltaU]] is zero. Total internal energy is conserved, which under constant specific heat implies that the heat released by the hot water equals the heat gained by the cold water. Expressing this balance in terms of mass, specific heat, and temperature change yields the equilibrium temperature.

The second law establishes that [[S_ais]] must be greater than or equal to zero for a spontaneous process in an isolated system:

{{f:entropia_aislado}}

The mixing of two bodies at different temperatures is an irreversible process, so [[S_ais]] will be strictly positive.

## Numerical substitution

The final mixing temperature follows from the energy balance. The energy released by the hot water is 2 kg times 4186 J/(kg·°C) times (80 °C minus the final temperature). The energy gained by the cold water is 3 kg times 4186 J/(kg·°C) times (the final temperature minus 20 °C). Setting both expressions equal and solving for the final temperature:

Multiplying the coefficients: hot water has a coefficient of 2 × 4186, giving 8372 J/°C. Cold water has a coefficient of 3 × 4186, giving 12558 J/°C. The total denominator is 20930 J/°C.

The numerator is 8372 × 80 plus 12558 × 20, equivalent to 669760 J plus 251160 J, totaling 920920 J. Dividing by 20930 J/°C gives a final temperature of approximately 44 °C.

Verification: energy released by hot water is 8372 × (80 − 44), that is 8372 × 36, approximately 301392 J. Energy absorbed by cold water is 12558 × (44 − 20), that is 12558 × 24, approximately 301392 J. The equality confirms the result. Therefore [[DeltaU]] ≈ 0 J, consistent with the isolated system.

## Dimensional validation

The unit of the final temperature is obtained from the ratio of energy in joules to the product of mass in kg and specific heat in J/(kg·°C). The ratio of units resolves to degrees Celsius, which is the correct unit for mixing temperature. The units of internal energy are joules, consistent with dimension `[M L² T⁻²]`. Specific heat has dimension `[L² T⁻² Theta⁻¹]`; multiplied by mass `[M]` and temperature `[Theta]` it yields energy units `[M L² T⁻²]` ✓.

## Physical interpretation

The result [[DeltaU]] ≈ 0 J confirms that the system behaved as an ideal isolated system during the mixing process. Total internal energy was conserved: the hot water released exactly the energy that the cold water gained. The final temperature of 44 °C is the thermal equilibrium temperature that maximizes the entropy of the system under the constraint of fixed [[U]].

The mixing is an irreversible process because it starts from a non-equilibrium state (two regions at different temperatures) and evolves toward equilibrium (uniform temperature). [[S_ais]] is positive, confirming that the process is spontaneous and cannot be reversed without external intervention. If one tried to separate the hot and cold water once mixed without supplying external work, the second law forbids it: [[S_ais]] cannot decrease in the isolated system.

If the mass of cold water were larger (for instance, 10 kg), the final temperature would be much closer to 20 °C, showing that the equilibrium temperature depends on the "available mass" of each component. This illustrates that [[DeltaU]] remains zero regardless of the mass ratio, while [[S_ais]] would increase even more as the initial temperature gradient between components grows.

---

# Real-world example

## Context

A 2-litre laboratory Dewar flask is used to store liquid nitrogen at −196 °C in a cryobiology laboratory. The technician needs to estimate how long the flask can be considered an effective isolated system before evaporation of the nitrogen due to heat absorption from the surroundings becomes significant (greater than 5% of the contents). The heat absorption rate of the Dewar flask is approximately 0.5 W.

## Physical estimation

The total energy stored in the liquid nitrogen is estimated as the mass multiplied by the latent heat of vaporization. Liquid nitrogen has a density of 808 kg/m³ at −196 °C, so 2 litres contain approximately 1.6 kg of nitrogen. The latent heat of vaporization of nitrogen is approximately 199 kJ/kg.

The total phase-change energy available is 1.6 kg multiplied by 199000 J/kg, approximately 318400 J. Five percent of that value is approximately 15920 J. With an absorption rate of 0.5 W (0.5 J/s), the time required to absorb that amount of heat is 15920 J divided by 0.5 J/s, resulting in approximately 31840 seconds, equivalent to just under 9 hours.

## Interpretation

The Dewar flask can be considered an effective isolated system for approximately 9 hours before nitrogen evaporation exceeds 5% of the contents. During that time, [[Q_ais]] is sufficiently small for the isolated system model to be a valid practical approximation. After that time, the system must be treated as an open system (with matter flow in the form of escaping nitrogen gas) or as a closed system with non-negligible [[Q_ais]].

This example illustrates that isolation is always a temporal approximation: the better the boundary (in this case, a vacuum Dewar with reflective coating), the longer the period during which the isolated system idealization holds. To design longer-duration storage, one would need to reduce the heat absorption rate by improving the vacuum or adding additional insulating layers.
