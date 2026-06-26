const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A vertical ideal spring supports a point mass. Given [[m]] = 1.80 kg, [[k]] = 120 N/m, and [[g]] = 9.81 m/s^2, the system is first at static rest and then displaced by 1.0 cm downward from equilibrium. Determine:\r
\r
1. The equilibrium extension [[x_eq]].\r
2. Whether restoring behavior is satisfied for the incremental displacement.\r
3. The signed elastic force [[Fel]], its magnitude [[Fm]], and the elastic energy [[Uel]] associated with equilibrium deformation.\r
4. Whether results remain compatible with a realistic linear operating interval.\r
\r
## Data\r
\r
- [[m]] = 1.80 kg\r
- [[k]] = 120 N/m\r
- [[g]] = 9.81 m/s^2\r
- Incremental displacement around equilibrium: [[x]] = +0.010 m, with positive axis downward\r
- Assumption: elastic linear regime, negligible hysteresis in this operation window\r
\r
## System definition\r
\r
Single-mass, single-spring 1D vertical system. Origin is set at the spring natural length and positive axis points downward. Under this convention, weight terms are positive and the spring reaction should oppose deformation.\r
\r
This definition matters because this leaf is about a local constitutive relation, not about complete spring networks. Keeping this boundary explicit prevents topic mixing with system-level leaves.\r
\r
## Physical model\r
\r
The solution uses the five core relations of the leaf:\r
\r
{{f:hooke_1d}}\r
\r
{{f:hooke_modulo}}\r
\r
{{f:equilibrio_vertical_muelle}}\r
\r
{{f:energia_potencial_elastica}}\r
\r
{{f:criterio_restaurador}}\r
\r
Together, they cover direction, magnitude, static balance, energy storage, and restoring-consistency logic.\r
\r
## Model justification\r
\r
Linear Hooke behavior is justified because expected deformation remains moderate and no irreversible strain is assumed. The problem explicitly asks for equilibrium and local incremental response, which is exactly the scope of a constitutive spring law.\r
\r
If computed [[x_eq]] were outside the experimentally validated linear segment, the correct interpretation would be model escalation or component replacement, not blind trust in the algebraic output.\r
\r
## Symbolic solution\r
\r
For static equilibrium:\r
\r
{{f:equilibrio_vertical_muelle}}\r
\r
For signed elastic force around the declared axis:\r
\r
{{f:hooke_1d}}\r
\r
For scalar force level:\r
\r
{{f:hooke_modulo}}\r
\r
For stored energy at a given deformation:\r
\r
{{f:energia_potencial_elastica}}\r
\r
For restoring-coherence check:\r
\r
{{f:criterio_restaurador}}\r
\r
Each relation answers a different physical question, so all are required for a complete interpretation.\r
\r
## Numerical substitution\r
\r
Equilibrium extension:\r
\r
[[x_eq]] = ([[m]]*[[g]])/[[k]] = (1.80*9.81)/120 = 0.14715 m\r
\r
Incremental signed force for [[x]] = +0.010 m:\r
\r
[[Fel]] = -[[k]]*[[x]] = -120*0.010 = -1.20 N\r
\r
Force magnitude:\r
\r
[[Fm]] = [[k]]*|[[x]]| = 1.20 N\r
\r
Elastic energy at equilibrium deformation:\r
\r
[[Uel]] = (1/2)*[[k]]*[[x_eq]]^2 = 0.5*120*(0.14715)^2 = 1.30 J approximately\r
\r
Restoring consistency:\r
\r
[[Fel]]*[[x]] = (-1.20)*(+0.010) = -0.012 < 0\r
\r
The restoring criterion is satisfied under the declared convention.\r
\r
## Dimensional validation\r
\r
1. [[x_eq]] units: kg*(m/s^2)/(N/m) = m.\r
2. [[Fel]] units: stiffness units multiplied by length units give force units, which is consistent.\r
3. [[Uel]] units: stiffness units multiplied by squared length give energy units, which is consistent.\r
\r
Beyond dimensions, order-of-magnitude checks are also consistent. A 14.7 cm extension for this load and stiffness is plausible and not extreme by itself.\r
\r
## Physical interpretation\r
\r
The equilibrium extension is significant but realistic. It suggests that linearity should be confirmed experimentally in the target hardware, since not every real spring preserves constant [[k]] up to this displacement.\r
\r
The incremental force is correctly restoring, and the scalar force level is coherent with the signed expression. The energy level [[Uel]] indicates that moderate parameter changes can noticeably increase stored energy, which has implications for safety margins and fatigue planning.\r
\r
The practical conclusion is explicit: if the characterized linear interval is shorter than [[x_eq]], upgrade the spring selection or move to a nonlinear constitutive model.\r
\r
# Real-world example\r
\r
## Context\r
\r
A school laboratory is calibrating a spring dynamometer for repeated student use. The target spring has nominal [[k]] = 300 N/m, and intended loads correspond to masses between 0.1 and 1.0 kg. The team must define an operational range that remains valid, not only a printed scale.\r
\r
## Physical estimation\r
\r
For a 0.5 kg reference mass, gravitational load is [[m]]*[[g]] = 4.905 N. If linear behavior is assumed, equilibrium deformation is:\r
\r
[[x_eq]] = ([[m]]*[[g]])/[[k]] = 4.905/300 = 0.01635 m\r
\r
For 1.0 kg, the estimate is [[x_eq]] approximately 0.0327 m. Both values are small enough for typical educational instruments. If manufacturer characterization reports linearity up to 0.040 m, this operating range is defensible. The associated [[Uel]] can be tracked to estimate cycle stress and long-term drift risk.\r
\r
## Interpretation\r
\r
This application shows the operational value of the leaf. Hooke's law is not merely a textbook equation; it is a calibration framework when assumptions, limits, and sign conventions are explicit.\r
\r
A robust lab protocol therefore reports: measured [[k]], allowed deformation interval, consistency between signed force [[Fel]] and scalar level [[Fm]], and escalation criteria if linearity degrades. With this discipline, a simple spring becomes a reliable measurement device.\r
\r
This also improves maintenance planning: periodic recalibration can detect drift in [[k]] before it degrades classroom measurements. In that sense, the model is not only for solving one exercise, but for managing the full lifecycle of a measuring instrument.\r
`;export{e as default};
