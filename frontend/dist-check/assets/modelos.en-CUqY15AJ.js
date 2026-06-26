const e=`# Physical models: Weight in Different Contexts\r
\r
## Ideal model\r
\r
The ideal model in this leaf combines a near-surface gravity approximation with a one-axis accelerated-frame description for support readings. The goal is to separate real gravity from apparent weight without introducing unnecessary complexity at the first stage.\r
\r
Core simplifications are:\r
\r
- [[m]] is treated as invariant during the process.\r
- [[g0]] is treated as locally constant in small altitude ranges.\r
- Geometry is represented with [[R]], [[h]], and [[r]] depending on scale.\r
- Support reading is associated with [[N]] and [[Pap]] when contact exists.\r
\r
This is not a fake model; it is a controlled approximation with explicit limits.\r
\r
## Hypotheses\r
\r
Operational hypotheses to state before solving:\r
\r
- Local-field hypothesis: when [[h]] is small compared with [[R]], [[g0]] is acceptable.\r
- Central-field hypothesis: for larger scales, use [[G]], [[M]], and [[r]].\r
- Contact hypothesis: [[Pap]] and [[N]] are meaningful only with mechanical support.\r
- Axis hypothesis: in elevator-like problems, frame acceleration [[a]] is modeled along the gravity axis.\r
\r
If any hypothesis fails, model confidence decreases sharply.\r
\r
## Quantitative validity domain\r
\r
Recommended quantitative criteria:\r
\r
- Local regime: abs([[h]]) <= 0.02*[[R]].\r
- Central regime: if [[h]] > 0.02*[[R]], use [[r]] = [[R]] + [[h]] and central-field equations.\r
- Physical domain baseline: [[m]] > 0, [[R]] > 0, [[r]] > 0.\r
- Gravity coherence: for [[h]] >= 0, expected [[gmod]] <= [[g0]].\r
- Support coherence: with stable contact, [[Pap]] >= 0 and linked to [[N]].\r
\r
Explicit transition rule: when to switch to an alternative model. If abs([[h]]) <= 0.02*[[R]] is no longer valid, or if the difference between local and central predictions exceeds tolerated uncertainty, switch from the local model to the central model.\r
\r
## Model failure signals\r
\r
Observable failure indicators include:\r
\r
- Prediction differs from measurement by more than about 5 to 10 percent repeatedly.\r
- Expected sign or trend is violated, such as nonphysical behavior for [[Pap]] or [[gmod]].\r
- Small input changes create implausibly large output jumps.\r
- The result violates instrument or domain constraints.\r
\r
When these indicators appear, rechecking arithmetic is not enough; hypotheses must be revisited.\r
\r
## Extended or alternative model\r
\r
The natural extension is full central-field gravity, plus richer support dynamics when quasi-static assumptions fail. Technical settings may also require rotation effects, nonspherical geometry, or instrument calibration terms.\r
\r
Practical criterion: if relative discrepancy between two models exceeds 5 percent in the decision variable, the extended model is no longer optional.\r
\r
## Operational comparison\r
\r
| Aspect | Ideal model | Alternative model |\r
|--------|-------------|-------------------|\r
| Dominant variable | [[g0]] and local environment | [[G]], [[M]], [[r]] |\r
| Spatial scale | Near-surface | Regional or orbital |\r
| Computational cost | Low | Medium to high |\r
| Sensitivity to [[h]] | Low first-order | Explicitly high |\r
| Validity limit | abs([[h]]) <= 0.02*[[R]] | Requires reliable geometric data |\r
\r
Mastering the switch criterion between these two models is one of the main learning outcomes of this leaf.\r
`;export{e as default};
