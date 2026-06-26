const e=`## Ideal model

The ideal model of Gauss's law treats the charge distribution as a set of point sources or continuous distributions in **perfect vacuum**, with charges at absolute rest. In this model, the electric field is perfectly static, the permittivity is exactly [[epsilon_0]] throughout space, and the Gaussian surface is a mathematical abstraction with no thickness or physical properties.

**The central simplification** is that charges behave as perfect sources of field lines that extend to infinity without any additional attenuation beyond that given by the inverse square law. The field is neither absorbed nor distorted by the medium because the medium is vacuum. Under this hypothesis, the flux through any closed surface depends exclusively on the enclosed charge.

The magnitudes the model preserves are [[Phi_E]], [[Q_enc]] and [[epsilon_0]]. The magnitudes the model ignores include polarisation effects in dielectric media, radiation from accelerating charges, and quantum effects at atomic scale.

## Hypotheses

- **Pure electrostatics**: charges are at rest. If charges move, magnetic fields appear and Gauss's law must be combined with the other Maxwell equations. Violating this hypothesis turns the problem into an electrodynamics one.
- **Homogeneous vacuum**: the permittivity is [[epsilon_0]] throughout the considered space. If dielectric materials are present, [[epsilon_0]] must be replaced by the medium permittivity, and the simple form of Gauss's law no longer applies without modification.
- **Classical point charges or continuous distributions**: charges are described by well-defined charge densities. At the subatomic scale, where charge quantisation is essential, the classical model loses validity.
- **Mathematical Gaussian surface**: the integration surface is an abstraction that does not interact with the field or the charges. In practice, choosing a real surface passing through a conductor or a point charge generates singularities that the ideal model does not handle.
- **Continuous and differentiable field**: the electric field is a continuous function except at the positions of the charges. The model does not admit charges on the Gaussian surface itself.

## Quantitative validity domain

The ideal model of Gauss's law applies when:

- Charges are at rest or move very slowly compared to the speed of light (quasi-static regime, frequencies below approximately 1 MHz for laboratory dimensions).
- The distances involved are much larger than the classical electron radius (approx. 2.8×10⁻¹⁵ m), where the point charge model produces the known singularity.
- The energies involved are much smaller than the pair-creation energy (0.511 MeV), below which vacuum quantum effects are not relevant.

A key physical inequality for the validity regime is that the electrostatic energy of the system must be much smaller than the rest energy of the system's constituents: classical electrostatics does not correctly describe interactions at distances smaller than 10⁻¹⁰ m (the Bohr radius scale).

## Model failure signals

- **Non-zero field inside a conductor**: if applying Gauss's law gives non-zero [[E_G]] inside a conductor in equilibrium, there is an error in identifying [[Q_enc]] or in the surface geometry. The ideal model predicts zero field in the interior.
- **Flux that depends on the surface size**: if changing the size of the Gaussian surface (without crossing any charges) changes the computed flux, there is a setup error. In the ideal model, the flux is invariant under such a change.
- **Results inconsistent with Coulomb's law for symmetric geometries**: Gauss's law and Coulomb's law must give the same field for a point charge. If the results differ, there is an error in one of the two calculations.
- **Field in a dielectric computed with [[epsilon_0]]**: if the problem specifies a medium with relative permittivity greater than one and [[epsilon_0]] is used without correction, the computed field will be overestimated by a factor equal to the relative permittivity.

## Extended or alternative model

The most immediate extended model is Gauss's law in **dielectric media**, where [[epsilon_0]] is replaced by the medium permittivity. In that case, the flux of the electric displacement field through a closed surface equals the free enclosed charge. Bound charges do not contribute directly to the displacement flux, but modify the effective permittivity of the medium.

For charge distributions **lacking sufficient symmetry**, the model extends to the **differential form of Gauss's law**: the divergence of the electric field at a point equals the local charge density divided by [[epsilon_0]]. This form is Maxwell's first equation and is valid point by point in space, without requiring integration surfaces.

When to switch to the extended model with relative permittivity: when the problem specifies a dielectric material between or around the charges, or when calculations with [[epsilon_0]] give fields inconsistent with experimental data. Switching to the differential form is necessary when the charge distribution lacks symmetry and the surface integral cannot be evaluated analytically.

## Operational comparison

| Criterion | Ideal model (vacuum, symmetry) | Extended model (dielectric, differential form) |
|---|---|---|
| Permittivity | Constant [[epsilon_0]] | Medium permittivity, may vary in space |
| Field computation | Algebraic, direct if symmetry holds | Requires integration or numerical methods |
| Applicable charges | Free charges in vacuum | Free and bound charges in material media |
| Complexity | Low for symmetric geometries | High for arbitrary geometries |
| Validity | Vacuum, electrostatic regime | Linear media, quasi-static or dynamic regime |

For standard secondary and first-year university problems, the ideal model is sufficient. The extended model is necessary in electronic device engineering, analysis of capacitors with dielectrics, and electrodynamics.
`;export{e as default};
