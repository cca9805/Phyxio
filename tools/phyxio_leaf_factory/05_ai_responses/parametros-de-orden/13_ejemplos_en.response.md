# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: parametros-de-orden
# Target response file: ejemplos.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Exam-type example
## Problem statement
A magnetic material is studied while cooling around its [[temperatura_critica]]. A normalized [[parametro_de_orden]] associated with spontaneous magnetization is measured. Above the transition, the mean value is compatible with zero. Below it, the data seem to follow a continuous law. Decide whether the [[parametro_de_orden]] identifies symmetry breaking, estimate its behavior near the transition, and check whether an appreciable [[salto_parametro_de_orden]] exists.

## Data
- [[temperatura_critica]]: 300 K
- measured [[temperatura]]: 294 K
- normalized [[parametro_de_orden]] at 294 K: 0.20
- estimated [[amplitud_critica]]: 1.0
- estimated [[exponente_critico_beta]]: 0.33
- uncertainty in [[parametro_de_orden]]: 0.01
- applied [[campo_conjugado]]: negligible during measurement
- qualitative [[susceptibilidad]]: increases near the transition

## System definition
The system is a homogeneous magnetic sample observed near its [[temperatura_critica]]. The ordered phase is identified with nonzero spontaneous magnetization, and the disordered phase with zero average magnetization in the absence of [[campo_conjugado]]. The [[parametro_de_orden]] is treated as normalized, so it is effectively dimensionless. All comparisons use the same sign convention, because two domains with opposite orientations should not be counted as different thermodynamic phases without additional evidence.

## Physical model
A continuous-transition model is used. The [[temperatura_reducida]] measures the relative distance from [[temperatura_critica]]. The [[parametro_de_orden]] gradually vanishes when the system approaches the transition from the ordered side. A [[salto_parametro_de_orden]] is not assumed; it is tested by comparing values on both sides with measurement uncertainty. The [[susceptibilidad]] is treated as a response to [[campo_conjugado]], not as a separate definition of the phase.

## Model justification
The model is appropriate because the [[parametro_de_orden]] above [[temperatura_critica]] is compatible with zero, while below it the value grows progressively. The applied [[campo_conjugado]] is negligible, so the signal can be interpreted as spontaneous order rather than forced alignment. If strong hysteresis or coexistence were observed, the analysis would focus on [[salto_parametro_de_orden]]. Here the central reading is the smooth emergence of order as [[temperatura]] is lowered.

## Symbolic solution
First locate the sample using [[temperatura_reducida]]:

{{f:temperatura_reducida_orden}}

Then describe the continuous vanishing of [[parametro_de_orden]] from the ordered phase:

{{f:ley_parametro_orden_continuo}}

To check discontinuity, compare values on both sides of the transition:

{{f:parametro_orden_diferencia_fases}}

If a small [[campo_conjugado]] were applied, the response would be interpreted through:

{{f:susceptibilidad_parametro_orden}}

## Numerical substitution
With [[temperatura]] equal to 294 K and [[temperatura_critica]] equal to 300 K, the signed relative distance is of order -0.02. The negative sign places the sample below the transition, on the ordered side according to the chosen convention. With [[amplitud_critica]] near 1 and [[exponente_critico_beta]] equal to 0.33, a [[parametro_de_orden]] near 0.2 is plausible. If the value above the transition is 0.00 ± 0.01 and no finite difference larger than several uncertainties appears, an actual [[salto_parametro_de_orden]] is not confirmed.

## Dimensional validation
Both [[temperatura]] and [[temperatura_critica]] are measured in kelvin, so their relative ratio gives a dimensionless [[temperatura_reducida]]. The [[parametro_de_orden]] is normalized in this example, so [[amplitud_critica]] is also interpreted as dimensionless. The [[exponente_critico_beta]] has no unit. The unit of [[susceptibilidad]] would depend on the unit chosen for [[campo_conjugado]], so a numerical value should not be reported unless that perturbation is specified.

## Physical interpretation
The result means that the [[parametro_de_orden]] genuinely identifies the phase because it is zero within uncertainty above [[temperatura_critica]] and finite below it. The negative [[temperatura_reducida]] indicates that the sample is on the ordered side; this implies that the measured value is not merely noise. Therefore, the absence of a large [[salto_parametro_de_orden]] favors a continuous transition. Physically, the material changes because its microscopic units choose a collective orientation, not because a new substance appears. The increasing [[susceptibilidad]] also indicates proximity to criticality, since the order depends strongly on any residual [[campo_conjugado]] and can increase or decrease under tiny perturbations.

# Real-world example
## Context
In a materials laboratory, a light magnetic alloy is tested for sensor use. Engineers want to know whether the phase change near 300 K is smooth, because an abrupt response would make calibration unstable. The [[parametro_de_orden]] is measured through a signal proportional to magnetization, [[temperatura]] is controlled, and external [[campo_conjugado]] is minimized.

## Physical estimation
Suppose the normalized signal changes from 0.30 to 0.15 as [[temperatura_reducida]] moves from about -0.05 to -0.01. This is an order 10^-1 variation, clearly above an approximate noise scale of 10^-2, so the magnitude is experimentally meaningful. If the value above [[temperatura_critica]] drops below 0.01, zero is a reasonable value for restored symmetry. An estimate in which [[susceptibilidad]] grows by a factor of 20 near the transition suggests a large response scale. This approximate reading is useful because it compares signal magnitude, noise order, and thermal distance rather than trusting one isolated value.

## Interpretation
The application shows why [[parametro_de_orden]] matters outside a textbook problem. It helps decide whether a material changes phase smoothly, whether the signal fades continuously, or whether a [[salto_parametro_de_orden]] appears. It also warns that a small [[campo_conjugado]] can bias the measurement exactly where [[susceptibilidad]] is largest. For sensor design, the absolute value is less important than the shape of the transition and the stability near [[temperatura_critica]].

