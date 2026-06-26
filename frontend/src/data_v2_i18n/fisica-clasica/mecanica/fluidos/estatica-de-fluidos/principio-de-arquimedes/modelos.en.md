# Buoyancy and Thrust Models

## Ideal model
The ideal model of Archimedes' Principle is based on pure fluid statics, where it is assumed that the buoyant force is exclusively a geometric and densitometric consequence. In this framework, the fluid behaves as a continuous, incompressible medium at absolute rest, allowing the magnitude of displacement to be a direct linear function of the submerged volume. It is the standard model used in general physics teaching and in the preliminary design of floating structures, providing amazing precision for the vast majority of conventional nautical and industrial applications without the need to resort to complex computational fluid dynamics.

## Hypotheses
For the Archimedes model to be strictly operational, we must accept the following simplifying and restrictive hypotheses:
1.  **Fluid at absolute rest**: Any macroscopic movement of the fluid (currents, waves, turbulence) that could generate additional dynamic forces such as lift or viscous drag is neglected.
2.  **Incompressibility**: It is assumed that both the fluid ([[rho_f]]) and the solid have constant densities throughout their volume, ignoring changes due to extreme hydrostatic pressure variation.
3.  **Uniform gravitational field**: The acceleration of gravity [[g]] is considered constant throughout the space occupied by the submerged body.
4.  **Absence of surface effects**: Surface tension and capillarity forces acting at the interface between the fluid and the air at the waterline are neglected.
5.  **Rigid body**: The submerged object does not suffer structural deformations due to external pressure that alter its volume [[V_des]].

## Quantitative validity domain
This model maintains its predictive integrity under the following boundary conditions:
-   **Moderate depth**: Valid as long as the depth h < 2000text{ m}. Above this limit, water compressibility can alter the result by 1%.
-   **Macroscopic scale**: The object must be significantly larger than the effects of the liquid's surface tension, typically R > 1text{ cm}.
-   **Zero or negligible velocity**: Useful for static systems. If the body moves, the error in the net force will exceed 5% when dynamic pressure terms have the same **order of magnitude** as the buoyancy.

## Model failure signals
You should immediately identify that the ideal Archimedes model is failing or insufficient if you observe the following:
-   The object, even if denser than the fluid (such as a steel needle), remains on the surface. This indicates that **surface tension** has taken control.
-   The object experiences unpredictable oscillations or lateral movements. This suggests the presence of **dynamic vortices** or non-static currents.
-   For elastic bodies submerged at great depth, if the calculated buoyancy fails to predict equilibrium, it is a sign that the **volume has been mechanically compressed**.

## Extended or alternative model
When should the model be changed? When the system involves moving fluids or bodies whose geometry changes under pressure, the pure hydrostatic model must be replaced by the **Navier-Stokes Dynamic Model** or by the study of **Compressible Buoyancy**. In these models, Archimedes' buoyancy is considered only as a force source term within a much more complex momentum balance that includes dynamic pressure (1/2 rho v^2) and the viscous stress tensor. For offshore ships, the extended model must include **metacentric stability analysis**, which evaluates recovering equilibrium after a lateral tilt, something the simple static model cannot predict on its own.

## Operational comparison
The **ideal model** shines for its analytical simplicity; it allows quick calculations of payload in ships, density balances, and basic aerostatics with minimal uncertainty. In contrast, the **extended model** (dynamic and compressible) is the non-negotiable requirement in deep-sea submarine engineering, high-speed underwater drone design, and stellar astrophysics, where fluids are highly compressible gases and convection currents dominate the physics of the system.

