# Exam-type example

## Problem statement

A rectangular slit of unknown width is illuminated by a helium-neon laser with wavelength 632.8 nm. On a screen located 2.00 meters from the slit, the first diffraction minimum is observed at 5.00 mm from the central maximum. Calculate: (a) the slit width, (b) the position of the second minimum, and (c) verify if the small angle approximation is valid for this system.

## Data

- Wavelength [[lambda]]: 632.8 nm
- Distance to screen: 2.00 m
- Position of first minimum: 5.00 mm
- Order of first minimum: first order

## System definition

The system consists of a one-dimensional slit illuminated by coherent monochromatic light (laser). Fraunhofer diffraction produces an intensity pattern on the distant screen. Intensity minima appear at positions defined by the destructive interference condition.

## Physical model

The Fraunhofer diffraction model for a rectangular slit is applied:

- Flat monochromatic illumination
- Far field (L much greater than slit width)
- Small angle approximation to be verified

The diffraction minimum condition links [[lambda]], aperture width and [[theta_dif]]:

{{f:condicion_minimos}}

The linear position on the screen relates to the angle through:

{{f:posicion_lineal_minimos}}

## Model justification

The Fraunhofer model is applicable because the distance to the screen (2 m) is much greater than the expected slit width (typically millimeter or smaller). Laser illumination provides the coherent and monochromatic light necessary for sharp patterns.

The model would cease to be valid if: (1) the screen were very close (Fresnel near field); (2) the illumination were polychromatic (overlapping patterns of different wavelengths); or (3) the slit were not rectangular (pattern modified by geometry).

## Symbolic solution

For the slit width, we solve from the minimum condition combined with the geometric relation. For small angle:

{{f:condicion_minimos}}

{{f:posicion_lineal_minimos}}

Solving for the width:

{{f:posicion_lineal_minimos}}

For the second minimum, using the same position relation:

The position of the second minimum is double that of the first.

## Numerical substitution

**Calculation of slit width:**

Operation: multiply the order, wavelength and distance, dividing by the minimum position.

Numerical breakdown: using the given values yields a width of approximately 0.253 mm.

Therefore [[a_abertura]] approximately 0.253 mm

**Calculation of second minimum:**

Operation: multiply the minimum order by the distance of the first minimum from the center.

Numerical breakdown: the second minimum appears at twice the distance, that is 10 mm.

Therefore [[y_posicion]] for the second minimum is 10.0 mm.

Alternatively, using the position of the first minimum: the second minimum is at twice the distance, 2 times 5.00 mm gives 10.0 mm

**Verification of small angle approximation:**

The angle [[theta_dif]] of the first minimum is obtained with the small angle approximation:

{{f:aproximacion_angulo_pequeno}}

It is approximately 0.005 divided by 2.00, that is 0.0025 rad

0.0025 rad is much smaller than 0.14 rad (typical limit), so the approximation is valid with error less than 0.1%.

## Dimensional validation

- Units of width: nanometers times meters divided by meters gives meters
- Dimensional breakdown: length times length divided by length gives length.
- Conversion: 2.53 times 10 to the minus 4 meters equals 0.253 mm (reasonable scale for optical slit)

## Physical interpretation

The result indicates that the slit has a width of approximately a quarter of a millimeter. This is a typical value for laboratory optical slits. The smallness of the width explains why the diffraction pattern is observable: the ratio of wavelength to width is of order one-thousandth, producing measurable diffraction angles in millimeters on the screen.

The second minimum appears exactly at twice the distance from the center as the first, confirming the linearity of the position-order relation in the small angle approximation. This symmetry and proportionality are distinctive characteristics of the Fraunhofer diffraction pattern.

The validation of the small angle is crucial: with [[theta_dif]] of only 0.0025 rad, the difference between the sine and the angle in radians is negligible. This justifies the simplified calculation and guarantees precise results without exact trigonometric functions.

If the slit width were double (0.5 mm), the position of the first minimum would be reduced by half (2.5 mm), demonstrating the inverse relationship between aperture width and extension of the diffraction pattern. This inverse dependence is fundamental for the design of spatial filters and optical systems.

---

# Real-world example

## Context

**Diffraction grating spectrometers** are optical instruments that separate light into its spectral components through diffraction by a grating with thousands of lines per millimeter. When white light passes through the grating, each wavelength diffracts at a characteristic angle, allowing analysis of the spectral composition of light sources.

In astronomy, grating spectrometers coupled to telescopes allow determination of the chemical composition of distant stars and galaxies. Each chemical element produces characteristic spectral lines (specific wavelengths) that appear as intensity maxima at angular positions calculable by the diffraction equation.

## Physical estimation

Consider a spectrometer with a grating of 1200 lines per millimeter illuminated by sodium light (characteristic yellow line at 589 nm). The spacing between slits is 833 nm.

For the first diffraction order, the diffraction angle satisfies the grating condition: the sine of the angle is proportional to the ratio of wavelength to grating spacing. With the given values, this ratio is approximately 0.707.

Therefore theta approximately 45 degrees. This angle is easily measurable and allows detection of the sodium line.

For a second nearby line (589.6 nm, the other line of the sodium doublet), the angle is only slightly larger (45.04 degrees). A grating with sufficient resolution can separate these two lines of 0.6 nm difference, allowing identification of the element sodium in the light source.

## Interpretation

The estimation shows that diffraction by gratings allows separation of wavelengths with angular precision. The spectrometer converts wavelength differences into measurable angle differences. The spectral resolution depends on the total number of illuminated lines and the diffraction order.

The application in astronomy is crucial: light from distant stars is too weak for direct chemical analysis, but the grating spectrometer disperses this light into an analyzable spectrum. Absorption and emission lines reveal present elements, temperatures, radial velocities (Doppler shift), and magnetic fields of inaccessible astronomical objects.

Dominant variable: the spacing of the diffraction grating (lines per millimeter), which determines the angular dispersion and achievable spectral resolution.

Validity limit: the theory assumes ideal slits and coherent illumination. In real gratings, manufacturing imperfections, polarization effects, and substrate dispersions slightly modify theoretical angles. Additionally, at very high orders, spectra of different orders may overlap (order ambiguity), requiring selection filters.
