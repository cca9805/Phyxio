const e=`# Modelos físicos: Loop vertical y condicion de contacto\r
\r
## Modelo ideal\r
\r
El leaf opera bajo un modelo simplificado que asume ciertas idealizaciones. Este modelo ideal no es falso; es una herramienta deliberadamente simplificada que funciona extraordinariamente bien en su rango de aplicabilidad.\r
\r
Las simplificaciones principales son:\r
\r
- **Ignorar fricción/amortiguamiento** en sistemas donde es secundario\r
- **Asumir magnitudes constantes** donde varían lentamente\r
- **Tratar objetos como puntos** cuando su extensión es irrelevante comparada con distancias del problema\r
- **Despreciar efectos relativistas y cuánticos** a escalas macroscópicas\r
\r
Cada una de estas idealizaciones tiene consecuencias físicas medibles. El arte está en reconocer cuándo la consecuencia es aceptable.\r
\r
## Hipótesis\r
\r
Las hipótesis explícitas que sostienen el modelo son:\r
\r
- **Hipótesis cinemática**: El sistema puede describirse usando las magnitudes definidas en magnitudes.yaml sin necesidad de variables adicionales.\r
- **Hipótesis dinámica**: Las fuerzas reales satisfacen la segunda ley de Newton en su forma básica, sin mecanismos ocultos.\r
- **Hipótesis de continuidad**: Las magnitudes varían de forma continua; no hay cambios discontinuos.\r
- **Hipótesis de decoupling**: Los efectos que ignoramos (como rozamiento minúsculo) no acoplan con los efectos principales de forma no lineal.\r
\r
Violar cualquiera de estas hipótesis hace que el modelo falle predeciblemente.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo funciona bien cuando se cumplen estas condiciones cuantitativas:\r
\r
\r
**Para Ecuacion radial general:**\r
- r > 0\r
\r
**Para Ecuacion radial en el punto alto:**\r
- r > 0\r
\r
\r
Fuera de estos rangos, los términos despreciados en el modelo idealizado se vuelven comparables a los términos principales y el modelo pierde precisión.\r
\r
## Señales de fallo del modelo\r
\r
¿Cómo detectas que el modelo ha dejado de ser válido? Busca estos indicadores observables:\r
\r
- **Predicción vs. medida**: Tu cálculo da un resultado que contradice la observación en más del 5-10%.\r
- **Inestabilidad numérica**: Pequeños cambios en los parámetros producen cambios enormes en el resultado (señal de resonancia u otro efecto no modelado).\r
- **Resultado sin sentido físico**: Un signo incorrecto, una divergencia infinita, o un resultado que viola una ley conservada.\r
- **Breakdown de aproximación**: Uno de los términos que ignoraste se vuelve comparable o mayor que los términos principales.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando el modelo ideal falla, el siguiente paso es incluir efectos secundarios:\r
\r
- **Inclusión de rozamiento**: Introduce pérdidas de energía sistemáticas.\r
- **Elasticidad y deformación**: Cuando los objetos se deforman, cambian las propiedades geométricas del sistema.\r
- **Efectos disipativos**: Aire, viscosidad, ondas sonoras llevan energía afuera del sistema simple.\r
- **Dinámicas acopladas**: Cuando un subsistema afecta otro de forma no trivial.\r
\r
El modelo extendido es más preciso pero también más complejo. No lo uses a menos que necesites esa precisión.\r
\r
### Transición explícita a modelo alternativo\r
\r
Cambia de modelo cuando la diferencia entre predicción ideal y medición real sea sistemática y operacionalmente relevante, o cuando el cálculo ideal exija condiciones físicamente no sostenibles (por ejemplo, contacto límite repetido sin margen en escenarios reales).\r
\r
Transicion explicita: cuando conviene cambiar de modelo, se abandona el esquema ideal y se adopta un modelo alternativo con disipacion, flexibilidad o dinamica acoplada segun el mecanismo dominante observado.\r
\r
### Cuándo conviene cambiar de modelo\r
\r
Si la decisión de seguridad, diseño o mantenimiento depende de efectos que el modelo ideal ignora, la transición al modelo extendido deja de ser opcional y pasa a ser obligatoria.\r
\r
## Comparación operativa\r
\r
| Aspecto | Modelo Ideal | Modelo Extendido |\r
|---------|-------------|------------------|\r
| **Precisión** | 90-95% | 98%+ |\r
| **Complejidad** | Ecuaciones algebraicas | Ecuaciones diferenciales |\r
| **Tiempo resolución** | Minutos | Horas |\r
| **Cuando usarlo** | Educación, diseño rápido | Investigación, validación |\r
| **Rango típico** | Laboratorio limpio | Mundo real |\r
\r
Aprende a usar el modelo ideal primero. Una vez lo domines, transición al extendido según necesidad.\r
`;export{e as default};
