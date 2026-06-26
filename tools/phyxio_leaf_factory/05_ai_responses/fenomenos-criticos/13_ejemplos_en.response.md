# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: fenomenos-criticos
# Target response file: ejemplos.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Exam-type example
## Problem statement
A magnetic material has a [[temperatura_critica]] of 300 K. In the ordered phase, the [[parametro_de_orden]] is measured at temperatures close to the critical point. Estimate the expected [[parametro_de_orden]] at 297 K, the trend of [[susceptibilidad]], and the growth of [[longitud_correlacion]]. Use a continuous critical model with given amplitudes and exponents.

## Data
- [[temperatura]]: 297 K
- [[temperatura_critica]]: 300 K
- [[amplitud_critica]]: 1.20 order-parameter units
- [[exponente_critico_beta]]: 0.33
- [[amplitud_susceptibilidad]]: 0.80 response units
- [[exponente_critico_gamma]]: 1.24
- [[amplitud_correlacion]]: 0.30 nm
- [[exponente_critico_nu]]: 0.63

## System definition
The system is a macroscopic sample undergoing a continuous transition as [[temperatura]] changes. It is studied below [[temperatura_critica]], where the ordered phase exists and [[parametro_de_orden]] is nonzero. The sample is assumed homogeneous and large enough that the calculated [[longitud_correlacion]] does not reach the real system size.

## Physical model
The critical-scaling model is used. [[temperatura_reducida]] measures the relative distance from the critical point. The [[parametro_de_orden]] decreases as a power of this distance, while [[susceptibilidad]] and [[longitud_correlacion]] grow when the system approaches [[temperatura_critica]]. External fields and finite-size rounding are neglected.

## Model justification
The transition is treated as continuous because no latent heat or abrupt jump is stated. The measurement is only 3 K below [[temperatura_critica]], so the relative distance is small. This makes critical exponents a reasonable first estimate. Studying [[parametro_de_orden]], [[susceptibilidad]], and [[longitud_correlacion]] together also checks coherence: order should weaken, response should increase, and spatial correlations should extend.

## Symbolic solution
First compute the critical distance:

{{f:temperatura_reducida_critica}}

Then estimate the order in the ordered phase:

{{f:parametro_orden_ley_critica}}

The response is evaluated with:

{{f:susceptibilidad_critica}}

The spatial scale of fluctuations is obtained from:

{{f:longitud_correlacion_critica}}

The same small [[temperatura_reducida]] controls three physical readings: disappearance of order, increased response, and longer-range correlation.

## Numerical substitution
For [[temperatura]] of 297 K and [[temperatura_critica]] of 300 K, [[temperatura_reducida]] is about -0.01. Its absolute value is 0.01. The estimated [[parametro_de_orden]] is 1.20 times 0.01 to the power 0.33, about 0.26 order units. [[susceptibilidad]] is of order 0.80 times 0.01 to the power -1.24, around 240 response units. [[longitud_correlacion]] is about 0.30 nm times 0.01 to the power -0.63, around 5.5 nm.

## Dimensional validation
[[temperatura_reducida]] is dimensionless because it compares temperatures. [[parametro_de_orden]] keeps the units set by [[amplitud_critica]]. [[susceptibilidad]] keeps the units of [[amplitud_susceptibilidad]], since the power acts on a dimensionless variable. [[longitud_correlacion]] remains in nanometers because [[amplitud_correlacion]] carries length units. The powers change scale, not physical dimension.

## Physical interpretation
The result means the system is close to the critical point but still on the ordered side. The [[parametro_de_orden]] remains nonzero, which indicates that macroscopic organization has not disappeared; however, its reduced value shows that the ordered phase is fragile. The large [[susceptibilidad]] means that a small perturbation can trigger a strong collective response. This implies that many regions are no longer acting independently. The [[longitud_correlacion]] of several nanometers physically indicates that fluctuations extend over many microscopic units. Therefore, the three trends depend on the same critical distance: as [[temperatura]] approaches [[temperatura_critica]], order decreases, response increases, and correlations grow.

# Real-world example
## Context
A materials laboratory studies a ferromagnetic alloy for sensors. Near [[temperatura_critica]], high [[susceptibilidad]] can improve sensitivity, but it can also amplify thermal noise and residual fields. The aim is not to operate exactly at the critical point, but to choose a window where response is strong and reproducible.

## Physical estimation
Take an operating point with |[[temperatura_reducida]]| of approximate order 0.02. If [[amplitud_correlacion]] is about 0.25 nm and [[exponente_critico_nu]] is near 0.6, a reasonable value for [[longitud_correlacion]] is on the scale of a few nanometers. This estimate has the right magnitude: it is much larger than an atomic spacing, but still far smaller than a macroscopic device. If the order of |[[temperatura_reducida]]| is reduced to 0.005, the response may grow strongly, but saturation can appear. That saturation is a useful approximate warning that sample size, grains, impurities, or temperature resolution are limiting the ideal critical law.

## Interpretation
The application shows the double face of criticality. Large [[susceptibilidad]] makes weak perturbations detectable, but it also amplifies noise. A growing [[longitud_correlacion]] means the material responds through correlated domains, not isolated atoms. Engineering use requires a compromise: close enough to [[temperatura_critica]] to exploit the response, but not so close that the behavior becomes unstable or irreproducible.

A real lab report would repeat measurements on both sides of [[temperatura_critica]] to check that the trend is not produced by one isolated reading. The same data set should also be plotted on logarithmic axes, because a stable slope is the practical signature that the chosen interval really behaves critically rather than merely curving near the transition. If the fitted [[exponente_critico_gamma]] changes strongly when one point is removed, the estimate should be reported as provisional rather than universal. carefully. in practice.

