# Change in speed models

## Ideal model

The ideal model of speed change describes the propagation of electromagnetic waves in transparent material media through a constant and isotropic refractive index. This simplified model considers that the wave speed is uniformly reduced throughout the medium according to the relationship between [[c_vacio]] and [[n_indice]].

In this model, the medium is characterized solely by its [[n_indice]], a dimensionless value greater than or equal to one that quantifies the slowing factor with respect to vacuum. The resulting velocity [[v_medio]] is constant throughout the homogeneous material and does not depend on the direction of propagation or the intensity of the wave.

The central simplification consists of ignoring the discrete atomic structure of the material, treating it as a continuum with uniform optical properties. It is assumed that the index is independent of the wave frequency, valid for limited spectral ranges far from electronic resonances.

## Hypotheses

- **Homogeneity**: the material has uniform composition and density throughout its volume, so [[n_indice]] is constant at any point.

- **Isotropy**: optical properties are identical in all directions. The propagation speed does not depend on the relative orientation between the wave and the crystalline structure of the material.

- **No dispersion**: [[n_indice]] is independent of [[frecuencia_onda]] or [[lambda_vacio]]. All colors of light propagate with the same speed in the medium.

- **Linearity**: the response of the medium is proportional to the incident electric field. There are no nonlinear optical effects such as index changes induced by high light intensity.

- **Transparency**: the medium does not absorb energy from the wave. The intensity remains constant during propagation, without attenuation by photoelectric or thermal effects.

- **Thin optical**: interfaces between media are flat surfaces without roughness that could cause diffraction or additional scattering of light.

If homogeneity is violated, index gradients appear that curve light rays. If non-dispersion is violated, different colors travel at different speeds producing chromatic aberrations.

## Quantitative validity domain

The constant index model is valid when the following quantitative conditions are met:

- The wavelength of radiation is much greater than the interatomic spacing of the material (typically greater than ten nanometers). For shorter wavelengths, the continuous medium approximation fails and crystal optics must be used.

- The frequency of the wave is at least one order of magnitude away from the electronic resonance frequencies of the material. Near resonances, the index varies rapidly with frequency and can become complex.

- The intensity of the wave is less than ten to the twelve watts per square meter. At higher intensities, nonlinear effects such as the Kerr enrichment modify the effective index.

- The temperature range keeps the material in a stable phase without phase transitions. Near melting or evaporation points, the index varies anomalously.

- The relative error of the model with respect to experimental data is less than one percent for standard optical glasses in the visible range.

## Model failure signals

The following symptoms indicate that the constant index model no longer applies:

- **Color separation**: when a white beam passes through the medium and decomposes into colors, evidencing chromatic dispersion. The single index model cannot describe this phenomenon.

- **Exponential attenuation**: if the light intensity decreases rapidly with distance in an exponential manner, the medium absorbs energy and the transparency model fails.

- **Double refraction**: in certain crystals, an incident ray splits into two emerging rays with different polarizations and speeds. This indicates optical anisotropy not captured by the isotropic model.

- **Self-focusing or defocusing**: at high intensity, the light beam modifies its own transverse structure by converging or diverging spontaneously. This nonlinear effect violates the linearity hypothesis.

- **Temporal variation of index**: if the measured index changes with time without temperature change, photochemical or ionization processes may exist that the static model does not describe.

## Extended or alternative model

The extended model incorporates chromatic dispersion through the Sellmeier or Cauchy dispersion relation. These empirical equations describe how [[n_indice]] varies with [[lambda_vacio]], allowing prediction of the speed of each color separately.

For anisotropic media such as uniaxial or biaxial crystals, the extended model defines a tensor of indices or principal indices in specific crystallographic directions. The speed of the wave then depends on the relative orientation between polarization and crystal axes.

When to switch to the extended model: when designing high-precision optical systems where chromatic aberration causes unacceptable aberrations, or when working with optical crystals where birefringence affects system behavior.

For absorbing media, the extended model introduces a complex index where the imaginary part describes wave attenuation. Phase velocity and group velocity differ in these media, requiring complete electromagnetic description.

In high-intensity nonlinear optics, the effective index depends on light intensity according to a quadratic proportionality relationship. When to use this model: ultra-intense laser applications, fast optical switching, or harmonic generation.

## Operational comparison

| Characteristic | Ideal model | Extended model |
|---|---|---|
| Refractive index | Constant for all frequencies | Variable with wavelength |
| Isotropy | Total, same index in all directions | Possible anisotropy with directional indices |
| Linearity | Always linear | Nonlinear at high intensity |
| Precision | High in narrow spectral range | High in entire visible spectrum |
| Computational complexity | Low, single velocity | Medium, frequency-dependent velocity |
| Typical applications | Basic geometric optics calculations | Design of achromatic lenses, prisms |

The ideal model is preferable when making quick estimates or when working with monochromatic light far from resonances. The extended model is necessary for precision optical systems with polychromatic light or special crystalline materials.
