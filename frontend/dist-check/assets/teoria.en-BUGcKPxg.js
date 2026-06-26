const e=`# Linear Drag\r
\r
## Conceptual context\r
\r
This leaf develops a specific physical model: how resistive force appears when a body moves through a fluid and, within the operating range, grows in proportion to relative speed. The objective is not only numerical. It is a reading skill. We want to look at a [[F_d]]-versus-[[v]] plot and at a free-body diagram, then identify when linear drag is a valid description, what that linearity means, and how it changes physical decisions.\r
\r
The central quantity is [[F_d]], but it is meaningful only inside a network of related quantities. Parameter [[b]] summarizes body-fluid interaction in the linear regime. Quantity [[v]] defines the excitation level of the drag mechanism. Quantity [[m]] sets inertia. Quantity [[tau]] compresses the response time scale. This structure differentiates the leaf from its neighbors: here we do not classify all drag regimes and we do not yet close the full terminal-velocity problem. We build an operational interpretation of linear drag as a model with a clear domain.\r
\r
A common mistake is to treat this topic as an isolated formula. That approach fails because it erases validity criteria. The same body can show different behavior when fluid properties, speed scale, or effective geometry change. For that reason, this leaf keeps two ideas together: physical causality and model boundaries. Causality explains why [[F_d]] increases with [[v]]. Boundaries explain when the linear description should be retained and when a transition is required.\r
\r
## 🟢 Essential level\r
\r
At the essential level, we build robust intuition without algebraic overload. Consider three low-to-moderate-speed scenes:\r
\r
1. A small sphere falling in glycerin.\r
2. A bead moving through oil inside a transparent tube.\r
3. A light object moving through still air at modest speed.\r
\r
In all three scenes, increasing relative speed increases resistive force in an orderly way. That qualitative reading is the core of linear drag: more relative speed, more resistance, with approximately constant proportionality while regime conditions remain stable.\r
\r
The key didactic step is separating three ideas that students often mix:\r
\r
- [[F_d]] is not a driving force; it opposes relative motion.\r
- [[v]] must be defined relative to the fluid, not automatically relative to ground.\r
- [[b]] is not a universal object constant; it also depends on fluid state and flow context.\r
\r
With these clarifications, many errors disappear before any equation is written. A useful consequence also appears: two situations with the same [[v]] can produce different [[F_d]] if [[b]] is different. That explains everyday observations, such as why the same object is damped very differently in water and air.\r
\r
A second essential reading is temporal. Even before solving full differential equations, students should anticipate that not every system yields to drag at the same pace. A system with large [[m]] and small [[b]] adjusts slowly. A system with small [[m]] and large [[b]] adjusts quickly. This prepares the meaning of [[tau]] with minimal mathematical burden.\r
\r
The essential level should close with a control question: if relative speed doubles in the same medium for the same body, should we expect proportional growth in [[F_d]] or much stronger-than-proportional growth? In this leaf, inside its domain, proportional growth is expected. If data disagree, conditions must be reviewed rather than forcing the model.\r
\r
## 🔵 Formal level\r
\r
The formal level introduces two core equations and their operational meaning.\r
\r
The constitutive law for linear drag is:\r
\r
{{f:arrastre_lineal_estandar}}\r
\r
This expression is not an algebraic convenience. It states that the magnitude of [[F_d]] scales linearly with [[v]] while [[b]] remains approximately constant over the analyzed interval. Parameter [[b]] carries units N s/m and acts as the physical slope of the force-speed relation.\r
\r
The characteristic response time is modeled with:\r
\r
{{f:tiempo_relajacion_lineal}}\r
\r
This second relation combines inertia and dissipation. If [[m]] increases, [[tau]] increases. If [[b]] increases, [[tau]] decreases. Therefore [[tau]] is not a force and not a total travel time. It is a time-scale marker of how quickly the system adjusts under viscous resistance.\r
\r
A reliable formal workflow is:\r
\r
1. Define system, motion direction, and fluid reference.\r
2. Verify that [[v]] is relative speed to the medium.\r
3. Choose the target quantity: [[F_d]], [[b]], or [[tau]].\r
4. Substitute with coherent SI units.\r
5. Check dimensional consistency and physical plausibility.\r
\r
Dimensional checks are not cosmetic. If [[F_d]] is not obtained in N or [[tau]] not in s, the issue is not a small unit typo; it is a model break. Domain checks are also required: when solving for [[b]] or [[tau]], physically impossible values should not be accepted in ordinary dissipative settings.\r
\r
Graph reading provides an additional formal advantage. In an ideal linear regime, the [[F_d]]-[[v]] graph is a straight line through the origin. Its slope is [[b]]. This enables fast calibration from measurements and early regime-drift detection: if the curve departs from near-linearity in the working interval, linear drag may no longer be sufficient.\r
\r
Formal analysis also supports sensitivity reasoning. Small relative changes in [[b]] or [[v]] generate comparable relative changes in [[F_d]]. This property makes the model especially useful in early training because it connects intuition, graph interpretation, and computation without abrupt complexity jumps.\r
\r
## 🔴 Structural level\r
\r
The structural level answers the most important model question: when to trust the model and when to switch.\r
\r
Linear drag is valuable because it simplifies while preserving mechanism. Yet it does not claim universal validity across all flow scenarios. Its useful domain is the region where proportionality between [[F_d]] and [[v]] remains a good approximation over the operating window.\r
\r
Practical structural validity criteria:\r
\r
1. The experimental slope of the [[F_d]]-[[v]] relation is approximately constant in the interval of interest.\r
2. Effective body geometry does not change significantly during the measurement.\r
3. The medium does not change abruptly in ways that strongly modify [[b]].\r
4. Model-to-measurement error remains inside the accepted tolerance for the application.\r
\r
When one of these criteria fails, the correct strategy is not manual retuning to save the equation. The correct strategy is explicit model transition. In this context, a common transition is toward nonlinear drag descriptions once the force-speed curve shows systematic curvature.\r
\r
Boundary clarity with sibling leaves is also essential:\r
\r
- Versus quadratic drag: this leaf assumes proportional scaling with [[v]], not strongly nonlinear growth.\r
- Versus drag coefficient as a standalone topic: this leaf uses [[b]] as an operational parameter for a linear regime, not as a global shape-regime descriptor.\r
- Versus Reynolds-number regime maps: this leaf does not classify the full regime space; it applies a local linear hypothesis.\r
- Versus terminal velocity: this leaf builds the linear drag block later used in full force-balance closures.\r
\r
Structurally, [[tau]] is a powerful bridge between static and dynamic reasoning. Without solving the full transient, we can already interpret behavior: if [[tau]] is large compared with observation time, adjustment is slow; if [[tau]] is small, adjustment is fast. This temporal criterion prevents common interpretation errors in both laboratory and applied settings.\r
\r
A second structural contribution is methodological discipline. The linear model requires explicit condition logging. Without records of medium state, speed window, and effective geometry, cross-test comparisons of [[b]] may be misleading. Apparent model inconsistency can be a hidden condition shift.\r
\r
## Deep physical interpretation\r
\r
Deep interpretation means translating numbers into causal mechanism and action. If computation returns a larger [[F_d]], interpretation must answer what changed and what should be adjusted.\r
\r
Causal reading example: if [[v]] increases while [[b]] remains stable, higher [[F_d]] indicates stronger momentum dissipation in the medium. Design reading example: if [[F_d]] differs at equal [[v]], inspect [[b]] to detect medium or effective-geometry changes.\r
\r
The temporal reading with [[tau]] adds operational value. Small [[tau]] suggests rapid damping of velocity transients. Large [[tau]] suggests persistent inertia. This interpretation links the leaf to control response, transient planning, and operational stability.\r
\r
Interpretation must also include a validity sentence: "this reading is valid as long as the [[F_d]]-[[v]] relation remains approximately linear in the operating range." Without that clause, a result is physically incomplete.\r
\r
## Order of magnitude\r
\r
Useful scale references:\r
\r
- [[v]]: from fractions of m/s in dense fluids to tens of m/s in air, depending on application.\r
- [[b]]: highly sensitive to medium and effective geometry; it should not be copied across scenarios without justification.\r
- [[F_d]]: increases with [[v]] in the linear regime; absolute value depends on [[b]] and context.\r
- [[m]]: does not set instantaneous drag alone, but strongly affects temporal response.\r
- [[tau]]: interprets adaptation speed and supports rapid transient classification.\r
\r
When a result looks off-scale, the first check should be semantic: was [[v]] defined relative to the fluid, does [[b]] belong to the scenario, and are SI units coherent?\r
\r
## Personalized resolution method\r
\r
1. Delimit system and fluid reference.\r
2. Draw the free-body diagram and set [[F_d]] opposite to motion.\r
3. Define [[v]] relative to the medium and collect reliable inputs.\r
4. Apply the linear-drag relation to estimate [[F_d]].\r
5. If needed, compute [[tau]] for temporal reading.\r
6. Validate units, range, and causal coherence.\r
7. Write a conclusion including mechanism and validity limit.\r
\r
This method avoids blind substitution and forces physically useful closure.\r
\r
## Special cases and extended example\r
\r
Special case 1: [[v]] near zero. In that limit, [[F_d]] also approaches zero in the ideal model, so other forces may dominate.\r
\r
Special case 2: medium change. For similar speed and the same body, [[b]] can change strongly and shift the resistive response.\r
\r
Special case 3: large mass with moderate [[b]]. Then [[tau]] can become large, and long transients appear before near-steady behavior.\r
\r
Recommended extended example: compare two tests of the same object in different media, estimate [[F_d]] and [[tau]] in each case, and discuss which case adjusts faster and why. This integrates force reading and temporal reading without leaving the linear core.\r
\r
## Real student questions\r
\r
Why does this leaf insist on relative [[v]]?\r
Because drag is generated by relative motion with the fluid. Ground speed alone can be misleading.\r
\r
Can [[F_d]] be high even for a small object?\r
Yes. A sufficiently high [[b]] from medium properties or effective geometry can produce high drag.\r
\r
Is [[tau]] the full motion duration?\r
No. [[tau]] is a characteristic adjustment time, not the total event duration.\r
\r
If the graph is not straight, is the experiment wrong?\r
Not necessarily. It may indicate departure from the linear domain and need for model transition.\r
\r
## Cross-cutting connections and study paths\r
\r
This leaf connects directly with Newton's second law, free-body-diagram reasoning, and introductory damped-transient analysis. It also prepares transitions to neighboring topics: drag-regime classification, nonlinear drag, and terminal-velocity closure.\r
\r
Suggested route:\r
\r
1. Consolidate causal [[F_d]]-[[v]] reading in the linear regime.\r
2. Practice extracting [[b]] from experimental slope.\r
3. Add [[tau]] to classify response speed.\r
4. Compare with a nonlinear case and justify model switching.\r
\r
This sequence transforms formula recall into modeling judgment.\r
\r
## Final synthesis\r
\r
Mastering linear drag means recognizing a simple but powerful structure: [[F_d]] grows with [[v]] under a physical slope [[b]], and temporal response is summarized by [[tau]]. This dual reading, force plus characteristic time, moves the learner from mechanical calculation to causal interpretation with explicit validity boundaries.\r
\r
The value of this leaf is not repeating one equation. Its value is deciding well: when linear drag is appropriate, how to verify it in data, and when to migrate to another model. That criterion is transferable across applied physics.`;export{e as default};
