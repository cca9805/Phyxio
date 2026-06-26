const e=`# Work and Torque\r
\r
## Conceptual context\r
\r
Work and torque connect rotational dynamics with energy. Torque [[tau]] measures the tendency of a force to produce rotation about an axis, but it transfers mechanical energy only when angular displacement [[theta]] occurs. Therefore rotational work [[W]] cannot be read from torque alone; it also depends on the angular path and on the relative sign between torque and motion.\r
\r
Angular power [[P]] adds a time reading. It does not say how much energy has been transferred in total, but how fast energy is being transferred at an instant. When a motor applies torque to a shaft rotating with [[omega]], power is the rate of work on that shaft. This distinction is central in motors, brakes, turbines, and transmissions.\r
\r
## 🟢 Essential level\r
\r
At the essential level, think of a door: torque helps open it only if the door actually rotates. A large torque applied to a locked shaft may produce no work if there is no angular displacement. Sign also matters: torque that follows the rotation delivers energy; torque that opposes the rotation extracts energy or brakes the body.\r
\r
The unit creates a trap. Torque is measured in newton meters, and work in joules, which are dimensionally equivalent, but they do not mean the same thing. Torque is an action with axis and direction; work is energy transferred along a turn.\r
\r
A safe way to think about it is to always ask what moved. If there was torque but no rotation, there was mechanical loading, not accumulated rotational work. If there was rotation but torque was not aligned with the relevant direction, work may be smaller than expected. This reading prevents confusing a sense of effort with an actual energy transfer.\r
\r
## 🔵 Formal level\r
\r
For constant torque over the angular displacement:\r
\r
{{f:trabajo_torque_constante}}\r
\r
For torque that varies with angle:\r
\r
{{f:trabajo_torque_variable}}\r
\r
For the instantaneous rate of energy transfer:\r
\r
{{f:potencia_angular}}\r
\r
The constant-torque work relation is used when [[tau]] does not change during the displacement: [[W]] is found by multiplying torque by [[theta]]. If torque changes with angle, the variable-torque work relation states that [[W]] is the algebraic area under the torque versus angle curve. For instantaneous rate, the angular-power relation connects [[P]], [[tau]], and [[omega]].\r
\r
These relations parallel translation. Force times displacement becomes torque times angular displacement; force times velocity becomes torque times angular velocity. The analogy helps, but it does not replace the reference axis or the sign convention.\r
\r
Formally, the radian acts as a dimensionless unit, so the product of [[tau]] and [[theta]] is expressed in joules. However, the calculation represents work only if [[theta]] is the angular displacement actually traveled. For power, [[omega]] is not an accumulated angle but an instantaneous angular speed, so the angular-power relation does not replace total work without additional time information.\r
\r
## 🔴 Structural level\r
\r
Structurally, decide whether the problem asks for accumulated energy or transfer rate. If it asks how much work a motor did during several turns, compute [[W]]. If it asks for output power at an instant, compute [[P]]. If torque is not constant, the relevant object is the curve of [[tau]] against [[theta]], not a single average chosen without justification.\r
\r
The model also requires a system definition. External torque on a rotor may increase rotational kinetic energy, heat a brake, or charge a battery if a generator is present. The same [[tau]] can have different readings depending on the chosen system and declared losses.\r
\r
The structural reading compares three layers. The first is geometric: [[theta]] must be the actual turn of the shaft, not an initial orientation written in degrees. The second is dynamic: [[tau]] must be the effective component about that shaft, not just any torque in the system. The third is energetic: [[W]] must appear in a balance that states whether energy becomes rotational kinetic energy, elastic storage, or dissipation. If one layer is missing, the number may have correct units while still failing to describe the process.\r
\r
There is also an important distinction between an instantaneous value and an accumulated process. [[P]] is evaluated at a state, using simultaneous [[tau]] and [[omega]]. [[W]] accumulates over an angular path. Therefore a power-time graph and a torque-angle graph answer different questions. The first indicates instantaneous load, motor demand, or heating per second. The second indicates net energy transferred during the complete rotation.\r
\r
## Deep physical interpretation\r
\r
[[W]] is energy transfer by rotation. It is not a stored property of torque and not a hidden force; it is the result of a rotational action accumulated over angular displacement. If the torque-angle curve has positive and negative regions, areas may cancel.\r
\r
[[P]] reads machine demand. Moderate torque at high [[omega]] can imply large power. Large torque at nearly zero angular speed can imply small power, even though the shaft is mechanically stressed.\r
\r
## Order of magnitude\r
\r
A torque of 10 N m applied through 1 rad transfers 10 J. If the same torque acts through ten turns, angular displacement is about 60 rad, and work rises to hundreds of joules. In machinery, [[tau]] of hundreds of newton meters and [[omega]] of tens of radians per second produce kilowatts of power.\r
\r
## Personalized resolution method\r
\r
First declare axis and positive sign. Second identify whether [[tau]] is constant or variable. Third apply the constant- or variable-torque work relation accordingly. Fourth, if the question asks for rate, apply the angular-power relation. Fifth compare [[W]] with rotational-energy change and separate losses when the balance does not close.\r
\r
A robust procedure adds a consistency check. If [[W]] is positive while the system is clearly braking, the sign convention or the chosen system is probably wrong. If [[P]] is large while [[omega]] is nearly zero, linear speed may have been mixed with angular speed. If two methods give different energies, check whether one used area under torque and the other used only the final value of [[tau]]. This review prevents the calculation from becoming mere substitution.\r
\r
## Special cases and extended example\r
\r
In a brake, [[tau]] usually has the opposite sign to [[omega]], so [[P]] is negative for the rotor. In a motor, positive sign means energy delivery. In a torsional spring, [[tau]] may depend on [[theta]], so work is area and not a simple final product.\r
\r
## Real student questions\r
\r
Why do torque and work share units? Because the radian is dimensionless, but the physical interpretation differs. Can I always use torque times angle? Only if torque is constant or if a justified average is used. Is power work? No; power is work per unit time.\r
\r
## Cross-cutting connections and study paths\r
\r
This leaf connects torque definition, rotational kinetic energy, power, braking, motors, and conservation of energy. A useful path is torque first, then moment of inertia, then work and torque, then balances with rotational energy and losses.\r
\r
The connection with energy conservation is especially useful: net external work must explain the mechanical-energy change plus losses. The connection with rotational dynamics also matters, because net torque can change [[omega]] through angular acceleration and, at the same time, do work when displacement occurs. In richer problems these readings should not be separated artificially: dynamics tells how rotation evolves, and energy tells how much is transferred during that evolution.\r
\r
## Final synthesis\r
\r
Work and torque explain how a rotational action transfers energy. [[W]] measures accumulated transfer, [[P]] measures its rate, [[tau]] supplies the action, and [[theta]] or [[omega]] indicates how rotation evolves. The key is to distinguish simple product, area under a curve, and instantaneous power.`;export{e as default};
