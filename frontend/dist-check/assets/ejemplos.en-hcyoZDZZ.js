const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A delivery truck travels along a motorway at constant speed 90 km/h. The truck passes point A (0) at 09:00 h.\r
\r
Calculate: **(a)** the truck's position [[x]] at 09:40 h; **(b)** how long it takes to reach point B, located at 135 km from A; **(c)** the displacement [[dx]] during the first 20 minutes.\r
\r
## Data\r
\r
| Symbol | Meaning | Value |\r
|---|---|---|\r
| $v$ | constant speed | 90 km/h → 25 m/s |\r
| $x_0$ | initial position [[x0]] | $0\\;\\text{km}$ |\r
| $t_a$ | time [[t]] for part (a) | 40 min → (2)/(3) h |\r
| $x_B$ | position of point B | $135\\;\\text{km}$ |\r
| $t_c$ | time for part (c) | 20 min → (1)/(3) h |\r
\r
Positive direction: direction of the truck's motion.\r
\r
## System definition\r
\r
The system is the truck modelled as a point particle undergoing uniform rectilinear motion along the motorway axis. The core magnitude of the leaf is \`v\`, constant throughout. The secondary magnitudes are \`x\` (position), [[x0]] (initial position), [[dx]] (displacement), and [[dt]] (time interval [[dt]] ). Acceleration is zero at all times.\r
\r
## Physical model\r
\r
MRU is valid because the truck maintains cruise control at a fixed speed on a straight road; no measurable acceleration is present. The core relation la relacion correspondiente describes the position at any instant, and la relacion correspondiente connects displacement with time.\r
\r
{{f:mru_posicion}}\r
\r
{{f:mru_velocidad_media}}\r
\r
\r
## Model justification\r
\r
On a straight motorway with cruise control active, air resistance and rolling friction are balanced by the engine, and speed remains constant. The 1D geometry is appropriate. If there were bends or speed variations, MRU would no longer be valid.\r
\r
## Symbolic solution\r
\r
{{f:mru_velocidad_media}}\r
\r
\r
{{f:mru_posicion}}\r
\r
\r
**Part (a) — position at $t_a$:**\r
\r
\r
**Part (b) — time to reach B:**\r
\r
\r
**Part (c) — displacement during $t_c$:**\r
\r
\r
## Numerical substitution\r
\r
\r
For part (a), 90 km/h during 2/3 h gives 60 km from A. For part (b), reaching 135 km requires 135/90 = 1.5 h, so the arrival time is 10:30. For part (c), during 1/3 h the displacement is 30 km.\r
## Dimensional validation\r
\r
\r
\r
Velocity multiplied by time returns length: km/h times h gives km. When time is solved, km divided by km/h gives h. The sign is positive because the axis was chosen along the truck motion.\r
## Physical interpretation\r
\r
The result of part (a) confirms the linear proportionality x propto t: in 40 min (two thirds of an hour) the truck covers two thirds of the 90 km for a full hour's journey. This is a direct consequence of la relacion correspondiente (x): doubling the time doubles the displacement, and the same proportion appears in the numerical result. On an $x$-$t$ graph, the motion is a straight line of slope 90 km/h; the constant slope is the graphical expression of the fact that velocity [[v]] does not change. Part (b) shows that la relacion correspondiente can be inverted to compute time when displacement is known: [[dt]]. This inversion is physically exact in MRU because $v$ does not change during the journey, so there is no ambiguity about which value of velocity to use. Part (c) is the most direct application of [[dx]] : given the time interval and constant speed, the displacement is obtained without knowing either the initial or final position. All three parts use the same core formula in three different arrangements, illustrating that MRU is not a collection of separate equations but a single relation between position, velocity, and time that accommodates all possible configurations of known and unknown quantities. The key physical fact is that $v$ remains constant and there is no acceleration to complicate the model; in practice, this condition is verified experimentally by observing that the $v$-$t$ graph is horizontal.\r
\r
{{f:mru_posicion}}\r
\r
{{f:mru_velocidad_media}}\r
\r
\r
---\r
\r
# Real-world example\r
\r
## Context\r
\r
A fleet management system tracks trucks by GPS at 1-minute intervals. An operator wants to estimate whether a truck will arrive at the warehouse on time; the warehouse is $48\\;\\text{km}$ away from the last recorded position. The GPS shows 85 km/h at that instant.\r
\r
## Physical estimation\r
\r
With MRU: [[dt]] . This estimate assumes the speed remains constant until the destination. In practice there may be traffic lights or delays, but for a motorway during off-peak hours it is a reasonable first approximation.\r
\r
## Interpretation\r
\r
The operator can give an estimated arrival time of 34 minutes with an uncertainty of roughly ±5 min due to traffic conditions. If the truck had been actively accelerating or braking, the MRU model would introduce systematic error; in that case MRUA or more frequent GPS data would be needed. The validity of the model depends directly on how stable the speed is over the remaining stretch.\r
\r
\r
## Verification checklist\r
\r
Before reporting your final answer, confirm each point:\r
\r
1. Has the coordinate axis been defined with a clear positive direction and origin?\r
2. Does the constant velocity [[v]] have the correct sign for that direction?\r
3. Does the initial position [[x0]] match the value given in the problem?\r
4. Has the position equation la relacion correspondiente been rearranged correctly without sign errors?\r
\r
{{f:mru_posicion}}\r
\r
5. Does the result have position units (meters, kilometers)?\r
6. Is the numerical value physically reasonable in context?\r
\r
Each of these questions serves a specific purpose. In MRU the most common mistake is not algebraic but conceptual: confusing initial position with displacement, or assigning the wrong sign to velocity. Building the habit of this verification from the earliest exercises saves time in more complex problems later.\r
`;export{e as default};
