const e=`# Modelos físicos: Primera ley inercia\r
\r
## Modelo ideal\r
\r
El modelo ideal de este leaf describe sistemas donde la resultante externa [[F_net]] es nula o compatible con cero dentro de una tolerancia declarada. No afirma que desaparezcan todas las interacciones, sino que las contribuciones externas se compensan al nivel de precision relevante. Esa distincion evita el error clasico de confundir equilibrio dinamico con ausencia total de fuerzas.\r
\r
En este marco, la aceleracion [[a]] se interpreta como nula y la velocidad [[v]] como estado conservado. El modelo es deliberadamente sobrio para concentrar la causalidad fisica fundamental de primera ley: sin causa neta, no hay cambio de estado.\r
\r
## Hipótesis\r
\r
Hipotesis operativas:\r
\r
1. El marco de referencia es inercial en la escala temporal del problema.\r
2. El sistema esta bien delimitado para distinguir fuerzas internas y externas.\r
3. Las perturbaciones no modeladas son menores que el umbral de deteccion elegido.\r
4. La medicion de velocidad tiene resolucion suficiente para verificar constancia de [[v]].\r
\r
Estas hipotesis no son decorativas. Si cualquiera falla, la lectura de inercia pierde confiabilidad.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo funciona bien cuando se cumplen condiciones cuantitativas explicitas:\r
\r
1. Resultante: |[[F_net]]| <= 0.05 N durante la ventana principal de analisis en montaje de mesa.\r
2. Aceleracion: |[[a]]| <= 0.02 m/s^2 sostenido al menos 5 s.\r
3. Velocidad: deriva relativa de [[v]] < 2 por ciento en la ventana de observacion.\r
\r
Si se cumplen las tres condiciones, la lectura de primera ley es robusta para decisiones didacticas e ingenieriles basicas. Si no se cumplen, el caso requiere modelo con resultante no nula.\r
\r
## Señales de fallo del modelo\r
\r
Indicadores de salida del dominio ideal:\r
\r
1. Tendencia sistematica de [[a]] fuera de la banda de ruido.\r
2. Deriva acumulada de [[v]] incompatible con error instrumental.\r
3. Cambios de trayectoria que exigen fuerza lateral neta no modelada.\r
4. Diferencia persistente entre prediccion inercial y medicion superior al umbral aceptado por el experimento.\r
\r
Estas señales no invalidan la fisica, solo indican cambio de regimen.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando aparece fallo, la extension natural integra segunda ley con resultante no nula y fuerzas de disipacion. En muchos casos basta agregar rozamiento efectivo y recalibrar el balance por ejes. En otros casos se requiere incluir resistencia del aire dependiente de la velocidad o perturbaciones externas transitorias.\r
\r
La transicion entre modelos debe quedar documentada: que variable activo el cambio, que umbral se excedio y que nueva prediccion se adopta.\r
\r
## Comparación operativa\r
\r
El modelo ideal ofrece rapidez y claridad causal para detectar estado conservado. El modelo extendido ofrece mayor precision cuando las perturbaciones dejan de ser pequenas. La estrategia correcta no es elegir uno para siempre, sino cambiar de nivel cuando los datos lo exigen.\r
\r
En practica docente, el modelo ideal entrena interpretacion fisica. En practica profesional, el modelo extendido toma el relevo para control fino y diagnostico cuantitativo avanzado.\r
`;export{e as default};
