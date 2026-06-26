const e=`# Procedure

## Before calculating

Check whether the problem discusses factors, ratios, orders of magnitude, or widely scattered data. If you only need small absolute differences, a linear scale may be enough.

Verify that values are positive before using logarithms. If there are zeros, negative signs, or units without a dimensionless ratio, you must redefine the variable or model.

## Step 1: identify the mathematical object

The object may be a scale, a semilog graph, a log-log graph, or a logarithmic formula such as dB or pH. Write what each axis represents and which logarithmic base is used if stated.

In physical data, distinguish between taking the logarithm of a quantity and taking the logarithm of a ratio. Many real scales, such as decibels, use quotients relative to a reference.

## Step 2: choose the operation

Use semilog scale if you expect exponential growth or decay. Use log-log if you expect a power law. Use a direct logarithmic scale if you want to compare orders of magnitude.

For decibels or pH, apply the definition of the scale. Do not invent a linear conversion: each logarithmic unit represents a multiplicative factor.

## Step 3: preserve units and signs

Arguments of logarithms must be positive and, in rigorous physical formulas, dimensionless. That is why quotients such as \`I/I0\` or concentrations relative to a reference appear.

The sign before the logarithm also matters. In \`pH = -log10([H+])\`, a larger \`H+\` concentration gives lower pH because of the negative sign.

## Step 4: calculate

For orders of magnitude, count powers of ten. From \`10^-3\` to \`10^2\` there are five orders of magnitude. For dB, use that \`10 dB\` multiplies intensity ratio by \`10\` and \`20 dB\` by \`100\`.

On a log-log graph, calculate slope as logarithmic vertical change divided by logarithmic horizontal change. That slope is a scaling exponent, not an ordinary linear slope.

## Step 5: interpret the result

Translate the result into a factor. Saying "it increases by two logarithmic units" is incomplete; say by how much the quantity or ratio is multiplied.

In a power law, interpret the exponent: if it is \`2\`, doubling \`x\` multiplies \`y\` by \`4\`; if it is \`-2\`, doubling \`x\` divides \`y\` by \`4\`.

## Self-check checklist

Positive values, dimensionless quotient when appropriate, known logarithmic base, scale chosen from the model, result translated into a factor, and domain declared. If the factor translation is missing, the logarithmic reading is not closed.
`;export{e as default};
