const e=`# Exam-type example
## Problem statement
A laboratory resistive module is connected to a DC source. During a stable trial, measured values on the same element are [[V]] at 12 volts and [[I]] at 1.8 amperes. The task has three objectives: estimate operating [[P]], compute dissipated [[E]] over a fifteen-minute interval, and decide whether operation is safe if continuous rated power is 20 watts. The expected output is not only numeric. It must include model assumptions, validity limits, and a causal physical interpretation.

## Data
1. [[V]] measured across the component terminals: 12 volts.
2. [[I]] measured in series with the component: 1.8 amperes.
3. [[t]] operating interval: fifteen minutes.
4. Manufacturer continuous rating: 20 watts.
5. Ambient condition: natural ventilation without additional heatsink.
6. Initial hypothesis: dominant resistive behavior in the observed interval.

## System definition
The analyzed system is a single resistive component. The system boundary is the component terminal pair. Inputs are coherent measurements of [[V]] and [[I]] taken in the same representative operating state. The primary interpreted output is [[P]], while interval accumulation is represented by [[E]]. This definition prevents node-mixing mistakes and maintains causal consistency between electrical excitation and thermal response.

## Physical model
A first-pass ideal resistive model is selected. Power is estimated from direct measured voltage and current. Energy accumulation is estimated from power and exposure time.

{{f:potencia_base}}

{{f:energia_desde_potencia}}

## Model justification
The model is justified because measured [[V]] and [[I]] belong to the same element and no evidence suggests strongly reactive behavior during the test window. The pedagogical goal is a safe-rating check under controlled conditions, so a first-order rate-and-accumulation model is appropriate. Additionally, it is assumed that the thermal [[R]] of the system remains constant during this short test.

A model-escalation trigger is also defined. If repeated tests show significant effective resistance drift due to heating, or persistent disagreement between methods, analysis must move to an extended electrothermal model.

## Symbolic solution
The symbolic solution follows a two-step structure to preserve physical meaning.

Step A. Obtain operating power from measured electrical state.

{{f:potencia_base}}

Step B. Obtain accumulated interval energy from power and time.

{{f:energia_desde_potencia}}

Step C. Alternatively, if the equivalent resistance of the component were verified, the dissipated power could also have been estimated using the current-dependent form.

{{f:potencia_resistiva_corriente}}

Step D. Similarly, if the resistance were known and one preferred to use the voltage data directly:

{{f:potencia_resistiva_tension}}


This sequence enforces rate-first and accumulation-second reasoning, and it helps identify where unit mistakes enter the workflow.

## Numerical substitution
Time is converted to SI before energy estimation. Fifteen minutes correspond to nine hundred seconds.

Using measured values, operating power is 21.6 watts.

Using that power with converted interval time, accumulated energy is 19440 joules.

For practical comparison with consumer metering, the same energy can be expressed as 5.4 watt-hour.

## Dimensional validation
The first step is dimensionally coherent because voltage unit multiplied by current unit yields power unit.

The second step is dimensionally coherent because power unit multiplied by time unit yields energy unit.

This dimensional control is consistent with expected order of magnitude for a small laboratory component and reduces hidden conversion errors.

## Physical interpretation
The central physical reading is that the component operates above its continuous rating. This indicates that the current operating state is physically demanding for the device. While the percentage excess may look modest, this implies that sustained over-rating can accelerate thermal aging through cumulative stress. Therefore, the key risk variable is the rate of dissipation, rather than only the total interval energy.

A prudent engineering decision is to reduce electrical demand or increase the component margin. This result is physically consistent with the observed load. Surface temperature monitoring is also recommended to verify that ideal assumptions are not masking resistance drift, which depends on the thermal environment and the actual heat sink efficiency.


# Real-world example
## Context
A classroom charging station powers multiple portable devices at the same time. The lab manager must decide whether the current supply is sufficient or should be replaced with a higher-capacity unit. Available information includes average per-port current and typical session duration. The objective is to combine power estimation with operational reliability criteria.

Representative operating data:
1. Average simultaneous devices: eight.
2. Per-port output voltage: five volts.
3. Average per-port current: 1.2 amperes.
4. Session duration: two hours.
5. Installation condition: limited ventilation in compact cabinet.

## Physical estimation
First, estimate per-port power from direct electrical state.

{{f:potencia_base}}

Per-port average power is six watts. For eight ports, aggregate average power reaches forty-eight watts.

Then estimate session energy from average power and interval duration.

{{f:energia_desde_potencia}}

Total session energy is 345600 joules, equivalent to 96 watt-hour. This value describes accumulated consumption, while average power describes instantaneous stress on the supply system.

For risk reading, compare average operating demand with possible simultaneous charging spikes during low-battery startup. In short windows, aggregate current can rise above average and push the source toward thermal saturation even if daily total energy appears acceptable.

## Interpretation
The dominant variable in this scenario is aggregate current, not only daily energy. A supply selected exactly at average demand may run near its limits, increasing internal temperature and reducing reliability. In educational service this appears as resets, voltage drops, and premature wear.

Recommended decision: use a source with operational margin above expected average demand, add basic internal thermal monitoring, and apply staged connection policy under full occupancy. This improves electrical safety, charging stability, and equipment lifetime.

As transferable learning, the case shows that separating and then linking [[P]] and [[E]] leads to better decisions than relying on a single consumption figure. The same method applies to lab design, preventive maintenance, and small-scale energy auditing.
`;export{e as default};
