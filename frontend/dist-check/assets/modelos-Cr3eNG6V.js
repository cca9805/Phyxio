const e=`# Modelos físicos: Segunda ley fuerza masa\r
\r
## Modelo ideal\r
\r
El modelo ideal de este leaf describe sistemas con masa efectiva [[m]] constante en un marco inercial, donde la resultante [[F_net]] permite predecir [[a]] con la segunda ley. No supone ausencia de complejidad total, sino que la complejidad no dominante se absorbe en una descripcion controlada.\r
\r
La utilidad del modelo es doble: explicar causalidad y habilitar prediccion cuantitativa. Si se rompe cualquiera de esas dos funciones, corresponde escalar a un modelo mas rico.\r
\r
## Hipótesis\r
\r
Hipotesis operativas:\r
\r
1. [[m]] permanece constante durante la ventana principal.\r
2. El marco de referencia es inercial o aproximable como tal.\r
3. La identificacion de fuerzas externas es completa al nivel de precision requerido.\r
4. Las proyecciones por ejes son consistentes para usar [[F_x]] y [[a_x]].\r
\r
Estas hipotesis son trazables y deben declararse antes del calculo numerico.\r
\r
En implementaciones reales conviene registrarlas como lista de chequeo al inicio de cada ejercicio o ensayo. Esto reduce errores de contexto, porque obliga a verificar si la formulacion del problema coincide con el dominio del modelo y no solo con su apariencia algebraica.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo es confiable cuando se cumplen umbrales explicitos:\r
\r
1. Coherencia dinamica: ||[[F_net]] - [[m]]*[[a]]|| <= 0.10 N en ensayos de banco.\r
2. Coherencia por eje: |[[F_x]] - [[m]]*[[a_x]]| <= 0.05 N en el eje analizado.\r
3. Estabilidad de parametros: variacion relativa de [[m]] < 1 por ciento en la ventana temporal.\r
\r
Si los tres criterios se mantienen, el modelo base conserva capacidad explicativa y predictiva.\r
\r
Tambien es util declarar una banda de aceptacion para el error relativo global entre prediccion y medida. Por ejemplo, mantener error por debajo del 10 por ciento en dos o mas corridas consecutivas fortalece la confianza en el modelo para decisiones operativas.\r
\r
## Señales de fallo del modelo\r
\r
Indicadores de salida de dominio:\r
\r
1. Diferencia sistematica entre prediccion y medida mayor a 10 por ciento.\r
2. Deriva de parametros que invalida masa constante.\r
3. Fuerzas dependientes de velocidad o acoplamientos no modelados que dominan la dinamica.\r
4. Inconsistencia de signos entre fuerza proyectada y aceleracion proyectada.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando aparece fallo, el modelo puede extenderse con terminos de rozamiento, resistencia del aire, masa variable o acoplamientos internos. La transicion debe ser explicita: cuando conviene cambiar de modelo se decide al superar de forma persistente al menos uno de los umbrales del dominio cuantitativo.\r
\r
Ese criterio de cambio evita dos errores: sobreajustar un modelo simple y complicar sin necesidad un caso donde el modelo ideal aun funciona.\r
\r
## Comparación operativa\r
\r
Modelo ideal: rapido, interpretable y excelente para entrenamiento causal y resolucion base.\r
\r
Modelo extendido: mayor precision y mejor desempeño en escenarios con disipacion o no linealidades relevantes.\r
\r
La estrategia profesional correcta no es elegir uno para siempre, sino alternar segun evidencia cuantitativa y objetivo de precision.\r
\r
En resumen, este bloque de modelizacion no solo responde "como calcular". Responde "cuando confiar", "cuando desconfiar" y "cuando escalar". Esa triple lectura vuelve la segunda ley una herramienta de diagnostico y no solo una formula de sustitucion.\r
`;export{e as default};
