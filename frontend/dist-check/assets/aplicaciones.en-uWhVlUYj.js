const e=`# Applications\r
\r
## 1. Design of rotational mechanisms\r
\r
Dominant variable: [[tau]]\r
\r
Validity limit: fixed axis, rigid body, and approximately constant moment of inertia.\r
\r
In mechanical engineering, motors, shafts, clutches, and gears are analyzed with a reading analogous to linear dynamics. In translation one asks what net force produces an acceleration; in rotation one asks what net torque produces an angular acceleration. The correspondence\r
\r
{{f:correspondencia_lineal_angular}}\r
\r
,\r
\r
{{f:correspondencia_lineal_angular}}\r
\r
,\r
\r
{{f:correspondencia_lineal_angular}}\r
\r
lets the same intuition be reused: a dynamic cause overcomes resistance and generates a response.\r
\r
The practical value is sizing the torque needed to start a rotating part. If [[I]] is large, the mechanism needs more [[tau]] to reach the same [[alpha]]. The limit appears when the part is not rigid, the axis changes, or clearances matter; then the linear-looking structure is not enough.\r
\r
During industrial startup, this reading prevents over-sizing or under-sizing actuators. A motor is not chosen only by final power, but also by the torque it can deliver during angular acceleration.\r
\r
## 2. Wheels and vehicles\r
\r
Dominant variable: [[I]]\r
\r
Validity limit: rolling without slipping and stable wheel geometry.\r
\r
A vehicle combines motion of the center of mass with rotation of the wheels. The linear part uses\r
\r
{{f:correspondencia_lineal_angular}}\r
\r
, while each wheel requires\r
\r
{{f:correspondencia_lineal_angular}}\r
\r
. The analogy shows that a wheel does not merely follow the vehicle: it also stores rotational energy and resists changes in its spin.\r
\r
Two wheels with the same mass can produce different accelerations if their mass is distributed differently. A wheel with more mass near the rim has larger [[I]] and requires more torque for the same [[alpha]]. This is why bicycle wheels, electric vehicles, and mobile machinery depend on rim design as well as total mass.\r
\r
The application also explains why removing mass near the rim can be more noticeable than removing mass near the axis. The analogy turns that observation into an operational sentence: reducing [[I]] reduces angular resistance.\r
\r
## 3. Wrenches, levers, and tools\r
\r
Dominant variable: [[tau]]\r
\r
Validity limit: force applied approximately perpendicular to the lever arm.\r
\r
A wrench gives the most visible limit of the analogy. In translation, applying a force of 20 N is still applying 20 N. In rotation, the effect also depends on distance from the axis:\r
\r
{{f:correspondencia_lineal_angular}}\r
\r
when the force is perpendicular. The same [[F]] can produce a small torque close to the axis or a large torque far from it.\r
\r
This application teaches that [[tau]] is not "angular force." It is a quantity that includes force, point of application, and axis. The analogy with [[F]] is useful for solving, but the physical interpretation changes.\r
\r
That is why a long tool can loosen a nut without increasing muscular force. The hand force is not changed; the resulting torque about the nut's axis is changed.\r
\r
## 4. Pulleys, disks, and mass distribution\r
\r
Dominant variable: [[I]]\r
\r
Validity limit: known mass distribution and defined rotation axis.\r
\r
In real pulleys and disks, rotational behavior depends on how mass is distributed. A solid pulley and a rim-heavy pulley may have the same [[m]], but not the same [[I]]. If they receive the same [[tau]], the one with larger [[I]] has smaller [[alpha]].\r
\r
This situation is central in machines with cables, lifts, conveyor belts, and transmission systems. An engineer cannot simply replace [[m]] by [[I]] without calculating the axis and geometry. The analogy provides the reasoning structure, but moment of inertia supplies the physical content.\r
\r
It also explains design choices: a pulley can be made light near the rim for quick response, or more massive to smooth variations in rotation. In both cases the decisive variable is not only [[m]], but [[I]].\r
\r
## 5. Learning and transfer of methods\r
\r
Dominant variable: [[alpha]]\r
\r
Validity limit: the learner first identifies the axis, net torque, and correct moment of inertia.\r
\r
In problem solving, the linear-angular analogy is a cognitive tool. A student who understands\r
\r
{{f:correspondencia_lineal_angular}}\r
\r
, what plays the role of resistance, and what response is being requested. This transfer reduces cognitive load and helps organize data, equations, and units.\r
\r
The didactic risk is memorizing a table without interpretation. If [[F]] → [[tau]] and [[m]] → [[I]] are treated as interchangeable labels, the essential difference is lost: in rotation, the axis and geometry are part of the model. Correct use transfers the structure, not the meanings.\r
\r
In class, this transfer helps catch errors before calculation. If a rotational exercise has not defined axis, lever arm, or [[I]], it is not yet ready for the rotational equation.\r
\r
## Synthesis\r
\r
These applications show that the linear-angular analogy is useful for design, estimation, comparison, and learning. Its power lies in recognizing common patterns between translation and rotation; its limit lies in remembering that rotation introduces axis, lever arm, and spatial distribution of mass.\r
\r
The practical rule is simple: use the analogy to build the problem, then check whether the rotational quantities are physically defined. When that check fails, the model must be expanded.`;export{e as default};
