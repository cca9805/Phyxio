## Conceptual errors


### Error 1: Believing the dielectric conducts charge between the plates

**Why it seems correct**

The student observes that inserting the dielectric changes the charge on the capacitor (when connected to a battery) and concludes that the material allows charge to flow from plate to plate, like a partial conductor. The analogy with a fluid filling a container reinforces this mistaken intuition: "if the material goes in, the charge does too".

**Why it is incorrect**

The dielectric does not transport free charge between the plates. The increase in charge when connected to a battery comes from the battery, not from the dielectric. What the material does is displace its bound charges microscopically, reducing the interior field and allowing the battery to inject more charge from outside to restore the voltage. The dielectric is an insulator: there is no current through it under static conditions.

**Detection signal**

The student claims that "the dielectric contributes charge to the capacitor" or that "the charge increases because the material has charge inside it". If the reasoning includes the idea that current flows through the material, the error is present.

**Conceptual correction**

The dielectric polarises its internal charges, but those charges are bound and do not move macroscopically. The increase in [[capacitancia_con_dielectrico]] means the capacitor can store more charge at the same voltage, but that extra charge is always supplied by the external source.

**Contrast mini-example**

If the dielectric conducted charge, inserting the material with the capacitor disconnected should produce a current. Experimentally, no current is measured when a good dielectric is inserted into an isolated capacitor: the charge on the plates stays constant and only the voltage changes.

---

**Mini-example of contrast**

Check 1: In Dielectrics, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Confusing dimensionless [[epsilon_r]] with absolute permittivity in F/m

**Why it seems correct**

Both quantities describe the "dielectric capacity" of the material. They often appear together in property tables and have similar symbols (\(\varepsilon_r\) and \(\varepsilon\)). The student assumes they can be interchanged or that the only difference is the name.

**Why it is incorrect**

[[epsilon_r]] is dimensionless: it is the ratio of the material's permittivity to that of vacuum. The absolute permittivity has units of F/m and is the product of [[epsilon_r]] and the permittivity of vacuum. Using the absolute permittivity in the formula [[capacitancia_con_dielectrico]] = [[epsilon_r]] · [[capacitancia_en_vacio]] introduces a factor of approximately 8.85 · 10⁻¹² F/m, which is an error of twelve orders of magnitude in consistent units.

**Detection signal**

The student obtains a value of [[capacitancia_con_dielectrico]] that differs from the expected one by a factor of approximately 8.85 · 10⁻¹² or its reciprocal. It can also be detected if the value entered as [[epsilon_r]] has units attached.

**Conceptual correction**

Always verify that [[epsilon_r]] is a pure number, without units. Typical values are: vacuum = 1, air ≈ 1.0006, glass ≈ 5–10, liquid water ≈ 80. If the value has units of F/m, the absolute permittivity has been used.

**Contrast mini-example**

For ordinary glass, [[epsilon_r]] ≈ 7 (dimensionless). The absolute permittivity of glass is approximately 6.2 · 10⁻¹¹ F/m. Using 6.2 · 10⁻¹¹ instead of 7 in the formula produces a [[capacitancia_con_dielectrico]] twelve orders of magnitude smaller: physically absurd.

## Model errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Assuming [[epsilon_r]] is constant at all frequencies

**Why it seems correct**

Material data tables usually give a single value of [[epsilon_r]] without specifying the frequency. The student generalises that value to any situation, including radio, microwave, or optical signals.

**Why it is incorrect**

[[epsilon_r]] depends on the frequency of the applied signal. Each polarisation mechanism (electronic, ionic, orientational) is only effective up to a characteristic cut-off frequency. Above that frequency, the mechanism no longer contributes to [[epsilon_r]] and the value drops. The tabulated value without further specification is usually the static one (DC or very low frequency).

**Detection signal**

The student applies the static [[epsilon_r]] of water (≈ 80) to a microwave capacitor calculation. Or assumes that a high-[[epsilon_r]] ceramic dielectric at 50 Hz still has that same value at 10 GHz.

**Conceptual correction**

The static LHI model is only valid below the relaxation frequency of the material. For high-frequency applications, the [[epsilon_r]] vs frequency curve of the specific material must be consulted.

**Contrast mini-example**

Water has [[epsilon_r]] ≈ 80 at 50 Hz but only ≈ 1.8 at optical frequencies, because orientational polarisation (which dominates the high value) cannot follow the field at those frequencies. A water capacitor designed with [[epsilon_r]] = 80 for GHz signals would have an effective capacitance twenty-five times smaller.

## Mathematical errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Calculating [[capacitancia_con_dielectrico]] as a sum instead of a product

**Why it seems correct**

The student associates "adding a material" with "adding a contribution". If the dielectric increases the capacitance, it seems natural that the new capacitance is [[capacitancia_en_vacio]] plus something related to [[epsilon_r]].

**Why it is incorrect**

The relation is multiplicative: [[capacitancia_con_dielectrico]] is [[epsilon_r]] times [[capacitancia_en_vacio]]. This follows from the fact that the polarisation of the dielectric acts as a scale factor on the entire geometric capacitance, not as an additional parallel capacitance. A sum would only be correct if the partial dielectric occupied a fraction of the area, creating an additional capacitor in parallel.

**Detection signal**

The student writes the resulting capacitance as [[capacitancia_en_vacio]] + (some term involving [[epsilon_r]]), or as [[capacitancia_en_vacio]] + ([[epsilon_r]] - 1) · something. The result always differs from the correct one by an amount that depends on the numerical values.

**Conceptual correction**

The correct formula is [[capacitancia_con_dielectrico]] = [[epsilon_r]] · [[capacitancia_en_vacio]]. If [[epsilon_r]] = 5 and [[capacitancia_en_vacio]] = 10 pF, the capacitance with dielectric is 50 pF, not 15 pF. Multiplication is the only correct operator.

**Contrast mini-example**

With [[epsilon_r]] = 10 and [[capacitancia_en_vacio]] = 1 nF: the sum would give 11 nF, the correct product gives 10 nF. For [[epsilon_r]] = 100 and [[capacitancia_en_vacio]] = 1 nF: the sum gives 101 nF, the correct product gives 100 nF. The relative difference between sum and product is 1 % for [[epsilon_r]] = 100 but 50 % for [[epsilon_r]] = 2, where the error is most dangerous.

## Interpretation errors

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.


### Error 5: Believing the field inside the dielectric is larger than the external field

**Why it seems correct**

The student associates "more material" with "greater effect" and concludes that the dielectric amplifies the field in its interior. The analogy with a lens concentrating light reinforces this intuition: if the lens amplifies light, why shouldn't the dielectric amplify the field?

**Why it is incorrect**

The field [[campo_electrico_en_el_dielectrico]] inside the dielectric is always less than or equal to the external field, never greater. The polarisation of the material generates surface charges opposing those of the plates, creating a polarisation field that opposes the external one. The net interior field is the external field reduced by the factor [[epsilon_r]], which is greater than or equal to one.

**Detection signal**

The student obtains [[campo_electrico_en_el_dielectrico]] greater than the applied external field, or claims the dielectric "concentrates" the field in its interior. If the ratio between the calculated field and the external field exceeds one, the error is present.

**Conceptual correction**

The field [[campo_electrico_en_el_dielectrico]] is always the external field divided by [[epsilon_r]]. For [[epsilon_r]] greater than one, [[campo_electrico_en_el_dielectrico]] is always smaller. Only in vacuum ([[epsilon_r]] = 1) are they equal. The dielectric attenuates, not amplifies, the field.

**Contrast mini-example**

With an external field of 100 kV/m and [[epsilon_r]] = 5: the interior field is 20 kV/m, five times smaller. Claiming the interior field is 500 kV/m would mean the dielectric creates energy from nothing, violating energy conservation.

## Quick self-control rule

Before closing any dielectrics calculation, verify the following four conditions:

1. [[epsilon_r]] is a pure number, without units, greater than or equal to one.
2. [[capacitancia_con_dielectrico]] is greater than or equal to [[capacitancia_en_vacio]]. If [[capacitancia_con_dielectrico]] turned out smaller, there is an error.
3. [[campo_electrico_en_el_dielectrico]] is less than or equal to the external field. If [[campo_electrico_en_el_dielectrico]] turned out larger, there is an error.
4. The calculated [[campo_electrico_en_el_dielectrico]] does not exceed the breakdown field of the material. If it does, the solution is physically non-viable and the plate separation must be increased or the material changed.

If any of these conditions fails, review the input data before interpreting the result.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.