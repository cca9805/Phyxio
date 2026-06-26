## Conceptual errors


### Error 1: Thinking every particle has exactly the [[energia_media]]
**Why it seems correct**
The word average can sound like one shared value assigned to every particle at equilibrium.
**Why it is incorrect**
Equilibrium still contains a distribution of energies. [[energia_media]] summarizes the set, but individual particles may lie above or below it.
**Detection signal**
The student says that one particle must always have the calculated energy.
**Conceptual correction**
Read [[energia_media]] as a statistical average, not as an individual identity card.
**Mini-example of contrast**
At the same [[temperatura]], two particles may have different speeds while belonging to the same equilibrium gas.


### Error 2: Thinking more [[numero_particulas]] raises [[energia_media]]
**Why it seems correct**
More particles seem to mean more available energy.
**Why it is incorrect**
At fixed [[temperatura]], more [[numero_particulas]] increases [[energia_total]], not the per-particle average.
**Detection signal**
The student doubles [[energia_media]] after doubling [[numero_particulas]].
**Conceptual correction**
Separate intensive and extensive quantities: [[energia_media]] depends on [[temperatura]], while [[energia_total]] also depends on [[numero_particulas]].
**Mini-example of contrast**
Two containers at 300 K can have the same [[energia_media]] even if one contains ten times more particles.

## Model errors


### Error 3: Using the classical model at any [[temperatura]]
**Why it seems correct**
The linear formula looks universal and simple.
**Why it is incorrect**
At low [[temperatura]], quantum effects may dominate and classical equipartition can fail.
**Detection signal**
The straight line is extrapolated into cryogenic regimes without checking assumptions.
**Conceptual correction**
Check that the gas is classical, dilute, and has effectively continuous accessible energies.
**Mini-example of contrast**
A light gas at a few kelvin may require quantum statistics instead of only

{{f:energia_media_particula}}

.


### Error 4: Applying translational energy to all molecular energy
**Why it seems correct**
[[energia_total]] sounds like it includes everything.
**Why it is incorrect**
This leaf treats translational kinetic energy; rotation, vibration, or ionization may add contributions.
**Detection signal**

{{f:energia_total_temperatura}}

is used for hot molecules without checking internal modes.
**Conceptual correction**
Identify which energetic degrees of freedom are active before choosing the model.
**Mini-example of contrast**
A moderate monatomic gas can follow this model; a vibrating molecule at high [[temperatura]] may need more terms.

## Mathematical errors


### Error 5: Substituting [[temperatura]] in degrees Celsius
**Why it seems correct**
Daily thermometers commonly show °C.
**Why it is incorrect**
The relation uses absolute [[temperatura]]; Celsius zero is not zero thermal energy.
**Detection signal**
At 27 °C the student substitutes 27 instead of about 300 K.
**Conceptual correction**
Always convert to kelvin before using [[k_boltzmann]].
**Mini-example of contrast**
27 K and 300 K are very different thermal states, even though 27 °C is room temperature.


### Error 6: Losing the units of [[k_boltzmann]]
**Why it seems correct**
The constant is tiny and may look like a decorative number.
**Why it is incorrect**
[[k_boltzmann]] converts kelvin into joules per particle; without units, the dimension breaks.
**Detection signal**
The result for [[energia_media]] is left in K or with no unit.
**Conceptual correction**
Check that J/K multiplied by K gives J.
**Mini-example of contrast**

{{f:energia_media_particula}}

must end in joules, not degrees or particles.

## Interpretation errors


### Error 7: Reading [[energia_media]] as directly macroscopic energy
**Why it seems correct**
The joule is also used for everyday energies.
**Why it is incorrect**
Per-particle [[energia_media]] is around 10^-21 J at room temperature.
**Detection signal**
The student expects one particle's energy to heat a visible object.
**Conceptual correction**
Use [[energia_total]] for the whole gas and [[energia_media]] for the microscopic level.
**Mini-example of contrast**
One particle has tiny energy; one mole contains about 10^23 particles.


### Error 8: Making the graph slope depend on [[numero_particulas]]
**Why it seems correct**
Gas problems often contain [[numero_particulas]].
**Why it is incorrect**
The slope of [[energia_media]] versus [[temperatura]] depends on [[k_boltzmann]], not on sample size.
**Detection signal**
The student changes the per-particle graph when only the amount of gas changes.
**Conceptual correction**
Reserve [[numero_particulas]] for [[energia_total]].
**Mini-example of contrast**
Two samples at the same [[temperatura]] have the same [[energia_media]] but different [[energia_total]].

## Quick self-control rule

Before accepting the result, check kelvin, joules, the distinction between [[energia_media]] and [[energia_total]], and the classical ideal-gas equilibrium assumptions.