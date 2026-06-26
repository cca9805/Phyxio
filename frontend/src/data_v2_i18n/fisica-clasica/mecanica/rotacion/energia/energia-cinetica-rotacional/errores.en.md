# Common errors in rotational kinetic energy

## Conceptual errors

### Error 1: assigning energy a sign from spin direction

The sign of [[omega]] may indicate orientation, but [[Erot]] depends on the square of [[omega]]. Clockwise and counterclockwise rotations with the same angular speed store the same energy. Direction matters for angular momentum and torque, not for rotational kinetic energy.

### Error 2: confusing rotational energy with angular momentum

Angular momentum describes rotational motion with vector orientation. Energy measures ability to do work. Two bodies can have the same angular momentum and different energies if their moments of inertia differ. Mixing the two quantities gives wrong conclusions about braking or storage.

## Model errors

### Error 3: using mass instead of moment of inertia

Translation uses mass; rotation uses [[I]]. A rotational energy calculation cannot ignore geometry when the mass distribution matters. Moment of inertia contains the distance of mass from the axis, so it differs for disks, hoops, spheres, and rods.

### Error 4: forgetting translation in rolling motion

A rolling wheel has rotational kinetic energy and translational kinetic energy. Using only [[Erot]] underestimates the total. Using only translation misses the spin part. If the center of mass moves, both terms must appear in the balance.

## Mathematical errors

### Error 5: using rpm as rad/s

The formula requires [[omega]] in radians per second. If the data are given in revolutions per minute, convert first. The mistake is amplified because angular speed is squared, so the final energy may be wrong by a large factor.

### Error 6: forgetting the square on [[omega]]

The quadratic dependence is central. If energy is made linear in [[omega]], the scale is wrong. A quick check is to double angular speed: energy must become four times larger, not two times larger.

## Interpretation errors

### Error 7: equating work with final energy

The correct theorem is

{{f:energia_rotacional_basica}}

. If the rotor was already spinning, work equals the change in energy, not the final value. This is common in motor problems with nonzero initial speed.

### Error 8: hiding losses inside the formula

The expression for [[Erot]] does not include heat, sound, or deformation. If friction is present, the energy balance needs a dissipated-energy term. Otherwise the predicted final speed may be too high.

## Quick self-control rule

Check five points before accepting a result. The [[I]] belongs to the real axis. [[omega]] is in rad/s. Energy is not negative. Doubling [[omega]] quadruples [[Erot]]. In a process, [[Wrot]] is compared with [[Erotf]] minus [[Eroti]], not with only one state.