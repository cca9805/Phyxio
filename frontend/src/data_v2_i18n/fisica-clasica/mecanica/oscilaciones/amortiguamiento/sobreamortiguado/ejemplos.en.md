# Exam-type example

## Problem statement

A mechanical sensor returns to equilibrium after an initial disturbance. Its equivalent damping is [[gamma]] = 12 s^-1 and its natural scale is [[omega0]] = 10 s^-1. For the initial conditions of the test, [[C1]] = 4 mm and [[C2]] = -1 mm. Compute the roots, decide whether the model is overdamped, and estimate the position [[x]] at [[t]] = 0.40 s.

## Data

[[gamma]] = 12 s^-1, [[omega0]] = 10 s^-1, [[C1]] = 4 mm, [[C2]] = -1 mm, and [[t]] = 0.40 s. The final unknown is [[x]], but [[r1]] and [[r2]] must be computed first. The data are intentionally given in coherent time units so that the exponential arguments can be checked directly.

## System definition

The system is modeled as a free linear second-order oscillator. The variable [[x]] measures displacement from equilibrium. No external force is included during the observed interval, so the response is controlled by the initial conditions and the two decay modes.

## Physical model

The overdamped regime is used because the central relation of this leaf requires [[gamma]] > [[omega0]]. That comparison determines that [[x]] should not be modeled with damped sine and cosine terms, but with the two real modes [[r1]] and [[r2]]. The calculation therefore seeks decay rates rather than an oscillation period.

## Model justification

The model is appropriate if the millimeter-scale amplitude keeps the sensor in its linear range and if dissipation can be approximated by a viscous law. It is also assumed that [[gamma]] and [[omega0]] do not change with temperature or displacement during the test. If the sensor had stops, dry friction, or continuous forcing, the double exponential model would be only a local approximation.

## Symbolic solution

First the regime is checked:

{{f:condicion_sobreamortiguado}}

Then the slow mode is obtained:

{{f:raices_sobreamortiguado}}

The fast mode is computed with:

{{f:raiz2_sobreamortiguado}}

Finally, the time position is evaluated through:

{{f:solucion_sobreamortiguada}}

This order matters. The roots are computed only after the regime is classified, and [[x]] is evaluated only after the two modal rates are known.

## Numerical substitution

Since 12 s^-1 > 10 s^-1, the regime is overdamped. The square root is sqrt(12^2 - 10^2) = sqrt(44) = 6.63 s^-1. Therefore [[r1]] = -12 + 6.63 = -5.37 s^-1 and [[r2]] = -12 - 6.63 = -18.63 s^-1.

For [[t]] = 0.40 s, the first exponent is exp(-5.37·0.40) = exp(-2.15) ≈ 0.117. The second is exp(-18.63·0.40) = exp(-7.45) ≈ 0.00058. Then [[x]] ≈ 4 mm·0.117 - 1 mm·0.00058 = 0.467 mm. The fast term has almost disappeared and the reading is dominated by [[r1]].

## Dimensional validation

[[r1]] and [[r2]] are in s^-1, so [[r1]][[t]] and [[r2]][[t]] are dimensionless. [[C1]], [[C2]], and [[x]] are in millimeters. The sum has displacement units, so the expression is dimensionally coherent. This check also prevents the common mistake of inserting milliseconds directly as if they were seconds.

## Physical interpretation

Physically, this result indicates that the sensor does not ideally oscillate because the regime condition is satisfied. However, the residual value of 0.467 mm at 0.40 s means that saying "there is no rebound" is not enough; one must decide whether that deviation is acceptable for measurement. If the instrument requires an error below 0.1 mm at that time, the system is too slow even though it is stable.

The causal reading is that [[r2]] contributes almost nothing at that instant, while [[r1]] still preserves a visible fraction of the initial displacement. This is exactly the practical risk of overdamping: it can be safe against overshoot while failing a response-time requirement.

The result also shows why the two roots must not be averaged into a single rate. The fast mode makes the first part of the transient look efficient, but the slow mode determines whether the sensor is useful at the requested observation time. If the tolerance is strict, the designer must change the damping strategy or the natural scale instead of concluding that the absence of oscillation is enough.

# Real-world example

## Context

A hydraulic door closer is adjusted to prevent the door from hitting the frame. The technician increases damping until rebound disappears. The physical question is whether the closer is well adjusted or excessively overdamped.

## Physical estimation

If the closer takes several seconds to complete the final part of the motion, the fast mode no longer matters: [[r1]] dominates. A video estimate can fit the tail of [[x]] to an exponential and obtain an effective rate. If that rate is very small in absolute value, the system is safe against impact but slow for everyday use.

For example, if the remaining opening decreases from 4 cm to 2 cm in 1.5 s, the tail has an approximate rate magnitude of ln(2)/1.5 s ≈ 0.46 s^-1. That slow rate does not indicate instability; it indicates a damping choice that sacrifices speed. The user experiences it as a door that seems not to finish closing.

## Interpretation

The decision is not based only on absence of oscillation. It is based on comparing closing time with the practical objective. This leaf explains that excess [[gamma]] removed overshoot but left a slow root controlling the behavior perceived by the user. A complete diagnosis asks whether the closer avoids impact and whether it completes the motion within the allowed time.
