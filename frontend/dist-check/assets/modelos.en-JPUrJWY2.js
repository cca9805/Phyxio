const e=`# Modelos físicos: Kinetic Friction\r
\r
## Ideal model\r
\r
The ideal model assumes sliding is already active and that the kinetic coefficient can be treated as approximately constant over the selected interval. Under that assumption, tangential contact force is estimated with the kinetic-friction law and oriented opposite to relative velocity.\r
\r
This model is intentionally compact. It is excellent for first-order engineering prediction, provided its operating limits are respected.\r
\r
## Hypotheses\r
\r
Working hypotheses are:\r
\r
- Nonzero relative sliding is present.\r
- Normal load [[N]] is correctly identified for the dynamic configuration.\r
- [[mu_k]] is representative of the actual material pair and contact state.\r
- No severe thermal, lubrication, or roughness transition occurs in the analyzed window.\r
- Friction direction is assigned opposite to [[v_rel]].\r
\r
If any of these assumptions fails, prediction quality degrades in a systematic way.\r
\r
## Quantitative validity domain\r
\r
The model remains reliable when explicit quantitative criteria are met:\r
\r
- Relative drift of [[mu_k]] stays within 10% during the computation window.\r
- Interface temperature remains inside a controlled band (for instance, within 15 C of calibration conditions).\r
- Force-prediction error remains below or equal to 10% in repeated equivalent runs.\r
- Sliding regime is sustained, with no frequent stick-slip transitions.\r
\r
Outside these ranges, neglected effects become comparable to the dominant terms and constant-coefficient approximation loses reliability.\r
\r
## Model failure signals\r
\r
Observable failure indicators include:\r
\r
- Persistent growth of mismatch between measured and predicted tangential force.\r
- Strong speed dependence where constant behavior was assumed.\r
- Surface-state drift due to contamination, wear, or thermal changes.\r
- Directional inconsistency of [[fk]] during [[v_rel]] reversals.\r
\r
These signs do not invalidate contact physics, but they do invalidate the current parameterization.\r
\r
## Extended or alternative model\r
\r
When the ideal model fails, move to an extended formulation with state-dependent effective coefficient or piecewise calibration. For example, [[mu_k]] may be parameterized against temperature or [[v_rel]] bands.\r
\r
Explicit transition rule: switch to the alternative model when relative error exceeds 10% persistently in three equivalent runs, or when measured coefficient drift exceeds the validated band.\r
\r
This transition criterion makes model selection reproducible and auditable.\r
\r
## Operational comparison\r
\r
| Aspecto | Modelo Ideal | Modelo Extendido |\r
|---------|-------------|------------------|\r
| **Typical precision** | Good inside calibrated band | Better outside simple band |\r
| **Complexity** | Low | Medium to high |\r
| **Data requirement** | Low | High |\r
| **Best use** | Preliminary design and baseline control | Critical validation and fine optimization |\r
| **Interpretability** | High | Depends on parameterization |\r
\r
Best practice is staged: start with the ideal model, audit error, and switch only when quantitative criteria indicate that simplification is no longer acceptable.\r
`;export{e as default};
