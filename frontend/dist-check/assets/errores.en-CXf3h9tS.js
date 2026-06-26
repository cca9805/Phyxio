const e=`## Conceptual errors\r
\r
### Error 1: Thinking lift is caused only by a longer upper path\r
\r
**Why it seems correct**\r
A common school explanation says that upper-surface air travels farther and therefore must move faster. It is simple, but too rigid.\r
\r
**Why it is incorrect**\r
The flow is not forced to reach the trailing edge simultaneously on both paths. Pressure distribution depends on boundary conditions, circulation, viscosity and boundary-layer state.\r
\r
**Detection signal**\r
The student cannot explain why a flat plate at angle of attack can also generate lift.\r
\r
**Conceptual correction**\r
Lift must be read as a combination of pressure, flow deflection and circulation.\r
\r
**Contrast mini-example**\r
A flat plate at a small angle of attack can generate lift even without a clearly longer upper surface. This shows that the path-length explanation is insufficient.\r
\r
## Model errors\r
\r
### Error 1: Using the global equation during stall\r
\r
**Why it seems correct**\r
The equation for [[L]] looks universal because it contains few parameters.\r
\r
**Why it is incorrect**\r
If the flow separates, [[C_L]] no longer behaves as a smooth coefficient. A numerical answer may hide model failure.\r
\r
**Detection signal**\r
Increasing angle of attack no longer increases force, or [[C_L]] becomes implausibly large.\r
\r
**Conceptual correction**\r
Check regime, angle and attached flow before applying the formula.\r
\r
**Contrast mini-example**\r
If a calculation requires an extremely high [[C_L]] for an ordinary light aircraft, the issue is likely stall, flaps or input data, not simply a larger number.\r
\r
## Mathematical errors\r
\r
### Error 1: Not converting speed or area units\r
\r
**Why it seems correct**\r
The algebra seems correct even if km/h or cm² are inserted.\r
\r
**Why it is incorrect**\r
The force is in newtons only if [[rho]], [[v]] and [[S]] are in compatible SI units.\r
\r
**Detection signal**\r
The result is several orders of magnitude above or below the expected weight.\r
\r
**Conceptual correction**\r
Always convert speed to m/s and area to m² before substitution.\r
\r
**Contrast mini-example**\r
Using 90 as m/s when the data are actually km/h artificially multiplies the estimated force and can turn a normal wing into an impossible result.\r
\r
## Interpretation errors\r
\r
### Error 1: Confusing large lift with possible flight\r
\r
**Why it seems correct**\r
If [[L]] is large, it may seem that flight is guaranteed.\r
\r
**Why it is incorrect**\r
The force must be compared with [[W]], and drag, power, stability and stall margin must also be considered.\r
\r
**Detection signal**\r
The student does not check whether [[L]] balances weight or whether the regime is stable.\r
\r
**Conceptual correction**\r
Interpret lift within the full flight balance.\r
\r
**Contrast mini-example**\r
A car wing can generate a large force, but it does not make the car fly: its orientation produces downforce and must be read with the tire normal force.\r
\r
## Quick self-control rule\r
\r
Before closing any exercise, ask whether the units are SI, whether [[C_L]] is plausible and whether the stated regime allows the model. If one of these fails, the number may be calculated correctly and still be physically useless.`;export{e as default};
