const e=`# Models for resistors in parallel\r
\r
## Ideal model\r
The ideal model treats each branch as a linear resistor connected across two common nodes. Under this representation, branch voltage [[V]] is shared, while branch-current values follow local branch resistance. This is the preferred model for conceptual learning, first-pass design, and fast trend validation.\r
\r
Key strength is transparent causality: lower branch resistance implies higher branch current under fixed common voltage. This representation also enables quick checks of [[Req]] and [[It]] trend consistency when branches are added or removed.\r
\r
## Hypotheses\r
The ideal model relies on explicit hypotheses. Branches are predominantly resistive, operation is quasi-steady, common nodes do not accumulate net charge, and resistive behavior remains approximately linear in the operating thermal window. The framework also assumes wiring drops are small relative to branch voltage.\r
\r
These hypotheses are not optional narrative. They define when model outputs can be trusted for engineering decisions.\r
\r
## Quantitative validity domain\r
The ideal model is usually accepted when explicit criteria hold. Typical examples are error_relativo <= 0.05 between measured and predicted branch currents, caida_en_cable / V <= 0.03 in each branch, and variacion_termica_resistencia <= 0.10 during steady operation.\r
\r
When those bounds are violated, ideal equations may still support qualitative trend reading, but they become weak for protection tuning and reliable fault localization.\r
\r
## Model failure signals\r
A common failure signal is systematically higher measured [[It]] than predicted. Another signal is branch-current redistribution with temperature while [[V]] remains stable. A third signal is unexpected heating in a branch assumed to be secondary.\r
\r
When such signals appear, forcing ideal assumptions usually delays root-cause identification.\r
\r
## Extended or alternative model\r
The extended model preserves nodal closure but introduces non-idealities: wiring resistance, component tolerance spread, thermal drift, and possible branch nonlinearity. Field-oriented versions may also include contact resistance and source sag under demand.\r
\r
This is not complexity for its own sake. A controlled model escalation appears only when operational decisions require better predictive fidelity.\r
\r
## Operational comparison\r
Ideal model:\r
- Faster for architecture checks and trend reasoning.\r
- Lower parameterization effort.\r
\r
Extended model:\r
- Better for persistent mismatch diagnosis.\r
- Better for thermal protection and reliability decisions.\r
\r
When to switch models:\r
Switching to an extended model is justified when measured mismatch changes safety margins, source selection, or maintenance priority. If mismatch does not alter operational decisions, ideal representation remains practical.\r
\r
A quantitative trigger can be documented to standardize escalation. Teams often require 0.95 <= I_model/I_measured <= 1.05 in each active branch for ideal-model acceptance. Another practical bound is 1e-3 <= R_wiring/[[R1]] <= 3e-2 when wiring effects are neglected in first-pass analysis. Declaring those bounds explicitly improves reproducibility across reviewers and avoids model switching based on subjective preference.`;export{e as default};
