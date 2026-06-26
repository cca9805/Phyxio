const e=`# Physical models: Linear Drag\r
\r
## Ideal model\r
\r
The ideal model in this leaf assumes that fluid resistance can be represented by a direct proportionality between [[F_d]] and [[v]] within a specific operating window. This simplification is useful because it keeps dynamic reasoning tractable and supports fast calibration from measurements.\r
\r
Main simplifications:\r
\r
- The force-speed relation is approximately linear in the interval of interest.\r
- Parameter [[b]] can be treated as constant during the analyzed process.\r
- Effective body geometry does not change significantly.\r
- The medium remains sufficiently stable in properties that affect [[b]].\r
\r
This model is not "less physical" because it is simple. It is physical because it states assumptions explicitly and performs well when those assumptions hold.\r
\r
## Hypotheses\r
\r
Operational hypotheses:\r
\r
- Reference hypothesis: [[v]] is defined relative to the fluid, not to an arbitrary frame.\r
- Constitutive hypothesis: [[F_d]] depends linearly on [[v]] in the studied range.\r
- Effective-parameter hypothesis: [[b]] summarizes medium and geometry in that range without abrupt drift.\r
- Dynamic hypothesis: [[m]] remains constant, so [[tau]] keeps a coherent time-scale meaning.\r
\r
If any of these hypotheses fails, linear interpretation may lose explanatory and predictive power.\r
\r
## Quantitative validity domain\r
\r
For educational and early engineering use, the model should be validated with explicit quantitative criteria:\r
\r
1. High-quality linear fit of the [[F_d]]-[[v]] data in the working interval.\r
2. Small relative variation of estimated slope ([[b]]) under repeat conditions.\r
3. Mean relative prediction error below the threshold accepted for the application.\r
4. Full dimensional and sign consistency across processed data.\r
\r
A practical rule in class and lab is to accept the linear model when relative error in the main interval remains below about 10% and residuals show no systematic curvature. If error grows and curvature appears, the issue is not rounding noise; the dominant mechanism is likely changing.\r
\r
## Model failure signals\r
\r
Observable failure signals:\r
\r
- The apparent slope of [[F_d]]-[[v]] stops being stable.\r
- The same [[b]] cannot explain different subranges of [[v]].\r
- Estimated [[tau]] changes inconsistently between nominally equivalent tests.\r
- Conclusions depend more on numeric fitting than on physical mechanism.\r
\r
When these signals appear, the correct action is not to force the same formula. The correct action is to declare a validity limit and prepare model transition.\r
\r
## Extended or alternative model\r
\r
The natural alternative is a nonlinear drag description when simple proportionality no longer captures measurements. In that scenario, resistive force grows faster with speed and cannot be summarized by one constant [[b]].\r
\r
A piecewise approach can also be used: a linear segment at lower speeds and a nonlinear segment at higher speeds, with a clear switching criterion.\r
\r
## Operational comparison\r
\r
| Aspect | Linear model | Nonlinear or piecewise model |\r
|--------|--------------|------------------------------|\r
| [[F_d]]-[[v]] relation | Proportional | Noticeable curvature |\r
| Dominant parameter | Nearly constant [[b]] | Effective parameters vary |\r
| Complexity | Low | Medium to high |\r
| Fast interpretation | Strong | Needs more context |\r
| Extrapolation risk | High outside range | Lower if calibrated correctly |\r
\r
Explicit transition to an alternative model is recommended when linear-fit stability is lost in the target range, when systematic error exceeds the accepted threshold, or when a single slope no longer represents data with physical honesty.\r
\r
In short, the linear model is excellent for first-pass interpretation, calibration, and time-scale reading through [[tau]]. Its strength depends on respecting its domain and activating model transition as soon as failure signals appear.`;export{e as default};
