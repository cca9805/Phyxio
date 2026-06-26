## Conceptual errors

### Error 1: Using temperature in Celsius instead of kelvin

**Why it seems correct**

Students routinely work with Celsius temperatures in everyday life and in problem statements. Seeing «27 °C» in a problem, the natural tendency is to substitute 27 directly as the temperature in the ideal gas law, by analogy with other formulae where the input units match the problem statement.

**Why it is incorrect**

The constant [[R]] (8.314 J/(mol·K)) is defined with [[T]] in kelvin. The Celsius scale has its zero at 273.15 K, not at 0 K. Substituting 27 °C instead of 300.15 K produces a value of [[P]] or [[V]] roughly eleven times smaller than the correct answer. The direct proportionality of the ideal gas law is only exact because [[T]] measures absolute kinetic energy from absolute zero.

**Detection signal**

If the calculated [[P]] is on the order of 10 Pa for a gas at room temperature in a container of a few litres with a few moles, instead of ~10⁵ Pa, the most likely cause is having used Celsius instead of kelvin.

**Conceptual correction**

All temperatures must be converted to kelvin before substitution: add 273.15 to the Celsius value to obtain the kelvin value. This rule is absolute and admits no exceptions in the ideal gas law.

**Contrast mini-example**

For 0.50 mol of He in 12.0 L: using 20 as the temperature gives [[P]] ≈ 6928 Pa (physically unrealistic). Using 293.15 K gives [[P]] ≈ 101 480 Pa, close to 1 atm — the physically correct result.

---

### Error 2: Confusing the mass of the gas with the amount of substance in moles

**Why it seems correct**

A problem may state the mass of the gas in grams, and the student substitutes it directly as [[n]] in moles, confusing both quantities because both measure "how much gas there is."

**Why it is incorrect**

The amount of substance [[n]] in moles is obtained by dividing the mass (in grams) by the molar mass of the gas (in g/mol). For nitrogen (N₂, molar mass 28 g/mol), 56 g corresponds to 2 mol, not 56 mol. The error multiplies [[n]] by the molar mass of the gas, giving results two to two hundred times larger depending on the gas.

**Detection signal**

The calculated [[P]] or [[V]] differs from the expected value by a factor approximately equal to the molar mass of the gas in the problem.

**Conceptual correction**

Always divide the mass of the gas (in grams) by its molar mass (in g/mol) to obtain [[n]] before applying the ideal gas law.

**Contrast mini-example**

For 56 g of N₂ (molar mass 28 g/mol): dividing 56 by 28 gives [[n]] = 2 mol. If the student uses 56 mol directly, they obtain a [[P]] 28 times larger than the correct value.

---

## Model errors

### Error 3: Applying the ideal gas law to real gases under extreme conditions

**Why it seems correct**

The ideal gas law works for the vast majority of basic and intermediate-level problems. Students generalise its application without checking whether the conditions fall within the model's domain of validity.

**Why it is incorrect**

At high pressure or temperature close to the condensation point, intermolecular interactions and the finite size of molecules produce measurable deviations from ideal behaviour. Steam at 150 °C and 40 atm has Z ≈ 0.91: the ideal gas law overestimates the real volume by 9 %. In industrial design, that error margin can mean under-dimensioning a vessel.

**Detection signal**

The gas temperature is close to its boiling point at the working pressure, or pressure exceeds 20–50 atm for gases such as CO₂, hydrocarbon vapours, or steam.

**Conceptual correction**

Calculate the compressibility factor —the ratio P·V_real / (n·R·T)— using tabulated data. If it deviates from 1 by more than 5 %, use the Van der Waals equation or a more accurate equation of state.

**Contrast mini-example**

For CO₂ at 300 K and 60 atm: the ideal gas law predicts [[V]] ≈ 0.41 L/mol. The actual experimental value is ≈ 0.32 L/mol. The discrepancy is 28 %. The critical temperature of CO₂ is 304 K — barely above 300 K — placing the system very close to the critical point.

---

## Mathematical errors

### Error 4: Mixing unit systems (litres with SI)

**Why it seems correct**

Laboratory volumes are conventionally expressed in litres. A student may know the volume in litres and use it directly with [[R]] = 8.314 J/(mol·K), without noticing that this constant requires cubic metres.

**Why it is incorrect**

A joule equals pascals multiplied by cubic metres, not by litres. If [[V]] is entered in litres while using the SI value of [[R]], the calculated [[P]] is 1000 times larger than the real value, or equivalently the calculated [[V]] is 1000 times larger. The error factor is always 1000 (1 L = 10⁻³ m³).

**Detection signal**

Calculated [[P]] is a factor ≈ 1000 above or below the expected value under ordinary conditions, or the calculated [[V]] in m³ is 1000 times larger than the expected value in litres.

**Conceptual correction**

Use [[R]] = 8.314 J/(mol·K) with [[P]] in Pa and [[V]] in m³. Compatible alternative: use [[R]] = 0.08206 L·atm/(mol·K) with [[P]] in atm and [[V]] in litres. Never mix the two systems.

**Contrast mini-example**

For 2 mol at 300 K in 5 L: using [[V]] = 0.005 m³ gives [[P]] ≈ 997 680 Pa ≈ 9.85 atm (correct). Using [[V]] = 5 (in litres directly) gives [[P]] ≈ 998 Pa — a factor of 1000 smaller, completely wrong.

---

## Interpretation errors

### Error 5: Confusing an isothermal process with a constant-pressure process

**Why it seems correct**

A student who only vaguely remembers the gas laws may believe that "constant temperature" and "constant pressure" describe the same process, or may not clearly understand that in an isothermal process [[P]] and [[V]] both change while [[T]] remains fixed.

**Why it is incorrect**

In an isothermal process ([[T]] constant, [[n]] constant), the ideal gas law implies that the product [[P]]·[[V]] is conserved: if [[V]] decreases, [[P]] increases in the same proportion — they are inversely proportional. An isobaric process ([[P]] constant, [[n]] constant) implies that the ratio [[V]]/[[T]] is conserved: [[V]] and [[T]] vary in direct proportion. The two processes are radically different.

**Detection signal**

The student applies conservation of the ratio [[V]]/[[T]] in an isothermal problem (where the product [[P]]·[[V]] should be conserved), or vice versa.

**Conceptual correction**

Identify which variable remains constant before choosing the appropriate form of the combined gas law: at fixed [[T]], conserve [[P]]·[[V]]; at fixed [[P]], conserve [[V]]/[[T]]; at fixed [[V]], conserve [[P]]/[[T]].

**Contrast mini-example**

A cylinder with a piston contains gas at 1 atm and 0.5 L. It is isothermally compressed to 0.25 L. Correct result: [[P]] doubles to 2 atm. If the student incorrectly applies the isobaric law, they conclude that [[V]] does not change at constant [[T]] (since [[V]]/[[T]] would be conserved if [[P]] were fixed), which is absurd for a compression.

---

## Quick self-control rule

Before accepting any result, verify systematically:

1. Is the temperature in kelvin? Add 273.15 if it is in Celsius.
2. Is the volume in m³? Divide by 1000 if it is in litres.
3. Is the amount of substance in moles, not in grams? Divide the mass by the molar mass of the gas.
4. Is the result for [[P]] in the range 10³–10⁶ Pa for ordinary laboratory conditions? If not, review units.
5. Is the molar volume ([[V]]/[[n]]) on the order of 22 L/mol at atmospheric pressure and room temperature? If it differs by a factor of 10 or more, there is a unit error.
