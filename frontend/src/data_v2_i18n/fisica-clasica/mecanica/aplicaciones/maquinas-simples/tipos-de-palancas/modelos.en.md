# Physical Models: Types of Levers

## Ideal model

The ideal model treats each lever as a rigid body rotating about a fixed fulcrum. The effort [[P]] and the load [[R]] act with perpendicular arms [[d_P]] and [[d_R]]. The label [[clase_palanca]] is determined by the spatial order of fulcrum, effort, and load.

Ideal equilibrium is used to quantify forces and arms, while [[VM]] helps read the geometric effect. Classification is not obtained from [[VM]], but from the relative position of the three elements.

## Hypotheses

- The bar or tool is approximated as rigid.
- The fulcrum is fixed during analysis.
- Forces are represented by defined lines of action.
- Arms are measured from the fulcrum.
- Friction losses are ignored.
- Class is decided before mechanical advantage is interpreted.

## Quantitative validity domain

The model is reasonable when deformation is less than 1 percent of the useful lever length and fulcrum friction is small compared with the main torques. To apply the ratio [[VM]], the load arm [[d_R]] must be positive. In the ideal model, if [[d_P]] = 3 [[d_R]], the ideal advantage is approximately 3.

A minimal check is that [[P]] times [[d_P]] and [[R]] times [[d_R]] have the same unit, N m. Also, [[clase_palanca]] can only take the three valid configurations: fulcrum in the middle, load in the middle, or effort in the middle. If a “class” is obtained from [[VM]] being greater than 1, the wrong criterion is being used.

## Model failure signals

The model fails if the lever is classified by force size or by [[VM]] instead of spatial order. It also fails if [[d_P]] or [[d_R]] is measured from an end of the bar rather than from the fulcrum. Another warning sign is applying the ideal model to a very flexible tool without considering deformation.

A common failure is calling any force-advantage lever “second class.” A first-class lever can also provide force advantage if the fulcrum is closer to the load.

## Extended or alternative model

When it is better to change model: if losses, deformation, or accelerated motion must be studied, change to an alternative model with friction, elasticity, or rotational dynamics. If the main goal is real efficiency, use a real mechanical-advantage model. If several torques are summed without classifying configurations, move to the torque-sum model.

It is also better to change model if the forces are not approximately perpendicular and effective arms must be computed from line-of-action geometry.

## Operational comparison

| Situation | Suitable model | Criterion |
|---|---|---|
| Identify a tool | Types of levers | Use [[clase_palanca]] |
| Compute ideal force | Lever equilibrium | Use [[P]], [[R]], [[d_P]], [[d_R]] |
| Read geometric help | Ideal advantage | Use [[VM]] |
| Measure losses | Real model | Include friction |
| Accelerated rotation | Rotational dynamics | Include inertia |

The practical rule is classify first and calculate afterward. If calculation comes first, a useful ratio is easily confused with mechanism identity.
