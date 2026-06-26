const e=`# Exam-type example\r
\r
## Problem statement\r
An observation probe must be inserted into a circular orbit around Earth. The team knows central [[M]], Earth radius [[R]], and operating altitude [[h]]. They need three outputs: circular [[v_orb]], orbital period [[T]], and comparison against [[v_escape]] at the same radius. They also need a brief model-validity argument and a trend explanation for what happens if altitude increases.\r
\r
## Data\r
Use SI-compatible data with [[G]]: central [[M]] equals 5.97e24 kg, [[R]] equals 6.37e6 m, and [[h]] equals 4.00e5 m. The orbital radius [[r]] is constructed from geometry. For compact calculations, [[mu]] is also used, and [[E]] is estimated to classify orbital regime.\r
\r
## System definition\r
Two-body system with dominant central mass. The probe is modeled as a test particle. Drag and third-body perturbations are neglected at this preliminary stage. The key coordinate is center radius [[r]], not altitude [[h]] alone. The objective is to describe an ideal circular bound state and evaluate margin relative to escape threshold.\r
\r
## Physical model\r
Core leaf relations are used: circular speed, escape threshold, period, and specific energy. First convert geometry from [[R]] and [[h]] to [[r]]. Then compute [[v_orb]], compare with [[v_escape]], estimate [[T]], and classify energy regime with [[E]]. For circular ideal case, [[a]] matches [[r]].\r
\r
## Model justification\r
The model is physically justified because first-order mission screening is requested and central gravity is dominant. Causality is explicit: central attraction provides centripetal acceleration and fixes required circular speed. The model would lose validity for strong drag environments, long-horizon high-precision prediction, or scenarios with relevant continuous thrust.\r
\r
## Symbolic solution\r
Circular speed relation:\r
\r
{{f:velocidad_orbital_circular}}\r
\r
Escape threshold relation:\r
\r
{{f:velocidad_escape}}\r
\r
Orbital period relation:\r
\r
{{f:periodo_orbital}}\r
\r
Gravitational parameter definition:\r
\r
{{f:parametro_gravitacional}}\r
\r
Specific energy relation:\r
\r
{{f:energia_orbital_especifica}}\r
\r
General speed relation for noncircular reading:\r
\r
{{f:vis_viva}}\r
\r
The symbolic flow is ordered as geometry, dynamics, timing, and energy. This ordering minimizes substitution mistakes.\r
\r
## Numerical substitution\r
With [[r]] equal [[R]] plus [[h]], the orbital radius is about 6.77e6 m. Substitution in the circular relation yields [[v_orb]] in the expected several-km/s range for low Earth orbit. Evaluating [[v_escape]] at the same radius gives a larger value, as required by energetic interpretation.\r
\r
Using the same [[r]] and [[M]], period [[T]] is around the low-hour scale, consistent with low-orbit operations. [[mu]] streamlines repeated calculations. With [[a]] equal [[r]], [[E]] is negative, confirming bound motion in the classical model.\r
\r
## Dimensional validation\r
[[v_orb]] check: speed dimension with notation \`[L T⁻¹]\`.\r
\r
[[v_escape]] check: speed dimension with notation \`[L T⁻¹]\`.\r
\r
[[T]] check: time dimension with notation \`[T]\`.\r
\r
[[mu]] check: gravitational parameter dimension with notation \`[L³ T⁻²]\`.\r
\r
[[E]] check: specific-energy dimension with notation \`[L² T⁻²]\`.\r
\r
Dimensional validation confirms that numerical results are physically interpretable.\r
\r
## Physical interpretation\r
The solution corresponds to a bound circular state with speed below local escape threshold. That means the probe can remain in closed trajectory without requiring escape-level energy. The period scale is compatible with frequent observation passes.\r
\r
If [[r]] increases while [[M]] is fixed, [[v_orb]] decreases and [[T]] increases nonlinearly. If [[M]] increases at fixed [[r]], both [[v_orb]] and [[v_escape]] increase. This causal reading shows that interpretation is not a decorative final sentence; it is part of the solution quality.\r
\r
# Real-world example\r
\r
## Context\r
A constellation operator studies a partial altitude raise for night-time regional coverage improvements. The decision affects correction budget, link windows, and revisit frequency. A physically grounded preliminary estimate is needed before high-fidelity simulation.\r
\r
## Physical estimation\r
Two candidate radii are compared for the same central [[M]]. At the larger radius, expected trend is lower [[v_orb]] and larger [[T]]. Dynamic requirement per unit time decreases, but contact cycle duration increases. [[v_escape]] also decreases with radius while remaining above circular speed.\r
\r
As an order-of-magnitude reading, a few-hundred-kilometer radial change in low orbit does not change velocity class, but it can noticeably shift period. That timing shift may be operationally more relevant than the speed shift for payload planning.\r
\r
## Interpretation
The estimate indicates that raising altitude can improve continuity in selected coverage windows but reduces revisit frequency per unit time. Dominant decision variable is [[T]], while [[v_orb]] acts as a dynamic constraint. Validity is limited by ideal-model assumptions; final implementation must include perturbations, phase-control constraints, and detailed energy budgeting.

The same workflow is useful for detecting invalid answers. If the larger radius produced a larger circular speed, the result would contradict the physical trend and should be rejected before any operational conclusion. If escape speed were reported below circular speed at the same radius, the energetic hierarchy would also be broken. These checks make the example more than a numerical substitution: they turn the calculation into a diagnostic reading of orbital behavior.

This final comparison is also a model-validity check: when operational constraints demand meter-level prediction, the circular estimate becomes a baseline, not the final navigation model.
`;export{e as default};
