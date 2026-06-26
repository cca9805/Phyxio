const e=`# Laminar Flow Models

## Ideal model
The fundamental model for laminar flow is **Poiseuille Flow** (or Hagen-Poiseuille flow). This model describes the steady motion of an incompressible viscous fluid through a cylindrical duct of constant circular cross-section. It represents the exact solution of the Navier-Stokes equations for a regime where viscous forces perfectly balance the pressure gradient. In this model, the fluid organizes itself into concentric layers that slide without external friction (only internal), resulting in a parabolic velocity profile with a maximum at the central axis and a minimum of zero at the walls.

## Hypotheses
For the Poiseuille model to be applicable, the following simplifying hypotheses must be met:
1.  **Newtonian Fluid**: Viscosity [[eta]] is constant and independent of the strain rate.
2.  **Steady Flow**: Flow properties at any point do not change with time.
3.  **Incompressibility**: The fluid density is constant throughout the domain.
4.  **Fully Developed Flow**: The velocity profile does not change along the pipe (far from the inlet and outlet).
5.  **No-Slip Condition**: The fluid in direct contact with the solid wall has zero relative velocity.
6.  **Pure Laminar Flow**: There are no transverse velocity components; the movement is purely axial.

## Quantitative validity domain
The validity of this model is strictly linked to the Reynolds Number [[Re]]. Quantitatively, the upper limit for the laminar regime in circular pipes is approximately [[Re]] = 2300.
- **Stable Laminar Regime**: [[Re]] < 2000. The model is highly accurate.
- **Transition Zone**: 2000 < [[Re]] < 4000. The flow is unstable and can become turbulent in the presence of any small perturbation.
- **Turbulent Regime**: [[Re]] > 4000. The Poiseuille model ceases to be valid entirely.
In addition, the model requires the pipe length [[L]] to be much greater than the diameter (L \\gg D) to ignore end effects.

## Model failure signals
An analyst should suspect that the laminar flow model is failing if they observe the following:
1.  **Appearance of Noise or Vibration**: These are indicators of turbulent pressure fluctuations.
2.  **Non-Linear Head Loss**: If the pressure drop [[deltaP]] starts to be proportional to velocidad al cuadrado instead of velocidad, the flow is no longer laminar.
3.  **Rapid Mixing**: If an injected tracer instantly blurs across the entire section, turbulent transverse currents exist.
4.  **High Reynolds Numbers**: Any calculation yielding [[Re]] > 2300 automatically invalidates the conclusions obtained with Poiseuille.

## Extended or alternative model
When the flow exceeds the laminar regime, an **explicit transition** must be made.

### When to switch models
It is necessary to perform a **transition to** the Darcy-Weisbach model once the regime is no longer laminar. This section details **when to switch**: Poiseuille should be abandoned in favor of turbulent models when [[Re]] > 2300.

For fluids that do not follow Newton's law (such as blood or polymers), **Non-Newtonian Fluid** models (such as the Power Law) are used where the effective viscosity changes with shear stress.

## Operational comparison
Operationally, the greatest difference between the laminar and turbulent models lies in transport efficiency and predictability. In the laminar model, we can predict a particle's exact position over time, whereas in the turbulent one we can only speak of statistical averages. Poiseuille's law is a "clean" design tool that allows precision calculations in lubrication systems and microchips, whereas alternative models require empirical correction factors to account for the complexity of chaos.
`;export{e as default};
