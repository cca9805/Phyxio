# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: funcion-de-particion-canonica
# Target response file: modelos.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Canonical Partition Function
## Ideal model
The ideal model treats the system as being in thermal equilibrium with a heat bath that fixes [[temperatura]]. Accessible microstates are defined, each one has a [[energia_microestado]], and its relative contribution is measured by a [[peso_boltzmann]]. The [[funcion_particion]] sums those weights and makes each [[probabilidad_microestado]] normalizable. The model does not follow transitions between microstates; it describes the statistical distribution compatible with the chosen temperature.

## Hypotheses
- Large heat bath: if the system changes the bath [[temperatura]], the canonical ensemble is no longer adequate.
- Identifiable microstates: if [[energia_microestado]] values are miscounted, [[funcion_particion]] becomes biased.
- Thermal equilibrium: if relaxation is incomplete, computed [[probabilidad_microestado]] values do not represent real occupations.
- Stable model energies: if external fields change energies and are not included, [[peso_boltzmann]] loses meaning.
- Finite normalization: if the sum diverges, physical probabilities cannot be defined.

## Quantitative validity domain
The model is reliable when [[temperatura]] > 0 K, the bath is much larger than the system, and the included energies cover all states with appreciable [[peso_boltzmann]]. In numerical work, states with relative contribution below 10^-6 may often be truncated if they do not affect [[energia_media]]. For a finite discrete system, [[funcion_particion]] must be positive and finite. If a gap in [[energia_microestado]] exceeds roughly 20 thermal energy units, the high state is usually negligible compared with the lower one.

## Model failure signals
The model fails if the weight sum does not converge, if negative probabilities appear, if the total [[probabilidad_microestado]] is not one, or if [[energia_media]] lies outside the accessible energy range. It also fails when observed populations cannot be described by one [[temperatura]], or when omitted degeneracies visibly change the distribution.

## Extended or alternative model
If particle number fluctuates, the grand canonical ensemble is more appropriate. If the system is isolated, a microcanonical description is natural. If interactions are strong and not separable, microstates and their [[energia_microestado]] values must be rebuilt. In continuous classical systems, the sum becomes a partition integral with a physically meaningful phase-space measure.

## Operational comparison
| Situation | Recommended model | Key signal |
|---|---|---|
| System with fixed heat bath | Canonical | defined [[temperatura]] |
| Isolated system | Microcanonical | fixed total energy |
| Particle exchange | Grand canonical | variable particle number |
| Continuous states | Partition integral | phase-space measure needed |

