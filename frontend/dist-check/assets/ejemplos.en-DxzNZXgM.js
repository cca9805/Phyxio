const n=`# Exam-type example\r
\r
## Problem statement\r
\r
A block of [[m]] = 12 kg is on an incline with [[theta]] = 25 degrees. The block is attached to a rope applying [[T]] upward along the plane. Contact may remain static or become kinetic depending on tangential demand. Build the free-body diagram, project by tangential-normal axes, and determine [[ax]] and [[ay]] for two scenarios: no slip and downward slip.\r
\r
Also justify when to use [[fs]] versus [[fk]], validate dimensional consistency, and close with physical regime interpretation.\r
\r
## Data\r
\r
- [[m]] = 12 kg\r
- [[g]] = 9.81 m/s^2\r
- [[theta]] = 25 deg\r
- [[mu_s]] = 0.42\r
- [[mu_k]] = 0.30\r
- Applied tension [[T]] = 70 N\r
- Convention: x axis along incline, y axis normal to incline\r
- State A: adhesion (no slip)\r
- State B: downward sliding\r
\r
## System definition\r
\r
Isolated system: the block.\r
\r
External interactions included in the FBD:\r
\r
- Weight [[P]] from Earth.\r
- Normal [[N]] from the surface.\r
- Rope tension [[T]].\r
- Contact friction, either [[fs]] or [[fk]] depending on regime.\r
\r
Internal block forces are excluded because they do not belong to external balance.\r
\r
## Physical model\r
\r
Classical mechanics with axis projections is used:\r
\r
{{f:newton_vectorial}}\r
\r
{{f:newton_x}}\r
\r
{{f:newton_y}}\r
\r
{{f:componentes_peso_plano}}\r
\r
{{f:equilibrio_vertical}}\r
\r
{{f:rozamiento_estatico}}\r
\r
{{f:rozamiento_cinetico}}\r
\r
The model requires regime declaration before friction substitution.\r
\r
## Model justification\r
\r
This model is valid because speeds are moderate, the setup is macroscopic, and rigid-contact approximation is acceptable at first order. [[g]] is treated as uniform, and large deformation effects are neglected.\r
\r
Weight decomposition into [[Ppar]] and [[Pperp]] is mandatory because axes are aligned with the incline, not with global horizontal and vertical directions. This enables clean separation between normal support behavior and tangential motion behavior.\r
\r
Friction law is regime dependent:\r
\r
- In adhesion, [[fs]] follows an upper bound with [[mu_s]] and [[N]].\r
- In sliding, [[fk]] is set by [[mu_k]] and [[N]].\r
\r
Therefore, result validity depends on consistency between declared regime and observed behavior.\r
\r
## Symbolic solution\r
\r
1) Weight projection:\r
\r
- [[Ppar]] = [[m]]*[[g]]*sin([[theta]])\r
- [[Pperp]] = [[m]]*[[g]]*cos([[theta]])\r
\r
2) Normal axis (y):\r
\r
If contact is maintained without lift-off, [[ay]] = 0 and normal balance yields [[N]] approximately equal to [[Pperp]].\r
\r
3) State A (no slip):\r
\r
- Check whether a valid [[fs]] exists satisfying tangential balance.\r
- Existence condition: [[fs]] <= [[mu_s]]*[[N]].\r
\r
4) State B (downward sliding):\r
\r
- Friction switches to [[fk]] = [[mu_k]]*[[N]].\r
- Tangential balance with [[T]], [[Ppar]], and [[fk]] gives [[Fx]], then [[ax]].\r
\r
6) Global vector closure:\r
\r
{{f:newton_vectorial}}\r
\r
In this closure, [[Fext]] summarizes total external action and must remain consistent with both axis projections.\r
\r
5) Axis reading:\r
\r
- [[Fy]] controls contact and normal stability.\r
- [[Fx]] controls along-plane acceleration tendency.\r
\r
## Numerical substitution\r
\r
1) Total weight:\r
\r
[[P]] = [[m]]*[[g]] = 12*9.81 = 117.72 N\r
\r
2) Weight components:\r
\r
- [[Ppar]] approx 117.72*sin(25) approx 49.75 N\r
- [[Pperp]] approx 117.72*cos(25) approx 106.68 N\r
\r
3) Normal load:\r
\r
[[N]] approx 106.68 N\r
\r
4) Static bound:\r
\r
[[mu_s]]*[[N]] approx 0.42*106.68 approx 44.81 N\r
\r
For adhesion to remain valid, required [[fs]] from tangential balance must be less than or equal to 44.81 N.\r
\r
5) Kinetic friction level:\r
\r
[[fk]] approx [[mu_k]]*[[N]] approx 0.30*106.68 approx 32.00 N\r
\r
6) Sliding-state tangential reading:\r
\r
Combined effect of [[T]] and [[fk]] can partially counteract [[Ppar]], but final [[Fx]] sign still depends on the friction direction selected according to relative motion.\r
\r
In this reference case, if the block slides downward, [[fk]] points upward along the plane and reduces net downhill tendency.\r
\r
## Dimensional validation\r
\r
- [[P]], [[N]], [[T]], [[fk]], [[fs]], [[Fx]], and [[Fy]] in N.\r
- [[a]], [[ax]], [[ay]] in m/s^2.\r
- [[mu_s]] and [[mu_k]] dimensionless.\r
- [[theta]] dimensionless in trigonometric use.\r
\r
No dimensional conflict appears. Final consistency is controlled by sign convention and regime declaration.\r
\r
## Physical interpretation\r
\r
The key interpretation is causal. [[P]] does not act along the incline, so it must be split into [[Ppar]] and [[Pperp]]. [[Pperp]] sets normal loading and therefore affects [[N]], while [[Ppar]] competes with [[T]] and friction on the tangential axis.\r
\r
The vector quantity [[Fext]] is also a coherence checkpoint: if axis balances are valid, global resultant direction must match observed acceleration tendency.\r
\r
This implies that one fixed value of [[T]] may produce different dynamic outcomes when [[theta]], [[mu_s]], or [[mu_k]] changes. Therefore, there is no single "motion force"; there is axis-dependent interaction balance.\r
\r
If the state is adhesive, [[fs]] adapts up to a limit and may keep [[ax]] near zero. Once threshold is crossed, [[fk]] governs response and the system changes regime. That transition is physically meaningful and cannot be represented by one friction equation applied everywhere.\r
\r
Conclusion: an FBD is not only a path to numbers. It is a regime-decision framework that explains parameter sensitivity and supports operational prediction.\r
\r
# Real-world example\r
\r
## Context\r
\r
In an inclined parcel conveyor, packages with variable mass are pulled upward by a side-belt mechanism. Operations reports that heavier packages occasionally slide backward during humid shifts, even with unchanged nominal tension control. The likely suspect is contact-surface drift due to dust and moisture.\r
\r
## Physical estimation\r
\r
Take a representative batch with [[m]] = 18 kg and [[theta]] = 20 deg:\r
\r
- [[P]] approx 176.6 N\r
- [[Ppar]] approx 60.4 N\r
- [[Pperp]] approx 165.8 N\r
\r
If dry condition yields [[mu_s]] = 0.45, the static bound is near 74.6 N. If humid condition lowers [[mu_s]] to 0.25, the bound drops to 41.5 N.\r
\r
Quantitative reading: threshold capacity decreases by 33.1 N. That scale change explains why one fixed pulling strategy can hold in one shift and fail in another. In order-of-magnitude terms, usable margin shrinks from upper 10^1 N to a much tighter window.\r
\r
If slip starts, the kinetic model with lower [[mu_k]] reduces compensation further. This supports the observed regime transition behavior.\r
\r
## Interpretation\r
\r
The correct diagnosis is not an abstract "loss of machine force." The free-body view shows a contact-dominated mechanism: lower [[mu_s]] lowers static capacity, which changes no-slip feasibility.\r
\r
This means corrective action should combine control and surface maintenance. Raising command tension may help, but without contact stabilization the system will keep switching regimes with high variability.\r
\r
Final causal interpretation: transport performance depends on the balance among [[T]], [[Ppar]], and contact capacity determined by [[N]], [[mu_s]], and [[mu_k]]. The FBD separates root cause from symptom and reduces blind tuning.\r
`;export{n as default};
