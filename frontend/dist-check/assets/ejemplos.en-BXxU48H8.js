const e=`# Exam-type example

## Problem statement

A proton (charge 1.6×10⁻¹⁹ C, mass 1.67×10⁻²⁷ kg) starts from rest at point A, where the electric potential is 400 V, and moves to point B, where the electric potential is 100 V. The electric field between A and B is conservative. Calculate the electric potential energy of the proton at A and at B, the change in potential energy when moving from A to B, the work done by the electric field during the displacement, and the speed of the proton on reaching B.

## Data

- Proton charge: 1.6×10⁻¹⁹ C
- Proton mass: 1.67×10⁻²⁷ kg
- Potential at point A: 400 V
- Potential at point B: 100 V
- Initial speed at A: the proton starts from rest

## System definition

The system consists of the proton (charge [[q]]) and the external electric field that produces the potentials [[V_A]] at point A and [[V_A]] at point B. The proton is the test charge whose potential energy and speed are calculated. Relativistic effects are not considered (the expected proton speed is much less than the speed of light), nor are additional external forces (only the electric force acts). The reference convention for potential energy follows the problem: the potentials 400 V and 100 V are given relative to the field's reference zero.

## Physical model

The model applied is that of a point charge [[q]] in a conservative electrostatic field. The potential energy [[U_e]] of the proton at any point is the product of its charge and the potential at that point. The change in potential energy [[DeltaU_e]] when going from A to B is the difference between the final and initial energies. The field work is the negative of [[DeltaU_e]]. Conservation of mechanical energy yields the final speed from the field work, since no other forces act.

## Model justification

The model is valid because the proton can be treated as a point charge at the scales of the problem, the field is conservative (electrostatic), and the expected speed is non-relativistic. The model would fail if the field varied in time (non-conservative) or if the proton's speed reached an appreciable fraction of the speed of light.

## Symbolic solution

The potential energy of the proton at point A is obtained by applying:

{{f:energia_potencial_punto}}

The value at A uses the potential [[V_A]] at that point and the proton charge [[q]]. The energy at B is obtained from the same formula with the potential corresponding to point B.

The change in potential energy when going from A to B follows the definition:

{{f:variacion_energia_potencial}}

The difference is [[DeltaU_e]], obtained by subtracting the initial energy from the final energy. The work done by the electric field on the proton during the displacement is the negative of [[DeltaU_e]].

By conservation of mechanical energy (no additional external forces), the kinetic energy gained by the proton equals the field work, which in turn equals the negative of [[DeltaU_e]]. Starting from rest, the final kinetic energy equals that work. The proton's speed at B is then derived from the final kinetic energy.

## Numerical substitution

Potential energy at A: the proton charge is 1.6×10⁻¹⁹ C and the potential at A is 400 V. Multiplying both values gives [[U_e]] at A of approximately 6.4×10⁻¹⁷ J.

Potential energy at B: the potential at B is 100 V. Multiplying by the same charge gives [[U_e]] at B of approximately 1.6×10⁻¹⁷ J.

Change in potential energy: subtracting energy at B minus energy at A, [[DeltaU_e]] is approximately −4.8×10⁻¹⁷ J. The negative sign confirms that the proton's potential energy decreased when moving from A to B.

Field work: the work done by the field on the proton is the negative of [[DeltaU_e]], approximately 4.8×10⁻¹⁷ J. The field did positive work on the proton, consistent with the proton moving from higher to lower potential (the electric force on a positive charge points from higher to lower potential).

Speed at B: the kinetic energy at B equals the field work (starting from rest). Dividing twice that energy by the proton mass and taking the square root gives the speed. With 4.8×10⁻¹⁷ J and mass 1.67×10⁻²⁷ kg, the proton's speed at B is approximately 2.4×10⁵ m/s. This is 0.08 % of the speed of light, confirming the non-relativistic treatment is valid.

## Dimensional validation

- Potential energy: multiplying coulombs by volts gives joules. The volt can be expressed as joule per coulomb, so the product \`[C]·[J/C]\` yields \`[J]\`. Correct.
- Work: same units as energy, \`[J]\`. Correct.
- Speed: the square root of \`[J/kg]\` gives \`[m/s]\`, since the joule decomposes as \`[kg·m²·s⁻²]\`. Correct.

## Physical interpretation

The proton gained approximately 4.8×10⁻¹⁷ J of kinetic energy as it moved from point A to point B. This physically means that the decrease in [[U_e]] was converted entirely into kinetic energy — consistent with the conservative nature of the electric field. The proton moved from higher to lower potential: the electric force on a positive charge points in the direction of decreasing potential, therefore the field did positive work and [[U_e]] decreased by 4.8×10⁻¹⁷ J.

The fact that the potential at A is four times that at B quantitatively explains the result: the 300 V potential difference multiplied by the proton charge directly gives the field work. This illustrates the power of the energy approach: it was not necessary to know the trajectory or the field distribution between A and B to calculate the final speed.

If the potential at A were less than at B (the proton moving from low to high potential), the proton would need initial kinetic energy to reach B, and its speed would decrease rather than increase. This is exactly the behavior of protons in linear accelerators, where they are taken from low to high potential to gain kinetic energy by accelerating them in the opposite direction.

---

# Real-world example

## Context

In a cathode ray tube—the technology used in analog televisions and oscilloscopes—electrons are accelerated from a cathode to a phosphorescent screen through a potential difference of several kilovolts. The energy the electric field transfers to the electrons determines the speed at which they strike the screen and therefore the luminous intensity of the dot they produce.

A typical cathode ray tube television operated with an accelerating voltage of 20 kV. An electron (charge −1.6×10⁻¹⁹ C, mass 9.11×10⁻³¹ kg) starts essentially from rest at the cathode, which is at the lowest potential (reference zero). The anode is at 20 000 V. The goal is to estimate the electron's speed at the screen and verify whether the non-relativistic treatment is adequate.

## Physical estimation

Before analyzing the cathode ray tube, consider two point test charges: [[q_1]] is the emitting electron at the cathode, with charge [[q_1]] equal to −1.6×10⁻¹⁹ C, and a second reference charge [[q_2]] at a distance [[r_12]] of 1 nm. The interaction energy between them is obtained by applying:

{{f:energia_interaccion_coulomb}}

With [[k_e]] equal to 8.99×10⁹ N·m²·C⁻², the product [[q_1]]·[[q_2]] determines the sign of the interaction and [[r_12]] sets its scale. For a positive charge [[q_2]] equal to 1.6×10⁻¹⁹ C at 1 nm separation, [[U_e]] is approximately −2.3×10⁻¹⁰ J (attractive interaction). This value, roughly 1400 times larger in magnitude than thermal energy at room temperature (order of 4×10⁻²¹ J), confirms that electrostatic forces dominate at the atomic scale.

The potential difference between anode and cathode is 20 000 V. The electron has negative charge: moving from the cathode (low potential, reference zero) toward the anode (high potential, 20 000 V), the potential increases. The change in [[U_e]] of the electron is the product of its charge (negative) by the potential difference: [[DeltaU_e]] is approximately −1.6×10⁻¹⁹ C times 20 000 V, giving approximately −3.2×10⁻¹⁵ J. The change is negative, meaning the electron's potential energy decreases.

By conservation of energy, the kinetic energy gained by the electron is approximately 3.2×10⁻¹⁵ J (equal in magnitude to the decrease in [[U_e]]). This corresponds to 20 000 eV, or 20 keV. Starting from rest with mass 9.11×10⁻³¹ kg, the estimated speed is approximately 8.4×10⁷ m/s, about 28 % of the speed of light. At this speed, the relativistic correction is significant (around 4 %) but the non-relativistic result serves as an order-of-magnitude estimate. In actual cathode ray tube engineering calculations, the relativistic formula is used to obtain the exact speed.

The impact speed of the electrons directly determines the energy deposited in the phosphor and thus the brightness of the image. Doubling the accelerating voltage does not double the speed (the increase follows a square root), but it does quadruple the kinetic energy. This allows adjusting the screen brightness by precisely controlling the accelerating voltage.

## Interpretation

This example shows that the concept of [[U_e]] and its conversion to kinetic energy has direct application in display technology. The same formula involving [[k_e]], [[q_1]] and [[q_2]] that governs point-charge interaction at the atomic scale is formally identical to that describing potential energy in macroscopic devices: only the scale of [[r_12]] and the charge values differ. The speed of electrons in a cathode ray tube is not calculated by integrating the electric force along the trajectory (which would be complicated by the tube geometry) but by directly applying conservation of energy: the change in [[U_e]] provides all the necessary information.

The fact that [[DeltaU_e]] is negative for the electron moving toward the anode—even though the potential increases—physically means that the electron's stored energy decreases and therefore that decrease is converted entirely into kinetic energy. This is consistent with the general principle: a negative [[DeltaU_e]] always indicates that the charge has moved to a more energetically favorable configuration. Understanding this sign is essential for correctly designing any particle acceleration device.
`;export{e as default};
