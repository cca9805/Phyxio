# Definition and Mathematical Expression

## Conceptual context

This leaf focuses on a specific conceptual task: distinguishing the vector definition of weight from its scalar expression, and linking both to the central-field model. The goal is not only to compute a number but to understand why [[P]], [[Pmod]], [[g]], and [[gmod]] are different representations connected through [[G]], [[M_astro]], and [[r]].

The didactic identity of this topic is the representation shift:

- Vector form for force direction and sense.
- Scalar form for quick magnitude estimation.
- Central-field form for gravity variation with distance and attracting-body mass.

This separation prevents frequent mistakes such as confusing mass with weight or assuming local gravity is universal.

## 🟢 Essential level

At the essential level, three ideas are enough.

First, [[m]] is an intrinsic inertial property and does not depend on location. Second, [[P]] is a gravitational force, so it depends on the surrounding field. Third, the direction of weight follows the local field direction.

When a coordinate system is chosen, [[P]] can be projected into [[P_x]] and [[P_y]]. Likewise, [[g]] can be represented through [[g_x]] and [[g_y]]. These projections do not create new physics; they only re-express the same interaction in a coordinate language.

In plain terms: mass is what the object is, weight is how strongly the environment pulls it.

This essential reading also guards against two common shortcuts. Shortcut one: treating one gravity value as universally interchangeable across contexts. Shortcut two: assuming notation choice is cosmetic and has no impact on interpretation quality. In reality, choosing vector or scalar representation determines which physical questions can be answered rigorously.

## 🔵 Formal level

Core vector definition:

{{f:peso_vectorial}}

Scalar form in approximately uniform field:

{{f:modulo_peso}}

Central-field gravity relation:

{{f:gravedad_campo_central}}

Directional rule used in FBD consistency:

{{f:direccion_peso}}

These relations form a coherent formal block:

1. [[P]] carries direction and sense.
2. [[Pmod]] carries magnitude only.
3. [[gmod]] may be approximated as constant in introductory settings.
4. [[gmod]] may also be derived from [[G]], [[M_astro]], and [[r]] when central-field effects matter.

Formal competence here means selecting the right representation for the physical question, not memorizing isolated expressions.

Useful component form under a vertical-y convention:

- [[P_x]] = 0 and [[P_y]] = -[[Pmod]] in the simplest vertical-gravity case.
- [[g_x]] = 0 and [[g_y]] = -[[gmod]] under the same axis convention.

For rotated or inclined reference frames, this description is updated through projection rules while preserving the same physical vector. The vector remains the same physical object; only its numerical components change with basis choice.

Three formal calculation routes are worth distinguishing:

1. Local route: use known [[gmod]] to obtain [[Pmod]] quickly.
2. Central route: compute [[gmod]] from [[G]], [[M_astro]], and [[r]], then obtain [[Pmod]].
3. Vector route: obtain [[P]] and project into analysis axes for force-balance work.

These routes are complementary, not competing. They are selected according to required precision and output type.

## 🔴 Structural level

Structural analysis asks when each representation is valid and when model escalation is required.

Good-use signals:

- Vector form is used when direction matters.
- Scalar form is used when direction is already resolved.
- The assumption on [[gmod]] (constant or variable) is explicitly justified.

Failure signals:

- Mixing [[P]] and [[Pmod]] without a declared convention.
- Treating [[gmod]] as globally constant in interplanetary comparisons.
- Mentioning [[G]], [[M_astro]], [[r]] without causal integration into the result.

Quantitative triggers for model transition:

- If estimated relative variation of [[gmod]] due to [[r]] changes exceeds 2 percent, uniform-field approximation should be reviewed.
- If required accuracy is tighter than 1 percent in weight, distance dependence should be evaluated explicitly.
- If nontrivial axis geometry is relevant, vector form with components [[P_x]], [[P_y]], [[g_x]], [[g_y]] is preferable.

Explicit transition rule: switch from uniform-field treatment to central-field treatment when altitude, orbital, or multi-body context makes [[r]] dependence operationally relevant.

## Deep physical interpretation

A correct physical reading is causal. [[m]] sets inertia, [[g]] sets gravitational environment intensity and direction, and [[P]] results from both. The direction of [[P]] is not decorative; it is constrained by the direction of [[g]].

This explains why the same object has different weight on Earth, Moon, or Mars while keeping the same mass. It also explains why scalar formulas are useful but potentially misleading if direction-sensitive questions are asked.

A robust interpretation therefore includes not only the final value but also assumptions, sensitivity, and representation validity.

## Order of magnitude

Useful sanity references:

- [[G]] is numerically very small in SI units.
- [[gmod]] spans broad ranges across planetary surfaces.
- [[Pmod]] can vary by orders of magnitude from human-scale to industrial systems.
- [[P_x]] and [[P_y]] depend on axis choice; their physical meaning is convention-dependent.

Order-of-magnitude checks are an efficient filter against unit and input mistakes.

## Personalized resolution method

1. Identify whether the question needs direction or only magnitude.
2. Choose [[P]] vector form or [[Pmod]] scalar form accordingly.
3. If central-field context exists, compute [[gmod]] from [[G]], [[M_astro]], [[r]].
4. If needed, decompose using [[P_x]], [[P_y]], [[g_x]], [[g_y]].
5. Validate dimensions and sign conventions.
6. Conclude with causal interpretation and model-validity statement.

## Special cases and extended example

Special case 1: same [[m]] on different celestial bodies to isolate [[gmod]] effect.

Special case 2: same body, different [[r]] values to show transition from uniform-field approximation to central-field dependence.

Special case 3: same physical weight represented in rotated axes to show invariance of the vector and variability of components.

Extended example strategy: compute [[gmod]] from [[G]], [[M_astro]], [[r]], then obtain [[Pmod]] for known [[m]], then reinterpret in vector form for an FBD with rotated axes.

## Real student questions

Why is weight sometimes written as a vector and sometimes as a scalar? Because they answer different questions: full force direction versus numerical intensity.

If mass is constant, why does weight change? Because the gravitational field changes with environment.

When should I use [[G]] explicitly? When [[gmod]] cannot be assumed constant or when the problem explicitly depends on [[M_astro]] and [[r]].

## Cross-cutting connections and study paths

This topic connects directly to vector dynamics, FBD construction, gravitation, orbital modeling, and dimensional analysis. A robust learning path is:

- Separate mass from weight.
- Master vector-scalar transition.
- Master uniform-field to central-field transition.

That path yields transferable understanding rather than formula memorization.

As a final study strategy, compare representations using the same physical case. Compute [[Pmod]] for one mass in two gravity environments, then rewrite both outcomes in vector form with a shared axis convention. This explicit translation practice is highly effective for reducing sign and interpretation mistakes in later dynamics topics.

Another robust practice is uncertainty-aware interpretation. Even when the scalar value is computed correctly, decision quality depends on input reliability for [[m]], [[gmod]], and radial assumptions in [[r]]. Reporting a value without model-validity context may look complete but remains technically fragile.

The conceptual benefit of this leaf is therefore methodological: it trains representation control. Once representation control is internalized, students can move between local mechanics and gravitational modeling without losing physical meaning.

In advanced coursework, this control becomes a bridge skill. It supports cleaner problem statements, better model auditing, and safer interpretation when formulas with similar symbols refer to physically different objects.

## Final synthesis

Defining and expressing weight correctly means choosing the right representation for the right physical question. [[P]], [[Pmod]], [[g]], [[gmod]], [[G]], [[M_astro]], [[r]], and their components form a coherent system for calculation, interpretation, and reliable decision-making.
