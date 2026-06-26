## Modelo ideal

El modelo ideal de convección trata la frontera entre una superficie y un fluido como una zona de intercambio térmico representable por pocas magnitudes. La [[temperatura_superficie]] caracteriza el lado sólido o la pared, la [[temperatura_fluido]] representa el fluido alejado de la capa inmediata y la [[diferencia_temperatura]] actúa como impulso térmico. La [[area]] marca el tamaño de la frontera activa, mientras el [[coeficiente_conveccion]] condensa el efecto del movimiento, la mezcla y las propiedades del fluido. El resultado puede leerse como [[potencia_termica]], [[flujo_calor]] o [[calor_transferido]] según la pregunta y el [[tiempo]] considerado.

## Hipótesis

- Superficie representativa: se supone que la [[temperatura_superficie]] describe bien la zona de intercambio; consecuencia: no se estudian manchas térmicas locales.
- Fluido de referencia definido: la [[temperatura_fluido]] se toma lejos de la pared; consecuencia: la capa cercana queda incluida dentro del [[coeficiente_conveccion]].
- Propiedades casi constantes: [[conductividad_termica_fluido]] y comportamiento del fluido no cambian bruscamente; consecuencia: el [[numero_nusselt]] puede usarse sin recalcular todo el campo.
- Geometría resumible: la [[longitud_caracteristica]] representa la escala principal; consecuencia: detalles pequeños solo importan si alteran el régimen.
- Frontera dominante: la [[resistencia_termica_conveccion]] recoge la oposición relevante; consecuencia: conducción interna y radiación se tratan aparte.

## Dominio de validez cuantitativo

El modelo básico es razonable cuando [[numero_nusselt]] > 1, porque existe mejora respecto al transporte puramente conductivo en el fluido. Para aire en laboratorio, [[coeficiente_conveccion]] < 100 W m⁻² K⁻¹ suele mantener una lectura simple. Si [[diferencia_temperatura]] < 100 K, las propiedades térmicas suelen variar de forma moderada. En placas pequeñas, [[longitud_caracteristica]] < 1 m permite estimaciones manejables. Cuando [[resistencia_termica_conveccion]] > 0 y [[area]] > 0, el sentido físico del intercambio queda bien definido.

> [!NOTE]
> Límite cuantitativo: El error relativo respecto a la solución real se mantiene inferior al 5%.

## Señales de fallo del modelo

El modelo falla si la [[potencia_termica]] medida cambia mucho aunque [[diferencia_temperatura]] parezca estable, si el [[flujo_calor]] es muy distinto en zonas próximas o si el fluido recircula y modifica la [[temperatura_fluido]]. También falla cuando el [[tiempo]] de observación es tan corto que domina el almacenamiento interno, o cuando el [[calor_transferido]] exige incluir radiación, evaporación o cambio de fase.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo extendido, se reemplaza el único [[coeficiente_conveccion]] por correlaciones locales basadas en [[numero_nusselt]], geometría y régimen de flujo. En intercambiadores se combina la [[resistencia_termica_conveccion]] con resistencias de conducción y convección del otro lado. En CFD se resuelve el campo completo de velocidad y temperatura, usando [[conductividad_termica_fluido]] y [[longitud_caracteristica]] solo como parte del problema.

## Comparación operativa

| Situación | Modelo recomendado | Magnitud que vigilar | Riesgo principal |
|---|---|---|---|
| Aire quieto sobre placa | Convección natural | [[coeficiente_conveccion]] | subestimar la capa térmica |
| Ventilador sobre disipador | Convección forzada | [[flujo_calor]] | usar una [[area]] equivocada |
| Tubería con líquido | Correlación de [[numero_nusselt]] | [[longitud_caracteristica]] | elegir mal la escala |
| Pared multicapa | Red de resistencias | [[resistencia_termica_conveccion]] | olvidar conducción interna |