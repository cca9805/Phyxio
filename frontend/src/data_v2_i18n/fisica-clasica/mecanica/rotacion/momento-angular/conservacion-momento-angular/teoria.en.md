# Conservation of Angular Momentum [[L]]

## Conceptual context

Conservation of angular momentum is one of the three great conservation laws of classical mechanics, alongside energy and linear momentum. It arises from a profound property of the universe: the **isotropy of space** (rotational symmetry). If physical laws do not change when the system is rotated, angular momentum is conserved. This law explains everything from why planets don't fall toward the Sun to why it's easier to keep your balance on a moving bicycle than on a stationary one.

## 🟢 Essential level

The key idea is the **persistence of rotation**. Just as an object in uniform rectilinear motion tends to keep moving in a straight line, a rotating object tends to keep rotating with the same intensity and in the same direction. This rotational "stubbornness" only changes if something from the outside applies a "circular push" called torque [[tau]].

Imagine a dancer spinning on ice. If there is no friction (zero external torque), her total angular momentum cannot change. However, the dancer can control her **spin speed** by changing her shape. By tucking in her arms, she concentrates her mass closer to the axis, which makes it easier to spin and causes her to accelerate. By extending them, she "weighs" more for the rotation and slows down. Angular momentum is the product of that "difficulty to rotate" (inertia) and the speed of rotation; if one goes down, the other must go up to keep the total constant.

> [!TIP]
> Do not think of conservation as a formula, but as a balance: the system can change shape or speed, but the total "spin content" is an inheritance that is maintained as long as the environment does not interfere.

## 🔵 Formal level

### The law of change and the null state

Rotational dynamics is governed by the relationship between net torque and the rate of change of angular momentum:

{{f:tau}}

. When the external torque is negligible, the change is zero (

{{f:tau}}

), implying that angular momentum is a constant of motion:

{{f:tau}}

In situations where a net torque exists, the system undergoes a change in angular momentum [[DeltaL]] during a time interval [[DeltaT]], following the relation

{{f:tau}}

If that torque is null, we enter the ideal conservation regime.

In the case of a rigid body rotating about a fixed axis, angular momentum is expressed as

{{f:cons}}

Conservation then translates into the operating equation:

{{f:Iomega_solve_omegaf}}

The solved form for the final state is also used explicitly:

{{f:cons_solve_Lf}}

And for the fixed-axis case, the full balance can also be written as:

{{f:Iomega}}

### Vector character

It is fundamental to remember that L is a vector. This means that not only is its magnitude conserved, but also its **direction in space**. A rotating object acts like a gyroscope: it resists any attempt to change the orientation of its axis. If the external torque is zero only in one direction (for example, the vertical axis), then only the vertical component of the angular momentum will be conserved, even if the others vary.

### Application: Kepler's Second Law

A planet in orbit feels a gravitational force directed always toward the Sun (central force). Since the force is parallel to the radius vector (

[[tau]] = 0

), the torque is zero. This guarantees that orbital angular momentum is conserved and that the balance between [[Li]] and [[Lf]] remains valid.

This fact forces the planet to sweep out equal areas in equal times, moving faster when it is closer to the Sun to compensate for the smaller lever arm.

## 🔴 Structural level

### Noether's Theorem and Isotropy

At a structural level, angular momentum conservation is not an independent postulate, but a consequence of **Noether's Theorem**. If space is isotropic (it has no preferred directions), the physical description of a system should not change when rotated. This mathematical symmetry imposes the existence of a conserved quantity: angular momentum. If a system is in an environment that breaks this symmetry (such as a directional magnetic field or a crystal lattice), angular momentum may cease to be a constant.

### Validity limits and model failures

Using the ideal conservation model has critical boundaries:

1.  **Non-rigid deformation**: If the body deforms such that a single moment of inertia I cannot be defined (like a fluid or a collapsing gas cloud), the balance must be done particle by particle, which may reveal complex angular momentum transfers between different parts of the system.
2.  **Non-inertial frames**: In a rotating reference frame, fictitious torques (such as the one associated with the Coriolis force) appear, which can make angular momentum appear not to be conserved if these inertial forces are not correctly accounted for.
3.  **The Energy Problem**: It is common to confuse angular momentum conservation with kinetic energy conservation. In the dancer example, kinetic energy **increases** when tucking in the arms because the muscles perform positive internal work. Momentum is conserved, but energy is transformed.
4.  **Quantum and Relativistic Limit**: At atomic scales, angular momentum is quantized and "spin" appears—an intrinsic form of angular momentum that is not due to a physical rotation of mass. At speeds near the speed of light, mass is no longer constant and the balance requires the use of relativistic angular momentum tensors.

### Stability and Gyroscopic Effect

The conservation of the direction of L is what gives stability to rifled projectiles, frisbees, and satellites. To deflect the rotation axis of an object with large L, a huge external torque applied over a long time is required. This "directional inertia" is the basis for all modern inertial navigation technology.

## Deep physical interpretation

Conservation of angular momentum teaches us that spin is a fundamental property of the state of motion, not a side effect. The persistence of rotation in the absence of torque is the rotational analogue of Galileo's inertia. Understanding this law means recognizing that the universe "rewards" symmetry with permanence: because space has no direction, rotation becomes eternal.

## Order of magnitude

*   **Pulsars**: A star collapsing from a radius of 10^6 km to 10 km can go from rotating once a month to rotating 30 times per second due to L conservation.
*   **Bicycles**: A bicycle wheel at 20 km/h has enough angular momentum so that gravitational torques from small tilts are compensated by precession, helping to maintain verticality.
*   **Kepler**: The Earth moves at 30.3 km/s at perihelion and 29.3 km/s at aphelion. This small difference is the exact adjustment needed for its angular momentum to be constant.

## Personalized resolution method

1.  **Choose the origin**: Angular momentum depends on the chosen point. Look for the point where the torque of external forces is zero.
2.  **Verify torque**: Are there external forces? If so, do they pass through the chosen origin? If they pass through the origin, the torque is zero and there is conservation.
3.  **Define states**: Calculate L before and after the change.
4.  **Apply equality**:

between initial and final state. If it is a rigid body, use the version with [[Ii]], [[I_final]], [[omegai]], and [[omegaf]]

.
5.  **Review energy**: If the angular velocity changed due to a change in shape, calculate the change in kinetic energy and identify the source of work (usually internal).

## Special cases and extended example

**The particle and rod collision.** If a particle hits a free rod in space, both linear and angular momentum (relative to the rod's center of mass) are conserved. This allows calculating both the translational velocity and the final rotational velocity of the rod, solving a system that would otherwise be indeterminate.

## Real student questions

*   **If momentum is conserved, why don't planets go in a straight line?** Because gravity keeps them bound, but angular conservation prevents them from falling to the center; it is the balance between "wanting to go straight" and "being attracted."
*   **Is angular momentum always parallel to angular velocity?** No. In asymmetric objects or rotation off their principal axes, L and omega can point in different directions, creating vibrations and internal torques.
*   **Why does a cat always land on its feet?** Because it uses angular momentum conservation to rotate different parts of its body in opposite directions, achieving reorientation without net external torque.

## Cross-cutting connections and study paths

*   **Prerequisite**: [Definition of angular momentum](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/momento-angular/definicion-momento-angular).
*   **Linear analogue**: [Conservation of linear momentum](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion).
*   **Extension**: [Gyroscopic stability and Precession](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/momento-angular/precesion).

## Final synthesis

Angular momentum conservation is the law of rotational persistence. It tells us that, in the absence of external torque, the "spin" of a system remains constant in magnitude and direction. This law is a consequence of the isotropy of space and is an essential tool for understanding everything from the stability of a toy to the evolution of galaxies.
Its didactic and physical value lies in distinguishing a simple internal change of inertia from a real rupture caused by the environment.