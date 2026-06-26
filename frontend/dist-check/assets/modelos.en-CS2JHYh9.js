const e=`# Modelos físicos: Newton's First Law (Inertia)\r
\r
## Ideal model\r
\r
The ideal model in this leaf describes situations where external resultant [[F_net]] is zero or zero-compatible within an explicit tolerance. It does not claim that every force disappears. It claims that external contributions balance each other at the precision level that matters for the question.\r
\r
Under this condition, [[a]] is treated as null and [[v]] as conserved in time. This gives a compact causal reading: no net cause, no change of state. The model is intentionally minimal because its main educational value is causal clarity, not algebraic complexity.\r
\r
## Hypotheses\r
\r
The model relies on explicit hypotheses:\r
\r
1. The reference frame is inertial at the relevant time and length scales.\r
2. The analyzed system boundary is clear, so external and internal interactions are not mixed.\r
3. Unmodeled disturbances remain below declared tolerance.\r
4. Velocity measurement has enough resolution to detect meaningful drift.\r
\r
If any hypothesis breaks, first-law interpretation can become misleading even if equations look formally correct.\r
\r
## Quantitative validity domain\r
\r
Operational thresholds are required to avoid decorative use of the model:\r
\r
1. Resultant threshold: |[[F_net]]| less than or equal to 0.05 N over the main observation window in a tabletop setup.\r
2. Acceleration threshold: |[[a]]| less than or equal to 0.02 m/s^2 sustained for at least 5 s.\r
3. Velocity stability threshold: relative drift of [[v]] below 2 percent over the selected interval.\r
\r
If all three are satisfied, inertial reading is robust for this leaf. If one threshold is exceeded in persistent form, move to a nonzero-resultant model.\r
\r
## Model failure signals\r
\r
Typical failure indicators are:\r
\r
1. Sustained acceleration trend outside noise band.\r
2. Cumulative velocity drift larger than accepted tolerance.\r
3. Trajectory curvature requiring lateral resultant not included in the ideal setup.\r
4. Persistent mismatch between inertial prediction and measured behavior.\r
\r
These signals do not invalidate physics; they indicate that the selected model class is no longer sufficient.\r
\r
## Extended or alternative model\r
\r
When failure appears, the standard extension is second-law treatment with explicit nonzero resultant and dissipation terms. In many practical cases, adding effective friction is enough. In other cases, velocity-dependent drag or time-varying external forcing must be included.\r
\r
A good workflow records the trigger for model switch, the threshold exceeded, and the expected gain in predictive quality.\r
\r
## Operational comparison\r
\r
The ideal model gives speed and causal transparency for identifying conserved motion state. The extended model gives higher precision when disturbances are no longer negligible. The correct strategy is not loyalty to one model, but disciplined switching based on data.\r
\r
In education, this progression trains scientific judgment. In engineering, it supports robust decisions under uncertainty and clear traceability from measurement to action.\r
`;export{e as default};
