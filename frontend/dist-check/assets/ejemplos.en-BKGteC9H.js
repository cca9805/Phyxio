const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A ceiling fan has blade tips at radius [[R]] = 0.60 m from the rotation axis and completes one full revolution in [[T_periodo]] = 0.50 s.\r
\r
Calculate: 1. the rotation frequency [[f]], 2. the angular velocity [[omega]] using two independent relations and verify that both agree, 3. the arc length [[s]] traced during a quarter turn, and 4. the angle [[theta]] corresponding to a tip displacement of 0.94 m.\r
\r
## Data\r
\r
- [[R]] = 0.60 m\r
- [[T_periodo]] = 0.50 s\r
- quarter turn = $\\pi/2$ rad\r
- [[s]] = 0.94 m for part 4\r
\r
These data combine two different kinds of information. The first pair, [[R]] and [[T_periodo]], describes the geometry and the temporal repetition of the motion. The quarter turn specifies a target angular displacement [[theta]] for part 3, while the prescribed arc [[s]] in part 4 forces the reasoning to run in the opposite direction, from geometry back to angle. Keeping those roles separate is important because it prevents the common mistake of treating every datum as if it played the same physical role in the solution.\r
\r
It is also worth noting what is not given. No linear speed is provided, so the problem must be solved through angular magnitudes first. No angular acceleration is given either, which is consistent with the steady-rotation model. The data therefore already suggest the structure of the solution: first infer [[f]] and [[omega]] from [[T_periodo]], then connect the angular description to the tip trajectory through [[R]], [[s]], and [[theta]].\r
\r
## System definition\r
\r
The system is a blade tip modelled as a point moving at constant radius [[R]] around a fixed axis. The motion is uniform, so [[f]], [[T_periodo]], and [[omega]] remain constant during the interval.\r
\r
## Physical model\r
\r
The problem belongs to uniform circular motion. The relevant formulas are the frequency-period relation, the angular-speed-period relation, the angular-speed-frequency relation, and the radian definition:\r
\r
{{f:relacion_f_T}}\r
\r
{{f:relacion_omega_periodo}}\r
\r
{{f:relacion_omega_frecuencia}}\r
\r
{{f:definicion_radian}}\r
\r
## Model justification\r
\r
The model is valid because the fan runs at nearly constant speed in steady operation and the blade geometry is rigid, so [[R]] is constant. If the fan were accelerating or decelerating, these periodic relations would no longer be enough and the problem would require variable angular kinematics.\r
\r
This justification is not a formality. In a domestic fan, the motor needs a short transient to reach steady operation, and the periodic descriptors are reliable only after that transient has ended. Once the speed stabilises, successive revolutions repeat with nearly the same [[T_periodo]], which makes it meaningful to speak about a single frequency [[f]] and a single angular velocity [[omega]] for the whole motion. The blade tip is also treated as a point, because the geometric question concerns the path of a marked location at fixed [[R]], not the internal deformation of the blade.\r
\r
The model would become insufficient in at least three nearby situations. First, during startup or braking, [[omega]] changes with time and one would need angular acceleration as an additional descriptor. Second, if the blade bent significantly under load, the effective [[R]] of the tip would no longer be constant and the arc relation would need revision. Third, if the sensor reported only linear tip speed, then an additional conversion step would be required before using the periodic formulas. Stating these limits is part of solving the problem correctly because it explains why the present leaf applies here and not only somewhere vaguely similar.\r
\r
## Symbolic solution\r
\r
From the period we obtain the frequency:\r
\r
{{f:relacion_f_T}}\r
\r
Then the angular velocity can be obtained in two equivalent ways:\r
\r
{{f:relacion_omega_frecuencia}}\r
\r
{{f:relacion_omega_periodo}}\r
\r
The arc-angle relation is then used to connect [[s]], [[R]], and [[theta]]:\r
\r
{{f:definicion_radian}}\r
\r
At this stage, the symbolic chain already reveals the internal structure of the problem. Part 1 starts from time data and produces repetition rate. Part 2 converts that periodic description into angular rate. Parts 3 and 4 move from the periodic description to the geometry of the tip trajectory. This order is not arbitrary: it separates temporal reasoning from geometric reasoning and reduces the risk of mixing the role of [[omega]] with the role of [[theta]].\r
\r
It is also useful to notice that the same physical state is being described in two complementary ways. The pair [[f]] and [[T_periodo]] tells us how often the motion repeats. The magnitude [[omega]] tells us how quickly the angular coordinate changes. The relation involving [[s]], [[R]], and [[theta]] then explains what that angular change means for a specific point of the blade. The problem therefore becomes an example of coordinated descriptions rather than a sequence of disconnected substitutions.\r
\r
## Numerical substitution\r
\r
With [[T_periodo]] = 0.50 s, the frequency is 2 Hz. Using either periodic relation gives [[omega]] = 4π rad/s. For a quarter turn, [[theta]] = π/2 rad, so the traced arc is [[s]] = [[R]]·[[theta]] = 0.60·π/2 ≈ 0.94 m. Reversing the same relation for [[s]] = 0.94 m gives [[theta]] ≈ 1.57 rad, which is again approximately a quarter turn.\r
\r
The numerical values also make sense at a glance. A frequency of 2 Hz means the fan completes two full turns every second, which is plausible for a ceiling fan operating at a moderate speed. The angular velocity 4π rad/s is simply another way of saying the same thing, now expressed in radians per second. The arc length near 0.94 m for a quarter turn at [[R]] = 0.60 m is also reasonable: a full circumference at that radius would be about 3.77 m, and one quarter of that is indeed close to 0.94 m.\r
\r
That quick estimate matters because it provides an independent check against algebraic slips. If the result for [[s]] had come out larger than the full circumference, or if [[theta]] inferred from 0.94 m had been close to a full turn instead of a quarter turn, the inconsistency would immediately point to an error in units, geometry, or arithmetic. Numerical substitution should therefore never be reduced to typing values into formulas; it should end with a plausibility test anchored in the physical scene.\r
\r
## Dimensional validation\r
\r
The relation between [[f]] and [[T_periodo]] gives inverse seconds, which is correct for frequency. Multiplying [[R]] by [[theta]] yields meters because the radian is dimensionless but preserves geometric meaning. The dimensions are therefore coherent in every step.\r
\r
Dimensional coherence is especially helpful in rotational problems because several quantities are easily confused when read too quickly. [[f]] and the inverse of [[T_periodo]] share the same physical dimension, so the conversion is consistent. [[omega]] has units of radians per second, which remain compatible with inverse seconds in dimensional analysis while still carrying extra geometric meaning. Finally, the arc relation confirms that a linear distance [[s]] can only emerge after the angular information [[theta]] is combined with the geometric scale [[R]].\r
\r
## Physical interpretation\r
\r
The key point is that [[theta]] measures rotation independently of object size, while [[s]] depends on both [[theta]] and [[R]]. Two objects can rotate through the same angle and still trace different arc lengths if their radii differ. The periodic relations also show that [[f]], [[T_periodo]], and [[omega]] describe the same steady rotation from three complementary viewpoints.\r
\r
This distinction becomes operational when one imagines two points on the same fan blade: one near the hub and one at the tip. During the same quarter turn they share the same [[theta]], the same [[f]], the same [[T_periodo]], and the same [[omega]], because they belong to the same rigid rotation. However, the outer point traces a larger [[s]] because its [[R]] is larger. The example therefore clarifies why angular quantities are natural for describing the common rotational state, whereas linear quantities depend on where the observer chooses to look.\r
\r
The double computation of [[omega]] also matters conceptually. Obtaining the same value from [[f]] and from [[T_periodo]] is not mere redundancy; it demonstrates that frequency and period are reciprocal descriptions of one periodic process. In a laboratory or industrial setting one instrument may report pulses per second while another reports time per cycle. The physics does not change, only the format of the data does. Learning to move between those formats is one of the main skills of this leaf.\r
\r
# Real-world example\r
\r
## Context\r
\r
In a filling machine carousel, a control engineer must verify whether the platform rotates at the prescribed steady rate. Sensors report either time per revolution or revolutions per second, while geometric clearance checks depend on the arc traced by each nozzle.\r
\r
## Physical estimation\r
\r
If the measured [[T_periodo]] is slightly below the nominal value, then [[f]] and [[omega]] are slightly above target. That small difference can shorten the dwell time at each bottle position and affect fill precision. The same sensor data can also be combined with [[R]] to estimate the arc travelled per cycle.\r
\r
An engineer rarely begins with an exact calculation. A quick estimate is more useful at first: if the carousel completes slightly more than two turns per second, then it is already clear that the motion is in a moderate industrial range and not in a slow indexing regime. If the nozzle radius [[R]] is of order half a metre, then one full revolution implies several metres of travelled arc at the outer edge. Those rough scales help determine whether the sensor output is credible before the more exact conversion to [[f]], [[omega]], or [[s]] is used for control decisions.\r
\r
## Interpretation\r
\r
This application shows why the leaf keeps several angular magnitudes instead of only one. [[T_periodo]] is convenient for time-domain sensors, [[f]] for production cadence, [[omega]] for dynamic specifications, and [[s]] for geometric checks. The physical model remains simple, but each magnitude answers a different operational question.\r
\r
The same machine may therefore present the same motion in four different technical languages depending on who reads the data. Maintenance staff may think in cycle time and use [[T_periodo]]. Production supervisors may think in throughput and use [[f]]. Mechanical engineers may need [[omega]] when comparing the machine with motor specifications. Safety or layout checks may focus on [[s]] at a known [[R]]. This real-world split mirrors the structure of the leaf: one motion, several useful descriptors, each tied to a distinct decision.`;export{e as default};
