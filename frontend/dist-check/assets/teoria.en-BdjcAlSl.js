const e=`# Electric Force

## Conceptual context

The electric force is the fundamental interaction between objects that possess electric charge. Before Coulomb measured it precisely in 1785, natural philosophers knew that charges attracted or repelled each other, but could not quantify that action. Coulomb's law put numbers to the intuition and placed electricity at the same level of mathematical rigour as Newtonian gravitation.

Within the Phyxio tree, the electric force occupies the hinge position between the concept of charge (which describes a property of the object) and the concept of the electric field (which describes a property of space). Understanding the electric force means understanding why two charges "feel" each other at a distance and how strongly they do so.

The practical relevance is enormous: the electric force keeps electrons bound to atomic nuclei, determines the mechanical strength of crystalline solids, and controls the chemistry of covalent and ionic bonds. Without Coulomb's force there would be no condensed matter as we know it.

## 🟢 Essential level

Two particles with non-zero [[q1]] and [[q2]] attract or repel each other. If both carry the same type of charge, the force [[F_C]] pushes them apart; if they carry opposite types, the force pulls them together. This behaviour is universal and requires no contact between the particles: it acts at a distance.

The strength of that action depends on how large [[q1]] and [[q2]] are, and on how far apart they sit. The most important intuitive point is that **doubling the distance does not halve the force — it reduces it to one quarter**: the dependence on [[r]] is quadratic.

> [!NOTE]
> The electric force is always mutual: if [[q1]] pushes [[q2]] with a certain force, [[q2]] pushes [[q1]] with exactly the same force in the opposite direction. This is Newton's third law applied to electricity.

## 🔵 Formal level

The mathematical relation between [[F_C]], [[q1]], [[q2]] and [[r]] is **Coulomb's law**:

{{f:fuerza_coulomb}}

where [[k_e]] is the Coulomb constant, whose value in vacuum is approximately 8.988×10⁹ N·m²·C⁻². The formula shows that [[F_C]] is **proportional to the product of the charges** and **proportional to the inverse square of the distance**.

The sign of [[F_C]] follows directly from the product \\(q_1 \\cdot q_2\\): if both charges are positive or both are negative, the product is positive and the force is repulsive; if they have opposite signs, the product is negative and the force is attractive.

From Coulomb's law one derives directly the **electric field** created by [[q1]] at any point in space. At the point where [[q2]] sits, at distance [[r]], that field equals:

{{f:campo_electrico_coulomb}}

The conceptual difference between [[F_C]] and [[E_C]] is fundamental: [[E_C]] is a property of space created by [[q1]] that exists even without [[q2]]. The force [[F_C]] requires both charges; the field [[E_C]] requires only [[q1]].

> [!WARNING]
> The constant [[k_e]] has dimensions of N·m²·C⁻². Working with charges in microcoulombs without converting to coulombs introduces an error of a factor of 10⁻¹², making the result completely nonsensical.

## 🔴 Structural level

Coulomb's law shares the same **inverse-square** mathematical structure with Newton's law of universal gravitation, where the gravitational force also decreases with the square of the distance. However, there are crucial physical differences: gravitational force is always attractive and proportional to masses, while the electric force can be either attractive or repulsive depending on the signs of the charges. Furthermore, [[k_e]] is of order 10⁹ N·m²·C⁻², making the electric interaction billions of times stronger than gravity at subatomic scales.

The **superposition principle** is the property that allows Coulomb's law to be extended to systems with more than two charges: the total force on a charge is the vector sum of the individual forces from each of the other charges. This linearity is a hallmark of classical electromagnetism and allows the electric field of any charge distribution to be built up by integration.

Coulomb's law has a well-defined **domain of validity**. It works with high precision for point charges or spherical distributions at distances much larger than the size of the charges. It fails at distances below 10⁻¹⁵ m (nuclear scale), where the strong nuclear force far exceeds the electric force. It also fails when charges move at velocities close to the speed of light, where relativistic electromagnetism must be used.

> [!TIP]
> The Coulomb constant [[k_e]] and the permittivity of free space are related such that [[k_e]] equals one divided by four pi times the permittivity of free space. This alternative form is more natural when working with Gauss's law or parallel-plate capacitors, where the permittivity of free space appears directly.

The field structure created by a point charge is **radially symmetric**: [[E_C]] has the same magnitude at all points at the same distance [[r]], and points radially outward (for positive [[q1]]) or inward (for negative [[q1]]). This symmetry is what allows Gauss's law to be applied simply for spherical, cylindrical, or planar distributions with high symmetry.

The most relevant limiting behaviour is the **electric potential energy** associated with the Coulomb force. Because the force is conservative (its work depends only on the initial and final positions, not on the path), there exists a potential energy function proportional to the product of [[q1]] by [[q2]] divided by [[r]] and scaled by [[k_e]]. This energy function is the foundation of electric potential and connects Coulomb's law to all of electrostatic potential theory.

## Deep physical interpretation

The sign of [[F_C]] is not just an algebraic convention: it is direct physical information. When substituting into the formula gives a negative result, the system is **energetically favourable** for approaching: the force does positive work as [[r]] decreases, which translates into a reduction in potential energy. When the result is positive, separating the charges requires external work.

The magnitude of [[k_e]] explains why ordinary matter is mostly electrically neutral: the forces between charges of opposite sign are so intense that any macroscopic charge separation generates enormous restoring forces. One gram of electrons separated one metre from one gram of protons would experience a force of order 10²³ N, which is mechanically impossible to sustain.

> [!NOTE]
> The dielectric constant of a medium effectively reduces [[k_e]] by the relative permittivity of the medium: in liquid water, with a relative permittivity of approximately 80, the force between two ions is eighty times weaker than in vacuum. This effect explains the high solubility of ionic salts in water.

## Order of magnitude

For two charges of 1 µC (10⁻⁶ C) separated by 1 cm (10⁻² m), the resulting force is of order 90 N. That is the weight of about 9 kg: a very appreciable force for microscopic charges.

For the electron–proton system in the hydrogen atom, with charges of ±1.6×10⁻¹⁹ C and distance 0.53×10⁻¹⁰ m, [[F_C]] is of order 8×10⁻⁸ N, corresponding to an electron acceleration of nearly 10²² m/s². Any result in a problem with atomic charges below 10⁻¹⁰ N or above 10⁻⁶ N should raise an alert.

To detect an absurd result: if [[F_C]] exceeds the weight of a macroscopic object with typical laboratory charges (microcoulombs), something is wrong. Laboratory charges rarely exceed 10 µC.

## Personalized resolution method

To solve any problem using Coulomb's law, follow this sequence:

1. **Identify the charges and their values in coulombs**. Convert explicitly if they are given in µC or nC.
2. **Measure [[r]] in metres**. Not in centimetres or angstroms.
3. **Substitute into the formula** keeping the signs of [[q1]] and [[q2]].
4. **Interpret the sign of the result**: positive for repulsion, negative for attraction.
5. **Check the order of magnitude**: compare with typical ranges before concluding.

If the problem asks for the field [[E_C]] rather than [[F_C]], use the second formula of the leaf and remember that [[E_C]] does not depend on [[q2]].

## Special cases and extended example

**Zero charge**: if [[q1]] or [[q2]] is zero, [[F_C]] is exactly zero. There is no interaction even if the charges are in contact.

**Distance tending to zero**: Coulomb's law predicts a force tending to infinity. Physically this does not occur because at nuclear distances the model fails; in practice, charged objects have finite size and their charge centres cannot coincide.

**Three-charge system**: if there are three charges [[q1]], [[q2]] and a third \\(q_3\\), the total force on [[q2]] is the vector sum of the force of [[q1]] on [[q2]] and the force of \\(q_3\\) on [[q2]]. The superposition principle guarantees that each pair interacts independently.

**Electrostatic equilibrium**: one can find the point between two charges where a third test charge is in equilibrium. At that point, the forces of [[q1]] and [[q2]] on the test charge cancel exactly. The equilibrium position depends on the ratio of [[q1]] to [[q2]] and on the total distance between them.

## Real student questions

**Why does the force decrease with the square of the distance and not simply with the distance?**

The quadratic dependence is not arbitrary: it reflects how the interaction "dilutes" in three-dimensional space. The "flux" of the force spreads over a spherical surface that grows with [[r]]², so the force density falls with [[r]]². This same logic explains gravitation and the intensity of light.

**Why multiply the charges rather than add them?**

Coulomb's force is an interaction between pairs of charges. Doubling either charge doubles the number of elementary interactions contributing to the total force. This is precisely what the product [[q1]]·[[q2]] expresses.

**Does the electric force exist in absolute vacuum, without any intermediary particle?**

From the classical physics perspective, yes. Quantum field theory explains the interaction via the exchange of virtual photons, but the macroscopic result is identical to Coulomb's law. At the formal level, the force acts through vacuum without needing any medium.

**How do I know whether to use [[F_C]] or [[E_C]] to solve a problem?**

If the problem asks for the force on a specific charge, use [[F_C]]. If it asks what acceleration or force any charge would experience (without specifying it), the correct answer involves [[E_C]], which does not depend on the test charge. If the problem gives [[E_C]] and asks for [[F_C]], simply multiply by [[q2]].

## Cross-cutting connections and study paths

The electric force connects directly with the **electric field** (next leaf): the field is simply the force per unit charge. Understanding Coulomb's law in vector form is the indispensable prerequisite for applying the superposition principle in multi-charge problems.

Later, **Gauss's law** reformulates the same information as Coulomb's law in terms of electric field flux, which is far more practical for charge distributions with high symmetry. The mathematical link between Coulomb and Gauss is the divergence theorem.

The analogy with Newtonian gravitation is powerful: same \\(1/r^2\\) structure, same linear superposition, same existence of a conservative potential. The qualitative difference is that mass is always positive (only gravitational attraction) while charge can be positive or negative (both attraction and repulsion).

## Final synthesis

Coulomb's law is the quantitative relation governing the force between point charges: proportional to the product of [[q1]] and [[q2]], and inversely proportional to the square of [[r]]. Its inverse-square structure is the same as gravity, but the presence of signs in [[q1]] and [[q2]] adds the possibility of repulsion, which gravitation lacks. This simple formula is the starting point of all classical electrostatics.
`;export{e as default};
