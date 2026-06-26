## Modelo ideal

El modelo ideal representa la rama como RLC serie lineal con parametros constantes y excitacion sinusoidal estable. En este marco, la posicion de resonancia se resume en [[omega0]] y [[f0]], la selectividad en [[factor_de_calidad]] y [[ancho_de_banda]], y la respuesta de rama en [[corriente_resonante]] para una excitacion [[tension_eficaz]] dada.

Este modelo es valioso porque separa con claridad los papeles fisicos de cada parametro. [[inductancia]] y [[capacitancia]] mueven la sintonia; [[resistencia_total_serie]] controla amortiguamiento y ancho de respuesta. Esa separacion permite diseno preliminar y chequeos de coherencia con bajo costo.

## Hipótesis

Primera hipotesis: comportamiento lineal de componentes en el rango de amplitud usado. Segunda hipotesis: fuente periodica con frecuencia bien definida. Tercera hipotesis: la resistencia efectiva se puede representar con un parametro equivalente [[resistencia_total_serie]].

Cuarta hipotesis metrologica: [[tension_eficaz]] e [[corriente_resonante]] se comparan en forma RMS coherente. Quinta hipotesis operativa: la carga acoplada no altera de forma dominante la rama durante el analisis base.

## Dominio de validez cuantitativo

Como regla de trabajo, el modelo minimo suele ser confiable cuando THD <= 5%, cuando el error relativo entre frecuencia medida y frecuencia calculada cumple abs(f_medida - [[f0]])/[[f0]] <= 0.05 y cuando la perdida parasita relativa se mantiene acotada, por ejemplo R_parasita/[[resistencia_total_serie]] <= 0.20.

Para lectura de selectividad, tambien ayuda exigir [[ancho_de_banda]]/[[f0]] <= 0.30 si se desea usar aproximaciones de banda relativamente estrecha. Si este cociente crece demasiado, la aproximacion clasica pierde fidelidad para decisiones finas de sintonia.

## Señales de fallo del modelo

Una señal de fallo tipica es que la frecuencia de pico observada no coincide de forma estable con la estimacion de [[f0]] aun tras controlar unidades y medicion. Esto puede indicar dependencia fuerte de temperatura, acoplos no modelados o no linealidad.

Otra señal es energetica y de seguridad: si la corriente de rama medida excede de forma sistematica la estimacion de [[corriente_resonante]] en condiciones equivalentes, la representacion de [[resistencia_total_serie]] efectiva es insuficiente y el modelo simple no debe usarse para cierre de proteccion.

Tambien falla el modelo cuando el ajuste de un parametro produce tendencia opuesta a la esperada, por ejemplo aumentar [[resistencia_total_serie]] y observar banda mas estrecha sin causa externa clara.

## Modelo extendido o alternativo

El siguiente nivel incorpora resistencia distribuida, perdida dielectrica, variacion termica y acoplos de carga. En escenarios exigentes, se adopta representacion compleja completa con extraccion de parametros en frecuencia y validacion experimental en varios puntos de operacion.

La transicion explicita es esta: cuando conviene cambiar a modelo alternativo ocurre si abs(f_medida - [[f0]])/[[f0]] > 0.05, si R_parasita/[[resistencia_total_serie]] > 0.20 o si [[ancho_de_banda]]/[[f0]] > 0.30 en un diseno que requiere alta selectividad. En esas condiciones, mantener el modelo ideal como unico soporte puede producir error de diseno.

## Comparación operativa

El modelo ideal es excelente para ubicar sintonia y comprender causalidad entre parametros. El modelo extendido es preferible para especificacion final, validacion de seguridad y produccion en condiciones no ideales.

No son marcos excluyentes. La practica profesional robusta consiste en arrancar con el ideal para estructurar problema y escalar al modelo extendido cuando los umbrales de validez lo exigen.