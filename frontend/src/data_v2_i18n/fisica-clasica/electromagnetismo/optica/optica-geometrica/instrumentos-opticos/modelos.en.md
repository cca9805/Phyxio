## Ideal model

The ideal model treats every lens in the optical instrument as a **perfect thin lens** immersed in air, with no thickness, no chromatic or spherical aberrations and total light transmission. Rays obey Snell's law in the small-angle approximation and image formation is described by the thin-lens equation. Within this framework, the angular magnification of the magnifying glass depends solely on [[d_pp]] and [[f_lupa]], and the microscope magnification reduces to the product of [[longitud_del_tubo]] divided by [[f_obj]] and [[d_pp]] divided by [[f_oc]]. The model ignores diffraction, chromatic dispersion and reflection losses at the surfaces.

## Hypotheses

- The angles of incidence of all rays with respect to the optical axis are small (paraxial approximation).
- The thickness of each lens is negligible compared to its focal length and working distances.
- The medium between the lenses and the eye is air with unit refractive index.
- The lens surfaces are perfect spheres with no manufacturing defects.
- The observer's eye is accommodated at infinity (relaxed eye) when using the magnifier or the eyepiece.
- If any of these conditions is violated, the image degrades due to aberrations and the actual magnification deviates from the prediction.

## Quantitative validity domain

The angular magnification equation is accurate when the semi-aperture of the lens satisfies h/R < 0.1, keeping the spherical-aberration error below 1 % in the image position. For a microscope with standard tube length of 0.16 m and objective focal lengths between 0.002 m and 0.05 m, the paraxial formulae are reliable if the numerical aperture does not exceed 0.65, a threshold beyond which third-order aberration exceeds 5 % of the Airy-disc size.

## Model failure signals

When the image observed through the instrument shows **chromatic halos** (coloured edges) on high-contrast objects, the single-refractive-index hypothesis fails. If increasing the objective aperture causes the image to lose sharpness at the edges while the centre remains defined, spherical aberration dominates and the paraxial approximation ceases to be valid. Another indicator is **empty magnification**: if raising the total magnification does not reveal more detail and merely enlarges a blurred patch, the diffraction limit has been surpassed and the geometrical model cannot explain the observed degradation.

## Extended or alternative model

The extended model incorporates thick lenses, Seidel aberration coefficients and chromatic dispersion of the glass. Instead of a single focal length, each lens is described with principal planes and effective focal lengths that depend on wavelength. Research microscopes use achromatic or apochromatic objectives designed to minimise chromatic aberration at two or three wavelengths. When to switch to the extended model: when the numerical aperture of the objective exceeds 0.65 or when colour halos affect the measurement. Switching to this model requires computing the longitudinal chromatic aberration and correcting it with combinations of glasses of different dispersion (achromatic doublets).

## Operational comparison

| Criterion | Paraxial model (ideal) | Model with aberrations (extended) |
|---|---|---|
| Accuracy | High for small apertures | High across the entire aperture range |
| Complexity | Low, simple algebraic equations | High, requires ray tracing and glass data |
| Application range | Magnifying glasses, school microscopes, low-power telescopes | Research microscopes, astronomical telescopes |
| Additional variables | None | Seidel coefficients, glass dispersions, lens thicknesses |
| Validity limit | Numerical aperture below 0.65 | No intrinsic geometrical limit, limited by diffraction |