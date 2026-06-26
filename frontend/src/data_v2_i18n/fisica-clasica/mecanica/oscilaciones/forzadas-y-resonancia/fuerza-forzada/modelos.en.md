## Ideal model

The ideal model is a linear mass-spring-damper oscillator subject to an external sinusoidal force. The response studied here is steady state: once the transient has faded, [[x]] oscillates with the same [[omega_f]] as the applied force, with amplitude [[X]] and phase lag [[delta]].

## Hypotheses

Mass [[m]], stiffness [[k]], and damping [[b]] are constant. The external force is sinusoidal, with amplitude [[F0]] and angular frequency [[omega_f]]. Motion amplitude is small enough to preserve linearity. The full start-up is not studied; the focus is the permanent regime after the free component has decayed.

## Quantitative validity domain

The model requires [[m]] > 0, [[k]] > 0, [[omega_f]] > 0, and [[b]] >= 0. It is reasonable while maximum deformation [[X]] remains small compared with the system linear range, for example below 5% or 10% of a characteristic device length. The force must remain periodic for several cycles for steady state to be meaningful.

## Model failure signals

The model fails if the response does not settle to a single frequency, if important harmonics appear, if [[X]] changes while [[F0]] and [[omega_f]] remain fixed, or if the curve shows impacts, saturation, or variable stiffness. It also fails if it is used during the initial transient.

## Extended or alternative model

When to switch to an alternative model is when the source is not sinusoidal, amplitude activates nonlinearities, or damping depends strongly on velocity. In those cases, general frequency response, numerical integration, or nonlinear models are used. If the goal is to locate the maximum of [[X]] while sweeping frequency, the next didactic model is resonance.

## Operational comparison

This model answers a specific question: for an imposed frequency, what amplitude and phase lag will the permanent regime have? Resonance answers another question: where the maximum response appears. Keeping those questions separate prevents this leaf from duplicating the resonance leaf.

Operationally, if only one working frequency is available, this model is used. If a frequency sweep is available and the maximum is sought, the analysis moves to resonance. If the signal contains many frequencies, superposition or general frequency response is required.

The most direct experimental check is to wait several cycles, measure the repeatable amplitude, and compare the delay between force and displacement. If both quantities remain stable, the model describes permanent regime. If they change from cycle to cycle, a transient is still present or the system is not behaving linearly.

That distinction is essential in measurements.
