const e=`# Physical Models: Conservation Applications

## Ideal Model

The ideal model of conservation applications assumes that it is sufficient to use momentum conservation as a resolution and estimation tool. Only the essential structure is kept so that the main relationship describes the dominant mechanism and the diagram reading remains clean. At this level, secondary details of the material, fluid, or contact are eliminated because they do not yet change the essential conclusion. This simplification is valuable as long as the student can explain what phenomenon has been discarded and why its absence does not alter the main interpretation of the variable [[P]].

## Hypotheses

The fundamental hypotheses of this model are:
- Bodies treated as particles or rigid systems with no significant internal deformation.
- Absence of net external forces during the interaction (perfect isolation).
- Inertial reference frame for measuring [[v1i]] and [[v1f]].
- Interaction duration negligible compared to global observation times.

Any violation of these conditions requires reviewing whether the model is still applicable or if an extension is required.

## Quantitative Validity Domain

The quantitative validity domain must be declared with verifiable thresholds. As a minimum rule, it is advisable to require relative variations of less than 1%, negligible errors, and consistent geometric scales. If the external impulse accumulated during the time interval is greater than 1% of the initial momentum [[Pinitial]], the sought magnitude ceases to be reliable even if the numerical substitution seems correct. Declaring the domain forces a justification of why the problem truly belongs to the regime described by the leaf.

## Model Failure Signals

Model failure signals usually do not start in the calculator, but in the physical reading. An unexpected change of sign in the final velocity [[v1f]], a reaction that is physically impossible, or a trend incompatible with laboratory problems indicates that the isolation hypothesis has been broken. It is also suspicious if a supposedly small correction dominates the entire balance expression or changes the order of magnitude of the final result [[Pfinal]].

## Extended or Alternative Model

The extended model introduces corrections when the hypotheses of rigidity, contact, speed, or reference frame change. In that expansion, terms associated with real geometry, medium variations, or dissipative forces reappear. The goal is not to complicate for the sake of it, but to decide which refinement truly changes the prediction and which only adds algebraic noise. A good criterion consists of comparing how much the common final velocity [[vf]] is modified when activating each correction separately.

### Transition to Alternative Model

**When to switch models:** Switching to the extended model or a non-inertial reference frame is mandatory in the following cases:
1. **Dominant External Forces:** If the system is subject to external impulses (friction, gravity, engines) that cannot be neglected within the time window of the event.
2. **Relativistic Effects:** When velocities approach a significant fraction of the speed of light, where the [[Pinitial]] = [[Pfinal]] balance must be reformulated using four-momentum.
3. **Variable Mass Systems:** If the body continuously gains or loses mass during motion (as in sustained rocket propulsion), the transition to the variable mass model is required.
4. **Non-Rigid Collisions:** When internal deformation or rotation captures a critical fraction of the momentum, requiring the use of real solid models or angular momentum conservation.

## Operational Comparison

Comparing with alternative models serves to decide whether a static, dynamic, linear, or purely geometric description is appropriate. The best choice is the one that preserves physical meaning with the fewest debatable assumptions and with a verifiable interpretation in the real-world scenario. Comparing models is not a formality: it is the step that avoids applying the first equation one remembers by habit.
`;export{e as default};
