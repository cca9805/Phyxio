const e=`# Temperature

## Conceptual context

Temperature is one of the most everyday quantities and, at the same time, one of the most difficult to define rigorously in physics. Everyone has an intuitive sense of what "hot" or "cold" means, but that subjective perception is not sufficient for physics. Temperature requires a quantitative definition, a reproducible scale, and a connection to the microscopic structure of matter.

Historically, the first temperature scales were operational: two reproducible reference points were chosen (ice melting, water boiling) and the interval was divided into equal parts. Celsius, Fahrenheit, and Réaumur took this approach and obtained scales with arbitrary zeros. The decisive conceptual advance came with nineteenth-century thermodynamics, when it was demonstrated that an absolute lower limit of temperature—absolute zero—existed and that it was possible to define a scale independent of the thermometric material.

This leaf focuses on three practical and essential aspects: the physical definition of temperature as a state quantity, the three most widely used scales (Celsius, Kelvin, and Fahrenheit) with their exact conversions, and the crucial distinction between absolute temperature [[T_K]] and temperature change [[DeltaT]]—the most frequent thermodynamics error in secondary and upper secondary education.

## 🟢 Essential level

Temperature measures **how hot or cold** a body is. More precisely: it is the quantity that determines whether heat flows between two bodies in contact. If two bodies have the same temperature, no heat flows between them; if they have different temperatures, heat flows spontaneously from the hotter to the cooler.

To measure temperature we need a **scale**. Three are mainly used in science:

- **Kelvin (K)**: the absolute SI scale. Its zero is absolute zero, the point of lowest possible thermal energy. There are never negative temperatures in kelvin. Water freezes at 273 K and boils at 373 K.

- **Celsius (°C)**: the everyday scale in Europe and applied science. Zero corresponds to the water melting point and 100 °C to its boiling point. It can be negative. One Celsius degree has the same size as one kelvin.

- **Fahrenheit (°F)**: predominant in the US. Water freezes at 32 °F and boils at 212 °F. The Fahrenheit degree is smaller than the Celsius degree.

All three scales measure the same physical quantity with different zeros and different degree sizes.

## 🔵 Formal level

The exact relationship between Celsius and kelvin is:

{{f:conversion_celsius_kelvin}}

The offset of 273.15 reflects that the Celsius zero lies 273.15 kelvins above absolute zero. This relationship is an exact definition of the Bureau International des Poids et Mesures, not an approximation.

The relationship between Fahrenheit and Celsius is:

{{f:conversion_fahrenheit_celsius}}

The factor 9/5 arises because the interval between the water reference points is divided into 180 parts in Fahrenheit and 100 parts in Celsius: 180/100 equals 9/5. The +32 term shifts the origin of the Fahrenheit scale.

The temperature change in a process is defined as:

{{f:variacion_temperatura}}

where positive [[DeltaT]] indicates heating and negative [[DeltaT]] indicates cooling. For temperature changes—unlike absolute temperatures—Celsius and kelvin give the same numerical value, because the 273.15 offset cancels out in the subtraction.

The rearrangements of these formulas allow any of the three temperatures to be calculated from the others, or the initial or final temperature that produces a specified [[DeltaT]] to be determined.

## 🔴 Structural level

The thermodynamic definition of temperature is independent of any thermometric material. It is based on the concept of **thermal equilibrium**: two systems that do not exchange heat when in contact have the same temperature. The zeroth law of thermodynamics formalises this: if A is in equilibrium with B, and B is in equilibrium with C, then A is in equilibrium with C. This transitive property is what makes it possible to define temperature as a consistent scalar quantity.

The thermodynamic temperature scale (kelvin) is defined from the Carnot cycle: the efficiency of a Carnot engine operating between two reservoirs at high and low absolute temperatures [[T_K]] equals one minus the ratio of the absolute temperatures. This definition does not depend on the working gas material or the thermometric substance. That is why [[T_K]] is the only physically fundamental temperature.

Absolute zero has a precise microscopic meaning: in statistical mechanics (quantum mechanics), it is the ground state of the system, where all particles occupy the lowest possible energy level. It is not the total absence of motion (the quantum uncertainty principle imposes a zero-point energy), but it is the minimum achievable. The third law of thermodynamics states that absolute zero cannot be reached in a finite number of steps.

The relationship between [[DeltaT]] in Celsius and in kelvin is exactly the same because both scales have the same degree size: 1 K equals 1 °C for differences. Confusing absolute temperature with temperature change is the most damaging error source in secondary thermodynamics: using [[T_K]] when [[DeltaT]] is needed (or vice versa) introduces errors of several orders of magnitude in gas laws, radiation, or thermal expansion.

Temperature has an absolute lower bound (0 K) but no theoretical upper limit in classical thermodynamics. In cosmology, instants after the Big Bang correspond to temperatures of the order of 10³² K. In the laboratory, Bose-Einstein condensates are obtained at temperatures of nanokelvins, just a few billionths of a kelvin above absolute zero.

## Deep physical interpretation

Temperature is a **state** property, not a process property. A system has a temperature at every moment of its history, and that temperature determines in which direction heat flows when it comes into contact with another system. [[DeltaT]] is a **process** property: it describes the change in temperature over a process, but it is not the temperature at any specific instant.

This distinction explains why [[DeltaT]] can be measured in Celsius or kelvin interchangeably (the 273.15 cancels), but [[T_K]] cannot be substituted by [[T_C]] in absolute laws. A gas at 27 °C is at 300 K, not 27 K; if [[T_C]] is used in the ideal gas law, the calculated volume would be more than ten times smaller than the real value.

## Order of magnitude

Temperatures of some representative systems:

- Absolute zero: 0 K (–273 °C). Only achievable experimentally down to a few nanokelvins.
- Liquid nitrogen: 77 K (–196 °C). Standard reference in cryogenics.
- Melting ice: 273 K (0 °C). Reference point of the Celsius scale.
- Room temperature: approx. 293 K (20 °C).
- Boiling water: 373 K (100 °C).
- Body temperature: approx. 310 K (37 °C).
- Solar surface: approx. 5778 K (5505 °C).

The size of one Fahrenheit degree is 5/9 of a Celsius degree; this is why the range between water's freezing and boiling points spans 180 °F but only 100 °C.

## Personalized resolution method

1. **Identify which scale is needed**: is absolute temperature ([[T_K]]) required for a thermodynamic law, practical temperature ([[T_C]]) for an everyday context, or [[T_F]] for an Anglo-Saxon context?
2. **Apply the correct conversion**: from [[T_C]] to [[T_K]] add 273.15; from [[T_K]] to [[T_C]] subtract 273.15; from [[T_C]] to [[T_F]] multiply by 9/5 and add 32; from [[T_F]] to [[T_C]] subtract 32 and multiply by 5/9.
3. **Check sign and order of magnitude**: [[T_K]] must always be positive; [[T_C]] can be negative; [[T_F]] can be negative below –18 °C.
4. **For temperature changes**: [[DeltaT]] is calculated as final temperature minus initial temperature, in any scale (Celsius or kelvin). Verify that the sign matches the type of process (positive for heating, negative for cooling).
5. **Do not mix scales**: if working with [[T_C]], keep Celsius throughout the calculation and convert only at the end if necessary.

## Special cases and extended example

**Celsius-Fahrenheit equivalence point**: the two scales give the same numerical value at exactly –40. Above –40, [[T_F]] is always numerically greater than [[T_C]]. Below –40, [[T_F]] is numerically smaller than [[T_C]] (both negative, with [[T_F]] more negative).

**Body temperature on different scales**: normal human body temperature is approximately 37 °C, equivalent to 98.6 °F and 310 K. For mild fever (38.5 °C), the conversion gives 101.3 °F and 311.5 K. This correspondence is a practical verification point for detecting errors in Celsius-Fahrenheit conversions.

**Zero change and isothermal processes**: an isothermal process has [[DeltaT]] equal to zero. This does not mean the temperature is zero (which would imply being at absolute zero), but rather that it has not changed. A phase change (melting, boiling) is the paradigmatic example: latent heat is absorbed without any temperature change, producing [[DeltaT]] equal to zero even though the process is energetically active.

## Real student questions

**Why can I not use degrees Celsius in the ideal gas law?**
Because the ideal gas law requires absolute temperature in kelvin. [[T_C]] can be zero or negative without the gas having zero thermal energy: at 0 °C (273 K) the gas has perfectly real kinetic energy. Substituting [[T_C]] directly produces a physically absurd result —or even a negative volume— because the Celsius scale does not place zero at the point of zero thermal energy.

**Why does a change of 1 °C equal a change of 1 K?**
Because both scales have the same degree size. The offset of 273.15 only affects the state value (temperature at a given instant), not the difference between two states. When two Celsius temperatures are subtracted, the 273.15 cancels and the result is the same as in kelvin.

**Why does the Fahrenheit scale have 180 divisions between the water points?**
Because Fahrenheit chose 32 for the freezing point and 212 for the boiling point; the difference is 180. In Celsius, 0 and 100 were chosen, giving a difference of 100. The ratio 180/100 is 9/5, which is exactly the conversion factor between the two scales.

**Is a negative temperature in kelvin possible?**
In classical thermodynamics and for equilibrium systems, no. The third law forbids reaching absolute zero and therefore negative kelvin temperatures do not exist in that framework. In quantum systems out of equilibrium with bounded energy levels (such as nuclear spins), temperature can be defined in a way that results in a "negative" kelvin value, but that is a very special regime outside the scope of classical physics.

## Cross-cutting connections and study paths

Temperature is the direct prerequisite for all other leaves in the heat block: the [specific heat capacity](leaf:fisica-clasica/termodinamica/calor-y-efectos-termicos/calor-especifico) leaf uses [[DeltaT]] as its central variable, the [thermal expansion](leaf:fisica-clasica/termodinamica/calor-y-efectos-termicos/dilatacion) leaf depends on [[DeltaT]] to calculate dimensional change, and the [phase changes](leaf:fisica-clasica/termodinamica/calor-y-efectos-termicos/cambios-de-estado) leaf is precisely the process where [[DeltaT]] is zero even though energy is exchanged.

In statistical mechanics, temperature connects to the mean translational kinetic energy of ideal gas particles: the mean kinetic energy is proportional to [[T_K]]. This is the most direct and pedagogically powerful micro-macro connection in thermodynamics.

In applied thermodynamics, [[T_K]] appears in Carnot efficiency, the Stefan-Boltzmann law (radiated power proportional to [[T_K]] raised to the power 4), Planck's law for the spectral distribution of radiation, and Wien's displacement law for the emission spectrum peak.

## Final synthesis

Temperature is the state quantity that determines thermal equilibrium between systems and the direction of heat flow. The three main scales—kelvin, Celsius, and Fahrenheit—measure the same physical reality with different zeros and degree sizes. [[T_K]] is the only scale suitable for absolute thermodynamic laws; [[T_C]] is equivalent to [[T_K]] only for differences ([[DeltaT]]), not for absolute values. Scale conversion is an exact SI definition, with no additional physical hypotheses or validity limits beyond absolute zero.
`;export{e as default};
