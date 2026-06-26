const e=`\uFEFF# Center of Mass in Extended Bodies

## Conceptual context

In a discrete system, masses located at points are summed. In an extended body that picture is no longer enough: matter occupies a length, a surface, or a volume, and each region contributes a small amount of mass. Therefore the center of mass is not obtained by counting objects, but by integrating a continuous distribution.

The physical idea remains the same: locate the point that summarizes the body's **inertial balance**. What changes is the language. The local position [[r]], its components [[x]], [[y]], and [[z]], and the element [[dm]] replace the finite list of particles. If the body is a rod, a lamina, or a solid, the correct geometric differential is chosen: [[dL]], [[dA]], or [[dV]].

This leaf moves from the elementary definition of center of mass to a tool usable in real objects: non-uniform rods, plates with holes, mechanical parts, blades, satellites, or bodies with variable density. The central question is not only where the point is, but **which part of the distribution pulls it**.

## 🟢 Essential level

The center of mass of an extended body is a weighted average, but made with infinitely many small portions. If a region contains more mass per unit length, area, or volume, that region weighs more in the average. That is why the center of mass shifts toward regions of higher density.

Symmetry is the first tool. In a homogeneous rod, the center lies at the midpoint; in a homogeneous circular lamina, it lies at the center; in a plate with a hole, it may shift toward the part that keeps more material. If there is a symmetry axis, the center of mass must lie on that axis. If two axes intersect, the point is fixed by their intersection.

> [!NOTE]
> The center of mass does not have to be inside the material. In a ring, horseshoe, or C-shaped lamina, it can lie in an empty region. It is still the point summarizing the distribution for translation.

At this level it is enough to decide whether the visual center matches the inertial center. The full quantity list belongs in the formal level, where the mathematical contract is fixed.

## 🔵 Formal level

The total mass of the extended body is obtained by summing all differential elements:

{{f:M}}

With that total mass, the center-of-mass vector is defined:

{{f:rcm}}

In Cartesian coordinates, the vector definition separates into three components. Each component is a weighted average of a local coordinate by the same mass element:

{{f:xcm}}

{{f:ycm}}

{{f:zcm}}

The decisive technical step is writing [[dm]] in a way compatible with geometry. For a rod or thin wire, a linear density [[lambda]] and an element [[dL]] are used:

{{f:dm_linear}}

For a lamina or thin plate, a surface density [[sigma]] and an element [[dA]] are used:

{{f:dm_surface}}

For a three-dimensional solid, volumetric density [[rho]] and the element [[dV]] are used:

{{f:dm_volume}}

When the body has holes or removed regions, superposition can be written with positive mass for the complete solid and negative mass for the removed region:

{{f:superposition_negative_mass}}

> [!WARNING]
> The total mass [[M]] must not be inserted inside the integral as if it were local mass. The integrand contains [[dm]], and [[dm]] is built from density and the correct geometric differential.

The quantities in this leaf are: [[M]], [[dm]], [[r]], [[rcm]], [[x]], [[y]], [[z]], [[xcm]], [[ycm]], [[zcm]], [[lambda]], [[sigma]], [[rho]], [[dL]], [[dA]], and [[dV]]. They are marked this way because each one must activate its tooltip and keep the same identity as in magnitudes.yaml.

## 🔴 Structural level

The choice of differential is not a notation detail. It decides which physical model is being used. A long thin rod may be treated as a linear distribution if its thickness does not affect the question. A thin plate needs a surface distribution. A real block with internal density variation requires a volumetric distribution.

If density is homogeneous, the density factor cancels between numerator and denominator. In that case the center of mass coincides with the geometric centroid when the shape is symmetric. If density changes with position, density no longer cancels and the result shifts toward where the distribution accumulates more mass.

The structure of the calculation always has three decisions:

- Choose the origin and axes so that symmetries simplify [[xcm]], [[ycm]], or [[zcm]].
- Choose whether the body is represented with [[dL]], [[dA]], or [[dV]].
- Check that [[M]] is positive and that [[rcm]] lies on a reasonable scale relative to the body.

> [!TIP]
> Before integrating, draw where you expect the center of mass to be. If the result contradicts the denser region or visible symmetry, review limits, differential, and origin.

## Deep physical interpretation

The vector [[rcm]] is not a decorative point. It is the point whose position reproduces the first mass moment of the complete body. If an external net force acts as if it passed through that point, translational motion can be described cleanly. If the line of action does not pass through it, rotation appears in addition to translation.

In engineering, this detail is operational. A blade, crane, or 3D-printed part may have a regular shape and still have a shifted center of mass because of material changes. The integral calculation distinguishes **visual center** from **inertial center**.

The physical reading also explains why holes can be treated by superposition. Removing material is equivalent to subtracting a mass contribution located where the hole was. This idea does not change the definition; it only modifies the integration domain or decomposes it into simpler pieces.

## Order of magnitude

The result of [[xcm]], [[ycm]], or [[zcm]] must have length units and be on the same scale as the body. For a two-meter rod, a center-of-mass coordinate of tens of meters indicates an error in limits or units. For a lamina symmetric around the origin, a nonzero component usually means that a symmetry has been broken without justification.

The total mass [[M]] must be positive. If an integral gives zero or negative mass for an ordinary body, the problem is not physical but parametrization. In hole models with negative mass, negative mass is a calculation device, not a real material density.

In uniform distributions, [[lambda]], [[sigma]], or [[rho]] may be constant. In variable distributions, compare the result with the density extremes: if density increases to the right, [[xcm]] should lie to the right of the geometric center.

## Personalized resolution method

1. Define the material system and exclude supports, air, or external pieces that are not part of the body.
2. Choose axes that use symmetry. If an axis divides the body into two equivalent halves, the perpendicular component of the center of mass is fixed.
3. Decide whether to use [[dL]], [[dA]], or [[dV]]. This choice determines whether [[lambda]], [[sigma]], or [[rho]] is needed.
4. First calculate the total mass [[M]]. Without total mass there is no normalization of the average.
5. Calculate the needed components [[xcm]], [[ycm]], and [[zcm]]. Do not calculate components that symmetry already fixes.
6. Validate units, sign, and relative position with respect to denser regions.

## Special cases and extended example

In a homogeneous rod, the center of mass coincides with the midpoint. In a rod whose linear density grows toward one end, the center shifts toward that end because each nearby segment contributes more [[dm]] to the first mass moment.

In a lamina with an off-center circular hole, the center of mass moves away from the hole. An effective strategy is to calculate the complete lamina and subtract the hole contribution as a negative-mass region. The result represents the remaining mass, not the original visual shape.

In a solid with variable density, using [[rho]] and [[dV]] is unavoidable. If an alloy is denser in one region, the center of mass may not coincide with any simple geometric center. That difference is crucial when designing supports, axes, and suspension points.

## Real student questions

**Can I always use the geometric center?** No. It works only with enough symmetry and homogeneous density. If density changes, the geometric center may be a poor estimate.

**Why must total mass be calculated first?** Because the center of mass is an average. [[M]] normalizes the sum of differential contributions and turns the first mass moment into a position.

**Which differential do I use for a very thin plate?** If thickness is negligible for the question, use [[dA]] with [[sigma]]. If thickness or density changes through the volume, use [[dV]] with [[rho]].

**Can the center of mass lie in a hole?** Yes. The point summarizes the total distribution; it does not require matter to be present there.

## Cross-cutting connections and study paths

This leaf connects with the center of mass of discrete systems because the integral is the continuous limit of a weighted sum. It also prepares the motion of the center of mass, where [[rcm]] stops being only a static position and starts describing the collective trajectory of the body.

The connection with rotation is direct. Moment of inertia is also calculated by integrating differential contributions, but weighted by distance to an axis. That is why mastering [[dm]] here prevents later errors in rigid-body dynamics.

It also connects with fluids and elasticity when density changes in space. In those cases, the center of mass may depend on deformation, internal redistribution, or material motion inside the body.

## Final synthesis

The center of mass in extended bodies is the integral form of the mass-weighted average. The physical contract of the leaf is summarized by choosing [[dm]] correctly, integrating [[M]], and then locating [[rcm]] or its components [[xcm]], [[ycm]], and [[zcm]]. Symmetry, density, and integration limits are the three filters that separate a formally written result from a physically reliable interpretation.
\r
`;export{e as default};
