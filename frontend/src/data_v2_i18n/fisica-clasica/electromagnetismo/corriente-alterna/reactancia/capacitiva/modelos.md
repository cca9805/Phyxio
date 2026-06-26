## Modelo ideal

El modelo ideal trata al capacitor como elemento puramente reactivo, con comportamiento lineal y sin pérdidas dominantes. En ese marco, la oposición [[reactancia_capacitiva]] se explica solo por [[omega]] y [[capacitancia]], la corriente [[corriente_capacitiva_eficaz]] se determina con tensión eficaz [[tension_eficaz]], y la magnitud [[potencia_reactiva_capacitiva]] resume intercambio reactivo en régimen sinusoidal estacionario.

Este modelo ofrece una base clara para aprendizaje y para estimaciones preliminares de diseño. Su potencia está en la capacidad de anticipar tendencias correctas sin exigir un modelo completo de material, geometría y dependencia térmica.

## Hipótesis

Primera hipótesis: régimen sinusoidal estable durante la ventana de análisis. Segunda hipótesis: linealidad del componente dentro del rango de tensión y temperatura de operación. Tercera hipótesis: pérdidas dieléctricas y resistencia serie equivalente pequeñas respecto al efecto reactivo principal.

Cuarta hipótesis metrológica: [[tension_eficaz]] e [[corriente_capacitiva_eficaz]] son magnitudes RMS coherentes y obtenidas en condiciones comparables. Quinta hipótesis operativa: [[frecuencia]] y [[capacitancia]] están expresadas con unidades correctas y trazables.

## Dominio de validez cuantitativo

Como criterio operativo, el modelo mínimo es fiable cuando THD <= 5%, cuando la [[frecuencia]] se mantiene dentro de 0.98 <= f_medida/f_nominal <= 1.02 y cuando el parámetro de pérdidas relativo se mantiene bajo, por ejemplo ESR/[[reactancia_capacitiva]] <= 0.10 en la banda de trabajo principal.

Un segundo control útil es térmico: si la variación de temperatura del componente altera su capacidad efectiva por encima de un 5% en la ventana de operación, conviene revisar la hipótesis de linealidad simple y revalidar la predicción de corriente.

## Señales de fallo del modelo

Una señal de fallo temprana es la incoherencia entre tendencia esperada y medición. Si aumenta [[frecuencia]] y la corriente de rama no crece cuando la tensión se mantiene, puede haber pérdidas o no linealidad relevantes fuera del modelo ideal.

Otra señal de fallo es energética: si la rama capacitiva muestra disipación activa apreciable que no puede explicarse por incertidumbre instrumental, la representación puramente reactiva deja de ser suficiente. También falla el modelo cuando hay fuerte dispersión de resultados entre ciclos bajo condiciones nominalmente iguales.

## Modelo extendido o alternativo

El siguiente nivel incorpora resistencia serie equivalente, dependencia con temperatura y, cuando hace falta, representación fasorial o impedancia compleja completa de la rama. Este modelo extendido separa mejor intercambio reactivo y pérdidas, y permite evaluar límites térmicos con mayor realismo.

La transición explícita es esta: cuando conviene cambiar a modelo alternativo ocurre si ESR/[[reactancia_capacitiva]] > 0.10, si THD supera el 5%, o si la deriva de [[frecuencia]] sale del intervalo operacional definido. En esos casos, mantener el modelo ideal como único soporte de decisión puede producir diagnóstico incompleto.

## Comparación operativa

El modelo ideal es excelente para pedagogía, chequeos de orden de magnitud y predicción cualitativa de tendencia. El modelo extendido es preferible para diseño final, validación de seguridad y análisis de eficiencia en condiciones no ideales.

No son modelos rivales, sino escalones de precisión. El criterio profesional consiste en saber cuándo la simplicidad del ideal sigue siendo suficiente y cuándo la evidencia experimental exige ampliar descripción.