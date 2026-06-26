const e=`\uFEFF# Dispersion Angular in Collisions 2d

## Conceptual context

Angular scattering in two-dimensional collisions is the phenomenon by which an incident projectile [[m1]] is deflected from its original trajectory after interacting with a target [[m2]]. Unlike one-dimensional collisions, where only the modules of the velocities change, in 2D the linear momentum [[p]] must be vectorially conserved, which introduces the **collision geometry** as a determining factor.

This leaf focuses on the case where a projectile arrives with speed [[v1i]] and impacts a target that is initially at rest. The result of the impact is a redistribution of the total linear momentum between both bodies, resulting in exit angles [[theta1]] and [[theta2]] that are not random, but are rigidly linked by the laws of conservation of classical dynamics. The phenomenon is ubiquitous in nature, from the collision of galaxies to the scattering of subatomic particles in high-energy accelerators.

---

## 🟢 Essential level

At the most basic level, we must understand that motion does not disappear, but "opens up." If the projectile [[m1]] arrives moving from left to right, all the impulse of the system is in that direction. After the collision, if the projectile deflects "up" (angle [[theta1]]), the target [[m2]] must necessarily leave "down" (angle [[theta2]]) to compensate for that lateral pull.

The essential idea is **lateral compensation**. Before the collision, there was no vertical motion. Therefore, after the collision, the sum of the upward and downward vertical motions must still be zero. This means that the angles [[theta1]] and [[theta2]] will always be located on opposite sides of the original incident axis. It is as if the system remembers that "originally we weren't going sideways," and therefore any deviation to one side must be strictly neutralized by an opposite deviation of the other body.

Furthermore, angular scattering allows us to "see" inertia. A very heavy object will hardly be deflected by a light one, while a light projectile can be shot at very large angles upon colliding with a massive target. At this level, intuition should focus on the fact that deflection is a way of distributing motion between forward progress and lateral displacement. If we visualize the final trajectories, they form a fan whose opening depends on the violence of the impact and the impact parameter (how central or off-center they hit).

> [!IMPORTANT]
> The exit angles [[theta1]] and [[theta2]] are the visual proof that linear momentum is conserved in two independent directions simultaneously. There is no angle without compensation.

---

## 🔵 Formal level

### Linear momentum balances
The principle of conservation of linear momentum is decomposed into two independent scalar equations, one for each coordinate axis. We have defined the X-axis as the original incident line.

**1. Incident axis (X-axis):**
The initial momentum of the projectile must equal the sum of the horizontal projections of the final momenta of both bodies. We use the core formula:

{{f:p_x_balance}}

Here, the terms with cosine represent how much of the final speed [[v1f]] or [[v2f]] still points in the original forward direction. It is notable that on this axis, the sum of momenta always seems to "lose" some value relative to speed, since the cosine of a non-zero angle is less than one. However, the total momentum remains intact.

**2. Perpendicular axis (Y-axis):**
Since there was no initial vertical momentum, the final vertical projections must cancel out. We use the expression:

{{f:p_y_balance}}

The terms with sine represent the lateral components that are compensated. This equation sets the relationship between the final speeds and the exit angles. It is the equation that guarantees the symmetry of the collision with respect to the X-axis.

### Energy considerations
Depending on the nature of the collision, kinetic energy may or may not be conserved. We define the initial [[Ki]] and final [[Kf]] energy states:

{{f:k_initial}}

{{f:k_final}}

If the collision is elastic, we apply the absolute conservation condition for mechanical energy:

{{f:k_balance_elastic}}

A very powerful formal case occurs when [[m1]] = [[m2]] and the collision is elastic; in this situation, the total opening angle [[theta_total]] is 90 degrees, calculated via the structural relation:

{{f:theta_sum}}

This result, known as the "right angle rule," is fundamental to understanding billiards and the scattering of identical particles.

---

## 🔴 Structural level

### The architecture of vector constraints
Angular scattering is not an event of total freedom, but a system of constraints. There is an absolute interdependence between masses [[m1]] and [[m2]], speeds [[v1f]] and [[v2f]], and angles [[theta1]] and [[theta2]]. If we fix three of these variables, the others are determined by the geometry of space and the dynamics of the impulse. This rigidity is what allows scientists to use scattering as a "microscope": by measuring angles, we can see masses and energies.

This structure reveals that the maximum scattering angle of the projectile is limited by the mass ratio. If the projectile [[m1]] is heavier than the target [[m2]], there is a "safety cone" outside of which the projectile can never be deflected, regardless of the impact. Conversely, if the projectile is lighter, it can undergo backscattering, being sent even backward (angles greater than 90 degrees).

### The role of the impact parameter
Although it does not appear explicitly in the conservation formulas, the final angles depend on how off-center the collision is. A small impact parameter produces small angles and large energy transfer. A large impact parameter produces large angles for the target but small deflections for the projectile, with the latter conserving nearly all its initial energy [[Ki]]. The relationship between this parameter and the final angles constitutes the scattering cross-section, a key concept in nuclear and particle physics.

### Irreversibility and information loss
Even in elastic collisions, angular scattering represents a redistribution of directional information. The system passes from a state of highly ordered motion (a single vector) to a more complex state of two vectors. If the collision is inelastic, this redistribution is accompanied by a degradation of kinetic energy, where part of [[Ki]] is converted into heat or deformation, further limiting the possible combinations of [[theta1]] and [[theta2]].

---

## Deep physical interpretation

Angular scattering is the fundamental diagnostic tool of physics. By observing the exit angles [[theta1]] and [[theta2]], we can deduce the mass of objects we cannot weigh or the speed of projectiles we cannot measure directly. Causally, the angle is the effect of an impulsive internal force. The deflection is evidence that the exchange of momentum was not parallel to the initial velocity [[v1i]].

From a philosophical perspective, angular scattering teaches us that balance is not statism. The system maintains its net total momentum (the center of mass continues moving the same way), but it does so in a more dispersed and less obviously predictable form. The angle is the interaction's signature; without force there is no angle, and without angle there is no discovery of the internal structure of bodies. The collision is a geometric dialogue between masses and impulses.

---

## Order of magnitude

In billiards, masses of 0.17 kg and speeds of 2 m/s produce deviations detectable with degree precision. In nuclear physics, alpha particles scattered by gold nuclei can deflect up to 180 degrees, allowing Rutherford to discover that the atom has a small, dense nucleus. In galaxy collisions, angular scattering occurs at scales of hundreds of thousands of light-years, deflecting trillions of solar masses under the same principle of [[p]] conservation.

---

## Personalized resolution method

1. **Alignment**: Define the X-axis as the input direction [[v1i]]. Ensure target [[m2]] is at the coordinate origin.
2. **Decomposition**: State the horizontal and vertical balances carefully regarding the signs of trigonometric components.
3. **Lateral relationship**: Use the Y-balance to link [[v1f]] with [[v2f]] via the sines of the exit angles.
4. **Substitution**: Carry that relationship to the X-axis balance to eliminate one unknown and solve the algebraic system.
5. **Check**: Verify if the sum of squares of the final speeds satisfies the absolute elasticity condition if applicable.

---

## Special cases and extended example

**Equal masses elastic:** This is the billiard ball case. The final trajectories form a right angle [[theta_total]] = 90°. It is a direct consequence of the sum of momenta squared coinciding with the sum of the squares of momenta in the elastic model.

**Massive target:** If [[m2]] is much larger than [[m1]], the target barely moves but the projectile bounces at large angles, conserving its final speed [[v1f]] nearly equal to the initial [[v1i]]. This is the model of a ball bouncing off a wall whose tilt defines the exit angle.

---

## Real student questions

- **Why is momentum in Y zero at the beginning?** Because the projectile moves only on the X-axis and the target is still. There is no initial lateral component in the system.
- **What happens if the target was already moving?** The balance would have initial terms in both axes, vectorially adding the momenta of both bodies before contact.
- **Can [[theta1]] be 0?** Only in perfectly head-on (1D) collisions or if there is no interaction at all (infinite impact parameter).

---

## Cross-cutting connections and study paths

- **General**: [2D Collisions](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-2d).
- **Simplified**: [CM frame](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/marco-del-centro-de-masas-en-colisiones).
- **Limit**: [Perfectly inelastic collisions](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-totalmente-inelasticas).

---

## Final synthesis

Angular scattering in 2D decomposes momentum conservation into two axes (X and Y), rigidly linking the exit angles with the masses and velocities of the system. It is the key tool for analyzing off-center impacts and is fundamental for experimentation in particle physics, ballistics, and even astrophysics. Understanding how angles open is understanding how motion is distributed in real space.
\r
`;export{e as default};
