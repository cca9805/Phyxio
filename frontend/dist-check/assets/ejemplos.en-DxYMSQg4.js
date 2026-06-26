const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A block of mass [[m]] rests on a rigid incline with known segment length and angle [[theta]]. The contact has static friction [[mu_e]] and, once motion begins, kinetic friction [[mu_c]]. Determine whether the block remains at rest or starts sliding, compute the critical angle [[theta_c]], and if sliding occurs, determine acceleration [[a]], final speed, and travel time.\r
\r
## Data\r
\r
- [[m]] = 5.0 kg\r
- [[theta]] = 24 degrees\r
- [[mu_e]] = 0.40\r
- [[mu_c]] = 0.28\r
- [[g]] = 9.8 m/s2\r
- Segment length: 3.0 m\r
- initial [[v]] = 0\r
\r
Interpretation rules:\r
\r
- If tan([[theta]]) <= [[mu_e]], the block may remain at rest.\r
- If tan([[theta]]) > [[mu_e]], static equilibrium breaks and the block slides.\r
- Near the threshold, careful rounding matters.\r
\r
## System definition\r
\r
System: a block of mass [[m]] on a fixed ramp. Relevant forces are weight, normal force [[N]], and friction [[f_r]].\r
\r
Axes:\r
\r
- Parallel axis: direction of possible sliding.\r
- Perpendicular axis: direction of contact reaction.\r
\r
Core magnitudes:\r
\r
- [[N]] sets the friction scale.\r
- [[f_s_max]] is the maximum static friction.\r
- [[f_r]] is kinetic friction once sliding starts.\r
- [[theta_c]] separates rest and motion.\r
\r
## Physical model\r
\r
The model has two branches.\r
\r
First, the static branch:\r
\r
{{f:normal_plano_inclinado}}\r
\r
{{f:friccion_estatica_maxima}}\r
\r
{{f:umbral_reposo}}\r
\r
{{f:angulo_critico}}\r
\r
If tan([[theta]]) <= [[mu_e]], the block remains at rest and static friction exactly matches the needed tangential component up to its maximum.\r
\r
Second, the kinetic branch:\r
\r
{{f:friccion_cinetica}}\r
\r
{{f:aceleracion_plano_rozamiento}}\r
\r
If tan([[theta]]) > [[mu_e]], the block slides and friction becomes kinetic. That transition is the key idea in the topic.\r
\r
## Model justification\r
\r
The physical justification is twofold. First, the normal force [[N]] determines how strong the contact is, and therefore how large the friction can be. Second, the critical angle [[theta_c]] compresses the whole question into a single stability test: does gravity along the plane exceed the contact's ability to hold the block?\r
\r
It is not enough to say "there is friction." We must know whether the contact is holding the block at rest or dissipating energy during motion. That distinction changes the entire dynamic response.\r
\r
## Symbolic solution\r
\r
1. Close the normal axis:\r
\r
{{f:normal_plano_inclinado}}\r
\r
2. Compute the maximum static friction:\r
\r
{{f:friccion_estatica_maxima}}\r
\r
3. Compare with the parallel weight component to decide the regime:\r
\r
{{f:umbral_reposo}}\r
\r
{{f:angulo_critico}}\r
\r
4. If the block slides, use kinetic friction:\r
\r
{{f:friccion_cinetica}}\r
\r
5. Obtain the actual acceleration on the ramp:\r
\r
{{f:aceleracion_plano_rozamiento}}\r
\r
6. With constant acceleration, compute final speed and time using standard kinematic relations for uniformly accelerated motion.\r
\r
The symbolic key is that motion depends on comparing [[theta]] with [[theta_c]], not on the total weight alone.\r
\r
## Numerical substitution\r
\r
First the threshold:\r
\r
- [[theta_c]] = arctan(0.40) ~= 21.8 degrees.\r
- Since [[theta]] = 24 degrees > [[theta_c]], the block slides.\r
\r
Then the normal force:\r
\r
- [[N]] = [[m]] [[g]] cos([[theta]]) = 5.0 x 9.8 x cos(24 degrees)\r
- [[N]] ~= 49.0 x 0.9135 ~= 44.8 N.\r
\r
Maximum static friction:\r
\r
- [[f_s_max]] = [[mu_e]] [[N]] = 0.40 x 44.8 ~= 17.9 N.\r
\r
Parallel weight component:\r
\r
- [[m]] [[g]] sin([[theta]]) = 5.0 x 9.8 x sin(24 degrees)\r
- ~= 49.0 x 0.4067 ~= 19.9 N.\r
\r
Because 19.9 N > 17.9 N, rest is impossible.\r
\r
Kinetic friction:\r
\r
- [[f_r]] = [[mu_c]] [[N]] = 0.28 x 44.8 ~= 12.5 N.\r
\r
Net force along the plane:\r
\r
- net force ~= 19.9 - 12.5 = 7.4 N.\r
\r
Acceleration:\r
\r
- [[a]] = net force / [[m]] ~= 7.4 / 5.0 = 1.48 m/s2.\r
\r
Final speed:\r
\r
- final speed approximately 2.98 m/s.\r
\r
Time:\r
\r
- travel time approximately 2.01 s.\r
\r
## Dimensional validation\r
\r
- [[N]] and [[f_r]] are in newtons.\r
- [[a]] is in m/s2.\r
- Speed is in m/s.\r
- Time is in seconds.\r
\r
Consistency checks:\r
\r
- If [[theta]] dropped below [[theta_c]], the block should not slide.\r
- If [[mu_c]] increased, [[a]] should decrease.\r
- If [[mu_e]] increased, [[theta_c]] should also increase.\r
\r
## Physical interpretation\r
\r
The result teaches three important ideas. First, not every incline produces motion: there is a real angular threshold. Second, static and kinetic friction do not play the same role; one decides whether rest is broken, the other governs motion once it begins. Third, the normal force [[N]] is not a mathematical detail; it sets the friction scale.\r
\r
The correct conceptual reading does not stop at [[a]]. The real message is that a small increase in [[theta]] can push the system above [[theta_c]], and then the regime changes completely.\r
\r
In practice, that means the ramp is not merely a geometric surface. It is a decision boundary that determines whether a load stays put, moves gently, or moves with enough energy to require a downstream brake. That is the operational meaning of the critical angle.\r
\r
# Real-world example\r
\r
## Context\r
\r
An industrial platform needs a discharge ramp for light boxes. The surface coating is known to have [[mu_e]] of 0.55 and [[mu_c]] of 0.42. Available segment length is 2.5 m. The team wants the ramp to help boxes move without letting them leave too fast at the exit.\r
\r
Three angles are tested: 20 degrees, 30 degrees, and 35 degrees. The practical question is not only whether the boxes move, but how safely they move.\r
\r
## Physical estimation\r
\r
For [[mu_e]] = 0.55:\r
\r
- [[theta_c]] = arctan(0.55) ~= 28.8 degrees.\r
\r
Therefore:\r
\r
1. At 20 degrees:\r
\r
- tan(20 degrees) ~= 0.36 < 0.55, so the box stays at rest.\r
- Static friction is enough to balance the parallel weight component.\r
- There is no spontaneous discharge.\r
\r
2. At 30 degrees:\r
\r
- tan(30 degrees) ~= 0.58 > 0.55, so the box slides.\r
- [[N]] ~= [[m]] [[g]] cos(30 degrees).\r
- [[f_r]] ~= [[mu_c]] [[N]] and the acceleration is moderate.\r
\r
3. At 35 degrees:\r
\r
- the block slides with greater acceleration than at 30 degrees.\r
- final speed rises and the exit impact becomes more severe.\r
\r
Design reading:\r
\r
- 20 degrees is not enough if automatic discharge is needed.\r
- 30 degrees works, but the exit speed must be monitored.\r
- 35 degrees may be useful only if a stop, damper, or second stage follows.\r
\r
If the box mass is 8 kg, the 30-degree case admits a concrete estimate: [[N]] ~= 8 x 9.8 x cos(30 degrees) ~= 67.9 N, kinetic friction ~= 0.42 x 67.9 ~= 28.5 N, and the parallel weight component is 8 x 9.8 x sin(30 degrees) = 39.2 N. The net force is therefore about 10.7 N, so [[a]] ~= 1.34 m/s2. Over a 2.5 m segment, that gives a final speed near 2.6 m/s and a travel time of about 1.93 s.\r
\r
## Interpretation\r
\r
The real case shows why the friction model is more useful than the ideal one when the goal is safety and control. The critical angle [[theta_c]] is not decorative: it defines a design boundary. A good system does not merely try to "move," but to move in the correct range.\r
\r
The operational lesson is clear. If the angle is below [[theta_c]], gravity alone will not start motion and the process fails by lack of flow. If the angle is well above [[theta_c]], flow occurs but may become too fast. Good design lives between those extremes and uses friction as a tool, not as an accident.\r
\r
The quantitative conclusion matters: moving from a non-flowing angle to a working angle changes not only whether motion exists, but also the exit scale. A difference of only a few degrees can separate a stuck box, a controlled descent, and a box arriving with too much energy at the next stage.\r
\r
The full physical reading is that the system is not designed to eliminate friction, but to place it where it helps. In a useful ramp, static friction prevents unwanted slipping during loading, while kinetic friction helps limit exit energy once motion has already started. That dual role explains why the same contact can be desirable or problematic depending on the operational goal.\r
\r
What matters operationally is the chain: threshold first, motion next, energy control last. Once that chain is explicit, the angle is no longer just a geometric input; it becomes a controllable decision that trades off flow, safety, and exit speed.\r
\r
That is why the working angle is not chosen to maximize or minimize a single equation. It is chosen so the whole handling process remains stable. An angle near [[theta_c]] may be ideal for initiating motion, yet still too steep if the next stage cannot accept that exit energy. Useful physics connects threshold, speed, and the full process chain.\r
\r
In other words, the example is not only about solving for [[a]] or v_f. It teaches how to read the ramp as a system boundary: below the threshold, nothing starts; above it, the ramp dictates the throughput of the whole installation. That is the design value of the model.`;export{e as default};
