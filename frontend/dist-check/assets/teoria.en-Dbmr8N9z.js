const e=`# Vertical [[dy]] motion under gravity [[g]] \r
\r
## Conceptual context\r
\r
Vertical motion under gravity is a special case of uniformly accelerated motion in which the acceleration is Earth's gravitational pull, directed permanently downward. It encompasses free fall (no initial velocity [[v0]] ), upward vertical throws, and downward vertical throws. Although the equations are the same as UARM with a, this topic deserves dedicated treatment because it introduces fundamental ideas: mass independence, time [[t]] symmetry, and a direct connection to energy conservation.\r
\r
Galileo challenged centuries of Aristotelian thinking by showing that all bodies fall with the same acceleration regardless of their weight. The famous Apollo 15 demonstration, in which astronaut David Scott dropped a hammer and a feather on the Moon, spectacularly confirmed this prediction in the absence of air.\r
\r
## 🟢 Essential level\r
\r
When an object moves only along the vertical direction near Earth’s surface, a very recognizable physical situation appears: it may rise, slow down, stop for an instant, and then fall again, or it may simply be released from a certain height [[h]] and descend. The central idea of this leaf is not to memorize equations, but to learn how to read that motion as a one-dimensional case governed by gravity.\r
\r
At this first level, only a few physical questions are needed. What height does the object have relative to the chosen origin? That reading belongs to the magnitude \`h\`. Is the object moving upward or downward, and how is its motion state evolving? That reading is organized through the magnitude \`v, understood as signed vertical velocity [[v]] . The sign is not a decorative algebraic mark: it indicates physical direction within the selected axis.\r
\r
The correct intuition is the following: while the object rises, gravity does not disappear, but acts opposite to the motion and makes the vertical velocity decrease until it vanishes at the highest point. While the object falls, the same gravity makes the speed increase in the downward direction.\r
\r
Therefore, the essential level should leave a clean physical picture: vertical motion under gravity is an ordered change of height and velocity in which gravity keeps the same physical role throughout the process, even though position and velocity change continuously.\r
\r
This initial reading is not meant to solve the full problem, but to prepare a correct physical interpretation. Quantitative relations will appear later, but they only make sense if this conceptual picture is clear.\r
\r
## 🔵 Formal level\r
\r
In the technical naming of this leaf, the core relations that organize vertical motion under gravity are caida_libre_posicion\`, \`caida_libre_velocidad\`, \`caida_libre_tiempo_vuelo\`, and \`caida_libre_torricelli\`. The first connects vertical position [[y]] with time under constant acceleration equal to \\( -g \\); the second describes how velocity changes with time; the third gives access to total flight time in configurations compatible with the model; and the fourth relates velocity and height without explicitly passing through time. Naming them explicitly preserves coherence between theory, formulas, examples, and interpretation.\r
\r
We define the vertical axis $y$ as positive upward. The acceleration is a with 9.8 m/s². The kinematic equations become:\r
\r
\r
\r
\r
For an upward throw from 0 with initial speed v_0 > 0, maximum height is reached when $v = 0$:\r
\r
\r
The ascent time is t_s and, by symmetry, the total flight time (return to the same level) is t_flight → 2v_0 / g.\r
\r
In free fall from rest (0, y_0), the speed upon reaching the ground satisfies:\r
\r
\r
a result also obtainable via energy conservation: mgh.\r
\r
### Cross-reading of the equations\r
\r
The main kinematic relations governing vertical motion under gravity describe how position, velocity, and energy-like quantities are connected. In the internal structure of this material, these correspond to the relations (caida_libre_posicion), (caida_libre_velocidad), and (caida_libre_torricelli).\r
\r
Each of these relations answers a different physical question: how height evolves with time, how velocity evolves, or how velocity and height can be directly related without explicitly using time.\r
\r
\r
Additional formal relations for this leaf:\r
\r
\r
\r
\r
\r
\r
\r
\r
Additional formal relations for this leaf:\r
\r
{{f:caida_libre_tiempo_subida}}\r
\r
{{f:caida_libre_altura_maxima}}\r
\r
{{f:caida_libre_posicion}}\r
\r
{{f:caida_libre_tiempo_vuelo}}\r
\r
{{f:caida_libre_torricelli}}\r
\r
{{f:caida_libre_velocidad}}\r
\r
## 🔴 Structural level\r
\r
The "constant gravity" model requires the fall height to be much smaller than Earth's radius (R_E ≈ 6370 km). At heights comparable to $R_E$, gravitational acceleration decreases as g(r) → GM/r² and the UARM equations cease to be valid. For a skydiver jumping from 4 km, the error in assuming constant $g$ is below 0.1 %, but for a satellite at 400 km it becomes significant.\r
\r
Dimensionally, y_max has units $\\frac{[L]^2/[T]^2}{[L]/[T]^2} = [L]$, confirming consistency. This analysis also reveals that maximum height depends solely on $v_0$ and $g$, not on mass. Mass independence is a direct consequence of the equivalence between inertial mass and gravitational mass — a pillar of general relativity.\r
\r
From the energy viewpoint, the entire vertical motion reduces to an exchange between kinetic and gravitational potential energy:\r
\r
\r
At the highest point, $K = 0$ and all energy is potential. At the lowest point, $U_g$ is minimal and $K$ is maximal. The kinematic equations are nothing but the temporal translation of this conservation law.\r
\r
Air resistance breaks the time symmetry. With drag, the descent time exceeds the ascent time, the return speed is less than $v_0$, and a terminal velocity v_t (for linear drag) is reached when the weight equals the drag force. Knowing when drag is negligible (dense objects, low speeds) versus dominant (feathers, parachutes) is key to the model's validity.\r
\r
### Quantitative validity domain\r
\r
The vertical motion under gravity model is a useful idealization, but not a universal one.\r
\r
For heights of a few meters up to several tens of meters, the value of \\( g \\) can be treated as constant with negligible error. However, as velocity increases, air resistance may become comparable to the weight, especially for light objects or large surface areas.\r
\r
An order-of-magnitude estimate shows that once velocities reach several meters per second, drag forces can no longer be ignored. At that point, acceleration is no longer constant and the ideal model breaks down.\r
\r
The practical criterion is therefore limited heights and moderate velocities. Outside that range, additional forces must be included.\r
\r
## Deep physical interpretation\r
\r
Vertical motion under gravity is the most direct manifestation of space-time geometry near a mass. In general relativity, free fall is not a "forced" motion but the natural trajectory (geodesic) in curved space-time. That all bodies follow the same geodesic — regardless of mass — is equivalent to saying that gravity is not a force but a curvature.\r
\r
At the classical level, the time symmetry of vertical throws expresses the reversibility of Newton's laws without dissipation: filming the ascent and playing it backwards is indistinguishable from the actual descent.\r
\r
## Order of magnitude\r
\r
| Scenario | Data | Result |\r
|---|---|---|\r
| Fall from a table (1 m) | 1 m | 0.45 s, 4.4 m/s |\r
| Upward throw at 20 m/s | 20 m/s | 20.4 m, t_flight → 4.1 s |\r
| Fall from skyscraper (200 m) | 200 m | 6.4 s, 63 m/s (no air) |\r
| Human terminal velocity | spread-eagle | ≈ 55 m/s (with air) |\r
\r
## Personalized resolution method\r
\r
1. **Define** the $y$-axis as positive upward and set a position origin. \r
2. **Assign signs** to $v_0$: positive for upward launch, negative for downward launch. \r
3. **Write** a (always negative with the axis pointing up). \r
4. **Select** the appropriate equation based on the known and unknown quantities. \r
5. **Solve** and check that the final velocity makes sense (e.g., when falling, $v < 0$ with axis upward).\r
\r
*Example:* From a bridge 45 m high, a stone is thrown downward at -3 m/s. How long until it reaches the water ($y = 0$)?\r
\r
\r
Solving the quadratic: t ≈ 2.76 s (the negative root is discarded).\r
\r
## Special cases and extended example\r
\r
**Case 1 — Pure free fall.** An object is released from 80 m. Speed on reaching the ground:\r
\r
\r
**Case 2 — Vertical throw with return.** A ball is thrown upward at 15 m/s from ground level. Maximum height:\r
\r
\r
Flight time: t. The ball passes through any intermediate height twice — once going up and once coming down.\r
\r
**Case 3 — Two objects at different heights.** From the top of a 50 m building an object (A) is released, and simultaneously from the ground another (B) is launched upward at 25 m/s. When do they cross?\r
\r
\r
The quadratic terms cancel because both objects share the same acceleration.\r
\r
## Real student questions\r
\r
**Why does a sheet of paper fall more slowly than a stone?** Because of air resistance, not because gravity accelerates them differently. Crumple the paper into a tight ball and you will see it falls almost as fast as the stone.\r
\r
**Is the acceleration 9.8 or 10?** The exact mean value at sea level is $9.807\\;\\text{m/s}^2$. We use g ≈ 10 m/s² for quick estimates and $9.8\\;\\text{m/s}^2$ for standard calculations.\r
\r
**What happens if I throw something on a planet with different gravity?** The same equations apply; only the value of $g$ changes. On the Moon, g_Moon ≈ 1.6 m/s², so objects fall six times more slowly and jump six times higher.\r
\r
## Cross-cutting connections and study paths\r
\r
- **From UARM:** setting a in the UARM equations immediately generates the equations for this topic. \r
- **Toward projectile motion:** combining vertical motion under gravity with horizontal URM produces the parabolic trajectory of a projectile. \r
- **Toward energy:** the conservation law K + U_g → const is equivalent to the kinematic equations and more powerful when trajectories are curved. \r
- **Toward universal gravitation:** when heights are large, $g$ ceases to be constant and Newton's law F is needed.\r
\r
## Final synthesis\r
\r
Vertical motion under gravity is the most direct and richest application of UARM. It encapsulates profound lessons: the universality of free fall, time symmetry, the equivalence of inertial and gravitational mass, and the energy exchange between kinetic and potential forms. Mastering it paves the way toward projectile motion, gravitational force dynamics, and ultimately general relativity.\r
\r
\r
 [[t_sub]] \r
 [[h_max]] \r
\r
\r
\r
\r
\r
\r
\r
`;export{e as default};
