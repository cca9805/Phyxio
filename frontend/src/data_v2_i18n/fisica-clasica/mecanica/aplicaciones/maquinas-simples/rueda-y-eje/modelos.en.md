# Wheel and Axle — Models and Validity

## Ideal model

The ideal model of the wheel and axle assumes that the machine is rigid, frictionless, with negligible masses, and operating under quasi-static conditions. Under these hypotheses the torque balance is exact:

{{f:ley_rueda_ideal}}

The ideal mechanical advantage [[VM]] is the geometric ratio of the radii:

{{f:ventaja_mecanica_ideal}}

This model captures the essence of the mechanism: the system does not create energy but redistributes force and displacement. Whatever you gain in [[Fr]] you pay in travel [[sR]].

## Hypotheses

- **Full rigidity**: wheel and axle do not deform under load. If violated, the effective radius changes with load, modifying the real mechanical advantage.
- **No friction**: efficiency is exactly 1. If violated, the actual effort [[FR]] is greater than calculated and energy is lost as heat.
- **Negligible masses**: the rotational inertia of the wheel and axle contributes no resistive torque. If violated, in dynamic operation (acceleration) the torque balance includes an additional I·α term.
- **Constant radii**: [[R]] and [[r]] do not change during motion. If the rope winds in multiple layers, the effective radius grows with the number of wound layers, making mechanical advantage position-dependent.
- **Constant speed or rest**: there is no angular acceleration. If violated, the rotational equation of motion replaces the static equilibrium.

## Quantitative validity domain

The ideal model applies when all of the following conditions are met simultaneously:

- Rotation speed below 1 rev/s: dynamic friction at the bearings is negligible.
- Load [[Fr]] exceeds 50 times the machine's own weight: the machine weight represents less than 2% of the total load.
- Measured efficiency greater than 0.95: the ideal model overestimates the output force by less than 5%.
- Angular deformation of the axle below 1°: torsion does not appreciably modify the kinematic ratio [[sR]]/[[sr]].

Outside these conditions the systematic error exceeds 5% and the model with efficiency [[eta]] should be used.

## Model failure signals

- The measured effort [[FR]] is noticeably greater than [[Fr]]·r/R: indicates friction losses not accounted for in the ideal model.
- The system does not rotate even when [[FR]] exceeds the equilibrium value: symptom of high static friction or self-locking.
- The arc traveled [[sR]] is greater than predicted by the ideal kinematics: points to rope slipping on the wheel.
- The temperature of the axle bearings rises during operation: friction dissipated as heat is not represented in the ideal model.
- The measured mechanical advantage decreases under high loads: indicates axle deformation (torsion) or bearing compression.

## Extended or alternative model

The extended model introduces the mechanical efficiency [[eta]] to represent all internal losses as a single factor. The required real effort increases:

{{f:ley_rueda_real}}

The real mechanical advantage is always less than the ideal:

{{f:ventaja_mecanica_real}}

The complete energy balance is expressed as:

{{f:balance_energia_rueda}}

The efficiency [[eta]] groups bearing friction, joint stiffness, and elastic deformations. In typical industrial applications [[eta]] ranges between 0.75 and 0.95. This model is valid for most engineering calculations provided [[eta]] is known or estimable.

## Operational comparison

When to switch to the extended model: whenever [[eta]] is below 0.95 or the system is of industrial application. For preliminary estimates or didactic laboratory work the ideal model is sufficient.

| Criterion | Ideal model | Model with efficiency |
|---|---|---|
| Calculated effort | [[Fr]] · r / R | [[Fr]] · r / ([[eta]] · R) |
| Accuracy | Exact only if [[eta]] near 1 | Correct for real systems |
| Required parameters | [[FR]], [[Fr]], R, r | [[FR]], [[Fr]], R, r, [[eta]] |
| Complexity | Minimal | Low |
| Application range | Laboratory, quick estimate | Operative engineering, design |
| When to use | [[eta]] above 0.95 or preliminary calculation | [[eta]] below 0.95 or safety design |

The ideal model is the mandatory pedagogical starting point. The model with efficiency is the standard for any real dimensioning of motors, actuators, or rotational transmission systems.
