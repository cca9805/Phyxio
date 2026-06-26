const e=`## Conceptual errors

### Error 1: Confusing Celsius temperature with kelvin temperature

**Why it seems correct**

Students routinely work with Celsius temperatures in everyday life and in many problem statements. Seeing "25 °C" in a problem, the natural tendency is to substitute 25 directly as the temperature in the ideal gas law, by analogy with other formulae where the input units match the problem statement.

**Why it is incorrect**

The constant [[R]] (8.314 J/(mol·K)) is defined with [[T]] in kelvin. The Celsius scale has its zero at 273.15 K, not at 0 K. Substituting 25 °C instead of 298 K produces a value of [[P]] or [[V]] roughly twelve times smaller than the correct answer. The direct proportionality in the ideal gas law is only valid because [[T]] measures absolute energy from absolute zero.

**Detection signal**

If the calculated [[P]] is on the order of 10 Pa for a gas at room temperature in a container of a few litres with a few moles, instead of the expected ~10⁵ Pa, the most likely cause is having used Celsius instead of kelvin.

**Conceptual correction**

All temperatures must be converted to kelvin before substitution: add 273.15 to the Celsius value to obtain the kelvin value. This rule is absolute and admits no exceptions in the ideal gas law.

**Contrast mini-example**

For 1 mol of ideal gas in 0.024 m³: using 25 as the temperature gives a pressure of approximately 8660 Pa (far too low). Using 298 kelvin gives approximately 103 200 Pa, close to 1 atm; [[P]] reaches that correct value only with the temperature in kelvin.

---

### Error 2: Mixing unit systems (litres with SI)

**Why it seems correct**

Laboratory volumes are conventionally expressed in litres. A student may know the volume in litres and use it directly with [[R]] (8.314 J/(mol·K)), without noticing that this constant requires cubic metres.

**Why it is incorrect**

A joule equals pascals multiplied by cubic metres, not by litres. If [[V]] is entered in litres while [[R]] is used in its SI value, the calculated [[P]] is 1000 times higher than the real value, or equivalently the calculated [[V]] is 1000 times larger. The error can be detected by comparing with the reference molar volume: 22.4 L/mol at 0 °C and 1 atm, i.e. 0.0224 m³/mol.

**Detection signal**

Calculated [[P]] is a factor ≈ 1000 above the expected value, or the calculated [[V]] in m³ is 1000 times larger than the expected value in litres.

**Conceptual correction**

Use [[R]] as 8.314 J/(mol·K) with [[P]] in Pa and [[V]] in m³. Compatible alternative: use [[R]] as 0.08206 L·atm/(mol·K) with [[P]] in atm and [[V]] in litres. Never mix the two systems.

**Contrast mini-example**

For 2 mol at 300 K in 5 L: using 0.005 m³ as the volume gives approximately 997 680 Pa (about 9.85 atm), which is the correct [[P]]. Entering 5 as the volume (in litres) instead of 0.005 m³ would multiply [[P]] by 1000, yielding a nonsensical result.

---

## Model errors

### Error 3: Applying the ideal gas law to real gases under extreme conditions

**Why it seems correct**

The ideal gas law is ubiquitous in textbooks and works for the vast majority of standard problems. Students generalise its application without checking whether the conditions of the problem fall within the model's domain of validity.

**Why it is incorrect**

At high pressure or temperature close to the condensation point, intermolecular interactions and the finite size of molecules produce measurable deviations. For example, water vapour at 200 °C and 50 atm has Z ≈ 0.92: the ideal gas law overestimates the real volume by 8 %. In process engineering, that 8 % can be the difference between a safe design and an inadequate one.

**Detection signal**

Gas temperature close to its boiling point at the working pressure, or pressure exceeding ~20–50 atm for common gases such as CO₂, hydrocarbon vapours, or steam.

**Conceptual correction**

Calculate the compressibility factor Z using real gas data: it is the ratio of the real [[P]]·[[V]] product to the ideal theoretical value [[n]]·[[R]]·[[T]]. If this factor deviates from unity by more than 5 %, use the Van der Waals equation or a more accurate equation of state.

**Contrast mini-example**

For CO₂ at 300 K and 60 atm (6 MPa), the ideal gas law predicts [[V]] ≈ 0.41 L/mol. The actual experimental value is ≈ 0.32 L/mol. The discrepancy is 28 %, completely unacceptable for any engineering calculation. The critical temperature of CO₂ is 304 K, barely above 300 K: the system is very close to the critical point.

---

## Mathematical errors

### Error 4: Confusing the mass of the gas with the amount of substance in moles

**Why it seems correct**

A problem may give the mass of the gas in grams or kilograms, and students substitute it directly as [[n]] in moles, confusing both quantities because both measure "how much gas there is."

**Why it is incorrect**

The amount of substance [[n]] in moles is obtained by dividing the mass (in grams) by the molar mass of the gas (in g/mol). For nitrogen (N₂, with molar mass of 28 g/mol), 28 g corresponds to 1 mol, not 28 mol. The error multiplies [[n]] by the molar mass of the gas, giving results 2 to 200 times larger depending on the gas.

**Detection signal**

The result for [[P]] or [[V]] is several orders of magnitude different from what is expected, and the ratio of the error approximately matches the molar mass of the gas in the problem.

**Conceptual correction**

Always divide the mass of the gas (in grams) by its molar mass (in g/mol) to obtain [[n]] before applying the ideal gas law.

**Contrast mini-example**

For 14 g of nitrogen (N₂, molar mass of 28 g/mol): dividing 14 by 28 gives 0.5 mol, which is the correct [[n]]. If the student uses 14 mol directly, they obtain a [[P]] 28 times larger than the correct value.

---

## Interpretation errors

### Error 5: Confusing an isothermal process with a constant-pressure process

**Why it seems correct**

A student who only vaguely remembers the gas laws may believe that "constant temperature" and "constant pressure" describe the same process, or may not clearly understand that in an isothermal process [[P]] and [[V]] both change while [[T]] remains fixed.

**Why it is incorrect**

In an isothermal process ([[T]] constant, [[n]] constant), the ideal gas law implies that the product [[P]]·[[V]] is conserved: if [[V]] decreases, [[P]] increases in the same proportion. They are inversely proportional. An isobaric process ([[P]] constant, [[n]] constant) implies that the ratio [[V]]/[[T]] is conserved: [[V]] and [[T]] vary in direct proportion. The two processes are radically different.

**Detection signal**

The student applies conservation of the volume-temperature ratio in an isothermal problem (where the pressure-volume product should be conserved), or vice versa.

**Conceptual correction**

Isothermal process ([[T]] fixed): the product [[P]]·[[V]] is conserved between the initial and final states. Isobaric process ([[P]] fixed): the ratio [[V]]/[[T]] is conserved. The key is to identify which variable remains constant before choosing the appropriate form of the combined gas law.

**Contrast mini-example**

A cylinder with a piston contains gas at 1 atm and 0.5 L. It is isothermally compressed to 0.25 L. Correct result: the pressure doubles, so [[P]] reaches 2 atm. If the student incorrectly applies the isobaric law, they conclude the volume would not change (since [[T]] is fixed and the volume-temperature ratio is conserved), which is absurd for a compression.

---

## Quick self-control rule

Before accepting any result, verify systematically:

1. Is the temperature in kelvin? Add 273.15 if it is in Celsius.
2. Is the volume in m³? Divide by 1000 if it is in litres.
3. Is the amount of substance in moles, not in grams? Divide the mass by the molar mass of the gas.
4. Is the result for [[P]] in the range 10³–10⁷ Pa for ordinary conditions? If not, review units.
5. Is the molar volume (ratio of [[V]] to [[n]]) on the order of 22 L/mol at atmospheric pressure and room temperature? If it differs by a factor of 10 or more, there is a unit error.
`;export{e as default};
