## Ideal model

The ideal model uses a straight conductor segment with steady [[intensidad_de_corriente]] inside a uniform [[campo_magnetico]]. The relevant length is [[longitud_efectiva]], not the total circuit length. The calculated force [[fuerza_magnetica_sobre_el_conductor]] represents the total magnitude on the exposed segment.

The central simplification is that current, field, and orientation remain constant over the segment. Thus the force can be treated as a uniformly distributed action, also summarized by [[fuerza_magnetica_por_unidad_de_longitud]].

## Hypotheses

- The conductor is straight; if it is curved, segments must be summed.
- The field is uniform; if it varies, [[fuerza_magnetica_sobre_el_conductor]] changes point by point.
- The current [[intensidad_de_corriente]] is steady; if it changes rapidly, transient effects appear.
- The length [[longitud_efectiva]] is fully inside the field; otherwise only the effective segment is used.
- Mechanical deformation is small; if the wire moves too much, geometry changes.

## Quantitative validity domain

The model is suitable in fields from 10^-3 T to several teslas and laboratory currents from 0.1 A to 20 A, provided the conductor does not heat appreciably. A practical condition is [[longitud_efectiva]] > 1 cm so the effective segment has experimental meaning.

The error is often below 5 % when the field is nearly uniform and orientation uncertainty is small. In real machines, this condition is checked through mechanical and thermal calibration.

## Model failure signals

One failure signal is that measured force does not grow linearly with [[intensidad_de_corriente]]. Another is that doubling exposed length does not change force in the expected proportion. This suggests nonuniform field, poor [[longitud_efectiva]] measurement, or heating.

The model also fails if the conductor vibrates, bends, or changes position during the reading. Then orientation and [[s_theta]] are no longer constant.

Thermal drift is another visible warning. If the same supplied current no longer produces proportional motion, the conductor may be heating, changing resistance, or leaving the uniform-field region.

## Extended or alternative model

When to switch to the extended model: if the conductor is not straight, divide it into small segments and add the force of each segment. If the field varies, use the local value of [[campo_magnetico]] on each segment.

Transition to a loop model is useful when two or more sides of the circuit receive forces that produce rotation. Then the central question is no longer only total force, but mechanical torque.

## Operational comparison

| Criterion | Ideal model | Extended model |
|---|---|---|
| Geometry | One straight segment | Curved wire or loop |
| Field | Uniform | Position-dependent |
| Result | [[fuerza_magnetica_sobre_el_conductor]] and [[fuerza_magnetica_por_unidad_de_longitud]] | Sum of forces or torque |
| Use | Classroom and fast estimate | Real motor, speaker, or actuator |

Use the ideal model for quick prediction and sanity checks. Switch to the extended model when geometry, heating, or field variation becomes part of the observed behavior.