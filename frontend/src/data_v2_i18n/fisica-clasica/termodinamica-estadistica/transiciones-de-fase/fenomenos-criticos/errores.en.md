## Conceptual errors


### Error 1: thinking critical means simply very hot
**Why it seems correct**
The word critical sounds extreme and is often associated with high [[temperatura]].

**Why it is incorrect**
Criticality depends on closeness to [[temperatura_critica]], not on the absolute value of [[temperatura]].

**Detection signal**
The reasoning uses only [[temperatura]] and never computes [[temperatura_reducida]].

**Conceptual correction**
Compare [[temperatura]] with [[temperatura_critica]] and identify the thermal side.

**Mini-example of contrast**
297 K can be critical when [[temperatura_critica]] is 300 K, while 900 K can be far from another critical point.


### Error 2: treating the order parameter as [[temperatura]]
**Why it seems correct**
[[parametro_de_orden]] changes when [[temperatura]] changes.

**Why it is incorrect**
[[parametro_de_orden]] measures macroscopic organization, not thermal agitation.

**Detection signal**
One expects [[parametro_de_orden]] to increase whenever [[temperatura]] increases.

**Conceptual correction**
In many continuous transitions, [[parametro_de_orden]] decreases toward [[temperatura_critica]] from the ordered side.

**Mini-example of contrast**
Spontaneous magnetization may fall while [[temperatura]] rises slowly.

## Model errors


### Error 3: using critical laws for a first-order transition
**Why it seems correct**
There is still a transition and a special [[temperatura]].

**Why it is incorrect**
The laws for [[susceptibilidad]] and [[longitud_correlacion]] assume continuous criticality, not coexistence with a jump.

**Detection signal**
Hysteresis, latent heat, or abrupt discontinuities appear.

**Conceptual correction**
Check whether the transition is continuous before fitting exponents.

**Mini-example of contrast**
A coexistence plateau should not be fitted as a clean divergence.


### Error 4: ignoring finite size
**Why it seems correct**
The theory predicts growth of [[longitud_correlacion]] near the critical point.

**Why it is incorrect**
A finite sample cannot sustain correlations larger than its effective size.

**Detection signal**
[[longitud_correlacion]] saturates near [[temperatura_critica]].

**Conceptual correction**
Use finite-size scaling or exclude the rounded region.

**Mini-example of contrast**
A thin film saturates earlier than a bulk crystal.

## Mathematical errors


### Error 5: forgetting the absolute value of reduced [[temperatura]]
**Why it seems correct**
[[temperatura_reducida]] already carries a sign.

**Why it is incorrect**
Divergence laws usually depend on the distance |[[temperatura_reducida]]|.

**Detection signal**
Fractional exponents produce non-real values for negative bases.

**Conceptual correction**
Use the sign for the physical side and the absolute value for the distance scale.

**Mini-example of contrast**
A negative base with fractional [[exponente_critico_gamma]] cannot represent a positive real [[susceptibilidad]].


### Error 6: confusing amplitude and exponent
**Why it seems correct**
Both change the numerical curve.

**Why it is incorrect**
[[amplitud_critica]] sets scale; [[exponente_critico_beta]] sets the log-slope.

**Detection signal**
Universality is compared using amplitudes.

**Conceptual correction**
Compare exponents for universality and amplitudes for material scale.

**Mini-example of contrast**
Two materials may have different [[amplitud_susceptibilidad]] and the same [[exponente_critico_gamma]].

## Interpretation errors


### Error 7: calling a saturated measurement infinite
**Why it seems correct**
The theory speaks about divergences.

**Why it is incorrect**
Measured [[susceptibilidad]] is limited by resolution, size, and residual fields.

**Detection signal**
The report says infinite instead of giving a large maximum value.

**Conceptual correction**
Treat divergence as an ideal trend.

**Mini-example of contrast**
A high peak in [[susceptibilidad]] indicates collective response, not a literal infinity.


### Error 8: fitting any interval as critical
**Why it seems correct**
A curve can look power-like over a short range.

**Why it is incorrect**
Outside the critical window, nonuniversal corrections dominate.

**Detection signal**
The exponent changes strongly when two data points are moved.

**Conceptual correction**
Look for stable log-scale slopes.

**Mini-example of contrast**
A fit at |[[temperatura_reducida]]| around 0.5 does not prove criticality.

## Quick self-control rule

Compute [[temperatura_reducida]], check continuity, verify that [[parametro_de_orden]] falls and that [[susceptibilidad]] and [[longitud_correlacion]] grow without artificial saturation.