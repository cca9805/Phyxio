const e=`# Physical models: Introduction to Non-Inertial Frames\r
\r
## Ideal model\r
\r
The baseline model assumes classical mechanics, explicit axis conventions, and frame motion described through translation acceleration and/or rotation. Dynamic consistency is restored by combining real interactions with inertial correction terms.\r
\r
Core idealizations:\r
\r
- Point-mass treatment when body size does not affect force balance.\r
- Approximately constant frame parameters over each analysis window.\r
- Thermal, elastic, and aerodynamic effects included only when first-order.\r
- No relativistic or quantum corrections.\r
\r
## Hypotheses\r
\r
1. [[F_real]] includes all physically identifiable interactions.\r
2. [[a_marco]] and [[omega]] correctly represent frame motion relative to an inertial reference.\r
3. [[r]] and [[v_rel]] are measured with a stable sign convention.\r
4. [[m]] is effectively constant during the selected time segment.\r
5. [[system_classification]] is updated consistently with measured behavior.\r
\r
## Quantitative validity domain\r
\r
Simple translational treatment is usually reliable under these bands:\r
\r
- abs([[a_marco]]) <= 0.001 m/s^2: local inertial approximation is often acceptable.\r
- abs([[a_marco]]) >= 0.01 m/s^2: explicit non-inertial modeling is recommended.\r
\r
In rotating contexts, centrifugal contribution grows with [[omega]] and [[r]], while Coriolis relevance grows with [[omega]] and [[v_rel]].\r
\r
Operational quality rule:\r
\r
- error_relativo <= 10%: baseline model accepted.\r
- error_relativo > 10%: switch to extended model.\r
\r
## Model failure signals\r
\r
- Persistent residual mismatch in predicted [[a_rel]].\r
- Systematic trajectory bias unexplained by current term inventory.\r
- Unstable output under tiny input changes.\r
- Contradiction between declared frame class and magnitude of inertial corrections.\r
\r
## Extended or alternative model\r
\r
When thresholds fail, a structured escalation is required:\r
\r
1. Include full rotational terms with component-level resolution.\r
2. Add coupled dynamics if geometry and constraints demand it.\r
3. Introduce dissipative or deformable effects if residuals remain significant.\r
\r
Explicit transition condition:\r
\r
- If error_relativo > 10% in two or more consecutive windows, change model immediately.\r
\r
This explicit transition statement prevents silent model misuse.\r
\r
## Operational comparison\r
\r
| Aspect | Baseline model | Extended model |\r
|---|---|---|\r
| Purpose | Fast diagnosis | High-fidelity prediction |\r
| Cost | Low | Medium to high |\r
| Data demand | Moderate | High |\r
| Typical use | Teaching, preliminary design, fast control loops | Certification, final validation, critical analysis |\r
\r
The recommended workflow is sequential: master the baseline model first, then escalate using quantitative evidence rather than intuition.\r
\r
In practice, model choice should be logged window by window, not once per full experiment. The same platform can move between near-inertial and strongly non-inertial behavior as maneuver profiles change.\r
\r
A useful implementation pattern is a four-column traceability table: declared frame state, active term set, observed residual, and model decision. This keeps interpretation auditable and aligns simulation, sensing, and validation teams around the same decision logic.\r
\r
Without that traceability layer, teams often misclassify model errors as sensor defects or controller faults. With it, root-cause isolation becomes faster and less ambiguous.\r
`;export{e as default};
