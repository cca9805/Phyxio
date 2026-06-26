# Common errors

## Error 1: choosing the wrong operation

The most common error is moving the decimal point in the wrong direction. It feels reasonable because converting metres and millimetres is often memorized as a rule, but the prefix already contains a power of ten.

When converting from `mm` to `m`, the numerical value in metres becomes smaller: `1 mm = 10^-3 m`. When converting from `m` to `mm`, the number becomes larger: `1 m = 1000 mm`. Detect the direction by asking whether the final unit is larger or smaller than the original one.

## Error 2: losing the meaning of the variable

A quantity is not only a large or small number. `3 x 10^8 m/s` as a speed is not the same as `3 x 10^8 m` as a distance. If the exponent is separated from the physical quantity, the result loses meaning.

Correct this by always writing the name of the quantity with its unit: length, time, mass, charge, energy, power, or frequency. This prevents comparing exponents of quantities that are not comparable.

## Error 3: ignoring units

This error occurs when prefixes are treated as part of the number while the base unit is forgotten. For example, multiplying `mA` by `kOhm` without conversion may produce a number that is correct by accident or wrong by a factor of a million.

Detection is direct: every number must keep a written unit. If units disappear during calculation, physical control disappears too. Correct the problem by replacing each prefix with its power of ten before operating.

## Error 4: confusing sign and magnitude

A negative exponent does not mean a negative value. `10^-6` means one millionth of the unit, not a quantity below zero. This mistake is common when reading microscopic scales or very short times.

The physical sign of a quantity can also be confused with the sign of the exponent. A charge may be negative and also have micro-scale magnitude; those are two different pieces of information. Separate algebraic sign, coefficient, exponent, and unit.

## Error 5: applying a rule outside its domain

Not every result should be rounded to one significant figure. In laboratory measurements, available precision matters. Replacing `1.96 x 10^-3 m` by `2 x 10^-3 m` may be acceptable for estimation, but not for comparing precise experimental data.

Do not apply prefixes to squared or cubed units without raising the conversion factor. One square centimetre is not `10^-2 m^2`; it is `10^-4 m^2`. Detect this error by checking whether the unit is squared or cubed.

## Quick detection rule

Before accepting a conversion, ask three questions: was the prefix replaced by the correct power, is the final unit the one required by the formula, and is the resulting scale physically reasonable?

If a table has height `10^6 m`, a molecule has size `10^2 m`, or a household battery gives `10^-9 V`, stop calculating. Prefixes, exponents, and units must be checked first.

<!-- algebra-depth-v2 -->
## Quick diagnosis

Input error: using a datum without unit, scale, or a decision about whether it is constant. In scientific notation and SI prefixes, an isolated number rarely contains all the physical information.

Structure error: applying a correct operation to the wrong relation. The arithmetic may be right while the physics is wrong if the selected pattern does not represent the phenomenon.

Output error: accepting a number without comparing it with an estimate. A result must have a reasonable unit, order of magnitude, sign, and dependence.

