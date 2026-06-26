# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: metodo-de-montecarlo
# Target response file: errores.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Monte Carlo Method
## Conceptual errors
### Error 1: thinking one sample represents the average
**Why it seems correct**
A single [[valor_muestra]] may have correct units and look physically reasonable.
**Why it is incorrect**
Monte Carlo estimates an average from many values; one datum does not define the [[estimador_montecarlo]].
**Detection signal**
The explanation does not mention [[numero_muestras]], [[varianza_muestral]], or [[error_estandar]].
**Conceptual correction**
Read each sample as partial information and the average as the physical prediction.
**Mini-example of contrast**
One sampled energy may be high, while the mean of 10⁵ samples is moderate.

### Error 2: confusing randomness with no model
**Why it seems correct**
The method uses random numbers, so it can look purely mathematical.
**Why it is incorrect**
Samples must respect [[peso_muestra]], [[temperatura]], [[energia_estado]], and physical constraints.
**Detection signal**
Any generated sample is accepted without checking the target distribution.
**Conceptual correction**
Randomness explores, but the physical model decides which states are representative.
**Mini-example of contrast**
In Metropolis sampling, [[probabilidad_aceptacion]] prevents energetically different moves from being treated equally.

## Model errors
### Error 3: assuming automatic independence
**Why it seems correct**
Each simulation step looks like a new sample.
**Why it is incorrect**
Successive [[valor_muestra]] values in a chain can be correlated.
**Detection signal**
[[error_estandar]] is computed as if every step were independent.
**Conceptual correction**
Check mixing, autocorrelation, and effective [[numero_muestras]].
**Mini-example of contrast**
A walk that barely moves produces many nearly repeated data points.

### Error 4: ignoring extreme acceptance
**Why it seems correct**
A very high [[probabilidad_aceptacion]] seems good because many proposals are accepted.
**Why it is incorrect**
If moves are tiny, accepting many proposals does not mean exploring well.
**Detection signal**
The [[estimador_montecarlo]] changes slowly despite many samples.
**Conceptual correction**
Tune proposals to balance acceptance and exploration.
**Mini-example of contrast**
Accepting everything with tiny steps can explore less than accepting half with useful steps.

## Mathematical errors
### Error 5: confusing variance and standard error
**Why it seems correct**
Both quantities describe statistical spread.
**Why it is incorrect**
[[varianza_muestral]] measures sample spread; [[error_estandar]] measures uncertainty of the mean.
**Detection signal**
[[varianza_muestral]] is reported as the final uncertainty of the [[estimador_montecarlo]].
**Conceptual correction**
Use variance to calculate the uncertainty of the average.
**Mini-example of contrast**
Very scattered samples can still give a precise mean when [[numero_muestras]] is huge.

### Error 6: forgetting weights
**Why it seems correct**
The simple mean is easy and often taught first.
**Why it is incorrect**
If samples have different [[peso_muestra]], a simple average distorts the physical value.
**Detection signal**
An arithmetic mean is used despite explicit statistical weights.
**Conceptual correction**
Use the weighted average with normalized weights.
**Mini-example of contrast**
One rare sample with large weight can matter more than many low-weight samples.

## Interpretation errors
### Error 7: reporting no uncertainty
**Why it seems correct**
The [[estimador_montecarlo]] appears as a final number.
**Why it is incorrect**
Without [[error_estandar]], the remaining statistical noise is unknown.
**Detection signal**
The result includes no margin or convergence criterion.
**Conceptual correction**
Report mean and uncertainty together.
**Mini-example of contrast**
A_hat = 3.0 with error 0.5 is not the same as A_hat = 3.0 with error 0.01.

### Error 8: believing more samples remove bias
**Why it seems correct**
Random error decreases as [[numero_muestras]] increases.
**Why it is incorrect**
Sampling bias does not disappear if the target distribution is wrong.
**Detection signal**
Different strategies converge to different values.
**Conceptual correction**
Separate statistical noise from model or sampling bias.
**Mini-example of contrast**
More samples do not fix a [[probabilidad_aceptacion]] rule that never explores relevant states.

## Quick self-control rule
Before accepting a Monte Carlo result, check the [[estimador_montecarlo]], [[error_estandar]], convergence behavior, and physical representativeness of the sampling.

