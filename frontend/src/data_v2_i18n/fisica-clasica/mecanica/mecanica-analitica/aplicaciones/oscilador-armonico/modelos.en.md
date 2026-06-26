# Models for the Harmonic Oscillator

## Ideal model

The ideal model is a mass [[m]] attached to a linear elastic element of stiffness [[k]], oscillating without damping around a stable equilibrium. Maximum displacement is [[A]], natural angular frequency is [[omega]], period is [[Tper]], and total mechanical energy is [[E]]. The central assumption is that the restoring action is proportional to displacement and that parameters do not change during motion.

This model is not meant to describe every real vibrating system. It builds the linear reference. Its didactic strength is the separation between two readings: [[m]] and [[k]] set rhythm; [[A]] and [[k]] set energy. That separation makes the oscillator a base case for analytical mechanics, normal modes, and potential approximations.

## Hypotheses

The model assumes a point mass or equivalent generalized coordinate, a linear spring, amplitude within the elastic range, negligible damping, and no external periodic forcing. It also assumes stable equilibrium and positive potential curvature represented by positive [[k]].

Units must be coherent: [[m]] in kg, [[k]] in N/m, [[A]] in m, [[omega]] in rad/s, [[Tper]] in s, and [[E]] in J. Mixing grams, centimeters, or incorrectly converted stiffness constants can shift the frequency by large factors.

## Quantitative validity domain

As an operational rule, the linear model is reasonable if amplitude is small compared with the scale over which stiffness changes appreciably. A practical criterion is that the relative variation of effective stiffness remains below 5% across the displacement interval. It is also acceptable if energy loss per cycle is below 1% when [[E]] is treated as constant.

If displacement approaches the elastic limit, if strong damping appears, or if measured frequency clearly depends on [[A]], the ideal model is no longer sufficient. The formulas for [[omega]], [[Tper]], and [[E]] still provide an initial reference, but not a complete description.

## Model failure signals

A failure signal is that the period changes when amplitude increases under otherwise identical conditions. Another is that successive maxima decrease appreciably due to dissipation. The model also fails if restoring behavior is asymmetric, mechanical stops are reached, stiffness changes with temperature, or external forcing dominates the motion.

In experimental data, failure may appear as a non-sinusoidal curve, a drifting frequency, or non-conserved energy. These signals do not make the oscillator useless; they show that it should be used as a local approximation or a baseline model.

## Extended or alternative model

An extended model may include viscous damping, periodic external forcing, elastic nonlinearity, or coupling with other degrees of freedom. Then resonance, phase lag, amplitude decay, energy transfer between modes, or amplitude-dependent frequency may appear.

It is appropriate to change to the extended model when the goal is to predict transient response, dissipation, resonance, or large-amplitude behavior. The transition is not decorative: it is chosen because an ideal-model assumption has left an observable failure signal.

## Operational comparison

The ideal model estimates natural frequency, period, and amplitude energy with a clear reading. It is the first option when the problem concerns local behavior around equilibrium.

The extended model is used when omitted effects are comparable to the target result. It loses simplicity but explains observations that the ideal model cannot: decay, resonance, frequency shift, or modal exchange.
