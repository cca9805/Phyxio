const e=`\uFEFF# Vector concept

## What it is

A vector is a quantity that needs magnitude, direction, and sense to be described. In physics it is not enough to know how large a force or velocity is: where it acts and which reference is used also matter. A vector separates amount, orientation, and physical effect.

## Why it appears in physics

It appears in forces, displacements, velocities, accelerations, and fields. Two forces with equal magnitude may produce opposite effects if their senses are opposite. Two velocities with equal speed may lead to different positions if they point in different directions.

## Visual or geometric idea

The basic image is an arrow. Length represents magnitude, the line indicates direction, and the arrowhead indicates sense. The point where it is drawn may matter in torque or equilibrium, although in translation the arrow can often be shifted without changing it.

![Vector with components, magnitude, direction, and sense](/graphs/matematicas/vectores-matematicos/vector-componentes.svg)

## Minimal symbolic language

A vector may be written as \`vec A\`, as components \`(A_x, A_y)\`, or as magnitude and angle \`(A, theta)\`. Its magnitude is calculated with \`sqrt(A_x^2 + A_y^2)\` and its components depend on the chosen axes.

## What the result means

A vector result indicates an oriented action. If an acceleration points downward, it does not only have positive magnitude: it changes velocity in that sense. The sign of each component translates orientation relative to axes.

## When not to use it

Do not use a vector as if it were a number without direction. Do not confuse magnitude with component: a component may be negative even though magnitude is always nonnegative. If axes change, components change, not the physical vector.

## Operational summary

First identify quantity, magnitude, direction, sense, and reference. Then decide whether you need components, magnitude, angle, or point of application. Basic level: read arrows. Intermediate level: move to components. Advanced level: separate physical vector from representation.
`;export{e as default};
