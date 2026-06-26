const e=`# Models of Standing-Wave Condition

## Ideal model

The ideal model considers a one-dimensional cavity with equivalent boundaries, such as a string fixed at both ends. The standing wave is interpreted as the superposition of two compatible traveling waves reflected at the ends. The length [[L]] fixes the available region, [[n]] selects the integer mode, [[lambda]] must fit the geometry, and [[f_n]] is determined once the medium speed [[v]] is introduced.

The model is ideal because it assumes perfectly defined boundaries, uniform speed, and negligible losses. Its didactic value is to separate the spatial condition from the temporal response: first the mode must fit; then one calculates at what frequency it vibrates.

## Hypotheses

The boundaries are assumed to impose nodes or equivalent stable conditions. The medium is uniform, oscillations are small, reflection is coherent, and strong damping is absent. The number [[n]] is treated as a positive integer. The speed [[v]] is considered constant for the analyzed modes.

On a fixed string, this means immobile ends, uniform tension, and amplitudes small enough that wave speed does not change with deformation. If the system has soft ends, coupled masses, or important losses, an extended model is needed.

## Quantitative validity domain

An operational criterion is that [[L]] should be much larger than the support scale or boundary-coupling scale. For introductory exercises, low modes such as [[n]] from 1 to 5 are preferable, because high modes are more sensitive to stiffness, dispersion, and losses. The relative variation of [[v]] inside the cavity should also remain below 5 %.

The condition is coherent if the computed [[lambda]] is positive and if [[n]] is integer. A value such as 2.4 is not an allowed mode of the ideal model. If [[f_n]] lies in an impossible order for the medium, [[v]], [[L]], or units must be reviewed.

## Model failure signals

A failure signal is that boundaries are not clear nodes or antinodes. Another is that the cavity length changes during oscillation. The model also fails if damping is so strong that nodes are not maintained, or if the medium is dispersive and each frequency has a different speed.

In real instruments, ends are not always ideal. Tubes have end corrections, real strings have stiffness, and membranes have two modal indices. These effects do not deny standing behavior, but they change the concrete condition.

## Extended or alternative model

When to switch model depends on the boundary. An open-closed tube admits odd families, a membrane requires two mode numbers, and a three-dimensional cavity requires three. If there are losses, a quality factor is added. If speed depends on frequency, a dispersive model is used.

The correct transition keeps the central idea: only certain modes satisfy boundary, phase, and medium at the same time. What changes is the geometry replacing the ideal string of length [[L]].

## Operational comparison

To decide whether the ideal model works, ask whether there are two clear boundaries, whether the mode is one-dimensional, and whether [[n]] can be read as an integer. If so, the condition with [[L]] and [[lambda]] is sufficient. If there is an open end, a membrane, or a complex cavity, the same idea remains, but the formula must change.
`;export{e as default};
