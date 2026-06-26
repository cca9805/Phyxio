const e=`# Exam-type example

## Problem statement

A monochromatic red laser beam with a wavelength of 633 nm is incident perpendicularly on a narrow rectangular slit with a width equal to 0.15 mm. The resulting Fraunhofer diffraction pattern is projected onto a flat screen placed at a longitudinal distance of 2.0 m from the slit. Calculate: (a) the angular deviation in radians and degrees of the first lateral diffraction minimum, (b) the total linear width of the bright central maximum measured on the screen, (c) verify whether the small-angle approximation is satisfactorily met for this experimental setup.

## Data

- Wavelength [[lambda]]: 633 nm, equivalent to 6.33 · 10⁻⁷ m
- Slit width [[a]]: 0.15 mm, equivalent to 1.5 · 10⁻⁴ m
- Screen distance [[L]]: 2.0 m
- Angularity: paraxial

## System Definition

The system is composed of a coherent laser emitter of a fixed wavelength of 633 nm incident orthogonally on a single uniform diffraction slit with [[a]] of 0.15 mm. The light propagates in the far field until it strikes a parallel flat projection screen placed at a longitudinal distance [[L]] of 2.0 m.

## Physical Model

The single-slit Fraunhofer diffraction model under paraxial approximation is applied. The quantities defining this leaf of study are the slit width [[a]], the wavelength [[lambda]], the angular deviation [[theta]], the distance to the screen [[L]], and the total linear width of the central maximum [[w]]. The model requires that the slit width be significantly larger than the wavelength and that the angle of the first minimum be small (less than one-tenth of a radian).

## Model Justification

The use of Fraunhofer diffraction is fully justified because the screen is located at a distance of two meters, which is far greater than the geometric factor of the square of the slit width divided by the wavelength (which takes a value of approximately thirty-five millimeters). Furthermore, since the slit is on the order of tenths of a millimeter and visible light is used, the deviation angles will be small enough to validate the paraxial linear approximation, which will be demonstrated numerically in section c.

## Symbolic solution

Section (a): The angular deviation in radians toward the first lateral diffraction minimum is obtained by solving for [[theta]] from the fundamental relationship that equates the angle to the ratio of the light wavelength to the physical width of the slit:

{{f:angulo_primer_minimo}}

To express the angle in degrees, the value in radians is multiplied by one hundred eighty and divided by pi.

Section (b): The total linear width of the bright central maximum [[w]] projected onto the lateral observation screen is deduced by combining the bilateral angular deviation angle with the geometric longitudinal distance amplification [[L]]:

{{f:ancho_maximo_central}}

Section (c): The validity of the small-angle approximation requires that the absolute value of the calculated angle [[theta]] be much less than one-tenth of a radian (0.1 rad), guaranteeing that the mathematical error made in approximating the sine and tangent is less than one percent.

## Numerical Substitution

Section (a): Dividing the wavelength of 6.33 · 10⁻⁷ m by the slit width of 1.5 · 10⁻⁴ m yields an angle [[theta]] of approximately 0.00422 radians. Multiplying this value by one hundred eighty and dividing by pi yields an angle of approximately 0.242 degrees. Therefore [[theta]] ≈ 0.00422 rad (or 0.242°).

Section (b): Multiplying two by the wavelength of 6.33 · 10⁻⁷ m, by the screen distance of 2.0 m, and dividing by the slit width of 1.5 · 10⁻⁴ m, yields a linear width [[w]] of approximately 0.0169 meters, equivalent to 16.9 millimeters. Therefore [[w]] ≈ 16.9 mm.

Section (c): The calculated angle [[theta]] is 0.00422 radians. Since 0.00422 rad is notably below the paraxial limit of 0.1 radians (representing barely four percent of that threshold), the paraxial linear approximation is perfectly valid and commits a completely negligible mathematical error of millionths of a meter in the projection on the flat screen.

## Dimensional Validation

Section (a): For the angle, the expression divides length by length. Both physical quantities have the dimension of length \`[L]\`. The ratio of meters divided by meters cancels the spatial dimensions, resulting in a dimensionless quantity in radians \`[adimensional]\` ✓

Section (b): For the width [[w]], the expression multiplies a dimensionless constant by the wavelength of dimension \`[L]\`, by the screen distance of dimension \`[L]\`, all divided by the slit width of dimension \`[L]\`. Performing the dimensional simplification, the equation results in a linear unit of meters \`[L]\` ✓

## Physical Interpretation

The result of section (a) indicates that the first point of lateral total darkness occurs at an angular deviation of barely 0.242 degrees. This shows that light propagates almost in a straight line but experiences a quantifiable deviation due to its wave nature. The lateral diffraction generates an angular spread to both sides that is intrinsic to the geometric aperture.

The total width of the central bright band is 16.9 millimeters on the screen at a distance of two meters. This dimension represents the purely geometric amplification of the projected angular pattern. In this bright region, almost the entirety of the light energy from the transmitted laser beam is concentrated. The excellent agreement of the linear approximation guarantees that the optical laboratory design is robust and highly predictable through simple algebraic expressions.

If we narrowed the slit to half its width (0.075 mm), the angular spread and the linear width of the pattern on the screen would double exactly to 33.8 millimeters. Conversely, if we used blue light of shorter wavelength instead of red, the pattern would contract laterally due to the smaller lateral wave phase deviation.

---

# Real-world example

## Context

A biophysicist needs to measure the microscopic thickness of a hair fiber (human hair) with high precision in a cellular biomechanics experiment. Instead of using a mechanical micrometer, which could crush or deform the sensitive biological fiber, they decide to design a non-invasive optical measuring device based on light diffraction. To do this, they align a green laboratory laser pointer with a known wavelength of 532 nm and place the hair vertically in the center of the light beam. On the other side of the room, they fix a flat white projection screen at a calibrated longitudinal distance of 2.5 m.

## Physical Estimation

According to Babinet's Principle in wave physics, a thin opaque obstacle (the hair) diffracts light in an identical manner to a complementary rectangular slit of the same width. Therefore, the hair physically acts as a single diffracting slit of width [[a]], where [[a]] represents the transverse diameter of the hair.

By projecting the green beam onto the screen at a distance [[L]] of 2.5 m, the biophysicist measures with a digital ruler that the total width of the bright green central maximum on the screen has [[w]] of 3.6 cm, which equals 0.036 m.

To estimate the hair diameter, the biophysicist solves for the parameter [[a]] from the expression of the bright central maximum:

{{f:ancho_maximo_central}}

Entering the experimental values: the wavelength is 5.32 · 10⁻⁷ m, the screen distance is 2.5 m, and the measured width is 0.036 m. Multiplying two by the wavelength and the distance yields 2.66 · 10⁻⁶ m², and dividing by the width of 0.036 m results in an approximate slit width [[a]] of 7.39 · 10⁻⁵ m, which is about 74 micrometers.

This value is excellent and completely agrees with typical biological ranges for the thickness of a human hair, which usually ranges between 50 and 100 micrometers. The resulting angular field is about 7 milliradians, which comfortably validates the paraxial linear Fraunhofer approximation used.

## Interpretation

The physical magnitude of the hair diameter [[a]] acts as the dominant scale element. This optical calibration method demonstrates how a purely wave-based physical phenomenon allows extremely precise indirect measurements of microscopic dimensions using only a laser, a tape measure, and a laboratory ruler. The non-invasive nature and high sensitivity of the diffracted pattern to small changes in thickness make it a highly robust scientific and industrial technique for the metrology of thin fibers, wires, and biological capillaries.

Dominant variable: [[a]], the physical diameter of the obstacle (hair), which inversely controls the scale of the spatial pattern projected on the screen.
Validity limit: the paraxial Fraunhofer model is valid as long as the fiber is uniform, the beam is highly coherent, and the longitudinal distance exceeds 2.5 meters in relation to the micrometer thickness.
`;export{e as default};
