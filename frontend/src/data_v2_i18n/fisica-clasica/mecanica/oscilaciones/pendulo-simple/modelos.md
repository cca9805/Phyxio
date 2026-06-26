## Modelo ideal

El modelo ideal del péndulo simple trata la masa como puntual y la cuerda como inextensible. El objetivo no es describir toda la realidad, sino capturar la causa dominante del periodo: la gravedad actúa como restauración y la longitud fija la escala geométrica de la oscilación. Bajo ese marco, [[L]], [[g]], [[theta]], [[theta0]], [[T]] y [[omega0]] bastan para hacer predicciones útiles.

La ventaja del modelo ideal es que separa lo esencial de lo accesorio. Si la amplitud es pequeña, el periodo depende sobre todo de [[L]] y [[g]]. Si la amplitud crece, la predicción ya no debe tratarse como exacta, sino como aproximación de primer orden.

## Hipótesis

Las hipótesis son claras: masa puntual, cuerda sin masa, punto de suspensión fijo, rozamiento secundario y ángulos pequeños. Es importante escribirlas antes de calcular porque el error más común no es algebraico, sino de modelo. Una fórmula correcta puede dar una respuesta incorrecta si se aplica fuera de su dominio.

En un problema típico también conviene fijar [[phi]] y la referencia temporal. Eso evita confundir una condición inicial con una modificación real del sistema. Cuando [[theta0]] es muy pequeña, la linealización funciona; cuando deja de serlo, la solución sinusoidal deja de representar con fidelidad el movimiento.

## Dominio de validez cuantitativo

Un criterio práctico es considerar ángulos iniciales menores que aproximadamente 0.35 rad como un rango razonable para el modelo lineal en laboratorio escolar. En ese rango, el periodo cambia poco con la amplitud y la relación entre [[T]], [[omega0]] y [[f]] es muy estable. Si el periodo medido cambia sistemáticamente al aumentar [[theta0]], la aproximación deja de ser suficiente.

Criterio operativo explícito: usar el modelo lineal cuando [[theta0]] <= 0.35 rad y cuando la variación relativa del periodo cumpla deltaT_rel <= 0.05. Si [[theta0]] > 0.35 rad o deltaT_rel > 0.05, conviene pasar al modelo no lineal.

También sirve un criterio de sensibilidad: duplicar [[L]] no duplica [[T]], solo lo incrementa según una raíz cuadrada. Esa respuesta moderada es útil para detectar estimaciones absurdas antes de cerrar el ejercicio. Con [[g]] muy distinto del terrestre o con longitudes muy extremas, conviene revisar si el escenario experimental sigue siendo comparable.

## Señales de fallo del modelo

La primera señal de fallo es que el periodo observado depende de la amplitud. La segunda es que la fase de la oscilación parece razonable pero los tiempos de máximo no encajan con [[T]]. La tercera aparece cuando la forma temporal de [[theta]] deja de parecer casi sinusoidal. En ese punto, la ecuación no lineal y la energía [[E]] ofrecen una lectura más fiel.

Otra señal frecuente es la confusión de unidades. Un [[L]] puesto en centímetros o una frecuencia en Hz comparada con una pulsación en rad/s puede producir una predicción aparentemente limpia pero físicamente inconsistente.

## Modelo extendido o alternativo

Cuando conviene cambiar a modelo alternativo: si el cambio relativo de [[T]] supera 5% al comparar dos amplitudes distintas bajo el mismo montaje, el modelo lineal ya no es la mejor referencia. En ese caso, hay que pasar a la ecuación no lineal o usar energía para amplitudes finitas.

También puede añadirse amortiguamiento efectivo si el sistema real pierde energía de forma visible. El modelo extendido no reemplaza al ideal, sino que lo corrige cuando el entorno experimental lo exige. Así se conserva la claridad física sin sacrificar fidelidad.

## Comparación operativa

Comparar modelos no significa elegir siempre el más complejo. El mejor modelo es el que explica bien los datos con el menor número de supuestos falsos. El modelo ideal es preferible cuando la amplitud es pequeña y las mediciones son consistentes. El modelo alternativo es preferible cuando el comportamiento cambia con la amplitud o cuando la energía [[E]] deja de permanecer prácticamente constante.

Regla práctica: empieza con el modelo ideal, comprueba el rango de validez y cambia de modelo solo cuando exista una señal física clara. Esa secuencia evita sobreajustar y mejora la interpretación de resultados experimentales.