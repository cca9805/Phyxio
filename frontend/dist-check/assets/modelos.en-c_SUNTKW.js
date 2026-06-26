const e=`## Ideal model

The **infinite straight-wire model** is the central idealization of this leaf for computing the magnetic field. In it, all current [[I]] flows through a straight conductor of infinite length and negligible cross-section, and the surrounding space is vacuum with constant permeability. Under these hypotheses, the magnetic field [[B]] at any point is completely determined by [[mu_0]], [[I]], and the perpendicular distance [[r]].

For the charge-field interaction the **Lorentz model** is used: the charge [[q]] is a point particle, its motion is non-relativistic, and the field [[B]] in the region where it moves is uniform or varies slowly compared to the trajectory scale.

## Hypotheses

- **Infinite straight wire**: the conductor length is much greater than the evaluation distance [[r]]. If this is violated (finite wire), the real field is smaller than predicted by the model, especially near the ends.
- **Stationary current**: the current does not vary in time. If the current is alternating or pulsed, the magnetic field oscillates and radiation effects appear that the static model ignores.
- **Vacuum or homogeneous linear medium**: no magnetic materials alter the field distribution. In media with relative permeability different from one, the field is amplified or attenuated according to the material's permeability.
- **Non-relativistic velocity**: for the Lorentz force, the speed [[v]] of the charge must be much less than the speed of light. Above 10% of c, relativistic effects exceed 1%.
- **Point charge**: the particle has negligible size compared to the field scales. For extended particles or charge distributions, integration is required.

## Quantitative validity domain

The infinite straight-wire model is applicable when the evaluation distance [[r]] satisfies: r > conductor radius and r < conductor length divided by ten. For a 2 m domestic cable, the model is valid for r less than 20 cm.

For the Lorentz force, the classical model is reliable when speed [[v]] is below 10% of the speed of light, i.e. v < 3×10⁷ m/s. The classical kinetic energy differs by less than 1% from the relativistic value in that regime.

## Model failure signals

- The computed field does not decay as 1/r but remains approximately constant with distance: may indicate the conductor is too short or there are solenoid/coil effects that the linear model ignores.
- The computed magnetic force exceeds the particle's weight in moderate fields (e.g. more than 1 N on an electron in 1 mT): indicates a scale error, possibly confusion between charge units or magnitudes.
- The computed radius of curvature for a particle in the field is comparable to the source size: the field cannot be considered uniform at the trajectory scale and the constant-field model fails.

## Extended or alternative model

The **continuous current distribution model** extends the straight wire to arbitrary geometries via the Biot-Savart law: the total field is the integral of contributions from all current elements. This model recovers the straight wire as a limiting case for infinite straight conductors.

The **solenoid model** applies to long cylindrical coils: inside it produces a uniform field proportional to the number of turns per unit length and the current, and practically zero outside. It is the basis of electromagnets and MRI magnets.

The **relativistic model** combines the Lorentz force with relativistic dynamics for speeds appreciable compared to c, using rest mass and the Lorentz factor.

When to switch to Biot-Savart: when the conductor has complex geometry (circular arc, loop, finite coil), when the wire length is comparable to the evaluation distance, or when the field inside or very near the conductor is needed.

## Operational comparison

| Criterion | Infinite straight wire | General Biot-Savart |
|---|---|---|
| Complexity | Minimal: direct formula | High: vector integral |
| Applicability range | r << wire length | Any geometry |
| Precision near wire ends | Low | High |
| Recommended tool | Analytical formula | Numerical or symmetry-based integration |
| Failure signal | Unexpected constant field with r | Divergent integral without exploitable symmetry |
`;export{e as default};
