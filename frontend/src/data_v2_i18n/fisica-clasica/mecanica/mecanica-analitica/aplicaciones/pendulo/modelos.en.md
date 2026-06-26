# Models for the Pendulum

## Ideal model

The ideal model describes a point mass [[m]] attached to an inextensible string of length [[L]], with negligible pivot friction and negligible air losses. Gravity [[g]] is treated as uniform, and motion is restricted to one plane. The state variable is angle [[theta]], and torque [[tau]] captures restoring action around the lower equilibrium.

In this framework, the main temporal reading uses [[omega]] and [[Tper]] under small oscillations. The didactic value of the ideal model is the clear separation between system parameters and instantaneous state: [[L]] and [[g]] set the clock, while [[theta]] sets the local state where [[tau]] is evaluated.

## Hypotheses

Assume negligible string mass, concentrated bob mass, non-dominant pivot friction, and small amplitudes whenever linear timing relations are used. Also assume [[g]] remains constant over the experiment and that no dominant periodic forcing is applied.

Units must remain coherent: [[L]] in meters, [[g]] in m/s^2, [[theta]] in radians for angular dynamics, [[omega]] in rad/s, and [[Tper]] in seconds. If [[L]] is entered in centimeters or [[theta]] in degrees without conversion, results can shift by large factors.

## Quantitative validity domain

As a practical rule, linear timing is robust when maximum angle stays moderate, for example below about 0.35 rad. In that regime, period relative error is usually low enough for introductory laboratory goals.

It is also useful to require small losses per cycle, with moderate amplitude reduction relative to initial amplitude. If loss per cycle exceeds about 5%, the ideal conservative timing model is no longer accurate. If expected period error exceeds 10%, model escalation is recommended.

## Model failure signals

A clear failure signal is a measurable increase of [[Tper]] with initial amplitude. Another signal is rapid decay of maxima due to damping, indicating that no-loss assumptions are invalid. The model also fails when pivot dry friction is significant or when effective string length changes during motion.

In measurements, failure can be detected by comparing time series at different amplitudes and checking whether period converges toward the linear value. If it does not converge, the system requires a nonlinear or damped formulation. This early detection avoids mislabeling model limits as instrument noise.

## Extended or alternative model

The first extension introduces damping to study amplitude decay and phase behavior. Another extension preserves full angular nonlinearity for large amplitudes. Periodic forcing may also be included to analyze resonance and synchronization with external excitation.

When to change model: when measured-versus-predicted deviation is systematically larger than what the experiment or design objective can tolerate. If only order-of-magnitude rhythm is needed for small oscillations, the ideal model is enough. If detailed timing is needed at large amplitudes or with losses, an extended model is necessary.

## Operational comparison

The ideal model is fast and highly interpretable: it links [[L]], [[g]], [[omega]], and [[Tper]] without excessive mathematics. It is appropriate for preliminary experiment design, educational calibration, and trend identification.

The extended model is more expensive to solve, but it captures effects the ideal model cannot reproduce, such as amplitude-dependent period, per-cycle dissipation, and forced response. Operationally, the recommended strategy is to use the ideal model as baseline first, then quantify residual error to decide whether extra complexity is justified.