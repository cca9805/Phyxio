const e=`# Electric Field of Continuous Charge Distributions

## Conceptual context

Real electric charges are not always point-like. A charged metallic cable, a conducting plate, or an ionic crystal distributes its charge along a wire, a surface, or a volume. Computing the electric field [[E]] in those cases requires extending the point-charge method to infinitely many infinitesimal elements, summing their vectorial contributions via an integral.

This method is the direct application of the **superposition principle** in its most general form. Its domain covers all electrostatics of real geometries: high-voltage cables, capacitor plates, charged spheres, and molecular distributions. Understanding how to integrate [[dE]] over a distribution is understanding the mathematical architecture of all classical electrostatics.

The key concept that distinguishes it from the point charge is **symmetry**: identifying which field components cancel by symmetry arguments drastically reduces the complexity of the integration before writing a single equation.

## 🟢 Essential level

Picture a long charged rod. Each tiny piece of the rod creates a small field [[dE]] at the point where you want to know the total field. To obtain the real field [[E]] you must **add all those vectors**, not their magnitudes: two symmetric pieces on opposite sides of the rod contribute vectors that point in partially opposite directions, and part of their effects cancel.

The key intuition is that **the geometry of the distribution controls how much symmetry cancels**. An infinite plane cancels so much that [[E]] turns out constant at any distance. An infinite wire cancels the axial contributions and the field decays with distance, but more slowly than a point charge. The more extended the source in dimensions, the slower its decay.

> [!NOTE]
> The field is not obtained by summing magnitudes. The direction of each [[dE]] matters as much as its magnitude. Forgetting this is the most costly conceptual error in charge distributions.

## 🔵 Formal level

The differential contribution of a small differential charge portion to the field point at distance [[r_dist]] is computed as if that charge were a point charge:

{{f:campo_elemento_diferencial}}

Before integrating, [[dE]] is decomposed into Cartesian components. Components that are zero by symmetry are cancelled analytically; only the surviving ones are integrated. This is the core of the method.

**Infinitely long uniformly charged wire.** Cylindrical symmetry exactly cancels the axial contributions of [[dE]]. The integral of the radial component over the infinite wire gives:

{{f:campo_hilo_infinito}}

The field [[E]] is **radial and perpendicular to the wire**, and decays inversely with [[r_dist]]. This slower decay than the point charge reflects that the source has an extended dimension.

**Infinitely large uniformly charged plane.** Planar symmetry cancels all contributions parallel to the plane. Only the perpendicular component survives and the integral over the infinite plane gives:

{{f:campo_plano_infinito}}

The result is **independent of [[r_dist]]**: the field does not decrease as one moves away from the plane. This uniformity is the unmistakable signature of perfect planar symmetry and is the basis of the parallel-plate capacitor.

**Volume distribution.** When charge is distributed throughout a volume with density [[rho_vol]], the differential contribution of each volume element is:

{{f:campo_distribucion_volumetrica}}

The integral over the entire volume gives the resultant field [[E]]. This is the most general form of the superposition principle applied to three-dimensional distributions.

> [!TIP]
> Before integrating: (1) sketch the distribution, (2) identify the symmetry axis, (3) argue which components of [[dE]] cancel in pairs. Only then set up the integral.

## 🔴 Structural level

The comparison between the three decay laws reveals the **dimensional architecture** of the electric field:

| Source geometry | Source dimension | Law of [[E]] vs [[r_dist]] |
|---|---|---|
| Point charge | 0D | Field proportional to [[r_dist]] inverse squared |
| Infinite wire | 1D | Field proportional to [[r_dist]] inverse |
| Infinite plane | 2D | Constant field, independent of [[r_dist]] |

Each additional dimension of the source reduces the decay exponent by one. This is not a mathematical coincidence: it reflects how many dimensions of space are "saturated" by the source and how many remain free for the field to disperse.

**Validity limits of infinite-extent models.** The infinite wire and infinite plane are idealisations. Their field matches that of the real object only when [[r_dist]] is much smaller than the object's dimensions. When [[r_dist]] approaches the size of the source, the field ceases to follow the idealised law and direct integration for finite geometry is required.

**Spherical symmetry and Gauss's law.** For distributions with perfect spherical symmetry, direct integration of [[dE]] is possible but costly. Gauss's law — relating the flux of [[E]] through a closed surface to the enclosed charge — is mathematically equivalent and produces the same result in a single line. Using Gauss is not an informal shortcut: it is the most natural way to exploit three-dimensional symmetry.

**Singularities and continuous density.** The continuous distribution model fails when [[r_dist]] tends to zero, producing a divergence in [[dE]]. Physically, this means that all real charge has finite extent; there is no truly point-like charge density. At the nanometre scale, quantum effects dominate and the classical continuous model ceases to apply.

> [!WARNING]
> A result for [[E]] that **grows** as one moves away from the source is always incorrect. Verify the sign of the decay exponent before accepting any numerical result.

## Deep physical interpretation

The field [[E]] of a continuous distribution is not simply the sum of many point fields: it is the limit of that sum as the number of elements tends to infinity and each element tends to zero. This mathematical construction — the Riemann integral over the domain of the distribution — is what gives physical coherence to the continuous model.

The direction and magnitude of [[E]] at any point encapsulate **all geometric information** about the distribution: how it is extended, with what density, and in what orientation. By measuring [[E]] at several points in space and fitting the [[E]] vs [[r_dist]] curve, it is possible to infer the shape and density of the source distribution, even without seeing it directly. This is the basis of indirect measurement techniques in experimental physics.

## Order of magnitude

In domestic power cables (distances of centimetres, [[lambda]] of the order of nanocoulombs/metre), the field [[E]] in the immediate vicinity is of the order of kilovolts/metre. In high-voltage lines (kV on transmission lines), [[E]] can exceed megavolts/metre near the conductor, explaining the corona effect and air ionisation.

For a charged plane with [[sigma]] of the order of nanocoulombs/metre squared (typical laboratory situation), the field is a few hundred volts/metre, comparable to the terrestrial atmospheric field on stormy days. A result for [[E]] exceeding megavolts/metre in laboratory geometries is a clear sign of a factor-of-ten error in the data.

## Personalized resolution method

The standard procedure for computing [[E]] of a continuous distribution follows these steps:

1. **Identify the geometry and density**: determine whether the distribution is linear ([[lambda]]), surface ([[sigma]]) or volume ([[rho_vol]]), and whether it is uniform.
2. **Identify the symmetry**: look for symmetry axes or planes that allow cancelling components of [[dE]] before integrating.
3. **Choose the method**: if there is perfect cylindrical, spherical, or planar symmetry, assess whether Gauss's law is more efficient. If there is insufficient symmetry, integrate [[dE]] directly.
4. **Express [[r_dist]] as a function of the integration variable**: parametrise the distribution (arc length, angle, axial coordinate) so that [[r_dist]] becomes an integrable function.
5. **Integrate the surviving components**: only those not cancelled by symmetry.
6. **Verify the result**: check the decay law (1/r², 1/r or constant) and the order of magnitude.

## Special cases and extended example

**Charged ring on the axis.** A ring of radius \`a\` with total charge \`Q\` produces on its axis, at distance \`z\` from the centre, a strictly axial field. The radial components cancel by the ring's symmetry. The resultant field magnitude grows from zero (at the ring centre) to a maximum at \`z\` of order \`a\`, then decreases. Far from the ring, the field approaches that of a point charge.

**Charged disc.** A disc of finite radius with uniform [[sigma]] produces on its axis a field computed by integrating the ring result for radii from zero up to the disc radius. Far from the disc, the field tends to that of a point charge. Very close to the disc when \`R\` is much larger than the axial distance, the field approaches that of an infinite plane: [[sigma]] divided by twice the permittivity of vacuum.

> [!NOTE]
> The step from ring to disc is a key pedagogical example: an integral within an integral. It is the same principle of decomposing a 2D distribution into 1D "slices" and summing. This strategy is general and applicable to any distribution with axial symmetry.

## Real student questions

**Why can I not sum the magnitudes of the partial fields?** Because [[dE]] is a vector. If two charge elements are at the same distance from the field point but on opposite sides of the distribution, their contributions point in partially opposite directions. Summing magnitudes always overestimates the real field.

**When is the infinite wire a good approximation?** When the distance [[r_dist]] to the cable is much smaller than the cable length. In practice, if [[r_dist]] is less than ten percent of the total length, the error of the infinite wire model is below one percent.

**How can the plane field not decay?** Because for every element dq that generates a field "escaping" outward, there are infinitely many elements of the infinite plane that compensate with their contributions parallel to the plane, always leaving the same net perpendicular component. It is a consequence of infinite extent: the source "surrounds" the observer in all directions of the plane.

**What happens if the distribution is not uniform?** If [[lambda]], [[sigma]] or [[rho_vol]] vary in space, the integrand carries that variation as an additional factor. The integral no longer necessarily has a closed form and is usually solved numerically. Finite element and boundary element methods are the standard tools for this case.

## Cross-cutting connections and study paths

This leaf is the bridge between the point-charge field and real electrostatic configurations. The study of capacitors ([leaf:fisica-clasica/electromagnetismo/electrostatica/aplicaciones/condensadores]) requires mastering the infinite-plane field. The electric potential is obtained by integrating [[E]] along a path, and its computation for continuous distributions follows the same integral logic developed here.

Gauss's law, which gives direct access to [[E]] without integrating [[dE]], is the natural next step for geometrically symmetric configurations. In electrodynamics, the same integral superposition principle extends to current distributions to compute the magnetic field via the Biot-Savart law, which is the magnetic counterpart of the [[dE]] integral.

## Final synthesis

The field [[E]] of a continuous charge distribution is the vectorial integral of differential contributions [[dE]], each computed as if \`dq\` were a point charge at distance [[r_dist]]. The symmetry of the distribution determines which components cancel before integrating. The result reveals the field decay law: inversely proportional to [[r_dist]] squared for a point charge, to [[r_dist]] for an infinite wire, and constant for an infinite plane. Mastering this method means mastering the construction of the electric field from the geometry of the source.
`;export{e as default};
