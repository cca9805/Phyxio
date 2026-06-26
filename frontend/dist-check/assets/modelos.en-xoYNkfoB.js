const e=`# Physical models: fluid concept

## Ideal model
The ideal model of the fluid concept is based on the **continuum hypothesis**. In this model, we ignore the atomic and molecular nature of matter, treating the fluid as a mathematically continuous substance where properties (density [[rho]], velocity velocidad local, pressure) are defined at every point in space. Furthermore, the fluid is assumed to be **Newtonian**, meaning its resistance to motion is purely linear and proportional to the strain rate.

## Hypotheses
1.  **Continuity**: It is assumed that the representative elementary volume is large enough to average molecular fluctuations but small enough to be considered a differential point.
2.  **Newtonian Fluid**: Viscosity [[mu]] is considered a constant property of the material, independent of time and the applied shear stress [[tau]].
3.  **No-slip**: It is assumed that fluid molecules in contact with a solid do not slip relative to it, acquiring its same velocity.
4.  **Homogeneity**: At this basic level, properties are usually assumed to be uniform throughout the fluid mass.

## Quantitative validity domain
For the continuum model to be valid, the **Knudsen number** (Knudsen number defined as mean free path divided by macroscopic scale) must be less than 0.01 (Kn < 0.01).
- If Kn > 0.1, molecular effects begin to dominate, and the conventional fluid model fails.
- The Newtonian model is valid for the vast majority of simple fluids (water, air, mineral oils) at moderate velocities.

## Model failure signals
- **Inconsistency in viscosity**: If, when increasing the gradient [[du_dy]], the force does not increase proportionally, the fluid is non-Newtonian.
- **Breakdown of continuity**: In gases at very low pressure (extreme vacuum) or in nanometric scale channels, macroscopic results no longer coincide with experiments.
- **Severe turbulence**: When inertia greatly exceeds viscosity (Re > 4000), the velocity profile stops being linear, and the simple Couette flow model no longer describes the system.

## Extended or alternative model
For situations where the Newtonian model fails, **complex rheology** models (such as the Power Law model or viscoelastic fluids) are used. In cases of gas flow in microchannels or in the upper atmosphere, **it is recommended to switch to** **molecular dynamics** models or Boltzmann equations, which abandon the continuum hypothesis to deal directly with particle statistics.

## Operational comparison
The comparison with alternative models serves to decide whether a macroscopic or microscopic description is appropriate. The continuum model is extremely powerful and efficient for almost all terrestrial engineering applications, from hydraulics to ship design, while molecular models are reserved for extreme conditions of scale or pressure.\r
`;export{e as default};
