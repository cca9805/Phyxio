## Conceptual errors


### Error 1: Confusing Coulomb's law with a linear distance dependence

**Why it seems correct**

The student has internalised that "farther away, weaker force" and generalises by analogy with everyday situations — air resistance, hydrostatic pressure, sound attenuation — where the decrease is typically approximately proportional to distance. The incorrect generalisation leads to assuming that doubling the distance halves the force.

**Why it is incorrect**

Coulomb's law has [[r12]] squared in the denominator. The relationship is inverse-square, not inverse-linear. When [[r12]] doubles, [[fuerza_de_coulomb]] decreases by a factor of four, not two. This mathematical structure is a geometric consequence of the isotropic propagation of the interaction in three-dimensional space, and it is experimentally verified with very high precision.

**Detection signal**

If the student writes that doubling the distance halves the force, or constructs a table where [[fuerza_de_coulomb]] and [[r12]] change in the same proportion, this is an unambiguous sign of the error.

**Conceptual correction**

The dependence is on the square of [[r12]]. To remember the difference, it helps to recall the dimensional formula: force falls as one divided by the square of the distance, just like the intensity of light from a point source.

**Contrast mini-example**

Two charges at 2 cm produce [[fuerza_de_coulomb]] of 1 N. When separated to 4 cm (double), the correctly computed force is 0.25 N. The classic error gives 0.5 N. The difference is a factor of two, which is experimentally detectable.

**Mini-example of contrast**

Check 1: In Coulomb's Law, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Using the sign of a single charge to determine whether the force is attractive or repulsive

**Why it seems correct**

The student knows that positive charges "repel" and negative charges "attract". If there is only one positive charge, they tend to think the interaction will always be repulsive with any other charge, ignoring the sign of the second.

**Why it is incorrect**

The attractive or repulsive character of the Coulomb force depends on the **product** [[q1]]·[[q2]], not on the sign of either charge independently. If the product is negative (opposite-sign charges), the force is attractive; if positive (same sign), it is repulsive. A positive and a negative charge attract each other even though only one of them is positive.

**Detection signal**

The student declares that the force on a positive charge is always repulsive without checking the sign of the other charge. Or, faced with two negative charges, concludes they attract because "negative attracts negative".

**Conceptual correction**

The correct criterion: same sign → repulsion; opposite signs → attraction. This is equivalent to evaluating whether [[q1]]·[[q2]] is positive (repulsion) or negative (attraction). The direction is never determined by the sign of a single charge alone.

**Contrast mini-example**

Two charges of −3 μC and −3 μC. The incorrectly reasoning student might think "negative attracts negative". The product is positive (negative times negative), so the force is repulsive. Two equal charges — whether positive or negative — always repel.

## Model errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Applying Coulomb's law to macroscopic objects without verifying the point charge condition

**Why it seems correct**

Coulomb's law appears to apply to any charge system regardless of object size. The student applies it directly to spheres of 5 cm radius separated by 6 cm, without questioning whether the point approximation is valid.

**Why it is incorrect**

Coulomb's law in its basic form applies to point charges. When the size of the objects is comparable to [[r12]], the actual surface charge distribution on the conductor differs from a point charge concentrated at the geometric centre, and the actual force differs from the prediction. At 6 cm separation with 5 cm radii, the point charge condition is clearly violated.

**Detection signal**

The problem statement describes objects with explicit dimensions (radius, length, area) that are appreciable relative to [[r12]], and the student treats them as point charges without mentioning the hypothesis.

**Conceptual correction**

For objects with extent comparable to [[r12]], the force must be computed by integrating contributions from differential charge elements, or using Gauss's theorem when symmetry allows. The practical safety condition is that the size of the objects is less than 10% of [[r12]].

**Contrast mini-example**

A sphere of 10 cm radius with total charge [[q1]] and another equal sphere 12 cm from its centre. Applying Coulomb directly gives an error exceeding 50% because charges redistribute on the surface and do not behave as a point charge at that distance.

## Mathematical errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Not converting [[r12]] to metres before substituting

**Why it seems correct**

The problem gives [[r12]] in centimetres, which is the most natural unit for describing laboratory experiments. The student substitutes the numerical value directly without converting, because the calculation appears correct at first glance.

**Why it is incorrect**

Coulomb's constant [[k_e]] is expressed in SI units (N·m²·C⁻²). For the dimensional analysis of the formula to be consistent, [[r12]] must be in metres. Using centimetres without converting introduces a factor of 10⁻² in [[r12]] which, when squared in the denominator, produces a four-order-of-magnitude error in [[fuerza_de_coulomb]].

**Detection signal**

The result of [[fuerza_de_coulomb]] is ten thousand times larger than the correct value for the same configuration. Or the student writes the distance in centimetres (for example, five) and substitutes it directly into the formula without converting to metres.

**Conceptual correction**

Always convert [[r12]] to metres by multiplying by 0.01 before substituting. It is useful to write the unit alongside the numerical value during substitution to detect dimensional inconsistencies.

**Contrast mini-example**

Two charges of 1 μC at 10 cm separation. With [[r12]] in metres (0.10 m): [[fuerza_de_coulomb]] ≈ 0.9 N. With [[r12]] in centimetres (10): the incorrectly computed [[fuerza_de_coulomb]] is 9×10⁻⁴ N. The four-order-of-magnitude difference is undetectable without a unit check.

## Interpretation errors

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.


### Error 5: Interpreting negative [[fuerza_de_coulomb]] as attractive force

**Why it seems correct**

In mechanics, forces with a negative sign often indicate a direction "towards the origin" or "restoring". The student transfers this convention to Coulomb's force and concludes that a negative result means attraction.

**Why it is incorrect**

The scalar formula for Coulomb's law always gives the **magnitude** of the force, which is intrinsically positive. If the student includes the sign of the product of charges in the scalar formula, they may obtain a negative result, but this result is not the magnitude — it is a quantity with no direct physical meaning. The attractive or repulsive character is interpreted vectorially as a separate step, not as the sign of the magnitude.

**Detection signal**

The student computes [[fuerza_de_coulomb]] as the algebraic product (with sign) of [[q1]], [[q2]], [[k_e]] and the inverse square of [[r12]], and then interprets the negative result as an attractive force, accepting it as correct.

**Conceptual correction**

The magnitude of [[fuerza_de_coulomb]] is always computed using the absolute values of the charges. The attractive or repulsive character is qualitative information determined by comparing the signs of [[q1]] and [[q2]], and communicated by describing the vector direction of the force, not as the sign of the magnitude.

**Contrast mini-example**

Two charges of +2 μC and −3 μC at 5 cm. The magnitude is positive and equals approximately 21.6 N. The algebraic signed product would give −21.6, which is not the magnitude but an auxiliary number. Saying "the force is −21.6 N" is incorrect; the correct statement is "the force has magnitude 21.6 N and is attractive".

## Quick self-control rule

To quickly verify any result with Coulomb's law:

1. Is the magnitude of [[fuerza_de_coulomb]] positive? If not, there is an error in the formula used.
2. Has [[r12]] been converted to metres? Multiply by 0.01 if it was in centimetres.
3. Does doubling [[r12]] reduce [[fuerza_de_coulomb]] to one quarter? Verify with a simple case.
4. Does the attractive/repulsive character match the sign of the product of the charges? Same sign repels, opposite sign attracts.
5. Is the result consistent with order-of-magnitude references? Microcoulomb charges at centimetre distances produce forces of the order of tenths to units of Newtons.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.