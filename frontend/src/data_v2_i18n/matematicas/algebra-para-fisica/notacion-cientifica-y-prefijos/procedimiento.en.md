# Procedure

## Before calculating

Identify every unit and prefix in the statement. Mark kilometres, millimetres, microseconds, megahertz, nanometres, or any other scaled unit. Before operating, decide whether the formula expects base SI units or whether an equivalent unit can be kept consistently.

Also estimate the expected scale. A classroom length should not end in kilometres, an atomic distance should not be whole metres, and a human reaction time should not be in nanoseconds. This intuition helps detect misplaced exponents.

Before using Phyxio's unit converter, write an estimate: if the datum is in `cm^2`, the exponent must change in steps of two; if it is in `km/h`, the result in `m/s` should be smaller than the original number; if it is in `g/cm^3`, the result in `kg/m^3` often increases greatly. Then use the converter to verify, not to think for you.

## Step 1: identify the mathematical object

The mathematical object is a quantity written as a decimal, a power of ten, or a prefix. For example, `0.004 m`, `4 x 10^-3 m`, and `4 mm` represent the same length. The task is to recognize these forms as equivalent.

If several quantities appear, separate number, power, and unit. In `2.5 kN`, the number is `2.5`, the prefix kilo is `10^3`, and the base unit is newton. Therefore `2.5 kN = 2.5 x 10^3 N`.

Check whether the unit is raised to a power or appears in a compound unit. In `cm^2`, the factor `10^-2` is squared. In `cm^3`, it is cubed. In `km/h`, one factor is in the numerator and another in the denominator. This identification prevents the largest scale errors.

## Step 2: choose the operation

To convert from a prefix to the base unit, replace the prefix by its power of ten. To convert from the base unit to a prefix, divide by the prefix factor. For example, `0.003 s = 3 x 10^-3 s = 3 ms`.

To multiply quantities in scientific notation, multiply coefficients and add exponents. To divide, divide coefficients and subtract exponents. If the coefficient is outside the interval from 1 to 10, normalize it by shifting a power of ten.

For compound units, convert each part separately. If you have `72 km/h`, write `72 x 10^3 m / 3600 s` and then simplify. If you have `1.2 g/cm^3`, convert grams to kilograms and cubic centimetres to cubic metres before dividing. In areas and volumes, the conversion factor must be raised too.

## Step 3: preserve units and signs

The power of ten does not replace the unit. `10^-3 m` is not the same as `10^-3 s`. Keeping the unit visible prevents mixing length, time, mass, charge, or energy during conversion.

The sign of the exponent indicates scale, not physical direction. A negative exponent does not mean a negative value; it means a value smaller than the base unit. `10^-6 m` is a very small positive length, not a negative length.

## Step 4: calculate

First convert all data that must be in compatible units. Then operate with the numbers. For example, if speed is given in `km/h` and time in seconds, convert speed to `m/s` before multiplying by time.

At the end, normalize the notation: keep a coefficient between 1 and 10 and an integer power of ten. If you obtain `32 x 10^-4`, rewrite it as `3.2 x 10^-3`. This form makes scale comparison easier.

If the goal is communication through prefixes, scientific notation can be converted into engineering notation. For example, `4.7 x 10^-6 s` is naturally communicated as `4.7 microseconds`. `1.2 x 10^4 W` may be read as `12 kW`, even though that is not normalized scientific notation.

In long calculations, separate coefficients and exponents. Multiply or divide coefficients with reasonable significant figures, combine exponents with exact rules, and normalize only at the end. This reduces decimal-point errors and keeps order of magnitude visible.

If the problem includes physical constants, take the value from Phyxio's constants table rather than memory. Then send coherent data to the calculator. The recommended sequence is: estimate scale, convert units, check with the converter, enter values in the calculator, and read whether the result keeps a reasonable physical scale.

## Step 5: interpret the result

Read the power of ten as a physical scale. `10^3 m` points to kilometres, `10^-3 m` to millimetres, `10^-6 m` to micrometres, and `10^-9 m` to nanometres. Ask whether that scale fits the phenomenon.

Then decide whether a prefix would communicate the result better. `0.000002 s` may be clearer as `2 microseconds`; `5000 W` may be clearer as `5 kW`. The best form communicates scale without hiding the unit.

## Self-check checklist

Check that each prefix was replaced by the correct power. Make sure milli was not confused with micro, kilo with mega, or nano with micro. Verify that exponents were added during multiplication and subtracted during division.

Confirm that the final coefficient is normalized, that the unit matches the requested quantity, and that the scale is physically reasonable. If the answer looks impossible, check prefixes before blaming the physical model.

Add three advanced checks. First, if the unit was squared or cubed, the conversion factor must be squared or cubed too. Second, if the unit was a quotient, review numerator and denominator. Third, if the result is communicated with a prefix, check that the chosen prefix improves readability and does not hide the unit actually used in the calculation.

As a final control, compare your manual conversion with the converter. If they disagree, do not simply copy the converter value: locate whether the error is in the prefix, the power of the unit, the denominator, or rounding. That comparison is part of the learning process.

<!-- algebra-depth-v2 -->
## Expanded didactic route

1. Before calculating, write a verbal prediction: the result should increase, decrease, stay fixed, or change order of magnitude.
2. Separate data, unknown, constants, and constraints. Not every symbol in a formula plays the same physical role.
3. Choose the tool from the structure, not from habit. In scientific notation and SI prefixes, the form of the relation decides the procedure.
4. Calculate while keeping units, powers, and signs visible. If one line hides too much, split the step.
5. Interpret the result in one sentence: what it measures, in what unit, under what condition, and at what scale.

To close the exercise, mentally change one datum by a simple factor and check whether the result moves as the model predicts.

