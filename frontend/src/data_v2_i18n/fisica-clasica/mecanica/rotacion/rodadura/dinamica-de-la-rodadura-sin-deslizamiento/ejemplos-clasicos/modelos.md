# Modelos fisicos para ejemplos clasicos de rodadura

## Modelo ideal
El modelo ideal asume contacto puntual sin deslizamiento, cuerpo rigido y radio efectivo constante. Bajo esas hipotesis, la relacion

{{f:condicion_rodadura}}

captura el enlace completo entre traslacion y rotacion para analisis cinematico. Su fortaleza es la simplicidad: con pocas magnitudes se obtiene una prediccion clara y facil de verificar.

Este modelo es adecuado para ejercicios base, validacion rapida de sensores y comparacion de orden de magnitud. Tambien es util como referencia para detectar desviaciones en sistemas reales. Si los datos quedan cerca del ideal, se puede usar para control local y para trazabilidad didactica.

La principal limitacion es que no representa explicitamente deformacion, histeresis ni variaciones de adherencia. Por eso debe complementarse con una metrica de coherencia como [[delta]].

## Hipótesis
El ejemplo supone que [[v]], [[n]] y [[R]] describen el mismo intervalo temporal, que el radio efectivo puede tomarse como constante y que la conversion desde rpm a rad/s se realiza antes de evaluar coherencia. Tambien se asume que la comparacion entre sensores es mas importante que el detalle microscopico del contacto.

## Dominio de validez cuantitativo
Como criterio cuantitativo inicial, este leaf usa abs([[delta]]) <= 0.5 m/s para clasificar rodadura casi pura en escenarios docentes de velocidad moderada. Entre 0.5 y 1.0 m/s se etiqueta regimen no ideal con uso condicional. Por encima de 1.0 m/s se requiere revision de datos o modelo antes de decidir.

Estos umbrales no son universales. Deben ajustarse cuando cambian resolución de sensores, rango de velocidad o calidad de superficie. Sin embargo, ofrecen una referencia numérica clara para evitar decisiones ambiguas.

Tambien se impone [[R]] > 0 como condicion de validez geometrica. Si [[R]] no cumple esta desigualdad, cualquier resultado derivado pierde significado fisico inmediato.

## Señales de fallo del modelo
Una señal de fallo típica es residual persistente alto incluso después de confirmar unidades y sincronización temporal. Esto sugiere que el sistema opera fuera de hipótesis de rodadura casi pura. Otra señal es sensibilidad extrema a pequeñas variaciones de entrada, indicio de parámetros mal calibrados.

Tambien se considera fallo cuando la conversion desde rpm genera [[omega]] incompatible con limites mecanicos plausibles del montaje. En ese caso el error puede estar en adquisicion o en interpretacion de la fuente de datos.

Si aparecen estas señales, el modelo ideal debe degradarse a uso exploratorio y no a uso de decisión final.

## Modelo extendido o alternativo
El modelo extendido mantiene la ecuacion base pero agrega tolerancias, umbrales y reglas de diagnostico. En lugar de exigir igualdad exacta, define una banda aceptable para abs([[delta]]) segun contexto de medicion. Esta extension reconoce que en sistemas reales hay ruido y microdeslizamiento.

Tambien incorpora conversion explicita de rpm a rad/s como etapa obligatoria de preproceso. Sin esa etapa, el modelo produce resultados formalmente correctos pero fisicamente mal escalados. En terminos de implementacion, el modelo extendido separa calculo, chequeo y accion interpretativa.

Con esta extensión, una salida no es solo un número. Incluye estado de coherencia, advertencias y recomendación de siguiente paso, lo que mejora valor operativo. Cuando conviene pasar al modelo alternativo? Conviene hacerlo cuando el residual supera el umbral del montaje, cuando la conversión de unidades no resuelve la discrepancia o cuando el ejemplo deja de ser una validación rápida y pasa a exigir dinámica detallada.

## Comparación operativa
Frente al modelo ideal, un modelo dinámico completo con fricción dependiente de velocidad puede describir mejor transitorios y pérdidas energéticas, pero requiere más parámetros y más datos. Para docencia y diagnóstico rápido, la complejidad adicional no siempre compensa.

Otra alternativa es un modelo puramente estadístico entrenado con datos de sensores. Puede detectar patrones de fallo con buena sensibilidad, aunque pierde interpretabilidad física directa. El enfoque recomendado en este leaf es híbrido: conservar la base física y usar estadística como capa de apoyo.

En resumen, el modelo de rodadura con residual ofrece equilibrio entre simplicidad, interpretabilidad y utilidad operacional.