const e=`# Physical models: Free-Body Diagrams\r
\r
## Ideal model\r
\r
The ideal model in this leaf assumes classical mechanics, a clearly isolated system, and externally applied interactions that can be mapped to explicit force agents. The focus is not to reproduce every material detail, but to construct a reliable force map for axis projection and motion interpretation.\r
\r
Baseline assumptions:\r
\r
- The body is approximated as a particle or rigid body at the chosen scale.\r
- Relevant external forces are represented by [[P]], [[N]], [[T]], and friction terms [[fs]] or [[fk]].\r
- Mass [[m]] is positive and constant over the analysis interval.\r
- Gravitational acceleration [[g]] is treated as uniform.\r
\r
## Hypotheses\r
\r
1. Isolation hypothesis: only external forces with explicit physical source are included.\r
2. Axis-consistency hypothesis: one sign convention is kept through all projections.\r
3. Regime hypothesis: static and kinetic friction formulas are not mixed without a declared transition event.\r
4. Geometric hypothesis: [[theta]] is defined unambiguously before using [[Ppar]] and [[Pperp]].\r
\r
If any hypothesis fails, the free-body structure is still useful, but the constitutive layer must be extended.\r
\r
## Quantitative validity domain\r
\r
The model is reliable when measurable checks hold:\r
\r
- Axis-balance coherence: |[[Fy]]| <= 0.05*|[[P]]| in non-liftoff support cases.\r
- Static regime consistency when [[fs]] <= [[mu_s]]*[[N]].\r
- Kinetic regime consistency when [[fk]] = [[mu_k]]*[[N]] with [[mu_k]] >= 0.\r
- Dynamic coherence when |[[Fx]] - [[m]]*[[ax]]| remains within measurement tolerance.\r
\r
Explicit transition criteria:\r
\r
- If tangential demand exceeds static bound, switch from [[fs]] model to [[fk]] model.\r
- If [[N]] approaches zero, reassess contact assumptions and drop simple vertical-equilibrium closure.\r
\r
## Model failure signals\r
\r
- Predicted signs for [[ax]] or [[ay]] repeatedly contradict observations.\r
- Computation requires negative [[N]] in ordinary support contact.\r
- Small parameter changes in [[theta]] or [[mu_s]] produce unrealistic jumps.\r
- The analysis toggles between static and kinetic assumptions without a clear trigger.\r
\r
## Extended or alternative model\r
\r
When the base model is insufficient, extension can be layered:\r
\r
1) State-dependent contact and friction behavior.\r
2) Nonlinear friction including hysteresis effects.\r
3) Transient dynamics for impact and vibration conditions.\r
4) Support deformation effects that redistribute [[N]].\r
\r
Recommended escalation trigger:\r
\r
- Upgrade the model when axis-balance error stays above tolerance across repeated trials after force-map and unit checks are already validated.\r
\r
## Operational comparison\r
\r
| Aspect | Base FBD model | Extended model |\r
|---|---|---|\r
| Goal | Force traceability and axis balances | Nonlinear and transient fidelity |\r
| Data demand | Low to medium | Medium to high |\r
| Computational cost | Low | Medium or high |\r
| Interpretability | Very high | Medium |\r
| Best use | Teaching and first-line diagnostics | Fine validation and edge incidents |\r
\r
Recommended strategy is hierarchical: start with a clean base free-body model, then escalate only when empirical evidence requires additional complexity.\r
`;export{e as default};
