# Pipe Flow - Model and Validity

## Ideal Model
The Darcy-Weisbach model treats pipe flow as an energy transport system where losses are proportional to the square of the velocity. It is based on the physical premise that the fluid is a continuous medium and that the resistance to movement comes from the interaction between fluid layers and wall roughness. In this scenario, the pressure drop [[dp]] is visualized as a negative slope in the hydraulic grade line, representing the transformation of mechanical energy into residual heat.

## Hypotheses
- **Steady flow**: The flow rate [[Q]] and velocity [[v]] at any point do not change with time.
- **Incompressible fluid**: The density [[rho]] is constant throughout the length [[L]].
- **Fully developed flow**: The velocity profile does not change along the studied section.
- **Constant cross-section pipe**: The diameter [[D]] remains uniform, without obstructions or deposits.
- **Dominant major losses**: It is assumed that friction losses in the straight pipe far outweigh minor losses in fittings.

## Quantitative validity domain
For the Darcy-Weisbach analysis to be a precise engineering tool, the following technical criteria must be met:
- **Compressibility Criterion**: For gases, the Mach number must be below 0.3. If Ma > 0.3, density changes invalidate the standard Darcy model.
- **Length Criterion**: The pipe section must be long enough (L/D > 40) for entrance and exit effects to be negligible.
- **Newtonian Criterion**: The fluid must have a constant viscosity [[mu]] for a given velocity gradient. Fluids like blood or sludge require corrections.

## Model failure signals
- **Vibrations and noises (Cavitation)**: If the pressure drops too low in narrowings, the fluid can boil at room temperature, invalidating the single-phase model.
- **Water hammer**: When valves are closed quickly, the steady-state model fails, and destructive pressure peaks occur.
- **Unexpected flow reduction**: Indicates that the actual roughness has increased due to corrosion, exceeding the design value of [[f]].

## Extended or alternative model
When extreme conditions invalidate basic hypotheses, a technical transition must be made:
- **TRANSITION CRITERIA FOR COMPRESSIBLE FLOW**: If the gas velocity exceeds Mach 0.3 or the drop [[dp]] is greater than 10% of the initial pressure, Darcy-Weisbach should be abandoned in favor of Fanno equations or isothermal flow.
- **NON-NEWTONIAN MODEL SWITCH TRIGGER**: For sludges, paints, or polymers, the switch TRIGGER is the variability of viscosity [[mu]] with shear stress. In these cases, the Power Law or Bingham Plastic model is used.
- **Hazen-Williams Equation**: Simplified empirical model for water networks at room temperature.

## Operational comparison
While the Darcy-Weisbach model is the gold standard for the design of industrial and civil long-distance networks, Navier-Stokes (CFD) models are mandatory when designing high-precision components such as fuel injectors or artificial heart valves, where local velocity profile detail is critical for safety and performance.
