const e=`\uFEFF# Hydrodynamics - Model and Physical Validity

## Ideal model
The ideal model in hydrodynamics is based on the concept of an **ideal fluid** or Bernoulli fluid. In this scheme, the liquid is treated as a continuous medium that slides without any internal resistance (zero viscosity) and cannot be compressed under any circumstances. This model allows using Bernoulli's equation in its pure form, relating pressure, velocity, and height as a closed system of mechanical energy. It is extremely useful for a first approximation in engineering, for understanding the Venturi effect, or for calculating discharge velocities in large tanks (Torricelli's Theorem). However, it ignores that in reality every fluid particle interacts with its neighbors, generating friction and heat.

## Hypotheses
For the results of this model to be physically acceptable, we must assume the following hypotheses:
1.  **Incompressible fluid**: Density [[rho]] remains constant throughout the domain. This is valid for almost all liquids under normal pressure conditions.
2.  **Steady flow**: Fluid properties (velocity [[v]], pressure [[p]]) at any point in space do not change with time. The flow "picture" is always the same.
3.  **Irrotational flow**: There are no small-scale eddies or vortices; particles do not rotate on their own axis.
4.  **Negligible viscosity**: It is assumed that there are no energy losses due to internal friction or against conduit walls.
5.  **Flow along a streamline**: Equations are applied following the path of a specific particle.

## Quantitative validity domain
The ideal hydrodynamic model has a validity domain well defined by dimensionless parameters:
-   **Reynolds Number (numero de Reynolds)**: The Bernoulli model is an excellent approximation when numero de Reynolds is very large (inertia-dominated flow) and we are far from solid walls. However, for numero de Reynolds < 2300 (laminar regime), viscous effects are too important to be ignored.
-   **Mach Number (Ma)**: For the incompressibility hypothesis to be valid, fluid velocity [[v]] must be much lower than the speed of sound in that medium (Ma < 0.3). In water, this means velocities below 450text{ m/s}.
-   **Geometric scale**: The model works best in large-diameter conduits where the surface-to-volume ratio is small, minimizing the impact of the viscous boundary layer.

## Model failure signals
We know that the ideal model is no longer valid when we observe the following:
-   **Unexpected pressure drops**: If the pressure measured at the end of a pipe is much lower than calculated by Bernoulli, viscosity is dissipating energy.
-   **Appearance of turbulence**: If the flow becomes chaotic and noisy, the simple energy balance can no longer predict local behavior.
-   **Cavitation**: If the model predicts negative pressures or pressures very close to vapor pressure, the fluid is likely to change phase, invalidating the liquid continuous medium hypothesis.
-   **Fluid heating**: The appearance of a temperature gradient indicates that mechanical energy is being transformed into internal energy (heat), something the ideal model does not contemplate.

## Extended or alternative model
When the ideal model fails, we resort to the **Extended Bernoulli Model** or the **Steady State Energy Equation**. This model incorporates the **head loss** term (h_L) and shaft work (h_{pump} or h_{turbine}).
{{f:head_hidro}}
This approach allows designing real pumping systems where viscous friction is the dominant factor. If the flow is extremely complex or turbulent, time-averaged **Navier-Stokes Equations** (RANS) must be employed through Computational Fluid Dynamics (CFD) simulations, which allow modeling momentum transfer at the eddy level.

## Operational comparison and transition
-   **When to change models?**: The ideal Bernoulli model should be abandoned and transitioned to the real model (with losses) as soon as the conduit length exceeds 50 times its diameter, or when there are fittings like elbows and valves that dissipate more than 5% of total energy. For very viscous fluids (oils) or low Reynolds regimes (numero de Reynolds < 2000), the ideal model is totally invalid, and Poiseuille's law or empirical friction models should be used.
-   **Bernoulli Model (Ideal)**: Useful for quick conceptual design and short nozzles.
-   **Loss Model (Real)**: Essential for distribution networks and long-range pumping.
-   **Computational Model (CFD)**: Necessary for valve geometries and flows with phase change.\r
`;export{e as default};
