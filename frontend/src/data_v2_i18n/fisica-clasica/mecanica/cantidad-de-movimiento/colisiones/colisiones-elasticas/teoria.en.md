# Elastic Collisions

## Conceptual context

An elastic collision represents the ideal limit of classical mechanics where the interaction between two bodies occurs without any degradation of mechanical energy. In this scenario, the closed system formed by the participants not only conserves its total linear momentum but also keeps its translational kinetic energy intact after the impact. It is a perfect physical "transaction": all the energy invested in temporary elastic deformation during contact is fully returned to the system when the bodies separate.

In the macroscopic world, elastic collisions are an approximation. Very rigid objects like steel balls, billiard balls, or glass spheres behave in an almost elastic manner, but there is always a minimal fraction of energy dissipated as sound waves, frictional heat, or permanent plastic deformation. However, in the atomic and subatomic domains, elastic collisions are the rule rather than the exception. Noble gas atoms collide elastically with each other billions of times per second, allowing the gas temperature to remain constant without external energy inputs. The parameter that quantifies this "perfection" is the restitution coefficient [[e]].

## 🟢 Essential level

The core idea of this leaf is that an elastic collision is a purely conservative process of motion redistribution. Imagine two bodies approaching with specific initial velocities. Upon colliding, they exchange linear momentum [[p]]. What makes an elastic collision special is that the "currency of exchange" (kinetic energy) has no "commissions." The energy that enters the collision is exactly the same as what comes out.

This means that if we add the initial kinetic energy of the system, the result will be identical to the final kinetic energy. Physically, the total kinetic energy [[K]] remains constant. This is the condition of absolute elasticity. In practical terms, if we observe a collision and notice that the bodies move away with the same total energy they arrived with, we can state that we are facing a perfectly elastic collision.

For the student, the elastic collision is the "easy case" from an energy balance point of view. It allows for the precise prediction of exit velocities simply by knowing the masses and input conditions. It is the gold standard of mechanical efficiency.

> [!IMPORTANT]
> "Elastic" does not mean the bodies are made of soft rubber. On the contrary, stiffer materials usually produce more elastic collisions because they return the deformation energy more efficiently. The restitution coefficient for these collisions is always unity.

## 🔵 Formal level

### The Fundamental Laws System
The formal analysis of a one-dimensional (1D) elastic collision requires the simultaneous resolution of two conservation laws. The first is the conservation of linear momentum [[p]], which ensures that the system's center of mass maintains its state of constant motion:


The second is the conservation of total kinetic energy [[K]]. We first define the initial energy state [[Ki]] and the final state [[Kf]]:

{{f:ki_system}}

{{f:kf_system}}

The law of conservation of kinetic energy then states that energy is not degraded:

{{f:K}}

For this leaf, the elasticity condition is summarized in the restitution coefficient:

{{f:e_definition}}

### General Analytical Solution
By combining the momentum balance (linear equation) with the energy balance (quadratic equation), we obtain two mathematical solutions for the final velocities [[v1f]] and [[v2f]] of the masses [[m1]] and [[m2]]:

{{f:v1f}}

{{f:v2f}}

### The Elegance of Relative Velocities
A fundamental and much simpler result to apply in the laboratory is the relative velocity relation. This law states that the speed at which the bodies separate is equal in magnitude but opposite in direction to the speed at which they approached:


This relation is equivalent to saying that the restitution coefficient [[e]] is 1, and it allows most exam problems to be solved without resorting to quadratic terms.

### Kinetic Energy Transfer
A parameter of great interest in engineering is the energy transfer fraction [[T_fraction]]. If the projectile [[m1]] impacts a target [[m2]] at rest, the proportion of energy the target "steals" from the projectile is calculated as:


{{f:p}}

{{f:rel}}

{{f:delta_k}}

{{f:energy_transfer}}

## 🔴 Structural level

### Phase Space Geometry
From an advanced geometric perspective, conservation laws define constraints in the velocity space. Linear momentum conservation is visualized as a straight line in this plane. Kinetic energy conservation is visualized as an ellipse. The solution to the collision is the point where the line and the ellipse intersect.

### Symmetry and Time Reversibility
Elastic collisions possess a profound structural property: time reversibility. Because there is no dissipation, the equations are invariant if we reverse the arrow of time. If we were to record an elastic collision and play the video backward, the resulting motions would still perfectly obey Newton's laws. This radically differentiates them from inelastic collisions.

### Galilean Invariance
The elastic collision leaf is consistent under changes of inertial reference frame. However, the calculation is drastically simplified if we place ourselves in the **Center of Mass Frame**. In this frame, the total momentum is zero by definition, and the elastic collision reduces to a simple reversal of the direction of each particle's velocity while keeping their magnitudes intact.

## Deep physical interpretation

The elastic collision is the manifestation of mechanical perfection. It represents a universe where information and motion are transferred without "noise" or degradation. In statistical physics, this model is the basis of the Kinetic Theory of Gases. If molecular collisions were not elastic, the pressure in a car's tires would constantly decrease simply because the air inside would "cool down" by losing energy in each impact.

## Order of magnitude

To contextualize the leaf, it is useful to observe the orders of magnitude at different scales:
- **Atomic Scale**: Collisions between neutrons and hydrogen nuclei in a nuclear reactor moderator are almost perfectly elastic, with energies on the order of 10^-21 Joules.
- **Laboratory Scale**: A steel ball bouncing on a granite plate has an [[e]] of approximately 0.95. Contact forces can reach 10000 N in just 0.0001 seconds.
- **Astronomical Scale**: Gravity assists of space probes like Voyager with planets like Jupiter are modeled as "long-range" elastic collisions, allowing the probe to gain speeds of tens of kilometers per second.

## Personalized resolution method

1. **Define Positive Direction**: Establish an X-axis and assign consistent signs to initial velocities.
2. **Identify Parameters**: List the masses [[m1]], [[m2]], and initial velocity conditions [[v1i]] and [[v2i]].
3. **Apply Nuclear Balances**: State linear momentum conservation using the formula:


and the elasticity condition:


4. **Solve the System of Equations**: Find the exit unknowns [[v1f]] and [[v2f]].
5. **Energy Verification**: Calculate the initial energy [[Ki]] and the final energy [[Kf]] to ensure the energy variation [[DeltaK]] is zero:


6. **Efficiency Analysis**: If the target was at rest, use the transfer fraction formula:


## Special cases and extended example

### Newton's Cradle
The case of equal masses is the most spectacular. The energy transfer formula describes this maximum efficiency state:


This means the first sphere yields all its energy and momentum to the second, the second to the third, and so on, until the last sphere receives the entire impulse.

### Bouncing Against an Infinite Wall
If the target mass is infinitely larger than the projectile, the final velocity formula simplifies to the reversal of its initial velocity. The projectile simply reverses its direction of motion while keeping its speed intact.

## Real student questions

- **Why is energy said to be conserved if the bodies change speed?** The *total energy of the system* is conserved. What one body loses, the other gains. There is no leakage outside the closed system.
- **Is an elastic collision the same as a spring-like collision?** "Elastic" refers strictly to the conservation of translational kinetic energy. It should not be confused with material elasticity.

## Cross-cutting connections and study paths

- **Foundation**: This leaf relies on the [Principle of Momentum Conservation](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion).
- **Contrast**: Study [Inelastic Collisions](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-inelasticas).
- **Measurement Tool**: [Restitution Coefficient](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/coeficiente-de-restitucion).

## Final synthesis

Elastic collisions constitute the conservative pillar of system dynamics. By ensuring that both linear momentum [[p]] and kinetic energy [[K]] remain constant, they offer a framework of perfect predictability for the interaction between rigid bodies or particles. In this leaf, efficiency is 100%, reversibility is total, and the energy variation [[DeltaK]] is the silent witness of a loss-free process where physics shows itself in its purest and most symmetrical state.









