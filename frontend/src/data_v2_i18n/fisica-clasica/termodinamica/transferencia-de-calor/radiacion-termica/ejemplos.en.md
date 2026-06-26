# Exam-type example

## Problem statement

A matte black metal plate is kept hot in a large room. The plate has exposed [[area_superficie]] of 0.80 m², [[emisividad]] of 0.90, and [[temperatura_absoluta]] of 500 K. The room walls can be represented by an [[temperatura_ambiente]] of 300 K. Calculate the gross [[potencia_radiada]], the [[potencia_neta]] lost by radiative exchange, and the emitted [[flujo_radiativo]]. The physical question is how these results depend on [[temperatura_absoluta]], [[area_superficie]], and [[emisividad]].

## Data

The numerical data used to solve the problem are the following:

- [[area_superficie]]: 0.80 m²
- [[emisividad]]: 0.90
- Plate [[temperatura_absoluta]]: 500 K
- Room [[temperatura_ambiente]]: 300 K
- [[constante_stefan_boltzmann]]: 5.67 · 10⁻⁸ W·m⁻²·K⁻⁴
- Requested quantities: [[potencia_radiada]], [[potencia_neta]], and [[flujo_radiativo]]

## System definition

The system is the metal plate considered as an emitting surface. We are not studying the full cooling process or stored internal energy, but the instantaneous rate of radiative emission and exchange. The relevant [[area_superficie]] is the exposed part that radiatively sees the room. The room is simplified as a large environment with uniform radiative [[temperatura_ambiente]]. [[emisividad]] summarizes the effect of the matte black finish.

## Physical model

The model is a gray surface with uniform [[temperatura_absoluta]]. Gross emission uses the Stefan-Boltzmann law. Exchange with surroundings uses net radiation. Emission per unit area uses [[flujo_radiativo]]. The three quantities are related, but they do not mean the same thing: [[potencia_radiada]] is total emission, [[potencia_neta]] is balance, and [[flujo_radiativo]] is surface intensity.

## Model justification

The plate has one [[temperatura_absoluta]], so its surface temperature is assumed approximately uniform. The matte black coating supports high [[emisividad]], which means the plate is close to an ideal thermal emitter but still not perfect. The large room allows an equivalent [[temperatura_ambiente]], although real enclosures may have walls or sources at different temperatures. Conduction and convection are ignored because the aim is to isolate radiative transfer. If strong air currents or important thermal contact existed, this calculation would be only part of the balance.

This model is also appropriate because the question asks how [[potencia_radiada]] and [[potencia_neta]] depend on [[temperatura_absoluta]], [[area_superficie]], and [[emisividad]]. Those are precisely the variables controlled by the available formulas. The example therefore separates the three effects: changing [[temperatura_absoluta]] bends the result strongly, changing [[area_superficie]] scales total power, and changing [[emisividad]] changes how close the surface is to blackbody behavior.

## Symbolic solution

To calculate gross emission, use:

{{f:ley_stefan_boltzmann}}

This relation shows that [[potencia_radiada]] increases linearly with [[area_superficie]] and [[emisividad]], but much more strongly with [[temperatura_absoluta]].

For balance with the surroundings, use:

{{f:radiacion_neta}}

Here temperature is not subtracted simply. The fourth powers of [[temperatura_absoluta]] and [[temperatura_ambiente]] are compared. If the plate is hotter, the positive result represents net loss under the outward convention.

For emission per unit surface, use:

{{f:flujo_radiativo_emitido}}

[[flujo_radiativo]] separates emission intensity from the total size of the plate.

## Numerical substitution

For gross emission, 500⁴ = 6.25 · 10¹⁰. Multiplying by [[constante_stefan_boltzmann]] gives about 3544 W/m² for an ideal emitter. Multiplying by [[emisividad]] 0.90 and by [[area_superficie]] 0.80 m² gives [[potencia_radiada]] ≈ 2550 W.

For net radiation, 300⁴ = 8.1 · 10⁹. The difference 500⁴ - 300⁴ is 5.44 · 10¹⁰. Multiplying by [[constante_stefan_boltzmann]], [[emisividad]], and [[area_superficie]] gives [[potencia_neta]] ≈ 2220 W. The positive sign indicates net loss from the plate to the room.

The gross emitted [[flujo_radiativo]] is obtained by dividing [[potencia_radiada]] by 0.80 m², approximately 3190 W/m².

## Dimensional validation

In the Stefan-Boltzmann law, [[emisividad]] contributes no units. [[constante_stefan_boltzmann]] contributes W·m⁻²·K⁻⁴, [[area_superficie]] contributes m², and [[temperatura_absoluta]]⁴ contributes K⁴. The result is W, so it corresponds to [[potencia_radiada]]. In [[flujo_radiativo]], because area is not multiplied, the units remain W/m². In [[potencia_neta]], the difference of fourth powers keeps K⁴ units, so the result is also W.

## Physical interpretation

The result means that the plate is not merely "hot"; it is losing energy at a very large rate by radiation. The high [[temperatura_absoluta]] indicates a strong microscopic thermal agitation, and this implies a much larger emitted power than a near-room-temperature surface of the same [[area_superficie]]. The gross [[potencia_radiada]] is larger than [[potencia_neta]] because the room also radiates back toward the plate. Therefore the net value physically depends on both the plate and its radiative surroundings. High [[emisividad]] increases the result because the matte surface behaves close to a blackbody, while [[area_superficie]] increases total power by adding more emitting area. If [[temperatura_absoluta]] increased, the power would increase strongly; if [[temperatura_ambiente]] approached the plate temperature, the net loss would decrease.

# Real-world example

## Context

A thermal camera inspects a facade during a clear night. The wall has [[temperatura_absoluta]] near 285 K, high [[emisividad]] due to matte paint, and a sky radiative [[temperatura_ambiente]] lower than air temperature. The goal is to estimate which regions lose more energy by radiation.

## Physical estimation

An order-of-magnitude estimate starts with one square meter of wall, so [[flujo_radiativo]] is the natural scale. For a matte surface near 285 K, gross infrared emission is on the order of hundreds of W/m², because [[constante_stefan_boltzmann]] times T⁴ gives a reasonable value in that range before applying [[emisividad]]. The approximate net loss is smaller than the gross emission if nearby surroundings radiate back, but it can remain significant when the effective sky [[temperatura_ambiente]] is lower. A warmer patch by only 5 K can still produce a detectable change in emitted radiation. Scaling from one square meter to a whole facade then multiplies the estimate by effective [[area_superficie]], converting local magnitude into total power.

## Interpretation

The application does not measure "heat" directly. It measures radiation and translates it into temperature under assumptions about [[emisividad]] and surroundings. Correct diagnosis combines [[temperatura_absoluta]], [[temperatura_ambiente]], [[area_superficie]], and the radiative model. This avoids confusing a truly warm region with a surface that simply reflects differently.

The same physical reading explains why a small local temperature difference can become visible in an infrared image. The detected signal is controlled by emitted radiation per unit area, so [[flujo_radiativo]] is the natural first quantity. When the inspection goal is energy loss through an entire facade, that local reading must be converted into total power using [[area_superficie]]. If the night sky behaves as a colder radiative environment, the sign and size of [[potencia_neta]] become part of the diagnosis rather than a decorative afterthought.
