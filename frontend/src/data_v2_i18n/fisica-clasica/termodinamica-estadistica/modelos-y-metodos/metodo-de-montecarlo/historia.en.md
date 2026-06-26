## Historical problem

The historical problem behind the Monte Carlo method was the practical impossibility of computing many physical averages by direct enumeration. In systems with many particles, the number of possible states grows enormously. Calculating a mean by visiting every case was like trying to count every spark in a turbulent fire. Physics needed a way to estimate observables while keeping control over error.

## Prior conceptual difficulty

Before random sampling became a trusted scientific tool, it seemed odd that randomness could produce reliable information. The key difficulty was separating an accidental sample from a statistical average. One [[valor_muestra]] is not enough, but many values organized through [[numero_muestras]], [[varianza_muestral]], and [[error_estandar]] can produce a testable prediction.

## What changed

The change was the realization that a well-designed random sample can represent a region of state space. The [[estimador_montecarlo]] does not promise absolute exactness; it gives an approximation with quantified uncertainty. With rules such as Metropolis, [[probabilidad_aceptacion]] introduced physical criteria tied to [[energia_estado]], [[temperatura]], and [[constante_boltzmann]], so sampling could respect thermal distributions.

## Impact on physics

Monte Carlo transformed computational physics. It made it possible to study liquids, solids, magnetic systems, particle models, and statistical problems where direct integration was impossible. It also changed how results are reported: a number without [[error_estandar]] is incomplete when the result depends on sampling.

## Connection with modern physics

Today the method connects statistical thermodynamics, molecular simulation, Bayesian inference, and materials physics. Its modern interpretation requires reading the mean, the uncertainty, and the quality of sampling as one physical-computational object.