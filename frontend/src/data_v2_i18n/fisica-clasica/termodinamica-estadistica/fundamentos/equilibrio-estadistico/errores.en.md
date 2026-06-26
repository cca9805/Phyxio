## Conceptual errors


### Error 1: Believing that equilibrium means absence of transitions
**Why it seems correct**
The word equilibrium suggests stillness, so a system at rest with no jumps seems the natural image.
**Why it is incorrect**
In statistical equilibrium, transitions between states continue to occur. What vanishes is the net [[flujo_probabilidad]], not the microscopic activity itself.
**Detection signal**
The student claims that [[tasa_transicion]] must equal zero at equilibrium, or says the system has stopped moving.
**Conceptual correction**
Separate microscopic motion from statistical stability of [[probabilidad_estado]]. Equilibrium means the distribution is constant, not that individual copies are frozen.
**Mini-example of contrast**
Two states exchange population at equal rates. Their [[probabilidad_estado]] values remain fixed, but each copy keeps jumping between states continuously.


### Error 2: Confusing stationarity with detailed balance
**Why it seems correct**
Both conditions keep [[probabilidad_estado]] constant over [[tiempo]], so they appear equivalent when only occupations are observed.
**Why it is incorrect**
A system can have constant [[probabilidad_estado]] while carrying a persistent circular current of [[flujo_probabilidad]] among states. Stationarity is a weaker condition than detailed balance.
**Detection signal**
The student checks only that probabilities do not drift, without verifying that each pair of transitions is individually balanced.
**Conceptual correction**
Check

{{f:balance_detallado_dos_estados}}

for every pair of connected states, not just global stationarity.
**Mini-example of contrast**
Three states can maintain constant occupations while a clockwise probability current circulates through all three. Global stationarity holds; pairwise detailed balance does not.

## Model errors


### Error 3: Using [[peso_boltzmann]] without a stable thermal bath
**Why it seems correct**
The Boltzmann formula appears in almost every statistical physics context and seems applicable whenever a [[temperatura]] value is known.
**Why it is incorrect**
The [[peso_boltzmann]] requires a well-defined thermal bath that keeps [[temperatura]] constant and allows energy exchange. Without that bath, the formula has no statistical justification.
**Detection signal**
The [[temperatura]] changes during the observation window while a fixed Boltzmann distribution is used.
**Conceptual correction**
Always specify the thermal environment and its constraints before applying Boltzmann weights. Isolated systems need a microcanonical treatment, not a canonical one.
**Mini-example of contrast**
An isolated molecule with fixed total energy cannot be described by a Boltzmann factor. The same molecule in contact with a reservoir at a defined [[temperatura]] can.


### Error 4: Ignoring hidden accessible states
**Why it seems correct**
Only the measured states are visible, so it is natural to treat them as the complete set and normalize within that group.
**Why it is incorrect**
If the list of accessible states is incomplete, normalization fails and every [[probabilidad_estado]] is overestimated. A missing slow state can mimic a nonequilibrium current.
**Detection signal**
The sum of [[probabilidad_estado]] deviates noticeably from one, or the system seems to lose population over [[tiempo]].
**Conceptual correction**
Review the state space before diagnosing equilibrium. A detector that misses one slow state will incorrectly report an imbalance.
**Mini-example of contrast**
A two-state model built from only the fast states of a three-state system will show apparent [[flujo_probabilidad]] even when the full system is at equilibrium.

## Mathematical errors


### Error 5: Subtracting flows with an inverted sign
**Why it seems correct**
The indices of [[flujo_probabilidad]] look symmetric, so the subtraction direction seems arbitrary.
**Why it is incorrect**
The sign of [[flujo_probabilidad]] encodes the net direction of statistical transfer. Inverting the subtraction reverses the interpretation of which state is the net source.
**Detection signal**
The computed [[flujo_probabilidad]] contradicts the dominant arrow in the DCL diagram, or the sign changes when indices are swapped without justification.
**Conceptual correction**
Fix a convention before applying

{{f:flujo_probabilidad_neto}}

and keep it consistent throughout the calculation.
**Mini-example of contrast**
A positive [[flujo_probabilidad]] from A to B means B gains population relative to A. Swapping the label gives a positive flow from B to A, an entirely different physical statement.


### Error 6: Forgetting normalization
**Why it seems correct**
Each [[probabilidad_estado]] individually looks reasonable and lies between zero and one, so the full distribution seems valid.
**Why it is incorrect**
All [[probabilidad_estado]] together must exhaust the total statistical population. A distribution that sums to more or less than one does not represent a valid ensemble.
**Detection signal**
The total [[probabilidad_estado]] sum is noticeably above or below one when all states are included.
**Conceptual correction**
Apply

{{f:normalizacion_probabilidades}}

before interpreting any individual probability or flow.
**Mini-example of contrast**
Three plausible values of 0.45, 0.40, and 0.35 add to 1.20. None of them represents a valid [[probabilidad_estado]] until the list is renormalized.

## Interpretation errors


### Error 7: Reading [[entropia]] as featureless chaos
**Why it seems correct**
Everyday language equates [[entropia]] with disorder, chaos, or randomness, and these terms carry strong qualitative connotations.
**Why it is incorrect**
[[entropia]] in this context is a quantitative measure of how spread the [[probabilidad_estado]] distribution is over the accessible states. It is not a vague synonym for disorder.
**Detection signal**
The student describes [[entropia]] verbally without connecting it to any [[probabilidad_estado]] distribution or numerical calculation.
**Conceptual correction**
Read [[entropia]] from the distribution of occupations using the Gibbs formula. A more uniform distribution has higher [[entropia]]; a concentrated one has lower [[entropia]].
**Mini-example of contrast**
Two distributions over four states can have the same total [[energia_estado]] but different [[entropia]] values depending on how evenly the [[probabilidad_estado]] is spread.


### Error 8: Treating the DCL as a mechanical diagram
**Why it seems correct**
Diagrams with arrows naturally suggest force diagrams from mechanics, where arrows represent pushes and pulls.
**Why it is incorrect**
The arrows in a statistical DCL represent [[flujo_probabilidad]] between states, not mechanical forces. Compensated double arrows signal equilibrium, not force balance.
**Detection signal**
The student mentions newtons, acceleration, or forces when reading a statistical flow diagram.
**Conceptual correction**
Read each arrow as statistical traffic: how much [[probabilidad_estado]] per unit [[tiempo]] flows from one state to another. Double arrows that cancel indicate zero net [[flujo_probabilidad]].
**Mini-example of contrast**
A compensated double arrow between states A and B means [[flujo_probabilidad]] from A equals [[flujo_probabilidad]] from B, signaling equilibrium. It has nothing to do with mechanical equilibrium of forces.

## Quick self-control rule

Before accepting equilibrium, verify normalization, stationary [[probabilidad_estado]], and net [[flujo_probabilidad]] compatible with zero.