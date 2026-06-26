## Ideal model

The ideal physical pendulum model assumes a rigid body with total mass [[m]] oscillating around a fixed pivot axis. Mass distribution is represented by [[I]] about that axis. Restoring torque is governed by [[g]] and [[d]], where [[d]] is the pivot-to-center distance. No support slip and no significant structural deformation are allowed.

This model is operationally useful because it predicts [[T]], [[f]], and [[omega0]] with compact relations that can be compared directly with angular measurements of [[theta]]. For moderate initial amplitudes, agreement is usually stable and physically interpretable.

## Hypotheses

Four hypotheses sustain the model. First, pivot location is stable during the full record. Second, body rigidity is high enough for [[I]] to remain effectively constant. Third, angular amplitudes are small enough for linearization when computing [[omega0]] and [[T]]. Fourth, friction and drag do not dominate short-time dynamics.

These assumptions are not optional narrative pieces. If they fail, interpretation of the same equation changes. For instance, a compliant support can mimic apparent inertia drift. Likewise, strong friction can bias [[T]] estimates when only a few cycles are sampled.

## Quantitative validity domain

A practical quantitative criterion for instructional rigs is initial [[theta]] below about 0.35 rad, with period variation under 5% when amplitude is changed within the tested range. If doubling launch amplitude changes measured [[T]] by more than 5%, strict linear interpretation should be rejected.

Parameter constraints are also quantitative: [[I]] > 0, [[m]] > 0, [[d]] > 0, [[g]] > 0. In practical setups, very small [[d]] values near 0.01 m often amplify geometric uncertainty and can push relative period error above 10% under basic metrology. With [[I]] between 0.01 and 1 kg*m^2 and [[m]] between 0.1 and 5 kg, expected periods commonly lie between 0.3 s and 6 s.

## Model failure signals

First failure signal: measured [[T]] becomes amplitude-dependent in a systematic way. Second signal: residuals between measured and predicted values show directional bias rather than random spread. Third signal: the waveform of [[theta]] departs persistently from near-harmonic behavior.

Geometric inconsistency is another warning. If the real pivot axis differs from the assumed axis, the chosen [[I]] no longer represents the system. In that case, one calibration point may look acceptable but prediction fails after configuration changes.

## Extended or alternative model

When amplitudes are not small, the extended model keeps the nonlinear angular equation and uses numerical integration or higher-order approximations. This captures amplitude-dependent period effects that linear formulas miss.

A second extension adds effective damping. Even though this leaf focuses on conservative baseline relations, damping may be required in experimental interpretation to explain envelope decay and phase drift. With external periodic forcing, the system transitions to forced oscillation analysis and comparison with natural [[f]] becomes central.

## Operational comparison

Model comparison is not complexity for its own sake. The best model is the most informative one under available data quality. The linear model is preferred when quantitative criteria hold and when quick estimates of [[T]] and [[omega0]] remain coherent. The nonlinear model is preferred when amplitude effects invalidate linear assumptions.

Practical rule: start with the ideal model, test criteria, then increase complexity only when residual patterns and coherence checks justify it. This keeps interpretation clear, avoids overfitting, and improves engineering decisions.