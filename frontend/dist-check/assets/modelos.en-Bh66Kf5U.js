const e=`## Ideal Model

The standard model for the quantitative analysis of this leaf describes **paraxial single-slit Fraunhofer diffraction**. In this model, the light beam is considered to be a coherent, monochromatic, planar electromagnetic wave that strikes perpendicularly upon a single, infinitely long, uniform rectangular slit of micrometer width [[a]]. The resulting diffraction pattern is projected onto a parallel flat observation screen located at a far distance [[L]].

The central simplification is that the diffraction occurs in the far-field (Fraunhofer) regime, where the diffracted wavefronts arriving at each point on the screen can be approximated with excellent precision as plane wavefronts rather than spherical ones. Additionally, the paraxial model simplifies the geometric projection of the angular position on the flat screen by applying the linear small-angle approximation to the first minimum, which allows the tangent and the sine of the angle to be replaced directly by the angle [[theta]] measured in radians.

## Hypotheses

- **Far-field Diffraction (Fraunhofer)**: the observation screen is located extremely far from the slit. The optical path lengths from any point in the slit to a given point on the screen are almost parallel lines.
  - If violated: one enters the Fresnel near-field regime, where the wavefronts are noticeably spherical, generating a highly complex and unstable central intensity pattern with local intensity oscillations.
- **Normal Incidence and Plane Wavefront**: the incident light beam is a plane wave that strikes perfectly orthogonal to the slit plane.
  - If violated (oblique incidence): the diffraction pattern on the screen shifts laterally and becomes asymmetric.
- **Monochromaticity and Perfect Spatial Coherence**: the incident light has a single fixed wavelength [[lambda]], and the phase is perfectly coordinated across the entire wavefront.
  - If violated (polychromatic white light): each color component diffracts at a different angle, destroying the points of absolute darkness and producing multicolored rainbow-like fringes at the edges.
- **Paraxial Small-Angle Approximation**: the angle of angular deviation is small enough to assume that the sine, the tangent, and the angle [[theta]] itself have practically coincident values when measured in radians.
  - If violated (extremely narrow slit): the angular spread is so wide that the linear relationship noticeably underestimates the actual physical width of the central maximum on the flat screen.
- **Perfect One-Dimensional Rectangular Slit**: the slit is perfectly uniform in its width [[a]], and its vertical length is infinitely larger than its width, allowing the diffraction to be analyzed as a strictly one-dimensional lateral phenomenon.
  - If violated (circular or irregular aperture): the pattern loses its linear character and acquires radial circular symmetry (Airy disc).

## Quantitative validity domain

The paraxial Fraunhofer model is quantitatively valid as long as the following three geometric and physical inequalities are simultaneously satisfied:

1. **Small-Angle Approximation**: absolute value of [[theta]] < 0.1 rad. This is equivalent to the angle of the first diffraction minimum being strictly less than approximately 5.7 degrees.
2. **Fraunhofer Far-Field Criterion**: [[L]] must be greater than the quotient between the square of [[a]] and [[lambda]]. In practical laboratory terms, this requires [[L]] to be greater than 100 times [[a]].
3. **Scalar Diffraction Limit**: [[a]] must be greater than 10 times [[lambda]]. The slit width must exceed the wavelength of light by at least ten times to guarantee that the approximations of scalar wave theory remain physically valid without needing to solve complex vector Maxwell equations.

## Model failure signals

- **The measured central maximum width [[w]] is noticeably larger than calculated**: this occurs when the slit [[a]] is extremely narrow. The actual spread is so large that the sine of the angle cannot be approximated linearly, requiring the use of the exact trigonometric relation between [[theta]], [[lambda]], and [[a]].
- **The minima do not show absolute physical darkness**: if the dark fringe is not completely black but retains residual light intensity, it indicates that the incident light is not fully coherent or contains multiple wavelengths mixed together that partially fill the cancellation band.
- **The pattern changes shape significantly when moving the screen closer or further**: if moving the screen longitudinally causes the pattern to undergo transitions between local maxima and minima at its center instead of expanding symmetrically in a linear fashion, the system is operating in the Fresnel (near-field) region, indicating the screen is too close to the slit.
- **Presence of asymmetric fringes or blurred edges**: if the secondary lateral intensity peaks on the left and right of the screen are not identical or show distortions, the slit is not uniform or its edges have microscopic roughness and asymmetries that alter the spatial coherence of the beam.

## Extended or Alternative Model

When paraxial or Fraunhofer limits are exceeded in real-world conditions, it is necessary to transition to more rigorous models. Two primary alternatives are defined: the **exact non-paraxial Fraunhofer model** and the **Fresnel (near-field) diffraction model**.

In the exact Fraunhofer model, the paraxial small-angle hypothesis is eliminated. The angular position of the first minimum is determined by the actual trigonometric relationship between [[theta]], [[lambda]], and [[a]], and its physical position projected onto the flat screen at a distance [[L]] is calculated using the exact trigonometric tangent.
This model is essential when the slit is on the scale of a few micrometers, causing wide dispersion angles.

In the Fresnel diffraction model, the screen is placed in the near-field zone, when [[L]] is less than or comparable to the Fresnel distance built from [[a]] and [[lambda]]. The Huygens secondary wavelets must be integrated keeping the quadratic terms of the distance, which yields a distribution characterized by Fresnel integrals. The pattern on the screen no longer displays a single, well-defined central maximum; instead, it oscillates between a bright peak and a dark minimum along the central axis depending on the exact distance, drawing a profile with multiple highly oscillating secondary maxima.

When to transition to the exact non-paraxial model: when the ratio of [[lambda]] to [[a]] exceeds the threshold 0.05, causing the error committed by the paraxial linear approximation in calculating the central maximum width to exceed the five percent acceptable error threshold.

When to transition to the Fresnel diffraction model: when [[L]] is less than the Fresnel limit or becomes lower than 100 times [[a]] for most typical laboratory slits, making the assumption of plane waves at the screen invalid.

## Operational Comparison

| Criterion | Paraxial Fraunhofer Model | Exact Non-Paraxial Model | Fresnel (Near-Field) Model |
|---|---|---|---|
| Precision with wide slits | Excellent | Excellent | Low (requires far field) |
| Precision with very narrow slits | Low (underestimates width) | Excellent | Low (far field) |
| Precision at short screen distances | Nil | Nil | Excellent |
| Mathematical complexity | Very low (simple algebraic) | Low (elementary trig) | High (Fresnel integrals & numerical) |
| Relationship of width [[w]] with [[L]] | Perfectly linear | Slightly non-linear | Non-linear and highly oscillating |
| Wavefront geometry | Ideal plane wave | Ideal plane wave | Spherical wave at the screen |
| Typical laboratory range | [[L]] greater than 1.0 m, [[a]] near 0.1 mm | [[L]] greater than 1.0 m, [[a]] smaller than 0.01 mm | [[L]] smaller than 0.1 m, [[a]] near 0.5 mm |
`;export{e as default};
