## Ideal model

The ideal conduction model treats a homogeneous layer crossed by heat in one main direction. The [[temperatura_caliente]] is maintained on one face and the [[temperatura_fria]] on the opposite face, so [[diferencia_temperatura]] drives thermal transfer. The [[conductividad_termica]] represents the material response, while [[area]] and [[espesor]] describe geometry. The model estimates [[potencia_termica]], [[flujo_calor]], [[calor_transferido]], [[gradiente_temperatura]], and [[resistencia_termica]] without adding internal convection or dominant radiation. It is especially useful as a first operational map because each quantity has a clear role before any numerical substitution is attempted.

## Hypotheses

- Homogeneous material: the consequence is that [[conductividad_termica]] is read as one property for the whole layer.
- Uniform thermal faces: the consequence is that [[temperatura_caliente]] and [[temperatura_fria]] represent each boundary adequately.
- One-dimensional conduction: the consequence is that [[espesor]] marks the main thermal path.
- Constant effective surface: the consequence is that [[area]] matches the real region crossed by heat.
- Steady state: the consequence is that [[potencia_termica]] and [[flujo_calor]] can be read as maintained rates.
- Controlled duration: the consequence is that [[tiempo]] turns the thermal rate into accumulated [[calor_transferido]].

## Quantitative validity domain

The model is reasonable if [[espesor]] > 0 m, [[area]] > 0 m², and [[conductividad_termica]] > 0 W/(m·K). For a simple linear reading, [[diferencia_temperatura]] < 100 K is preferable when material properties vary little with temperature. In common building envelopes, [[flujo_calor]] < 1000 W/m² helps avoid suspicious values. For an insulating layer, [[resistencia_termica]] > 0 K/W must increase when [[espesor]] increases.

## Model failure signals

The model fails when lateral losses, poor thermal contacts, cracks, moisture, internal convection, or dominant radiation appear. It also fails if [[temperatura_caliente]] and [[temperatura_fria]] change rapidly during the studied [[tiempo]]. Another warning sign is an enormous [[potencia_termica]] for an ordinary wall, or a [[gradiente_temperatura]] incompatible with the material and geometry.

## Extended or alternative model

When it is appropriate to switch to the extended model, thermal resistances in series, contact resistances, surface convection, and radiation are introduced. This is needed for real windows, multilayer walls, electronic heat sinks, and furnaces. In those cases, the total [[resistencia_termica]] no longer depends on a single layer, and [[potencia_termica]] is shared by several mechanisms.

## Operational comparison

| Situation | Ideal conduction model | Extended model |
|---|---|---|
| Homogeneous plate | Uses [[conductividad_termica]], [[area]], and [[espesor]] | Usually unnecessary |
| Multilayer wall | Initial approximation | Adds several [[resistencia_termica]] values |
| Air-exposed surfaces | Incomplete | Adds surface convection |
| Finite duration | Uses [[tiempo]] if rate is stable | Needs transient treatment if state changes |
| Intensity comparison | Uses [[flujo_calor]] | May include combined losses |