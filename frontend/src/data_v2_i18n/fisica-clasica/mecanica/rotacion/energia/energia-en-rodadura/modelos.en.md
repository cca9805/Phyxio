# Models for energy in rolling

## Ideal model

The ideal model treats the body as rigid and rolling without slipping on a fixed surface. The center of mass advances with [[v_cm]], the body spins with [[omega]], and both quantities are connected by [[R]]. Total kinetic energy [[K_total]] is computed by adding translation and rotation. The contact does not dissipate energy because the instantaneous contact point has no relative motion.

## Hypotheses

The hypotheses are rigidity, constant effective radius, defined central axis, and no slipping at the contact. The moment of inertia [[I]] is assumed constant, and mass [[m]] remains distributed in a stable way. If [[a_cm]] is used together with [[alpha]], the same pure-rolling kinematic condition is being accepted.

## Quantitative validity domain

The model is reliable if deformation changes [[R]] by less than `2%`, thermal loss is below `5%` of [[K_total]], and the contact can provide the required torque without exceeding the adhesion limit. On an incline, angle [[phi]] must be compatible with enough static friction; otherwise slipping appears.

## Model failure signals

Observable failure appears when the contact mark skids, when [[v_cm]] does not match [[R]] times [[omega]], when the object vibrates, or when mechanical energy [[E_total]] decreases without a declared loss term. The model also fails if [[I]] belongs to the wrong axis or if the effective radius changes because the material deforms.

## Extended or alternative model

When to switch to an alternative model: if there is skidding, relevant deformation, dissipative bearings, or contact with variable effective radius. The extended model adds thermal energy, frictional work, elastic deformation, or an adhesion law. In full dynamics, [[tau]], [[theta]], [[g]], and [[phi]] may also appear to describe work and motion on inclines.

## Operational comparison

Use the ideal model for rigid wheels, cylinders, and spheres rolling without slipping. Use a dissipative model when skidding or lossy braking occurs. Use a deformable model for tires, soft balls, or elastic surfaces. Use [[E_total]] when gravitational potential is present; use [[K_total]] when only instantaneous kinetic energy is required.

The practical comparison is made by asking which datum remains unexplained. If the question only asks for kinetic split, [[K_total]] is enough. If it asks about descent from a height, [[E_total]] must appear. If it asks about forces or accelerations, [[a_cm]], [[alpha]], and contact torque should be connected. This separation prevents an energy calculation from replacing a full dynamic analysis.

For quick validation, compare the model prediction with one observable: wheel spin, center speed, or final height. Agreement with only one number is not enough if the contact condition is untested.