# Physical Models of Rolling

## Ideal model
The ideal model of rolling without slipping is based on the assumption that there is a single geometric contact point between the rigid body and the surface. In this model, the body is perfectly non-deformable and the surface is perfectly rigid. It is assumed that the coupling between translation and rotation is instantaneous and absolute, allowing the use of the kinematic condition

{{f:vinculo-rodadura-acel}}

. This simplifies the equations of motion significantly by reducing the number of independent variables from two to one.

## Hypotheses
1.  **Non-deformable Body**: The radius [[R]] remains perfectly constant, with no elastic deformations in the contact area. This is an idealization, as all real materials deform under load.
2.  **Point Contact**: We ignore the finite contact surface (contact patch) and material hysteresis effects. In reality, the "point" is a small area that generates rolling resistance.
3.  **Sufficient Static Friction**: It is assumed that the environment provides the necessary force to maintain the link without relative sliding.

## Quantitative validity domain
This model is valid as long as the physical inequality **[[fs]] <= [[mu_s]] * N** is met. Specifically, **[[mu_s]] > 0.15** is required for most practical cases on moderate slopes (less than 30 degrees). For steeper slopes, the required value of static friction [[fs]] increases non-linearly. The order of magnitude of the static friction force [[fs]] is typically **10^-1** to **10^1** Newtons in laboratory experiments with masses of around 1 kg. If the inclination angle exceeds 45 degrees, the model usually collapses on almost any natural surface due to the Coulomb limit.

## Model failure signals
*   The measured acceleration [[a]] is greater than the theoretical calculation (

{{f:ley-traslacion-rodadura}}

).
*   A time lag is observed between the start of translational motion and the start of rotation.
*   Presence of squealing noises or wear marks at the contact point.

## Extended or alternative model
When grip fails, we move to the **rolling with slipping model**, where friction becomes kinetic (

{{f:vinculo-rodadura-acel}}

) and linear [[a]] and angular [[alpha]] accelerations decouple. In this case, mechanical energy is no longer conserved and is dissipated as heat.

## Operational comparison
The ideal model is computationally efficient but physically restrictive. While the ideal model assumes perfect conservation, the real model considers rolling resistance caused by material deformation. Operationally, the ideal model is preferable for quick initial design calculations, while the model with slipping is vital for safety simulations and emergency braking.

## Model transition
The **transition** between models occurs exactly when the applied torque requires a friction that exceeds the static limit. It is convenient to change models when seeking to analyze critical situations where traction is insufficient. This change is fundamental to understanding transportation safety and the behavior of vehicles in rain or ice conditions.