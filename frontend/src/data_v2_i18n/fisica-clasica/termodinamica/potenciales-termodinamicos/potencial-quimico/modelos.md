## Modelo ideal

El modelo estándar del potencial químico trata la mezcla como **ideal**: la actividad [[a]] de cada componente es igual a su fracción molar (o a su presión parcial reducida en el caso de gases). Bajo esta hipótesis, [[mu]] se calcula directamente como [[mu_std]] más R·[[T]]·ln([[a]]), sin necesidad de coeficientes de corrección. Este modelo es el punto de partida de toda la termodinámica de equilibrio de fases y reacciones químicas en los cursos de nivel universitario.

El modelo ideal permite calcular presiones de vapor mediante la ley de Raoult, constantes de equilibrio químico mediante la ley de acción de masas, y coeficientes de distribución entre fases mediante la ley de Nernst, todos a partir de un único formalismo.

## Hipótesis

El modelo de mezcla ideal descansa en las siguientes hipótesis:

- Las interacciones entre moléculas distintas son iguales a las interacciones entre moléculas del mismo tipo (entalpía de mezcla nula).
- La actividad de cada componente es igual a su fracción molar (ley de Raoult para el solvente) o a su concentración relativa (ley de Henry para solutos diluidos).
- [[T]] y p son uniformes en todo el sistema; no hay gradientes internos.
- El sistema está en equilibrio termodinámico en los estados comparados.
- Los coeficientes de actividad son iguales a 1 para todos los componentes.

## Dominio de validez cuantitativo

El modelo de solución ideal es una buena aproximación para soluciones diluidas, con fracción molar del soluto x_i < 0.05, y para mezclas de compuestos químicamente similares (misma naturaleza apolar o polar). Para mezclas de compuestos de polaridad muy distinta, el coeficiente de actividad puede alejarse significativamente de 1 incluso a concentraciones moderadas.

En gases, el modelo de gas ideal para [[mu]] es válido hasta presiones de unos pocos bares; a presiones superiores o cerca del punto crítico, se necesitan ecuaciones de estado reales (van der Waals, Peng-Robinson) para calcular la fugacidad, que reemplaza a [[a]].

## Señales de fallo del modelo

El modelo ideal falla cuando:

- Se observan desviaciones positivas o negativas de la ley de Raoult en diagramas de ebullición; las mezclas azeotrópicas son la señal más clara.
- Las solubilidades medidas difieren significativamente de las predichas por el modelo de solución regular.
- Los coeficientes de actividad medidos experimentalmente (mediante métodos electroquímicos o de presión de vapor) se alejan de 1 en más del 10 %.
- El sistema involucra electrolitos, donde las interacciones iónicas de largo alcance hacen que los coeficientes de actividad sean muy inferiores a 1 incluso a concentraciones milimolares.

## Modelo extendido o alternativo

Para sistemas no ideales se introduce el **coeficiente de actividad** γ, que modifica la actividad multiplicándola: [[a]] efectiva es γ·[[a]] ideal. El modelo de Debye-Hückel proporciona valores teóricos de γ para electrolitos a baja concentración. Para sistemas orgánicos concentrados se emplean modelos de contribución de grupos (UNIFAC, NRTL) que calculan γ a partir de las interacciones entre fragmentos moleculares.

Cuando conviene cambiar de modelo: se debe pasar al modelo alternativo si el coeficiente de actividad medido se aleja de 1, si aparece un azeótropo, si la solución es concentrada o si el sistema contiene electrolitos. En esas situaciones, usar [[a]] ideal ya no representa la concentración efectiva y desplaza el equilibrio calculado.

En termodinámica de fluidos de alta presión, la fugacidad reemplaza a la actividad como argumento del logaritmo; la fugacidad se calcula a partir de ecuaciones de estado cúbicas o de perturbaciones.

## Comparación operativa

| Criterio | Modelo ideal | Modelo con coeficiente de actividad |
|---|---|---|
| Datos necesarios | Solo [[mu_std]] y fracción molar o presión parcial | [[mu_std]] más coeficientes de actividad γ |
| Complejidad de cálculo | Suma directa con logaritmo | Requiere modelos paramétricos o datos experimentales de γ |
| Validez típica | Soluciones diluidas, compuestos similares, gases a baja presión | Soluciones concentradas, electrolitos, gases a alta presión |
| Error esperado en γ | 0 % por definición en el modelo ideal | Puede superar el 50 % para mezclas altamente no ideales |
| Aplicación principal | Equilibrio de fases a nivel de introducción, constantes de equilibrio | Diseño industrial de separaciones, electroquímica, biofísica |
