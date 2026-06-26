# Navier-Stokes Intro — Model and Validity

## Ideal model
The **ideal model** of Navier-Stokes in its introductory version is based on the simplification of the momentum balance for a viscous fluid circulating through a conduit under steady state conditions and fully developed flow. In this scenario, the complexity of the vector differential equation is reduced to a linear balance of forces per unit volume, where mechanical energy is dissipated exclusively by internal friction.

Under these conditions, the balance is expressed as:

For the simplest case (horizontal and steady), the model predicts that the pressure gradient is exactly balanced by the viscous diffusion term, resulting in the **Poiseuille Profile**.

## Hypotheses
For the simplified Navier-Stokes model (Hagen-Poiseuille) to be 100% applicable, the following hypotheses must be met simultaneously:

1. **Newtonian Fluid**: It is assumed that the dynamic viscosity [[mu]] is constant with respect to the deformation rate. Output does not thicken or thin due to moving faster.
2. **Laminar Regime**: Viscous forces must be dominant over inertial forces. This occurs when the Reynolds number [[Re]] is less than 2300 in circular pipes.
3. **Fully Developed Flow**: It is assumed that we are far enough from the tube inlet that the velocity profile is invariant. This implies that the fluid acceleration a is zero.
4. **Incompressibility**: The fluid density [[rho]] is considered constant throughout the domain. Valid for almost all liquids and for gases at moderate speeds.
5. **No-Slip Condition**: It is assumed that fluid molecules in direct contact with the solid boundary have zero velocity relative to the wall.

## Quantitative validity domain
The applicability of the model is strictly defined through dimensional and dimensionless parameters:

| Parameter | Validity Range | Out-of-Range Effect |
| :--- | :--- | :--- |
| **Reynolds Number ([[Re]])** | 0 < [[Re]] < 2300 | Above 2300, flow enters transition and the laminar model fails. |
| **Mach Number (Ma)** | Ma < 0.3 | Above 0.3, compressibility effects alter density and the incompressible NS balance. |
| **Entrance Length** | x > 0.05 ? [[Re]] ? D | Near the entrance, fluid acceleration a is not zero and Poiseuille's model is inexact. |
| **Pressure Gradient** | Stable | Abrupt pressure variations invalidate the steady flow hypothesis. |

For common fluids like water, the validity domain is generally restricted to low speeds or narrow conduits.

## Model failure signals
An analyst should suspect the simplified Navier-Stokes model is failing if they observe any of the following behaviors:

- **Flow Rate Discrepancy**: If measured flow is significantly less than predicted, flow is likely turbulent.
- **Vibrations or Noise**: Laminar flow is silent. Buzzing implies turbulence.
- **Flat Velocity Profile**: If experimental measurements show uniform central velocities instead of parabolas.
- **Non-linear Gradient Dependence**: If doubling the pressure drop does not double the flow rate, the model failed.

## Extended or alternative model
When the ideal hypotheses do not hold, we resort to model extensions or engineering alternatives. La transición explícita ocurre cuando conviene cambiar a turbulent models, such as Reynolds, due to the breakdown of the laminar regime.

1. **Turbulent Navier-Stokes (RANS)**: Utilizes eddy viscosity (apparent viscosity) to model energy dissipation in high Reynolds [[Re]] flows.
2. **Darcy-Weisbach Equation**: Practical engineering alternative using a "friction factor" to quantify head losses in any regime.
3. **Non-Newtonian Models**: Like the Ostwald-de Waele Power Law, substituting constant dynamic viscosity [[mu]] with a velocity-gradient dependent function.
4. **CFD (Computational Fluid Dynamics)**: Numerical resolution of the full 3D Navier-Stokes equation for complex geometries where 1D is insufficient.

## Operational comparison
Below is a comparison of models based on practical utility:

| Situation | Recommended Model | Why |
| :--- | :--- | :--- |
| **Microchannels & Capillaries** | Laminar 1D NS | Viscosity-dominated regime; very high analytical precision. |
| **Urban Water Pipes** | Darcy-Weisbach | Flow is almost always turbulent; wall roughness is critical. |
| **Aircraft Flight** | Turbulent NS / Euler | Inertia is dominant; need to capture thin boundary layers. |
| **Honey or Glycerin Flow** | Stokes / Laminar NS | Viscosity is so high that flow never becomes turbulent. |
| **Large Tank Emptying** | Bernoulli | Viscosity is negligible compared to height/pressure changes. |