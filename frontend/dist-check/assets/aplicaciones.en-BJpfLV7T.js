const e=`## 1. Optimizing the launch angle of a javelin

An athlete throws a javelin with fixed initial speed [[v0]] = 28.0 m/s from a height close to the ground. If drag is ignored and launch and landing occur at the same level, the range [[R]] depends on how the speed is split between horizontal advance and vertical rise:

{{f:tp_alcance_suelo}}

The ideal maximum occurs when [[theta]] = 45°, because that choice balances flight time and horizontal advance. With [[g]] = 9.8 m/s², the ideal range is about 80 m. For [[theta]] = 35°, the ideal range is slightly smaller, but in a real javelin throw that lower angle is often more useful because the javelin must keep a favorable aerodynamic orientation and is affected by air resistance.

Dominant variable: [[R]]. Horizontal range is the performance parameter, [[theta]] is the control variable, and [[v0]] is held fixed to compare launches.

Validity limit: this reading is a theoretical reference, not an exact competition prediction. In real conditions, drag and lift modify the path and move the optimal angle below 45°.

## 2. Estimating initial speed from a measured range

On a test bench, a steel ball is launched horizontally from [[y0]] = 1.20 m above the floor and lands 0.85 m from the launch point. Because the launch is horizontal, [[vy0]] = 0 and the fall determines the time. The vertical equation is used with the impact height fixed:

{{f:tp_posicion_y}}

Once the fall time is known, the horizontal equation gives [[vx0]]:

{{f:tp_posicion_x}}

With these data, the fall time is about 0.49 s and the initial horizontal velocity is close to 1.7 m/s. Since [[theta]] is almost zero, the initial speed is practically equal to [[vx0]].

Dominant variable: [[vx0]]. It is the magnitude inferred from a measured horizontal distance and a time computed from the fall.

Validity limit: this works well for a dense ball at low speed, where drag is much smaller than weight. If the projectile were light, air resistance would change the range and the method would under- or overestimate the real speed.

## 3. Safety analysis for an ornamental fountain

A fountain launches water with [[v0]] = 4.0 m/s at [[theta]] = 60° from a nozzle at ground level. To decide where a person can walk without getting wet, first estimate the initial components:

{{f:tp_componentes_vx0}}

{{f:tp_componentes_vy0}}

Then calculate the same-level flight time and the range:

{{f:tp_tiempo_vuelo_mismo_nivel}}

{{f:tp_alcance_suelo}}

The ideal range is about 1.4 m. A reasonable exclusion zone would be slightly larger, for example 1.5 m, because wind, jet breakup, and side droplets are not included in the ideal model.

Dominant variable: [[vy0]]. The vertical component controls how long the water remains in the air; during that time, [[vx0]] fixes how far the jet advances.

Validity limit: the calculation is useful for compact jets and low speeds. With crosswind, dispersed droplets, or turbulent nozzles, the real wet boundary should be measured or simulated with a fluid model.

## 4. Indirect measurement of [[g]] from a filmed path

A laboratory records a ball with a high-speed camera. The ball is launched almost horizontally with [[vx0]] = 3.00 m/s, and positions [[x]] and [[y]] are measured relative to the launch point. The horizontal equation converts each horizontal position into a time:

{{f:tp_posicion_x}}

Because [[vy0]] is approximately zero, the vertical fall is related to [[g]] through the vertical equation:

{{f:tp_posicion_y}}

If [[x]] = 0.60 m and [[y]] = -0.196 m are measured, the estimated time is 0.20 s and the value obtained for [[g]] is close to 9.8 m/s². The method does not need a direct timer because time is reconstructed from horizontal advance.

Dominant variable: [[g]]. The gravitational field strength is the unknown; [[vx0]], [[x]], and [[y]] are measured or fixed experimentally.

Validity limit: the method requires [[vx0]] to be almost constant, the camera to be calibrated, and drag to be negligible. A small error in [[x]] changes the estimated time and is amplified when solving for [[g]].

## 5. Predicting the impact point from a building

A ball is thrown from a window at [[y0]] = 15.0 m with [[v0]] = 8.0 m/s and [[theta]] = 20° above the horizontal. Unlike the ground-level case, launch and impact are not at the same height, so the symmetric time should not be used. First calculate the initial components:

{{f:tp_componentes_vx0}}

{{f:tp_componentes_vy0}}

Then impose the final height as ground level, [[y]] = 0, and solve the vertical equation for impact time:

{{f:tp_tiempo_impacto_general}}

With that time, the horizontal position follows from:

{{f:tp_posicion_x}}

The flight time is longer than in a same-level launch because the ball must descend the extra 15.0 m. The impact point is several tens of meters from the base if air resistance is neglected.

Dominant variable: [[t_impacto]]. In this problem, time is not fixed by symmetry but by the vertical condition of reaching the ground.

Validity limit: the model is appropriate for a dense ball and a moderate building height. For large heights, strong wind, or light projectiles, drag changes [[vx]] and also modifies the fall time.
`;export{e as default};
