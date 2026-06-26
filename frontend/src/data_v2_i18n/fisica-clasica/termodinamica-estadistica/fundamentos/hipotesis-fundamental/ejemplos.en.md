# Exam-type example


## Problem statement

An isolated system has fixed [[energia_total]], fixed [[volumen]], and fixed [[numero_particulas]]. Inside the allowed energy window, 12 accessible microstates are identified. Three produce macrostate A and nine produce macrostate B. Assign the [[probabilidad_microestado]], compare the macrostates, read the [[entropia]] implication, and decide whether a proposed non-uniform distribution respects the fundamental hypothesis.

## Data

- [[numero_microestados_accesibles]]: 12
- [[multiplicidad_macroestado]] of A: 3
- [[multiplicidad_macroestado]] of B: 9
- [[energia_total]]: constant during the process
- [[volumen]]: constant
- [[numero_particulas]]: constant
- Proposed distribution: one microstate has twice the probability of another

## System definition

The system is treated as isolated: it exchanges no energy or particles, and its walls keep [[volumen]] fixed. The accessible set is therefore defined by fixed macroscopic restrictions. We do not describe the time path of each particle; we describe the statistical assignment over compatible microstates. Macrostates A and B are not individual microstates. They are groups with different [[multiplicidad_macroestado]].

## Physical model

The model is microcanonical. The fundamental hypothesis assigns equal [[probabilidad_microestado]] to all accessible microstates. The probability of a macrostate is obtained by summing the individual probability of every microstate inside it. The [[entropia]] is interpreted as a measure of multiplicity, not as visual disorder.

## Model justification

The model is justified because [[energia_total]], [[volumen]], and [[numero_particulas]] are fixed, and no physical criterion is given that distinguishes one accessible microstate from another. If a barrier, extra conservation law, or preparation bias existed, the accessible set would need revision and [[desbalance_probabilidad]] should be measured. Without that extra information, unequal assignment introduces unsupported information.

## Symbolic solution

First apply the microcanonical postulate.

{{f:postulado_equiprobabilidad_microcanonica}}

Then require the accessible probabilities to exhaust the full statistical population.

{{f:normalizacion_microestados_accesibles}}

To compare A and B, use the multiplicity of each macrostate.

{{f:probabilidad_macroestado_desde_multiplicidad}}

The [[entropia]] reading associated with the total count follows Boltzmann's relation.

{{f:entropia_boltzmann_microcanonica}}

Finally, a non-uniform distribution is compared with ideal equiprobability.

{{f:desbalance_frente_equiprobabilidad}}

## Numerical substitution

With 12 accessible microstates, the ideal [[probabilidad_microestado]] of each one is 1/12, approximately 0.083. Macrostate A contains 3 microstates, so its probability is 3/12 = 0.25. Macrostate B contains 9 microstates, so its probability is 9/12 = 0.75. The probability ratio B to A is 3. If a proposed distribution gives one microstate twice the probability of another without an added physical constraint, the [[desbalance_probabilidad]] is not compatible with the ideal model.

## Dimensional validation

The [[probabilidad_microestado]] is dimensionless, and [[multiplicidad_macroestado]] is also a pure count. The logarithm in [[entropia]] acts on a dimensionless number, so the final dimension comes from [[constante_boltzmann]]. Therefore [[entropia]] has units of J/K. The [[energia_total]] is not calculated here, but it acts as an accessibility constraint and keeps the dimension of energy.

## Physical interpretation

The result means that the fundamental hypothesis does not claim that every macrostate is equally likely. It indicates that each accessible microstate has the same [[probabilidad_microestado]], while a macrostate may collect many such equal contributions. This implies that macrostate B is more probable because its [[multiplicidad_macroestado]] is larger, therefore it contains more microscopic realizations under the same constraints. Physically, this depends on counting compatible microstates rather than favoring one visible arrangement. If a single microstate is privileged without a physical cause, the [[desbalance_probabilidad]] increases and the answer decreases in consistency with the microcanonical hypothesis.

# Real-world example


## Context

Consider a simplified gas in an isolated box. The box keeps [[volumen]] fixed, the molecule count fixes [[numero_particulas]], and the available energy fixes [[energia_total]]. Many microscopic configurations produce a visually uniform gas. Far fewer configurations produce a strong concentration in one corner. The fundamental hypothesis gives equal weight to each accessible microstate, but the uniform-looking macrostate usually groups vastly more microstates.

## Physical estimation

As an order-of-magnitude estimate, suppose the uniform macrostate groups approximately 10^8 microstates while the concentrated macrostate groups about 10^2. The probability ratio is of order 10^6. This estimate is approximate but physically reasonable because the scale comes from [[multiplicidad_macroestado]], not from a special individual weight. Each microstate keeps the same [[probabilidad_microestado]], yet the macrostate probability grows with the count. The magnitude of [[entropia]] changes logarithmically, so enormous multiplicity ratios become manageable thermodynamic values. A large [[desbalance_probabilidad]] would be a reasonable warning that the system is not equilibrated or not truly isolated.

## Interpretation

The real example shows that equilibrium is not a magical preference for smooth-looking states. It is the statistical consequence of many microscopic realizations producing the same macroscopic appearance. The hypothesis separates individual microstate fairness from macrostate dominance. A rare-looking macrostate is not forbidden; it is simply supported by fewer accessible microstates.

This counting logic generalizes beyond gas molecules to any isolated system with a discrete or continuous accessible set. The [[constante_boltzmann]] converts the logarithm of [[numero_microestados_accesibles]] into an [[entropia]] value with physical energy units divided by temperature. That conversion connects abstract microstate counting to measurable thermodynamic quantities. A gas confined to one corner has far fewer accessible configurations under the same [[energia_total]], so its [[entropia]] is much lower, even though that configuration is not impossible, just improbable under the fundamental hypothesis of uniform [[probabilidad_microestado]].