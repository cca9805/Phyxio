# Exam-type example

## Problem statement

In a school laboratory, a simple pendulum is built with [[L]] of 0.84 m. Local gravity is [[g]] of 9.81 m/s^2. The pendulum is released from a small initial amplitude [[theta0]]. The task is to compute [[omega0]], [[T]], and [[f]], justify why the linear model is valid, and explain what changes when amplitude is no longer small.

The exercise also asks for a physical interpretation of the sign of [[theta_dd]] when [[theta]] is positive. The answer must connect computation with physical causality.

## Data

- Effective length [[L]]: 0.84 m.
- Local gravity [[g]]: 9.81 m/s^2.
- Initial amplitude [[theta0]]: small, inside the linear regime.
- Initial phase [[phi]]: simple starting reference.

Target quantities:

- [[omega0]] in rad/s.
- [[T]] in s.
- [[f]] in Hz.
- [[E]] for an energy consistency check.

## System definition

We model a point mass suspended from an ideal string with a fixed support. Angular displacement [[theta]] is measured from stable equilibrium. Time [[t]] is measured from release.

## Physical model

Natural scale in the small-angle regime:

{{f:omega0_ps}}

Linear period:

{{f:periodo_ps}}

Temporal frequency:

{{f:frecuencia_ps}}

Angular evolution in time:

{{f:ecuacion_angular_ps}}

When amplitude is not small, the nonlinear model is required:

{{f:ecuacion_no_lineal_ps}}

To analyze exchange between energy forms:

{{f:energia_ps}}

## Model justification

The linear model is used because [[theta0]] is small, so the restoring effect is close to proportional to angular displacement. In this range, the difference from the real period is usually below common manual timing uncertainty.

If [[theta0]] grows systematically, the measured period drifts away from the linear value and one must move to the nonlinear model. This is the operational rule that links assumptions, measurements, and validity.

## Symbolic solution

First, obtain natural angular frequency:

{{f:omega0_ps}}

Then compute period:

{{f:periodo_ps}}

Then compute frequency by reciprocity:

{{f:frecuencia_ps}}

For time evolution:

{{f:ecuacion_angular_ps}}

For non-small amplitudes:

{{f:ecuacion_no_lineal_ps}}

For finite-amplitude energy consistency:

{{f:energia_ps}}

## Numerical substitution

With [[L]] of 0.84 m and [[g]] of 9.81 m/s^2, natural angular frequency is close to 3.42 rad/s.

With that value, period is close to 1.84 s.

Associated frequency is close to 0.54 Hz.

Internal consistency check: [[omega0]], [[T]], and [[f]] remain mutually coherent for linear-regime data.

For energy, taking a reference mass of 0.05 kg and [[theta0]] of 0.1 rad gives total energy on the order of 2e-3 J. That order of magnitude is realistic for classroom setups.

## Dimensional validation

- [[omega0]] must have inverse-time dimension.
- [[T]] must keep time dimension.
- [[f]] must be cycles per second.
- [[E]] must be in joule.

If a computed value violates these constraints, the issue is setup or unit conversion rather than physics.

## Physical interpretation

When [[theta]] is positive, [[theta_dd]] points in the opposite direction. That opposition is the signature of gravitational restoring torque and explains why motion returns toward equilibrium instead of diverging.

Angular velocity [[theta_dot]] increases near equilibrium and decreases at the turning points. This behavior matches the exchange between potential and kinetic contributions represented by [[E]].

If real data shows period growth with larger [[theta0]] or cycle-to-cycle decrease of [[E]], that implies departure from the ideal linear regime due to finite amplitude or dissipation.

# Real-world example

## Context

A teacher compares two pendulums with the same small initial amplitude and different lengths to evaluate temporal sensitivity and model-validity criteria.

## Physical estimation

The longer pendulum should have larger [[T]] and smaller [[f]]. The dependence of [[T]] on the square root of [[L]] allows trend prediction before detailed computation. For a length change from [[L]] of 1.0 m to [[L]] of 0.25 m, the expected period scale moves from about 2.0 s to about 1.0 s, which is a clear order-of-magnitude estimate for classroom timing.

## Comparative analysis

Case A: [[L]] of 1.0 m.

- [[omega0]] around 3.13 rad/s.
- [[T]] around 2.0 s.
- [[f]] around 0.5 Hz.

Case B: [[L]] of 0.25 m.

- [[omega0]] around 6.26 rad/s.
- [[T]] around 1.0 s.
- [[f]] around 1.0 Hz.

The comparison shows that reducing [[L]] to one quarter reduces [[T]] to about one half. This trend matches linear-model expectations. It also provides causal reading: shorter length increases characteristic angular rate, so the oscillator repeats cycles faster under the same gravity.

## Interpretation

To close with an energy criterion, use:

{{f:energia_ps}}

With a reference mass of 0.05 kg and equal amplitude in both setups, energy of the long pendulum is about four times that of the short pendulum. This gives an extra consistency test: with other parameters fixed, energy scales with [[L]].

The final reading is not only numerical. The example provides a concrete rule for deciding when the linear model remains sufficient and when measured deviations require the nonlinear description.

To make the rule operational, the student can compare measured and predicted period at two amplitudes under the same setup. If relative deviation stays below five percent, the linear model remains acceptable for the intended precision. If deviation grows above that threshold, the finite-amplitude effect is no longer secondary and the nonlinear equation becomes the appropriate reference.

This decision process is important because it prevents two frequent mistakes: trusting a formula outside its domain, and blaming random noise for a systematic drift that is actually physical. In practice, combining period comparison with an energy trend check gives a stronger diagnosis than either criterion alone.