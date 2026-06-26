## Conceptual errors


### Error 1: Treating [[energia_media]] as instantaneous energy
**Why it seems correct**
The symbol appears to name “the energy” of the oscillator.
**Why it is incorrect**
[[energia_media]] is a statistical average over occupations; one measurement can correspond to one [[numero_cuantico]].
**Detection signal**
The reasoning describes one trajectory and never mentions [[probabilidad_ocupacion]].
**Conceptual correction**
Read [[energia_media]] as an equilibrium expectation value.
**Mini-example of contrast**
Many measurements can average to [[energia_media]] while individual outcomes differ.


### Error 2: Assuming zero [[temperatura]] removes all energy
**Why it seems correct**
Classical cooling seems to stop motion.
**Why it is incorrect**
The quantum oscillator keeps a minimum part linked to [[hbar]] and [[frecuencia_angular]].
**Detection signal**
The solution forces [[energia_media]] to vanish.
**Conceptual correction**
Separate thermal excitation from zero-point contribution.
**Mini-example of contrast**
Cooling suppresses excited occupations but not the quantum floor.

## Model errors


### Error 3: Using equipartition in every regime
**Why it seems correct**
{{f:limite_clasico_equiparticion}}
looks simple and familiar.
**Why it is incorrect**
It requires the thermal scale to dominate [[energia_cuantica]].
**Detection signal**
No comparison is made between [[temperatura]] and [[frecuencia_angular]].
**Conceptual correction**
Check the scale ratio before using the classical limit.
**Mini-example of contrast**
A high [[frecuencia_angular]] mode can remain weakly excited while a softer mode is classical.


### Error 4: Applying the model to an anharmonic oscillator
**Why it seems correct**
Many systems vibrate near equilibrium.
**Why it is incorrect**
If [[frecuencia_angular]] changes with amplitude, spacing is not fixed.
**Detection signal**
The observed curve deviates from the harmonic prediction.
**Conceptual correction**
Use the harmonic model only for small oscillations.
**Mini-example of contrast**
A weak molecular vibration may fit; a strongly excited one may not.

## Mathematical errors


### Error 5: Giving units to [[funcion_particion]]
**Why it seems correct**
It appears in energy formulas.
**Why it is incorrect**
[[funcion_particion]] normalizes weights and is dimensionless.
**Detection signal**
The answer writes joules beside [[funcion_particion]].
**Conceptual correction**
Assign energy units to [[energia_media]] and [[energia_cuantica]], not to normalization.
**Mini-example of contrast**
A probability sum does not itself carry joules.


### Error 6: Forgetting to normalize [[probabilidad_ocupacion]]
**Why it seems correct**
Boltzmann factors look like direct probabilities.
**Why it is incorrect**
They must be divided by [[funcion_particion]].
**Detection signal**
The probabilities do not sum to 1.
**Conceptual correction**
Always include statistical normalization.
**Mini-example of contrast**
A large weight means favored, not yet probable.

## Interpretation errors


### Error 7: Thinking larger [[frecuencia_angular]] always makes excitation easier
**Why it seems correct**
Higher frequency sounds like more motion.
**Why it is incorrect**
Larger [[frecuencia_angular]] increases [[energia_cuantica]], spacing levels farther apart.
**Detection signal**
The answer predicts more excitation without increasing [[temperatura]].
**Conceptual correction**
Larger spacing makes each excitation more expensive.
**Mini-example of contrast**
At the same [[temperatura]], the stiffer mode may have lower excited occupation.


### Error 8: Reading [[beta]] as direct [[temperatura]]
**Why it seems correct**
[[beta]] is a thermal variable.
**Why it is incorrect**
[[beta]] increases when [[temperatura]] decreases.
**Detection signal**
The reasoning says higher [[beta]] heats the oscillator.
**Conceptual correction**
Read [[beta]] as inverse thermal selectivity.
**Mini-example of contrast**
Large [[beta]] strongly suppresses high levels.

## Quick self-control rule

Accept the result only if [[funcion_particion]] is dimensionless, [[probabilidad_ocupacion]] is normalized, and [[energia_media]] matches the scale comparison between [[temperatura]] and [[energia_cuantica]].