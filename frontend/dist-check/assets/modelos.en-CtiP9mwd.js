const e=`# Models — Electric Field Lines

## Ideal model

The electrostatic field line model describes the field [[E]] through continuous oriented curves in a homogeneous isotropic space, under the assumption that the source charges are static and the space between them is vacuum or a uniform linear medium. In this model, the line density [[rho_lineas]] is strictly proportional to the magnitude of [[E]] and lines never branch or intersect at any regular point in space.

The model preserves all vector information about the field: direction, sense, and relative intensity. The quantities deliberately ignored are the quantum effects of charge, the internal structure of sources, and any coupling with time-varying magnetic fields.

## Hypotheses

- **Static regime**: source charges do not move. If charges were moving, the electric field would have induced components whose lines would close upon themselves without originating or terminating at any charge.
- **Homogeneous linear medium**: the permittivity of the space is constant. If the medium is inhomogeneous, lines refract at interfaces (their density changes when crossing boundaries between different media) and the simple model of density proportional to [[E]] in vacuum no longer applies.
- **Conserved number of lines**: the total number of lines leaving a charge [[q_fuente]] is fixed and proportional to its absolute value. Violating this hypothesis (drawing more or fewer lines at different points on the same line) fictitiously creates or destroys flux.
- **Uniqueness of field at each point**: at every point in space (except at the source charge position), [[E]] has a unique value. This uniqueness guarantees that lines do not intersect.
- **Discrete representation as an approximation of a continuous field**: the real field [[E]] is continuous; discrete lines are a visual approximation. Local density is interpreted in a statistical sense.

## Quantitative validity domain

The electrostatic field line model is valid when the time scale of variation of source charges is much greater than the electromagnetic transit time across the system. Quantitatively, the condition is that the variation frequency is less than c/(10 · L), where L is the characteristic dimension of the system and c is the speed of light. For a 10 cm laboratory system, this corresponds to frequencies below 300 MHz.

For purely static systems, the model is exact within classical electrostatics, with a relative error below 1% compared to the full Maxwell equations results, provided that charge velocities are less than one tenth of the speed of light.

The discrete representation with N lines per charge introduces a reading error of order 1/N in the estimation of local density. For a diagram with 8 lines per charge, the uncertainty in reading [[rho_lineas]] is approximately 12%.

## Model failure signals

- **Lines that intersect at a point without a charge**: this indicates an error in the diagram construction. At that point the field would have two simultaneous values, which is physically impossible in electrostatics.
- **Field [[E]] that does not coincide with the tangent to the drawn lines**: if the analytically computed direction of [[E]] at a point is not tangent to the drawn line, the line is incorrectly drawn.
- **Line density that does not reflect the known variation of [[E]]**: in a region where [[E]] analytically decays as 1/r², if lines do not separate in that proportion, the diagram is incorrect.
- **Lines that originate or terminate in vacuum far from charges**: in the static regime this violates Gauss's law. It can legitimately occur only at diagram edges, where it is assumed that the opposite charges are outside the field of view.

## Extended or alternative model

The extended model incorporates **edge effects** in finite systems (real capacitors, non-symmetric geometries) and **refraction of lines at dielectric interfaces**. At an interface between two media with different permittivities, the tangential component of the field is continuous but the normal component of flux density changes. This causes field lines to change direction when crossing the interface, analogously to the refraction of light.

The most advanced model is that of **flux lines in electrodynamics**: in that regime the lines of [[E]] can close upon themselves (rotational field induced by varying magnetic field) and must be considered together with the magnetic field lines to obtain a complete picture of the electromagnetic wave.

When to switch to the extended model: when the system geometry has dielectric interfaces or when the variation frequency exceeds the quasi-static limit indicated in the validity domain. Switch to this model when the edge error exceeds 5% of the interior field, which occurs when the plate separation is comparable to the lateral dimensions.

## Operational comparison

| Criterion | Electrostatic line model | Extended model with edge effects |
|---|---|---|
| **Simplicity** | High: direct geometric rules | Medium: requires numerical computation or analytical corrections |
| **Validity** | Systems with symmetry or dimensions large compared to separation | Finite geometries, dielectric interfaces, high frequency |
| **Typical error** | < 1% in zones away from edges | < 1% even at edges and transition zones |
| **Computational tool** | Visual reading + analytic Gauss's law | Finite elements, finite difference method |
| **Pedagogical use** | Conceptual understanding and exam problems | Design of real devices (capacitors, coaxial cables) |
`;export{e as default};
