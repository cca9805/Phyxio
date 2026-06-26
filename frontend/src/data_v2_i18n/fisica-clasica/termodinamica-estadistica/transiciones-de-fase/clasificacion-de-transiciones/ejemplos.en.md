# Exam-type example


## Problem statement

A material undergoes a transition near 320 K. In a constant-pressure experiment, a molar energy exchange is measured during the phase change, and a structural quantity distinguishing the two phases is also recorded. The goal is to decide whether the transition should be classified as first order or continuous, using thermodynamic discontinuities and the behavior of [[parametro_de_orden]].

## Data

- [[temperatura_critica]]: 320 K
- measured molar [[calor_latente]]: 2.4 kJ/mol
- [[parametro_de_orden]] just below [[temperatura_critica]]: 0.80
- [[parametro_de_orden]] just above [[temperatura_critica]]: 0.10
- experimental uncertainty of [[parametro_de_orden]]: 0.03
- [[temperatura]] sweep: from about 315 K to 325 K

## System definition

The system is a macroscopic sample undergoing a thermal sweep around [[temperatura_critica]]. The energy exchange is reported per mole, and the sample is assumed to reach states close to equilibrium at each measured point. The classification does not depend only on [[temperatura]], but on the combined evidence from [[calor_latente]], [[salto_entropia]], [[parametro_de_orden]], and [[salto_parametro_de_orden]]. The [[energia_libre_gibbs]] is treated as the appropriate thermodynamic potential for comparing phases under the experimental conditions.

## Physical model

The transition is interpreted through thermodynamic classification. If finite [[calor_latente]] and finite [[salto_entropia]] occur at [[temperatura_critica]], the transition is first order. If no latent heat is present and [[parametro_de_orden]] vanishes continuously, a critical law is investigated. In this data set there is finite energy exchange and a clear difference between the values of [[parametro_de_orden]] on the two sides of the transition.

## Model justification

The model is appropriate because the question concerns discontinuities, not the microscopic kinetics of transformation. [[calor_latente]] indicates energy exchanged during the transition. [[salto_parametro_de_orden]] directly compares internal organization before and after crossing [[temperatura_critica]]. The uncertainty of [[parametro_de_orden]] is much smaller than the observed difference, so the jump is unlikely to be noise. If the sweep showed strong hysteresis or sweep-rate dependence, a kinetic model would be needed, but the given data support an initial thermodynamic classification.

## Symbolic solution

First relate [[calor_latente]] to [[salto_entropia]] at [[temperatura_critica]]:

{{f:salto_entropia_latente}}

Then compute [[salto_parametro_de_orden]] between the values in the two phases:

{{f:salto_parametro_orden}}

Finally apply the classification criterion based on derivatives of [[energia_libre_gibbs]]:

{{f:criterio_derivada_energia_libre}}

If the transition were continuous, [[parametro_de_orden]] would follow a critical scaling law governed by [[exponente_critico_beta]] and [[amplitud_critica]]:

{{f:exponente_parametro_orden}}

If [[calor_latente]] is nonzero, there is an entropy discontinuity. If [[salto_parametro_de_orden]] is larger than the uncertainty, internal organization also changes abruptly.

## Numerical substitution

For the molar entropy jump, use the ratio between [[calor_latente]] and [[temperatura_critica]]:

[[salto_entropia]] ≈ 7.5 J/(mol·K), obtained by dividing 2400 J/mol by 320 K.

For the order parameter:

[[salto_parametro_de_orden]] ≈ 0.80 - 0.10 = 0.70.

Because 0.70 is far larger than the uncertainty 0.03, the jump is experimentally significant. The simultaneous presence of molar [[calor_latente]] and finite [[salto_parametro_de_orden]] points to a first-order transition. The [[orden_de_transicion]] is assigned from the discontinuity in a derivative of [[energia_libre_gibbs]].

## Dimensional validation

Molar [[calor_latente]] has units J/mol. Dividing it by [[temperatura_critica]] in K gives J/(mol·K), which is the correct unit for molar [[salto_entropia]]. The [[parametro_de_orden]] may be dimensionless or dimensional depending on the physical system; in this example it is compared in the same unit on both sides, so [[salto_parametro_de_orden]] keeps the dimension of [[parametro_de_orden]]. The classification does not add incompatible quantities: each magnitude is used as a separate physical signal.

## Physical interpretation

The result means that the system does not reorganize through a smoothly critical change, but through a transformation with finite energy exchange. The measured [[calor_latente]] indicates that, at [[temperatura_critica]], part of the energy goes into changing the phase rather than simply increasing [[temperatura]]. This implies a finite [[salto_entropia]], so the number of accessible configurations changes abruptly between the two phases. The large [[salto_parametro_de_orden]] means that internal organization also changes discontinuously. Therefore, the first-order classification depends on two independent signatures: thermodynamic discontinuity and structural discontinuity. Physically, this is stronger evidence than visual appearance alone, because the diagnosis connects energy, entropy, and order.

# Real-world example


## Context

A materials laboratory studies a functional alloy that changes structure near 250 K. The goal is not only to measure the [[temperatura]] at which it changes, but also to decide whether the transition provides useful [[calor_latente]] for thermal storage or whether it is a continuous transition with critical sensitivity. Differential calorimetry is measured together with a structural signal proportional to [[parametro_de_orden]].

## Physical estimation

Assume that the integrated calorimetric signal gives [[calor_latente]] of approximate value 1.2 kJ/mol and that [[temperatura_critica]] is about 250 K. Then [[salto_entropia]] has order 1200/250, or roughly 4.8 J/(mol·K), which is a reasonable value on the scale of laboratory calorimetry. If [[parametro_de_orden]] changes from 1.0 to 0.2 within less than 0.5 K, the estimated [[salto_parametro_de_orden]] is large compared with an approximate uncertainty of 0.02. This magnitude and [[temperatura]] scale indicate a concentrated transition, so the material may store energy efficiently only in a narrow thermal window.

## Interpretation

The classification constrains practical use. If the transition is first order, the alloy may be useful when one wants energy exchange concentrated near [[temperatura_critica]], but it may also show hysteresis and cycling fatigue. If it were continuous, there would be no comparable [[calor_latente]], although critical sensitivity could still be technologically interesting. In the proposed alloy, the coexistence of [[salto_entropia]] and [[salto_parametro_de_orden]] indicates that performance depends on controlling the thermal cycle, not merely on selecting a convenient [[temperatura_critica]]. The real engineering question therefore depends physically on both the thermodynamic class and the stability of repeated transitions.