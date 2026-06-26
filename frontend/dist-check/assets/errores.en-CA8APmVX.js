const e=`## Conceptual errors

### Error 1: Confusing the isobaric process with the isothermal process

**Why it seems correct**

The student recalls that in the isothermal process pressure is also related to volume (the product pV is constant), and that in both processes "something remains constant". The incorrect generalisation leads to applying the isothermal work formula (involving the natural logarithm of the volume ratio) to a process in which pressure, not temperature, is the constant magnitude. The confusion is compounded because in both processes volume varies.

**Why it is wrong**

In the isobaric process it is [[p]] that remains fixed; temperature varies in direct proportion to volume according to Gay-Lussac's law. In the isothermal process it is temperature that remains fixed (initial and final temperatures are equal); pressure varies inversely with volume. The trajectories in the pV diagram are completely different: a horizontal line for the isobaric and a decreasing hyperbola for the isothermal. Applying the logarithmic isothermal work formula to an isobaric process gives a dimensionally correct but physically wrong result.

**Detection signal**

The student writes the logarithmic isothermal work formula in a problem where pressure is constant and known. Another signal: calculating the final temperature as equal to the initial temperature (constant) when the problem indicates expansion at constant pressure.

**Conceptual correction**

In an isobaric process the correct work formula is always the product [[p]] times [[DeltaV]]. Constant pressure allows pulling it outside the integral, giving an exact result without logarithms. The fundamental distinction is: isothermal → temperature fixed, pressure inversely proportional to volume; isobaric → pressure fixed, volume directly proportional to temperature.

**Contrast mini-example**

One mole of ideal gas at [[p]] = \\(10^5\\) Pa expands from [[V1]] = 1 L to [[V2]] = 2 L. Applying the isothermal formula incorrectly gives about 1727 J (at 300 K). Applying the isobaric formula correctly: [[W]] equals \\(10^5\\) Pa times \\(10^{-3}\\) m³, giving 100 J. The difference is a factor of 17, showing this is not a minor error.

---

### Error 2: Believing internal energy does not change because pressure is constant

**Why it seems correct**

The student equates "constant magnitude" with "no energy change". Since in the isochoric process ([[DeltaV]] = 0) there is no work and [[Q]] = [[DeltaU]], the analogous reasoning for the isobaric process would be that constant [[p]] implies [[DeltaU]] = 0. The confusion is reinforced by the isothermal process having [[DeltaU]] = 0, leading the student to incorrectly generalise that "whenever something is constant, internal energy does not change".

**Why it is wrong**

For an ideal gas, [[DeltaU]] depends exclusively on temperature. In an isobaric process temperature does change (Gay-Lussac's law), so [[DeltaU]] ≠ 0. Only in the isothermal process (constant temperature) is [[DeltaU]] = 0 for an ideal gas. Constant pressure has no direct relation to internal energy; what determines [[DeltaU]] is [[DeltaT]].

**Detection signal**

The student writes [[DeltaU]] = 0 in a problem where temperature clearly changes between initial and final states. Another signal: claiming [[Q]] = [[W]] in an isobaric process (which would only be true if [[DeltaU]] = 0).

**Conceptual correction**

For ideal gas, [[DeltaU]] = \\(n C_V \\Delta T\\). In an isobaric process [[DeltaT]] ≠ 0 (unless it is also isothermal due to phase change), so [[DeltaU]] ≠ 0. The first law gives [[DeltaU]] = [[Q]] - [[W]], and since [[Q]] > [[W]] in isobaric expansion, [[DeltaU]] > 0.

**Contrast mini-example**

One mole of diatomic ideal gas expands at [[p]] = \\(10^5\\) Pa from [[V1]] = 1 L to [[V2]] = 2 L. Temperature rises from [[T1]] = 300 K to [[T2]] = 600 K. If [[DeltaU]] = 0 is claimed, then [[Q]] = [[W]] = 100 J. But the correct calculation gives [[DeltaU]] = \\(\\frac{5}{2} \\times 1 \\times 8.314 \\times 300\\) ≈ 6236 J, and [[Q]] = [[DeltaU]] + [[W]] ≈ 6336 J. The claim [[DeltaU]] = 0 underestimates the actual absorbed energy by over 98%.

---

## Model errors

### Error 3: Applying the isobaric model to a real polytropic process

**Why it seems correct**

In many practical problems pressure varies little during a process, and the student tends to approximate it as constant to simplify calculations. The error is reasonable qualitatively but can be significant quantitatively, especially in engine processes where pressure may vary by several orders of magnitude.

**Why it is wrong**

The isobaric model requires [[p]] to be strictly constant. If pressure varies even moderately (for example by 10%), the actual work differs from the product [[p]] times [[DeltaV]] by a comparable proportion. In the Diesel cycle, for instance, the expansion phase is not exactly isobaric but polytropic, and using the isobaric formula overestimates useful work.

**Detection signal**

The experimental pV diagram shows a slightly descending curve instead of a perfectly horizontal line. Or the temperature and volume data do not exactly satisfy Gay-Lussac's ratio, with deviations above 2-3%.

**Conceptual correction**

When pressure is not exactly constant, work must be calculated by integrating \\(\\int_{V_1}^{V_2} p(V) \\, dV\\) using the polytropic relation that best fits the real data. The isobaric model is the special limiting case (index zero) and is only valid when pressure variation is negligible compared to [[p]].

**Contrast mini-example**

A process where pressure falls from 200 kPa to 180 kPa while volume increases from 1 L to 2 L. Using the isobaric model with [[p]] = 200 kPa: [[W]] = 200 J. Using the actual polytropic work (with the integral): approximately 190 J. The 5% difference may be irrelevant in a basic didactic context, but in an engine cycle it represents tens of kilojoules of difference in useful power.

---

## Mathematical errors

### Error 4: Failing to convert pressure and volume units before calculating work

**Why it seems correct**

Problem data are presented in common units (litres for volume, kiloPascals or atmospheres for pressure), and the student computes the product [[p]] times [[DeltaV]] directly without conversion. If [[p]] is 2 atm and [[DeltaV]] is 3 L, the student calculates [[W]] as 6 without correct units or with inconsistent units.

**Why it is wrong**

The work equals [[p]] times [[DeltaV]] in Joules only if [[p]] is in Pascals and [[DeltaV]] is in cubic metres. 1 L corresponds to \\(10^{-3}\\) m³ and 1 atm equals 101325 Pa. The product in inconsistent units gives a physically meaningless number, typically two to three orders of magnitude different from the correct result.

**Detection signal**

The numerical value of [[W]] turns out too small (if the conversion from atm to Pa was forgotten) or too large (if the conversion from L to m³ was forgotten). If [[W]] ≈ 6 for an expansion of several litres at atmospheric-order pressures, there is almost certainly a unit error.

**Conceptual correction**

Always convert to SI before substituting: [[p]] in Pa, [[V1]] and [[V2]] in m³. Standard conversions: 1 L equals \\(10^{-3}\\) m³; 1 atm equals 101325 Pa (approximately \\(10^5\\) Pa); 1 bar equals \\(10^5\\) Pa. With these conversions, [[W]] comes out directly in Joules.

**Contrast mini-example**

Isobaric expansion at [[p]] = 1 atm from 1 L to 3 L. Without converting: [[W]] = 1 × 2 = 2 (meaningless). Converting: [[p]] equals 101325 Pa, [[DeltaV]] equals \\(2 \\times 10^{-3}\\) m³, giving [[W]] of approximately 202.7 J. The error factor is about 100.

---

## Interpretation errors

### Error 5: Interpreting positive [[W]] as the system "gaining" mechanical energy

**Why it seems correct**

In mechanics, when an object receives work from an external force, the work done on it is positive and the object gains kinetic energy. The student transfers this convention without questioning it to thermodynamics, concluding that [[W]] > 0 means the gas received mechanical energy from surroundings.

**Why it is wrong**

The standard thermodynamic convention (and the one used in this leaf) is that [[W]] > 0 means work done **by the gas** on surroundings. It is the gas that delivers mechanical energy to the piston or surroundings. A positive [[W]] in isobaric expansion corresponds to the gas losing part of its energy (as work) to surroundings, not gaining it. The first law reflects this: [[DeltaU]] = [[Q]] - [[W]], and in isobaric expansion [[W]] reduces the increase in internal energy.

**Detection signal**

The student writes "the gas gained [[W]] = 200 J of mechanical energy" when the process is clearly an expansion. Or the first law is applied as [[DeltaU]] = [[Q]] + [[W]] instead of [[DeltaU]] = [[Q]] - [[W]], indicating inversion of the work sign convention.

**Conceptual correction**

In thermodynamics, the convention is: [[W]] > 0 → the gas does work on surroundings (expansion, gas loses energy via work); [[W]] < 0 → surroundings do work on the gas (compression, gas gains energy via work). The first law [[DeltaU]] = [[Q]] - [[W]] correctly incorporates this convention: in isobaric expansion, work done by the gas reduces the fraction of heat available to increase [[DeltaU]].

**Contrast mini-example**

Isobaric expansion with [[Q]] = 500 J and [[W]] = 200 J. Applying incorrectly [[DeltaU]] = [[Q]] + [[W]] = 700 J (the gas "gains" all energy). Applying correctly [[DeltaU]] = [[Q]] - [[W]] = 300 J. The difference is 400 J, more than double the correct value. The incorrect physical interpretation leads to severely overestimating the gas heating.

---

## Quick self-control rule

Before accepting a result in an isobaric process as valid, verify these three operational points:

1. **Sign of [[W]] consistent with [[DeltaV]]**: if [[V2]] > [[V1]], then [[DeltaV]] > 0 and [[W]] (equal to [[p]] times [[DeltaV]]) is positive. If the result gives negative [[W]] with expansion, there is a sign or convention error.

2. **Gay-Lussac proportion satisfied**: calculate [[V1]]/[[T1]] and [[V2]]/[[T2]] with the problem data. If the relative difference exceeds 2%, the data are inconsistent with the isobaric model or temperatures have been used in Celsius.

3. **First law balance**: calculate [[Q]] - [[W]] and verify it matches the [[DeltaU]] obtained separately (e.g., via [[DeltaU]] = \\(n C_V \\Delta T\\)). A discrepancy above 1% indicates a calculation error or inconsistency in the problem data.
`;export{e as default};
