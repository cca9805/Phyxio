const e=`## Ideal model

The ideal model is a linear mass-spring-damper oscillator driven by a sustained sinusoidal force. Unlike the forced-oscillation leaf, this model does not study only one frequency: [[omega_f]] is swept to find where steady amplitude [[X]] reaches a maximum.

## Hypotheses

Mass [[m]], stiffness [[k]], and damping [[b]] are constant. The excitation has amplitude [[F0]] and controllable angular frequency [[omega_f]]. Response is measured in steady state, with amplitudes small enough to preserve linearity and avoid stops, looseness, or variable stiffness.

## Quantitative validity domain

The model requires [[m]] > 0, [[k]] > 0, [[b]] > 0, and [[omega_f]] > 0. For a defined displacement peak, the term determining [[omega_r]] must be positive; physically, damping cannot dominate so strongly that the maximum disappears. As an operational criterion, amplitudes below 5% or 10% of a characteristic length usually preserve linearity in laboratory setups.

The sweep also needs sufficient resolution. If [[Q]] is high, tested frequencies must be close together because the peak can be narrow. If [[Q]] is low, the maximum is broader and less sensitive to exact frequency adjustment.

## Model failure signals

The model fails if the curve has no reproducible peak, if amplitude depends on sweep direction, if strong harmonics appear, or if [[X]] changes while [[F0]] and [[omega_f]] remain fixed. It also fails if measurement is made during the initial transient or if response saturates because of mechanical limits.

Another failure signal is that the observed peak shifts when [[F0]] is increased. In a linear system, changing force scales amplitude but should not move [[omega_r]] appreciably. If it does, nonlinearity or heating is probably present.

## Extended or alternative model

It is appropriate to switch model when damping is not linear viscous damping, when dry friction appears, when amplitude changes stiffness, or when several modes are close. In those cases one uses nonlinear models, modal analysis, experimental frequency response, or numerical integration.

When to switch to an alternative model is when the measured peak shifts as [[F0]] changes, when upward and downward sweeps do not match, or when two nearby maxima appear. Those signals show that the one-degree-of-freedom oscillator is no longer sufficient.

If the goal is only to compute response for one frequency, the forced-oscillation model is enough. If the goal is to locate the maximum and assess risk, this resonance model is used. If several peaks appear, the model must be extended to multiple modes.

## Operational comparison

Forced oscillation answers: what amplitude does the system have for a given [[omega_f]]? Resonance answers: what happens as [[omega_f]] is varied, and where does the maximum appear? This difference is essential in real problems, because a high amplitude at one point does not by itself prove that the peak has been found.

Operationally, compute [[omega_r]], estimate [[Q]], and compare operating frequency with the critical zone. If [[omega_f]] falls near the peak, modify [[b]], [[m]], [[k]], or the source. If it lies far away, the design may be acceptable even though the external force exists.
`;export{e as default};
