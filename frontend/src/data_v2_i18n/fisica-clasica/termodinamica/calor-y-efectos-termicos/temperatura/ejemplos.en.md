# Exam-type example

## Problem statement

A US weather report states that the day's high temperature was 95 °F and the low was 41 °F. Calculate what these values correspond to in degrees Celsius and in kelvin. Also determine the temperature change [[DeltaT]] of the day on all three scales and verify that the numerical value of [[DeltaT]] is the same in Celsius and in kelvin.

## Data

- Maximum temperature: 95 °F
- Minimum temperature: 41 °F

Both data belong to the same initial scale, so they can be converted state by state and then compared through [[DeltaT]].

## System definition

The system is the set of meteorological data for the day. Two states of the system are considered: the maximum temperature state and the minimum temperature state. The relevant quantities are [[T_F]], [[T_C]], [[T_K]], and [[DeltaT]].

## Physical model

The two scale conversion relationships are applied: the Fahrenheit-Celsius conversion and the Celsius-kelvin conversion. The temperature change is calculated as maximum temperature minus minimum temperature (taking the maximum as the final state of the daily cycle).

In leaf terms, the model maps the measured [[T_F]] values into [[T_C]], then into absolute [[T_K]], and finally compares the two states through [[DeltaT]]. The conversion formulas handle state temperatures; the variation formula handles the process difference.

## Model justification

The scale conversion relationships are exact SI definitions with no additional physical hypotheses. They are valid for any temperature above absolute zero. The values in the statement (95 °F and 41 °F) are well above absolute zero, so no relevant validity limit applies.

The model is appropriate because no heat or internal energy is being calculated; the same thermal states are only expressed through three scale rules. [[T_F]] and [[T_C]] differ by slope and offset; [[T_K]] has the same degree size as [[T_C]] but a different origin. Therefore an absolute temperature requires the offset, while a difference [[DeltaT]] cancels the offset.

## Symbolic solution

To convert from Fahrenheit to Celsius the following is applied:

{{f:conversion_fahrenheit_celsius}}

solving for [[T_C]].

To convert from Celsius to kelvin the following is applied:

{{f:conversion_celsius_kelvin}}

The temperature change between the two states is calculated as:

{{f:variacion_temperatura}}

## Numerical substitution

Converting 95 °F to Celsius: subtracting 32 gives 63, multiplying by 5 ninths gives 35 °C.

Converting 41 °F to Celsius: subtracting 32 gives 9, multiplying by 5 ninths gives 5 °C.

Converting 35 °C to kelvin: adding 273.15 gives 308.15 K.

Converting 5 °C to kelvin: adding 273.15 gives 278.15 K.

Temperature change in Fahrenheit: 95 minus 41 gives 54 °F.

Temperature change in Celsius: 35 minus 5 gives 30 °C.

Temperature change in kelvin: 308.15 minus 278.15 gives 30 K.

## Dimensional validation

The units of [[T_C]] are °C, those of [[T_K]] are K, those of [[T_F]] are °F. All are temperature units. The conversions applied are dimensionally correct: the factor 5/9 is dimensionless (ratio of degrees), and the terms 32 and 273.15 are numerical scale offsets.

## Physical interpretation

The day's maximum and minimum temperatures are 35 °C (308 K) and 5 °C (278 K). The daily temperature variation is 30 K or 30 °C—the same numerical value on both scales—which confirms that 1 K and 1 °C have the same degree size. In Fahrenheit, the same physical variation of 30 K corresponds to 54 °F, a larger number because the Fahrenheit degree is smaller (9 Fahrenheit degrees equal 5 Celsius degrees).

This verification—that [[DeltaT]] in Celsius and in kelvin match numerically—is the most direct confirmation that the 273.15 difference between the zeros of both scales cancels when two temperatures are subtracted.

The physical reading does not depend on the scale name: the day had a moderate thermal amplitude of 30 K. What changes between scales is the numerical label. Kelvin is reserved for absolute temperatures such as [[T_K]], because it measures distance from absolute zero; Celsius and Fahrenheit are practical scales with historical origins.

This is why the same weather report can be adapted to different audiences without changing the physical event. The hot and cold states are fixed; only the coordinate system used to name them changes. For processes, [[DeltaT]] is the causal quantity that decides whether a body warms or cools and by how much, while the absolute value [[T_K]] is needed when a law depends on distance from absolute zero.

---

# Real-world example

## Context

NASA space probes operate in environments with extreme temperature variations. The Curiosity rover on Mars records surface temperatures ranging from approximately –90 °C during winter nights to 20 °C during summer days. The onboard electronics are designed to operate over that range. NASA engineers work internally in kelvin for all thermodynamic calculations (insulation, radiation), but publish climate data in Celsius for international media and in Fahrenheit for the US public.

## Physical estimation

The temperature variation between Mars's winter night minimum and summer day maximum is 20 minus minus 90, giving [[DeltaT]] of 110 °C or equivalently 110 K.

In kelvin, the minimum temperature of –90 °C corresponds to 183 K and the maximum of 20 °C corresponds to 293 K.

In Fahrenheit, –90 °C corresponds to multiplying by 9/5 and adding 32, giving –130 °F; 20 °C corresponds to 68 °F.

The difference in Fahrenheit is 68 minus minus 130, giving 198 °F. This difference of 198 °F equals exactly 110 °C (198 multiplied by 5/9), confirming the consistency of all three scales.

## Interpretation

The 110 K temperature variation to which the rover's systems are subjected is more than twice the annual temperature variation in a continental European city (approximately 50 K). This explains why electronic components in space probes require space qualification with high-amplitude thermal cycling.

The fact that [[DeltaT]] in kelvin and Celsius is numerically identical (110 in both cases) allows NASA engineers to use either scale interchangeably for temperature-change calculations, while reserving kelvin for absolute-temperature calculations (such as the blackbody radiated power of the probe or the efficiency of the radioisotope thermoelectric generators).

This distinction is causal, not cosmetic: radiation and thermodynamic efficiency depend on absolute distance from zero, so [[T_K]] is required; thermal cycling damage depends on the amplitude between hot and cold states, so [[DeltaT]] is the relevant quantity. The same data set therefore answers two different engineering questions depending on whether the calculation uses state temperature or temperature change.
