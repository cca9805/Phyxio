const e=`## Conceptual errors

### Error 1: Confusing the isothermal process with the adiabatic process

**Why it seems correct**

The student associates "no temperature change" with "no heat exchange", because in many everyday processes the two ideas go together. The incorrect analogy is: if temperature does not change, no heat can be flowing. The cognitive mechanism is an **incorrect generalization** of elementary calorimetry, where heat is always associated with a temperature change.

**Why it is incorrect**

In thermodynamics, heat can flow without temperature changing when an external thermal reservoir is present. The constant temperature in the isothermal process is precisely the result of heat flow between the gas and the reservoir, not its absence. In the adiabatic process it is the opposite: no heat flows, and that is why temperature changes. [[Q_iso]] equals exactly [[W]] in the isothermal process; claiming [[Q_iso]] is zero contradicts the first law of thermodynamics.

**Detection signal**

The student writes that the gas does not exchange heat with the surroundings, or states that the absorbed heat is zero. It also appears when [[W]] is calculated but [[Q_iso]] is left blank or set to zero.

**Conceptual correction**

In the isothermal process, [[T]] is constant because the gas continuously exchanges heat with the thermal reservoir. The absorbed heat equals exactly the work done. The absence of heat defines the adiabatic process, not the isothermal.

**Contrast mini-example**

One mole of ideal gas expands isothermally, doubling its volume. The incorrect student says absorbed heat is zero. If they applied the first law and noted that internal energy change is zero, they would reach the contradiction that [[W]] is non-zero but [[Q_iso]] is zero, directly violating the first law. The correct result is that the gas absorbs about 1730 J from the thermal reservoir, exactly equal to the work done on the surroundings.

---

### Error 2: Believing pressure does not change in the isothermal process

**Why it seems correct**

The student generalizes that "if one thing does not change, nothing else changes either". Since [[T]] is constant, they may assume [[p2]] and [[V2]] are also constant. Moreover, the name "isothermal" only mentions temperature, reinforcing the mistaken idea that the process involves no state change.

**Why it is incorrect**

In the isothermal process, [[T]] is the only state variable that remains constant. Pressure and volume change in inverse proportion following Boyle's Law. If volume increases in an isothermal process, pressure decreases in the same proportion. Believing pressure does not change is equivalent to not understanding the ideal gas equation of state.

**Detection signal**

The student sets [[p2]] equal to [[p1]] in the isothermal process, or calculates zero work by assuming volume also does not change. It also appears when the student draws a horizontal line in the pV diagram to represent the isotherm.

**Conceptual correction**

Boyle's Law states that the pressure-volume product is conserved in the isothermal process. This implies that if volume changes, pressure also changes, but in the opposite direction. The isotherm in the pV diagram is a hyperbola, not a horizontal or vertical line.

**Contrast mini-example**

A gas with initial pressure 200 kPa and volume 1 litre expands isothermally to a volume of 2 litres. If the student assumes [[p2]] does not change, they calculate a final pressure of 200 kPa, contradicting Boyle's Law. The correct result is [[p2]] drops to 100 kPa, so the pressure-volume product remains 200 J in both states.

## Model errors

### Error 1: Applying Boyle's Law to fast processes

**Why it seems correct**

Boyle's Law seems to be a general rule valid under any circumstance, because it appears as one of the fundamental laws of the ideal gas without speed restrictions. The student does not attend to the quasi-static process hypothesis because it does not seem relevant for a laboratory calculation.

**Why it is incorrect**

Boyle's Law is only valid for reversible, quasi-static processes. In a fast process, the gas is not in thermodynamic equilibrium at every instant and the pV product is not conserved along the path, although it may be conserved between the initial and final states if temperature returns to its original value. The actual work in a fast process is always less than the work calculated from the quasi-static hyperbola.

**Detection signal**

The student obtains a calculated work greater than the experimentally measured value. It also appears if the problem states that the process is fast or abrupt and the student still applies the logarithmic formula.

**Conceptual correction**

The isothermal work formula assumes the process follows the hyperbola at all times. To apply it, the process must be sufficiently slow. When process speed is not specified and maximum possible work is requested, the reversible quasi-static process is assumed.

**Contrast mini-example**

A gas expands abruptly against a vacuum (free expansion). In this case the gas pushes no piston and the mechanical work done on the surroundings is zero, even though volume changes. If the student applies the logarithmic formula they get an incorrect non-zero value. In the free expansion of an ideal gas, work is zero and temperature also does not change, but not because the process is quasi-static isothermal — rather because no energy transfer occurs.

## Mathematical errors

### Error 1: Using Celsius temperatures in the work formula

**Why it seems correct**

The student is accustomed to working with Celsius temperatures in everyday life and in many basic physics problems. Since the process is isothermal and temperature does not change, they may think that using 20 °C or 293 K is equivalent because the temperature difference is zero in both cases.

**Why it is incorrect**

The isothermal work formula contains [[T]] in absolute value as a multiplicative factor, not as a difference. Using 20 °C instead of 293 K produces an incorrect result by a factor of almost 15. The error is large: for one mole of gas at 20 °C, the work calculated with Celsius would be about 166 J times the logarithm of the volume ratio, while the correct result at 293 K is about 2025 J for a volume doubling.

**Detection signal**

The work value obtained is much smaller than expected for the temperature stated in the problem. If the result is negative when temperature is given as a negative Celsius value, the error is obvious.

**Conceptual correction**

In all thermodynamic formulas that use [[T]] as a factor (not as a difference), temperature must be expressed in **absolute kelvin**. The conversion is to add 273.15 to the Celsius value.

**Contrast mini-example**

For one mole of nitrogen at 20 °C doubling its volume, the incorrect student calculates work as nR times 20 times the logarithm of 2, getting about 115 J. The correct result at 293 K is about 2025 J — a factor of 15 difference that could make an engine designed with the incorrect value completely non-functional in practice.

## Interpretation errors

### Error 1: Interpreting negative work as a calculation error

**Why it seems correct**

In mechanics, positive work is habitually associated with motion and action. Negative work can seem physically meaningless, especially if the student has not internalized the thermodynamic sign convention where positive work is that done by the gas on the surroundings.

**Why it is incorrect**

In thermodynamics, the sign of [[W]] has a precise physical meaning. Positive work means the gas expands and does work on the surroundings. Negative work means the surroundings do work on the gas during compression. Both are physically valid and form part of the thermodynamic cycle. Ignoring the sign leads to misinterpreting the energy exchange of the system.

**Detection signal**

The student writes the absolute value of work without specifying sign, or rewrites the result as positive even though the gas was compressed. It also appears when the exchanged heat is calculated with the wrong sign.

**Conceptual correction**

The sign of [[W]] determines the direction of the process: positive for expansion (the gas transfers energy to the surroundings) and negative for compression (the surroundings supply energy to the gas). In the formula, the sign is given automatically by the logarithm of the ratio [[V2]] divided by [[V1]]: if [[V2]] is greater than [[V1]], the logarithm is positive; if smaller, it is negative. This sign must be respected and reported together with the numerical value.

**Contrast mini-example**

A gas is compressed isothermally from 2 litres to 1 litre. The logarithm of one half is negative (approximately minus 0.693), so the work is negative: the surroundings did work on the gas. If the student reports the work as positive, they would be claiming the gas did work while being compressed, which contradicts the thermodynamics of the process.

## Quick self-control rule

Before accepting an isothermal process result as valid, check three things:

1. The product [[p1]] times [[V1]] equals the product [[p2]] times [[V2]] within the rounding margin of the calculation.
2. The sign of [[W]] matches the direction of the process: positive if [[V2]] is greater than [[V1]], negative if smaller.
3. The calculated heat [[Q_iso]] equals [[W]] in both magnitude and sign; if they differ, there is an error in one of the two calculations.

If any of the three conditions fails, the result contains an error that must be corrected before proceeding.
`;export{e as default};
