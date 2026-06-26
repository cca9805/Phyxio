const e=`# Pulleys - Models and validity

## Ideal model

The ideal pulley model assumes an inextensible rope, negligible pulley mass compared to the load, and no axle friction. Under these conditions tension is uniform throughout the rope, and static equilibrium reduces to a linear relationship between effort [[P]], load [[W]], and the number of effective rope segments [[n]].

{{f:ley_polea_ideal}}

This model captures the geometric essence of pulleys: the system does not create energy; it trades force for travel distance. The ideal mechanical advantage [[VM]] equals exactly [[n]], and the displacement ratio is proportional by the same factor.

## Hypotheses

- **Inextensible rope**: rope length does not change with tension. If violated, actual rope pulled by the operator will exceed [[n]] · [[sW]] during the initial stretch phase.
- **Massless pulleys**: each added moving pulley contributes no weight to the system. If violated, the operator must also overcome the pulleys' own weight.
- **Zero friction**: tension is uniform along the entire rope. If violated, tension decreases progressively from the application point to the load, making the efficiency model necessary.
- **Constant velocity or static equilibrium**: system acceleration is zero. If violated, inertial forces modify the balance and the problem becomes dynamic.
- **Coplanar pulleys**: all rope segments are parallel or the geometric analysis is straightforward. If violated, deviation angles must be handled with vector trigonometry.

## Quantitative validity domain

The ideal model is applicable when all of the following conditions are met simultaneously:

- Lifting speed below 0.5 m/s: dynamic axle friction is negligible.
- Load [[W]] exceeds 20 times the mass of each moving pulley: pulley self-weight represents less than 5 % of the total load.
- Number of segments [[n]] ≤ 8: beyond this, cable stiffness and accumulated rope and pulley weight are no longer negligible.
- Measured system efficiency above 0.95: the ideal model overestimates real force by less than 5 %.

Below these thresholds the systematic error exceeds 5 % and switching to the efficiency model is warranted.

## Model failure signals

- The measured effort [[P]] at the rope end is noticeably greater than [[W]] / [[n]]: indicates friction losses not captured by the ideal model.
- The load does not rise even though effort exceeds the theoretical equilibrium value: symptomatic of high static friction or system self-locking.
- The actual rope travel pulled is greater than [[n]] · [[sW]]: indicates an elastic rope or mechanical play in the axles.
- Pulley axle temperature rises during operation: friction is dissipating energy as heat, which the ideal model ignores.
- In long multi-segment tackles, the load measured at the hook is less than [[W]]: the weight of the ropes themselves adds to the useful load.

## Extended or alternative model

The extended model introduces mechanical efficiency [[eta]] to account for real losses. The required effort increases by a factor of 1/[[eta]]:

{{f:ley_polea_real}}

Efficiency [[eta]] combines axle friction, rope bending stiffness at each pulley, and mechanical play into a single parameter. For typical industrial greased block-and-tackle systems, [[eta]] ranges from 0.80 to 0.95. The extended model is valid for most engineering calculations whenever [[eta]] is known or estimated.

Beyond the efficiency model, the full dynamic model adds rotational equations of motion for each pulley and Newton's equation for load acceleration. That model is necessary when system acceleration exceeds 0.1 m/s².

## Operational comparison

| Criterion | Ideal model | Efficiency model |
|---|---|---|
| Calculated effort | W divided by n | W divided by n·η |
| Accuracy | Exact only if η ≈ 1 | Correct for real systems |
| Required parameters | W, n | W, n, η |
| Complexity | Minimal | Low |
| Application range | Laboratory, quick estimate | Operational engineering, design |
| When to use it | η > 0.95 or preliminary calculation | η < 0.95 or safety design |

The ideal model is the mandatory pedagogical starting point. The efficiency model is the standard for any real dimensioning of motors, actuators or industrial lifting systems.

`;export{e as default};
