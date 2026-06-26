const e=`# Common errors

## Conceptual errors

### Error 1: Believing that longitudinal wave speed depends on cross-sectional area

**Why it seems correct:** a thicker bar has more material, so it seems logical the wave would travel differently.

**Why it is incorrect:** increasing the section proportionally increases both restoring force (more total stiffness) and inertia (more mass). The ratio that determines speed (E/rho) does not change with geometry. Speed is a material property, not a bar property.

**Detection signals:** calculating [[v_barra]] and obtaining different values for different sections of the same material.

**Corrección conceptual**

The formula [[v_barra]] equals sqrt(E/rho) contains no geometric term. Only Young's modulus and density appear.

**Mini-ejemplo de contraste**

A 5 mm diameter steel bar and a 50 mm one have exactly the same longitudinal speed (5100 m/s). What changes is the mechanical impedance, not the speed.

---

### Error 2: Confusing longitudinal bar speed with P-wave speed in an infinite medium

**Why it seems correct:** both are "speed of sound in the solid", so they may seem interchangeable.

**Why it is incorrect:** in an infinite medium, material is laterally confined and cannot expand freely in the transverse direction. This makes the effective modulus greater than E (it is the plane-wave modulus, which includes Poisson's ratio). P-wave speed is always greater than bar speed.

**Detection signals:** obtaining bar speed values higher than tabulated P-wave speeds for the same material. For steel, P-wave speed is about 5900 m/s versus 5100 m/s in a bar.

**Corrección conceptual**

Bar speed uses E; P-wave speed uses M equals E·(1-nu)/((1+nu)·(1-2nu)). For steel with nu of 0.3, M/E is approximately 1.35, explaining the difference.

**Mini-ejemplo de contraste**

Steel with E of 210 GPa and nu of 0.3. Bar speed: sqrt(210e9/7850) giving 5170 m/s. P-wave speed: sqrt(283e9/7850) giving 6000 m/s. Using the wrong formula produces a 16% error.

---

## Model errors

### Error 3: Applying the slender bar model at frequencies where wavelength is comparable to diameter

**Why it seems correct:** the formula is simple and gives a numerical result without signalling its own validity range.

**Why it is incorrect:** when [[lambda_long]] becomes comparable to the diameter, lateral inertia from Poisson contraction introduces dispersion. The actual speed decreases relative to the predicted value and becomes frequency-dependent.

**Detection signals:** calculated [[lambda_long]] is less than 6 times the bar diameter. High-frequency experimental pulses arrive later than predicted.

**Corrección conceptual**

Always verify the condition [[lambda_long]] greater than 6d before using the simple formula. If not satisfied, use the Rayleigh-Love correction or the Pochhammer-Chree model.

**Mini-ejemplo de contraste**

A 50 mm diameter steel bar at 100 kHz. [[lambda_long]] equals 5100/100000 giving 0.051 m (51 mm). Ratio lambda/d is 1.02, far below 6. The slender bar model is NOT valid here.

---

### Error 4: Ignoring reflection at section changes

**Why it seems correct:** if the material is the same on both sides of a section change, it seems the wave should pass without problem.

**Why it is incorrect:** reflection depends on impedance [[Z_barra]], which is rho·A·[[v_barra]]. Even though rho and [[v_barra]] do not change, a change in area A produces an impedance change and generates partial reflection.

**Detection signals:** unexpected echoes in bars with section steps. The reflection coefficient is (A2 - A1)/(A2 + A1) for the same material.

**Corrección conceptual**

Every geometric discontinuity is an impedance discontinuity and generates reflection. Only if A1 equals A2 does the wave pass without reflecting.

**Mini-ejemplo de contraste**

A steel bar goes from 10 mm to 20 mm diameter. Area ratio: 4. Reflection coefficient: (4-1)/(4+1) giving 0.6. Sixty per cent of force amplitude is reflected.

---

## Mathematical errors

### Error 5: Forgetting the square root in the speed formula

**Why it seems correct:** remembering that v depends on E/rho but forgetting it is the square root of the ratio.

**Why it is incorrect:** E/rho has dimensions of \`[L² T⁻²]\`, which are velocity squared. Without the root, the result does not have velocity dimensions.

**Detection signals:** result has units of m²/s² instead of m/s. Numerical values are of order 10⁷ instead of 10³.

**Corrección conceptual**

The correct formula is [[v_barra]] equals the square root of ([[E_young]]/[[rho_vol]]). Dimensionally: \`[M L⁻¹ T⁻²]/[M L⁻³]\` gives \`[L² T⁻²]\`; its square root gives \`[L T⁻¹]\`.

**Mini-ejemplo de contraste**

Steel: E/rho gives 210e9/7850 yielding 2.68 × 10⁷ m²/s² (incorrect as velocity). The square root gives 5170 m/s (correct).

---

### Error 6: Using frequency in Hz where rad/s is required or vice versa

**Why it seems correct:** both are "frequency" and are sometimes interchanged without visible consequences.

**Why it is incorrect:** wavelength is calculated as v/f (with f in Hz) or 2pi·v/[[omega]]. Using [[omega]] where f is needed introduces a factor 2pi error.

**Detection signals:** calculated wavelength is 6.28 times larger or smaller than expected.

**Corrección conceptual**

[[lambda_long]] is [[v_barra]] divided by f (Hz). If starting from [[omega]], first divide by 2pi to obtain f.

**Mini-ejemplo de contraste**

Steel at 1 kHz. Correct: lambda is 5100/1000 giving 5.1 m. Error with [[omega]]: 5100/6283 giving 0.81 m (6.28 times smaller).

---

## Interpretation errors

### Error 7: Assuming mechanical impedance is a material-only property

**Why it seems correct:** since speed depends only on material, it is natural to think impedance also does.

**Why it is incorrect:** mechanical impedance [[Z_barra]] includes cross-sectional area. Two bars of the same material with different sections have different impedance and produce reflection at the junction.

**Detection signals:** predicting total transmission at a junction between bars of the same material but different section.

**Corrección conceptual**

[[Z_barra]] is rho·A·[[v_barra]]. Specific impedance (rho·v) is a material property, but mechanical impedance (rho·A·v) depends on geometry as well.

**Mini-ejemplo de contraste**

Two aluminium bars, one 10 mm and the other 30 mm diameter. Same specific impedance (rho·v of 13 740 kg/(m²·s)), but mechanical impedances in ratio 1:9 (due to the square of the diameter). At the junction, 80% of amplitude is reflected.

---

### Error 8: Believing that absence of dispersion implies absence of attenuation

**Why it seems correct:** if the wave does not deform as it travels, it seems it should not weaken either.

**Why it is incorrect:** dispersion and attenuation are independent phenomena. Dispersion refers to frequency dependence of speed; attenuation refers to amplitude loss with distance. A non-dispersive wave can attenuate due to viscoelastic damping, energy diffusion to lateral modes, or support losses.

**Detection signals:** assuming a pulse maintains constant amplitude after travelling metres of real bar.

**Corrección conceptual**

The ideal model predicts propagation without attenuation NOR dispersion. In reality, there is always some attenuation. The key is that pulse shape is preserved (non-dispersion) even though amplitude decreases (attenuation).

**Mini-ejemplo de contraste**

A pulse in a polymer bar (PMMA) at 50 kHz maintains its temporal shape but loses 30% of amplitude per metre due to the material's viscoelastic damping.

---

## Quick self-control rule

If calculated [[v_barra]] is not between 1000 and 6500 m/s for a common solid, there is almost certainly a unit error in [[E_young]] or [[rho_vol]].
`;export{e as default};
