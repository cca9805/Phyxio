const e=`\uFEFF# Physical models for classic rolling examples\r
\r
## Ideal model\r
The ideal model assumes point contact with no slip, rigid body behavior, and constant effective radius. Under these hypotheses,\r
\r
{{f:condicion_rodadura}}\r
\r
fully links translation and rotation for kinematic analysis. Its main strength is clarity: with few magnitudes, one obtains a direct prediction that is easy to test.\r
\r
This model works well for baseline exercises, quick sensor validation, and order-of-magnitude checks. It also provides a clean reference for identifying deviations in real systems. When data remain close to the ideal relation, local prediction and interpretation are both robust.\r
\r
Its limitation is explicit: it does not represent deformation, hysteresis, or variable adhesion. That is why a coherence indicator such as [[delta]] is required.\r
\r
## Hypotheses\r
The example assumes that [[v]], [[n]], and [[R]] describe the same time window, that the effective radius can be treated as constant, and that conversion from rpm to rad/s is performed before evaluating coherence. It also assumes that comparing sensor channels is more important here than resolving microscopic contact mechanics.\r
\r
## Quantitative validity domain\r
A practical quantitative criterion in this leaf is abs([[delta]]) <= 0.5 m/s for near-pure rolling in medium-speed educational setups. Values between 0.5 and 1.0 m/s are treated as non-ideal but still informative. Values above 1.0 m/s require model or measurement review before action.\r
\r
Thresholds are context dependent and should be adjusted when sensor resolution, speed range, or surface conditions change. Even so, explicit numeric limits are essential to avoid subjective classification.\r
\r
A second hard condition is [[R]] > 0. Without positive radius, geometric interpretation of the rolling relation is invalid.\r
\r
## Model failure signals\r
A typical failure signal is persistently large residual after units and timing have been verified. This suggests operation outside near-pure rolling assumptions. Another signal is excessive output sensitivity to small input perturbations, often linked to poor calibration.\r
\r
A further warning appears when rpm conversion yields angular speed incompatible with plausible mechanical constraints. In such cases, data acquisition or metadata interpretation may be wrong.\r
\r
When these signals appear, the ideal model should be downgraded from decision mode to exploratory mode.\r
\r
## Extended or alternative model\r
The extended model keeps the base equation but introduces tolerance bands and diagnostic rules. Instead of demanding exact equality, it evaluates abs([[delta]]) against a scenario threshold. This extension acknowledges realistic noise and micro-slip.\r
\r
It also enforces explicit conversion from rpm to rad/s as a preprocessing stage. Without this stage, calculations may be algebraically correct yet physically mis-scaled. In implementation terms, the extended model separates computation, validation, and interpretation actions.\r
\r
As a result, outputs become operational objects: value plus coherence state, warning level, and recommended next step. When to switch to the alternative model? Switch when the residual [[delta]] exceeds the setup threshold, when unit conversion does not resolve disagreement, or when the example stops being a quick validation and starts requiring full dynamic detail.\r
\r
## Operational comparison\r
Compared with the ideal model, full dynamic models with speed-dependent friction better describe transients and losses, but they demand more parameters and richer datasets. For fast diagnostics and teaching workflows, that extra complexity is not always justified.\r
\r
Purely statistical models can detect failure patterns effectively, yet often lose direct physical interpretability. The recommended strategy in this leaf is hybrid: keep a physics core and use data-driven tools as support layers.\r
\r
This balance preserves transparency while improving robustness in practical contexts.`;export{e as default};
