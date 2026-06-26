# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: microestados-y-macroestados
# Target response file: ejemplos.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Exam-type example

## Problem statement
A simple system contains four distinguishable particles that can be in the left or right half of a box. A [[microestado]] is defined by the side occupied by each individual particle. A [[macroestado]] is defined only by the number of particles on the left. Count the [[multiplicidad_macroestado]] of several macrostates, obtain the [[probabilidad_macroestado]] for the case with two particles on the left, and connect the result with [[entropia]].

## Data
- [[numero_particulas]]: 4 distinguishable particles.
- [[volumen]]: box divided into two equal regions.
- Target [[macroestado]]: two particles on the left and two on the right.
- [[microestado]]: individual left-right assignment for each particle.
- [[constante_boltzmann]]: kept symbolic to interpret [[entropia]].
- Restriction: all position microstates are considered equally accessible.

## System definition
The system contains four distinguishable microscopic entities. Each one can occupy one of two regions of the [[volumen]]. A [[microestado]] requires knowing the region of every individual particle. A [[macroestado]] removes that individual identity and keeps only the number of particles on the left. Therefore the same [[macroestado]] can be produced by several different microscopic lists. The comparison is valid only if all macrostates use the same box, the same [[numero_particulas]], and the same accessibility criterion.

## Physical model
The model is discrete, combinatorial, and equiprobable. It does not study velocities or interactions, only occupation configurations. The central magnitude is [[multiplicidad_macroestado]], because it measures how many [[microestado]] belong to the observed [[macroestado]]. From that count one obtains [[probabilidad_macroestado]] and, if needed, [[entropia]]. The model is a small teaching version of the relation between microscopic and macroscopic descriptions.

## Model justification
The model is appropriate because the problem defines distinguishable states, exclusive regions, and fixed constraints. [[energia_total]] is not changed, [[volumen]] is not changed, and [[numero_particulas]] remains constant. Also, all [[microestado]] are given the same weight, so [[probabilidad_macroestado]] can be obtained by counting. If particles interacted strongly, if the regions had different sizes, or if the microstates had different energetic weights, another model would be needed.

## Symbolic solution
First count how many [[microestado]] belong to each [[macroestado]].

{{f:conteo_microestados_macroestado}}

For the case of two particles on the left, choose two of the four particles. That choice automatically determines which particles remain on the right. Then convert the count into [[probabilidad_macroestado]] by dividing by the total number of left-right configurations.

{{f:probabilidad_macroestado_multiplicidad}}

The probabilities of all exclusive macrostates must cover the full set.

{{f:normalizacion_macroestados}}

If the two-two case is compared with another case, use a ratio of multiplicities.

{{f:razon_probabilidades_macroestados}}

The [[entropia]] of a macrostate is associated with the logarithm of its multiplicity.

{{f:entropia_boltzmann_macroestado}}

## Numerical substitution
For four particles and two regions, the total number of [[microestado]] is 16. The [[macroestado]] with two particles on the left has [[multiplicidad_macroestado]] 6. Therefore its [[probabilidad_macroestado]] is 6/16, or 0.375. The macrostate with zero particles on the left has multiplicity 1 and probability 1/16. The one-particle-left macrostate has multiplicity 4 and probability 4/16. The [[entropia]] of the two-two macrostate is proportional to ln(6) through [[constante_boltzmann]].

## Dimensional validation
[[numero_microestados]] and [[multiplicidad_macroestado]] are dimensionless counts. [[probabilidad_macroestado]] is also dimensionless and must lie between 0 and 1. [[entropia]] carries the units associated with [[constante_boltzmann]], because a dimensionless logarithm is multiplied by a physical constant. If the logarithm were applied to a dimensional quantity, the expression would fail dimensionally. If the probabilities did not sum to 1, normalization would fail.

## Physical interpretation
The result means that the two-two [[macroestado]] is not more probable because it is prettier or more orderly. It is more probable because it contains more compatible [[microestado]] than the extreme cases. The [[multiplicidad_macroestado]] indicates the microscopic size of that macrostate inside the space of possibilities. This implies that [[probabilidad_macroestado]] depends on how many microscopic configurations support the same observable description. Therefore the value 0.375 is physically a counting statement, not a mysterious preference. If the number of particles increases, balanced-looking macrostates usually increase in relative weight, while extreme macrostates decrease in relative importance. The [[entropia]] physically expresses that microscopic abundance on a thermodynamic scale.

# Real-world example

## Context
Consider a gas spreading inside a box. No one measures the exact position and velocity pattern of every molecule; that would be a microscopic description related to [[microestado]]. What is observed is a coarse density distribution, which acts as a [[macroestado]]. A nearly uniform gas distribution can be produced by an enormous number of microscopic configurations. A macrostate with almost all molecules in one corner has far fewer compatible configurations, even though it may not be logically impossible.

## Physical estimation
With only 10 particles distributed between two halves, the total number of configurations is of order 10³, so a direct estimate is still manageable. With macroscopic [[numero_particulas]], near 10²³, the scale changes violently. The approximate magnitude of [[multiplicidad_macroestado]] for uniform-looking distributions overwhelms the magnitude of extreme clustered distributions. A reasonable value for an extreme [[probabilidad_macroestado]] becomes so tiny that it is effectively absent in ordinary observation. This order-of-magnitude reasoning does not say the extreme macrostate violates mechanics. It says its statistical weight is negligible compared with the vast scale of ordinary macrostates.

## Interpretation
The application shows why macroscopic regularity can arise from microscopic variety. The uniform gas state is not a single arrangement; it is a vast class of arrangements. [[entropia]] increases when the observed [[macroestado]] is compatible with more [[microestado]]. The everyday arrow toward spreading is therefore a statement about multiplicity. The visible behavior is the winning shape of a combinatorial landscape, not a command imposed on each molecule one by one.

