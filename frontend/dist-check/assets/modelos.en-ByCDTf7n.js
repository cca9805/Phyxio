const e=`## Ideal model

The ideal model of electric charge in this leaf is the **quantized point-charge model in vacuum**. In this model, charged objects are represented as points without spatial extension, carrying a charge [[q]] that is an integer multiple of the elementary charge [[e]]. The internal charge distribution is ignored; only the net charge [[q_neta]] of the system matters.

This model radically simplifies reality: a real charged object has spatial extent, a non-uniform internal distribution and a geometry. The point model eliminates all these complexities and retains only [[q]] as the complete descriptor of the object's electrical state.

## Hypotheses

- **Charge carriers are protons and electrons**: each proton carries positive charge [[e]] and each electron carries negative charge of equal magnitude. Consequence of violation: in high-energy physics other charged particles (pions, muons) appear that this model does not include.
- **Charge is quantized**: every observable [[q]] is an integer multiple of [[e]]. Consequence of violation: results such as fractional [[n]] would appear, which are physically impossible except in the confined-quark regime.
- **Charge is conserved**: the [[q_neta]] of an isolated system does not change. Consequence of violation: the system's energy would not be consistently conserved in line with Maxwell's equations.
- **Objects are point-like**: geometry and internal charge distribution do not matter when computing [[q_neta]]. Consequence of violation: one must resort to charge-distribution models, dipole potential or higher multipole orders.
- **The medium is vacuum or air**: no dielectric effects of the medium affect the distribution of [[q]]. Consequence of violation: medium polarization redistributes induced charges and modifies the resulting field.

## Quantitative validity domain

The point-charge model is valid when observation distances are much larger than the size of the charged object. For macroscopic laboratory objects (spheres with radii of order centimetres), the point model works at distances r > 10 times the object radius, approximately r > 0.1 m.

Quantization is detectable only below the nanocoulomb level: for [[q]] smaller than 10⁻⁹ C, the number [[n]] of elementary charges is below ten billion, and discrete fluctuations are in principle measurable with sensitive instruments. For [[q]] above 1 µC, discretization is undetectable and the continuous model is indistinguishable from the quantum one with relative error less than 0.001 %.

## Model failure signals

- **Fractional [[n]] in the calculation**: if dividing [[q]] by [[e]] gives a non-integer, the standard-particle quantization model has failed. The most common cause is a units error (using pC instead of C, for example).
- **[[q_neta]] changes in a supposedly isolated system**: indicates charge exchange with the environment not accounted for in the model. Possible causes: discharge to ground, air ionization, or conductivity of the support.
- **Measured Coulomb force does not match the calculation from [[q]]**: signal that the object cannot be treated as a point at the measurement distance, or that induced charges in nearby materials are redistributing the field.
- **Angular dependence of the force**: if the force between two charged objects depends on relative orientation, the point model fails; non-symmetric charge distributions or dipole effects are present that the model ignores.

## Extended or alternative model

The extended model is the **continuous charge-distribution model**, where [[q]] is no longer a point value but a volumetric, surface or linear density that varies with position. This model describes real charged objects such as conductors or dielectrics with a defined geometric shape.

The concrete difference from the ideal model is that the electric field and potential are no longer those of a point charge: they depend on the geometry of the distribution, and computing them requires integration over the entire distribution (integral form of Coulomb's law or Gauss's law with the appropriate geometry).

When to switch to the continuous distribution model: when observation distances are comparable to the size of the charged object, when the distribution is not symmetric, or when the field inside the object is needed. Changing to this model when required precision exceeds 1 % and the object cannot be approximated as a point. Transition to the extended model when the source geometry cannot be neglected.

## Operational comparison

| Criterion | Quantized point-charge model | Continuous distribution model |
|---|---|---|
| Calculation complexity | Low: one quantity, [[q]] | High: spatial integration |
| Required variables | [[q]], [[e]], [[n]] | Charge densities, geometry |
| Validity at long distances | Excellent | Equivalent to point model |
| Validity at short distances | Fails if r ~ object size | Correct |
| Detects dipole effects | No | Yes |
| Typical use | Basic electrostatics, circuits | Optics, real capacitors, biophysics |
`;export{e as default};
