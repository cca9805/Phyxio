# Modelos físicos: Segunda ley fuerza masa

## Modelo ideal

El modelo ideal de este leaf describe sistemas con masa efectiva [[m]] constante en un marco inercial, donde la resultante [[F_net]] permite predecir [[a]] con la segunda ley. No supone ausencia de complejidad total, sino que la complejidad no dominante se absorbe en una descripcion controlada.

La utilidad del modelo es doble: explicar causalidad y habilitar prediccion cuantitativa. Si se rompe cualquiera de esas dos funciones, corresponde escalar a un modelo mas rico.

## Hipótesis

Hipotesis operativas:

1. [[m]] permanece constante durante la ventana principal.
2. El marco de referencia es inercial o aproximable como tal.
3. La identificacion de fuerzas externas es completa al nivel de precision requerido.
4. Las proyecciones por ejes son consistentes para usar [[F_x]] y [[a_x]].

Estas hipotesis son trazables y deben declararse antes del calculo numerico.

En implementaciones reales conviene registrarlas como lista de chequeo al inicio de cada ejercicio o ensayo. Esto reduce errores de contexto, porque obliga a verificar si la formulacion del problema coincide con el dominio del modelo y no solo con su apariencia algebraica.

## Dominio de validez cuantitativo

El modelo es confiable cuando se cumplen umbrales explicitos:

1. Coherencia dinamica: ||[[F_net]] - [[m]]*[[a]]|| <= 0.10 N en ensayos de banco.
2. Coherencia por eje: |[[F_x]] - [[m]]*[[a_x]]| <= 0.05 N en el eje analizado.
3. Estabilidad de parametros: variacion relativa de [[m]] < 1 por ciento en la ventana temporal.

Si los tres criterios se mantienen, el modelo base conserva capacidad explicativa y predictiva.

Tambien es util declarar una banda de aceptacion para el error relativo global entre prediccion y medida. Por ejemplo, mantener error por debajo del 10 por ciento en dos o mas corridas consecutivas fortalece la confianza en el modelo para decisiones operativas.

## Señales de fallo del modelo

Indicadores de salida de dominio:

1. Diferencia sistematica entre prediccion y medida mayor a 10 por ciento.
2. Deriva de parametros que invalida masa constante.
3. Fuerzas dependientes de velocidad o acoplamientos no modelados que dominan la dinamica.
4. Inconsistencia de signos entre fuerza proyectada y aceleracion proyectada.

## Modelo extendido o alternativo

Cuando aparece fallo, el modelo puede extenderse con terminos de rozamiento, resistencia del aire, masa variable o acoplamientos internos. La transicion debe ser explicita: cuando conviene cambiar de modelo se decide al superar de forma persistente al menos uno de los umbrales del dominio cuantitativo.

Ese criterio de cambio evita dos errores: sobreajustar un modelo simple y complicar sin necesidad un caso donde el modelo ideal aun funciona.

## Comparación operativa

Modelo ideal: rapido, interpretable y excelente para entrenamiento causal y resolucion base.

Modelo extendido: mayor precision y mejor desempeño en escenarios con disipacion o no linealidades relevantes.

La estrategia profesional correcta no es elegir uno para siempre, sino alternar segun evidencia cuantitativa y objetivo de precision.

En resumen, este bloque de modelizacion no solo responde "como calcular". Responde "cuando confiar", "cuando desconfiar" y "cuando escalar". Esa triple lectura vuelve la segunda ley una herramienta de diagnostico y no solo una formula de sustitucion.
