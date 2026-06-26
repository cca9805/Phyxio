## Ideal model

The ideal model is a rigid wheel rolling without slipping on a fixed surface. The center of mass advances with [[v_cm]], the body spins with [[omega]], and the radius [[R]] connects both readings through the rolling condition. The contact point is instantaneously at rest relative to the ground.

## Hypotheses

The body keeps its shape, the effective radius does not change, and the rotation axis is stable. The surface is fixed, there is no slipping, and the angular quantities [[theta]], [[omega]], and [[alpha]] use a fixed sign convention. If accelerations are used, [[a_cm]] and [[alpha]] are also coupled through radius.

## Quantitative validity domain

Explicit quantitative range: the model is reasonable when 0.01 m <= [[R]] <= 1.0 m, 0 <= [[omega]] <= 100 rad/s, speeds are nonrelativistic, and contact deformation is small compared with radius. For [[R]] of 0.30 m and [[omega]] of 10 rad/s, a [[v_cm]] of about 3 m/s is plausible. A large mismatch between measured advance and spin indicates slipping.

## Model failure signals

The model fails if there is a sliding mark, skidding, spin without advance, advance with locked wheel, variable effective radius, or intermittent contact. It also fails if the graph shows that the contact point cannot be read as instantaneously at rest.

## Extended or alternative model

Switch to an alternative model when slipping, deformation, soft tires, moving ground, or loss of contact appears. The model must change if [[v_cm]] and [[omega]] no longer match through [[R]]. The extended model treats translation and rotation as partly independent variables and includes kinetic friction or losses.

## Operational comparison

| Situation | Useful model | Key quantities |
|---|---|---|
| Wheel on dry ground | Ideal rolling | [[v_cm]], [[omega]], [[R]] |
| Locked wheel | Translation with sliding | [[v_cm]], friction |
| Wheel spinning in place | Rotation with sliding | [[omega]], [[theta]] |
| Deformable contact | Extended model | effective radius, losses |

The comparison shows why this leaf is a bridge. Linear kinematics and angular kinematics are not enough separately; rolling requires deciding whether contact truly joins them.

The ideal model is the entry point for later models with [[m]], [[I]], [[tau]], [[K_total]], and [[E_total]]. If the kinematic bridge is not justified, energy splitting and rolling dynamics cannot be used with confidence. That is why the validity criterion is stated before any force calculation.

In real problems, this decision is documented before numerical calculation. State which quantity is measured, which quantity is inferred, and which observation would invalidate the inference. In that way the ideal model is not confused with a universal description.

This protects the model from being applied by habit.