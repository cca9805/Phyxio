# Physical Models of the Conservation Principle

## Ideal model

The canonical model of this leaf assumes a **perfectly isolated system**: a closed set of masses that interact only through internal forces, with no exchange of momentum with the environment. Under these conditions, the net external force [[fuerza_externa_neta]] ([[Fext]]) is strictly zero and the system's [[variacion_momento_lineal]] is zero. This is the starting model for any analysis of collisions, explosions, or separations in classical mechanics.

The fundamental balance summarizing this model is:

{{f:cons_principle}}

where [[Pinitial]] (vector sum of the [[momento_lineal_individual]] of all bodies before the interaction) is identical to [[Pfinal]] (vector sum after). The fact that [[Pinitial]] = [[Pfinal]] is the exact mathematical statement of the conservation principle.

## Hypotheses

For the ideal model to be rigorously applicable, the following hypotheses are required:

1. **Closed system**: The [[masa_total]] of the system does not change during the interaction. No bodies enter or leave, and there is no mass loss from evaporation, fragmentation, or emission.
2. **Zero [[fuerza_externa_neta]]**: All forces acting on the system from outside cancel or are negligible compared to internal forces during the analysis interval.
3. **Well-defined boundaries**: All objects that exchange intense forces belong to the system. The [[masa_individual]] of each body (in this leaf, [[m1]] and [[m2]]) is known and constant.
4. **Impulsive approximation**: In fast collisions, the contact [[tiempo]] is so brief that the impulse of external forces (such as weight or ground friction) is negligible compared to the internal exchange of [[momento_lineal_individual]].
5. **Classical mechanics**: [[velocidad_individual]] are well below the speed of light and masses are large enough to ignore quantum indeterminacy effects.

## Quantitative validity domain

The isolated system model is reliable when the following numerical criteria are simultaneously met:

- **Impulse ratio**: The net external impulse must be less than 5% of the initial [[momento_lineal_total]]. This condition guarantees that the internal [[variacion_momento_lineal]] exchange dominates strongly over any external contribution.
- **Contact [[tiempo]] duration**: In macroscopic solid collisions, typical contact intervals are 10^{-3} to 10^{-6} s. The gravitational impulse in that range is mg·Δt ≈ mg·10^{-4} N·s, many times smaller than impact force peaks (on the order of 10^3 to 10^6 N).
- **Velocity range**: The classical definition of [[momento_lineal_individual]] as the product of mass and [[velocidad_individual]] is accurate when those speeds are below 10% of the speed of light (approximately 30 million meters per second). At higher velocities, the relativistic definition is required.
- **Number of bodies**: This leaf explicitly treats the two-body case ([[m1]] and [[m2]]). The model extends directly to N bodies by summing the N individual momenta.

## Model failure signals

The [[momento_lineal_total]] conservation model fails when any of the following signals are detected:

- **Sustained non-negligible [[fuerza_externa_neta]]**: If an external force acts during a [[tiempo]] comparable to the interaction time (for example, an active engine during the collision), the [[variacion_momento_lineal]] cannot be ignored and [[momento_lineal_total]] conservation no longer holds.
- **Open system with mass loss**: If during the interaction any body loses or gains [[masa_individual]] (fragmentation into many pieces, propellant combustion), accounting for the [[momento_lineal_individual]] of each component becomes ambiguous without inventorying each fragment.
- **Relativistic velocities**: When [[velocidad_individual]] approach the speed of light, the classical definition of [[momento_lineal_individual]] underestimates the real momentum by ignoring the Lorentz factor, violating conservation in the Newtonian model.
- **Observed violation of conservation**: If measuring [[Pinitial]] and [[Pfinal]] experimentally yields a non-zero [[variacion_momento_lineal]], there is an unaccounted external force or the system boundary is poorly defined.

## Extended or alternative model

When the ideal model’s assumptions break down —because the [[fuerza_externa_neta]] cannot be neglected, because velocities are relativistic, or because the system involves more than two bodies with distinct final states— is when to switch to an extended or alternative model. The following extensions are available for these cases:

- **Model with external impulse**: If the [[fuerza_externa_neta]] is known and constant during the interaction [[tiempo]], its impulse is added to the balance to obtain the system’s [[Pfinal]]. This generalizes the balance to systems that are not completely isolated.
- **Perfectly inelastic collision**: When [[m1]] and [[m2]] couple after impact, the common [[vf]] is:

{{f:inelastic_collision}}

- **Separation from rest (recoil/explosion)**: When [[Pinitial]] is zero and bodies separate by internal force:

{{f:recoil_law}}

- **General 1D balance**: The most universal form for two bodies with [[v1i]], [[v2i]], [[v1f]], [[v2f]]:

{{f:general_1d_balance}}

## Operational comparison

| Model | Application condition | Typical unknown |
|-------|-----------------------|----------------|
| Ideal isolation | F_ext = 0 | [[Pfinal]], final states |
| Inelastic collision | F_ext ≈ 0, coupled bodies | [[vf]] |
| Recoil / explosion | [[Pinitial]] = 0, internal separation | [[v1f]], [[v2f]] |
| General 1D balance | F_ext ≈ 0, any collision type | [[v1f]] or [[v2f]] |
| With external impulse | Known non-zero [[fuerza_externa_neta]] | [[variacion_momento_lineal]] |

The ideal model is the most common in exams. Extended models apply when the problem explicitly indicates external forces or processes involving more than two bodies with different final states.
