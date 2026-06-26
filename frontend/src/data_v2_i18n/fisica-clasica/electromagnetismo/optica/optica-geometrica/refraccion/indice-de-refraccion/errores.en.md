## Conceptual errors


### Error 1: Associating the refractive index with the mechanical density of the medium

**Why it seems correct**

In everyday experience the "denser" materials (glass, diamond) have higher indices, which leads to the generalisation that greater mass density implies a higher index. It is an intuitive analogy based on superficial observation.

**Why it is incorrect**

The refractive index depends on the **electromagnetic response** of the material (electronic polarisability), not on its mass per unit volume. Cedar oil has a lower density than water but a higher index (approximately 1.52 versus 1.33). Mechanical density does not control the optical phase speed.

**Detection signal**

The student predicts higher indices for heavy materials without consulting optical tables, or tries to estimate [[indice_de_refraccion]] from the density expressed in kilograms per cubic metre.

**Conceptual correction**

The refractive index reflects the interaction between the electric field of the light and the electrons of the material. What matters is the electronic polarisability, not the mass.

**Contrast mini-example**

Air has a density of roughly 1.2 kg/m³ and [[indice_de_refraccion]] close to 1.0003. Silica aerogel can have a density of 100 kg/m³ yet [[indice_de_refraccion]] close to 1.01. The relationship between the two quantities is neither direct nor proportional.

**Mini-example of contrast**

Check 1: In Refractive Index, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

### Error 2: Believing that the frequency of light changes when it enters a medium

**Why it seems correct**

Since the speed and wavelength change when crossing the interface, it seems natural to suppose that the frequency also changes. It is an over-generalisation of the idea that "everything changes upon entering another medium."

**Why it is incorrect**

The boundary conditions of the electromagnetic field at the interface require the oscillation to have the same frequency on both sides. If the frequency changed, crests would accumulate at the boundary until producing a physically impossible discontinuity.

**Detection signal**

The student writes that the frequency in the medium differs from the frequency in vacuum, or calculates a "new frequency" by dividing the speed in the medium by the vacuum wavelength.

**Conceptual correction**

When crossing an interface, the frequency remains constant. Only the speed [[v_medio]] and the wavelength [[lambda_medio]] change. The colour of the light, determined by its frequency, is not altered when passing from one medium to another.

**Contrast mini-example**

A red laser at 633 nm enters glass with [[indice_de_refraccion]] of 1.50. Inside the glass the wavelength shrinks to 422 nm, but the light remains red because the frequency stays unchanged. If the frequency changed, the perceived colour inside the glass would be different, contradicting observation.

## Model errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

### Error 3: Using a constant index for a white-light source

**Why it seems correct**

In typical classroom problems a single value of [[indice_de_refraccion]] is given for the glass, so the student assumes that number applies to every colour.

**Why it is incorrect**

The index varies with wavelength (dispersion). For BK7 glass, [[indice_de_refraccion]] is approximately 1.5168 at 589 nm but 1.5224 at 486 nm. The difference seems small, but in a prism it produces an angular separation of several degrees between red and violet.

**Detection signal**

The student calculates a single refraction angle for white light without decomposing it into spectral components, or obtains an image free of chromatic aberration with a simple lens.

**Conceptual correction**

For polychromatic sources the dispersion curve of the material must be used, or at least the values of [[indice_de_refraccion]] for the extreme wavelengths of the visible spectrum.

**Contrast mini-example**

An equilateral BK7 glass prism with white light produces an angular fan of approximately 1.8 degrees between red and violet. Using a single average value of [[indice_de_refraccion]], the calculation predicts a single exit ray with no colour separation, clearly contradicting the observed prismatic rainbow.

## Mathematical errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

### Error 4: Measuring angles from the surface instead of from the normal

**Why it seems correct**

Some textbook diagrams show the ray and the surface, and the angle between them appears to be the most immediate datum. The confusion is reinforced because in basic trigonometry angles are measured with respect to the base.

**Why it is incorrect**

Snell's law requires both [[theta_1]] and [[theta_2]] to be measured from the **normal** to the surface. Using the complement swaps sine and cosine, producing an incorrect result.

**Detection signal**

The student obtains a refraction angle larger than the incidence angle when passing from air to glass, or applies Snell's law with cosines instead of sines.

**Conceptual correction**

Always draw the normal to the surface first and measure angles from it. If the problem gives the angle with respect to the surface, subtract from 90 degrees to obtain the correct angle.

**Contrast mini-example**

A ray strikes the surface of glass ([[indice_de_refraccion]] of 1.50) at 30 degrees from the surface. The correct angle from the normal is 60 degrees. Using 30 degrees directly in Snell's law gives a refraction angle of 19.5 degrees; with the correct angle (60 degrees) the result is 35.3 degrees. The difference is highly significant.

## Interpretation errors

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

### Error 5: Believing that an index less than one violates relativity

**Why it seems correct**

The student knows that nothing can travel faster than light, and if [[indice_de_refraccion]] were less than one, [[v_medio]] would exceed [[velocidad_de_la_luz_en_el_vacio]]. The conclusion seems direct.

**Why it is incorrect**

An index below one refers to the **phase velocity**, not the group velocity or the energy-transport velocity. Relativity forbids **information** from travelling faster than [[velocidad_de_la_luz_en_el_vacio]], but the phase velocity does not carry information.

**Detection signal**

The student dismisses as "impossible" an experimentally measured index below one in certain frequency bands, or claims the measurement must be wrong without analysing the difference between phase and group velocity.

**Conceptual correction**

In bands close to atomic resonances, the phase velocity can exceed [[velocidad_de_la_luz_en_el_vacio]] without violating relativity. The key quantity is the group velocity, which remains below [[velocidad_de_la_luz_en_el_vacio]] under normal conditions.

**Contrast mini-example**

X-rays in many materials have an index slightly below one (for example, 0.9999 in glass). The phase velocity slightly exceeds [[velocidad_de_la_luz_en_el_vacio]], but X-ray pulses travel at a group velocity below it, and no signal is transmitted faster than light.

## Quick self-control rule

Before accepting a calculation involving the refractive index, check three things: that [[indice_de_refraccion]] is greater than or equal to one for conventional media, that the wavelength in the medium is shorter than in vacuum, and that the refraction angle decreases relative to the incidence angle when the ray enters a medium of higher index. If any of these conditions is not met, review the data and the procedure.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.