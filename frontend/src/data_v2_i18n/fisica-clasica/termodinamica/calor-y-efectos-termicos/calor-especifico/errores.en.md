## Conceptual errors

### Error 1: Confusing specific heat capacity (intensive) with total heat capacity (extensive)

**Why it seems correct**

Both quantities have similar names and both relate heat to temperature. A student who learns [[c]] as "heat per unit temperature" may equate it with [[C_total]] without noticing that [[c]] has mass in the denominator while [[C_total]] does not. Moreover, when working with a one-kilogram sample, the numerical values of [[c]] and [[C_total]] coincide accidentally, reinforcing the confusion.

**Why it is incorrect**

Specific heat capacity [[c]] in J/(kg·K) is an intensive property: it describes the material independently of the amount. Total heat capacity [[C_total]] in J/K is an extensive property: it describes the system and depends on how much matter it contains. Doubling the mass of a system doubles [[C_total]] but does not change [[c]]. Using [[c]] when the problem asks for the total heat of the system, or using [[C_total]] when comparing between materials, leads to incorrect or incomparable results.

**Detection signal**

The student expresses [[c]] in J/K instead of J/(kg·K), or claims that a 2 kg aluminium block has twice the specific heat capacity of a 1 kg block of the same material.

**Conceptual correction**

[[c]] depends on the material, not on the quantity. [[C_total]] depends on the material and on the mass of the system. The relation [[C_total]] = [[m]] · [[c]] converts the intensive property into the extensive property of the specific system. Whenever comparing between materials, use [[c]]; whenever computing the energy of the complete system, use [[C_total]].

**Contrast mini-example**

Two aluminium blocks: one of 0.5 kg and one of 2 kg. Both have the same [[c]] of 900 J/(kg·K). Their total heat capacities are 450 J/K and 1800 J/K respectively. If it is claimed that the 2 kg block "has greater specific heat capacity", the error is evident: the material is the same, what changes is the extent of the system.

## Model errors

### Error 2: Applying the same value of c for both solid and liquid phases of the same material

**Why it seems correct**

If one learns that "the specific heat capacity of water is 4186 J/(kg·K)", it seems natural to use that value in all water-related calculations: heating liquid water, cooling ice, and computing heat for a process that crosses 0 °C. The value is familiar and appears in all standard exercises.

**Why it is incorrect**

Specific heat capacity depends on the state of aggregation. Ice has [[c]] ≈ 2090 J/(kg·K) and water vapor at 100 °C has [[c]] ≈ 2010 J/(kg·K), while liquid water has [[c]] ≈ 4186 J/(kg·K). Using the liquid water value to compute the heat needed to warm ice from −20 °C to 0 °C introduces an error of approximately 100 % in that segment.

**Detection signal**

The student computes the heat needed to bring ice from −20 °C to 20 °C using a single [[c]] value of 4186 J/(kg·K) throughout the entire process, without separating the solid segment from the liquid segment or including the heat of fusion.

**Conceptual correction**

Processes that cross a phase transition must be separated into segments. Each segment has its own [[c]]: the ice segment uses [[c]] of ice, the melting uses the latent heat of fusion, and the liquid water segment uses [[c]] of water. Only in this way is the total computed heat correct.

**Contrast mini-example**

Heating 100 g of ice from −10 °C to 10 °C. Using constant [[c]] of liquid water: 0.1 × 4186 × 20 ≈ 8372 J. Using correct values: heat of ice from −10 °C to 0 °C (0.1 × 2090 × 10 = 2090 J) plus heat of fusion (0.1 × 334 000 = 33 400 J) plus heat of water from 0 °C to 10 °C (0.1 × 4186 × 10 = 4186 J) gives 39 676 J. The error from using only the liquid water [[c]] is nearly fivefold.

## Mathematical errors

### Error 3: Obtaining a negative specific heat capacity by inverting the subtraction order in [[DeltaT]]

**Why it seems correct**

In many physics calculations, taking the absolute value of a difference is sufficient because only the magnitude matters. If the student works with the formula [[Q]] = [[m]] · [[c]] · [[DeltaT]] and knows that [[c]] is positive, they may assume the sign of [[Q]] is fixed separately and not worry about the subtraction order.

**Why it is incorrect**

In the definition formula [[c]] = [[Q]] / ([[m]] · [[DeltaT]]), inverting the subtraction order in [[DeltaT]] changes its sign. If [[Q]] also has the correct sign (positive for heating), the quotient is negative and [[c]] appears negative. Since [[c]] is always positive, the negative result seems like a calculation error, confusing the student about where the real mistake is.

**Detection signal**

The student obtains negative [[c]] and interprets it as a procedural failure instead of identifying the sign error in [[DeltaT]]. Sometimes the student takes the absolute value of the result without stating so.

**Conceptual correction**

[[DeltaT]] is always computed as T_final − T_initial. If the system heats up, [[DeltaT]] is positive and [[Q]] is too: the quotient gives positive [[c]]. If the system cools down, both [[DeltaT]] and [[Q]] are negative: the quotient of two negatives also gives positive [[c]]. The result is always positive when signs are consistent.

**Contrast mini-example**

A sample absorbs 500 J while its temperature rises from 20 °C to 25 °C. Correct [[DeltaT]]: 25 − 20 = 5 K. Using [[c]] = 500 / ([[m]] · 5): positive [[c]]. If subtracted the other way: [[DeltaT]] = 20 − 25 = −5 K. Using [[c]] = 500 / ([[m]] · (−5)): negative [[c]]. The negative result points to the subtraction order error, not a negative specific heat capacity of the material.

## Interpretation errors

### Error 4: Concluding that the material with greater c "absorbs more heat" from the same source

**Why it seems correct**

A larger [[c]] implies the material needs more energy per kilogram for the same temperature change. If the heat source always provides the same power, it seems that the material with higher [[c]] absorbs more per second.

**Why it is incorrect**

[[c]] indicates how much energy is needed to change temperature by one kelvin per kilogram, but does not determine the absorption rate under a constant-power source. What determines the heating rate is the [[C_total]] of the system and the power of the source. If two systems receive the same power for the same time, both absorb exactly the same [[Q]]; however, the system with greater [[C_total]] experiences a smaller [[DeltaT]]. Confusing heat absorption with temperature change is the core of the error.

**Detection signal**

The student claims that "water absorbs more heat than copper because it has a higher specific heat capacity" when comparing the heating of equal masses of both materials with the same burner for the same time. The absorption of [[Q]] is equal; what differs is [[DeltaT]].

**Conceptual correction**

Under the same power source for the same time, all systems absorb the same [[Q]] regardless of their [[c]]. What varies is [[DeltaT]]: the material with greater [[C_total]] experiences a smaller [[DeltaT]] for the same [[Q]]. [[c]] does not determine how much heat is absorbed, but how much temperature changes per joule absorbed.

**Contrast mini-example**

Two beakers of 200 g, one of water and one of oil, on the same burner for 2 minutes. Both receive the same [[Q]]. Oil ([[c]] ≈ 2000 J/(kg·K)) reaches twice the [[DeltaT]] of water ([[c]] ≈ 4186 J/(kg·K)). It is not that the oil absorbed more heat; the same heat produces more temperature change in it.

## Unit errors

### Error 5: Using the unit "cal/g·°C" without converting when the formula requires J/(kg·K)

**Why it seems correct**

Many older tables and chemistry texts express specific heat capacity in cal/(g·°C), where water has the value exactly 1 cal/(g·°C). This unit value for water causes some students to remember and use it directly in the formula without noticing the unit system.

**Why it is incorrect**

In the International System, [[c]] is expressed in J/(kg·K). A value of [[c]] in cal/(g·°C) must be converted by multiplying by 4186, because 1 cal/(g·°C) equals 4186 J/(kg·K). If 1 cal/(g·°C) is used directly in the formula [[Q]] = [[m]] · [[c]] · [[DeltaT]] with [[m]] in kilograms and [[Q]] in joules, the result for [[Q]] is 4186 times smaller than correct.

**Detection signal**

The student computes [[Q]] for water and obtains a result 4186 times smaller than expected, or uses [[c]] = 1 for water without stating the unit system employed.

**Conceptual correction**

Before substituting in any formula, verify that all quantities are in SI units. For specific heat capacity: J/(kg·K). To convert from cal/(g·°C): multiply by 4186. The exact equivalence is 1 cal/(g·°C) = 4186 J/(kg·K).

**Contrast mini-example**

Compute the heat to warm 0.5 kg of water from 20 °C to 80 °C. With [[c]] = 4186 J/(kg·K): [[Q]] = 0.5 × 4186 × 60 ≈ 125 580 J. With [[c]] = 1 cal/(g·°C) without converting and [[m]] in kg: [[Q]] = 0.5 × 1 × 60 = 30. A result of 30 J to heat half a kilogram of water by 60 degrees immediately reveals the unit error: it should be on the order of 100 000 J.

## Quick self-control rule

Before accepting any specific heat capacity result as correct, verify three conditions:

1. **Sign of c**: specific heat capacity [[c]] must always be positive. If the result is negative, there is a sign error in [[DeltaT]] or [[Q]]: check the subtraction order in [[DeltaT]] and verify that the sign of [[Q]] is consistent with the type of process (heating positive, cooling negative).

2. **Units of the result**: [[c]] must be expressed in J/(kg·K). If the result for [[c]] falls between 100 and 5500 J/(kg·K) for common solids and liquids, it is reasonable. A result for [[c]] close to 1 for water suggests that calories were used instead of joules without converting.

3. **Range of the process**: verify that [[DeltaT]] does not cross any phase transition temperature of the material. If it does, separate the process into segments and apply the [[c]] corresponding to each phase, adding the latent heat at the transition.
