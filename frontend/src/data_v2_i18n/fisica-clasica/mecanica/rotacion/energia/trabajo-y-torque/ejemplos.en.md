# Exam-type example

## Problem statement

A motor applies constant torque [[tau]] of 50 N m to a shaft that rotates 12 rad. Then, in another interval, torque varies linearly with angle from 50 N m to 20 N m over 10 rad. Compute total work [[W]] and instantaneous power [[P]] if final [[omega]] is 30 rad/s and final torque is 20 N m.

## Data

First interval: constant [[tau]] of 50 N m and [[theta]] of 12 rad. Second interval: variable torque from 50 N m to 20 N m over 10 rad. Final state: [[omega]] equal to 30 rad/s. The solution uses the constant-torque work relation, the variable-torque work relation, and the angular-power relation.

## System definition

The system is the shaft driven by the motor. The motor is an external agent delivering energy. Internal losses are not included because the statement does not provide them. If losses existed, external work would not equal the increase in rotational energy of the shaft.

## Physical model

The physical model has fixed axis, positive sign in the rotation direction, and known torque. In the first interval [[tau]] is constant. In the second interval [[tau]] depends on [[theta]], so work is interpreted as area under the torque-angle curve.

## Model justification

The statement explicitly separates a constant interval and a variable interval. Therefore one multiplication is not used for the whole process. Final angular speed allows instantaneous power to be computed with [[P]], [[tau]], and [[omega]] from the same axis and same instant.

## Symbolic solution

For the first interval, use the constant-torque work relation: work is [[tau]] times [[theta]]. For the variable interval, use the variable-torque work relation: because variation is linear, area is average torque times angular displacement. For final power, use the angular-power relation.

## Numerical substitution

First interval:

{{f:trabajo_torque_constante}}

. Second interval:

{{f:trabajo_torque_variable}}

With average torque 35 N m, work over the variable interval is 35 * 10 = 350 J. Total work is 950 J. Final power is

{{f:potencia_angular}}

.

## Dimensional validation

Newton meter times radians gives joules because the radian is dimensionless. Newton meter times radians per second gives watts. Units confirm that [[W]] is accumulated energy and [[P]] is transfer rate.

## Physical interpretation

The result means the motor delivered 950 J to the shaft in the ideal process. Final power is not total work; it only describes the instantaneous rate at the end. If final torque stayed active for longer, that power could be integrated to obtain additional work.

# Real-world example

## Context

In a disk brake, torque usually opposes rotation. Suppose a brake exerts [[tau]] of -120 N m while the wheel turns through 25 rad. At one measured instant [[omega]] is 15 rad/s. We estimate braking work and instantaneous dissipated power.

## Physical estimation

With approximately constant torque, the constant-torque work relation gives

{{f:trabajo_torque_constante}}

. Instantaneous power from the angular-power relation is

{{f:potencia_angular}}

. The negative sign indicates that the rotor loses energy. In absolute value, the brake extracts energy at 1800 W.

## Interpretation

Negative work does not vanish; it mainly becomes heat in pads and disk. If braking torque changed during the maneuver, the variable-torque work relation would be required and the real area under the curve would be computed. This reading separates total extracted energy, instantaneous power, and accumulated thermal load.

For design, the distinction matters. A short high-power pulse may have the same [[W]] as a longer lower-power event, but the thermal stress is different. Engineers therefore track both accumulated joules and instantaneous watts.

## Error control for the example

The first check is angular: 12 rad and 10 rad are already in the correct unit. If turns had been given, they would need conversion before multiplication. The second check is constancy: the first interval admits a direct product, but the second does not, because [[tau]] changes from 50 N m to 20 N m. Using only final torque would give 200 J; using only initial torque would give 500 J; the trapezoid area gives 350 J, which matches the linear variation.

The third check is temporal. Final power of 600 W does not mean that 600 J were delivered every second during the whole process. It describes only the rate at the end, when [[tau]] is 20 N m and [[omega]] is 30 rad/s. If the question asked for energy during a later interval, the duration of that state or the evolution of [[tau]] and [[omega]] would be required.

## Variant with opposite sign

If the same shaft were rotating in the positive direction but final torque were -20 N m, final power would be -600 W. The sign is not an algebraic detail: it says that the external agent is extracting energy from the shaft. In that case, work over a negative-torque interval would reduce mechanical energy of the rotor or appear as dissipated energy in the surroundings. This variant helps detect answers that report absolute values but lose the physical reading.

## Interpretive closure

The complete example combines the three central uses of the leaf: product for constant torque, area for variable torque, and power for instantaneous rate. The answer is not closed until axis, sign, angular unit, and temporal state have been declared. That discipline is what turns a numerical calculation into a physical reading of real motors, brakes, or transmissions.