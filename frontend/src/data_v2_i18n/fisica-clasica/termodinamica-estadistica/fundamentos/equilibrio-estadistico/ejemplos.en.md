# Exam-type example


## Problem statement

A system can occupy two states A and B. During a long observation, the average occupations remain constant. Decide whether the system is in statistical equilibrium using [[probabilidad_estado]], [[tasa_transicion]], and [[flujo_probabilidad]].

## Data

State A probability: 0.60
State B probability: 0.40
Transition rate A to B: 0.20 s^-1
Transition rate B to A: 0.30 s^-1
Observation [[tiempo]]: 200 s

## System definition

The statistical system is an ensemble of identical copies that can occupy two accessible states. We do not follow one trajectory; we follow the average population in A and B. [[probabilidad_estado]] represents ensemble fraction, and [[tiempo]] is used to check whether those fractions drift.

## Physical model

A two-state Markov model with constant [[tasa_transicion]] is used. Statistical equilibrium is recognized through stationary probability, normalization, and absence of net [[flujo_probabilidad]].

## Model justification

The rates are assumed stable during 200 s, much longer than a typical jump [[tiempo]]. The probabilities add to 1, so the statistical population is closed. [[peso_boltzmann]] is not introduced because the task does not ask us to derive the distribution from [[temperatura]] and [[energia_estado]].

## Symbolic solution

First check stationary probability:

{{f:criterio_probabilidad_estacionaria}}

Then check normalization:

{{f:normalizacion_probabilidades}}

For two states, detailed balance compares direct and reverse traffic:

{{f:balance_detallado_dos_estados}}

The final diagnostic is the net probability flow:

{{f:flujo_probabilidad_neto}}

If the net flow is zero, there is no preferred statistical transfer.

To quantify the statistical spread of the equilibrium distribution, the Gibbs [[entropia]] summarizes how occupation is distributed across accessible states:

{{f:entropia_gibbs_equilibrio}}

With probabilities 0.60 and 0.40, the [[entropia]] of the distribution indicates how concentrated occupation is toward state A. If both probabilities were 0.50, [[entropia]] would be at its maximum for a two-state system. The [[constante_boltzmann]] converts the dimensionless argument into joules per kelvin when physical [[temperatura]] is involved.

## Numerical substitution

Traffic from A to B: 0.60 · 0.20 s^-1 = 0.12 s^-1. Traffic from B to A: 0.40 · 0.30 s^-1 = 0.12 s^-1. Therefore the net [[flujo_probabilidad]] is 0 s^-1. The probability sum is 0.60 + 0.40 = 1.

## Dimensional validation

[[probabilidad_estado]] is dimensionless. [[tasa_transicion]] has unit s^-1. Their product has unit s^-1, matching [[flujo_probabilidad]] as statistical traffic per unit [[tiempo]]. Normalization is dimensionless, so the comparison is dimensionally consistent.

## Physical interpretation

The result means statistical equilibrium because transitions continue while being compensated. The direct traffic from A to B equals the reverse traffic from B to A, which indicates that the ensemble distribution has no preferred direction of change. This implies that microscopic activity is still present; therefore equilibrium cannot be read as rest. The larger [[probabilidad_estado]] of A does not contradict equilibrium, because its outgoing [[tasa_transicion]] is smaller. Physically, the balance depends on both occupation and transition rate, and the zero [[flujo_probabilidad]] indicates a closed traffic balance for the ensemble. Note that the same [[probabilidad_estado]] distribution could coexist with different rate values and equilibrium would still hold, provided the product p_A k_AB equals p_B k_BA. This shows that statistical equilibrium does not fix individual rates, only their weighted product with occupations.

# Real-world example


## Context

In a material with microscopic defects, an atom can jump between two local configurations. Although individual atoms jump due to thermal agitation, the average number in each configuration can remain stable. This is read as statistical equilibrium when direct and reverse flows compensate.

## Physical estimation

If the typical jump rate is of order 10^3 s^-1, an observation [[tiempo]] of 0.1 s samples about 100 characteristic jumps. A reasonable value for equilibrium testing is an approximate drift below 1% in the measured occupations. On that scale, an estimate of [[desbalance_estadistico]] below 10^-2 has the right magnitude to support equilibrium, provided the noise is comparable. The [[temperatura]] must stay stable; otherwise the equilibrium distribution can shift. This order-of-magnitude test does not prove microscopic detail, but it gives a reasonable value for deciding whether net flow is experimentally resolved.

To estimate the equilibrium distribution from the material physics, one needs the [[energia_estado]] difference between the two defect configurations, the local [[temperatura]], and the [[constante_boltzmann]], to compute [[peso_boltzmann]] using the Boltzmann factor. If the energy difference is of order kT (approximately 25 meV at 300 K), both configurations have comparable occupations. If it exceeds several units of kT, the lower [[energia_estado]] configuration dominates and [[probabilidad_estado]] of the excited configuration can fall below 0.05.

In metals and semiconductors, the statistical equilibrium of point defects controls electrical conductivity at moderate temperatures. The same zero-[[flujo_probabilidad]] logic applies to carrier distributions between conduction and valence bands when the crystal [[temperatura]] is stable. Detecting the imbalance with precision requires large statistical samples: with 1000 independent observations, the relative error in [[probabilidad_estado]] is of order 3%.

## Interpretation

The application shows why statistical equilibrium is an ensemble idea. A hypothetical microscope would see continuing jumps, while a macroscopic monitor would see stable occupation fractions. The useful diagnostic is not whether motion occurs, but whether a preferred [[flujo_probabilidad]] remains between configurations.