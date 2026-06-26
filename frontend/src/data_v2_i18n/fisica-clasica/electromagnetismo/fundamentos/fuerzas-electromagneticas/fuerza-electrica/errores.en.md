## Conceptual errors


### Error 1: Confusing the electric field with the electric force

**Why it seems correct**

The electric field [[campo_electrico_de_carga_puntual]] and the electric force [[fuerza_electrica_de_coulomb]] have related units and both depend on [[q1]] and [[distancia_entre_cargas]]. The student intuitively generalises that both quantities are "the same thing" or that [[campo_electrico_de_carga_puntual]] already includes the effect of [[q2]]. The superficial analogy reinforces the confusion: if there is a field, there is a force, and if there is a force, there must be a field.

**Why it is incorrect**

[[campo_electrico_de_carga_puntual]] is a property of space created by [[q1]] that exists even without [[q2]]. [[fuerza_electrica_de_coulomb]] requires the presence of both charges: it is the product of [[campo_electrico_de_carga_puntual]] and [[q2]]. Confusing them produces systematic errors: calculating [[campo_electrico_de_carga_puntual]] and presenting it as [[fuerza_electrica_de_coulomb]] omits the factor [[q2]], which can be 10⁻⁶ or 10⁻¹⁹ coulombs, altering the result by many orders of magnitude.

**Detection signal**

The student obtains [[fuerza_electrica_de_coulomb]] without having used [[q2]] in any step of the calculation, or presents the electric field as the final answer to a question asking for the force.

**Conceptual correction**

The electric field [[campo_electrico_de_carga_puntual]] at a point is the force per unit charge that a positive test charge would experience at that point. The actual force [[fuerza_electrica_de_coulomb]] requires multiplying [[campo_electrico_de_carga_puntual]] by the specific charge [[q2]] located at that point. The two quantities are distinct both conceptually and in units: N/C versus N.

**Contrast mini-example**

At a point 0.1 m from a charge of 1 µC, the field [[campo_electrico_de_carga_puntual]] is approximately 900 kN/C. If a charge [[q2]] of 1 nC is placed there, the force [[fuerza_electrica_de_coulomb]] on it is 900 kN/C × 10⁻⁹ C, approximately 9×10⁻⁴ N. A student who confuses field with force would report 900 000 N instead of 0.0009 N — an error of nine orders of magnitude.

**Mini-example of contrast**

Check 1: In Electric Force, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Believing the electric force acts in only one direction

**Why it seems correct**

Problem statements usually say "the force on [[q2]]", leading the student to think that only [[q2]] experiences anything. The asymmetric notation induces the belief that [[q1]] is a passive source and [[q2]] is the active receiver of the force.

**Why it is incorrect**

Coulomb's law is completely symmetric. The force that [[q1]] exerts on [[q2]] has exactly the same magnitude as the force that [[q2]] exerts on [[q1]], though in opposite directions. Ignoring this reciprocity leads to errors in equilibrium problems and in the analysis of multi-charge systems.

**Detection signal**

The student identifies only one force in the system and does not apply Newton's third law. In problems with free charges, they calculate only the acceleration of [[q2]] and not of [[q1]].

**Conceptual correction**

Newton's third law applies to all forces, including the electric force. [[q1]] and [[q2]] affect each other with the same intensity. Only if [[q1]] is fixed (anchored to an infinite mass) can its acceleration be ignored; but the force on it exists nonetheless.

**Contrast mini-example**

Two charges of 1 µC separated by 0.1 m: the force on [[q2]] is approximately 0.9 N towards [[q1]]. By Newton's third law, the force on [[q1]] is also 0.9 N towards [[q2]]. If [[q1]] has a mass of 1 mg, its acceleration is enormous — about 9×10⁵ m/s². Ignoring this force on [[q1]] is incorrect even though [[q1]] is the "source" charge.

## Model errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 1: Applying the point Coulomb law to large spheres at short distances

**Why it seems correct**

Coulomb's law applies to any pair of charges, so the student applies it directly without asking whether the charges are truly point-like. The formula does not explicitly mention any size condition.

**Why it is incorrect**

When charges reside in objects whose size is comparable to [[distancia_entre_cargas]], the internal charge distribution generates a force different from that predicted by the point Coulomb law. The actual force may be larger (if charge concentrates on the closest face by induction) or slightly different in direction.

**Detection signal**

The student uses Coulomb's law with [[distancia_entre_cargas]] of the same order as the size of the charged object (for example, [[distancia_entre_cargas]] of 1 cm for balls of 5 mm radius). The relative error in this case exceeds 10 %.

**Conceptual correction**

The point Coulomb law is exact for uniformly charged spheres evaluated from the outside: in that case, all charge may be treated as concentrated at the centre. For other objects, the condition r >> size is necessary for the error to be negligible.

**Contrast mini-example**

A sphere of radius 5 cm uniformly charged with 1 µC. At [[distancia_entre_cargas]] of 6 cm from the centre, Coulomb's law gives an exact result because the centre is at 6 cm. But if the distance is measured from the nearest surface (1 cm), using r of 1 cm instead of 6 cm produces an error of a factor of 36 in the calculated force.

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 2: Ignoring the sign of the charges when determining the type of interaction

**Why it seems correct**

Many textbooks give Coulomb's law in magnitude only and then add the verbal rule "like repels, unlike attracts". The student memorises the verbal rule without connecting it to the sign of the product [[q1]]·[[q2]] in the formula.

**Why it is incorrect**

The vector form of Coulomb's law incorporates the sign automatically through the charge product. Separating the formula from the verbal rule creates inconsistency in problems with three or more charges, where the student must combine attractive and repulsive forces and can make mistakes in the vector direction of each.

**Detection signal**

In a force diagram, the student draws [[fuerza_electrica_de_coulomb]] without verifying the sign of [[q1]]·[[q2]], or assigns the correct direction to the force purely verbally without relying on the formula.

**Conceptual correction**

The product [[q1]]·[[q2]] is positive when the charges have the same sign (repulsion) and negative when they have opposite signs (attraction). This sign enters directly into the formula and determines the direction of [[fuerza_electrica_de_coulomb]] algebraically, without needing additional rules.

**Contrast mini-example**

Three charges in a line: [[q1]] of +2 µC at the origin, [[q2]] of −3 µC at 10 cm, a third charge of +1 µC at 20 cm. The force of the central charge [[q2]] on the third charge is attractive (opposite signs), but the force of [[q1]] (origin) on the third charge is repulsive (same signs). A student who does not use the sign of the product may invert one of the two forces and obtain a wrong net force.

## Mathematical errors

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.


### Error 1: Raising r to the first power instead of squaring it

**Why it seems correct**

Most inverse proportionality relations the student has seen up to this point (for example, pressure and volume in ideal gases) use the first exponent. Coulomb's law introduces the square, which is not the most common case, and the student omits it by inertia.

**Why it is incorrect**

The dependence on [[distancia_entre_cargas]]² rather than [[distancia_entre_cargas]] is not a minor detail: it produces errors proportional to [[distancia_entre_cargas]] for each evaluation. If [[distancia_entre_cargas]] is 10, the error in the denominator is a factor of 10, making the result ten times larger than correct.

**Detection signal**

When doubling [[distancia_entre_cargas]] in a calculation, the student finds that [[fuerza_electrica_de_coulomb]] reduces to one half rather than one quarter. This factor of 2 instead of the expected factor of 4 reveals the use of [[distancia_entre_cargas]] instead of [[distancia_entre_cargas]]².

**Conceptual correction**

The inverse-square law is a consequence of the three-dimensional geometry of space: the force "dilutes" over the surface of a sphere of radius [[distancia_entre_cargas]], which grows with [[distancia_entre_cargas]]². The exponent 2 is structural, not arbitrary.

**Contrast mini-example**

For [[q1]] of 1 µC, [[q2]] of 1 µC and [[distancia_entre_cargas]] of 0.1 m, the correct [[fuerza_electrica_de_coulomb]] is approximately 0.9 N. Using [[distancia_entre_cargas]] in the denominator (without squaring) gives a result proportional to 1/0.1, a value ten times too large. At [[distancia_entre_cargas]] of 1 m, the error would be a factor of 100, showing that the difference grows with distance.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 2: Mixing charge units (µC, nC, C) in the same substitution

**Why it seems correct**

Problem statements give data in common units (µC, nC) to avoid very small numbers, and the student substitutes them directly into the formula without remembering to convert to coulombs.

**Why it is incorrect**

The constant [[k_e]] is expressed in SI units (coulombs), so all charges must be in coulombs when substituting. Mixing µC without converting introduces a factor of 10⁻⁶ per charge, and if both charges are in µC, the total error is a factor of 10⁻¹².

**Detection signal**

The result for [[fuerza_electrica_de_coulomb]] is of order 10⁻¹² N for µC charges at centimetre distances, when it should be of order 0.1–10 N.

**Conceptual correction**

Always convert all charges to coulombs before substituting: 1 µC × 10⁻⁶ C/µC gives 10⁻⁶ C. A good practice is to write the conversion explicitly in the first step of every calculation.

**Contrast mini-example**

Two charges of 5 µC separated by 0.05 m. Using 5 µC directly instead of 5×10⁻⁶ C, the result obtained is 10⁻¹² times the correct value. The correct [[fuerza_electrica_de_coulomb]] is approximately 90 N; the result with mixed units would be a completely negligible value of order 10⁻¹⁰ N.

## Interpretation errors

**Mini-example of contrast**

Check 6: In Electric Force, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.


### Error 1: Interpreting negative [[fuerza_electrica_de_coulomb]] as "zero force" or "error"

**Why it seems correct**

The student has learned that force is a positive quantity in many contexts (weight, normal force, tension). When Coulomb's law gives a negative result, they interpret it as a calculation error or take the absolute value ignoring the sign.

**Why it is incorrect**

The sign of [[fuerza_electrica_de_coulomb]] is essential physical information: it indicates attraction (negative sign in this formula's convention) or repulsion (positive sign). Removing the sign erases the information about the type of interaction and can reverse the direction of the force vector in vector problems.

**Detection signal**

The student writes the result of [[fuerza_electrica_de_coulomb]] as an absolute value without commenting on the sign, or draws the force in the wrong direction in a vector diagram.

**Conceptual correction**

The sign of [[fuerza_electrica_de_coulomb]] comes from the product [[q1]]·[[q2]]. It is physical information: negative means attraction, positive means repulsion. Always interpret the sign before using [[fuerza_electrica_de_coulomb]] in vectors or force diagrams.

**Contrast mini-example**

[[q1]] of +3 µC and [[q2]] of −2 µC at 0.15 m. The product [[q1]]·[[q2]] is negative, so [[fuerza_electrica_de_coulomb]] is negative: attraction. If the student takes the absolute value and uses it in an equilibrium problem, they may conclude that [[q2]] is pushed away from the system when in fact it is attracted towards [[q1]], inverting the equilibrium condition.

**Mini-example of contrast**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.


### Error 2: Believing that doubling both charges simultaneously quadruples the force

**Why it seems correct**

The force is proportional to [[q1]] and also to [[q2]], so it seems reasonable that doubling both simultaneously quadruples the result (2×2 in the numerator).

**Why it is incorrect**

This is actually correct: if [[q1]] doubles, [[fuerza_electrica_de_coulomb]] doubles; if [[q2]] also doubles, [[fuerza_electrica_de_coulomb]] doubles again. The total result of doubling both charges is multiplying [[fuerza_electrica_de_coulomb]] by four. The error lies not in the conclusion but in the fact that many students apply the same logic to [[distancia_entre_cargas]] and believe that doubling [[distancia_entre_cargas]] also quadruples the force, when in fact it divides it by four. The confusion between numerator and denominator produces the opposite error.

**Detection signal**

The student gets the correct result when changing the charges but makes a mistake when changing [[distancia_entre_cargas]], or applies the squaring rule to the numerator when it belongs to the denominator.

**Conceptual correction**

[[fuerza_electrica_de_coulomb]] is proportional to the product [[q1]]·[[q2]] (numerator) and inversely proportional to [[distancia_entre_cargas]]² (denominator). Changes in the numerator amplify the force; changes in the denominator reduce it. The structure of the formula perfectly distinguishes both roles.

**Contrast mini-example**

Initial [[fuerza_electrica_de_coulomb]] with [[q1]] of 1 µC, [[q2]] of 1 µC and [[distancia_entre_cargas]] of 0.1 m. Doubling both charges gives [[fuerza_electrica_de_coulomb]] multiplied by four. Doubling [[distancia_entre_cargas]] gives [[fuerza_electrica_de_coulomb]] divided by four. A student who confuses the roles of numerator and denominator may present both operations with the same multiplying effect, which is incorrect.

## Quick self-control rule

Before closing any calculation with Coulomb's law, verify these three points:

1. **Units**: the charges are in coulombs (not µC or nC without converting), [[distancia_entre_cargas]] is in metres and [[k_e]] is in N·m²·C⁻². If the result of [[fuerza_electrica_de_coulomb]] is not in newtons, there is a units error.
2. **Exponent of [[distancia_entre_cargas]]**: the denominator of the formula contains [[distancia_entre_cargas]] squared. If doubling [[distancia_entre_cargas]] does not reduce the result to one quarter, the exponent is incorrect.
3. **Sign and interpretation**: the sign of [[fuerza_electrica_de_coulomb]] must be consistent with the product [[q1]]·[[q2]]. If the charges have the same sign, [[fuerza_electrica_de_coulomb]] must be positive (repulsion); if they have opposite signs, [[fuerza_electrica_de_coulomb]] must be negative (attraction).

**Mini-example of contrast**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.