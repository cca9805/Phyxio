const e=`# Physical Models

## Ideal model

The ideal model uses a straight conductor segment with steady [[I]] inside a uniform [[B]]. The relevant length is [[L]], not the total circuit length. The calculated force [[F_B]] represents the total magnitude on the exposed segment.

The central simplification is that current, field, and orientation remain constant over the segment. Thus the force can be treated as a uniformly distributed action, also summarized by [[f_L]].

## Hypotheses

- The conductor is straight; if it is curved, segments must be summed.
- The field is uniform; if it varies, [[F_B]] changes point by point.
- The current [[I]] is steady; if it changes rapidly, transient effects appear.
- The length [[L]] is fully inside the field; otherwise only the effective segment is used.
- Mechanical deformation is small; if the wire moves too much, geometry changes.

## Quantitative validity domain

The model is suitable in fields from 10^-3 T to several teslas and laboratory currents from 0.1 A to 20 A, provided the conductor does not heat appreciably. A practical condition is [[L]] > 1 cm so the effective segment has experimental meaning.

The error is often below 5 % when the field is nearly uniform and orientation uncertainty is small. In real machines, this condition is checked through mechanical and thermal calibration.

## Model failure signals

One failure signal is that measured force does not grow linearly with [[I]]. Another is that doubling exposed length does not change force in the expected proportion. This suggests nonuniform field, poor [[L]] measurement, or heating.

The model also fails if the conductor vibrates, bends, or changes position during the reading. Then orientation and [[s_theta]] are no longer constant.

Thermal drift is another visible warning. If the same supplied current no longer produces proportional motion, the conductor may be heating, changing resistance, or leaving the uniform-field region.

## Extended or alternative model

When to switch to the extended model: if the conductor is not straight, divide it into small segments and add the force of each segment. If the field varies, use the local value of [[B]] on each segment.

Transition to a loop model is useful when two or more sides of the circuit receive forces that produce rotation. Then the central question is no longer only total force, but mechanical torque.

## Operational comparison

| Criterion | Ideal model | Extended model |
|---|---|---|
| Geometry | One straight segment | Curved wire or loop |
| Field | Uniform | Position-dependent |
| Result | [[F_B]] and [[f_L]] | Sum of forces or torque |
| Use | Classroom and fast estimate | Real motor, speaker, or actuator |

Use the ideal model for quick prediction and sanity checks. Switch to the extended model when geometry, heating, or field variation becomes part of the observed behavior.
`;export{e as default};
