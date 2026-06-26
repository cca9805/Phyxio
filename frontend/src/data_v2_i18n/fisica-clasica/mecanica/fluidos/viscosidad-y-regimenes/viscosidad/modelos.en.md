# Viscosity - Model and Validity

## Ideal model
The fundamental model for the study of viscosity is the **Newtonian Fluid in Laminar Regime**. This model assumes that the fluid behaves as a continuous medium where internal friction is purely viscous and proportional to the strain rate. It is visualized as a series of infinitely thin layers sliding over each other, transmitting momentum in a purely molecular and linear manner. It is the gold standard for water, air, and most light oils under moderate flow conditions.

## Hypotheses
For this ideal model to be applicable, the following simplifying hypotheses must be met:
-   **Continuous Medium**: The atomic nature of matter is disregarded; the fluid is treated as an uninterrupted mass.
-   **Incompressibility**: It is assumed that the density [[rho]] is constant, which simplifies the relationship between dynamic and kinematic viscosity.
-   **Linear Behavior**: It is postulated that viscosity [[mu]] is an exclusive property of the material and temperature, independent of the force with which it is "pushed" or deformed.
-   **Laminar Regime**: It is assumed that there are no eddies or macroscopic mixing between the fluid layers; energy transport is ordered and predictable.
-   **No Memory Effects**: The fluid has no elasticity; once the stress ceases, the deformation is not recovered (unlike an elastic solid).

## Quantitative validity domain
Newton's Law of viscosity is operational under well-defined physical limits:
-   **Reynolds Number [[Re]]**: In closed ducts, the model is valid as long as [[Re]] < 2300. Above this value, inertial forces begin to destabilize the viscous layers.
-   **Knudsen Number (Kn)**: In gases, the continuous model is only valid if Kn < 0.01. In extreme vacuum systems or nanotechnology, molecules are so far apart that macroscopic viscosity loses its original meaning.
-   **Time Scales**: For very viscous fluids, the model is valid as long as deformation processes are slow compared to the molecular relaxation time.

## Model failure signals
A researcher or engineer must be alert to the following evidence that the Newtonian model is no longer accurate:
-   **Non-linearity**: If doubling the strain rate [[dudy]] does not exactly double the shear stress [[tau]], the fluid exhibits non-Newtonian behavior.
-   **Pressure Fluctuations**: The appearance of vibrations or noise in the flow indicates the start of the transition to turbulence, where molecular viscosity is no longer sufficient to dampen motion.
-   **Orientation Effects**: In complex fluids (such as polymers), if viscosity changes according to the flow direction, the ideal isotropic model has failed.

## Extended or alternative model
When the ideal model is insufficient, more sophisticated frameworks are used:
-   **Power Law Models (Oswald-de Waele)**: For pseudoplastic fluids (that thin with stress) or dilatant fluids (that thicken).
-   **Viscoelastic Models (Maxwell or Kelvin-Voigt)**: For substances that exhibit a response intermediate between a liquid and an elastic solid (such as mucus or certain gels).
-   **Eddy Viscosity**: In turbulent flows, an extra term is added representing the momentum transport performed by macroscopic vortices.

## Operational comparison
The Newtonian fluid model is preferred in most civil and hydraulic engineering applications for its extraordinary mathematical simplicity. However, **when to switch** to food industry processes, polymer chemistry, or biomechanics (blood) is imperative to abandon linearity and adopt complex rheology models. While the ideal model allows for exact analytical solutions for velocity profiles, the extended model usually requires heavy numerical methods (CFD) to avoid underestimating pumping forces or pressure drops in the system.

