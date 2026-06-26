# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: simulaciones-estadisticas
# Target response file: errores.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Statistical Simulations

## Conceptual errors

### Error 1: Believing that many samples guarantee truth

**Why it seems correct**
A large [[numero_muestras]] feels convincing because the data table is long and the [[media_muestral]] seems stable.

**Why it is incorrect**
If the samples do not represent the physical distribution, the [[media_muestral]] may be biased. An algorithm that explores [[energia]] states poorly does not reproduce [[probabilidad_boltzmann]] correctly.

**Detection signal**
Independent runs give incompatible averages even though each run reports a small [[error_estadistico]].

**Conceptual correction**
Separate statistical precision from physical validity. [[error_estadistico]] measures sampling fluctuation, not absence of bias.

**Mini-example of contrast**
A simulation with 10⁶ trapped steps near one [[energia]] minimum can be worse than 10⁴ well-mixed samples.

### Error 2: Confusing fluctuation with error of the mean

**Why it seems correct**
[[desviacion_estandar]] and [[error_estadistico]] have the same unit as the [[observable]], so they look similar.

**Why it is incorrect**
[[desviacion_estandar]] measures the spread of individual samples; [[error_estadistico]] measures uncertainty in the [[media_muestral]].

**Detection signal**
The student claims that each individual value must be close to the [[media_muestral]] when the error is small.

**Conceptual correction**
A system may fluctuate strongly and still have a well-known mean if [[numero_muestras]] is large.

**Mini-example of contrast**
The [[energia]] of each configuration may vary widely, while the mean energy has a small [[error_estadistico]].

## Model errors

### Error 3: Using raw N as if all samples were independent

**Why it seems correct**
The data file contains [[numero_muestras]] values, so it seems natural to divide uncertainty by the square root of that number.

**Why it is incorrect**
In Monte Carlo sampling, consecutive samples may be correlated. The effective [[numero_muestras]] can be much smaller.

**Detection signal**
The calculated [[error_estadistico]] decreases fast, but the [[media_muestral]] drifts between long blocks.

**Conceptual correction**
Use block analysis or autocorrelation estimates to correct the real sample size.

**Mini-example of contrast**
If 1000 configurations repeat nearly the same [[energia]], they are not equivalent to 1000 independent states.

### Error 4: Applying [[probabilidad_boltzmann]] outside canonical equilibrium

**Why it seems correct**
The Boltzmann expression appears in many thermal problems and feels like a universal recipe.

**Why it is incorrect**
[[probabilidad_boltzmann]] requires equilibrium at fixed [[temperatura]] and a canonical distribution. It does not describe every sampling process.

**Detection signal**
The [[temperatura]] changes during the simulation or the system is externally driven.

**Conceptual correction**
Identify the physical ensemble first, then choose the correct statistical weight.

**Mini-example of contrast**
A progressively cooled system is not interpreted the same way as one held at constant [[temperatura]].

## Mathematical errors

### Error 5: Thinking that doubling samples halves the error

**Why it seems correct**
In everyday reasoning, doubling effort often feels like doubling precision.

**Why it is incorrect**
[[error_estadistico]] decreases with the square root of [[numero_muestras]], not by direct proportionality.

**Detection signal**
The student expects the error to be divided by 2 when moving from 10³ to 2·10³ samples.

**Conceptual correction**
To divide the error by 2, approximately 4 times more samples are needed.

**Mini-example of contrast**
If delta_X is 0.04 with 10⁴ samples, reaching 0.02 requires about 4·10⁴ samples.

### Error 6: Summing observables without normalizing

**Why it seems correct**
[[suma_observable]] grows with data and seems to contain all the information.

**Why it is incorrect**
[[media_muestral]] requires dividing [[suma_observable]] by [[numero_muestras]]. The sum alone depends on simulation length.

**Detection signal**
When [[numero_muestras]] increases, the reported physical result grows even though the system has not changed.

**Conceptual correction**
Use the accumulated sum only as an intermediate step toward the average.

**Mini-example of contrast**
Doubling samples doubles [[suma_observable]], but it should not double [[media_muestral]] for the same system.

## Interpretation errors

### Error 7: Reading acceptance probability as state probability

**Why it seems correct**
Both [[probabilidad_aceptacion]] and [[probabilidad_boltzmann]] are probabilities and depend on [[energia]].

**Why it is incorrect**
[[probabilidad_aceptacion]] decides whether a proposal is accepted; [[probabilidad_boltzmann]] describes the relative weight of a state.

**Detection signal**
The student says that a state with a certain acceptance has that same probability of appearing.

**Conceptual correction**
Separate the algorithm dynamics from the equilibrium distribution.

**Mini-example of contrast**
A proposal may have low acceptance, but the weight of a state depends on the whole set of configurations and normalization.

### Error 8: Interpreting a small error without checking physical scale

**Why it seems correct**
A number such as 0.01 automatically feels small.

**Why it is incorrect**
[[error_estadistico]] is small or large only compared with the scale of the [[observable]] or the difference one wants to resolve.

**Detection signal**
A conclusion is accepted although two results differ by less than their uncertainties.

**Conceptual correction**
Always compare [[error_estadistico]] with [[media_muestral]] and with the separation between competing models.

**Mini-example of contrast**
An error of 0.01 J is huge if the target difference is 0.005 J, but small if the scale is 10 J.

## Quick self-control rule

Before trusting the simulation, ask: does [[media_muestral]] use representative samples, does [[error_estadistico]] fall with the inverse square root of [[numero_muestras]], and does the physical scale justify the conclusion?

