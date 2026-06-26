## Modelo ideal

El modelo ideal del leaf representa la configuración de un sistema por un conjunto mínimo de variables independientes. En el plano, ese conjunto puede escribirse como [[x]] y [[y]], o como [[r]] y [[theta]] cuando conviene resaltar la simetría radial. La simplificación central es asumir que la transformación entre representaciones es invertible en la región de trabajo y que no se pierde información física al cambiar de base.

Con esta simplificación, el foco deja de estar en coordenadas redundantes y pasa a la estructura de dependencia entre magnitudes. Se conservan relaciones geométricas esenciales y se ignoran, de manera deliberada, efectos que no afectan el objetivo del leaf, como deformaciones materiales o ruido instrumental de medición.

## Hipótesis

- Las ligaduras consideradas son holónomas e independientes. Si se viola, el conteo de [[f]] deja de ser fiable.
- La conversión entre [[x]], [[y]] y [[r]], [[theta]] es coherente con la convención angular adoptada. Si se viola, aparecen signos erróneos y falsas incoherencias físicas.
- La escala espacial es uniforme para todas las componentes. Si se viola, la reconstrucción de [[r]] desde [[x]] y [[y]] pierde interpretación geométrica.
- El problema se formula como sistema discreto cuando se usa [[n]] y [[C]]. Si se viola, la lectura de [[f]] puede sobregeneralizarse a contextos continuos donde no aplica sin ajustes.

## Dominio de validez cuantitativo

La validez cuantitativa exige condiciones explícitas: [[r]] debe ser no negativa, [[n]] debe ser al menos una entidad, [[C]] no puede ser negativa y el número de ligaduras no puede superar tres veces el número de entidades. Además, en uso práctico conviene trabajar en un rango angular acotado para evitar ambigüedades operativas al comparar soluciones equivalentes. Un rango típico de trabajo para [[theta]] en experimentos de laboratorio introductorio va de menos pi a más pi radianes.

Orden de magnitud relevante: si [[r]] representa escalas de milímetros y [[x]], [[y]] se reportan en metros sin conversión, el error de unidad domina cualquier lectura de coordenadas. El modelo es razonable cuando todas las variables de posición comparten escala y unidad consistentes.

## Señales de fallo del modelo

Una señal observable es obtener [[f]] negativa tras aplicar el conteo estructural. Eso delata un conteo inválido de ligaduras o una interpretación errónea de [[n]]. Otra señal es que una reconstrucción de [[r]] desde [[x]] y [[y]] no coincida con la restricción geométrica esperada, incluso con datos limpios.

También falla cuando pequeñas variaciones de [[theta]] producen saltos no físicos en la lectura de [[x]] y [[y]], indicador típico de convención angular inconsistente o de una carta de coordenadas mal elegida cerca de una singularidad operativa.

## Modelo extendido o alternativo

Un modelo extendido incorpora redundancia controlada y resuelve ligaduras con multiplicadores cuando la geometría cambia por tramos o cuando la carta local de coordenadas pierde robustez. Otra alternativa es definir coordenadas generalizadas por segmentos, con transición entre cartas para evitar zonas singularmente mal condicionadas.

La transición explícita es esta: conviene abandonar el modelo ideal cuando las señales de fallo anteriores aparecen de forma sostenida, o cuando la complejidad del mecanismo exige mantener continuidad numérica en dominios donde una sola parametrización deja de ser estable.

## Comparación operativa

- Modelo ideal: alta interpretabilidad, bajo costo computacional, excelente para docencia y sistemas con ligaduras simples.
- Modelo extendido: mayor robustez global, mejor manejo de singularidades y cambios de régimen, costo computacional superior.
- Precisión: el ideal es suficiente en dominio regular; el extendido mejora consistencia cuando hay transiciones geométricas.
- Complejidad: el ideal minimiza variables; el extendido agrega estructura para preservar estabilidad.
- Rango de aplicación: el ideal funciona en dominio acotado bien definido; el extendido cubre escenarios más amplios con menor riesgo de ruptura del modelo.