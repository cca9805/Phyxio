## Conceptual errors


### Error 1: Confusing electric potential energy with electric potential

**Why it seems correct**

The student has heard "electric potential" and "electric potential energy" in the same unit and in very similar sentences. Both concepts relate to the position of a charge in a field, and both contain the word "potential." The cognitive mechanism is overgeneralization: if two names are nearly identical, they probably describe the same thing at different scales.

**Why it is incorrect**

Electric potential [[potencial_electrico_en_el_punto_a]] is a property of the field at a point in space, measured in volts (joules per coulomb). Electric potential energy [[energia_potencial_electrica]] is a property of the charge-field system, measured in joules. The key difference is that [[energia_potencial_electrica]] depends on the charge [[carga_de_prueba]] placed at that point, while [[potencial_electrico_en_el_punto_a]] does not depend on any test charge. A point in space has a well-defined potential even when no charge is present; potential energy exists only when a real charge occupies that point.

**Detection signal**

The student obtains a result in volts when the problem asks for joules, or assigns "the field's potential energy" to an empty point in space without a test charge.

**Conceptual correction**

The potential [[potencial_electrico_en_el_punto_a]] is the potential energy per unit positive charge. To obtain [[energia_potencial_electrica]] for a specific charge [[carga_de_prueba]] at that point, multiply: the energy is [[carga_de_prueba]] times [[potencial_electrico_en_el_punto_a]]. Remember that charges of different values placed at the same field point have different [[energia_potencial_electrica]] but the same [[potencial_electrico_en_el_punto_a]].

**Contrast mini-example**

A point in space where the field produces a potential of 100 V has a single defined property: [[potencial_electrico_en_el_punto_a]] is 100 V. If a 2 µC charge is placed there, the energy is 200 µJ. If a 5 µC charge is placed there, the energy is 500 µJ. Applying the confusion incorrectly (treating [[potencial_electrico_en_el_punto_a]] as [[energia_potencial_electrica]]) always gives 100 J regardless of the charge, which is absurd: the energy would depend on the field but not on how much charge is present.

---

**Mini-example of contrast**

Check 1: In Electric Potential Energy, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Assuming electric potential energy is always positive

**Why it seems correct**

The student associates "energy" with something positive: a physical quantity that can be stored, spent, or transferred, but never negative. Kinetic energy, internal energy, light energy: all are typically presented as positive. The cognitive mechanism is an incorrect analogy with the forms of energy the student is most familiar with.

**Why it is incorrect**

Potential energy is always relative to a reference. With the standard reference at infinity, the interaction energy between two opposite-sign charges is negative: it indicates that the bound system has less energy than the system with the charges infinitely separated. This negativity has precise physical meaning: to separate the charges to infinity, an amount of energy equal to the absolute value of [[energia_potencial_electrica]] must be supplied to the system.

**Detection signal**

The student takes the absolute value of the result without realizing it, or states "the energy is 3.5 J" when the correct calculation gives −3.5 J for two opposite-sign charges.

**Conceptual correction**

The sign of [[energia_potencial_electrica]] for a two-point-charge system is determined by the product of the charges: same sign gives positive, opposite sign gives negative. Negativity does not indicate an error: it indicates a bound state. The hydrogen atom has a binding energy of −13.6 eV precisely because the electron and proton have opposite charges.

**Contrast mini-example**

Incorrectly applying "energy is always positive" to a proton and electron separated by 0.053 nm (Bohr radius) leads to claiming the interaction energy is positive, implying the electron and proton repel each other and the hydrogen atom is unstable. The correct result is negative, indicating attraction and a stable bound state.

## Model errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Using the Coulomb formula in a dielectric medium without correcting

**Why it seems correct**

Coulomb's law and the interaction energy formula are presented for vacuum. The student directly applies the formula with [[k_e]] even when the problem specifies that the charges are in water, oil, or plastic. The cognitive mechanism is overgeneralization: if the formula works in all seen examples (which are usually in vacuum or air), the student applies it universally.

**Why it is incorrect**

In a medium with a relative permittivity (dielectric factor of the medium), the effective interaction constant is reduced by that factor. Water has a relative permittivity of approximately 80, which reduces the interaction energy to less than 1.3 % of its vacuum value. Ignoring this in a problem occurring in aqueous solution produces results wrong by nearly two orders of magnitude.

**Detection signal**

The problem statement mentions a medium other than vacuum or air, but the student uses the vacuum Coulomb constant unmodified. The [[energia_potencial_electrica]] result is tens or hundreds of times larger than expected for that context.

**Conceptual correction**

In a homogeneous, isotropic medium, the effective interaction constant is divided by the medium's relative permittivity. Always check the problem statement to determine whether the charges are in vacuum, air (where the relative permittivity is approximately 1 and the correction is negligible), or another medium.

**Contrast mini-example**

Two opposite-sign charges in water (relative permittivity equal to 80) have an interaction energy roughly 80 times smaller in magnitude than the same charges in vacuum. Ignoring the medium and using vacuum [[k_e]] directly gives a binding energy 80 times overestimated, leading to the prediction that ions would be inseparable in aqueous solution when they actually dissociate easily.

## Mathematical errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Reversing the sign relationship between field work and potential energy change

**Why it seems correct**

The student remembers that "work and energy are related" and writes directly that the field work equals the change in [[energia_potencial_electrica]]. The confusion arises because in mechanics, the work done by a conservative force is the negative of the change in potential energy, but the student omits the negative sign through superficial analogy.

**Why it is incorrect**

The work done by the electric field on the charge is the negative of the change in [[energia_potencial_electrica]]. If [[variacion_de_energia_potencial_electrica]] is positive (potential energy increases), the field did negative work on the charge (it decelerated it or opposed its motion). If [[variacion_de_energia_potencial_electrica]] is negative, the field did positive work (it accelerated the charge). The relation is: work done by the field on the charge is the negative of [[variacion_de_energia_potencial_electrica]].

**Detection signal**

The student finds that a positive charge moving from a high-potential point to a low-potential point lost kinetic energy, when it should have gained it. Or calculates that the field does positive work when the charge moves to a higher potential.

**Conceptual correction**

Remember the rule: when [[variacion_de_energia_potencial_electrica]] decreases, the field does positive work (converts potential energy to kinetic). When [[variacion_de_energia_potencial_electrica]] increases, the field does negative work (the charge needs an external agent to push it). The negative sign in the relationship between work and potential energy change is the hallmark of the field's conservative nature.

**Contrast mini-example**

A positive charge spontaneously moves from a high-potential point to a low-potential point: [[energia_potencial_electrica]] decreases (negative change) and the speed increases. If the sign is confused and the field work is declared negative (equal to [[variacion_de_energia_potencial_electrica]]), the conclusion is that the charge decelerates, directly contradicting the experience that positive charges accelerate in the direction of the field.

## Interpretation errors

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.


### Error 5: Thinking potential energy is an intrinsic property of the isolated charge

**Why it seems correct**

In typical problems, one calculates "the potential energy of charge [[carga_de_prueba]] at point P." This phrasing sounds as if [[energia_potencial_electrica]] belongs to the charge. The cognitive mechanism is an incorrect transfer from everyday language: "the energy of the charge" is interpreted as intrinsic to it, like mass or electric charge.

**Why it is incorrect**

Potential energy is always a property of the system: of the interaction between charge [[carga_de_prueba]] and the field generated by other charges. If there is no external field, the isolated charge [[carga_de_prueba]] has no potential energy. Moving the charge to another field point changes its potential energy, demonstrating that [[energia_potencial_electrica]] is not intrinsic to the charge but depends on its position relative to the rest of the system.

**Detection signal**

The student claims that when moving the charge from one point to another "the charge carries its potential energy with it," or confuses the change in [[energia_potencial_electrica]] with a change in some internal property of the charge.

**Conceptual correction**

Electric potential energy describes the interaction between the charge and its environment. It is as much a property of the charge as of the field: both are needed for it to exist. This system perspective is key to understanding that when a charge moves with the field, its [[energia_potencial_electrica]] decreases and energy is redistributed into kinetic energy or the field—it does not disappear.

**Contrast mini-example**

If potential energy were intrinsic to the charge, moving it to a vacuum region with no field (for example, to a region completely separated from all source charges) should preserve its [[energia_potencial_electrica]]. However, in a field-free vacuum the potential is zero and [[energia_potencial_electrica]] is zero, regardless of the charge value. The potential energy vanishes because the interaction vanishes, not because the charge lost it internally.

## Quick self-control rule

Before declaring a result for [[energia_potencial_electrica]] or [[variacion_de_energia_potencial_electrica]] final, verify the following five points:

1. **Units**: [[energia_potencial_electrica]] must be in joules, not in volts. If the result has units of volts, the multiplication by the charge has been forgotten.
2. **Sign of the charge product**: for the two-point-charge formula, the product [[q_1]]·[[q_2]] determines the energy sign. Equal-sign charges give positive, opposite-sign charges give negative.
3. **Work-energy relation**: the work done by the electric field on the charge is the negative of the change in [[energia_potencial_electrica]], not equal to it.
4. **Distance dependence**: doubling [[r_12]] reduces [[energia_potencial_electrica]] by half in magnitude. If the result changes differently when distance is varied, review the formula used.
5. **Order of magnitude**: verify the result is reasonable for the charges and distances in the problem. Microcoulomb charges at centimeter separations produce energies on the order of microjoules to millijoules, not kilojoules.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.