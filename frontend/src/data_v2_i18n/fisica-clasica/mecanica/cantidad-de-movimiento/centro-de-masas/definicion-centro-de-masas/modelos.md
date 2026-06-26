## Modelo ideal

El modelo ideal para la definición del centro de masas se basa en la abstracción de la **partícula puntual**. En este nivel de análisis, despreciamos la geometría interna, la rotación propia y cualquier deformación de los cuerpos, reduciéndolos a puntos matemáticos que poseen toda la inercia del objeto original. 

Este modelo simplificado conserva únicamente la masa y la posición de los constituyentes, ignorando factores como el volumen, la resistencia del aire o las fuerzas de cohesión interna. La ventaja fundamental es que permite resumir la distribución de materia de un sistema complejo en un único "punto representativo" que obedece las leyes de la dinámica traslacional de forma pura.

## Hipótesis

Las hipótesis innegociables para la aplicación de este modelo son:

- **Puntualidad:** El radio físico de cada cuerpo [[R]] es mucho menor que la distancia de separación entre ellos [[d]], permitiendo tratar cada masa como un punto sin extensión espacial. Si se viola, el objeto debe tratarse como cuerpo extendido.
- **Rigidez del sistema:** Las posiciones relativas de las masas no varían de forma incontrolada. Si se viola, el CM se desplaza internamente y se requiere dinámica de fluidos o sólidos deformables.
- **Independencia del medio:** El cálculo es puramente geométrico-inercial. Si hay interacción con un medio viscoso, el CM sigue siendo el mismo pero la dinámica se complica.
- **Consistencia de referencia:** Se asume que todas las posiciones se miden desde un mismo origen único. Si se viola, la suma de momentos de masa carece de sentido físico.

## Dominio de validez cuantitativo

Para que la aproximación de partículas puntuales sea aceptable en el cálculo del centro de masas, debe cumplirse la condición de escala basada en el orden de magnitud de la relación entre el radio y la distancia:

{{f:point_particle_validity}}

Si esta relación se supera, la distribución interna de masa empieza a tener un peso relevante. En términos de masa, el modelo es válido siempre que se cumpla que la suma de las masas sea igual a [[M]].

## Señales de fallo del modelo

Un estudiante puede detectar que el modelo de definición simple de CM está fallando si observa los siguientes síntomas físicos o numéricos:
- **Resultado extrínseco:** El [[xcm]] calculado cae fuera de la envoltura de las partículas (señal clara de error de signo).
- **Inestabilidad rotacional:** El sistema, al ser empujado en el [[xcm]] calculado, comienza a rotar, indicando que la distribución real de masa no es puntual.
- **Error de escala:** La dimensión de los objetos es comparable a la distancia entre ellos, lo que invalida el tratamiento de puntos.

## Modelo extendido o alternativo

Cuando el modelo de partículas puntuales no es suficiente, debemos evolucionar hacia el **Modelo de Distribución Continua de Masa**. En esta extensión, la masa se distribuye según una función de densidad. 

El sumatorio discreto se sustituye por una integral de volumen que relaciona la posición con el diferencial de masa.

**Cuando conviene pasar al modelo extendido:** La transicion al modelo continuo es obligatoria cuando trabajamos con sólidos rígidos donde la masa no está concentrada en puntos, o cuando el tamaño del objeto es relevante para la precisión del problema.

## Comparación operativa

| Característica | Modelo de Partículas Puntuales | Modelo de Distribución Continua |
| :--- | :--- | :--- |
| **Complejidad** | Baja (Álgebra simple) | Media-Alta (Cálculo integral) |
| **Precisión** | Alta para sistemas distantes | Máxima para objetos reales |
| **Requisito** | Posiciones $x_i$ discretas | Función de densidad $\rho$ |
| **Uso típico** | Astronomía, partículas subatómicas | Ingeniería civil, mecánica de sólidos |

El paso al modelo extendido permite resolver problemas de ingeniería donde la forma exacta del objeto determina su estabilidad y su respuesta ante fuerzas externas.
