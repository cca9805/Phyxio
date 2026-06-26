const e=`## Conceptual errors

### Error 1: Believing that flux depends on the shape of the Gaussian surface

**Why it seems correct**

The electric field varies from point to point in space. If the Gaussian surface changes shape, the points where the field is evaluated are different, with different values. The student reasons that summing different values over different surfaces must give different results. This intuition is correct for the local field, but incorrect for the total flux.

**Why it is incorrect**

The flux integral does not sum field values but their projection onto the outward normal vector weighted by area. Gauss's law guarantees that this integral depends only on the enclosed sources, not on the surface. The balance of field lines entering and exiting is exactly the same for any surface that does not cross charges, due to the nature of the electrostatic field as a conservative field with discrete sources.

**Detection signal**

The student computes different fluxes for a large sphere and a small cube around the same charge. If the values differ, the error lies in the calculation, not in the principle.

**Conceptual correction**

Flux is a property of the surface-source system, not of the local field. The shape of the Gaussian surface is a computational tool, not a physical parameter. Changing the surface without crossing charges does not change [[Phi_E]].

**Contrast mini-example**

Apply Gauss's law to a 1 μC charge with a sphere of radius 1 cm and with a cube of side 10 cm. The correct formula gives the same flux in both cases: 1×10⁻⁶ / 8.85×10⁻¹² ≈ 1.13×10⁵ N·m²·C⁻¹. If the student obtains different values, they have made a calculation error that contradicts Gauss's law.

---

### Error 2: Including external charges in [[Q_enc]]

**Why it seems correct**

External charges do generate a field on the Gaussian surface. If the field from an exterior charge reaches the surface, it seems reasonable to include that charge in the balance. The student applying this logic confuses the field (which extends outward) with the net flux (which only reflects interior sources).

**Why it is incorrect**

Field lines from an exterior charge cross the surface at two points: they enter on one side and exit on the other. Their contribution to the net flux is exactly zero. Only interior charges have lines that begin or end inside the surface, producing a non-zero net flux.

**Detection signal**

The student adds an exterior charge when computing [[Q_enc]] and obtains a flux that does not correspond to the physical situation. Comparing with Coulomb's law for a simple geometry, the results do not match.

**Conceptual correction**

Only charges whose position lies strictly inside the Gaussian surface belong to [[Q_enc]]. Charges on the surface itself present an ambiguity resolved by convention (usually not included). Exterior charges never contribute to the net flux under any circumstances.

**Contrast mini-example**

There are two charges: 2 μC inside the surface and 5 μC outside. If the student computes [[Q_enc]] as 7 μC, they obtain a flux of 7.9×10⁵ N·m²·C⁻¹. The correct value, with only the interior charge, is 2.26×10⁵ N·m²·C⁻¹. The difference is a factor of 3.5, a serious error that cannot be attributed to numerical imprecision.

## Model errors

### Error 1: Using Gauss's law to compute the field when there is no symmetry

**Why it seems correct**

Gauss's law is always valid, leading the student to think it can always be used to compute the field directly. After learning to obtain [[E_G]] with spherical symmetry, they generalise the procedure to any geometry.

**Why it is incorrect**

Gauss's law relates the integral flux to the enclosed charge, but does not specify how the field is distributed over the surface. Without symmetry, the field varies in magnitude and direction over the surface and cannot be factored out of the integral. The result would be an equation with two unknowns: the flux and the field distribution.

**Detection signal**

The student tries to apply Gauss's law to an off-centre charge inside a sphere or to an asymmetric charge distribution and obtains a field value as though it were uniform. Comparing with Coulomb's law, the values do not match.

**Conceptual correction**

To compute the field with Gauss's law, the geometry must guarantee that the field is perpendicular and of constant magnitude over the chosen surface. Without that condition, Gauss's law gives the total flux but not the local field.

**Contrast mini-example**

A point charge placed off-centre inside a Gaussian sphere: the total flux through the sphere is still the charge divided by [[epsilon_0]], but the field varies enormously from point to point on the sphere, being much stronger near the pole closest to the charge. Computing a "mean field" by dividing the flux by the area gives a value with no physical meaning for any specific point.

## Mathematical errors

### Error 1: Not considering only the active area of the Gaussian surface

**Why it seems correct**

When applying the formula that divides flux by area to obtain [[E_G]], the student uses the total surface area, including parts where the field is parallel to the surface (zero flux contribution). For a cylinder, this means including the end caps even when the field is tangential there.

**Why it is incorrect**

Only the part of the surface where the field is perpendicular contributes to the flux. If the field is parallel to a portion of the surface, the dot product of the field with the normal vector is zero and that portion contributes nothing to the flux. Including that area in the denominator gives an incorrect [[E_G]], systematically smaller than the true value.

**Detection signal**

For a charged cylindrical conductor, the student computes a field using the total cylinder area (lateral plus end caps) instead of only the lateral area. The result is below the correct value by the factor that the end caps represent relative to the total.

**Conceptual correction**

When designing the Gaussian surface, deliberately ensure that parts where the field is not perpendicular are not part of the active area [[A_G]] calculation. Only the area where the field is perpendicular enters the denominator of the field expression.

**Contrast mini-example**

A long wire with linear charge density: the cylindrical Gaussian surface of length L has lateral area 2πrL and two end caps of area πr² each. Since the field is radial and perpendicular only to the lateral surface, using the total area gives an incorrect [[E_G]]. Using only 2πrL gives the correct result that matches the integrated Coulomb result.

## Interpretation errors

### Error 1: Confusing zero flux with zero field

**Why it seems correct**

When Gauss's law gives zero flux, the student concludes there is no electric field in the region. If there is no flux, it seems there is no field. This confusion mixes the global flux concept with the local field concept.

**Why it is incorrect**

Zero flux only indicates that [[Q_enc]] is zero: the positive and negative contributions of the field to the flux cancel each other. The field may be non-zero at every point on the surface, as long as the inward and outward contributions balance. A clear example: an electric dipole inside the surface produces zero flux because [[Q_enc]] is zero, but the field is intense near the charges.

**Detection signal**

The student asserts there is no field on the Gaussian surface because the flux is zero. When computing the field using Coulomb's law for the same charges, they obtain non-zero values at points on the surface.

**Conceptual correction**

Zero flux implies zero [[Q_enc]], not zero field. The field on the surface depends on all charges—interior and exterior. Only the net flux, which integrates the field's contribution over the entire surface, is zero when [[Q_enc]] is zero.

**Contrast mini-example**

Two equal and opposite charges, one of 1 μC and one of −1 μC, enclosed in the same Gaussian surface. Gauss's law gives zero flux. But if we evaluate the field at the point closest to the positive charge, we obtain a value of the order of 10⁴ N/C or more depending on the distance. Intense field, zero net flux.

## Quick self-control rule

Before reporting the result of a Gauss's law problem, check three things:

1. **Interior charges only**: confirm that [[Q_enc]] includes only the charges inside the Gaussian surface, with their correct signs.
2. **Active symmetry**: verify that the chosen geometry guarantees a uniform and perpendicular field over the active surface. Without symmetry, Gauss's law gives the flux but not the field.
3. **Sign consistency**: the sign of [[Phi_E]] must match the sign of [[Q_enc]]. Positive flux with negative charge is impossible; if it occurs, there is a sign error in the charges or in the orientation of the normal vector.
`;export{e as default};
