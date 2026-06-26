## Conceptual context

Coulomb's law is the starting point of all classical electrostatics. Before this law existed, electricity was a collection of experimental observations without a quantitative model: it was known that charged bodies attract or repel each other, but the magnitude of the force could not be predicted. Charles-Augustin de Coulomb formalised in 1785 what we now call the first fundamental law of classical electromagnetism.

This law occupies in electromagnetism the same place that the law of universal gravitation occupies in mechanics. Both describe long-range forces that fall off as the square of the distance, but the electric force is intrinsically far more intense: between a proton and an electron, the Coulomb force exceeds the gravitational force by roughly 39 orders of magnitude.

Coulomb's law is not merely a historical result. It is the foundation from which the electric field, the electric potential, and, through Gauss's law, all of the electrostatics of continuous distributions are built. Understanding its dependencies — linear in each charge, inverse square in distance — is a prerequisite for any further analysis in electromagnetism.

## 🟢 Essential level

Imagine two small charged spheres. If they carry the same type of charge — both positive or both negative — they repel; if they carry opposite charges, they attract. This everyday experience has a precise quantitative structure.

The **Coulomb force** [[fuerza_de_coulomb]] between two charges depends on three factors: how much charge each object carries (magnitudes [[q1]] and [[q2]]), how far apart they are ([[r12]]), and the medium they are in. In vacuum, the force is larger when the charges are larger and smaller when they are farther apart. The most important aspect — and the one that causes the most confusion — is that the force does not vary linearly with distance: if you double the separation, the force drops to **one quarter**, not one half.

Coulomb's law says that two typical laboratory charges (of the order of microcoulombs) separated by a centimetre attract or repel each other with a force of tens of Newtons. It is an enormously intense interaction at the atomic scale and still appreciable at the macroscopic scale.

## 🔵 Formal level

The mathematical formulation of Coulomb's law for the magnitude of the force is:

{{f:fuerza_coulomb}}

where [[k_e]] is Coulomb's constant (approximately nine times ten to the ninth power in SI units), [[q1]] and [[q2]] are the charges of the two objects, and [[r12]] is the distance between them. The absolute value signs in the numerator ensure that the force magnitude is always positive: the attractive or repulsive character is not given by the magnitude but by the sign of the product of the charges.

The constant [[k_e]] can also be written as one divided by four pi times the permittivity of free space. Both notations are equivalent and the student will encounter both in textbooks.

Dividing [[fuerza_de_coulomb]] by the test charge yields the **electric field** [[campo_electrico_de_carga_puntual]] created by [[q1]] at that point in space:

{{f:campo_electrico_coulomb}}

This second relation is the entry point to the electric field concept: [[campo_electrico_de_carga_puntual]] does not depend on which charge is placed at the point, only on [[q1]] and [[r12]].

The main formula has three important dependencies that must be internalised:

- **Linear proportionality with each charge**: doubling [[q1]] doubles the force; doubling [[q2]] also doubles it.
- **Inverse-square dependence on distance**: [[r12]] appears squared in the denominator. Doubling [[r12]] reduces [[fuerza_de_coulomb]] to one quarter; tripling it reduces it to one ninth.
- **Proportionality with [[k_e]]**: this constant is fixed in vacuum and does not vary; in a dielectric it is divided by the relative permittivity of the medium.

> [!TIP]
> To solve any problem with Coulomb's law, the first step is to identify whether the magnitude of the force is requested (always positive) or the vector force (with direction and sense). The magnitude is computed directly from the formula. The sense is determined separately: attractive if the product of the charges is negative, repulsive if positive.

## 🔴 Structural level

Coulomb's law is an **empirical law of action at a distance**. In the modern field-theory framework, the force is transmitted through the electric field at finite speed; in the static regime this is irrelevant, but in the dynamic regime Coulomb must be replaced by Maxwell's full electrodynamics.

**Limits of validity**:

- **Point charges**: the extent of the objects must be negligible compared to [[r12]]; otherwise each differential charge element must be integrated.
- **Electrostatic regime**: charges at rest or very slow. In the dynamic regime the magnetic force adds a comparable contribution.
- **Vacuum or homogeneous medium**: in an isotropic dielectric, the relative permittivity modifies the strength but not the functional form.
- **Classical scale**: below the femtometre the strong nuclear interaction dominates.

**Superposition**: the total force on a charge is the vector sum of individual contributions — the bridge between the two-charge law and the field of continuous distributions.

**Gravitational analogy**: same mathematical structure as Newton's law, with mass → charge and Cavendish's constant → [[k_e]]. Key difference: charge has sign (attraction and repulsion), mass does not. Dividing [[fuerza_de_coulomb]] by the test charge yields [[campo_electrico_de_carga_puntual]], a field that depends only on the source and position: the conceptual core of field physics.

## Deep physical interpretation

The magnitude [[fuerza_de_coulomb]] is a vector magnitude: always positive, it represents the intensity of the interaction without its direction. The **character** of the interaction — attractive or repulsive — is determined by the sign of the product [[q1]]·[[q2]]. This is one of the points where students make the most mistakes: using the sign of a single charge to infer the sense of the force, when in reality only the product of the two is relevant.

The square of [[r12]] in the denominator has a deep geometrical consequence: in three dimensions, the "flux" of force through any sphere centred on the source charge is constant (independent of the sphere's radius). This is exactly the condition that Gauss's law makes explicit: charge is the source of flux and flux is not "lost" as one moves away. The inverse-square law is not an accident; it is the inevitable consequence of living in a three-dimensional space with spherical symmetry.

## Order of magnitude

To estimate whether a result is reasonable, some reference values are useful:

- Two electrons separated by 1 Å (one tenth of a nanometre): [[fuerza_de_coulomb]] of the order of 10⁻⁸ N. Small, but enormous for the electron mass.
- Two laboratory spheres with 1 μC at 10 cm: [[fuerza_de_coulomb]] of the order of 0.9 N. Detectable with a precision balance.
- Two charges of 1 C at 1 m: [[fuerza_de_coulomb]] of the order of 9×10⁹ N. Catastrophic in any real system — the reason why 1 C of concentrated charge does not exist in practice.

If a result of [[fuerza_de_coulomb]] exceeds kiloNewtons for microcoulomb charges at centimetre distances, there is almost certainly a unit conversion error (using centimetres instead of metres for [[r12]]).

## Personalized resolution method

To solve a problem with Coulomb's law:

1. **Identify the charges and distance**: extract [[q1]], [[q2]] and [[r12]] from the problem statement. Always convert to coulombs and metres before substituting.
2. **Choose what to compute**: if [[fuerza_de_coulomb]] is requested, use the formula directly. If [[r12]] or a charge is requested, rearrange algebraically first.
3. **Compute the magnitude**: substitute the absolute values of the charges. The result is always positive.
4. **Determine the direction**: the sense of the force is attractive (opposite charges) or repulsive (same sign). For the vector force, define an axis and assign a sign according to the sense.
5. **Check the order of magnitude**: compare with the references above. A result of 10⁻²⁶ N for macroscopic charges should raise suspicion.

## Special cases and extended example

**Limiting case — distance approaching zero**: when [[r12]] approaches zero, [[fuerza_de_coulomb]] diverges. In practice this never happens because objects have finite extent; the point charge model breaks down before the distance is comparable to the size of the objects. This limit marks the boundary of the model.

**Case of zero charge**: if [[q1]] or [[q2]] is zero, [[fuerza_de_coulomb]] is exactly zero regardless of the distance. A zero charge does not interact electrostatically. This result, though obvious, has important implications: the infinitesimal test charge used to define the electric field is an idealisation precisely because it must not disturb the field of the source charge.

**Three charges in a line**: if three charges lie on an axis and the force on the central one is requested, the two individual forces (from left and right) must be computed separately and added vectorially. Coulomb's law is applied to each pair; superposition does the rest. The classic mistake is computing the net force as if there were a single equivalent source charge at the midpoint, which is wrong except in special geometries.

## Real student questions

**Why does the force decrease with the square of the distance and not with the distance itself?**
The quadratic dependence has a geometric interpretation: the "flux" of electric action is distributed uniformly over a sphere. The area of a sphere grows with the square of the radius, so the density of action falls with the square of the distance. This is the same reason why the intensity of a light bulb follows the same law.

**Why is the force on [[q1]] equal to the force on [[q2]] even if one charge is much larger?**
Newton's third law is universal: the magnitude of [[fuerza_de_coulomb]] is unique for the pair. What changes is the resulting acceleration, which depends on each object's mass.

**If I separate the charges to double the distance, does the force drop to half?**
No. [[r12]] is squared in the denominator: doubling the distance reduces [[fuerza_de_coulomb]] to one quarter.

**What is the difference between [[fuerza_de_coulomb]] and [[campo_electrico_de_carga_puntual]]?**
[[fuerza_de_coulomb]] depends on both charges [[q1]] and [[q2]]. [[campo_electrico_de_carga_puntual]] is [[fuerza_de_coulomb]] divided by the test charge: it depends only on [[q1]] and position. The field is a property of space; the force is what a specific charge feels in it.

## Cross-cutting connections and study paths

Coulomb's law is the entry point to three branches:

- **Electric field [[campo_electrico_de_carga_puntual]]**: dividing [[fuerza_de_coulomb]] by the test charge defines [[campo_electrico_de_carga_puntual]]. This leads to the point charge field and, by superposition, to the field of distributions.
- **Gauss's law**: the inverse-square dependence implies Gauss's law, enabling field computation without integration for symmetric geometries.
- **Electrostatic potential energy**: Coulomb's conservative force has an associated potential energy, basis of the electric potential and capacitor energy.

Recommended route: Coulomb → point [[campo_electrico_de_carga_puntual]] → superposition → Gauss → potential.

## Final synthesis

Coulomb's law establishes that the force [[fuerza_de_coulomb]] between two point charges [[q1]] and [[q2]] is proportional to the product of their absolute values and inversely proportional to the square of [[r12]], with a proportionality constant [[k_e]] that sets the scale in the SI. Its domain of validity is classical electrostatics with objects whose extent is small compared to their separation, and its conceptual heritage is the superposition principle and the definition of the electric field as force per unit charge.