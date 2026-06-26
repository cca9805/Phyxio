const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A packaging conveyor starts under medium load at the beginning of each production cycle. The drive controller can impose a nearly constant applied force [[F_ap]] during the first seconds, but maintenance reports progressive heating and longer start-up times. The engineering team wants to verify whether the system still has enough dynamic margin or whether internal losses already compromise reliability.\r
\r
You must compute the real acceleration [[a]], compare it with the ideal acceleration [[a_ideal]], evaluate energetic consistency through [[P_in]], [[P_out]], [[P_loss]], and provide a physically grounded interpretation for operational decisions.\r
\r
## Data\r
\r
- Effective moving mass [[m]] = 1850 kg.\r
- Applied force command [[F_ap]] = 5400 N.\r
- Equivalent loss force [[F_loss]] = 1700 N.\r
- Input power [[P_in]] = 34 kW.\r
- Mechanical efficiency [[eta]] = 0.84.\r
- Drum equivalent radius [[r]] = 0.19 m.\r
- Measured friction torque [[tau_fr]] = 320 N m.\r
- Instantaneous speed at one second [[v]] = 0.72 m/s.\r
\r
## System definition\r
\r
The modeled system includes motor, gearbox, drum, belt, payload, and bearings. In translational dynamics, all inertia is grouped into effective mass [[m]]. Internal dissipation is grouped into equivalent force [[F_loss]]. The key question is start-up viability, which is controlled by the sign and magnitude of [[F_net]].\r
\r
## Physical model\r
\r
The core equations used in this leaf are:\r
\r
{{f:fuerza_neta_real}}\r
\r
{{f:segunda_ley_efectiva}}\r
\r
{{f:aceleracion_ideal}}\r
\r
{{f:aceleracion_con_eficiencia}}\r
\r
{{f:rendimiento_potencia}}\r
\r
{{f:potencia_perdida}}\r
\r
{{f:fuerza_equivalente_torque}}\r
\r
{{f:potencia_traslacional}}\r
\r
## Model justification\r
\r
This model is appropriate because start-up is analyzed in a short time window where [[F_ap]] and [[F_loss]] can be treated as quasi-constant. The availability of [[tau_fr]] and [[r]] provides an independent estimate of loss force, which strengthens parameter credibility. The objective is not high-frequency electrical transients but real mechanical behavior: margin in [[F_net]], plausible [[a]], and energy consistency across [[P_in]], [[P_out]], and [[P_loss]].\r
\r
## Symbolic solution\r
\r
1. Compute real net force from applied and loss terms.\r
\r
{{f:fuerza_neta_real}}\r
\r
2. Compute effective acceleration from net force and effective mass.\r
\r
{{f:segunda_ley_efectiva}}\r
\r
3. Compute ideal acceleration as frictionless reference.\r
\r
{{f:aceleracion_ideal}}\r
\r
4. Cross-check with efficiency-based approximation.\r
\r
{{f:aceleracion_con_eficiencia}}\r
\r
5. Compute useful and dissipated power.\r
\r
{{f:rendimiento_potencia}}\r
\r
{{f:potencia_perdida}}\r
\r
6. Validate the loss-force order through friction torque conversion.\r
\r
{{f:fuerza_equivalente_torque}}\r
\r
7. Cross-check translational mechanical power.\r
\r
{{f:potencia_traslacional}}\r
\r
## Numerical substitution\r
\r
- [[F_net]] = 5400 - 1700 = 3700 N.\r
- [[a]] = 3700 / 1850 = 2.00 m/s2.\r
- [[a_ideal]] = 5400 / 1850 = 2.92 m/s2.\r
\r
Real to ideal ratio is 2.00/2.92, already showing significant dissipation impact.\r
\r
Efficiency approximation:\r
- [[a]] approx = [[eta]] x [[a_ideal]] = 0.84 x 2.92 = 2.45 m/s2.\r
\r
The gap between 2.45 and 2.00 suggests that losses are not fully represented by a single constant efficiency during this transient phase.\r
\r
Power terms:\r
- Estimated useful power [[P_out]]: 28.56 kW.\r
- Dissipated power [[P_loss]]: 5.44 kW.\r
\r
Torque-to-force conversion:\r
- Estimated [[F_loss]] = [[tau_fr]]/[[r]] = 320/0.19 = 1684 N.\r
\r
This is close to the primary 1700 N assumption, so the mechanical-loss estimate is consistent.\r
\r
Translational power cross-check:\r
- [[P]] = [[F]] x [[v]].\r
Taking [[F]] = [[F_net]] and [[v]] = 0.72 m/s:\r
- [[P]] = 3700 x 0.72 = 2664 W.\r
\r
This value is lower than [[P_out]] because speed is still low in early start-up and part of the energy flow remains in transient build-up and dissipation.\r
\r
## Dimensional validation\r
\r
- [[F_net]] in N, [[m]] in kg, and [[a]] in m/s2 are consistent with Newton dynamics.\r
- [[P_in]], [[P_out]], and [[P_loss]] are in watts and satisfy energy balance.\r
- [[tau_fr]]/[[r]] yields N, coherent with [[F_loss]].\r
- [[P]] from [[F]] and [[v]] yields W.\r
\r
No dimensional contradiction appears. The numerical result is physically actionable.\r
\r
## Physical interpretation\r
\r
The system can still start because [[F_net]] is positive and produces measurable [[a]]. However, the difference between [[a_ideal]] and [[a]] confirms non-negligible losses. The mismatch between efficiency-based acceleration and force-balance acceleration indicates state-dependent dissipation during start-up, which is typical in aging mechanical transmissions.\r
\r
Operationally, the line remains functional but with reduced robustness. Under higher load or hotter ambient conditions, start margin may become insufficient. The correct decision is not immediate shutdown, but preventive intervention focused on elements driving [[F_loss]] and [[P_loss]].\r
\r
# Real-world example\r
\r
## Context\r
\r
A shuttle cart in a palletizing plant moves loads between stations under variable throughput. During peak shifts, cycle frequency rises and thermal stress accumulates. Operators report slower response even though command profiles are unchanged. Management must decide whether the issue is control tuning or mechanical degradation.\r
\r
Monitoring over several days tracks [[P_in]], [[P_out]], [[P_loss]], [[eta]], [[F_ap]], and [[F_loss]]. The trend is clear: [[P_loss]] grows while commanded [[F_ap]] remains nearly constant. In parallel, effective acceleration [[a]] decreases and cycle time drifts upward.\r
\r
## Physical estimation\r
\r
A fast two-scenario estimate is used:\r
\r
- Healthy scenario: [[eta]] around 0.90 and moderate [[F_loss]].\r
- Degraded scenario: [[eta]] around 0.78 and elevated [[F_loss]] due to bearing wear and misalignment.\r
\r
With the same [[F_ap]], the degraded scenario yields much lower [[F_net]], which directly reduces [[a]]. Lower acceleration extends time to useful speed [[v]], increasing cycle duration. At the same time, higher [[P_loss]] raises thermal burden per cycle, accelerating degradation.\r
\r
If effective radius [[r]] changes due to drum wear, torque-to-force projection from [[tau_fr]] may become biased unless [[r]] is remeasured in situ. That detail is often neglected and leads to underestimation of dissipation.\r
\r
## Interpretation\r
\r
The dominant issue is not insufficient force command but poor conversion from input to useful motion. The system is still operational, yet energy quality and dynamic margin are deteriorated. The highest-impact action is targeted maintenance on the loss-generating chain: bearings, alignment, lubrication state, and contact surfaces.\r
\r
The transferable lesson is central to this leaf: in real systems, the relevant engineering question is not only how much force is commanded, but how much of that command survives losses and becomes effective acceleration.`;export{e as default};
