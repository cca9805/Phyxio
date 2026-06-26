# Physical Models: Torque of a Force

## Ideal model

The ideal model considers one force [[F]] applied to a rigid planar body about a fixed axis. The geometry is described by the radial distance [[r]], the angle [[theta]], and the perpendicular arm [[d_perp]]. The result [[tau]] measures the tendency of that isolated force to produce rotation.

This model does not decide equilibrium. It only quantifies one rotational contribution. To analyze equilibrium, several torques must be summed in another leaf.

## Hypotheses

- The body is approximated as rigid.
- The rotation axis is defined before calculation.
- The force is applied at a known point.
- The force and radius lie in one plane.
- [[r]] and [[d_perp]] are non-negative distances.
- [[theta]] is measured between force and radius.

## Quantitative validity domain

The model works well when body deformation is small compared with the distance to the axis, for example less than 1 percent of [[r]]. In introductory problems, [[theta]] must lie between 0 and pi rad, [[F]] must be non-negative, and [[d_perp]] cannot exceed [[r]].

A useful numerical check is that if [[theta]] = 90°, [[d_perp]] must match [[r]]. If [[theta]] = 0 or pi, [[d_perp]] must be zero and [[tau]] must also be zero. If [[F]] = 20 N and [[d_perp]] = 0.30 m, the expected torque is on the scale of 6 N m. A result in N or m indicates dimensional failure.

## Model failure signals

The model fails if the full length of a bar is used as the arm even though the force is oblique. It also fails if the axis changes during the calculation or if [[theta]] is measured relative to the horizontal instead of relative to the radius. Another clear warning appears when [[d_perp]] is larger than [[r]], which is impossible in the planar geometry of the leaf.

If a force passes through the axis and still gives nonzero [[tau]], the effective arm has been misread. If a perpendicular force does not produce maximum torque for fixed [[F]] and [[r]], there is an angle or sine error.

## Extended or alternative model

When it is better to change model: if several forces act at the same time and equilibrium must be decided, it is better to change to an alternative model of torque summation. If the body rotates with angular acceleration, change to an alternative model of rotational dynamics with moment of inertia. If the force or axis is not planar, use a three-dimensional vector model.

It is also better to change model if the body deforms appreciably. In that case, the line of action and effective arm may vary with deformation, and the rigid-body model no longer represents the situation.

## Operational comparison

| Situation | Suitable model | Criterion |
|---|---|---|
| One force and one fixed axis | Torque of a force | Compute [[tau]] |
| Perpendicular arm known | Direct definition | Use [[F]] and [[d_perp]] |
| Oblique force | Trigonometric geometry | Use [[r]] and [[theta]] |
| Several forces | Torque summation | Add contributions |
| Accelerated rotation | Rotational dynamics | Include angular inertia |

The practical rule is to locate the axis and the line of action first. Without those two elements, torque is not physically defined.
