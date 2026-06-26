const e=`# Common errors in rotational kinetic energy\r
\r
## Conceptual errors\r
\r
### Error 1: assigning energy a sign from spin direction\r
\r
The sign of [[omega]] may indicate orientation, but [[Erot]] depends on the square of [[omega]]. Clockwise and counterclockwise rotations with the same angular speed store the same energy. Direction matters for angular momentum and torque, not for rotational kinetic energy.\r
\r
### Error 2: confusing rotational energy with angular momentum\r
\r
Angular momentum describes rotational motion with vector orientation. Energy measures ability to do work. Two bodies can have the same angular momentum and different energies if their moments of inertia differ. Mixing the two quantities gives wrong conclusions about braking or storage.\r
\r
## Model errors\r
\r
### Error 3: using mass instead of moment of inertia\r
\r
Translation uses mass; rotation uses [[I]]. A rotational energy calculation cannot ignore geometry when the mass distribution matters. Moment of inertia contains the distance of mass from the axis, so it differs for disks, hoops, spheres, and rods.\r
\r
### Error 4: forgetting translation in rolling motion\r
\r
A rolling wheel has rotational kinetic energy and translational kinetic energy. Using only [[Erot]] underestimates the total. Using only translation misses the spin part. If the center of mass moves, both terms must appear in the balance.\r
\r
## Mathematical errors\r
\r
### Error 5: using rpm as rad/s\r
\r
The formula requires [[omega]] in radians per second. If the data are given in revolutions per minute, convert first. The mistake is amplified because angular speed is squared, so the final energy may be wrong by a large factor.\r
\r
### Error 6: forgetting the square on [[omega]]\r
\r
The quadratic dependence is central. If energy is made linear in [[omega]], the scale is wrong. A quick check is to double angular speed: energy must become four times larger, not two times larger.\r
\r
## Interpretation errors\r
\r
### Error 7: equating work with final energy\r
\r
The correct theorem is\r
\r
{{f:energia_rotacional_basica}}\r
\r
. If the rotor was already spinning, work equals the change in energy, not the final value. This is common in motor problems with nonzero initial speed.\r
\r
### Error 8: hiding losses inside the formula\r
\r
The expression for [[Erot]] does not include heat, sound, or deformation. If friction is present, the energy balance needs a dissipated-energy term. Otherwise the predicted final speed may be too high.\r
\r
## Quick self-control rule\r
\r
Check five points before accepting a result. The [[I]] belongs to the real axis. [[omega]] is in rad/s. Energy is not negative. Doubling [[omega]] quadruples [[Erot]]. In a process, [[Wrot]] is compared with [[Erotf]] minus [[Eroti]], not with only one state.`;export{e as default};
