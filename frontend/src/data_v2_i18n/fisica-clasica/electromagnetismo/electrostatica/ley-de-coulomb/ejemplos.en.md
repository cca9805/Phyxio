# Exam-type example


## Problem statement

Two small metallic spheres of negligible mass are fixed on a horizontal plane. The first sphere carries a charge [[q1]] of 4.0 μC and the second carries a charge [[q2]] of −6.0 μC. The separation between the centres of the spheres is [[r12]] of 8.0 cm. Determine the magnitude of the Coulomb force exerted by each sphere on the other. State whether the force is attractive or repulsive and estimate how much the magnitude of [[fuerza_de_coulomb]] would change if the distance were reduced to half.

## Data

- First charge [[q1]]: 4.0 μC, equivalent to 4.0 × 10⁻⁶ C
- Second charge [[q2]]: −6.0 μC, equivalent to −6.0 × 10⁻⁶ C
- Distance between centres [[r12]]: 8.0 cm, equivalent to 8.0 × 10⁻² m
- Coulomb constant [[k_e]]: 8.988 × 10⁹ N·m²·C⁻²
- Medium: air (approximated as vacuum)

## System definition

The system consists of two point charges at rest on a horizontal axis. The separation of 8.0 cm is much larger than the size of the spheres, so the point charge hypothesis is valid. The magnitude of [[fuerza_de_coulomb]] on either sphere is requested (by Newton's third law, both magnitudes are equal).

The positive axis will be taken from [[q1]] to [[q2]]. The force on [[q2]] will point in the negative direction (towards [[q1]]) if the interaction is attractive, and in the positive direction (away from [[q1]]) if repulsive.

## Physical model

The applicable model is Coulomb's law for point charges in vacuum. The relevant magnitudes are [[q1]], [[q2]], [[r12]] and [[k_e]]. The formula gives the magnitude of [[fuerza_de_coulomb]], which is always positive; the character of the interaction is determined separately by comparing the signs of the charges.

## Model justification

The point charge model is appropriate because [[r12]] is much larger than the size of the spheres (stated to be "small"). The charges are at rest on a rigid horizontal surface, so the regime is purely electrostatic. There are no nearby conductors inducing charge redistribution. The medium is air, whose relative permittivity is practically equal to that of vacuum. All validity conditions of Coulomb's law are satisfied.

The model would break down if the spheres were charged so much that electrostatic repulsion displaced them, if metal conductors were present at distances comparable to [[r12]], or if the spheres had dimensions of the order of centimetres (comparable to the 8 cm separation).

## Symbolic solution

The expression for the magnitude of the Coulomb force is the leaf formula. Solving directly for [[fuerza_de_coulomb]]:

{{f:fuerza_coulomb}}

The numerator is the product of [[k_e]] by the absolute value of the product of the charges. The denominator is the square of [[r12]]. The character of the interaction is determined by evaluating the sign of the product [[q1]]·[[q2]]: positive implies repulsion, negative implies attraction.

Dividing [[fuerza_de_coulomb]] by [[q2]] also yields the electric field [[campo_electrico_de_carga_puntual]] that [[q1]] creates at the position of [[q2]]:

{{f:campo_electrico_coulomb}}

For the second part of the problem, reducing [[r12]] to half (to 4.0 cm) with the same charges: since [[r12]] enters squared in the denominator, halving [[r12]] divides the denominator by four, quadrupling [[fuerza_de_coulomb]].

## Numerical substitution

Applying the Coulomb force formula with the data:

{{f:fuerza_coulomb}}

Numerator: 8.988 × 10⁹ multiplied by the absolute value of the product of 4.0 × 10⁻⁶ and 6.0 × 10⁻⁶ gives 8.988 × 10⁹ × 24 × 10⁻¹² approximately equal to 0.2157.

Denominator: (8.0 × 10⁻²)² gives 6.4 × 10⁻³.

Dividing: 0.2157 divided by 6.4 × 10⁻³ results in approximately 33.7. Thus [[fuerza_de_coulomb]] ≈ 33.7 N.

The sign of the product [[q1]]·[[q2]] is that of 4.0 × (−6.0), which is negative, so the interaction is **attractive**: the second sphere is attracted towards the first and vice versa.

For the halved distance (4.0 cm), the new magnitude would be four times the previous one: approximately 134.8 N. The quadratic dependence multiplies the force by four when the distance is halved.

## Dimensional validation

Units of [[k_e]]: N·m²·C⁻²
Units of the charge product: C · C resolve to C²
Units of the squared distance: m · m resolve to m²

Dimensional check: N·m²·C⁻² multiplied by C² and divided by m² yields N. The dimension is `[M L T⁻²]`, corresponding to the unit of force. ✓

## Physical interpretation

With the result of [[fuerza_de_coulomb]] it is also possible to compute the electric field [[campo_electrico_de_carga_puntual]] that [[q1]] creates at the position of [[q2]]:

{{f:campo_electrico_coulomb}}

Substituting [[q1]] of 4.0 × 10⁻⁶ C and [[r12]] of 8.0 × 10⁻² m gives [[campo_electrico_de_carga_puntual]] ≈ 5.62 × 10⁶ N/C at that position. This field is independent of [[q2]]: if a different charge were placed at that point, [[campo_electrico_de_carga_puntual]] would not change.

The result [[fuerza_de_coulomb]] ≈ 33.7 N indicates an attractive force of nearly 34 Newtons between the two spheres. This is a considerable force for a laboratory system: equivalent to the weight of approximately 3.4 kg. The reason it is so intense is the combination of several-microcoulomb charges — which require an electrostatic machine to achieve — at a separation of only 8 cm.

If the separation is reduced to half, the force quadruples to approximately 135 N. This non-linear behaviour is the most important characteristic of Coulomb's law: small variations in [[r12]] at short distances produce dramatic force changes. In systems where [[r12]] can vary freely — such as charged particles in solution — this quadratic sensitivity is the cause of rapid aggregation when particles approach each other.

The attraction between the charges (opposite signs) means that if the spheres were free to move, they would accelerate towards each other. With gram-scale masses and forces of tens of Newtons, the accelerations would be of the order of thousands of metres per second squared — which is why in practice the spheres are mechanically fixed to measure the force in equilibrium.

---

# Real-world example


## Context

In industrial electrostatic precipitators, dust or ash particles suspended in the exhaust gas of a chimney are electrically charged as they pass through a corona discharge zone. Once charged, they find themselves in the electric field created by the precipitator electrodes. The electrostatic force on each charged particle is the essence of the capture mechanism.

Consider an ash particle of diameter 10 μm that has acquired a charge [[q2]] of approximately 5 × 10⁻¹⁵ C (5 femtocoulombs). The nearest collection electrode can be treated as an equivalent point charge with [[q1]] of −2 μC at an effective distance [[r12]] of 5 cm.

## Physical estimation

Applying Coulomb's law with the problem values, the magnitude of [[fuerza_de_coulomb]] is:

The product of [[k_e]] by the absolute value of [[q1]]·[[q2]] is approximately 8.988 × 10⁹ multiplied by 2 × 10⁻⁶ multiplied by 5 × 10⁻¹⁵, giving approximately 8.988 × 10⁻¹¹.

Divided by the square of [[r12]] (0.05 m)², which equals 2.5 × 10⁻³, this gives [[fuerza_de_coulomb]] ≈ 3.6 × 10⁻⁸ N.

This force of about 36 nanonewtons seems small, but the ash particle has a mass of approximately 1.4 × 10⁻¹² kg (estimating a density of about 2700 kg/m³). The resulting acceleration would be of the order of 26 000 m/s², nearly 2700 times gravity. Coulomb's law guarantees that the charged particle migrates to the collection electrode with very high efficiency.

## Interpretation

The efficiency of an electrostatic precipitator depends crucially on the inverse-square dependence of [[fuerza_de_coulomb]] on [[r12]]. When the particle is still far from the electrode (several centimetres), the Coulomb force is small and the particle advances slowly. As it approaches, the force grows with the inverse square of the distance: when [[r12]] is halved, the force quadruples, and the acceleration towards the electrode increases rapidly.

This non-linear behaviour is precisely what makes precipitators efficient: the final capture, when the particle is millimetres from the electrode, occurs with an enormous force even though the particle charge [[q2]] is very small in absolute terms.