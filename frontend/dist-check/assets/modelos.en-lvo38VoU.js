const e=`## Ideal model

The ideal model is a rigid body rotating about a fixed axis, with negligible friction and uniform gravity. The motion coordinate is [[theta]], the relevant inertia is [[I_O]], and the restoring torque comes from weight acting at the center of mass at distance [[d]] from the pivot.

## Hypotheses

The body does not deform, the pivot does not move, [[g]] is constant, and mass distribution does not change during oscillation. To use [[T0]], the angle is also assumed small, so the linear model represents the motion well. For finite amplitudes, the nonlinear equation or energy [[E]] must be retained.

## Quantitative validity domain

The model requires [[I_O]] > 0, [[m]] > 0, [[g]] > 0, and [[d]] > 0. If Steiner is used, [[I_O]] >= [[I_cm]] must hold. As an order-of-magnitude criterion, the linear approximation is usually acceptable for amplitudes below 0.1 rad; above 0.3 rad, nonlinear period correction should be considered.

It must also be checked that damping is small during measurement. If the period is measured over a few cycles and amplitude hardly changes, the conservative model is reasonable. If amplitude decays quickly, [[T0]] is no longer a purely geometric and inertial property.

## Model failure signals

The model fails if the pivot has looseness, if the body flexes, if the center of mass is poorly located, or if the period changes when the same amplitude is repeated. It also fails if [[I_cm]] is used instead of [[I_O]], because the actual rotation axis is then ignored.

Another failure signal is strong dependence of period on amplitude without acknowledging it. In that case the pendulum physics is not failing; the linear model choice is failing. The experimental data are asking for an energy or nonlinear approach.

## Extended or alternative model

When to switch to an alternative model is when friction is appreciable, amplitudes are large, the pivot is elastic, the body is flexible, or other modes are coupled. Then one uses damped models, numerical integration of the nonlinear equation, Lagrangian mechanics with dissipation, or deformable-body models.

If the goal is only to estimate the small-oscillation period, [[T0]] is enough. If the goal is to fit finite-amplitude data or study energy transfer, [[E]] and the nonlinear equation are more appropriate. If the body vibrates internally, it is no longer a one-degree-of-freedom rigid pendulum.

## Operational comparison

The basic physical pendulum identifies the linear period. The advanced leaf asks why that period depends on mass distribution, how [[I_O]] is obtained from [[I_cm]], what [[leq]] means, and when linearization stops being enough. This makes it closer to university laboratory work.

Operationally, first fix the axis and compute [[I_O]]. Then compute [[T0]]. Finally check amplitude: if the angle is small, the result is closed; if not, state the limit of the linear period and use energy or the nonlinear equation to interpret the experiment.
`;export{e as default};
