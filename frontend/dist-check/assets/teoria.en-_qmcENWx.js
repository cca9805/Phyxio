const e=`# Center of Mass in Extended Bodies

## Conceptual context

For a discrete system one can add particle by particle. For an extended body that description is no longer practical: a rod, a plate, or a solid contains mass spread over a length [[L]], an area [[A]], or a volume [[V]]. This leaf answers the operational question: how to locate the center of mass when the distribution is continuous and must be integrated.

The key difference from the general definition is the move from separate point masses to a continuous mass element [[dm]]. That differential element carries the physical information about the distribution. If the density is larger near one end, [[xcm]] shifts toward that end; if the geometry is symmetric and density is uniform, the center of mass coincides with the geometric center.

## 🟢 Essential level

The useful intuition is balance of distributed weight. A uniform ruler balances at its midpoint because every small mass element on one side has a matching element on the other side. A ruler with extra material near one end no longer balances at the middle: the center of mass moves toward the heavier region.

For extended bodies it is not enough to know the size of the object. The length [[L]] fixes only the geometric domain; mass may be uniform or concentrated gradually. This is why [[dm]] is the central idea: it represents a small amount of mass located at a specific position. The center of mass is not an average of empty points; it is an average of positions weighted by mass.

This viewpoint covers three common families of objects. A rod is described with linear density, a thin plate with surface density, and a solid with volume density. In every case the procedure keeps the same meaning: divide the body into small elements, weight each position by the mass carried there, and normalize by the total mass [[M]].

## 🔵 Formal level

The vector form summarizes the complete concept for any integrable body. The position [[R_cm]] is obtained by comparing the first moment of mass [[I_cm]] with the total mass [[M]]:

{{f:cm_vectorial}}

When the problem is one-dimensional or only the horizontal component is needed, we use [[xcm]] and the first moment about the x coordinate, [[I_x]]. This is the natural relation for nonuniform rods, linear profiles, and distributions described by density as a function of [[x]]:

{{f:cm_x}}

The uniform-mass relations state which geometric model is being used. For a homogeneous solid, volume density [[rho]] converts volume into mass:

{{f:masa_volumen}}

For a thin homogeneous plate, surface density [[sigma]] converts area into mass:

{{f:masa_area}}

For a homogeneous rod or wire, linear density [[lambda]] converts length into mass:

{{f:masa_longitud}}

In nonuniform problems these last relations are not substituted mechanically. They act as limiting cases and checks: if [[lambda]], [[sigma]], or [[rho]] changes with position, total mass and first moment must be obtained by integrating [[dm]] over the correct domain.

The important formal decision is not to mix models: a rod is integrated over length, a plate over area, and a solid over volume. Moving from one description to another is legitimate only when the physical geometry also changes or when the approximation is justified by negligible thickness.

## 🔴 Structural level

The structure of this leaf depends on three decisions: choosing the integration domain, choosing the correct density, and keeping the origin consistent. For a rod, integration over [[x]] is often enough. For a plate, one must decide whether strips, symmetry, or polar coordinates fit the geometry. For a solid, the volume element must truly represent the body.

The condition [[M]] > 0 is not just algebraic. If total mass is zero or the integral diverges, the quotient defining the center of mass has no physical meaning. The geometric range also matters. For a rod extending from 0 to [[L]], a value of [[xcm]] outside that interval signals an error in sign, limits, or density.

The model fails when the body deforms during the process, when density changes with time, or when a uniform density is used in a system with relevant gradients. In those cases an extended model is needed: variable density, deformable geometry, or piecewise integration over parts of the body.

## Deep physical interpretation

The center of mass of an extended body does not necessarily mark a material point. In a plate with a hole or in a ring, it can lie in a region containing no matter. It represents the point where the global translational response can be assigned, as long as the rigid-body model is acceptable.

The integral gives more weight to regions with more mass and to regions farther from the chosen origin. Therefore [[I_x]] is not total mass; it is mass multiplied by spatial lever arm. Two bodies may have the same [[M]] but different [[xcm]] if that mass is distributed differently.

Changing the origin changes the coordinates of the center of mass, not the physical point in the object. The calculation must end with a geometric reading: where the result lies inside or relative to the body, and whether it shifts toward the region where density or effective area is larger.

## Order of magnitude

For a laboratory rod with [[L]] = 1 m, a reasonable [[xcm]] must lie between 0 m and 1 m if the origin is at one end. For a nearly uniform density, the value should be close to [[L]]/2. If density increases to the right, the result should be greater than [[L]]/2; if it increases to the left, it should be smaller.

For thin plates, center-of-mass coordinates normally lie inside the geometric envelope unless holes dominate the shape. For compact solids, [[R_cm]] should have the scale of the object's size, not the scale of mass or volume. A result in kg, kg m, or square meters means [[I_cm]], [[M]], or the final coordinate has been confused.

## Personalized resolution method

1. Define origin, axes, and geometric interval before writing integrals.
2. Decide whether the body is modeled as a line, surface, or volume.
3. Write [[dm]] with the appropriate density: linear, surface, or volume.
4. Compute [[M]] first and then the first moment [[I_cm]] or [[I_x]].
5. Divide the first moment by total mass and validate range, units, and physical bias.

This order prevents the common error of integrating position without associated mass. A center-of-mass integral does not average empty geometric points; it averages positions that carry mass.

## Special cases and extended example

For a uniform rod, the linear mass relation reproduces the familiar case: mass grows proportionally with [[L]] and the center of mass lies halfway along the rod. For a rod with increasing [[lambda]], integration is required because each segment carries a different amount of mass.

For a symmetric plate with uniform density, symmetry can replace part of the calculation. If the plate has a hole, it can be treated by superposition: full plate minus removed region. For a composite solid, one can divide the body into pieces with known centers of mass and then apply the weighted definition to those pieces.

## Real student questions

**Why is the geometric center not enough?**  
Because the geometric center depends only on shape. The center of mass depends on both shape and mass distribution.

**When do I use linear, surface, or volume density?**  
Use linear density for rods and wires, surface density for thin plates, and volume density for solids where thickness matters.

**What does [[dm]] mean?**  
It is a differential amount of mass. Its form depends on the model: it may be [[lambda]] d[[x]], [[sigma]] d[[A]], or [[rho]] d[[V]].

**Why can the center lie outside the material?**  
Because it is a weighted average position, not necessarily a point occupied by matter.

## Cross-cutting connections and study paths

This leaf connects to discrete center of mass, moments of inertia, static equilibrium, and rigid-body dynamics. The idea of first moment also reappears in geometric centroids, hydrostatic pressure, and distributed torque calculations.

Before studying rotation, this calculation should be fluent, because the same reasoning of splitting a body into differential elements reappears in moment of inertia. Later, center of mass lets one separate global translation from rotation about the body itself.

## Final synthesis

The center of mass in extended bodies converts a continuous mass distribution into a global physical position. Its core is not an isolated formula, but the correct choice of [[dm]], domain, and density. When the result respects units, geometric range, and bias toward heavier regions, the integral does more than compute: it explains how the body is organized.
`;export{e as default};
