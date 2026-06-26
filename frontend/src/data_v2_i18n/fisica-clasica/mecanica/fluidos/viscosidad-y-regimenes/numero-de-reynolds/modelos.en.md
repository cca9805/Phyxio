# Models and Scope of the Reynolds Number

## Ideal model
The ideal Reynolds number [[Re]] model assumes that flow behavior depends exclusively on the balance between inertia and viscosity, ignoring effects of compressibility (Mach number), surface tension (Weber number), or gravitational forces (Froude number). It is based on the continuous and Newtonian fluid hypothesis, which provides a mathematical framework for scaling and similarity in fluid mechanics.

## Hypotheses
1.  **Newtonian Fluid:** Viscosity [[eta]] is constant and independent of the strain rate, ensuring a linear relationship between stress and deformation.
2.  **Steady State:** Flow properties do not vary significantly with time on a macroscopic scale, allowing for time-averaged analysis.
3.  **Incompressibility:** Density [[rho]] remains constant throughout the fluid domain, which is typically valid for liquids and low-speed gases.
4.  **Defined Geometry:** A clear and unique characteristic length [[L]] is assumed to dominate the system dynamics, such as the diameter of a pipe or the chord of an airfoil.

## Quantitative validity domain
*   **Laminar Regime:** Valid for [[Re]] lower than 2300 in internal circular ducts. In this zone, energy losses are proportional to velocity [[v]].
*   **Transition Zone:** [[Re]] between 2300 and 4000. The model is highly sensitive to initial conditions, wall roughness, and external vibrations.
*   **Turbulent Regime:** [[Re]] greater than 4000. In this domain, the Reynolds model must be complemented with boundary layer theories and empirical friction factors (e.g., Colebrook or Blasius).
*   **Compressibility Limit:** The model begins to fail when the Mach number exceeds 0.3, as density changes become significant and shock waves may appear.

## Model failure signals
The Reynolds model "fails" or becomes insufficient when:
- **Compressibility effects:** Shock waves are observed, indicating that the Mach number is now the dominant parameter.
- **Non-Newtonian behavior:** In fluids like blood, polymers, or oobleck, where [[eta]] is not constant, a single Reynolds number cannot describe the entire flow state.
- **Micro-scales:** Molecular scales are reached where the continuous medium hypothesis is no longer valid (high Knudsen number), requiring kinetic theory instead of Navier-Stokes.
- **Thermal dominance:** Buoyancy forces are comparable to inertial ones (natural convection), requiring the Grashof or Rayleigh numbers for accurate description.

## Extended or alternative model
When the Reynolds number [[Re]] is not enough, one resorts to:
- **Mach Number:** For high-speed flows where density changes and acoustic energy dissipation are relevant.
- **Prandtl Number:** To link the momentum diffusivity (Reynolds) with thermal diffusivity in heat transfer problems.
If the system presents extreme thermal variations or speeds close to the speed of sound, it is advisable to transition to computational fluid dynamics (CFD) models that solve the full Navier-Stokes equations with coupled energy and pressure-density balances.

## Operational comparison
While the Reynolds number gives us the "state" of the fluid (ordered vs chaotic), the **Fanning Number** or **Darcy Factor** gives us the operational consequence (energy loss). In industrial practice, Reynolds is the independent variable that determines the choice of pumps, the diameter of pipes, and the cooling capacity of a system. Understanding its limits ensures that we don't apply laminar simplifications to turbulent systems, which would result in underestimating the required power by orders of magnitude.