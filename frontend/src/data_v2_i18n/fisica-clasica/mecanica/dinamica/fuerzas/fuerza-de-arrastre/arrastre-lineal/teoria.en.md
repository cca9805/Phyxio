# Linear Drag

## Conceptual context

This leaf develops a specific physical model: how resistive force appears when a body moves through a fluid and, within the operating range, grows in proportion to relative speed. The objective is not only numerical. It is a reading skill. We want to look at a [[F_d]]-versus-[[v]] plot and at a free-body diagram, then identify when linear drag is a valid description, what that linearity means, and how it changes physical decisions.

The central quantity is [[F_d]], but it is meaningful only inside a network of related quantities. Parameter [[b]] summarizes body-fluid interaction in the linear regime. Quantity [[v]] defines the excitation level of the drag mechanism. Quantity [[m]] sets inertia. Quantity [[tau]] compresses the response time scale. This structure differentiates the leaf from its neighbors: here we do not classify all drag regimes and we do not yet close the full terminal-velocity problem. We build an operational interpretation of linear drag as a model with a clear domain.

A common mistake is to treat this topic as an isolated formula. That approach fails because it erases validity criteria. The same body can show different behavior when fluid properties, speed scale, or effective geometry change. For that reason, this leaf keeps two ideas together: physical causality and model boundaries. Causality explains why [[F_d]] increases with [[v]]. Boundaries explain when the linear description should be retained and when a transition is required.

## 🟢 Essential level

At the essential level, we build robust intuition without algebraic overload. Consider three low-to-moderate-speed scenes:

1. A small sphere falling in glycerin.
2. A bead moving through oil inside a transparent tube.
3. A light object moving through still air at modest speed.

In all three scenes, increasing relative speed increases resistive force in an orderly way. That qualitative reading is the core of linear drag: more relative speed, more resistance, with approximately constant proportionality while regime conditions remain stable.

The key didactic step is separating three ideas that students often mix:

- [[F_d]] is not a driving force; it opposes relative motion.
- [[v]] must be defined relative to the fluid, not automatically relative to ground.
- [[b]] is not a universal object constant; it also depends on fluid state and flow context.

With these clarifications, many errors disappear before any equation is written. A useful consequence also appears: two situations with the same [[v]] can produce different [[F_d]] if [[b]] is different. That explains everyday observations, such as why the same object is damped very differently in water and air.

A second essential reading is temporal. Even before solving full differential equations, students should anticipate that not every system yields to drag at the same pace. A system with large [[m]] and small [[b]] adjusts slowly. A system with small [[m]] and large [[b]] adjusts quickly. This prepares the meaning of [[tau]] with minimal mathematical burden.

The essential level should close with a control question: if relative speed doubles in the same medium for the same body, should we expect proportional growth in [[F_d]] or much stronger-than-proportional growth? In this leaf, inside its domain, proportional growth is expected. If data disagree, conditions must be reviewed rather than forcing the model.

## 🔵 Formal level

The formal level introduces two core equations and their operational meaning.

The constitutive law for linear drag is:

{{f:arrastre_lineal_estandar}}

This expression is not an algebraic convenience. It states that the magnitude of [[F_d]] scales linearly with [[v]] while [[b]] remains approximately constant over the analyzed interval. Parameter [[b]] carries units N s/m and acts as the physical slope of the force-speed relation.

The characteristic response time is modeled with:

{{f:tiempo_relajacion_lineal}}

This second relation combines inertia and dissipation. If [[m]] increases, [[tau]] increases. If [[b]] increases, [[tau]] decreases. Therefore [[tau]] is not a force and not a total travel time. It is a time-scale marker of how quickly the system adjusts under viscous resistance.

A reliable formal workflow is:

1. Define system, motion direction, and fluid reference.
2. Verify that [[v]] is relative speed to the medium.
3. Choose the target quantity: [[F_d]], [[b]], or [[tau]].
4. Substitute with coherent SI units.
5. Check dimensional consistency and physical plausibility.

Dimensional checks are not cosmetic. If [[F_d]] is not obtained in N or [[tau]] not in s, the issue is not a small unit typo; it is a model break. Domain checks are also required: when solving for [[b]] or [[tau]], physically impossible values should not be accepted in ordinary dissipative settings.

Graph reading provides an additional formal advantage. In an ideal linear regime, the [[F_d]]-[[v]] graph is a straight line through the origin. Its slope is [[b]]. This enables fast calibration from measurements and early regime-drift detection: if the curve departs from near-linearity in the working interval, linear drag may no longer be sufficient.

Formal analysis also supports sensitivity reasoning. Small relative changes in [[b]] or [[v]] generate comparable relative changes in [[F_d]]. This property makes the model especially useful in early training because it connects intuition, graph interpretation, and computation without abrupt complexity jumps.

## 🔴 Structural level

The structural level answers the most important model question: when to trust the model and when to switch.

Linear drag is valuable because it simplifies while preserving mechanism. Yet it does not claim universal validity across all flow scenarios. Its useful domain is the region where proportionality between [[F_d]] and [[v]] remains a good approximation over the operating window.

Practical structural validity criteria:

1. The experimental slope of the [[F_d]]-[[v]] relation is approximately constant in the interval of interest.
2. Effective body geometry does not change significantly during the measurement.
3. The medium does not change abruptly in ways that strongly modify [[b]].
4. Model-to-measurement error remains inside the accepted tolerance for the application.

When one of these criteria fails, the correct strategy is not manual retuning to save the equation. The correct strategy is explicit model transition. In this context, a common transition is toward nonlinear drag descriptions once the force-speed curve shows systematic curvature.

Boundary clarity with sibling leaves is also essential:

- Versus quadratic drag: this leaf assumes proportional scaling with [[v]], not strongly nonlinear growth.
- Versus drag coefficient as a standalone topic: this leaf uses [[b]] as an operational parameter for a linear regime, not as a global shape-regime descriptor.
- Versus Reynolds-number regime maps: this leaf does not classify the full regime space; it applies a local linear hypothesis.
- Versus terminal velocity: this leaf builds the linear drag block later used in full force-balance closures.

Structurally, [[tau]] is a powerful bridge between static and dynamic reasoning. Without solving the full transient, we can already interpret behavior: if [[tau]] is large compared with observation time, adjustment is slow; if [[tau]] is small, adjustment is fast. This temporal criterion prevents common interpretation errors in both laboratory and applied settings.

A second structural contribution is methodological discipline. The linear model requires explicit condition logging. Without records of medium state, speed window, and effective geometry, cross-test comparisons of [[b]] may be misleading. Apparent model inconsistency can be a hidden condition shift.

## Deep physical interpretation

Deep interpretation means translating numbers into causal mechanism and action. If computation returns a larger [[F_d]], interpretation must answer what changed and what should be adjusted.

Causal reading example: if [[v]] increases while [[b]] remains stable, higher [[F_d]] indicates stronger momentum dissipation in the medium. Design reading example: if [[F_d]] differs at equal [[v]], inspect [[b]] to detect medium or effective-geometry changes.

The temporal reading with [[tau]] adds operational value. Small [[tau]] suggests rapid damping of velocity transients. Large [[tau]] suggests persistent inertia. This interpretation links the leaf to control response, transient planning, and operational stability.

Interpretation must also include a validity sentence: "this reading is valid as long as the [[F_d]]-[[v]] relation remains approximately linear in the operating range." Without that clause, a result is physically incomplete.

## Order of magnitude

Useful scale references:

- [[v]]: from fractions of m/s in dense fluids to tens of m/s in air, depending on application.
- [[b]]: highly sensitive to medium and effective geometry; it should not be copied across scenarios without justification.
- [[F_d]]: increases with [[v]] in the linear regime; absolute value depends on [[b]] and context.
- [[m]]: does not set instantaneous drag alone, but strongly affects temporal response.
- [[tau]]: interprets adaptation speed and supports rapid transient classification.

When a result looks off-scale, the first check should be semantic: was [[v]] defined relative to the fluid, does [[b]] belong to the scenario, and are SI units coherent?

## Personalized resolution method

1. Delimit system and fluid reference.
2. Draw the free-body diagram and set [[F_d]] opposite to motion.
3. Define [[v]] relative to the medium and collect reliable inputs.
4. Apply the linear-drag relation to estimate [[F_d]].
5. If needed, compute [[tau]] for temporal reading.
6. Validate units, range, and causal coherence.
7. Write a conclusion including mechanism and validity limit.

This method avoids blind substitution and forces physically useful closure.

## Special cases and extended example

Special case 1: [[v]] near zero. In that limit, [[F_d]] also approaches zero in the ideal model, so other forces may dominate.

Special case 2: medium change. For similar speed and the same body, [[b]] can change strongly and shift the resistive response.

Special case 3: large mass with moderate [[b]]. Then [[tau]] can become large, and long transients appear before near-steady behavior.

Recommended extended example: compare two tests of the same object in different media, estimate [[F_d]] and [[tau]] in each case, and discuss which case adjusts faster and why. This integrates force reading and temporal reading without leaving the linear core.

## Real student questions

Why does this leaf insist on relative [[v]]?
Because drag is generated by relative motion with the fluid. Ground speed alone can be misleading.

Can [[F_d]] be high even for a small object?
Yes. A sufficiently high [[b]] from medium properties or effective geometry can produce high drag.

Is [[tau]] the full motion duration?
No. [[tau]] is a characteristic adjustment time, not the total event duration.

If the graph is not straight, is the experiment wrong?
Not necessarily. It may indicate departure from the linear domain and need for model transition.

## Cross-cutting connections and study paths

This leaf connects directly with Newton's second law, free-body-diagram reasoning, and introductory damped-transient analysis. It also prepares transitions to neighboring topics: drag-regime classification, nonlinear drag, and terminal-velocity closure.

Suggested route:

1. Consolidate causal [[F_d]]-[[v]] reading in the linear regime.
2. Practice extracting [[b]] from experimental slope.
3. Add [[tau]] to classify response speed.
4. Compare with a nonlinear case and justify model switching.

This sequence transforms formula recall into modeling judgment.

## Final synthesis

Mastering linear drag means recognizing a simple but powerful structure: [[F_d]] grows with [[v]] under a physical slope [[b]], and temporal response is summarized by [[tau]]. This dual reading, force plus characteristic time, moves the learner from mechanical calculation to causal interpretation with explicit validity boundaries.

The value of this leaf is not repeating one equation. Its value is deciding well: when linear drag is appropriate, how to verify it in data, and when to migrate to another model. That criterion is transferable across applied physics.