## Conceptual errors


### Error 1 : Treating electric and magnetic fields as independent in a wave
#### Why it seems correct
Since [[campo_electrico]] and [[campo_magnetico]] are defined by different laws (Gauss and Ampère), a student may believe they are free variables that can take any arbitrary value in a wave.

#### Why it is incorrect
Maxwell's physical interpretation shows that in a plane wave in vacuum, both fields are rigidly coupled by the [[relacion_entre_campos]] relationship. One cannot exist without the other in the exact proportion dictated by [[velocidad_de_la_luz_en_el_vacio]].

#### Detection signal
The calculation of average intensity [[intensidad_media]] yields values inconsistent with source power, or the Poynting vector [[vector_de_poynting]] does not point in the expected propagation direction.

#### Conceptual correction
Remember that in a plane wave, [[campo_electrico]] and [[campo_magnetico]] are two manifestations of the same energy flow. You cannot have an intense radiated electric field without an associated magnetic field.

#### Mini-example
*Incorrect*: Claiming that a plane wave has an amplitude [[amplitud_del_campo_electrico]] of 300 V/m and an amplitude [[amplitud_del_campo_magnetico]] of 0.0001 T.
*Correct*: If [[amplitud_del_campo_electrico]] is 300 V/m, then [[amplitud_del_campo_magnetico]] must be exactly the [[amplitud_del_campo_electrico]]/[[velocidad_de_la_luz_en_el_vacio]] ratio, resulting in approximately 1.0 microtesla.

## Model errors

**Why it seems correct**

Check 1: In Physical Interpretation, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Conceptual correction**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 2 : Applying vacuum constants in material media
#### Why it seems correct
As the speed of light [[velocidad_de_la_luz_en_el_vacio]] is a well-known universal constant, its value of 300000000 m/s tends to be used in any electromagnetism context.

#### Why it is incorrect
The material medium alters the effective permittivity and permeability. Applying [[epsilon0]] and [[mu0]] inside a crystal or water while ignoring the refractive index will lead to serious errors in energy density [[densidad_de_energia_electromagnetica]].

#### Detection signal
The calculated speed for the signal is higher than experimentally measured, or the average intensity [[intensidad_media]] results do not match the medium's losses.

#### Conceptual correction
The material medium "slows down" the wave and alters the energy balance. You must use the relative permittivity and permeability of the medium to find the local speed.

#### Mini-example
*Incorrect*: Calculating intensity in water using [[velocidad_de_la_luz_en_el_vacio]] as if it were 300000000 m/s.
*Correct*: Calculate the local speed using the [[velocidad_de_la_luz_en_el_vacio]]/n ratio, where n is the refractive index of water (approx. 1.33).

## Mathematical errors

**Why it seems correct**

Check 6: In Physical Interpretation, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

**Why it is incorrect**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Detection signal**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

**Conceptual correction**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.


### Error 3 : Confusing intensity with total energy
#### Why it seems correct
Both magnitudes refer to the "power" of the wave, and in colloquial language, they are used as synonyms for force or impact.

#### Why it is incorrect
Intensity [[intensidad_media]] indicates flux (watts per square meter), while total energy is measured in joules. Confusing them prevents correctly calculating the work done by the field.

#### Detection signal
The final units of the problem are watts per square meter when Joules were requested, or the result is independent of the reception area.

#### Conceptual correction
Intensity [[intensidad_media]] indicates the "rate" at which energy arrives. To obtain total energy, you must multiply intensity by the receptor area and by the time.

#### Mini-example
*Incorrect*: Saying that the energy reaching a 2 square meters panel is 1000 watts per square meter.
*Correct*: The intensity is 1000 watts per square meter; the collected power is 2000 W.

## Interpretation errors

**Why it seems correct**

Check 11: In Physical Interpretation, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Why it is incorrect**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Conceptual correction**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.

**Mini-example of contrast**

Check 15: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 15.


### Error 4 : Ignoring the vectorial nature of the Poynting vector
#### Why it seems correct
In one-dimensional problems, working only with the magnitude [[vector_de_poynting]] seems sufficient and mathematically simpler.

#### Why it is incorrect
Ignoring the direction can lead to interpreting that energy flows into a source (convergence) when it is actually coming out (radiation).

#### Detection signal
The global energy balance on a closed surface gives a negative result without internal sources existing.

#### Conceptual correction
The vector [[vector_de_poynting]] always points in the direction of the cross product between the electric and magnetic fields. This direction physically defines where power is transferred.

#### Mini-example
*Incorrect*: Calculating energy flow without specifying whether it enters or exits the surface.
*Correct*: Determining the orientation of [[vector_de_poynting]] relative to the surface normal to know if there is emission or absorption.

## Quick self-control rule

Before accepting a result as good, apply the three C rule: **Consistency of units** (is it power or energy?), **Coupling constant** (is the ratio between fields and the speed of light met?), and **Causality** (does the energy flow come out of the source?).

**Why it seems correct**

Check 16: In Physical Interpretation, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 16.

**Why it is incorrect**

Check 17: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 17.

**Detection signal**

Check 18: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 18.

**Conceptual correction**

Check 19: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 19.

**Mini-example of contrast**

Check 20: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 20.