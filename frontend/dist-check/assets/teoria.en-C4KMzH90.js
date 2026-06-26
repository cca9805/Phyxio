const e=`\uFEFF# Center-of-Mass Frame\r
\r
## Conceptual context\r
\r
The **center-of-mass frame** (or CM frame) represents the most simplified and powerful perspective for the study of dynamic systems. In classical mechanics, when we analyze a set of particles from a fixed laboratory, the motion is often obscured by the global translation of the set. The CM frame is an inertial reference frame that "travels" with the system, placing the observer at the barycenter itself.\r
\r
From this perspective, the particle system is seen as an entity at translational rest, which allows isolating internal interactions (such as collisions or explosions) from the external trajectory. It is the reference frame where the total linear momentum is identically zero, so it is often called the **zero-momentum frame**. Understanding this tool is fundamental for approaching problems in particle physics, astrophysics, and complex system dynamics with elegance and mathematical efficiency.\r
\r
## 🟢 Essential level\r
\r
Imaging the center-of-mass frame is like observing a dance from the point of view of the conductor who moves along with the dancers: even if the stage moves, for the conductor the dancers only perform relative movements among themselves.\r
\r
1.  **The point of view of equilibrium:** In the CM frame, the "center of gravity" of the motion is always still at the origin. No matter how fast individual particles move, the weighted average of their motions cancels out.\r
2.  **Symmetry in the collision:** If two spheres collide, from the CM frame they are always seen coming toward each other with equal and opposite momenta. After the collision, they will move away following the same rule. This symmetry makes calculations much simpler than in the laboratory.\r
3.  **The energy minimum:** All the energy you see in the CM frame is "useful" energy or internal energy [[K_cm]]. A system can have a lot of energy in the laboratory because it flies very fast, but that flight energy cannot be used to collide or deform things; only the energy that survives in the CM frame is the one that really participates in internal processes.\r
\r
> [!TIP]\r
> If you ever feel confused by the crossing trajectories of two bodies, mentally "jump" to the CM frame. There, the problem is reduced to a back-and-forth motion along a single line of interaction.\r
\r
## 🔵 Formal level\r
\r
### The velocity of the frame\r
For a system composed of masses [[m1]] and [[m2]] with velocities [[v1]] and [[v2]], each individual velocity can be read as a concrete case of [[v_i]]. The total linear momentum [[ptot]] is first obtained as a particle sum:\r
\r
{{f:total_momentum_sum}}\r
\r
The velocity of the observer at the CM [[vcm]] is obtained by averaging the individual velocities according to their inertia:\r
\r
{{f:vcm_formula}}\r
\r
Where the total mass of the system [[M]] is defined as:\r
\r
{{f:M_sum}}\r
\r
### Galilean Transformation\r
To translate any observation from the laboratory to the CM frame, we subtract the drift velocity of the frame. The internal velocity of any particle [[u_i]] relative to the center of mass is:\r
\r
{{f:velocity_transformation}}\r
\r
### The Zero Momentum Balance\r
The defining property of this frame is that, by summing all momentum contributions calculated with internal velocities, the result [[p_cm_total]] is always zero:\r
\r
\r
In a two-body system, this implies that the internal momenta are opposite vectors, satisfying the balance:\r
\r
\r
### Kinetic Energy and Konig's Theorem\r
The total kinetic energy [[K_lab]] is first computed in the laboratory by summing the kinetic energies of the particles:\r
\r
{{f:lab_kinetic_energy}}\r
\r
It is then exactly decomposed into two physically distinct terms through Konig's first theorem:\r
\r
{{f:konig_energy}}\r
\r
Here, the term:\r
\r
\r
represents the kinetic energy of translation of the system as a whole, while [[K_cm]] is the internal kinetic energy.\r
\r
{{f:reduced_mass_formula}}\r
\r
{{f:relative_velocity}}\r
\r
{{f:internal_energy_reduced}}\r
\r
{{f:total_momentum_vcm}}\r
\r
{{f:u_balance}}\r
\r
{{f:K_trans}}\r
\r
## 🔴 Structural level\r
\r
### Reduced mass and invariance\r
The CM frame allows reducing the two-body problem to a single equivalent body problem through the concept of **reduced mass** [[mu]]. This magnitude combines both masses into a single effective inertia that governs relative motion:\r
\r
\r
The relative velocity [[v_rel]] is defined as the Galilean difference between laboratory velocities:\r
\r
\r
Thanks to this, internal energy [[K_cm]] can be expressed solely as a function of relative velocity [[v_rel]]:\r
\r
\r
This formulation is structurally superior because [[K_cm]] and [[v_rel]] are **Galilean invariants**: they have the same value for any inertial observer, making them intrinsic properties of the system, independent of the laboratory.\r
\r
### Relationship with total momentum\r
The total linear momentum [[ptot]] measured in the laboratory can be interpreted as the momentum of a fictitious particle of mass [[M]] concentrated at the center of mass:\r
\r
\r
In an isolated system, where there are no external forces, [[vcm]] is constant. This means that, even if particles collide or explode internally, the CM frame is a perfect inertial system that continues moving in a straight line at a constant speed.\r
\r
## Deep physical interpretation\r
\r
The center-of-mass frame is not just a mathematical trick; it is the "center of inertia" of the system's local universe. It is the only frame where the system's kinetic energy is **minimum**. Any other observer will see a higher energy because they will perceive an additional translation.\r
\r
In inelastic processes, such as a collision where two bodies stick together, the final fate of the particles is absolute rest... but only in the CM frame. In the laboratory, the resulting set will continue moving with velocity [[vcm]] because the total linear momentum cannot disappear. Therefore, [[K_cm]] represents the upper limit of energy that a system can "lose" or transform into heat during a collision.\r
\r
## Order of magnitude\r
\r
*   **Atomic scale:** In the collision of two protons at the LHC (CERN), head-on colliders are used so that the laboratory coincides with the CM frame (where the center-of-mass velocity is null). This allows all the kinetic energy of the beams (on the order of TeV) to be internal energy [[K_cm]] available to create new particles.\r
*   **Macroscopic scale:** If a 1000 kg car at 20 m/s hits a stationary 9000 kg truck, the [[vcm]] is only 2 m/s. Most of the energy (90%) is internal energy [[K_cm]] that will be dissipated in the deformation of the vehicles.\r
*   **Absurdity detection:** If when calculating velocities in the CM frame ([[u_i]]) you find that both particles move in the same direction, the calculation is **wrong**. In the CM frame, particles must always move in opposite directions (or both be at rest) so that the total momentum is zero.\r
\r
## Personalized resolution method\r
\r
1.  **Anchoring in the Laboratory:** Identify masses [[m1]], [[m2]] and their vector velocities [[v1]], [[v2]].\r
2.  **Calculating the Frame:** Obtain the center-of-mass velocity [[vcm]]. This will be your new velocity "zero".\r
3.  **Jumping to the CM Frame:** Subtract [[vcm]] from each particle to obtain internal velocities [[u_i]].\r
4.  **Symmetric Analysis:** Resolve the interaction (collision, bounce, explosion) using the conservation of linear momentum in the CM frame, which is described by:\r
\r
\r
5.  **Return to Laboratory:** Once final velocities in the CM frame are obtained, add [[vcm]] again to deliver results relative to the ground.\r
\r
## Special cases and extended example\r
\r
**Case of equal masses:** In this scenario, [[vcm]] is simply the arithmetic mean of the velocities. In the CM frame, both particles are seen moving at the same speed but in opposite directions. It is the case of maximum symmetry.\r
\r
**Case of infinite mass:** If a particle hits a wall or a planet (mass [[m2]] much larger than [[m1]]), the center of mass is practically anchored in the heavy object. The CM frame coincides with the heavy object's frame, simplifying the analysis to a simple bounce.\r
\r
**Extended example:** Consider two skaters pushing each other. In the laboratory, both move. In the center-of-mass frame, if they were initially together, the CM stays still at the push point, and both move away with equal momenta. The work performed by their muscles is entirely converted into internal kinetic energy [[K_cm]].\r
\r
## Real student questions\r
\r
*   **Can the CM velocity be greater than that of the particles?** No. Being a weighted average, [[vcm]] will always be between the minimum and maximum value of the individual velocities (considering their direction).\r
*   **Why is the CM velocity conserved in a collision?** Because a collision is an internal interaction. According to Newton's third law, internal forces cancel each other out and cannot alter the state of motion of the system's center of inertia.\r
*   **Is the CM frame always inertial?** Only if the net external force on the system is zero. If there are external forces, the CM accelerates and the CM frame ceases to be inertial.\r
*   **What happens to the CM translation energy after a collision?** Nothing. That part of the energy (described by the following expression) is "untouchable" as long as there are no external forces:\r
\r
\r
It is the internal energy [[K_cm]] that changes during the process.\r
\r
## Cross-cutting connections and study paths\r
\r
The study of the CM frame is the direct bridge to **Collision Physics** and **Orbital Mechanics**. In Kepler's two-body problem (planets), the analysis is always performed in the barycenter frame.\r
\r
*   To go deeper into reduced mass: [Rotational Dynamics](leaf:fisica-clasica/mecanica/solido-rigido/rotacion).\r
*   To apply these concepts to collisions: [Linear Momentum Conservation](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-del-momento).\r
\r
## Final synthesis\r
\r
The center-of-mass frame is the zero-momentum observer that reveals the true internal dynamics of a system. By separating the global transport motion from the relative interaction through the Galilean transformation and Konig's theorem, this frame allows for resolving complex problems with a symmetry and clarity unreachable from any other perspective.\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
`;export{e as default};
