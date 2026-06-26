## Ideal model

The ideal model of Snell's law treats the interface as an infinite geometric plane separating two perfectly homogeneous, isotropic and non-dispersive media. Rays are straight lines and angles are defined with arbitrary precision relative to the normal. The refractive index of each medium is a constant number independent of wavelength, temperature and intensity. In this framework, the relation between the sines of the angles and the indices is exact, and there is no energy loss at the interface beyond that predicted by the reflection-refraction partition.

This model simplifies the problem by ignoring polarisation, chromatic dispersion, surface imperfections and wave effects. Its main virtue is that it allows solving ray-direction problems with a single equation and minimal data.

## Hypotheses

- The interface is flat on the scale of the wavelength; if roughness is comparable to the wavelength, diffraction dominates and the ray direction ceases to be well defined.
- The media are homogeneous and isotropic; in a birefringent crystal, polarisation would produce two distinct refracted rays and the simple law would be invalid.
- The refractive index is constant with wavelength; if there is dispersion, the law applies only to a specific frequency and each colour refracts at a different angle.
- The light is monochromatic or quasi-monochromatic; white light produces spectral separation that the ideal model does not incorporate.
- The intensity is low, so that there are no nonlinear effects (self-focusing, harmonic generation).

## Quantitative validity domain

The ideal Snell's law is excellent when the surface roughness is less than the wavelength divided by ten. For visible light with a wavelength of approximately 550 nm, this requires surface flatness better than 55 nm, which is standard for polished optical glasses.

The non-dispersive approximation is reasonable when the index variation across the visible spectrum is less than 1 % of the central value, a typical situation for ordinary crown glasses in the 400–700 nm range. For high-dispersion flint glasses, the error can exceed 3 % between red and violet.

Regarding the angle of incidence, the law is exact for any value between 0 and 90 degrees. However, for angles above 80 degrees the Fresnel reflectivity exceeds 30 % and in practice nearly all energy is reflected even without exceeding the critical angle.

Quantitative validity conditions:
- Surface roughness < 55 nm for visible light (order of magnitude of the wavelength divided by 10)
- Index variation with wavelength < 1 % in the spectral range used
- Beam diameter > 100 wavelengths for the ray concept to be valid

## Model failure signals

- The refracted ray appears blurred or shows multiple directions instead of a single sharp line: this indicates that surface roughness is comparable to the wavelength and diffraction produces a scattering pattern.
- Results vary significantly with the colour of the light used: chromatic dispersion of the medium is not negligible and the effective index depends on frequency.
- The measured refracted intensity is much lower than predicted by the Fresnel partition: possible absorption at the interface, surface impurities or uncontrolled roughness.
- Two images or two refracted spots appear in crystals: birefringence of the medium that invalidates the isotropy hypothesis.
- The measured direction of the refracted ray depends on the polarisation of the incident light: anisotropic medium requiring the double-refraction model.

## Extended or alternative model

The dispersive model incorporates the dependence of the refractive index on wavelength through the Cauchy equation or the Sellmeier relation. In this model, each spectral component obeys its own Snell's law with a different value of [[n1]] and [[n2]], producing angular colour separation. When to switch to the dispersive model: when working with white or polychromatic light and the angular separation between spectral components needs to be predicted, as in the design of dispersing prisms or the correction of chromatic aberration in lenses.

For curved interfaces, the extension consists of applying Snell's law locally using the surface normal at each point of incidence. This leads to sequential ray tracing, where each surface is treated as a new local flat interface. When to switch to the sequential ray-tracing model: when the surface is not flat and image formation or system aberrations need to be predicted.

For intense fields or nonlinear media, the index depends on intensity and Snell's law must be complemented with the self-focusing equation or the nonlinear eikonal equation.

## Operational comparison

| Criterion | Ideal model | Dispersive model |
|---|---|---|
| Input variables | two constant indices, one angle | two index-vs-wavelength functions, one angle, one wavelength |
| Accuracy for monochromatic light | exact in isotropic media | identical (reduces to ideal for a single frequency) |
| Accuracy for white light | incorrect (ignores chromatic separation) | correct (predicts angle per colour) |
| Computational complexity | one trigonometric operation | one operation per spectral component |
| Typical application | single-ray problems, thin lenses | prism design, chromatic correction |
| Residual limitations | does not predict intensities or polarisation | does not incorporate birefringence or nonlinear effects |
