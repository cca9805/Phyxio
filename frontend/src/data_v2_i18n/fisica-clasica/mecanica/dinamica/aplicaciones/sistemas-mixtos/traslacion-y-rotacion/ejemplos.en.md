# Exam-type example

## Problem statement

A test bench pulls a linear load through a rigid pulley connected to a drive shaft. The system starts from rest, and the engineer needs the first-second response. A known net torque [[tau_net]] is applied by the motor, and a pulley of radius [[R]] transmits motion to the rope under no-slip conditions. The translating load has mass [[m]], while the pulley has moment of inertia [[I]].

The goal is to compute angular acceleration [[alpha]], linear acceleration [[a]], and the energy split at the end of the interval: total kinetic energy [[K]] divided into translational [[Kt]] and rotational [[Kr]] contributions.

## Data

- Load mass: [[m]] = 24 kg.
- Pulley inertia: [[I]] = 1.8 kg·m2.
- Effective radius: [[R]] = 0.20 m.
- Applied net torque: [[tau_net]] = 18 N·m.
- Measured final angular speed: [[omega]] = 7.0 rad/s.
- Analyzed acceleration window: 1.0 s.

The sign convention is chosen consistently for torque, rotation, and translation, so sign ambiguity is not expected in this baseline case.

## System definition

The mechanical arrangement contains two coupled subsystems:

- Rotational subsystem: shaft and pulley, governed by [[tau_net]], [[I]], [[alpha]], [[omega]].
- Translational subsystem: linear load, governed by [[m]], [[a]], [[v]].

The coupling is geometric and kinematic: rope and pulley move without slip. Therefore, angular and linear states are not independent, and any prediction must satisfy both torque balance and compatibility at the contact point.

## Physical model

The model uses the three core relations of this leaf:

- Rotational dynamics to infer [[alpha]] from [[tau_net]] and [[I]].
- Translation-rotation kinematic link to project [[alpha]] into [[a]] through [[R]].
- Total kinetic energy to read how [[K]] partitions into [[Kt]] and [[Kr]].

The setup is treated as rigid and classical, with short-time behavior where geometry remains constant.

## Model justification

This model is justified because:

- The rotation axis is fixed and the pulley can be approximated as a rigid body.
- [[R]] is constant during the analyzed interval.
- No-slip transmission is a reasonable approximation for the belt-pulley contact.
- The objective is to explain causal coupling, not to build a high-fidelity loss model.

In industrial validation, friction and drivetrain losses would be added. For an exam-level dynamic estimate, this reduced model is both physically meaningful and didactically clear.

## Symbolic solution

First, compute angular acceleration from rotational dynamics:

{{f:segunda_ley_rotacion}}

Then connect angular and linear acceleration:

{{f:vinculo_traslacion_rotacion}}

Finally, evaluate the energy state at the end of the interval:

{{f:energia_cinetica_total}}

Operationally, interpret the decomposition as:

- [[Kt]]: translational contribution linked to [[m]] and [[v]].
- [[Kr]]: rotational contribution linked to [[I]] and [[omega]].
- [[K]] = [[Kt]] + [[Kr]].

## Numerical substitution

1. Angular acceleration:
- [[alpha]] = [[tau_net]]/[[I]] = 18/1.8 = 10 rad/s2.

2. Linear acceleration:
- [[a]] = [[alpha]]·[[R]] = 10·0.20 = 2.0 m/s2.

3. Linear speed at final instant via kinematic constraint:
- [[v]] = [[omega]]·[[R]] = 7.0·0.20 = 1.4 m/s.

4. Translational kinetic part:
- [[Kt]] = 0.5·[[m]]·[[v]]2 = 0.5·24·(1.4)2 = 23.52 J.

5. Rotational kinetic part:
- [[Kr]] = 0.5·[[I]]·[[omega]]2 = 0.5·1.8·(7.0)2 = 44.10 J.

6. Total kinetic energy:
- [[K]] = [[Kt]] + [[Kr]] = 67.62 J.

The rotational share dominates in this case, showing that inertia distribution can control transient behavior as strongly as load mass.

## Dimensional validation

- Rotational law: N·m divided by kg·m2 gives 1/s2, consistent with [[alpha]].
- Kinematic link: (1/s2) times m gives m/s2, consistent with [[a]].
- Energy terms: both contributions produce joules, consistent with [[Kt]], [[Kr]], and [[K]].

Causal consistency checks:

- [[K]], [[Kt]], and [[Kr]] are non-negative.
- Positive [[tau_net]] under the chosen convention yields positive [[alpha]] and [[a]].
- No contradiction appears between dynamic and kinematic predictions.

Therefore, the solution is both dimensionally and physically coherent.

## Physical interpretation

The key didactic insight is that translation-rotation coupling changes not only acceleration magnitude but also where energy is stored during transients. Even with significant [[m]], a non-negligible [[I]] can absorb a large fraction of mechanical energy in rotational form. This explains why many pulley or wheel-driven systems accelerate more slowly than a purely translational intuition would suggest.

If [[I]] were reduced while keeping [[tau_net]] constant, [[alpha]] would rise and, through [[R]], [[a]] would rise as well. That direct chain from torque to usable linear response is exactly the design logic behind lightweight rotating components in high-cycle machinery.

Conceptually, this means the model is not only a calculator but a language for mechanism diagnosis. It tells us whether performance limits come from actuation, geometry, or inertia distribution, and it prevents superficial fixes that increase command magnitude without improving physical conversion.

It also clarifies model validity: if measured response no longer follows the expected coupling path, the issue is not only numerical mismatch but a structural warning that assumptions like no slip or rigid behavior may no longer hold.

# Real-world example

## Context

In an automated packaging line, each cycle requires rapid acceleration and deceleration of rollers that move product boxes. The motor command remains nominally unchanged, yet throughput drops after a hardware revision where one roller was replaced with a heavier design. Operators report delayed synchronization between stations even though the drive current limit appears healthy.

The engineering question is whether to increase motor torque capacity, reduce rotating inertia, or modify geometry so the same actuator delivers better usable acceleration [[a]].

## Physical estimation

Compare two configurations under identical [[tau_net]] = 30 N·m and [[R]] = 0.15 m:

- Configuration A: [[I]] = 1.2 kg·m2.
- Configuration B: [[I]] = 2.0 kg·m2.

From rotational dynamics:

{{f:segunda_ley_rotacion}}

Predicted angular acceleration:

- A: [[alpha]] = 25 rad/s2.
- B: [[alpha]] = 15 rad/s2.

From kinematic coupling:

{{f:vinculo_traslacion_rotacion}}

Predicted linear acceleration:

- A: [[a]] = 3.75 m/s2.
- B: [[a]] = 2.25 m/s2.

This is a 40% drop in useful acceleration under equal actuator torque. For short cycle windows, that reduction can break station timing and create product accumulation.

A short energy audit also shows that the higher-inertia option stores a larger fraction in [[Kr]], delaying growth of linear speed [[v]] and therefore delaying transport effectiveness, even when total mechanical accounting remains coherent.

To turn that into a quantitative estimate, assume end-of-window angular speeds:

- A: [[omega]] = 20 rad/s.
- B: [[omega]] = 12 rad/s.

With the kinematic link, linear speeds follow from [[v]] = [[omega]]·[[R]]:

- A: [[v]] = 3.0 m/s.
- B: [[v]] = 1.8 m/s.

Now evaluate total kinetic content with:

{{f:energia_cinetica_total}}

Using [[m]] = 35 kg:

- Configuration A: [[Kt]] = 157.5 J, [[Kr]] = 240 J, [[K]] = 397.5 J.
- Configuration B: [[Kt]] = 56.7 J, [[Kr]] = 144 J, [[K]] = 200.7 J.

This estimate shows not only a dynamic acceleration gap but also an actionable translational-energy gap close to 100 J in [[Kt]], which directly affects cycle productivity.

## Interpretation

Operationally, the result shows that "more motor" is not always the best first action. If inertia is the dominant bottleneck, reducing rotating mass can improve cycle performance more efficiently than increasing continuous torque rating.

The physical interpretation goes beyond reporting numbers. A and B do not just differ in magnitude; they differ in mechanism quality. Configuration A channels a larger fraction of energy into useful translation, while configuration B traps proportionally more in rotation. That mechanism-level distinction is exactly what turns a calculation into a design decision.

From a control perspective, the same distinction predicts different behavior under disturbances: the higher-inertia option is slower to recover linear speed after perturbations, so it can amplify synchronization losses across downstream stations.

As a teaching outcome, this scenario reinforces three transferable principles:

- [[tau_net]] sets [[alpha]], but geometry through [[R]] determines how rotational response becomes translational response.
- [[K]] is not informative by itself; separating [[Kt]] and [[Kr]] reveals where performance is being buffered.
- Translation-rotation modeling supports defensible engineering decisions based on quantified causality rather than isolated intuition.
