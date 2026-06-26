## Conceptual errors


### Error 1: Thinking that any cold gas condenses
**Why it seems correct**
The word condensate suggests that lowering [[temperatura]] is enough.
**Why it is incorrect**
The model requires bosons, sufficient [[densidad_particulas]], and quantum overlap measured through [[longitud_onda_termica]]. Without those conditions, a macroscopic [[fraccion_condensada]] does not appear.
**Detection signal**
The explanation never mentions [[temperatura_critica]] or [[densidad_critica]].
**Conceptual correction**
Check first whether the system is bosonic and whether [[temperatura]] is below the ideal threshold.
**Mini-example of contrast**
A very dilute cold classical gas may not condense, while a denser bosonic gas can do so at the same [[temperatura]].


### Error 2: Reading [[fraccion_condensada]] as an individual probability
**Why it seems correct**
A number between 0 and 1 resembles a probability.
**Why it is incorrect**
[[fraccion_condensada]] describes a collective share of [[numero_particulas]], not the story of one labeled particle.
**Detection signal**
The answer says “this particle has [[fraccion_condensada]] chance of being condensed.”
**Conceptual correction**
Relate [[fraccion_condensada]] to [[numero_condensado]] and the population of the ground state.
**Mini-example of contrast**
If [[fraccion_condensada]] is 0.6, 60% of the ideal ensemble occupies the ground state; it is not a personal tag attached to each particle.

## Model errors


### Error 3: Using the ideal model for strongly interacting gases
**Why it seems correct**
The ideal formulas are simple and provide a fast scale.
**Why it is incorrect**
Strong interactions shift [[temperatura_critica]], deform the [[fraccion_condensada]] curve, and change excitations.
**Detection signal**
Experimental data do not follow expected monotonicity or saturation.
**Conceptual correction**
Use the ideal model as a reference and move to an extended model when interactions dominate.
**Mini-example of contrast**
A dilute cloud may be close to ideal; a dense quantum fluid needs a different model.


### Error 4: Treating a trapped gas as uniform
**Why it seems correct**
A problem may provide one [[numero_particulas]] and one [[volumen]].
**Why it is incorrect**
In real traps, [[densidad_particulas]] varies in space; the center can condense before the edges.
**Detection signal**
A single density is used without saying whether it is mean or effective.
**Conceptual correction**
Separate homogeneous gases from trapped gases and check whether local density is needed.
**Mini-example of contrast**
Two clouds with the same [[numero_particulas]] can condense differently if one is compressed at the center.

## Mathematical errors


### Error 5: Forgetting that [[fraccion_condensada]] cannot be negative
**Why it seems correct**
If [[temperatura]] is above [[temperatura_critica]], blind substitution may produce a meaningless value.
**Why it is incorrect**
Above the ideal threshold, [[fraccion_condensada]] must be taken as zero.
**Detection signal**
The result gives [[fraccion_condensada]] < 0.
**Conceptual correction**
Apply the domain condition before calculating.
**Mini-example of contrast**
If [[temperatura]] exceeds [[temperatura_critica]], there is no ideal condensed fraction; a negative number is not interpreted.


### Error 6: Mixing [[temperatura]] and energy units
**Why it seems correct**
[[constante_boltzmann]] links [[temperatura]] and energy, so it is easy to forget.
**Why it is incorrect**
[[temperatura]] must be in kelvin, and energy scales require [[constante_boltzmann]].
**Detection signal**
The result for [[temperatura_critica]] ends in joules or has no clear unit.
**Conceptual correction**
Check dimensions using [[constante_planck]], [[masa_particula]], and [[constante_boltzmann]].
**Mini-example of contrast**
Using nK as if it were K changes the result by nine orders of magnitude.

## Interpretation errors


### Error 7: Reading the graph as a perfectly vertical jump
**Why it seems correct**
The word critical suggests an abrupt boundary.
**Why it is incorrect**
The ideal [[fraccion_condensada]] curve grows progressively as [[temperatura]] decreases, and real finite systems smooth the threshold.
**Detection signal**
The answer claims that the whole gas condenses exactly at [[temperatura_critica]].
**Conceptual correction**
Read slope, saturation, and domain on the graph.
**Mini-example of contrast**
Near [[temperatura_critica]], the fraction can be small; far below it, it can approach 1.


### Error 8: Confusing [[densidad_critica]] with [[densidad_particulas]]
**Why it seems correct**
Both quantities share the same units.
**Why it is incorrect**
[[densidad_particulas]] describes the system; [[densidad_critica]] is the threshold compared with it.
**Detection signal**
One density is substituted for the other without comparison.
**Conceptual correction**
Always ask: does my density exceed the threshold at this [[temperatura]]?
**Mini-example of contrast**
If [[densidad_particulas]] is below [[densidad_critica]], the ideal condensate is absent even with many bosons.

## Quick self-control rule

Before accepting a result, check [[temperatura]] against [[temperatura_critica]], keep [[fraccion_condensada]] between 0 and 1, and compare [[densidad_particulas]] with [[densidad_critica]].