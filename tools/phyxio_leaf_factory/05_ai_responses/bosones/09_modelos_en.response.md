# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: bosones
# Target response file: modelos.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Bosons
## Ideal model
The ideal model treats bosons as indistinguishable, noninteracting particles in thermal equilibrium. The operational question is how the [[ocupacion_media]] of one state responds when [[energia]], [[potencial_quimico]], and [[temperatura]] vary. The state is assumed to have a well-defined energy, the reservoir fixes [[temperatura]] and [[potencial_quimico]], and multiple occupation is allowed. In this setting, larger [[energia]] lowers the population of that state, while [[potencial_quimico]] closer to the allowed level favors accumulation. [[fugacidad]] summarizes that chemical drive as a dimensionless statistical weight.

## Hypotheses
- Indistinguishable bosons: if the particles were distinguishable or fermionic, [[ocupacion_media]] would not have the same meaning.
- Thermal equilibrium: without equilibrium, a single [[temperatura]] cannot describe the distribution.
- Ideal gas: strong interactions shift levels, change effective [[energia]], and modify condensation.
- Grand-canonical setting: [[potencial_quimico]] represents particle exchange with a large system.
- Nonrelativistic material gas: [[masa_particula]] is fixed and [[longitud_onda_termica]] uses [[constante_planck]].
- Large volume: with few discrete levels, the comparison between [[densidad_particulas]] and [[densidad_critica]] becomes less smooth.

## Quantitative validity domain
The model is reasonable when [[temperatura]] > 0 K, all energies use the same unit, and [[potencial_quimico]] does not exceed the lowest accessible [[energia]] of the ideal gas. In the low-occupation domain, when [[energia]] - [[potencial_quimico]] > 5 [[constante_boltzmann]][[temperatura]], [[ocupacion_media]] is small and the classical limit is often adequate. Quantum degeneracy is indicated when [[densidad_particulas]] [[longitud_onda_termica]]^3 is of order 1. Ideal condensation is expected when [[densidad_particulas]] approaches [[densidad_critica]]. In dilute gases, interaction corrections stay small if the mean interaction energy is far below [[constante_boltzmann]][[temperatura]].

## Model failure signals
The model is failing if the [[ocupacion_media]] versus [[energia]] curve does not decrease as expected, if [[fugacidad]] lies outside the allowed domain, or if an experiment shows interaction-driven level shifts. It also fails when [[temperatura]] is not well defined, when confinement produces level spacing comparable with [[constante_boltzmann]][[temperatura]], or when [[densidad_particulas]] is no longer dilute. A clear warning sign is obtaining negative [[ocupacion_media]] or treating [[densidad_critica]] as an energy.

## Extended or alternative model
When interactions matter, switch to a weakly interacting gas, mean-field model, or Gross-Pitaevskii description for condensates. When an external trap dominates, use a density of states adapted to the confinement potential. For photons or phonons, [[potencial_quimico]] may have special restrictions and cannot be copied from a material gas without checking the system. With few levels, a discrete model replaces the continuum approximation.

## Operational comparison
| Situation | Useful model | Control magnitude | Main risk |
|---|---|---|---|
| Single state in equilibrium | Ideal Bose-Einstein | [[ocupacion_media]] | Confusing average with probability |
| Dilute ultracold gas | Nonrelativistic ideal gas | [[longitud_onda_termica]] | Ignoring interactions |
| Condensation threshold | Density comparison | [[densidad_critica]] | Wrong volume or units |
| Small trap | Discrete-level model | [[energia]] | Applying a smooth curve to few levels |

