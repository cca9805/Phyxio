# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: microestados-y-macroestados
# Target response file: modelos.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Microstates and Macrostates

## Ideal model
The ideal model separates two levels: the [[microestado]] as a complete microscopic configuration and the [[macroestado]] as an observable description fixed by constraints such as [[energia_total]], [[volumen]], and [[numero_particulas]]. [[multiplicidad_macroestado]] counts how many [[microestado]] produce the same [[macroestado]]. If all accessible [[microestado]] are given the same statistical weight, [[probabilidad_macroestado]] is obtained by comparing multiplicities. [[entropia]] summarizes that count through [[constante_boltzmann]].

## Hypotheses
- The compared [[macroestado]] are exclusive. If they overlap, normalization double counts configurations.
- The constraints [[energia_total]], [[volumen]], and [[numero_particulas]] remain fixed. If they change, the accessible set of [[microestado]] changes.
- Every [[microestado]] is defined with the same level of detail. Mixed granularity biases [[multiplicidad_macroestado]].
- The count [[numero_microestados]] is finite or treatable. Otherwise a continuous or approximate description is required.
- The same accessibility criterion is used for all [[macroestado]]. If not, [[probabilidad_macroestado]] is no longer a homogeneous fraction.

## Quantitative validity domain
The discrete model works when [[numero_microestados]] is greater than 1, every [[multiplicidad_macroestado]] satisfies Ω_M ≥ 0, and the sum of [[probabilidad_macroestado]] over exclusive cases is 1 within a small numerical tolerance, for example |ΣP_M - 1| < 10⁻⁶. In classroom problems, [[numero_particulas]] between 2 and 20 keeps the counting visible. For macroscopic systems, [[numero_particulas]] may be of order 10²³, so logarithms or [[entropia]] are used because [[multiplicidad_macroestado]] can be impossible to handle directly.

## Model failure signals
A clear failure appears when one [[microestado]] belongs to two [[macroestado]] that were supposed to be exclusive. Another warning is a negative [[probabilidad_macroestado]], a value greater than 1, or a set that does not normalize. The model also fails if one [[multiplicidad_macroestado]] is computed at fixed [[volumen]] and another at different [[volumen]] without stating the change. If [[entropia]] decreases while the number of compatible configurations clearly increases, multiplicity has probably been confused with probability or the logarithm has been used incorrectly.

## Extended or alternative model
When [[microestado]] do not have equal weight, simple counting must be replaced by a weighted model such as the canonical model. Then [[energia_total]] is no longer the only rigid restriction, and energy-dependent weights appear. For continuous systems, counting is replaced by densities of states. For very small systems, fluctuations should remain explicit instead of being hidden inside one macroscopic [[entropia]].

## Operational comparison
| Approach | What it counts | When it helps | Typical risk |
|---|---|---|---|
| Microstate | Concrete microscopic configuration | Detailed analysis | Too much information |
| Macrostate | Observable constraints | Thermodynamics and measurements | Hiding multiplicity |
| Multiplicity | [[microestado]] per [[macroestado]] | Relative probabilities | Counting overlapping cases |
| Entropy | Physical logarithm of multiplicity | Macroscopic scale | Confusing it with visual disorder |

