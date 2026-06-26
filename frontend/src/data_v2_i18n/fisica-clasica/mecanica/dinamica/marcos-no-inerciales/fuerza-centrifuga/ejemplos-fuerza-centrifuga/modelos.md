# Modelos físicos: Ejemplos fuerza centrifuga

## Modelo ideal

El leaf opera bajo un modelo simplificado que asume ciertas idealizaciones. Este modelo ideal no es falso; es una herramienta deliberadamente simplificada que funciona extraordinariamente bien en su rango de aplicabilidad.

Las simplificaciones principales son:

- **Ignorar fricción/amortiguamiento** en sistemas donde es secundario
- **Asumir magnitudes constantes** donde varían lentamente
- **Tratar objetos como puntos** cuando su extensión es irrelevante comparada con distancias del problema
- **Despreciar efectos relativistas y cuánticos** a escalas macroscópicas

Cada una de estas idealizaciones tiene consecuencias físicas medibles. El arte está en reconocer cuándo la consecuencia es aceptable.

## Hipótesis

Las hipótesis explícitas que sostienen el modelo son:

- **Hipótesis cinemática**: El sistema puede describirse usando las magnitudes definidas en magnitudes.yaml sin necesidad de variables adicionales.
- **Hipótesis dinámica**: Las fuerzas reales satisfacen la segunda ley de Newton en su forma básica, sin mecanismos ocultos.
- **Hipótesis de continuidad**: Las magnitudes varían de forma continua; no hay cambios discontinuos.
- **Hipótesis de decoupling**: Los efectos que ignoramos (como rozamiento minúsculo) no acoplan con los efectos principales de forma no lineal.

Violar cualquiera de estas hipótesis hace que el modelo falle predeciblemente.

## Dominio de validez cuantitativo

El modelo funciona bien cuando se cumplen estas condiciones cuantitativas:

- [[rpm]] entre 60 y 1200 en equipos de laboratorio educativo.
- [[r]] entre 0.05 m y 2.0 m para mantener geometria y medicion controlables.
- Diferencia relativa entre prediccion y medicion de [[F_cf]] menor o igual al 10 por ciento.
- Comparaciones por [[ratio]] validas cuando [[omega1]] > 0, [[omega2]] > 0 y la variacion de [[m]] y [[r]] es menor al 5 por ciento.


Fuera de estos rangos, los términos despreciados en el modelo idealizado se vuelven comparables a los términos principales y el modelo pierde precisión.

## Señales de fallo del modelo

¿Cómo detectas que el modelo ha dejado de ser válido? Busca estos indicadores observables:

- **Predicción vs. medida**: Tu cálculo da un resultado que contradice la observación en más del 5-10%.
- **Inestabilidad numérica**: Pequeños cambios en los parámetros producen cambios enormes en el resultado (señal de resonancia u otro efecto no modelado).
- **Resultado sin sentido físico**: Un signo incorrecto, una divergencia infinita, o un resultado que viola una ley conservada.
- **Breakdown de aproximación**: Uno de los términos que ignoraste se vuelve comparable o mayor que los términos principales.

## Modelo extendido o alternativo

Cuando el modelo ideal falla, el siguiente paso es incluir efectos secundarios:

- **Inclusión de rozamiento**: Introduce pérdidas de energía sistemáticas.
- **Elasticidad y deformación**: Cuando los objetos se deforman, cambian las propiedades geométricas del sistema.
- **Efectos disipativos**: Aire, viscosidad, ondas sonoras llevan energía afuera del sistema simple.
- **Dinámicas acopladas**: Cuando un subsistema afecta otro de forma no trivial.

El modelo extendido es más preciso pero también más complejo. No lo uses a menos que necesites esa precisión.

Transicion explicita: cuando la discrepancia repetida entre prediccion y medicion supera aproximadamente 10 por ciento, o cuando aparecen senales de vibracion y deriva geometrica, conviene cambiar del modelo ideal al modelo extendido.

## Comparación operativa

| Aspecto | Modelo Ideal | Modelo Extendido |
|---------|-------------|------------------|
| **Precisión** | 90-95% | 98%+ |
| **Complejidad** | Ecuaciones algebraicas | Ecuaciones diferenciales |
| **Tiempo resolución** | Minutos | Horas |
| **Cuando usarlo** | Educación, diseño rápido | Investigación, validación |
| **Rango típico** | Laboratorio limpio | Mundo real |

Aprende a usar el modelo ideal primero. Una vez lo domines, transición al extendido según necesidad.
