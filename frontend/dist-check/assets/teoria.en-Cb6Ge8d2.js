const e=`\uFEFF# Newton's Third Law (Action and Reaction)

## Conceptual context

Newton's third law answers a precise physical question: when two systems interact, how are the two interaction forces related. The law is not about a single force in isolation, but about the reciprocal pair between two different bodies.

In this leaf, the core pair is [[FAB]] and [[FBA]]. [[FAB]] denotes the force that system A exerts on system B, while [[FBA]] denotes the force that system B exerts on system A. The crucial conceptual rule is body separation: each force belongs to a different free-body diagram.

Component reading also matters. Along a chosen axis, [[FAx]] and [[FBx]] must remain opposite for the same interaction pair, and similarly [[FAy]] and [[FBy]] along y. In contact problems, the normal pair [[Nab]] and [[Nba]] is a concrete action-reaction manifestation.

This conceptual frame avoids a frequent confusion: normal force and weight are often opposite in direction on one body, but they are not an action-reaction pair because they act on the same body and come from different interactions.

## 🟢 Essential level

At essential level, the goal is causal clarity without algebraic overload.

1. Every interaction creates two forces, not one.
2. The two forces are equal in magnitude and opposite in direction.
3. They act on different bodies at the same instant.

A simple intuition is two skaters pushing each other on low-friction ground. Skater A pushes skater B, and skater B pushes skater A with the same interaction intensity in the opposite direction. The responses can still be different because masses can differ.

This distinction between interaction pair and motion response is central. Newton's third law tells how forces are paired. Newton's second law tells how each body accelerates according to net force and mass. Mixing both statements leads to predictable errors.

Another essential checkpoint is diagram discipline. Always draw two separate free-body diagrams. If both members of an action-reaction pair appear in the same diagram and are canceled, the reasoning is incorrect.

## 🔵 Formal level

At formal level, we encode reciprocity mathematically.

{{f:tercera_ley_vectorial}}

{{f:tercera_ley_eje_x}}

{{f:tercera_ley_eje_y}}

{{f:par_normal_vectorial}}

Formal reading:

1. Vector form states pair reciprocity globally.
2. Component forms enforce sign consistency axis by axis.
3. The normal-pair equation specializes reciprocity to contact interactions.

Operational formal checks:

1. Confirm both forces belong to the same interaction event.
2. Keep one sign convention for both bodies when projecting.
3. Verify units in N for all force quantities.
4. Prevent force mixing across different interactions.

If [[FBx]] is not the opposite of [[FAx]], either the bodies were mixed, axes were changed, or one term belongs to another interaction. The same logic applies to [[FBy]] and [[FAy]].

In contact analysis, [[Nab]] and [[Nba]] should be interpreted as reciprocal normals. They do not replace other forces like [[W]] or a generic support force [[N_gen]] that may appear in a body balance.

## 🔴 Structural level

The structural level defines validity and transition boundaries.

The third-law relation is robust in classical mechanics, but interpretation quality depends on model hygiene:

1. Interaction identity must be explicit.
2. Instant and axis consistency must be preserved.
3. Distinct interactions must not be merged.
4. Measurements must support sign and magnitude inference.

A practical structural criterion is residual coherence for component pairs. For classroom or bench data, using a tolerance like |[[FBx]] + [[FAx]]| <= 0.1 N and |[[FBy]] + [[FAy]]| <= 0.1 N is often sufficient to declare pair consistency within noise.

When residuals persist beyond tolerance, the issue is usually not third-law failure but model mapping failure: wrong pairing, omitted interaction channel, or projection inconsistency.

Transition to extended modeling is recommended when multiple contacts or time-varying coupling dominate and pair identification in the simple representation becomes ambiguous.

## Deep physical interpretation

Deep interpretation is not "equal and opposite" repetition. It is a causal map:

interaction definition -> reciprocal force pair -> separate body responses.

The pair relation constrains force structure, while response differences come from dynamics and inertia. If [[mA]] differs from [[mB]], accelerations [[aA]] and [[aB]] can differ even though interaction forces remain reciprocal.

This distinction explains many real systems: a light cart and a heavy cart push each other with equal interaction forces, yet the lighter one changes velocity more quickly. Thus reciprocity and unequal motion are compatible, not contradictory.

## Order of magnitude

Typical educational ranges are context-dependent but useful for sanity checks:

- [[FAB]], [[FBA]], [[Nab]], [[Nba]], [[N_gen]], [[W]]: from fractions of N to tens of N.
- [[FAx]], [[FBx]], [[FAy]], [[FBy]]: same force scale after projection.
- [[mA]], [[mB]]: from about 0.1 kg to several kg.
- [[aA]], [[aB]]: from hundredths to several m/s^2.
- [[v0]], [[vA]], [[vB]]: from small to moderate m/s in lab setups.
- [[t]]: from tenths of s to several s.
- [[g]]: near 9.8 m/s^2 for Earth-surface contexts.

## Personalized resolution method

1. Define bodies A and B explicitly.
2. Draw two free-body diagrams, one per body.
3. Identify the interaction pair labels ([[FAB]], [[FBA]]).
4. Apply vector or component third-law relations.
5. Check sign consistency and pair identity.
6. Interpret consequences for each body's motion using mass and net-force context.

## Special cases and extended example

Case A: horizontal push between two skaters with negligible friction.

Case B: inclined contact where y components [[FAy]] and [[FBy]] are nonzero and must remain opposite.

Case C: normal contact pair in stacked bodies, using [[Nab]] and [[Nba]] explicitly to avoid confusion with [[W]].

Extended case: two-body launch where equal interaction force acts during interval [[t]], producing different [[vA]] and [[vB]] because [[mA]] and [[mB]] are different.

## Real student questions

Why do equal interaction forces not produce equal velocities?

Because force pairing and motion response are governed by different laws. Pair equality is third law; velocity change depends on mass and net-force duration.

Can I cancel [[FAB]] and [[FBA]] in one equation?

Only if your equation describes the two-body combined system appropriately. Inside one body diagram, they should not both appear as internal canceling terms.

Is weight a reaction to normal force?

No. [[W]] and [[N_gen]] often oppose on one body but are not a third-law pair.

## Cross-cutting connections and study paths

This leaf connects with free-body diagrams, second law, impulse-momentum methods, collision analysis, and contact modeling.

Suggested path:

1. Pair identification with two diagrams.
2. Component reciprocity checks.
3. Contact normal pair reading.
4. Two-body response comparison with different masses.

## Final synthesis

Newton's third law is a structural rule about interactions between bodies. Mastering [[FAB]], [[FBA]], [[FAx]], [[FBx]], [[FAy]], [[FBy]], [[Nab]], and [[Nba]] gives reliable pair interpretation. Integrating these with [[mA]], [[mB]], [[aA]], [[aB]], [[v0]], [[vA]], [[vB]], [[t]], [[W]], [[N_gen]], and [[g]] gives full problem coherence.

With that frame, you can separate interaction reciprocity from motion response and avoid the most persistent conceptual errors in mechanics.

One final practical insight is that third-law mastery improves debugging speed in complex systems. When a model behaves unexpectedly, checking reciprocal pair identity often reveals the error source quickly: wrong body assignment, mixed interaction channels, or inconsistent axis projection. This diagnostic benefit is one reason the law remains central in both physics instruction and engineering workflows.
`;export{e as default};
