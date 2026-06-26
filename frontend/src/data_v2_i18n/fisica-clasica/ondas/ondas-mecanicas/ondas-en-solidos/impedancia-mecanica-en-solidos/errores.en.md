## Conceptual errors


### Error 1: Confusing mechanical impedance with specific acoustic impedance

**Why it seems correct**

Both quantities are called "impedance" and contain the product ρ·c. The student generalises that they are the same and uses them interchangeably, since many texts present them without clear distinction.

**Why it is incorrect**

Specific acoustic impedance z = ρ·c relates pressure to velocity and is measured in Pa·s/m (rayl). Mechanical impedance [[impedancia_mecanica]] = ρ·c·A relates total force to velocity and is measured in kg/s. Ignoring [[area_de_la_seccion_transversal]] means ignoring geometry, which produces errors of several orders of magnitude when calculating [[coeficiente_de_reflexion_en_amplitud]] for bars of different cross-section.

**Detection signal**

The result for [[impedancia_mecanica]] has the same units as acoustic impedance (Pa·s/m) instead of kg/s, or the calculation includes no geometric data.

**Conceptual correction**

Mechanical impedance includes the area because it works with total force, not pressure. [[impedancia_mecanica]] = [[rho]] · [[c_s]] · [[area_de_la_seccion_transversal]]. Always verify that result units are kg/s and that the cross-sectional area appears in the calculation.

**Mini contrast example**

Two bars of the same steel: one of 1 cm² and another of 10 cm². If only the specific impedance (ρ·c) is calculated, both give approximately 46 MRayl. But their mechanical impedances are 4600 kg/s and 46000 kg/s respectively. At a joint between them, the specific impedance model predicts zero reflection (same material), but reality gives [[coeficiente_de_reflexion_en_amplitud]] of approximately 0.82 because the sections are different.

**Mini-example of contrast**

Check 1: In Mechanical Impedance in Solids, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Believing [[coeficiente_de_transmision_en_amplitud]] cannot exceed 1

**Why it seems correct**

In everyday experience, transmission is associated with a percentage from 0% to 100%. The student extrapolates that T must be between 0 and 1, as happens with energy transmission.

**Why it is incorrect**

[[coeficiente_de_transmision_en_amplitud]] is the transmission coefficient in **velocity amplitude**, not energy. Transmitted power is P_t = ½ Z₂ T² v², not ½ Z₁ T² v². When Z₂ < Z₁, transmitted velocity can be greater than incident without violating energy conservation because power also depends on Z₂.

**Detection signal**

The student discards results with [[coeficiente_de_transmision_en_amplitud]] > 1 as "impossible" or artificially adds a correction factor.

**Conceptual correction**

Energy conservation states: R² + (Z₁/Z₂)·T² = 1 (in powers). The factor Z₁/Z₂ allows T > 1 when Z₂ < Z₁. Energy is conserved because the softer receiving medium has lower impedance and its contribution to power is less per unit velocity.

**Mini contrast example**

Wave from steel (Z₁ = 46000 kg/s) to rubber (Z₂ = 500 kg/s): [[coeficiente_de_transmision_en_amplitud]] = 2·500/(500+46000) ≈ 0.021. Wave from rubber to steel: [[coeficiente_de_transmision_en_amplitud]] = 2·46000/(46000+500) ≈ 1.98. The second case gives T > 1, but transmitted power satisfies conservation.

## Model errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Applying the reflection formula to oblique incidence

**Why it seems correct**

The formula [[coeficiente_de_reflexion_en_amplitud]] = (Z₂ - Z₁)/(Z₂ + Z₁) is elegant and appears universal. The student applies it to any geometry without considering it was derived under normal incidence assumptions.

**Why it is incorrect**

With oblique incidence, mode conversion appears: an incident longitudinal wave generates longitudinal and transverse waves both reflected and transmitted. Coefficients depend on angle through Zoeppritz equations, not the simple impedance formula.

**Detection signal**

The student obtains a single reflection coefficient for an oblique geometry, without mentioning reflected or transmitted transverse waves.

**Conceptual correction**

The simple formula only holds for normal incidence (θ = 0°). For non-zero angles, use Zoeppritz equations that consider four waves (reflected L, reflected T, transmitted L, transmitted T) and continuity of displacements and stresses at the interface.

**Mini contrast example**

At normal incidence steel-aluminium, R ≈ 0.46 and there is no transverse wave. At 45° incidence, the reflected longitudinal wave may have R ≈ 0.1 and a significant reflected transverse wave appears. The sum of energies of all four waves gives 1, not the simple sum R² + T² = 1 from the normal model.

## Mathematical errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Inverting Z₁ and Z₂ in the [[coeficiente_de_reflexion_en_amplitud]] formula

**Why it seems correct**

The formula appears symmetric and the student may not remember which is the incident medium and which the receiver, or may confuse the sign convention.

**Why it is incorrect**

The convention is [[coeficiente_de_reflexion_en_amplitud]] = (Z₂ - Z₁)/(Z₂ + Z₁), where Z₁ is the medium from which the wave arrives. Inverting gives the negative of [[coeficiente_de_reflexion_en_amplitud]], which inverts the predicted reflection sign and the interface interpretation.

**Detection signal**

The sign of [[coeficiente_de_reflexion_en_amplitud]] is inconsistent with physics: a softer medium is predicted where a stiffer one should be, or vice versa.

**Conceptual correction**

Z₁ is always the impedance of the medium from which the wave **is incident**. Z₂ is the impedance of the medium towards which the wave attempts to propagate. If R > 0, the receiving medium is stiffer; if R < 0, it is softer.

**Mini contrast example**

Wave travelling from aluminium (impedance 17000 kg/s) to steel (impedance 46000 kg/s): with the correct convention, [[coeficiente_de_reflexion_en_amplitud]] gives +0.46. If the media are swapped in the formula, the result is −0.46. The first result (positive) is correct because steel is stiffer than aluminium.

## Interpretation errors

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.


### Error 5: Interpreting total reflection as energy loss

**Why it seems correct**

Energy "does not pass" to the other side, so the student concludes it is lost. In everyday life, reflection is associated with dissipation (impact against a wall).

**Why it is incorrect**

Reflection returns energy to the original medium; it is not dissipated. Energy continues to exist as a reflected wave. Real loss occurs only if the material is dissipative (viscoelastic) or if there is lateral dispersion.

**Detection signal**

The student describes total reflection (when [[coeficiente_de_reflexion_en_amplitud]] equals 1) as "all energy is lost" or "there is no energy after the interface" instead of "all energy returns to medium 1".

**Conceptual correction**

Total reflection (|[[coeficiente_de_reflexion_en_amplitud]]| = 1) means all energy returns to the incident medium as a reflected wave. There is no loss: energy changes direction, it does not disappear. Only absorption (imaginary part of Z) destroys mechanical energy by converting it to heat.

**Mini contrast example**

Steel bar with free end (zero impedance at the end): [[coeficiente_de_reflexion_en_amplitud]] equals −1 and the wave returns inverted with the same energy. If a sensor is placed at the start, it measures double the amplitude (outgoing plus return). There is no loss; energy oscillates between both ends indefinitely if there is no attenuation.

## Quick self-control rule

Before accepting an impedance and reflection calculation, verify:
1. [[impedancia_mecanica]] has units of kg/s (not Pa·s/m or kg/m²s).
2. |[[coeficiente_de_reflexion_en_amplitud]]| ≤ 1 always.
3. [[coeficiente_de_transmision_en_amplitud]] = 1 + [[coeficiente_de_reflexion_en_amplitud]] (consistency relation).
4. R²·Z₁ + T²·Z₂ = Z₁ (power balance at the interface).
5. If both media are identical, [[coeficiente_de_reflexion_en_amplitud]] must be zero and [[coeficiente_de_transmision_en_amplitud]] must be one.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.