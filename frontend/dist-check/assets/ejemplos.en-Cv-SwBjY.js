const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A 2 kg laboratory sled starts from rest on a track. The initial state is 5 m above the lowest point. Before reaching the final state, the sled crosses a short rough patch and ends on a platform located 1 m above the lowest point. The rough patch removes 8 J of mechanical energy. Determine the final kinetic energy, justify whether the full process is conservative or not, and explain which part of the change can still be read as an ideal exchange between potential and kinetic energy.\r
\r
## Data\r
\r
Take gravitational field strength as approximately 10 N per kg. The baseline for [[U]] is fixed at the lowest point of the track and remains unchanged throughout the problem. The initial state has zero [[Ki]] because the sled starts from rest. The initial state also has [[Ui]] associated with 5 m of height. The final state has [[Uf]] associated with 1 m of height. The rough zone is summarized by negative [[Wnc]] with magnitude 8 J.\r
\r
## System definition\r
\r
The system includes the sled together with the Earth-sled gravitational interaction, so the mechanical description uses [[Em]], [[K]], and [[U]] under one consistent baseline. The rough patch is not hidden inside the conservative part of the model. It is represented explicitly through [[Wnc]] so that ideal conservation is not forced where it no longer applies. With this choice, [[Ki]], [[Ui]], [[Kf]], and [[Uf]] describe states, while [[Wc]], [[dU]], and [[Wnc]] describe the relevant exchange between them.\r
\r
## Physical model\r
\r
Most of the motion is interpreted as exchange between [[U]] and [[K]], so the language of conservative systems remains the central framework. Gravity contributes [[Wc]] and produces a [[dU]] with opposite sign. However, the full process is not strictly conservative because the rough patch introduces [[Wnc]]. The correct reading is therefore to identify the ideal conversion first and then close the complete balance with [[Em]], [[Ki]], [[Ui]], [[Kf]], [[Uf]], [[Wc]], [[dU]], and [[Wnc]].\r
\r
## Model justification\r
\r
This model is physically explicit because it separates two mechanisms instead of mixing them. Gravity does admit a potential-energy description and therefore belongs to the conservative core of the leaf. The localized rough segment does not, so it must be represented as net non-conservative exchange. That distinction preserves the conceptual structure of the topic while remaining faithful to the real process. The justification also depends on using one baseline for [[Ui]] and [[Uf]], because without it the state comparison would lose meaning.\r
\r
## Symbolic solution\r
\r
First recall the definition of the mechanical state:\r
\r
{{f:conservacion_energia_mecanica}}\r
\r
Then use the relation between conservative work and potential-energy change:\r
\r
{{f:trabajo_conservativo}}\r
\r
If the path were completely ideal from initial to final state, the comparison would be written as:\r
\r
{{f:estados_conservativos}}\r
\r
Because the process includes a rough section with net loss, the correct full balance is:\r
\r
{{f:extension_no_conservativa}}\r
\r
Qualitatively, the descent from 5 m to 1 m makes [[U]] decrease and lets gravity deliver positive [[Wc]]. That conversion would increase [[Kf]] relative to the initial state. The rough patch then subtracts part of that budget through negative [[Wnc]]. The final kinetic energy must therefore equal the available conservative conversion minus the non-conservative loss.\r
\r
## Numerical substitution\r
\r
With the chosen baseline, the initial state has [[Ui]] of 100 J and [[Ki]] of 0 J. The final state keeps [[Uf]] of 20 J. Between those states, potential energy drops by 80 J, so the corresponding conservative work [[Wc]] is 80 J in the sign convention used by the leaf. If the system were ideal, that full amount would feed [[Kf]].\r
\r
Because the rough patch removes 8 J, the total balance gives a final kinetic energy of 72 J. That means most of the descent is still converted into motion, but not all of it. The corresponding final speed for a 2 kg sled is on the order of 8.5 m per second, which is a physically reasonable value for a short controlled descent.\r
\r
## Dimensional validation\r
\r
All energetic quantities in the problem are expressed in joules. [[Ui]], [[Uf]], [[Kf]], [[Wc]], and [[Wnc]] belong to the same dimensional family and can therefore appear in one balance equation. This check matters because it prevents common mistakes such as mixing heights, forces, and energies without the required conversion. It also confirms that subtracting the non-conservative loss from the conservative conversion is dimensionally meaningful.\r
\r
## Physical interpretation\r
\r
The key physical point is not the number 72 alone, but what it means. The process is not conservative in the strict sense because [[Wnc]] is not zero. Yet the topic of conservative systems still governs the problem because the dominant exchange comes from the redistribution between [[U]] and [[K]]. Friction appears as a clear structural correction rather than as a reason to abandon the energetic description. That is the competence this leaf is designed to train: identify when the core process is conservative and when the balance must be extended.\r
\r
# Real-world example\r
\r
## Context\r
\r
A design team studies a lightweight science-park cart with total mass near 500 kg. Over a short descent, the cart loses about 12 m of height before entering a control curve. The engineers want to know whether the segment can be treated as almost conservative for a first speed estimate or whether wheel losses, axle friction, and air effects must be included from the start.\r
\r
## Physical estimation\r
\r
If the segment were read as strictly conservative, the decrease in [[U]] would correspond to roughly 60 kJ of mechanical budget available to increase [[K]]. That scale comes from combining mass, gravity, and height change. Test measurements, however, show that the effective increase in [[K]] near the curve is closer to 52 kJ. The difference, about 8 kJ, is interpreted as negative [[Wnc]] distributed among internal friction, rolling effects, and moderate aerodynamic drag.\r
\r
This does not invalidate the conservative model as a first approximation. It actually shows that the main exchange is still dominated by [[U]] and [[K]]. But it also shows that the final safety and braking design should not ignore [[Wnc]], because at passenger scale and engineering tolerance, a deviation of several kilojoules is already meaningful.\r
\r
## Interpretation\r
\r
In real applications, the value of the leaf lies in organizing modeling decisions. The conservative calculation gives a fast first reading of the available energy and the expected speed range. Comparison with measurement then allows the engineer to estimate [[Wnc]] and decide whether the system may still be treated as nearly ideal or whether the non-conservative term has become central to the design. In this example, the cart operates close to the conservative regime but not inside a pure ideal limit. That conclusion is more useful than any isolated number because it guides how the system should actually be engineered.`;export{e as default};
