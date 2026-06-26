## Conceptual errors


### Error 1: Thinking that a probable macrostate pushes the system
**Why it seems correct**
Highly probable macrostates appear often, so it feels natural to imagine a mechanical tendency.

**Why it is incorrect**
Probability is not a force. [[probabilidad_macroestado]] measures a fraction of compatible microstates inside [[numero_microestados_total]].

**Detection signal**
The student says the final state occurs because entropy pulls the system.

**Conceptual correction**
Read probability as statistical weight: larger [[numero_microestados_macro]] means more ways to look the same, not a new interaction.

**Mini-example of contrast**
A die does not feel a force toward six; if an outcome groups more possible faces, it appears more often by counting.


### Error 2: Confusing microstate and macrostate
**Why it seems correct**
Both describe the same system, and both use the word state.

**Why it is incorrect**
A microstate fixes microscopic details; a macrostate groups many microstates. [[numero_microestados_macro]] counts that grouping.

**Detection signal**
The student treats [[numero_microestados_macro]] as a directly visible macroscopic variable.

**Conceptual correction**
Separate external appearance from compatible internal configurations.

**Mini-example of contrast**
Two gases with the same pressure may hide different molecular arrangements; those arrangements are microstates.

## Model errors


### Error 3: Comparing probabilities under different constraints
**Why it seems correct**
Both quantities look like probabilities and have the same numerical format.

**Why it is incorrect**
[[probabilidad_inicial]] and [[probabilidad_final]] are comparable only if they share [[numero_microestados_total]] or an equivalent accessible space.

**Detection signal**
The calculation changes energy, volume, or particle number between states without redefining the accessible set.

**Conceptual correction**
Before using [[ratio_probabilidades]], check that both macrostates belong to the same model.

**Mini-example of contrast**
Comparing a closed box with a box connected to a thermal bath mixes statistical rules.


### Error 4: Assuming equiprobability out of equilibrium
**Why it seems correct**
Simple counting is elegant and works in many basic exercises.

**Why it is incorrect**
If dynamics favors some regions or blocks others, not all microstates are equally accessible.

**Detection signal**
The system remembers its preparation or takes too long to explore possible states.

**Conceptual correction**
Use a weighted distribution or a dynamic model when equiprobability is not justified.

**Mini-example of contrast**
A gas just released after removing a wall does not instantly explore all [[numero_microestados_total]].

## Mathematical errors


### Error 5: Getting a probability greater than one
**Why it seems correct**
When manipulating large ratios, the physical numerator can be forgotten.

**Why it is incorrect**
[[numero_microestados_macro]] cannot exceed [[numero_microestados_total]] if both are correctly defined.

**Detection signal**
The result for [[probabilidad_macroestado]] is above 1 or a percentage above 100%.

**Conceptual correction**
Review the counting and check that the total includes the counted macrostate.

**Mini-example of contrast**
If there are 200 favorable microstates out of 100 total, the total is wrongly defined.


### Error 6: Treating [[delta_entropia]] as the direct ratio
**Why it seems correct**
Entropy and probability are connected, and the logarithm may be overlooked.

**Why it is incorrect**
[[delta_entropia]] measures logarithmic change in weight; [[ratio_probabilidades]] is the multiplicative factor.

**Detection signal**
The student adds entropies when they should compare multiplicities or exponentiate when reversing the relation.

**Conceptual correction**
Keep the logarithmic scale separate from the ratio scale.

**Mini-example of contrast**
A small increase in [[delta_entropia]] can represent a large change in [[ratio_probabilidades]].

## Interpretation errors


### Error 7: Reading a rare macrostate as impossible
**Why it seems correct**
In macroscopic systems, some probabilities are so tiny that they seem zero.

**Why it is incorrect**
Rare does not mean forbidden. If [[numero_microestados_macro]] is positive, the macrostate has statistical weight.

**Detection signal**
The student claims a state with low [[probabilidad_macroestado]] can never appear.

**Conceptual correction**
Distinguish physical impossibility from practical improbability.

**Mini-example of contrast**
All particles in half a box is possible in principle, although extraordinarily rare for many particles.


### Error 8: Assigning a spatial direction to the sign of [[delta_entropia]]
**Why it seems correct**
The Delta symbol may suggest oriented displacement or motion.

**Why it is incorrect**
The sign of [[delta_entropia]] indicates growth or reduction of statistical weight, not motion upward, rightward, or outward.

**Detection signal**
The student describes positive [[delta_entropia]] as a geometric trajectory.

**Conceptual correction**
Interpret the sign as a comparison of multiplicities between states.

**Mini-example of contrast**
If [[numero_microestados_final]] is larger than [[numero_microestados_inicial]], the sign says the final multiplicity is greater.

## Quick self-control rule

Always check three things: counts are positive, [[probabilidad_macroestado]] lies between zero and one, and [[ratio_probabilidades]] compares macrostates within the same accessible space.