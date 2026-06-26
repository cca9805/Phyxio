# Models for the mass-spring oscillator

## Ideal model

The ideal model treats the system as a point mass [[m]] connected to a linear spring with stiffness [[k]], with no dominant damping and no dominant external forcing. The coordinate [[x]] is measured from equilibrium, and restoring [[F]] is interpreted as the mechanism pulling the system back. This framework yields stable periodicity, nearly constant amplitude, and well-defined phase.

Its educational and engineering value lies in mechanism separation: inertia, elasticity, and initial conditions can be analysed independently before adding complexity. Within this setting, the temporal scale is summarised by [[omega0]], [[T]], and [[f]], allowing direct link between physical parameters and measurable response.

## Hypotheses

First hypothesis: elastic linearity in the operating deformation range. This means restoring force remains proportional to displacement and [[k]] can be treated as an effective constant.

Second hypothesis: lumped mass behaviour. Internal flexible modes are assumed negligible compared with the dominant oscillation of the assembly.

Third hypothesis: secondary dissipation. Real losses may exist, but over a short cycle window they do not dominate period definition.

Fourth hypothesis: coherent temporal and phase reference. Initial conditions for [[A]], [[phi]], and [[t]] must be defined consistently to compare theory and measurements.

## Quantitative validity domain

A practical quantitative domain can be expressed with explicit thresholds. If relative variation of measured period [[T]] versus amplitude [[A]] stays <= 10 percent, linear approximation is usually acceptable. If that variation systematically exceeds 10 percent, the ideal model is likely insufficient.

Frequency stability provides a second criterion. If measured [[f]] stays within a narrow band around theoretical prediction, for instance with relative error <= 5 percent across repeated tests, the model remains useful for preliminary design decisions.

A third criterion is energetic consistency. For small amplitudes, force peaks associated with [[F]] should scale approximately linearly with [[A]]. Persistent deviations > 15 percent suggest nonlinearity, damping effects, or instrumentation errors that should be modelled explicitly.

## Model failure signals

A strong failure signal appears when amplitude envelope decays rapidly and waveform periodicity degrades over few cycles. Another appears when experimental traces become strongly asymmetric between opposite half-cycles, which often indicates nonlinear stiffness or direction-dependent losses.

Failure is also likely when phase alignment requires arbitrary retuning for every run. If comparison only works by manual phase manipulation without physical justification, the issue is structural, not cosmetic.

Finally, if predicted orders of magnitude conflict with direct bench observations, extrapolation should stop and assumptions should be re-audited before additional computation.

## Extended or alternative model

When the ideal model is not enough, the first extension is effective viscous damping. This preserves analytical tractability while representing envelope decay and phase shifts.

If the system operates near externally imposed periodic excitation, a forced-response model becomes necessary. It separates transient and steady-state behaviour and allows resonance-peak and bandwidth analysis.

For large deformations or material nonlinearity, a nonlinear restoring law is more appropriate. Although computational effort increases, this prevents systematic misinterpretation in regimes where effective stiffness is not constant.

## Operational comparison

Fast operation mode: the ideal model is best when you need quick, interpretable estimates of [[omega0]], [[T]], and [[f]] with minimal computational overhead.

Intermediate operation mode: the damped model is appropriate when settling time, cycle energy loss, or vibration attenuation is part of the target specification.

Advanced operation mode: forced or nonlinear models are required when periodic excitation approaches resonance, or when mechanical constraints produce amplitude-dependent behaviour.

Decision rule: when mismatch between ideal prediction and measurement persistently exceeds instrumental uncertainty, model escalation is justified. When to switch model: when sustained relative error is > 10 percent and discrepancies display a clear physical pattern rather than random scatter.
