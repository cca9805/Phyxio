# Exam-type example


## Problem statement

A flat metal plate is kept at a high [[temperatura_superficie]] while an air stream passes over it with a lower [[temperatura_fluido]]. The plate has a known [[area]] and the test lasts for a [[tiempo]] of several minutes. Estimate [[diferencia_temperatura]], the [[potencia_termica]] delivered to the air, [[flujo_calor]], accumulated [[calor_transferido]], and [[resistencia_termica_conveccion]]. The [[coeficiente_conveccion]] must also be obtained from an experimental [[numero_nusselt]], using the air [[conductividad_termica_fluido]] and the plate [[longitud_caracteristica]].

## Data

The following quantities are known for this forced convection problem:

- [[temperatura_superficie]]: 80 °C
- [[temperatura_fluido]]: 25 °C
- [[area]]: 0.40 m²
- [[tiempo]]: 300 s
- [[numero_nusselt]]: 75
- [[conductividad_termica_fluido]]: 0.026 W m⁻¹ K⁻¹
- [[longitud_caracteristica]]: 0.50 m
- Unknowns: [[diferencia_temperatura]], [[coeficiente_conveccion]], [[potencia_termica]], [[flujo_calor]], [[calor_transferido]], and [[resistencia_termica_conveccion]]

## System definition

The physical system is the boundary between a hot plate and the air flowing over it. We do not model the entire interior of the plate or every air particle. Instead, we model the average thermal exchange at the exposed surface. [[temperatura_superficie]] represents the wall in contact with the fluid, and [[temperatura_fluido]] represents the air away from the thermal layer attached to the plate. [[area]] is the surface washed by the stream. [[longitud_caracteristica]] is taken as the plate dimension along the main flow direction because that scale controls thermal-layer development. [[tiempo]] converts thermal rate into accumulated energy.

## Physical model

The chosen model is average forced convection. [[coeficiente_conveccion]] is not given directly; it is obtained from [[numero_nusselt]], [[conductividad_termica_fluido]], and [[longitud_caracteristica]]. Then [[diferencia_temperatura]], [[potencia_termica]], [[flujo_calor]], [[calor_transferido]], and [[resistencia_termica_conveccion]] are calculated. The model uses these relations:

{{f:diferencia_temperatura_conveccion}}

{{f:ley_enfriamiento_newton_conveccion}}

{{f:flujo_calor_conveccion}}

{{f:flujo_potencia_area}}

{{f:calor_potencia_tiempo}}

{{f:resistencia_termica_conveccion}}

{{f:potencia_resistencia_conveccion}}

{{f:coeficiente_conveccion_nusselt}}

## Model justification

A moving air stream is specified, so forced convection is more appropriate than natural convection. A mean [[coeficiente_conveccion]] is acceptable because the question asks for a global estimate, not a point-by-point [[flujo_calor]] map. [[temperatura_superficie]] is treated as uniform, which is reasonable for a well-conducting metal plate under thermal control. [[temperatura_fluido]] is taken as the incoming air temperature before it warms near the surface. [[numero_nusselt]] incorporates the effect of motion without solving the full velocity field. [[resistencia_termica_conveccion]] is included because it gives an inverse reading and helps check whether the exchange magnitude is plausible.

## Symbolic solution

First, express the thermal difference between surface and fluid.

{{f:diferencia_temperatura_conveccion}}

From the correlation summarized by [[numero_nusselt]], obtain [[coeficiente_conveccion]].

{{f:coeficiente_conveccion_nusselt}}

With [[coeficiente_conveccion]], [[area]], and [[diferencia_temperatura]], calculate [[potencia_termica]].

{{f:ley_enfriamiento_newton_conveccion}}

[[flujo_calor]] can be obtained directly from [[diferencia_temperatura]] or by dividing [[potencia_termica]] by [[area]].

{{f:flujo_calor_conveccion}}

{{f:flujo_potencia_area}}

Accumulated energy follows from [[potencia_termica]] and [[tiempo]].

{{f:calor_potencia_tiempo}}

The boundary opposition is [[resistencia_termica_conveccion]], and it can recover [[potencia_termica]] from the same [[diferencia_temperatura]].

{{f:resistencia_termica_conveccion}}

{{f:potencia_resistencia_conveccion}}

## Numerical substitution

The [[diferencia_temperatura]] between 80 °C and 25 °C is 55 K.

The [[coeficiente_conveccion]] from the Nusselt correlation: multiplying 75 by 0.026 W m⁻¹ K⁻¹ and dividing by 0.50 m gives 3.9 W m⁻² K⁻¹.

Multiplying that [[coeficiente_conveccion]] by the [[area]] of 0.40 m² and the [[diferencia_temperatura]] of 55 K yields a [[potencia_termica]] of 85.8 W.

The [[flujo_calor]] per unit [[area]] is 214.5 W m⁻², obtained by dividing [[potencia_termica]] by [[area]] or by multiplying [[coeficiente_conveccion]] by [[diferencia_temperatura]].

The accumulated [[calor_transferido]] during the test is 85.8 W multiplied by 300 s, giving 25 740 J.

The [[resistencia_termica_conveccion]] of the boundary is the inverse of the product of [[coeficiente_conveccion]] and [[area]], giving 0.641 K W⁻¹. Dividing [[diferencia_temperatura]] by that value recovers the 85.8 W of [[potencia_termica]].

## Dimensional validation

[[coeficiente_conveccion]] has units W m⁻² K⁻¹. Multiplying it by [[area]] in m² and by [[diferencia_temperatura]] in K leaves W, equivalent to `[M L² T⁻³]`; therefore [[potencia_termica]] is dimensionally correct.

[[flujo_calor]] has units W m⁻², equivalent to `[M T⁻³]`.
[[calor_transferido]] is obtained as W times s, giving J, equivalent to `[M L² T⁻²]`.
[[resistencia_termica_conveccion]] has units K W⁻¹, and using it with [[diferencia_temperatura]] recovers W. The dimensional check preserves the physical meaning of each magnitude.

## Physical interpretation

The obtained [[potencia_termica]] indicates that the plate delivers energy to the air at a moderate rate. The exchange is not huge because the calculated [[coeficiente_conveccion]] is relatively low, consistent with a gentle stream or an unfavorable geometry. However, [[flujo_calor]] shows that each square metre supports a noticeable transfer due to the 55 K [[diferencia_temperatura]].

The accumulated [[calor_transferido]] during the test [[tiempo]] reaches several tens of kilojoules. This reminds us that a moderate thermal rate can still produce a significant total energy transfer if it persists. [[resistencia_termica_conveccion]] gives the inverse view: the air plate boundary still offers noticeable opposition. Faster cooling would require increasing [[coeficiente_conveccion]], increasing effective [[area]], or reducing incoming [[temperatura_fluido]].

# Real-world example


## Context

A common real case is the heat sink of a small electronic module inside a ventilated box. The chip generates [[potencia_termica]] and transfers energy to a finned metal plate. Fan-driven air has a [[temperatura_fluido]] close to the internal box air, while the heat-sink base reaches a higher [[temperatura_superficie]]. The effective [[area]] is not just the visible base: it includes the fin faces washed by the stream. [[longitud_caracteristica]] may be associated with fin height or spacing, depending on the correlation. The air [[conductividad_termica_fluido]] and [[numero_nusselt]] help estimate [[coeficiente_conveccion]] when it is not directly measured. This context is realistic because compact electronics often fail thermally before they fail electrically.

## Physical estimation

Assume [[temperatura_superficie]] of 60 °C, [[temperatura_fluido]] of 35 °C, effective [[area]] of 0.08 m², [[coeficiente_conveccion]] of 30 W m⁻² K⁻¹, and [[tiempo]] of 600 s. The approximate [[diferencia_temperatura]] is 25 K. Multiplying [[coeficiente_conveccion]] by [[area]] and [[diferencia_temperatura]] gives an estimated [[potencia_termica]] of 60 W. Dividing that by [[area]] yields a [[flujo_calor]] of 750 W m⁻². In ten minutes, [[calor_transferido]] reaches approximately 36 000 J. The [[resistencia_termica_conveccion]] is about 0.42 K W⁻¹.

## Interpretation

The estimate explains why fins and fans are effective: they increase [[area]] and [[coeficiente_conveccion]] together. If the fan fails, effective [[numero_nusselt]] decreases, [[flujo_calor]] falls, and [[temperatura_superficie]] may rise quickly. The calculation does not replace a thermal test, but it guides design before building the prototype, and it highlights which physical change gives the largest improvement.