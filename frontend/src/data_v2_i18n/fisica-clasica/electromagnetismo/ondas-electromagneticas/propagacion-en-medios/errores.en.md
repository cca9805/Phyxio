## Conceptual errors


### Error 1

**Why it seems correct**: Since the wave enters another medium, it may seem natural that all its properties change at once.

**Why it is incorrect**: At a stationary boundary, frequency is fixed by the source. The medium modifies [[v_m]] and [[lambda_m]], not the imposed temporal rhythm.

**Detection sign**: The student changes frequency to explain refraction or wavelength shortening.

**Conceptual correction**: Keep frequency as the bridge between media and adjust spatial scale through [[indice_de_refraccion_efectivo]].

**Contrast mini-example**: Green light remains green through glass, although its wavelength inside glass is shorter.

**Detection signal**

Check 1: In Propagation in Media, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 2

**Why it seems correct**: [[velocidad_de_la_luz_en_el_vacio]] appears in many electromagnetic-wave formulas and is memorized as the speed of light.

**Why it is incorrect**: [[velocidad_de_la_luz_en_el_vacio]] is the vacuum reference speed. Inside an ordinary medium one uses [[v_m]], determined by the index [[indice_de_refraccion_efectivo]].

**Detection sign**: The calculation gives the same speed in air, water, and glass without justifying equal indices.

**Conceptual correction**: Use [[velocidad_de_la_luz_en_el_vacio]] only as reference and apply the medium index whenever material is present.

**Contrast mini-example**: In common glass, propagation is slower than in air even when the source is the same.

## Model errors

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.


### Error 3

**Why it seems correct**: A tabulated index looks like a fixed property of the material.

**Why it is incorrect**: [[indice_de_refraccion_efectivo]] may depend on frequency, temperature, polarization, or direction. A tabulated value applies only under specific conditions.

**Detection sign**: The same index is used for visible light, microwaves, and ultraviolet without checking context.

**Conceptual correction**: State spectral region and material conditions before choosing the index.

**Contrast mini-example**: A prism separates colors because the effective index is not exactly the same for all frequencies.

**Detection signal**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.

**Mini-example of contrast**

Check 6: In Propagation in Media, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.


### Error 4

**Why it seems correct**: The simple real-index model describes many classroom examples.

**Why it is incorrect**: In absorbing or strongly dispersive media, one phase speed does not describe loss, pulse broadening, or energy transport.

**Detection sign**: The student interprets a deformed pulse with the same formula used for an ideal monochromatic wave.

**Conceptual correction**: Switch to a dispersive, absorbing, or group-speed model when the phenomenon requires it.

**Contrast mini-example**: A fiber for short pulses requires dispersion control, not only phase-speed calculation.

## Mathematical errors

**Detection signal**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Mini-example of contrast**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.


### Error 5

**Why it seems correct**: Dividing or multiplying by [[indice_de_refraccion_efectivo]] may look symmetric when the result is not interpreted.

**Why it is incorrect**: In an ordinary medium with index above one, [[v_m]] and [[lambda_m]] must decrease relative to their vacuum values.

**Detection sign**: A larger index produces speed greater than [[velocidad_de_la_luz_en_el_vacio]] or wavelength larger than [[lambda0]].

**Conceptual correction**: Before calculating, anticipate the physical direction of change: larger index means lower phase speed.

**Contrast mini-example**: For glass, the result should lie below the vacuum reference.

**Detection signal**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.


### Error 6

**Why it seems correct**: [[epsilon_r]] and [[mu_r]] are dimensionless and may seem interchangeable.

**Why it is incorrect**: They represent different physical responses. Permittivity describes electric response and permeability describes magnetic response.

**Detection sign**: One is substituted for the other without checking formula or conceptual units.

**Conceptual correction**: Read the index as the result of an effective electromagnetic response, not as an isolated number.

**Contrast mini-example**: In many optical dielectrics [[mu_r]] is close to one, but it does not disappear from physical reasoning.

## Interpretation errors

**Detection signal**

Check 11: In Propagation in Media, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Mini-example of contrast**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.


### Error 7

**Why it seems correct**: If light travels more slowly, all its effects may seem less energetic.

**Why it is incorrect**: Photon energy depends on frequency, not on wavelength inside the material by itself.

**Detection sign**: The student concludes that a color loses energy by entering transparent glass.

**Conceptual correction**: Separate spatial propagation from photon energy and intensity.

**Contrast mini-example**: A visible photon does not change color just because the wave has shorter wavelength inside glass.

## Quick self-control rule

If you changed frequency when changing medium without a new source, review the reasoning. At an ordinary stationary boundary, the medium modifies [[v_m]] and [[lambda_m]] through [[indice_de_refraccion_efectivo]], while frequency preserves the temporal identity of the radiation.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Mini-example of contrast**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.