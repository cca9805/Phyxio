# Common errors — Coefficient of Performance

## Conceptual errors

### Error 1: Assuming COP greater than one violates the second law

**Why it seems correct**
The student knows that the thermal efficiency of an engine is limited to less than one by the second law. Upon seeing a [[COP_ref]] of 5.16, the student generalizes that constraint and concludes the result is impossible.

**Why it is incorrect**
COP does not measure conversion of heat into work but transfer of heat per unit of work consumed. The refrigerator does not violate the second law because it transfers heat from the cold to the hot reservoir by consuming [[W]], exactly as the second law permits. COP can take any positive value without contradiction.

**Detection signal**
If the student declares that a COP greater than one is impossible or violates some law, they are confusing COP with thermal efficiency.

**Conceptual correction**
COP measures heat transferred per unit of work, not heat converted to work. The less-than-one constraint only applies to thermal efficiency of engines. COP is bounded above by the Carnot COP, not by one.

**Contrast mini-example**
A refrigerator between [[T_C]] of 258 K and [[T_H]] of 308 K has a Carnot COP of 5.16. Each watt of power extracts 5.16 watts of heat. If the student rejects this result, they confuse COP with thermal efficiency, which for an engine between the same reservoirs would be only 0.162.

## Model errors

### Error 2: Using Carnot COP as a prediction of real performance

**Why it seems correct**
The student calculates the Carnot COP with the problem temperatures and presents it as the real system COP. The formula is closed-form and simple, inviting direct use.

**Why it is incorrect**
The Carnot COP is a theoretical limit assuming total reversibility. Real vapor-compression cycles have significant irreversibilities that reduce the real COP to 30 to 60 % of the Carnot value. Using the Carnot COP as a prediction drastically overestimates refrigeration capacity.

**Detection signal**
If the student sizes a compressor or estimates electricity consumption using the Carnot COP directly without applying a correction factor, they are making this error.

**Conceptual correction**
The Carnot COP is an upper bound, not a prediction. For practical estimates, apply a factor of 0.3 to 0.6 to the Carnot COP depending on system type and operating conditions.

**Contrast mini-example**
With Carnot COP of 5.16, the student predicts that 150 [[W]] of power extracts 774 W of heat. In reality, with a real COP of 2.5 (48 % of Carnot), only 375 W are extracted. The overestimation is 106 %, leading to severe compressor undersizing.

## Mathematical errors

### Error 3: Using Celsius temperatures instead of kelvin

**Why it seems correct**
Problems give temperatures in Celsius and the student substitutes them directly into the Carnot COP formula. The procedure seems natural because the data are already numbers.

**Why it is incorrect**
The Carnot COP formula involves ratios of absolute temperatures. With [[T_C]] of minus 15 degrees and [[T_H]] of 35 degrees in Celsius, the student calculates minus 15 divided by the difference 35 minus (minus 15), obtaining minus 0.3, a physically meaningless negative value.

**Detection signal**
If [[COP_ref]] is negative, zero, or extraordinarily high with conventional HVAC temperatures, Celsius was very likely used instead of kelvin.

**Conceptual correction**
Always convert both temperatures to kelvin by adding 273.15 before substituting. [[T_C]] of minus 15 degrees is 258 K and [[T_H]] of 35 degrees is 308 K. The correct COP is 258 divided by 50, giving 5.16.

**Contrast mini-example**
In Celsius one erroneously obtains minus 0.3 (negative, meaningless). In kelvin one obtains 5.16 (positive, coherent). The difference between both results immediately reveals the unit error.

## Interpretation errors

### Error 4: Confusing refrigeration COP with heat pump COP

**Why it seems correct**
The student uses the formula with [[T_H]] in the numerator when the problem asks for the refrigeration COP. Both formulas have a similar structure and share the same denominator, facilitating confusion.

**Why it is incorrect**
The refrigeration COP has [[T_C]] in the numerator because the useful effect is extracting heat [[Q_C]] from the cold reservoir. The heat pump COP has [[T_H]] in the numerator because the useful effect is delivering heat [[Q_H]] to the hot reservoir. Confusing the numerator produces a result shifted by exactly one unit.

**Detection signal**
If [[COP_bc]] minus [[COP_ref]] does not give exactly one, there is confusion between the two operating modes or a data error.

**Conceptual correction**
Always identify the useful effect before choosing the formula. Refrigeration: useful effect is [[Q_C]], numerator [[T_C]]. Heat pump: useful effect is [[Q_H]], numerator [[T_H]].

**Contrast mini-example**
The problem asks for the refrigeration COP with [[T_C]] of 258 K and [[T_H]] of 308 K. The correct value is 5.16 (numerator [[T_C]]). The student calculates 6.16 (numerator [[T_H]]), which is the heat pump COP. The difference of exactly one confirms the confusion.

## Quick self-control rule

### Error 5: Forgetting work in the energy balance

**Why it seems correct**
The student equates [[Q_H]] with [[Q_C]], thinking the refrigerator simply moves heat from one reservoir to another. If heat moves, it seems logical that the same amount enters as leaves.

**Why it is incorrect**
The reversed cycle energy balance establishes that [[Q_H]] is [[Q_C]] plus [[W]]. The compressor work is entirely converted into additional heat that the condenser delivers to the hot reservoir. The hot reservoir always receives more heat than what is extracted from the cold reservoir.

**Detection signal**
If [[Q_H]] equals [[Q_C]], [[W]] has been forgotten. Always verify that the difference [[Q_H]] minus [[Q_C]] equals exactly [[W]].

**Conceptual correction**
Always apply the energy balance as verification: [[Q_H]] is [[Q_C]] plus [[W]]. If the sum does not balance, there is an error in the data or the COP calculation.

**Contrast mini-example**
With [[Q_C]] of 774 W and [[W]] of 150 W, [[Q_H]] must be 924 W. If the student says [[Q_H]] is 774 W, they are ignoring the 150 W from the compressor, violating the first law of thermodynamics.
