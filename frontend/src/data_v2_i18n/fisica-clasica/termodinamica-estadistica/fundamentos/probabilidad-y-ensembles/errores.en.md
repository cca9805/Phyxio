## Conceptual errors


### Error 1: Treating the [[ensemble]] as one real object

**Why it seems correct**
The [[ensemble]] is often described as many copies of the same system, which suggests there must be a concrete physical object containing them or that the experiment must be literally repeated that many times.

**Why it is incorrect**
The [[ensemble]] is a statistical tool. Its copies are conceptual: they do not need to be built or measured individually. The [[probabilidad_estado]] is defined over an imaginary population of equivalent preparations, not over mandatory physical repetitions.

**Detection signal**
The student asks how many copies literally exist or assumes that [[numero_copias_ensemble]] requires an apparatus with exactly that many material replicas.

**Conceptual correction**
Separate the idea of ideal copies from the requirement of material copies. A canonical [[ensemble]] with very large [[numero_copias_ensemble]] can be used to compute [[valor_medio_ensemble]] without constructing any physical replica.

**Mini-example of contrast**
An ideal-gas [[ensemble]] at fixed temperature has a conceptually infinite [[numero_copias_ensemble]]. No real laboratories are needed: [[peso_estadistico]] and normalization are applied over states, not over real copies.


### Error 2: Reading probability as personal belief

**Why it seems correct**
The word "probability" is used colloquially to express beliefs or subjective uncertainty, as in "I think it will rain with probability 0.7."

**Why it is incorrect**
The [[probabilidad_estado]] in an [[ensemble]] represents the fraction of copies compatible with a given [[estado_microscopico]]. It does not reflect the observer's opinion but the structure of the statistical distribution derived from the [[restriccion_macroscopica]].

**Detection signal**
The student changes [[probabilidad_estado]] according to personal intuition without connecting it to weights, frequencies, or [[conteo_sistemas]].

**Conceptual correction**
Physical probability is tied to preparation. If the [[restriccion_macroscopica]] defines the set, probabilities come from [[peso_estadistico]] or [[conteo_sistemas]], not from personal impressions.

**Mini-example of contrast**
Two students with different intuitions assign different [[probabilidad_estado]] to the same [[estado_microscopico]]. Only the distribution that reproduces the measured [[valor_medio_ensemble]] is physically valid.

## Model errors


### Error 3: Mixing macroscopic constraints

**Why it seems correct**
Combining data from ensembles with different preparations seems useful for obtaining more statistics and a richer description of the system.

**Why it is incorrect**
If the [[ensemble]] mixes copies with different [[restriccion_macroscopica]], the compatible [[estado_microscopico]] change across subsets. The total [[conteo_sistemas]] becomes incoherent and the resulting [[probabilidad_estado]] does not describe any real physical preparation.

**Detection signal**
The probability distribution contains states that are incompatible with some of the combined preparations, or the probabilities do not normalize correctly when a single formula is applied to the mixed set.

**Conceptual correction**
First define which [[restriccion_macroscopica]] all copies share. Only then assign probabilities over [[estado_microscopico]] compatible with that single preparation. If preparations differ, build separate ensembles and analyze them separately.

**Mini-example of contrast**
An [[ensemble]] at fixed temperature and one at fixed energy cannot be combined directly. The [[peso_estadistico]] of each [[estado_microscopico]] differs depending on which constraint is applied and the normalization changes.


### Error 4: Counting incompatible states

**Why it seems correct**
Including more [[estado_microscopico]] seems to give a more complete description and prevents omitting configurations that might be relevant.

**Why it is incorrect**
Only [[estado_microscopico]] compatible with the [[restriccion_macroscopica]] can have nonzero [[probabilidad_estado]]. Counting states outside the allowed set inflates the normalization denominator and pushes all probabilities to values smaller than their true ones.

**Detection signal**
The sum of probabilities is less than one even though all weights are positive, or a [[estado_microscopico]] appears with a [[valor_estado]] that violates the declared constraint.

**Conceptual correction**
Define the state set before assigning [[peso_estadistico]]. If a state is incompatible with the [[restriccion_macroscopica]], its weight is zero and it does not enter normalization or the computation of [[valor_medio_ensemble]].

**Mini-example of contrast**
If the [[restriccion_macroscopica]] fixes that energy must not exceed 5 J, including a [[estado_microscopico]] with [[valor_estado]] of 8 J violates that constraint and contaminates the [[valor_medio_ensemble]] with a contribution the system cannot reach.

## Mathematical errors


### Error 5: Forgetting normalization

**Why it seems correct**
Relative [[peso_estadistico]] already show which [[estado_microscopico]] is more frequent, so using them directly seems to save a step.

**Why it is incorrect**
A [[peso_estadistico]] only indicates relative frequency within the set. Without normalization, the [[valor_medio_ensemble]] has the wrong scale because the probabilities do not sum to 1, and the [[fluctuacion_ensemble]] loses its physical reference.

**Detection signal**
The sum of values used as probabilities exceeds 1, or the [[valor_medio_ensemble]] has a magnitude much larger than any individual [[valor_estado]].

**Conceptual correction**
Divide each [[peso_estadistico]] by the total weight sum to convert it into a physical [[probabilidad_estado]]. Only then apply the weighted average. Normalization ensures [[conteo_sistemas]] of each state is consistent with [[numero_copias_ensemble]].

**Mini-example of contrast**
Weights 2, 3, and 5 sum to 10. Without normalization, the weighted sum gives a result ten times too large. With probabilities 0.2, 0.3, and 0.5, the [[valor_medio_ensemble]] lands at the correct physical scale.


### Error 6: Averaging without weights

**Why it seems correct**
The simple arithmetic mean is quick to compute and is learned before weighted averages. If states seem equally frequent, summing and dividing by the state count looks reasonable.

**Why it is incorrect**
If [[estado_microscopico]] are not equally probable, the simple mean ignores [[probabilidad_estado]] and produces an incorrect [[valor_medio_ensemble]]. Only in the uniform case, where all [[peso_estadistico]] are equal, does the simple mean equal the weighted average.

**Detection signal**
The simple mean differs from the weighted average and the student cannot explain why states with larger [[peso_estadistico]] should contribute more to the observable.

**Conceptual correction**
Multiply each [[valor_estado]] by its [[probabilidad_estado]] before summing. If weights are unequal, the simple mean does not reproduce the [[valor_medio_ensemble]] of the [[ensemble]].

**Mini-example of contrast**
Three states with [[valor_estado]] 0 J, 4 J, and 10 J and probabilities 0.1, 0.2, and 0.7 give [[valor_medio_ensemble]] of 7.8 J. The simple mean (0 + 4 + 10)/3 ≈ 4.7 J is far off because it ignores that the third state dominates the [[ensemble]].

## Interpretation errors


### Error 7: Ignoring [[ensemble]] fluctuation

**Why it seems correct**
The average summarizes expected behavior and seems sufficient for most macroscopic predictions.

**Why it is incorrect**
Two ensembles can have the same [[valor_medio_ensemble]] but very different dispersions. Ignoring the [[fluctuacion_ensemble]] leads to concluding that both systems behave the same, when in reality one produces far more variable results copy to copy.

**Detection signal**
The student reports only the [[valor_medio_ensemble]] without commenting on whether the [[fluctuacion_ensemble]] is negligible or comparable to the mean. When [[fluctuacion_ensemble]] divided by [[valor_medio_ensemble]] exceeds 0.1, the mean alone is insufficient.

**Conceptual correction**
Always compute [[fluctuacion_ensemble]] alongside [[valor_medio_ensemble]] when [[estado_microscopico]] have widely different [[valor_estado]]. The spread tells whether an individual copy is typical or can differ substantially from the mean.

**Mini-example of contrast**
Two ensembles both have [[valor_medio_ensemble]] of 5 J: one concentrated in a single state (low [[fluctuacion_ensemble]]) and one with equal weights between 0 J and 10 J (high spread). The means match but the copy-to-copy behavior is completely different.


### Error 8: Using weights as probabilities

**Why it seems correct**
A larger [[peso_estadistico]] implies larger [[probabilidad_estado]], so it may seem equivalent to use weights directly without normalizing.

**Why it is incorrect**
A [[peso_estadistico]] indicates relative importance, not absolute probability. Before computing [[valor_medio_ensemble]] or [[fluctuacion_ensemble]], weights must be converted to normalized probabilities. A weight of 5 does not mean a probability of 0.5 unless the total weight sum happens to be 10.

**Detection signal**
The student reports a [[valor_medio_ensemble]] of incorrect magnitude because [[valor_estado]] was multiplied by raw weights instead of probabilities. Summed contributions exceed the largest individual [[valor_estado]].

**Conceptual correction**
First sum all [[peso_estadistico]]. Then divide each weight by the total to get the corresponding [[probabilidad_estado]]. Only then apply the weighted [[valor_medio_ensemble]] formula.

**Mini-example of contrast**
Weights 1, 2, and 7 sum to 10. Probabilities are 0.1, 0.2, and 0.7, not 1, 2, and 7. Using raw weights in the average formula overestimates the [[valor_medio_ensemble]] by a factor of ten and leaves [[probabilidad_estado]] normalization unchecked.

## Quick self-control rule

Check that probabilities sum to 1, every [[valor_estado]] has the same unit, and [[fluctuacion_ensemble]] is reported when spread matters.
