# Common Errors in Torque Definition

## Conceptual errors

### Error 1: confusing radial distance with lever arm
**Why it seems correct:** Students remember that torque involves force times distance, and r is the visible distance between axis and application point.
**Why it is incorrect:** Torque depends on b, the perpendicular distance from the axis to the line of action, not on r directly. When [[theta]] is not 90°, using r instead of b overestimates torque.
**Detection signal:** The result does not match the lever-arm route, or the predicted rotation sense does not match the geometry.
**Conceptual correction:** Draw the line of action of F and measure the perpendicular from the axis to that line. That is b. Alternatively, compute

{{f:torque_por_angulo}}

.
**Contrast mini-example:** With

{{f:torque_por_angulo}}

,

{{f:torque_por_angulo}}

,

{{f:torque_por_angulo}}

: using r gives

{{f:torque_por_angulo}}

, but the correct value is

{{f:torque_por_angulo}}

. The mistake doubles the result.

### Error 2: forgetting to declare the reference axis
**Why it seems correct:** The student computes torque without specifying the axis and obtains a dimensionally correct number.
**Why it is incorrect:** Torque always depends on the chosen axis. Two computations using different axes give different values and both can be correct for their respective axes. Without declaring the axis, the result is ambiguous.
**Detection signal:** The number does not match what is expected, or the problem statement does not specify axis and the student does not define one.
**Conceptual correction:** Always declare axis, origin, and positive rotation sense before computing [[tau]].
**Contrast mini-example:** A couple on a bar gives [[tau]] of 20 N·m about one end but [[tau]] of 0 about the center of mass. Without specifying the axis, the result conveys nothing.

A frequent conceptual error is treating torque as if it were only force. Students remember multiplication by a distance but forget that distance must be perpendicular to the line of action. Without that condition, results may look numerically plausible while failing to predict actual rotation.

Another conceptual issue is ignoring axis dependence. Two analysts can obtain different torque values from the same forces and both can still be correct if they selected different axes. The real mistake is omitting the axis declaration.

A third confusion is mixing torque with energy because both use

{{f:torque_por_angulo}}

dimensions. Physical meaning is different: torque is tied to rotational tendency about an axis.

## Model errors

### Error 3: assuming zero friction without declaring it
**Why it seems correct:** In many textbook exercises, friction is silently ignored and the calculation closes without issue.
**Why it is incorrect:** In real systems, bearing friction reduces useful torque. Assuming ideal [[tau]] in a system with losses leads to optimistic predictions that fail on the test bench.
**Detection signal:** Measured behavior consistently differs from predictions across multiple trials.
**Conceptual correction:** Explicitly state whether zero friction is assumed. In design contexts, use the extended model with a loss factor.
**Contrast mini-example:** A mechanism computes [[tau]] of 50 N·m to start. With 20 percent real friction, 60 N·m is needed. A motor sized from the ideal value will fail at startup.

### Error 4: using I from a different axis in segunda_ley_rotacional
**Why it seems correct:** The student finds I in a table or formula and substitutes it directly into

{{f:segunda_ley_rotacional}}

without checking the axis.
**Why it is incorrect:** Believing any I value is interchangeable ignores that I depends on the rotation axis. This produces a wrong angular acceleration even if the arithmetic is perfect.
**Detection signal:** The computed [[alpha]] is implausible for the system scale or does not match the qualitative estimate.
**Conceptual correction:** Confirm that the axis for which I is defined matches exactly the rotation axis declared in the problem. Apply the parallel-axis theorem if axis translation is needed.
**Contrast mini-example:** For a rod, I about the end is four times I about the center. Confusing the two changes [[alpha]] by a factor of four.

Model errors often come from implicit ideal assumptions. For instance, solving with zero friction while the mechanism has measurable bearing losses. Algebra can be clean and still fail against measured behavior.

Another model error is reducing a spatial problem to a planar one without justification. In that case, [[tau_z]] may capture only part of rotational loading. Using inertia I from the wrong axis is also common; then

{{f:segunda_ley_rotacional}}

yields a tidy but physically wrong acceleration estimate.

## Mathematical errors

### Error 5: mixing degrees and radians in sin([[theta]])
**Why it seems correct:** The student knows [[theta]] of 40° and writes sin(40) in the calculator without checking the angular mode.
**Why it is incorrect:** sin(40°) ≈ 0.643, but sin(40 rad) ≈ 0.745. The error is about 16 percent and can change a design decision in a tight margin.
**Detection signal:** The result differs from the lever-arm route by more than 5 percent with no justification.
**Conceptual correction:** Always verify the calculator is in degree mode when the angle is given in degrees. Alternatively, convert first using

{{f:torque_por_angulo}}

.
**Contrast mini-example:** With r of 0.5 m, F of 100 N, [[theta]] of 45°: sin(45°) = 0.707 gives [[tau]] of 35.4 N·m. Using sin(45 rad) ≈ 0.851 gives [[tau]] of 42.6 N·m. A 20 percent overestimate.

### Error 6: wrong sign on [[F_x]] or [[F_y]] in vector decomposition
**Why it seems correct:** The student decomposes the force correctly in magnitude but does not review the quadrant or axis convention.
**Why it is incorrect:** A sign error on [[F_x]] or [[F_y]] flips the rotation sense of [[tau_z]]. The magnitude may be correct but the direction of rotation is wrong.
**Detection signal:** The sign of [[tau_z]] does not match the physically observable or expected rotation sense.
**Conceptual correction:** Before computing

{{f:torque_plano}}

, verify signs of [[F_x]] and [[F_y]] against the diagram and the declared z axis.
**Contrast mini-example:** If

{{f:torque_plano}}

 (upward) is confused with

{{f:torque_plano}}

, [[tau_z]] flips sign completely even though the magnitude is the same.

Typical mathematical errors include degree-radian mismatch in trigonometric functions and wrong metric conversion for distances. A centimeter-to-meter mistake can shift torque by two orders of magnitude.

Component-sign mistakes are equally common. Mis-signing [[F_x]] or [[F_y]] flips rotation sense. Another recurring error is summing absolute torques instead of algebraic torques, which removes legitimate cancellation effects.

## Interpretation errors

### Error 7: accepting results without physical plausibility check
**Why it seems correct:** The number has correct units and the algebra is clean, so it seems sufficient.
**Why it is incorrect:** Believing a correct algebra result is automatically correct physics leads to ignoring material limits, operating regimes, and absurd orders of magnitude.
**Detection signal:** The computed value exceeds the admissible capacity of the component, or the order of magnitude is far from what the system scale would suggest.
**Conceptual correction:** Always compare the result against system limits and expected scale. A torque of 10^5 N·m on a bench-scale bar is immediately suspicious.
**Contrast mini-example:** If a pin supports up to 40 N·m and the calculation gives 65 N·m, the correct reading is fracture risk, not "result successfully obtained".

Interpretation fails when a computed number is accepted without context checks. If a joint limit is

{{f:torque_por_angulo}}

 and the result is

{{f:torque_por_angulo}}

, the correct reading is overload risk, not merely "calculation completed".

Near-zero net torque can also be misread. It may indicate true equilibrium, or cancellation between large opposite contributions sensitive to perturbations. Input uncertainty must be acknowledged when conclusions depend on small differences.

## Quick self-control rule
Fast closure checklist:
1. Axis and positive rotation declared.
2. Formula matches available data.
3. Perpendicular distance used correctly.
4. SI units verified end to end.
5. Final sign agrees with physical rotation sense.
6. Magnitude scale is plausible for system size.
7. If

{{f:segunda_ley_rotacional}}

is used, I matches the same axis.

If one checkpoint fails, do not close the result. Recompute with explicit traceability.
