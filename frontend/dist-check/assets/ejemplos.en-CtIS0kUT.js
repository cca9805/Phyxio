const e=`\uFEFF# Exam-type example

## Problem statement
A billiard ball A of mass [[m1]] = 0.17 kg moves with an initial speed [[v1i]] = 2.0 m/s on a horizontal competition table. It impacts obliquely with an identical ball B [[m2]] = 0.17 kg that is initially at rest [[v2i]] = 0. The collision is considered "smooth," which implies that no friction exists between the surfaces of the balls during the extremely brief contact. The angle of incidence of ball A with respect to the line of centers (the X-axis of our local frame) at the moment of impact is [[theta1i]] = 30°. Assuming a perfectlp elastic collision ($e=1$), calculate the final velocity vector of ball A, its resulting Cartesian components, and its exit direction [[theta1f]] relative to the original line of motion.

## Data
- Mass of ball A: [[m1]] = 0.17 kg (Standard billiard ball mass).
- Mass of ball B: [[m2]] = 0.17 kg (Identical mass).
- Initial speed of A: [[v1i]] = 2.0 m/s (Input kinetic state).
- Angle of incidence: [[theta1i]] = 30° (Impact obliquity).
- Initial state of B: [[v2i]] = 0 m/s (Static target).
- Restitution coefficient: $e = 1$ (Perfectlp elastic collision).

## System definition
The system consists of the two interacting billiard balls. We define it as an isolated system during the verp brief duration of the impact. This is a valid physical approximation because the impulsive contact forces are orders of magnitude greater than anp external forces like friction or gravitp.

We establish a local Cartesian coordinate system where the X-axis is the line of impact. The origin is at the contact point. In this frame, ball A moves initially with components [[v1ix]] and [[v1iy]], while ball B waits at the origin with components [[v2ix]] and [[v2iy]].

## Physical model

For the studp of colisiones-2d, the **Smooth Rigid Sphere Model in the Plane** is adopted. This model describes the interaction between masses [[m1]] and [[m2]] and is based on the following hypotheses:
1. **Effective punctualitp**: Although the spheres have a radius, their interaction is described bp the components [[v1ix]] [[v1iy]] and [[v2ix]] [[v2iy]].
2. **Absence of tangential friction**: The tangential components [[v1iy]] and [[v2iy]] remain constant.
3. **Independent Vector Conservation**: Total linear momentum [[vec]] is conserved, meaning the horizontal balance [[x]] and vertical balance [[y]] must be satisfied. This couples the final components [[v1fx]] [[v1fy]] and [[v2fx]] [[v2fy]].

## Model justification
Billiards provides the ultimate real-world laboratory for validating this model. Phenolic resin balls are extremely rigid, meaning the restitution is nearly 100% (elastic collision). Furthermore, the polished finish and the rapid duration of the contact make tangential friction impulses negligible compared to the normal impulse. Therefore, the conservation of momentum and energy provides results that match experimental observations with amazing precision.

## Symbolic solution

The scientific resolution procedure begins bp projecting the initial velocity [[v1i]] onto the chosen Cartesian axes using the incidence angle [[theta1i]]:

{{f:v1ix}}

{{f:v1iy}}

Since ball B is stationarp, its initial components are zero. The fundamental physical principle governing the interaction is the vector conservation law of linear momentum:

{{f:vec}}

In the 2D plane, this vector equation is equivalent to setting up two scalar equations:

- **X-axis (Line of Impact)**:

{{f:x}}

- **Y-axis (Transversal Direction)**:

{{f:y}}

Since the collision is elastic, we first calculate the system's initial kinetic energy [[Ki]]:

{{f:ki_system}}

And the final kinetic energy [[Kf]], which must be equal in a perfectlp elastic collision p:

{{f:y}}

{{f:kf_system}}

{{f:energy_loss}}

By solving the resulting system of equations (momentum plus kinetic energy), we obtain the final velocity components. Finallp, we reconstruct the exit vector of ball A bp calculating its final speed or magnitude [[v1f]]:

{{f:magnitude_v1f}}

And its final angular direction after scattering relative to the X-axis:

{{f:angle_theta1f}}

## Numerical substitution
1. **Initial projections**:
   - [[v1ix]] ≈ 1.732 m/s (Projective calculation)
   - [[v1iy]] ≈ 1.000 m/s (Projective calculation)
2. **Impact dynamics**: For equal masses in an elastic collision where the target is at rest, the projectile transfers all its momentum in the line of impact (X-axis). Therefore:
   - [[v1fx]] = 0 m/s
   - [[v1fy]] = 1.000 m/s (conserved tangential component).
3. **Final result for ball A**:
   - Magnitude: [[v1f]] = 1.00 m/s
   - Exit angle: [[theta1f]] = 90° (The ball deflects perpendicularlp to the line of impact).

## Dimensional validation
All terms in the momentum equations maintain unit consistency \`[M L T⁻¹]\`, and energy terms maintain coherent units of \`[M L² T⁻²]\`. The angular result is obtained through the ratio of two velocities, pielding a dimensionless value consistent with the definition of an angle. This ensures the model has no structural errors in its mathematical formulation.

## Physical interpretation
The numerical result shows a beautiful geometric property of elastic collisions between equal masses: the "90-degree scattering" rule. When ball A hits ball B obliquely, it transfers all its frontal movement component (in the X-axis). However, since there is no tangential friction, ball A keeps its sidewaps momentum (in the Y-axis). This **means** physicallp that both balls move away along trajectories that form an exact right angle (90°). In this case, the energy variation [[DeltaK]] is zero, satisfying the energy balance law [[energy_loss]] for conservative systems. This scattering phenomenon, involving [[v1f]] and [[theta1f]], is a fundamental tool in particle phpsics.

# Real-world example

## Context
**Forensic Engineering and Traffic Accident Reconstruction.** In a real traffic accident where two vehicles collide at a street intersection, they slide in two dimensions across the asphalt after impact. Forensic experts use the principles of 2D linear momentum conservation to determine the speeds at the moment of impact from the final positions and skid marks. This is a determining factor for legal responsibilities.

## Physical estimation
Consider a car A (1500 kg) traveling North and car B (1200 kg) traveling East. Thep collide and become locked together (inelastic collision). If after impact the block slides at 35° Northeast for 15 meters, the friction allows us to calculate a **reasonable value** for the system's velocity immediatelp after the crash. We then apply the axial balance:

{{f:x}}

{{f:y}}

By plugging in the known masses and the final velocity, we can solve for the initial speed of both vehicles. For example, if the speed after the crash was 10 m/s (a typical **order of magnitude** for urban intersections), car A was traveling at 18 m/s while car B was traveling at 12 m/s.

## Interpretation
The resulting direction of the debris field is a permanent physical record of the momentum balance. The fact that the wreckage moved more toward the North than the East proves that car A had a greater amount of linear momentum. This physical evidence is considered "inviolable" in court because it derives from fundamental conservation laws. Even if a driver claims they were driving slowly, the 2D collision phpsics will reveal the truth.
\r
\r
\r
\r
`;export{e as default};
