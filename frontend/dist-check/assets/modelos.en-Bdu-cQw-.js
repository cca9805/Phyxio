const e=`# Physical Models: Net Torque Balance Condition

## Ideal model

The ideal model treats the body as a rigid planar object acted on by external forces that produce torques about a fixed axis. Each contribution is described by a force, an arm, and an angle: [[F1]], [[r1]], [[theta1]] for the first, and [[F2]], [[r2]], [[theta2]] for the second. The central result is [[tau_net]], not an isolated torque.

The rotational equilibrium condition is interpreted as algebraic cancellation. [[tau1]] and [[tau2]] may have equal magnitudes and opposite signs. If a residual torque remains, the system still tends to rotate.

## Hypotheses

- The body is treated as rigid during the analysis.
- All forces lie in the same plane.
- Torques are computed about the same axis.
- The sign convention is fixed before summing.
- The arms [[r1]] and [[r2]] are measured from the pivot.
- The angles [[theta1]] and [[theta2]] are measured relative to the corresponding radius.

## Quantitative validity domain

The model is appropriate when body deformation is negligible compared with lever-arm distances, for example less than 1 percent of [[r1]] or [[r2]]. In laboratory setups, rotational equilibrium may be considered satisfied if the absolute value of [[tau_net]] is below experimental uncertainty, for example less than 0.05 N m when torques are several N m.

There are also minimal geometric conditions. To compute [[Feq]], [[r2]] must be greater than zero and the sine of [[theta2]] must not be close to zero. If [[theta2]] is nearly 0 or nearly pi, force 2 has no effective arm and the required balancing force becomes physically impractical. If [[r1]] doubles while [[F1]] and [[theta1]] stay fixed, [[tau1]] should double.

## Model failure signals

A failure signal appears when torques computed from different pivots are summed. Another appears if [[tau_net]] is given in N or [[Feq]] in N m. The model also fails if equilibrium is claimed even though [[tau_net]] is not close to zero.

Another practical warning sign is setting [[F1]] equal to [[F2]] without checking arms and angles. If [[r2]] is three times [[r1]], equal forces usually do not represent balance; the longer arm produces larger torque. Sign also exposes errors: two opposite torques with equal magnitude must cancel, not add.

## Extended or alternative model

When it is better to change model: when the body cannot be considered rigid, when forces are not planar, or when the axis changes during motion. When it is better to change to an alternative model, use a rotational dynamics model with moment of inertia and angular acceleration, or a three-dimensional vector torque model.

It is also better to change model if a distributed load is present. Before using this condition, the load must be replaced by a justified resultant and its point of application. If that replacement is not valid, the two-main-torque model does not represent the real system.

## Operational comparison

| Situation | Suitable model | Criterion |
|---|---|---|
| Two forces on a rigid beam | Torque sum | Use [[tau1]], [[tau2]], and [[tau_net]] |
| Required balancing force | Design with [[Feq]] | Check [[r2]] and [[theta2]] |
| Simple distributed load | Equivalent resultant | Justify point of application |
| Deformable body | Structural model | Include deformation |
| Accelerated rotation | Rotational dynamics | Use moment of inertia |

The practical rule is not to sum before axis, signs, and arms are defined. If any of them changes, the computed balance belongs to another model.
`;export{e as default};
