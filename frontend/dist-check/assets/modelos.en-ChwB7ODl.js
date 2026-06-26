const e=`# Physical models: Typical Examples\r
\r
## Ideal model\r
\r
The ideal model in this leaf treats each scenario as circular motion with an identifiable dominant radial provider. Curvature demand is expressed with [[ac]] and [[Frad]], then mapped to the physical source: [[Tn]] for string motion, [[fs]] for flat curves, radial contribution of [[Nn]] for banking, contact condition at loop top, and gravity for orbital motion.\r
\r
Its value is not only computational speed. It provides causal structure across different contexts.\r
\r
## Hypotheses\r
\r
- Radius [[r]] is well defined in the analyzed segment.\r
- Speed [[v]] is representative of the operating regime.\r
- A dominant radial source can be identified in each case.\r
- Flat-curve grip is represented by effective [[mu]].\r
- Banking angle [[th]] is treated as stable design geometry.\r
\r
## Quantitative validity domain\r
\r
The model is reliable when:\r
\r
- [[r]] > 0 and [[m]] > 0 for radial-base use.\r
- [[mu]] > 0 in flat-curve adherence estimates.\r
- [[th]] remains in a realistic geometric range.\r
- Loop analysis explicitly checks top contact condition.\r
- Orbital case is close to circular with dominant central mass [[M]].\r
\r
Within this domain, the model is best used as a first-pass diagnostic and comparative tool. It is especially effective when the goal is to rank scenarios by radial stress, estimate margin trends, and communicate assumptions clearly across teams.\r
\r
A practical rule is to pair every computed value with a short validity statement: what was assumed constant, what was neglected, and what range of operation the estimate represents. This keeps the model physically interpretable and prevents false confidence.\r
\r
## Model failure signals\r
\r
- Persistent mismatch between prediction and measurement.\r
- Unphysical sensitivity to small input changes.\r
- Regimes outside assumptions (sustained skid, strong vibration, non-circular path).\r
- Output trends that contradict expected causal behavior.\r
\r
Additional warning signs include unstable calibration from one test day to another, or repeated need to retune parameters without a clear physical reason. Those patterns often indicate that omitted dynamics are no longer secondary.\r
\r
## Extended or alternative model\r
\r
When the ideal model no longer captures dominant behavior, use extended modeling:\r
\r
- Nonlinear tire and transient vehicle dynamics.\r
- Elastic and coupled oscillations in string systems.\r
- Multibody loop dynamics with structural effects.\r
- Perturbed orbital dynamics for space operations.\r
\r
### Explicit transition to an alternative model\r
\r
Switch models when ideal predictions stop being small-error approximations and become systematically misleading under real operating conditions.\r
\r
### When to change model\r
\r
If the safety or design decision depends on effects excluded by the ideal assumptions, changing to an alternative model is mandatory before issuing conclusions.\r
\r
## Operational comparison\r
\r
| Aspect | Ideal model | Extended model |\r
|---|---|---|\r
| Structure | Radial base plus typical-case law | Coupled high-fidelity dynamics |\r
| Cost | Low | Medium/high |\r
| Use | Learning and first diagnosis | Critical validation |\r
| Risk outside domain | High | Lower when calibrated |\r
\r
Best practice is sequential: master the ideal model, then escalate when the context requires higher fidelity.\r
`;export{e as default};
