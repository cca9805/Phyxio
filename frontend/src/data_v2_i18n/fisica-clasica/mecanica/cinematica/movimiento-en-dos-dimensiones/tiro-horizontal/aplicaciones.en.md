## 1. Designing a laboratory demonstration

In a teaching laboratory, a marble leaves a short ramp horizontally and must land inside a glass placed in front of the table. The teacher needs to decide how far from the edge to place the glass so the demonstration is reproducible. Horizontal projectile motion separates the fall, fixed by height [[y0]], from the advance, fixed by launch speed [[v0]].

{{f:th_tiempo_caida}}

{{f:th_alcance}}

Dominant variable: [[R]], because it determines the glass position relative to the edge.

The teaching value is that the prediction can be checked immediately. If the same table is kept and only launch speed changes, the glass should move almost in direct proportion. If table height changes, the adjustment is smaller than many students expect, because fall time does not grow linearly with height.

Validity limit: if the marble leaves with a noticeable vertical inclination or the edge changes its speed, the model no longer describes the launch exactly.

## 2. Parts leaving a packaging conveyor

In a production line, a part leaves the end of a conveyor belt and must fall into a tray placed at a horizontal distance. The drop height is imposed by the machine, but the technician can adjust belt speed. The model turns a mechanical decision into a simple prediction: if the tray is farther away, either more [[v0]] or more available height is needed.

{{f:th_posicion_x}}

{{f:th_posicion_y}}

Dominant variable: [[v0]], because a small change in exit speed changes range linearly.

In maintenance, this calculation also helps diagnose faults. If parts start falling consistently before the tray, the belt may have lost speed or the effective height may have changed. If they land too far away, the exit speed may be above its nominal value. The model does not replace measurement, but it indicates which magnitude should be checked first.

Validity limit: if the part spins strongly, touches side guides, or receives airflow, horizontal advance may stop being uniform.

## 3. Trajectory in a game or simulator

In a physics simulator, an object is launched horizontally from a platform and the engine must draw a convincing trajectory. It is not enough to move the object forward and downward arbitrarily: the curvature must respond to [[g]] and [[v0]]. The spatial trajectory allows the engine to represent the parabola without solving the full problem again at every frame.

{{f:th_trayectoria}}

Dominant variable: the relation between [[x]] and [[y]], because it determines the visual curvature of the motion.

The application is not only visual. In an educational or technical simulation, the curve must respond consistently when data such as height, gravity, or initial speed are changed. If doubling [[v0]] does not stretch the path horizontally, or if increasing [[g]] does not make the fall steeper, the user will notice that the visual model contradicts the physics.

Validity limit: if the engine adds impulses, intermediate collisions, or regions with different gravity, the simple parabola no longer describes the full scene.

## 4. Reconstruction of a fall from a ledge

In a forensic reconstruction, an object falls from a window with nearly horizontal initial velocity. The question is not only whether it falls, but where it lands relative to the facade. Range and vertical velocity at impact help compare the scene with marks on the floor and decide whether a narrative account is compatible with the observed geometry.

{{f:th_velocidad_vertical}}

{{f:th_velocidad_total}}

Dominant variable: [[vy]], because it informs the vertical direction and intensity of the impact together with launch height.

The forensic reading must avoid an automatic conclusion. One impact point may be compatible with different combinations of height and horizontal speed, so horizontal projectile motion works as a plausibility filter. If the observed distance requires a horizontal speed impossible for the scene, the hypothesis should be revised before adding more complex details.

Validity limit: if the object touches the wall, receives an additional impulse, or is very light, the ideal model may underestimate the real deviation.

## 5. Water jet from a horizontal nozzle

A water jet leaves a nozzle horizontally and the operator wants to know where it lands in order to place a container or avoid wetting a sensitive area. Although real flow can be complex, the first stretch of the jet can be approximated as horizontal projectile motion to obtain a quick estimate.

{{f:th_tiempo_caida}}

{{f:th_alcance}}

Dominant variable: the combination of [[y0]] and [[v0]]. Height fixes the available time and horizontal speed fixes the advance during that time.

This estimate is useful when the practical decision does not require a full fluid simulation. For placing a tray, shield, or channel, it is often enough to know the order of magnitude of the first impact. A margin is then added because the real jet may widen, oscillate, or break into droplets before reaching the container.

Validity limit: the approximation fails if the jet breaks up early, if air slows it significantly, or if the nozzle is not really horizontal.
