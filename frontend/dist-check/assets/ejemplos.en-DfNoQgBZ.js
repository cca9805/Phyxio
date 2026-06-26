const e=`# Exam-type example

## Problem statement

A mass [[m]] of 2.0 kg is attached to a linear spring with stiffness [[k]] equal to 80 N/m. It is displaced from equilibrium with amplitude [[A]] equal to 0.050 m and released with negligible damping. Compute the natural angular frequency [[omega]], the period [[Tper]], and the total mechanical energy [[E]]. Interpret which parameter controls rhythm and which controls energy.

## Data

The data are [[m]] = 2.0 kg, [[k]] = 80 N/m, and [[A]] = 0.050 m. The displacement is assumed to be inside the linear spring regime, damping is negligible, and the motion occurs around a stable equilibrium. Units are already in SI.

## System definition

The system is a one-degree-of-freedom mass-spring oscillator. The generalized coordinate can be taken as displacement from equilibrium. Mass provides inertia, the spring provides linear return, and amplitude describes the initial excitation state. No external forcing or dissipative loss is included.

## Physical model

Use the ideal harmonic oscillator. In this model, [[omega]] is determined by the competition between [[k]] and [[m]], [[Tper]] follows from angular rhythm, and [[E]] is fixed by maximum amplitude [[A]] in the elastic potential. Energy is conserved because friction is not modeled.

## Model justification

The choice is physically reasonable because the statement declares a linear spring and a small amplitude. There is no evidence of damping, stops, nonlinearity, or external periodic forcing. If an experiment showed that period changes with [[A]], or that amplitude decays per cycle, the ideal model would have to be abandoned.

## Symbolic solution

The natural angular frequency is computed with:

{{f:omega}}

The period follows from angular frequency:

{{f:Tper}}

The total mechanical energy associated with maximum amplitude is:

{{f:E}}

These relations are applied in this order because the natural rhythm is read first, then cycle time, and finally the energy stored by the initial amplitude.

## Numerical substitution

With [[k]] = 80 N/m and [[m]] = 2.0 kg, the stiffness-inertia quotient is 40 in inverse-second-squared units. Its square root gives an angular frequency of about 6.32 rad/s. The corresponding period is close to 0.99 s.

For energy, amplitude is inserted in meters. The square of 0.050 m is 0.0025 m^2. Multiplying by stiffness and by one half gives a total energy of about 0.10 J.

## Dimensional validation

For angular frequency, [[k]] divided by [[m]] has dimension inverse time squared, and its square root has dimension inverse time. For period, a dimensionless angular constant divided by [[omega]] gives seconds. For energy, [[k]] multiplied by [[A]] squared gives N*m, equivalent to J.

## Physical interpretation

The oscillator has a period close to one second: not an ultra-fast vibration, but a clearly periodic laboratory oscillation. If [[m]] were increased with [[k]] fixed, the period would grow. If [[k]] were increased with [[m]] fixed, the motion would become faster. Increasing [[A]] would not change the ideal period, but would increase [[E]] quadratically.

The final reading is a diagnosis, not just a numerical substitution. The computed angular frequency indicates that the mass-spring system has an internal clock set by its mechanical parameters. This means the rhythm depends on the system, while the energy depends on how strongly the motion was prepared. The energy of about 0.10 J shows that the initial preparation is moderate, but if the amplitude were increased to 0.10 m, the energy would become about 0.40 J. That comparison explains why [[A]] is a very sensitive state variable even though it does not change the ideal period.

The result shows the central didactic separation of the leaf. Rhythm belongs to the system; energy belongs to the excitation state. Mixing them would suggest that a wider oscillation must oscillate more slowly, which the ideal harmonic model does not predict.

# Real-world example

## Context

A team designs an elastic mount to isolate vibrations from a small measurement platform. The natural frequency should not coincide with a dominant external vibration, and the team needs to estimate how much energy is stored if the platform reaches a specified maximum amplitude.

## Physical estimation

The first estimate compares natural [[omega]] with the range of external excitations. If natural frequency lies too close to a periodic excitation, resonance may occur and [[m]] or [[k]] should be changed. Larger mass lowers natural rhythm; greater stiffness raises it.

The team also estimates [[E]] for the maximum admissible amplitude. This reading is not merely numerical: it indicates whether the mount stores energy compatible with mechanical limits. If [[A]] doubles, energy quadruples, so safety margin may shrink quickly.

## Interpretation

The harmonic oscillator gives a clear preliminary design decision: tune rhythm with [[m]] and [[k]], and control energy with [[A]] and [[k]]. If the real system shows strong damping, nonlinear response, or dominant external forcing, the model must be extended. As a first design reading, however, it cleanly separates natural frequency, period, and stored energy.

In a technical report, that separation would become two different recommendations. To move away from a dangerous external excitation, the designer would change [[m]] or [[k]]. To limit internal stresses and maximum travel, the designer would reduce [[A]] or choose stiffness compatible with the working range. The same calculation therefore does more than produce numbers: it identifies which parameter should be modified for the real design goal.
`;export{e as default};
