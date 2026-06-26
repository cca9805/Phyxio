const e=`# Errors

## Conceptual errors

### Error 1: Confusing absolute temperature [[T_K]] with temperature change [[DeltaT]]

**Why it seems correct**

The student knows that temperature is measured in kelvin in the SI and that specific heat involves temperature, so they use [[T_K]] directly in the specific heat formula as if it were [[DeltaT]]. Since [[T_K]] always has a positive numerical value, the result appears reasonable at first glance.

**Why it is incorrect**

[[T_K]] is the temperature of the system at a given instant; [[DeltaT]] is the difference between the final and initial temperature of a process. They are different quantities. The specific heat law requires [[DeltaT]] (how much the temperature changed), not [[T_K]] (what temperature the system is at). Using [[T_K]] instead of [[DeltaT]] produces a result that depends on the arbitrary origin of the temperature scale, which has no physical meaning for a process quantity.

**Detection signal**

The calculated heat is enormous (on the order of hundreds of kilojoules) when it should be small, or it changes radically when the same state is expressed on a different scale. If switching from Celsius to kelvin changes the heat result in a way that cannot be explained by the unit change, absolute temperature is being used instead of the change.

**Conceptual correction**

[[DeltaT]] is the difference of final temperature minus initial temperature, on any scale (Celsius or kelvin give the same number). [[T_K]] is the state of the system and should only be used in formulas that require absolute temperature (gas laws, Stefan-Boltzmann, Carnot). For specific heat, thermal expansion, and calorimetry, always use [[DeltaT]].

**Mini contrast example**

One kilogram of water is heated from 20 °C to 30 °C. [[DeltaT]] is 10 K (or 10 °C). [[T_K]] at the initial state is 293 K. Using [[T_K]] in the specific heat formula would give heat absorbed proportional to 293 K instead of 10 K, a result 29 times larger than the correct value.

---

### Error 2: Believing that 0 °C equals absolute zero

**Why it seems correct**

The student hears "zero degrees" and associates it with "absence of temperature" or the lower limit of the scale. Just as the zero of integers is the boundary between positive and negative numbers, it seems natural to think that 0 °C is the thermal minimum.

**Why it is incorrect**

The Celsius zero is completely arbitrary: it was chosen by Celsius as the melting point of water at standard pressure. Water at 0 °C has thermal energy 273.15 kelvins above absolute zero. The true absolute zero is –273.15 °C, where [[T_K]] equals zero, not where [[T_C]] equals zero.

**Detection signal**

The student says that at 0 °C there is no temperature or that heat is zero. Or they use 0 °C directly in the ideal gas law and obtain zero volume, which they accept without questioning.

**Conceptual correction**

The zero of a temperature scale is an arbitrary reference, not the thermal minimum. Only absolute zero (0 K, equal to –273.15 °C) represents the thermodynamic minimum, and in practice it is never reached. At 0 °C, bodies have perfectly real thermal energy.

**Mini contrast example**

A balloon of gas at 0 °C does not collapse to zero volume: the gas continues to occupy a definite volume because [[T_K]] is 273 K, not zero. If [[T_C]] were the absolute zero, the gas law would give zero volume, which directly contradicts observation.

## Model errors

### Error 3: Inverting the subtraction order when calculating [[DeltaT]]

**Why it seems correct**

The student instinctively calculates "how much was the initial temperature" and subtracts the final one, because the initial temperature is the "starting" value and it seems natural to place it first. In some linguistic contexts "the change from A to B" is interpreted as A minus B.

**Why it is incorrect**

The universal convention in physics is [[DeltaT]] equal to final temperature minus initial temperature. Inverting the order produces [[DeltaT]] with the opposite sign: a heating process gives negative [[DeltaT]] and a cooling process gives positive [[DeltaT]], which contradicts the physical sense of the process.

**Detection signal**

The calculated heat has the opposite sign from expected: it comes out negative in a process where the system clearly absorbs heat, or positive in a process where it clearly releases heat.

**Conceptual correction**

[[DeltaT]] is always defined as final state minus initial state, just like any other variation in physics (displacement, energy change). Checking that a heating process gives positive [[DeltaT]] is the quickest verification test.

**Mini contrast example**

Water heated from 20 °C to 80 °C. Correctly calculated: [[DeltaT]] is 80 minus 20, positive result 60 °C. With inverted order: [[DeltaT]] is 20 minus 80, negative result –60 °C. The negative sign would indicate cooling, which contradicts the problem statement.

## Mathematical errors

### Error 4: Omitting the 32 or 273.15 offset in scale conversion

**Why it seems correct**

The student remembers that the scales differ by a multiplicative factor (9/5 between Fahrenheit and Celsius, or 1 between Celsius and kelvin) but forgets the origin shift term. Since the multiplicative term is the most "visible" mathematically, the shift is omitted.

**Why it is incorrect**

Temperature scales do not share the same zero, so conversion cannot be just a multiplicative factor: the origin must also be shifted. For Celsius-kelvin, the 273.15 offset is the essential part of the conversion. For Fahrenheit-Celsius, both the 9/5 factor and the +32 are mandatory; omitting either gives an incorrect result.

**Detection signal**

For Celsius-kelvin: the result is [[T_K]] equal to [[T_C]], numerically identical. For Fahrenheit-Celsius: the water freezing point (0 °C) does not give 32 °F, or the boiling point (100 °C) does not give 212 °F.

**Conceptual correction**

Linear conversion between scales with different zeros always has two components: rescaling (multiplicative factor) and shift (additive term). Neither can be omitted. The two water reference points (freezing and boiling) are the standard verification test.

**Mini contrast example**

Converting 100 °C to Fahrenheit. Correct: multiply by 9/5 gives 180, add 32 gives 212 °F. Without the offset: only multiplying by 9/5 gives 180 °F, which is incorrect (the boiling point is 212 °F, not 180 °F).

## Interpretation errors

### Error 5: Interpreting negative [[T_F]] as a calculation error

**Why it seems correct**

The student associates negative temperature with impossible situations (like negative [[T_K]]) and concludes that any negative result in a temperature conversion indicates an error. Since [[T_K]] is never negative, they incorrectly generalise to all scales.

**Why it is incorrect**

Only [[T_K]] cannot be negative in classical thermodynamics. Both [[T_C]] and [[T_F]] can perfectly well be negative: there are physically possible temperatures below 0 °C (which correspond to negative [[T_F]] below –17.78 °C) and below –17.78 °C. Negative [[T_F]] simply indicates temperature below the arbitrary reference of the Fahrenheit zero.

**Detection signal**

The student discards the result –20 °F as incorrect or converts it to positive before presenting it, without physical justification.

**Conceptual correction**

The sign of [[T_C]] and [[T_F]] depends on the position of the temperature relative to the arbitrary zero of each scale. The only physically impossible value is negative [[T_K]]. Verify using the calculated [[T_K]]: if [[T_K]] is positive, the result in Celsius or Fahrenheit is valid regardless of its sign.

**Mini contrast example**

The temperature of –30 °C corresponds to 243 K (positive and correct) and to –22 °F (negative but correct). Liquid nitrogen at 77 K corresponds to –196 °C and –320.8 °F: both are negative and physically perfectly valid.

## Quick self-control rule

Before accepting any temperature conversion as valid, check these four conditions:

1. [[T_K]] is always positive; if it is negative there is a data error in [[T_C]].
2. The difference between [[T_K]] and [[T_C]] is always 273.15 (varying only by rounding).
3. For [[T_C]] at the water freezing point (0 °C) the conversion to [[T_F]] gives exactly 32; for [[T_C]] at the boiling point (100 °C) it gives exactly 212.
4. [[DeltaT]] has the same sign as the process: positive for heating, negative for cooling.
`;export{e as default};
