## Ideal model

The ideal model treats a system with well-defined macrostates and a countable set of compatible microstates. [[entropia]] is interpreted as a logarithmic measure of [[numero_microestados]], not as visual disorder. The system is described as a collection of microscopic configurations admitted by the same macroscopic constraints. To compare two situations, the model uses [[delta_entropia]], built from [[numero_microestados_inicial]], [[numero_microestados_final]], and [[ratio_microestados]]. The constant [[k_boltzmann]] fixes the thermodynamic scale.

## Hypotheses

- Defined macrostate: if the macroscopic variables are not fixed, [[numero_microestados]] has no clear physical reference.
- Homogeneous counting: if [[numero_microestados_inicial]] and [[numero_microestados_final]] are counted with different rules, [[ratio_microestados]] compares incompatible objects.
- Accessible positive microstates: if [[numero_microestados]] is 0, no realizable macrostate exists for the definition.
- Comparable system: if the physical system itself changes, [[delta_entropia]] no longer represents a well-defined internal transition.
- Statistical regime: if only a few degrees of freedom exist, the thermodynamic reading of [[entropia]] may be dominated by fluctuations.

## Quantitative validity domain

The minimum domain requires [[numero_microestados]] > 0, [[numero_microestados_inicial]] > 0, and [[numero_microestados_final]] > 0. For a robust thermodynamic interpretation, [[numero_microestados]] should be much larger than 1, and the number of particles or degrees of freedom should be large, typically of order 10⁶ or more so relative fluctuations remain small. In macroscopic examples, systems near 10²³ particles justify a stable [[entropia]]. A comparison through [[ratio_microestados]] is reliable only when both macrostates belong to the same system and use the same counting granularity. Values of [[ratio_microestados]] between 10⁻³ and 10³ already produce detectable sign and scale changes in [[delta_entropia]], but they must not be read as linear [[entropia]] changes.

## Model failure signals

One failure signal appears when a negative, zero, or undefined [[numero_microestados]] is used. Another appears when the student compares microstates of different systems and obtains a meaningless [[delta_entropia]]. The model also fails when [[entropia]] is read as subjective visual disorder, such as “more mixed,” without specifying constraints. In nonequilibrium processes, the definition may need an extended model if comparable macrostates are not available.

## Extended or alternative model

One should move to a fuller statistical mechanics model when microstates are not equally probable, when discrete quantum energy levels matter, when particles interact strongly, or when the system is not at equilibrium. In those cases, probability distributions, Gibbs [[entropia]], or quantum formulations are used. Boltzmann definition remains the conceptual doorway, but simple counting of [[numero_microestados]] is no longer enough.


When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.
## Operational comparison

| Situation | Key magnitude | Suitable model | Main risk |
| Single well-counted macrostate | [[numero_microestados]] | Simple Boltzmann | Forgetting the logarithm |
| Transition between macrostates | [[delta_entropia]] | Boltzmann difference | Comparing different rules |
| Small system | [[entropia]] | Statistics with fluctuations | Overreading the trend |
| Non-equal probabilities | [[numero_microestados]] | Gibbs or probabilistic model | Counting without weights |