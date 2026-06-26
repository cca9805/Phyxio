## Ideal model

The ideal model is a monochromatic electromagnetic wave propagating in a linear, homogeneous, isotropic medium. The medium is summarized by an effective index [[indice_de_refraccion_efectivo]], and that index gives the phase speed [[v_m]] and the wavelength inside the material [[lambda_m]].

This model separates what the source contributes from what the medium contributes. The source fixes frequency; the medium changes speed and spatial scale. [[velocidad_de_la_luz_en_el_vacio]] remains the vacuum reference, not the material speed unless the index is practically one.

## Hypotheses

- The medium is treated as linear; if response is nonlinear, [[indice_de_refraccion_efectivo]] may depend on intensity.
- The material is considered homogeneous; if it changes point by point, propagation needs a spatial model.
- The medium is taken as isotropic; if anisotropy appears, index depends on direction or polarization.
- Absorption losses are small; if they grow, attenuation must be modeled.
- The wave is approximately monochromatic; if it is a short pulse, [[v_m]] is not enough for transport.

These assumptions are reasonable for glass, water, air, transparent plastics, or ideal fibers in a first estimate.

## Quantitative validity domain

As a practical criterion, the simple model is reasonable if the index changes little across the source bandwidth and if absorption does not appreciably reduce amplitude over the studied distance. For a classroom estimate, a relative variation below 5 % often allows an effective index.

The typical range of many transparent dielectrics lies between 1 < [[indice_de_refraccion_efectivo]] and [[indice_de_refraccion_efectivo]] < 2.5. [[indice_de_refraccion_efectivo]], [[v_m]], and [[lambda_m]] must also be positive; zero or negative values do not represent the ordinary regime of this leaf.

## Model failure signals

The model fails if it predicts a speed greater than [[velocidad_de_la_luz_en_el_vacio]] in an ordinary medium, if it attributes a frequency change to a stationary boundary, or if it uses the same index for widely separated spectral regions. It also fails when applied to metamaterials, plasmas, or anisotropic media without additional hypotheses.

An experimental sign of failure is color separation or pulse broadening. Those effects are not errors in electromagnetism; they indicate that the single-index model has become too limited.

## Extended or alternative model

The extended model is dispersive or absorbing. When to switch to the extended model: when [[indice_de_refraccion_efectivo]] depends on frequency, when the material absorbs appreciably, when the wave is a short pulse, or when the question concerns energy and information transport. The transition to a dispersive model occurs when a single phase speed no longer describes what is observed.

In that case, group speed, complex index, or absorption coefficients are introduced. The current leaf remains the conceptual base, but a single real index is no longer enough for the full phenomenon.

## Operational comparison

Ideal model: uses one real [[indice_de_refraccion_efectivo]], is fast and clear for estimating [[v_m]] and [[lambda_m]], and works for monochromatic waves with small losses. Its limit is that it does not describe absorption, strong dispersion, or pulse broadening.

Extended model: uses dispersion, losses, or group speed. It is more accurate for real data and optical links, but requires more material and signal parameters. Operationally, start with the ideal model and switch when observable failure signals appear.