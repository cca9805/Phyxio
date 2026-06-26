# Exam-type example

## Problem statement

A packaging conveyor starts under medium load at the beginning of each production cycle. The drive controller can impose a nearly constant applied force [[F_ap]] during the first seconds, but maintenance reports progressive heating and longer start-up times. The engineering team wants to verify whether the system still has enough dynamic margin or whether internal losses already compromise reliability.

You must compute the real acceleration [[a]], compare it with the ideal acceleration [[a_ideal]], evaluate energetic consistency through [[P_in]], [[P_out]], [[P_loss]], and provide a physically grounded interpretation for operational decisions.

## Data

- Effective moving mass [[m]] = 1850 kg.
- Applied force command [[F_ap]] = 5400 N.
- Equivalent loss force [[F_loss]] = 1700 N.
- Input power [[P_in]] = 34 kW.
- Mechanical efficiency [[eta]] = 0.84.
- Drum equivalent radius [[r]] = 0.19 m.
- Measured friction torque [[tau_fr]] = 320 N m.
- Instantaneous speed at one second [[v]] = 0.72 m/s.

## System definition

The modeled system includes motor, gearbox, drum, belt, payload, and bearings. In translational dynamics, all inertia is grouped into effective mass [[m]]. Internal dissipation is grouped into equivalent force [[F_loss]]. The key question is start-up viability, which is controlled by the sign and magnitude of [[F_net]].

## Physical model

The core equations used in this leaf are:

{{f:fuerza_neta_real}}

{{f:segunda_ley_efectiva}}

{{f:aceleracion_ideal}}

{{f:aceleracion_con_eficiencia}}

{{f:rendimiento_potencia}}

{{f:potencia_perdida}}

{{f:fuerza_equivalente_torque}}

{{f:potencia_traslacional}}

## Model justification

This model is appropriate because start-up is analyzed in a short time window where [[F_ap]] and [[F_loss]] can be treated as quasi-constant. The availability of [[tau_fr]] and [[r]] provides an independent estimate of loss force, which strengthens parameter credibility. The objective is not high-frequency electrical transients but real mechanical behavior: margin in [[F_net]], plausible [[a]], and energy consistency across [[P_in]], [[P_out]], and [[P_loss]].

## Symbolic solution

1. Compute real net force from applied and loss terms.

{{f:fuerza_neta_real}}

2. Compute effective acceleration from net force and effective mass.

{{f:segunda_ley_efectiva}}

3. Compute ideal acceleration as frictionless reference.

{{f:aceleracion_ideal}}

4. Cross-check with efficiency-based approximation.

{{f:aceleracion_con_eficiencia}}

5. Compute useful and dissipated power.

{{f:rendimiento_potencia}}

{{f:potencia_perdida}}

6. Validate the loss-force order through friction torque conversion.

{{f:fuerza_equivalente_torque}}

7. Cross-check translational mechanical power.

{{f:potencia_traslacional}}

## Numerical substitution

- [[F_net]] = 5400 - 1700 = 3700 N.
- [[a]] = 3700 / 1850 = 2.00 m/s2.
- [[a_ideal]] = 5400 / 1850 = 2.92 m/s2.

Real to ideal ratio is 2.00/2.92, already showing significant dissipation impact.

Efficiency approximation:
- [[a]] approx = [[eta]] x [[a_ideal]] = 0.84 x 2.92 = 2.45 m/s2.

The gap between 2.45 and 2.00 suggests that losses are not fully represented by a single constant efficiency during this transient phase.

Power terms:
- Estimated useful power [[P_out]]: 28.56 kW.
- Dissipated power [[P_loss]]: 5.44 kW.

Torque-to-force conversion:
- Estimated [[F_loss]] = [[tau_fr]]/[[r]] = 320/0.19 = 1684 N.

This is close to the primary 1700 N assumption, so the mechanical-loss estimate is consistent.

Translational power cross-check:
- [[P]] = [[F]] x [[v]].
Taking [[F]] = [[F_net]] and [[v]] = 0.72 m/s:
- [[P]] = 3700 x 0.72 = 2664 W.

This value is lower than [[P_out]] because speed is still low in early start-up and part of the energy flow remains in transient build-up and dissipation.

## Dimensional validation

- [[F_net]] in N, [[m]] in kg, and [[a]] in m/s2 are consistent with Newton dynamics.
- [[P_in]], [[P_out]], and [[P_loss]] are in watts and satisfy energy balance.
- [[tau_fr]]/[[r]] yields N, coherent with [[F_loss]].
- [[P]] from [[F]] and [[v]] yields W.

No dimensional contradiction appears. The numerical result is physically actionable.

## Physical interpretation

The system can still start because [[F_net]] is positive and produces measurable [[a]]. However, the difference between [[a_ideal]] and [[a]] confirms non-negligible losses. The mismatch between efficiency-based acceleration and force-balance acceleration indicates state-dependent dissipation during start-up, which is typical in aging mechanical transmissions.

Operationally, the line remains functional but with reduced robustness. Under higher load or hotter ambient conditions, start margin may become insufficient. The correct decision is not immediate shutdown, but preventive intervention focused on elements driving [[F_loss]] and [[P_loss]].

# Real-world example

## Context

A shuttle cart in a palletizing plant moves loads between stations under variable throughput. During peak shifts, cycle frequency rises and thermal stress accumulates. Operators report slower response even though command profiles are unchanged. Management must decide whether the issue is control tuning or mechanical degradation.

Monitoring over several days tracks [[P_in]], [[P_out]], [[P_loss]], [[eta]], [[F_ap]], and [[F_loss]]. The trend is clear: [[P_loss]] grows while commanded [[F_ap]] remains nearly constant. In parallel, effective acceleration [[a]] decreases and cycle time drifts upward.

## Physical estimation

A fast two-scenario estimate is used:

- Healthy scenario: [[eta]] around 0.90 and moderate [[F_loss]].
- Degraded scenario: [[eta]] around 0.78 and elevated [[F_loss]] due to bearing wear and misalignment.

With the same [[F_ap]], the degraded scenario yields much lower [[F_net]], which directly reduces [[a]]. Lower acceleration extends time to useful speed [[v]], increasing cycle duration. At the same time, higher [[P_loss]] raises thermal burden per cycle, accelerating degradation.

If effective radius [[r]] changes due to drum wear, torque-to-force projection from [[tau_fr]] may become biased unless [[r]] is remeasured in situ. That detail is often neglected and leads to underestimation of dissipation.

## Interpretation

The dominant issue is not insufficient force command but poor conversion from input to useful motion. The system is still operational, yet energy quality and dynamic margin are deteriorated. The highest-impact action is targeted maintenance on the loss-generating chain: bearings, alignment, lubrication state, and contact surfaces.

The transferable lesson is central to this leaf: in real systems, the relevant engineering question is not only how much force is commanded, but how much of that command survives losses and becomes effective acceleration.