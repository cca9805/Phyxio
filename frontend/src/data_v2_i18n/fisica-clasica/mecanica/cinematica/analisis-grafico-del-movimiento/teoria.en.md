# Graphical analysis of motion

## Conceptual context

Graphs are a fundamental tool in kinematics because they allow you to see at a glance how position [[posicion]] , velocity [[velocidad]] and acceleration [[aceleracion]] change over time [[tiempo]] . Many problems that are algebraically complex become obvious when plotted: identifying phases of acceleration, rest or reversal is immediate from the shape of the curve. Moreover, the relationships between graphs are governed by derivatives and integrals, making graphical analysis a powerful bridge between visual intuition and mathematical formalism.

Three types of graphs dominate one-dimensional kinematics: position-time ($x$-$t$), velocity-time ($v$-$t$) and acceleration-time ($a$-$t$). Each one encodes different information, yet they are chained together: the slope of one yields the next, and the area under one yields the previous. Learning to read and translate between them is an essential skill that reappears in thermodynamics, electric circuits and fluid mechanics.

## 🟢 Essential level

Imagine filming a friend running down a straight corridor with your phone. If you snapshot their position every second and join the dots, you get an $x$-$t$ graph. When the line rises with a constant slope, your friend is moving at constant speed. If the line curves upward, they are speeding up. If it flattens, they have stopped. And if it goes down, they are heading back.

The key to the $v$-$t$ graph is to think of the speedometer in a car. A horizontal stretch means constant velocity; a rising line means the driver is pressing the accelerator; a falling line means braking. The area enclosed between the curve and the time axis measures the distance (or displacement [[desplazamiento]] , with sign). If the velocity is constant, the area is simply a rectangle whose height is the velocity and whose base is the elapsed time: base times height gives you the metres covered.

For the $a$-$t$ graph the reasoning is the same: the area under the acceleration curve tells you how much the velocity changed. The larger the acceleration and the longer it lasts, the more metres per second the object gains (or loses).

> [!WARNING]
> Watch out for areas "below the axis": if the $v$-$t$ curve dips below zero, that area represents negative displacement (the object moves backwards). Total distance requires adding the absolute values of each segment.

## 🔵 Formal level

**Position-time graph ($x$-$t$).** The instantaneous velocity is the slope of the tangent to the curve:

{{f:velocidad_inst_pendiente_x_t}}

For uniform rectilinear motion (URM), the position [[posicion]] as a function of time traces a straight line whose slope is the velocity [[velocidad]] . For uniformly accelerated motion (UAM), the position traces a parabola whose concavity depends on the sign of the acceleration [[aceleracion]] .

**Velocity-time graph ($v$-$t$).** The instantaneous acceleration is the slope:

{{f:aceleracion_inst_pendiente_v_t}}

The displacement between $t_1$ and $t_2$ is computed as the signed area under the curve:

{{f:desplazamiento_area_v_t}}

When the velocity is a linear function of time, the area under the curve is a trapezoid (or triangle), and the integral reduces to elementary geometric formulae. The average velocity [[velocidad_media]] over an interval is the ratio of displacement [[desplazamiento]] to the time interval [[intervalo_tiempo]] ; graphically, it is the height of the equivalent-area rectangle under the v-t curve over that segment.

{{f:velocidad_media_intervalo}}

**Acceleration-time graph ($a$-$t$).** The change in velocity [[cambio_velocidad]] is the area under the acceleration curve:

{{f:cambio_velocidad_area_a_t}}

If the acceleration is constant, the graph is a horizontal line and the area is simply $a \cdot \Delta t$. The average acceleration [[aceleracion_media]] over an interval is the ratio of velocity change to time interval; graphically, it is the secant slope on v-t between the endpoints of the segment.

{{f:aceleracion_media_intervalo}}

These three relationships form a complete cycle: differentiating takes you from $x$ down to $v$ and from $v$ down to $a$; integrating takes you from $a$ up to $v$ and from $v$ up to $x$, always with an integration constant that fixes the initial [[posicion_inicial]] condition. In summary, the key graphical relations of this topic are: velocidad_inst_pendiente_x_t (slope of $x$-$t$), velocidad_media_intervalo (ratio $\Delta x / \Delta t$), desplazamiento_area_v_t (area under $v$-$t$), aceleracion_inst_pendiente_v_t (slope of $v$-$t$), aceleracion_media_intervalo (ratio $\Delta v / \Delta t$), and cambio_velocidad_area_a_t (area under $a$-$t$).

## 🔴 Structural level

Graphical analysis exposes the derivative–integral duality in a visual and immediate way. From a dimensional-analysis perspective, the slope of $x$-$t$ has dimensions $[L]/[T] = [LT^{-1}]$ (velocity), and the area under $v$-$t$ has dimensions $[LT^{-1}] \times [T] = [L]$ (displacement). This dimensional consistency is an internal proof that the method is correct rather than a mere geometric trick.

One limitation of the graphical model is that it presupposes continuity. A vertical jump in the $x$-$t$ graph would imply teleportation, and a discontinuity in $v$-$t$ would imply infinite acceleration. In reality, transitions are always smooth, even if they occur on very short time scales. When we model the bounce of a ball as an instantaneous velocity reversal, we are making an idealisation: the contact force acts over milliseconds, producing an enormous but finite acceleration.

Graph reading connects to the Riemann integral: the area under $v$-$t$ is constructed as a sum of infinitesimal rectangles $v(t_i)\,\Delta t$, which is precisely the definition of the definite integral. Kinematics thus provides a physical motivation for integral-calculus concepts. Graphical analysis also reveals symmetries: a motion whose $v$-$t$ plot is symmetric about a vertical axis has equal average velocities on both sides, which can simplify calculations.

From an energy perspective, the area under a force-displacement ($F$-$x$) graph gives the work done. Although that graph is not strictly kinematic, the habit of reading "area = physical quantity" is trained first with kinematic graphs and then transferred to dynamic and thermodynamic contexts, demonstrating the cross-cutting power of the graphical method.

## Deep physical interpretation

Every point on an $x$-$t$ graph encodes an event: a place and an instant. The full curve is the "history" of the particle in one-dimensional space-time. Two straight lines that cross indicate that the objects are at the same place at the same time: an encounter. The relative slope at that point tells whether they are approaching or separating after the meeting.

A $v$-$t$ graph with an abrupt change of slope (a "kink") signals a sudden change in acceleration, which physically corresponds to the sudden appearance or disappearance of a force. Identifying these points in real experimental data is key to understanding which forces acted during the motion.

## Order of magnitude

| Situation | Typical graph | Characteristic |
|---|---|---|
| Person walking 5 min | x-t line with slope ≈ 1.4 m/s | Advance of ≈ 420 m |
| Car braking in town | v-t descending line with a ≈ −4 m/s² | From 50 km/h to 0 in ≈ 3.5 s |
| Free fall for 2 s | v-t rising line with slope 9.8 m/s² | [[velocidad_final]] ≈ 19.6 m/s, Δx ≈ 19.6 m |
| Metro passenger accelerating | a-t horizontal at ≈ 1.2 m/s² for 10 s | Velocity gain of 12 m/s |

## Personalized resolution method

1. **Identify which graph you have** ($x$-$t$, $v$-$t$ or $a$-$t$) and what you are asked to find.
2. **If you need to go "down" one level** (from $x$ to $v$, or from $v$ to $a$), compute the slope point by point or, if the curve is linear, use $\Delta y / \Delta x$.
3. **If you need to go "up" one level** (from $a$ to $v$, or from $v$ to $x$), compute the area under the curve over the requested interval. Use geometric shapes (rectangles, triangles, trapezoids) for simple areas.
4. **Watch the sign**: areas below the time axis are negative. A negative slope indicates negative velocity or acceleration.
5. **Reconstruct the derived/integrated graph** point by point for compound motions with several phases. Each phase produces a different segment.

## Special cases and extended example

**Special case — Compound motion.** A cyclist accelerates, then maintains constant speed, and finally brakes. The $v$-$t$ graph is a trapezoid: rising ramp, horizontal plateau and descending ramp. The total displacement is the area of the trapezoid.

**Extended example.** A train starts from rest, accelerates uniformly for $20\;\text{s}$ until it reaches $30\;\text{m/s}$, cruises at that speed for $60\;\text{s}$, and brakes uniformly for $15\;\text{s}$ until it stops.

- Phase 1 (acceleration): acceleration 30/20 = 1.5 m/s². Area: triangle with base 20 s and height 30 m/s → partial [[desplazamiento]] = ½ × 20 × 30 = 300 m.
- Phase 2 (cruising): Area: rectangle 30 × 60 = 1 800 m.
- Phase 3 (braking): acceleration −30/15 = −2 m/s². Area: triangle ½ × 15 × 30 = 225 m.
- **Total distance:** 300 + 1 800 + 225 = 2 325 m.

## Real student questions

**Can I get acceleration directly from the $x$-$t$ graph?**
Yes, but not as a slope. Acceleration is related to the curvature (second derivative). If $x$-$t$ is a parabola, the acceleration is constant and equals twice the coefficient of the quadratic term. However, it is much simpler to first move to $v$-$t$ and then read the slope.

**What if the $v$-$t$ graph has a curved segment?**
The area is no longer a simple rectangle or triangle. You must estimate it by counting grid squares or by using integral calculus. The slope at each point still gives the instantaneous acceleration, which now varies with time.

**Are distance and displacement read the same way from the graph?**
No. Displacement is the net (signed) area, and distance is the sum of the absolute areas. If the $v$-$t$ curve crosses the time axis, the positive and negative segments cancel in the displacement but add up for the distance.

## Cross-cutting connections and study paths

- **Towards kinematic quantities:** Graphs are the visual representation of the definitions of velocity and acceleration as derivatives.
- **Towards UAM:** The $v$-$t$ graph of uniformly accelerated motion is a straight line, the simplest case of graphical integration.
- **Towards integral calculus:** Computing areas under curves is exactly the geometric motivation for the Riemann integral.
- **Towards thermodynamics:** Reading work from $P$-$V$ diagrams follows the same "area under the curve" logic.

## Final synthesis

Reading kinematic graphs is translating between pictures and equations. The slope of $x$-$t$ gives velocity; the slope of $v$-$t$ gives acceleration; the area under $v$-$t$ gives displacement. Mastering this translation allows you to solve complex multi-phase motion problems without algebraic equations, and prepares you to apply the same graphical logic in more advanced areas of physics.
