# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: hipotesis-fundamental
# Target response file: modelos.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Fundamental Hypothesis
## Ideal model
The ideal model is the microcanonical ensemble: an isolated system with fixed [[energia_total]], [[volumen]], and [[numero_particulas]]. All microstates compatible with those constraints form the accessible set. The hypothesis assigns the same [[probabilidad_microestado]] to each element of that set and uses [[numero_microestados_accesibles]] for normalization. It does not reconstruct microscopic trajectories; it builds an unbiased equilibrium distribution.

## Hypotheses
- Effective isolation: if energy enters or leaves, [[energia_total]] no longer defines the accessible set.
- Fixed macroscopic constraints: if [[volumen]] or [[numero_particulas]] changes, the count changes.
- Statistical equilibrium: if the preparation history remains visible, [[desbalance_probabilidad]] appears.
- Homogeneous counting: if microstates are coarse-grained unevenly, [[numero_microestados_accesibles]] loses meaning.
- Real accessibility: if a dynamical barrier blocks a region, it should not be counted as accessible.

## Quantitative validity domain
The model is reasonable when relative changes in [[energia_total]], [[volumen]], and [[numero_particulas]] are negligible on the macroscopic scale: ΔE/E << 1, ΔV/V << 1, and ΔN/N = 0 for a strictly isolated system. It also requires [[numero_microestados_accesibles]] ≥ 2 and, in macroscopic systems, usually [[numero_microestados_accesibles]] >> 1. A practical diagnostic is [[desbalance_probabilidad]] < 0.01 when an empirical distribution is compared with ideal equiprobability.

## Model failure signals
The model fails if persistent probability currents are observed between regions of phase space, if the distribution clearly depends on the initial preparation, if the environment changes [[energia_total]], or if a macrostate dominates because of an unlisted constraint. It also fails when [[multiplicidad_macroestado]] is confused with individual probability: a macrostate can be likely because it contains many microstates, not because each one carries more weight.

## Extended or alternative model
If the system exchanges energy with a thermal bath, the canonical ensemble is more appropriate. If it exchanges particles, a grand canonical model is needed. If the system mixes slowly, a kinetic description with relaxation times is required. If hidden constraints exist, they must be added before applying equiprobability.

## Operational comparison
| Situation | Useful model | Key magnitude | Reading |
|---|---|---|---|
| Isolated equilibrated system | Microcanonical | [[probabilidad_microestado]] | Uniform assignment |
| Many possible macrostates | Multiplicity | [[multiplicidad_macroestado]] | Sum of microstates |
| Thermal exchange | Canonical | mean [[energia_total]] | Non-uniform weights |
| Persistent bias | Dynamics/relaxation | [[desbalance_probabilidad]] | Not ideal equilibrium |

