# Models for work and torque

## Ideal model

The ideal model uses a fixed axis, known torque, and angular displacement measured in radians. If [[tau]] is constant, [[W]] is obtained with the constant-torque work relation. If the question asks for transfer rate, [[P]] is obtained with the angular-power relation. Transferred energy is interpreted without internal losses unless they are declared.

## Hypotheses

The axis is assumed fixed, the sign convention stable, and [[theta]] describes angular displacement about the same axis as [[tau]]. Angular speed [[omega]] is measured in radians per second. If power is used, torque and angular speed must be instantaneous and refer to the same state.

## Quantitative validity domain

The constant-torque model is reasonable if relative variation of [[tau]] during the interval is below 5%. If variation exceeds about 10%, it is time to switch to the variable-torque model and use the variable-torque work relation. In real machines, losses larger than 5% of computed work should appear explicitly in the balance.

## Model failure signals

The model fails if [[tau]] changes with [[theta]] and a simple product is still used. It also fails if torque axis does not match [[omega]], if degrees are used as radians, or if computed work matches neither energy change nor declared losses.

## Extended or alternative model

When to switch to an alternative model: if torque depends on angle, time, speed, or a controller. The extended model uses area under the torque-angle curve, integration of power over time, or balances with dissipated energy. Real motors may also require efficiency, heat, and power limits.

## Operational comparison

Use constant torque for wrenches, shafts under uniform load, and short intervals. Use variable torque for torsional springs, motor curves, and nonlinear brakes. Use power when the main datum is transfer rate. Use an energy balance when [[W]] must be compared with rotational kinetic energy.

## Diagnosis of experimental data

With measured data, plot [[tau]] against [[theta]] before choosing the formula. If the points form an almost horizontal band, the constant model remains meaningful. If hysteresis, saturation, or sign changes appear, area must be computed by intervals and the balance must include dissipation. For power, the equivalent check is to compare [[tau]] and [[omega]] at the same instant; values taken from different times can produce a [[P]] with no physical meaning.

This diagnosis also tells which uncertainty matters most. Angle errors dominate small rotations, torque calibration dominates high-load tests, and timing errors dominate power estimates.

Those limits should be reported with the final result.