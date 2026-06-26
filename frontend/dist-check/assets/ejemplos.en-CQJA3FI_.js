const e=`# Exam-type example

## Problem statement

An electrician works in a domestic electrical panel with slightly sweaty hands. He accidentally touches a 230 V AC phase conductor with his left hand while his right foot is in contact with a concrete floor. The installation has a 30 mA residual current device (RCD).

a) Calculate the current that will flow through the electrician's body at the moment of contact, using the normative body resistance value for wet conditions.

b) Determine whether the 30 mA differential protects the electrician in this scenario, calculating the protection margin.

c) Explain what would change if the differential were 10 mA and reason which is more appropriate for this situation.

d) Calculate the physiological safety ratio to quantitatively evaluate the direct biological risk on the human body.

## Data

- Contact voltage: [[V_contacto]] = 230 V AC
- Body resistance (wet conditions, IEC 60479 standard): [[R_cuerpo]] = 1,000 Ω
- Installed differential threshold: [[I_diferencial]] of 30 mA (0.030 A)
- Alternative differential threshold: [[I_diferencial]] of 10 mA (0.010 A)
- Ventricular fibrillation threshold: [[I_segura]] = 30 mA
- Physiological safety ratio to evaluate: [[ratio_seguridad]]

## System definition

The system is the electrical circuit formed by the grid phase (230 V), the electrician's body as an equivalent resistance of 1000 Ω, and the current return through the concrete floor to the grid neutral. The body acts as a resistance connected between phase and ground.

## Physical model

The ideal resistive model of electrical safety is applied, which treats the human body as a constant pure resistance [[R_cuerpo]] during contact. The fundamental relationship is Ohm's Law applied to the contact circuit:

{{f:corriente_corporal}}

Protection is quantified through the margin between the differential threshold and body current:

{{f:margen_proteccion}}

The physiological safety ratio directly relates the resulting body current to the maximum admissible biological safety current:

{{f:ratio_seguridad}}

## Model justification

The pure resistive model is valid because the frequency is 50 Hz (IEC 60479 nominal range), the voltage is the standard domestic grid voltage, and the contact time is brief (the analysis is of the initial moment of contact). The value of 1000 Ω is the normative worst case for wet conditions: protections designed with this value cover all cases of skin with moderate to high humidity.

The model would cease to be valid if contact lasted more than 1 second, because body resistance decreases with progressive burns. For instantaneous safety analysis, the static model is appropriate.

## Symbolic solution

Applying the body current formula:

{{f:corriente_corporal}}

Body current is [[V_contacto]] divided by [[R_cuerpo]].

For the protection margin:

{{f:margen_proteccion}}

The margin with the 30 mA differential is [[I_diferencial]] (0.030 A) divided by [[I_cuerpo]]. With the 10 mA differential the numerator changes to 0.010 A.

To evaluate direct physiological risk quantitatively, we use the safety ratio:

{{f:ratio_seguridad}}

The ratio is calculated by dividing [[I_cuerpo]] by [[I_segura]].

## Numerical substitution

**Part a — Body current:**

Dividing contact voltage (230 V) by body resistance (1000 Ω) gives the current. The result is 0.230 A. Therefore [[I_cuerpo]] ≈ 230 mA.

**Part b — Margin with 30 mA differential:**

Dividing the differential threshold (0.030 A) by the calculated body current (0.230 A) gives a quotient of 0.130. Therefore [[margen]] ≈ 0.13.

The margin is **below 1**, indicating the 30 mA differential does not provide protection in this scenario: the body current of 230 mA greatly exceeds the 30 mA trip threshold. The differential would trip (230 mA > 30 mA), but the problem is that vital risk already exists before tripping, and the time it takes to trip may be sufficient to cause fibrillation.

**Part c — Margin with 10 mA differential:**

Dividing 0.010 A by 0.230 A gives a quotient of 0.043. Therefore [[margen]] ≈ 0.043.

The margin remains below 1. Even with a 10 mA differential, the body current of 230 mA exceeds the 10 mA threshold. In this extreme scenario (direct contact with phase, wet hands), no conventional differential can guarantee protection solely through its current threshold: response time and elimination of contact are the determining factors.

**Part d — Physiological safety ratio:**

Dividing the calculated body current (0.230 A) by the maximum safety current (0.030 A) gives the safety ratio:

the value obtained for [[ratio_seguridad]] is approximately 7.67 (result of dividing 0.230 by 0.030).

Since [[ratio_seguridad]] is much greater than 1 (specifically, 7.67), the scenario is extremely dangerous. The actual current crossing the heart exceeds the safe biological threshold by more than 7 times.

## Dimensional validation

- Body current: The voltage in volts divided by resistance in ohms gives the current in amperes. Dimensionally, \`[V] / [Ω]\` corresponds to \`[M L² T⁻³ I⁻¹] / [M L² T⁻³ I⁻²]\`, which simplifies to \`[I]\`, measured in amperes (A) ✓
- Protection margin: The quotient of two current intensities (amperes divided by amperes) \`[A] / [A]\` cancels out, resulting in a dimensionless value ✓
- Physiological safety ratio: The ratio of calculated body current to safe limit current, being a division of two currents in amperes \`[A] / [A]\`, results in a purely dimensionless magnitude ✓

## Physical interpretation

The result of 230 mA is nearly 8 times the ventricular fibrillation threshold of 30 mA. On the left hand-to-feet path crossing the heart, this current would almost certainly produce ventricular fibrillation in any exposure exceeding 30 ms. The 30 mA differential would trip —the 230 mA current exceeds its threshold— but the time elapsed from contact to tripping (typically 20–40 ms for standard differentials) may be sufficient to initiate fibrillation.

This scenario implies that effective electrical protection does not depend solely on the differential threshold, but also on its response time and, above all, on eliminating the conditions that generate such high body currents: working live with wet hands is a high-risk practice requiring personal protective equipment specifically rated for electrical work.

If [[R_cuerpo]] were 10,000 Ω (dry skin), the resulting current would be 23 mA, below the fibrillation threshold although in the tetanization zone. In that case, the 30 mA differential provides a [[margen]] of 30/23 ≈ 1.3, which therefore ensures effective protection with sufficient response time. This demonstrates how much risk depends on skin conditions.

---

# Real-world example

## Context

A home with a 20-year-old electrical installation presents occasional trips of the 30 mA main differential. The installer must evaluate whether the installation is safe for the occupants and whether the protection level is adequate for wet areas (bathroom and kitchen), where residents spend several hours daily.

## Physical estimation

The accumulated leakage current of the installation is estimated at 15 mA (cables with aged insulation and several appliances with filter capacitors). This consumes 50% of the 30 mA differential threshold, leaving only 15 mA of margin for accidental contact.

In the bathroom, with [[R_cuerpo]] estimated at 800 Ω (wet skin after showering), direct contact with a 230 V phase would produce [[I_cuerpo]] = 230/800 ≈ 288 mA. This value massively exceeds the 30 mA threshold, and the current already exceeds the residual 15 mA margin available, so the differential would trip at any additional leakage above 15 mA, including body contact itself.

The normative threshold for wet areas (IEC 60364-7-701) is a 10 mA differential, not 30 mA. With 30 mA and 15 mA of accumulated leakage, effective protection for the bathroom is reduced to practically zero.

## Interpretation

The installation presents two overlapping problems. First, the accumulated leakage level of 15 mA indicates insulation degradation: aged cables that must be inspected before leakage increases to levels causing continuous trips. Second, the 30 mA differential for the bathroom does not comply with current regulations, which require 10 mA in areas with bathtub or shower.

The corrective action is to replace the bathroom circuit differential with a 10 mA one and find and repair the insulation leaks. The 30 mA differential can be maintained for general circuits if accumulated leakage is reduced below 10 mA by repairing the insulation.
`;export{e as default};
