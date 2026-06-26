const e=`\uFEFF# Common Errors in Torque Definition\r
\r
## Conceptual errors\r
\r
### Error 1: confusing radial distance with lever arm\r
**Why it seems correct:** Students remember that torque involves force times distance, and r is the visible distance between axis and application point.\r
**Why it is incorrect:** Torque depends on b, the perpendicular distance from the axis to the line of action, not on r directly. When [[theta]] is not 90°, using r instead of b overestimates torque.\r
**Detection signal:** The result does not match the lever-arm route, or the predicted rotation sense does not match the geometry.\r
**Conceptual correction:** Draw the line of action of F and measure the perpendicular from the axis to that line. That is b. Alternatively, compute\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
**Contrast mini-example:** With\r
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
. The mistake doubles the result.\r
\r
### Error 2: forgetting to declare the reference axis\r
**Why it seems correct:** The student computes torque without specifying the axis and obtains a dimensionally correct number.\r
**Why it is incorrect:** Torque always depends on the chosen axis. Two computations using different axes give different values and both can be correct for their respective axes. Without declaring the axis, the result is ambiguous.\r
**Detection signal:** The number does not match what is expected, or the problem statement does not specify axis and the student does not define one.\r
**Conceptual correction:** Always declare axis, origin, and positive rotation sense before computing [[tau]].\r
**Contrast mini-example:** A couple on a bar gives [[tau]] of 20 N·m about one end but [[tau]] of 0 about the center of mass. Without specifying the axis, the result conveys nothing.\r
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
**Why it seems correct:** In many textbook exercises, friction is silently ignored and the calculation closes without issue.\r
**Why it is incorrect:** In real systems, bearing friction reduces useful torque. Assuming ideal [[tau]] in a system with losses leads to optimistic predictions that fail on the test bench.\r
**Detection signal:** Measured behavior consistently differs from predictions across multiple trials.\r
**Conceptual correction:** Explicitly state whether zero friction is assumed. In design contexts, use the extended model with a loss factor.\r
**Contrast mini-example:** A mechanism computes [[tau]] of 50 N·m to start. With 20 percent real friction, 60 N·m is needed. A motor sized from the ideal value will fail at startup.\r
\r
### Error 4: using I from a different axis in segunda_ley_rotacional\r
**Why it seems correct:** The student finds I in a table or formula and substitutes it directly into\r
\r
{{f:segunda_ley_rotacional}}\r
\r
without checking the axis.\r
**Why it is incorrect:** Believing any I value is interchangeable ignores that I depends on the rotation axis. This produces a wrong angular acceleration even if the arithmetic is perfect.\r
**Detection signal:** The computed [[alpha]] is implausible for the system scale or does not match the qualitative estimate.\r
**Conceptual correction:** Confirm that the axis for which I is defined matches exactly the rotation axis declared in the problem. Apply the parallel-axis theorem if axis translation is needed.\r
**Contrast mini-example:** For a rod, I about the end is four times I about the center. Confusing the two changes [[alpha]] by a factor of four.\r
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
**Why it seems correct:** The student knows [[theta]] of 40° and writes sin(40) in the calculator without checking the angular mode.\r
**Why it is incorrect:** sin(40°) ≈ 0.643, but sin(40 rad) ≈ 0.745. The error is about 16 percent and can change a design decision in a tight margin.\r
**Detection signal:** The result differs from the lever-arm route by more than 5 percent with no justification.\r
**Conceptual correction:** Always verify the calculator is in degree mode when the angle is given in degrees. Alternatively, convert first using\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
**Contrast mini-example:** With r of 0.5 m, F of 100 N, [[theta]] of 45°: sin(45°) = 0.707 gives [[tau]] of 35.4 N·m. Using sin(45 rad) ≈ 0.851 gives [[tau]] of 42.6 N·m. A 20 percent overestimate.\r
\r
### Error 6: wrong sign on [[F_x]] or [[F_y]] in vector decomposition\r
**Why it seems correct:** The student decomposes the force correctly in magnitude but does not review the quadrant or axis convention.\r
**Why it is incorrect:** A sign error on [[F_x]] or [[F_y]] flips the rotation sense of [[tau_z]]. The magnitude may be correct but the direction of rotation is wrong.\r
**Detection signal:** The sign of [[tau_z]] does not match the physically observable or expected rotation sense.\r
**Conceptual correction:** Before computing\r
\r
{{f:torque_plano}}\r
\r
, verify signs of [[F_x]] and [[F_y]] against the diagram and the declared z axis.\r
**Contrast mini-example:** If\r
\r
{{f:torque_plano}}\r
\r
 (upward) is confused with\r
\r
{{f:torque_plano}}\r
\r
, [[tau_z]] flips sign completely even though the magnitude is the same.\r
\r
Typical mathematical errors include degree-radian mismatch in trigonometric functions and wrong metric conversion for distances. A centimeter-to-meter mistake can shift torque by two orders of magnitude.\r
\r
Component-sign mistakes are equally common. Mis-signing [[F_x]] or [[F_y]] flips rotation sense. Another recurring error is summing absolute torques instead of algebraic torques, which removes legitimate cancellation effects.\r
\r
## Interpretation errors\r
\r
### Error 7: accepting results without physical plausibility check\r
**Why it seems correct:** The number has correct units and the algebra is clean, so it seems sufficient.\r
**Why it is incorrect:** Believing a correct algebra result is automatically correct physics leads to ignoring material limits, operating regimes, and absurd orders of magnitude.\r
**Detection signal:** The computed value exceeds the admissible capacity of the component, or the order of magnitude is far from what the system scale would suggest.\r
**Conceptual correction:** Always compare the result against system limits and expected scale. A torque of 10^5 N·m on a bench-scale bar is immediately suspicious.\r
**Contrast mini-example:** If a pin supports up to 40 N·m and the calculation gives 65 N·m, the correct reading is fracture risk, not "result successfully obtained".\r
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
If one checkpoint fails, do not close the result. Recompute with explicit traceability.\r
`;export{e as default};
