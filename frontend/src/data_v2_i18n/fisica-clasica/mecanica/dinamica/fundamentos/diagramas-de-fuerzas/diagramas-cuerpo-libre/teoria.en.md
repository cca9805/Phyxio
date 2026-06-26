# Free-Body Diagrams

## Conceptual context

A free-body diagram is a physical and mathematical representation of an isolated system. Its purpose is not artistic drawing quality but causal clarity: which external interactions are active, how they act, and how they are projected on chosen axes to explain equilibrium or acceleration.

In this leaf, the dominant magnitude is [[Fext]], because it condenses the net external effect. However, robust interpretation also requires [[m]], [[a]], [[ax]], [[ay]], [[Fx]], [[Fy]], [[P]], [[N]], [[T]], [[fk]], [[fs]], [[mu_k]], [[mu_s]], [[theta]], [[g]], [[Ppar]], and [[Pperp]].

Most student failures are modeling failures rather than algebra failures: mixing the real scene with the isolated system, omitting active forces, adding forces with no physical agent, or projecting on inconsistent axes. Once those errors enter the setup, later calculations can look neat while remaining physically wrong.

This topic integrates visual reasoning, magnitude semantics, and Newtonian dynamics. First, identify forces. Second, project by axis. Third, interpret whether each axis is in balance or acceleration and whether the contact regime should change.

## 🟢 Essential level

At the essential level, the objective is causal discipline before equations. A useful rule is simple: if you cannot name the source body of an arrow, that arrow does not belong in the diagram.

Minimal conceptual sequence:

1. Define the isolated system boundary.
2. List only external interactions on that system.
3. Choose axes that simplify physical reading.
4. Assign directions based on support, pull, or opposition.

At this stage, complete calculation is not the priority. Correct representation is. For example, on an incline it is common to swap [[Ppar]] and [[Pperp]], or to draw [[N]] vertically instead of normal to the surface. Another frequent issue is to use [[fk]] and [[fs]] as if both could apply at once, even though they represent different contact regimes.

Students also tend to treat resultant force as a sum of magnitudes. In reality, [[Fext]] is a vector sum, so direction is mandatory before arithmetic.

Essential plausibility checks:

- If support is maintained, [[N]] should remain non-negative.
- If there is no relative sliding, the relevant friction is usually [[fs]], not [[fk]].
- Horizontal acceleration may coexist with near-zero vertical resultant.

These insights do not replace formal analysis; they prevent formal analysis from starting on a broken model.

## 🔵 Formal level

At the formal level, the diagram is translated into quantitative relations consistent with classical mechanics. Core formulas are:

{{f:newton_vectorial}}

{{f:newton_x}}

{{f:newton_y}}

{{f:equilibrio_vertical}}

{{f:rozamiento_cinetico}}

{{f:rozamiento_estatico}}

{{f:componentes_peso_plano}}

These expressions form a modeling contract:

- The vector equation links global external action to motion change through [[Fext]].
- Axis equations convert the problem into scalar balances for [[Fx]], [[Fy]], [[ax]], and [[ay]].
- Vertical equilibrium is contextual, not universal.
- Kinetic friction uses [[mu_k]] and contact load through [[N]].
- Static friction is an upper bound on [[fs]], not an always-on equality.
- Weight decomposition depends on [[theta]] and angle convention.

Formal coherence checklist:

1. Units: forces in N, acceleration in m/s^2, mass in kg.
2. Signs: consistent with declared axis orientation.
3. Regime declaration: static or kinetic contact before substitution.
4. Contact logic: if support is lost, assumptions on [[N]] must be updated.

Compact formal reading example:

- On an incline, split [[P]] into [[Ppar]] and [[Pperp]].
- On the normal axis, compare [[Pperp]] and [[N]] to confirm support state.
- On the tangential axis, combine [[Ppar]], [[T]], and friction to get [[Fx]] and therefore [[ax]].

The point of formal level is traceability: every equation term must map back to an explicit force in the diagram.

## 🔴 Structural level

The structural level asks when the simplified model remains reliable and when extension is required. A correct diagram is necessary but not sufficient for robust prediction.

Typical validity limits:

1. Rapid contact transitions that break quasi-static assumptions.
2. Surface states where [[mu_s]] and [[mu_k]] are not stable effective parameters.
3. Geometries where poor axis choice hides relevant interactions.
4. Unmodeled couplings such as deformation, vibration, or impulsive excitation.

Operational structural criteria:

- If prediction and observation diverge repeatedly, audit the diagram before tuning parameters.
- If computed sign for [[Fy]] or [[Fx]] contradicts physical motion tendency, suspect missing forces or wrong axis orientation.
- If the system toggles between adhesion and sliding, explicitly declare regime transition instead of forcing one formula globally.

Model escalation should be layered:

1. Keep the free-body map as the traceability core.
2. Add contact/friction detail only when evidence demands it.
3. Move to transient modeling when partial-equilibrium assumptions fail persistently.

This strategy prevents both under-modeling and unnecessary complexity.

## Deep physical interpretation

Deep interpretation is causal, not decorative. Every arrow represents a physical interaction. Every projection answers a specific question about change in motion.

If [[Fx]] is non-zero while [[Fy]] is near zero, that is not a contradiction. It is a physically meaningful regime: acceleration on one axis with balance on the other.

If [[fs]] remains below its bound and no slip occurs, the conclusion is not merely numerical. It means the contact interface still compensates tangential demand without adhesion breakdown.

Free-body diagrams are also diagnostic tools. When measurements disagree with predictions, the first step is not forcing numbers into formulas; it is auditing agent, direction, regime, and projection logic.

## Order of magnitude

Useful order-of-magnitude references in educational and practical contexts:

- [[m]]: from fractions of kg in lab setups to hundreds of kg in light machinery.
- [[g]]: around 9.8 m/s^2 near Earth surface.
- [[P]]: from N scale to thousands of N depending on [[m]].
- [[N]]: often same order as [[P]] in simple support.
- [[T]]: broad range based on load transfer.
- [[Fx]] and [[Fy]]: axis-dependent outcomes, not direct substitutes of total force.
- [[a]], [[ax]], [[ay]]: near zero in quasi-static states, larger in starts and stops.
- [[mu_s]] and [[mu_k]]: dimensionless contact parameters sensitive to material state.
- [[theta]]: controls redistribution between [[Ppar]] and [[Pperp]].
- [[fk]] and [[fs]]: regime-dependent contact responses.
- [[Ppar]] and [[Pperp]]: geometric components of weight in incline-aligned axes.

These references support fast sanity checks before detailed recalculation.

## Personalized resolution method

1. Define system and boundary.
2. Draw only justified external forces.
3. Choose axes aligned with constraints or expected motion.
4. Project forces and write axis balances.
5. Declare contact and friction regime explicitly.
6. Solve target variables.
7. Check units, signs, and order of magnitude.
8. Close with causal interpretation and operational recommendation.

## Special cases and extended example

Special case A: incline without slip. Static-friction bound determines feasibility.

Special case B: transition to slip. Friction model changes and tangential balance must be updated.

Special case C: vertical equilibrium with horizontal acceleration. Demonstrates why [[Fy]] and [[Fx]] must be treated independently.

Extended integrated case:

- A system on an incline with variable [[theta]].
- Track impact of [[theta]] on [[Ppar]], [[Pperp]], [[N]], and friction demand.
- Identify transition from static to kinetic regime with clear physical trigger.

## Real student questions

Why cannot I draw a "force of motion"?

Because motion is an effect, not an external agent.

Why can two different diagrams represent one scene?

Because axis choices and decomposition detail can vary while preserving physical equivalence.

When should I use [[fs]] versus [[fk]]?

Use [[fs]] before relative slip; use [[fk]] after slip starts.

If [[Fext]] is zero, must the object be at rest?

No. Zero resultant means zero acceleration, which allows constant velocity.

## Cross-cutting connections and study paths

This leaf connects with vector decomposition, axis-based Newton equations, friction analysis, incline dynamics, mechanism design, and contact diagnostics in engineering systems.

Suggested path:

1. Horizontal-support free-body diagrams.
2. Inclined-plane diagrams with and without friction.
3. Rope and pulley idealizations.
4. Cross-validation with work-energy methods.

## Final synthesis

Mastering free-body diagrams means translating physical scenes into causal, testable models. When the diagram is correct, equations gain meaning and interpretation becomes predictive rather than mechanical.

The core competence is not template memorization; it is deciding which forces exist, how they project, and when the model must escalate in complexity.
