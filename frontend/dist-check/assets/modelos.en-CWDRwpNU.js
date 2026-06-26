const e=`# Physical models: Hooke's Law\r
\r
## Ideal model\r
\r
The ideal model treats the spring as a linear elastic element with an effective constant stiffness [[k]] over the deformation interval of interest. The state variable is [[x]], and the constitutive response is [[Fel]] with restoring sign behavior. For intensity-only analysis, the magnitude [[Fm]] is used. For static vertical configurations, [[x_eq]] is linked to [[m]], [[g]], and [[k]].\r
\r
The purpose of this model is not microscopic material realism. Its purpose is a traceable and efficient constitutive law for first-order analysis.\r
\r
## Hypotheses\r
\r
The model relies on these explicit assumptions:\r
\r
- Elastic recoverable regime, with no plastic deformation in the operating window.\r
- Approximately linear dependence of [[Fel]] on [[x]] near the reference state.\r
- Stiffness [[k]] can be treated as constant in the chosen interval.\r
- Axis convention is clearly stated so restoring sign can be interpreted correctly.\r
- For vertical equilibrium, gravitational acceleration [[g]] is approximately uniform.\r
\r
## Quantitative validity domain\r
\r
As an operational guideline, linear Hooke behavior is defensible when conditions such as the following are satisfied simultaneously:\r
\r
- Bounded deformation: $|[[x]]| \\le 0.1\\,L_0$ for free length $L_0$.\r
- Stiffness stability: relative variation of [[k]] below 10% across the interval.\r
- Linear fit quality: R2 greater than 0.98 for [[Fel]] versus [[x]] data.\r
- Restoring consistency: [[Fel]]·[[x]] <= 0 under the selected sign convention.\r
- In vertical equilibrium, [[x_eq]] remains inside the experimentally characterized linear segment.\r
\r
When one or more criteria fail, model error can become systematic rather than random.\r
\r
## Model failure signals\r
\r
Typical failure indicators include:\r
\r
- Force-deformation loops with visible hysteresis under load-unload cycles.\r
- Drift of inferred [[k]] with deformation level.\r
- Predicted [[x_eq]] incompatible with physical geometry.\r
- Persistent model-measurement mismatch above instrumental uncertainty.\r
- [[Uel]] behavior inconsistent with stable elastic storage.\r
\r
## Extended or alternative model\r
\r
When linear assumptions fail, transition to an alternative formulation:\r
\r
- Piecewise stiffness model.\r
- Nonlinear constitutive law with linear and third-order terms.\r
- Hysteretic model for cyclic loading with dissipation.\r
- Viscoelastic model when time dependence is relevant.\r
\r
Explicit transition rule: if quantitative linearity criteria are not met, do not patch Hooke's law with arbitrary correction factors. Change the model and recalibrate parameters for the new regime.\r
\r
## Operational comparison\r
\r
| Aspect | Linear local Hooke model | Nonlinear/hysteretic alternative |\r
|--------|--------------------------|----------------------------------|\r
| Main parameter | [[k]] constant | Regime-dependent parameters |\r
| Input variable | [[x]] | [[x]] and loading history |\r
| Output law | [[Fel]] linear in [[x]] | [[Fel]] nonlinear or looped |\r
| Energy view | [[Uel]] quadratic | Possible dissipation |\r
| Best use | First-pass modeling and baseline calibration | Advanced validation and extended regimes |\r
\r
In practice, use the ideal model first for clarity and traceability, then switch when evidence shows linearity is no longer adequate.\r
`;export{e as default};
