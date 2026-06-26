const e=`## Ideal model

The ideal model treats the **refractive index** [[n]] as a scalar constant independent of wavelength, temperature and propagation direction. Light is modelled as straight rays that change speed and direction when crossing flat interfaces between homogeneous, isotropic media. The frequency and the tangential component of the wave vector are conserved.

In this model the speed of light in the medium [[v_medio]] is simply [[c]] divided by [[n]], and the wavelength [[lambda_medio]] is [[lambda_0]] divided by [[n]]. Snell's law gives the angular deviation of the ray using only the indices of the two media and the angle of incidence [[theta_1]].

## Hypotheses

- **Homogeneous medium**: the index [[n]] is uniform throughout the volume of the material. If index gradients existed, the ray would follow curved trajectories instead of straight ones.
- **Isotropic medium**: the index does not depend on the propagation direction or on polarisation. Violating this hypothesis would lead to birefringence and ray splitting.
- **Monochromatic light**: the index does not vary with wavelength. If polychromatic light is used without correction, each colour experiences a different index and the calculations lose accuracy.
- **Flat, ideal interface**: the separating surface is smooth on the scale of the wavelength. Roughness would produce diffuse scattering instead of specular refraction.

## Quantitative validity domain

The constant-index model is reasonable when the spectral bandwidth of the source is below 10 nm, which keeps the variation of [[n]] below 0.001 in common glasses. For broader-band sources, chromatic dispersion generates errors that can exceed > 0.5 degrees in the angular deviation of a prism.

Regarding the order of magnitude of dimensions, the geometrical model requires that the structures of the optical system be much larger than the wavelength: lens diameters and apertures > 100 times [[lambda_0]] (typically > 50 micrometres for visible light). Below that threshold, diffraction effects dominate and the ray concept loses validity.

## Model failure signals

- When a prism is illuminated with white light, the exit ray shows a fan of colours instead of a single ray: chromatic dispersion indicates that [[n]] depends on wavelength.
- The image formed by a lens shows coloured fringes (chromatic aberration): the constant-index model does not predict this defect.
- Measuring the index with two lasers of widely separated wavelengths yields different values of [[n]], confirming dispersion.
- In birefringent crystals two images of the same object are observed, signalling that the index depends on the polarisation direction.

## Extended or alternative model

The **dispersive model** replaces the constant [[n]] with a function of wavelength [[lambda_0]], usually described by the Sellmeier equation with material-specific empirical coefficients. This model can calculate the angular separation of colours in prisms and the chromatic aberration of lenses to hundredths of a degree.

For anisotropic crystals the **tensorial model** is used, where the index is a second-order tensor. Each polarisation direction experiences a different index, producing birefringence and double refraction.

When to switch to the dispersive model: whenever the light source has a bandwidth exceeding 10 nm or when the optical design demands angular precision better than a tenth of a degree. When to switch to the tensorial model: when the medium is a non-cubic crystal or when working with controlled polarisation.

## Operational comparison

| Criterion | Ideal model (constant index) | Dispersive model (Sellmeier) |
|---|---|---|
| Angular precision | Sufficient for narrow-band light | High across the entire visible spectrum |
| Complexity | A single constant per medium | Full curve with empirical coefficients |
| Chromatic aberration | Not predicted | Quantified accurately |
| Range of application | Lasers and filtered sources | White light, LEDs and lens design |
| Birefringence | Not considered | Requires tensorial extension |
`;export{e as default};
