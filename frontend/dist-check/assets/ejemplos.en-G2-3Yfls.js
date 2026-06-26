const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A small sphere of mass [[m]] moves through a viscous fluid along a horizontal guide. In the measured interval, the lab confirms that drag can be modeled as linear with respect to relative speed [[v]]. The task is to estimate drag-force magnitude [[F_d]] at two speed conditions and to interpret what characteristic time [[tau]] means for motion response.\r
\r
This is not only a number-crunching exercise. The assessment checks whether you can distinguish instant resistive reading ([[F_d]]) from dynamic adjustment reading ([[tau]]), and whether you can justify when the linear model is appropriate.\r
\r
## Data\r
\r
An experimentally calibrated value of [[b]] is provided for the setup. Mass [[m]] is known and stable during the whole experiment. Two relative speeds are measured, [[v]]_1 and [[v]]_2, with [[v]]_2 approximately twice [[v]]_1.\r
\r
Protocol notes:\r
\r
- Fluid temperature remains nearly constant.\r
- System geometry does not change in the measured segment.\r
- Instrument noise is low in the selected speed window.\r
\r
These conditions matter because they support the approximation of nearly constant [[b]]. Without that approximation, direct comparison can lose physical meaning.\r
\r
## System definition\r
\r
System: sphere plus translational motion along one main axis.\r
\r
Environment: viscous fluid at rest in the laboratory frame.\r
\r
Leaf-core quantities:\r
\r
- [[F_d]]: magnitude of fluid resistive force.\r
- [[b]]: effective resistive slope in the working range.\r
- [[v]]: relative speed between sphere and fluid.\r
- [[m]]: inertial mass.\r
- [[tau]]: characteristic adjustment time.\r
\r
In the horizontal free-body diagram, resistive force opposes motion. This solution uses magnitudes in substitution and restores direction in final interpretation.\r
\r
## Physical model\r
\r
Linear drag constitutive relation:\r
\r
{{f:arrastre_lineal_estandar}}\r
\r
Characteristic-time relation:\r
\r
{{f:tiempo_relajacion_lineal}}\r
\r
These two equations answer two complementary questions: instantaneous resistance level and dynamic adaptation pace.\r
\r
## Model justification\r
\r
The linear model is selected for three physical and experimental reasons:\r
\r
1. In the measured [[v]] window, the calibrated [[F_d]]-[[v]] trend is near-linear.\r
2. Parameter [[b]] remains stable within reported tolerance.\r
3. The exercise objective is linear-mechanism interpretation, not nonlinear-regime characterization.\r
\r
Using [[tau]] is also necessary because the question asks for dynamic meaning, not only force estimation.\r
\r
## Symbolic solution\r
\r
For each speed condition:\r
\r
{{f:arrastre_lineal_estandar}}\r
\r
Compute [[F_d]]_1 and [[F_d]]_2 by substituting [[v]]_1 and [[v]]_2 with the same [[b]].\r
\r
Then compute the time scale:\r
\r
{{f:tiempo_relajacion_lineal}}\r
\r
Using [[m]] and [[b]] yields [[tau]], interpreted as the characteristic damping-adjustment time.\r
\r
Main symbolic consistency checks:\r
\r
- If [[v]]_2 = 2 [[v]]_1 and [[b]] is constant, then [[F_d]]_2 should be about 2 [[F_d]]_1.\r
- If [[m]] increases at fixed [[b]], [[tau]] increases.\r
- If [[b]] increases at fixed [[m]], [[tau]] decreases.\r
\r
These checks validate physical coherence of the procedure.\r
\r
## Numerical substitution\r
\r
With representative bench values, moving from [[v]]_1 to [[v]]_2 yields proportional growth in [[F_d]]. The ratio [[F_d]]_2/[[F_d]]_1 remains close to [[v]]_2/[[v]]_1, as required by linear drag.\r
\r
The computed [[tau]] follows from the ratio [[m]]/[[b]]. A relatively large mass in a moderately viscous setup gives larger [[tau]] and slower adjustment. A more resistive medium (larger [[b]]) gives smaller [[tau]] and faster adjustment.\r
\r
Unit discipline is mandatory. Keeping [[v]] in km/h or [[m]] in g without conversion can seriously distort [[b]] or [[tau]] even when the calculator output looks plausible.\r
\r
## Dimensional validation\r
\r
Check 1: in the linear relation, [[b]] multiplied by [[v]] must produce N for [[F_d]].\r
\r
Check 2: in the time-scale relation, [[m]] divided by [[b]] must produce s for [[tau]].\r
\r
Check 3: physical domain. Parameters should remain nonnegative in this context, and results must preserve mechanical meaning.\r
\r
Check 4: trend coherence. If [[v]] rises at fixed [[b]], [[F_d]] cannot decrease. If [[b]] rises at fixed [[m]], [[tau]] cannot increase.\r
\r
These checks prevent acceptance by algebraic inertia.\r
\r
## Physical interpretation\r
\r
The physical reading has two layers.\r
\r
Instant layer: within the linear domain, [[F_d]] grows proportionally with [[v]]. Therefore, doubling speed does not quadruple resistance in this leaf; it approximately doubles it.\r
\r
Temporal layer: [[tau]] summarizes how quickly the system yields to medium dissipation. Small [[tau]] indicates rapid damping adjustment; large [[tau]] indicates persistent inertia.\r
\r
A complete conclusion must connect both layers: the model explains instantaneous resistive force and dynamic adjustment pace under the same validity assumptions.\r
\r
# Real-world example\r
\r
## Context\r
\r
A bioengineering lab studies microspheres carrying markers through a viscous channel. The team must tune advance speed without exceeding actuator stress limits. The operating window is intentionally selected to remain inside a regime where linear drag is stable and useful.\r
\r
Two operating settings are compared: one with higher target speed and one with lower speed but higher control margin. A robust decision requires more than speed values; it requires [[F_d]] estimation plus [[tau]] reading to anticipate response to command changes.\r
\r
## Physical estimation\r
\r
First, [[b]] is calibrated from a short reference run, checking that the [[F_d]]-[[v]] trend remains near-linear.\r
\r
Then for each speed target, drag force is estimated with:\r
\r
{{f:arrastre_lineal_estandar}}\r
\r
Next, using microsphere [[m]] and calibrated [[b]], characteristic time is estimated with:\r
\r
{{f:tiempo_relajacion_lineal}}\r
\r
If the faster setting drives [[F_d]] beyond actuator margin, it is rejected even if nominal travel time is shorter. If the slower setting keeps both [[F_d]] and [[tau]] in a stable-control range, it becomes preferable for continuous operation.\r
\r
This procedure shows the operational value of the leaf: decisions are based on mechanism plus time-scale reading, not on intuition alone.\r
\r
## Interpretation\r
\r
The real case confirms three core messages:\r
\r
1. [[F_d]] depends on both [[v]] and [[b]]; it cannot be inferred only from distance or elapsed time.\r
2. [[tau]] provides information that instantaneous force calculation alone cannot provide.\r
3. Linear-model validity requires condition control; if systematic curvature appears in [[F_d]]-[[v]], strategy must be revised.\r
\r
Didactically, this links theory and decision: use [[F_d]], [[b]], [[v]], [[m]], and [[tau]] together to choose a physically coherent and operationally safe configuration.`;export{e as default};
