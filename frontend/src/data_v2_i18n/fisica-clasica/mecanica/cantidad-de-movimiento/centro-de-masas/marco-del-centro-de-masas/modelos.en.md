## Ideal model
The center-of-mass (CM) frame is an inertial reference frame that moves with the velocity [[vcm]] of the system's barycenter. In this model, the particle system is treated as a unit whose total linear momentum [[ptot]] is zero, allowing for the study of internal interactions (such as collisions or explosions) without interference from the global translation of the set.

## Hypotheses
- **Inertiality**: It is assumed that the center of mass moves with constant velocity [[vcm]] (absence of net external forces).
- **Classical Mechanics**: The velocities involved are much lower than the speed of light, allowing the use of the Galilean addition of velocities:





{{f:velocity_transformation}}




- **Mass Conservation**: The total mass [[M]] of the system remains constant during the observation interval.
- **Point Particles**: Bodies are modeled as material points with mass concentrated at their respective positions.

## Quantitative validity domain
The model is highly accurate as long as the classical condition is met:
The velocity *v* must be much lower than the speed of light *c* (where *c* is approximately 300,000 km/s).
For particle velocities [[v1]], [[v2]] or center-of-mass velocity [[vcm]] exceeding 30,000,000 m/s (approx. 10% of the speed of light), the error in the internal kinetic energy [[K_cm]] calculated via:

{{f:konig_energy}}

begins to be significant (greater than 1%) and the use of Lorentz transformations is required.

## Model failure signals
- **CM Acceleration**: If the center-of-mass trajectory is found to be non-rectilinear and non-uniform, there are uncompensated external forces; the CM frame would cease to be inertial.
- **Change in Total Mass**: If the system gains or loses mass (matter flow), the relations:

{{f:M_sum}}

and

{{f:vcm_formula}}

must be dynamically recalculated.
- **Relativistic Effects**: If the sum of individual kinetic energies differs markedly from the classical prediction in high-energy collisions.

## Extended or alternative model
For velocities near the speed of light, one must transition to the **Relativistic CM Frame**. It is advisable to switch to this extended model when the velocity of any particle or the center of mass exceeds the threshold of 0.1c (approx. 30,000 km/s), at which point the error of the Galilean transformations 

{{f:velocity_transformation}}

 becomes unacceptable for precision applications. In this regime, the center-of-mass velocity is defined via the four-momentum and the total mass [[M]] is no longer a simple additive sum.

## Operational comparison
While the laboratory frame is useful for placing the experiment in the real world, the CM frame is operational for calculating final collision states. Using the reduced mass [[mu]] simplifies a two-body problem to a single virtual body problem, reducing the computational and conceptual load in solving complex dynamic problems.
