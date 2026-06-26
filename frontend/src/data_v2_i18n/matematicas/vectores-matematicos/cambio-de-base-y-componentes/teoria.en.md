# Change of basis and components

## What it is

Changing basis means describing the same vector using different axes. The physical vector does not change; its numerical components change because the measuring directions have been oriented differently.

## Why it appears in physics

It appears in inclined planes, rotation, moving frames, and systems with symmetry. Choosing axes parallel and perpendicular to a surface can turn a difficult problem into two clear equations.

## Visual or geometric idea

The visual image is rotating the grid under a fixed arrow. The arrow still points to the same place, but its shadows on the new axes are different. A good basis aligns axes with physically important directions.

![Change of basis: same vector, different components](/graphs/matematicas/vectores-matematicos/bases-cambio.svg)

## Minimal symbolic language

If the basis is rotated by an angle `theta`, components combine through sines and cosines. In matrix form, `v_new = R v_old`. The matrix depends on rotation convention and axis order.

## What the result means

The result says how much of the same vector lies along each new axis. On a ramp, weight may have parallel and normal components; these are not new forces, but the same weight read in useful axes.

## When not to use it

Do not change components and believe the vector changed. Do not mix old and new components in the same sum. Always declare the basis before operating.

## Operational summary

Choose axes, project the vector, apply the transformation, and check magnitude and sense. Basic level: shadows on axes. Intermediate: axis rotation. Advanced: matrices, nonorthogonal bases, and moving frames.
