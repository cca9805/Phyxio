# Physical models: Venturi effect

## Ideal model
The ideal model of the Venturi effect is based on Bernoulli's assumptions for a perfect fluid. The fluid is considered incompressible (constant density [[rho]]), non-viscous (no internal friction or friction with the walls), and the flow is steady and irrotational. Under these conditions, energy is perfectly conserved between static pressure and kinetic energy, allowing the pressure drop [[dp]] to be an exact function of the square of the velocities [[v1]] and [[v2]].

## Hypotheses
1.  **Incompressible fluid**: The fluid density does not change significantly despite pressure variations [[p1]] and [[p2]].
2.  **Steady flow**: Fluid properties at any point in space do not vary with time.
3.  **No friction**: Head losses due to fluid viscosity or the roughness of areas [[A1]] and [[A2]] are not considered.
4.  **Horizontal tube**: The effect of gravity is neglected as there are no height changes.

## Quantitative validity domain
For the Venturi model to be physically reliable, the following quantitative criteria must be met:
- **Incompressible regime**: In gases, the velocity must be less than Mach 0.3 (approximately 100 m/s in air at sea level). Above this value, the density [[rho]] stops being constant.
- **Flow regime**: The Reynolds number must be high enough (Re > 4000) for the flow to be fully turbulent and the velocity profile to be predictable, but not so high that friction dominates over the pressure effect.
- **Relative error**: The ideal model's predictions usually deviate by less than 2% from a well-designed real tube with a smooth exit cone.

## Model failure signals
- **Cavitation**: If the calculated pressure [[p2]] falls below the liquid's vapor pressure, bubbles will appear and the model will no longer be valid.
- **Excessive head loss**: If the measured real pressure difference is much greater than that calculated by `dp_venturi`, friction is dominating the system.
- **Compressibility**: If when applying the model to a gas the velocity result approaches the speed of sound, the incompressible model will produce massive errors.

## Extended or alternative model
The real model incorporates the **discharge coefficient (C)**, which corrects the ideal formula to account for viscosity and non-uniform velocity profile. The real flow rate equals the ideal flow rate multiplied by C, with C typically ranging from 0.95 to 0.99 for standard Venturi tubes. In cases of high gas velocities, the **Saint-Venant compressible flow model** must be used, which accounts for density variations.

## Operational comparison
The comparison with alternative models serves to decide whether a static, dynamic, linear, quadratic, elastic, or purely geometric description is appropriate. When friction effects are significant or the Mach number exceeds 0.3, **it is recommended to switch to** a real or compressible flow model to maintain accuracy. The best choice is the one that preserves physical meaning with the fewest debatable assumptions and with a verifiable interpretation in the real scenario.