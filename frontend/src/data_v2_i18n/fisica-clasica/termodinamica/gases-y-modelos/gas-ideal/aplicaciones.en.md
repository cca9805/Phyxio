## 1. Vehicle tyres and seasonal pressure variation

Car tyres are containers of almost constant [[V]] (rubber is nearly inextensible at inflation pressure). They contain air at a typical [[P]] of 2.2–2.5 bar (220 000–250 000 Pa) at filling temperature. When the ambient [[T]] changes from winter (−10 °C, 263 K) to summer (40 °C, 313 K), the pressure varies by the ratio of absolute temperatures (313 K divided by 263 K, approximately 1.19), representing a 19 % increase.

The ideal gas law in isochoric form ([[n]] constant) allows calculation of exactly how much [[P]] has changed: since the ratio [[P]]/[[T]] is conserved, the final [[P]] is obtained by multiplying the initial value by the temperature ratio. Manufacturers recommend checking pressure cold because that is the state closest to the ideal model: when hot, friction-generated heat adds an additional contribution that is difficult to separate.

Dominant variable: [[T]] (pressure changes in direct proportion to absolute temperature).
Validity limit: the ideal model applies while the rubber does not deform significantly and the gas composition does not change (e.g., through loss of moisture from the compressed air).

---

## 2. Weather balloons: expansion during ascent

A weather balloon is launched with [[n]] = 3.50 mol of helium at 1 atm and 15 °C (288 K). On reaching 8 km altitude, the external pressure drops to 0.351 atm and the temperature to −35 °C (238 K). The membrane always keeps the internal [[P]] equal to the external pressure.

The initial volume is [[V]]₁ = [[n]]·[[R]]·[[T]]₁/[[P]]₁ ≈ 82.6 L. The volume at 8 km is [[V]]₂ = [[n]]·[[R]]·[[T]]₂/[[P]]₂ ≈ 219 L. The balloon expands to 2.65 times its initial volume: the drop in [[P]] (factor ≈ 2.85) dominates over the drop in [[T]] (factor ≈ 0.83). Balloons are deliberately inflated only partially at launch to provide this expansion capacity without the risk of bursting.

Dominant variable: [[P]] (the drop in external pressure is the dominant expansion factor; the temperature decrease acts in the opposite direction but with smaller magnitude).
Validity limit: helium at 1 atm and −35 °C is far from its critical temperature (5.2 K), so Z ≈ 1.000 and the ideal model is excellent.

---

## 3. Scuba diving: gas expansion on ascent

A diver descends to 30 m depth, where the total pressure is 4 atm (405 000 Pa). Their lungs contain air at that pressure and at body temperature (37 °C, 310 K). On ascending to the surface (1 atm, same [[T]]), Boyle's law (isothermal process, fixed [[n]]) predicts that the lung volume quadruples. Lungs can expand by only 30–40 % before being damaged: if the diver ascends without exhaling, pulmonary over-expansion causes serious barotrauma.

Dominant variable: [[P]] (gas expansion is inversely proportional to pressure for an isothermal process).
Validity limit: the isothermal model is valid if the ascent is slow enough for the gas to remain at body temperature. In very rapid ascents adiabatic effects must be considered.

---

## 4. Tyre gauge and the difference between absolute and gauge pressure

Tyre gauges measure **gauge pressure** (relative to atmospheric), not absolute pressure. The ideal gas law requires **absolute pressure**: [[P]]_abs = [[P]]_gauge + [[P]]_atm.

If the gauge reads 2.1 bar and atmospheric pressure is 1.013 bar, the absolute pressure is 3.113 bar ≈ 3.07 atm. Using 2.1 bar directly in the ideal gas law would produce a 32 % error in the calculated [[n]] or [[T]].

Dominant variable: [[P]] (the distinction between absolute and gauge pressure is operationally important when gauge pressure is on the order of atmospheric; at very high industrial pressures the 1 atm correction is negligible).
Validity limit: the correction is relevant whenever [[P]]_gauge is below 10 atm.

---

## 5. Medical gas cylinders: nitrous oxide in anaesthesia

Nitrous oxide (N₂O) is stored in medical cylinders at room [[T]] and [[P]] of 50 bar. When the valve is opened to the anaesthesia circuit (~1 bar), the gas expands. The ideal gas law allows calculation of how many moles have left the cylinder by measuring the internal [[P]] drop and knowing [[V]] and [[T]] of the cylinder.

If the cylinder has [[V]] = 5.0 L (0.005 m³) and [[P]] drops from 50 bar to 40 bar at [[T]] = 295 K: the change in [[n]] is proportional to the [[P]] drop (10⁶ Pa) multiplied by [[V]] (0.005 m³) and divided by [[R]]·[[T]] (≈ 2453 J/mol). The result is Δ[[n]] ≈ 2.04 mol ≈ 89.6 g of N₂O delivered. This calculation, performed in real time by the anaesthesia equipment, allows monitoring of anaesthetic gas consumption and anticipating when the cylinder must be changed without interrupting the procedure.

Dominant variable: [[n]] (the amount of gas administered is controlled by measuring the [[P]] drop in the storage cylinder).
Validity limit: the ideal model introduces an appreciable error for N₂O at 50 bar because its critical temperature is 309.6 K (slightly above room temperature): the compressibility factor Z is below unity and the cylinder contains more gas than the ideal model predicts. Medical equipment uses real-gas tables to estimate the available quantity accurately.
