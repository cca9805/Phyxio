const e=`# Guided example

## Physical situation

Two sounds are compared. One has level \`40 dB\` and the other \`70 dB\`. The question is not how much intensity is added, but by what factor the intensity ratio changes relative to the reference.

## Mathematical translation

For sound intensity, \`L = 10 log10(I/I0)\`. A difference in levels satisfies \`Delta L = 10 log10(I2/I1)\`. Therefore, a difference of \`30 dB\` implies an intensity ratio.

## Step-by-step calculation

If \`Delta L = 70 dB - 40 dB = 30 dB\`, then \`30 = 10 log10(I2/I1)\`. Divide by \`10\`: \`3 = log10(I2/I1)\`. Therefore \`I2/I1 = 10^3 = 1000\`.

## Reading the result

The second sound has intensity one thousand times greater than the first. It does not mean it is "30 linear units" more intense. The scale compresses large ratios into manageable differences.

## Common error avoided

The avoided error is treating dB as a linear scale. A difference of \`30 dB\` does not add a fixed amount of intensity; it multiplies by a factor determined by the logarithmic definition.

# Inverse example

## Given result

On a log-log graph, the slope of field versus distance is approximately \`-2\` over the measured interval, from \`1 m\` to \`10 m\`, with positive data and coherent scale.

## What physical question it can answer

It can answer whether doubling distance reduces the field to one quarter. That is the reading of a power law with exponent \`-2\`, common in point-source models within their domain.
`;export{e as default};
