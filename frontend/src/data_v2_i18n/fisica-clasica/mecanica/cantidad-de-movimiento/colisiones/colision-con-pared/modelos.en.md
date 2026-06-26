# Physical models: collision with a wall

## Ideal model
The ideal model for a collision with a wall assumes that one of the two bodies has infinite inertia compared to the projectile. In this scenario, the surface is considered a fixed and undeformable geometric boundary in the laboratory's inertial reference frame. The fundamental simplification is the separation of effects: the wall only exerts an impulsive normal force that reverses the perpendicular component of velocity[[vf]], while the absence of friction ensures the conservation of the parallel component. This model is the basis for studying elastic and partially inelastic rebounds in elementary physics, allowing for the prediction of trajectories without needing to solve wave equations within the solid.

## Hypotheses
The fundamental hypotheses of this model are:
- **Point or rigid bodies**: The projectile is treated as a mass[[m]]without relevant internal structure.
- **Infinite wall inertia**: There is no appreciable recoil of the impact surface.
- **Absence of net external forces**: During the very brief contact time[[Delta_t]], only impulsive forces act.
- **Inertial reference frame**: The laboratory is considered a system at absolute rest for velocity[[vi]]calculations.

## Quantitative validity domain
This model is highly accurate under the following conditions:
- **Subsonic speeds**: Impact speed[[vi]]must be lower than the speed of sound in the materials involved (typically < 100 m/s).
- **Mass ratio**: Wall mass must be at least 1000 times greater than the body's mass[[m]].
- **Geometric scales**: Body size must be small compared to the wall's radius of curvature (flat wall approximation).
- **Relative variations**: Errors of order 10^-2 in the coefficient of restitution[[e]]are accepted as long as the elastic limit is not exceeded.

## Model failure signals
Model failure signals usually don't start in the calculator, but in the physical reading:
- **Unexpected sign change**: If the final velocity[[vf]]results in having the same direction as the initial one[[vi]], the rebound hypothesis is broken.
- **Appearance of spin**: If the body has significant rotation, the interaction will generate friction forces that change the tangential component[[vft]], invalidating the equality between[[vit]]and[[vft]].
- **Permanent deformation**: If the impact leaves a crater, the ideal impulsive model is no longer reliable as much of the kinetic energy[[K]]has been spent on plastic work.

## Extended or alternative model
The extended model introduces corrections when ideal hypotheses break down. On a rough wall, an impact friction coefficient is introduced that reduces the tangential component[[vft]]. In deformable walls, a two-mass system is considered where the wall has its own vibration frequency, absorbing part of the kinetic energy[[K]]as residual elastic energy. If contact times[[Delta_t]]are prolonged, the impulsive model must be replaced by an analysis of time-dependent dynamic forces.

When to switch to the extended model: if the ideal-model hypotheses break down measurably (appearance of friction, wall deformation, or support recoil), the transition to the extended model becomes necessary to maintain predictive accuracy.

## Operational comparison
Compared to the collision model between two moving bodies, the wall model is much algebraically simpler as it eliminates the second mass unknowns. The best choice is the one that preserves physical meaning with the fewest questionable assumptions. A common error is trying to apply total linear momentum conservation of the system while ignoring that the wall is anchored to the Earth: the projectile's linear momentum is not conserved; the impulse[[J]]is fully transferred to the planet.
