# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: funcion-de-particion-canonica
# Target response file: ejemplos.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Exam-type example
## Problem statement
A system has three microstates with energies 0 J, 4.1 x 10^-21 J, and 8.2 x 10^-21 J. It is in contact with a heat bath at 300 K. Estimate the [[peso_boltzmann]] values, [[funcion_particion]], [[probabilidad_microestado]], and [[energia_media]]. Interpret how the sum of weights responds to [[temperatura]].

## Data
Absolute temperature: 300 K.
Boltzmann constant: 1.38 x 10^-23 J/K.
Microstate energies: 0 J, 4.1 x 10^-21 J, 8.2 x 10^-21 J.
System: finite set of three discrete microstates.

## System definition
The system is a finite discrete set of microstates in equilibrium with a thermal bath. Each [[energia_microestado]] represents an allowed level. The calculation does not track jumps between states; it describes expected statistical occupation. Because the bath fixes [[temperatura]], the use of [[beta]] and canonical weights is appropriate.

## Physical model
We use the canonical ensemble. The [[temperatura]] is external and stable, [[constante_boltzmann]] converts temperature into microscopic energy scale, and [[funcion_particion]] normalizes the [[peso_boltzmann]] values.

## Model justification
The state list is finite, so the sum converges. The system energy is not fixed exactly because it may exchange energy with the bath. Therefore a microcanonical model would be too restrictive. Since particle exchange is not mentioned, a grand canonical model is unnecessary.

## Symbolic solution
First compute [[beta]] from the thermal scale.

{{f:beta_inversa_termica}}

Then compute the [[peso_boltzmann]] of each microstate.

{{f:peso_boltzmann_canonico}}

The sum of all weights gives [[funcion_particion]].

{{f:funcion_particion_canonica}}

Each [[probabilidad_microestado]] is obtained by normalizing its weight.

{{f:probabilidad_microestado_canonico}}

The [[energia_media]] is the weighted sum of [[energia_microestado]] values.

{{f:energia_media_canonica}}

## Numerical substitution
The thermal energy scale is approximately k_B T ≈ 4.14 x 10^-21 J. The three levels therefore correspond roughly to ratios 0, 1, and 2. Their relative weights are of order 1, 0.37, and 0.14. The [[funcion_particion]] is about 1.51. The approximate probabilities are 0.66, 0.24, and 0.09. The [[energia_media]] is about 1.7 x 10^-21 J.

## Dimensional validation
[[beta]] has inverse-energy dimension, so multiplying it by [[energia_microestado]] gives a dimensionless exponent. The [[peso_boltzmann]] and [[funcion_particion]] are dimensionless. Each [[probabilidad_microestado]] is also dimensionless and should sum to one. The [[energia_media]] keeps energy units because dimensionless probabilities multiply energies measured in joules.

## Physical interpretation
The result means that the canonical [[funcion_particion]] does not count the three states equally. It indicates how strongly each state contributes at the specified [[temperatura]]. This implies that the lowest [[energia_microestado]] dominates because its [[peso_boltzmann]] is largest, while the higher states are still present but thermally penalized. Therefore the [[energia_media]] is below the simple arithmetic average of the three energies. The answer depends on the competition between energy gaps and thermal agitation. Physically, raising [[temperatura]] decreases that penalty, increases the importance of high-energy states, and changes the macroscopic average even when the microstate list stays the same.

# Real-world example
## Context
In a simplified molecular material, three rotational configurations have different energies. At room temperature, a quick statistical model can use [[funcion_particion]] to estimate which configurations contribute to an observed signal. The model does not predict one molecule's path; it predicts the expected distribution for many molecules in equilibrium.

## Physical estimation
A useful order estimate compares each [[energia_microestado]] gap with k_B T. If a gap is of the same order as the thermal scale, several configurations have appreciable [[peso_boltzmann]]. If the gap is about ten times larger, the higher configuration has a very small weight. A reasonable value cutoff in a simulation might keep states whose relative contribution is above 10^-3 and discard smaller ones only after checking that [[energia_media]] changes by less than the desired precision. This approximate scale test protects the calculation from both overcounting irrelevant states and missing states with meaningful magnitude.

## Interpretation
The application shows that [[funcion_particion]] is a thermal filter. Listing configurations is not enough; they must be weighted by [[peso_boltzmann]]. When [[temperatura]] varies, probabilities change, and average properties change with them. That is why the same molecular state list can lead to different macroscopic behavior under different thermal conditions.

