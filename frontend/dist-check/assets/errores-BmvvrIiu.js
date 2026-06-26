const e=`# Errores en intensidad ondulatoria

## Errores conceptuales

### Error 1: Confundir disminución lineal con disminución cuadrática

**Por qué parece correcto**

La intuición lineal sugiere que si te alejas al doble de distancia, "la onda recorre el doble de espacio", por lo que la intensidad debería reducirse a la mitad. Esta extrapolación de experiencias cotidianas con movimiento uniforme parece lógica.

**Por qué es incorrecto**

La intensidad es potencia por unidad de área. La superficie esférica sobre la cual se distribuye la potencia crece con el cuadrado de la distancia. Al duplicar la distancia, el área se cuadruplica, no se duplica. La misma potencia se reparte sobre cuatro veces más superficie, reduciendo la intensidad a un cuarto, no a la mitad. Es geometría pura de tres dimensiones.

**Señal de detección**

El estudiante calcula que a 20 metros la intensidad es la mitad que a 10 metros, o que a 100 metros es un décimo de la intensidad a 10 metros (en lugar de un centésimo).

**Corrección conceptual**

La intensidad sigue la ley del inverso del cuadrado. Duplicar distancia reduce la intensidad a un cuarto; triplicar distancia la reduce a un noveno; multiplicar distancia por 10 la reduce a una centésima parte. Visualiza la superficie esférica creciendo como el cuadrado de la distancia.

**Mini-ejemplo de contraste**

Considera pintar una esfera. Si duplicas el radio, la superficie a pintar se cuadruplica. La misma cantidad de pintura (potencia) cubre cuatro veces menos densidad (intensidad) cuando la esfera es el doble de grande. La pintura no se "diluye" linealmente, sino cuadráticamente.

### Error 2: Pensar que dos fuentes idénticas duplican la intensidad en dB

**Por qué parece correcto**

Dos altavoces idénticos emitiendo simultáneamente parecen intuitivamente "el doble de intensos" que uno solo. Si uno produce 60 dB, dos deberían producir 120 dB.

**Por qué es incorrecto**

Las intensidades físicas se suman linealmente, pero los decibelios son una escala logarítmica. Si dos fuentes emiten la misma intensidad, la intensidad total se duplica y el nivel aumenta solo unos 3 dB. Dos fuentes de 60 dB dan 63 dB, no 120 dB.

**Señal de detección**

El estudiante suma directamente niveles en dB y concluye que dos fuentes de 60 dB producirían 120 dB, o espera que dos fuentes de 70 dB produzcan 140 dB.

**Corrección conceptual**

Convierte a intensidades físicas (W/m²), suma, y convierte de vuelta a dB. Duplicar la intensidad física (+3 dB) apenas se percibe como un aumento audible. Diez fuentes idénticas (+10 dB) se perciben como "el doble de sonoridad".

**Mini-ejemplo de contraste**

Si un susurro es 30 dB y una conversación es 60 dB, la conversación tiene 1000 veces más intensidad física (10³), no el doble. La escala logarítmica comprime enormes diferencias físicas en diferencias perceptivas más moderadas.

## Errores de modelo

### Error 3: Aplicar ley del inverso del cuadrado en campo cercano

**Por qué parece correcto**

La relación entre potencia, distancia e intensidad parece aplicable desde cualquier distancia, incluyendo distancias muy pequeñas. Si nos acercamos mucho a la fuente, la intensidad debería aumentar dramáticamente según el modelo.

**Por qué es incorrecto**

En el campo cercano (distancias comparables a la dimensión de la fuente), la fuente no se comporta como puntual. La geometría específica del emisor (tamaño, forma, directividad) domina la distribución de intensidad. La ley 1/r² solo es válida en el campo lejano donde la fuente "parece" puntual.

**Señal de detección**

El estudiante predice intensidades infinitas al acercarse a r → 0, o calcula intensidades en el campo cercano usando la fórmula de fuente puntual obteniendo valores muy diferentes de los medidos realmente.

**Corrección conceptual**

El modelo de fuente puntual requiere campo lejano: r >> dimensión_fuente. A distancias menores, la intensidad no diverge según 1/r²; depende de la geometría específica del emisor. Un altavoz de 30 cm no es puntual a 1 metro de distancia.

**Mini-ejemplo de contraste**

El Sol es una fuente extensa. En la superficie solar, la intensidad no es infinita según 1/r²; es la intensidad de radiación de un cuerpo negro a 5800 K. La ley del inverso del cuadrado solo aplica a partir de distancias donde el Sol "parece" puntual (muchos radios solares de distancia).

## Errores matemáticos

### Error 4: Olvidar el factor 4π del área esférica

**Por qué parece correcto**

Recordar fórmulas de área circulares (πr²) es más común que fórmulas esféricas. El estudiante puede confundir el área de un círculo con el área de una esfera.

**Por qué es incorrecto**

El área superficial de una esfera es 4πr², no πr². El factor 4π ≈ 12.57 es esencial para obtener resultados correctos. Omitirlo introduce un error de aproximadamente un orden de magnitud.

**Señal de detección**

Resultados de potencia o intensidad que son aproximadamente 4 veces o 1/4 de los valores esperados. Por ejemplo, calcular que un altavoz de 10 W produce intensidad de 0.08 W/m² a 10 m en lugar de 0.008 W/m².

**Corrección conceptual**

El área total de una esfera de radio r incluye todas las direcciones del espacio tridimensional. Piensa en un balón de fútbol: su superficie total es mucho mayor que el área de un círculo del mismo radio. La potencia se distribuye sobre toda esa superficie esférica.

**Mini-ejemplo de contraste**

Una esfera de radio 1 m tiene área 4π ≈ 12.57 m². Un círculo de radio 1 m tiene área π ≈ 3.14 m². Si distribuyeras 12.57 W sobre la esfera, la intensidad sería 1 W/m²; sobre el círculo sería 4 W/m². El factor 4 marca la diferencia entre 2D y 3D.

### Error 5: Confundir intensidad con presión al calcular dB

**Por qué parece correcto**

Tanto intensidad como presión son medidas de "fuerza" de una onda, y ambas se expresan en escalas logarítmicas. El estudiante puede asumir que los decibelios de nivel de presión sonora coinciden numéricamente con los de nivel de intensidad.

**Por qué es incorrecto**

Aunque numéricamente cercanos en muchos casos, el nivel de presión sonora (SPL) y el nivel de intensidad sonora (SIL) tienen definiciones distintas. SPL usa 20·log₁₀(p/p₀) mientras que SIL usa 10·log₁₀(I/I₀). El factor 2 diferencia proviene de que I ∝ p². En condiciones ideales coinciden, pero en campos reactivos o con reflexiones pueden diferir significativamente.

**Señal de detección**

El estudiante usa indistintamente SPL y SIL, o aplica factores de 20 donde debería usar 10 (o viceversa) al calcular niveles en dB desde valores físicos.

**Corrección conceptual**

Para conversiones precisas: intensidad usa 10·log₁₀(I/I₀), presión usa 20·log₁₀(p/p₀). La diferencia de factor 2 refleja la relación cuadrática entre intensidad y presión. En aplicaciones prácticas de acústica de campo libre, ambos niveles numéricamente coinciden.

**Mini-ejemplo de contraste**

Si la presión se duplica (factor 2), el nivel de presión aumenta 20·log₁₀(2) ≈ 6 dB. Como la intensidad es proporcional al cuadrado de la presión, la intensidad se cuadruplica (factor 4), y el nivel de intensidad aumenta 10·log₁₀(4) = 10·log₁₀(2²) = 20·log₁₀(2) ≈ 6 dB. ¡Ambos coinciden! Pero los factores aplicados (10 vs 20) difieren porque las relaciones físicas subyacentes son diferentes.

## Errores de interpretación

### Error 6: Interpretar silencio como intensidad cero absoluto

**Por qué parece correcto**

Cuando no oímos nada, parece lógico concluir que la intensidad sonora es exactamente cero. La ausencia de percepción sugiere ausencia de onda.

**Por qué es incorrecto**

El umbral de audición humana es I₀ = 10⁻¹² W/m² (0 dB), no cero absoluto. El silencio percibido en condiciones normales tiene intensidades cercanas a este umbral, pero no nulas. Además, el ruido de fondo ambiental (respiración, circulación sanguínea, microfluctuaciones atmosféricas) garantiza que la intensidad nunca sea exactamente cero.

**Señal de detección**

El estudiante usa intensidad nula en cálculos de dB, lo que produciría un logaritmo indefinido, o espera alcanzar intensidades negativas mediante cancelación perfecta.

**Corrección conceptual**

0 dB no es ausencia de sonido, es el umbral estándar de audición. Valores negativos en dB representan intensidades sub-umbral, no "anti-sonido". El silencio absoluto es inalcanzable físicamente; el mejor vacío acústico alcanza niveles por debajo del umbral.

**Mini-ejemplo de contraste**

En una cámara anecoica (sala sin reflexiones), el nivel de ruido puede alcanzar -10 dB o -20 dB. Esto no significa "sonido negativo", sino intensidad 10 o 100 veces menor que el umbral de audición humana. Aún así, moléculas de aire vibran y transportan energía, solo que por debajo de nuestro umbral perceptivo.

## Regla de autocontrol rápido

**Verificación dimensional obligatoria**: Antes de aceptar cualquier resultado de intensidad, verificar que las unidades sean W/m².

- Si obtienes W, tienes potencia, no intensidad. Divide por área (m²).
- Si obtienes W/m³, tienes densidad de energía, no intensidad. Multiplica por velocidad (m/s).
- Si obtienes Pa (pascales), tienes presión, no intensidad. Usa la relación física entre presión acústica e intensidad.

**Verificación de orden de magnitud**: La intensidad del umbral auditivo es 10⁻¹² W/m². Valores típicos:

- Susurro: 10⁻¹⁰ W/m² (20 dB)
- Conversación: 10⁻⁶ W/m² (60 dB)
- Tráfico: 10⁻⁴ W/m² (80 dB)
- Concierto: 10⁻² W/m² (100 dB)
- Dolor: 10¹ W/m² (130 dB)

Valores fuera de 10⁻¹⁵ a 10³ W/m² son físicamente improbables para ondas acústicas ordinarias.

**Verificación de ley del inverso del cuadrado**: Si distancia se multiplica por n, intensidad debe dividirse por n².

- r × 2 → I ÷ 4 (factor 0.25)
- r × 3 → I ÷ 9 (factor ≈0.11)
- r × 10 → I ÷ 100 (factor 0.01)

Verifica que tus resultados cumplan esta relación geométrica.

**Verificación logarítmica en dB**:

- +3 dB ≈ doble de intensidad física
- Un aumento de 10 dB equivale a 10 veces la intensidad física
- Un aumento de 20 dB equivale a 100 veces la intensidad física

Si tus cálculos de dB no siguen estas relaciones, revisa la aplicación de la fórmula logarítmica.
`;export{e as default};
