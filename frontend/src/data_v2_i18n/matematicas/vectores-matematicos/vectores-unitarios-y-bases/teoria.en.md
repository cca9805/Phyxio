# Unit vectors and bases

## What it is

A unit vector is an arrow of magnitude one that indicates direction only. A basis is a set of independent directions that lets any vector be written through components. In physics, the basis turns geometry into controlled calculation.

## Why it appears in physics

It appears when writing forces with `i`, `j`, `k`, when using radial and tangential directions in rotation, or when describing flow with normal and tangent. Choosing the basis well simplifies equations and reduces sign errors.

## Visual or geometric idea

The visual idea is building an oriented ruler for each important direction. Cartesian bases use fixed axes; in polar form, a radial direction changes with position and a tangential direction rotates around the center.

![Same vector expressed in two bases](/graphs/matematicas/vectores-matematicos/bases-cambio.svg)

## Minimal symbolic language

A vector is written as `vec A = A_x i + A_y j` in 2D or `A_x i + A_y j + A_z k` in 3D. In another basis it could be `A_r e_r + A_theta e_theta`. Unit vectors do not carry physical units; units live in components.

## What the result means

The result indicates how much of the vector lies along each basis direction. A zero component does not eliminate the vector: it only says there is no part along that direction. Changing basis changes components, not the original directed magnitude.

## When not to use it

Do not treat unit vectors as physical magnitudes. Do not assume every unit vector is constant: in polar coordinates, `e_r` and `e_theta` change with angle. When differentiated, they can add extra terms.

## Operational summary

Choose basis, declare unit vectors, project components, and keep units in the components. Basic level: `i`, `j`. Intermediate: adapted bases. Advanced: variable unit vectors and curvilinear coordinates.
