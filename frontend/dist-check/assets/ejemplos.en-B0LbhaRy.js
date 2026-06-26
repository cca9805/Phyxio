const e=`# Exam-type example

## Problem statement

A positive point charge of 5 μC is fixed at the origin of coordinates. Calculate the electric field at a point located 30 cm from the charge, determine the force that a test charge of 2 nC placed at that point would experience, and discuss how the result would change if the distance were doubled.

## Data

- Source charge: 5 μC (positive)
- Distance to evaluation point: 30 cm
- Test charge: 2 nC (positive)
- Coulomb constant: 8.988×10⁹ N·m²·C⁻²

## System definition

The system consists of a fixed point charge [[q_fuente]] at the origin and an evaluation point located at distance [[r]] from the origin. The test charge [[q_0]] is small enough not to disturb the source charge distribution. Magnetic effects are not considered (pure electrostatics), nor are conductors or dielectrics in the environment. The field direction follows the line connecting the source charge to the evaluation point.

## Physical model

The point-charge model in vacuum is applied: the field [[E]] at any point in space depends only on [[q_fuente]], [[k_e]], and [[r]] via Coulomb's law. The force [[F_e]] on the test charge [[q_0]] is obtained from [[E]] by applying the operational definition of the field. The superposition principle is not needed because there is only one source charge.

## Model justification

The point-charge model is valid because the 30 cm evaluation distance is many orders of magnitude larger than the physical size of any real 5 μC charge (which in a typical conductor occupies a volume of millimeter scale or smaller). The field is static because the charge does not move. The model would fail if nearby conductors induced charge redistribution, or if the source charge velocity were an appreciable fraction of the speed of light.

## Symbolic solution

The magnitude of the electric field at the point at distance [[r]] from [[q_fuente]] is obtained by applying:

{{f:campo_electrico_coulomb}}

Once the field [[E]] is computed, the force on the test charge [[q_0]] placed at that point is obtained by rearranging the definition:

{{f:campo_electrico_definicion}}

from which the force is the product of [[E]] and [[q_0]]. For the sensitivity analysis: if [[r]] is doubled, the denominator of Coulomb's formula increases by a factor of four, so [[E]] decreases to one quarter of its original value.

## Numerical substitution

To compute the field magnitude, [[k_e]] of 8.988×10⁹ N·m²·C⁻², [[q_fuente]] of 5×10⁻⁶ C, and [[r]] of 0.30 m are entered. The numerator is the product of 8.988×10⁹ and 5×10⁻⁶, giving 44 940 N·m²/C. The denominator is the square of 0.30 m, i.e. 0.09 m². Dividing both, [[E]] is approximately 499 333 N/C, rounded to three significant figures approximately 499 000 N/C.

For the force on [[q_0]]: multiplying the field of 499 000 N/C by the test charge of 2×10⁻⁹ C, [[F_e]] is approximately 9.98×10⁻⁴ N, i.e. approximately 1 mN.

For the doubled-distance case at 60 cm: the denominator becomes the square of 0.60 m, i.e. 0.36 m². The new field is approximately 124 833 N/C, exactly one quarter of the original, confirming the inverse-square dependence.

## Dimensional validation

- Electric field: multiplying N·m²·C⁻² by C and dividing by m² gives \`[N·m²·C⁻²]·[C]·[m⁻²]\`, which simplifies to \`[N·C⁻¹]\`, i.e. N/C. Correct.
- Force: multiplying N/C by C gives N directly. Correct.
- The ratio of fields at 30 cm and 60 cm equals the square of the distance ratio: \`[0.60/0.30]²\` gives 4, confirming the inverse-square law. Correct.

## Physical interpretation

The result of approximately 499 000 N/C physically means that the 5 μC charge creates a very intense field at 30 cm. Any positive test charge placed at that point would be pushed radially outward with a force proportional to its value. The resulting force on the 2 nC charge, around 1 mN, is small compared to everyday mechanical forces, yet enormous at sub-atomic scale.

The sensitivity analysis reveals the most important consequence of the inverse-square law: doubling the distance does not halve [[E]] but reduces it to one quarter. This means the field of a point charge is concentrated near the source and decays rapidly. Therefore, an engineer designing an ion trap or a particle accelerator must account for this nonlinearity: moving slightly away from the source drastically reduces the field influence. If the distance were tripled, the field would fall to one ninth of its original value.

---

# Real-world example

## Context

Franklin lightning rods are one of the oldest and most effective electrostatic protection devices in history. They work by creating a region of intense electric field at their metal tip, which facilitates the ionization of the surrounding air and provides a preferred conductive path for atmospheric discharges.

During a thunderstorm, the base of cumulonimbus clouds accumulates negative charges that induce a positive charge on the Earth's surface. The resulting electric field can far exceed the dielectric breakdown threshold of air, triggering a lightning bolt. Modeling the tip of a lightning rod as a point charge allows estimating the field around it and understanding why the pointed geometry is essential for its operation.

## Physical estimation

Consider the tip of a lightning rod as a point charge [[q_fuente]] of typical value 10 nC concentrated within an effective radius of 1 mm. At a distance [[r]] of 1 mm from the tip, the field is estimated using Coulomb's formula. With [[k_e]] of 8.988×10⁹ N·m²·C⁻² and [[q_fuente]] of 10⁻⁸ C, the numerator is 8.988×10⁹ times 10⁻⁸, giving 89.88 N·m²/C. The denominator is the square of 10⁻³ m, i.e. 10⁻⁶ m². The resulting field [[E]] is approximately 89 880 000 N/C, i.e. on the order of 90 MN/C.

This value exceeds the dielectric breakdown threshold of dry air, which is approximately 3 MN/C. Therefore, the generated field is sufficient to ionize the air immediately around the tip, creating a conductive region (plasma corona) that connects the metal tip to the atmosphere and gradually drains the atmospheric charge or triggers a controlled lightning strike.

## Interpretation

This example shows that [[E]] and its dependence on [[r]] have a direct practical consequence in the design of electrical protection systems. The pointed geometry concentrates the field locally beyond the ionization threshold, which physically means the energy stored in the field is sufficient to strip electrons from the surrounding gas and create a conductive channel. Without the pointed geometry, a flat surface with the same total charge would generate a much weaker field, insufficient to ionize air.

The inverse-square law is the key to the mechanism: at 1 mm from the tip the field is on the order of 90 MN/C; at 1 cm—ten times farther—the field would fall to approximately 900 kN/C, already below the breakdown threshold. This indicates that the ionization zone is highly localized, which is desirable: the lightning rod does not ionize the air throughout the building structure, only at the tip. The concentrated [[q_fuente]] and the small distance [[r]] are therefore the two critical design parameters of any device exploiting this principle.
`;export{e as default};
