const e=`# Applications of rotational kinetic energy\r
\r
## 1. Flywheel energy storage\r
\r
A flywheel stores energy by spinning a body with large [[I]] at high [[omega]]. Its purpose is not to provide a permanent torque by itself, but to keep mechanical energy available for later use. The expression\r
\r
{{f:energia_rotacional_basica}}\r
\r
shows two strategies: increase moment of inertia or increase angular speed. In practice, increasing [[omega]] is very effective because of the quadratic dependence, but it requires strong materials, precise balancing, and protective containment.\r
\r
Dominant variable: [[omega]], because small changes in angular speed can produce large changes in stored energy. Validity limit: the rigid-body model becomes incomplete if deformation, vibration, bearing losses, or material strength limits dominate. Real designs also limit maximum energy for safety, since rotor failure can release stored energy very quickly.\r
\r
The practical reading is that joules alone are not enough. One must ask how the energy is charged, how it is discharged, and what happens if control fails. That is why [[Erot]] is combined with power, material strength, and thermal dissipation.\r
\r
## 2. Wheels and rolling vehicles\r
\r
Vehicle wheels have translational kinetic energy from the vehicle motion and rotational kinetic energy from spin. The rotational part depends on [[I]] and [[omega]], and it adds to the total energy balance. This explains why heavier wheels, or wheels with more mass near the rim, can require more energy during acceleration even when the added mass seems modest. During braking, part of this energy must be dissipated or recovered.\r
\r
Dominant variable: wheel [[I]] about its axle, together with the rolling relation between linear and angular speed. Validity limit: if slipping, skidding, or strong tire deformation occurs, ideal rolling no longer describes the full process. [[Erot]] still exists, but heat losses and contact work must also be included.\r
\r
In mobility design, mass distribution in the wheel affects acceleration feel. Reducing mass near the rim can improve response without changing the total vehicle mass very much.\r
\r
## 3. Massive pulleys in block systems\r
\r
Many introductory problems treat pulleys as massless, but a real pulley stores rotational energy. If a rope accelerates connected masses, part of the gravitational work becomes [[Erot]] of the pulley. Ignoring that contribution predicts accelerations that are too large. Including it requires the pulley's moment of inertia and the relation between rope speed and angular speed.\r
\r
Dominant variable: pulley [[I]], because it determines how much energy is diverted into rotation. Validity limit: the rope must not slip and the pulley must rotate as a rigid body. If the rope slips, stretches, or the axle has strong friction, the ideal balance needs dissipative or elastic terms.\r
\r
This application shows why a small-looking simplification changes the dynamics. A massive pulley does not merely transmit tension; it also takes part of the available energy.\r
\r
## 4. Brakes, clutches, and dissipation\r
\r
When a brake acts on a wheel or disk, it reduces [[Erot]] mainly by converting it into heat. The resisting rotational work is negative for the rotor:\r
\r
{{f:energia_rotacional_basica}}\r
\r
. If the rotor stops, the initial energy becomes thermal energy and smaller secondary forms. This reading is central for sizing brakes, estimating heating, and avoiding thermal fatigue.\r
\r
Dominant variable: the difference between [[Eroti]] and [[Erotf]], because it measures how much energy must leave the spin. Validity limit: the energy calculation does not by itself predict temperature, wear, or heat distribution. Thermal models, materials, contact area, and braking time are needed for that. Rotational energy gives the basic energy load.\r
\r
In a real brake, the same energy change may be acceptable if it occurs slowly or destructive if it occurs in a few seconds. Energy fixes the total load; power and heat transfer fix severity.\r
\r
## 5. Turbines, generators, and power extraction\r
\r
In a turbine or generator, the spinning rotor contains energy that can be exchanged with a fluid or an electrical circuit. If the generator extracts energy, [[Erot]] decreases unless an external source maintains [[omega]]. Power is related to the rate at which this energy changes, so the formula helps estimate start-up, shutdown, and response to load changes.\r
\r
Dominant variable: the combination of [[I]] and [[omega]], because it defines the energy reserve available against disturbances. Validity limit: real machines include fluid flow, electrical losses, vibration, and active control. Rotational kinetic energy represents the mechanical core, but it does not replace the full model of the turbomachine or generator.\r
\r
The rotational reserve smooths sudden load changes. A rotor with more stored energy loses less speed during a brief extraction, but it also needs more energy and more time to start from rest.\r
\r
Across all five applications, the same diagnostic question remains useful: is the calculated [[Erot]] the whole mechanical energy, or only the rotational part of a larger balance? Asking that question prevents overusing the formula in systems with translation, heat, deformation, electrical conversion, or active control.`;export{e as default};
