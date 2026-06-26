# Modelos físicos: centro de masas en sistemas discretos

## Modelo ideal

El modelo ideal trata cada cuerpo como una masa puntual localizada en una coordenada conocida. La extensión real de cada objeto se desprecia porque importa menos que la separación entre posiciones. El sistema debe estar formado por un número finito de contribuciones [[m_i]] y [[x_i]], todas medidas sobre el mismo eje.

En este modelo, el centro de masas no es un punto elegido visualmente. Es una posición ponderada por masa: las contribuciones más pesadas arrastran el resultado hacia su coordenada. Por eso una pareja de masas en [[x_1]] y [[x_2]] solo tiene su centro en el punto medio cuando [[m_1]] y [[m_2]] son iguales.

## Hipótesis

- Cada masa puede representarse como puntual.
- Todas las posiciones usan el mismo origen y el mismo sentido positivo.
- La masa total [[M]] es positiva.
- No se omite ninguna contribución relevante.
- Las masas permanecen fijas durante el cálculo.

## Dominio de validez cuantitativo

El modelo es razonable cuando el tamaño de cada cuerpo es menor que el 10 % de la separación típica entre posiciones, o cuando su propio centro de masas interno ya se conoce y puede sustituirse por una masa puntual equivalente. Con masas positivas, [[xcm]] debe quedar entre la menor y la mayor coordenada del conjunto. Si [[x_1]] = 0 m y [[x_2]] = 2 m, un resultado fuera de ese intervalo exige revisar signos, origen o datos omitidos.

También conviene comprobar la masa total. Si la suma de las masas individuales da [[M]] = 12 kg, cualquier cálculo posterior debe usar esos 12 kg como denominador. Un cambio pequeño en una masa pequeña debe desplazar poco el resultado, mientras que un cambio en la masa dominante debe desplazarlo de forma visible.

## Señales de fallo del modelo

Una señal clara de fallo aparece si [[xcm]] queda fuera del rango geométrico sin masas negativas. También falla si al añadir una masa grande a la derecha el resultado se mueve hacia la izquierda, o si [[M]] no coincide con la suma de entradas. Otro síntoma es que pequeñas masas distribuidas en un objeto grande ya no puedan resumirse como puntos sin perder precisión.

El modelo tampoco es suficiente si las posiciones cambian durante el proceso y no se especifica el instante de cálculo. En ese caso, primero debe fijarse la configuración del sistema y después calcular el centro de masas para esa configuración concreta.

## Modelo extendido o alternativo

Cuando conviene cambiar a un modelo alternativo es cuando la masa deja de estar concentrada en pocos puntos. Si la distribución es una varilla, una lámina o un sólido, debe usarse el modelo de cuerpos extendidos con integrales. Si cada pieza tiene tamaño relevante, se puede modelar cada pieza por su propio centro de masas y luego construir un sistema discreto de piezas equivalentes.

Este paso intermedio es habitual en sistemas compuestos: una plataforma, una persona y una carga pueden resumirse en tres masas puntuales si se conocen sus centros propios. El cálculo sigue siendo discreto, pero cada punto representa una parte completa del sistema.

## Comparación operativa

| Situación | Modelo adecuado | Criterio |
|---|---|---|
| Dos bloques pequeños | Dos masas discretas | Usar [[m_1]], [[m_2]], [[x_1]], [[x_2]] |
| Varios módulos puntuales | Suma discreta general | Usar [[m_i]], [[x_i]] y [[M]] |
| Varilla continua | Cuerpo extendido | Pasar a densidad e integral |
| Pieza compuesta | Discreto por partes | Sustituir cada parte por su centro propio |
| Masa móvil durante el proceso | Modelo dinámico | Actualizar posiciones antes de promediar |

La regla práctica es usar el modelo discreto cuando puedes listar cada contribución dominante. Cuando el listado deja de representar la distribución real, cambia de modelo antes de calcular.
