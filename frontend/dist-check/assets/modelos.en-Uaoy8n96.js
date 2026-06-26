const e=`# Models and validity in critical damping\r
\r
## Ideal model\r
\r
The ideal model in this leaf represents a linear second-order oscillator with equivalent viscous dissipation. The defining feature is not merely the presence of damping, but the fact that effective damping matches the critical threshold separating two qualitatively different responses: oscillatory underdamped behavior and non-oscillatory overdamped behavior. At this boundary, the system returns to equilibrium rapidly without sustained oscillation.\r
\r
This ideal model is useful because it supports design trade-offs between speed and overshoot suppression. In engineering practice, it guides tuning decisions that avoid both slow overdamped recovery and residual oscillations typical of underdamped settings.\r
\r
## Hypotheses\r
\r
1. Second-order linear dynamics are valid in the studied amplitude range.\r
2. Dissipation can be represented by an equivalent constant parameter [[gamma]] during the analysis interval.\r
3. Effective mass and stiffness parameters define [[omega0]] without abrupt variation in the relevant time window.\r
4. Initial conditions are well-defined, with response scale captured by [[A]].\r
5. No dominant external forcing acts during the main transient.\r
\r
If any hypothesis is violated, critical-regime interpretation must be revised.\r
\r
## Quantitative validity domain\r
\r
The model is considered operational when criteria such as the following are satisfied:\r
\r
- Critical proximity: abs([[gamma]]-[[omega0]]) <= 0.05*[[omega0]].\r
- Sufficient observation horizon: [[t]] >= 3*[[tau]] to verify settling behavior.\r
- Initial-scale coherence: [[A]] remains inside a linear-response range (for example, relative deformation <= 10 percent of useful geometric scale).\r
- Limited parameter drift: relative variation of [[omega0]] <= 5 percent during the test.\r
\r
These thresholds are not universal constants; they are practical decision rules to determine whether the model remains predictively useful.\r
\r
## Model failure signals\r
\r
1. The [[x]] curve exhibits sustained oscillation when the model predicts monotonic decay.\r
2. Estimated [[tau]] changes strongly with small modifications of observation window.\r
3. Data fitting requires physically inconsistent values of [[gamma]] or [[omega0]].\r
4. Response depends strongly on initial amplitude where linearity was assumed.\r
5. The critical criterion is not stable across nominally equivalent experiments.\r
\r
When these signals appear, refining arithmetic alone is insufficient; physical assumptions must be rechecked.\r
\r
## Extended or alternative model\r
\r
If the system leaves the ideal domain, two common extensions are used:\r
\r
- A nonlinear damping model, when dissipation depends on velocity or amplitude in a non-proportional way.\r
- A forced model, when external excitation dominates part of the transient and alters simple classification by [[gamma]] and [[omega0]].\r
\r
A time-varying-parameter model may also be required when environment conditions change (temperature, load, contact), causing significant drift in [[gamma]].\r
\r
## Operational comparison\r
\r
Ideal critical model:\r
- Advantage: simple interpretation and fast design iteration.\r
- Cost: can underestimate nonlinear or externally forced effects.\r
- Recommended use: early design, basic control, first-pass validation.\r
\r
Extended model:\r
- Advantage: higher fidelity under nonlinearity or relevant external excitation.\r
- Cost: more parameters and stronger calibration requirements.\r
- Recommended use: final validation, variable operating conditions, robustness assessment.\r
\r
Explicit transition rule: when to switch models is when abs([[gamma]]-[[omega0]]) > 0.05*[[omega0]] persistently or when [[x]] shows overshoot/oscillation incompatible with critical assumptions. In that case, keeping the ideal model leads to misleading conclusions even if internal algebra appears consistent.\r
`;export{e as default};
