const e=`# Nonholonomic Constraints

## Conceptual context

Nonholonomic Constraints answers a precise physical question: How are nonholonomic constraints formulated when they restrict velocities rather than configurations? The topic is not introduced to add one more equation, but to give the student a reading tool when elementary models no longer separate cause, scale, and domain clearly.

A nonholonomic constraint restricts admissible velocities and cannot always be integrated into a position constraint. The didactic point is understanding that not every differential condition simply reduces the number of coordinates. For that reason the core quantities, [[Aai]], [[qdot_i]], [[aa]], [[lambda_a]], [[Lagr]], [[Qi]], [[dqi]], are not decorative labels. Each one marks part of the structure: a scale, a boundary, a dynamic variable, a validity condition, or a conserved quantity.

## 🟢 Essential level

The essential idea is that a nonholonomic constraint restricts admissible velocities and cannot always be integrated into a position constraint. Before calculating, the student must state which physical mechanism is being isolated and which part of the system is deliberately left outside the model. Without that reading, an equation may produce the right number for the wrong question.

At this level, [[Aai]] acts as the dominant quantity because it concentrates the didactic decision of the leaf. It is not enough to name it: the student must explain whether it increases, decreases, changes sign, vanishes, or loses meaning when the regime changes.

The teacher can use contrast questions: what would happen if a velocity vanished, if symmetry disappeared, if the boundary were no longer fixed, or if a correction became comparable with the main term. The answer must preserve physics, not only algebra.

A useful classroom test is to ask for a qualitative prediction before any substitution: which term dominates, which sign is expected, and which limiting case should appear. If the student can answer that, the later algebra has a physical target. If not, the same calculation becomes fragile because there is no criterion for detecting an impossible result.

It is also useful to separate description from decision. Description lists quantities; decision explains which of them controls the observed change. In this leaf, that decision is supported by [[Aai]] and by the comparison between dominant term, correction, and limiting case. This distinction prevents the student from confusing a long solution with a deep solution.

## 🔵 Formal level

The formal level is concentrated in these relations:

{{f:ligadura_no_holonoma_lineal}}

{{f:desplazamiento_virtual_compatible}}

{{f:lagrange_dalembert_no_holonomo}}

{{f:potencia_ligadura_ideal}}

The relations above belong together because they form the operational core of the leaf. One defines the mathematical object to be read, another introduces the balance governing the system, another fixes a reduction or compatibility condition, and another connects the formalism with an observable physical diagnosis.

To apply them, [[Aai]], [[qdot_i]], [[aa]], [[lambda_a]], [[Lagr]], [[Qi]], [[dqi]] must belong to the same system. Sign, units, and domain must also be checked. The central question remains: How are nonholonomic constraints formulated when they restrict velocities rather than configurations? If an algebraic rearrangement changes that question, the procedure has stopped being physics and has become symbolic manipulation.

The formal result must be read causally. When a term grows, it does not only change a number: it changes the hierarchy between mechanisms. When a term vanishes, it does so because a limiting case removes a concrete physical contribution.

Formal development includes an algebraic sensitivity check: the controlling quantity of each term is identified, what may remain constant is decided, and the effect of changing the dominant variable scale is observed. This adds no new formulas, but it improves the physical quality of the existing formulas.

## 🔴 Structural level

The deeper structure appears when the model is compared with its limits. A nonholonomic constraint restricts admissible velocities and cannot always be integrated into a position constraint. The didactic point is understanding that not every differential condition simply reduces the number of coordinates. This sentence must work as a control criterion: it decides whether the topic is being used in its natural domain or forced outside its range.

A reasonable limiting case should lead to a simpler formula, a clear symmetry, or a detectable contradiction. If the limit cannot be interpreted, the model is missing conditions. In advanced mechanics, the absence of a limit reading is often more serious than an arithmetic error.

Precision also belongs to the structure. A deviation of about ten percent may be acceptable for estimating a trend, but not for declaring stability, safety, or equivalence between models. The student must justify the precision deserved by the conclusion.

This structural level is also where comparison between methods becomes meaningful. Two procedures may produce similar numbers while relying on different assumptions; the accepted answer is the one whose assumptions match the observable system and whose limiting case remains interpretable.

As an additional formal development, the student must decide which relation is used as a definition, which relation acts as a balance, and which relation works as a test. This separation deepens the formal level: it prevents all formulas from being applied in the same way and forces the function of each relation to be justified.

Structurally, the student must compare two possible outcomes: accepting the model with reasonable uncertainty or declaring that the model no longer represents the system. That decision is not a final ornament; it is part of the advanced physical content of the leaf.

## Deep physical interpretation

Deep interpretation starts by asking what [[Aai]] represents in the causal chain. If [[Aai]] is modified, the regime may change, a critical condition may move, or a secondary assumption may stop being secondary.

The final answer must mention trend, cause, and limit. A result without that reading remains incomplete for Phyxio, even if the calculation is correct.

## Order of magnitude

The order of magnitude is estimated by comparing the principal scale with the corrections. If a term assumed to be small reaches roughly 5 to 10 percent of the dominant term, the solution should be treated as an approximation rather than an exact description.

This check prevents artificial conclusions. The units of [[Aai]], [[qdot_i]], [[aa]], [[lambda_a]], [[Lagr]], [[Qi]], [[dqi]] must support the same physical dimension and the same experimental scale.

## Personalized resolution method

First, delimit the system and state the assumptions. Second, identify [[Aai]] and decide which relation answers the central question. Third, calculate symbolically before substituting numbers.

Fourth, validate the result through units, sign, and limiting case. Fifth, write a causal conclusion: what changes physically, what is conserved, and what observation would force a change of model.

## Special cases and extended example

In the ideal case, the relations of the leaf reduce the problem to a direct reading. In a real case, perturbations, losses, asymmetries, viscosity, nonideal geometry, or additional restrictions may appear.

The extended example must display that difference. The goal is not to make the calculation heavier, but to learn when a reduced version remains defensible.

## Real student questions

A common question is why not always use the most general formula. The answer is that a general formula without criterion may hide the main cause. Another question is how to know that the model fails; it is detected when corrections grow, signs contradict the system, or the simple limit does not appear.

## Cross-cutting connections and study paths

This leaf connects with energy, momentum, rotation, fluids, gravitation, and analytical mechanics depending on its node. It should be studied after mastering the basic quantities of the block and before facing problems where model structure matters as much as the numerical result.

## Final synthesis

At the end, the student should explain that a nonholonomic constraint restricts admissible velocities and cannot always be integrated into a position constraint, apply the formulas in their domain, and justify the physical meaning of the result. The final competence is deciding whether the model answers the question of the real system, not merely obtaining an algebraic expression.

The final didactic check is explaining which real observation would confirm the result. If the student can propose a measurement, graph, or experimental comparison, then the formalism has been connected to the phenomenon. This requirement prevents repeating formulas without understanding what they are for.

A final classroom use is oral defense. The student should be able to state which observation would falsify the model and which measurement would strengthen it. That defense is what separates advanced mechanics from formal manipulation.
`;export{e as default};
