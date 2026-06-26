# Gravitational Potential Energy

## Conceptual context

This leaf studies [[Ug]] as a state energy linked to vertical position in local gravity. The central pedagogical point is simple but powerful: we must separate state from transfer. State is described by [[Ug]], change between states by [[dUg]], and process transfer by [[Wg]]. If students mix these ideas, they can still compute numbers but they cannot explain what the numbers mean.

In many early exercises, learners try to memorize one expression and apply it everywhere. That strategy usually fails as soon as references, signs, or process direction become nontrivial. The real goal of this topic is to build a stable reasoning sequence: define reference, compare states, select relation, and justify sign.

Operational goal of the leaf:
- Understand why potential energy depends on reference level.
- Use the three core relations with explicit validity criteria.
- Connect vertical state change to gravitational work sign.
- Integrate results into broader mechanical-energy balances.

## 🟢 Essential level

At essential level, the student should answer one question before any substitution: what physically changed between initial and final state. If the final state is higher in the same reference, [[dUg]] must be positive. If it is lower, [[dUg]] must be negative. This prediction step is the fastest way to prevent sign errors later.

Another essential idea is reference dependence. [[Ug]] has no universal zero. A floor, platform, or midpoint can all be valid zeros, as long as the same choice is maintained throughout the calculation. Therefore, arguing whether a state value is positive or negative is less important than guaranteeing reference consistency.

A common beginner error is to think that choosing [[Ug]] equal to zero at one location means gravity is gone there. That is incorrect. Zero level is a bookkeeping convention, not a physical switch. Gravity still acts; only the state label changes.

Essential mastery also means distinguishing height level from traveled distance. Two different paths can lead to the same final height and therefore the same [[dUg]] under the same assumptions. The leaf is state-oriented at this stage, not trajectory-oriented.

## 🔵 Formal level

Core mathematical architecture for this leaf:

{{f:potencial_gravitatorio_superficie}}

{{f:variacion_potencial_gravitatorio}}

{{f:trabajo_gravitatorio}}

Variables with direct physical role:
- [[Ug]] as state energy at a chosen level.
- [[m]] as scaling parameter for energy magnitude.
- [[g]] as local gravity intensity parameter.
- [[h]] as vertical coordinate in one reference.
- [[hi]] and [[hf]] as initial and final state levels.
- [[dUg]] as state-to-state change.
- [[Wg]] as process work by gravity.

Formal equation selection strategy:
- Use the first relation when target is state value at one level.
- Use the second relation when target is state change between levels.
- Use the third relation when target is gravitational work or sign coherence in a conservative setup.

Formal quality checks are mandatory. Unit coherence requires SI values for [[m]], [[g]], and heights. Reference coherence requires one zero level for all state comparisons. Sign coherence requires consistency between process direction and predicted change sign. If any check fails, the issue is not just algebra; the model setup must be reviewed.

This formal level should not become formula recitation. Each symbolic step should map to a physical statement. For example, writing [[hf]] minus [[hi]] is not a typing action; it encodes process orientation. Writing opposite sign between [[Wg]] and [[dUg]] is not convention memorization; it encodes conservative transfer logic.

## 🔴 Structural level

### Model hypotheses
- Local gravitational field can be treated as approximately uniform.
- Initial and final heights share one common reference.
- Classical mechanics with SI consistency is sufficient.

### Validity domain
- The local model works robustly for moderate vertical spans.
- It becomes weak when spatial scale or required precision exceeds local assumptions.

### What changes when hypotheses fail
- Energy-height relation must be updated.
- Interpretation confidence decreases even if algebra still closes.
- Sign and magnitude checks must be revisited with the new model.

Structural reasoning is the difference between computing and modeling. A student with structural control can explain when the method should be changed, not only how to execute the current one. This capability is essential for moving from classroom exercises to engineering judgment.

## Deep physical interpretation

The deepest interpretation of this leaf is causal consistency between state and transfer. [[Ug]] tells where the system sits in a potential-energy landscape under a chosen reference. [[dUg]] tells whether the state moved upward or downward in that landscape. [[Wg]] tells whether gravity delivered energy to the system or absorbed it from the process.

A practical expert habit is to predict sign before calculation. During ascent, expected [[dUg]] is positive and expected [[Wg]] is negative in a conservative reading. During descent, signs swap. If numerical results violate this prediction without explicit model reason, there is likely a reference or ordering mistake.

Another interpretation layer concerns communicability. A technically correct result is not enough if it cannot be explained in plain physical language. Good answers should state what changed, why sign is coherent, and how confident we are about model validity.

## Order of magnitude

In introductory contexts, masses often range from fractions of kilograms to hundreds of kilograms, while height changes range from decimeters to tens of meters. Under these conditions, [[Ug]] and [[dUg]] usually fall between tens and thousands of joules.

Order-of-magnitude checks are fast and effective. Extremely large energies for tiny height changes often indicate unit errors. Unexpected signs usually indicate reference inconsistency or inverted state ordering. These checks do not replace formal computation, but they detect unrealistic outputs early.

## Personalized resolution method

1. Define system boundary and one vertical reference.
2. Identify the target quantity among [[Ug]], [[dUg]], and [[Wg]].
3. Write symbolic relation first, then substitute SI data.
4. Validate units, sign, and expected process trend.
5. Close with a physical sentence connecting state and transfer.

Leaf checkpoint before submission: confirm that [[hi]] and [[hf]] were read in the same reference and that [[Wg]] is coherent with [[dUg]].

## Special cases and extended example

Special process patterns:
- Ascent powered by external source: positive [[dUg]] and negative [[Wg]].
- Ideal descent: negative [[dUg]] and positive [[Wg]].
- Round trip to same level: net [[dUg]] close to zero.

Extended procedure:
1. Classify process direction in physical terms.
2. Fix reference and ensure SI-ready data.
3. Compute target quantity with the corresponding relation.
4. Compare sign with pre-computation prediction.
5. Add validity note and final interpretation.

This extended workflow is especially useful for multi-step problems where state labels can drift. Explicitly documenting reference and sign expectations at each stage prevents hidden contradictions.

## Real student questions

- **What is the most important model decision before computing?**  
	Choose one vertical reference and keep it throughout the full solution.

- **Why is a single [[Ug]] value not enough?**  
	Because absolute state value depends on chosen zero; process meaning appears in [[dUg]] and [[Wg]].

- **When should I use [[dUg]] instead of [[Ug]]?**  
	When the problem compares two states rather than describing one state.

- **How can I detect sign errors quickly?**  
	Predict ascent or descent sign pattern before substitution and compare with output.

- **How do I defend a final answer physically?**  
	Show consistency among reference choice, unit coherence, sign logic, and model validity.

## Cross-cutting connections and study paths

Structural concepts connected to this leaf:
- [fundamentos/conceptos-estructurales/sistema-fisico](leaf:fundamentos/conceptos-estructurales/sistema-fisico): boundary and state definition.
- [fundamentos/conceptos-estructurales/conservacion](leaf:fundamentos/conceptos-estructurales/conservacion): energy-balance logic.
- [fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez](leaf:fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez): model switching criteria.

Follow-up paths in mechanics:
- [fisica-clasica/mecanica/trabajo-y-energia/fundamentos/trabajo](leaf:fisica-clasica/mecanica/trabajo-y-energia/fundamentos/trabajo): transfer interpretation.
- [fisica-clasica/mecanica/trabajo-y-energia/energia-cinetica](leaf:fisica-clasica/mecanica/trabajo-y-energia/energia-cinetica): complete mechanical balances.
- [fisica-clasica/mecanica/trabajo-y-energia/energia-potencial/energia-potencial-elastica](leaf:fisica-clasica/mecanica/trabajo-y-energia/energia-potencial/energia-potencial-elastica): compare state-energy families.

## Final synthesis

High-level mastery in this leaf means treating height as a state descriptor, not merely a geometric input. The robust sequence is stable across many problems: clear reference, correct relation choice, sign validation, and causal interpretation.

When this sequence is internalized, students move from formula execution to physical modeling. They can explain not only what number appears, but why that number is plausible, when it may fail, and how to adapt the model when assumptions change.