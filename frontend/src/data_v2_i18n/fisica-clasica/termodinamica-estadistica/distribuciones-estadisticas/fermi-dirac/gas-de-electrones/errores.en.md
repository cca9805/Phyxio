## Conceptual errors


### Error 1: Treating [[energia_fermi]] as the average energy
**Why it seems correct**
The word energy suggests one representative value for all electrons.

**Why it is incorrect**
[[energia_fermi]] is an occupation boundary, not the average of [[energia_estado]]. It marks the top filled level at very low [[temperatura_absoluta]].

**Detection signal**
The student says that all electrons “have” [[energia_fermi]].

**Conceptual correction**
Read [[energia_fermi]] as the upper occupied edge of the ideal model.

**Mini-example of contrast**
In a metal, many electrons occupy states below [[energia_fermi]], not exactly at it.


### Error 2: Thinking that [[temperatura_absoluta]] removes Pauli exclusion
**Why it seems correct**
Temperature creates excitations and seems to free states.

**Why it is incorrect**
Exclusion still holds; [[ocupacion_estado]] is only smoothed around [[potencial_quimico]].

**Detection signal**
Impossible occupations appear, or

{{f:ocupacion_fermi_dirac_electrones}}

is ignored.

**Conceptual correction**
Temperature redistributes probabilities; it does not erase fermionic limits.

**Mini-example of contrast**
At 300 K, a metal remains degenerate because [[temperatura_fermi]] is very large.

## Model errors


### Error 3: Using the free gas for every solid
**Why it seems correct**
Introductory treatments often call metallic electrons free.

**Why it is incorrect**
Bands, gaps, and effective mass can change the link between [[densidad_electronica]] and [[energia_fermi]].

**Detection signal**
Free [[masa_electron]] is used for a semiconductor without justification.

**Conceptual correction**
Check whether the task asks for a free estimate or a band model.

**Mini-example of contrast**
Sodium metal can be estimated freely; doped silicon needs more care.


### Error 4: Ignoring dimensionality
**Why it seems correct**
Density sounds universal.

**Why it is incorrect**

{{f:energia_fermi_gas_electrones_3d}}

assumes [[volumen]] and 3D state counting.

**Detection signal**
A [[volumen]] [[densidad_electronica]] is used for a 2D layer.

**Conceptual correction**
Decide whether the system is 3D, 2D, or 1D before calculating.

**Mini-example of contrast**
A bulk metal uses [[volumen]]; graphene-like systems do not follow the same dependence.

## Mathematical errors


### Error 5: Mixing cm⁻³ and m⁻³
**Why it seems correct**
Electronic densities often look similar in scientific notation.

**Why it is incorrect**
A factor of 10⁶ in [[densidad_electronica]] strongly changes [[energia_fermi]].

**Detection signal**
[[temperatura_fermi]] becomes absurd for an ordinary metal.

**Conceptual correction**
Convert [[densidad_electronica]] to m⁻³ before using the formula.

**Mini-example of contrast**
10²² cm⁻³ is 10²⁸ m⁻³, not 10²² m⁻³.


### Error 6: Forgetting the square root in [[velocidad_fermi]]
**Why it seems correct**
The energy-speed relation is often rearranged too quickly.

**Why it is incorrect**
[[velocidad_fermi]] comes from kinetic energy and does not scale linearly with [[energia_fermi]].

**Detection signal**
The computed speed is unreasonable for metals.

**Conceptual correction**
Use [[velocidad_fermi]] and check kg, J, and m/s.

**Mini-example of contrast**
Doubling [[energia_fermi]] does not simply double the velocity scale.

## Interpretation errors


### Error 7: Reading [[ocupacion_estado]] as total electron number
**Why it seems correct**
Occupation sounds like an accumulated amount.

**Why it is incorrect**
[[ocupacion_estado]] is a mean probability for one state of [[energia_estado]], not [[numero_electrones]].

**Detection signal**
[[ocupacion_estado]] is compared with sample size.

**Conceptual correction**
Separate single-state occupation, total count, and density.

**Mini-example of contrast**
[[ocupacion_estado]] close to 1 does not mean the whole metal contains one electron.


### Error 8: Forgetting [[potencial_quimico]]
**Why it seems correct**
A graph may seem to depend only on [[energia_estado]] and [[temperatura_absoluta]].

**Why it is incorrect**
The transition is centered on [[potencial_quimico]], the occupation reference.

**Detection signal**
[[energia_reducida]] is computed without the correct reference.

**Conceptual correction**
Identify [[potencial_quimico]] before interpreting probabilities.

**Mini-example of contrast**
Two states with the same [[energia_estado]] can have different [[ocupacion_estado]] if [[potencial_quimico]] changes.

## Quick self-control rule

Check [[densidad_electronica]] in m⁻³, positive [[energia_fermi]], [[temperatura_absoluta]] versus [[temperatura_fermi]], and [[ocupacion_estado]] between 0 and 1.