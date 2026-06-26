# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: fluctuaciones
# Target response file: errores.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Fluctuations

## Conceptual errors

### Error 1: Thinking fluctuation contradicts equilibrium
**Why it seems correct**
Equilibrium sounds like no change, so it seems natural to expect energy to remain fixed.

**Why it is incorrect**
In the canonical ensemble, the system can exchange energy with the reservoir. [[energia_media]] is stable, but [[energia_microestado]] occupations may still spread.

**Detection signal**
The student says [[fluctuacion_energia]] must be zero because [[temperatura]] is constant.

**Conceptual correction**
Equilibrium means a stable distribution, not fixed instantaneous energy.

**Mini-example of contrast**
A tiny thermometer in water can exchange energy while the average temperature remains steady.

### Error 2: Confusing [[varianza_energia]] with [[energia_media]]
**Why it seems correct**
Both come from the [[funcion_particion]] and both concern energy.

**Why it is incorrect**
[[energia_media]] measures the center of the distribution; [[varianza_energia]] measures its quadratic width.

**Detection signal**
The student compares J with J^2 or reads [[varianza_energia]] as available energy.

**Conceptual correction**
Identify whether the result is a slope, a curvature, or a square-root scale.

**Mini-example of contrast**
Two systems can have the same [[energia_media]] and different energy spread.

## Model errors

### Error 3: Applying a canonical model to an isolated system
**Why it seems correct**
The [[funcion_particion]] looks like a universal thermal tool.

**Why it is incorrect**
Canonical fluctuations assume energy exchange with a reservoir. If total energy is fixed, exchange fluctuation is not described in the same way.

**Detection signal**
A fluctuation formula for [[capacidad_calorifica]] is used in a problem stating fixed total energy.

**Conceptual correction**
Check the ensemble before differentiating ln(Z).

**Mini-example of contrast**
An isolated molecule does not fluctuate energetically like a molecule in a thermal bath.

### Error 4: Ignoring changes in external parameters
**Why it seems correct**
If [[temperatura]] changes, every energy change may look thermal.

**Why it is incorrect**
If volume, fields, or composition also change, [[capacidad_calorifica]] no longer isolates thermal fluctuation.

**Detection signal**
The calculation mixes data from different physical configurations.

**Conceptual correction**
Keep model parameters fixed when reading [[derivada_segunda_log_particion_beta]].

**Mini-example of contrast**
Compressing a gas while heating it mixes mechanical work with thermal fluctuation.

## Mathematical errors

### Error 5: Losing the sign in the derivative with respect to [[beta]]
**Why it seems correct**
The derivative of ln(Z) appears to give energy directly.

**Why it is incorrect**
[[energia_media]] is related to the slope of ln(Z) versus [[beta]] with a specific sign.

**Detection signal**
As [[beta]] increases, the computed mean energy grows without physical reason.

**Conceptual correction**
Check the formula before interpreting the slope.

**Mini-example of contrast**
Lower [[temperatura]] increases [[beta]] and usually favors lower-energy states.

### Error 6: Taking the square root before checking variance
**Why it seems correct**
[[fluctuacion_energia]] is obtained from the square root of variance.

**Why it is incorrect**
If [[varianza_energia]] became negative through a sign or numerical error, the root hides the failure.

**Detection signal**
Imaginary values appear or an absolute value is forced without explanation.

**Conceptual correction**
First verify that [[varianza_energia]] is nonnegative and has units of J^2.

**Mini-example of contrast**
A badly computed curvature can create a “fluctuation” that matches no physical distribution.

## Interpretation errors

### Error 7: Reading [[capacidad_calorifica]] as stored energy
**Why it seems correct**
Its unit contains energy per temperature, so it seems energy-like.

**Why it is incorrect**
[[capacidad_calorifica]] is a response: it measures how [[energia_media]] changes when [[temperatura]] changes.

**Detection signal**
The student compares [[capacidad_calorifica]] directly with [[energia_media]].

**Conceptual correction**
Interpret it as thermal sensitivity, not stored energy.

**Mini-example of contrast**
Two bodies can have different heat capacities while having similar mean energy per particle.

### Error 8: Assuming large fluctuation always means error
**Why it seems correct**
In macroscopic systems, relative fluctuations are often tiny.

**Why it is incorrect**
In small systems or near transitions, [[fluctuacion_energia]] can be physically important.

**Detection signal**
A result is rejected only because the spread is not negligible.

**Conceptual correction**
Compare [[fluctuacion_energia]] with system size and thermal scale.

**Mini-example of contrast**
A nanosystem can show large relative fluctuations without violating the canonical model.

## Quick self-control rule
Before accepting the result, check [[temperatura]] in K, positive [[beta]], nonnegative [[varianza_energia]], J^2 units for variance, and curvature consistent with the graph of ln(Z).

