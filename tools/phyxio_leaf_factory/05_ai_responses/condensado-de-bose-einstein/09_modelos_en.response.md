# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: condensado-de-bose-einstein
# Target response file: modelos.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Bose-Einstein Condensate
## Ideal model
The ideal model describes a homogeneous, nonrelativistic boson gas with negligible interactions in thermal equilibrium. The operational question is whether [[temperatura]] lies below the [[temperatura_critica]] set by [[densidad_particulas]], [[masa_particula]], [[constante_planck]], and [[constante_boltzmann]]. If it does, a [[fraccion_condensada]] appears, corresponding to a [[numero_condensado]] within the total [[numero_particulas]]. The reading is statistical: the model does not track individual trajectories, but populations of quantum states. It is best used as a baseline calculation before adding trap shape, collisions, or finite-size corrections.

## Hypotheses
- Indistinguishable bosons: if the particles were fermions or distinguishable particles, collective occupation of the ground state would not follow this model.
- Dilute, nearly noninteracting gas: strong interactions shift [[temperatura_critica]] and deform the [[fraccion_condensada]] curve.
- Thermal equilibrium: without equilibrium, a single [[temperatura]] cannot summarize the gas.
- Homogeneity: in a trap, [[densidad_particulas]] changes in space and the effective [[volumen]] must be treated carefully.
- Nonrelativistic regime: if thermal energy approaches relativistic scales, [[masa_particula]] no longer enters with the same interpretation.

## Quantitative validity domain
For an ideal ultracold atomic gas, the model is plausible when [[temperatura]] is below a few microkelvin, the dilution roughly satisfies [[densidad_particulas]] a_s³ << 1 if a_s is the scattering length, and the total [[numero_particulas]] is large enough, for example N > 10⁴, for a sharp transition. Ideal condensation is expected when [[densidad_particulas]] > [[densidad_critica]], equivalently when [[temperatura]] < [[temperatura_critica]]. If [[longitud_onda_termica]] is much smaller than the mean spacing n⁻¹/³, the gas remains essentially classical.

{{f:temperatura_critica_bose}}

{{f:fraccion_condensada_bose}}

## Model failure signals
The model begins to fail if the measured [[fraccion_condensada]] does not vanish near [[temperatura_critica]], exceeds 1, decreases during cooling, or depends strongly on trap geometry. It also fails when collisions, losses, anisotropies, or finite-size effects dominate the measurement of [[numero_condensado]]. A clear signal is that two clouds with the same [[densidad_particulas]] and [[masa_particula]] do not share the same thermal threshold within uncertainty.

## Extended or alternative model
For real gases one uses a weakly interacting model, a trapping potential, and often a local-density approximation. Then [[densidad_particulas]] is not uniform, and the transition is read as a central condensed region growing during cooling. If the system is dense or strongly interacting, one should switch to mean-field theory, Bogoliubov theory, or numerical simulations.

## Operational comparison
| Aspect | Ideal model | Extended model |
|---|---|---|
| Interactions | Neglected | Included as corrections |
| Density | Uniform [[densidad_particulas]] | Spatial density profile |
| Threshold | Clean [[temperatura_critica]] | Shifted or rounded threshold |
| Result | Simple [[fraccion_condensada]] | Trap-dependent [[numero_condensado]] |
| Use | First estimate and scale | Experiments and refined fitting |

