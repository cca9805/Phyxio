const e=`# Exam-type example\r
\r
## Problem statement\r
A thin, uniform rod is used as a reference model. Its mass is [[m]] of 2 kg and its centroidal moment of inertia [[Icm]] is 0.24 kg·m² about an axis perpendicular to the rod through the center of mass. The goal is to compute [[I]] when the axis is moved to one end and verify that the result matches the expected physical reading.\r
\r
## Data\r
- Rod mass: [[m]] = 2 kg.\r
- Centroidal moment of inertia: [[Icm]] = 0.24 kg·m².\r
- Distance between center and end: 0.6 m.\r
\r
## System definition\r
The system is a rigid rod with two parallel axes. One passes through the center of mass and the other through an end. The only distance that matters is the perpendicular separation between those axes, because that is what changes rotational inertia.\r
\r
## Physical model\r
We use the Steiner relation:\r
\r
{{f:steiner-directa}}\r
\r
because the axes are parallel and the reference axis passes through the center of mass. The relation says that moving the axis does not create a new physical law; it adds a positive geometric correction to the central value.\r
\r
## Model justification\r
For a slender rod, the scalar model is sufficient because the axis shift does not change the rotation direction. The mass is unchanged and the only effect is that more of it lies farther from the rotation line. That is exactly the effect the theorem measures.\r
\r
## Symbolic solution\r
The key idea is that the inertia about the end must be larger than the inertia about the center. The reason is physical rather than merely algebraic: moving the axis toward the end forces more effective mass to rotate around the line of motion.\r
\r
{{f:steiner-directa}}\r
\r
The correct reading is that the additional term always adds. Therefore the final value should never fall below the centroidal inertia when the axes are parallel.\r
\r
Once [[I]] is obtained, the dynamic link is interpreted with the rotational relation:\r
\r
{{f:respuesta-rotacional}}\r
\r
This closes the core logic of the leaf: changing the axis does not only alter a geometric quantity, it also changes the angular response expected from a given applied torque.\r
\r
## Numerical substitution\r
Substituting the reference rod data gives:\r
\r
[[I]] = [[Icm]] + [[m]]·[[d]]^2 = 0.24 + 2·(0.6)^2 = 0.96 kg·m².\r
\r
The result is four times the centroidal inertia. That is not just a neat number; it explains why an end pivot is significantly harder to spin than a center pivot.\r
\r
## Dimensional validation\r
The expression has units of kg·m² because mass is multiplied by a squared distance. That matches the dimension of a moment of inertia and confirms that the result is physically meaningful.\r
\r
## Physical interpretation\r
The final value [[I]] = 0.96 kg·m² is larger than [[Icm]] = 0.24 kg·m², so the physical reading is exactly the one expected. Moving the axis away from the center makes the rod more resistant to angular acceleration. If the same [[tau]] acted on the rod, the angular acceleration [[alpha]] would be smaller because the system now stores more rotational inertia.\r
\r
The important lesson is not the number 0.96 itself, but why it appears. The theorem separates the body's intrinsic inertia from the contribution of axis placement. In a real problem, that distinction helps catch geometry mistakes, unit mistakes, and overly optimistic design assumptions.\r
\r
The full causal chain is explicit: larger axis offset increases the geometric contribution; larger geometric contribution increases [[I]]; larger [[I]] lowers [[alpha]] for the same [[tau]]. This explains not just the computed value but also the startup and braking behavior of the mechanism.\r
\r
If total mass [[m]] increased with the same geometry, the inertia increment would rise proportionally and angular response would become slower. If [[d]] were reduced by moving the axis closer to the center, the system would recover angular agility and require less actuator effort for the same dynamic target.\r
\r
# Real-world example\r
## Context\r
A parking barrier 5 m long and 20 kg in mass pivots at one end. Estimating the real inertia is essential so the motor is not undersized at startup.\r
\r
## Physical estimation\r
In this geometry, the axis is far from the center of mass. The translational contribution therefore dominates and [[I]] grows strongly relative to [[Icm]]. This is exactly the case where Steiner is useful: no new integration is needed, but the geometry must be read correctly.\r
\r
If the design were based only on [[Icm]], the startup would look easier than it really is. In contrast, the inertia about the real axis captures the true mechanical difficulty: the farther the mass is from the axis, the more [[tau]] is required to reach the desired [[alpha]].\r
\r
A simple quantitative estimate fixes the order of magnitude. If the actuator can deliver about 120 N·m and the effective barrier inertia is around 100 kg·m², the initial angular acceleration is near 1.2 rad/s². If the design mistakenly used an inertia four times smaller, the prediction would jump to almost 5 rad/s², and the controller would be tuned on an unrealistic startup profile.\r
\r
## Interpretation\r
The engineering reading is direct: the system must be designed with [[I]], not with [[Icm]]. That changes the actuator, the gearing, the startup time, and the safety of the cycle. A barrier that opens and closes many times per day cannot rely on a centroidal approximation, because the real pivot dominates the mechanical demand.\r
\r
This example also gives a useful quality check. When the axis displacement is large, the result should grow sharply and quadratically with distance. If that trend does not appear, the problem is in the geometry, the data reading, or the unit system.\r
\r
In short, Steiner is not only an exam formula. It is a practical rule for deciding where the axis should be and how that choice translates into dynamic cost, energy use, and mechanical reliability.\r
\r
The same example also shows a sensitivity effect: if axis distance increases by 20 percent, the geometric contribution rises by roughly 44 percent because of the squared dependence. This is why apparently small mounting changes can create large changes in rotational demand.\r
`;export{e as default};
