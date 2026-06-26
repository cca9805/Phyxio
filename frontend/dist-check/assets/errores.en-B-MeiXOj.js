const e=`## Conceptual errors

### Error 1: Applying the magnetic force to charges at rest

**Why it seems correct**

The student knows that the magnetic field [[B]] exists everywhere in space and exerts forces. The incorrect generalization is that those forces act on any charge, moving or at rest, just like the electric field.

**Why it is incorrect**

The magnetic Lorentz force is proportional to the velocity [[v]] of the charge. If [[v]] is zero, the force is exactly zero regardless of how large [[B]] is. The magnetic field does not act on static charges; that is the fundamental difference from the electric field.

**Detection signal**

The student computes a magnetic force on an electron or proton at rest, or claims that a static conductor in a magnetic field experiences a force on its free charges even though there is no current.

**Conceptual correction**

The necessary condition for a magnetic force to exist is that the charge has nonzero velocity with a component perpendicular to [[B]]. If the charge is at rest or moves parallel to [[B]], the force is zero.

**Contrast mini-example**

An electron at rest inside a 1 T field experiences no magnetic force, even though the field is a thousand times stronger than a refrigerator magnet. The same electron moving at 10⁶ m/s perpendicular to the field experiences a force of 1.6×10⁻¹³ N.

---

### Error 2: Confusing the 1/r dependence of the straight wire with the 1/r² of the electric field

**Why it seems correct**

The student learns that both the point-charge electric field and the straight-wire magnetic field are fields "that decay with distance." The most remembered electricity formula has the square in the denominator, and the student applies it by analogy to magnetism.

**Why it is incorrect**

The field of an infinite straight wire decays as 1/r, not 1/r². The geometric difference is fundamental: the surface surrounding a point charge is a sphere (area proportional to r²), while the surface surrounding an infinite wire is a cylinder (area proportional to r). The field lines distribute over that surface, giving different dependences.

**Detection signal**

When doubling the distance to the wire, the student gets a field four times weaker instead of twice as weak. Or, when comparing fields at two distances, the ratio is the square instead of being linear.

**Conceptual correction**

For the straight wire: doubling [[r]] halves [[B]]. For the point-charge electric field: doubling r quarters the field. The difference originates in the geometry of the source distribution: point (spherical) versus linear (cylindrical).

**Contrast mini-example**

With a wire carrying 10 A, the field at 1 cm is approximately 200 μT and at 2 cm approximately 100 μT (half). If the student uses the inverse-square law, they get 50 μT, a 100% error.

## Model errors

### Error 3: Using the infinite-wire formula for short cables or curved geometries

**Why it seems correct**

The straight-wire formula is simple and always gives a numerical result. The student tends to apply it to any conductor without verifying whether the geometry justifies it.

**Why it is incorrect**

The infinite straight-wire formula assumes the conductor is perfectly straight and its length is much greater than the evaluation distance. For a finite wire, a circular loop, or a coil, the field has a completely different form that requires integrating Biot-Savart's law.

**Detection signal**

The computed field does not match experimental measurements, or changes unexpectedly as the evaluation point moves away from the conductor center toward its ends.

**Conceptual correction**

Before applying the straight-wire formula, verify that the conductor length is at least ten times larger than the evaluation distance [[r]]. For conductors with length comparable to [[r]], use the Biot-Savart law.

**Contrast mini-example**

For a 10 cm wire and an evaluation point 5 cm from its center, the distance is comparable to the wire length and the infinite-wire formula overestimates the real field by more than 20%.

## Mathematical errors

### Error 4: Forgetting the 2π factor in the denominator of the straight-wire formula

**Why it seems correct**

The formula structure has several numerical factors: [[mu_0]], the current [[I]], and the distance [[r]]. The 2π factor in the denominator is easy to omit if the student memorizes the formula incompletely.

**Why it is incorrect**

The 2π factor comes from integrating Biot-Savart over the infinite wire and represents the cylindrical symmetry of the problem. Omitting it produces a field approximately 6.28 times larger than the real one.

**Detection signal**

The computed field for a 1 A current at 1 m is about 6 times larger than the expected 200 nT. Comparing with the known result for 1 A at 1 m immediately reveals the discrepancy.

**Conceptual correction**

The 2π factor always appears in the denominator of the straight-wire formula because integration is carried out over the complete azimuthal angle around the wire. For the solenoid the formula is different, without that factor.

**Contrast mini-example**

For 1 A at 1 m: the correct value is approximately 2×10⁻⁷ T. Without the 2π factor the result would be 4π×10⁻⁷ T, about 6.28 times larger. The factor immediately detects the error.

## Interpretation errors

### Error 5: Believing the magnetic force can do work and change kinetic energy

**Why it seems correct**

The student sees that a magnetic field curves a particle's trajectory and changes its velocity direction. Changing velocity seems to imply changing kinetic energy, since kinetic energy depends on velocity.

**Why it is incorrect**

Kinetic energy depends on the square of the **speed** (velocity magnitude), not its direction. The magnetic force [[F_m]] is always perpendicular to [[v]], so it does not change the magnitude of [[v]]. Speed stays constant; only direction changes. The net work of [[F_m]] along any trajectory is always zero.

**Detection signal**

The student computes that a particle entering a magnetic field exits with more (or less) kinetic energy than it had upon entry, attributing the change to the magnetic force.

**Conceptual correction**

To accelerate charged particles, an electric field is needed, not a magnetic one. The role of the magnetic field in accelerators (cyclotrons, synchrotrons) is to guide and bend the trajectory, never to accelerate. Acceleration is done by an electric field applied at specific points in the path.

**Contrast mini-example**

A proton entering a uniform [[B]] field at 10⁶ m/s traces a perfect circle and exits with exactly the same speed of 10⁶ m/s. Its kinetic energy before and after the field is identical. If the field had changed its energy, it would be a perpetual motion machine, violating energy conservation.

## Quick self-control rule

Before accepting a magnetic field or Lorentz force calculation:

1. Is the charge in motion? If not, the magnetic force is zero.
2. Does the denominator of the straight-wire formula contain 2π·r?
3. Does the result have units of T (for field) or N (for force)?
4. Is the magnitude of [[B]] positive?
5. Is the evaluation distance less than one tenth of the conductor length?

If any of these checks fails, the calculation contains an error that must be corrected before proceeding.
`;export{e as default};
