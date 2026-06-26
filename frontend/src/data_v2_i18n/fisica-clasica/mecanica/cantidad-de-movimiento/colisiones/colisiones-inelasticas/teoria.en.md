# Inelastic Collisions

## Conceptual context

An inelastic collision represents the most common scenario in the macroscopic world, where the interaction between two bodies is not perfectly reversible. Unlike the ideal elastic limit, in these collisions part of the system's kinetic energy is "lost" or degraded. However, this energy does not disappear from the universe; it simply stops fueling the translational motion of the bodies to transform into heat, sound, or permanent plastic deformations.

The fundamental parameter governing this process is the restitution coefficient [[e]]. In an inelastic collision, the bodies conserve their total linear momentum [[p]], but the speed with which they move away after impact is less than the speed with which they approached. It is a "damped" or weakened rebound process, situated in the intermediate spectrum between perfect rebound and total sticking.

## 🟢 Essential level

The core idea of this leaf is that an inelastic collision is a motion exchange process with an "energy cost." Imagine two objects that collide and bounce, but not with the same energy they arrived with. The system continues to conserve its overall inertia, but the resulting rebound is less vigorous.

What defines an inelastic collision is that the bodies **do separate** after contact, but they do so with a lower relative speed. Part of the original kinetic energy has been used to deform the materials or has dissipated as noise and heat. If we compare the initial energy with the final energy, we will notice a clear decrease. This difference is the kinetic energy variation, which in this leaf will always be a negative value.

At this level, the most important thing is to understand that inelasticity is a measure of the "imperfection" of the rebound. We do not reach the extreme of the bodies staying stuck (that would be a totally inelastic collision), but we do not recover all the energy either (as in an elastic collision).

> [!IMPORTANT]
> In an inelastic collision there is rebound, but that rebound is weaker than the original. The restitution coefficient is the thermometer that measures how much "life" is left in the rebound after impact.

## 🔵 Formal level

### The balance laws system
The analysis of an inelastic collision requires the use of the principle of conservation of linear momentum [[p]], which remains unchanged regardless of energy loss:


The second constraint is imposed by the restitution coefficient [[e]], which defines the relationship between relative velocities before and after the collision:

{{f:e_definition}}

### Solutions for final velocities
By simultaneously solving the momentum balance and the restitution condition, we obtain the expressions for the final velocities [[v1f]] and [[v2f]] of the masses [[m1]] and [[m2]]:



These equations are the fundamental operational tools of the leaf. You will notice that if the coefficient [[e]] were equal to 1, we would recover the elastic collision formulas.

### The case of "Sticking" (Totally Inelastic)
A subcase of great interest occurs when the restitution coefficient is zero. In this situation, the bodies do not separate after impact and both move with a common velocity:

{{f:v_perfectly_inelastic}}

### Energy balance and dissipation
The initial kinetic energy [[Ki]] and the final kinetic energy [[Kf]] are calculated as the sum of the energies of each particle:

{{f:ki_system}}

{{f:kf_system}}

The energy dissipated or lost during the impact is quantified by the energy variation:

{{f:delta_k}}

To evaluate the severity of the loss, we usually calculate the fraction of energy that has been transformed into other non-mechanical forms:

{{f:energy_loss_fraction}}

{{f:v1f_inelastic}}

{{f:v2f_inelastic}}

{{f:p}}

## 🔴 Structural level

### The Arrow of Time and Irreversibility
From a structural point of view, the inelastic collision introduces **irreversibility** into mechanics. Unlike elastic collisions, if we were to record this process and play it backward, the resulting video would violate the laws of thermodynamics. Energy degraded into heat cannot spontaneously reintegrate to increase the rebound speed of the bodies.

### Reduced Mass and Relative Inertia
In advanced physics, energy loss in an inelastic collision is often expressed in terms of the **reduced mass** of the system. This concept summarizes the effective inertia of relative motion. The dissipated energy is directly proportional to the kinetic energy measured from the center of mass frame, multiplied by the loss factor associated with restitution.

### Multichannel Dissipation
The energy that disappears from the kinetic balance ([[DeltaK]]) is distributed into multiple channels:
- **Thermal Energy**: Increase in molecular agitation at the contact point.
- **Acoustic Energy**: Pressure waves that we perceive as the sound of the impact.
- **Deformation Work**: Energy used to reorganize the crystalline or molecular structure of the materials (dents, fractures).

## Deep physical interpretation

The inelastic collision is a reminder that classical mechanics is embedded in a thermodynamic universe. The parameter [[e]] is not a fundamental constant of nature, but an empirical property that depends on the chemical composition, temperature, and speed of the bodies. It represents the "noise" or internal friction that accompanies every motion transaction in the real world.

## Order of magnitude

To contextualize the leaf, let's observe typical values of the restitution coefficient:
- **Golf Ball**: [[e]] approximately 0.85 (very efficient).
- **Tennis Ball**: [[e]] approximately 0.75.
- **Vehicle Collision**: [[e]] between 0.1 and 0.3 (high deformation and dissipation).
- **Wood object falling on hard floor**: [[e]] approximately 0.5.

## Personalized resolution method

1. **Establish Reference**: Define the positive direction of the motion axis.
2. **List Parameters**: Identify the masses [[m1]], [[m2]] and the initial velocities [[v1i]], [[v2i]].
3. **Determine Restitution**: Identify the value of [[e]]. If the problem says "they stick together," use e = 0.
4. **Apply Operational Equations**: Calculate the final velocities using:



5. **Calculate Loss**: Evaluate the energy variation [[DeltaK]] and, if necessary, the loss fraction [[loss_fraction]].

## Special cases and extended example

### Impact against a fixed wall
If one of the masses is infinite (like a wall), the final velocity of the projectile is reduced simply to its initial velocity multiplied by the restitution coefficient and with an inverted sign. The energy dissipated is maximum in this scenario for a given value of [[e]].

### The "Totally Inelastic" limit
In this case, the kinetic energy loss is the maximum allowed by the conservation of linear momentum. It is the most dissipative collision possible within an isolated system.

## Real student questions

- **Is momentum conserved if energy is lost?** Yes. Linear momentum [[p]] depends on the spatial symmetry of Newton's laws, while kinetic energy [[K]] depends on the internal nature of contact forces.
- **Can e be greater than 1?** Only if there is an explosion or release of internal energy during the collision (superelastic collision), but that falls outside the passive inelastic model.

## Cross-cutting connections and study paths

- **Origin**: [Momentum Conservation](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion).
- **Ideal Limit**: [Elastic Collisions](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-elasticas).
- **Tool**: [Restitution Coefficient](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/coeficiente-de-restitucion).

## Final synthesis

Inelastic collisions constitute the bridge between pure mechanics and dissipative reality. By integrating the restitution coefficient [[e]] with momentum conservation [[p]], this leaf allows us to predict not only the final motion of the bodies but also the amount of mechanical energy transformed into heat or deformation. In this scenario, the energy variation [[DeltaK]] is the indicator of the mechanical inefficiency of the impact.







