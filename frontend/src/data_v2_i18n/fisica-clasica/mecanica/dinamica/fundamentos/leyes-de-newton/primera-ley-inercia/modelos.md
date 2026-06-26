# Modelos físicos: Primera ley inercia

## Modelo ideal

El modelo ideal de este leaf describe sistemas donde la resultante externa [[F_net]] es nula o compatible con cero dentro de una tolerancia declarada. No afirma que desaparezcan todas las interacciones, sino que las contribuciones externas se compensan al nivel de precision relevante. Esa distincion evita el error clasico de confundir equilibrio dinamico con ausencia total de fuerzas.

En este marco, la aceleracion [[a]] se interpreta como nula y la velocidad [[v]] como estado conservado. El modelo es deliberadamente sobrio para concentrar la causalidad fisica fundamental de primera ley: sin causa neta, no hay cambio de estado.

## Hipótesis

Hipotesis operativas:

1. El marco de referencia es inercial en la escala temporal del problema.
2. El sistema esta bien delimitado para distinguir fuerzas internas y externas.
3. Las perturbaciones no modeladas son menores que el umbral de deteccion elegido.
4. La medicion de velocidad tiene resolucion suficiente para verificar constancia de [[v]].

Estas hipotesis no son decorativas. Si cualquiera falla, la lectura de inercia pierde confiabilidad.

## Dominio de validez cuantitativo

El modelo funciona bien cuando se cumplen condiciones cuantitativas explicitas:

1. Resultante: |[[F_net]]| <= 0.05 N durante la ventana principal de analisis en montaje de mesa.
2. Aceleracion: |[[a]]| <= 0.02 m/s^2 sostenido al menos 5 s.
3. Velocidad: deriva relativa de [[v]] < 2 por ciento en la ventana de observacion.

Si se cumplen las tres condiciones, la lectura de primera ley es robusta para decisiones didacticas e ingenieriles basicas. Si no se cumplen, el caso requiere modelo con resultante no nula.

## Señales de fallo del modelo

Indicadores de salida del dominio ideal:

1. Tendencia sistematica de [[a]] fuera de la banda de ruido.
2. Deriva acumulada de [[v]] incompatible con error instrumental.
3. Cambios de trayectoria que exigen fuerza lateral neta no modelada.
4. Diferencia persistente entre prediccion inercial y medicion superior al umbral aceptado por el experimento.

Estas señales no invalidan la fisica, solo indican cambio de regimen.

## Modelo extendido o alternativo

Cuando aparece fallo, la extension natural integra segunda ley con resultante no nula y fuerzas de disipacion. En muchos casos basta agregar rozamiento efectivo y recalibrar el balance por ejes. En otros casos se requiere incluir resistencia del aire dependiente de la velocidad o perturbaciones externas transitorias.

La transicion entre modelos debe quedar documentada: que variable activo el cambio, que umbral se excedio y que nueva prediccion se adopta.

## Comparación operativa

El modelo ideal ofrece rapidez y claridad causal para detectar estado conservado. El modelo extendido ofrece mayor precision cuando las perturbaciones dejan de ser pequenas. La estrategia correcta no es elegir uno para siempre, sino cambiar de nivel cuando los datos lo exigen.

En practica docente, el modelo ideal entrena interpretacion fisica. En practica profesional, el modelo extendido toma el relevo para control fino y diagnostico cuantitativo avanzado.
