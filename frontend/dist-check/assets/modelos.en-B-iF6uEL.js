const e=`# Physical Models: Static Friction\r
\r
## Ideal model\r
\r
The ideal model used in this leaf represents a dry contact in which two surfaces remain attached while the tangential demand does not exceed a maximum threshold. Within that framework, the static friction force [[fs]] is not assigned in advance. It adjusts up to a maximum value [[fsmax]] determined by [[mus]] and [[N]]. The purpose of the model is not to reproduce every microscopic detail of the interface, but to capture the macroscopic decision that matters most: does the system remain in adhesion, or does it enter sliding?\r
\r
This model is useful because it compresses a complicated reality into a small set of operational quantities and allows equilibrium, safety, and design questions to be answered quickly. It does not attempt to model each roughness peak, each local deformation, or each internal redistribution of pressure. Instead, it accepts those details as part of an effective behavior summarized by [[mus]].\r
\r
## Hypotheses\r
\r
The model relies on explicit assumptions:\r
\r
- The contact can be treated as dry and approximately homogeneous.\r
- The coefficient [[mus]] remains nearly constant over the studied load range.\r
- The normal force [[N]] is well defined and does not fluctuate violently.\r
- Local deformations stay small enough not to dominate the load distribution.\r
- The goal is to decide the static regime, not to describe the motion after sliding begins.\r
\r
If one or more of these assumptions fails, the model may still provide a first estimate, but it stops being a reliable basis for precise decisions.\r
\r
## Quantitative validity domain\r
\r
The model performs well when quantitative conditions such as the following are satisfied:\r
\r
- Relative variations of [[N]] smaller than about 10% during the analyzed interval.\r
- Effective changes in [[mus]] smaller than about 10% across repeated tests of the same material pair.\r
- A clear gap between demand and threshold, for example a margin larger than about 5% when one wants to assert adhesion confidently.\r
- A mismatch between prediction and measurement smaller than about 10% in simple laboratory setups.\r
\r
When the system operates very close to the threshold, a small error in [[mus]] or [[N]] may change the regime diagnosis. In that case the ideal model remains useful as a first reading, but the result should be treated as marginal rather than strongly robust.\r
\r
## Model failure signals\r
\r
There are observable signs that the simple model is no longer sufficient:\r
\r
- The calculation predicts adhesion, but the setup shows repeated micro-slip.\r
- Small vibrations modify the response much more than a minor change in [[N]] would justify.\r
- The effective value of [[mus]] extracted from similar tests fluctuates strongly, for example by more than 15%.\r
- The interface heats up, wears out, or changes texture during the experiment.\r
\r
These signals do not mean that the entire idea of static friction is wrong. They mean that a single effective parameter no longer summarizes the real interface physics well enough.\r
\r
## Extended or alternative model\r
\r
When the ideal model stops being sufficient, the correct next step is not to abandon the analysis but to change the level of description. One may move to a model with an explicit static-to-kinetic transition, introduce time dependence of the coefficient, account for vibration, or include elastic deformation of the contact.\r
\r
The explicit transition rule is this: if the comparison shows that [[Ft]] remains within about 5% of [[fsmax]] over sustained operation, or if repeated tests alternate between adhesion and micro-slip, it is better to switch from a pure static-threshold model to an extended model that resolves the onset of sliding more carefully. If sliding becomes sustained, then the current leaf should no longer be the main model; the analysis should move to the kinetic-friction leaf.\r
\r
## Operational comparison\r
\r
| Aspect | Ideal static model | Extended model |\r
|--------|--------------------|----------------|\r
| Central variable | Comparison between [[Ft]] and [[fsmax]] | Evolution of the contact near or after the threshold |\r
| Typical accuracy | Good when the margin is clear | Better near the transition |\r
| Complexity | Low | Medium or high |\r
| When to use it | Clearly attached contacts | Regimes close to sliding or with perturbations |\r
| Key decision | Does relative rest hold? | How and when does adhesion degrade? |\r
\r
The right strategy is to use the ideal model first to decide the regime quickly. If the problem sits near the boundary or the observation contradicts the calculation, then the model should be changed explicitly rather than being forced beyond its confidence range.\r
`;export{e as default};
