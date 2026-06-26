const e=`## Ideal model\r
\r
The ideal model used in this leaf describes a dilute gas without relevant molecular interactions. The only meaningful pressure is the one exerted by molecule-wall collisions, and volume [[V]] occupies the available space for the gas.\r
\r
This model allows interpreting the shape of a process in a P-V diagram without finite-volume corrections, intermolecular forces, or non-ideal effects.\r
\r
## Hypotheses\r
\r
- The gas is ideal. Molecules do not interact except through elastic collisions.\r
- Pressure [[P]] is homogeneous within the considered volume.\r
- The amount of substance [[n]] is conserved in a closed system.\r
- Temperature [[T]] defines the family of isotherms, and the process may be isobaric or variable-volume.\r
\r
If any hypothesis is violated, the P-V curve can distort and the simple leaf formulas cease to apply.\r
\r
The ideal model is practical as long as the process is quasi-static and the gas remains in a single phase. When the process crosses a regime with strong intermolecular effects, ideal assumptions break down and the shape of the curve is no longer reliable.\r
\r
## Quantitative validity domain\r
\r
- The model is valid for pressures around 10⁵ Pa and below, typical of laboratory gases.\r
- The law works well when density remains low and ideal gas conditions hold, that is when P < 1×10⁶ Pa and molecular spacing is large compared to molecular size.\r
- For volumes between 10⁻⁴ m³ and 10⁻¹ m³ in common containers, the ideal approximation is reasonable if condensation does not occur.\r
\r
## Model failure signals\r
\r
- If the P-V trajectory departs significantly from a family of ideal isotherms, the gas is no longer ideal.\r
- If the curve shows abrupt slope changes or folds, phase transitions or strong molecular interactions may be present.\r
- If the work inferred from area does not match energy transfer estimated by other means, the ideal gas model may be failing.\r
\r
## Extended or alternative model\r
\r
When to switch to the van der Waals or another realistic model: at high densities and pressures near or above 1×10⁶ Pa, intermolecular attractions and finite particle volume can no longer be neglected.\r
\r
The transition to the extended model is appropriate when the gas behaves more rigidly than the ideal gas law predicts and the P-V curve shifts to higher pressures at the same temperature.\r
\r
## Operational comparison\r
\r
- Ideal model: simple, valid for dilute gases at moderate pressures. Extended model: more complex, necessary for high-density conditions.\r
- Ideal model: process curves are well-defined and easy to read. Extended model: trajectories are corrected for interactions and excluded volume.\r
- Ideal model: useful for teaching and first work estimates. Extended model: required for accurate predictions under extreme conditions.\r
`;export{e as default};
