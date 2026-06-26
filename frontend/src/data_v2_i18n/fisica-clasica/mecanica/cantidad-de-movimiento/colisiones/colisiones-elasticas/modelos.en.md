# Physical models: elastic collisions

## Ideal model

The ideal model of elastic collisions assumes that the interaction between two masses, [[m1]] and [[m2]], is purely conservative. At this level, all secondary details of the material (such as internal friction or plasticity) and the environment (such as air resistance) are eliminated. The collision is treated as an instantaneous event where only impulsive internal forces act. The essential structure of the model is the simultaneous conservation of linear momentum [[p]] and total kinetic energy [[K]]. This model is a valuable abstraction because it describes the upper limit of mechanical efficiency and allows for a unique solution for the final velocities [[v1f]] and [[v2f]] without introducing complex empirical parameters.

## Hypotheses

The fundamental hypotheses of this model are:
1. **Point or rigid bodies**: The rotation and internal structure of the masses [[m1]] and [[m2]] are ignored.
2. **Isolated system**: There are no significant net external forces during the impact interval.
3. **Perfect elasticity**: The restitution coefficient [[e]] is exactly 1.0.
4. **One-dimensionality**: The collision occurs strictly along a straight line (head-on collision).

## Quantitative validity domain

The validity domain of the elastic model must be verified through quantitative thresholds. As a minimum rule, for the model to be applicable with an error of less than 1 percent (order of magnitude of 0.01), materials must have a high modulus of elasticity and low hysteresis. In terms of velocity, the model is reliable for impact velocities well below the speed of sound in the material (approximately 5000 m/s in steel), thus avoiding destructive shock regimes where the crystal lattice is broken. If the energy loss calculated via [[DeltaK]] exceeds 1-2 percent of the initial budget [[Ki]], the elastic model ceases to be a faithful description and must be considered inelastic.

## Model failure signals

Model failure signals do not start in the calculator, but in physical observation. If after the collision the bodies remain joined or move with the same velocity, the model has failed catastrophically (totally inelastic collision). Another failure signal is the detection of a temperature increase at the contact point, indicating that part of the initial energy [[Ki]] has been degraded into heat, violating the premise that [[DeltaK]] = 0. In terms of data, if the calculation of final velocities [[v1f]] or [[v2f]] contradicts the relative velocity relation, there is a fundamental inconsistency in the application of conservation laws.

## Extended or alternative model

The extended model introduces corrections when elasticity is not perfect or the collision is not purely 1D. The most common refinement is the **Partially Inelastic Collision** model, which introduces the restitution coefficient [[e]] as a real value between 0 and 1. Another alternative model is the **2D Collision**, where scattering angles are considered and momentum is decomposed into vector components. The goal of these extensions is not to add algebraic noise, but to capture the real energy dissipation that occurs in macroscopic systems where internal friction and plastic deformation are not negligible.

When to switch to the extended model: if the total energy conservation hypotheses are broken due to plastic deformation or if the impact is not frontal, the transition to the restitution coefficient model or the two-dimensional model is necessary to maintain predictive accuracy.

## Operational comparison

The comparison between the ideal elastic model and inelastic models is the step that avoids habitually applying equations that do not match the real scenario. While the elastic model maximizes bounce and energy transfer [[T_fraction]], the inelastic model predicts final states where bodies tend to move together with a net energy loss. The best choice is the elastic model when working with elementary particles, ideal gases, or very rigid materials, whereas for deformable materials (such as clay or soft metals), the inelastic description is operative and physically superior.
