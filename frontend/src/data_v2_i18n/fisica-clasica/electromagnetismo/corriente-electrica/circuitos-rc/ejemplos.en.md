# Exam-type example


## Problem statement

A first-order RC stage is used to shape a startup transition in a sensing chain. The branch includes [[resistencia]] [[resistencia]] and [[capacitancia]] [[capacitancia]]. The capacitor voltage [[tension_del_capacitor]] starts from initial condition [[tension_inicial]] equal to zero and tends toward target level [[tension_final_de_carga]] under a step-like excitation. Determine the qualitative and quantitative behavior of [[tension_del_capacitor]] and transient current [[corriente_transitoria]] at representative instants, then justify why first-order modeling is physically consistent for this case.

## Data

- [[resistencia]] set to ten kiloohms.
- [[capacitancia]] set to one hundred microfarads.
- [[tension_final_de_carga]] set to ten volts.
- [[tension_inicial]] equal to zero volts.
- Analysis times [[tiempo]] chosen at one, three, and five characteristic scales.

## System definition

The system is the RC branch considered as a first-order dynamic subsystem driven by a stable source over the study window. The state variable is [[tension_del_capacitor]], while [[corriente_transitoria]] represents transient branch flow. Parameter pair [[resistencia]] and [[capacitancia]] defines characteristic scale [[tau]].

## Physical model

A linear first-order RC model is adopted. Under this model, [[tension_del_capacitor]] follows exponential approach toward [[tension_final_de_carga]], and [[corriente_transitoria]] decays from startup value toward near-zero steady condition.

## Model justification

Model choice is justified because topology is simple, parameters are treated as approximately constant in the analyzed range, and no evidence suggests dominant additional dynamics. The task aims at transient-scale estimation and design interpretation, which are well served by a one-pole approximation.

## Symbolic solution

Characteristic scale:

{{f:tau_rc}}

Charging state evolution:

{{f:carga}}

Discharging reference relation for scenario discrimination:

{{f:descarga}}

Charging transient current:

{{f:corriente_carga}}

## Numerical substitution

With the provided values, the characteristic scale is one second. At one characteristic interval, [[tension_del_capacitor]] reaches a significant fraction of the full transition. At three characteristic intervals, [[tension_del_capacitor]] is already close to [[tension_final_de_carga]], while [[corriente_transitoria]] is strongly reduced relative to startup. At five characteristic intervals, [[tension_del_capacitor]] is practically settled for introductory engineering purposes and [[corriente_transitoria]] approaches negligible magnitude.

The key result is not a single number but a behavior map. The selected component values produce a transient fast enough for basic startup sequencing while keeping current stress in a manageable range.

## Dimensional validation

[[tau]] must be expressed in seconds and remain consistent with resistance-capacitance product units. [[tension_del_capacitor]] must remain in volts and [[corriente_transitoria]] in amperes. Any mismatch usually comes from incomplete conversion of microfarads or kiloohms.

A second validation is trend consistency. In simple passive charging, [[tension_del_capacitor]] should move toward [[tension_final_de_carga]] as [[tiempo]] increases. If the computed trajectory moves away from target, scenario selection or sign handling is likely wrong.

## Physical interpretation

The computed behavior reflects a relaxation mechanism with memory. At startup, the difference between present state and target is large, so adjustment current [[corriente_transitoria]] is also large. As [[tension_del_capacitor]] approaches [[tension_final_de_carga]], the mismatch decreases and current decays.

Interpretation must answer whether this behavior supports the intended function. In this case, the RC stage smooths abrupt transitions and reaches stable operation within a practical temporal window, making it suitable for baseline conditioning tasks.

# Real-world example


## Context

A microcontroller input path receives noisy edges from a sensor line. Designers add an RC network to suppress short disturbances and deliver a cleaner analog level [[tension_del_capacitor]] to the converter input.

## Physical estimation

The estimation compares disturbance duration with [[tau]]. If disturbances are much shorter than [[tau]], output [[tension_del_capacitor]] changes only mildly and noise is attenuated. If disturbance duration is comparable to [[tau]], the stage begins to track noise and filtering quality degrades.

Field observation shows that the selected RC pair keeps [[tension_del_capacitor]] stable for sampling, while startup current [[corriente_transitoria]] remains within acceptable thermal margins for the chosen resistor.

## Interpretation

This application shows why RC modeling is a design language, not an exercise template. Choosing [[resistencia]] and [[capacitancia]] sets a tradeoff between responsiveness and disturbance rejection. Too small [[tau]] passes unwanted fast components. Too large [[tau]] slows useful response.

A physically grounded decision therefore combines time-scale reasoning, current-stress awareness, and functional objective alignment.

As a verification extension, engineers usually compare model outputs with sampled points taken at fractions and multiples of [[tau]]. If measured [[tension_del_capacitor]] consistently lags the predicted trend at early times and catches up later, that pattern often indicates additional loading or hidden dynamics not represented in the one-pole assumption. Conversely, if data aligns across startup, mid-transient, and near-steady segments, confidence in first-order adequacy increases substantially.

A second extension concerns uncertainty handling. Component tolerances and temperature dependence can move the effective transition speed, even when nominal equations are correct. For this reason, practical reports should include a brief sensitivity statement: how much does predicted settling behavior change if [[resistencia]] rises by tolerance maximum and [[capacitancia]] simultaneously shifts in the same unfavorable direction. This gives a physically meaningful margin estimate instead of a single optimistic number.

Finally, interpretation should remain causal. The model is not only producing values but explaining mechanism: storage in the capacitor, dissipation in the resistor, and decaying mismatch between state and target. Keeping that causal chain explicit is what prevents common mistakes such as treating [[corriente_transitoria]] as constant, over-trusting one point, or selecting equations without checking initial conditions.