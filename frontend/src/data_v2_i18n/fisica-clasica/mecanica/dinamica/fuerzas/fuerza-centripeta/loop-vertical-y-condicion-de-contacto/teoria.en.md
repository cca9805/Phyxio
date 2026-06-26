# Vertical Loop and Contact Condition

## Conceptual context

This leaf addresses a precise dynamics question: what minimum speed is required to complete a vertical loop without losing contact? The conceptual backbone is the distinction between radial demand and contact capacity. Radial demand is described by the resultant [[Frad]] and by centripetal acceleration [[ac]]. Contact capacity is measured through the normal force [[Nn]], which cannot become negative in the ideal rigid-track model.

At the top of the loop, contact is most fragile. A small speed reduction can drive the system to the borderline condition where [[Nn]] becomes zero. Below that threshold, the body detaches. This is why the top point is not just another position in the trajectory: it is the governing safety checkpoint.

The practical relevance is immediate in ride engineering, training rigs, and educational labs. A calculation is not complete when it returns a number; it is complete when it states margin, assumptions, and failure condition. This leaf therefore combines radial-force equations, contact-threshold logic, and an energy link between bottom and top speeds.

## 🟢 Essential level

The essential intuition is straightforward: curved motion needs inward action. If inward action is insufficient, the path cannot follow the imposed geometry. In a vertical loop, the critical location is the top because contact can vanish there first.

A frequent conceptual mistake is to treat "centripetal force" as an extra actor. In this leaf, curvature is the effect, real interactions are the cause. At the top, weight and normal provide inward contribution. At the bottom, contact is usually not at risk, but structural load can become much larger.

Another key distinction is between [[vT]] and [[vB]]. [[vT]] controls top contact directly. [[vB]] is entry speed at the bottom and determines whether the system can reach a sufficient top state through conservation of [[E]]. Mixing these two speeds is one of the fastest ways to produce physically wrong conclusions from algebraically tidy steps.

## 🔵 Formal level

The formal framework is built from five core equations.

**General radial equation:**

{{f:radial_general}}

This relation connects radial requirement [[Frad]] with [[m]], [[v]], and [[r]]. It is the structural equation that underpins all loop positions.

**Radial equation at the top:**

{{f:punto_alto}}

This equation links [[Nn]] and [[vT]] at the highest point. If computed [[Nn]] is negative, the contact-model assumption has already failed.

**Minimum speed at the top:**

{{f:velocidad_minima_alto}}

This is the contact-threshold condition obtained from the limit case at the top.

**Radial equation at the bottom:**

{{f:punto_bajo}}

This relation evaluates bottom contact load using [[vB]]. It is central for load and comfort analysis.

**Minimum speed at the bottom:**

{{f:velocidad_minima_bajo}}

This equation maps top-contact requirement to bottom entry speed through conservation of [[E]] in the ideal model.

A robust formal workflow separates model selection, symbolic relation, numerical substitution, and physical validation. Correct substitution without domain checks is not enough.

## 🔴 Structural level

At structural level, the question becomes reliability: how stable is the conclusion under plausible perturbations?

A practical three-zone interpretation is useful:

1. **Safe zone**: [[vT]] is clearly above threshold and [[Nn]] remains positive with margin.
2. **Sensitive zone**: [[vT]] is close to threshold; small changes in [[r]] or losses may flip the conclusion.
3. **Invalid zone**: predictions require negative [[Nn]] or rely on assumptions no longer representing real behavior.

This layer prevents two common failures: overconfidence in a single value and hidden assumption drift. It also clarifies dual objectives: maintain contact at the top while avoiding excessive normal-force peaks at the bottom.

## Deep physical interpretation

A physically complete interpretation answers four questions:

1. What radial requirement is imposed at the analyzed point?
2. Which real interactions provide it?
3. Is contact margin sufficient?
4. Which control variable should be changed first if margin shrinks?

If top contact is marginal, increasing entry speed can restore robustness. If bottom loads are too high, geometry and speed profile may need redesign. This is why [[Frad]] is interpreted as required resultant, not as an extra force arrow in the diagram.

The same reasoning also explains the role of [[ac]]: it is the dynamic measure of curvature demand, not decorative notation. Once learners see this, they can transfer insight across loops, banked curves, and orbital threshold problems.

## Order of magnitude

Useful sanity ranges for this leaf:

**[[m]]**: 0.01 - 10000 kg

**[[r]]**: 0.1 - 100 m

**[[g]]**: 9.78 - 9.82 m/s^2

**[[v]]**: 0.1 - 100 m/s

**[[vT]]**: 0.5 - 50 m/s

**[[vB]]**: 1 - 100 m/s

**[[Nn]]**: 0 - 100000 N

**[[Frad]]**: 0 - 100000 N

**[[ac]]**: 0.1 - 1000 m/s^2

**[[E]]**: 0.1 - 1000000 J

Results far outside these ranges should trigger a full audit of units, assumptions, and equation choice.

## Personalized resolution method

1. Declare the analysis point: top, bottom, or generic location.
2. Define radial sign convention and draw the force diagram.
3. Apply the corresponding radial equation.
4. Check contact feasibility through [[Nn]].
5. If needed, connect top and bottom states using conservation of [[E]].
6. Report result with margin and validity condition.

This method reduces interpretation errors because it forces a causal closure, not only a numerical closure.

## Special cases and extended example

**Case 1:** top borderline contact where [[Nn]] becomes zero.

**Case 2:** entry speed barely above minimum, highly sensitive to losses.

**Case 3:** acceptable top contact but high bottom normal load.

An extended example should solve threshold at the top, infer bottom minimum speed, and finally evaluate bottom load under operational speed. That sequence combines safety and structural reasoning in one coherent workflow.

## Real student questions

**Does increasing [[m]] change minimum contact speed?**
Not in the ideal model of this leaf. Mass scales forces, but critical speeds remain unchanged.

**Why do we need [[vB]] if the critical condition is at the top?**
Because operation starts at the bottom, and conservation of [[E]] links both states.

**Can a negative [[Nn]] still be accepted if algebra is correct?**
No. It signals loss of contact and model-domain violation.

**What should be tuned first to gain contact margin?**
Usually entry speed for top contact, and geometry or profile for bottom-load mitigation.

## Cross-cutting connections and study paths

This leaf connects directly with centripetal-force fundamentals, banked and flat-curve analysis, and typical-example transfer within the same block. It also supports energy-based modeling and contact-condition reasoning used in design and verification tasks.

A recommended study path is: radial resultant first, top-contact threshold second, energy link between top and bottom third, and load interpretation at the bottom last. This sequence builds transfer-ready understanding for higher-fidelity models.

For advanced study, a useful exercise is sensitivity ranking: vary one input at a time and quantify which change most strongly affects contact margin. In many practical cases, entry speed uncertainty dominates first, then geometric uncertainty in [[r]], and only later mass-related effects for structural load interpretation. This ranking helps prioritize instrumentation and control effort.

Another extension is uncertainty-aware reporting. Instead of giving one threshold value, report a credible interval with assumptions. This preserves the spirit of the ideal model while improving decision quality in real environments.

## Final synthesis

Vertical loop and contact condition is not a formula list. It is a decision framework that combines radial demand, contact feasibility, and margin interpretation. By integrating [[Frad]], [[Nn]], [[vT]], [[vB]], and [[E]], the learner moves from equation execution to physically justified judgment.
