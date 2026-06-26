const e=`\uFEFF# Common Errors in the Fundamental Principle of Hydrostatics\r
\r
## Conceptual errors\r
\r
### Error 1: Confusing the vertical elevation sign\r
#### Why it seems correct\r
In everyday life, we usually measure height from the ground upward as something positive. However, in many hydrostatics problems, depth is measured from the surface downward. If a strict origin is not defined, it is easy to mix both criteria and end up adding pressure when it should be subtracted, or vice versa.\r
\r
#### Why it is incorrect\r
Mathematical consistency is fundamental. If we define the z-axis as positive upward (altitude), then descending means delta z is negative. Since pressure increases as we go down, the formula must compensate for this sign. Sign error is the number one cause of physically absurd results (such as pressures decreasing as we go down to the seabed).\r
\r
#### Detection signal\r
It is immediately detected if, when calculating the pressure at a lower point, we obtain a lower value than at the upper point. Physically, the point with the lower elevation z (deeper) must always have higher pressure if the fluid is above it.\r
\r
#### Conceptual correction\r
Always define an explicit coordinate system before starting. If you use positive z upward, use [[p2]] es [[p1]] + [[rho]] g ([[z1]] - [[z2]]). If you use positive depth h downward, use p es presion de referencia + [[rho]] g h. Do not mix both systems in the same equation.\r
\r
#### Mini-example\r
If point 1 is at 10 m height and point 2 at 2 m, the elevation change is [[z2]] - [[z1]] es -8 m (descent). The pressure at 2 must be greater than at 1.\r
\r
## Model errors\r
\r
### Error 2: Assuming constant density in large gas columns\r
#### Why it seems correct\r
For stretches of a few meters, air density seems constant. When applying the linear formula incremento de presion es [[rho]] g delta z in a laboratory, the results are accurate, leading the student to believe the model is universal for any height.\r
\r
#### Why it is incorrect\r
Earth's atmosphere is thousands of meters high. As we rise, pressure decreases, and since air is a gas (compressible fluid), its density decreases drastically. Using a constant [[rho]] to calculate pressure on Everest would give an error of more than 60\\% relative to reality.\r
\r
#### Detection signal\r
Detected when obtaining negative pressures at high altitudes or ignoring that air at sea level is much "heavier" than air in the high atmosphere.\r
\r
#### Conceptual correction\r
Distinguish between incompressible fluids (liquids) and compressible fluids (gases). For large elevation changes in gases, the structural model must change to the exponential barometric law.\r
\r
#### Mini-example\r
At 10 km altitude, air has approximately one-third the density it has at sea level. The linear model would fail completely.\r
\r
## Mathematical errors\r
\r
### Error 3: Not converting density units from g/cm³ to kg/m³\r
#### Why it seems correct\r
Many chemistry books give water's density as 1 g/cm^3 or mercury's as 13.6 g/cm^3. These are easy numbers to remember and it seems harmless to use them directly in the calculator along with g es 9.81 m/s^2.\r
\r
#### Why it is incorrect\r
The International System (SI) requires mass to be in kg and volume in m^3. Using 1 g/cm^3 instead of 1000 kg/m^3 will make the resulting pressure 1000 times lower than it should be. The resulting Pascals will be wrong.\r
\r
#### Detection signal\r
If when calculating pressure at 10 m depth in water you obtain about 100 Pa instead of 100,000 Pa (near 1 atm), you definitely have a density unit error.\r
\r
#### Conceptual correction\r
Before pressing any key on the calculator, ensure [[rho]] is in kg/m^3. Remember that 1 g/cm^3 es 1000 kg/m^3.\r
\r
#### Mini-example\r
For mercury, you must use 13600 kg/m^3. Using 13.6 will give you a pressure three orders of magnitude lower than reality.\r
\r
## Interpretation errors\r
\r
### Error 4: Forgetting that [[p1]] is total pressure, not just atmospheric\r
#### Why it seems correct\r
In basic "open container" examples, the upper point is always the surface and [[p1]] coincides with p_{atm}. The student gets used to associating [[p1]] only with the atmosphere.\r
\r
#### Why it is incorrect\r
The Fundamental Principle is general. Point 1 can be any point submerged at any pressure. If we are analyzing the section between two depths of a closed and pressurized tank, [[p1]] will be the pressure at the first level, which already includes the upper gas overpressure.\r
\r
#### Detection signal\r
It occurs when pressure at the bottom of a pressurized fuel tank is calculated ignoring the gas pressure over the liquid, taking only 1 atm by default.\r
\r
#### Conceptual correction\r
Always distinguish between absolute and gauge pressure. Ensure [[p1]] represents the real absolute pressure at elevation [[z1]], whatever its origin.\r
\r
#### Mini-example\r
In a closed hydraulic system, [[p1]] can be hundreds of atmospheres. Ignoring this and using 1 atm would lead to a catastrophic error.\r
\r
## Quick self-control rule\r
1. **Proportionality Verification:** Did I get more pressure at the lowest point? (Coherence check).\r
2. **Unit Consistency:** Is density in kg/m^3 and elevations in meters? (Pascal check).\r
3. **Reference Control:** Have I added the starting point pressure [[p1]] to the calculated increase? (Absolute value check).\r
\r
\r
`;export{e as default};
