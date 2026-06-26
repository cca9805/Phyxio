# Physical models: Complete Analysis of Frictional Systems

## Ideal model

This leaf works with Coulomb's dry friction model on a rigid, immovable horizontal surface. The central simplifications are: the block is treated as a rigid point body, the surface does not deform, the coefficients [[mu_e]] and [[mu_c]] are constants independent of velocity and contact area, and the normal force [[N]] is strictly vertical.

This model captures the essence of the regime decision: compare the applied force with the static threshold, decide whether there is sliding and, if so, calculate the acceleration using the kinetic coefficient. Under school laboratory conditions (wooden or metal blocks on dry tables) the model reproduces experimental results with errors below 10 %.

## Hypotheses

- **Horizontal and non-deformable surface**: the contact remains flat and [[N]] equals the weight. Violating it (for instance on an inclined plane) requires decomposing the weight into components.
- **Constant coefficients**: [[mu_e]] and [[mu_c]] do not depend on velocity, temperature or apparent contact area. Violating it causes friction to vary during sliding and the simple algebraic model no longer suffices.
- **Purely horizontal push**: there is no vertical component in [[F_ext]]. Violating it changes [[N]] and, with it, all friction thresholds.
- **Rigid body without rotation**: the block neither rotates nor deforms. Violating it introduces torques and possible toppling before sliding.

## Quantitative validity domain

The model is reliable when the following conditions are met simultaneously:

- The sliding velocity is less than 10 m/s, a range in which the dependence of [[mu_c]] on [[v]] is negligible for most dry material pairs.
- The block mass lies between 0.1 kg and 100 kg, an interval where deformation of the support surface is insignificant for laboratory tables.
- The normal force [[N]] is of the order of magnitude of 1 N to 1000 N; outside that range (very light or very heavy loads) the micro-contacts change in nature.
- The acceptable relative error is above 5 %, since under real conditions the coefficients exhibit variability of that order.

## Model failure signals

- The measured acceleration differs from the calculated one by more than 15 % systematically, not randomly.
- The block oscillates or vibrates when starting, indicating that the static-kinetic transition is not a simple discontinuity but a dynamic stick-slip process.
- The surface heats up perceptibly, altering [[mu_c]] during the same experiment.
- The block rotates or topples instead of sliding, a sign that the net force torque exceeds the stabilising torque of the weight.

## Extended or alternative model

The extended model incorporates the dependence of [[mu_c]] on velocity (Stribeck law), which predicts a drop in the coefficient at very low speeds followed by a rise at high speeds due to viscous effects from lubricant or the air layer. It can also include a variable normal component if the push is tilted.

When to switch to the extended model: if the experiment shows stick-slip oscillations, if the surface is lubricated, or if the sliding velocity exceeds 10 m/s. In those cases, the algebraic model of this leaf is replaced by ordinary differential equations that describe the time evolution of friction.

## Operational comparison

| Aspect | Simple horizontal model | Stribeck model |
|--------|-------------------------|----------------|
| Typical precision | 90–95 % in a dry laboratory | above 98 % with calibration |
| Mathematical tool | Algebra and threshold comparison | Ordinary differential equations |
| Resolution time | Minutes (pen and paper) | Requires numerical simulation |
| When to use it | Education, preliminary design | Tribological research, precision engineering |
| Required parameters | Two constant coefficients | Full friction-versus-velocity curve |
