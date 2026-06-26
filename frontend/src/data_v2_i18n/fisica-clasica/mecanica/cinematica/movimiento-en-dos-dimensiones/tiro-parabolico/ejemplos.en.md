# Exam-type example

## Problem statement

A ball is launched from the ground with initial speed [[v0]] = 20.0 m/s at angle [[theta]] = 30° above the horizontal. Take [[g]] = 9.8 m/s², [[x0]] = 0 m, and [[y0]] = 0 m. Find the initial components, the apex, the total flight time, the range, and the state of the ball when [[t]] = 1.00 s.

## Data

| Quantity | Value |
|---|---:|
| [[v0]] | 20.0 m/s |
| [[theta]] | 30° |
| [[g]] | 9.8 m/s² |
| [[x0]] | 0 m |
| [[y0]] | 0 m |
| [[t]] for the intermediate state | 1.00 s |

The [[x]] axis is positive forward and the [[y]] axis is positive upward. Launch and impact occur at the same level, so the same-level flight time and ground-range relations are valid in this example.

## System definition

The system is the ball during flight, treated as a point projectile. The launch force acts only before release; after release, in the ideal model, the only acceleration is gravity. This choice separates the motion into a uniform horizontal axis and an accelerated vertical axis.

## Physical model

The initial speed [[v0]] is not used directly on each axis. It is first split into a horizontal component [[vx0]] and a vertical component [[vy0]]:

{{f:tp_componentes_vx0}}

{{f:tp_componentes_vy0}}

With those components, position is described by one horizontal equation for uniform advance and one vertical equation affected by gravity:

{{f:tp_posicion_x}}

{{f:tp_posicion_y}}

Horizontal velocity remains constant, while vertical velocity decreases linearly with time:

{{f:tp_velocidad_horizontal}}

{{f:tp_velocidad_y}}

## Model justification

The model is valid because this is a sport or laboratory scale launch where air resistance can be neglected as a first approximation. Gravity is also considered uniform and the ground is treated as flat across the path. These assumptions allow fixed axes and one shared time variable [[t]] for both motions.

The most important condition in the example is that [[y0]] and the impact height are equal. Therefore ascent and descent are symmetric: the time from the apex back to the ground equals the time from launch to the apex. If the ball were launched from a window or landed on a raised platform, this justification would change and the impact time would have to be found from the general vertical equation.

## Symbolic solution

At the apex the vertical component of velocity is zero. Therefore the time to the highest point is:

{{f:tp_tiempo_apice}}

The height gained above the launch point is:

{{f:tp_altura_maxima}}

Since the launch starts at [[y0]] = 0 m, the absolute maximum height equals the height gained:

{{f:tp_altura_maxima_absoluta}}

For a return to the same level, the total flight time is:

{{f:tp_tiempo_vuelo_mismo_nivel}}

The horizontal ground range is:

{{f:tp_alcance_suelo}}

To find speed at an instant, combine the velocity components:

{{f:tp_velocidad_total}}

The spatial trajectory, useful for relating [[x]] and [[y]] without explicit time, is:

{{f:tiro_parabolico_trayectoria}}

## Numerical substitution

**Initial components.** With [[theta]] = 30°, [[vx0]] = 20.0 · cos 30° = 17.3 m/s and [[vy0]] = 20.0 · sin 30° = 10.0 m/s. The horizontal component is larger, so the launch advances much more than it rises.

**Apex.** The time to the apex is [[t_ap]] = 10.0 / 9.8 = 1.02 s. The height gained is [[h_max]] = 10.0² / (2 · 9.8) = 5.10 m. Since [[y0]] is zero, [[y_max]] = 5.10 m.

**Full flight and range.** The ball takes [[T]] = 2 · 10.0 / 9.8 = 2.04 s to return to the ground. During that time it keeps [[vx]] = 17.3 m/s, so [[R]] = 17.3 · 2.04 = 35.3 m.

**State at 1.00 s.** The horizontal position is [[x]] = 17.3 · 1.00 = 17.3 m. The vertical position is [[y]] = 10.0 · 1.00 - 0.5 · 9.8 · 1.00² = 5.10 m. The vertical velocity is [[vy]] = 10.0 - 9.8 · 1.00 = 0.20 m/s, a small positive value. The ball is still rising, but it is almost at the apex.

**Instantaneous speed.** With [[vx]] = 17.3 m/s and [[vy]] = 0.20 m/s, the speed is [[v]] ≈ 17.3 m/s. This does not mean the ball has stopped at the top: almost only the vertical component has vanished.

## Dimensional validation

Velocity components are expressed in m/s; positions, heights, and ranges in m; and times in s. In the range calculation, horizontal velocity multiplied by time gives a length. In total speed, squared velocities are added and then square-rooted, so the final unit returns to m/s.

## Physical interpretation

The range of 35.3 m comes from two separate facts: the ball remains in the air for 2.04 s and, during that whole interval, advances horizontally at 17.3 m/s. Gravity does not reduce horizontal advance in the ideal model; it reduces the vertical component, first up to the apex and then during the fall.

The reading at [[t]] = 1.00 s confirms that the calculation is coherent. The time is very close to [[t_ap]] = 1.02 s, the height is already near its maximum, and [[vy]] is almost zero. If [[vy]] had come out negative at that instant, it would suggest either a numerical error or that the chosen instant was after the apex.

Physically, the example shows that the highest point is not a point of rest. The ball still has a large horizontal velocity even though the vertical part has almost vanished. This reading avoids treating the apex as a complete stop and keeps total speed, horizontal component, and vertical component clearly separated.

It also shows why range is not controlled only by throwing "harder". The same [[v0]] can be distributed in many ways between [[vx0]] and [[vy0]]. If too much speed is spent upward, flight time increases but horizontal advance per second decreases; if too little is spent upward, the ball advances quickly but lands soon.

If launch and landing were not at the same level, neither [[T]] nor the ground-range formula should be used. In that case the impact height [[y_impacto]] must be fixed and the impact time computed:

{{f:tp_tiempo_impacto_general}}

# Real-world example

## Context

A long-jump athlete takes off with [[v0]] = 9.5 m/s at [[theta]] = 22° from a board located approximately at the same level as the sand. We want to estimate the range [[R]] and check whether the result has the scale of a real jump.

## Physical estimation

The components are approximately [[vx0]] = 8.8 m/s and [[vy0]] = 3.6 m/s. The same-level flight time is [[T]] ≈ 0.73 s, and the ideal range is [[R]] ≈ 6.4 m. This value is below elite marks, but it has the correct scale: meters, not centimeters and not tens of meters.

The estimate is physically reasonable because the athlete keeps most of the speed in the horizontal component. A much larger angle would increase flight time, but it would also remove horizontal speed from the jump. The numerical result therefore captures the main compromise of the event even though it ignores takeoff mechanics and landing posture.

## Interpretation

Athletes jump at angles below 45° because [[v0]] and [[theta]] cannot be chosen independently. Increasing the angle too much gains flight time but loses a lot of horizontal speed. The ideal model does not include body technique, takeoff impulse, leg position, or drag, yet it shows the central physical tension between preserving [[vx0]] and gaining air time through [[vy0]].
