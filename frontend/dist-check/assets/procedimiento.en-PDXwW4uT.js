const e=`# Procedure

## Before calculating

Look at the whole graph before reading points. Identify the title, axes, units, scale, origin, displayed interval, and whether the data are an ideal curve or experimental measurements. Decide whether you need a point value, a trend, a comparison, an intercept, a maximum, or a validity region.

Also check whether the axis is linear or logarithmic. In physics, a quick reading can fail if each division does not represent the same amount or if you extrapolate beyond the measured interval.

## Step 1: identify the mathematical object

Determine what each axis represents. The horizontal axis is often the independent variable, such as time, distance, or frequency. The vertical axis is usually the responding quantity, such as position, velocity, energy, temperature, or amplitude.

You may think of the relation as \`y\` versus \`x\`, but translate \`x\` and \`y\` into physical quantities. Do not say "y goes up"; say "velocity increases" or "stored energy grows".

## Step 2: choose the operation

If the question asks "what value", read a coordinate. If it asks "when", find the corresponding horizontal value. If it asks "how it changes", describe the trend or qualitative slope. If it asks "where it becomes zero", find the horizontal-axis intercepts.

Do not automatically use slope, area, or fitting. Those are separate mathematical operations. In graph reading, first decide which visual information answers the question, and only then choose whether calculation is needed.

## Step 3: preserve units and signs

Every reading keeps the unit of the corresponding axis. A vertical value uses the vertical unit; a time read from the horizontal axis uses the horizontal unit. If the graph crosses negative values, the sign has physical meaning and must not be turned into a magnitude without a reason.

When comparing two points, check that both are read on the same scale. If one axis has divisions of 0.2 and another has divisions of 5, counting squares without reading labels creates large errors.

## Step 4: calculate

To read a point, draw a vertical line from the horizontal value to the curve and then a horizontal line to the vertical axis. If the point lies between marks, interpolate reasonably and state that the result is approximate.

To recognize a trend, split the graph into intervals: increasing, decreasing, constant, curved upward, curved downward, or oscillating. For intercepts and extrema, locate the point and read its coordinates with units.

## Step 5: interpret the result

Turn the reading into a physical sentence. For example: "at 3 s, the object is near 6 m", "the temperature levels off after 80 s", or "the maximum amplitude appears as frequency approaches resonance".

State whether the reading is exact, approximate, or model-dependent. If the graph comes from experimental data, mention scatter, visual uncertainty, or the interval where the pattern seems reliable.

## Self-check checklist

- Identify the quantity and unit on each axis.
- Check whether the scale is linear, logarithmic, regular, or irregular.
- Distinguish point value, trend, intercept, extremum, and interval.
- Preserve sign and unit in every reading.
- Avoid extrapolating outside the displayed domain.
- Explain the result as a physical sentence, not as an isolated coordinate.
`;export{e as default};
