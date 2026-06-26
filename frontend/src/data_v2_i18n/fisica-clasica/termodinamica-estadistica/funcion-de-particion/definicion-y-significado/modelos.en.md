## Ideal model

The ideal model treats the system as being in thermal equilibrium with a known discrete set of microstates. Each microstate has a [[energia_microestado]], receives a [[peso_boltzmann]], and all weights are added to build the [[funcion_particion]]. A [[probabilidad_microestado]] appears only after normalization by that sum. The purpose is not to follow a microscopic trajectory, but to describe the statistical distribution of occupations when [[temperatura]] fixes the comparison scale.

## Hypotheses

- Thermal equilibrium: if the system does not share a well-defined [[temperatura]] with its environment, [[peso_boltzmann]] loses meaning.
- Known accessible microstates: if a relevant state is missing, [[funcion_particion]] is incomplete and [[probabilidad_microestado]] is overestimated for included states.
- Energies on the same scale: if a [[energia_microestado]] uses an unconverted unit, [[razon_energia_termica]] is distorted.
- Fixed [[constante_boltzmann]]: treating it as a fitting parameter erases the physical link between [[temperatura]] and microscopic energy.

## Quantitative validity domain

The canonical model is reasonable when [[temperatura]] is positive and stable, for example with relative variations below about 1 percent during observation. The microstate list must include all non-negligible weights: if an omitted [[peso_boltzmann]] is larger than roughly 1 percent of the partial sum, it cannot be ignored. In high-[[temperatura]] reading, the qualitative criterion is that differences among [[energia_microestado]] values are smaller than a few times the thermal scale. In low-[[temperatura]] estimates, states whose [[peso_boltzmann]] is below 10⁻⁶ of the dominant weight may be neglected for a rough calculation.

## Model failure signals

The model fails if the calculated probabilities do not sum to one, if a [[probabilidad_microestado]] becomes negative, if a higher [[energia_microestado]] state is favored without a degeneracy reason, or if the graph of [[peso_boltzmann]] versus [[razon_energia_termica]] increases. It also fails when [[funcion_particion]] is treated as an energy with units, or when Celsius values are used instead of absolute [[temperatura]].

## Extended or alternative model

If the system exchanges particles, a grand canonical model is more appropriate. If the number of states is huge or continuous, the sum defining [[funcion_particion]] is replaced by integrals or a density of states. If equilibrium is absent, kinetic models or time-dependent probabilities are needed. In quantum systems with degeneracy, the model must count multiplicities of each [[energia_microestado]].


When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.
## Operational comparison

| Situation | Simple model | Extended model |
| Known discrete states | Direct sum of [[peso_boltzmann]] | Explicit degeneracy for repeated levels |
| Many close energies | Finite [[funcion_particion]] | Density of states |
| Stable [[temperatura]] | Canonical ensemble | Non-equilibrium model if it changes fast |
| Normalized probabilities | Direct [[probabilidad_microestado]] | Corrections if accessible states are missing |