# Procedure

## Before calculating

Read what phenomenon is being studied and think of a reasonable scale. A human length is often between `10^0 m` and `10^1 m`; an urban distance may be near `10^3 m`; an atomic scale may be near `10^-10 m`. This expectation acts as an initial filter.

Write the units of all data. Order of magnitude does not repair mixed units. If one distance is in kilometres and another in metres, first express them in a compatible system or at least know which power of ten each unit introduces.

## Step 1: identify the mathematical object

The mathematical object is the dominant scale of each quantity. In `4.7 x 10^3`, the scale is thousands; in `2.1 x 10^-6`, the scale is micro. Full decimal precision is not needed for an initial estimate.

Classify each datum as large, small, or everyday scale relative to its unit. This forces physical thinking: `10^3 Pa`, `10^3 N`, and `10^3 J` share an exponent but do not describe the same physical reality.

## Step 2: choose the operation

If the formula multiplies quantities, add exponents. If it divides, subtract exponents. If it squares a quantity, double the exponent. If it takes a square root, roughly halve the exponent when appropriate.

For example, to estimate speed with `v = d / t`, a distance of `10^2 m` and a time of `10^1 s` give `10^(2-1) = 10^1 m/s`. That scale already suggests tens of metres per second.

## Step 3: preserve units and signs

The estimate must preserve the final unit. Metres divided by seconds give metres per second. Newtons multiplied by metres give joules. A power of ten without a unit is not a complete physical answer.

Sign is treated separately. Order of magnitude estimates size, not direction. If a velocity is negative because of the chosen axis, its magnitude may have order `10^1 m/s`, while the sign still carries orientation.

## Step 4: calculate

Round each datum to a nearby power of ten, then operate with exponents. If a slightly better estimate is needed, keep a simple coefficient such as 2, 3, or 5, but do not turn estimation into disguised exact calculation.

Afterward, compare with the detailed calculation if available. If both differ by a small factor, that is acceptable. If they differ by a hundred, a thousand, or a million, search for prefix, unit, or formula errors.

## Step 5: interpret the result

Translate the exponent into a physical phrase. `10^-3 s` is millisecond scale; `10^6 J` is megajoule scale; `10^5 Pa` is close to atmospheric pressure. This translation turns the power into physical meaning.

Then decide whether the result is plausible. Ask whether a real object, process, or system could have that scale. If not, return to the setup before adding decimals.

## Self-check checklist

Verify that units are compatible, exponents were combined correctly, and the final scale belongs to the requested quantity. Check that prefixes such as milli, micro, kilo, and mega were not confused.

Always ask a plausibility question: could this value exist in the described phenomenon? If the estimate contradicts physical experience or known scales, the solution is not reliable yet.

<!-- algebra-depth-v2 -->
## Expanded didactic route

1. Before calculating, write a verbal prediction: the result should increase, decrease, stay fixed, or change order of magnitude.
2. Separate data, unknown, constants, and constraints. Not every symbol in a formula plays the same physical role.
3. Choose the tool from the structure, not from habit. In order of magnitude, the form of the relation decides the procedure.
4. Calculate while keeping units, powers, and signs visible. If one line hides too much, split the step.
5. Interpret the result in one sentence: what it measures, in what unit, under what condition, and at what scale.

To close the exercise, mentally change one datum by a simple factor and check whether the result moves as the model predicts.

