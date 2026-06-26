# Exam-type example


## Problem statement

An isolated system can be found in two comparable macrostates. In the initial macrostate there are [[numero_microestados_inicial]] compatible microstates. In the final macrostate, after an internal constraint is removed, there are [[numero_microestados_final]] compatible microstates. Calculate the sign and approximate value of [[delta_entropia]] if the number of final microstates is one million times the initial number. Explain what the result means according to Boltzmann definition and why it should not be interpreted as a visual measure of disorder.

## Data

- Microstate ratio: [[ratio_microestados]] of 10⁶
- Boltzmann constant: [[k_boltzmann]] of 1.38 · 10⁻²³ J/K
- System: same physical system before and after
- Comparison: initial macrostate to final macrostate
- Requested magnitude: [[delta_entropia]]

## System definition

The system is a collection of particles described by common macroscopic variables before and after the change. We are not comparing two different gases or two different counting rules. The transition only removes an internal restriction, so [[numero_microestados_final]] and [[numero_microestados_inicial]] belong to the same descriptive space. This is essential: [[delta_entropia]] does not measure what the system looks like, but how compatible multiplicity changes. The boundary of the system remains fixed, and the comparison focuses on how many additional microscopic configurations become accessible.

## Physical model

We use Boltzmann statistical model for comparable macrostates. [[entropia]] is calculated from the logarithm of [[numero_microestados]], and [[delta_entropia]] is obtained from [[ratio_microestados]]. We do not need the separate values of [[numero_microestados_final]] and [[numero_microestados_inicial]] if their quotient is known. The model assumes that microstates are counted with the same physical granularity and that all counts are positive.

## Model justification

Boltzmann definition is appropriate because the problem does not ask for the detailed trajectory of each particle. It asks how a macrostate is related to microscopic multiplicity. The key datum is [[ratio_microestados]], which compares how many times statistical accessibility increases. Since the system is the same before and after, comparing [[numero_microestados_final]] with [[numero_microestados_inicial]] is meaningful. Also, a one-million-fold increase indicates a statistical scale change, not a linear change in [[entropia]]. The logarithm converts that multiplicative factor into an additive [[entropia]] change.

## Symbolic solution

The absolute Boltzmann definition provides the conceptual basis:

{{f:entropia_boltzmann}}

For the change between two macrostates, we use directly:

{{f:diferencia_entropia_boltzmann}}

The useful variable is [[ratio_microestados]], formed by [[numero_microestados_final]] divided by [[numero_microestados_inicial]]. If this quotient is greater than one, the logarithm is positive and [[delta_entropia]] is positive. Therefore the sign can be decided before numerical substitution: the final macrostate allows more compatible microscopic configurations.

## Numerical substitution

For [[ratio_microestados]] equal to 10⁶, the natural logarithm is approximately 13.8. Therefore [[delta_entropia]] is of order 13.8 times [[k_boltzmann]]. Using [[k_boltzmann]] equal to 1.38 · 10⁻²³ J/K gives an approximate [[delta_entropia]] of 1.9 · 10⁻²² J/K. This is small because the example represents a microscopic or mesoscopic comparison. In macroscopic systems, multiplicity factors accumulated across many particles produce measurable thermodynamic [[entropia]] values.

## Dimensional validation

[[ratio_microestados]] has no units because it compares two counts of the same kind. The logarithm of a dimensionless number is also dimensionless. Therefore the dimension of [[delta_entropia]] comes from [[k_boltzmann]], whose units are J/K. The final result has [[entropia]] units. This check catches a common error: one cannot take the logarithm of a dimensional quantity or of a direct subtraction of microstate counts.

## Physical interpretation

The positive result means that the final macrostate has more accessible microstates than the initial macrostate. It indicates that the same macroscopic description can be realized in many more microscopic ways after the constraint is removed. This implies a positive [[delta_entropia]], therefore the statistical accessibility of the final state is larger. Physically, the system is not being judged by visual disorder; its [[entropia]] depends on the count of compatible configurations. Increasing [[numero_microestados]] by a factor of one million increases [[entropia]] only logarithmically, which means the graph rises but flattens. The value of a few tens of [[k_boltzmann]] indicates a large multiplicity change on a microscopic scale, not yet a large macroscopic [[entropia]].

# Real-world example


## Context

Consider a large molecule with several internal arrangements accessible at a given energy. A constrained conformation may have few compatible internal configurations, while a flexible conformation may have many more. Even if the individual microconfigurations are not observed directly, the change in [[numero_microestados]] affects the relative statistical weight of the macrostates.

## Physical estimation

Suppose the flexible state has a [[ratio_microestados]] of 10³ compared with the constrained state. The estimate uses the order of the logarithm: the natural logarithm of 10³ is approximate to 6.9, so the [[entropia]] change is about 6.9 times [[k_boltzmann]] per entity considered. This scale is useful because a factor of one thousand in microstates does not create one thousand [[entropia]] units. The magnitude of [[delta_entropia]] is a reasonable value for a microscopic conformational comparison. For many similar entities, the contributions add, and the total effect can become thermodynamically relevant.

## Interpretation

This application shows why Boltzmann definition is powerful: it allows macroscopic reasoning without listing every microstate. If a macrostate has larger [[numero_microestados]], it carries more statistical weight under the same constraints. [[entropia]] does not reward visual disorder; it measures the breadth of the compatible configuration set. The central question is answered by the logarithmic connection between [[entropia]] and accessible microstates: more possibilities increase [[entropia]], but each equal multiplicative factor contributes the same additive amount.