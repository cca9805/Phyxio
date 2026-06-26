const n=`# Exam-type example\r
\r
## Problem statement\r
\r
A test bench pulls a linear load through a rigid pulley connected to a drive shaft. The system starts from rest, and the engineer needs the first-second response. A known net torque [[tau_net]] is applied by the motor, and a pulley of radius [[R]] transmits motion to the rope under no-slip conditions. The translating load has mass [[m]], while the pulley has moment of inertia [[I]].\r
\r
The goal is to compute angular acceleration [[alpha]], linear acceleration [[a]], and the energy split at the end of the interval: total kinetic energy [[K]] divided into translational [[Kt]] and rotational [[Kr]] contributions.\r
\r
## Data\r
\r
- Load mass: [[m]] = 24 kg.\r
- Pulley inertia: [[I]] = 1.8 kg·m2.\r
- Effective radius: [[R]] = 0.20 m.\r
- Applied net torque: [[tau_net]] = 18 N·m.\r
- Measured final angular speed: [[omega]] = 7.0 rad/s.\r
- Analyzed acceleration window: 1.0 s.\r
\r
The sign convention is chosen consistently for torque, rotation, and translation, so sign ambiguity is not expected in this baseline case.\r
\r
## System definition\r
\r
The mechanical arrangement contains two coupled subsystems:\r
\r
- Rotational subsystem: shaft and pulley, governed by [[tau_net]], [[I]], [[alpha]], [[omega]].\r
- Translational subsystem: linear load, governed by [[m]], [[a]], [[v]].\r
\r
The coupling is geometric and kinematic: rope and pulley move without slip. Therefore, angular and linear states are not independent, and any prediction must satisfy both torque balance and compatibility at the contact point.\r
\r
## Physical model\r
\r
The model uses the three core relations of this leaf:\r
\r
- Rotational dynamics to infer [[alpha]] from [[tau_net]] and [[I]].\r
- Translation-rotation kinematic link to project [[alpha]] into [[a]] through [[R]].\r
- Total kinetic energy to read how [[K]] partitions into [[Kt]] and [[Kr]].\r
\r
The setup is treated as rigid and classical, with short-time behavior where geometry remains constant.\r
\r
## Model justification\r
\r
This model is justified because:\r
\r
- The rotation axis is fixed and the pulley can be approximated as a rigid body.\r
- [[R]] is constant during the analyzed interval.\r
- No-slip transmission is a reasonable approximation for the belt-pulley contact.\r
- The objective is to explain causal coupling, not to build a high-fidelity loss model.\r
\r
In industrial validation, friction and drivetrain losses would be added. For an exam-level dynamic estimate, this reduced model is both physically meaningful and didactically clear.\r
\r
## Symbolic solution\r
\r
First, compute angular acceleration from rotational dynamics:\r
\r
{{f:segunda_ley_rotacion}}\r
\r
Then connect angular and linear acceleration:\r
\r
{{f:vinculo_traslacion_rotacion}}\r
\r
Finally, evaluate the energy state at the end of the interval:\r
\r
{{f:energia_cinetica_total}}\r
\r
Operationally, interpret the decomposition as:\r
\r
- [[Kt]]: translational contribution linked to [[m]] and [[v]].\r
- [[Kr]]: rotational contribution linked to [[I]] and [[omega]].\r
- [[K]] = [[Kt]] + [[Kr]].\r
\r
## Numerical substitution\r
\r
1. Angular acceleration:\r
- [[alpha]] = [[tau_net]]/[[I]] = 18/1.8 = 10 rad/s2.\r
\r
2. Linear acceleration:\r
- [[a]] = [[alpha]]·[[R]] = 10·0.20 = 2.0 m/s2.\r
\r
3. Linear speed at final instant via kinematic constraint:\r
- [[v]] = [[omega]]·[[R]] = 7.0·0.20 = 1.4 m/s.\r
\r
4. Translational kinetic part:\r
- [[Kt]] = 0.5·[[m]]·[[v]]2 = 0.5·24·(1.4)2 = 23.52 J.\r
\r
5. Rotational kinetic part:\r
- [[Kr]] = 0.5·[[I]]·[[omega]]2 = 0.5·1.8·(7.0)2 = 44.10 J.\r
\r
6. Total kinetic energy:\r
- [[K]] = [[Kt]] + [[Kr]] = 67.62 J.\r
\r
The rotational share dominates in this case, showing that inertia distribution can control transient behavior as strongly as load mass.\r
\r
## Dimensional validation\r
\r
- Rotational law: N·m divided by kg·m2 gives 1/s2, consistent with [[alpha]].\r
- Kinematic link: (1/s2) times m gives m/s2, consistent with [[a]].\r
- Energy terms: both contributions produce joules, consistent with [[Kt]], [[Kr]], and [[K]].\r
\r
Causal consistency checks:\r
\r
- [[K]], [[Kt]], and [[Kr]] are non-negative.\r
- Positive [[tau_net]] under the chosen convention yields positive [[alpha]] and [[a]].\r
- No contradiction appears between dynamic and kinematic predictions.\r
\r
Therefore, the solution is both dimensionally and physically coherent.\r
\r
## Physical interpretation\r
\r
The key didactic insight is that translation-rotation coupling changes not only acceleration magnitude but also where energy is stored during transients. Even with significant [[m]], a non-negligible [[I]] can absorb a large fraction of mechanical energy in rotational form. This explains why many pulley or wheel-driven systems accelerate more slowly than a purely translational intuition would suggest.\r
\r
If [[I]] were reduced while keeping [[tau_net]] constant, [[alpha]] would rise and, through [[R]], [[a]] would rise as well. That direct chain from torque to usable linear response is exactly the design logic behind lightweight rotating components in high-cycle machinery.\r
\r
Conceptually, this means the model is not only a calculator but a language for mechanism diagnosis. It tells us whether performance limits come from actuation, geometry, or inertia distribution, and it prevents superficial fixes that increase command magnitude without improving physical conversion.\r
\r
It also clarifies model validity: if measured response no longer follows the expected coupling path, the issue is not only numerical mismatch but a structural warning that assumptions like no slip or rigid behavior may no longer hold.\r
\r
# Real-world example\r
\r
## Context\r
\r
In an automated packaging line, each cycle requires rapid acceleration and deceleration of rollers that move product boxes. The motor command remains nominally unchanged, yet throughput drops after a hardware revision where one roller was replaced with a heavier design. Operators report delayed synchronization between stations even though the drive current limit appears healthy.\r
\r
The engineering question is whether to increase motor torque capacity, reduce rotating inertia, or modify geometry so the same actuator delivers better usable acceleration [[a]].\r
\r
## Physical estimation\r
\r
Compare two configurations under identical [[tau_net]] = 30 N·m and [[R]] = 0.15 m:\r
\r
- Configuration A: [[I]] = 1.2 kg·m2.\r
- Configuration B: [[I]] = 2.0 kg·m2.\r
\r
From rotational dynamics:\r
\r
{{f:segunda_ley_rotacion}}\r
\r
Predicted angular acceleration:\r
\r
- A: [[alpha]] = 25 rad/s2.\r
- B: [[alpha]] = 15 rad/s2.\r
\r
From kinematic coupling:\r
\r
{{f:vinculo_traslacion_rotacion}}\r
\r
Predicted linear acceleration:\r
\r
- A: [[a]] = 3.75 m/s2.\r
- B: [[a]] = 2.25 m/s2.\r
\r
This is a 40% drop in useful acceleration under equal actuator torque. For short cycle windows, that reduction can break station timing and create product accumulation.\r
\r
A short energy audit also shows that the higher-inertia option stores a larger fraction in [[Kr]], delaying growth of linear speed [[v]] and therefore delaying transport effectiveness, even when total mechanical accounting remains coherent.\r
\r
To turn that into a quantitative estimate, assume end-of-window angular speeds:\r
\r
- A: [[omega]] = 20 rad/s.\r
- B: [[omega]] = 12 rad/s.\r
\r
With the kinematic link, linear speeds follow from [[v]] = [[omega]]·[[R]]:\r
\r
- A: [[v]] = 3.0 m/s.\r
- B: [[v]] = 1.8 m/s.\r
\r
Now evaluate total kinetic content with:\r
\r
{{f:energia_cinetica_total}}\r
\r
Using [[m]] = 35 kg:\r
\r
- Configuration A: [[Kt]] = 157.5 J, [[Kr]] = 240 J, [[K]] = 397.5 J.\r
- Configuration B: [[Kt]] = 56.7 J, [[Kr]] = 144 J, [[K]] = 200.7 J.\r
\r
This estimate shows not only a dynamic acceleration gap but also an actionable translational-energy gap close to 100 J in [[Kt]], which directly affects cycle productivity.\r
\r
## Interpretation\r
\r
Operationally, the result shows that "more motor" is not always the best first action. If inertia is the dominant bottleneck, reducing rotating mass can improve cycle performance more efficiently than increasing continuous torque rating.\r
\r
The physical interpretation goes beyond reporting numbers. A and B do not just differ in magnitude; they differ in mechanism quality. Configuration A channels a larger fraction of energy into useful translation, while configuration B traps proportionally more in rotation. That mechanism-level distinction is exactly what turns a calculation into a design decision.\r
\r
From a control perspective, the same distinction predicts different behavior under disturbances: the higher-inertia option is slower to recover linear speed after perturbations, so it can amplify synchronization losses across downstream stations.\r
\r
As a teaching outcome, this scenario reinforces three transferable principles:\r
\r
- [[tau_net]] sets [[alpha]], but geometry through [[R]] determines how rotational response becomes translational response.\r
- [[K]] is not informative by itself; separating [[Kt]] and [[Kr]] reveals where performance is being buffered.\r
- Translation-rotation modeling supports defensible engineering decisions based on quantified causality rather than isolated intuition.\r
`;export{n as default};
