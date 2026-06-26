## Ideal model

The ideal model treats the wheel, sphere, or cylinder as a rigid body rolling without slipping. The strategy is to choose the equation family that answers the question: geometric constraint, dynamics with [[tau]], energy with [[K_total]] and [[E_total]], or a controlled combination. The contact point is instantaneously at rest relative to the ground, so [[v_cm]] and [[omega]] are linked through [[R]].

## Hypotheses

The mass [[m]] has a fixed distribution, so [[I]] does not change during the motion. Gravity [[g]] is uniform, the incline angle [[phi]] is constant, and the rotation axis is well defined. If [[a_cm]] is used together with [[alpha]], the rolling constraint is explicitly declared. Static friction can produce torque without dissipating net mechanical energy.

## Quantitative validity domain

The model is reasonable for rigid laboratory bodies, with 0.01 m <= [[R]] <= 1.0 m, 0 <= [[phi]] <= 35 degrees, nonrelativistic speeds, and small deformation. On an incline, the rolling-acceleration relation requires enough available static friction to impose the rolling constraint. The total-kinetic-energy relation is used when the split between translation and rotation matters; the total-mechanical-energy relation is used only when losses are not dominant.

## Model failure signals

The model fails if the wheel slips, if the contact bounces, if the axis moves in an uncontrolled way, or if deformation absorbs energy. It also fails if the calculation demands more static friction than the surface can provide. An observable signal is a sliding mark at the contact; another is a measured angular speed that does not match the center-of-mass speed through the radius.

## Extended or alternative model

Switch to an alternative model when slipping, rolling resistance, tire deformation, air drag, or applied external torque appears. The extended model may include kinetic friction, dissipated power, variable effective radius, or coupled differential equations. The transition is justified by a physical signal, not by algebraic preference.

## Operational comparison

| Question | Best starting model | Control quantities |
|---|---|---|
| Relate advance and spin | Rolling kinematics | [[v_cm]], [[omega]], [[R]] |
| Find acceleration on an incline | Dynamics and torque | [[a_cm]], [[alpha]], [[tau]], [[I]] |
| Find final speed | Energy | [[K_total]], [[E_total]], [[m]], [[g]] |
| Validate contact | FBD and friction | [[phi]], normal force, static friction |

The comparison prevents mechanical formula use. If the problem asks for a force, energy alone is not enough. If it asks for speed and there are no losses, full dynamics may be unnecessary. If it asks whether rolling is valid, the geometric constraint must be checked against contact.

This final comparison is the operational core of the model file. A clean solution states the chosen model, the quantity that controls the decision, and the observable sign that would force a model change.