# Physical Models: Typical Moments of Inertia

## Ideal model
The ideal model for studying typical moments of inertia is the **Geometric Rigid Body**. This model assumes that the object possesses perfect geometry (perfect spheres, infinitely straight cylinders, zero-thickness disks) and, most importantly, **uniform volumetric density** (

{{f:aro-fino}}

). Under these hypotheses, the calculation of the moment of inertia is simplified to solving a purely mathematical volume integral, where the result depends exclusively on the total mass M and the characteristic dimensions of the object (R or L).

The central simplification consists of ignoring material imperfections (porosity, high-density inclusions) and surface irregularities. By treating the object as a pure mathematical body, standard formulas (such as

{{f:disco-macizo}}

for the solid sphere) can be derived, serving as catalog building blocks for the dynamics of much more complex systems.

## Hypotheses
The Geometric Rigid Body model rests on four hypotheses:

1. **Uniform density**: the volumetric density rho is constant throughout the body; there are no internal gradients or material stratification.
2. **Ideal geometry**: the shape of the body matches exactly the described geometric primitive (perfect sphere, straight cylinder, zero-thickness disk, zero-radius rod).
3. **Rigid solid**: distances between any pair of points in the body do not change during rotation; there is no elastic deformation or appreciable centrifugal expansion.
4. **Known symmetry axis**: the rotation axis coincides with the geometric symmetry axis of the body, or its distance to the center of mass is known so Steiner's theorem can be applied.

## Quantitative validity domain
Typical inertia formulas are robust approximations as long as the real object maintains geometric symmetry with an acceptable tolerance. In engineering, a real sphere is considered correctly modeled by the typical formula if its deviation from circularity meets:
{{f:disco-macizo}}
If an object is deformed beyond this 5% range, the error in using the standard formula exceeds the safety margin of dynamic calculation.

For thin objects such as rods or disks, the model is valid as long as the transverse dimension is at least one order of magnitude smaller than the main dimension:
{{f:placa-rectangular}}
The formula

{{f:placa-rectangular}}

 for a rod and

{{f:placa-rectangular}}

for a solid disk are governed by this limit. The dimensions a and b of a rectangular plate must satisfy an analogous condition with respect to its thickness.

## Model failure signals
A model based on typical formulas fails when the object presents **non-visible mass asymmetries**. If a visually balanced sphere shows a preferred rotation or "pitches" when spinning, the density is not uniform. Excessive vibrations are the most common physical failure signal: they indicate that the geometric axis of rotation does not coincide with the real axis of inertia.

Another failure signal is **dimensional deviation under load**. If, as angular velocity increases, the structure expands, the object's dimensions change and the typical static formula is no longer valid. The torque response becomes non-linear, signaling that ideal geometry has been overtaken by the body's elastic reality.

## Extended or alternative model
The extended model considers the **Variable Density Body** or objects with real (non-ideal) geometry. In this scenario, mass is not distributed homogeneously, which invalidates direct typical formulas. One must resort to direct integration of the density function rho(r, theta, phi), enabling the modeling of objects such as planets (where the core is much denser than the crust) or industrial casting components with thermal mass gradients.

Unlike the ideal model, the extended one does not offer a single formula per shape. It requires knowing the internal architecture of the material. While in the ideal model a sphere always has inertia

{{f:disco-macizo}}

, in the extended model a hollow sphere with variable wall thickness will have an inertia that is a function of its internal and external radii.

When to switch to the extended model: when eccentricity exceeds 0.05; when the transverse dimension exceeds 10% of the main dimension; when preferential vibrations indicate non-uniform density; or when the experimental radius of gyration differs from the theoretical shape factor by more than 5%.

## Operational comparison

| Model | When to use | Advantage | Limitation |
|---|---|---|---|
| Geometric rigid body (catalog) | Uniform objects with standard geometry | Immediate calculation with I, m, R or L | Requires uniform density and ideal geometry |
| Experimental radius of gyration k | Complex-shaped or non-homogeneous objects | More accurate for real objects | Requires experimental measurement |
| Finite elements (FEA) | Organic geometry or unknown mass distribution | Very high accuracy | High computational cost |