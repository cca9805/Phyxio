## Modelo ideal

El modelo ideal de conducción considera una capa homogénea atravesada por calor en una dirección principal. La [[temperatura_caliente]] se mantiene en una cara y la [[temperatura_fria]] en la opuesta, de modo que la [[diferencia_temperatura]] impulsa el paso térmico. La [[conductividad_termica]] representa la respuesta del material, mientras [[area]] y [[espesor]] describen la geometría. El modelo permite estimar [[potencia_termica]], [[flujo_calor]], [[calor_transferido]], [[gradiente_temperatura]] y [[resistencia_termica]] sin introducir convección interna ni radiación dominante.

## Hipótesis

- Material homogéneo: la consecuencia es que la [[conductividad_termica]] se interpreta como una propiedad única para toda la capa.
- Caras térmicamente uniformes: la consecuencia es que [[temperatura_caliente]] y [[temperatura_fria]] representan bien cada frontera.
- Conducción unidimensional: la consecuencia es que [[espesor]] marca el recorrido térmico principal.
- Superficie efectiva constante: la consecuencia es que [[area]] coincide con la zona real atravesada por el calor.
- Régimen estacionario: la consecuencia es que [[potencia_termica]] y [[flujo_calor]] pueden leerse como ritmos mantenidos.
- Duración controlada: la consecuencia es que [[tiempo]] convierte el ritmo térmico en [[calor_transferido]] acumulado.

## Dominio de validez cuantitativo

El modelo es razonable si [[espesor]] > 0 m, [[area]] > 0 m² y [[conductividad_termica]] > 0 W/(m·K). Para una lectura lineal sencilla conviene que [[diferencia_temperatura]] < 100 K si el material cambia poco sus propiedades con la temperatura. En cerramientos comunes, [[flujo_calor]] < 1000 W/m² suele evitar resultados sospechosos. Si se usa una capa aislante, [[resistencia_termica]] > 0 K/W debe crecer al aumentar [[espesor]].

> [!NOTE]
> Límite cuantitativo: El error relativo respecto a la solución real se mantiene inferior al 5%.

## Señales de fallo del modelo

El modelo falla cuando aparecen pérdidas laterales importantes, contactos térmicos defectuosos, grietas, humedad, convección interna o radiación dominante. También falla si [[temperatura_caliente]] y [[temperatura_fria]] cambian rápido durante el [[tiempo]] estudiado. Otra señal clara es obtener [[potencia_termica]] enorme para una pared cotidiana o un [[gradiente_temperatura]] incompatible con el material.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo extendido, se incorporan resistencias térmicas en serie, resistencias de contacto, convección superficial y radiación. Esta ampliación es necesaria en ventanas reales, muros multicapa, disipadores electrónicos y hornos. En esos casos, la [[resistencia_termica]] total ya no depende solo de una capa, y la [[potencia_termica]] se reparte entre varios mecanismos.

## Comparación operativa

| Situación | Modelo ideal de conducción | Modelo extendido |
|---|---|---|
| Una placa homogénea | Usa [[conductividad_termica]], [[area]] y [[espesor]] | Normalmente no hace falta |
| Muro con varias capas | Aproximación inicial | Suma varias [[resistencia_termica]] |
| Superficies con aire | Incompleto | Añade convección superficial |
| Duración finita | Usa [[tiempo]] si el ritmo es estable | Requiere transitorio si cambia el estado |
| Comparar intensidad | Usa [[flujo_calor]] | Puede incluir pérdidas combinadas |