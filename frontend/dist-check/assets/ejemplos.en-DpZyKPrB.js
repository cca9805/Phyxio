const e=`# Exam-type example\r
\r
## Problem statement\r
\r
In an airport, a moving walkway advances in a straight line at a constant \\(2.0\\;\\text{m/s}\\) relative to the floor. A passenger walks on the walkway in the same direction at a constant \\(1.4\\;\\text{m/s}\\) relative to the walkway itself. Compute:\r
\r
1. the passenger's velocity relative to the floor,\r
2. the passenger's velocity relative to another person standing still on the same walkway,\r
3. the floor velocity as seen by the passenger.\r
\r
## Data\r
\r
We take the terminal floor as the base observer O. The moving observer B is the walkway. The body A is the passenger.\r
\r
The walkway velocity relative to the floor is +2.0 m/s. The passenger velocity relative to the walkway is +1.4 m/s.\r
\r
The positive sign points in the direction of walkway motion. With this notation, [[v_frame]] matches \\(v_{B/O}\\), [[v_rel]] matches \\(v_{A/B}\\), and [[v_abs]] matches \\(v_{A/O}\\).\r
\r
## System definition\r
\r
The relevant physical system is the passenger A, but the question cannot be answered without separating observers. The terminal floor organizes the global description, while the walkway organizes the local one. This distinction is essential: the same passenger may have a large [[v_abs]] relative to the floor and a much smaller [[v_rel]] relative to someone traveling with her.\r
\r
This is exactly the same core architecture stated in the theory: a base observer O, a moving observer B, and three linked magnitudes, [[v_abs]] , [[v_rel]] , and [[v_frame]] , each answering a different physical question.\r
\r
To keep the continuity fully explicit, the example follows the same nucleus named in the theory section: [[v_rel]], [[v_abs]], [[v_frame]], la relacion correspondiente, la relacion correspondiente, la relacion correspondiente, and la relacion correspondiente. The numerical case changes, but the physical architecture does not.\r
\r
{{f:definicion_vel_rel}}\r
\r
{{f:composicion_velocidades}}\r
\r
{{f:inversion_relativa}}\r
\r
{{f:despeje_v_frame}}\r
\r
\r
What changes from one line to another is the observer, not the physical motion itself. That is the same interpretive point emphasized in the theory section.\r
\r
## Physical model\r
\r
A one-dimensional Galilean model is used. The walkway moves at constant speed relative to the floor, and the passenger moves at constant speed relative to the walkway. This allows us to use la relacion correspondiente, la relacion correspondiente, and la relacion correspondiente without introducing accelerations or relativistic effects.\r
\r
{{f:composicion_velocidades}}\r
\r
{{f:definicion_vel_rel}}\r
\r
{{f:inversion_relativa}}\r
\r
\r
## Model justification\r
\r
The observation interval is short, the geometry is rectilinear, and all relevant motions are collinear. Therefore a one-axis signed description is enough. In addition, the two given speeds, \\(2.0\\;\\text{m/s}\\) and \\(1.4\\;\\text{m/s}\\), are typical of an airport walkway and a walking passenger, so the Galilean regime is more than sufficient and no relativistic corrections or internal accelerations are needed.\r
\r
The central physical justification is that [[v_abs]] and [[v_frame]] are measured from the same base observer O, exactly as required by la relacion correspondiente. If the walkway speed had been measured from another observer, or if the passenger were changing pace significantly, simple composition would stop being a clean representation of the mechanism.\r
\r
{{f:definicion_vel_rel}}\r
\r
\r
In other words, the model is physically explicit because it separates the passenger's own motion inside the walkway from the transport motion of the walkway relative to the floor. That separation is exactly what decides the result; it is not just algebraic convenience.\r
\r
## Symbolic solution\r
\r
As developed in the theory section, the core magnitudes of this leaf are [[v_rel]] , [[v_abs]] , and [[v_frame]] . Here, [[v_rel]] is the passenger speed relative to the walkway, [[v_frame]] is the walkway speed relative to the floor, and [[v_abs]] is the passenger speed relative to the base observer O.\r
\r
The example follows the same theoretical structure introduced through la relacion correspondiente, la relacion correspondiente, la relacion correspondiente, and la relacion correspondiente. The first step is to fix a single base observer O and keep all velocity comparisons tied to that same reference.\r
\r
{{f:definicion_vel_rel}}\r
\r
{{f:composicion_velocidades}}\r
\r
{{f:inversion_relativa}}\r
\r
{{f:despeje_v_frame}}\r
\r
\r
For the first question, we apply la relacion correspondiente:\r
\r
{{f:composicion_velocidades}}\r
\r
\r
{{f:composicion_velocidades}}\r
\r
In this one-dimensional case, the vector equation becomes a signed sum between the passenger's relative reading and the walkway velocity.\r
\r
Using the notation of the leaf, this gives [[v_abs]] as the sum of the relative contribution and the frame contribution.\r
\r
## Numerical substitution\r
\r
The passenger velocity relative to the floor is 3.4 m/s.\r
\r
The passenger velocity relative to a person standing still on the same walkway is 1.4 m/s.\r
\r
The floor velocity seen by the passenger is -3.4 m/s.\r
\r
## Dimensional validation\r
\r
The composition has correct units: velocity = velocity + velocity, all in L/T.\r
\r
The sign is also coherent. Since passenger and walkway move in the same direction, [[v_abs]] relative to the floor must be larger than each of the two separate speeds. If it had come out smaller than \\(2.0\\;\\text{m/s}\\), the sign of [[v_rel]] would need to be reviewed.\r
\r
## Physical interpretation\r
\r
The result \\(3.4\\;\\text{m/s}\\) does not mean that two different motions of the passenger have appeared. It means that the same motion is being read from two different observers. The walkway sees the passenger advance at \\(1.4\\;\\text{m/s}\\), while the floor sees her advance at \\(3.4\\;\\text{m/s}\\). Both readings are correct because they answer different questions.\r
\r
The third answer, -3.4 m/s, shows why la relacion correspondiente is so useful: when observer and observed are swapped, the velocity changes sign. The floor does not "really move" for the passenger as a physical conveyor, but its kinematic description from A's frame requires that opposite sign.\r
\r
{{f:inversion_relativa}}\r
\r
\r
# Real-world example\r
\r
## Context\r
\r
An inspection robot moves on a mobile platform inside an industrial hall. The platform advances at almost constant speed and the robot must estimate its velocity relative to the ground in order to arrive at a painted mark.\r
\r
## Physical estimation\r
\r
If the platform advances at \\(0.8\\;\\text{m/s}\\) relative to the ground and the robot moves at \\(0.5\\;\\text{m/s}\\) relative to the platform in the same direction, the controller should expect a ground speed of about \\(1.3\\;\\text{m/s}\\). That estimate already catches interpretation mistakes: if the software predicted \\(0.5\\;\\text{m/s}\\) or \\(0.3\\;\\text{m/s}\\), it would be confusing [[v_rel]] with [[v_abs]] or assigning the sign of [[v_frame]] incorrectly.\r
\r
That is why the estimate matters. It is not decorative. It decides whether the robot will reach the painted mark on time and checks, before closing the maneuver, that the composition between [[v_rel]] and [[v_frame]] produces a [[v_abs]] compatible with the real scene.\r
\r
## Interpretation\r
\r
For navigation inside the platform, [[v_rel]] may be enough. To coordinate the robot with the fixed hall infrastructure, [[v_abs]] is required. That difference captures the practical value of relative velocity: choosing which observer makes the action that actually matters simplest.\r
\r
The same backbone from the theory remains active here as well: la relacion correspondiente identifies the comparison, la relacion correspondiente combines [[v_rel]] and [[v_frame]] into [[v_abs]], la relacion correspondiente changes the observer, and la relacion correspondiente would recover the platform speed from the other two readings.\r
\r
{{f:definicion_vel_rel}}\r
\r
{{f:composicion_velocidades}}\r
\r
{{f:inversion_relativa}}\r
\r
{{f:despeje_v_frame}}\r
\r
`;export{e as default};
