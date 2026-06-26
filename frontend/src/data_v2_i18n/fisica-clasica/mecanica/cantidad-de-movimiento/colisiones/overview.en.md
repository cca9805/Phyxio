# Collisions

## General idea of the topic
This node prepares the analysis of impacts as short interactions between bodies. You will find elastic, inelastic, and perfectly inelastic models, rebounds against a wall, two-dimensional collisions, coefficient of restitution, center-of-mass frame, and angular scattering.

The key point is that all collisions share momentum balance as a starting point, but they do not share the same energy information. The node therefore teaches which additional conditions are valid according to the collision type and the available data.

## What you will truly understand
You will understand that momentum conservation alone does not determine all final velocities. In some collisions kinetic energy is also conserved, in others it is partly transformed, and in others bodies stick together and reduce the degrees of freedom of the final state.

You will also learn to use the coefficient of restitution as experimental information, separate components in two dimensions, and interpret the impact from the center-of-mass frame when that view simplifies the geometry.

## Recommended learning route
1. **Elastic Collisions**: study the case where both momentum and kinetic energy are conserved, and observe why this provides more equations.
2. **Inelastic Collisions**: analyse impacts with kinetic-energy loss without imposing that bodies stick together.
3. **Perfectly Inelastic Collisions**: work with the limit in which bodies leave with a common velocity.
4. **Collision with a Wall**: interpret rebound against an object with effectively enormous mass and the change of normal component.
5. **2D Collisions**: move from one line to vector components and outgoing angles.
6. **Coefficient of Restitution**: introduce a measure of relative speed recovery connecting model and experiment.
7. **Center-of-Mass Frame in Collisions**: rewrite the collision in the frame where total momentum is zero.
8. **Angular Scattering in 2D Collisions**: study how final angles encode conservation, symmetry, and available energy.

## Physical criterion you must acquire
The physical criterion is not to add false equations: momentum is conserved if the system allows it, kinetic energy only in elastic collisions, and restitution only when the model or experiment supplies that condition.

## Connection with real problems
- Accident reconstruction and estimation of pre-impact speeds.
- Sports involving rebounds, impacts, and energy transfer.
- Testing of materials, dampers, and protective systems.
- Particle scattering and laboratory collisions.

## Final goal of the topic
The final goal is to classify a collision, choose the correct physical conditions, and solve the final state while interpreting what is conserved, what is transformed, and what additional information is required.
