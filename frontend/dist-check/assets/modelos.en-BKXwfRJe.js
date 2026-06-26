const e=`# Physical models: Definition and Mathematical Expression\r
\r
## Ideal model\r
\r
The baseline model combines two levels: local weight representation using [[P]] and [[Pmod]], and a near-uniform gravity assumption where [[gmod]] is treated as approximately constant over the working region.\r
\r
This model is effective for introductory mechanics, laboratory-scale analysis, and early engineering estimates.\r
\r
## Hypotheses\r
\r
- [[m]] is positive and location-invariant.\r
- The direction of [[P]] matches the direction of [[g]].\r
- In the uniform regime, [[gmod]] is approximately constant in the domain.\r
- In the central regime, gravity is approximated with spherical symmetry using [[G]], [[M_astro]], and [[r]].\r
\r
## Quantitative validity domain\r
\r
Uniform-field treatment is usually acceptable when:\r
\r
- relative_g_variation <= 0.02 over the region of interest,\r
- target_weight_error >= 0.01 in relative terms,\r
- radial changes remain small around the nominal reference,\r
- orbital-level precision is not required.\r
\r
Central-field treatment is preferable when:\r
\r
- relative_g_variation > 0.02,\r
- altitude or multi-planet comparisons are requested,\r
- required weight precision is tighter than 1 percent,\r
- [[r]] is an explicit driver of the physical question.\r
\r
## Model failure signals\r
\r
Typical failure signals:\r
\r
- [[Pmod]] estimates inconsistent with scenario scale.\r
- Repeated mismatch between computed and measured values.\r
- Directional inconsistency between [[P]] and the force diagram.\r
- Unexplained sensitivity of [[gmod]] to radial variation.\r
\r
## Extended or alternative model\r
\r
When uniform assumptions become insufficient, the central-field model is used with explicit radial dependence of [[gmod]] through [[G]], [[M_astro]], and [[r]].\r
\r
If higher fidelity is needed, geophysical or relativistic refinements can be considered according to scale and accuracy requirements.\r
\r
Explicit transition rule: when to switch model. If relative_g_variation exceeds 2 percent or repeated weight-error metrics exceed design tolerance, switch from uniform-field treatment to central-field treatment.\r
\r
This explicit transition to an alternative model should be treated as a methodological requirement, not as an optional refinement. When the physical question is no longer local and starts depending on radial geometry, staying with a uniform assumption can preserve algebraic simplicity while degrading decision reliability.\r
\r
## Operational comparison\r
\r
| Aspect | Uniform model | Central model |\r
|--------|---------------|---------------|\r
| Gravity variable | [[gmod]] constant | [[gmod]] depends on [[r]] |\r
| Complexity | Low | Medium |\r
| Required inputs | [[m]], [[gmod]] | [[m]], [[G]], [[M_astro]], [[r]] |\r
| Typical use | Introductory and local problems | Altitude and planetary comparisons |\r
| Main risk | Oversimplification | Unnecessary complexity |\r
\r
The best model is the simplest one that satisfies the required decision accuracy.\r
\r
For review quality, teams should record which trigger activated the model switch. That traceability makes results reproducible and helps distinguish arithmetic mistakes from model-selection mistakes.\r
\r
A concise model log with assumptions, trigger thresholds, and switch rationale is often enough to improve both technical clarity and peer-review speed.\r
`;export{e as default};
