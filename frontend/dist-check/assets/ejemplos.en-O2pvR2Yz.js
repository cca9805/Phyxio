const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A competition cyclist rides along a straight stretch of road. A sensor system records the **velocity [[velocidad]] ** every second and produces the following v-t graph:\r
\r
- From 0 to 8 s: velocity increases linearly from 2 m/s ( [[velocidad_inicial]] ) to 10 m/s ( [[velocidad_final]] ).\r
- From 8 to 20 s: velocity remains constant at 10 m/s.\r
- From 20 to 26 s: velocity decreases linearly from 10 m/s to 4 m/s.\r
\r
Determine: **(a)** the acceleration [[aceleracion]] in each phase, **(b)** the total displacement [[desplazamiento]] , and **(c)** the average velocity [[velocidad_media]] over the whole journey.\r
\r
## Data\r
\r
- Phase 1: 0 to 8 s; velocity from 2 m/s to 10 m/s.\r
- Phase 2: 8 to 20 s; constant velocity 10 m/s.\r
- Phase 3: 20 to 26 s; velocity from 10 m/s to 4 m/s.\r
- Positive axis in the direction of motion.\r
\r
## System definition\r
\r
The system is the cyclist modelled as a point particle on a horizontal rectilinear axis, with the positive direction aligned with the direction of motion. The surroundings are summarised in the supplied v-t graph.\r
\r
## Physical model\r
\r
The motion comprises three successive phases that are read directly from the v-t graph. In phases 1 and 3 the line is straight, indicating **constant acceleration**: the slope of each segment gives a. In phase 2 the line is horizontal, so the acceleration is zero. The **displacement** in each phase is obtained as the **area under the curve** v-t, applying\r
\r
{{f:desplazamiento_area_v_t}}\r
\r
which for linear segments reduces to areas of triangles, rectangles and trapezoids. The overall **average velocity** is the ratio of total displacement to the total [[intervalo_tiempo]] :\r
\r
{{f:velocidad_media_intervalo}}\r
\r
## Model justification\r
\r
Constant acceleration within each phase is assumed because the v-t graph is linear in each segment. This simplification is sensible as long as transitions between phases are instantaneous or very brief compared to the duration of each segment. If the transitions were smooth (curves at the graph's corners), the problem would require finer subdivision or genuine integral calculus.\r
\r
## Symbolic solution\r
\r
The graphical relationships of this topic are applied: the slope of the v-t graph gives the instantaneous acceleration la relacion correspondiente, the area under v-t gives the displacement la relacion correspondiente, the ratio displacement/interval gives the [[velocidad_media]] la relacion correspondiente, the slope of x-t gives the instantaneous velocity la relacion correspondiente, the ratio Δv/[[intervalo_tiempo]] gives the average acceleration [[aceleracion_media]] la relacion correspondiente, and the area under a-t gives the [[cambio_velocidad]] la relacion correspondiente.\r
\r
{{f:aceleracion_inst_pendiente_v_t}}\r
\r
{{f:desplazamiento_area_v_t}}\r
\r
{{f:velocidad_media_intervalo}}\r
\r
{{f:velocidad_inst_pendiente_x_t}}\r
\r
{{f:aceleracion_media_intervalo}}\r
\r
{{f:cambio_velocidad_area_a_t}}\r
\r
\r
**Acceleration in each phase (slope of v-t):**\r
\r
{{f:aceleracion_inst_pendiente_v_t}}\r
\r
(phase 2: zero acceleration)\r
\r
{{f:aceleracion_inst_pendiente_v_t}}\r
\r
**Displacement in each phase (area under v-t):**\r
\r
Phase 1 (trapezoid):\r
\r
{{f:desplazamiento_area_v_t}}\r
\r
Phase 2 (rectangle):\r
\r
{{f:desplazamiento_area_v_t}}\r
\r
Phase 3 (trapezoid):\r
\r
{{f:desplazamiento_area_v_t}}\r
\r
**Total displacement and average velocity:**\r
\r
Δ x_total = Δ x_1 + Δ x_2 + Δ x_3\r
\r
{{f:velocidad_media_intervalo}}\r
\r
**Overall average acceleration** [[aceleracion_media]] over the full 26 s:\r
\r
{{f:aceleracion_media_intervalo}}\r
\r
## Numerical substitution\r
\r
**Accelerations:**\r
\r
**Phase 1:** (10 − 2) / (8 − 0) = 1.0 m/s²\r
\r
**Phase 2:** 0 m/s² (constant velocity)\r
\r
**Phase 3:** (4 − 10) / (26 − 20) = −1.0 m/s²\r
\r
**Displacements:**\r
\r
**Phase 1 (trapezoid):** (2 + 10) / 2 × 8 = 48 m\r
\r
**Phase 2 (rectangle):** 10 × 12 = 120 m\r
\r
**Phase 3 (trapezoid):** (10 + 4) / 2 × 6 = 42 m\r
\r
**Totals:**\r
\r
**Total displacement:** 48 + 120 + 42 = 210 m\r
\r
**Average velocity:** 210 / 26 ≈ 8.08 m/s\r
\r
**Overall average acceleration** [[aceleracion_media]] : (4 − 2) / (26 − 0) ≈ 0.08 m/s²\r
\r
## Dimensional validation\r
\r
- The unit of [[aceleracion]] is m/s², equivalent to m/s/s.\r
- The unit of [[desplazamiento]] is the metre: multiplying m/s by seconds yields m.\r
- The unit of [[velocidad_media]] is m/s, consistent.\r
\r
## Physical interpretation\r
\r
**Acceleration** is read as the slope of the v-t graph: positive in the start-up phase, zero during cruising, and negative when braking. The positive slope in phase 1 means the cyclist is gaining speed because a net forward force is being applied; the zero slope in phase 2 indicates that driving force and resistance are balanced; the negative slope in phase 3 reveals that the brakes are creating a net backward force. The **displacement** of 210 m is the total area under the v-t curve, distributed across a trapezoid, a rectangle, and another trapezoid. Most of the distance (120 m, over half) is covered during the cruising phase, which makes physical sense: it is the longest phase and the one at the highest sustained speed. The **average velocity** of ≈ 8.1 m/s is lower than the peak velocity of 10 m/s because the acceleration and braking phases bring down the overall average.\r
\r
If braking were sharper (steeper negative slope), the phase-3 displacement would shrink and the average velocity would decrease. Conversely, extending the cruising phase would push the average velocity closer to 10 m/s because the constant segment would dominate the mean. This illustrates a general principle: the average velocity is dominated by whichever phase contributes the largest area to the v-t graph.\r
\r
> [!TIP]\r
> Verifying that the temporal bases add up to the total interval (8 + 12 + 6 = 26 s) is a quick self-check to confirm that no segment has been omitted.\r
\r
# Real-world example\r
\r
## Context\r
\r
In a school laboratory a cart is placed on a track with negligible friction. An ultrasonic sensor connected to a computer records the cart's position [[posicion]] every 0.05 s and automatically builds the x-t graph. The student must interpret that graph to decide whether the cart moves at constant velocity or under acceleration, and to estimate velocity and acceleration numerically from the shape of the curve.\r
\r
## Physical estimation\r
\r
Before processing data, it is worth estimating what to expect. A cart pushed by hand along a 1.5 m track typically reaches velocities of 0.3 to 1 m/s. If the x-t graph turns out to be a straight line, its slope directly gives the average velocity (of the order of 0.5 m/s). If the graph is a parabola, the slope grows with time [[tiempo]] , indicating acceleration; the velocity change in one second should be of the order of 0.2 to 0.5 m/s, which corresponds to an acceleration of 0.2 to 0.5 m/s².\r
\r
A total **displacement** of about 1 m in 2 or 3 s is reasonable. If the graph suggested velocities of 10 m/s or accelerations of 5 m/s², something would be wrong with the data or the sensor calibration.\r
\r
## Interpretation\r
\r
The x-t graph allows one to decide **without any equations** whether the motion is uniform or accelerated: a straight line implies constant velocity; a parabola implies constant acceleration. The **slope** of the tangent at any point gives the instantaneous velocity at that moment.\r
\r
If the track is not perfectly horizontal or friction is not truly negligible, the x-t graph deviates from the ideal parabola. That deviation signals the **limit of the constant-acceleration model**. In practice, the student can quantify the discrepancy by computing the slope at two widely separated points and comparing the resulting **change in velocity [[cambio_velocidad]] ** with the prediction from the constant-acceleration formula; if they differ by more than 10 %, the constant-acceleration model is becoming insufficient and one should consider variable friction or restrict the analysis to shorter segments.\r
`;export{e as default};
