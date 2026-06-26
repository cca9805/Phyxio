## Conceptual errors


### Error 1: Treating [[temperatura_debye]] as a phase-transition [[temperatura]]

**Why it seems correct**
It contains the word [[temperatura]] and often appears as a boundary on graphs.

**Why it is incorrect**
[[temperatura_debye]] is a vibrational scale linked to [[frecuencia_debye]], not a point where the solid must change structure.

**Detection signal**
The student expects a sharp jump in [[calor_especifico]] exactly at [[temperatura_debye]].

**Conceptual correction**
Read it as the comparison scale for the thermally accessible phonon spectrum.

**Mini-example of contrast**
A solid with [[temperatura_debye]] of 400 K may pass through 400 K while its heat-capacity curve changes smoothly.


### Error 2: Assuming all modes are active at every [[temperatura]]

**Why it seems correct**
Classical equipartition suggests that every quadratic degree of freedom receives energy.

**Why it is incorrect**
At low [[temperatura]], many phonon modes have quantum energies too large to be populated appreciably.

**Detection signal**
The Dulong-Petit limit is used when [[temperatura]]/[[temperatura_debye]] < 0.1.

**Conceptual correction**
Compare [[temperatura]] with [[temperatura_debye]] before choosing the thermal regime.

**Mini-example of contrast**
At 10 K, a solid with [[temperatura_debye]] of 300 K is far from its high-[[temperatura]] [[calor_especifico_molar]].

## Model errors


### Error 3: Applying pure Debye behavior to a complex crystal

**Why it seems correct**
The model is introduced as a model for solids.

**Why it is incorrect**
Crystals with several atoms per unit cell can have optical phonons not captured by a single [[funcion_debye]].

**Detection signal**
The fit fails in the intermediate region even if low and high [[temperatura]] behavior look plausible.

**Conceptual correction**
Use a Debye-Einstein model or a measured density of states when extra branches matter.

**Mini-example of contrast**
A simple monoatomic crystal may follow Debye well; a complex ionic solid may require optical-mode terms.


### Error 4: Ignoring electronic heat capacity in metals

**Why it seems correct**
This leaf focuses on phonons, so all [[calor_especifico]] may be attributed to lattice vibrations.

**Why it is incorrect**
In metals, electrons near the Fermi level can add a low-[[temperatura]] contribution.

**Detection signal**
The low-[[temperatura]] curve is not purely cubic.

**Conceptual correction**
Separate electronic and phonon terms before extracting [[temperatura_debye]].

**Mini-example of contrast**
An insulator may show a clean T³ law; a metal may show a linear term plus a cubic term.

## Mathematical errors


### Error 5: Reversing the reduced [[temperatura]] ratio

**Why it seems correct**
Both ratios are dimensionless and appear in Debye integrals.

**Why it is incorrect**
The physical regime changes if [[temperatura]]/[[temperatura_debye]] is replaced by its inverse.

**Detection signal**
A low-[[temperatura]] case is classified as high-[[temperatura]] behavior.

**Conceptual correction**
Define [[temperatura_reducida]] clearly and keep the same convention throughout the calculation.

**Mini-example of contrast**
If [[temperatura]] is 30 K and [[temperatura_debye]] is 300 K, T/ΘD is 0.1, not 10.


### Error 6: Mixing molar and total heat capacities

**Why it seems correct**
[[calor_especifico]] and [[calor_especifico_molar]] describe similar thermal response.

**Why it is incorrect**
One refers to the modeled sample and may depend on [[numero_atomos]], while the molar quantity uses [[constante_gases]].

**Detection signal**
The final units are J K⁻¹ when J mol⁻¹ K⁻¹ was requested, or the reverse.

**Conceptual correction**
Check whether the problem asks for sample, atom, or mole before substituting.

**Mini-example of contrast**
The 3R limit belongs to [[calor_especifico_molar]], not to the total heat capacity of any arbitrary sample.

## Interpretation errors


### Error 7: Reading low [[calor_especifico]] as “no microscopic energy”

**Why it seems correct**
A low heat capacity sounds like the solid stores almost no energy.

**Why it is incorrect**
It means few additional modes are activated by raising [[temperatura]], not that atoms are motionless.

**Detection signal**
The student equates low thermal response with absence of atomic vibration.

**Conceptual correction**
Connect [[calor_especifico]] to accessible modes, not to absolute stillness.

**Mini-example of contrast**
At low [[temperatura]], the lattice still has quantum vibrations, but its energy changes slowly with T.


### Error 8: Assuming higher [[temperatura_debye]] always means higher [[calor_especifico]]

**Why it seems correct**
A larger scale can sound like a larger thermal capacity.

**Why it is incorrect**
At fixed [[temperatura]], a larger [[temperatura_debye]] often means fewer activated modes and a lower relative [[calor_especifico]].

**Detection signal**
A student predicts high room-[[temperatura]] [[calor_especifico_molar]] for diamond only because its [[temperatura_debye]] is high.

**Conceptual correction**
Always interpret the ratio between [[temperatura]] and [[temperatura_debye]].

**Mini-example of contrast**
A soft material may be close to 3R at 300 K, while a stiff material may remain below it.

## Quick self-control rule

Check three things before accepting the answer: the T/ΘD regime, whether the units are total or molar, and whether the curve rises smoothly toward the classical plateau.