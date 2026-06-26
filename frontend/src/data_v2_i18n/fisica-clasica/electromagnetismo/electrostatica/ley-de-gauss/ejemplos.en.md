# Exam-type example


## Problem statement

An insulating sphere of radius 0.15 m carries a total charge of 4.8 μC distributed uniformly throughout its volume. Determine the electric field at an exterior point located at 0.25 m from the centre of the sphere, the electric flux through the corresponding Gaussian surface, and the field at an interior point located at 0.08 m from the centre. Justify the choice of Gaussian surface in each case and discuss whether the point charge model would be equivalent for the exterior point.

## Data

- Sphere radius: 0.15 m
- Total charge: 4.8×10⁻⁶ C (uniformly distributed throughout the volume)
- Exterior point: distance from centre 0.25 m (greater than the radius)
- Interior point: distance from centre 0.08 m (less than the radius)
- Permittivity of free space [[epsilon_0]]: 8.854×10⁻¹² C²·N⁻¹·m⁻²

## System definition

The system is an insulating sphere with uniform volumetric charge distribution. The spherical symmetry of the distribution allows the choice of concentric spherical Gaussian surfaces. Each spherical Gaussian surface guarantees that [[campo_electrico_gaussiano]] is constant in magnitude and perpendicular to the surface at every point, enabling direct application of the Gaussian field formula.

For the exterior point (r₁ > R): the Gaussian surface is a sphere of radius r₁ that completely encloses the charge Q. The enclosed charge [[carga_encerrada]] equals the total charge: 4.8×10⁻⁶ C.

For the interior point (r₂ < R): the Gaussian surface is a sphere of radius r₂ that encloses only the fraction of charge contained in that sphere. Since the distribution is uniform, [[carga_encerrada]] is proportional to volume and scales with the cube of the relative radius with respect to R.

## Physical model

The model is based on Gauss's law with perfect spherical symmetry. The formula that extracts [[campo_electrico_gaussiano]] from the flux integral is applied:

{{f:campo_gaussiano}}

The total electric flux is obtained from the direct Gauss's law:

{{f:ley_gauss}}

The model hypotheses are: spherically symmetric charge distribution, vacuum (permittivity [[epsilon_0]]), and charges at rest. Spherical symmetry guarantees that [[campo_electrico_gaussiano]] is constant over any concentric sphere, validating the extraction of the field from the integral.

## Model justification

The uniform volumetric distribution has perfect spherical symmetry. By that symmetry, the field at any point at distance r from the centre can only point radially and can only depend on r. This property ensures that the field is constant in magnitude and perpendicular over any concentric sphere, justifying the choice of Gaussian spheres and the application of the Gaussian field formula.

The model is valid as long as the distribution is spherically symmetric and the charges are at rest. It would cease to hold if the distribution were asymmetric (for example, charge concentrated in one hemisphere) or if the system were not electrostatic.

## Symbolic solution

**Exterior point (r₁ > R):**

The enclosed charge [[carga_encerrada]] equals the total charge Q. The Gaussian surface area [[area_de_la_superficie_gaussiana]] is four times pi times the square of r₁.

Applying Gauss's law for the flux:

{{f:ley_gauss}}

Applying the Gaussian field formula:

{{f:campo_gaussiano}}

The exterior field grows with [[carga_encerrada]] and decreases with the square of [[area_de_la_superficie_gaussiana]], that is, with the square of r₁. This behaviour is identical to that of a point charge of value Q at the centre.

**Interior point (r₂ < R):**

The enclosed charge [[carga_encerrada]] is the volumetric fraction of Q that fits inside a sphere of radius r₂. Since the charge density is uniform, [[carga_encerrada]] scales with the cube of the relative radius.

The Gaussian surface area [[area_de_la_superficie_gaussiana]] is four times pi times the square of r₂. The resulting interior field grows linearly with r₂ and decreases with R cubed.

## Numerical substitution

**Exterior point (distance 0.25 m):**

Dividing [[carga_encerrada]] by [[epsilon_0]], the flux is 4.8×10⁻⁶ / 8.854×10⁻¹². The result, near 5.42×10⁵ N·m²·C⁻¹, is the value of [[flujo_electrico]] for the exterior point.

Exterior Gaussian area [[area_de_la_superficie_gaussiana]]: four times pi times 0.0625 m² gives approximately 0.785 m².

Exterior field: dividing [[flujo_electrico]] by [[area_de_la_superficie_gaussiana]], the result is 5.42×10⁵ / 0.785, near 6.91×10⁵ N/C. That is the value of [[campo_electrico_gaussiano]] at the exterior point.

Alternative verification: 8.988×10⁹ × 4.8×10⁻⁶ / (0.25)² gives approximately 6.91×10⁵ N/C. Both methods agree, confirming equivalence with the point charge for the exterior.

**Interior point (distance 0.08 m):**

Interior enclosed charge: multiplying 4.8×10⁻⁶ by (0.08/0.15)³ (approximately 0.1521) gives near 7.30×10⁻⁷ C. That is the value of [[carga_encerrada]] for the interior point.

Interior Gaussian area [[area_de_la_superficie_gaussiana]]: four times pi times 0.0064 m² gives approximately 0.0804 m².

Interior flux: dividing 7.30×10⁻⁷ by [[epsilon_0]], the result is near 8.24×10⁴ N·m²·C⁻¹. That is the value of [[flujo_electrico]] for the interior point.

Interior field: dividing [[flujo_electrico]] by [[area_de_la_superficie_gaussiana]] gives 8.24×10⁴ / 0.0804, near 1.03×10⁶ N/C. That is the value of [[campo_electrico_gaussiano]] at the interior point.

## Dimensional validation

Flux [[flujo_electrico]]: `[I T] / [M⁻¹ L⁻³ T⁴ I²]` reduces to `[M L³ T⁻³ I⁻¹]`, equivalent to N·m²·C⁻¹ ✓

Field [[campo_electrico_gaussiano]]: `[I T] / ([M⁻¹ L⁻³ T⁴ I²] · [L²])` reduces to `[M L T⁻³ I⁻¹]`, equivalent to N/C ✓

The constant [[epsilon_0]] has dimension `[M⁻¹ L⁻³ T⁴ I²]`, which in the denominator exactly compensates the charge dimensions to yield the correct flux.

## Physical interpretation

The exterior field calculated (near 6.91×10⁵ N/C) confirms the **spherical shell theorem**: a spherically symmetric charge distribution produces, in the exterior, exactly the same field as if all the charge were concentrated at the centre. This has an important practical consequence: for the purpose of computing forces on exterior charges, a charged sphere behaves as a point charge, regardless of how the charge is distributed internally.

The interior field calculated (near 1.03×10⁶ N/C at 0.08 m from the centre) is larger than the exterior, which may seem surprising. This occurs because, although [[carga_encerrada]] decreases with the cube of the radius, [[area_de_la_superficie_gaussiana]] decreases with the square, and the area decay rate dominates for small radii inside the sphere, increasing [[campo_electrico_gaussiano]]. As the distance increases toward R, the interior field approaches the field value at the sphere's surface.

If the charge distribution were non-uniform—for example, charge concentrated at the sphere's surface—the interior field would be exactly zero (ideal conductor) and the exterior field would equal that of a point charge. The comparison between these two cases shows that the interior charge distribution does affect the field inside the sphere, even though it does not affect the exterior field.

---

# Real-world example


## Context

In the design of **lightning rods** and high-voltage terminals, the electric field at the edges and tips of conductors can exceed the dielectric breakdown field of air (approximately 3×10⁶ N/C). When this occurs, the air ionises and conducts current, which can produce unwanted discharges or, in the case of the lightning rod, the controlled discharge that protects the building.

Gauss's law applied to Gaussian surfaces around a spherical conducting tip allows estimation of the maximum field as a function of the tip's radius of curvature and the accumulated charge. This analysis guides design: the smaller the radius of curvature, the stronger the field at the surface and the more efficient the controlled discharge.

## Physical estimation

We consider a conducting tip approximated as a sphere of radius 5 mm (equivalent to 5×10⁻³ m), charged to a high potential. In lightning rod design, the charge [[carga_encerrada]] accumulated before discharge can be of the order of 1 μC.

Using Gauss's law, the field at the sphere surface is estimated by dividing the flux by the spherical area. The surface area of the sphere of radius 5 mm is four times pi times (5×10⁻³)² ≈ 3.14×10⁻⁴ m².

Dividing [[carga_encerrada]] by [[epsilon_0]], the flux is 10⁻⁶ / 8.854×10⁻¹², near 1.13×10⁵ N·m²·C⁻¹. That is the value of [[flujo_electrico]]. Dividing [[flujo_electrico]] by the surface area [[area_de_la_superficie_gaussiana]] of 3.14×10⁻⁴ m² gives near 3.6×10⁸ N/C. That is the value of [[campo_electrico_gaussiano]], which is more than a hundred times the breakdown field of air.

This result indicates that electrical discharge is inevitable for that combination of charge and radius: the field far exceeds the air ionisation threshold. A larger radius (blunter tip) would require more charge to reach the same field.

## Interpretation

The result reveals why lightning rods have sharp tips: a tip with a small radius concentrates the electric field so that discharge occurs with less accumulated charge and at a lower voltage. This protects the structure by discharging the cloud before enough charge accumulates for a far more energetic and destructive discharge.

The analysis with Gauss's law shows that [[campo_electrico_gaussiano]] scales inversely with the square of the radius of curvature for the same charge: halving the radius quadruples the field. This dependence explains why sharp edges of any conductor—not just lightning rods—are preferred sites for electrical discharge, a principle that also applies to electrode design in plasma physics and particle accelerators.