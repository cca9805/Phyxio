# Modelos físicos

## Modelo ideal

El modelo ideal trata el cuerpo afectado como un objeto extendido de radio característico [[R]] sometido al campo de una masa perturbadora [[M]] situada a una distancia [[d]] mucho mayor que su tamaño. La descripción principal no intenta reconstruir toda la deformación del cuerpo, sino estimar la aceleración diferencial [[am]] que aparece porque el campo gravitatorio externo cambia entre el lado cercano, el centro y el lado lejano.

En dinámica orbital, el modelo ideal separa una aceleración central dominante [[ac]] y una aceleración perturbativa [[ap]]. El movimiento principal se interpreta como órbita de dos cuerpos, mientras que la perturbación se considera una corrección pequeña. Esta separación permite usar el parámetro [[eps]] como criterio operativo de validez: si la perturbación es pequeña frente a la aceleración central, el modelo simplificado conserva sentido físico.

## Hipótesis

Se supone régimen newtoniano clásico, masas positivas y distancias expresadas en unidades SI. La condición geométrica esencial es que [[d]] sea claramente mayor que [[R]], porque la aceleración mareal de primer orden aproxima el gradiente gravitatorio mediante una escala lineal del cuerpo afectado. Si la distancia es comparable al radio, el campo cambia demasiado dentro del cuerpo y la aproximación deja de ser fiable.

También se supone que los perturbadores comparados actúan sobre el mismo cuerpo afectado. Por eso [[M1]], [[M2]], [[d1]], [[d2]], [[am1]] y [[am2]] solo se pueden comparar limpiamente cuando la escala interna [[R]] y el contexto físico son comunes. Para torques de marea, [[tau]] no queda cerrado con una sola relación: hace falta información sobre deformación, disipación y desfase.

## Dominio de validez cuantitativo

Un uso seguro del modelo exige un criterio explícito: [[R]]/[[d]] < 0,1 para una estimación mareal elemental y [[eps]] < 0,01 para una primera lectura perturbativa. Valores de [[eps]] cercanos a 0,1 ya obligan a revisar acumulación, resonancias y dirección de [[ap]]. Para mareas, la aceleración diferencial [[am]] debe ser pequeña frente a la aceleración gravitatoria dominante del sistema.

En comparación entre perturbadores, el criterio cuantitativo no es solo la razón de masas. La distancia entra con efecto cúbico, así que un perturbador más lejano necesita una masa mucho mayor para competir. Cuando el resultado cambia mucho al variar ligeramente [[d1]] o [[d2]], debe indicarse sensibilidad geométrica y no presentar la predicción como exacta.

## Señales de fallo del modelo

El modelo empieza a fallar si el cuerpo afectado está muy cerca del perturbador, si la deformación ya no es pequeña, si hay resonancias fuertes o si la perturbación cambia la órbita en pocos periodos. También falla si se intenta usar [[tau]] como resultado numérico sin modelo de disipación. Una señal observable es que la órbita medida muestre precesión, calentamiento interno, sincronización rotacional o variación secular que no se explica con la marea instantánea.

Otra señal de fallo aparece cuando la dirección de la perturbación importa tanto como su módulo. El parámetro [[eps]] mide escala, pero no geometría. Si el problema pregunta por fase orbital, excentricidad, inclinación o transferencia de energía, la lectura escalar debe pasar a un modelo vectorial.

## Modelo extendido o alternativo

El modelo extendido usa suma vectorial de aceleraciones, integración numérica de varios cuerpos o teoría de perturbaciones orbitales. En mareas deformables, se añaden parámetros de Love, disipación interna, viscosidad, elasticidad y desfase angular. En sistemas con satélites cercanos o anillos, se incorporan resonancias y evolución secular.

Cuando conviene pasar al modelo extendido: si [[eps]] deja de ser pequeño, si [[R]] no es despreciable frente a [[d]], si el efecto se acumula durante muchas órbitas, o si el resultado buscado depende de la dirección de [[ap]] y no solo de su tamaño. En esos casos, el leaf sigue siendo útil como estimación inicial, pero no como cierre predictivo completo.

## Comparación operativa

El modelo ideal responde rápido a preguntas de escala: qué perturbador domina, cómo cambia la marea al acercar un cuerpo, o si una aceleración secundaria puede tratarse como corrección. El modelo extendido responde a preguntas de evolución: cuánto se calienta un satélite, cómo precesa una órbita, cuándo aparece sincronización o qué trayectoria seguirá una sonda bajo múltiples cuerpos.

La decisión operativa debe basarse en el objetivo. Para una estimación escolar o de orden de magnitud, [[am]] y [[eps]] bastan si se declaran sus límites. Para predicción orbital precisa, estabilidad a largo plazo o deformación real del cuerpo, la aproximación escalar se convierte en punto de partida y no en resultado final.
