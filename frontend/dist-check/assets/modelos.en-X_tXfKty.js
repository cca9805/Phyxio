const e=`# Physical models: Spring Systems\r
\r
## Ideal model\r
\r
The ideal model treats the system as a network of linear springs with negligible spring mass and negligible dominant dissipation. In this regime, topology is captured through equivalent stiffness [[keq]], derived from branch constants [[k1]] and [[k2]].\r
\r
The model purpose is operational clarity: compute global response [[Fel]] or [[Fm]], branch distribution, and vertical sink [[x_eq]] when needed.\r
\r
## Hypotheses\r
\r
Operational assumptions:\r
\r
- [[k1]] and [[k2]] remain approximately constant in the working interval.\r
- Force-deformation behavior is linear for each branch.\r
- Series/parallel constraints are correctly implemented by the mechanism.\r
- No dominant backlash or friction distorts branch distribution.\r
- In vertical setups, [[g]] is treated as uniform and [[m]] is known.\r
\r
## Quantitative validity domain\r
\r
The linear network model is defensible when conditions such as these are simultaneously satisfied:\r
\r
- Branch stiffness drift below 10% in the operating interval.\r
- High-quality linear fit in force-deformation data over the used range.\r
- Mean model-measurement error below 5% for nominal loads.\r
- Internal closure consistency: in series [[x]] close to [[x1]] + [[x2]], and in parallel [[Fm]] close to [[F1]] + [[F2]].\r
- Static sink [[x_eq]] remains within safe available stroke.\r
\r
If one or more criteria fail, the ideal model should not be trusted for final design decisions.\r
\r
## Model failure signals\r
\r
Typical failure indicators:\r
\r
- Visible hysteresis in load-unload cycles.\r
- Response drift after a small number of cycles.\r
- Strong sensitivity to assembly tolerances.\r
- Branch-level predictions inconsistent with local measurements.\r
- Repeated need for unexplained empirical correction factors.\r
\r
## Extended or alternative model\r
\r
When the ideal model breaks, transition to:\r
\r
- Piecewise effective stiffness models.\r
- Viscoelastic models for time-dependent response.\r
- Dissipative cycle-aware formulations.\r
- Direct empirical network calibration curves.\r
\r
Explicit transition rule: if operational error thresholds are exceeded or internal closure checks fail, switch model class and recalibrate parameters.\r
\r
## Operational comparison\r
\r
| Aspect | Ideal linear network | Extended model |\r
|--------|----------------------|----------------|\r
| Parameters | Constant [[k1]], [[k2]], [[keq]] | State-dependent parameters |\r
| Internal split | Closed-form algebraic | History/nonlinearity dependent |\r
| Computational cost | Low | Medium to high |\r
| Best use | Preliminary design and quick checks | Final validation and out-of-range cases |\r
| Traceability | High and direct | High with proper calibration |\r
\r
Use the ideal model first for speed and clarity, then escalate only when evidence requires it.\r
\r
In engineering practice, this transition should be planned before tests start. If threshold criteria are agreed in advance, changing model class is a technical step instead of a subjective debate. That improves schedule predictability and avoids redesign loops caused by late disagreements.\r
\r
A second practical rule is to distinguish numerical error from decision error. A model may show a small numerical drift and still be acceptable for a coarse screening decision. In contrast, the same drift can become unacceptable if it changes safety margins or durability estimates. Declaring that distinction explicitly makes model selection more rigorous.\r
`;export{e as default};
