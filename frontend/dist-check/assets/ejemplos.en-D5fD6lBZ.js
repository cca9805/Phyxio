const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A wheel of radius [[R]] rolls without slipping on a horizontal surface. Its angular velocity is [[omega]]. Explain why rolling combines translation and rotation, and compute the center-of-mass velocity [[v_cm]].\r
\r
## Data\r
\r
The known quantities are [[R]] and [[omega]]. The radius is assumed constant and contact does not slip. The spin may also be described with [[theta]] and, if speed changes, with [[alpha]] and [[a_cm]].\r
\r
## System definition\r
\r
The system is the rigid wheel. The center of mass advances along a horizontal line and every point of the wheel rotates around the center. The lower point is instantaneously at rest relative to the ground.\r
\r
## Physical model\r
\r
The physical model is anchored to the rolling condition, [[v_cm]], [[omega]], and [[R]]. We are not solving isolated translation or isolated rotation; we are solving the coupling imposed by no-slip contact.\r
\r
## Model justification\r
\r
The statement says without slipping, so the ideal rolling condition is valid. We assume rigid body, constant radius, and fixed surface. If the wheel slipped, the relation would stop being valid.\r
\r
## Symbolic solution\r
\r
The rolling condition is:\r
\r
{{f:condicion_rodadura_puente}}\r
\r
This equation expresses the rolling condition. It translates angular speed into linear speed of the center. If accelerations are studied, the same logic connects [[a_cm]] with [[alpha]] through [[R]].\r
\r
For accumulated advance, the angular-linear displacement relation is also used: the turned angle [[theta]] reconstructs the distance traveled by the center when multiplied by radius. If the wheel completes two turns, the center advances two circumferences. This second relation confirms that the bridge is not only for instantaneous velocities, but also for displacements.\r
\r
## Numerical substitution\r
\r
If [[R]] of 0.30 m and\r
\r
{{f:condicion_rodadura_puente}}\r
\r
, then [[v_cm]] of 3.0 m/s. The order of magnitude is reasonable for a small laboratory wheel or a slow bicycle wheel.\r
\r
## Dimensional validation\r
\r
The radian is dimensionless, so radians per second multiplied by meters produces meters per second. The dimensional validation confirms that [[R]] is the factor that converts spin into advance.\r
\r
## Physical interpretation\r
\r
The result means that the wheel advances because it spins and does not slip. If [[omega]] increases with fixed [[R]], [[v_cm]] increases. If [[R]] increases with fixed [[omega]], the center advances more per turn. This implies that the physical bridge is not in the symbols, but in contact.\r
\r
# Real-world example\r
\r
## Context\r
\r
On a bicycle, the rider can observe the wheel spinning and the bicycle advancing. Rolling as a bridge explains why those two observations are not independent when there is no skid.\r
\r
## Physical estimation\r
\r
For a wheel of approximate radius 0.35 m spinning at 20 rad/s, the center speed is about 7 m/s. This physical estimation uses order of magnitude and helps detect errors: a result of 700 m/s would indicate mixed units or radius.\r
\r
## Interpretation\r
\r
The real reading is that the ground imposes a constraint. The wheel does not only spin; spin becomes center advance. If mud, ice, or locked braking appears, the relation between [[v_cm]] and [[omega]] no longer closes the motion and a sliding model is required.\r
\r
The estimate can also be checked with video: measure how far the center advances and how many turns a rim mark completes. If both readings do not match, the difference is not mathematical noise; it is a physical signal of slipping, wrong effective radius, or incorrect video scale. Thus the example connects formula, graph, and observation.\r
\r
Suppose now that the video shows the rim mark completing five turns while the center advances about 9.4 m and the radius is 0.30 m. Five turns correspond to a total angle of ten pi radians, and the predicted advance is close to 9.4 m. The agreement confirms that the bridge works. If the center had advanced only 6 m, the observed spin would not justify ideal rolling.\r
\r
The conclusion of the example is not merely a speed of three meters per second. The physical conclusion is that the same motion can be read from the center and from the rim. When both readings agree, translation and rotation form one rolling model. When they do not agree, they must be treated as partly decoupled motions and friction, losses, or deformation must be studied.\r
\r
The same procedure works if the wheel accelerates. Measure how [[omega]] changes, use [[R]] to infer the change in [[v_cm]], and compare it with center advance. If the center accelerates less than the spin predicts, contact is not transmitting motion as ideal rolling requires. This reading turns an elementary formula into an experimental test.\r
\r
Finally, the example shows why rolling is a bridge rather than an isolated topic. Translation gives a center distance or speed; rotation gives angle or angular speed; contact decides whether both readings describe the same motion. Without that third piece, the first two can coexist without being coupled.\r
\r
This is the key diagnostic.`;export{e as default};
