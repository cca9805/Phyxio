## Modelo ideal

El modelo ideal para este leaf considera una red de corriente continua con elementos concentrados y comportamiento resistivo lineal. Bajo este marco, los balances de nodo y malla se escriben sin ambiguedad y cada termino se vincula con una rama o lazo del esquema real.

Este modelo es valioso porque permite pasar del diagrama a un sistema algebraico interpretable, donde los resultados mantienen trazabilidad fisica.

## Hipótesis

Hipotesis 1: regimen cuasiestacionario, sin acumulacion neta de carga en nodos. Hipotesis 2: componentes resistivos en rango lineal alrededor del punto de trabajo. Hipotesis 3: convencion de signos fija para corrientes y polaridades durante toda la resolucion.

Hipotesis 4: topologia conocida y estable, sin cambios de conexion durante la medicion. Hipotesis 5: conjunto de ecuaciones independientes seleccionado correctamente.

## Dominio de validez cuantitativo

Como criterio operativo, el modelo minimo suele ser confiable cuando dR <= 0.10*R en la ventana de analisis. Tambien es util exigir que cierre_nodo <= 0.02*I_ref y que cierre_malla <= 0.02*V_ref.

Criterio cuantitativo explicito de aceptacion: dR <= 10% de R, cierre_nodo <= 2% de I_ref y cierre_malla <= 2% de V_ref.

Si el objetivo es diagnostico preliminar, estos umbrales suelen ser suficientes. Si el objetivo es seguridad o especificacion final, conviene reducir tolerancias o ampliar modelo.

## Señales de fallo del modelo

Primera senal: el sistema algebraico cierra en papel, pero no cierra con mediciones repetidas en campo. Segunda senal: pequenas variaciones de entrada generan saltos desproporcionados en resultados, indicando posible redundancia o dependencia lineal oculta.

Tercera senal: las ramas exhiben comportamiento no lineal dominante y la relacion local lineal deja de explicar caidas observadas. Cuarta senal: la red real tiene elementos omitidos (resistencia de contacto, derivaciones no modeladas) que rompen coherencia estructural.

## Modelo extendido o alternativo

El modelo extendido mantiene Kirchhoff como marco conservativo, pero amplia constitucion de ramas: fuentes dependientes, no linealidad, variacion termica y resistencias distribuidas. La transicion explicita es: cuando conviene cambiar a modelo alternativo ocurre si deltaR/R > 0.10, o si abs(cierre_nodo)/I_ref > 0.02, o si abs(cierre_malla)/V_ref > 0.02 de forma sistematica.

En esas condiciones, forzar el modelo ideal como unico soporte puede producir diagnosticos incorrectos y decisiones de diseno fragiles.

## Comparación operativa

El modelo ideal es excelente para aprendizaje, analisis inicial y mantenimiento correctivo rapido. El modelo extendido es preferible para validacion de seguridad, certificacion y escenarios con incertidumbre alta.

La practica robusta usa ambos por capas: primero cierre conservativo claro y trazable, despues complejidad adicional solo donde el problema y el riesgo lo exigen.