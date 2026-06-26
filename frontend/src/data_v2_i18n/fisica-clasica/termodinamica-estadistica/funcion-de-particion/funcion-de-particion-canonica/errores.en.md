## Conceptual errors


### Error 1: confusing Z with a probability
**Why it seems correct**
The [[funcion_particion]] appears alongside [[probabilidad_microestado]] in nearly every derivation and has a positive numerical value, which makes it easy to assume it represents how probable something is.

**Why it is incorrect**
The [[funcion_particion]] is not bounded between 0 and 1 and does not give the occupation of any single state. Its role is to act as the normalizer: it collects the sum of all [[peso_boltzmann]] values so that dividing each one by Z yields a well-defined [[probabilidad_microestado]]. A value of Z greater than 1 is perfectly normal and common.

**Detection signal**
The student treats Z as a probability directly, or reads the numerical value of Z as an occupation fraction for some state without dividing by the full sum.

**Conceptual correction**
Keep three steps separate: compute each [[peso_boltzmann]], sum them to obtain [[funcion_particion]], and only then divide each weight by that sum to get [[probabilidad_microestado]]. The [[funcion_particion]] is not an occupation; it is the reference that makes normalization possible.

**Mini-example of contrast**
If two microstates have [[peso_boltzmann]] 3 and 1, then [[funcion_particion]] equals 4. The probabilities are 0.75 and 0.25. The value 4 is not a probability; it is the reference that allows those probabilities to be defined.


### Error 2: assuming all microstates weigh the same
**Why it seems correct**
Symmetric systems such as dice or coins have equal probability for every outcome. This intuition carries over and makes a 1/N assignment seem natural when N microstates are present.

**Why it is incorrect**
In the canonical ensemble, the [[peso_boltzmann]] depends exponentially on [[energia_microestado]] and [[temperatura]]. Equal weights appear only in the limit of very high [[temperatura]], where the thermal scale overwhelms all energy differences. Under normal conditions, states with smaller [[energia_microestado]] receive substantially more weight than high-energy states.

**Detection signal**
The student computes [[funcion_particion]] by dividing 1 by N, or assigns the same [[probabilidad_microestado]] to every state without evaluating individual [[peso_boltzmann]] values.

**Conceptual correction**
Compute each [[peso_boltzmann]] using [[beta]] and the [[energia_microestado]] of that specific state. Two states with equal energy share equal weight, but states with different energies carry different weights that reflect their actual thermal accessibility.

**Mini-example of contrast**
Three states with energies 0, 1, and 2 (in units of kT) have relative weights 1, 0.37, and 0.14. Their [[funcion_particion]] is 1.51 and their probabilities are 0.66, 0.25, and 0.09, far from the uniform value of 0.33 each.

## Model errors


### Error 3: using the canonical ensemble without a heat bath
**Why it seems correct**
The canonical ensemble is always presented with [[temperatura]] as its parameter, and knowing the temperature seems sufficient to apply the formalism without further conditions.

**Why it is incorrect**
Temperature acts as a canonical parameter only when a large enough heat bath fixes it while the system exchanges energy freely. An isolated system has fixed total energy and does not have a well-defined canonical [[temperatura]]. The appropriate model in that case is the microcanonical ensemble, not the canonical one.

**Detection signal**
The canonical sum is applied to a system described as isolated, with no mention of thermal contact, or an initial observation temperature is confused with the [[temperatura]] of an external bath.

**Conceptual correction**
Verify that the problem specifies thermal contact with an environment that fixes [[temperatura]]. If total energy is strictly fixed with no energy exchange channel, the canonical ensemble does not represent the physical situation correctly.

**Mini-example of contrast**
A molecule in a perfectly insulated container with fixed kinetic energy requires the microcanonical treatment. The same molecule in contact with a wall at a defined [[temperatura]] can be treated canonically, and its [[funcion_particion]] is well defined.


### Error 4: forgetting degeneracy
**Why it seems correct**
If two microstates share the same [[energia_microestado]], counting them separately seems like redundant bookkeeping. One energy value is included and the calculation proceeds.

**Why it is incorrect**
Each physically distinct microstate contributes independently to [[funcion_particion]], even when it shares its energy with another state. Omitting degenerate states underestimates Z and overestimates each individual [[probabilidad_microestado]]. Degeneracy is part of the physics, not a mathematical repetition without consequence.

**Detection signal**
The [[funcion_particion]] is smaller than expected from the system's symmetry, or the sum of [[probabilidad_microestado]] values fails to equal one when degenerate states are counted carefully.

**Conceptual correction**
Explicitly count every physically distinguishable microstate. If g states share the same [[energia_microestado]], their combined contribution to [[funcion_particion]] is g times the individual [[peso_boltzmann]]. This multiplicity directly changes the [[probabilidad_microestado]] of every state in the system.

**Mini-example of contrast**
A level with [[energia_microestado]] equal to kT and degeneracy 3 contributes 3·e^{-1} ≈ 1.10 to [[funcion_particion]], not e^{-1} ≈ 0.37. Forgetting the factor of 3 visibly changes the [[probabilidad_microestado]] of the ground state and all excited states.

## Mathematical errors


### Error 5: normalizing before summing all weights
**Why it seems correct**
It seems efficient to normalize each [[peso_boltzmann]] as soon as it is computed, rather than accumulating a growing list of unnormalized values.

**Why it is incorrect**
Normalization requires the total of all weights, meaning the complete [[funcion_particion]]. Dividing by a partial sum overestimates the [[probabilidad_microestado]] of the states counted first, and the final probabilities will not sum to one.

**Detection signal**
The calculated probabilities do not sum to exactly one, or the value of Z used as the denominator does not match the total sum of all [[peso_boltzmann]] in the system.

**Conceptual correction**
Complete the computation of all [[peso_boltzmann]], sum them to obtain [[funcion_particion]], and only then compute each [[probabilidad_microestado]] by dividing the individual weight by the full sum. The correct order is: weight, sum, normalize, interpret.

**Mini-example of contrast**
With three weights 1, 0.37, and 0.14, the sum Z is 1.51. Normalizing the first weight before adding the third gives a [[probabilidad_microestado]] of 1/1.37 ≈ 0.73, instead of the correct 1/1.51 ≈ 0.66. The error propagates to all probabilities.


### Error 6: treating [[beta]] as temperature
**Why it seems correct**
[[beta]] and [[temperatura]] appear together and describe the same thermal situation, so it is natural to assume they move in the same direction: when [[temperatura]] increases, [[beta]] seems to increase as well.

**Why it is incorrect**
[[beta]] is the inverse of the thermal energy scale. When [[temperatura]] rises, [[beta]] falls, and the [[peso_boltzmann]] of high-[[energia_microestado]] states increases. Confusing the two inverts the direction of statistical selection and leads to predicting that excited states become less favored when heated, which is exactly the opposite of what happens.

**Detection signal**
The student writes that "at higher [[temperatura]] excited states have lower [[probabilidad_microestado]]," or uses [[beta]] as proportional to [[temperatura]] in a [[peso_boltzmann]] calculation.

**Conceptual correction**
Remember that [[beta]] decreases when [[temperatura]] increases. At low [[temperatura]], [[beta]] is large and strongly suppresses high-energy states. At high [[temperatura]], [[beta]] is small and the suppression weakens, allowing excited states to gain [[probabilidad_microestado]].

**Mini-example of contrast**
At 300 K, a state with [[energia_microestado]] equal to kT has weight e^{-1} ≈ 0.37. At 600 K, the same state has weight e^{-0.5} ≈ 0.61. Doubling [[temperatura]] halves [[beta]] and increases the excited-state weight.

## Interpretation errors


### Error 7: reading one [[peso_boltzmann]] as an occupation
**Why it seems correct**
A large [[peso_boltzmann]] suggests the state "weighs more," which naturally sounds like high probability of being occupied.

**Why it is incorrect**
The [[peso_boltzmann]] is a relative quantity: its physical meaning depends on the [[funcion_particion]] of the full system. A weight of 5 corresponds to very different [[probabilidad_microestado]] values depending on whether Z is 10 or 500. Without Z, the weight has no occupation interpretation.

**Detection signal**
The student reports w_i directly as "the probability of that state," skipping the division by [[funcion_particion]], or compares [[peso_boltzmann]] values from two different systems without computing their respective Z values.

**Conceptual correction**
Always compute [[probabilidad_microestado]] by dividing the individual [[peso_boltzmann]] by [[funcion_particion]]. The weight alone only serves to build the sum; the occupation emerges from comparing that weight with the full statistical total.

**Mini-example of contrast**
The same microstate has the same [[peso_boltzmann]] in two different systems. If the first has [[funcion_particion]] equal to 4, the [[probabilidad_microestado]] is 0.50. If the second has [[funcion_particion]] equal to 100, the [[probabilidad_microestado]] is 0.02. The weight did not change; the occupation changed dramatically.


### Error 8: interpreting [[energia_media]] without probabilities
**Why it seems correct**
The arithmetic mean of the microscopic energies appears to be the most direct estimate of the system's average energy. Summing the energies and dividing by the number of states sounds like the natural procedure.

**Why it is incorrect**
The canonical [[energia_media]] is not the arithmetic mean of the [[energia_microestado]] values. It is the weighted average using [[probabilidad_microestado]]. When states do not share equal occupation, the weighted mean differs from the arithmetic mean and is the only physically correct result. Using the arithmetic mean implicitly assumes equal weights, which would only hold at infinite [[temperatura]].

**Detection signal**
The student computes (E_1 + E_2 + E_3)/3 instead of Σ E_i P_i, or equates [[energia_media]] directly with the [[energia_microestado]] of the most probable state.

**Conceptual correction**
Use [[energia_media]] = Σ E_i · P_i, where each P_i comes from its [[peso_boltzmann]] divided by [[funcion_particion]]. The arithmetic mean is only correct when all [[probabilidad_microestado]] values are equal.

**Mini-example of contrast**
Three states with energies 0, kT, and 2kT, and probabilities 0.66, 0.25, and 0.09 give [[energia_media]] ≈ 0.43 kT. The arithmetic mean would be kT. The difference of more than a factor of two shows that the weighted average is indispensable for a correct physical prediction.

## Quick self-control rule

Before accepting a canonical calculation, check that all [[peso_boltzmann]] values are positive, the total [[probabilidad_microestado]] is one, and [[energia_media]] lies inside the accessible energy range.
