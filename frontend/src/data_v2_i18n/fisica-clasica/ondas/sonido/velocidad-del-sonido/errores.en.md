## Conceptual errors

### Error 1: Believing that a louder sound travels faster

**Why it seems correct**

Sound intensity is intuitively associated with the "force" with which sound propagates. If the wave is stronger, it seems logical that it should move faster, like a more powerful runner covering the same distance in less time.

**Why it is incorrect**

[[v_son]] is a property of the medium, not the source. A greater pressure perturbation simply has greater amplitude, not greater propagation speed. Doubling the acoustic power of the source does not change [[v_son]] at all; it only increases the wave amplitude and, with it, the perceived intensity. The propagation speed is fixed by the medium (its stiffness [[B_mod]] and its density [[rho_med]]).

**Detection signal**

The student calculates or states that [[v_son]] changes when the source amplitude changes, or searches the problem for amplitude data to calculate [[v_son]].

**Conceptual correction**

To calculate [[v_son]], only the properties of the medium are relevant (temperature, composition, state of matter). Source amplitude does not appear in any of the [[v_son]] formulas. If the problem gives amplitude data and asks for [[v_son]], that data is not needed for the calculation.

**Contrast mini-example**

A whisper (pressure amplitude ~0.001 Pa) and the noise of a jet aircraft at close range (~100 Pa) travel at exactly the same speed in the same air at the same temperature. The difference between the two sounds is about 100 dB in sound level, but their [[v_son]] is identical.

---

### Error 2: Believing that denser media transmit sound faster

**Why it seems correct**

The reasoning goes: "in a solid there are more molecules per unit volume, molecules are closer together, and they can transmit vibration to their neighbour more quickly". This kinetic image of molecules "passing the message" from one to another suggests that greater density implies greater transmission speed.

**Why it is incorrect**

Density acts as inertia in the Newton-Laplace formula: [[v_son]] = sqrt([[B_mod]]/[[rho_med]]). Greater [[rho_med]] reduces [[v_son]] for the same [[B_mod]]. If sound goes faster in solids than in gases, it is because the stiffness [[B_mod]] of solids is enormously greater than that of gases, and this effect dominates over the density increase. For example, steel is ~7000 times denser than air but ~10⁷ times stiffer, so the square root of the ratio gives about 15 times greater [[v_son]] in steel.

**Detection signal**

The student orders media from highest to lowest [[v_son]] according to their density (gases first, then liquids, then solids), i.e., the inverse of the correct order.

**Conceptual correction**

The correct order of [[v_son]] from lowest to highest is: gases < liquids < solids. In each category, stiffness so dominates over density that the general ordering is reversed relative to density. To compare within the same category, the ratio [[B_mod]]/[[rho_med]] must be evaluated case by case.

**Contrast mini-example**

Water is ~800 times denser than air. If density accelerated sound, sound in water should go 28 times slower (square root of 800) than in air. In fact it goes 4.4 times faster, because the bulk modulus of water is ~15000 times greater than that of air, and that factor completely dominates over the density factor.

## Model errors

### Error 1: Forgetting the gamma factor in the speed of sound formula for gases (Newton's error)

**Why it seems correct**

The simplest expression for the elastic modulus of an ideal gas is the equilibrium pressure: when the gas is compressed isothermally, pressure increases in proportion to the volume ratio. Newton used this expression and obtained a prediction that appears dimensionally correct and conceptually reasonable.

**Why it is incorrect**

Acoustic compressions are not isothermal but adiabatic: they occur so rapidly that there is no time for heat to flow between compressed and rarefied regions. The adiabatic bulk modulus includes [[gamma_gas]]. For air, forgetting this factor produces a result about 18 % lower than the real one.

**Detection signal**

The calculated [[v_son]] in air at 0 C is approximately 280 m/s instead of the correct 331 m/s. Or the student uses the isothermal version without the [[gamma_gas]] factor.

**Conceptual correction**

The correct formula for an ideal gas uses the adiabatic modulus, which incorporates [[gamma_gas]]. Laplace's correction is essential: for air, that factor raises Newton's prediction by about 18 % and brings it close to the experimental value.

**Contrast mini-example**

At 0 C and 1 atm for dry air, Newton's isothermal estimate gives about 280 m/s, whereas Laplace's adiabatic correction gives about 331 m/s. The experimental value agrees with Laplace.

## Mathematical errors

### Error 1: Using temperature in degrees Celsius instead of kelvin

**Why it seems correct**

In everyday life the Celsius scale is used for temperature. Problems typically give temperature in °C ("sound in air at 20 °C..."), and it is tempting to substitute that value directly into the formula.

**Why it is incorrect**

The ideal-gas formula requires [[T_abs]] in kelvin. If 20 is substituted as if it were absolute temperature instead of using a value near 293 K, the result falls to about 89 m/s, completely wrong. The problem is especially severe near 0 C: using zero as absolute temperature would make [[v_son]] vanish, which is absurd.

**Detection signal**

The calculated [[v_son]] is much less than 100 m/s for atmospheric temperatures, or is exactly zero for 0 °C.

**Conceptual correction**

Always convert to kelvin before substituting in the formula: add 273.15 to the Celsius value. Absolute temperature is always positive and greater than 200 K for atmospheric conditions. If the result is less than 200 m/s in ordinary air, the Celsius temperature was almost certainly used.

**Contrast mini-example**

At 20 C, using absolute temperature gives [[v_son]] close to 343 m/s. Using 20 as if it were kelvin gives about 89 m/s, a result almost four times smaller and physically incompatible with atmospheric air.

### Error 2: Using molar mass in g/mol instead of kg/mol

**Why it seems correct**

Standard chemistry tables list molar mass in g/mol; for dry air it often appears as 29 g/mol. It is natural to use that value directly in the formula without converting to kg/mol.

**Why it is incorrect**

The universal gas constant in SI requires [[M_mol]] to be in kg/mol so that units are consistent and [[v_son]] comes out in m/s. If the value is left in grams per mole, a factor of one thousand is carried into the molar mass and the result becomes absurd for ordinary air.

**Detection signal**

The calculated [[v_son]] for air at room temperature is of the order of 10000 m/s instead of 340 m/s.

**Conceptual correction**

In the ideal-gas formula, [[M_mol]] must always be in kg/mol. For dry air use 0.029 kg/mol, not 29. Mnemonic rule: if molar mass is in g/mol, divide by 1000 before substituting.

**Contrast mini-example**

With [[M_mol]] in kg/mol, air at room temperature gives [[v_son]] close to 343 m/s. With molar mass left unconverted, the calculation falls to only a few metres per second, immediately revealing the unit error.

## Interpretation errors

### Error 1: Identifying [[v_son]] with the particle displacement velocity of the medium

**Why it seems correct**

Sound is a vibration of the medium particles. If sound propagates rapidly, it seems reasonable that the particles vibrate rapidly, and to associate "speed of sound" with the speed of those particles.

**Why it is incorrect**

[[v_son]] is the propagation speed of the **compression-rarefaction pattern** through the medium, not the speed of individual particle movement. The medium particles oscillate locally around their equilibrium position with a displacement velocity (particle velocity) that is typically millimetres per second for ordinary audible sounds, millions of times less than [[v_son]]. Particle velocity increases with wave amplitude; [[v_son]] does not.

**Detection signal**

The student uses the particle oscillation velocity as if it were [[v_son]] in a wavelength relation.

**Conceptual correction**

Explicitly distinguish two velocities: [[v_son]], the wave phase speed and a property of the medium, and particle velocity, which describes the local molecular oscillation and is usually far smaller in ordinary audible sounds. They are distinct quantities in concept, value, and units.

**Contrast mini-example**

For an ordinary audible sound in air, maximum particle velocity can be tenths of a millimetre per second, while [[v_son]] is hundreds of metres per second. Confusing both scales would produce a microscopic wavelength, completely absurd compared with the real wavelength of an audible tone.

## Quick self-control rule

Before declaring a [[v_son]] calculation valid, verify:

1. Was temperature used in kelvin? An absolute temperature below 200 K is suspicious for atmospheric conditions.
2. Was the factor [[gamma_gas]] (≈ 1.4 for air) included in the ideal gas formula? Without it, [[v_son]] will be 18 % lower.
3. Is the molar mass in kg/mol? For dry air, the operational value is 0.029 kg/mol, not 29.
4. Is the result in the expected range for the medium (air ~300-360 m/s, water ~1480 m/s, steel ~5100 m/s)?
5. Was [[v_son]] of the medium calculated, not the particle velocity of the wave?

If any check fails, the calculation contains a fundamental error.
