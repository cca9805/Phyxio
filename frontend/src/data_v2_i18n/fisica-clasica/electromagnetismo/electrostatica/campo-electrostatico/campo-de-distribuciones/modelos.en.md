## Ideal model

The ideal continuous distribution model treats charge as a smooth mathematical function defined over an idealised geometry (wire, plane, or volume of infinite extent). It replaces the discrete nature of electrons and protons with continuous densities ([[lambda]], [[sigma]], or [[rho_vol]]) and assumes the geometry has the perfect symmetry needed to obtain a closed-form expression for [[campo_electrico_resultante]].

This model preserves the essential physical quantity — the resultant field [[campo_electrico_resultante]] — while ignoring edge effects, non-uniform density, and the quantum nature of charge. Its strength is producing exact analytical results for canonical geometries that serve as reference or approximation for real objects.

## Hypotheses

- **Infinite extent**: the wire or plane extends indefinitely; edge effects are negligible because [[r_dist]] is much smaller than the real object's dimensions.
- **Uniform density**: [[lambda]], [[sigma]], or [[rho_vol]] are constant throughout the domain; no local density variations exist. Violating this hypothesis requires integrating with a variable density function, which generally eliminates the closed form.
- **Linear homogeneous medium**: the space between source and field point has constant permittivity. If the medium is inhomogeneous, the permittivity enters the integral.
- **Statics**: the distribution does not vary in time. If there is time variation, electrostatics must be replaced by electrodynamics and the electric and magnetic fields couple.
- **Exterior field point**: [[r_dist]] is strictly positive; the field point is not on the source distribution. Violating this condition produces a non-physical singularity.

## Quantitative validity domain

The infinite wire model is valid when [[r_dist]] is much smaller than the total wire length. Quantitatively, for [[r_dist]] less than one tenth of the length, the error is below one percent compared to the exact finite-wire result.

The infinite plane model is valid when [[r_dist]] is much smaller than the smallest dimension of the real plane. For [[r_dist]] less than one fifth of the disc radius, the field computed with the infinite-plane formula differs by less than five percent from the exact disc-integration result.

In both cases, the quantitative validity condition is the inequality [[r_dist]] ≪ characteristic dimension of the source. When this inequality is not satisfied, the model loses validity and the model error grows rapidly.

## Model failure signals

- **Computed field [[campo_electrico_resultante]] decays faster than expected**: if the [[campo_electrico_resultante]] vs [[r_dist]] curve falls faster than the theoretical law (faster than 1/r for the wire, or begins to fall for the plane), edge effects are already relevant.
- **Result depends on orientation**: if [[campo_electrico_resultante]] has unexpected components (axial for the wire, parallel for the plane) that are not zero, symmetry is not perfect and the ideal model does not apply.
- **Order of magnitude inconsistent with given [[lambda]] or [[sigma]]**: a factor-of-two or more discrepancy with an order-of-magnitude estimate indicates that the real geometry differs substantially from the ideal.

## Extended or alternative model

The extended model for real distributions requires **integrating [[contribucion_diferencial_de_campo]] directly** over the finite geometry, without assuming infinite extent. For a wire of finite length `L`, the field at a point on the perpendicular bisector at distance [[r_dist]] is obtained by integrating the perpendicular component of [[contribucion_diferencial_de_campo]] from one end to the other.

For non-uniform distributions (spatially variable density), the integrand carries the density function as an additional factor and the integral rarely has a closed form. In those cases, numerical methods — finite elements, boundary elements, finite differences — are the only alternative.

When to switch to the extended model: when [[r_dist]] exceeds one tenth of the characteristic dimension of the source, or when the distribution is non-uniform and density gradients are observable. Switch to direct numerical integration when the geometry has fewer than two symmetry axes and does not admit analytical reduction of the integrand.

## Operational comparison

| Criterion | Ideal model (infinite extent) | Extended model (finite geometry) |
|---|---|---|
| Result form | Closed formula | Complex numerical or analytical integral |
| Spatial validity | [[r_dist]] ≪ source dimension | All space exterior to source |
| Complexity | Minimal (one expression) | High (parametrisation + integration) |
| Accuracy for small [[r_dist]] | High (error below 1%) | High (exact) |
| Accuracy for large [[r_dist]] | Low (overestimates E) | High (exact) |
| Typical use | Quick estimates, capacitors, long cables | Sensor design, edge calculations, irregular distributions |