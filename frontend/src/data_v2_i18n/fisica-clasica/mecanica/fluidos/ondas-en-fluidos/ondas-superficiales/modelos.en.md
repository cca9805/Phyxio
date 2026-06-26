# Physical Models of Surface Waves

## Ideal model
The fundamental model for the study of waves is **Airy's Linear Theory**. This model describes the propagation of gravity waves on the surface of an incompressible and non-viscous fluid. It assumes that the flow is irrotational, which allows the Navier-Stokes equations to be simplified to a Laplace equation for the velocity potential. The Airy model is a first-order approximation that works exceptionally well for waves whose height is small compared to their wavelength and the water depth.

## Hypotheses
For the Airy model to be applicable, the following physical premises must be met:
1. **Small Amplitudes:** The wave height is much smaller than the wavelength [[lambda]] and the depth [[h]]. This allows for the linearization of the surface boundary conditions.
2. **Ideal Fluid:** Water viscosity and surface tension are neglected (except for millimeter-scale waves).
3. **Flat Bottom:** The depth [[h]] is assumed to be constant in the analysis region.
4. **Irrotational Flow:** There are no eddies or significant turbulence in the fluid body.

## Quantitative validity domain
The model is divided into three operational domains based on the relative depth ratio:
1. **Deep Water:** When the depth-to-wavelength ratio. The velocity [[c]] only depends on [[lambda]].
2. **Shallow Water:** When the depth-to-wavelength ratio. The velocity [[c]] only depends on [[h]].
3. **Transition Water:** For intermediate values, the complete formula with the corresponding surface-wave expression must be used.
Furthermore, the linear model collapses if the wave slope (wave steepness, where H is the height) exceeds the Michell limit (the corresponding surface-wave expression), at which point the wave becomes unstable and breaks.

## Model failure signals
- **Wave Breaking:** If you observe that the wave crest becomes pointed and crumbles into foam (Stokes waves), the linear model is no longer valid.
- **Surface Tension Effects:** If the wavelength [[lambda]] is less than 1.7 cm, gravity ceases to be the primary restoring force and the model must be changed to capillary waves.
- **Friction Dissipation:** In very shallow water with rough bottoms, the ideal model underestimates energy loss.

## Extended or alternative model
For situations that exceed the previous limits, **higher-order or non-linear models** are used:
- **Stokes Waves:** For large amplitude waves in deep water.
- **Boussinesq Equations:** Used to model wave propagation in coastal areas where dispersion and non-linearity are equally important.
- **Non-Linear Shallow Water Equations:** For the study of floods and the formation of shock fronts (bores) in rivers.

## Transition of model
**When is it convenient to change models?** The Airy model collapses and a transition to an alternative model must be made obligatorily in the following critical scenarios:
1. The wave height H approaches the depth value [[h]] (typically H > 0.8h), indicating that the wave is about to break.
2. The Ursell number (the Ursell number) is much greater than 1, indicating that non-linear effects dominate over dispersion.
3. It is necessary to model sediment transport or coastal turbulence, where viscosity is no longer negligible.

## Operational comparison
Airy's ideal model stands out for its mathematical elegance and predictive capacity for general maritime climate. While non-linear models require heavy computer simulations, Airy allows for quick estimates of speed [[c]] and period. However, for port engineering and coastal defense, extended models are mandatory to capture the real energy of wave impact.