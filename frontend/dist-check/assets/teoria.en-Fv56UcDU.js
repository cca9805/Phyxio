const e=`# Gauss's Law

## Conceptual context

Gauss's law is one of the cornerstones of classical electrostatics and, in its most general formulation, the first of Maxwell's four equations. Its power lies in **relating the electric field to its source—charge—in a global way**: where Coulomb's law requires integrating the vector contribution of each charge element, Gauss's law allows the field to be computed in symmetric problems through a global counting argument. The number of field lines leaving a region is simply proportional to the charge it contains.

This leaf focuses on the central physical question: **how does the enclosed charge determine the total electric flux through any closed surface?** The answer makes Gauss's law a powerful computational tool for symmetric geometries and a principle of understanding for arbitrary ones.

## 🟢 Essential level

Imagine the electric field as lines that emerge from positive charges and end at negative charges. Each charge emits a fixed number of lines: the more positive charges in a region, the more lines emerge outward from it.

Gauss's law states something remarkable: if you draw **any closed surface** around a region—it can be a sphere, a cube, or a completely irregular shape—the net number of field lines crossing it outward depends only on the total enclosed charge, not on the shape you chose. A positive charge sends the same number of lines outward regardless of whether you wrap it in a small balloon or a large one.

Electric flux [[Phi_E]] quantifies that net number of lines. If [[Q_enc]] is positive, [[Phi_E]] is positive: the field exits. If [[Q_enc]] is negative, [[Phi_E]] is negative: the field enters. If [[Q_enc]] is zero, there is no net flux even though the field is not necessarily zero at every point on the surface.

> [!NOTE]
> The key intuition is that the shape of the surface is irrelevant to the total flux. Changing the Gaussian surface—as long as it does not cross any charge—does not alter the result.

## 🔵 Formal level

Gauss's law in integral form states:

{{f:ley_gauss}}

where [[Phi_E]] is the total electric flux through the closed surface, [[Q_enc]] is the net electric charge enclosed inside it, and [[epsilon_0]] is the permittivity of free space, with a value of approximately 8.854×10⁻¹² C²·N⁻¹·m⁻².

**Flux is defined** as the surface integral of the electric field projected onto the outward normal vector of the surface. For a surface where the field is uniform and perpendicular to it, the flux simplifies to the product of the field and the area.

When the charge distribution has **spherical, cylindrical or planar symmetry**, the field is uniform in magnitude and perpendicular to the natural Gaussian surface for that symmetry. In that case, Gauss's law allows the field to be factored out of the integral to give:

{{f:campo_gaussiano}}

where [[E_G]] is the field magnitude, [[A_G]] is the total area of the Gaussian surface, [[Q_enc]] is the enclosed charge, and [[epsilon_0]] is the permittivity of free space.

**Dimensionally**, flux has units of N·m²·C⁻¹, equivalent to V·m. Gauss's law is dimensionally consistent: the ratio charge/permittivity has the same units as flux.

> [!TIP]
> The trick for efficiently applying Gauss's law is to choose the Gaussian surface so that the field is either perpendicular and uniform over it, or parallel to it (zero contribution). With that choice the integral becomes a simple product.

## 🔴 Structural level

Gauss's law is a direct consequence of Coulomb's law: the field of a point charge falls off as the inverse square of distance, and a spherical surface area grows exactly with the square of radius. This precise balance makes the flux through any concentric sphere the same regardless of its radius.

**From a topological perspective**, charges are sources and sinks of the field. In charge-free regions, field lines must enter and exit in equal numbers: the field inside a **conductor in electrostatic equilibrium** is exactly zero because any interior field would drive currents until neutralised. The law has a clear limit: **it does not allow the field to be computed directly without sufficient symmetry**; in those cases the integral must be evaluated numerically.

In the **differential form**, Gauss's law becomes the divergence of the electric field proportional to the local charge density divided by [[epsilon_0]], Maxwell's first equation. The generalisation to **dielectric media** replaces [[epsilon_0]] with the medium permittivity: bound charges modify the effective field, though the electric displacement flux is conserved.

> [!WARNING]
> Gauss's law in integral form cannot be applied if the permittivity varies in space. In inhomogeneous media the differential form with local permittivity must be integrated.

A key structural aspect: Gauss's law **depends only on the algebraic sum** of interior charges, not their distribution. Two completely different configurations with the same total enclosed charge produce exactly the same flux.

## Deep physical interpretation

Flux [[Phi_E]] does not measure the field at a point: it measures **how much field collectively crosses a surface**. Two points may have fields of completely different directions and magnitudes, but their contributions sum algebraically. This collective nature explains the independence of flux from surface geometry: in charge-free regions, any field tube entering on one side must exit on the other without altering the net flux.

> [!NOTE]
> This interpretation explains why the interior of a Faraday cage is shielded: any external field entering on one side exits on the other without penetrating the interior, since there are no internal charges acting as a source.

## Order of magnitude

Typical charges in laboratory experiments are of the order of microcoulombs (\\(\\mu\\)C), producing fluxes of order \\(\\mu\\)C / 8.85×10⁻¹² ≈ 10⁵ N·m²·C⁻¹. For the electron charge (1.6×10⁻¹⁹ C), the flux would be of order 1.8×10⁻⁸ N·m²·C⁻¹, an extremely small value that illustrates the difference between atomic and macroscopic scales.

A **dielectric breakdown field** for air of 3×10⁶ N/C over a sphere of radius 10 cm produces a flux of approximately 3×10⁶ × 4π × 0.01 ≈ 3.8×10⁵ N·m²·C⁻¹, corresponding to an enclosed charge of about 3.4 μC. This order of magnitude allows absurd results to be detected: a flux of 10³⁰ N·m²·C⁻¹ would imply charges of the order of tonnes of coulombs, physically impossible.

Comparing Coulomb's law and Gauss's law shows they give the same result for symmetric geometries, but Gauss's law is computationally far more efficient in those cases.

## Personalized resolution method

To apply Gauss's law systematically:

1. **Identify the symmetry**: determine whether the charge distribution has spherical, cylindrical or planar symmetry. Without symmetry, Gauss's law is still valid but does not allow the field to be obtained directly.
2. **Choose the Gaussian surface**: concentric sphere for spherical symmetry, coaxial cylinder for cylindrical symmetry, rectangular box for planar symmetry. The surface should pass through the point where the field is to be determined.
3. **Compute [[Q_enc]]**: sum algebraically all charges—with their signs—that lie inside the chosen surface. External charges do not contribute.
4. **Apply Gauss's law**: compute the flux and, if symmetry allows the field to be factored out, divide by the area [[A_G]] to obtain [[E_G]].
5. **Check the direction**: the direction of the field is given by the sign of [[Q_enc]] and the geometry of the chosen surface.

## Special cases and extended example

**Conductor in electrostatic equilibrium**: inside a conductor, any interior field would drive charge movement until it cancelled itself. Gauss's law over a Gaussian surface fully embedded in the conductor gives zero [[E_G]] and zero [[Q_enc]]: all free charges redistribute on the surface of the conductor, not in its interior.

**Zero net enclosed charge**: if there are two equal and opposite charges inside the surface, [[Q_enc]] is zero and [[Phi_E]] is zero. This does not mean the field is zero at every point on the surface—there is field, but the inward and outward contributions cancel globally.

**Uniformly charged sphere**: for a sphere of radius R with total charge [[Q_enc]] distributed uniformly, Gauss's law gives an exterior field that falls off as the inverse square of the distance, identical to that of a point charge at the centre. Inside the sphere, only the enclosed charge contributes to the field, which grows linearly with the distance from the centre.

## Real student questions

**Why does the shape of the Gaussian surface not matter if the field varies from point to point on it?**

Because flux is an integral that sums all contributions. Even if the field is strong at one point and weak at another, the global sum depends only on the interior sources. The field varies from point to point, but the integral over the complete surface always gives the same value for the same [[Q_enc]].

**Can Gauss's law be applied if charges are moving?**

In classical electrostatics, Gauss's law in integral form applies to charges at rest. For moving charges the differential form with time-dependent fields and the full Maxwell equations is required. However, Gauss's law in differential form remains valid in electrodynamics.

**Why does an exterior charge not contribute to the net flux?**

Because field lines from an exterior charge cross the surface at two points: they enter on one side and exit on the other. The positive and negative contributions cancel exactly in the closed integral. Only interior charges have field lines that begin or end inside the surface.

**How do I know if I am applying Gauss's law correctly?**

The most direct check is to verify that [[Q_enc]] includes only interior charges, that [[A_G]] corresponds to the active part of the surface, and that the sign of the flux is consistent with the sign of [[Q_enc]].

## Cross-cutting connections and study paths

Gauss's law is a gateway to electric potential: once [[E_G]] has been computed, it can be integrated to obtain the potential, a path especially efficient for symmetric geometries. Within electrostatics, it is the fundamental tool for capacitors and charged conductors; the capacitors leaf uses the Gauss's law result for the field between parallel plates directly.

Looking ahead, Gauss's law in differential form is Maxwell's first equation and the starting point for time-dependent fields. The connection to Coulomb's law is direct: both are equivalent and contain the same physical information expressed differently.

## Final synthesis

Gauss's law links the cause—the enclosed charge [[Q_enc]]—to the collective effect—the electric flux [[Phi_E]]—through the fundamental constant [[epsilon_0]]. Its operational power lies in the independence of flux from the geometry of the Gaussian surface, which allows the most convenient surface to be chosen for each problem. For symmetric geometries, this choice turns a complex integration problem into a straightforward algebraic computation of the field [[E_G]].
`;export{e as default};
