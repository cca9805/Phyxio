const e=`# Exam-type example

## Problem statement

A parallel-plate capacitor has a plate separation of 4 mm and a uniform electric field of 2.5×10⁴ N/C directed from the positive plate to the negative plate. An electron starts from rest at the negative plate. Determine the potential difference between the plates, the work done by the electric field as the electron moves from plate to plate, and the electron's speed upon reaching the positive plate. Justify the sign of the work and discuss whether the result would differ for a proton under the same conditions.

## Data

- Plate separation: 4 mm (equivalent to 4×10⁻³ m)
- Uniform electric field [[E_unif]]: 2.5×10⁴ N/C
- Electron charge: 1.6×10⁻¹⁹ C (negative, so [[q]] of the electron is −1.6×10⁻¹⁹ C)
- Electron mass: 9.11×10⁻³¹ kg
- The electron starts from rest at the negative plate

## System definition

The system is a flat capacitor with uniform field [[E_unif]] between the plates. We define point A as the initial position of the electron (negative plate) and point B as the positive plate. The field direction is from the positive plate (higher potential) to the negative plate (lower potential), so A is at lower potential than B.

The separation [[d_AB]] equals the plate separation measured along the field direction: 4×10⁻³ m. The electron moves from A (negative plate, lower potential) to B (positive plate, higher potential), that is, opposite to the field direction.

## Physical model

The model is uniform electric field between parallel plates. The formula applied is:

{{f:diferencia_potencial_campo_uniforme}}

And for the work:

{{f:diferencia_potencial_trabajo}}

Hypotheses: uniform field (valid for a capacitor with plates large compared to separation), electrostatic regime, and negligible fringe field outside the capacitor.

## Model justification

Field uniformity is the key hypothesis. For an ideal flat capacitor with large plates, the field between them is uniform and perpendicular to the plates. The separation of 4 mm is much smaller than the typical plate dimensions, so fringe effects are negligible and the model is valid.

## Symbolic solution

**Potential difference between plates:**

The potential difference [[V_AB]] between the negative plate (A) and the positive plate (B) is obtained using the uniform field formula. The displacement from A to B is opposite to the field, so the potential difference is negative (potential at A is lower than at B).

{{f:diferencia_potencial_campo_uniforme}}

**Work done by the field on the electron:**

Work is obtained from the product of charge [[q]] and potential difference [[V_AB]]:

{{f:diferencia_potencial_trabajo}}

**Final electron speed:**

Applying the work-kinetic energy theorem: field work equals the change in kinetic energy. Final speed is obtained from the kinetic expression.

## Numerical substitution

**Potential difference:**

Multiplying [[E_unif]] by [[d_AB]]: 2.5×10⁴ × 4×10⁻³ gives 100 J/C. Since displacement A→B is opposite to the field, the potential difference [[V_AB]] between the negative and positive plates takes the value −100 V (potential at A is 100 V less than at B).

Conventionally, the capacitor potential difference is defined as the difference between the positive and negative plates, which is positive: the field between plates of a 100 V capacitor is 2.5×10⁴ N/C. That is the value of [[V_AB]] taking B as the positive plate and A as the negative plate.

**Work done by the field on the electron:**

The electron charge is −1.6×10⁻¹⁹ C. Multiplying by the potential difference of −100 V, the product of the two negatives gives a positive work of 1.6×10⁻¹⁷ J. Therefore [[W_AB]] takes the value of 1.6×10⁻¹⁷ J, indicating the field drives the electron toward the positive plate.

**Final speed:**

Equating [[W_AB]] to the kinetic energy change (half the product of mass times speed squared) and solving for speed: the speed squared is 2 times 1.6×10⁻¹⁷ J divided by 9.11×10⁻³¹ kg, giving 3.51×10¹³ m²/s². The square root yields a final speed near 5.93×10⁶ m/s.

## Dimensional validation

Potential difference [[V_AB]]: the product N/C times metres yields N·m/C, that is J/C, which is the volt \`[M L² T⁻³ I⁻¹]\` ✓

Work [[W_AB]]: the product of coulombs and volts yields joules \`[M L² T⁻²]\` ✓

Speed: dividing work by mass (J/kg) gives m²/s²; the square root gives m/s \`[L T⁻¹]\` ✓

## Physical interpretation

The positive result for [[W_AB]] confirms that the electric field does positive work on the electron as it moves from the negative to the positive plate. Although the electron has negative charge and moves opposite to the field, the work is positive because both factors—the sign of [[q]] and the sign of [[V_AB]]—are negative, and their product is positive.

Physically, the electron is attracted to the positive plate and repelled by the negative plate: the electric force acts in the direction of the electron's motion, accelerating it. This is consistent with the positive work calculated.

For a proton under the same conditions, the charge would be positive: the field would decelerate it moving from the negative to the positive plate (negative work). The proton would be accelerated in the opposite direction, from the positive to the negative plate. Note that [[V_BA]] has the opposite sign to [[V_AB]]: reversing the order of the points reverses the sign of the result.

---

# Real-world example

## Context

**Cathode ray tubes** (CRT), used in oscilloscopes, older monitors and analogue televisions, accelerate electrons through potential differences between electrodes. The electron beam is steered with precision toward the screen to create the displayed image or signal.

The principle is exactly what is studied in this leaf: a potential difference accelerates the electrons, and the kinetic energy they acquire determines the brightness and resolution of the image. Designing the acceleration system requires precisely computing the beam speed as a function of the applied potential difference.

## Physical estimation

In a laboratory oscilloscope, electrons are accelerated by a typical potential difference of 1 kV. We consider an electron starting from rest and accelerated by this potential difference.

The electron charge is 1.6×10⁻¹⁹ C and its mass is 9.11×10⁻³¹ kg. The work done by the field on the electron crossing a potential difference of 1 kV is the product of the charge by the potential difference: 1.6×10⁻¹⁹ × 1000, giving 1.6×10⁻¹⁶ J. That is the value of [[W_AB]].

Equating this work to kinetic energy, the square of the speed is 2 × 1.6×10⁻¹⁶ / 9.11×10⁻³¹, near 3.51×10¹⁴ m²/s². The final speed is the square root of that, near 1.87×10⁷ m/s, approximately 6 % of the speed of light.

## Interpretation

This result illustrates the extraordinary efficiency of electric fields in accelerating light particles. An electron accelerated by only 1 kV already reaches 6 % of the speed of light, enabling high-precision image formation on the oscilloscope screen.

The analysis with potential difference also shows that doubling [[V_AB]] does not double the speed: it doubles the kinetic energy, and speed grows as the square root of [[V_AB]]. This explains why reaching relativistic speeds requires potential differences of hundreds of kilovolts, which underlies the design of high-energy electron accelerators.
`;export{e as default};
