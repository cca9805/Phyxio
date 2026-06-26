# Exam-type example


## Problem statement

Two small metal spheres are located in vacuum separated by a distance of 0.12 m between their centres. The first sphere carries a charge of 4.0 µC and the second carries a charge of −6.0 µC. Determine the electric force exerted by the first sphere on the second, stating its magnitude, direction and sense. Then calculate the intensity of the electric field created by the first sphere at the location of the second sphere.

## Data

- Distance between centres: 0.12 m
- First charge: 4.0 µC (positive)
- Second charge: 6.0 µC (negative, opposite sign to the first)
- Coulomb's constant: 8.988×10⁹ N·m²·C⁻²
- Medium: vacuum

## System definition

The system consists of the two spheres treated as point charges, which is valid because their radii are much smaller than the separation distance. An axis connecting the centres of the two spheres is defined; the positive direction is taken from the first towards the second sphere.

The first sphere acts as [[q1]] (source charge) and the second as [[q2]] (receiving charge). The distance [[distancia_entre_cargas]] is the separation between centres.

## Physical model

The applicable model is **Coulomb's law for point charges** in vacuum. The core magnitudes are [[q1]], [[q2]] and [[distancia_entre_cargas]], and the result magnitude is [[fuerza_electrica_de_coulomb]]. The electric field [[campo_electrico_de_carga_puntual]] created by [[q1]] at the location of [[q2]] is calculated using the second formula of the leaf.

This model is valid because the sphere radii are of the order of millimetres, much smaller than the 12 cm separation. The ratio of radius to separation is below 5 %, guaranteeing an error below 1 % when using the point model.

## Model justification

Coulomb's point law is justified by the spherical symmetry of the metallic charges: for a conducting sphere the charge distribution is uniform when there is no significant induction from external charges. At distances much larger than the radius, the field of a uniformly charged sphere is identical to that of a point charge at its centre.

The model would cease to be valid if the distance between spheres were of the same order as their radii: in that case the surface charge on each sphere redistributes by induction, and the actual force would differ from the point Coulomb prediction.

## Symbolic solution

Applying Coulomb's law to obtain [[fuerza_electrica_de_coulomb]]:

{{f:fuerza_coulomb}}

The signed charge values are positive [[q1]] and negative [[q2]]. The product [[q1]]·[[q2]] is negative, which anticipates an attractive force.

For the electric field created by [[q1]] at the position of [[q2]]:

{{f:campo_electrico_coulomb}}

In this calculation [[q1]] is the source charge and [[distancia_entre_cargas]] is the same separation distance. The result [[campo_electrico_de_carga_puntual]] is positive because [[q1]] is positive (the field points outward from [[q1]]).

## Numerical substitution

Unit conversion: [[q1]] of 4.0 µC equals 4.0×10⁻⁶ C; [[q2]] of 6.0 µC equals 6.0×10⁻⁶ C with negative sign, that is, −6.0×10⁻⁶ C.

Substituting into Coulomb's law: the numerator is the product of 8.988×10⁹, 4.0×10⁻⁶ and −6.0×10⁻⁶, giving 8.988×10⁹ × (−24×10⁻¹²). The numerator result is approximately −215.7×10⁻³ N·m². The denominator is (0.12)², that is, 0.0144 m².

Dividing: [[fuerza_electrica_de_coulomb]] is approximately −215.7×10⁻³ / 0.0144, giving [[fuerza_electrica_de_coulomb]] ≈ −15.0 N.

For the electric field: the numerator is 8.988×10⁹ × 4.0×10⁻⁶, giving approximately 35952 N·m²/C. Dividing by (0.12)² gives [[campo_electrico_de_carga_puntual]] ≈ 35952 / 0.0144 ≈ 2496 kN/C, that is, [[campo_electrico_de_carga_puntual]] ≈ 2.50×10⁶ N/C.

## Dimensional validation

For [[fuerza_electrica_de_coulomb]]: the constant [[k_e]] has units `[M L³ T⁻⁴ I⁻²]`, each charge has units `[I T]`, and the squared distance has units `[L²]`. The quotient gives `[M L³ T⁻⁴ I⁻²] · [I T]² / [L²]`, which reduces to `[M L T⁻²]`, that is, newtons. ✓

For [[campo_electrico_de_carga_puntual]]: the quotient gives units `[M L³ T⁻⁴ I⁻²] · [I T] / [L²]`, which reduces to `[M L T⁻³ I⁻¹]`, that is, N/C. ✓

## Physical interpretation

The result [[fuerza_electrica_de_coulomb]] ≈ −15.0 N indicates that the force is **attractive**: the second sphere is pulled towards the first with an intensity of 15 N. This value is considerable: it is equivalent to supporting a weight of approximately 1.5 kg. For charges of only a few microcoulombs at 12 cm distance, this result illustrates the enormous strength of the electric force compared to gravity at laboratory scale.

The negative sign is not an error: it **means** that the charges have opposite signs and the interaction is attractive. If the student had obtained a positive value with these charges, it would indicate a sign error in the substitution.

The electric field [[campo_electrico_de_carga_puntual]] ≈ 2.50×10⁶ N/C is a property of the first sphere at that point in space, independent of the second. If [[q2]] were doubled (−12 µC instead of −6 µC), [[fuerza_electrica_de_coulomb]] would also double (≈ −30.0 N), but [[campo_electrico_de_carga_puntual]] would not change because it depends only on [[q1]] and [[distancia_entre_cargas]]. This difference between [[fuerza_electrica_de_coulomb]] and [[campo_electrico_de_carga_puntual]] is the conceptual core of the leaf.

By Newton's third law, the force that [[q2]] exerts on [[q1]] has the same magnitude (15 N) but opposite direction: [[q1]] is also attracted towards [[q2]] with 15 N. In equilibrium problems, both forces must be taken into account.

---

# Real-world example


## Context

In industrial electrostatic air purification systems (electrostatic precipitators), charged dust particles are attracted towards oppositely charged electrodes by the Coulomb electric force. The design of the separator requires estimating the force on each particle to calculate its transit time and ensure it reaches the electrode before exiting the other end of the device.

A typical dust particle carries a net charge of −0.5 nC (acquired by contact with the corona field of the charger). The nearest collecting electrode can be treated as an equivalent charge of +200 µC distributed uniformly at 5 cm from the particle.

## Physical estimation

Converting: [[q1]] of the electrode equals 2.0×10⁻⁴ C; [[q2]] of the particle equals −5.0×10⁻¹⁰ C; [[distancia_entre_cargas]] of 5 cm equals 0.05 m.

Applying Coulomb's law: the numerator is 8.988×10⁹ × 2.0×10⁻⁴ × (−5.0×10⁻¹⁰), giving approximately −8.988×10⁻⁴ N·m². The denominator is (0.05)², that is, 2.5×10⁻³ m². The force [[fuerza_electrica_de_coulomb]] is of order −8.988×10⁻⁴ / 2.5×10⁻³, giving [[fuerza_electrica_de_coulomb]] ≈ −0.36 N.

The negative sign indicates attraction: the particle is pulled towards the electrode with a force of approximately 0.36 N.

## Interpretation

A force of 0.36 N on a dust particle with typical mass of 10⁻⁸ kg **implies** an enormous acceleration: of order 3.6×10⁷ m/s². This means the particle reaches the electrode in very short times (microseconds), which explains the high efficiency of electrostatic precipitators.

This result **indicates** that the dominant variable is not the particle mass but its charge [[q2]]: lighter particles with the same charge reach the electrode faster (greater acceleration), while heavier particles with the same charge take longer. The design optimises the charge imparted to each particle to ensure that even the heaviest ones arrive at the electrode within the available device length.

If the distance [[distancia_entre_cargas]] were halved (2.5 cm), [[fuerza_electrica_de_coulomb]] would quadruple (≈ 1.44 N), increasing the acceleration by the same factor. This quadratic behaviour **describes** how tapered or convergent-geometry electrodes concentrate the force in the capture zone.