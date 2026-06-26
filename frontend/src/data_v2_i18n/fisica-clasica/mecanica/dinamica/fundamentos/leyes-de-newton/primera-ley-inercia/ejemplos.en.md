# Exam-type example

## Problem statement

A laboratory cart of known mass moves along a straight low-friction track. After an initial push ends, force and velocity are recorded during a 6 s interval. The task is to decide whether the interval belongs to first-law domain, justify the selected model, and conclude whether the motion state is conserved or changing. The solution must explicitly distinguish individual forces from net resultant in order to avoid the common misconception that motion itself implies a forward net force.

## Data

- Cart mass: 0.50 kg.
- Time window: from 2 s to 8 s.
- Mean measured [[F_net]] magnitude: 0.01 N.
- Force sensor fluctuation band: up to 0.02 N.
- Initial speed in window: 1.20 m/s.
- Final speed in window: 1.18 m/s.
- Practical classroom criterion for inertial behavior: [[a]] magnitude at or below 0.02 m/s^2 in average reading.

## System definition

Selected system: full cart assembly.

Relevant external interactions: normal reaction, weight, residual rolling resistance, and weak air drag. Human push acted before the interval and is not active during analyzed data.

Reference frame: laboratory frame, treated as inertial for this scale.

## Physical model

Adopt a first-law inertial model with tolerance-aware interpretation. The model is accepted when measured resultant is zero-compatible and velocity drift is explainable by instrument limits plus minor dissipation.

## Model justification

The model is justified by causal consistency, not by visual smoothness. Force readings remain within the sensor fluctuation band and show no sustained directional bias. Therefore there is no robust evidence of a net external cause producing continuous state change.

The observed speed difference is small and compatible with residual losses at this precision level. This supports first-law treatment as primary model for the selected interval.

## Symbolic solution

{{f:first_law_condition}}

{{f:equilibrium_dynamics_relation}}

{{f:constant_velocity_inertia}}

Interpretation chain: zero-compatible resultant leads to zero-compatible acceleration, which leads to conserved velocity state over the modeled window.

## Numerical substitution

Using [[F_net]] equal to 0.01 N and mass 0.50 kg, the acceleration scale is 0.02 m/s^2 if interpreted as sustained net action. Since this level matches the declared noise threshold and lacks persistent trend, it is treated as zero-compatible for model decision.

Measured speed drift from 1.20 m/s to 1.18 m/s over 6 s remains small enough to keep inertial interpretation valid at educational precision.

## Dimensional validation

Dimensional consistency is preserved: force divided by mass gives acceleration units, and speed change divided by time also gives acceleration units.

## Physical interpretation

The physical meaning is not "no forces exist." It is "external forces balance at the relevant scale." Motion can continue with nearly constant [[v]] because there is no net cause of change.

In operational terms, the cart remains in practical inertial state during the interval, with small deviations attributable to minor dissipation and measurement limits.

This interpretation is causal, not decorative. It predicts what would happen if conditions changed: a sustained external disturbance would first appear as persistent nonzero-compatible [[a]], and then as systematic drift in [[v]]. Framing the result this way transforms the example from a numerical exercise into a model-selection tool.

It also clarifies interaction meaning: weight and normal are still present, yet their balance does not create a dominant net cause along motion. Dynamic equilibrium therefore means effective compensation, not physical emptiness. This distinction is crucial for later topics, because it trains students to justify force stories before computing anything.

# Real-world example

## Context

In an automated warehouse, a mobile platform carries light packages through straight aisles. The controller must decide whether to keep cruise mode or switch to full dynamic correction. This decision depends on monitored [[F_net]], inferred [[a]], and stability of [[v]] over short windows.

Operational teams care about this distinction because unnecessary correction costs energy and increases actuator wear, while delayed correction increases positioning error. First-law reading therefore has direct consequences for throughput, maintenance, and safety margins.

## Physical estimation

Suppose the control policy allows up to 2 percent relative drift in [[v]] over a 4 s planning horizon. In a typical run, estimated parasitic acceleration is 0.015 m/s^2 and nominal speed is 3.0 m/s.

Allowed speed change is 2 percent of 3.0 m/s, equal to 0.06 m/s. Estimated inertial-valid window is speed margin divided by parasitic acceleration, giving about 4 s.

Interpretation of this estimate is practical: for horizons up to 4 s, treating velocity as constant remains within tolerance. For longer horizons, the system should switch to a nonzero-resultant correction layer.

This workflow uses first law as baseline and adds quantified transition criteria. It does not deny perturbations. It decides when they become operationally dominant.

## Interpretation

The real-world case demonstrates the engineering value of first law: it separates stable cruise intervals from actively forced transitions. That separation prevents over-control in already stable segments and improves safety by triggering correction when drift becomes persistent.

For learning, the case reinforces three core points: constant velocity does not need continuous push, causal decision comes from [[F_net]] reading, and quantitative thresholds translate theory into repeatable operational rules.

It also builds transfer skill. The same logic appears in robotics, vehicle guidance, conveyor optimization, and test-bench diagnostics. In every domain, the practical question is the same: are we still in a conserved-motion regime, or has a measurable net cause emerged? Answering that question with explicit thresholds is the applied form of Newton's first law.

From a decision perspective, interpretation drives action. In inertial windows, efficiency-oriented control is appropriate. Once nonzero-resultant behavior becomes persistent, correction-oriented control is required. That shift is not merely numerical; it is a causal change in how the system should be understood and managed.
