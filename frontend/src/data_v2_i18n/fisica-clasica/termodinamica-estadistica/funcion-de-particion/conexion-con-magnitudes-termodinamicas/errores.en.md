## Conceptual errors


### Error 1: Treating [[funcion_particion]] as an energy
**Why it seems correct**
It appears beside [[constante_boltzmann]], [[temperatura]], and [[energia_libre_helmholtz]], so it may look like an energy-like quantity.
**Why it is incorrect**
The [[funcion_particion]] is dimensionless. Energy appears only after its logarithm is combined with [[constante_boltzmann]] and [[temperatura]].
**Detection signal**
The solution assigns joules directly to Z or compares Z with [[energia_interna]].
**Conceptual correction**
Read Z as a weighted count of microstates, not as stored energy.
**Mini-example of contrast**
Z may double when [[temperatura]] rises while [[energia_libre_helmholtz]] decreases.


### Error 2: Confusing [[energia_interna]] with [[energia_libre_helmholtz]]
**Why it seems correct**
Both have energy units and both come from [[funcion_particion]].
**Why it is incorrect**
[[energia_interna]] is average microscopic energy, whereas [[energia_libre_helmholtz]] includes the entropic effect of [[temperatura]].
**Detection signal**
A decrease in [[energia_libre_helmholtz]] is described as a direct loss of [[energia_interna]].
**Conceptual correction**
Separate average energy from equilibrium potential.
**Mini-example of contrast**
When a solid is heated, [[energia_interna]] can increase while [[energia_libre_helmholtz]] decreases.

## Model errors


### Error 3: Using the canonical ensemble without equilibrium
**Why it seems correct**
The formulas appear to need only [[funcion_particion]] and [[temperatura]].
**Why it is incorrect**
Without equilibrium, one [[temperatura]] cannot represent all statistical weights.
**Detection signal**
The model is applied during a rapid thermal pulse or relaxation process.
**Conceptual correction**
Check that a heat bath and a stationary state are physically reasonable.
**Mini-example of contrast**
An equilibrated gas in a box can use a canonical [[funcion_particion]]; a rapidly expanding cloud cannot.


### Error 4: Changing [[volumen]] while claiming fixed [[volumen]]
**Why it seems correct**
[[presion]] is obtained from [[volumen]] response, so changing [[volumen]] seems harmless.
**Why it is incorrect**
Thermal derivatives of [[energia_libre_helmholtz]] require fixed conditions; mixing [[temperatura]] and [[volumen]] changes corrupts [[entropia]].
**Detection signal**
[[pendiente_energia_libre_temperatura]] is computed from data taken in different containers.
**Conceptual correction**
Separate thermal slope at fixed [[volumen]] from volumetric slope at fixed [[temperatura]].
**Mini-example of contrast**
For [[entropia]], compare equal [[volumen]] states; for [[presion]], vary [[volumen]] deliberately.

## Mathematical errors


### Error 5: Differentiating Z instead of ln Z
**Why it seems correct**
If [[energia_interna]] depends on thermal variation, differentiating [[funcion_particion]] looks natural.
**Why it is incorrect**
The relation uses [[derivada_log_particion_temperatura]], not the raw derivative of Z.
**Detection signal**
The result scales with the arbitrary size of Z instead of relative changes.
**Conceptual correction**
Use the logarithm because it measures relative statistical response.
**Mini-example of contrast**
A fixed degeneracy factor changes Z but should not create a false thermal trend.


### Error 6: Losing the sign of the slope
**Why it seems correct**
A graph’s tilt can be read visually without tracking sign conventions.
**Why it is incorrect**
[[entropia]] and [[presion]] depend on signed slopes, [[pendiente_energia_libre_temperatura]] and [[pendiente_energia_libre_volumen]].
**Detection signal**
The answer gives unexplained negative [[entropia]] or an odd sign for [[presion]].
**Conceptual correction**
State whether [[energia_libre_helmholtz]] increases or decreases before substituting.
**Mini-example of contrast**
A decreasing [[energia_libre_helmholtz]] curve with [[temperatura]] gives a different sign reading than an increasing one.

## Interpretation errors


### Error 7: Reading graph height instead of slope
**Why it seems correct**
The largest value of [[energia_libre_helmholtz]] is visually prominent.
**Why it is incorrect**
The leaf question concerns variation with [[temperatura]], so slope matters.
**Detection signal**
The explanation ignores [[pendiente_energia_libre_temperatura]].
**Conceptual correction**
Read height, slope, and curvature together.
**Mini-example of contrast**
Two systems can share [[energia_libre_helmholtz]] but have different [[entropia]] because their slopes differ.


### Error 8: Ignoring the validity domain
**Why it seems correct**
The formulas look elegant and universal.
**Why it is incorrect**
At extreme [[temperatura]], near transitions, or with strong interactions, the chosen [[funcion_particion]] may not represent the system.
**Detection signal**
The result predicts impossible signs or jumps without model discussion.
**Conceptual correction**
Ask which microstates were included and which variables were fixed.
**Mini-example of contrast**
A two-level approximation may work at low [[temperatura]] and fail when many levels become populated.

## Quick self-control rule

Accept a result only after checking that [[funcion_particion]] is positive and dimensionless, the derived units match, and the slope is coherent with the chosen [[temperatura]] or [[volumen]] variation.