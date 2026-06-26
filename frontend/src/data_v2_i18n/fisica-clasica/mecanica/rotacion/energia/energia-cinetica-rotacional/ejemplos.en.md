# Exam-type example

## Problem statement

A uniform disk rotates about its central axis. Its moment of inertia about that axis is `0.80 kg m^2`. It initially spins at `6 rad/s`, and a motor accelerates it to `14 rad/s`. Find the initial rotational kinetic energy, the final rotational kinetic energy, and the net rotational work done on the disk.

## Data

The relevant data are [[I]] equal to `0.80 kg m^2`, initial angular speed

{{f:energia_rotacional_basica}}

, and final angular speed

{{f:energia_rotacional_basica}}

. The state quantity is [[Erot]], and the process quantity is [[Wrot]]. No translation is described, so the center of the disk is treated as fixed.

## System definition

The chosen system is the disk. The motor is an external agent doing work on it. We do not include the motor inside the system because that would require electrical energy, internal losses, and thermal terms. With this choice, the balance

{{f:energia_rotacional_basica}}

applies directly.

## Physical model

The physical model is a rigid body with a fixed axis. The moment of inertia [[I]] remains constant, all points of the disk share the same angular speed [[omega]], and the rotational-energy relation applies directly. The relevant kinetic energy is purely rotational because the center of mass does not move. If bearing friction were significant, motor work and dissipated energy would need separate terms.

## Model justification

The physical model is justified by four observable conditions: the disk is rigid, the axis is fixed, the moment of inertia [[I]] remains constant, and there is no internal slipping between parts of the solid. The statement gives [[I]] directly, so it is not necessary to compute it from mass and radius. The angular speeds are already in radians per second, so no unit conversion is needed. Since both states refer to the same disk and the same axis, the same formula can be used for [[Eroti]] and [[Erotf]]. The explicit physical hypothesis is that the disk remains rigid, the mass distribution does not change, and the central axis stays fixed.

## Symbolic solution

Base relation:

{{f:energia_rotacional_basica}}

For the initial state, use:

{{f:energia_rotacional_inicial}}

For the final state, use:

{{f:energia_rotacional_final}}

The net work comes from:

{{f:trabajo_rotacional_variacion}}

. This structure shows why work is not equal to final energy unless the initial energy is zero.

## Numerical substitution

The initial energy is `0.5 * 0.80 * 6^2 = 14.4 J`. The final energy is `0.5 * 0.80 * 14^2 = 78.4 J`. Therefore the net rotational work is `78.4 - 14.4 = 64.0 J`. The motor has transferred sixty-four joules of net energy to the rotation of the disk.

## Dimensional validation

The product of [[I]] and angular speed squared has units `kg m^2 s^-2`, which are joules. The difference between [[Erotf]] and [[Eroti]] is also measured in joules. This check matters because using revolutions per minute directly would not produce a valid SI energy.

## Physical interpretation

The final angular speed is less than three times the initial angular speed, yet the final energy is more than five times larger. This means the square dependence on [[omega]] dominates the physical reading. The work found is not a force or a torque; it indicates energy transferred to the disk. If the motor is disconnected afterward, that energy remains stored as rotational motion until friction transforms it or another device extracts it.

# Real-world example

## Context

In an energy recovery system, a flywheel stores energy during braking and returns it later. Suppose a rotor has [[I]] equal to `12 kg m^2` and increases from `120 rad/s` to `180 rad/s` during a charging phase. We want to estimate the additional stored energy and interpret what the number means for design.

## Physical estimation

The initial energy [[Eroti]] is 0.5 * 12 * 120^2 = 86400 J. The final energy [[Erotf]] is 0.5 * 12 * 180^2 = 194400 J. The increase, equal to net [[Wrot]] if losses are absent, is 108000 J. That is one hundred eight kilojoules, enough to provide several kilowatts for a few seconds. As an order-of-magnitude estimate, if the system delivers 9 kW, that additional reserve would last about 12 s before returning to the initial state, ignoring losses.

## Interpretation

The calculation means that increasing [[omega]] is an effective way to store energy, but also why it is demanding. It indicates that quadratic growth quickly raises requirements on material strength, balance, containment, and bearings. The physical cause is that every point of the rotor moves faster when [[omega]] rises, so the kinetic contribution of the whole mass distribution increases strongly. If the rotor were not rigid, part of the energy could appear as vibration or deformation. If losses were present, the external work required would be larger than the increase in [[Erot]].

In a vehicle application, this energy must not be confused with the total energy of the vehicle. The flywheel may store part of braking energy, while the vehicle also has translational energy, tire losses, brake heat, and electrical conversion. Correct use of [[Erot]] means placing it inside a global energy balance rather than treating it as the whole system.

This also explains why the same numerical energy can have different design meanings. In a classroom rotor, one hundred kilojoules would be excessive. In a transport recovery system, it may be a moderate buffer. The formula gives the mechanical core, while the application decides whether the value is useful, risky, or insufficient.