const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A manual winch is used to lift a water bucket. The wheel has a radius [[R]] of 0.35 m and the axle has a radius [[r]] of 0.04 m. The bearing efficiency is [[eta]] of 0.80. The operator applies an effort [[FR]] of 70 N. Determine: (a) the maximum load [[Fr]] that can be lifted, (b) the real mechanical advantage [[VM_real]], and (c) the arc [[sR]] that the hand must travel to lift the bucket by [[sr]] of 0.50 m.\r
\r
## Data\r
\r
- [[R]] is 0.35 m\r
- [[r]] is 0.04 m\r
- [[eta]] is 0.80\r
- [[FR]] is 70 N\r
- [[sr]] is 0.50 m (required bucket displacement)\r
\r
## System definition\r
\r
The system is the winch alone. The bucket weight acts as the resistance [[Fr]] at the axle surface. The operator's hand applies the effort [[FR]] at the wheel rim. We ignore rope mass and treat the load as a point force.\r
\r
## Physical model\r
\r
Since the problem provides [[eta]] below 0.95, the real model is required. To find [[Fr]]:\r
\r
{{f:ley_rueda_real}}\r
\r
To find [[VM_real]]:\r
\r
{{f:ventaja_mecanica_real}}\r
\r
To find [[sR]]:\r
\r
{{f:relacion_desplazamientos}}\r
\r
## Model justification\r
\r
The ideal model would overestimate the load capacity by 25% (factor of 1/0.80). The real model accounts for friction at the bearings, which is the dominant loss mechanism in a manual winch. Rope mass is negligible for typical bucket weights above 50 N.\r
\r
## Symbolic solution\r
\r
Before introducing efficiency, the ideal scenario gives the reference moment-balance equation:\r
\r
{{f:torque}}\r
\r
The ideal mechanical advantage [[VM]] is:\r
\r
{{f:ventaja_mecanica_ideal}}\r
\r
Here [[VM]] ideal equals R/r, which is 0.35 / 0.04, giving 8.75.\r
\r
With [[eta]] below 1, the real model adjusts the force balance. Solving for [[Fr]]:\r
\r
{{f:ley_rueda_real}}\r
\r
For [[VM_real]]:\r
\r
{{f:ventaja_mecanica_real}}\r
\r
For [[sR]]:\r
\r
{{f:relacion_desplazamientos}}\r
\r
## Numerical substitution\r
\r
Solving for [[Fr]] from the real law: [[Fr]] equals [[FR]] times [[eta]] times [[R]] divided by [[r]].\r
\r
[[Fr]] equals 70 × 0.80 × 0.35 / 0.04, which is 70 × 0.80 × 8.75, giving 490 N.\r
\r
[[VM_real]] is 0.80 × 0.35 / 0.04, which is 0.80 × 8.75, giving 7.0.\r
\r
[[sR]] is (0.35 / 0.04) × 0.50, which is 8.75 × 0.50, giving 4.375 m.\r
\r
## Dimensional validation\r
\r
- [[FR]] in N × [[R]] in m / [[r]] in m → N. Correct.\r
- [[VM_real]] is dimensionless. Correct.\r
- [[sR]] is in metres. Correct.\r
- Check: input work = 70 × 4.375 = 306.25 J. Output work = 490 × 0.50 = 245 J. Efficiency = 245 / 306.25 = 0.80. Confirmed.\r
\r
## Physical interpretation\r
\r
The operator applies 70 N at the wheel rim and lifts a 490 N bucket — a real mechanical advantage of 7. The price: the hand travels 4.375 m of arc to raise the bucket by only 0.50 m. This is the Golden Rule in action: you gain force; you pay in travel.\r
\r
The efficiency [[eta]] of 0.80 means that 20% of the input work is lost to friction in the bearings. To lift the bucket to 10 m depth, the operator turns the wheel 20 times and travels 87.5 m of arc — manageable for a slow, sustained effort.\r
\r
# Real-world example\r
\r
## Context\r
\r
A ship's anchor windlass uses a horizontal wheel and axle to haul the anchor chain. The wheel (capstan) has [[R]] of 0.80 m. The axle (wildcat) that grips the chain has an effective radius [[r]] of 0.08 m. Typical deck friction gives [[eta]] of 0.70. A sailor can push the capstan bar with [[FR]] of 200 N. The anchor and chain weigh [[Fr]] of 11 200 N in air (about 7 000 N effective underwater accounting for buoyancy).\r
\r
## Physical estimation\r
\r
First, estimate the order of magnitude using the ideal model. The ideal mechanical advantage [[VM]] is R/r:\r
\r
{{f:ventaja_mecanica_ideal}}\r
\r
For the anchor windlass: [[VM]] ideal equals 0.80 / 0.08, which is 10. With [[eta]] of 0.70, the real [[VM_real]] drops to 7. The anchor requires at least 7000 / 200, which is 35 — an order of magnitude higher than achievable with one operator. This rough order-of-magnitude estimate immediately shows the system is underpowered by a factor of 5.\r
\r
Required [[VM_real]] to haul the anchor is at least 7000 / 200, which is 35. Achieved [[VM_real]] is 0.70 × 0.80 / 0.08, which is 7.0. This is far less than 35 — confirming that a single sailor pushing one bar cannot haul the anchor alone. In practice, multiple sailors push simultaneously (multiplying [[FR]] by 4–6), or a motor-assisted windlass replaces manual effort.\r
\r
The displacement ratio [[sR]] over [[sr]] equals R/r, which is 10. For every metre the chain rises, the capstan bar travels 10 m of arc.\r
\r
## Interpretation\r
\r
This example illustrates the design limit of the wheel and axle. The geometric advantage of 10 plus efficiency of 0.70 gives a real mechanical advantage of 7, which is not enough for the task if only one operator acts. The solution is not to increase [[R]] indefinitely (the deck space is finite) but to add power — either through additional operators or a motor. This is why anchor windlasses have been engine-driven since the early twentieth century.\r
\r
The physics has not changed. The energy balance:\r
\r
{{f:balance_energia_rueda}}\r
\r
shows that the required input work [[FR]]·[[sR]] must exceed the output work [[Fr]]·[[sr]] divided by [[eta]]. The only ways to meet that requirement are to increase [[FR]] (more people or motors), increase [[R]] (physically constrained), or reduce [[Fr]] (lighter anchor — a design trade-off).\r
`;export{e as default};
