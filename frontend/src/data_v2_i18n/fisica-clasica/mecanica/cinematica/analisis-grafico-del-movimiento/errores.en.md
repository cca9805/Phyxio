# Errors

## Conceptual errors

### Error 1: Confusing the height of the v-t graph with the position of the object

**Why it seems correct**
The student associates "being high on the graph" with "being far away", by direct visual analogy: if the point goes up, the object advances. This generalisation works for the x-t graph but is incorrectly transferred to v-t.

**Why it is wrong**
The ordinate of the v-t graph gives the velocity at that instant, not where the object is. Position is the **accumulated area** under the curve, not the height of the point.

**Detection signal**
The student says "it is at 5 metres" while pointing at a point with velocity 5 m/s on the v-t graph.

**Conceptual correction**
Read the ordinate as "how fast is it going?" and reserve position calculations for the area under the v-t curve.

**Mini contrast example**
A v-t graph shows a constant velocity of 10 m/s for 3 s. The student says "it is at 10 m". Correct result: position changes by 10 × 3 = 30 m, not 10 m.

### Error 2: Believing that a horizontal line on v-t means the object is stationary

**Why it seems correct**
"Horizontal = no change = no movement" is an intuitive rule that works in everyday life (a lift that stops appears as a horizontal line on the display).

**Why it is wrong**
Horizontal means constant velocity, not zero velocity. Only if the line coincides with the t-axis is the velocity zero.

**Detection signal**
The student states "it is not moving" when seeing a horizontal line at 5 m/s.

**Conceptual correction**
Check the numerical value of the ordinate: a velocity of 5 m/s means the object is moving at a steady pace.

**Mini contrast example**
A horizontal line at 5 m/s for 4 s. If stationary, the displacement would be 0. But the area under the curve is 5 × 4 = 20 m. The object does move.

### Error 3: Thinking that a descending x-t graph means the object is slowing down

**Why it seems correct**
"Goes down on the graph = slows down" seems logical by analogy with a hill. The student confuses direction of motion with change in speed.

**Why it is wrong**
A negative slope on x-t indicates negative velocity (moving backwards), not necessarily deceleration. The object could be moving backwards at constant speed.

**Detection signal**
The student writes "deceleration" upon seeing a constant negative slope on x-t.

**Conceptual correction**
Distinguish between the sign of velocity (direction) and the change in |v| (acceleration/deceleration).

**Mini contrast example**
Linear x-t graph with slope -3 m/s. The acceleration is 0 (the slope does not change), yet the object moves backwards at 3 m/s constantly. It is not slowing down.

## Model errors

### Error 4: Assuming constant acceleration when the v-t curve changes slope

**Why it seems correct**
The problem says "acceleration" and the student assumes it is a single value for the entire graph, simplifying the analysis as in simple MRU/MRUA exercises.

**Why it is wrong**
If the slope changes, the acceleration is not uniform across the whole interval. Treating everything as a single linear segment yields wrong areas and slopes.

**Detection signal**
The student computes a single Δ v / Δ t for the entire graph, ignoring the visible corners.

**Conceptual correction**
Divide the graph into as many segments as there are slope changes and analyse each one separately.

**Mini contrast example**
A v-t graph rises linearly from 0 to 10 m/s in 2 s and then drops linearly to 0 in another 2 s. The student computes average acceleration as zero because start and end velocities match. Correct result: phase 1 has acceleration +5 m/s², phase 2 has acceleration −5 m/s².

### Error 5: Extrapolating the line beyond the data interval

**Why it seems correct**
"The trend will continue" is a reasonable assumption in many everyday contexts (if it rained for an hour, it will probably keep raining for a while).

**Why it is wrong**
The piecewise-linear model only describes behaviour **within** the data. Outside them, conditions may be entirely different.

**Detection signal**
The student extends the graph line with a dotted line and reads values outside the provided time interval.

**Conceptual correction**
Restrict the analysis to the time interval of the given graph and do not assume the trend continues.

**Mini contrast example**
A v-t graph shows increasing velocity between 0 and 5 s. The student extrapolates to 10 s and predicts a very high velocity. In reality, at 5 s the object hit a wall.

## Mathematical errors

### Error 6: Computing the area under v-t as a rectangle when it is a trapezoid

**Why it seems correct**
The rectangle is the simplest area figure; the student uses v · Δ t without distinguishing which value of v to use.

**Why it is wrong**
A segment with velocity changing between v_i and v_f forms a trapezoid, not a rectangle. Using only v_f · Δ t overestimates or underestimates the result.

**Detection signal**
The student multiplies the final velocity by the total time without averaging with the initial velocity.

**Conceptual correction**
Apply the trapezoid formula for displacement (desplazamiento_area_v_t): average the initial and final velocities, then multiply by the time interval.

**Mini contrast example**
Initial velocity 0, final velocity 10 m/s, time interval 4 s. Using a rectangle gives 10 × 4 = 40 m; the trapezoid formula gives (0 + 10)/2 × 4 = 20 m. Difference of 100%.

### Error 7: Forgetting the sign of the slope or the area

**Why it seems correct**
In school arithmetic the "result" is usually a positive number. The student extracts the absolute value out of habit.

**Why it is wrong**
A negative slope on v-t indicates deceleration (or acceleration in the opposite direction). Ignoring the sign loses directional information.

**Detection signal**
The student obtains a positive acceleration value when the v-t curve is clearly descending.

**Conceptual correction**
Keep signs when computing Δ v / Δ t and verify that the result is consistent with the rise or fall of the curve.

**Mini contrast example**
Velocity drops from 20 to 10 m/s in 5 s. Student gets 2 m/s². Correct: the velocity change is −10 m/s over 5 s, giving acceleration −2 m/s². The object decelerates, it does not accelerate.

### Error 8: Adding areas above and below the axis without distinguishing sign

**Why it seems correct**
"Total area = sum of all areas" sounds correct if one thinks of "how much ground the figure covers".

**Why it is wrong**
The area below the t-axis on a v-t graph represents negative displacement. Adding it as positive gives an incorrect total displacement.

**Detection signal**
The student obtains an abnormally large net displacement when the graph crosses the axis.

**Conceptual correction**
Assign a negative sign to the area below the axis and add algebraically to obtain the net displacement.

**Mini contrast example**
Area above axis: +20 m. Area below axis: -8 m. Student adds 20 + 8 = 28 m. Correct: net displacement = 20 + (-8) = 12 m; total distance = 20 + 8 = 28 m.

## Interpretation errors

### Error 9: Reading the slope of x-t and calling it acceleration

**Why it seems correct**
The student knows that "the slope gives the derivative" and confuses it with the second derivative. If slope = derivative and "derivative of motion = acceleration", it seems reasonable.

**Why it is wrong**
The slope of x-t is velocity, not acceleration. Acceleration is the slope of v-t or the curvature of x-t.

**Detection signal**
The student writes a = Δ x / Δ t instead of v = Δ x / Δ t.

**Conceptual correction**
Identify which quantities are on each axis before interpreting the slope: the slope of x-t gives velocity; the slope of v-t gives acceleration.

**Mini contrast example**
An x-t graph has a slope of 4 m/s. The student reports an acceleration of 4 m/s². But the slope of x-t has units m/s (velocity), not m/s² (acceleration).

### Error 10: Confusing total distance travelled with displacement

**Why it seems correct**
Both expressions sound like "how much it has moved", and in problems without reversal they are numerically equal.

**Why it is wrong**
Displacement is the net (signed) area under v-t; distance travelled is the sum of absolute values of each segment. If there is reversal, the two quantities differ.

**Detection signal**
The student presents a single number as "the answer" when the problem asks for both quantities and the graph crosses the axis.

**Conceptual correction**
Calculate both separately whenever the v-t graph crosses the time axis.

**Mini contrast example**
Object advances 30 m and reverses 10 m. Displacement: 30 - 10 = 20 m. Distance: 30 + 10 = 40 m. They are different.

## Quick self-control rule

Before accepting a result obtained from a graph, apply this checklist:

1. **Units**: does the slope have the units of the derived quantity (e.g., m/s² for the slope of v-t)?
2. **Sign**: is the sign of the slope consistent with the rise or fall of the curve? Is the sign of the area consistent with the direction of motion?
3. **Order of magnitude**: is the calculated displacement reasonable for the velocity values and times in the graph? For instance, if v ≈ 5 m/s over 10 s, the displacement should be around 50 m, not 500 or 5.
4. **Time interval**: do the segment bases add up to the total interval? If seconds are missing, a segment has been omitted.
