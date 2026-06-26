# Exam-type example


## Problem statement

A parallel-plate capacitor has a vacuum capacitance of 20 pF. It is completely filled with a dielectric of relative constant equal to 4.5 and connected to a 100 V DC source. Calculate: (a) the capacitance with dielectric, (b) the stored charge, (c) the electric field inside the dielectric if the plate separation is 2 mm, (d) verify that the capacitor operates in the safe regime given that the breakdown field of the material is 10 MV/m.

## Data

- [[capacitancia_en_vacio]] = 20 pF = 20 · 10⁻¹² F
- [[epsilon_r]] = 4.5 (dimensionless)
- Supply voltage: 100 V
- Plate separation: 2 mm = 2 · 10⁻³ m
- Breakdown field of the material: 10 MV/m = 10⁷ V/m

## System definition

The system is an ideal parallel-plate capacitor (fringe effects negligible) completely filled with an LHI dielectric with [[epsilon_r]] = 4.5. The source maintains the voltage constant at 100 V during the charging process. The external field that would exist in vacuum is the voltage divided by the separation.

## Physical model

The static LHI model is applied: [[capacitancia_con_dielectrico]] = [[epsilon_r]] · [[capacitancia_en_vacio]] and [[campo_electrico_en_el_dielectrico]] = external field / [[epsilon_r]]. The core magnitudes of this leaf are [[capacitancia_con_dielectrico]], [[epsilon_r]], [[capacitancia_en_vacio]], [[campo_electrico_en_el_dielectrico]], and [[polarizacion_electrica]]. The validity condition is that [[campo_electrico_en_el_dielectrico]] must remain below the breakdown field of the material; [[polarizacion_electrica]] can be derived from [[campo_electrico_en_el_dielectrico]] and [[epsilon_r]] but is not a direct input in this example.

## Model justification

The LHI model is valid because the applied field is small compared to the breakdown voltage (to be verified in part d), the dielectric fills the gap uniformly and completely, and the signal is DC, so there are no dielectric dispersion effects. If the voltage exceeded 20 % of the breakdown voltage, the extended lossy model would need to be considered.

## Symbolic solution

Part (a): The capacitance with dielectric is obtained by multiplying [[capacitancia_en_vacio]] by [[epsilon_r]]:

{{f:capacitancia_dielectrico}}

Part (b): The stored charge is obtained by multiplying [[capacitancia_con_dielectrico]] by the applied voltage. Using the definition of capacitance, the charge is the product of capacitance and voltage.

Part (c): The field inside the dielectric is obtained by dividing the vacuum external field by [[epsilon_r]]:

{{f:campo_en_dielectrico}}

The vacuum external field is the voltage divided by the separation, giving the field that would exist without dielectric.

Part (d): The safety condition requires [[campo_electrico_en_el_dielectrico]] to be much smaller than the breakdown field of the material.

Part (e): The volumetric polarisation of the material is obtained from [[campo_electrico_en_el_dielectrico]] and the susceptibility factor ([[epsilon_r]] minus one):

{{f:polarizacion_dielectrico}}

## Numerical substitution

Part (a): Multiplying 4.5 by 20 pF gives 90 pF. Therefore [[capacitancia_con_dielectrico]] ≈ 90 pF.

Part (b): Multiplying 90 pF by 100 V gives 9000 pC, equivalent to 9 nC. The stored charge is approximately 9 nC.

Part (c): The vacuum external field is 100 V divided by 2 mm, giving 50 000 V/m or 50 kV/m. Dividing by [[epsilon_r]] = 4.5 gives approximately 11 111 V/m, that is, about 11.1 kV/m. Therefore [[campo_electrico_en_el_dielectrico]] ≈ 11.1 kV/m.

Part (d): The breakdown field of the material is 10 MV/m, equivalent to 10 000 kV/m. The operating field [[campo_electrico_en_el_dielectrico]] ≈ 11.1 kV/m represents only 0.11 % of that limit, well below the 20 % safety margin. The capacitor operates in the safe regime with no risk of dielectric breakdown.

Part (e): The permittivity of vacuum is 8.85 × 10⁻¹² F/m. The susceptibility factor is 4.5 minus 1, that is 3.5. Multiplying 8.85 × 10⁻¹² F/m by 3.5 and by 11 111 V/m gives [[polarizacion_electrica]] ≈ 344 × 10⁻¹² C/m², equivalent to approximately 344 pC/m².

## Dimensional validation

Part (a): The expression [[capacitancia_con_dielectrico]] = [[epsilon_r]] · [[capacitancia_en_vacio]] combines a dimensionless factor with farads, yielding farads. Expressing in fundamental SI units, the farad has dimension C²·s²/(kg·m²); multiplying by a dimensionless quantity does not alter the dimensions `[M⁻¹ L⁻² T⁴ I²]` ✓

Part (c): For [[campo_electrico_en_el_dielectrico]], the relation is voltage over length divided by a dimensionless quantity. The volt decomposes into kg·m²·A⁻¹·s⁻³; divided by metres this yields kg·m·A⁻¹·s⁻³, which are the correct units of the electric field `[M L T⁻³ I⁻¹]` ✓

## Physical interpretation

The result of part (a) shows that inserting the dielectric multiplies the capacitance by exactly [[epsilon_r]] = 4.5. This means that at the same voltage of 100 V, the capacitor with dielectric stores 4.5 times more charge than in vacuum. The physical reason is that the polarisation of the material generates internal surface charges opposing the external field, reducing the interior field and allowing the battery to inject more charge to maintain the voltage.

The interior field [[campo_electrico_en_el_dielectrico]] ≈ 11.1 kV/m is 4.5 times smaller than the field that would exist in vacuum (50 kV/m). This reduction is the macroscopic manifestation of polarisation: the dipoles in the material create an opposing field that attenuates the free field. The fact that the operating field is only 0.11 % of the breakdown voltage indicates that the design is extremely conservative and that the operating voltage could be increased by a factor of up to 900 before reaching the material's failure limit.

If [[epsilon_r]] were increased while keeping the geometry fixed, [[capacitancia_con_dielectrico]] would grow linearly and [[campo_electrico_en_el_dielectrico]] would decrease proportionally. However, materials with very high [[epsilon_r]] (such as barium titanate) typically have higher loss factors, stronger temperature dependence, and greater non-linearity, which limits their use to applications where compactness is the priority over stability.

---

# Real-world example


## Context

A power electronics engineer needs to select the dielectric material for a filtering capacitor in a switched-mode power supply. The requirements are: minimum capacitance of 100 nF, operating voltage of 400 V, working temperature up to 85 °C, and switching frequency of 100 kHz. The available geometry allows a plate capacitor with [[capacitancia_en_vacio]] = 10 nF.

## Physical estimation

To obtain [[capacitancia_con_dielectrico]] = 100 nF with [[capacitancia_en_vacio]] = 10 nF, an [[epsilon_r]] of approximately 10 is needed. Candidates with [[epsilon_r]] between 8 and 15 are polypropylene ([[epsilon_r]] ≈ 2.2, insufficient), polyester/PET ([[epsilon_r]] ≈ 3.3, insufficient), mica ([[epsilon_r]] ≈ 7, borderline), alumina ([[epsilon_r]] ≈ 10, suitable), and standard glass ([[epsilon_r]] ≈ 8).

At 100 kHz, polypropylene has minimal losses (dissipation factor below 0.0005) and alumina has moderate losses (dissipation factor around 0.001). For the 400 V operating voltage, the field [[campo_electrico_en_el_dielectrico]] in the capacitor with a 1 mm separation would be 400 kV/m divided by [[epsilon_r]]: for alumina with [[epsilon_r]] = 10, the interior field is 40 kV/m, compared to a breakdown voltage of 13 MV/m. The safety margin is more than 300 times, acceptable.

The conclusion of the estimation is that alumina or mica are reasonable candidates. Polypropylene is ruled out because it would require a geometry ten times larger to reach 100 nF.

## Interpretation

The central magnitude [[epsilon_r]] acts here as a compactness factor: materials with higher [[epsilon_r]] allow smaller capacitors at equal capacitance and base geometry. However, increasing [[epsilon_r]] is usually accompanied by higher losses at high frequency, which raises component heating and may affect the stability of the power supply.

The engineer must balance compactness (favours high [[epsilon_r]]), losses at 100 kHz (favours low-loss materials such as polypropylene or mica), and thermal stability up to 85 °C (eliminates materials with strong [[epsilon_r]] temperature dependence, such as barium titanate). This multi-variable decision illustrates why in practice the material with the highest available [[epsilon_r]] is not selected, but rather the one that best balances all the requirements of the application.

Dominant variable: [[epsilon_r]] of the selected dielectric material, which determines the relationship between the available geometry and the capacitance obtained.
Validity limit: the LHI model is valid as long as the operating voltage remains below 20 % of the material's breakdown voltage and the frequency remains below the dielectric relaxation frequency.