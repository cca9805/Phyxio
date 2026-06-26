const e=`# Exam-type example

## Problem statement

A linear return system is modeled with natural pulsation [[omega0]] equal to 12 rad/s and equivalent damping coefficient [[gamma]] equal to 12 1/s. The initial perturbation has effective amplitude [[A]] equal to 0.040 m. Classify the regime, compute the characteristic time [[tau]], and estimate the output [[x]] when [[t]] is 0.25 s. The solution must close with a physical interpretation about speed and absence of sustained oscillation.

## Data

The relevant data are [[omega0]] = 12 rad/s, [[gamma]] = 12 1/s, [[A]] = 0.040 m, and [[t]] = 0.25 s. Units are coherent: [[omega0]] and [[gamma]] have inverse-time dimension, [[A]] and [[x]] are expressed in meters, and [[t]] is expressed in seconds. The objective is not only substitution, but deciding whether the system lies on the critical boundary and what that boundary predicts for the transient.

## System definition

The system is considered a linear second-order oscillator with equivalent viscous dissipation. The observable output is [[x]], representing displacement or deviation from equilibrium. The system natural scale is summarized by [[omega0]], and dissipation intensity is summarized by [[gamma]]. The amplitude [[A]] describes the initial perturbation that will be dissipated during the free response.

## Physical model

We use the critical damping model because the problem directly compares [[gamma]] with [[omega0]] and then requests a time response without sustained oscillation. In this model, equality between the two scales places the system exactly at the boundary between underdamped and overdamped behavior. After classifying the regime, [[tau]] acts as the settling clock and the expression for [[x]] describes the time shape of the decay.

## Model justification

The choice is physically reasonable because the statement declares a linear system and does not mention dominant external forcing, nonlinear friction, or parameter changes during the observed interval. The initial amplitude is moderate, so [[A]] is accepted as scaling the output without modifying the regime. If clear rebounds appeared in data, or if [[gamma]] changed with temperature or velocity, this ideal reading would have to be abandoned.

## Symbolic solution

First verify the boundary condition:

{{f:condicion_critica}}

Since the problem gives the same numerical values for [[gamma]] and [[omega0]], the system satisfies the ideal critical condition.

Then compute the time scale:

{{f:tiempo_caracteristico}}

Finally estimate the critical time output:

{{f:solucion_critica}}

The order matters: the critical output should not be evaluated before the regime is checked. The output represents the critical case only if equality between dissipative and natural scales has been validated.

## Numerical substitution

With [[omega0]] = 12 rad/s, the characteristic time is [[tau]] = 1/12 s, about 0.083 s. The instant [[t]] = 0.25 s corresponds to roughly three times [[tau]], so the response is expected to have decayed clearly.

For the output, the dimensionless product [[omega0]] times [[t]] is 3. The linear factor is 1 + 3 = 4 and the associated exponential decay is small, about 0.050. Multiplying by [[A]] = 0.040 m gives an output around 0.008 m. The exact value is not the main point: the response is already far below the initial amplitude.

## Dimensional validation

The critical equality compares two inverse-time quantities, so it is dimensionally coherent. The calculation of [[tau]] inverts a quantity in 1/s and produces seconds. In the time output, the product [[omega0]] times [[t]] is dimensionless, the exponential factor is also dimensionless, and [[A]] provides the length unit of [[x]].

## Physical interpretation

The system is in ideal critical damping: it returns without sustained oscillation and with a short time scale. At 0.25 s, about three characteristic times, the output has decreased from 0.040 m to a value of millimeter order. This indicates fast settling, although not instantaneous settling.

The physical reading is that [[gamma]] should not automatically be increased. If it were increased strongly, oscillation would disappear, but return could become slower. If it were reduced, rebound tendency would appear. The result shows why the critical case is a design reference: it combines speed with ideal absence of overshoot.

# Real-world example

## Context

A team designs a closing mechanism for a light laboratory lid. The lid must not rebound at the end of travel because it could damage a sensor, but it also must not take several seconds to settle. In a first calibration, [[omega0]] is estimated as 9 rad/s and [[gamma]] is adjusted until it becomes comparable with that natural scale.

## Physical estimation

The first estimate compares [[gamma]] with [[omega0]]. If both are within a design tolerance, the tuning is treated as critically damped. Then [[tau]] is computed; for [[omega0]] = 9 rad/s it is about 0.11 s. That allows measurements at 0.1 s, 0.3 s, and 0.5 s to check that [[x]] decreases monotonically.

If the lid starts from effective amplitude [[A]] = 0.030 m, the model predicts that after several multiples of [[tau]] the output will be much smaller than the initial value. This reading does not replace testing: it decides which times are reasonable and what curve shape should be expected. If the record repeatedly crosses equilibrium, tuning is below the critical threshold. If it does not rebound but takes too long, it may be overdamped.

## Interpretation

The real application shows that critical damping is not an abstract label. It is a tool for deciding whether the mechanism is tuned to return quickly without relevant rebound. [[tau]] connects the model with test times, while [[x]] verifies response shape. The final criterion must combine calculation, graph, and device tolerance.

If the system changes with temperature, wear, or lubrication, equality between [[gamma]] and [[omega0]] must be reviewed. Robust design does not stop at one nominal value: it checks that behavior remains acceptable near the critical boundary and inside the real operating range.
`;export{e as default};
