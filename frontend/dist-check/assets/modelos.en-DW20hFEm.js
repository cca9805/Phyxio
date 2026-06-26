const e=`## Ideal model\r
\r
The ideal model is a rigid wheel rolling without slipping on a fixed surface. The center of mass advances with [[v_cm]], the body spins with [[omega]], and the radius [[R]] connects both readings through the rolling condition. The contact point is instantaneously at rest relative to the ground.\r
\r
## Hypotheses\r
\r
The body keeps its shape, the effective radius does not change, and the rotation axis is stable. The surface is fixed, there is no slipping, and the angular quantities [[theta]], [[omega]], and [[alpha]] use a fixed sign convention. If accelerations are used, [[a_cm]] and [[alpha]] are also coupled through radius.\r
\r
## Quantitative validity domain\r
\r
Explicit quantitative range: the model is reasonable when 0.01 m <= [[R]] <= 1.0 m, 0 <= [[omega]] <= 100 rad/s, speeds are nonrelativistic, and contact deformation is small compared with radius. For [[R]] of 0.30 m and [[omega]] of 10 rad/s, a [[v_cm]] of about 3 m/s is plausible. A large mismatch between measured advance and spin indicates slipping.\r
\r
## Model failure signals\r
\r
The model fails if there is a sliding mark, skidding, spin without advance, advance with locked wheel, variable effective radius, or intermittent contact. It also fails if the graph shows that the contact point cannot be read as instantaneously at rest.\r
\r
## Extended or alternative model\r
\r
Switch to an alternative model when slipping, deformation, soft tires, moving ground, or loss of contact appears. The model must change if [[v_cm]] and [[omega]] no longer match through [[R]]. The extended model treats translation and rotation as partly independent variables and includes kinetic friction or losses.\r
\r
## Operational comparison\r
\r
| Situation | Useful model | Key quantities |\r
|---|---|---|\r
| Wheel on dry ground | Ideal rolling | [[v_cm]], [[omega]], [[R]] |\r
| Locked wheel | Translation with sliding | [[v_cm]], friction |\r
| Wheel spinning in place | Rotation with sliding | [[omega]], [[theta]] |\r
| Deformable contact | Extended model | effective radius, losses |\r
\r
The comparison shows why this leaf is a bridge. Linear kinematics and angular kinematics are not enough separately; rolling requires deciding whether contact truly joins them.\r
\r
The ideal model is the entry point for later models with [[m]], [[I]], [[tau]], [[K_total]], and [[E_total]]. If the kinematic bridge is not justified, energy splitting and rolling dynamics cannot be used with confidence. That is why the validity criterion is stated before any force calculation.\r
\r
In real problems, this decision is documented before numerical calculation. State which quantity is measured, which quantity is inferred, and which observation would invalidate the inference. In that way the ideal model is not confused with a universal description.\r
\r
This protects the model from being applied by habit.`;export{e as default};
