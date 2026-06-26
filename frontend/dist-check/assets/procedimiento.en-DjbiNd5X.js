const e=`# Procedure

## Before calculating

Do not start by fitting a formula. First inspect the global shape, axes, units, and interval. Ask whether the relation looks constant, proportional, curved, inverse, multiplicative, compressed, or periodic.

Then decide which physical information you want to extract: slope, constant, amplitude, period, exponent, initial value, or characteristic scale. The function is useful only if its parameters answer a physical question.

## Step 1: identify the mathematical object

The object is a relation \`y\` versus \`x\`, a data table, or an experimental graph. Write which quantity is on each axis and which units it has. Without this, the same curve may represent completely different phenomena.

Check whether the data pass through the origin, flatten, change concavity, oscillate, or blow up. These clues guide the candidate function family.

## Step 2: choose the operation

If the relation has constant slope, try a linear function. If variation increases or decreases symmetrically, try a quadratic. If one quantity decreases as distance or radius increases, consider an inverse relation or power law.

If changes are proportional to the current value, consider an exponential. If a scale spans many orders of magnitude, consider logarithms. If there is repetition, look for a sinusoidal function with amplitude, period, and phase.

## Step 3: preserve units and signs

Every parameter must have coherent units. In \`y = ax + b\`, \`a\` has unit \`y/x\` and \`b\` has unit \`y\`. In a sinusoid, amplitude has the vertical unit and angular frequency has inverse horizontal unit.

Sign also matters. A negative slope indicates decrease, a negative exponent indicates decay, and a negative phase indicates a temporal or angular shift relative to the reference.

## Step 4: calculate

At basic level, classify the shape and read obvious parameters. At intermediate level, calculate slope, intercepts, amplitude, period, or proportionality constant from well-chosen points. At advanced level, transform the relation if needed and check residuals or deviations.

Do not use all points blindly if some lie outside the model. Separate the interval where the candidate function makes sense and justify why that interval represents the phenomenon.

## Step 5: interpret the result

Turn the chosen function into a sentence: "the field falls as inverse square", "the amplitude oscillates with fixed period", "temperature approaches the environment exponentially", or "force is proportional to extension".

If you cannot write that sentence, the classification is still decorative. The result must connect shape, parameter, unit, and physical domain.

## Self-check checklist

Check: axes and units, visual shape, candidate family, physical parameter, validity domain, sign, scale, and conclusion. If two families seem possible, state which additional datum would decide between them.
`;export{e as default};
