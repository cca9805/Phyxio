## 1. Vehicle tyres and seasonal pressure variation

Car tyres are containers of almost constant [[V]] (rubber is nearly inextensible at inflation pressure). They contain air at a typical [[P]] of 2.2–2.5 bar (220 000–250 000 Pa) at filling temperature. When the ambient [[T]] changes from winter (−10 °C, 263 K) to summer (40 °C, 313 K), the pressure varies by the ratio of absolute temperatures (313 K divided by 263 K, approximately 1.19), representing a 19 % increase.

The ideal gas law in isochoric form ([[n]] constant) allows calculation of exactly how much [[P]] has changed: since the ratio [[P]]/[[T]] is conserved, the final [[P]] is obtained by multiplying the initial value by the temperature ratio. Manufacturers recommend checking pressure cold because that is the state closest to the model: when hot, friction-generated heat adds an additional contribution that is difficult to separate.

Dominant variable: [[T]] (pressure changes in direct proportion to absolute temperature).
Validity limit: the ideal model applies while the rubber does not deform elastically to a significant degree and the gas composition does not change (e.g., through loss of moisture from the air).

---

## 2. Hydrogen storage in fuel-cell vehicles

Hydrogen vehicles store H₂ at [[P]] of 350–700 bar (35–70 MPa) in carbon-fibre tanks. At 700 bar and room temperature (300 K), a 150 L tank ideally stores:

With [[P]] of 7 × 10⁷ Pa, [[V]] of 0.150 m³ and [[T]] of 300 K, the ideal gas law predicts [[n]] ≈ 4220 mol ≈ 8.5 kg of H₂. However, the compressibility factor of hydrogen at 700 bar and 300 K is Z ≈ 1.32 (Z > 1 because excluded volume dominates): the real stored mass is ≈ 8.5/1.32 ≈ 6.4 kg.

This 24 % deviation demonstrates that at these pressures the ideal gas law significantly overestimates the storage density. Design engineers must use more accurate equations of state (Benedict–Webb–Rubin for H₂) to calculate the real vehicle range.

Dominant variable: [[P]] (at fixed temperature, storage density depends almost linearly on [[P]] in the ideal range, but the non-ideality correction becomes critical above ~50 bar).
Validity limit: the ideal gas law introduces unacceptable errors (>5 %) for H₂ above ~100 bar at room temperature.

---

## 3. Scuba diving: gas expansion on ascent

A diver descends to 30 m depth, where the total pressure adds up to 4 atm (405 000 Pa): atmospheric pressure contributes 1 atm and the water column adds another 3 atm. This elevated [[P]] compresses the gas in the lungs in the same proportion. Their lungs contain [[n]] moles of air at that pressure and at body temperature (37 °C, equivalent to 310 K). On ascending to the surface (1 atm, same [[T]]), the gas volume is multiplied by the ratio of pressures (4 to 1), quadrupling in size (isothermal process, fixed [[n]] in the lungs).

The ideal gas law in isothermal form conserves the product [[P]]·[[V]], predicting that fourfold volume increase. Lungs can expand by only 30–40 % before being damaged. If the diver ascends without exhaling, the pulmonary over-expansion can cause serious barotrauma.

The equation of state is not merely an academic calculation tool: its violation (rapid ascent without exhaling) is the direct cause of one of the most dangerous diving accidents.

Dominant variable: [[P]] (gas expansion is inversely proportional to pressure for an isothermal process).
Validity limit: the isothermal model is valid if the ascent is slow enough for the gas to remain at body temperature. In very rapid ascents adiabatic effects must be considered.

---

## 4. Tyre gauge and the difference between absolute and gauge pressure

Tyre gauges measure **gauge pressure** (relative to atmospheric), not absolute pressure. The ideal gas law requires **absolute pressure**: the absolute [[P]] is the sum of the gauge pressure and atmospheric pressure.

If the gauge reads 2.1 bar (210 000 Pa gauge) and atmospheric pressure is 101 325 Pa, the absolute pressure is 311 325 Pa ≈ 3.07 atm. Using 2.1 bar directly in the ideal gas law would produce a 32 % error in calculated [[n]] or [[T]].

This distinction is critical in any industrial application where pressure is read on gauges: compressors, reactors, pipelines. Failing to add atmospheric pressure can lead to undersizing a vessel, underestimating the forces on its walls.

Dominant variable: [[P]] (the distinction between absolute and gauge pressure is operationally important only when gauge pressure is on the order of atmospheric; at 700 bar the 1 atm correction is negligible).
Validity limit: the correction is relevant when [[P]]_gauge < 10 atm; at very high pressures the atmospheric contribution is negligible compared with the non-ideality error.

---

## 5. Medical gas cylinders: nitrous oxide in anaesthesia

In surgery, nitrous oxide (N₂O) is stored in cylinders at room [[T]] and [[P]] of 50 bar. When the valve is opened to the anaesthesia circuit (at ~1 bar), the gas expands and its [[T]] drops due to the Joule–Thomson effect (for N₂O at room temperature this effect causes cooling). The flowmeter must compensate for this cooling to ensure that the concentration and flow of N₂O delivered to the patient are exact.

The ideal gas law allows calculation of how many moles of gas have left the cylinder by measuring the drop in internal [[P]] and knowing [[V]] and [[T]] of the cylinder. If the cylinder has a volume of 5 L and [[P]] drops from 50 bar to 40 bar at [[T]] of 295 K:

The change in [[n]] is proportional to the pressure drop multiplied by [[V]] and divided by the product [[R]]·[[T]]. The pressure drop is 10 bar (equivalent to 10⁶ Pa); the volume is 0.005 m³; the product [[R]]·[[T]] is approximately 2453 J/mol. Dividing the numerator (10⁶ times 0.005, giving 5000 J) by 2453 J/mol gives approximately 2.04 mol, equivalent to about 89.6 g of N₂O; that is [[n]] released.

This calculation, performed in real time by the anaesthesia equipment, allows monitoring of the anesthetic gas consumption and anticipating when the cylinder must be changed without interrupting the procedure.

Dominant variable: [[n]] (the amount of gas administered is controlled by measuring the [[P]] drop in the storage cylinder).
Validity limit: the ideal model introduces an appreciable error for N₂O at 50 bar because its critical temperature is 309.6 K (slightly above room temperature): under use conditions, the compressibility factor Z is below unity and the cylinder contains more gas than the ideal model predicts. Medical equipment uses real-gas tables to estimate the available amount accurately.
