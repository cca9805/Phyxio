## Conceptual errors


### Error 1: Confusing electric charge with electric current

**Why it seems correct**

The student knows that both quantities involve "electricity" and that current flows through wires that carry charge. The incorrect generalization is that charge and current are the same thing or interchangeable in any context. The everyday water analogy reinforces the confusion: if water is current, what is charge?

**Why it is incorrect**

[[carga_electrica]] is an accumulated quantity; current is the rate of flow of that quantity. They are as different as the volume of water stored in a tank and the flow rate coming out of the tap. A charged capacitor has maximum [[carga_electrica]] and zero current; at the instant of discharging, the current is maximum and [[carga_electrica]] is decreasing. Confusing them produces dimensionally incorrect calculations.

**Detection signal**

The student substitutes amperes where coulombs should be used, or vice versa. Another symptom: the student says "the current is large because the charge is large", without noticing that both can vary independently and that current also depends on time.

**Conceptual correction**

[[carga_electrica]] answers "how much electricity is accumulated?"; current answers "how fast is charge flowing?". The relationship between the two involves time: a large charge can flow slowly (small current) or quickly (large current).

**Contrast mini-example**

A lightning bolt discharges several coulombs in a few milliseconds: the instantaneous current is enormous (order of kiloamperes). A domestic cable carries currents of amperes for hours: the total charge transferred over that time can exceed the lightning bolt's. The cable does not "have more charge" than the lightning at any instant; it simply flows for longer.

---

**Mini-example of contrast**

Check 1: In Electric Charge, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Believing a neutral object has no charge inside

**Why it seems correct**

If an object is neutral, its [[q_neta]] is zero. The student infers that there are no charges inside, because "zero" evokes "absence". This is reinforced by everyday language: "it is not charged" intuitively means "no electricity".

**Why it is incorrect**

A neutral object contains enormous amounts of [[q_pos]] and [[q_neg]] that exactly cancel. One gram of water contains approximately 96 million coulombs of positive charge (protons from hydrogen and oxygen) and the same amount of negative charge (electrons). Neutrality means balance, not absence.

**Detection signal**

The student concludes that a neutral object cannot exert any electric force under any circumstance. This is false at short distances: internal charge distributions generate dipole fields and Van der Waals forces even between neutral objects.

**Conceptual correction**

Electrical neutrality means [[q_neta]] is zero, i.e., [[q_pos]] and [[q_neg]] are equal in magnitude. Charges exist in enormous amounts; they only cancel in the net long-range effect. At short distances, the internal distribution matters.

**Contrast mini-example**

A charged balloon attracts a neutral piece of paper because it induces an internal charge redistribution in the paper: the protons in the paper are drawn slightly closer to the balloon than the electrons, creating a net attraction. Neutrality does not mean electrically inert.

---

## Model errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Applying charge quantization to macroscopic systems with fractional numerical resolution

**Why it seems correct**

The student knows charge is quantized and [[numero_de_cargas_elementales]] must be an integer. When calculating [[numero_de_cargas_elementales]] by dividing [[carga_electrica]] by [[carga_elemental]], the result has many decimal places (for example, n approximately 6.24 times ten to the twelve) and decides it must be rounded to the nearest integer. The error is believing this rounding changes the physical result.

**Why it is incorrect**

For macroscopic charges of the order of microcoulombs or larger, [[numero_de_cargas_elementales]] is of the order of trillions. Rounding to the nearest integer does not affect the physical result in any appreciable way: the relative difference is less than one part in a trillion. The continuous charge model (without explicit quantization) is a perfectly valid approximation at those scales. Forcing the rounding adds no precision; at the other extreme, if [[numero_de_cargas_elementales]] gives a small number with a significant decimal part (e.g., 2.5), there is a real error in the input data.

**Detection signal**

The student reports [[numero_de_cargas_elementales]] with decimal places as the final result of a microscopic charge-quantization problem, or applies quantization to macroscopic charges unnecessarily and makes cumulative rounding errors.

**Conceptual correction**

Charge quantization is relevant when [[numero_de_cargas_elementales]] is small (fewer than a few million). For macroscopic charges, the continuous model is indistinguishable from the discrete one. If [[numero_de_cargas_elementales]] gives a non-integer result in a microscopic context, there is a data error; if macroscopic, the result is correct and the decimal is irrelevant.

**Contrast mini-example**

An isolated electron has [[carga_electrica]] equal to negative [[carga_elemental]] and [[numero_de_cargas_elementales]] exactly minus one. If a Millikan experiment measures a drop with charge equivalent to three elementary charges, [[numero_de_cargas_elementales]] must be exactly three; any deviation indicates experimental error. For a laboratory capacitor with charge of the order of microcoulombs, [[numero_de_cargas_elementales]] is of order ten to the thirteen and the decimal is irrelevant.

---

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Believing charge can be destroyed in neutralization

**Why it seems correct**

When a positive and a negative object neutralize each other, the [[q_neta]] of the system becomes zero. The student interprets this "disappearance of charge" as destruction. The algebraic sum analogy reinforces the error: if we have plus one and minus one and the result is zero, "the charge disappeared".

**Why it is incorrect**

Charge is not destroyed: it is redistributed. When electrons from the negative object flow to the positive one, they exactly compensate the electron deficit of the positive object. Before the process, the total system charge is positive plus negative, which gives zero; afterwards it is also zero. Total charge was conserved throughout.

**Detection signal**

The student writes that "the charge was annulled" or "disappeared" instead of "was redistributed" or "transferred". The student may also mistakenly believe that charge is released into the environment during neutralization.

**Conceptual correction**

Charge conservation is absolute: [[q_neta]] of the universe does not change. In neutralization, charge carriers (electrons) move from one object to another until the balance is zero. The electrons still exist; they just changed location.

**Contrast mini-example**

Two spheres with charges of 5 µC and 5 µC negative are placed in contact; electrons from the negative sphere flow to the positive one until both have zero net charge. The [[q_neta]] of the system before contact was zero (5 minus 5); after contact it remains zero. No charge appeared or disappeared.

---

## Mathematical errors

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.


### Error 5: Adding charge magnitudes instead of doing algebraic sum

**Why it seems correct**

The student sees a system with one charge of 3 µC and another of 2 µC and calculates the total as 5 µC. The operation seems natural because "adding" means combining. The student fails to notice that one charge may be negative and that the sign radically changes the result.

**Why it is incorrect**

[[q_neta]] is calculated as an algebraic sum: [[q_pos]] plus [[q_neg]], where [[q_neg]] is always negative or zero. If there are 3 µC positive and 2 µC negative, the net charge is 1 µC, not 5 µC. Adding magnitudes means ignoring the sign, which is precisely the most important information in electrostatics: it determines whether the interaction is attractive or repulsive.

**Detection signal**

The student obtains a [[q_neta]] larger than either individual charge when the result should be an intermediate value. Or the student calculates the Coulomb force between two objects as if both had the same polarity when they are actually of opposite polarity.

**Conceptual correction**

Assign the correct sign to each charge from the start. Positive charges enter with a positive sign and negative ones with a negative sign. The algebraic sum yields the actual [[q_neta]]. Always verify that the result is physically plausible: if the objects have charges of opposite sign, the [[q_neta]] should be smaller in magnitude than the larger of the two.

**Contrast mini-example**

Two objects with charges of 4 µC and 4 µC negative are combined and [[q_neta]] is distributed equally. The algebraic total is zero; the magnitude sum would give 8 µC, implying charge doubled on contact — a blatant violation of conservation.

---

## Interpretation errors

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 6: Interpreting negative charge as "less electricity" than positive charge

**Why it seems correct**

In everyday language, negative sounds like "less", "lacking", something inferior. The student transfers this cultural meaning to physics and concludes that an object with negative [[carga_electrica]] has "less electricity" than one with the same positive [[carga_electrica]]. This leads to errors in force analysis.

**Why it is incorrect**

Positive and negative [[carga_electrica]] are symmetric in magnitude: an electron with negative [[carga_electrica]] of value [[carga_elemental]] has exactly the same effect in magnitude as a proton with positive [[carga_electrica]] of the same value. The sign only indicates the type of carrier and the direction of the force (attraction or repulsion), not its intensity. Two charges equal in magnitude but opposite in sign exert forces of equal magnitude on each other.

**Detection signal**

The student calculates the force between two objects using only the magnitude of one charge and ignoring the sign of the other, or concludes that the interaction between a large-magnitude negative charge and a small positive charge is weaker than between two small positive charges of the same absolute magnitude.

**Conceptual correction**

The magnitude of [[carga_electrica]] determines the strength of the interaction; the sign determines its direction. Charges of opposite sign attract with the same strength as same-sign charges repel. What changes is only the direction of the force, never its magnitude if the charge magnitudes are equal.

**Contrast mini-example**

A proton and an electron separated by the same distance as two protons experience forces of equal magnitude. The proton-electron pair attracts; the proton-proton pair repels, but the intensity is identical in both cases if the distance and charge magnitudes are the same.

---

## Quick self-control rule

Before accepting any result for [[carga_electrica]] or [[numero_de_cargas_elementales]], verify these four conditions:

1. **Correct sign**: the object that gave up electrons became positive; the one that gained electrons became negative. If the sign does not match this rule, review the calculation.
2. **Integer [[numero_de_cargas_elementales]]**: if [[numero_de_cargas_elementales]] is fractional in an elementary-charge context, there is a units or data error.
3. **Conservation**: add algebraically the initial and final [[carga_electrica]] of the system. If they differ in an isolated system, there is a setup error.
4. **Reasonable scale**: for everyday objects, charge is in the range of nanocoulombs to microcoulombs. A result in coulombs for an ordinary laboratory scenario is suspicious.

**Mini-example of contrast**

Check 6: In Electric Charge, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.