const e=`# Physical models: Reynolds Number and Drag Regimes\r
\r
## Ideal model\r
\r
The ideal model in this leaf does not compute drag force directly. Its primary function is to diagnose the flow regime through [[Re]] and then select the most coherent drag-model block. This separation prevents a common mistake: applying a force law before validating whether its regime assumptions are satisfied.\r
\r
Under this model, the scene is represented by a characteristic length [[L]], a relevant relative speed [[v]], and a viscous property of the medium ([[eta]] or [[nu]]). With these inputs, [[Re]] is estimated and interpreted as viscosity-dominant, inertia-dominant, or transitional behavior.\r
\r
## Hypotheses\r
\r
The model rests on explicit assumptions:\r
\r
1. The selected [[L]] truly represents the dominant geometric scale.\r
2. The chosen [[v]] is the physically relevant relative speed for the interaction.\r
3. Medium properties ([[rho]], [[eta]], [[nu]]) match the actual thermodynamic state.\r
4. The objective is operational regime classification, not a full turbulence closure model.\r
\r
These assumptions are appropriate for preliminary model selection and scenario comparison.\r
\r
## Quantitative validity domain\r
\r
A practical reading framework is:\r
\r
- Zone A (viscosity-dominant): [[Re]] below about $10^2$ in simple external flow, or below about $2\\times 10^3$ in typical internal flow.\r
- Zone B (transitional): intermediate intervals where small changes in [[v]] or roughness can change flow organization.\r
- Zone C (inertia-dominant): [[Re]] above about $10^3$ in simple external flow, or above about $4\\times 10^3$ in typical internal flow.\r
\r
These values are modeling guides, not universal boundaries. Geometry and boundary conditions can shift them.\r
\r
## Model failure signals\r
\r
Regime-based selection starts failing when:\r
\r
1. Classification changes dramatically under minor, unjustified variations in [[L]].\r
2. The operational [[v]] band crosses regimes but a single drag block is still forced.\r
3. Predicted forces differ systematically from measurements by more than about 15%.\r
4. Medium properties are taken from conditions that do not match the actual test state.\r
\r
When these signals appear, improving decimals is not the solution; model architecture must be revised.\r
\r
## Extended or alternative model\r
\r
Model transition should be explicit:\r
\r
1. If operation stays in Zone A, prioritize a viscous-dominant linear drag block.\r
2. If operation stays in Zone C, prioritize an inertia-dominant nonlinear drag block.\r
3. If operation crosses Zone B, adopt a piecewise strategy or a validated transitional correlation.\r
\r
In practice, this may include roughness dependence, confinement effects, or range-specific effective coefficients.\r
\r
## Operational comparison\r
\r
| Aspect | Simple [[Re]]-based selection | Extended piecewise approach |\r
|---|---|---|\r
| Purpose | Fast regime diagnosis | Robust prediction over wide operation bands |\r
| Required data | [[v]], [[L]], [[eta]] or [[nu]] | Same data + experimental validation |\r
| Complexity | Low | Medium/High |\r
| Extrapolation risk | High in mixed zones | Lower when transitions are explicit |\r
| Recommended use | Preliminary estimation | Design and operation under variability |\r
\r
The main modeling lesson in this leaf is straightforward: [[Re]] guides the entry point, but reliable prediction requires stating when and why the model must switch.\r
`;export{e as default};
