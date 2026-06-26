const e=`# Common Errors in Torque Calculation\r
\r
## Conceptual errors\r
\r
### Error 1: confusing radial distance with lever arm\r
**Why it seems correct:** The student remembers to multiply force by distance, and r is the visible distance between axis and application point.\r
**Why it is incorrect:** Torque depends on b, the perpendicular distance from the axis to the line of action, not on r directly. When [[theta]] is not 90°, using r instead of b overestimates torque.\r
**Detection signal:** The result does not match the lever-arm route, or the predicted rotation sense does not fit the geometry.\r
**Conceptual correction:** Draw the line of action of F and measure the perpendicular from the axis to that line. That is b. Alternatively, compute\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
**Contrast mini-example:** For\r
\r
{{f:torque_por_angulo}}\r
\r
,\r
\r
{{f:torque_por_angulo}}\r
\r
,\r
\r
{{f:torque_por_angulo}}\r
\r
: using r gives\r
\r
{{f:torque_por_angulo}}\r
\r
, but the correct value is\r
\r
{{f:torque_por_angulo}}\r
\r
. The error doubles the result.\r
\r
### Error 2: omitting the reference axis declaration\r
**Why it seems correct:** The student computes torque without specifying the axis and obtains a number with correct units.\r
**Why it is incorrect:** Torque always depends on the chosen axis. Two calculations with different axes give different values and both can be correct for their own axis. Without declaring the axis, the result is ambiguous.\r
**Detection signal:** The number does not match the expected value, or the problem statement does not specify an axis and the student does not define one.\r
**Conceptual correction:** Always declare the reference axis, origin, and positive rotation sense before computing [[tau]].\r
**Contrast mini-example:** A couple on a bar gives\r
\r
{{f:torque_por_angulo}}\r
\r
 about one end but\r
\r
{{f:torque_por_angulo}}\r
\r
about the center of mass. Without declaring the axis, the result conveys nothing.\r
\r
A frequent conceptual error is treating torque as if it were only force. Students remember multiplication by a distance but forget that distance must be perpendicular to the line of action. Without that condition, results may look numerically plausible while failing to predict actual rotation.\r
\r
Another conceptual issue is ignoring axis dependence. Two analysts can obtain different torque values from the same forces and both can still be correct if they selected different axes. The real mistake is omitting the axis declaration.\r
\r
A third confusion is mixing torque with energy because both use\r
\r
{{f:torque_por_angulo}}\r
\r
dimensions. Physical meaning is different: torque is tied to rotational tendency about an axis.\r
\r
## Model errors\r
\r
### Error 3: assuming zero friction without declaring it\r
**Why it seems correct:** In many academic exercises friction is implicitly ignored and the calculation closes without issues.\r
**Why it is incorrect:** In real systems, friction in supports and bearings reduces useful torque. Assuming ideal [[tau]] in a system with losses leads to optimistic predictions that do not hold in testing.\r
**Detection signal:** Measured behavior differs systematically from predicted behavior across multiple trials.\r
**Conceptual correction:** Explicitly declare whether friction is assumed zero. In design, use the extended model with a loss factor.\r
**Contrast mini-example:** A mechanism requires\r
\r
{{f:torque_por_angulo}}\r
\r
 to start. With 20% real friction, it needs\r
\r
{{f:torque_por_angulo}}\r
\r
. A motor selected for the ideal value will fail at startup.\r
\r
### Error 4: using I from the wrong axis in segunda_ley_rotacional\r
**Why it seems correct:** The student finds I in a table or formula and substitutes it directly into\r
\r
{{f:segunda_ley_rotacional}}\r
\r
without checking the axis.\r
**Why it is incorrect:** I depends on the rotation axis. Treating any I value as interchangeable leads to an incorrect angular acceleration [[alpha]], even when the arithmetic is perfect.\r
**Detection signal:** The value of [[alpha]] is not plausible for the system scale or does not match a qualitative estimate.\r
**Conceptual correction:** Verify that the axis for which I is computed matches exactly the declared rotation axis. Use the parallel-axis theorem if the axis must be shifted. The correct relation is\r
\r
{{f:segunda_ley_rotacional}}\r
\r
with I about the declared axis.\r
**Contrast mini-example:** For a rod, I about the end is 4 times larger than I about the center. Confusing the two changes [[alpha]] by a factor of four.\r
\r
Model errors often come from implicit ideal assumptions. For instance, solving with zero friction while the mechanism has measurable bearing losses. Algebra can be clean and still fail against measured behavior.\r
\r
Another model error is reducing a spatial problem to a planar one without justification. In that case, [[tau_z]] may capture only part of rotational loading. Using inertia I from the wrong axis is also common; then\r
\r
{{f:segunda_ley_rotacional}}\r
\r
yields a tidy but physically wrong acceleration estimate.\r
\r
## Mathematical errors\r
\r
### Error 5: mixing degrees and radians in sin([[theta]])\r
**Why it seems correct:** The student knows [[theta]] of 40° and types sin(40) on the calculator without checking angular mode.\r
**Why it is incorrect:**\r
\r
{{f:torque_por_angulo}}\r
\r
, but\r
\r
{{f:torque_por_angulo}}\r
\r
. The error is 16%, which can change a design diagnosis.\r
**Detection signal:** The result differs by more than 5% from the lever-arm route without justification.\r
**Conceptual correction:** Always verify the calculator is in degree mode when the angle is given in degrees. Alternatively, convert:\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
**Contrast mini-example:**\r
\r
{{f:torque_por_angulo}}\r
\r
 with\r
\r
{{f:torque_por_angulo}}\r
\r
,\r
\r
{{f:torque_por_angulo}}\r
\r
,\r
\r
{{f:torque_por_angulo}}\r
\r
. In degrees:\r
\r
{{f:torque_por_angulo}}\r
\r
. Using\r
\r
{{f:torque_por_angulo}}\r
\r
 gives\r
\r
{{f:torque_por_angulo}}\r
\r
. Error of 20%.\r
\r
### Error 6: flipping the sign of [[F_x]] or [[F_y]] in vector decomposition\r
**Why it seems correct:** The student decomposes the force correctly in magnitude but does not review quadrant or axis convention.\r
**Why it is incorrect:** A sign error in [[F_x]] or [[F_y]] flips the rotation sense of [[tau_z]]. The number may be correct in magnitude but wrong in sign.\r
**Detection signal:** The sign of [[tau_z]] does not agree with physically observable or expected rotation sense.\r
**Conceptual correction:** Before computing\r
\r
{{f:torque_plano}}\r
\r
, verify the signs of [[F_x]] and [[F_y]] against the diagram and declared z axis.\r
**Contrast mini-example:** If\r
\r
{{f:torque_plano}}\r
\r
 (upward) is confused with\r
\r
{{f:torque_plano}}\r
\r
, [[tau_z]] changes sign completely even though the magnitude is the same.\r
\r
Typical mathematical errors include degree-radian mismatch in trigonometric functions and wrong metric conversion for distances. A centimeter-to-meter mistake can shift torque by two orders of magnitude.\r
\r
Component-sign mistakes are equally common. Mis-signing [[F_x]] or [[F_y]] flips rotation sense. Another recurring error is summing absolute torques instead of algebraic torques, which removes legitimate cancellation effects.\r
\r
## Interpretation errors\r
\r
### Error 7: accepting a result without a plausibility check\r
**Why it seems correct:** The number has correct units and the algebra is clean, so it seems sufficient.\r
**Why it is incorrect:** Believing an algebraically correct result is automatically physically correct leads to ignoring material limits, operating regimes, and absurd magnitudes.\r
**Detection signal:** The computed value exceeds the admissible component capacity, or the order of magnitude is very different from what is expected for the system.\r
**Conceptual correction:** Always compare the result with the system limit and with the expected scale. A torque of\r
\r
{{f:torque_por_angulo}}\r
\r
on a bench-scale bar is immediately suspicious.\r
**Contrast mini-example:** If a pin supports up to\r
\r
{{f:torque_por_angulo}}\r
\r
 and the calculation gives\r
\r
{{f:torque_por_angulo}}\r
\r
, the correct reading is fracture risk, not "result obtained successfully".\r
\r
Interpretation fails when a computed number is accepted without context checks. If a joint limit is\r
\r
{{f:torque_por_angulo}}\r
\r
 and the result is\r
\r
{{f:torque_por_angulo}}\r
\r
, the correct reading is overload risk, not merely "calculation completed".\r
\r
Near-zero net torque can also be misread. It may indicate true equilibrium, or cancellation between large opposite contributions sensitive to perturbations. Input uncertainty must be acknowledged when conclusions depend on small differences.\r
\r
## Quick self-control rule\r
Fast closure checklist:\r
1. Axis and positive rotation declared.\r
2. Formula matches available data.\r
3. Perpendicular distance used correctly.\r
4. SI units verified end to end.\r
5. Final sign agrees with physical rotation sense.\r
6. Magnitude scale is plausible for system size.\r
7. If\r
\r
{{f:segunda_ley_rotacional}}\r
\r
is used, I matches the same axis.\r
\r
If one checkpoint fails, do not close the result. Recompute with explicit traceability.`;export{e as default};
