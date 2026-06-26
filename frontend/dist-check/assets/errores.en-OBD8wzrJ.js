const e=`# Common mistakes: Reynolds Number and Drag Regimes\r
\r
## Conceptual errors\r
\r
### Error 1: Treating effect as cause\r
\r
Students often say that a high [[Re]] "creates" a large drag force by itself. That sounds plausible because [[Re]] correlates with regime changes, but it is conceptually wrong. [[Re]] is a regime indicator, not a force. The correct chain is: compute [[Re]], identify dominant mechanism, choose model block, then compute drag.\r
\r
### Error 2: Applying the formula without contextual validation\r
\r
The equation looks ready, data are available, and substitution seems enough. The hidden issue is that [[L]] and [[v]] may not represent the dominant physical scene. A correct numerical result can still be physically irrelevant if characteristic scales are poorly chosen.\r
\r
### Error 3: Mixing similar quantities\r
\r
[[eta]] and [[nu]] both describe viscosity-related behavior, so they are frequently mixed without dimensional control. This leads to inconsistent [[Re]] diagnosis and contradictory regime conclusions. Keep one coherent computational path and verify units at each step.\r
\r
## Model errors\r
\r
### Error 4: Not recognizing model breakdown\r
\r
If a model worked in one exercise, students tend to reuse it everywhere. But regime-based modeling can fail when the operating [[v]] band crosses transition zones. One-point agreement is not enough; robustness across the expected operation range is required.\r
\r
### Error 5: Ignoring known validity limits\r
\r
Threshold values are often remembered as universal laws. They are not. Regime boundaries depend on geometry and boundary conditions. Quoting a number without context is not a model argument.\r
\r
## Mathematical errors\r
\r
### Error 6: Careless algebraic rearrangement\r
\r
Algebra is treated as routine, and dependency directions are accidentally inverted. A quick sanity check helps: in a fixed medium, [[Re]] should increase with [[v]] and [[L]]. If your expression predicts the opposite trend, the derivation is likely wrong.\r
\r
### Error 7: Unit inconsistency\r
\r
Mixed unit systems can shift [[Re]] by orders of magnitude. The most common case is using [[L]] in mm while keeping [[v]] in m/s and viscosity in SI units. Standardize units before calculation.\r
\r
## Interpretation errors\r
\r
### Error 8: Reporting false precision\r
\r
Many decimals create a false impression of certainty. If medium properties and speed have uncertainty, [[Re]] should be reported with significant figures consistent with data quality.\r
\r
### Error 9: Stopping at the number\r
\r
A computed [[Re]] without physical interpretation is incomplete. Every solution should close with dominant mechanism, model consequence, and validity limit. Otherwise, the number cannot support a reliable engineering decision.\r
\r
## Quick self-control rule\r
\r
Use this checklist before accepting the result:\r
\r
- Is [[L]] physically justified for the geometry under study?\r
- Is [[v]] the relevant relative speed, not just a convenient value?\r
- Are viscosity units consistent along the full calculation chain?\r
- Does the [[Re]] reading explicitly lead to a model choice?\r
- Is a validity limit clearly stated?\r
\r
If one item fails, revise the solution before using it for prediction.\r
`;export{e as default};
