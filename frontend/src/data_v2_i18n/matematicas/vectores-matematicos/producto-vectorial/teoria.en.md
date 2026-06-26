# Cross product

## What it is

The cross product combines two vectors and returns another vector perpendicular to both. Its magnitude measures the area of the parallelogram formed by the vectors and its direction is fixed by the right-hand rule.

## Why it appears in physics

It appears in torque, angular momentum, magnetic force, and oriented areas. In all these cases not only how much rotation matters, but around which axis and with what sense of rotation.

## Visual or geometric idea

The visual image is a rotating door or an oriented parallelogram. If the force pushes far from the axis and perpendicular to the lever arm, it produces more torque. If it pushes aligned with the arm, it produces no rotation.

![Dot product and cross product with perpendicular direction](/graphs/matematicas/vectores-matematicos/producto-escalar-vectorial.svg)

## Minimal symbolic language

It is written `vec A cross vec B` and its magnitude is `A B sin(theta)`. By components it is computed with a formal determinant. The direction is perpendicular to the plane of `A` and `B`, not arbitrary.

## What the result means

The result means oriented perpendicularity. In `vec tau = vec r cross vec F`, the torque vector indicates rotation axis and sense. The sign depends on orientation convention and the right-hand rule.

## When not to use it

Do not use the cross product to measure alignment; that is the dot product. Do not forget that order matters: `A cross B = - B cross A`.

## Operational summary

Identify plane, angle, magnitude, and sense with the right hand. Basic level: perpendicularity. Intermediate: torque and area. Advanced: orientation, bases, and cross products in fields.
