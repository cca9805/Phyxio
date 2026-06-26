const e=`# Physical models: Examples of Translational Equilibrium\r
\r
## Ideal model\r
\r
The baseline model compares three translational-equilibrium families: support contact, inclined-plane contact, and symmetric cable-node support. All are treated under quasi-static assumptions with force closure as the primary criterion.\r
\r
Main idealizations:\r
\r
- Dry contact represented by coefficient [[mu_s]].\r
- Ideal massless cables with uniform [[T]].\r
- Planar geometry with explicit [[alpha]] and [[theta]] conventions.\r
- Approximately constant local gravity [[g]].\r
\r
## Hypotheses\r
\r
1. The free-body diagram includes all relevant external forces.\r
2. Axis conventions remain consistent through the derivation.\r
3. Projection equations use a declared angular reference.\r
4. Translational acceleration is negligible in the equilibrium-classified example.\r
\r
If one hypothesis fails, cross-example comparison quality drops and conclusions become unstable.\r
\r
## Quantitative validity domain\r
\r
The model is considered operational when constraints such as the following hold:\r
\r
1. abs(sumFx) <= 0.02 * F_ref\r
2. abs(sumFy) <= 0.02 * F_ref\r
3. 0 <= [[alpha]] < 1.57 rad for non-vertical ramps\r
4. 0 < [[theta]] <= 1.57 rad for symmetric cable support\r
5. 0 <= [[mu_s]] <= 1.2 for typical dry-contact cases\r
\r
With F_ref roughly between 10 N and 1000 N, these thresholds separate acceptable closure from physically meaningful imbalance.\r
\r
## Model failure signals\r
\r
- Persistent force residuals after repeated measurements.\r
- Predicted [[T]] values incompatible with real cable limits.\r
- Geometrically impossible angle requirements for closure.\r
- Observation-model contradictions, such as sliding despite predicted sticking sufficiency.\r
\r
These indicators imply a model-limitation issue, not only an algebra issue.\r
\r
## Extended or alternative model\r
\r
When should you switch models? You should switch when the dominant mechanism is not represented by the current assumptions.\r
\r
Typical transitions:\r
\r
1. Add torque balance if rotation becomes relevant.\r
2. Move to dynamic friction models if acceleration appears.\r
3. Use elastic structural models if deformation is non-negligible.\r
\r
Explicit transition rule: when model change is appropriate, move to the model that captures the mechanism currently appearing as unexplained residual error.\r
\r
## Operational comparison\r
\r
| Aspect | Leaf baseline model | Extended model |\r
|--------|---------------------|----------------|\r
| Core closure | sumFx, sumFy | forces plus torques and dynamics as needed |\r
| Key variables | [[W]], [[N]], [[W_parallel]], [[F_s_max]], [[T]] | adds inertia, deformation, dissipation |\r
| Complexity | Low to medium | Medium to high |\r
| Best use case | Didactic diagnosis and comparison | Field and design validation |\r
| Misuse risk | Over-extrapolation | Unnecessary over-modeling |\r
\r
Mastering the baseline model is what enables informed escalation to richer physical descriptions.\r
\r
In practical teaching, this comparison table should be read as a decision map. If residual forces remain small and assumptions are verified, the baseline model provides fast and interpretable diagnosis. If residuals persist or observations contradict closure predictions, escalation is justified. The goal is not to abandon simple models early, but to use them transparently and switch only when physically required.\r
`;export{e as default};
