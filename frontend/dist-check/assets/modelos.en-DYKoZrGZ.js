const e=`## Ideal model

The **thin lens** model treats the lens as a two-dimensional interface that bends rays without introducing additional optical path through its thickness. The focal length [[f]], the distances [[d_o]] and [[d_i]], and the magnification [[m]] are preserved. The real glass thickness, spherical aberrations, chromatic aberration and surface-reflection losses are ignored.

The central simplification is that all rays from a point object converge at exactly one image point. This allows replacing refraction at two curved surfaces by a single algebraic operation.

## Hypotheses

- The lens thickness is negligible compared to [[d_o]], [[d_i]] and [[f]].
  - If violated, distances must be measured from the principal planes and the simple equation is no longer exact.
- Rays form small angles with the optical axis (paraxial approximation).
  - If violated, spherical aberrations appear that shift the image from the ideal prediction.
- The medium on both sides of the lens is homogeneous (air with unit index).
  - If violated, the lensmaker's equation requires a correction factor with the external indices.
- The lens shows no significant chromatic dispersion.
  - If violated, each wavelength has a slightly different focal length and the image shows colour fringes.

## Quantitative validity domain

The relative error of the thin lens model stays below 1 % when the thickness is less than one tenth of the focal length. For typical laboratory lenses with a 100 mm focal length, this requires thicknesses below 10 mm.

The paraxial approximation holds reasonably for rays with an angle smaller than 10 degrees to the axis, which for a 50 mm diameter lens with a 100 mm focal length corresponds to an order of magnitude of 5 degrees for the marginal ray.

For optical frequencies, BK7 glass chromatic dispersion produces variations in [[n]] on the order of 0.008 between 400 nm and 700 nm, equivalent to a focal shift of roughly 1 % of [[f]].

## Model failure signals

- The screen image appears blurry at the edges but sharp at the centre: spherical aberration.
- The measured image size does not match the prediction from [[m]] for extended objects: the model fails for marginal rays.
- Colour fringes appear around bright edges: chromatic aberration not contemplated by the single-index model.
- Moving the object slightly near the focus causes enormous, unpredictable image shifts: model instability zone.

## Extended or alternative model

The extended model uses **principal planes** for thick lenses. Distances are measured from these planes instead of the physical lens centre. The lens equation retains its form, but [[d_o]] and [[d_i]] are redefined. For multi-lens systems, the **transfer matrix** formalism (ABCD matrices) is employed, chaining the action of each surface and each free space.

When to switch to the extended model: when the lens thickness exceeds 10 % of its focal length, when two or more lenses are combined in sequence, or when chromatic aberration is not negligible and an achromatic doublet is required.

## Operational comparison

| Criterion | Thin lens model | Principal-planes model |
|---|---|---|
| Accuracy for laboratory lenses | High (error below 1 %) | Very high |
| Calculation complexity | Low (one algebraic equation) | Medium (requires locating planes) |
| Range of application | Individual thin lenses | Any lens or compound system |
| Aberration treatment | Not considered | Partial (spherical with exact tracing) |
| Suitable for industrial design | Pre-design only | Yes, with ray-tracing software |
`;export{e as default};
