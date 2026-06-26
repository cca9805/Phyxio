# Common Errors in Torque Calculation

## Conceptual errors

### Error 1: confusing radial distance with lever arm
**Why it seems correct:** The student remembers to multiply force by distance, and r is the visible distance between axis and application point.
**Why it is incorrect:** Torque depends on b, the perpendicular distance from the axis to the line of action, not on r directly. When [[theta]] is not 90°, using r instead of b overestimates torque.
**Detection signal:** The result does not match the lever-arm route, or the predicted rotation sense does not fit the geometry.
**Conceptual correction:** Draw the line of action of F and measure the perpendicular from the axis to that line. That is b. Alternatively, compute

{{f:torque_por_angulo}}

.
**Contrast mini-example:** For

{{f:torque_por_angulo}}

,

{{f:torque_por_angulo}}

,

{{f:torque_por_angulo}}

: using r gives

{{f:torque_por_angulo}}

, but the correct value is

{{f:torque_por_angulo}}

. The error doubles the result.

### Error 2: omitting the reference axis declaration
**Why it seems correct:** The student computes torque without specifying the axis and obtains a number with correct units.
**Why it is incorrect:** Torque always depends on the chosen axis. Two calculations with different axes give different values and both can be correct for their own axis. Without declaring the axis, the result is ambiguous.
**Detection signal:** The number does not match the expected value, or the problem statement does not specify an axis and the student does not define one.
**Conceptual correction:** Always declare the reference axis, origin, and positive rotation sense before computing [[tau]].
**Contrast mini-example:** A couple on a bar gives

{{f:torque_por_angulo}}

 about one end but

{{f:torque_por_angulo}}

about the center of mass. Without declaring the axis, the result conveys nothing.

A frequent conceptual error is treating torque as if it were only force. Students remember multiplication by a distance but forget that distance must be perpendicular to the line of action. Without that condition, results may look numerically plausible while failing to predict actual rotation.

Another conceptual issue is ignoring axis dependence. Two analysts can obtain different torque values from the same forces and both can still be correct if they selected different axes. The real mistake is omitting the axis declaration.

A third confusion is mixing torque with energy because both use

{{f:torque_por_angulo}}

dimensions. Physical meaning is different: torque is tied to rotational tendency about an axis.

## Model errors

### Error 3: assuming zero friction without declaring it
**Why it seems correct:** In many academic exercises friction is implicitly ignored and the calculation closes without issues.
**Why it is incorrect:** In real systems, friction in supports and bearings reduces useful torque. Assuming ideal [[tau]] in a system with losses leads to optimistic predictions that do not hold in testing.
**Detection signal:** Measured behavior differs systematically from predicted behavior across multiple trials.
**Conceptual correction:** Explicitly declare whether friction is assumed zero. In design, use the extended model with a loss factor.
**Contrast mini-example:** A mechanism requires

{{f:torque_por_angulo}}

 to start. With 20% real friction, it needs

{{f:torque_por_angulo}}

. A motor selected for the ideal value will fail at startup.

### Error 4: using I from the wrong axis in segunda_ley_rotacional
**Why it seems correct:** The student finds I in a table or formula and substitutes it directly into

{{f:segunda_ley_rotacional}}

without checking the axis.
**Why it is incorrect:** I depends on the rotation axis. Treating any I value as interchangeable leads to an incorrect angular acceleration [[alpha]], even when the arithmetic is perfect.
**Detection signal:** The value of [[alpha]] is not plausible for the system scale or does not match a qualitative estimate.
**Conceptual correction:** Verify that the axis for which I is computed matches exactly the declared rotation axis. Use the parallel-axis theorem if the axis must be shifted. The correct relation is

{{f:segunda_ley_rotacional}}

with I about the declared axis.
**Contrast mini-example:** For a rod, I about the end is 4 times larger than I about the center. Confusing the two changes [[alpha]] by a factor of four.

Model errors often come from implicit ideal assumptions. For instance, solving with zero friction while the mechanism has measurable bearing losses. Algebra can be clean and still fail against measured behavior.

Another model error is reducing a spatial problem to a planar one without justification. In that case, [[tau_z]] may capture only part of rotational loading. Using inertia I from the wrong axis is also common; then

{{f:segunda_ley_rotacional}}

yields a tidy but physically wrong acceleration estimate.

## Mathematical errors

### Error 5: mixing degrees and radians in sin([[theta]])
**Why it seems correct:** The student knows [[theta]] of 40° and types sin(40) on the calculator without checking angular mode.
**Why it is incorrect:**

{{f:torque_por_angulo}}

, but

{{f:torque_por_angulo}}

. The error is 16%, which can change a design diagnosis.
**Detection signal:** The result differs by more than 5% from the lever-arm route without justification.
**Conceptual correction:** Always verify the calculator is in degree mode when the angle is given in degrees. Alternatively, convert:

{{f:torque_por_angulo}}

.
**Contrast mini-example:**

{{f:torque_por_angulo}}

 with

{{f:torque_por_angulo}}

,

{{f:torque_por_angulo}}

,

{{f:torque_por_angulo}}

. In degrees:

{{f:torque_por_angulo}}

. Using

{{f:torque_por_angulo}}

 gives

{{f:torque_por_angulo}}

. Error of 20%.

### Error 6: flipping the sign of [[F_x]] or [[F_y]] in vector decomposition
**Why it seems correct:** The student decomposes the force correctly in magnitude but does not review quadrant or axis convention.
**Why it is incorrect:** A sign error in [[F_x]] or [[F_y]] flips the rotation sense of [[tau_z]]. The number may be correct in magnitude but wrong in sign.
**Detection signal:** The sign of [[tau_z]] does not agree with physically observable or expected rotation sense.
**Conceptual correction:** Before computing

{{f:torque_plano}}

, verify the signs of [[F_x]] and [[F_y]] against the diagram and declared z axis.
**Contrast mini-example:** If

{{f:torque_plano}}

 (upward) is confused with

{{f:torque_plano}}

, [[tau_z]] changes sign completely even though the magnitude is the same.

Typical mathematical errors include degree-radian mismatch in trigonometric functions and wrong metric conversion for distances. A centimeter-to-meter mistake can shift torque by two orders of magnitude.

Component-sign mistakes are equally common. Mis-signing [[F_x]] or [[F_y]] flips rotation sense. Another recurring error is summing absolute torques instead of algebraic torques, which removes legitimate cancellation effects.

## Interpretation errors

### Error 7: accepting a result without a plausibility check
**Why it seems correct:** The number has correct units and the algebra is clean, so it seems sufficient.
**Why it is incorrect:** Believing an algebraically correct result is automatically physically correct leads to ignoring material limits, operating regimes, and absurd magnitudes.
**Detection signal:** The computed value exceeds the admissible component capacity, or the order of magnitude is very different from what is expected for the system.
**Conceptual correction:** Always compare the result with the system limit and with the expected scale. A torque of

{{f:torque_por_angulo}}

on a bench-scale bar is immediately suspicious.
**Contrast mini-example:** If a pin supports up to

{{f:torque_por_angulo}}

 and the calculation gives

{{f:torque_por_angulo}}

, the correct reading is fracture risk, not "result obtained successfully".

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