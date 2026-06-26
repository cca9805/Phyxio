const e=`\uFEFF# Dot product

## What it is

The dot product combines two vectors and returns a number. It measures how much one vector is aligned with another. If they point in the same direction it is positive, if perpendicular it is zero, and if opposed it is negative.

## Why it appears in physics

It appears in mechanical work, projections, power, flux, and angles between directions. It answers how much of a force acts along a displacement or which component of a field crosses a surface.

## Visual or geometric idea

The visual image is a shadow. Project one vector onto the direction of the other and multiply by the relevant magnitude. Only the aligned part contributes; the perpendicular part contributes nothing to the dot product.

![Projection for dot product and comparison with cross product](/graphs/matematicas/vectores-matematicos/producto-escalar-vectorial.svg)

## Minimal symbolic language

It is written \`vec A dot vec B = A B cos(theta)\` or, by components, \`A_x B_x + A_y B_y + A_z B_z\`. The result is not a vector: it is a scalar with unit equal to the product of the two vector units.

## What the result means

The result means weighted alignment. In work, \`W = vec F dot vec d\` measures energy transferred by the part of force parallel to displacement. If it is negative, the force opposes motion.

## When not to use it

Do not use the dot product when you need a perpendicular direction or rotation. Do not forget the angle between vectors: using only magnitudes assumes perfect alignment.

## Operational summary

Identify the two vectors, measure angle or components, calculate, and read sign and unit. Basic level: perpendicular gives zero. Intermediate: projections and work. Advanced: alignment criteria in fields and vector spaces.
`;export{e as default};
