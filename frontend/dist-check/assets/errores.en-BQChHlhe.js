const e=`## Conceptual errors

### Error 1: Confusing mechanical impedance with specific acoustic impedance

**Why it seems correct**

Both quantities are called "impedance" and contain the product ρ·c. The student generalises that they are the same and uses them interchangeably, since many texts present them without clear distinction.

**Why it is incorrect**

Specific acoustic impedance z = ρ·c relates pressure to velocity and is measured in Pa·s/m (rayl). Mechanical impedance [[Z_mec]] = ρ·c·A relates total force to velocity and is measured in kg/s. Ignoring [[A_sec]] means ignoring geometry, which produces errors of several orders of magnitude when calculating [[R_Z]] for bars of different cross-section.

**Detection signal**

The result for [[Z_mec]] has the same units as acoustic impedance (Pa·s/m) instead of kg/s, or the calculation includes no geometric data.

**Conceptual correction**

Mechanical impedance includes the area because it works with total force, not pressure. [[Z_mec]] = [[rho]] · [[c_s]] · [[A_sec]]. Always verify that result units are kg/s and that the cross-sectional area appears in the calculation.

**Mini contrast example**

Two bars of the same steel: one of 1 cm² and another of 10 cm². If only the specific impedance (ρ·c) is calculated, both give approximately 46 MRayl. But their mechanical impedances are 4600 kg/s and 46000 kg/s respectively. At a joint between them, the specific impedance model predicts zero reflection (same material), but reality gives [[R_Z]] of approximately 0.82 because the sections are different.

### Error 2: Believing [[T_Z]] cannot exceed 1

**Why it seems correct**

In everyday experience, transmission is associated with a percentage from 0% to 100%. The student extrapolates that T must be between 0 and 1, as happens with energy transmission.

**Why it is incorrect**

[[T_Z]] is the transmission coefficient in **velocity amplitude**, not energy. Transmitted power is P_t = ½ Z₂ T² v², not ½ Z₁ T² v². When Z₂ < Z₁, transmitted velocity can be greater than incident without violating energy conservation because power also depends on Z₂.

**Detection signal**

The student discards results with [[T_Z]] > 1 as "impossible" or artificially adds a correction factor.

**Conceptual correction**

Energy conservation states: R² + (Z₁/Z₂)·T² = 1 (in powers). The factor Z₁/Z₂ allows T > 1 when Z₂ < Z₁. Energy is conserved because the softer receiving medium has lower impedance and its contribution to power is less per unit velocity.

**Mini contrast example**

Wave from steel (Z₁ = 46000 kg/s) to rubber (Z₂ = 500 kg/s): [[T_Z]] = 2·500/(500+46000) ≈ 0.021. Wave from rubber to steel: [[T_Z]] = 2·46000/(46000+500) ≈ 1.98. The second case gives T > 1, but transmitted power satisfies conservation.

## Model errors

### Error 3: Applying the reflection formula to oblique incidence

**Why it seems correct**

The formula [[R_Z]] = (Z₂ - Z₁)/(Z₂ + Z₁) is elegant and appears universal. The student applies it to any geometry without considering it was derived under normal incidence assumptions.

**Why it is incorrect**

With oblique incidence, mode conversion appears: an incident longitudinal wave generates longitudinal and transverse waves both reflected and transmitted. Coefficients depend on angle through Zoeppritz equations, not the simple impedance formula.

**Detection signal**

The student obtains a single reflection coefficient for an oblique geometry, without mentioning reflected or transmitted transverse waves.

**Conceptual correction**

The simple formula only holds for normal incidence (θ = 0°). For non-zero angles, use Zoeppritz equations that consider four waves (reflected L, reflected T, transmitted L, transmitted T) and continuity of displacements and stresses at the interface.

**Mini contrast example**

At normal incidence steel-aluminium, R ≈ 0.46 and there is no transverse wave. At 45° incidence, the reflected longitudinal wave may have R ≈ 0.1 and a significant reflected transverse wave appears. The sum of energies of all four waves gives 1, not the simple sum R² + T² = 1 from the normal model.

## Mathematical errors

### Error 4: Inverting Z₁ and Z₂ in the [[R_Z]] formula

**Why it seems correct**

The formula appears symmetric and the student may not remember which is the incident medium and which the receiver, or may confuse the sign convention.

**Why it is incorrect**

The convention is [[R_Z]] = (Z₂ - Z₁)/(Z₂ + Z₁), where Z₁ is the medium from which the wave arrives. Inverting gives the negative of [[R_Z]], which inverts the predicted reflection sign and the interface interpretation.

**Detection signal**

The sign of [[R_Z]] is inconsistent with physics: a softer medium is predicted where a stiffer one should be, or vice versa.

**Conceptual correction**

Z₁ is always the impedance of the medium from which the wave **is incident**. Z₂ is the impedance of the medium towards which the wave attempts to propagate. If R > 0, the receiving medium is stiffer; if R < 0, it is softer.

**Mini contrast example**

Wave travelling from aluminium (impedance 17000 kg/s) to steel (impedance 46000 kg/s): with the correct convention, [[R_Z]] gives +0.46. If the media are swapped in the formula, the result is −0.46. The first result (positive) is correct because steel is stiffer than aluminium.

## Interpretation errors

### Error 5: Interpreting total reflection as energy loss

**Why it seems correct**

Energy "does not pass" to the other side, so the student concludes it is lost. In everyday life, reflection is associated with dissipation (impact against a wall).

**Why it is incorrect**

Reflection returns energy to the original medium; it is not dissipated. Energy continues to exist as a reflected wave. Real loss occurs only if the material is dissipative (viscoelastic) or if there is lateral dispersion.

**Detection signal**

The student describes total reflection (when [[R_Z]] equals 1) as "all energy is lost" or "there is no energy after the interface" instead of "all energy returns to medium 1".

**Conceptual correction**

Total reflection (|[[R_Z]]| = 1) means all energy returns to the incident medium as a reflected wave. There is no loss: energy changes direction, it does not disappear. Only absorption (imaginary part of Z) destroys mechanical energy by converting it to heat.

**Mini contrast example**

Steel bar with free end (zero impedance at the end): [[R_Z]] equals −1 and the wave returns inverted with the same energy. If a sensor is placed at the start, it measures double the amplitude (outgoing plus return). There is no loss; energy oscillates between both ends indefinitely if there is no attenuation.

## Quick self-control rule

Before accepting an impedance and reflection calculation, verify:
1. [[Z_mec]] has units of kg/s (not Pa·s/m or kg/m²s).
2. |[[R_Z]]| ≤ 1 always.
3. [[T_Z]] = 1 + [[R_Z]] (consistency relation).
4. R²·Z₁ + T²·Z₂ = Z₁ (power balance at the interface).
5. If both media are identical, [[R_Z]] must be zero and [[T_Z]] must be one.
`;export{e as default};
