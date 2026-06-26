const e=`# Physical models: Translation and Rotation\r
\r
## Ideal model\r
\r
This leaf uses a simplified baseline model based on explicit idealizations. The model is not wrong; it is intentionally reduced so it remains transparent and predictive inside a controlled validity range.\r
\r
Main idealizations:\r
\r
- Neglect friction and damping when they are second-order effects.\r
- Assume quasi-constant parameters over short operating windows.\r
- Treat transmission geometry as rigid and fixed.\r
- Ignore relativistic and quantum corrections in macroscopic classical regimes.\r
\r
Each idealization has measurable consequences. Good practice is not to avoid simplification, but to know when simplification is still acceptable.\r
\r
## Hypotheses\r
\r
The baseline model relies on these hypotheses:\r
\r
- Kinematic hypothesis: translation and rotation remain coupled through no-slip compatibility.\r
- Dynamic hypothesis: measured net torque [[tau_net]] drives angular acceleration [[alpha]] through inertia [[I]].\r
- Continuity hypothesis: state variables evolve continuously during the analyzed interval.\r
- Weak-coupling hypothesis: neglected effects do not dominate first-order response.\r
\r
If one of these hypotheses is violated, error tends to become systematic rather than random.\r
\r
## Quantitative validity domain\r
\r
The model performs well when the following quantitative criteria are satisfied:\r
\r
- [[tau_net]] > 0 under the selected sign convention and [[I]] > 0.\r
- Typical [[alpha]] range between 0 and 60 rad/s2 for laboratory-scale setups.\r
- Typical [[a]] range between 0 and 10 m/s2 for non-extreme translational systems.\r
- Relative prediction error lower than or equal to 10 percent in at least three repeated runs.\r
- Kinematic coherence error between measured [[a]] and [[alpha]]·[[R]] lower than 5 percent.\r
\r
Outside these ranges, neglected terms become comparable to dominant terms and predictive reliability degrades.\r
\r
## Model failure signals\r
\r
Model breakdown is usually visible through objective signals:\r
\r
- Prediction-measurement mismatch above tolerated thresholds.\r
- Excessive sensitivity to small parameter changes under nominal conditions.\r
- Physical inconsistency (wrong sign, impossible trend, contradictory constraints).\r
- Approximation collapse where neglected mechanisms become first-order contributors.\r
\r
## Extended or alternative model\r
\r
When baseline assumptions fail, the model must be upgraded with higher-order effects:\r
\r
- Friction and damping terms for systematic dissipation.\r
- Elastic compliance when deformation alters transmission behavior.\r
- Environmental losses such as drag or viscous interaction.\r
- Coupled subsystem dynamics when interaction is non-negligible.\r
\r
The extended model is more accurate but also more expensive in measurement, calibration, and interpretation.\r
\r
Explicit transition rule: if relative error stays above 10 percent for three consecutive equivalent measurements, or if coherence between [[a]] and [[alpha]]·[[R]] exceeds 5 percent, switch from the ideal model to the extended model.\r
\r
## Operational comparison\r
\r
| Aspect | Ideal model | Extended model |\r
|---|---|---|\r
| Precision | 90-95% | 98%+ |\r
| Complexity | Mostly algebraic | Differential and coupled forms |\r
| Resolution time | Minutes | Hours |\r
| Use case | Education, first-pass design | Validation, diagnostics, optimization |\r
| Environment | Controlled lab conditions | High-load real operation |\r
\r
Master the ideal model first. Upgrade deliberately only when evidence shows that ideal assumptions are no longer acceptable.`;export{e as default};
