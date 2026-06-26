## Ideal model

The ideal model of thermal radiation treats the surface as gray: it emits as a fixed fraction of a blackbody through an effective [[emisividad]]. The goal is to answer how [[potencia_radiada]] and net exchange depend on [[temperatura_absoluta]], [[area_superficie]], and [[emisividad]]. Gross emission uses the Stefan-Boltzmann relation.

{{f:ley_stefan_boltzmann}}

If surroundings with [[temperatura_ambiente]] appear, the model shifts from “how much it emits” to “how much it loses or gains in balance,” using [[potencia_neta]].

{{f:radiacion_neta}}

[[flujo_radiativo]] is used when emission per unit surface area matters.

{{f:flujo_radiativo_emitido}}

## Hypotheses

- Uniform [[temperatura_absoluta]]: if violated, one temperature does not represent the whole [[area_superficie]].
- Constant [[emisividad]]: if it changes with wavelength, finish, or temperature, the gray model is only approximate.
- Known effective [[area_superficie]]: if cavities, shadows, or complex geometry exist, simple area may fail.
- Uniform radiative [[temperatura_ambiente]]: if surroundings have very different sources, [[potencia_neta]] needs a richer model.
- Transparent medium: if air, vapor, or glass absorbs relevant radiation, exchanged energy changes.

## Quantitative validity domain

The minimum physical domain requires [[temperatura_absoluta]] ≥ 0 K, [[temperatura_ambiente]] ≥ 0 K, [[area_superficie]] ≥ 0, and 0 ≤ [[emisividad]] ≤ 1. As a school-level or first engineering estimate, the model is reasonable if relative surface temperature variation satisfies ΔT/T < 0.1 and if [[emisividad]] can be treated as constant. For environmental surfaces, a typical interval is 250 K ≤ [[temperatura_absoluta]] ≤ 400 K. In furnaces or hot metals, with [[temperatura_absoluta]] > 600 K, the T⁴ dependence means a small temperature uncertainty can create large errors in [[potencia_radiada]].

## Model failure signals

Clear failure signals include intense thermal spots, shiny surfaces with dominant reflection, fitted [[emisividad]] greater than one, or experimental [[potencia_neta]] that does not change sign when the comparison between [[temperatura_absoluta]] and [[temperatura_ambiente]] is reversed. The model also fails if conduction or convection explains most of the exchange, or if geometry between surfaces requires view factors.

## Extended or alternative model

If the surface is not gray, a spectral model with wavelength-dependent [[emisividad]] is used. If geometry matters, radiative view factors are added. If air, supports, or fluids are involved, radiative [[potencia_neta]] is included in a balance with conduction and convection. If the surface is non-uniform, [[area_superficie]] is divided into regions with their own [[temperatura_absoluta]].


When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.
## Operational comparison

| Situation | Useful model | Central quantity | Limit |
| Isolated uniform surface | Gray surface | [[potencia_radiada]] | Use K |
| Body with thermal surroundings | Net balance | [[potencia_neta]] | Subtract T⁴ |
| Comparing finishes | Flux per area | [[flujo_radiativo]] | Control [[emisividad]] |
| Shiny metal | Spectral model | variable [[emisividad]] | Single ε may fail |
| Complex geometry | View factors | effective [[area_superficie]] | Visible area is not enough |