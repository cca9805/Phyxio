const e=`# Procedure

## Before calculating

Read the question before looking for a formula. If it asks for "rate of change", "velocity", "slope", "rate", or "per unit", you probably need slope. If it asks for "total", "accumulated", "displacement", "impulse", "work", or "charge", you probably need area.

Also check the interval. A slope may be computed on a specific segment, between two points, or at one point if a tangent is available. An area always needs a horizontal interval and a reference for deciding sign.

## Step 1: identify the mathematical object

Write what each axis represents with units: for example \`t (s)\` horizontally and \`v (m/s)\` vertically. Then decide whether you have a line, a curve, a piecewise graph, or a data cloud. The shape constrains the method.

For a line, slope is constant and any two well-read points are enough. For a curve, average slope uses two points on the interval and instantaneous slope requires a tangent or derivative. For area, separate rectangles, triangles, trapezoids, or curved regions.

## Step 2: choose the operation

Use slope if the answer must be a rate with quotient units. On an \`x-t\` graph, \`Delta x / Delta t\` gives average velocity. On a \`v-t\` graph, \`Delta v / Delta t\` gives average acceleration.

Use area if the answer must be an accumulation with product units. On \`v-t\`, area gives displacement. On \`F-t\`, area gives impulse. On \`P-t\`, area gives transferred energy.

## Step 3: preserve units and signs

The unit of a slope comes from dividing the vertical unit by the horizontal unit. Do not write only the number: \`4\` is not the same as \`4 m/s\` or \`4 N/m\`.

The unit of an area comes from multiplying axis units. The sign depends on whether the curve lies above or below the horizontal axis, or whether the vertical quantity is positive or negative. If there are intervals with different signs, compute each region separately.

## Step 4: calculate

For average slope, choose two readable points and calculate \`Delta y / Delta x\`. Use signed differences: final point minus initial point. If the segment is horizontal, the slope is zero even if the vertical value is not zero.

For simple area, decompose the region into known shapes. A rectangle is base times height, a triangle is base times height divided by two, and a trapezoid is base times the sum of heights divided by two. If the curve is irregular, approximate with rectangles or trapezoids and state that it is an estimate.

## Step 5: interpret the result

Turn the number into a physical sentence. A slope of \`-2 m/s\` on a position-time graph means position decreases two meters per second. An area of \`15 m\` on a velocity-time graph means net displacement of fifteen meters.

If the result is negative, explain the sense. If the result is zero, distinguish between "no change", "positive and negative areas cancel", and "the vertical quantity is zero". These situations do not mean the same thing.

## Self-check checklist

Before submitting, verify: axes read, units written, interval marked, operation chosen by the question rather than habit, sign checked, scale used correctly, and final physical sentence included.

At basic level, recognizing slope versus area is enough. At intermediate level, compute with shapes and quotients. At advanced level, decide between average and instantaneous, geometric and signed area, and justify approximations.
`;export{e as default};
