const e=`# Exam-type example\r
\r
## Problem statement\r
A first-order RC stage is used to shape a startup transition in a sensing chain. The branch includes resistance [[R]] and capacitance [[C]]. The capacitor voltage [[Vc]] starts from initial condition [[V0]] equal to zero and tends toward target level [[Vf]] under a step-like excitation. Determine the qualitative and quantitative behavior of [[Vc]] and transient current [[I]] at representative instants, then justify why first-order modeling is physically consistent for this case.\r
\r
## Data\r
- [[R]] set to ten kiloohms.\r
- [[C]] set to one hundred microfarads.\r
- [[Vf]] set to ten volts.\r
- [[V0]] equal to zero volts.\r
- Analysis times [[t]] chosen at one, three, and five characteristic scales.\r
\r
## System definition\r
The system is the RC branch considered as a first-order dynamic subsystem driven by a stable source over the study window. The state variable is [[Vc]], while [[I]] represents transient branch flow. Parameter pair [[R]] and [[C]] defines characteristic scale [[tau]].\r
\r
## Physical model\r
A linear first-order RC model is adopted. Under this model, [[Vc]] follows exponential approach toward [[Vf]], and [[I]] decays from startup value toward near-zero steady condition.\r
\r
## Model justification\r
Model choice is justified because topology is simple, parameters are treated as approximately constant in the analyzed range, and no evidence suggests dominant additional dynamics. The task aims at transient-scale estimation and design interpretation, which are well served by a one-pole approximation.\r
\r
## Symbolic solution\r
Characteristic scale:\r
\r
{{f:tau_rc}}\r
\r
Charging state evolution:\r
\r
{{f:carga}}\r
\r
Discharging reference relation for scenario discrimination:\r
\r
{{f:descarga}}\r
\r
Charging transient current:\r
\r
{{f:corriente_carga}}\r
\r
## Numerical substitution\r
With the provided values, the characteristic scale is one second. At one characteristic interval, [[Vc]] reaches a significant fraction of the full transition. At three characteristic intervals, [[Vc]] is already close to [[Vf]], while [[I]] is strongly reduced relative to startup. At five characteristic intervals, [[Vc]] is practically settled for introductory engineering purposes and [[I]] approaches negligible magnitude.\r
\r
The key result is not a single number but a behavior map. The selected component values produce a transient fast enough for basic startup sequencing while keeping current stress in a manageable range.\r
\r
## Dimensional validation\r
[[tau]] must be expressed in seconds and remain consistent with resistance-capacitance product units. [[Vc]] must remain in volts and [[I]] in amperes. Any mismatch usually comes from incomplete conversion of microfarads or kiloohms.\r
\r
A second validation is trend consistency. In simple passive charging, [[Vc]] should move toward [[Vf]] as [[t]] increases. If the computed trajectory moves away from target, scenario selection or sign handling is likely wrong.\r
\r
## Physical interpretation\r
The computed behavior reflects a relaxation mechanism with memory. At startup, the difference between present state and target is large, so adjustment current [[I]] is also large. As [[Vc]] approaches [[Vf]], the mismatch decreases and current decays.\r
\r
Interpretation must answer whether this behavior supports the intended function. In this case, the RC stage smooths abrupt transitions and reaches stable operation within a practical temporal window, making it suitable for baseline conditioning tasks.\r
\r
# Real-world example\r
\r
## Context\r
A microcontroller input path receives noisy edges from a sensor line. Designers add an RC network to suppress short disturbances and deliver a cleaner analog level [[Vc]] to the converter input.\r
\r
## Physical estimation\r
The estimation compares disturbance duration with [[tau]]. If disturbances are much shorter than [[tau]], output [[Vc]] changes only mildly and noise is attenuated. If disturbance duration is comparable to [[tau]], the stage begins to track noise and filtering quality degrades.\r
\r
Field observation shows that the selected RC pair keeps [[Vc]] stable for sampling, while startup current [[I]] remains within acceptable thermal margins for the chosen resistor.\r
\r
## Interpretation\r
This application shows why RC modeling is a design language, not an exercise template. Choosing [[R]] and [[C]] sets a tradeoff between responsiveness and disturbance rejection. Too small [[tau]] passes unwanted fast components. Too large [[tau]] slows useful response.\r
\r
A physically grounded decision therefore combines time-scale reasoning, current-stress awareness, and functional objective alignment.\r
\r
As a verification extension, engineers usually compare model outputs with sampled points taken at fractions and multiples of [[tau]]. If measured [[Vc]] consistently lags the predicted trend at early times and catches up later, that pattern often indicates additional loading or hidden dynamics not represented in the one-pole assumption. Conversely, if data aligns across startup, mid-transient, and near-steady segments, confidence in first-order adequacy increases substantially.\r
\r
A second extension concerns uncertainty handling. Component tolerances and temperature dependence can move the effective transition speed, even when nominal equations are correct. For this reason, practical reports should include a brief sensitivity statement: how much does predicted settling behavior change if [[R]] rises by tolerance maximum and [[C]] simultaneously shifts in the same unfavorable direction. This gives a physically meaningful margin estimate instead of a single optimistic number.\r
\r
Finally, interpretation should remain causal. The model is not only producing values but explaining mechanism: storage in the capacitor, dissipation in the resistor, and decaying mismatch between state and target. Keeping that causal chain explicit is what prevents common mistakes such as treating [[I]] as constant, over-trusting one point, or selecting equations without checking initial conditions.\r
`;export{e as default};
