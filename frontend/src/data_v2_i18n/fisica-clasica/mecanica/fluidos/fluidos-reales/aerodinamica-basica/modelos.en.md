# Aerodynamic Models

## Ideal model
The ideal model of basic aerodynamics is based on applying lift and drag equations to a rigid body immersed in a uniform and steady airflow. This model assumes that air behaves as a continuous medium and that the resulting forces can be described by constant coefficients [[C_D]] and [[C_L]] for a given angle of attack. It is the dominant representation used in preliminary aeronautical and automotive design, allowing rapid quantification of efficiency without resorting to complex computational simulations (CFD).

## Hypotheses
- **Rigid and undeformable body**: Volume and area [[A]] do not change under aerodynamic loads.
- **Continuous and incompressible fluid**: Molecular nature and density changes due to velocity (M < 0.3) are ignored.
- **Steady flow**: Fluid properties at any point are constant over time relative to the body.
- **Thin boundary layer**: Viscous effects are concentrated in a millimeter zone near the surface.
- **Standard atmosphere**: A constant density [[rho]] is assumed for a specific altitude level.

## Quantitative validity domain
This model is operational under the following metric restrictions:
- **Speed regime**: Low subsonic, typically v < 100 text{ m/s} to ensure that incompressibility is a valid hypothesis.
- **Mach Number**: M < 0.3. Above this value, air compressibility significantly alters the coefficients.
- **Reynolds Number**: Must be higher than 10^4. If the Reynolds number is very low, the flow is purely viscous (Stokes) and drag is no longer quadratic with velocity.
- **Moderate angles of attack**: For lift, the angle must be below the stall angle (alpha < 12^circ-15^circ).

## Model failure signals
- **Stall**: If the body increases its tilt and lift drops sharply while drag rises explosively.
- **Buffet vibrations**: Appearance of pressure fluctuations indicating that the flow has become turbulent and has separated from the surface.
- **Drag divergence**: If increasing the speed slightly causes drag to rise much more than predicted by the square of v, indicating proximity to the speed of sound.

## Extended or alternative model
For situations exceeding the previous limits, **Computational Fluid Dynamics (CFD)** or **Compressible Flow Theory** models are used.
- **What changes**: Full Navier-Stokes equations are incorporated to model real point-to-point viscosity.
- **Alternative**: In the supersonic regime, Prandtl-Meyer expansion and shock wave relationships are used.
- **Micrometric approach**: If the object is very small (micro-drones), low Reynolds number models must be used where friction dominates over pressure.

## Transition to alternative model
**When should the model be changed?** The incompressible model collapses and one must transition to the alternative model when mandatorily in two critical scenarios:
1. **Velocity Scale**: When the Mach number exceeds 0.3. At this point, the error of omitting air compressibility exceeds 5% and the incompressible model ceases to be acceptable for engineering.
2. **Angle Scale**: When the flow separates (Stall). Here, the linear relationship between the [[C_L]] coefficient and the angle disappears, and one must transition to empirical separated flow models or high-fidelity CFD simulations.

## Operational comparison
The ideal model is an excellent "pencil and paper" tool for conceptual learning and initial design. The extended model (CFD) is a precision tool that requires great computational capacity. While the basic model stands out for showing the fundamental quadratic relationship with velocity [[v]], advanced models are necessary to capture the complex physics of shock waves and wake turbulence.
