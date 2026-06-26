const e=`# Errors\r
\r
## Conceptual errors\r
\r
### Error 1: Confusing the height of the v-t graph with the position of the object\r
\r
**Why it seems correct**\r
The student associates "being high on the graph" with "being far away", by direct visual analogy: if the point goes up, the object advances. This generalisation works for the x-t graph but is incorrectly transferred to v-t.\r
\r
**Why it is wrong**\r
The ordinate of the v-t graph gives the velocity at that instant, not where the object is. Position is the **accumulated area** under the curve, not the height of the point.\r
\r
**Detection signal**\r
The student says "it is at 5 metres" while pointing at a point with velocity 5 m/s on the v-t graph.\r
\r
**Conceptual correction**\r
Read the ordinate as "how fast is it going?" and reserve position calculations for the area under the v-t curve.\r
\r
**Mini contrast example**\r
A v-t graph shows a constant velocity of 10 m/s for 3 s. The student says "it is at 10 m". Correct result: position changes by 10 × 3 = 30 m, not 10 m.\r
\r
### Error 2: Believing that a horizontal line on v-t means the object is stationary\r
\r
**Why it seems correct**\r
"Horizontal = no change = no movement" is an intuitive rule that works in everyday life (a lift that stops appears as a horizontal line on the display).\r
\r
**Why it is wrong**\r
Horizontal means constant velocity, not zero velocity. Only if the line coincides with the t-axis is the velocity zero.\r
\r
**Detection signal**\r
The student states "it is not moving" when seeing a horizontal line at 5 m/s.\r
\r
**Conceptual correction**\r
Check the numerical value of the ordinate: a velocity of 5 m/s means the object is moving at a steady pace.\r
\r
**Mini contrast example**\r
A horizontal line at 5 m/s for 4 s. If stationary, the displacement would be 0. But the area under the curve is 5 × 4 = 20 m. The object does move.\r
\r
### Error 3: Thinking that a descending x-t graph means the object is slowing down\r
\r
**Why it seems correct**\r
"Goes down on the graph = slows down" seems logical by analogy with a hill. The student confuses direction of motion with change in speed.\r
\r
**Why it is wrong**\r
A negative slope on x-t indicates negative velocity (moving backwards), not necessarily deceleration. The object could be moving backwards at constant speed.\r
\r
**Detection signal**\r
The student writes "deceleration" upon seeing a constant negative slope on x-t.\r
\r
**Conceptual correction**\r
Distinguish between the sign of velocity (direction) and the change in |v| (acceleration/deceleration).\r
\r
**Mini contrast example**\r
Linear x-t graph with slope -3 m/s. The acceleration is 0 (the slope does not change), yet the object moves backwards at 3 m/s constantly. It is not slowing down.\r
\r
## Model errors\r
\r
### Error 4: Assuming constant acceleration when the v-t curve changes slope\r
\r
**Why it seems correct**\r
The problem says "acceleration" and the student assumes it is a single value for the entire graph, simplifying the analysis as in simple MRU/MRUA exercises.\r
\r
**Why it is wrong**\r
If the slope changes, the acceleration is not uniform across the whole interval. Treating everything as a single linear segment yields wrong areas and slopes.\r
\r
**Detection signal**\r
The student computes a single Δ v / Δ t for the entire graph, ignoring the visible corners.\r
\r
**Conceptual correction**\r
Divide the graph into as many segments as there are slope changes and analyse each one separately.\r
\r
**Mini contrast example**\r
A v-t graph rises linearly from 0 to 10 m/s in 2 s and then drops linearly to 0 in another 2 s. The student computes average acceleration as zero because start and end velocities match. Correct result: phase 1 has acceleration +5 m/s², phase 2 has acceleration −5 m/s².\r
\r
### Error 5: Extrapolating the line beyond the data interval\r
\r
**Why it seems correct**\r
"The trend will continue" is a reasonable assumption in many everyday contexts (if it rained for an hour, it will probably keep raining for a while).\r
\r
**Why it is wrong**\r
The piecewise-linear model only describes behaviour **within** the data. Outside them, conditions may be entirely different.\r
\r
**Detection signal**\r
The student extends the graph line with a dotted line and reads values outside the provided time interval.\r
\r
**Conceptual correction**\r
Restrict the analysis to the time interval of the given graph and do not assume the trend continues.\r
\r
**Mini contrast example**\r
A v-t graph shows increasing velocity between 0 and 5 s. The student extrapolates to 10 s and predicts a very high velocity. In reality, at 5 s the object hit a wall.\r
\r
## Mathematical errors\r
\r
### Error 6: Computing the area under v-t as a rectangle when it is a trapezoid\r
\r
**Why it seems correct**\r
The rectangle is the simplest area figure; the student uses v · Δ t without distinguishing which value of v to use.\r
\r
**Why it is wrong**\r
A segment with velocity changing between v_i and v_f forms a trapezoid, not a rectangle. Using only v_f · Δ t overestimates or underestimates the result.\r
\r
**Detection signal**\r
The student multiplies the final velocity by the total time without averaging with the initial velocity.\r
\r
**Conceptual correction**\r
Apply the trapezoid formula for displacement (desplazamiento_area_v_t): average the initial and final velocities, then multiply by the time interval.\r
\r
**Mini contrast example**\r
Initial velocity 0, final velocity 10 m/s, time interval 4 s. Using a rectangle gives 10 × 4 = 40 m; the trapezoid formula gives (0 + 10)/2 × 4 = 20 m. Difference of 100%.\r
\r
### Error 7: Forgetting the sign of the slope or the area\r
\r
**Why it seems correct**\r
In school arithmetic the "result" is usually a positive number. The student extracts the absolute value out of habit.\r
\r
**Why it is wrong**\r
A negative slope on v-t indicates deceleration (or acceleration in the opposite direction). Ignoring the sign loses directional information.\r
\r
**Detection signal**\r
The student obtains a positive acceleration value when the v-t curve is clearly descending.\r
\r
**Conceptual correction**\r
Keep signs when computing Δ v / Δ t and verify that the result is consistent with the rise or fall of the curve.\r
\r
**Mini contrast example**\r
Velocity drops from 20 to 10 m/s in 5 s. Student gets 2 m/s². Correct: the velocity change is −10 m/s over 5 s, giving acceleration −2 m/s². The object decelerates, it does not accelerate.\r
\r
### Error 8: Adding areas above and below the axis without distinguishing sign\r
\r
**Why it seems correct**\r
"Total area = sum of all areas" sounds correct if one thinks of "how much ground the figure covers".\r
\r
**Why it is wrong**\r
The area below the t-axis on a v-t graph represents negative displacement. Adding it as positive gives an incorrect total displacement.\r
\r
**Detection signal**\r
The student obtains an abnormally large net displacement when the graph crosses the axis.\r
\r
**Conceptual correction**\r
Assign a negative sign to the area below the axis and add algebraically to obtain the net displacement.\r
\r
**Mini contrast example**\r
Area above axis: +20 m. Area below axis: -8 m. Student adds 20 + 8 = 28 m. Correct: net displacement = 20 + (-8) = 12 m; total distance = 20 + 8 = 28 m.\r
\r
## Interpretation errors\r
\r
### Error 9: Reading the slope of x-t and calling it acceleration\r
\r
**Why it seems correct**\r
The student knows that "the slope gives the derivative" and confuses it with the second derivative. If slope = derivative and "derivative of motion = acceleration", it seems reasonable.\r
\r
**Why it is wrong**\r
The slope of x-t is velocity, not acceleration. Acceleration is the slope of v-t or the curvature of x-t.\r
\r
**Detection signal**\r
The student writes a = Δ x / Δ t instead of v = Δ x / Δ t.\r
\r
**Conceptual correction**\r
Identify which quantities are on each axis before interpreting the slope: the slope of x-t gives velocity; the slope of v-t gives acceleration.\r
\r
**Mini contrast example**\r
An x-t graph has a slope of 4 m/s. The student reports an acceleration of 4 m/s². But the slope of x-t has units m/s (velocity), not m/s² (acceleration).\r
\r
### Error 10: Confusing total distance travelled with displacement\r
\r
**Why it seems correct**\r
Both expressions sound like "how much it has moved", and in problems without reversal they are numerically equal.\r
\r
**Why it is wrong**\r
Displacement is the net (signed) area under v-t; distance travelled is the sum of absolute values of each segment. If there is reversal, the two quantities differ.\r
\r
**Detection signal**\r
The student presents a single number as "the answer" when the problem asks for both quantities and the graph crosses the axis.\r
\r
**Conceptual correction**\r
Calculate both separately whenever the v-t graph crosses the time axis.\r
\r
**Mini contrast example**\r
Object advances 30 m and reverses 10 m. Displacement: 30 - 10 = 20 m. Distance: 30 + 10 = 40 m. They are different.\r
\r
## Quick self-control rule\r
\r
Before accepting a result obtained from a graph, apply this checklist:\r
\r
1. **Units**: does the slope have the units of the derived quantity (e.g., m/s² for the slope of v-t)?\r
2. **Sign**: is the sign of the slope consistent with the rise or fall of the curve? Is the sign of the area consistent with the direction of motion?\r
3. **Order of magnitude**: is the calculated displacement reasonable for the velocity values and times in the graph? For instance, if v ≈ 5 m/s over 10 s, the displacement should be around 50 m, not 500 or 5.\r
4. **Time interval**: do the segment bases add up to the total interval? If seconds are missing, a segment has been omitted.\r
`;export{e as default};
