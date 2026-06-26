const e=`# Modelos físicos: Newton's Second Law (Force, Mass, and Acceleration)\r
\r
## Ideal model\r
\r
The ideal model in this leaf describes systems with effectively constant [[m]] in an inertial frame, where [[F_net]] predicts [[a]] through Newton's second law. It does not assume total simplicity; it assumes non-dominant effects can be controlled within the target precision.\r
\r
Its value is both explanatory and predictive. If the model stops explaining trends or stops predicting measurements within tolerance, model upgrade is required.\r
\r
## Hypotheses\r
\r
Operational hypotheses:\r
\r
1. [[m]] remains constant over the analyzed interval.\r
2. The selected frame is inertial at working scales.\r
3. External-force identification is complete enough for the required accuracy.\r
4. Axis projections are coherent when using [[F_x]] and [[a_x]].\r
\r
These hypotheses must be explicit before numerical substitution.\r
\r
In practice, writing them as a pre-solution checklist is highly effective. It prevents context mistakes by forcing verification that problem framing matches model assumptions, not only equation shape.\r
\r
## Quantitative validity domain\r
\r
The model is reliable when explicit thresholds are satisfied:\r
\r
1. Dynamic consistency: ||[[F_net]] - [[m]]*[[a]]|| <= 0.10 N in bench-scale tests.\r
2. Axis consistency: |[[F_x]] - [[m]]*[[a_x]]| <= 0.05 N along the selected axis.\r
3. Parameter stability: relative variation of [[m]] < 1 percent in the observation window.\r
\r
When these three conditions hold, the base model keeps both explanatory clarity and predictive utility.\r
\r
It is also useful to define an overall relative-error acceptance band between prediction and measurement. For example, keeping error below 10 percent across repeated runs strengthens confidence for operational decisions.\r
\r
## Model failure signals\r
\r
Typical out-of-domain signals:\r
\r
1. Persistent prediction-measurement mismatch above 10 percent.\r
2. Parameter drift that breaks constant-mass assumption.\r
3. Velocity-dependent or coupled effects becoming dominant.\r
4. Sign inconsistency between projected force and projected acceleration.\r
\r
## Extended or alternative model\r
\r
When failure appears, the model can be extended with friction, drag, variable-mass terms, or coupling effects. Transition must be explicit: when to switch model is decided by persistent violation of at least one quantitative-domain threshold.\r
\r
This switching rule avoids two opposite mistakes: forcing a simple model beyond validity and over-complicating cases where the ideal model is still sufficient.\r
\r
## Operational comparison\r
\r
Ideal model: fast, interpretable, and strong for causal training and baseline problem solving.\r
\r
Extended model: higher precision and better behavior in dissipative or nonlinear scenarios.\r
\r
Professional practice is not model loyalty; it is evidence-based switching according to required accuracy and observed dynamics.\r
\r
Therefore this modeling block answers more than "how to compute." It answers "when to trust," "when to doubt," and "when to escalate." That triad turns second-law modeling into a diagnostic framework rather than a substitution habit.\r
`;export{e as default};
