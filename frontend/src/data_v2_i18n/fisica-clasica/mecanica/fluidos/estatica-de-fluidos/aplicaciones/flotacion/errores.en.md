# Common Errors in Flotation

## Conceptual errors

### Error 1: Believing flotation depends only on mass
Many students think that if an object is very heavy (massive), it automatically sinks, whereas if it is light, it floats.
- **Why it seems correct**: A paperclip is light and a wooden log is massive. In everyday experience, small objects usually seem less intimidating.
- **Why it is incorrect**: Flotation depends on the **average density** and the displaced volume, not absolute mass. A 100,000-ton aircraft carrier floats, while a 1-gram paperclip sinks.
- **Detection signal**: Solving a problem using only weight without considering the submerged volume.
- **Correction**: Always analyze the relative density \([[rho_obj]] / [[rho_f]]\).
- **Mini-example**: A 1 kg steel ball sinks; a 1 kg air bag floats.

### Error 2: Confusing Buoyancy with Pressure
Believing that buoyancy is a force the fluid applies "just because," without connecting it to the pressure difference.
- **Why it seems correct**: Buoyancy feels like a mysterious net upward force that appears upon submerging something.
- **Why it is incorrect**: Buoyancy is the resultant of all pressure forces acting on the body. Since pressure increases with depth, the upward force on the lower face is greater than the downward force on the upper face.
- **Detection signal**: Difficulty explaining the origin of the force or believing buoyancy is constant at any depth in an open container.
- **Correction**: Derive buoyancy as the integral of pressure over the submerged body surface.
- **Mini-example**: If there is no fluid beneath the body (e.g., a suction cup hermetically stuck to the bottom), there is no upward buoyancy, only downward pressure.

## Model errors

### Error 3: Applying the model in fast-moving fluids
Trying to use the $E=P$ equality in isolation when the object is being dragged by a strong current.
- **Why it seems correct**: Because Archimedes' Principle is a universal law.
- **Why it is incorrect**: In moving fluids, drag forces and Bernoulli's principle come into play. Static flotation is only part of the total dynamics.
- **Detection signal**: The object tilts or submerges more than predicted by pure hydrostatics.
- **Correction**: Add the dynamic pressure term to the equilibrium calculation and consider momentum flux.
- **Mini-example**: A log in a fast river doesn't just float but submerges more upon hitting obstacles due to dynamic pressure.

### Error 4: Ignoring compressibility at great depths
Assuming the total object volume [[Vtot]] is constant regardless of external pressure.
- **Why it seems correct**: Solids and liquids are considered incompressible in most school problems.
- **Why it is incorrect**: At extreme pressures, even solid materials compress. If the volume [[Vtot]] decreases, density increases, potentially breaking the initial flotation equilibrium.
- **Detection signal**: Experimental results on the seabed that do not match surface calculations.
- **Correction**: Incorporate the bulk modulus to calculate the actual volume under pressure.
- **Mini-example**: Submarines must compensate for hull compression to maintain neutral buoyancy.

## Mathematical errors

### Error 5: Not using coherent density units
Mixing $\text{g/cm}^3$ with $\text{kg/m}^3$ in the same formula.
- **Why it seems correct**: Because relative densities are dimensionless and it sometimes "seems" like it doesn't matter.
- **Why it is incorrect**: The error factor is 1000. A submerged fraction of 0.8 could be erroneously calculated as an absurd value.
- **Detection signal**: Obtaining submerged fractions greater than 1000 or less than 0.001.
- **Correction**: Always convert to SI units ($\text{kg/m}^3$).
- **Mini-example**: Using density 1 for water and density 800 for oil in the same subtraction.

## Interpretation errors

### Error 6: Assuming the center of buoyancy is the center of mass
Believing that buoyancy is always applied at the same geometric point as weight.
- **Why it seems correct**: Due to symmetry in simple objects like homogeneous cubes.
- **Why it is incorrect**: Weight is applied at the center of mass of the total object, but buoyancy is applied at the center of mass of the **displaced volume**.
- **Detection signal**: The object always flips (capsizes) when trying to make it float.
- **Correction**: Differentiate $G$ (center of gravity) from $C$ (center of buoyancy).
- **Mini-example**: A ship with heavy cargo on deck tends to capsize because its center of gravity rises too high relative to the center of buoyancy.

## Quick self-control rule
Before accepting a flotation result, check the **Density Consistency Test**:
1. If object density is lower than fluid density, the submerged fraction result **must** be a decimal between 0 and 1.
2. Always multiply the relative density by the total volume to verify that the resulting submerged volume is not physically impossible. If your calculation says it submerges by 110%, the object simply sinks.