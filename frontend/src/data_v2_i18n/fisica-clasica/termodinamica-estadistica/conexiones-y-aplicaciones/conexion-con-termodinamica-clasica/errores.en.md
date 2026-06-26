## Conceptual errors


### Error 1: Reading entropy as visual disorder
**Why it seems correct**
Introductory explanations often use the word disorder, so the idea feels natural when imagining a gas spreading.

**Why it is incorrect**
[[entropia]] is tied to [[numero_microestados]], not to visual appearance. Two visually similar systems may have different microscopic multiplicities.

**Detection signal**
The explanation never mentions microstates or macroscopic constraints.

**Conceptual correction**
Read [[entropia]] as multiplicity compatible with a macrostate.

**Mini-example of contrast**
A crystalline solid can have relevant vibrational entropy even while looking ordered.


### Error 2: Treating temperature as average energy only
**Why it seems correct**
In many examples, higher internal energy accompanies higher temperature.

**Why it is incorrect**
[[temperatura]] is connected to [[derivada_entropia_energia]], so it depends on how [[entropia]] changes with [[energia_interna]].

**Detection signal**
The argument says doubling energy always doubles temperature.

**Conceptual correction**
Interpret [[temperatura]] as an equilibrium variable linked to entropy slope.

**Mini-example of contrast**
During a transition, energy can be added without a large temperature increase.

## Model errors


### Error 3: Applying Boltzmann weights outside equilibrium
**Why it seems correct**
The formula looks compact and universal.

**Why it is incorrect**
Boltzmann weights assume specific statistical conditions and a well-defined [[temperatura]].

**Detection signal**
It is used for a rapidly evolving system without justifying equilibrium.

**Conceptual correction**
Check the ensemble or quasi-equilibrium regime first.

**Mini-example of contrast**
A gas just released into a chamber need not have a uniform temperature immediately.


### Error 4: Ignoring the domain of free energy
**Why it seems correct**
[[energia_libre]] sounds like useful energy in every situation.

**Why it is incorrect**
Its reading depends on fixed-temperature constraints and the balance between [[energia_interna]] and [[entropia]].

**Detection signal**
[[energia_libre]] is used without specifying thermal conditions.

**Conceptual correction**
State the thermal environment before interpreting the potential.

**Mini-example of contrast**
At variable temperature, another thermodynamic potential may be more appropriate.

## Mathematical errors


### Error 5: Dropping Boltzmann's constant
**Why it seems correct**
The logarithm of microstates already seems to capture growth.

**Why it is incorrect**
[[constante_boltzmann]] supplies units and scale; without it, [[entropia]] is not in SI units.

**Detection signal**
A dimensionless result appears where J/K was expected.

**Conceptual correction**
Keep the constant in the micro-macro conversion.

**Mini-example of contrast**
A pure logarithm cannot be compared with calorimetric entropy.


### Error 6: Confusing probability with energy
**Why it seems correct**
The Boltzmann expression connects [[probabilidad_relativa]] with [[energia_estado]].

**Why it is incorrect**
Relative probability is dimensionless; state energy has energy units.

**Detection signal**
Probabilities and energies are added as if they were the same kind of quantity.

**Conceptual correction**
Separate statistical weight from energy scale.

**Mini-example of contrast**
A high-energy state can still have low statistical weight.

## Interpretation errors


### Error 7: Extrapolating a graph outside its domain
**Why it seems correct**
A smooth curve invites extension.

**Why it is incorrect**
The classical connection depends on the domain of microstates, equilibrium, and system size.

**Detection signal**
Values outside the plotted range are interpreted without model justification.

**Conceptual correction**
Read the Coord graph only within its declared domain.

**Mini-example of contrast**
A trend valid for many microstates need not describe a two-state system.


### Error 8: Treating a probable state as the only state
**Why it seems correct**
The dominant state is often the one observed macroscopically.

**Why it is incorrect**
[[probabilidad_relativa]] compares weights, but it does not erase fluctuations or alternative states.

**Detection signal**
The explanation says all other states “do not exist.”

**Conceptual correction**
Speak about statistical dominance, not absolute exclusion.

**Mini-example of contrast**
At high temperature, several energy states can have similar weights.

## Quick self-control rule

Before interpreting, check microstates, units, graph domain, equilibrium, and the connected classical variable.