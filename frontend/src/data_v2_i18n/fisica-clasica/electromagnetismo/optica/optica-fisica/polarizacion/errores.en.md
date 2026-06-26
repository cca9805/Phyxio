## Conceptual errors


### Error 1: Believing that polarization filters colours

**Why it seems correct**
The student observes that sunglasses darken the image and associates this with wavelength filtering, just like a colour filter. The analogy with colour filters reinforces the belief because both reduce visible intensity.

**Why it is incorrect**
A polariser acts on the **orientation of the electric field**, not on the wavelength. All frequencies in the visible spectrum are attenuated equally according to Malus's law, provided the filter is achromatic. The reduction in brightness does not imply colour selection.

**Detection signal**
The student claims that changing the polariser angle changes the colour of the transmitted light, or that polarisers only let "certain colours" through.

**Conceptual correction**
Polarization controls the **oscillation direction** of the electric field, not its frequency. Intensity varies with [[theta_p]] according to the squared cosine, independently of colour.

**Contrast mini-example**
Illuminate a polariser with white light and rotate the analyser: the colour does not change, only the brightness. If it were a colour filter, different angles would reveal different hues.

**Mini-example of contrast**

Check 1: In Polarization, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

### Error 2: Assuming that a polariser always blocks exactly half the light

**Why it seems correct**
The student learns that natural light has its electric field in all directions and deduces that projecting onto one axis removes half "at once" under any circumstances.

**Why it is incorrect**
The 50 per cent rule applies only when the incident light is completely **unpolarised**. If the light is already partially polarised, the transmitted fraction depends on its degree of polarization and the relative angle.

**Detection signal**
The student applies the one-half factor before every polariser in a chain, even when the light is already polarised by the preceding one.

**Conceptual correction**
The first polariser reduces intensity to half **only** if the source is natural. From then on, each stage is governed by Malus's law with [[intensidad_incidente]] equal to the output intensity of the previous stage.

**Contrast mini-example**
If the light is already linearly polarised and aligned with the analyser, the analyser transmits the full amount; applying the one-half factor would yield half the actual intensity, a 100 per cent error.

## Model errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

### Error 3: Applying Brewster's law to metals

**Why it seems correct**
The student generalises Brewster's law to any reflective surface, because in class it is presented as "the angle at which reflection is polarised".

**Why it is incorrect**
Brewster's law assumes dielectric media without absorption. In a metal the refractive index has a large imaginary part; the Fresnel equations yield non-zero reflectances for both components and the reflected light is **never** completely polarised.

**Detection signal**
The student calculates a Brewster angle for aluminium, copper or steel and obtains a numerical value without realising the prediction is incorrect.

**Conceptual correction**
Brewster's law applies only between **transparent** media (imaginary part of the index below 0.01). For metals the full Fresnel equations with a complex index must be used.

**Contrast mini-example**
Computing the "Brewster angle" for aluminium ([[n_2]] close to 1.4 with imaginary part close to 7.6) yields an angle that, when checked experimentally, shows partially polarised reflection at all angles, with the parallel component never reaching zero.

## Mathematical errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

### Error 4: Using cosine instead of cosine squared in Malus's law

**Why it seems correct**
The student remembers that projecting the electric field uses the cosine and does not distinguish between projecting the amplitude and computing the intensity, which depends on the square of the amplitude.

**Why it is incorrect**
[[intensidad_transmitida]] is proportional to the square of the field amplitude. Projecting the field gives a cosine factor, but squaring introduces the squared cosine. Using only the cosine overestimates the transmitted intensity at intermediate angles.

**Detection signal**
At 60 degrees the student obtains an intensity of half [[intensidad_incidente]] (cosine of 60 degrees equals 0.5) when the correct value is one quarter of [[intensidad_incidente]] (cosine squared of 60 degrees equals 0.25).

**Conceptual correction**
Malus's law states that [[intensidad_transmitida]] equals [[intensidad_incidente]] multiplied by the squared cosine of [[theta_p]]. The exponent two is not optional: it reflects the quadratic relationship between intensity and field amplitude.

**Contrast mini-example**
At 60 degrees, using cosine gives 0.5 times [[intensidad_incidente]]; using cosine squared gives 0.25 times [[intensidad_incidente]]. The factor-of-two difference is easily detectable when compared with experimental measurement.

## Interpretation errors

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

### Error 5: Confusing the Brewster angle with the critical angle

**Why it seems correct**
Both angles depend on the refractive indices and both produce singular effects at the interface. The student associates both as "special angles" without distinguishing the underlying phenomenon.

**Why it is incorrect**
The Brewster angle is the angle at which reflection becomes fully polarised; it exists for any pair of media (whether light goes from lower to higher index or vice versa). The critical angle is the angle beyond which refraction vanishes (total internal reflection) and exists only when light travels from the denser to the less-dense medium.

**Detection signal**
The student claims that above the Brewster angle total internal reflection occurs, or attempts to calculate a critical angle for the air-to-glass transition (where total reflection does not exist).

**Conceptual correction**
The Brewster angle concerns the **polarization** of reflected light. The critical angle concerns the **disappearance** of refraction. They are independent phenomena that happen to depend on the refractive indices, but they have different existence conditions and physical meanings.

**Contrast mini-example**
For air–glass ([[n_1]] less than [[n_2]]), the Brewster angle exists (approximately 56 degrees) but the critical angle does not exist because light travels from the less-dense to the denser medium. If they were the same phenomenon, both should exist simultaneously.

## Quick self-control rule

Before accepting a polarization result, check three key points:

1. **[[intensidad_transmitida]] does not exceed [[intensidad_incidente]]**: if the transmitted intensity exceeds the incident one, there is a data or formula error.
2. **Crossed polarisers give zero [[intensidad_transmitida]]**: if the angle is 90 degrees and the intensity does not vanish, check whether cosine was used instead of cosine squared or whether the source is not fully polarised.
3. **[[angulo_de_brewster]] is in a reasonable range**: for common interfaces (air–glass, air–water), the Brewster angle falls between 50 and 60 degrees. A value outside 40 to 70 degrees should be reviewed.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.