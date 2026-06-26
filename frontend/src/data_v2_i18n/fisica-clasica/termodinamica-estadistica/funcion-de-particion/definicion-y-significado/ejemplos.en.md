# Exam-type example


## Problem statement

A canonical system has three accessible microstates. The first has zero [[energia_microestado]], the second has [[energia_microestado]] of 0.025 eV, and the third has [[energia_microestado]] of 0.050 eV. The [[temperatura]] is 290 K. Estimate the [[peso_boltzmann]] values, build the [[funcion_particion]], and obtain the [[probabilidad_microestado]] of each state. The physical aim is to interpret how [[temperatura]] decides whether differences in [[energia_microestado]] matter strongly or weakly.

## Data

- [[energia_microestado]] of state 1: 0 eV
- [[energia_microestado]] of state 2: 0.025 eV
- [[energia_microestado]] of state 3: 0.050 eV
- [[temperatura]]: 290 K
- [[constante_boltzmann]] in eV/K: 8.62·10⁻⁵ eV/K
- Requested quantities: [[peso_boltzmann]], [[funcion_particion]], [[probabilidad_microestado]], [[razon_energia_termica]]

## System definition

The system is defined as a discrete set of three microstates in thermal equilibrium. We are not studying a time path between states, but the statistical distribution expected after many observations. Each [[energia_microestado]] represents the microscopic cost of occupying that state. The [[temperatura]] fixes the available thermal scale, and [[constante_boltzmann]] converts that scale into compatible energy units. The [[funcion_particion]] must include all three states because every [[peso_boltzmann]] affects the final normalization.

## Physical model

We use the canonical ensemble with discrete microstates and constant [[temperatura]]. The lowest [[energia_microestado]] state should be favored, but higher states do not disappear if the thermal scale is comparable with their energies. The model assumes equilibrium, known accessible states, and no extra degeneracy. The final [[probabilidad_microestado]] values must be positive and sum to one.

## Model justification

The question does not require forces, trajectories, or time dynamics; it requires comparing statistical accessibility. That is why [[peso_boltzmann]] is the proper tool: it penalizes a large [[energia_microestado]] relative to the scale set by [[temperatura]]. The [[razon_energia_termica]] tells in advance whether high states should be rare. Because the three states belong to the same system, their weights can be added into one [[funcion_particion]] and used for normalization.

## Symbolic solution

First compute the thermal scale from [[constante_boltzmann]] and [[temperatura]], then form the [[razon_energia_termica]] for each state.

{{f:peso_boltzmann}}

Next add the weights of all states to obtain [[funcion_particion]].

{{f:funcion_particion_suma_pesos}}

Finally each [[probabilidad_microestado]] is obtained by dividing that state’s [[peso_boltzmann]] by [[funcion_particion]].

{{f:probabilidad_microestado}}

As a conceptual control, if [[temperatura]] were much larger, the weights would move closer together.

{{f:limite_alta_temperatura}}

## Numerical substitution

The thermal scale is approximately 8.62·10⁻⁵ eV/K multiplied by 290 K, or about 0.025 eV. Therefore the [[razon_energia_termica]] values are approximately 0, 1, and 2. The relative [[peso_boltzmann]] values are then about 1, 0.37, and 0.14. The approximate [[funcion_particion]] is 1.51. The resulting [[probabilidad_microestado]] values are about 0.66 for the low state, 0.24 for the second state, and 0.09 for the third state.

## Dimensional validation

The [[razon_energia_termica]] is dimensionless because it compares a [[energia_microestado]] with the energy scale formed by [[constante_boltzmann]] and [[temperatura]]. The [[peso_boltzmann]] is also dimensionless, since it comes from an exponential of a dimensionless quantity. The [[funcion_particion]] is a sum of dimensionless terms, so it remains dimensionless. Each [[probabilidad_microestado]] is a ratio of dimensionless quantities and must be unitless, positive, and normalized.

## Physical interpretation

The result means that the chosen [[temperatura]] is not high enough to make all states equally likely. The second [[energia_microestado]] is comparable to the thermal scale, which indicates that its [[peso_boltzmann]] remains relevant but is clearly below the lowest state. The third state has a larger [[razon_energia_termica]], therefore its contribution decreases more strongly. this implies that [[funcion_particion]] is not simply a count of three equal states; physically, it is a weighted total shaped by thermal accessibility. The final [[probabilidad_microestado]] depends on both individual energetic cost and the number of competing states, so the low state dominates while excited states still appear.

# Real-world example


## Context

In a molecular material, two conformations may have different [[energia_microestado]]. At a given [[temperatura]], the lower-energy conformation is usually more frequent, but the other can still appear if the energy difference is not much larger than the thermal scale. This reasoning is used to estimate relative populations in physical chemistry, biophysics, and soft materials, provided the system is close to equilibrium.

## Physical estimation

Suppose two conformations differ in [[energia_microestado]] by 0.040 eV at a [[temperatura]] of 300 K. The thermal scale associated with [[constante_boltzmann]] and [[temperatura]] is of order 0.026 eV, so an approximate [[razon_energia_termica]] for the higher conformation is about 1.5. This estimate tells us that the higher conformation has a smaller [[peso_boltzmann]], but not a negligible one. On the scale of probabilities, the [[funcion_particion]] contains one dominant contribution and one secondary contribution. A reasonable value for the higher-state [[probabilidad_microestado]] may still be on the magnitude of several percent or more, depending on degeneracy.

## Interpretation

The application shows that [[funcion_particion]] is not decorative formalism: it turns microscopic differences in [[energia_microestado]] into observable populations. If [[temperatura]] increases, the higher conformation gains [[probabilidad_microestado]] because its thermal penalty weakens. If [[temperatura]] decreases, the system concentrates more strongly in the lower [[energia_microestado]] conformation. This reading avoids the vague statement that “the low state wins”; it estimates how much it wins and under which physical conditions the distribution can change.