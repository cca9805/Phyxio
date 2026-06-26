const e=`## Conceptual errors

### Error 1 : Treating electric and magnetic fields as independent in a wave
#### Why it seems correct
Since [[E]] and [[B]] are defined by different laws (Gauss and Ampère), a student may believe they are free variables that can take any arbitrary value in a wave.

#### Why it is incorrect
Maxwell's physical interpretation shows that in a plane wave in vacuum, both fields are rigidly coupled by the [[EB]] relationship. One cannot exist without the other in the exact proportion dictated by [[c]].

#### Detection signal
The calculation of average intensity [[I]] yields values inconsistent with source power, or the Poynting vector [[S]] does not point in the expected propagation direction.

#### Conceptual correction
Remember that in a plane wave, [[E]] and [[B]] are two manifestations of the same energy flow. You cannot have an intense radiated electric field without an associated magnetic field.

#### Mini-example
*Incorrect*: Claiming that a plane wave has an amplitude [[E0]] of 300 V/m and an amplitude [[B0]] of 0.0001 T.
*Correct*: If [[E0]] is 300 V/m, then [[B0]] must be exactly the [[E0]]/[[c]] ratio, resulting in approximately 1.0 microtesla.

## Model errors

### Error 2 : Applying vacuum constants in material media
#### Why it seems correct
As the speed of light [[c]] is a well-known universal constant, its value of 300000000 m/s tends to be used in any electromagnetism context.

#### Why it is incorrect
The material medium alters the effective permittivity and permeability. Applying [[epsilon0]] and [[mu0]] inside a crystal or water while ignoring the refractive index will lead to serious errors in energy density [[u]].

#### Detection signal
The calculated speed for the signal is higher than experimentally measured, or the average intensity [[I]] results do not match the medium's losses.

#### Conceptual correction
The material medium "slows down" the wave and alters the energy balance. You must use the relative permittivity and permeability of the medium to find the local speed.

#### Mini-example
*Incorrect*: Calculating intensity in water using [[c]] as if it were 300000000 m/s.
*Correct*: Calculate the local speed using the [[c]]/n ratio, where n is the refractive index of water (approx. 1.33).

## Mathematical errors

### Error 3 : Confusing intensity with total energy
#### Why it seems correct
Both magnitudes refer to the "power" of the wave, and in colloquial language, they are used as synonyms for force or impact.

#### Why it is incorrect
Intensity [[I]] indicates flux (watts per square meter), while total energy is measured in joules. Confusing them prevents correctly calculating the work done by the field.

#### Detection signal
The final units of the problem are watts per square meter when Joules were requested, or the result is independent of the reception area.

#### Conceptual correction
Intensity [[I]] indicates the "rate" at which energy arrives. To obtain total energy, you must multiply intensity by the receptor area and by the time.

#### Mini-example
*Incorrect*: Saying that the energy reaching a 2 square meters panel is 1000 watts per square meter.
*Correct*: The intensity is 1000 watts per square meter; the collected power is 2000 W.

## Interpretation errors

### Error 4 : Ignoring the vectorial nature of the Poynting vector
#### Why it seems correct
In one-dimensional problems, working only with the magnitude [[S]] seems sufficient and mathematically simpler.

#### Why it is incorrect
Ignoring the direction can lead to interpreting that energy flows into a source (convergence) when it is actually coming out (radiation).

#### Detection signal
The global energy balance on a closed surface gives a negative result without internal sources existing.

#### Conceptual correction
The vector [[S]] always points in the direction of the cross product between the electric and magnetic fields. This direction physically defines where power is transferred.

#### Mini-example
*Incorrect*: Calculating energy flow without specifying whether it enters or exits the surface.
*Correct*: Determining the orientation of [[S]] relative to the surface normal to know if there is emission or absorption.

## Quick self-control rule
Before accepting a result as good, apply the three C rule: **Consistency of units** (is it power or energy?), **Coupling constant** (is the ratio between fields and the speed of light met?), and **Causality** (does the energy flow come out of the source?).
`;export{e as default};
