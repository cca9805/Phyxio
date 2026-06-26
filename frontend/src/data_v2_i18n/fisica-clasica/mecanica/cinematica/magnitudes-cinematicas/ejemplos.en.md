# Exam-type example

## Problem statement

A cyclist starts from rest at point A and reaches point B following a curved road. The total [[distancia]] is 12.0 km, whereas the magnitude of the net [[desplazamiento]] between A and B is 9.6 km. The trip lasts an [[intervalo_tiempo]] of 40 min. At the start, the cyclist is at rest (0 m/s), and on arrival at B the speedometer reads 5.0 m/s.

Compute:

1. the **average velocity [[velocidad]] [[velocidad_media]] ** and the **average speed [[rapidez]] [[rapidez_media]] ** for the whole trip;
2. the **change in velocity [[cambio_velocidad]] ** \( \Delta v \) and the **average acceleration [[aceleracion]] [[aceleracion_media]] ** over the journey;
3. a physical interpretation explaining why the average quantities do not fully describe the real motion.

## Data

| Symbol | Meaning | Value |
|---|---|---|
| s | [[distancia]] traveled | 12.0 km (12 000 m) |
| |Δx| | [[desplazamiento]] magnitude | 9.6 km (9 600 m) |
| Δt | [[intervalo_tiempo]] | 40 min (2 400 s) |
| \( v_1 \) | initial velocity | \( 0\;\text{m/s} \) |
| \( v_2 \) | final velocity | \( 5.0\;\text{m/s} \) |

We choose the positive direction from A toward B.

## System definition

The system is the point particle representing the cyclist. The analysis is performed in an effective one-dimensional description, projecting the motion onto the A→B axis for displacement and average velocity. The actual route length is represented by the scalar path length \( s \), which depends on the full trajectory rather than on sign.

In the internal language of the leaf, the core magnitudes involved are [[distancia]] , [[desplazamiento]] , [[cambio_velocidad]] , [[velocidad_media]] , [[rapidez_media]] , and [[aceleracion_media]] . The physical goal is not merely numerical substitution, but the correct separation between route geometry, net position [[posicion_vectorial]] [[posicion]] change, and change in the state of motion.

## Physical model

The physical model is point-particle kinematics described through finite-interval averages. The core relations of the leaf are [[velocidad_media]] , [[rapidez_media]] , and [[aceleracion_media]] . The first connects net displacement with elapsed time, the second connects total path length with elapsed time, and the third connects change in velocity with elapsed time.

This means that the same trip can be read in three different ways:

- as a geometrical path through [[distancia]] ,
- as a net change of position through [[desplazamiento]] ,
- as a change in the motion state through [[cambio_velocidad]] and [[aceleracion_media]] .

A full law \( x(t) \) is not required here because the problem asks for global averages, not for the detailed time history of the motion.

## Model justification

This model is physically justified because the given data are initial state, final state, and total duration. With that information one can compute [[velocidad_media]] , [[rapidez_media]] , and [[aceleracion_media]] in a well-defined way. The path length \( s \) captures the actual route regardless of curvature, the displacement \( \Delta x \) captures the net position change between start and finish, and the [[cambio_velocidad]] captures how the state of motion has changed between the two endpoints.

The model would cease to be sufficient if the question were local rather than global. If we wanted to know where the cyclist reached the maximum value of velocity, where the strongest braking occurred, or how sharply the motion changed within a specific bend, then average quantities would be too coarse. In that case we would need la relacion correspondiente, la relacion correspondiente, and possibly la relacion correspondiente if \( x(t) \) were known. This is one of the central ideas of the leaf: an average quantity is not a silent substitute for an instantaneous one.

{{f:velocidad_instantanea}}

{{f:aceleracion_instantanea}}

{{f:aceleracion_como_segunda_derivada}}


## Symbolic solution

We first use the core relation [[rapidez_media]] :

{{f:rapidez_media}}

We then use the core relation [[velocidad_media]] :

{{f:velocidad_media}}

The [[cambio_velocidad]] is the difference between the final and initial [[velocidad]] .

And the core relation [[aceleracion_media]] is:

{{f:aceleracion_media}}

As a bridge to the rest of the leaf, the differential relations are:

{{f:velocidad_instantanea}}

{{f:aceleracion_instantanea}}

{{f:aceleracion_como_segunda_derivada}}

These three expressions are not required for the main average-value calculation, but they are part of the conceptual resolution of the problem because they show what would be needed if the full time law of position were available. The time derivative of position defines the instantaneous velocity ( [[velocidad]] ), the time derivative of velocity defines the instantaneous acceleration ( [[aceleracion]] ), and the second time derivative of position expresses the instantaneous acceleration as a second-order derivative. In that sense, the resolution makes an explicit distinction between average quantities, which are computed here, and instantaneous quantities, which complete the same kinematic framework.

They are not needed for the main numerical result, but they clarify what information is missing when only global averages are available.

## Numerical substitution

Applying [[rapidez_media]] :

The [[rapidez_media]] gives: 12 000 m ÷ 2 400 s → 5.0 m/s.

Applying [[velocidad_media]] :

The [[velocidad_media]] gives: 9 600 m ÷ 2 400 s → 4.0 m/s.

The [[cambio_velocidad]] : 5.0 − 0 = 5.0 m/s.

Applying [[aceleracion_media]] :

The [[aceleracion_media]] gives: 5.0 m/s ÷ 2 400 s ≈ 2.1 × 10⁻³ m/s².

The ratio [[distancia]] / [[desplazamiento]] : 12 000 ÷ 9 600 = 1.25.

This means that the actual route length is 25% larger than the straight-line net position change.

## Dimensional validation

The relation [[rapidez_media]] is dimensionally consistent: [[distancia]] (m) ÷ [[tiempo]] (s) = m/s.

The relation [[velocidad_media]] is also dimensionally consistent: [[distancia]] (m) ÷ [[tiempo]] (s) = m/s.

And [[aceleracion_media]] gives the proper dimension: [[velocidad]] (m/s) ÷ [[tiempo]] (s) = m/s².

Therefore, the results are not only numerically plausible but also physically consistent with the dimensions of the defined magnitudes.

## Physical interpretation

The first important reading is geometrical. Average speed is \( 5.0\;\text{m/s} \), while average velocity is \( 4.0\;\text{m/s} \). The difference is not a mere algebraic accident. It is a physical consequence of the fact that the cyclist did not move along an ideal straight segment between A and B. More path was covered than the net position change would suggest, and that is why the quantity based on [[distancia]] is larger than the one based on [[desplazamiento]] .

The second reading is kinematic. The change in velocity is positive, so the final motion state differs from the initial one. The cyclist starts from rest and ends with a nonzero velocity. Yet the computed [[aceleracion_media]] is very small. That does not mean the cyclist “barely accelerated”; it means that the total velocity change is spread across a long interval of 40 minutes. The average smooths out the actual temporal history.

The third reading links directly back to the theory of the leaf. During the real ride there may have been short intervals with large instantaneous acceleration during start-up, intervals with nearly zero acceleration during steady pedalling, and intervals with negative acceleration during braking or uphill segments. None of that richness survives in a single mean value. If the same \( \Delta v \) occurred over a shorter \( \Delta t \), [[aceleracion_media]] would be larger. If the route were even more winding while keeping the same origin, destination, and duration, [[rapidez_media]] would increase while [[velocidad_media]] might remain unchanged. Each quantity answers a different physical question, and that is exactly the conceptual backbone of this leaf.

---

# Real-world example

## Context

A bicycle computer estimates motion by counting wheel rotations or magnetic sensor pulses. From those measurements it reconstructs total distance and uses total elapsed time to compute [[rapidez_media]] . Suppose the display at the end of a ride shows: distance \( 45\;\text{km} \), time \( 1\;\text{h}\;52\;\text{min} \), and average speed \( 24.1\;\text{km/h} \).

## Physical estimation

Converting units: 45 km → 45 000 m; 1 h 52 min → 6 720 s.

Using [[rapidez_media]] : 45 000 m ÷ 6 720 s ≈ 6.70 m/s.

Converting to kilometres per hour: 6.70 m/s × 3.6 ≈ 24.1 km/h.

The numerical estimate agrees with the instrument. However, if the route was circular and ended at the starting point, then the net displacement would be approximately zero and [[velocidad_media]] would also be approximately zero, even though [[rapidez_media]] remains clearly positive and operationally meaningful.

## Interpretation

This case shows why an everyday instrument may report the correct quantity for one purpose and the wrong one for another. The bicycle computer reports [[rapidez_media]] because that is the quantity that summarizes effort and performance over the actual route. But if the physical question were the net change of position between origin and destination, then [[velocidad_media]] would be the relevant quantity instead. And if the goal were to identify the hardest acceleration phase or the strongest braking event, then one would need la relacion correspondiente and la relacion correspondiente.

{{f:velocidad_instantanea}}

{{f:aceleracion_instantanea}}


The practical lesson is simple but deep: it is not enough to divide a length by a time. One must first decide which length belongs in the numerator, which aspect of motion is being summarized, and what information is inevitably lost by averaging. That is the real operational skill developed by this leaf.
