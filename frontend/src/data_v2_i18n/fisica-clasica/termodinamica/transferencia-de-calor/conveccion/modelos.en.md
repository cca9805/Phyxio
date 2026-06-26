## Ideal model

The ideal convection model treats the boundary between a surface and a fluid as a thermal exchange zone described by a few magnitudes. [[temperatura_superficie]] characterizes the solid or wall side, [[temperatura_fluido]] represents the fluid away from the immediate layer, and [[diferencia_temperatura]] acts as the thermal drive. [[area]] gives the size of the active boundary, while [[coeficiente_conveccion]] condenses motion, mixing, and fluid properties. The result may be read as [[potencia_termica]], [[flujo_calor]], or [[calor_transferido]] depending on the question and the considered [[tiempo]].

## Hypotheses

- Representative surface: [[temperatura_superficie]] describes the exchange zone well; consequence: local hot spots are not resolved.
- Defined reference fluid: [[temperatura_fluido]] is taken away from the wall; consequence: the near-wall layer is included in [[coeficiente_conveccion]].
- Nearly constant properties: [[conductividad_termica_fluido]] and fluid behavior do not change abruptly; consequence: [[numero_nusselt]] can be used without rebuilding the full field.
- Summarized geometry: [[longitud_caracteristica]] represents the main scale; consequence: small details matter only when they alter the regime.
- Dominant boundary: [[resistencia_termica_conveccion]] captures the relevant opposition; consequence: internal conduction and radiation are treated separately.

## Quantitative validity domain

The basic model is reasonable when [[numero_nusselt]] > 1, because motion improves transport beyond pure conduction in the fluid. For laboratory air, [[coeficiente_conveccion]] < 100 W m⁻² K⁻¹ usually keeps the reading simple. If [[diferencia_temperatura]] < 100 K, thermal properties often vary moderately. For small plates, [[longitud_caracteristica]] < 1 m allows manageable estimates. When [[resistencia_termica_conveccion]] > 0 and [[area]] > 0, the physical direction of exchange is well defined.

## Model failure signals

The model fails if measured [[potencia_termica]] changes strongly while [[diferencia_temperatura]] looks steady, if [[flujo_calor]] differs widely between nearby zones, or if recirculation modifies [[temperatura_fluido]]. It also fails when the observed [[tiempo]] is so short that internal storage dominates, or when [[calor_transferido]] requires radiation, evaporation, or phase change.

## Extended or alternative model

When it is appropriate to switch to the extended model, the single [[coeficiente_conveccion]] is replaced by local correlations based on [[numero_nusselt]], geometry, and flow regime. In heat exchangers, [[resistencia_termica_conveccion]] is combined with conduction resistances and convection on the other side. In CFD, the whole velocity and temperature field is solved, while [[conductividad_termica_fluido]] and [[longitud_caracteristica]] become inputs within the larger problem.

## Operational comparison

| Situation | Recommended model | Magnitude to monitor | Main risk |
|---|---|---|---|
| Still air over a plate | Natural convection | [[coeficiente_conveccion]] | underestimating the thermal layer |
| Fan over a heat sink | Forced convection | [[flujo_calor]] | using the wrong [[area]] |
| Liquid in a pipe | [[numero_nusselt]] correlation | [[longitud_caracteristica]] | choosing the wrong scale |
| Multilayer wall | Resistance network | [[resistencia_termica_conveccion]] | forgetting internal conduction |