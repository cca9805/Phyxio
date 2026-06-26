## Modelo ideal

El modelo estándar de entalpía asume que [[DeltaH]] es independiente de la temperatura en el rango de interés. Bajo esta hipótesis, [[DeltaH]] calculada a 298 K a partir de entalpías de formación estándar es válida a cualquier temperatura del problema. Este modelo es el utilizado en la práctica totalidad de los cursos de termodinámica introductoria y en los cálculos rápidos de ingeniería química.

El modelo opera directamente con la ley de Hess: la [[DeltaH]] total de un proceso es la suma algebraica de las [[DeltaH]] de las etapas, todas a la misma presión constante. No requiere conocer ni la trayectoria real ni los estados intermedios, solo los estados inicial y final.

## Hipótesis

El modelo de [[DeltaH]] constante descansa en las siguientes hipótesis:

- La presión permanece constante durante todo el proceso (condición isobárica estricta).
- Las capacidades caloríficas de reactivos y productos son iguales, de modo que su diferencia es cero y [[DeltaH]] no varía con [[T]].
- El sistema está en equilibrio termodinámico en los estados inicial y final.
- No hay cambios de fase no contemplados en el ciclo de Hess.
- Las entalpías de formación tabuladas corresponden exactamente a las especies y estados de agregación del problema.

## Dominio de validez cuantitativo

El modelo es preciso cuando el rango de temperatura no supera los 50–100 K respecto a 298 K y cuando las capacidades caloríficas de reactivos y productos son similares. Para reacciones con producción o consumo neto de moles de gas, la corrección del término de trabajo de expansión puede ser significativa, pero el modelo estándar la ignora en primera aproximación.

Cuando el rango de [[T]] supera los 200 K o cuando intervienen compuestos con capacidades caloríficas muy distintas (por ejemplo, metales versus gases diatómicos), el error del modelo puede superar el 5–10 % y se recomienda aplicar la corrección de Kirchhoff.

## Señales de fallo del modelo

El modelo de [[DeltaH]] constante falla o produce resultados poco fiables cuando:

- El proceso transcurre en un rango de temperatura superior a 200 K respecto al estado estándar de referencia.
- Alguna especie experimenta un cambio de fase (fusión, vaporización) dentro del rango de temperatura del proceso, lo que introduce una discontinuidad en [[DeltaH]] que el modelo plano no recoge.
- Las capacidades caloríficas de reactivos y productos difieren significativamente (diferencia mayor del 20 % entre grupos de productos y reactivos).
- El proceso ocurre a presiones muy distintas de 1 bar, donde los términos de trabajo de expansión ya no son despreciables para gases reales.

## Modelo extendido o alternativo

La ley de Kirchhoff extiende el modelo incluyendo la dependencia de [[DeltaH]] con [[T]] a través de la diferencia de capacidades caloríficas a presión constante entre productos y reactivos. La corrección se obtiene integrando esa diferencia entre la temperatura de referencia y la temperatura del proceso.

Cuando conviene cambiar de modelo: se debe pasar al modelo alternativo cuando la temperatura del proceso se aleja claramente de 298 K, cuando la reacción atraviesa cambios de fase o cuando el error permitido es menor que la corrección esperada por capacidad calorífica. En esos casos, tratar [[DeltaH]] como constante deja de ser una aproximación didáctica y pasa a ser una fuente real de sesgo.

Para gases reales a alta presión, el modelo debe incorporar términos de no idealidad en los factores de compresibilidad, modificando el término de trabajo de expansión. En reacciones de múltiples fases o sistemas heterogéneos, las entalpías de interfase y las enthalpías de mezcla deben añadirse al ciclo de Hess estándar.

## Comparación operativa

| Criterio | Modelo estándar (T constante) | Modelo extendido (Kirchhoff) |
|---|---|---|
| Rango de T válido | Hasta 100 K de variación | Cualquier rango con datos de Cp |
| Datos necesarios | Entalpías de formación estándar | Entalpías de formación + capacidades caloríficas vs T |
| Complejidad de cálculo | Suma algebraica directa | Integración numérica o analítica |
| Precisión típica | Suficiente para ingeniería y química introductoria | Necesaria en diseño industrial y procesos de alta temperatura |
| Aplicación principal | Ciclos de Hess, cálculo de calor de reacción | Reactores a alta temperatura, hornos industriales |
