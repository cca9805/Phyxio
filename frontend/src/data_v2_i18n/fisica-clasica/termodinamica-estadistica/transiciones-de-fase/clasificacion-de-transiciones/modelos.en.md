## Ideal model

The ideal model treats each phase transition as a change between well-defined equilibrium states. The main control variable is [[temperatura]], and the relevant region is centered on [[temperatura_critica]]. The stable phase is identified by comparing [[energia_libre_gibbs]], while [[parametro_de_orden]] indicates whether the phases differ in internal organization or symmetry. The purpose is not to describe every microscopic pathway, but to recognize whether the data show [[calor_latente]], [[salto_entropia]], [[salto_parametro_de_orden]], or a continuous critical law.

## Hypotheses

- The system remains close to thermodynamic equilibrium. If not, hysteresis can be mistaken for a true discontinuity.
- The [[temperatura_critica]] is well defined. If impurities or finite size spread the transition over a wide interval, the classification must include uncertainty.
- [[energia_libre_gibbs]] is the correct potential. If pressure or composition are not controlled, another potential may be needed.
- The chosen [[parametro_de_orden]] separates the phases. If it does not, zero [[salto_parametro_de_orden]] does not prove continuity.
- Measurements of [[calor_latente]] and [[salto_entropia]] have enough resolution. Otherwise a weak first-order transition may look continuous.

## Quantitative validity domain

The analysis is reliable when |[[temperatura]] - [[temperatura_critica]]|/[[temperatura_critica]] < 10⁻¹ for transition-region studies, but not so close that noise dominates. For first order behavior, an operational criterion is [[calor_latente]] > 10² J/mol or [[salto_entropia]] > 1 J/(mol·K), always compared with instrumental resolution. For critical behavior, the law involving [[exponente_critico_beta]] is typically used in 10⁻⁴ < |[[temperatura]] - [[temperatura_critica]]|/[[temperatura_critica]] < 10⁻¹. A [[salto_parametro_de_orden]] must clearly exceed measurement uncertainty.

## Model failure signals

The model fails when curves strongly depend on sweep rate, when long-lived metastable coexistence appears, when [[parametro_de_orden]] is not reproducible, or when [[temperatura_critica]] shifts with thermal history. It also fails when classification is attempted from a final image only. Absence of [[calor_latente]] is not sufficient if calorimetry cannot resolve small signals. Likewise, a visually abrupt change does not prove first order without [[salto_entropia]] or a discontinuity in derivatives of [[energia_libre_gibbs]].

## Extended or alternative model

When fluctuations dominate, the simple thermodynamic classification should be extended with critical scaling and exponents. If nucleation, supercooling, or domain growth controls the observation, a kinetic model is required. For transitions with complex symmetry, [[parametro_de_orden]] may be vector, tensor, or multicomponent, although this leaf uses a scalar version. In disordered materials, it may be more accurate to describe a rounded transition or a crossover.


When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.
## Operational comparison

| Situation | Dominant signal | Practical classification |
| Finite [[calor_latente]] and finite [[salto_entropia]] | Energy exchanged during coexistence | First order |
| Finite [[salto_parametro_de_orden]] | Abrupt change of organization | Usually first order |
| No [[calor_latente]], continuous [[parametro_de_orden]] | Critical law with [[exponente_critico_beta]] | Continuous or critical |
| Rounded signals from finite size | Sample and resolution dependence | Inconclusive diagnosis |
| Strong hysteresis | Kinetics dominates observation | Extended model required |