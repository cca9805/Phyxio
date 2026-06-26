# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: probabilidad-y-ensembles
# Target response file: ejemplos.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Exam-type example
## Problem statement
An [[ensemble]] contains ideal copies of a system with three [[estado_microscopico]] compatible with the same [[restriccion_macroscopica]]. The states have relative statistical weights 1, 2, and 7. The observable quantity has values 0 J, 4 J, and 10 J. Determine the [[probabilidad_estado]] of each state, the [[valor_medio_ensemble]], and a reading of the [[fluctuacion_ensemble]].

## Data
- [[peso_estadistico]] of state 1: 1
- [[peso_estadistico]] of state 2: 2
- [[peso_estadistico]] of state 3: 7
- [[valor_estado]] of state 1: 0 J
- [[valor_estado]] of state 2: 4 J
- [[valor_estado]] of state 3: 10 J
- Ideal [[numero_copias_ensemble]]: very large

## System definition
The system is not one single copy, but an [[ensemble]] of equivalent copies. They all share the same [[restriccion_macroscopica]], so the three states can be compared. Each [[estado_microscopico]] receives an occupation fraction given by its [[probabilidad_estado]]. The physical question is how a population of copies, with unequal weights, becomes a macroscopic prediction for the observable represented by [[valor_estado]].

## Physical model
We use a discrete ensemble model. The [[peso_estadistico]] values are relative and must be normalized before they can be read as physical probabilities. Then the [[valor_medio_ensemble]] is computed as a weighted mean. The [[fluctuacion_ensemble]] measures whether individual microscopic values lie close to or far from the mean.

## Model justification
The model is appropriate because all states belong to the same macroscopic preparation and all observable values have the same unit. We are not studying time evolution or interactions between copies, but the statistical distribution of ideal copies. Since the weights are positive, they can be converted into a normalized distribution. If they were negative or if states belonged to different constraints, the model would fail.

## Symbolic solution
First convert relative weights into normalized probabilities.

{{f:peso_ensemble_normalizado}}

Then check that all probabilities distribute the whole population.

{{f:normalizacion_ensemble}}

The observable mean is computed by weighting every [[valor_estado]].

{{f:promedio_ensemble}}

To estimate spread, use the ensemble variance relation.

{{f:varianza_ensemble}}

The frequency interpretation connects probabilities with ideal copies through:

{{f:probabilidad_frecuencia_ensemble}}

## Numerical substitution
The sum of weights is 1 + 2 + 7 = 10. The probabilities are 0.1, 0.2, and 0.7. The [[valor_medio_ensemble]] is 0.1·0 J + 0.2·4 J + 0.7·10 J = 7.8 J. For spread, the weighted squared deviations are 0.1·(0 - 7.8)², 0.2·(4 - 7.8)², and 0.7·(10 - 7.8)². The variance is about 12.36 J², and the [[fluctuacion_ensemble]] is about 3.5 J.

## Dimensional validation
The [[probabilidad_estado]] is dimensionless because it comes from normalized [[peso_estadistico]]. The [[valor_medio_ensemble]] keeps the unit of [[valor_estado]], so it is expressed in J. The variance has unit J², and [[fluctuacion_ensemble]] returns to J after taking the square root. No incompatible quantities have been added, because all microscopic values represent the same observable.

## Physical interpretation
The result means that most copies of the [[ensemble]] occupy the third [[estado_microscopico]], because its [[probabilidad_estado]] is 0.7. This indicates why the [[valor_medio_ensemble]] lies close to 10 J, although it does not reach that value because some copies still occupy lower [[valor_estado]] states. This implies that the average is a population statement, not a description of every copy. Therefore an individual copy can differ from 7.8 J, and the [[fluctuacion_ensemble]] tells how strongly it may differ. Physically, a larger occupation of high-value states increases the mean, while broader occupation increases spread. The prediction depends on normalized weights, not on raw weights alone.

# Real-world example
## Context
In a simplified molecular simulation, many configurations compatible with the same effective temperature and geometry are treated as an [[ensemble]]. Each [[estado_microscopico]] has a potential energy or another observable value. Instead of choosing one configuration as representative, the simulation estimates a distribution of [[probabilidad_estado]] and computes a [[valor_medio_ensemble]].

## Physical estimation
Suppose 10⁵ configurations are generated under the same [[restriccion_macroscopica]]. If about 2·10⁴ fall into one group of states, the probability estimate is of order 0.2. If the observable scale runs from 1 eV to 3 eV, an approximate [[valor_medio_ensemble]] near 2 eV is a reasonable value. If the [[fluctuacion_ensemble]] has magnitude close to 1 eV, the average does not describe a narrow cloud; it describes a broad microscopic population. On this scale, increasing [[numero_copias_ensemble]] improves the frequency estimate, but it does not remove real physical spread. The order of the fluctuation therefore matters as much as the mean.

## Interpretation
The ensemble converts many simulated configurations into one macroscopic prediction without pretending that all copies are identical. Probabilities measure statistical occupation, the mean gives the expected observable, and the fluctuation warns how much individual copies vary. When a constraint changes, such as volume or available energy, the same ensemble is no longer being compared, so weights, probabilities, averages, and spreads must be recalculated.

