# Exam-type example


## Problem statement

An isolated system can be described by several macrostates compatible with the same restrictions. Macrostate A contains 2400 compatible microscopic configurations. The total accessible set under those restrictions contains 12000 configurations. Then A is compared with another macrostate B containing 9600 compatible configurations. Calculate the probability of A, the probability ratio of B relative to A, and the entropy change associated with going from A to B in terms of [[k_boltzmann]].

## Data

- [[numero_microestados_macro]]: 2400 microstates for macrostate A
- [[numero_microestados_total]]: 12000 accessible microstates
- [[numero_microestados_inicial]]: 2400 microstates
- [[numero_microestados_final]]: 9600 microstates
- [[k_boltzmann]]: Boltzmann constant
- Initial macrostate: A
- Final macrostate: B

## System definition

The system is considered isolated during the counting, so every microstate included in [[numero_microestados_total]] belongs to the same accessible space. Macrostates A and B are two possible coarse descriptions inside that same set. We are not comparing a system before and after changing external restrictions; we are comparing the statistical weight of two alternative macroscopic categories. Therefore [[numero_microestados_inicial]] and [[numero_microestados_final]] may be used in one ratio, and [[probabilidad_macroestado]] is interpreted as an accessibility fraction.

## Physical model

The model uses equiprobable microstates: every microscopic configuration compatible with the restrictions has the same initial statistical weight. The probability of a macrostate depends on how many microstates it contains relative to the accessible total. To compare two macrostates, the ratio between multiplicities is used, and the entropy reading converts that ratio into a logarithmic change through [[k_boltzmann]].

## Model justification

The model is appropriate because all data refer to the same system and no dynamic bias is given that would make some microstates more accessible than others. A and B are compared as alternative macrostates within a single set of restrictions. If the total changed between A and B, or if some microstates were blocked by a barrier, simple counting would not be valid. Here, however, the goal is to show how [[probabilidad_macroestado]] and [[ratio_probabilidades]] arise directly from multiplicity.

## Symbolic solution

First calculate the probability of macrostate A using the statistical fraction relation:

{{f:probabilidad_macroestado}}

The symbolic reading is that probability is obtained by dividing [[numero_microestados_macro]] by [[numero_microestados_total]]. Then compare B relative to A using the relative weight between macrostates:

{{f:peso_relativo_macroestados}}

The probability ratio matches the multiplicity ratio when both macrostates belong to the same accessible space. Finally, the entropy change associated with the change in statistical weight is read through:

{{f:probabilidad_entropia}}

Thus, [[delta_entropia]] expresses on a thermodynamic scale how much the probabilistic weight increases or decreases from the initial macrostate to the final macrostate.

## Numerical substitution

For A, the accessible fraction is 2400 divided by 12000. The result is [[probabilidad_macroestado]] of 0.20, meaning that macrostate A occupies 20 percent of the accessible microscopic space. To compare B with A, use 9600 divided by 2400. Therefore [[ratio_probabilidades]] is 4: macrostate B has four times the statistical weight of A. The entropy change is [[delta_entropia]] equal to [[k_boltzmann]] multiplied by the natural logarithm of 4. Numerically, that is approximately 1.386 [[k_boltzmann]].

## Dimensional validation

[[probabilidad_macroestado]] is dimensionless because it is obtained by dividing a number of microstates by another number of microstates. [[ratio_probabilidades]] is also dimensionless for the same reason: it compares two probabilities or two multiplicities. By contrast, [[delta_entropia]] has entropy units because the logarithm is dimensionless and the factor [[k_boltzmann]] supplies the physical unit. This validation prevents two common errors: assigning joules to a probability and treating [[delta_entropia]] as a simple percentage.

## Physical interpretation

The result means that macrostate A is not extremely rare, but it does not dominate the accessible space: it groups only one fifth of the compatible configurations. Macrostate B, because it has four times as many microstates, will be observed much more often if the system explores its possible states equiprobably. This indicates a statistical preference, and this implies that the final macrostate is favored by multiplicity rather than by a hidden force. Therefore the positive [[delta_entropia]] depends on the growth of microscopic compatibility. Physically, when [[numero_microestados_final]] increases relative to [[numero_microestados_inicial]], the macroscopic probability increases because more internal arrangements produce the same visible outcome.

# Real-world example


## Context

In a simple simulation of particles in two compartments, we want to know why a “nearly balanced distribution” appears much more often than a state with almost all particles on one side. Each macroscopic distribution can be realized by many microscopic assignments of particles. The balanced distribution has a much larger [[numero_microestados_macro]] than an extreme distribution, even though every individual microscopic configuration may have the same weight.

## Physical estimation

Suppose an extreme distribution has 20 compatible microstates and a balanced distribution has 1840 microstates within the same [[numero_microestados_total]]. Without calculating every molecular detail, the order of magnitude already shows a strong difference: [[ratio_probabilidades]] is approximately 1840 divided by 20, about 92. This estimate is a reasonable value because both counts belong to the same accessibility model. On this scale, the balanced macrostate occupies a much larger magnitude of statistical territory. The approximate comparison tells us that a simulation should show the balanced state far more often, not because it is forced, but because its statistical weight is larger.

## Interpretation

The simulation does not show that particles “seek” equilibrium. It shows that the equilibrium-looking macrostate has many microscopic representations. One particular balanced snapshot is not special, but the whole set of balanced snapshots is enormous. This means the observer repeatedly sees that macrostate because many hidden arrangements lead to the same visible description. [[delta_entropia]] increases when the comparison is translated into entropy language, and this indicates a larger statistical weight. The conclusion therefore depends on multiplicity: a common macrostate is common because it can hide many compatible microstates, not because each microstate has become individually more likely.