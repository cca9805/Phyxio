# Flotation - Model and validity

## Ideal model
The ideal flotation model is based on the hydrostatic approximation of a rigid body in an incompressible and uniform fluid. In this model, buoyancy is considered a point force applied at the center of buoyancy, and any effects of surface tension, viscosity, or fluid dynamics are neglected. The system is assumed to be in an absolute or quasi-static state of rest, where the only relevant forces are gravitational weight and the pressure reaction of the fluid. This model allows for highly accurate prediction of the waterline for geometrically simple objects and constant densities.

## Hypotheses
- **Rigid and undeformable body**: The total volume [[Vtot]] does not change under fluid pressure.
- **Incompressible fluid**: The fluid density [[rho_f]] is constant throughout the domain.
- **Uniform object density**: Or, failing that, a well-defined center of gravity $G$ that does not shift internally.
- **Absence of dynamic effects**: No waves, currents, or rapid relative movements between the fluid and the body.
- **Negligible surface effects**: Capillarity and surface tension at the air-fluid-object interface are ignored.

## Quantitative validity domain
The model is highly reliable under the following numerical and physical conditions:
- **Buoyancy criterion**: It is strictly met when the object density does not exceed the fluid density. When object density exceeds fluid density, the static partial flotation model collapses and one must transition to **Sink Dynamics in Viscous Fluids (Stokes' Law)** or force equilibrium including the **Normal force** from the container's bottom.
- **Order of magnitude**: Effective for solid densities between $10 \text{ kg/m}^3$ (foams) and $22000 \text{ kg/m}^3$ (dense metals), as long as the fluid is denser.
- **Pressure range**: Valid at the Earth's surface and down to around 100 m in water, where water incompressibility allows fluid-density changes below one percent to be ignored.
- **Moderate pressure**: The body must be able to withstand hydrostatic pressure without compacting. If the body's bulk modulus is low, the volume [[Vtot]] decreases with depth, increasing its density and breaking the equilibrium.
- **Static stability**: The body's metacenter must be above its center of gravity. If the metacentric distance is negative, the body will capsize, and the "vertical flotation" model will no longer describe the actual state of the system.

## Model failure signals
- **Undamped oscillations**: If the body begins to oscillate vertically or sway without stopping, dynamic and inertial effects of the fluid (added mass) are relevant, and the static model fails.
- **Waterline variation**: If the body appears to "sink" more than calculated without varying its weight, it may indicate porosity (fluid absorption) or pressure deformation.
- **Suction effect**: In very muddy bottoms, Archimedes' model may be altered by adhesion forces that prevent the fluid from exerting pressure on the bottom face of the object.

## Extended or alternative model
For complex situations, **Ship Hydrodynamics** or **Fluid-Structure Interaction (FSI)** models are used.
- **What changes**: Navier-Stokes equations are incorporated to model drag resistance and wave effects.
- **Alternative**: At microscopic scales, a capillary and surface tension force model must be used, where a denser object (like a paperclip) can "float" without displacing its weight in fluid due to surface elasticity.

## Operational comparison
The ideal model is sufficient for preliminary design of boats, buoys, and iceberg load calculations. However, for open-sea navigation or submarine design (where fluid density varies with salinity and temperature at different depths), extended models are required to ensure structural safety and maneuverability.