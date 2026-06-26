# Elastic Potential Energy

## Conceptual context

[[Ue]] is the energy stored by deforming an ideal spring relative to its natural length. In the linear Hooke regime, the stored energy grows with the square of the deformation, so compression and extension are described by the same state law. That makes the topic especially useful when a spring either supplies energy or receives it inside a mechanical balance.

The operational goal of the leaf is to understand how the elastic element behaves as an energy reservoir. The key question is not only how much energy the spring has, but also what state variable controls that energy and under what assumptions the model is reliable.

## 🟢 Essential level

The essential reading starts from the physical question: what part of the system stores energy, and in which variable is that storage expressed? Here the answer is the spring, and the operational variable is the deformation [[x]]. If the reference point is not fixed before calculating, the numerical result may look correct while being physically meaningless.

In elementary problems, the essential task is to decide whether the spring acts as an energy store, an energy supplier, or one element of a larger system. That decision comes before substitution. Elastic energy does not measure a path length or an isolated force; it describes a deformation state.

## 🔵 Formal level

The fundamental relation is:

{{f:potencial_elastico_basico}}

The change between two deformations is:

{{f:variacion_potencial_elastico}}

The work of the elastic force is:

{{f:trabajo_fuerza_elastica}}

Direct physical variables:
- [[Ue]]: elastic potential energy.
- [[k]]: spring constant.
- [[x]]: deformation.
- [[xi]]: initial deformation.
- [[xf]]: final deformation.
- [[dUe]]: change in elastic potential energy.
- [[We]]: work done by the elastic force.

Equation-selection strategy:
- The fundamental [[Ue]] relation is the right choice when the problem asks for stored energy at one deformation.
- The two-state variation is the correct option when the statement compares two configurations of the same spring.
- The spring-work form is used when the statement asks for energy delivered by the spring or absorbed by it.

## 🔴 Structural level

### Hypotheses
- Linear elastic regime and valid Hooke behavior.
- Deformation measured from the natural length.
- Ideal spring with negligible dissipation.

### Quantitative validity domain
- The model is valid in classical mechanics as long as force remains proportional to deformation.
- If nonlinearity, hysteresis, or plasticity appears, the model must be changed before concluding.

### What changes when a hypothesis fails
- The active equations change and the physical sign of the interpretation may change.
- Validation must include order of magnitude, sign consistency, and comparison between states.

## Deep physical interpretation

The central relation of the leaf is the one already established in the formal level. This expression does more than compute energy. It shows that elastic storage is quadratic, so a larger deformation grows faster than the deformation itself. That is why springs are useful in storage, launch systems, and buffering devices: a small change in [[x]] can produce a large change in [[Ue]].

Seen at the system level, the important point is not the isolated number but the state-based reading. Once the learner understands that the spring is a state-energy reservoir, it becomes easier to compare configurations, predict the direction of change, and decide whether energy is being accumulated or returned to the rest of the mechanism. That is the bridge between the formula and the real physics of the problem.

## Order of magnitude

In school-level problems, [[k]] is often between tens and thousands of N/m, while [[x]] is usually measured in centimetres or decimetres before conversion to SI. Under those ranges, [[Ue]] can go from fractions of a joule to several hundred joules. If a small deformation produces an unexpectedly large energy, the first suspect is a unit-conversion error.

## Personalized resolution method

1. Define the system and fix the deformation reference at the natural length.
2. Decide whether the statement asks for energy, energy variation, or spring work.
3. Write the chosen formula symbolically before substituting numbers.
4. Convert all quantities to SI and check signs, units, and trends.

Control point: before closing the solution, confirm that [[Ue]], [[dUe]], and [[We]] belong to the same process and the same spring.

## Special cases and extended example

Special cases of **Elastic Potential Energy**:
- Ideal conservative case: total mechanical energy is split between [[Ue]] and kinetic energy.
- Dissipative case: the balance includes mechanical loss and not all stored energy returns.
- Two-state comparison case: [[dUe]] summarizes the change between two deformations.

Operational examples:
- Stored-energy case: when [[k]] and a single [[x]] are known, compute [[Ue]].
- Two-state case: when [[xi]] and [[xf]] are known, compute [[dUe]].
- Spring-work case: when the spring delivers energy, use [[We]].

Extended example guide:
1. Classify whether the spring is storing or releasing energy.
2. Solve symbolically for the target quantity.
3. Substitute SI data.
4. Compare the result with the expected trend: larger deformation means larger stored energy.
5. Write a physical conclusion, not only a numeric one.

## Real student questions

- **What is the most important modeling decision before calculating elastic energy?**  
  Fix the system, hypotheses, and validity domain before using work-energy balances.

- **What physical reading does the [[Ue]] relation provide?**  
  It shows how much energy is stored by deformation of the elastic element and how that energy changes when [[x]] changes.

- **When should [[Ue]] be used instead of [[dUe]]?**  
  Use the first if the statement asks for energy in one state; use the second if it compares two states.

- **What is a common interpretation error with [[Ue]] and [[k]]?**  
  Confusing stored energy with stiffness or mixing the units of the two quantities.

- **How do I validate that the final result is physically defensible?**  
  Check sign, units, order of magnitude, and consistency with how the spring should behave.

## Cross-cutting connections and study paths

Structural concepts involved:
- [fundamentos/conceptos-estructurales/sistema-fisico](leaf:fundamentos/conceptos-estructurales/sistema-fisico): defines boundary, surroundings, and relevant variables.
- [fundamentos/conceptos-estructurales/estado-del-sistema](leaf:fundamentos/conceptos-estructurales/estado-del-sistema): organizes state variables and their evolution.
- [fundamentos/conceptos-estructurales/interacciones-y-fuerzas](leaf:fundamentos/conceptos-estructurales/interacciones-y-fuerzas): identifies the actions that govern behavior.
- [fundamentos/conceptos-estructurales/fuerza-neta-y-resultante](leaf:fundamentos/conceptos-estructurales/fuerza-neta-y-resultante): links balances with the system's dynamic response.
- [fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez](leaf:fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez): avoids applying equations outside the valid regime.
- [fundamentos/conceptos-estructurales/conservacion](leaf:fundamentos/conceptos-estructurales/conservacion): integrates invariants and energy transfers relevant to the problem.

Continuity paths in mechanics:
- [fisica-clasica/mecanica/trabajo-y-energia/fundamentos/trabajo-fuerza-variable](leaf:fisica-clasica/mecanica/trabajo-y-energia/fundamentos/trabajo-fuerza-variable): direct continuity for extending the analysis.
- [fisica-clasica/mecanica/dinamica/fuerzas/fuerza-elastica/ley-de-hooke](leaf:fisica-clasica/mecanica/dinamica/fuerzas/fuerza-elastica/ley-de-hooke): direct continuity for extending the analysis.
- [fisica-clasica/mecanica/trabajo-y-energia/energia-potencial/energia-potencial-gravitatoria](leaf:fisica-clasica/mecanica/trabajo-y-energia/energia-potencial/energia-potencial-gravitatoria): direct continuity for extending the analysis.

## Final synthesis

Mastering **Elastic Potential Energy** means reading the spring as a state-energy reservoir rather than only as a force source. The practical rule is simple: first fix the deformation reference, then choose between [[Ue]], [[dUe]], and [[We]], and finally interpret the result in the same physical system.

A good solution does not end with the number. It ends when the sign, the unit, and the physical trend all match what the spring actually does. If the same setup is analyzed under a slightly different compression, the learner should be able to predict the direction of the change before calculating. That is the level of physical control this leaf is meant to build.