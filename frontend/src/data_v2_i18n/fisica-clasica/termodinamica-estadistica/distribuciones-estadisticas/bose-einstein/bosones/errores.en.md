## Conceptual errors


### Error 1: Treating [[ocupacion_media]] as a probability
**Why it seems correct**
Because [[ocupacion_media]] comes from a statistical distribution, it may look like the chance of finding one particle.

**Why it is incorrect**
[[ocupacion_media]] is the average number of bosons in one state. It can exceed 1 because several bosons may share the same quantum state.

**Detection signal**
The student is surprised by [[ocupacion_media]] above 1 or tries to force it between 0 and 1.

**Conceptual correction**
Read [[ocupacion_media]] as mean state population, not as a single-particle probability.

**Mini-example of contrast**
[[ocupacion_media]] of 3 does not mean 300% probability; it means three bosons on average in that state.


### Error 2: Thinking that bosons always condense
**Why it seems correct**
Bosons are often introduced together with Bose-Einstein condensation.

**Why it is incorrect**
Condensation requires suitable [[temperatura]], large enough [[densidad_particulas]], and comparison with [[densidad_critica]].

**Detection signal**
The student claims condensation only because the particles are bosons.

**Conceptual correction**
Estimate [[longitud_onda_termica]] and compare [[densidad_particulas]] with [[densidad_critica]].

**Mini-example of contrast**
A hot boson gas can have small [[ocupacion_media]] in each state and no condensate.

## Model errors


### Error 3: Using the ideal gas when interactions dominate
**Why it seems correct**
The ideal formulas are clean and are usually taught first.

**Why it is incorrect**
Strong interactions shift the effective [[energia]] of states and change the relation between [[ocupacion_media]], [[temperatura]], and [[potencial_quimico]].

**Detection signal**
Experimental data do not follow the expected curve even after units are corrected.

**Conceptual correction**
Use the ideal model as a reference, then switch to an interacting model when level shifts matter.

**Mini-example of contrast**
A dilute ultracold cloud may be close to ideal; a dense cloud with strong collisions needs corrections.


### Error 4: Ignoring the domain of [[potencial_quimico]]
**Why it seems correct**
In some thermodynamic problems, [[potencial_quimico]] feels like a freely chosen parameter.

**Why it is incorrect**
For an ideal boson gas, [[potencial_quimico]] cannot exceed the lowest accessible [[energia]] without breaking the statistical interpretation.

**Detection signal**
The calculation gives negative [[ocupacion_media]] or an unphysical divergence.

**Conceptual correction**
Always compare [[potencial_quimico]] with the minimum allowed [[energia]].

**Mini-example of contrast**
Approaching the ground-state [[energia]] raises occupation; crossing above it is not a valid ideal-gas description.

## Mathematical errors


### Error 5: Mixing units of [[energia]] and [[temperatura]]
**Why it seems correct**
[[temperatura]] controls thermal agitation, so it may look like an energy already.

**Why it is incorrect**
To compare with [[energia]] or [[potencial_quimico]], [[temperatura]] must be converted using [[constante_boltzmann]].

**Detection signal**
The work subtracts kelvin directly from joules or electronvolts.

**Conceptual correction**
Use [[constante_boltzmann]][[temperatura]] as the energy scale.

**Mini-example of contrast**
300 K is not subtracted from 0.02 eV without conversion.


### Error 6: Mishandling [[longitud_onda_termica]] in the degeneracy test
**Why it seems correct**
[[longitud_onda_termica]] looks like an auxiliary distance.

**Why it is incorrect**
The degeneracy criterion uses a quantum volume, so [[longitud_onda_termica]]^3 appears with [[densidad_particulas]].

**Detection signal**
The student compares [[densidad_particulas]] directly with [[longitud_onda_termica]].

**Conceptual correction**
Check dimensions: [[densidad_particulas]] is m^-3 and [[longitud_onda_termica]]^3 is m^3.

**Mini-example of contrast**
The correct product is dimensionless; comparing m^-3 with m is meaningless.

## Interpretation errors


### Error 7: Reading the graph as an ordinary straight line
**Why it seems correct**
Many school graphs are interpreted by constant slope.

**Why it is incorrect**
The curve of [[ocupacion_media]] against [[energia]] is not generally linear; its curvature contains the bosonic response to [[temperatura]] and [[potencial_quimico]].

**Detection signal**
The explanation mentions only slope and ignores the strong growth near low states.

**Conceptual correction**
Describe decrease, curvature, and regime: low occupation, enhanced bosonic occupation, or near accumulation.

**Mini-example of contrast**
Doubling [[energia]] does not imply dividing [[ocupacion_media]] by a fixed factor.


### Error 8: Treating [[densidad_critica]] as universal
**Why it seems correct**
The name sounds like a material constant.

**Why it is incorrect**
[[densidad_critica]] depends on [[temperatura]], [[masa_particula]], and the ideal model.

**Detection signal**
The same [[densidad_critica]] is used for different gases and temperatures.

**Conceptual correction**
Recalculate [[densidad_critica]] for each system and check [[longitud_onda_termica]].

**Mini-example of contrast**
A colder gas can condense at lower [[densidad_particulas]] than the same gas at higher [[temperatura]].

## Quick self-control rule

Before interpreting, check that [[ocupacion_media]] is not a probability, [[energia]] and [[potencial_quimico]] share units, and [[densidad_particulas]] is compared with [[densidad_critica]] only inside the ideal model.